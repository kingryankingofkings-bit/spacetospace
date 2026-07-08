import React, { useMemo } from 'react';
import { useGLTF, Environment, Sky } from '@react-three/drei';
import * as THREE from 'three';
import { AutoCollider } from '../physics/AutoCollider';
import { EnvironmentPopulator } from './EnvironmentPopulator';
import { useGraphicsSettingsStore } from '../../store/graphicsSettingsStore';

// Helper to render and setup colliders for individual modular models
const ModularProp: React.FC<{ url: string, position: [number, number, number], rotation?: [number, number, number], scale?: number }> = ({ url, position, rotation = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF(url);
  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        const mesh = node as THREE.Mesh;
        if (mesh.material) {
          // Flatten materials for stylized look
          if (!Array.isArray(mesh.material)) {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (mat.isMeshStandardMaterial) {
              mat.roughness = 0.9;
              mat.metalness = 0.1;
            }
          }
        }
      }
    });
    return c;
  }, [scene]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={clone} />
      <AutoCollider object={clone} meshNameFilter={/.*/} />
    </group>
  );
};

export interface LevelManagerProps {
  levelId: string;
}

export const LevelManager: React.FC<LevelManagerProps> = ({ levelId }) => {
  const shadowQuality = useGraphicsSettingsStore(state => state.shadowQuality);

  return (
    <group name={`Level_${levelId}`}>
      {/* --- Stylized Lighting & Environment --- */}
      <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <ambientLight intensity={0.4} color="#e0eaff" />
      <directionalLight 
        position={[50, 100, 50]} 
        intensity={1.2} 
        color="#fff5e6"
        castShadow={shadowQuality !== 'low'}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0005}
      />
      <hemisphereLight args={['#ffffff', '#444444', 0.3]} />

      {/* --- Ground Plane --- */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#5a7a50" roughness={1} metalness={0} />
      </mesh>
      
      {/* --- Ground Collision --- */}
      <group position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <AutoCollider 
          object={new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial())} 
          meshNameFilter={/.*/} 
        />
      </group>

      {/* --- Authored Town Center Layout --- */}
      <group name="TownCenter">
        {/* Central Fountain */}
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/town_fountain.glb" position={[0, 0, 0]} scale={2} />
        
        {/* Inn to the North */}
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/inn_facade.glb" position={[0, 0, -20]} rotation={[0, 0, 0]} scale={3} />
        
        {/* Blacksmith to the East */}
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/blacksmith_exterior.glb" position={[20, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={3} />
        
        {/* Archway to the South */}
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/market_archway.glb" position={[0, 0, 20]} rotation={[0, Math.PI, 0]} scale={2.5} />
        
        {/* Small Houses filling gaps */}
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/small_house_facade.glb" position={[-20, 0, -10]} rotation={[0, Math.PI / 2, 0]} scale={2} />
        <ModularProp url="/models/10_town_exterior_structures_glb_pack_v1/glb_assets/shopfront_facade.glb" position={[-20, 0, 10]} rotation={[0, Math.PI / 2, 0]} scale={2} />
      </group>

      {/* --- Populate foliage and dynamic props --- */}
      <EnvironmentPopulator currentLevel={levelId} />
    </group>
  );
};
