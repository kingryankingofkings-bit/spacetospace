import { create } from 'zustand';
import { ItemId } from './types';

interface CraftingState {
  inventory: Record<ItemId, number>;
  isOpen: boolean;
  addItems: (id: ItemId, amount: number) => void;
  removeItems: (id: ItemId, amount: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  toggleOpen: () => void;
}

export const useCraftingStore = create<CraftingState>((set) => ({
  // Dummy starting inventory for testing
  inventory: {
    wood: 10,
    stone: 5,
    iron_ore: 8,
  },
  isOpen: false,
  addItems: (id, amount) => set((state) => ({
    inventory: {
      ...state.inventory,
      [id]: (state.inventory[id] || 0) + amount
    }
  })),
  removeItems: (id, amount) => set((state) => {
    const current = state.inventory[id] || 0;
    const newAmount = Math.max(0, current - amount);
    return {
      inventory: {
        ...state.inventory,
        [id]: newAmount
      }
    };
  }),
  setIsOpen: (isOpen) => set({ isOpen }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}));
