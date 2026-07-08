import { create } from 'zustand';
import { EntityState } from './types';

interface PrefabStore {
  entities: Record<string, EntityState>;
  pool: Record<string, EntityState[]>;
  
  spawn: (prefabId: string, initialData?: Partial<Omit<EntityState, 'id' | 'prefabId' | 'active'>>) => string;
  despawn: (id: string) => void;
  updateEntity: (id: string, data: Partial<EntityState>) => void;
  clear: () => void;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const usePrefabStore = create<PrefabStore>((set, get) => ({
  entities: {},
  pool: {},

  spawn: (prefabId, initialData) => {
    const state = get();
    const poolForPrefab = state.pool[prefabId] || [];
    
    let entity: EntityState;
    const newPool = [...poolForPrefab];

    const position = initialData?.position || [0, 0, 0];
    const rotation = initialData?.rotation || [0, 0, 0];
    const scale = initialData?.scale || [1, 1, 1];
    
    if (newPool.length > 0) {
      entity = newPool.pop()!;
      entity = {
        ...entity,
        ...initialData,
        position,
        rotation,
        scale,
        active: true,
      };
    } else {
      entity = {
        id: `${prefabId}_${generateId()}`,
        prefabId,
        position,
        rotation,
        scale,
        active: true,
        customData: initialData?.customData,
      };
    }

    set((s) => ({
      entities: { ...s.entities, [entity.id]: entity },
      pool: { ...s.pool, [prefabId]: newPool }
    }));

    return entity.id;
  },

  despawn: (id) => {
    set((s) => {
      const entity = s.entities[id];
      if (!entity) return s;

      const newEntities = { ...s.entities };
      delete newEntities[id];

      const poolForPrefab = s.pool[entity.prefabId] || [];
      
      return {
        entities: newEntities,
        pool: {
          ...s.pool,
          [entity.prefabId]: [...poolForPrefab, { ...entity, active: false }]
        }
      };
    });
  },

  updateEntity: (id, data) => {
    set((s) => {
      const entity = s.entities[id];
      if (!entity) return s;
      return {
        entities: {
          ...s.entities,
          [id]: { ...entity, ...data }
        }
      };
    });
  },

  clear: () => {
    set({ entities: {}, pool: {} });
  }
}));
