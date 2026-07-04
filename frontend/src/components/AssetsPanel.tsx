import React from 'react';
import { useToolStore } from '../store/toolStore';

const mockAssets = [
  { id: 'tree', name: 'Tree' },
  { id: 'rock', name: 'Rock' },
  { id: 'house', name: 'House' },
  { id: 'bush', name: 'Bush' },
  { id: 'fence', name: 'Fence' }
];

export const AssetsPanel: React.FC = () => {
  const selectedAssetId = useToolStore((state) => state.selectedAssetId);
  const setSelectedAssetId = useToolStore((state) => state.setSelectedAssetId);

  return (
    <div className="glass-panel" style={{ width: '100%', height: '150px', display: 'flex', flexDirection: 'column' }}>
      <div className="panel-header" style={{ marginBottom: '8px' }}>Assets Browser</div>
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
        {mockAssets.map((asset) => (
          <div 
            key={asset.id} 
            className={`asset-card ${selectedAssetId === asset.id ? 'active' : ''}`}
            onClick={() => setSelectedAssetId(asset.id)}
            style={{ 
              cursor: 'pointer',
              border: selectedAssetId === asset.id ? '2px solid #00ff88' : '1px solid rgba(255,255,255,0.1)',
              background: selectedAssetId === asset.id ? 'rgba(0, 255, 136, 0.1)' : 'rgba(0,0,0,0.3)',
              padding: '10px 20px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '100px'
            }}
          >
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: selectedAssetId === asset.id ? '#00ff88' : '#ccc' }}>
              {asset.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
