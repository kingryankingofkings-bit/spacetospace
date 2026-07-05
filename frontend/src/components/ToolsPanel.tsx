import React from 'react';
import { useToolStore } from '../store/toolStore';

export const ToolsPanel: React.FC = () => {
  const activeTool = useToolStore((state) => state.activeTool);
  const setActiveTool = useToolStore((state) => state.setActiveTool);
  const brushSize = useToolStore((state) => state.brushSize);
  const setBrushSize = useToolStore((state) => state.setBrushSize);
  const selectedColor = useToolStore((state) => state.selectedColor);
  const setSelectedColor = useToolStore((state) => state.setSelectedColor);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case '1': setActiveTool('select'); break;
        case '4': setActiveTool('character'); break;
        case '5': setActiveTool('attack'); break;
        case '6': setActiveTool('mod'); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveTool]);

  return (
    <div className="glass-panel" style={{ width: '250px' }}>
      <div className="panel-header">World Tools</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button 
          className={`tool-button ${activeTool === 'select' ? 'active' : ''}`}
          onClick={() => setActiveTool('select')}
        >
          Select Tool
        </button>

        <button 
          className={`tool-button ${activeTool === 'character' ? 'active' : ''}`}
          onClick={() => setActiveTool('character')}
        >
          Character Maker
        </button>
        <button 
          className={`tool-button ${activeTool === 'attack' ? 'active' : ''}`}
          onClick={() => setActiveTool('attack')}
        >
          Attack
        </button>
        <button 
          className={`tool-button ${activeTool === 'mod' ? 'active' : ''}`}
          onClick={() => setActiveTool('mod')}
        >
          Aesthetic Mod
        </button>

        <div style={{ marginTop: '20px' }}>
          <label style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>
            Brush Size: {brushSize}
          </label>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        <div style={{ marginTop: '15px' }}>
          <label style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>
            Color
          </label>
          <input 
            type="color" 
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{ width: '100%', height: '40px', cursor: 'pointer', border: 'none', background: 'transparent', padding: 0 }}
          />
        </div>
      </div>
    </div>
  );
};
