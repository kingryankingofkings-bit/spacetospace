import React from 'react';
import { Html } from '@react-three/drei';

export interface HealthBar3DProps {
  currentHealth: number;
  maxHealth: number;
  position?: [number, number, number];
  visible?: boolean;
}

export const HealthBar3D: React.FC<HealthBar3DProps> = ({ 
  currentHealth, 
  maxHealth, 
  position = [0, 3, 0],
  visible = true
}) => {
  if (!visible || maxHealth <= 0) return null;
  
  const percentage = Math.max(0, Math.min(100, (currentHealth / maxHealth) * 100));

  return (
    <Html position={position} center style={{ pointerEvents: 'none' }}>
      <div 
        style={{
          width: '100px',
          height: '10px',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid #333',
          borderRadius: '5px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: percentage > 50 ? '#00ff88' : percentage > 20 ? '#ffaa00' : '#ff0044',
            transition: 'width 0.2s ease-out, background 0.2s ease-out'
          }}
        />
      </div>
    </Html>
  );
};
