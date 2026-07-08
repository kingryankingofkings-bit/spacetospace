import { Vector3 } from 'three';
import { ChunkKey, ChunkState, LODLevel, StreamingConfig } from './types';

export class StreamingManager {
  private config: StreamingConfig;
  private activeChunks: Map<string, ChunkState> = new Map();
  private viewerPosition: Vector3 = new Vector3();
  
  public onChunkLoad?: (chunk: ChunkState) => void;
  public onChunkUnload?: (chunk: ChunkState) => void;
  public onChunkLODChange?: (chunk: ChunkState, previousLOD: LODLevel) => void;

  constructor(config?: Partial<StreamingConfig>) {
    this.config = {
      chunkSize: 100,
      loadRadius: 3,
      unloadRadius: 4,
      lodDistances: {
        [LODLevel.LOD0]: 150,
        [LODLevel.LOD1]: 300,
        [LODLevel.LOD2]: 500,
      },
      ...config,
    };
  }

  public getChunkKeyStr(x: number, z: number): string {
    return `${x},${z}`;
  }

  public getChunkKeyFromPosition(position: Vector3): ChunkKey {
    return {
      x: Math.floor(position.x / this.config.chunkSize),
      z: Math.floor(position.z / this.config.chunkSize)
    };
  }

  public getChunkCenter(x: number, z: number): Vector3 {
    return new Vector3(
      (x * this.config.chunkSize) + (this.config.chunkSize / 2),
      0,
      (z * this.config.chunkSize) + (this.config.chunkSize / 2)
    );
  }

  public updateViewerPosition(position: Vector3) {
    // Only process chunks if the camera has moved significantly (optimization possible here)
    if (this.viewerPosition.distanceToSquared(position) > 1.0) {
      this.viewerPosition.copy(position);
      this.processChunks();
    }
  }

  private determineLOD(distance: number): LODLevel {
    if (distance <= this.config.lodDistances[LODLevel.LOD0]) return LODLevel.LOD0;
    if (distance <= this.config.lodDistances[LODLevel.LOD1]) return LODLevel.LOD1;
    if (distance <= this.config.lodDistances[LODLevel.LOD2]) return LODLevel.LOD2;
    return LODLevel.CULLED;
  }

  private processChunks() {
    const centerChunk = this.getChunkKeyFromPosition(this.viewerPosition);
    const chunksInRange = new Set<string>();
    
    // Load & Update LOD
    for (let cx = centerChunk.x - this.config.loadRadius; cx <= centerChunk.x + this.config.loadRadius; cx++) {
      for (let cz = centerChunk.z - this.config.loadRadius; cz <= centerChunk.z + this.config.loadRadius; cz++) {
        const key = this.getChunkKeyStr(cx, cz);
        chunksInRange.add(key);
        
        const chunkCenter = this.getChunkCenter(cx, cz);
        const distance = chunkCenter.distanceTo(this.viewerPosition);
        const newLOD = this.determineLOD(distance);

        if (!this.activeChunks.has(key)) {
          const newState: ChunkState = { key, x: cx, z: cz, lod: newLOD, distanceToViewer: distance, isLoaded: true };
          this.activeChunks.set(key, newState);
          this.onChunkLoad?.(newState);
        } else {
          const chunk = this.activeChunks.get(key)!;
          chunk.distanceToViewer = distance;
          if (chunk.lod !== newLOD) {
            const oldLOD = chunk.lod;
            chunk.lod = newLOD;
            this.onChunkLODChange?.(chunk, oldLOD);
          }
        }
      }
    }

    // Unload distant chunks
    for (const [key, chunk] of this.activeChunks.entries()) {
      const distanceX = Math.abs(chunk.x - centerChunk.x);
      const distanceZ = Math.abs(chunk.z - centerChunk.z);
      if (distanceX > this.config.unloadRadius || distanceZ > this.config.unloadRadius) {
        this.onChunkUnload?.(chunk);
        this.activeChunks.delete(key);
      }
    }
  }
  
  public getActiveChunks(): ChunkState[] {
    return Array.from(this.activeChunks.values());
  }
}
