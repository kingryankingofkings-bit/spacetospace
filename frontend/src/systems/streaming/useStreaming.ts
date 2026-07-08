import { useEffect, useState, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { StreamingManager } from './StreamingManager';
import { StreamingConfig, ChunkState } from './types';

export function useStreaming(config?: Partial<StreamingConfig>) {
  const { camera } = useThree();
  const [activeChunks, setActiveChunks] = useState<ChunkState[]>([]);
  
  const manager = useMemo(() => {
    const mgr = new StreamingManager(config);
    const updateState = () => setActiveChunks([...mgr.getActiveChunks()]);
    
    mgr.onChunkLoad = updateState;
    mgr.onChunkUnload = updateState;
    mgr.onChunkLODChange = updateState;
    
    return mgr;
  }, [config]);

  useFrame(() => {
    manager.updateViewerPosition(camera.position);
  });

  return { activeChunks, manager };
}
