import { Item, Recipe } from './types';

export const ITEMS: Record<string, Item> = {
  wood: { id: 'wood', name: 'Wood', description: 'A sturdy piece of wood.' },
  stone: { id: 'stone', name: 'Stone', description: 'A solid stone.' },
  iron_ore: { id: 'iron_ore', name: 'Iron Ore', description: 'Unsmelted iron.' },
  iron_ingot: { id: 'iron_ingot', name: 'Iron Ingot', description: 'Smelted iron.' },
  sword: { id: 'sword', name: 'Basic Sword', description: 'A basic weapon.' },
  pickaxe: { id: 'pickaxe', name: 'Pickaxe', description: 'Used for mining.' },
};

export const RECIPES: Recipe[] = [
  {
    id: 'recipe_iron_ingot',
    resultItemId: 'iron_ingot',
    resultQuantity: 1,
    ingredients: [
      { itemId: 'iron_ore', quantity: 2 },
      { itemId: 'wood', quantity: 1 }
    ]
  },
  {
    id: 'recipe_sword',
    resultItemId: 'sword',
    resultQuantity: 1,
    ingredients: [
      { itemId: 'iron_ingot', quantity: 2 },
      { itemId: 'wood', quantity: 1 }
    ]
  },
  {
    id: 'recipe_pickaxe',
    resultItemId: 'pickaxe',
    resultQuantity: 1,
    ingredients: [
      { itemId: 'stone', quantity: 3 },
      { itemId: 'wood', quantity: 2 }
    ]
  }
];
