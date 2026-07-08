import * as THREE from 'three';

export interface ChunkKey {
  x: number;
  z: number;
}

export enum LODLevel {
  LOD0 = 0, // High detail
  LOD1 = 1, // Medium detail
  LOD2 = 2, // Low detail / billboards
  CULLED = 3, // Not rendered
}

export interface StreamingConfig {
  chunkSize: number;
  loadRadius: number; // in chunks
  unloadRadius: number; // in chunks
  lodDistances: {
    [LODLevel.LOD0]: number;
    [LODLevel.LOD1]: number;
    [LODLevel.LOD2]: number;
  };
}

export interface ChunkState {
  key: string;
  x: number;
  z: number;
  lod: LODLevel;
  distanceToViewer: number;
  isLoaded: boolean;
}
