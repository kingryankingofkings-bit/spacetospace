import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { getAssetByType } from '../utils/AssetRegistry';
import type { AssetType } from '../utils/AssetRegistry';

interface StaticModelProps {
  type: AssetType;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const StaticModel: React.FC<StaticModelProps> = ({ type, position, rotation, scale }) => {
  const asset = getAssetByType(type);
  if (!asset) return null;
  const url = `${asset.rootUrl}${asset.sceneFilename}`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scene } = useGLTF(url);
  
  // Clone the scene so we can reuse the same model multiple times safely
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <primitive 
      object={clonedScene} 
      position={position} 
      rotation={rotation || [0, 0, 0]} 
      scale={scale || [1, 1, 1]} 
      receiveShadow 
      castShadow 
    />
  );
};

export const StartArea: React.FC = () => {
  return (
    <group name="start-area">
      {/* Centerpiece */}
      <StaticModel type="town_fountain" position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} />
      
      {/* Lights */}
      <StaticModel type="street_lamp_warm" position={[12, 0, 12]} />
      <StaticModel type="street_lamp_warm" position={[-12, 0, 12]} rotation={[0, Math.PI/2, 0]} />
      <StaticModel type="street_lamp_warm" position={[12, 0, -12]} rotation={[0, -Math.PI/2, 0]} />
      <StaticModel type="street_lamp_warm" position={[-12, 0, -12]} rotation={[0, Math.PI, 0]} />
      
      <pointLight position={[12, 4, 12]} color="#ffddaa" intensity={2} distance={25} />
      <pointLight position={[-12, 4, 12]} color="#ffddaa" intensity={2} distance={25} />
      <pointLight position={[12, 4, -12]} color="#ffddaa" intensity={2} distance={25} />
      <pointLight position={[-12, 4, -12]} color="#ffddaa" intensity={2} distance={25} />
      
      {/* Fountain glow */}
      <pointLight position={[0, 3, 0]} color="#aaddff" intensity={3} distance={20} /> 

      {/* Entrances */}
      <StaticModel type="market_archway" position={[0, 0, 28]} />
      <StaticModel type="market_archway" position={[0, 0, -28]} rotation={[0, Math.PI, 0]} />
      <StaticModel type="market_archway" position={[28, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <StaticModel type="market_archway" position={[-28, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

      {/* Quest & Utility */}
      <StaticModel type="quest_notice_board" position={[8, 0, -5]} rotation={[0, -Math.PI/4, 0]} />
      <StaticModel type="healing_safe_zone_light" position={[0, 0.5, 0]} scale={[2, 2, 2]} />
      
      {/* Buildings around the perimeter */}
      <StaticModel type="inn_facade" position={[18, 0, -18]} rotation={[0, Math.PI*1.25, 0]} scale={[2, 2, 2]} />
      <StaticModel type="shopfront_facade" position={[-18, 0, -18]} rotation={[0, Math.PI*0.75, 0]} scale={[2, 2, 2]} />
      <StaticModel type="blacksmith_exterior" position={[18, 0, 18]} rotation={[0, -Math.PI*0.25, 0]} scale={[2, 2, 2]} />
      <StaticModel type="armor_dye_shop_exterior" position={[-18, 0, 18]} rotation={[0, Math.PI*0.25, 0]} scale={[2, 2, 2]} />
      <StaticModel type="weapon_skin_shop_exterior" position={[-25, 0, 0]} rotation={[0, Math.PI/2, 0]} scale={[2, 2, 2]} />
      
    </group>
  );
};
