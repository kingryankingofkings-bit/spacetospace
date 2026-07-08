import { create } from 'zustand';

export interface Item {
  id: string;
  name: string;
  icon: string; // URL or class name for icon
  type: 'weapon' | 'armor' | 'consumable' | 'quest' | 'material';
  description?: string;
  stats?: {
    damage?: number;
    armor?: number;
    health?: number;
  };
}

export interface InventoryState {
  items: (Item | null)[]; // Grid of items (null means empty slot)
  equipment: {
    mainHand: Item | null;
    offHand: Item | null;
    head: Item | null;
    chest: Item | null;
  };
  gold: number;
  isOpen: boolean;

  toggleInventory: () => void;
  addItem: (item: Item) => boolean;
  removeItem: (index: number) => void;
  moveItem: (fromIndex: number, toIndex: number) => void;
  equipItem: (inventoryIndex: number, slot: keyof InventoryState['equipment']) => void;
  unequipItem: (slot: keyof InventoryState['equipment']) => void;
}

const INVENTORY_SIZE = 30;

export const useInventoryStore = create<InventoryState>((set, get) => {
  const initialItems = Array(INVENTORY_SIZE).fill(null);
  initialItems[0] = {
    id: 'basic_sword_01',
    name: 'Basic Sword',
    icon: '⚔️', // Using emoji for simplicity, could be a URL
    type: 'weapon',
    description: 'A simple iron sword.',
    stats: { damage: 10 }
  };

  return {
    items: initialItems,
    equipment: {
      mainHand: null,
      offHand: null,
      head: null,
      chest: null,
    },
    gold: 0,
    isOpen: false,

  toggleInventory: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) => {
    let added = false;
    set((state) => {
      const emptyIndex = state.items.findIndex((i) => i === null);
      if (emptyIndex !== -1) {
        const newItems = [...state.items];
        newItems[emptyIndex] = item;
        added = true;
        return { items: newItems };
      }
      return state;
    });
    return added;
  },

  removeItem: (index) => set((state) => {
    const newItems = [...state.items];
    newItems[index] = null;
    return { items: newItems };
  }),

  moveItem: (fromIndex, toIndex) => set((state) => {
    const newItems = [...state.items];
    const temp = newItems[toIndex];
    newItems[toIndex] = newItems[fromIndex];
    newItems[fromIndex] = temp;
    return { items: newItems };
  }),

  equipItem: (inventoryIndex, slot) => set((state) => {
    const itemToEquip = state.items[inventoryIndex];
    if (!itemToEquip) return state;

    const currentEquipped = state.equipment[slot];
    
    // Swap
    const newEquipment = { ...state.equipment, [slot]: itemToEquip };
    const newItems = [...state.items];
    newItems[inventoryIndex] = currentEquipped;

    return { equipment: newEquipment, items: newItems };
  }),

  unequipItem: (slot) => set((state) => {
    const itemToUnequip = state.equipment[slot];
    if (!itemToUnequip) return state;

    const emptyIndex = state.items.findIndex((i) => i === null);
    if (emptyIndex !== -1) {
      const newItems = [...state.items];
      newItems[emptyIndex] = itemToUnequip;
      return { 
        equipment: { ...state.equipment, [slot]: null },
        items: newItems
      };
    }
    // Inventory full, can't unequip
    return state;
  }),
  };
});
