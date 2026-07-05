import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';

export const InventoryPanel: React.FC = () => {
  const inventory = useMultiplayerStore(state => state.inventory);
  const currency = useMultiplayerStore(state => state.currency);
  const sendBuyItem = useMultiplayerStore(state => state.sendBuyItem);
  const sendUseItem = useMultiplayerStore(state => state.sendUseItem);

  return (
    <div className="glass-panel" style={{ 
      width: '320px', 
      maxHeight: '500px', 
      display: 'flex', 
      flexDirection: 'column',
      marginTop: '20px'
    }}>
      <div className="panel-header" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <span>Inventory & Loot</span>
        <span style={{ color: '#00ff88' }}>💰 {currency}</span>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '10px',
        overflowY: 'auto',
        paddingRight: '5px',
        marginBottom: '20px'
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
            onClick={() => {
              if (item.instanceId) {
                sendUseItem(item.instanceId);
              }
            }}
            title={item.type || item.itemId || item.name || 'Unknown Item'}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📦</div>
              <div style={{ fontSize: '0.6rem', color: '#aaa', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', padding: '0 4px' }}>
                {item.type || item.itemId || item.name || 'Loot'}
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#aaa' }}>Merchant (Quick Buy)</h4>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => sendBuyItem("skin_neon_katana", 500)}
            style={{ flex: 1, padding: '8px', background: 'rgba(0,255,136,0.2)', border: '1px solid #00ff88', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '0.8rem' }}>
            Buy Neon Skin (500)
          </button>
          <button 
            onClick={() => sendBuyItem("dye_crimson_red", 200)}
            style={{ flex: 1, padding: '8px', background: 'rgba(255,0,0,0.2)', border: '1px solid red', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '0.8rem' }}>
            Buy Red Dye (200)
          </button>
        </div>
      </div>
    </div>
  );
};
