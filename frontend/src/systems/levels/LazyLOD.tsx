import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { AssetPriority, preloadAsset } from '../../utils/AssetManager';

interface LODLevel {
  distance: number;
  url: string; // The GLTF URL for this LOD
  priority?: AssetPriority;
}

interface LazyLODProps {
  levels: LODLevel[];
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
  onLODChanged?: (levelIndex: number) => void;
}

const LODMesh = ({ url, castShadow, receiveShadow }: { url: string; castShadow?: boolean; receiveShadow?: boolean }) => {
  const { scene } = useGLTF(url);
  
  // Clone to avoid mutating cached original
  const clonedScene = React.useMemo(() => {
    const clone = scene.clone();
    clone.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = castShadow;
        node.receiveShadow = receiveShadow;
      }
    });
    return clone;
  }, [scene, castShadow, receiveShadow]);
  
  return <primitive object={clonedScene} />;
};

export const LazyLOD: React.FC<LazyLODProps> = ({
  levels,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  castShadow = true,
  receiveShadow = true,
  onLODChanged
}) => {
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [currentLevel, setCurrentLevel] = useState<number>(levels.length - 1); // Default to lowest LOD
  
  // Sort levels by distance (closest first)
  const sortedLevels = React.useMemo(() => [...levels].sort((a, b) => a.distance - b.distance), [levels]);

  // Throttle distance checks (we don't need to check every frame)
  const lastCheckTime = useRef(0);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (time - lastCheckTime.current < 0.5) return; // Check every 500ms
    lastCheckTime.current = time;
    
    if (ref.current) {
      const dist = camera.position.distanceTo(ref.current.position);
      
      let nextLevel = sortedLevels.length - 1; // Default to lowest
      for (let i = 0; i < sortedLevels.length; i++) {
        if (dist < sortedLevels[i].distance) {
          nextLevel = i;
          break;
        }
      }
      
      if (nextLevel !== currentLevel) {
        setCurrentLevel(nextLevel);
        if (onLODChanged) onLODChanged(nextLevel);
        
        // Pre-load the next lower LOD level if moving closer
        if (nextLevel > 0) {
           preloadAsset(sortedLevels[nextLevel - 1].url, sortedLevels[nextLevel - 1].priority || AssetPriority.MEDIUM);
        }
      }
    }
  });

  const activeLOD = sortedLevels[currentLevel];

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {activeLOD ? (
        <React.Suspense fallback={null}>
          <LODMesh 
            url={activeLOD.url} 
            castShadow={castShadow} 
            receiveShadow={receiveShadow} 
          />
        </React.Suspense>
      ) : null}
    </group>
  );
};
