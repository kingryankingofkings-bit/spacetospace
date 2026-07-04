import React from 'react';
import { useToolStore } from '../store/toolStore';

export const ModEditorPanel: React.FC = () => {
  const activeTool = useToolStore((state) => state.activeTool);
  const selectedEntityId = useToolStore((state) => state.selectedEntityId);
  const localMods = useToolStore((state) => state.localMods);
  const setLocalMod = useToolStore((state) => state.setLocalMod);

  if (activeTool !== 'mod' || !selectedEntityId) {
    return null;
  }

  const modData = localMods[selectedEntityId] || { colorTint: '#ffffff', vfx: 'None', scaleMod: 1 };

  const handleChange = (key: string, value: string | number) => {
    setLocalMod(selectedEntityId, { ...modData, [key]: value });
  };

  return (
    <div className="glass-panel" style={{ width: '300px', marginTop: '20px' }}>
      <div className="panel-header">Aesthetic Modding</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '8px', display: 'block' }}>Color Tint</label>
          <input 
            type="color" 
            value={modData.colorTint} 
            onChange={(e) => handleChange('colorTint', e.target.value)}
            style={{ width: '100%', height: '30px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'transparent', padding: 0 }} 
          />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '8px', display: 'block' }}>VFX</label>
          <select 
            value={modData.vfx}
            onChange={(e) => handleChange('vfx', e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
          >
            <option value="None">None</option>
            <option value="flame">Flame</option>
            <option value="sparkle">Sparkle</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '8px', display: 'block' }}>Scale Mod: {modData.scaleMod}</label>
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1"
            value={modData.scaleMod}
            onChange={(e) => handleChange('scaleMod', parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }} 
          />
        </div>
      </div>
    </div>
  );
};
