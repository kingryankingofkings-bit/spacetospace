import { create } from 'zustand';
import { useParticleStore } from '../../components/ParticleManager';

export interface DamageEvent {
  id: string;
  position: [number, number, number];
  amount: number;
  isCritical?: boolean;
  type?: 'physical' | 'magical' | 'heal';
  timestamp: number;
}

export interface EntityCombatState {
  id: string;
  isAttacking: boolean;
  isBlocking: boolean;
  hitStunEnd: number; // timestamp
}

interface CombatStoreState {
  damageEvents: DamageEvent[];
  entityStates: Record<string, EntityCombatState>;
  
  // Actions
  reportHit: (
    targetId: string, 
    position: [number, number, number], 
    amount: number, 
    options?: { isCritical?: boolean; type?: 'physical' | 'magical' | 'heal' }
  ) => void;
  setAttacking: (entityId: string, isAttacking: boolean) => void;
  setBlocking: (entityId: string, isBlocking: boolean) => void;
  applyHitStun: (entityId: string, durationMs: number) => void;
}

export const useCombatStore = create<CombatStoreState>((set) => ({
  damageEvents: [],
  entityStates: {},

  reportHit: (targetId, position, amount, options = {}) => {
    const now = Date.now();
    const id = `${targetId}-${now}-${Math.random().toString(36).substring(7)}`;
    const event: DamageEvent = {
      id,
      position,
      amount,
      isCritical: options.isCritical,
      type: options.type || 'physical',
      timestamp: now,
    };

    set((state) => ({
      damageEvents: [...state.damageEvents, event],
    }));

    // Trigger visual particle effects on hit
    const emit = useParticleStore.getState().emit;
    const isHeal = options.type === 'heal';
    const color = isHeal ? '#00ff00' : (options.isCritical ? '#ffaa00' : '#ff0000');
    const count = options.isCritical ? 15 : (isHeal ? 8 : 5);
    
    // Simple burst effect upwards
    emit(position, [0, 4, 0], count, color, options.isCritical ? 0.6 : 0.4, 0.8);

    // Auto-remove damage number after 2 seconds
    setTimeout(() => {
      set((state) => ({
        damageEvents: state.damageEvents.filter((e) => e.id !== id)
      }));
    }, 2000);
  },

  setAttacking: (entityId, isAttacking) => {
    set((state) => ({
      entityStates: {
        ...state.entityStates,
        [entityId]: {
          ...(state.entityStates[entityId] || { id: entityId, isAttacking: false, isBlocking: false, hitStunEnd: 0 }),
          isAttacking,
        }
      }
    }));
  },

  setBlocking: (entityId, isBlocking) => {
    set((state) => ({
      entityStates: {
        ...state.entityStates,
        [entityId]: {
          ...(state.entityStates[entityId] || { id: entityId, isAttacking: false, isBlocking: false, hitStunEnd: 0 }),
          isBlocking,
        }
      }
    }));
  },

  applyHitStun: (entityId, durationMs) => {
    set((state) => ({
      entityStates: {
        ...state.entityStates,
        [entityId]: {
          ...(state.entityStates[entityId] || { id: entityId, isAttacking: false, isBlocking: false, hitStunEnd: 0 }),
          hitStunEnd: Date.now() + durationMs,
        }
      }
    }));
  },
}));

// Utility hooks for individual entity states to avoid whole-store re-renders
export const useEntityCombatState = (entityId: string) => {
  return useCombatStore(
    (state) => state.entityStates[entityId] || { id: entityId, isAttacking: false, isBlocking: false, hitStunEnd: 0 }
  );
};

export const isEntityInHitStun = (state: EntityCombatState) => {
  return Date.now() < state.hitStunEnd;
};
