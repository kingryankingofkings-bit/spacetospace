import React, { useMemo } from 'react';
import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import { getCdnAssetPath } from '../utils/AssetManager';
import { getAssetByType } from '../utils/AssetRegistry';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import { StartArea } from './StartArea';
import { generateOrganicPoints } from '../utils/PointGenerator';

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

  // Generate deterministic instances for foliage, walls, buildings, and wildlife
  const MAP_SIZE = 2000;
  
  const { foliageInstances, buildingInstances, wallInstances, wildlifeInstances } = useMemo(() => {
    const exclusionZones = [{ x: 0, z: 0, radius: 50 }]; // Protect StartArea
    
    // 1. Architecture Layer (Sparse)
    const archPoints = generateOrganicPoints({
      mapSize: MAP_SIZE,
      cellSize: 40,
      jitterAmount: 0.2,
      seedOffset: 100,
      exclusionZones
    });

    const bInstances: any[] = [];
    const wInstances: any[] = [];
    
    archPoints.forEach(pt => {
      if (pt.randomVal > 0.8) {
        bInstances.push({
          position: [pt.x, 0, pt.z],
          rotation: [0, pt.rotY, 0],
          scale: [pt.scale * 2, pt.scale * 2, pt.scale * 2]
        });
      } else if (pt.randomVal > 0.5) {
        wInstances.push({
          position: [pt.x, 0, pt.z],
          rotation: [0, pt.rotY, 0],
          scale: [pt.scale * 3, pt.scale * 1.5, pt.scale]
        });
      }
    });

    // 2. Nature/Foliage Layer (Dense)
    const naturePoints = generateOrganicPoints({
      mapSize: MAP_SIZE,
      cellSize: 15,
      jitterAmount: 0.7,
      seedOffset: 200,
      exclusionZones
    });

    const fInstances: any[] = [];
    naturePoints.forEach(pt => {
      // 40% chance of a tree in this cell
      if (pt.randomVal > 0.6) {
        fInstances.push({
          position: [pt.x, 0, pt.z],
          rotation: [0, pt.rotY, 0],
          scale: [pt.scale, pt.scale, pt.scale]
        });
      }
    });

    // 3. Wildlife Layer (Very Sparse)
    const wildlifePoints = generateOrganicPoints({
      mapSize: MAP_SIZE,
      cellSize: 60,
      jitterAmount: 0.9,
      seedOffset: 300,
      exclusionZones
    });
    
    const wlInstances: any[] = [];
    wildlifePoints.forEach(pt => {
      if (pt.randomVal > 0.4) {
        wlInstances.push({
          position: [pt.x, 0.5, pt.z], // Slightly above ground
          rotation: [0, pt.rotY, 0],
          scale: [pt.scale * 0.5, pt.scale * 0.5, pt.scale * 0.5]
        });
      }
    });

    return {
      buildingInstances: bInstances,
      wallInstances: wInstances,
      foliageInstances: fInstances,
      wildlifeInstances: wlInstances
    };
  }, []);

  const foliageAsset = getAssetByType('foliage_tree');
  const fallbackTreeAsset = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "tree.glb");
  const treeUrl = foliageAsset ? `${foliageAsset.rootUrl}${foliageAsset.sceneFilename}` : `${fallbackTreeAsset.rootUrl}${fallbackTreeAsset.sceneFilename}`;

  const wallAsset = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "wall.glb");
  const buildingAsset = getCdnAssetPath("/models/modular_environment_shop_quest_glb_pack_v1/glb_assets/", "mod_platform_round.glb");
  
  // Use a generic critter for wildlife, or fallback to something small
  const critterAsset = getAssetByType('01_rabbit_critter');
  const fallbackCritterAsset = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "rock.glb");
  const critterUrl = critterAsset ? `${critterAsset.rootUrl}${critterAsset.sceneFilename}` : `${fallbackCritterAsset.rootUrl}${fallbackCritterAsset.sceneFilename}`;

  return (
    <group>
      {/* Flat Green Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[MAP_SIZE, MAP_SIZE]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Grid helper for scale reference */}
      <gridHelper args={[MAP_SIZE, MAP_SIZE / 10, 0x000000, 0x000000]} position={[0, 0.01, 0]} material-opacity={0.1} material-transparent />

      {/* Starting Hub Area */}
      <StartArea />

      {/* Procedurally Placed Decorations */}
      {foliageInstances.length > 0 && <InstancedModel url={treeUrl} instances={foliageInstances} />}
      {wallInstances.length > 0 && <InstancedModel url={`${wallAsset.rootUrl}${wallAsset.sceneFilename}`} instances={wallInstances} />}
      {buildingInstances.length > 0 && <InstancedModel url={`${buildingAsset.rootUrl}${buildingAsset.sceneFilename}`} instances={buildingInstances} />}
      {wildlifeInstances.length > 0 && <InstancedModel url={critterUrl} instances={wildlifeInstances} colorTint="#aaddff" />}
    </group>
  );
};
