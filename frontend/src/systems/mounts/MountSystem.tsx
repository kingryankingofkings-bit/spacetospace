import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';
import { OptimizedModel } from '../../components/WorldRenderer';

// ------------------------------------------------------------------
// CONFIG & TYPES
// ------------------------------------------------------------------
export type MountType = 'animal' | 'vehicle';

export interface MountConfig {
  id: string;
  type: MountType;
  maxSpeed: number;
  acceleration: number;
  turnSpeed: number;
  jumpForce?: number;
  seatOffset: [number, number, number];
}

export interface MountState {
  isMounted: boolean;
  activeMountId: string | null;
  activeMountRef: React.RefObject<THREE.Object3D> | null;
  mountConfig: MountConfig | null;
}

interface MountContextType {
  mountState: MountState;
  enterMount: (mountId: string, config: MountConfig, mountRef: React.RefObject<THREE.Object3D>) => void;
  exitMount: () => void;
}

// ------------------------------------------------------------------
// CONTEXT & PROVIDER
// ------------------------------------------------------------------
const MountContext = createContext<MountContextType | null>(null);

export const MountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mountState, setMountState] = useState<MountState>({
    isMounted: false,
    activeMountId: null,
    activeMountRef: null,
    mountConfig: null,
  });

  const enterMount = (mountId: string, config: MountConfig, mountRef: React.RefObject<THREE.Object3D>) => {
    setMountState({
      isMounted: true,
      activeMountId: mountId,
      activeMountRef: mountRef,
      mountConfig: config,
    });
  };

  const exitMount = () => {
    setMountState({
      isMounted: false,
      activeMountId: null,
      activeMountRef: null,
      mountConfig: null,
    });
  };

  return (
    <MountContext.Provider value={{ mountState, enterMount, exitMount }}>
      {children}
    </MountContext.Provider>
  );
};

export const useMountSystem = () => {
  const context = useContext(MountContext);
  if (!context) throw new Error('useMountSystem must be used within a MountProvider');
  return context;
};

// ------------------------------------------------------------------
// PLAYER SYNC HOOK (To be dropped into LocalPlayer when integrating)
// ------------------------------------------------------------------
export const usePlayerMountSync = (
  playerPhysicsApi: any,
  playerMeshRef: React.MutableRefObject<THREE.Object3D | null>,
  originalMass: number = 1
) => {
  const { mountState, exitMount } = useMountSystem();

  useEffect(() => {
    if (mountState.isMounted && mountState.activeMountRef) {
      // Disable player physics so it doesn't collide or move independently
      playerPhysicsApi.mass.set(0);
      playerPhysicsApi.sleep();
      if (playerPhysicsApi.collisionFilterGroup) {
        playerPhysicsApi.collisionFilterGroup.set(0);
        playerPhysicsApi.collisionFilterMask.set(0);
      }
    } else {
      // Re-enable player physics
      playerPhysicsApi.mass.set(originalMass);
      playerPhysicsApi.wake();
      if (playerPhysicsApi.collisionFilterGroup) {
        // Assume default groups are 1, adjust based on actual physics layers
        playerPhysicsApi.collisionFilterGroup.set(1);
        playerPhysicsApi.collisionFilterMask.set(1);
      }
      playerPhysicsApi.velocity.set(0, 0, 0);
    }
  }, [mountState.isMounted, mountState.activeMountRef, playerPhysicsApi, originalMass]);

  useFrame(() => {
    if (mountState.isMounted && mountState.activeMountRef?.current && playerMeshRef.current) {
      const mountObj = mountState.activeMountRef.current;
      const playerObj = playerMeshRef.current;
      const offset = mountState.mountConfig?.seatOffset || [0, 1, 0];

      // Calculate global position based on mount's matrix and seat offset
      const seatPos = new THREE.Vector3(...offset);
      seatPos.applyMatrix4(mountObj.matrixWorld);
      
      // Snap player object directly to the seat position (physics API controls position in cannon)
      playerPhysicsApi.position.set(seatPos.x, seatPos.y, seatPos.z);
      
      // Sync rotation (e.g. Y rotation for character facing same dir as mount)
      const mountRot = new THREE.Euler().setFromQuaternion(mountObj.quaternion);
      playerObj.rotation.y = mountRot.y;
    }
  });

  return { isMounted: mountState.isMounted, exitMount };
};

// ------------------------------------------------------------------
// ANIMAL MOUNT (Running/Velocity based)
// ------------------------------------------------------------------
interface MountProps {
  id: string;
  config: MountConfig;
  initialPosition?: [number, number, number];
  children?: ReactNode;
}

export const AnimalMount: React.FC<MountProps> = ({ 
  id, 
  config, 
  initialPosition = [0, 0, 0], 
  children 
}) => {
  const { mountState, enterMount } = useMountSystem();
  const isPossessed = mountState.activeMountId === id;
  const meshRef = useRef<THREE.Group>(null!);

  const [physicsRef, api] = useBox(() => ({
    mass: 10,
    type: 'Dynamic',
    position: initialPosition,
    fixedRotation: true,
    args: [1.5, 2, 3] // Approximate animal bounds
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v));
    return unsubscribe;
  }, [api]);

  const [, get] = useKeyboardControls();

  useFrame(() => {
    // Keep visual group synced with physics body for MountSystem seat tracking
    if (physicsRef.current && meshRef.current) {
        meshRef.current.position.copy(physicsRef.current.position as any);
        meshRef.current.quaternion.copy(physicsRef.current.quaternion as any);
    }

    if (!isPossessed) return;

    const { forward, backward, left, right, jump } = get() as any;
    
    let vx = 0;
    let vz = 0;
    const speed = config.maxSpeed;

    if (forward) vz -= speed;
    if (backward) vz += speed;
    if (left) vx -= speed;
    if (right) vx += speed;

    api.velocity.set(vx, velocity.current[1], vz);
    
    if (jump && config.jumpForce && Math.abs(velocity.current[1]) < 0.1) {
      api.velocity.set(vx, config.jumpForce, vz);
    }

    if (vx !== 0 || vz !== 0) {
      const angle = Math.atan2(vx, vz);
      physicsRef.current.rotation.y = angle;
    }
  });

  return (
    <group>
      <mesh ref={physicsRef as any} onClick={() => !isPossessed && enterMount(id, config, meshRef)}>
        {/* Invisible or debug physics box */}
        <boxGeometry args={[1.5, 2, 3]} />
        <meshStandardMaterial color={isPossessed ? "green" : "saddlebrown"} visible={!children} />
      </mesh>
      {/* Visual Model Container */}
      <group ref={meshRef}>
        {children}
      </group>
    </group>
  );
};

// ------------------------------------------------------------------
// VEHICLE MOUNT (Forces/Torque based)
// ------------------------------------------------------------------
export const VehicleMount: React.FC<MountProps> = ({ 
  id, 
  config, 
  initialPosition = [0, 0, 0], 
  children 
}) => {
  const { mountState, enterMount } = useMountSystem();
  const isPossessed = mountState.activeMountId === id;
  const meshRef = useRef<THREE.Group>(null!);

  const [physicsRef, api] = useBox(() => ({
    mass: 500,
    type: 'Dynamic',
    position: initialPosition,
    args: [2, 1, 4], // Approximate vehicle bounds
    angularDamping: 0.9,
    linearDamping: 0.1
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v));
    return unsubscribe;
  }, [api]);

  const [, get] = useKeyboardControls();

  useFrame(() => {
    if (physicsRef.current && meshRef.current) {
        meshRef.current.position.copy(physicsRef.current.position as any);
        meshRef.current.quaternion.copy(physicsRef.current.quaternion as any);
    }

    if (!isPossessed) return;

    const { forward, backward, left, right } = get() as any;
    
    // Abstracting steering and acceleration using physics forces
    if (forward) {
        const localForward = new THREE.Vector3(0, 0, -1).applyQuaternion(physicsRef.current.quaternion as any);
        api.applyForce([localForward.x * config.acceleration, 0, localForward.z * config.acceleration], [0,0,0]);
    }
    if (backward) {
        const localForward = new THREE.Vector3(0, 0, 1).applyQuaternion(physicsRef.current.quaternion as any);
        api.applyForce([localForward.x * config.acceleration, 0, localForward.z * config.acceleration], [0,0,0]);
    }
    
    if (left) api.applyTorque([0, config.turnSpeed, 0]);
    if (right) api.applyTorque([0, -config.turnSpeed, 0]);

    // Apply speed clamping
    const speed = new THREE.Vector3(...velocity.current).length();
    if (speed > config.maxSpeed) {
       const clamped = new THREE.Vector3(...velocity.current).normalize().multiplyScalar(config.maxSpeed);
       api.velocity.set(clamped.x, velocity.current[1], clamped.z);
    }
  });

  return (
    <group>
      {/* Physics & Interaction Hitbox */}
      <mesh ref={physicsRef as any} onClick={() => !isPossessed && enterMount(id, config, meshRef)}>
        <boxGeometry args={[1.5, 2, 3]} />
        <meshStandardMaterial color={isPossessed ? "cyan" : "gray"} visible={false} />
      </mesh>
      
      {/* Visual Model Container */}
      <group ref={meshRef}>
        <group position={[0, -1, 0]}>
          <OptimizedModel url={config.type === 'animal' ? "/models/tiered_low_poly_monster_model_pack_v1/quadruped_tier_1_razorhound.glb" : "/models/05_mounts_vehicles_travel_glb_pack_v1/glb_assets/hover_sled.glb"} scaleToDimension={3.5} />
        </group>
        {children}
      </group>
    </group>
  );
};
