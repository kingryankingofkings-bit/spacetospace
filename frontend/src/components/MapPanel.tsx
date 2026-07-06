import React, { useState } from 'react';
import { MAPS } from '../data/mapConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion } from 'framer-motion';

interface MapPanelProps {
  onClose: () => void;
}

export const MapPanel: React.FC<MapPanelProps> = ({ onClose }) => {
  const [currentMapId, setCurrentMapId] = useState<string>('world_map');
  const currentMap = MAPS[currentMapId];
  
  const players = useMultiplayerStore(state => state.players);
  const sessionId = useMultiplayerStore(state => state.sessionId);
  const onFastTravel = useMultiplayerStore(state => state.sendFastTravel);
  const localPlayer = players.find(p => p.id === sessionId);
  const currentZone = localPlayer?.zone || 'urban_core';

  if (!currentMap) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(20px)' }}
      />
      
      {/* Header / Navigation */}
      <div className="absolute z-50 flex items-center gap-4" style={{ top: '40px', left: '40px' }}>
        {currentMapId !== 'world_map' && (
          <button 
            onClick={() => setCurrentMapId('world_map')}
            className="aaa-button"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            ← Back to World Map
          </button>
        )}
        <h2 style={{ margin: 0, fontSize: '2rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent-primary)', textShadow: '0 0 15px var(--accent-primary-glow)' }}>
          {currentMap.name}
        </h2>
      </div>

      <button 
        onClick={onClose}
        className="aaa-button absolute z-50 flex items-center justify-center"
        style={{ top: '40px', right: '40px', width: '48px', height: '48px', padding: 0, borderRadius: '50%', fontSize: '1.5rem' }}
      >
        ✕
      </button>

      {/* Map Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="aaa-panel relative"
        style={{
          width: '85%', height: '80%',
          maxWidth: '1400px',
          padding: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute', inset: '24px',
          backgroundImage: `url(${currentMap.imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
        }}>
          {/* Hotspots */}
          {currentMap.hotspots.map(hotspot => {
            const isCurrent = currentZone === hotspot.targetId;
            const isDrillDown = hotspot.type === 'drill_down';
            
            return (
              <motion.div 
                key={hotspot.id}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                style={{
                  position: 'absolute',
                  top: hotspot.top,
                  left: hotspot.left,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.8))'
                }}
                onClick={() => {
                  if (isDrillDown) {
                    setCurrentMapId(hotspot.targetId);
                  } else if (hotspot.type === 'fast_travel') {
                    onFastTravel(hotspot.targetId);
                    onClose();
                  }
                }}
              >
                {/* Marker Icon */}
                <div style={{
                  width: isDrillDown ? '40px' : '24px', 
                  height: isDrillDown ? '40px' : '24px',
                  borderRadius: isDrillDown ? '8px' : '50%',
                  background: isCurrent ? 'var(--accent-primary)' : (isDrillDown ? 'rgba(0, 150, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'),
                  boxShadow: isCurrent ? '0 0 20px var(--accent-primary-glow)' : 'inset 0 0 10px rgba(255,255,255,0.5)',
                  border: isCurrent ? '2px solid white' : '1px solid rgba(255,255,255,0.5)',
                  marginBottom: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 'bold', fontSize: isDrillDown ? '1.5rem' : '1rem',
                  backdropFilter: 'blur(4px)'
                }}>
                  {isDrillDown && '+'}
                </div>

                {/* Label */}
                <div style={{
                  background: 'rgba(10, 10, 15, 0.9)',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '0.85rem',
                  fontWeight: isDrillDown ? 800 : 600,
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: isDrillDown ? 'var(--accent-primary)' : 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.8)'
                }}>
                  {hotspot.name}
                  {isCurrent && <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>(ACTIVE)</span>}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  );
};
