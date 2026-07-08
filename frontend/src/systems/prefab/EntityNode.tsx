import React, { useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox, useSphere, useCylinder, usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import { EntityState, PrefabConfig, ModelComponentConfig } from './types';
import { PrefabRegistry } from './PrefabRegistry';

interface EntityNodeProps {
  entity: EntityState;
}

export const EntityNode: React.FC<EntityNodeProps> = ({ entity }) => {
  const prefab = PrefabRegistry.get(entity.prefabId);

  if (!prefab) {
    console.warn(`Prefab ${entity.prefabId} not found in registry`);
    return null;
  }

  return <PhysicsNode entity={entity} prefab={prefab} />;
};

const PhysicsNode: React.FC<{ entity: EntityState; prefab: PrefabConfig }> = ({ entity, prefab }) => {
  const { physics, model } = prefab;

  if (!physics) {
    return (
      <group position={entity.position} rotation={entity.rotation} scale={entity.scale}>
        {model && <ModelNode modelConfig={model} />}
      </group>
    );
  }

  switch (physics.type) {
    case 'box':
      return <BoxEntity entity={entity} prefab={prefab} />;
    case 'sphere':
      return <SphereEntity entity={entity} prefab={prefab} />;
    case 'cylinder':
      return <CylinderEntity entity={entity} prefab={prefab} />;
    case 'plane':
      return <PlaneEntity entity={entity} prefab={prefab} />;
    default:
      return <BoxEntity entity={entity} prefab={prefab} />;
  }
};

const ModelNode: React.FC<{ modelConfig: ModelComponentConfig }> = ({ modelConfig }) => {
  // Preload to ensure Suspense doesn't stall unnecessarily if preloaded elsewhere
  useEffect(() => {
    useGLTF.preload(modelConfig.url);
  }, [modelConfig.url]);

  const { scene } = useGLTF(modelConfig.url);
  
  // Clone the scene for independent instance transformations and materials
  const clone = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (modelConfig.castShadow || modelConfig.receiveShadow) {
      clone.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = !!modelConfig.castShadow;
          child.receiveShadow = !!modelConfig.receiveShadow;
        }
      });
    }
  }, [clone, modelConfig]);

  return <primitive object={clone} />;
};

// --- Physics Wrappers ---

const BoxEntity: React.FC<{ entity: EntityState; prefab: PrefabConfig }> = ({ entity, prefab }) => {
  const [ref] = useBox(() => ({
    mass: prefab.physics!.mass ?? 0,
    position: entity.position,
    rotation: entity.rotation,
    args: prefab.physics!.args as any ?? [1, 1, 1],
    fixedRotation: prefab.physics!.fixedRotation,
    isTrigger: prefab.physics!.isTrigger,
  }));

  return (
    <group ref={ref as any} scale={entity.scale}>
      {prefab.model && <ModelNode modelConfig={prefab.model} />}
    </group>
  );
};

const SphereEntity: React.FC<{ entity: EntityState; prefab: PrefabConfig }> = ({ entity, prefab }) => {
  const [ref] = useSphere(() => ({
    mass: prefab.physics!.mass ?? 0,
    position: entity.position,
    rotation: entity.rotation,
    args: prefab.physics!.args as any ?? [1],
    fixedRotation: prefab.physics!.fixedRotation,
    isTrigger: prefab.physics!.isTrigger,
  }));

  return (
    <group ref={ref as any} scale={entity.scale}>
      {prefab.model && <ModelNode modelConfig={prefab.model} />}
    </group>
  );
};

const CylinderEntity: React.FC<{ entity: EntityState; prefab: PrefabConfig }> = ({ entity, prefab }) => {
  const [ref] = useCylinder(() => ({
    mass: prefab.physics!.mass ?? 0,
    position: entity.position,
    rotation: entity.rotation,
    args: prefab.physics!.args as any ?? [1, 1, 1, 8],
    fixedRotation: prefab.physics!.fixedRotation,
    isTrigger: prefab.physics!.isTrigger,
  }));

  return (
    <group ref={ref as any} scale={entity.scale}>
      {prefab.model && <ModelNode modelConfig={prefab.model} />}
    </group>
  );
};

const PlaneEntity: React.FC<{ entity: EntityState; prefab: PrefabConfig }> = ({ entity, prefab }) => {
  const [ref] = usePlane(() => ({
    mass: prefab.physics!.mass ?? 0,
    position: entity.position,
    rotation: entity.rotation,
    args: prefab.physics!.args as any,
    fixedRotation: prefab.physics!.fixedRotation,
    isTrigger: prefab.physics!.isTrigger,
  }));

  return (
    <group ref={ref as any} scale={entity.scale}>
      {prefab.model && <ModelNode modelConfig={prefab.model} />}
    </group>
  );
};
