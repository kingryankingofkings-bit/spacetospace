import React, { useState } from 'react';
import { MAPS } from '../data/mapConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';

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
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(20px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: 'white', fontFamily: 'Outfit, sans-serif'
    }}>
      
      {/* Header / Navigation */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        {currentMapId !== 'world_map' && (
          <button 
            onClick={() => setCurrentMapId('world_map')}
            style={{
              background: 'rgba(0, 255, 136, 0.2)', border: '1px solid #00ff88',
              color: '#00ff88', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',
              fontWeight: 'bold', fontSize: '14px', backdropFilter: 'blur(5px)'
            }}
          >
            ← Back to World Map
          </button>
        )}
        <h2 style={{ margin: 0, fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {currentMap.name}
        </h2>
      </div>

      {/* Map Container */}
      <div style={{
        position: 'relative',
        width: '80%', height: '80%',
        maxWidth: '1200px',
        backgroundImage: `url(${currentMap.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        borderRadius: '16px',
        boxShadow: '0 0 50px rgba(0, 255, 136, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'rgba(255, 255, 255, 0.1)', border: 'none',
            color: 'white', fontSize: '24px', cursor: 'pointer',
            width: '40px', height: '40px', borderRadius: '50%',
            backdropFilter: 'blur(5px)'
          }}
        >
          ×
        </button>

        {/* Hotspots */}
        {currentMap.hotspots.map(hotspot => (
          <div 
            key={hotspot.id}
            style={{
              position: 'absolute',
              top: hotspot.top,
              left: hotspot.left,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s, filter 0.2s',
              filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.8))'
            }}
            onClick={() => {
              if (hotspot.type === 'drill_down') {
                setCurrentMapId(hotspot.targetId);
              } else if (hotspot.type === 'fast_travel') {
                onFastTravel(hotspot.targetId);
                onClose();
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
            }}
          >
            {/* Marker Icon */}
            <div style={{
              width: hotspot.type === 'drill_down' ? '32px' : '20px', 
              height: hotspot.type === 'drill_down' ? '32px' : '20px',
              borderRadius: hotspot.type === 'drill_down' ? '8px' : '50%',
              background: currentZone === hotspot.targetId 
                ? '#00ff88' 
                : (hotspot.type === 'drill_down' ? 'rgba(0, 150, 255, 0.6)' : 'rgba(255, 255, 255, 0.5)'),
              boxShadow: currentZone === hotspot.targetId ? '0 0 20px #00ff88' : 'none',
              border: '2px solid white',
              marginBottom: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 'bold'
            }}>
              {hotspot.type === 'drill_down' && '+'}
            </div>

            {/* Label */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: hotspot.type === 'drill_down' ? 'bold' : 'normal',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: hotspot.type === 'drill_down' ? '#00bfff' : 'white'
            }}>
              {hotspot.name}
              {currentZone === hotspot.targetId && <span style={{ color: '#00ff88', marginLeft: '8px' }}>(You are here)</span>}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};
