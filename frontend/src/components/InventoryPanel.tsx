import React from 'react';
import { useInventory } from '../hooks/useInventory';

export const InventoryPanel: React.FC = () => {
  const { inventory } = useInventory();

  return (
    <div className="glass-panel" style={{ 
      width: '320px', 
      maxHeight: '400px', 
      display: 'flex', 
      flexDirection: 'column',
      marginTop: '20px'
    }}>
      <div className="panel-header" style={{ marginBottom: '15px' }}>
        Inventory & Loot
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '10px',
        overflowY: 'auto',
        paddingRight: '5px'
      }}>
        {inventory.length === 0 ? (
          <div style={{ gridColumn: 'span 4', textAlign: 'center', color: '#ccc', fontSize: '0.9rem', padding: '20px 0' }}>
            Empty Inventory
          </div>
        ) : (
          inventory.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              aspectRatio: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            title={item.name || 'Unknown Item'}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>
                {item.icon || '📦'}
              </div>
              <div style={{ fontSize: '0.6rem', color: '#aaa', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', padding: '0 4px' }}>
                {item.name || 'Loot'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
