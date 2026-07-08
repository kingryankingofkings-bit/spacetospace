import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface HitEffectProps {
  position: [number, number, number];
  color?: string;
  count?: number;
  duration?: number;
  onComplete?: () => void;
}

/**
 * HitEffect
 * 
 * Spawns a burst of particles at the impact position.
 * Uses a Points system with velocity-based physics integration (gravity + friction)
 * to simulate a spark/blood burst.
 */
export const HitEffect: React.FC<HitEffectProps> = ({ 
  position, 
  color = '#ffbb00', 
  count = 20,
  duration = 0.5,
  onComplete
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const startTime = useRef(performance.now());
  
  // Pre-calculate random initial velocities and positions
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Start slightly randomized around the origin
      pos[i * 3] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      
      // Explosion velocity outwards and upwards
      vel[i * 3] = (Math.random() - 0.5) * 10;
      vel[i * 3 + 1] = (Math.random() * 5) + 2; // Bias upwards
      vel[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    
    const elapsed = (performance.now() - startTime.current) / 1000;
    
    if (elapsed > duration) {
      if (onComplete) onComplete();
      return;
    }

    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = positionsAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Apply gravity
      velocities[i * 3 + 1] -= 20 * delta; 
      
      // Apply friction
      velocities[i * 3] *= 0.95;
      velocities[i * 3 + 2] *= 0.95;

      // Update positions
      posArray[i * 3] += velocities[i * 3] * delta;
      posArray[i * 3 + 1] += velocities[i * 3 + 1] * delta;
      posArray[i * 3 + 2] += velocities[i * 3 + 2] * delta;
    }
    
    positionsAttr.needsUpdate = true;
    
    // Fade out
    const material = pointsRef.current.material as THREE.PointsMaterial;
    material.opacity = 1 - (elapsed / duration);
  });

  return (
    <points ref={pointsRef} position={position} geometry={geometry}>
      <pointsMaterial 
        size={0.1} 
        color={color} 
        transparent 
        opacity={1} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
