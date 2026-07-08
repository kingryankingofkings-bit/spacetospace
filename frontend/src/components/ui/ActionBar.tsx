import React, { useEffect, useState } from 'react';
import { useMultiplayerStore } from '../../store/multiplayerStore';

export const ActionBar: React.FC = () => {
  const [activeSlot, setActiveSlot] = useState<number>(-1);

  // Example skills
  const skills = [
    { id: 1, name: 'Basic Attack', icon: '⚔️', keybind: '1' },
    { id: 2, name: 'Fireball', icon: '🔥', keybind: '2' },
    { id: 3, name: 'Heal', icon: '✨', keybind: '3' },
    { id: 4, name: 'Dash', icon: '💨', keybind: '4' },
    { id: 5, name: 'Ultimate', icon: '💥', keybind: '5' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (!isNaN(key) && key >= 1 && key <= 5) {
        setActiveSlot(key - 1);
        setTimeout(() => setActiveSlot(-1), 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      padding: '10px',
      background: 'rgba(20, 25, 35, 0.8)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      pointerEvents: 'auto',
      userSelect: 'none'
    }}>
      {skills.map((skill, index) => (
        <div key={skill.id} style={{
          position: 'relative',
          width: '50px',
          height: '50px',
          background: activeSlot === index ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.6)',
          border: `2px solid ${activeSlot === index ? '#4a9eff' : '#333'}`,
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          transition: 'all 0.1s ease',
          transform: activeSlot === index ? 'scale(0.95)' : 'scale(1)',
          boxShadow: activeSlot === index ? '0 0 10px #4a9eff inset' : 'none'
        }}>
          {skill.icon}
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            background: '#1a1a24',
            border: '1px solid #4a9eff',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#fff'
          }}>
            {skill.keybind}
          </div>
        </div>
      ))}
    </div>
  );
};
