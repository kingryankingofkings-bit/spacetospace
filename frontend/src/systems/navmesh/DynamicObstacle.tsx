import React, { useEffect } from 'react';
import { useBox } from '@react-three/cannon';

export interface DynamicObstacleProps {
  position: [number, number, number];
  size?: [number, number, number];
  rotation?: [number, number, number];
  id?: string;
  isDestructible?: boolean;
}

export const DynamicObstacle: React.FC<DynamicObstacleProps> = ({ 
  position, 
  size = [1, 1, 1], 
  rotation = [0, 0, 0],
  id = 'obstacle',
  isDestructible = false
}) => {
  // Use a physics box to block NPCs that move using physics
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
    rotation,
    args: size,
    userData: { isObstacle: true, id, isDestructible }
  }));

  return (
    <group ref={ref as any}>
      {/* Visual representation could go here, or it wraps a child */}
    </group>
  );
};
