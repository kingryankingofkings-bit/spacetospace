import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTradingStore } from './useTradingStore';
import { useMultiplayerStore } from '../../store/multiplayerStore';

export const TradingSystem: React.FC = () => {
  const trading = useTradingStore();
  const inventory = useMultiplayerStore(state => state.inventory);
  const credits = useMultiplayerStore(state => state.currency);

  const [inputCredits, setInputCredits] = useState('');

  if (trading.status === 'idle') return null;

  // Render incoming request dialog
  if (trading.status === 'requested') {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 pointer-events-auto">
        <motion.div 
          className="aaa-panel"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ width: '320px', padding: '24px', textAlign: 'center' }}
        >
          <div className="aaa-label mb-4" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>
            TRADE REQUEST
          </div>
          <p className="mb-6"><span style={{ color: 'var(--accent-primary)' }}>{trading.targetName || 'Someone'}</span> wants to trade with you.</p>
          <div className="flex gap-4">
            <button className="aaa-button flex-1" onClick={() => trading.acceptTrade()}>ACCEPT</button>
            <button className="aaa-button flex-1" onClick={() => trading.cancelTrade()}>DECLINE</button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Render Trade completion/cancellation messages
  if (trading.status === 'completed' || trading.status === 'cancelled') {
    const isSuccess = trading.status === 'completed';
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto bg-black/20">
        <motion.div 
          className="aaa-panel"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ padding: '30px', textAlign: 'center', border: `2px solid ${isSuccess ? '#00ff88' : '#ff4444'}` }}
        >
          <h2 style={{ color: isSuccess ? '#00ff88' : '#ff4444', fontSize: '2rem', margin: 0, textShadow: `0 0 10px ${isSuccess ? '#00ff8888' : '#ff444488'}` }}>
            TRADE {trading.status.toUpperCase()}
          </h2>
        </motion.div>
      </div>
    );
  }

  const handleOfferCredits = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(inputCredits);
    if (!isNaN(amount) && amount >= 0 && amount <= credits) {
      trading.setCreditsOffer(amount);
      setInputCredits('');
    }
  };

  const availableInventory = inventory.filter(
    (item: any) => !trading.myOffer.find(o => o.instanceId === item.instanceId)
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto bg-black/60 backdrop-blur-sm">
      <motion.div 
        className="aaa-panel"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ width: '850px', height: '600px', display: 'flex', flexDirection: 'column' }}
      >
        <div className="aaa-header flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '1.2rem' }}>🤝</span> SECURE TRADE LINK: <span style={{ color: 'var(--accent-primary)' }}>{trading.targetName || 'Unknown'}</span>
          </div>
          <button onClick={() => trading.cancelTrade()} className="aaa-button" style={{ padding: '4px 12px' }}>ABORT</button>
        </div>

        <div className="flex flex-1 overflow-hidden" style={{ padding: '20px', gap: '20px' }}>
          
          {/* LEFT: MY OFFER */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="aaa-label flex justify-between">
              <span>YOUR OFFER</span>
              <span style={{ color: trading.myLocked ? '#00ff88' : 'var(--text-muted)' }}>
                {trading.myLocked ? '🔒 LOCKED' : '🔓 EDITING'}
              </span>
            </div>
            
            <div className="flex-1 border border-[var(--panel-border)] bg-black/30 p-2 overflow-y-auto rounded">
              <div className="aaa-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <AnimatePresence>
                  {trading.myOffer.map((item) => (
                    <motion.div 
                      key={item.instanceId}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="aaa-item-slot cursor-pointer"
                      onClick={() => trading.unofferItem(item.instanceId)}
                      title="Click to remove"
                      style={{ aspectRatio: '1', opacity: trading.myLocked ? 0.6 : 1 }}
                    >
                      <div style={{ fontSize: '2rem' }}>{item.icon || '📦'}</div>
                    </motion.div>
                  ))}
                  {trading.myOffer.length === 0 && (
                    <div className="col-span-3 text-center py-8 text-[var(--text-muted)] italic text-sm">
                      Select items from inventory to offer
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-between items-center px-3 py-2 bg-black/40 rounded border border-[var(--panel-border)]">
              <span className="text-[var(--text-muted)] text-sm font-bold">CREDITS:</span>
              <span className="text-[var(--accent-primary)] font-bold text-lg">{trading.myCreditsOffer}</span>
            </div>

            <div className="flex gap-2 mt-2">
              <button 
                className="aaa-button flex-1" 
                onClick={trading.toggleLock}
                style={{ 
                  backgroundColor: trading.myLocked ? '#333' : 'var(--accent-primary)', 
                  color: trading.myLocked ? '#fff' : '#000',
                  border: trading.myLocked ? '1px solid var(--panel-border)' : 'none'
                }}
              >
                {trading.myLocked ? 'UNLOCK' : 'LOCK OFFER'}
              </button>
              <button 
                className="aaa-button flex-1"
                disabled={!trading.myLocked || !trading.theirLocked || trading.myAccepted}
                onClick={trading.confirmTrade}
                style={{ 
                  opacity: (!trading.myLocked || !trading.theirLocked || trading.myAccepted) ? 0.4 : 1,
                  borderLeft: trading.myAccepted ? '4px solid #00ff88' : 'none',
                  backgroundColor: trading.myAccepted ? '#00ff8822' : undefined,
                  color: trading.myAccepted ? '#00ff88' : undefined
                }}
              >
                {trading.myAccepted ? 'ACCEPTED' : 'CONFIRM'}
              </button>
            </div>
          </div>

          {/* MIDDLE: INVENTORY */}
          <div className="flex-1 flex flex-col gap-4 border-l border-r border-[var(--panel-border)] px-4">
            <div className="aaa-label text-center">INVENTORY</div>
            
            <form onSubmit={handleOfferCredits} className="flex gap-2">
              <input 
                type="number"
                placeholder="Credits..." 
                className="aaa-input flex-1 min-w-0" 
                value={inputCredits}
                onChange={e => setInputCredits(e.target.value)}
                disabled={trading.myLocked}
                min="0"
                max={credits}
              />
              <button type="submit" className="aaa-button" disabled={trading.myLocked}>ADD</button>
            </form>
            
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="aaa-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {availableInventory.map((item: any) => (
                  <div 
                    key={item.instanceId}
                    className="aaa-item-slot cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => trading.offerItem({ 
                      instanceId: item.instanceId, 
                      itemId: item.itemId, 
                      name: item.name, 
                      icon: item.icon 
                    })}
                    style={{ aspectRatio: '1', opacity: trading.myLocked ? 0.3 : 1 }}
                    title={item.name || item.itemId || 'Item'}
                  >
                    <div style={{ fontSize: '1.8rem' }}>{item.icon || '📦'}</div>
                  </div>
                ))}
                {availableInventory.length === 0 && (
                  <div className="col-span-3 text-center py-8 text-[var(--text-muted)] italic text-sm">
                    No items available
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: THEIR OFFER */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="aaa-label flex justify-between">
              <span>{trading.targetName?.toUpperCase() || 'THEIR'} OFFER</span>
              <span style={{ color: trading.theirLocked ? '#00ff88' : 'var(--text-muted)' }}>
                {trading.theirLocked ? '🔒 LOCKED' : '🔓 EDITING'}
              </span>
            </div>
            
            <div className="flex-1 border border-[var(--panel-border)] bg-black/30 p-2 overflow-y-auto rounded">
              <div className="aaa-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <AnimatePresence>
                  {trading.theirOffer.map((item) => (
                    <motion.div 
                      key={item.instanceId}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="aaa-item-slot"
                      style={{ aspectRatio: '1' }}
                      title={item.name || item.itemId || 'Item'}
                    >
                      <div style={{ fontSize: '2rem' }}>{item.icon || '📦'}</div>
                    </motion.div>
                  ))}
                  {trading.theirOffer.length === 0 && (
                    <div className="col-span-3 text-center py-8 text-[var(--text-muted)] italic text-sm">
                      Waiting for items...
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-between items-center px-3 py-2 bg-black/40 rounded border border-[var(--panel-border)]">
              <span className="text-[var(--text-muted)] text-sm font-bold">CREDITS:</span>
              <span className="text-[var(--accent-primary)] font-bold text-lg">{trading.theirCreditsOffer}</span>
            </div>

            <div 
              className="mt-2 h-[42px] flex items-center justify-center rounded font-bold tracking-wide" 
              style={{ 
                color: trading.theirAccepted ? '#00ff88' : 'var(--text-muted)', 
                border: `1px solid ${trading.theirAccepted ? '#00ff88' : 'var(--panel-border)'}`, 
                background: trading.theirAccepted ? '#00ff8822' : 'rgba(0,0,0,0.3)' 
              }}
            >
              {trading.theirAccepted ? 'PARTNER ACCEPTED' : 'WAITING FOR PARTNER...'}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
