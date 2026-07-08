import React, { useMemo } from 'react';
import { useMultiplayerStore } from '../../store/multiplayerStore';

export const Minimap = React.memo(() => {
  const localPlayer = useMultiplayerStore(state => state.players.find(p => p.id === state.sessionId));
  const worldNpcs = useMultiplayerStore(state => state.worldNpcs);
  const bosses = useMultiplayerStore(state => state.bosses);
  const players = useMultiplayerStore(state => state.players);

  // Radar scale (how many units a pixel represents)
  const scale = 2;
  const radius = 100; // pixels

  const blips = useMemo(() => {
    if (!localPlayer) return [];
    const px = localPlayer.x;
    const pz = localPlayer.z;

    const entities: { id: string; x: number; z: number; type: 'npc' | 'boss' | 'player', color: string, size: number }[] = [];

    worldNpcs.forEach(n => {
      entities.push({ id: n.id, x: n.x, z: n.z, type: 'npc', color: '#facc15', size: 4 });
    });
    bosses.forEach(b => {
      entities.push({ id: b.id, x: b.x, z: b.z, type: 'boss', color: '#ef4444', size: 6 });
    });
    players.forEach(p => {
      if (p.id !== localPlayer.id) {
        entities.push({ id: p.id, x: p.x, z: p.z, type: 'player', color: '#3b82f6', size: 4 });
      }
    });

    return entities.map(e => {
      // Calculate relative position
      const dx = (e.x - px) * scale;
      const dz = (e.z - pz) * scale;
      
      // Calculate distance to edge
      const dist = Math.sqrt(dx*dx + dz*dz);
      if (dist > radius - e.size) {
        // Normalize and place on edge if too far
        const ratio = (radius - e.size) / dist;
        return { ...e, rx: dx * ratio, ry: dz * ratio, opacity: 0.4 };
      }
      return { ...e, rx: dx, ry: dz, opacity: 1 };
    });
  }, [localPlayer, worldNpcs, bosses, players]);

  if (!localPlayer) return null;

  return (
    <div 
      className="absolute top-4 right-4 z-50 rounded-full overflow-hidden border-2"
      style={{ 
        width: `${radius * 2}px`, 
        height: `${radius * 2}px`, 
        borderColor: 'var(--accent-primary)',
        background: 'rgba(0,10,20,0.8)',
        boxShadow: '0 0 20px rgba(0,240,255,0.2), inset 0 0 20px rgba(0,0,0,0.8)'
      }}
    >
      {/* Radar Grid/Pattern */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, rgba(0,240,255,0.1) 100%),
            linear-gradient(rgba(0,240,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 20px 20px, 20px 20px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Sweep Animation */}
      <div 
        className="absolute top-1/2 left-1/2 origin-top-left pointer-events-none mix-blend-screen"
        style={{
          width: radius,
          height: radius,
          background: 'conic-gradient(from 180deg, rgba(0,240,255,0.5) 0deg, transparent 60deg)',
          animation: 'radar-sweep 4s linear infinite'
        }}
      />
      <style>
        {`
          @keyframes radar-sweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Center Player Icon */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_white]"
        style={{ width: '6px', height: '6px' }}
      />

      {/* Blips */}
      {blips.map(b => (
        <div 
          key={b.id}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            backgroundColor: b.color,
            boxShadow: `0 0 8px ${b.color}`,
            transform: `translate(calc(-50% + ${b.rx}px), calc(-50% + ${b.ry}px))`,
            opacity: b.opacity,
            transition: 'transform 0.1s linear' // smooth updates
          }}
          title={b.type.toUpperCase()}
        />
      ))}
    </div>
  );
});
