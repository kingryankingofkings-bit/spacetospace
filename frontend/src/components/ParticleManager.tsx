import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { create } from 'zustand';

// Zustand store for global particle events to avoid React re-renders on every emit
interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  life: number;
  maxLife: number;
}

interface ParticleState {
  particles: Particle[];
  emit: (position: [number,number,number], velocity: [number,number,number], count: number, color?: string, size?: number, life?: number) => void;
}

import { ObjectPool } from '../utils/ObjectPool';

export const useParticleStore = create<ParticleState>((set) => ({
  particles: [],
  emit: (pos, vel, count, color = '#ffffff', size = 0.5, life = 1.0) => {
    const newParticles: Particle[] = [];
    const baseColor = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        position: ObjectPool.getVec3(pos[0], pos[1], pos[2]),
        velocity: ObjectPool.getVec3(
          vel[0] + (Math.random() - 0.5) * 5,
          vel[1] + (Math.random() - 0.5) * 5,
          vel[2] + (Math.random() - 0.5) * 5
        ),
        color: baseColor,
        size: size * (0.5 + Math.random() * 0.5),
        life: life * (0.8 + Math.random() * 0.4),
        maxLife: life
      });
    }
    
    const { particles } = get();
    particles.push(...newParticles);
  }
}));

const tempMatrix = new THREE.Matrix4();
const tempPosition = new THREE.Vector3();
const tempScale = new THREE.Vector3();
const tempColor = new THREE.Color();

export const ParticleManager: React.FC<{ maxParticles?: number }> = ({ maxParticles = 1000 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  // We use useFrame to manually update the InstancedMesh matrices and colors from the store
  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    
    const particles = useParticleStore.getState().particles;
    
    let aliveCount = 0;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= delta;
      
      if (p.life <= 0) {
        // Fast remove and release pool resources
        ObjectPool.releaseVec3(p.position);
        ObjectPool.releaseVec3(p.velocity);
        
        particles[i] = particles[particles.length - 1];
        particles.pop();
        continue;
      }
      
      // Integrate physics
      p.velocity.y -= 9.8 * delta; // Gravity
      p.position.addScaledVector(p.velocity, delta);
      
      // Update instance matrix
      const s = p.size * (p.life / p.maxLife); // Shrink over time
      tempPosition.copy(p.position);
      tempScale.set(s, s, s);
      tempMatrix.compose(tempPosition, new THREE.Quaternion(), tempScale);
      
      meshRef.current.setMatrixAt(aliveCount, tempMatrix);
      
      // Update color (fade out)
      tempColor.copy(p.color);
      meshRef.current.setColorAt(aliveCount, tempColor);
      
      aliveCount++;
      if (aliveCount >= maxParticles) break;
    }
    
    meshRef.current.count = aliveCount;
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, maxParticles]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        emissive={"#ffffff"}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </instancedMesh>
  );
};
