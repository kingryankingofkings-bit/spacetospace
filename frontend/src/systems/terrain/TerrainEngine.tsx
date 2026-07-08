import React from 'react';
import { TerrainChunk } from './TerrainChunk';

export const TerrainEngine: React.FC = () => {
    // Large seamless chunked grid 
    const chunkSize = 1000;
    const resolution = 64; 
    const heightScale = 100;
    const noiseScale = 0.002;

    const chunks = [];
    const gridSize = 1; // 3x3 grid centered on origin

    for (let x = -gridSize; x <= gridSize; x++) {
        for (let z = -gridSize; z <= gridSize; z++) {
            chunks.push(
                <TerrainChunk 
                    key={`chunk-${x}-${z}`}
                    position={[x * chunkSize, 0, z * chunkSize]}
                    size={chunkSize}
                    resolution={resolution}
                    heightScale={heightScale}
                    noiseScale={noiseScale}
                />
            );
        }
    }

    return (
        <group name="terrain-engine">
            {chunks}
        </group>
    );
};
