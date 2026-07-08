import React, { createContext, useContext, useState, useRef, useMemo, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OptimizedModel } from '../../components/WorldRenderer';

// ------------------------------------------------------------------
// CONFIG & TYPES
// ------------------------------------------------------------------
export type PetState = 'idle' | 'following' | 'attacking' | 'returning';

export interface PetConfig {
  id: string;
  ownerId: string;
  type: string;
  followDistance: number;
  attackRange: number;
  speed: number;
  turnSpeed: number;
  damage: number;
  modelUrl?: string; // Optional path for GLTF loading
}

export interface PetRuntimeData {
  config: PetConfig;
  state: PetState;
  currentTargetId: string | null;
}

interface PetContextType {
  pets: Map<string, PetRuntimeData>;
  registerPet: (config: PetConfig) => void;
  unregisterPet: (id: string) => void;
  setPetTarget: (petId: string, targetId: string | null) => void;
  setPetState: (petId: string, state: PetState) => void;
}

// ------------------------------------------------------------------
// CONTEXT & PROVIDER
// ------------------------------------------------------------------
const PetContext = createContext<PetContextType | null>(null);

export const PetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pets, setPets] = useState<Map<string, PetRuntimeData>>(new Map());

  const registerPet = (config: PetConfig) => {
    setPets((prev) => {
      const next = new Map(prev);
      next.set(config.id, {
        config,
        state: 'following',
        currentTargetId: null,
      });
      return next;
    });
  };

  const unregisterPet = (id: string) => {
    setPets((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  };

  const setPetTarget = (petId: string, targetId: string | null) => {
    setPets((prev) => {
      const next = new Map(prev);
      const pet = next.get(petId);
      if (pet) {
        next.set(petId, { ...pet, currentTargetId: targetId });
      }
      return next;
    });
  };

  const setPetState = (petId: string, state: PetState) => {
    setPets((prev) => {
      const next = new Map(prev);
      const pet = next.get(petId);
      if (pet && pet.state !== state) {
        next.set(petId, { ...pet, state });
      }
      return next;
    });
  };

  const value = useMemo(() => ({
    pets,
    registerPet,
    unregisterPet,
    setPetTarget,
    setPetState
  }), [pets]);

  return (
    <PetContext.Provider value={value}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetSystem = () => {
  const context = useContext(PetContext);
  if (!context) throw new Error('usePetSystem must be used within a PetProvider');
  return context;
};

// ------------------------------------------------------------------
// PET RENDERING & AI COMPONENT
// ------------------------------------------------------------------

interface PetProps {
  petId: string;
  ownerRef: React.RefObject<THREE.Object3D>;
  getTargetPosition?: (targetId: string) => THREE.Vector3 | null;
  onAttackTarget?: (targetId: string, damage: number) => void;
}

export const Pet: React.FC<PetProps> = ({ petId, ownerRef, getTargetPosition, onAttackTarget }) => {
  const { pets, setPetState } = usePetSystem();
  const petData = pets.get(petId);
  
  const meshRef = useRef<THREE.Group>(null);
  const velocity = useRef(new THREE.Vector3());
  const tempVec = useRef(new THREE.Vector3());
  const lastAttackTime = useRef<number>(0);

  useFrame((state, delta) => {
    if (!petData || !meshRef.current || !ownerRef.current) return;

    const petPos = meshRef.current.position;
    const { followDistance, attackRange, speed, turnSpeed, damage } = petData.config;
    const currentTargetId = petData.currentTargetId;

    let targetPos: THREE.Vector3 | null = null;
    let targetDistanceThreshold = followDistance;
    let desiredState: PetState = 'following';

    // 1. Determine Target & Desired State
    if (currentTargetId && getTargetPosition) {
      targetPos = getTargetPosition(currentTargetId);
      if (targetPos) {
        const distToOwner = petPos.distanceTo(ownerRef.current.position);
        
        // Tether mechanic: if pet gets too far from owner while attacking, abandon target
        if (distToOwner > followDistance * 3) {
          targetPos = ownerRef.current.position;
          desiredState = 'returning';
          targetDistanceThreshold = followDistance;
        } else {
          targetDistanceThreshold = attackRange;
          desiredState = 'attacking';
        }
      } else {
        // Target missing, fall back to owner
        targetPos = ownerRef.current.position;
      }
    } else {
      // Follow Owner
      targetPos = ownerRef.current.position;
    }

    // 2. Movement & AI execution
    if (targetPos) {
      const dist = petPos.distanceTo(targetPos);
      
      if (dist > targetDistanceThreshold) {
        // Move towards target
        tempVec.current.copy(targetPos).sub(petPos).normalize();
        
        // Smooth acceleration
        velocity.current.lerp(tempVec.current.multiplyScalar(speed), delta * 5);
        petPos.addScaledVector(velocity.current, delta);
        
        // Face movement direction smoothly (Y-axis only)
        const targetQuaternion = new THREE.Quaternion();
        const lookPos = new THREE.Vector3().copy(petPos).add(velocity.current);
        lookPos.y = petPos.y; // keep it upright
        const lookMat = new THREE.Matrix4().lookAt(petPos, lookPos, new THREE.Vector3(0, 1, 0));
        targetQuaternion.setFromRotationMatrix(lookMat);
        meshRef.current.quaternion.slerp(targetQuaternion, delta * turnSpeed);
        
        if (desiredState === 'attacking' && dist > attackRange) {
          desiredState = 'following'; // Chasing target
        }
      } else {
        // Reached target destination
        velocity.current.lerp(new THREE.Vector3(0, 0, 0), delta * 10);
        
        if (desiredState === 'attacking') {
          // Execute Attack
          const now = state.clock.elapsedTime;
          if (now - lastAttackTime.current > 1.0) { // 1 sec cooldown
            lastAttackTime.current = now;
            if (onAttackTarget && currentTargetId) {
              onAttackTarget(currentTargetId, damage);
            }
          }
          // Face the target
          const targetQuaternion = new THREE.Quaternion();
          const lookPos = new THREE.Vector3().copy(targetPos);
          lookPos.y = petPos.y;
          const lookMat = new THREE.Matrix4().lookAt(petPos, lookPos, new THREE.Vector3(0, 1, 0));
          targetQuaternion.setFromRotationMatrix(lookMat);
          meshRef.current.quaternion.slerp(targetQuaternion, delta * turnSpeed);
        } else {
          desiredState = 'idle';
          
          // Gently match owner's rotation
          meshRef.current.quaternion.slerp(ownerRef.current.quaternion, delta * (turnSpeed / 2));
        }
      }
    }

    // 3. Commit state changes
    if (petData.state !== desiredState) {
      setPetState(petId, desiredState);
    }
  });

  if (!petData) return null;

  return (
    <group ref={meshRef}>
      <group position={[0, -0.3, 0]}>
        <OptimizedModel url={petData.config.modelUrl || "/models/13_companion_pet_summon_glb_pack_v1/glb_assets/01_wolf_pup_companion.glb"} scaleToDimension={1.0} />
      </group>
    </group>
  );
};
