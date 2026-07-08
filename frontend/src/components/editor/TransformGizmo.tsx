import React, { useRef, useEffect } from 'react';
import { TransformControls } from '@react-three/drei';
import { useToolStore } from '../../store/toolStore';

export const TransformGizmo: React.FC = () => {
  const { isEditorMode, selectedEntityId, sceneNodes, updateSceneNode } = useToolStore();
  const transformRef = useRef<any>(null);

  // If not in editor mode or nothing selected, render nothing
  if (!isEditorMode || !selectedEntityId) return null;

  const selectedNode = sceneNodes.find(n => n.id === selectedEntityId);
  if (!selectedNode) return null;

  // We need to attach TransformControls to a proxy object or directly update the store.
  // The easiest way is to use the onChange event of TransformControls to update the store.

  return (
    <TransformControls
      ref={transformRef}
      position={selectedNode.position}
      rotation={selectedNode.rotation}
      scale={selectedNode.scale}
      mode="translate" // could make this dynamic (translate/rotate/scale)
      onObjectChange={(e) => {
        if (!transformRef.current) return;
        const obj = transformRef.current.object;
        if (obj) {
          updateSceneNode(selectedEntityId, {
            position: [obj.position.x, obj.position.y, obj.position.z],
            rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
            scale: [obj.scale.x, obj.scale.y, obj.scale.z]
          });
        }
      }}
    />
  );
};
