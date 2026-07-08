import React from 'react';
import { useMultiplayerStore } from '../../store/multiplayerStore';

const RESET_BEACON = { x: 0, y: 0, z: 0 }; // Predefined reset beacon location

export const DeathHUD: React.FC = () => {
  const health = useMultiplayerStore((state) => state.health);
  const sendMove = useMultiplayerStore((state) => state.sendMove);

  if (health > 0) return null;

  const handleRespawn = () => {
    // 1. Teleport the player to the reset beacon
    sendMove(RESET_BEACON.x, RESET_BEACON.y, RESET_BEACON.z);
    
    // 2. Optimistically reset local health
    useMultiplayerStore.setState({ health: 100 });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      color: 'red',
      fontFamily: 'serif'
    }}>
      <h1 style={{ fontSize: '5rem', marginBottom: '2rem', textShadow: '2px 2px 4px black' }}>YOU DIED</h1>
      <button 
        onClick={handleRespawn}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          backgroundColor: '#222',
          color: '#fff',
          border: '1px solid red',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'all 0.2s ease-in-out'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#442222'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#222'}
      >
        Release Spirit
      </button>
    </div>
  );
};
