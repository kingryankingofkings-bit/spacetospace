import React, { useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { AutoCollider, AutoColliderProps } from './AutoCollider';
import * as THREE from 'three';

export interface PhysicsModelProps extends Omit<AutoColliderProps, 'object' | 'basePosition' | 'baseRotation' | 'baseScale'> {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  colorTint?: string;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export const PhysicsModel: React.FC<PhysicsModelProps> = ({ 
  url, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1, 
  colorTint,
  castShadow = true,
  receiveShadow = true,
  ...colliderProps 
}) => {
  const { scene } = useGLTF(url);
  
  const clone = useMemo(() => scene.clone(), [scene]);
  
  useEffect(() => {
    const clonedMaterials: THREE.Material[] = [];
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
         const mesh = child as THREE.Mesh;
         mesh.castShadow = castShadow;
         mesh.receiveShadow = receiveShadow;
         if (colorTint) {
            if (Array.isArray(mesh.material)) {
               mesh.material = mesh.material.map(m => {
                  const cm = m.clone();
                  clonedMaterials.push(cm);
                  if ('color' in cm) (cm as any).color.set(colorTint);
                  return cm;
               });
            } else if (mesh.material) {
               const cm = mesh.material.clone();
               clonedMaterials.push(cm);
               if ('color' in cm) (cm as any).color.set(colorTint);
               mesh.material = cm;
            }
         }
      }
    });
    return () => {
      clonedMaterials.forEach(m => m.dispose());
    };
  }, [clone, colorTint, castShadow, receiveShadow]);

  const scaleArray: [number, number, number] = typeof scale === 'number' ? [scale, scale, scale] : scale;

  return (
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scaleArray} />
      <AutoCollider 
        object={clone} 
        basePosition={position} 
        baseRotation={rotation} 
        baseScale={scaleArray} 
        {...colliderProps} 
      />
    </group>
  );
};
