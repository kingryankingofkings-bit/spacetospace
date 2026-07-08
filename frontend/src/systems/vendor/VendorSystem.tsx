import React, { useState } from 'react';
import { useVendorStore, VendorItem } from './useVendorStore';
import { useMultiplayerStore } from '../../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const VendorSystem: React.FC = () => {
  const { isOpen, vendorName, items, closeVendor } = useVendorStore();
  const currency = useMultiplayerStore((state) => state.currency);
  const inventory = useMultiplayerStore((state) => state.inventory);
  const sendBuyItem = useMultiplayerStore((state) => state.sendBuyItem);

  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const handleBuy = (item: VendorItem) => {
    if (currency >= item.price) {
      sendBuyItem(item.id, item.price);
    }
  };

  const handleSell = (item: any) => {
    // Note: Since `sendSellItem` doesn't currently exist in `multiplayerStore`, 
    // we emit a custom window event as a safe pattern to keep core files unmodified.
    window.dispatchEvent(
      new CustomEvent('send_websocket', {
        detail: { type: 'sell_item', itemId: item.id || item.itemId },
      })
    );
  };

  const getRarityColor = (item: any) => {
    const name = (item.name || item.id || '').toLowerCase();
    if (name.includes('legendary') || name.includes('neon')) return '#facc15';
    if (name.includes('epic') || name.includes('crimson')) return '#c026d3';
    if (name.includes('rare')) return '#3b82f6';
    return '#a0a0b0';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-100 flex items-center justify-center pointer-events-none">
          <motion.div
            className="aaa-panel pointer-events-auto flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            style={{ width: '420px', maxHeight: '75vh', padding: '24px' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
              <h2 className="aaa-header" style={{ color: 'var(--accent-primary)', fontSize: '1.25rem', margin: 0 }}>
                {vendorName || 'Vendor'}
              </h2>
              <button
                className="aaa-button"
                onClick={closeVendor}
                style={{ padding: '4px 10px', fontSize: '14px', borderColor: 'var(--accent-danger)', color: 'var(--accent-danger)' }}
              >
                ✕
              </button>
            </div>

            {/* Currency Display */}
            <div className="flex justify-between items-center" style={{ marginBottom: '16px', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--panel-border)', borderRadius: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Available Currency:</span>
              <span style={{ color: '#facc15', fontWeight: 800 }}>{currency} 🪙</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-4" style={{ marginBottom: '16px' }}>
              <button
                className="aaa-button w-full"
                onClick={() => setActiveTab('buy')}
                style={{
                  background: activeTab === 'buy' ? 'var(--accent-primary)' : 'transparent',
                  color: activeTab === 'buy' ? '#000' : 'var(--text-main)',
                  borderColor: activeTab === 'buy' ? 'transparent' : 'var(--panel-border)'
                }}
              >
                Buy
              </button>
              <button
                className="aaa-button w-full"
                onClick={() => setActiveTab('sell')}
                style={{
                  background: activeTab === 'sell' ? 'var(--accent-primary)' : 'transparent',
                  color: activeTab === 'sell' ? '#000' : 'var(--text-main)',
                  borderColor: activeTab === 'sell' ? 'transparent' : 'var(--panel-border)'
                }}
              >
                Sell
              </button>
            </div>

            {/* Item List */}
            <div className="flex-col gap-2" style={{ overflowY: 'auto', flex: 1, paddingRight: '8px' }}>
              {activeTab === 'buy' && items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                  style={{
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${getRarityColor(item)}40`,
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}
                >
                  <div className="flex-col">
                    <span style={{ color: getRarityColor(item), fontWeight: 600, textTransform: 'uppercase', fontSize: '14px' }}>
                      {item.name}
                    </span>
                    {item.type && <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.type}</span>}
                  </div>
                  <div className="flex items-center gap-4">
                    <span style={{ color: currency >= item.price ? '#facc15' : 'var(--accent-danger)', fontWeight: 600 }}>
                      {item.price} 🪙
                    </span>
                    <button
                      className="aaa-button"
                      onClick={() => handleBuy(item)}
                      disabled={currency < item.price}
                      style={{
                        background: currency >= item.price ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 0, 85, 0.1)',
                        borderColor: currency >= item.price ? 'var(--accent-primary)' : 'var(--accent-danger)',
                        color: currency >= item.price ? 'var(--accent-primary)' : 'var(--accent-danger)',
                        opacity: currency >= item.price ? 1 : 0.5,
                        cursor: currency >= item.price ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}

              {activeTab === 'buy' && items.length === 0 && (
                <div className="text-center" style={{ color: 'var(--text-muted)', marginTop: '32px' }}>
                  This vendor has nothing to sell right now.
                </div>
              )}

              {activeTab === 'sell' && inventory.map((item, idx) => {
                const sellPrice = item.price ? Math.floor(item.price * 0.5) : 10;
                return (
                  <div
                    key={item.id || idx}
                    className="flex justify-between items-center"
                    style={{
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${getRarityColor(item)}40`,
                      borderRadius: '8px',
                      marginBottom: '8px'
                    }}
                  >
                    <div className="flex-col">
                      <span style={{ color: getRarityColor(item), fontWeight: 600, textTransform: 'uppercase', fontSize: '14px' }}>
                        {item.name || item.itemId || 'Unknown Item'}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Quantity: {item.quantity || 1}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span style={{ color: '#facc15', fontWeight: 600 }}>
                        +{sellPrice} 🪙
                      </span>
                      <button
                        className="aaa-button"
                        onClick={() => handleSell(item)}
                        style={{
                          background: 'rgba(0, 240, 255, 0.1)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        Sell
                      </button>
                    </div>
                  </div>
                );
              })}

              {activeTab === 'sell' && inventory.length === 0 && (
                <div className="text-center" style={{ color: 'var(--text-muted)', marginTop: '32px' }}>
                  Your inventory is empty.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
