import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MathUtils } from 'three';

export interface TelegraphIndicatorProps {
  position: [number, number, number];
  radius: number;
  duration: number; // in seconds
  color?: string;
}

/**
 * TelegraphIndicator
 * 
 * Renders an expanding/pulsing circular indicator to telegraph an upcoming attack (AOE).
 * The inner circle expands over `duration` until it fills the radius, matching standard Action RPG telegraphs.
 */
export const TelegraphIndicator: React.FC<TelegraphIndicatorProps> = ({ 
  position, 
  radius, 
  duration, 
  color = '#ff0000' 
}) => {
  const outerRef = useRef<Mesh>(null);
  const innerRef = useRef<Mesh>(null);
  const startTime = useRef(performance.now());

  useFrame(() => {
    if (!innerRef.current || !outerRef.current) return;
    
    const elapsed = (performance.now() - startTime.current) / 1000;
    const progress = MathUtils.clamp(elapsed / duration, 0, 1);
    
    // Scale the inner circle to indicate timing
    innerRef.current.scale.set(radius * progress, radius * progress, 1);
    
    // Pulse the opacity of the outer circle slightly
    const outerMat = outerRef.current.material as any;
    if (outerMat) {
      outerMat.opacity = 0.2 + Math.sin(elapsed * 10) * 0.05;
    }
  });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Outer Ring - Shows the max area */}
      <mesh ref={outerRef} position={[0, 0, 0.01]}>
        <ringGeometry args={[radius - 0.1, radius, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} depthWrite={false} />
      </mesh>
      
      {/* Inner Circle - Expands to show timing */}
      <mesh ref={innerRef}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} depthWrite={false} />
      </mesh>
    </group>
  );
};
