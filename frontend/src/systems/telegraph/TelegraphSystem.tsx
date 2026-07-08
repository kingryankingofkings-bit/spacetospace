import React, { useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Telegraph, CircleTelegraph, ConeTelegraph, LineTelegraph } from './types';
import { useTelegraphStore } from './useTelegraphStore';
import { damageVolumeManager } from './DamageVolumeManager';

const CircleView = ({ telegraph, progress }: { telegraph: CircleTelegraph, progress: number }) => {
  return (
    <group position={new THREE.Vector3(...telegraph.position)}>
      {/* Outline/Background */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[telegraph.radius - 0.1, telegraph.radius, 32]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.3} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {/* Progress Fill */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} scale={progress}>
        <circleGeometry args={[telegraph.radius, 32]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
};

const ConeView = ({ telegraph, progress }: { telegraph: ConeTelegraph, progress: number }) => {
  const euler = useMemo(() => new THREE.Euler(...(telegraph.rotation || [0, 0, 0])), [telegraph.rotation]);
  const thetaLength = telegraph.angle;
  // Rotate circle geometry by Math.PI / 2 so that it naturally points along the local Z axis
  const thetaStart = Math.PI / 2 - thetaLength / 2;

  return (
    <group position={new THREE.Vector3(...telegraph.position)} rotation={euler}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[telegraph.radius - 0.1, telegraph.radius, 32, 1, thetaStart, thetaLength]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.3} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} scale={progress}>
        <circleGeometry args={[telegraph.radius, 32, thetaStart, thetaLength]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
};

const LineView = ({ telegraph, progress }: { telegraph: LineTelegraph, progress: number }) => {
  const euler = useMemo(() => new THREE.Euler(...(telegraph.rotation || [0, 0, 0])), [telegraph.rotation]);

  return (
    <group position={new THREE.Vector3(...telegraph.position)} rotation={euler}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, telegraph.length / 2]}>
        <planeGeometry args={[telegraph.width, telegraph.length]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.2} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, (telegraph.length * progress) / 2]}>
        <planeGeometry args={[telegraph.width, telegraph.length * progress]} />
        <meshBasicMaterial color={telegraph.color || 'red'} transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
};

const TelegraphItem = ({ telegraph, onComplete }: { telegraph: Telegraph, onComplete: (id: string) => void }) => {
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    const now = Date.now();
    const elapsed = (now - telegraph.startTime) / 1000;
    let p = elapsed / telegraph.duration;
    
    if (p >= 1) {
      p = 1;
      onComplete(telegraph.id);
    }
    
    setProgress(p);
  });

  switch (telegraph.shape) {
    case 'circle': return <CircleView telegraph={telegraph as CircleTelegraph} progress={progress} />;
    case 'cone': return <ConeView telegraph={telegraph as ConeTelegraph} progress={progress} />;
    case 'line': return <LineView telegraph={telegraph as LineTelegraph} progress={progress} />;
    default: return null;
  }
};

export const TelegraphSystem = () => {
  const telegraphs = useTelegraphStore((state) => state.telegraphs);
  const removeTelegraph = useTelegraphStore((state) => state.removeTelegraph);

  const handleComplete = (id: string) => {
    const t = telegraphs[id];
    if (t) {
      // Automatically apply damage to registered entities
      damageVolumeManager.applyDamageVolume(t);
      
      // Fire custom callbacks
      if (t.onComplete) {
        t.onComplete(t);
      }
      
      removeTelegraph(id);
    }
  };

  return (
    <group name="TelegraphSystem">
      {Object.values(telegraphs).map((telegraph) => (
        <TelegraphItem key={telegraph.id} telegraph={telegraph} onComplete={handleComplete} />
      ))}
    </group>
  );
};
