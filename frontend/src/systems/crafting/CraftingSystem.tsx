import React from 'react';
import { Html } from '@react-three/drei';
import { ITEMS, RECIPES } from './craftingData';
import { useCraftingStore } from './useCraftingStore';

export const CraftingSystem: React.FC = () => {
  const { inventory, isOpen, toggleOpen, addItems, removeItems } = useCraftingStore();

  const canCraft = (recipeId: string) => {
    const recipe = RECIPES.find((r) => r.id === recipeId);
    if (!recipe) return false;

    return recipe.ingredients.every(
      (ing) => (inventory[ing.itemId] || 0) >= ing.quantity
    );
  };

  const handleCraft = (recipeId: string) => {
    const recipe = RECIPES.find((r) => r.id === recipeId);
    if (!recipe) return;

    if (canCraft(recipeId)) {
      recipe.ingredients.forEach((ing) => {
        removeItems(ing.itemId, ing.quantity);
      });
      addItems(recipe.resultItemId, recipe.resultQuantity);
    }
  };

  return (
    <>
      <div style={{ pointerEvents: 'none', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', top: 20, right: 20, pointerEvents: 'auto' }}>
          <button 
            onClick={toggleOpen}
            style={{ padding: '10px 20px', cursor: 'pointer', background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '4px' }}
          >
            {isOpen ? 'Close Crafting' : 'Open Crafting'}
          </button>
        </div>

        {isOpen && (
          <div style={{ margin: 'auto', background: 'rgba(0,0,0,0.85)', padding: '20px', borderRadius: '8px', color: '#fff', pointerEvents: 'auto', width: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2>Crafting</h2>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <h3>Inventory</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {Object.entries(inventory).map(([itemId, qty]) => {
                    const item = ITEMS[itemId];
                    return (
                      <li key={itemId} style={{ padding: '5px 0', borderBottom: '1px solid #444' }}>
                        {item ? item.name : itemId} x{qty}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div style={{ flex: 2 }}>
                <h3>Recipes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {RECIPES.map(recipe => {
                    const resultItem = ITEMS[recipe.resultItemId];
                    const craftable = canCraft(recipe.id);
                    return (
                      <div key={recipe.id} style={{ background: '#222', padding: '10px', borderRadius: '4px', border: craftable ? '1px solid #4CAF50' : '1px solid #555' }}>
                        <h4>{resultItem?.name || recipe.resultItemId} x{recipe.resultQuantity}</h4>
                        <div style={{ fontSize: '0.9em', color: '#aaa', marginBottom: '10px' }}>
                          Requires: 
                          {recipe.ingredients.map(ing => {
                            const ingItem = ITEMS[ing.itemId];
                            const hasQty = inventory[ing.itemId] || 0;
                            return (
                              <span key={ing.itemId} style={{ marginLeft: '5px', color: hasQty >= ing.quantity ? '#4CAF50' : '#f44336' }}>
                                {ingItem?.name || ing.itemId}({hasQty}/{ing.quantity})
                              </span>
                            );
                          })}
                        </div>
                        <button 
                          disabled={!craftable}
                          onClick={() => handleCraft(recipe.id)}
                          style={{
                            padding: '8px 16px',
                            cursor: craftable ? 'pointer' : 'not-allowed',
                            background: craftable ? '#4CAF50' : '#555',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            width: '100%'
                          }}
                        >
                          Craft
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CraftingSystem;
