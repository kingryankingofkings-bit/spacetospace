import React from 'react';
import { usePrefabStore } from './store';
import { EntityNode } from './EntityNode';

export const PrefabManager: React.FC = () => {
  const entities = usePrefabStore((state) => Object.values(state.entities));

  return (
    <group name="prefab-manager">
      {entities.map((entity) => (
        <EntityNode key={entity.id} entity={entity} />
      ))}
    </group>
  );
};
