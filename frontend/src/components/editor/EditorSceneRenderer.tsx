import React, { useEffect } from 'react';
import { useToolStore } from '../../store/toolStore';
import { getAssetByType } from '../../utils/AssetRegistry';
import { useGLTF } from '@react-three/drei';
import { EditorManager } from '../../systems/editor/EditorManager';

const NodeMeshInner: React.FC<{ node: any, asset: any }> = ({ node, asset }) => {
  const { isEditorMode, setSelectedEntityId } = useToolStore();
  const url = `${asset.rootUrl}${asset.sceneFilename}`;
  const { scene } = useGLTF(url);
  
  const cloned = React.useMemo(() => scene.clone(), [scene]);

  return (
    <primitive 
      object={cloned} 
      position={node.position} 
      rotation={node.rotation} 
      scale={node.scale} 
      onClick={(e: any) => {
        if (isEditorMode) {
          e.stopPropagation();
          setSelectedEntityId(node.id);
        }
      }}
    />
  );
};

const NodeMesh: React.FC<{ node: any }> = ({ node }) => {
  const asset = getAssetByType(node.type as any);
  if (!asset) return null;
  return <NodeMeshInner node={node} asset={asset} />;
};

export const EditorSceneRenderer: React.FC = () => {
  const { sceneNodes, setSceneNodes } = useToolStore();

  useEffect(() => {
    // Load scene initially
    EditorManager.loadScene().then(data => {
      if (data && data.nodes) {
        setSceneNodes(data.nodes);
      } else {
        // Default nodes if scene.json doesn't exist or is empty
        setSceneNodes([
          { id: 'fountain_1', type: 'town_fountain', position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] }
        ]);
      }
    });
  }, [setSceneNodes]);

  return (
    <group name="editor-scene">
      {sceneNodes.map(node => (
        <NodeMesh key={node.id} node={node} />
      ))}
    </group>
  );
};
