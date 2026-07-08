import React from 'react';
import { useToolStore } from '../../store/toolStore';
import { EditorManager } from '../../systems/editor/EditorManager';

export const EditorPanel: React.FC = () => {
  const { 
    isEditorMode, 
    setIsEditorMode, 
    sceneNodes, 
    selectedEntityId,
    updateSceneNode,
    setSceneNodes
  } = useToolStore();

  const handleSave = async () => {
    await EditorManager.saveScene({ nodes: sceneNodes });
  };

  const handleLoad = async () => {
    const data = await EditorManager.loadScene();
    if (data && data.nodes) {
      setSceneNodes(data.nodes);
    }
  };

  const selectedNode = sceneNodes.find(n => n.id === selectedEntityId);

  const handleUpdateNum = (field: 'position' | 'rotation' | 'scale', index: number, val: string) => {
    if (!selectedNode) return;
    const num = parseFloat(val) || 0;
    const newArr = [...selectedNode[field]] as [number, number, number];
    newArr[index] = num;
    updateSceneNode(selectedNode.id, { [field]: newArr });
  };

  return (
    <div style={{
      position: 'absolute',
      top: 10,
      right: 10,
      width: 300,
      background: 'rgba(20, 20, 20, 0.9)',
      color: 'white',
      padding: 15,
      borderRadius: 8,
      border: '1px solid #444',
      zIndex: 1000,
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px', borderBottom: '1px solid #444', paddingBottom: 5 }}>
        Engine Editor
      </h2>
      
      <div style={{ marginBottom: 15 }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={isEditorMode} 
            onChange={e => setIsEditorMode(e.target.checked)} 
            style={{ marginRight: 8 }}
          />
          Enable Editor Mode
        </label>
      </div>

      {isEditorMode && (
        <>
          <div style={{ display: 'flex', gap: '10px', marginBottom: 15 }}>
            <button onClick={handleSave} style={btnStyle}>Save Scene</button>
            <button onClick={handleLoad} style={btnStyle}>Load Scene</button>
          </div>

          <div style={{ marginBottom: 15 }}>
            <h3 style={{ fontSize: '14px', margin: '0 0 5px 0' }}>Nodes ({sceneNodes.length})</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', maxHeight: '150px', overflowY: 'auto', background: '#111', border: '1px solid #333' }}>
              {sceneNodes.map(n => (
                <li 
                  key={n.id} 
                  onClick={() => useToolStore.getState().setSelectedEntityId(n.id)}
                  style={{
                    padding: '4px 8px',
                    cursor: 'pointer',
                    background: n.id === selectedEntityId ? '#3a3a3a' : 'transparent',
                    borderBottom: '1px solid #222'
                  }}
                >
                  {n.id} ({n.type})
                </li>
              ))}
            </ul>
          </div>

          {selectedNode && (
            <div style={{ background: '#222', padding: 10, borderRadius: 4 }}>
              <h3 style={{ fontSize: '14px', margin: '0 0 10px 0' }}>Properties</h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#aaa' }}>ID: {selectedNode.id}</p>
              
              <FieldRow label="Position" val={selectedNode.position} onChange={(i, v) => handleUpdateNum('position', i, v)} />
              <FieldRow label="Rotation" val={selectedNode.rotation} onChange={(i, v) => handleUpdateNum('rotation', i, v)} />
              <FieldRow label="Scale" val={selectedNode.scale} onChange={(i, v) => handleUpdateNum('scale', i, v)} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const btnStyle = {
  background: '#3498db',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 4,
  cursor: 'pointer',
  flex: 1
};

const FieldRow = ({ label, val, onChange }: { label: string, val: [number, number, number], onChange: (idx: number, v: string) => void }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={{ fontSize: '12px', marginBottom: 2 }}>{label}</div>
    <div style={{ display: 'flex', gap: 4 }}>
      <input type="number" value={val[0]} step="0.1" onChange={e => onChange(0, e.target.value)} style={inputStyle} />
      <input type="number" value={val[1]} step="0.1" onChange={e => onChange(1, e.target.value)} style={inputStyle} />
      <input type="number" value={val[2]} step="0.1" onChange={e => onChange(2, e.target.value)} style={inputStyle} />
    </div>
  </div>
);

const inputStyle = {
  width: '30%',
  background: '#111',
  border: '1px solid #444',
  color: 'white',
  padding: '4px',
  fontSize: '12px'
};
