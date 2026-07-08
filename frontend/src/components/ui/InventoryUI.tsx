import React, { useState } from 'react';
import { useInventoryStore, Item, InventoryState } from '../../store/inventoryStore';

export const InventoryUI: React.FC = () => {
  const isOpen = useInventoryStore((state) => state.isOpen);
  const items = useInventoryStore((state) => state.items);
  const equipment = useInventoryStore((state) => state.equipment);
  const moveItem = useInventoryStore((state) => state.moveItem);
  const equipItem = useInventoryStore((state) => state.equipItem);
  const unequipItem = useInventoryStore((state) => state.unequipItem);

  if (!isOpen) return null;

  const handleDragStart = (e: React.DragEvent, type: 'inventory' | 'equipment', indexOrSlot: number | string) => {
    e.dataTransfer.setData('type', type);
    e.dataTransfer.setData('source', indexOrSlot.toString());
  };

  const handleDropInventory = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const source = e.dataTransfer.getData('source');

    if (type === 'inventory') {
      const fromIndex = parseInt(source, 10);
      if (fromIndex !== toIndex) {
        moveItem(fromIndex, toIndex);
      }
    } else if (type === 'equipment') {
      unequipItem(source as keyof InventoryState['equipment']);
    }
  };

  const handleDropEquipment = (e: React.DragEvent, slot: keyof InventoryState['equipment']) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const source = e.dataTransfer.getData('source');

    if (type === 'inventory') {
      const fromIndex = parseInt(source, 10);
      equipItem(fromIndex, slot);
    }
    // Cannot drag equipment to equipment directly right now
  };

  const renderSlot = (item: Item | null, onDragStart: (e: React.DragEvent) => void, onDrop: (e: React.DragEvent) => void) => (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      style={{
        width: '48px',
        height: '48px',
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: item ? 'grab' : 'default',
        position: 'relative',
      }}
      draggable={!!item}
      onDragStart={item ? onDragStart : undefined}
      title={item ? `${item.name}\n${item.description || ''}` : undefined}
    >
      {item && (
        <div style={{
          width: '100%', height: '100%',
          backgroundImage: `url(${item.icon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#2c3e50', // fallback if no icon
        }}>
          {!item.icon.startsWith('http') && <span style={{ fontSize: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>{item.name.substring(0,4)}</span>}
        </div>
      )}
    </div>
  );

  return (
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: '600px',
      height: '400px',
      background: 'rgba(20, 20, 20, 0.95)',
      border: '1px solid #666',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'row',
      color: 'white',
      fontFamily: 'sans-serif',
      zIndex: 1000,
      pointerEvents: 'auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    }}>
      {/* Equipment Panel */}
      <div style={{ width: '40%', padding: '20px', borderRight: '1px solid #444' }}>
        <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>Equipment</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>Head</div>
            {renderSlot(equipment.head, (e) => handleDragStart(e, 'equipment', 'head'), (e) => handleDropEquipment(e, 'head'))}
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>Chest</div>
            {renderSlot(equipment.chest, (e) => handleDragStart(e, 'equipment', 'chest'), (e) => handleDropEquipment(e, 'chest'))}
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>Main Hand</div>
              {renderSlot(equipment.mainHand, (e) => handleDragStart(e, 'equipment', 'mainHand'), (e) => handleDropEquipment(e, 'mainHand'))}
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>Off Hand</div>
              {renderSlot(equipment.offHand, (e) => handleDragStart(e, 'equipment', 'offHand'), (e) => handleDropEquipment(e, 'offHand'))}
            </div>
          </div>
        </div>
      </div>

      {/* Backpack Panel */}
      <div style={{ width: '60%', padding: '20px' }}>
        <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>Backpack</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '8px',
        }}>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {renderSlot(item, (e) => handleDragStart(e, 'inventory', idx), (e) => handleDropInventory(e, idx))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
