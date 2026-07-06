import React, { useMemo } from 'react';
import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import { getCdnAssetPath } from '../utils/AssetManager';
import { getAssetByType } from '../utils/AssetRegistry';
import { useGLTF, Instances, Instance } from '@react-three/drei';

// A deterministic random number generator to ensure consistent foliage/building placement
const seededRandom = (x: number, z: number, seed = 1) => {
  const sin = Math.sin(x * 12.9898 + z * 78.233 + seed) * 43758.5453;
  return sin - Math.floor(sin);
};

interface InstancedModelProps {
  url: string;
  instances: { position: [number, number, number]; scale?: [number, number, number]; rotation?: [number, number, number] }[];
  colorTint?: string;
}

const InstancedModel: React.FC<InstancedModelProps> = ({ url, instances, colorTint }) => {
  const { scene } = useGLTF(url);
  
  const meshes = useMemo(() => {
    const list: THREE.Mesh[] = [];
    scene.traverse(child => {
      if ((child as THREE.Mesh).isMesh) {
        list.push(child as THREE.Mesh);
      }
    });
    return list;
  }, [scene]);

  return (
    <>
      {meshes.map((mesh, meshIdx) => (
        <Instances key={meshIdx} geometry={mesh.geometry} material={mesh.material} castShadow receiveShadow>
          {colorTint && <meshStandardMaterial attach="material" color={colorTint} />}
          {instances.map((inst, instIdx) => (
            <Instance 
              key={instIdx} 
              position={inst.position} 
              scale={inst.scale || [1, 1, 1]} 
              rotation={inst.rotation || [0, 0, 0]} 
            />
          ))}
        </Instances>
      ))}
    </>
  );
};

export const ProceduralTerrain: React.FC = () => {
  // Infinite horizontal physics plane at y=0
  usePlane(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    type: 'Static',
    material: { friction: 0.1, restitution: 0.1 }
  }));

  // Generate deterministic instances for foliage, walls, buildings
  const mapSize = 400; // Generate within a -200 to +200 grid
  const cellSize = 10;
  
  const foliageInstances: any[] = [];
  const buildingInstances: any[] = [];
  const wallInstances: any[] = [];

  useMemo(() => {
    for (let x = -mapSize / 2; x <= mapSize / 2; x += cellSize) {
      for (let z = -mapSize / 2; z <= mapSize / 2; z += cellSize) {
        // Leave the center mostly clear for spawning
        if (Math.abs(x) < 30 && Math.abs(z) < 30) continue;

        const randFoliage = seededRandom(x, z, 1);
        const randBuilding = seededRandom(x, z, 2);
        
        // Jitter position to make it look natural
        const jitterX = (seededRandom(x, z, 3) - 0.5) * cellSize;
        const jitterZ = (seededRandom(x, z, 4) - 0.5) * cellSize;
        const finalX = x + jitterX;
        const finalZ = z + jitterZ;
        const rotY = seededRandom(x, z, 5) * Math.PI * 2;
        const scaleRandom = 0.8 + seededRandom(x, z, 6) * 0.4;

        if (randBuilding > 0.95) {
          // 5% chance per cell for a building
          buildingInstances.push({
            position: [finalX, 0, finalZ],
            rotation: [0, rotY, 0],
            scale: [scaleRandom * 2, scaleRandom * 2, scaleRandom * 2]
          });
        } else if (randBuilding > 0.90) {
          // 5% chance for a wall chunk
          wallInstances.push({
            position: [finalX, 0, finalZ],
            rotation: [0, rotY, 0],
            scale: [scaleRandom * 3, scaleRandom * 1.5, scaleRandom]
          });
        } else if (randFoliage > 0.6) {
          // 40% chance for foliage if no building
          foliageInstances.push({
            position: [finalX, 0, finalZ],
            rotation: [0, rotY, 0],
            scale: [scaleRandom, scaleRandom, scaleRandom]
          });
        }
      }
    }
  }, []);

  const foliageAsset = getAssetByType('foliage_tree');
  const fallbackTreeAsset = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "tree.glb");
  const treeUrl = foliageAsset ? `${foliageAsset.rootUrl}${foliageAsset.sceneFilename}` : `${fallbackTreeAsset.rootUrl}${fallbackTreeAsset.sceneFilename}`;

  const wallAsset = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "wall.glb");
  const buildingAsset = getCdnAssetPath("/models/modular_environment_shop_quest_glb_pack_v1/glb_assets/", "mod_platform_round.glb");

  return (
    <group>
      {/* Flat Green Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Grid helper for scale reference */}
      <gridHelper args={[1000, 200, 0x000000, 0x000000]} position={[0, 0.01, 0]} material-opacity={0.1} material-transparent />

      {/* Procedurally Placed Decorations */}
      {foliageInstances.length > 0 && <InstancedModel url={treeUrl} instances={foliageInstances} />}
      {wallInstances.length > 0 && <InstancedModel url={`${wallAsset.rootUrl}${wallAsset.sceneFilename}`} instances={wallInstances} />}
      {buildingInstances.length > 0 && <InstancedModel url={`${buildingAsset.rootUrl}${buildingAsset.sceneFilename}`} instances={buildingInstances} />}
    </group>
  );
};
