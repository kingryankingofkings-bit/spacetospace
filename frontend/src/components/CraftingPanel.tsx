import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';

export const CraftingPanel: React.FC = () => {
  const sendCraftRecipe = useMultiplayerStore(state => state.sendCraftRecipe);

  const recipes = [
    { id: 'recipe_phase_dagger', name: 'Phase Shift Dagger' },
    { id: 'recipe_bio_claws', name: 'Biomechanical Claws' },
    { id: 'recipe_iron_sword', name: 'Iron Sword' }
  ];

  return (
    <div className="glass-panel" style={{ 
      width: '320px', 
      display: 'flex', 
      flexDirection: 'column',
      marginTop: '20px'
    }}>
      <div className="panel-header" style={{ marginBottom: '15px' }}>
        Crafting Station
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {recipes.map(recipe => (
          <button 
            key={recipe.id}
            onClick={() => sendCraftRecipe(recipe.id)}
            style={{
              padding: '10px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Craft {recipe.name}
          </button>
        ))}
      </div>
    </div>
  );
};
