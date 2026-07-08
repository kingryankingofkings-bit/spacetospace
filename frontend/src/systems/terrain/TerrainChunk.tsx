import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useHeightfield } from '@react-three/cannon';
import { ImprovedNoise } from './noise';
import { TerrainMaterial } from './TerrainMaterial';

interface TerrainChunkProps {
  position: [number, number, number];
  size: number;
  resolution: number;
  heightScale: number;
  noiseScale: number;
}

const noiseGen = new ImprovedNoise();

export const TerrainChunk: React.FC<TerrainChunkProps> = ({
  position, size, resolution, heightScale, noiseScale
}) => {
  const { heights, geometry } = useMemo(() => {
    const segments = resolution - 1;
    const elementSize = size / segments;
    const heightsMatrix: number[][] = [];
    
    // 1. Generate Heights for Cannon.js
    for (let i = 0; i < resolution; i++) {
        heightsMatrix.push([]);
        for (let j = 0; j < resolution; j++) {
            // Cannon local grid coordinates matched to world space
            const worldX = position[0] - size / 2 + i * elementSize;
            const worldZ = position[2] + size / 2 - j * elementSize;
            
            // FBM Noise
            let h = 0;
            let amplitude = 1.0;
            let frequency = noiseScale;
            let maxValue = 0;
            
            for (let o = 0; o < 4; o++) {
                h += noiseGen.noise(worldX * frequency, 10.0, worldZ * frequency) * amplitude;
                maxValue += amplitude;
                amplitude *= 0.5;
                frequency *= 2.0;
            }
            
            const normalizedH = (h / maxValue) * 0.5 + 0.5;
            const finalHeight = Math.pow(normalizedH, 1.5) * heightScale;
            heightsMatrix[i].push(finalHeight);
        }
    }

    // 2. Create Geometry for Three.js
    const geom = new THREE.PlaneGeometry(size, size, segments, segments);
    geom.rotateX(-Math.PI / 2);
    
    for (let row = 0; row < resolution; row++) {
        for (let col = 0; col < resolution; col++) {
            const i = col;
            const j = segments - row;
            const h = heightsMatrix[i][j];
            
            const vertexIndex = row * resolution + col;
            geom.attributes.position.setY(vertexIndex, h);
        }
    }
    
    geom.computeVertexNormals();

    return { heights: heightsMatrix, geometry: geom };
  }, [position, size, resolution, heightScale, noiseScale]);

  const elementSize = size / (resolution - 1);
  
  // 3. Physics Body
  useHeightfield(() => ({
    args: [heights, { elementSize }],
    position: [position[0] - size / 2, position[1], position[2] + size / 2],
    rotation: [-Math.PI / 2, 0, 0],
    type: 'Static',
    material: { friction: 0.1, restitution: 0.1 }
  }), undefined, [heights]);

  // 4. Custom Material
  const material = useMemo(() => new TerrainMaterial({
    roughness: 0.8,
    metalness: 0.1
  }), []);

  return (
    <mesh geometry={geometry} material={material} position={position} receiveShadow castShadow />
  );
};
