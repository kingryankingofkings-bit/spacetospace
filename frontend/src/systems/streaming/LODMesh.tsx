import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { LODLevel } from './types';

interface LODMeshProps {
  urlLOD0: string;
  urlLOD1?: string; 
  urlLOD2?: string;
  currentLOD: LODLevel;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export const LODMesh: React.FC<LODMeshProps> = ({ 
  urlLOD0, urlLOD1, urlLOD2, currentLOD,
  position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]
}) => {
  const gltf0 = useGLTF(urlLOD0);
  const gltf1 = urlLOD1 ? useGLTF(urlLOD1) : null;
  const gltf2 = urlLOD2 ? useGLTF(urlLOD2) : null;

  const activeScene = useMemo(() => {
    switch (currentLOD) {
      case LODLevel.LOD0: return gltf0.scene;
      case LODLevel.LOD1: return gltf1 ? gltf1.scene : gltf0.scene;
      case LODLevel.LOD2: return gltf2 ? gltf2.scene : (gltf1 ? gltf1.scene : gltf0.scene);
      case LODLevel.CULLED: return null;
      default: return gltf0.scene;
    }
  }, [currentLOD, gltf0, gltf1, gltf2]);

  if (!activeScene || currentLOD === LODLevel.CULLED) return null;

  return <primitive object={activeScene.clone()} position={position} rotation={rotation} scale={scale} />;
};
