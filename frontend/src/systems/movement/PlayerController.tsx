import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';
import { Vector3, MathUtils } from 'three';
import { useKeyboardControls } from '@react-three/drei';

// Physics & Movement Constants
const MOVEMENT_SPEED = 7;
const RUN_MULTIPLIER = 1.6;
const JUMP_FORCE = 8;
const MAX_SLOPE_ANGLE = Math.PI / 4; // 45 degrees

export interface PlayerControllerProps {
  initialPosition?: [number, number, number];
  radius?: number;
  height?: number;
  mass?: number;
  onPositionUpdate?: (
    position: [number, number, number],
    velocity: [number, number, number],
    isGrounded: boolean
  ) => void;
  children?: React.ReactNode;
}

/**
 * Authoritative Movement and Player Physics Controller
 * 
 * Uses @react-three/cannon for physics-based movement, handling:
 * - Gravity and collisions (Cylinder collider)
 * - Slope detection and surface normal alignment
 * - Velocity-based movement (WASD)
 * - Jumping and grounded state tracking
 */
export function PlayerController({ 
  initialPosition = [0, 5, 0], 
  radius = 0.5,
  height = 1.5,
  mass = 75,
  onPositionUpdate,
  children
}: PlayerControllerProps) {
  // 1. Cylinder physics body for the player
  const [ref, api] = useCylinder(() => ({
    mass,
    type: 'Dynamic',
    position: initialPosition,
    args: [radius, radius, height, 16],
    fixedRotation: true, // Prevents the player from tipping over
    material: { friction: 0.05, restitution: 0 }, // Low friction to prevent sticking to walls
    onCollide: (e: any) => handleCollision(e),
  }));

  const { camera } = useThree();
  const [, getKeys] = useKeyboardControls();

  // 2. State refs for physics updates (avoiding React state to prevent re-renders)
  const velocity = useRef<[number, number, number]>([0, 0, 0]);
  const position = useRef<[number, number, number]>(initialPosition);
  const isGrounded = useRef(false);
  const contactNormal = useRef(new Vector3(0, 1, 0));
  
  // 3. Pre-allocate vectors to avoid GC overhead in useFrame
  const direction = useRef(new Vector3());
  const frontVector = useRef(new Vector3());
  const sideVector = useRef(new Vector3());
  const upVector = new Vector3(0, 1, 0);

  // Subscribe to Cannon physics updates
  useEffect(() => {
    const unsubVel = api.velocity.subscribe((v: [number, number, number]) => (velocity.current = v));
    const unsubPos = api.position.subscribe((p: [number, number, number]) => {
      position.current = p;
      if (onPositionUpdate) {
        onPositionUpdate(p, velocity.current, isGrounded.current);
      }
    });
    return () => {
      unsubVel();
      unsubPos();
    };
  }, [api, onPositionUpdate]);

  // Handle slope detection and grounded state
  const handleCollision = (e: any) => {
    const { contact } = e;
    if (!contact || !contact.ni) return;

    // Contact normal points between bodies. Parse it to Vector3.
    const normal = new Vector3(contact.ni[0], contact.ni[1], contact.ni[2]);
    
    // Ensure normal points upwards relative to the player
    if (normal.y < 0) normal.negate();

    const dot = normal.dot(upVector);
    
    // If the surface angle is less than our max slope angle, we are grounded
    if (dot > Math.cos(MAX_SLOPE_ANGLE)) {
      isGrounded.current = true;
      contactNormal.current.copy(normal);
    }
  };

  useFrame(() => {
    const keys = getKeys() as any;
    // Support typical keyboard mappings based on Drei's KeyboardControls
    const forward = keys.forward || keys.KeyW;
    const backward = keys.backward || keys.KeyS;
    const left = keys.left || keys.KeyA;
    const right = keys.right || keys.KeyD;
    const jump = keys.jump || keys.Space;
    const run = keys.run || keys.ShiftLeft;

    const currentSpeed = run ? MOVEMENT_SPEED * RUN_MULTIPLIER : MOVEMENT_SPEED;

    // Calculate movement vectors based on input
    frontVector.current.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    sideVector.current.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);

    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(currentSpeed);

    // Align movement with camera orientation (yaw only)
    const cameraYaw = Math.atan2(
      camera.matrix.elements[8],
      camera.matrix.elements[10]
    );
    direction.current.applyAxisAngle(upVector, cameraYaw);

    // Slope Handling: project movement onto the slope plane if grounded
    if (isGrounded.current) {
      direction.current.projectOnPlane(contactNormal.current).normalize().multiplyScalar(currentSpeed);
    }

    // Apply calculated velocity (preserve vertical velocity for gravity)
    const moving = forward || backward || left || right;
    if (moving) {
      api.velocity.set(direction.current.x, velocity.current[1], direction.current.z);
    } else {
      // Smooth deceleration / friction
      api.velocity.set(
        MathUtils.lerp(velocity.current[0], 0, 0.2),
        velocity.current[1],
        MathUtils.lerp(velocity.current[2], 0, 0.2)
      );
    }

    // Jump logic
    if (jump && isGrounded.current) {
      api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2]);
      isGrounded.current = false; // Immediately prevent double jumps
    }

    // Grounded State Fallback (if we start falling fast without collision updates)
    if (velocity.current[1] < -2.0) {
      isGrounded.current = false;
    }
  });

  return (
    <group ref={ref as any}>
      {/* Visual representation (hidden in production or replaced by a character mesh) */}
      {!children && (
        <mesh castShadow>
          <capsuleGeometry args={[radius, height, 4, 16]} />
          <meshStandardMaterial color="hotpink" wireframe={true} visible={false} />
        </mesh>
      )}
      {children}
    </group>
  );
}
