import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { useCombatStore, DamageEvent } from './useCombatStore';

const DamageNumber: React.FC<{ event: DamageEvent }> = ({ event }) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<any>(null);
  const startY = event.position[1];
  
  // Random horizontal drift for juice
  const driftX = useMemo(() => (Math.random() - 0.5) * 1.5, []);
  const driftZ = useMemo(() => (Math.random() - 0.5) * 1.5, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const elapsed = (Date.now() - event.timestamp) / 1000;
    
    // Float upwards with deceleration
    groupRef.current.position.y = startY + (elapsed * 3) - (elapsed * elapsed * 1.5); 
    groupRef.current.position.x = event.position[0] + driftX * elapsed;
    groupRef.current.position.z = event.position[2] + driftZ * elapsed;
    
    // Emphasize hits with a dramatic pop scale
    if (event.isCritical) {
      const scale = 1 + Math.max(0, Math.sin(elapsed * Math.PI * 6) * Math.exp(-elapsed * 5));
      groupRef.current.scale.setScalar(scale * 1.3);
    } else {
      const scale = 1 + Math.max(0, Math.sin(elapsed * Math.PI * 4) * 0.5 * Math.exp(-elapsed * 5));
      groupRef.current.scale.setScalar(scale);
    }

    // Fade out
    if (textRef.current) {
        const opacity = Math.max(0, 1 - (elapsed - 0.5) * 2); // starts fading at 0.5s
        textRef.current.fillOpacity = opacity;
        textRef.current.outlineOpacity = opacity;
    }
  });

  const color = useMemo(() => {
    if (event.type === 'heal') return '#44ff44';
    if (event.type === 'magical') return '#aa44ff';
    if (event.isCritical) return '#ffaa00';
    return '#ff4444'; // Red for physical
  }, [event]);

  return (
    <group ref={groupRef} position={event.position}>
      <Billboard>
        <Text
          ref={textRef}
          color={color}
          fontSize={event.isCritical ? 0.9 : 0.6}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.05}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          outlineWidth={event.isCritical ? 0.08 : 0.05}
          outlineColor="#000000"
          material-depthTest={false} 
        >
          {event.type === 'heal' ? '+' : ''}{event.amount}
          {event.isCritical ? '!' : ''}
        </Text>
      </Billboard>
    </group>
  );
};

/**
 * CombatSystem acts as the visual manager for combat feedback.
 * Mount this once within your React Three Fiber <Canvas>.
 */
export const CombatSystem: React.FC = () => {
  const damageEvents = useCombatStore((state) => state.damageEvents);

  return (
    <group name="CombatSystem">
      {damageEvents.map((ev) => (
        <DamageNumber key={ev.id} event={ev} />
      ))}
    </group>
  );
};
