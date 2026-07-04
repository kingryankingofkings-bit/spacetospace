import React, { useState, useEffect } from 'react';
import { useToolStore } from '../store/toolStore';

export const PropertiesPanel: React.FC = () => {
  const selectedEntityId = useToolStore(state => state.selectedEntityId);
  const localMods = useToolStore(state => state.localMods);
  const setLocalMod = useToolStore(state => state.setLocalMod);

  const [scale, setScale] = useState<number>(1);
  const [color, setColor] = useState<string>('#ffffff');
  const [vfx, setVfx] = useState<string>('None');

  useEffect(() => {
    if (selectedEntityId && localMods[selectedEntityId]) {
      const mod = localMods[selectedEntityId];
      setScale(mod.scaleMod || 1);
      setColor(mod.colorTint || '#ffffff');
      setVfx(mod.vfx || 'None');
    } else {
      setScale(1);
      setColor('#ffffff');
      setVfx('None');
    }
  }, [selectedEntityId, localMods]);

  if (!selectedEntityId) {
    return (
      <div className="glass-panel" style={{ width: '300px' }}>
        <div className="panel-header">Aesthetic Mod</div>
        <div style={{ color: '#ccc', fontSize: '0.9rem', textAlign: 'center', padding: '20px 0' }}>
          Select an entity using the Mod Tool.
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setLocalMod(selectedEntityId, {
      scaleMod: scale,
      colorTint: color,
      vfx: vfx
    });
  };

  return (
    <div className="glass-panel" style={{ width: '300px' }}>
      <div className="panel-header">Aesthetic Mod</div>
      <div style={{ color: '#00ffff', fontSize: '0.8rem', marginBottom: '10px' }}>
        Target ID: {selectedEntityId}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', display: 'flex', justifyContent: 'space-between' }}>
            <span>Scale Multiplier</span>
            <span>{scale.toFixed(1)}x</span>
          </label>
          <input 
            type="range" 
            min="0.1" 
            max="10.0" 
            step="0.1" 
            value={scale} 
            onChange={(e) => setScale(parseFloat(e.target.value))} 
            style={{ width: '100%', cursor: 'pointer' }} 
          />
        </div>
        
        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '4px', display: 'block' }}>
            Color Tint
          </label>
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'transparent', padding: 0 }} 
          />
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '4px', display: 'block' }}>
            Particle VFX
          </label>
          <select 
            value={vfx} 
            onChange={(e) => setVfx(e.target.value)}
            style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px' }}
          >
            <option value="None">None</option>
            <option value="flame">Ignited Flames (Orange)</option>
            <option value="sparkle">Cosmic Sparkles (Yellow)</option>
            <option value="aura">Divine Aura (Glowing)</option>
          </select>
        </div>

        <button 
          onClick={handleApply}
          style={{
            marginTop: '10px',
            padding: '10px',
            background: 'linear-gradient(45deg, #00d2ff 0%, #3a7bd5 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0, 210, 255, 0.5)'
          }}
        >
          APPLY LOCAL MOD
        </button>
      </div>
    </div>
  );
};
