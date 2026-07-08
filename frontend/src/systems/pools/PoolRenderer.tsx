import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Instances, Instance, useGLTF } from '@react-three/drei';
import { usePoolStore } from '../../store/poolStore';
import * as THREE from 'three';

interface PoolRendererProps {
  poolId: string;
  modelUrl: string;
  material?: THREE.Material;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export const PoolRenderer: React.FC<PoolRendererProps> = ({ 
  poolId, 
  modelUrl, 
  material,
  castShadow = true,
  receiveShadow = true
}) => {
  const { scene } = useGLTF(modelUrl);
  const registerPool = usePoolStore(s => s.registerPool);
  const instances = usePoolStore(s => s.pools[poolId]?.instances || {});
  
  useEffect(() => {
    registerPool(poolId);
  }, [poolId, registerPool]);

  // Extract geometry and material from the loaded GLTF
  const { geometry, defaultMaterial } = useMemo(() => {
    let g: THREE.BufferGeometry | null = null;
    let m: THREE.Material | null = null;
    
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && !g) {
        g = (child as THREE.Mesh).geometry;
        m = (child as THREE.Mesh).material as THREE.Material;
      }
    });
    
    return { geometry: g, defaultMaterial: m };
  }, [scene]);

  if (!geometry) return null;

  const instanceArray = Object.values(instances);
  if (instanceArray.length === 0) return null; // Don't render empty instances

  return (
    <Instances 
      range={instanceArray.length} 
      limit={1000} // Max possible instances of this type
      castShadow={castShadow} 
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material || defaultMaterial!}
    >
      {instanceArray.map(inst => (
        <Instance
          key={inst.id}
          position={inst.position}
          rotation={inst.rotation}
          scale={inst.scale}
          color={inst.color}
        />
      ))}
    </Instances>
  );
};
