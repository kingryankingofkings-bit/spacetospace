import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const InventoryPanel: React.FC = () => {
  const inventory = useMultiplayerStore(state => state.inventory);
  const currency = useMultiplayerStore(state => state.currency);
  const sendBuyItem = useMultiplayerStore(state => state.sendBuyItem);
  const sendUseItem = useMultiplayerStore(state => state.sendUseItem);

  const getRarityColor = (item: any) => {
    // Simple mock logic for rarity color based on name/type
    const name = (item.name || item.itemId || '').toLowerCase();
    if (name.includes('legendary') || name.includes('neon')) return '#facc15'; // gold
    if (name.includes('epic') || name.includes('crimson')) return '#c026d3'; // purple
    if (name.includes('rare')) return '#3b82f6'; // blue
    return '#a0a0b0'; // common
  };

  return (
    <motion.div 
      className="aaa-panel animate-in" 
      style={{ 
        width: '360px', 
        maxHeight: '600px', 
        display: 'flex', 
        flexDirection: 'column',
        marginTop: '20px'
      }}
    >
      <div className="aaa-header">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.2rem' }}>📦</span> INVENTORY
        </div>
        <div style={{ color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CREDITS</span>
          {currency}
        </div>
      </div>
      
      <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="aaa-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {inventory.length === 0 ? (
            <div style={{ gridColumn: 'span 4', textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0', fontStyle: 'italic', fontSize: '0.9rem' }}>
              Inventory is empty
            </div>
          ) : (
            <AnimatePresence>
              {inventory.map((item, index) => {
                const rarityColor = getRarityColor(item);
                return (
                  <motion.div 
                    key={index} 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="aaa-item-slot"
                    style={{ aspectRatio: '1', borderTop: `2px solid ${rarityColor}` }}
                    onClick={() => {
                      if (item.instanceId) {
                        sendUseItem(item.instanceId);
                      }
                    }}
                    title={item.type || item.itemId || item.name || 'Unknown Item'}
                  >
                    <div style={{ fontSize: '1.8rem', filter: `drop-shadow(0 0 5px ${rarityColor})` }}>
                      {item.icon || '🔮'}
                    </div>
                    {/* Item count badge (if stacked) could go here */}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>

        <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '20px' }}>
          <div className="aaa-label">MERCHANT NETWORK (QUICK BUY)</div>
          <div className="flex-col gap-2" style={{ marginTop: '12px' }}>
            <button 
              onClick={() => sendBuyItem("skin_neon_katana", 500)}
              className="aaa-button w-full justify-between"
              style={{ borderLeft: '3px solid #facc15' }}
            >
              <span>Neon Katana Skin</span>
              <span style={{ color: 'var(--accent-primary)' }}>500c</span>
            </button>
            <button 
              onClick={() => sendBuyItem("dye_crimson_red", 200)}
              className="aaa-button w-full justify-between"
              style={{ borderLeft: '3px solid #c026d3' }}
            >
              <span>Crimson Dye</span>
              <span style={{ color: 'var(--accent-primary)' }}>200c</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
