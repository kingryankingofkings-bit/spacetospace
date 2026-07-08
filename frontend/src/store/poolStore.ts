import { create } from 'zustand';
import * as THREE from 'three';

export interface PoolInstance {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number | [number, number, number];
  color?: string | number; // For color manipulation in shader
  active: boolean;
  spawnTime: number;
  duration?: number;
}

interface PoolGroup {
  instances: Record<string, PoolInstance>;
}

interface PoolState {
  pools: Record<string, PoolGroup>;
  
  // Create or get a pool
  registerPool: (poolId: string) => void;
  
  // Allocate an instance in a pool
  spawn: (poolId: string, instance: Omit<PoolInstance, 'active' | 'spawnTime'> & { duration?: number }) => void;
  
  // Despawn an instance
  despawn: (poolId: string, instanceId: string) => void;
  
  // Clean up expired instances
  tick: (time: number) => void;
}

export const usePoolStore = create<PoolState>((set) => ({
  pools: {},
  
  registerPool: (poolId) => set((state) => {
    if (state.pools[poolId]) return state;
    return {
      pools: {
        ...state.pools,
        [poolId]: { instances: {} }
      }
    };
  }),
  
  spawn: (poolId, instance) => set((state) => {
    const pool = state.pools[poolId];
    if (!pool) return state; // Pool not registered
    
    return {
      pools: {
        ...state.pools,
        [poolId]: {
          ...pool,
          instances: {
            ...pool.instances,
            [instance.id]: {
              ...instance,
              active: true,
              spawnTime: performance.now()
            }
          }
        }
      }
    };
  }),
  
  despawn: (poolId, instanceId) => set((state) => {
    const pool = state.pools[poolId];
    if (!pool || !pool.instances[instanceId]) return state;
    
    const newInstances = { ...pool.instances };
    newInstances[instanceId].active = false; // Mark inactive instead of deleting to reuse memory if we implemented array pools, but for record we just delete or mark inactive
    delete newInstances[instanceId];
    
    return {
      pools: {
        ...state.pools,
        [poolId]: {
          ...pool,
          instances: newInstances
        }
      }
    };
  }),
  
  tick: (time) => set((state) => {
    let hasChanges = false;
    const newPools = { ...state.pools };
    
    for (const poolId in newPools) {
      const pool = newPools[poolId];
      let poolChanged = false;
      const newInstances = { ...pool.instances };
      
      for (const id in newInstances) {
        const inst = newInstances[id];
        if (inst.duration && time - inst.spawnTime > inst.duration) {
          delete newInstances[id];
          poolChanged = true;
          hasChanges = true;
        }
      }
      
      if (poolChanged) {
        newPools[poolId] = { ...pool, instances: newInstances };
      }
    }
    
    return hasChanges ? { pools: newPools } : state;
  })
}));
