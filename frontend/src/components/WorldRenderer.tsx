import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Html } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import * as THREE from 'three';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { WeatherSystem } from './WeatherSystem';
import { getCdnAssetPath } from '../utils/AssetManager';
import { getAssetByType } from '../utils/AssetRegistry';

export interface Player {
  id: string;
  x: number;
  y: number;
  z: number;
  modelFile?: string;
  zone?: string;
  appearance?: any;
}

export interface WorldObject {
  id: string;
  type: string;
  x: number;
  y: number;
  z: number;
}

export interface WorldRendererProps {
  localPlayerId?: string | null;
  players?: Player[];
  worldNpcs?: Player[];
  bosses?: any[];
  currentZone?: string;
  worldObjects?: WorldObject[];

  sendMove?: (x: number, y: number, z: number) => void;
  sendAttack?: (targetId: string) => void;
  setInteractingNpcId?: (id: string | null) => void;
}

// ------------------------------------------------------------------
// UTILS
// ------------------------------------------------------------------

const OptimizedModel: React.FC<{ 
  url: string, 
  scaleToDimension?: number,
  scaling?: [number, number, number],
  colorTint?: string
}> = ({ url, scaleToDimension, scaling, colorTint }) => {
  const { scene } = useGLTF(url);
  const clone = useMemo(() => scene.clone(), [scene]);
  
  useEffect(() => {
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (colorTint) {
          const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
          mat.color.set(colorTint);
        }
      }
    });
  }, [clone, colorTint]);

  const scale = scaling || (scaleToDimension ? [scaleToDimension, scaleToDimension, scaleToDimension] : [1, 1, 1]);
  return <primitive object={clone} scale={scale} />;
};

const PhysicsBox: React.FC<{ position: [number, number, number], args: [number, number, number] }> = ({ position, args }) => {
  useBox(() => ({ type: 'Static', args, position }));
  return null;
};

// ------------------------------------------------------------------
// SCENE SETUP & MODULAR ENVIRONMENT
// ------------------------------------------------------------------

const SceneSetup: React.FC = () => {
  return (
    <>
      {/* High-End IBL Lighting */}
      <Environment preset="dawn" background blur={0.8} />
      
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[30, 50, -30]}
        intensity={2.0}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0001}
      />
    </>
  );
};

const AdvancedArena: React.FC = () => {
  const floorUrl = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "modular_arena_floor_4x4.glb");
  const stairsUrl = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "arena_stairs.glb");
  const jumpPadUrl = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "jump_pad.glb");
  const acidPoolUrl = getCdnAssetPath("/models/browser_game_3d_asset_pack_v1/glb_assets/", "acid_pool.glb");
  const roundPlatformUrl = getCdnAssetPath("/models/modular_environment_shop_quest_glb_pack_v1/glb_assets/", "mod_platform_round.glb");

  const tileSize = 8;
  const elements = [];

  // Central 3x3 Floor
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      elements.push(
        <group key={`floor-${x}-${z}`} position={[x * tileSize, 0, z * tileSize]}>
          <OptimizedModel url={`${floorUrl.rootUrl}${floorUrl.sceneFilename}`} scaling={[1, 1, 1]} />
        </group>
      );
    }
  }

  // Elevated North Platform (2x2)
  for (let x = -1; x <= 0; x++) {
    for (let z = -3; z <= -2; z++) {
      elements.push(
        <group key={`plat-n-${x}-${z}`} position={[x * tileSize + tileSize/2, 4, z * tileSize]}>
          <OptimizedModel url={`${floorUrl.rootUrl}${floorUrl.sceneFilename}`} scaling={[1, 1, 1]} />
        </group>
      );
    }
  }

  // Stairs connecting Central to North
  elements.push(
    <group key="stairs-north" position={[0, 0, -1.5 * tileSize]}>
      <OptimizedModel url={`${stairsUrl.rootUrl}${stairsUrl.sceneFilename}`} scaling={[2, 2, 2]} />
    </group>
  );

  // South Hazard Zone
  elements.push(
    <group key="acid-pool" position={[0, 0.1, 2 * tileSize]}>
      <OptimizedModel url={`${acidPoolUrl.rootUrl}${acidPoolUrl.sceneFilename}`} scaling={[2, 1, 2]} />
    </group>
  );

  // East Jump Pad
  elements.push(
    <group key="jump-pad" position={[2 * tileSize, 0.1, 0]}>
      <OptimizedModel url={`${jumpPadUrl.rootUrl}${jumpPadUrl.sceneFilename}`} scaling={[1, 1, 1]} />
    </group>
  );

    // West Round Platform
    elements.push(
      <group key="round_platform" position={[-tileSize * 2, 0.1, 0]}>
        <OptimizedModel url={`${roundPlatformUrl.rootUrl}${roundPlatformUrl.sceneFilename}`} scaling={[1, 1, 1]} />
      </group>
    );

    // Static Decor: Banners
    const banner = getAssetByType('banner_faction');
    elements.push(
      <group key="banner1" position={[-tileSize, 2, tileSize]}>
        <OptimizedModel url={`${banner.rootUrl}${banner.sceneFilename}`} scaling={[1, 1, 1]} />
      </group>
    );
    elements.push(
      <group key="banner2" position={[tileSize, 2, tileSize]}>
        <OptimizedModel url={`${banner.rootUrl}${banner.sceneFilename}`} scaling={[1, 1, 1]} />
      </group>
    );

  return (
    <group>
      {elements}
      {/* Physics Colliders */}
      {/* Main Floor */}
      <PhysicsBox position={[0, -0.5, 0]} args={[tileSize * 3, 1, tileSize * 3]} />
      {/* Elevated Platform */}
      <PhysicsBox position={[0, 3.5, -2.5 * tileSize]} args={[tileSize * 2, 1, tileSize * 2]} />
      {/* West Platform */}
      <PhysicsBox position={[-2 * tileSize, 1.5, 0]} args={[tileSize, 1, tileSize]} />
      {/* South Hazard floor to prevent falling through if the model doesn't have one */}
      <PhysicsBox position={[0, -0.5, 2 * tileSize]} args={[tileSize, 1, tileSize]} />
      {/* East Jump Pad floor */}
      <PhysicsBox position={[2 * tileSize, -0.5, 0]} args={[tileSize, 1, tileSize]} />
    </group>
  );
};

// ------------------------------------------------------------------
// PLAYERS & CAMERAS
// ------------------------------------------------------------------

const CameraRig: React.FC<{ target: THREE.Group | null }> = ({ target }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (target) {
      // 3rd Person MMORPG Follow Camera
      const offset = new THREE.Vector3(0, 8, 15);
      const desiredPos = target.position.clone().add(offset);
      camera.position.lerp(desiredPos, 0.1); // Smooth follow
      
      const lookAtPos = target.position.clone();
      lookAtPos.y += 2; // Look slightly above feet
      
      const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
      currentLookAt.lerp(lookAtPos, 0.1);
      camera.lookAt(currentLookAt);
    }
  });

  return null;
};

const WeaponSwingHitbox: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  onHit?: (targetId: string) => void;
}> = ({ position, rotation, onHit }) => {
  const hitTargets = useRef<Set<string>>(new Set());

  useBox(() => ({
    type: 'Static', // Doesn't move physics engine, just detects
    isTrigger: true,
    args: [3, 2, 3], // Large hitbox for swing
    position,
    rotation,
    onCollide: (e) => {
      const targetId = e.body.userData?.id;
      if (e.body.userData?.type === 'enemy' && targetId) {
        if (!hitTargets.current.has(targetId)) {
          hitTargets.current.add(targetId);
          if (onHit) onHit(targetId);
        }
      }
    }
  }));
  
  return null; // Invisible trigger volume
};

const ProjectileHitbox: React.FC<{
  id: number;
  startPosition: [number, number, number];
  direction: [number, number, number];
  onHit?: (targetId: string, projectileId: number) => void;
}> = ({ id, startPosition, direction, onHit }) => {
  const [ref] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    isTrigger: true,
    args: [0.5],
    position: startPosition,
    velocity: [direction[0] * 40, direction[1] * 40, direction[2] * 40],
    onCollide: (e) => {
      const targetId = e.body.userData?.id;
      if (e.body.userData?.type === 'enemy' && targetId) {
        if (onHit) onHit(targetId, id);
      }
    }
  }));

  return (
    <mesh ref={ref as any}>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
    </mesh>
  );
};

const LocalPlayer: React.FC<{ player: Player, sendMove?: (x: number, y: number, z: number) => void }> = ({ player, sendMove }) => {
  const ref = useRef<THREE.Group>(null);
  const targetPos = useMemo(() => new THREE.Vector3(player.x, player.y, player.z), [player.x, player.y, player.z]);
  
  // Use a ref for the camera rig
  const keys = useRef<{ [key: string]: boolean }>({});
  const lastSend = useRef<number>(0);
  
  const [swings, setSwings] = useState<{id: number, pos: [number,number,number], rot: [number,number,number]}[]>([]);
  const swingIdRef = useRef(0);
  
  const [projectiles, setProjectiles] = useState<{id: number, pos: [number,number,number], dir: [number,number,number]}[]>([]);
  const projIdRef = useRef(0);
  
  const sendAttack = useMultiplayerStore(state => state.sendAttack);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { keys.current[e.key.toLowerCase()] = true; };
    const handleKeyUp = (e: KeyboardEvent) => { keys.current[e.key.toLowerCase()] = false; };
    const handleMouseDown = (e: MouseEvent) => {
      // Prevent attacking if clicking UI
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.button === 0 && ref.current) {
        const id = swingIdRef.current++;
        const pPos = ref.current.position;
        const angle = ref.current.rotation.y;
        const sPos: [number,number,number] = [
          pPos.x + Math.sin(angle) * 2.0,
          pPos.y + 1,
          pPos.z + Math.cos(angle) * 2.0
        ];
        const sRot: [number,number,number] = [0, angle, 0];
        
        setSwings(prev => [...prev, { id, pos: sPos, rot: sRot }]);
        
        setTimeout(() => {
          setSwings(prev => prev.filter(s => s.id !== id));
        }, 200);
      } else if (e.button === 2 && ref.current) {
        // Right click - Fire Projectile
        e.preventDefault();
        const id = projIdRef.current++;
        const pPos = ref.current.position;
        const angle = ref.current.rotation.y;
        
        const sPos: [number,number,number] = [
          pPos.x + Math.sin(angle) * 1.5,
          pPos.y + 1,
          pPos.z + Math.cos(angle) * 1.5
        ];
        const dir: [number,number,number] = [Math.sin(angle), 0, Math.cos(angle)];
        
        setProjectiles(prev => [...prev, { id, pos: sPos, dir }]);
        
        setTimeout(() => {
          setProjectiles(prev => prev.filter(p => p.id !== id));
        }, 2000);
      }
    };
    
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useFrame((_state, delta) => {
    if (!ref.current) return;

    let movedLocally = false;
    const speed = 15;
    const pos = ref.current.position.clone();

    if (keys.current['w']) { pos.z -= speed * delta; movedLocally = true; }
    if (keys.current['s']) { pos.z += speed * delta; movedLocally = true; }
    if (keys.current['a']) { pos.x -= speed * delta; movedLocally = true; }
    if (keys.current['d']) { pos.x += speed * delta; movedLocally = true; }

    if (movedLocally) {
      ref.current.position.copy(pos);
      
      // Face movement direction
      const angle = Math.atan2(pos.x - ref.current.position.x, pos.z - ref.current.position.z);
      if (keys.current['a'] || keys.current['d']) {
        ref.current.rotation.y = angle;
      }
      
      // Network sync (Rate limited to ~10 ticks per sec)
      const now = Date.now();
      if (now - lastSend.current > 100 && sendMove) {
        sendMove(pos.x, pos.y, pos.z);
        lastSend.current = now;
      }
    } else {
      // Server reconciliation lerp if not actively moving
      ref.current.position.lerp(targetPos, 5 * delta);
    }
  });

  const asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", player.modelFile || "spark.glb");

  return (
    <>
      <group ref={ref}>
        <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} />
      </group>
      <CameraRig target={ref.current} />
      {swings.map(s => (
        <WeaponSwingHitbox key={s.id} position={s.pos} rotation={s.rot} onHit={sendAttack} />
      ))}
      {projectiles.map(p => (
        <ProjectileHitbox 
          key={p.id} 
          id={p.id} 
          startPosition={p.pos} 
          direction={p.dir} 
          onHit={(targetId, pId) => {
            sendAttack(targetId);
            setProjectiles(prev => prev.filter(proj => proj.id !== pId)); // Destroy on hit
          }} 
        />
      ))}
    </>
  );
};

const RemotePlayer: React.FC<{ player: Player }> = ({ player }) => {
  const ref = useRef<THREE.Group>(null);
  const targetPos = useMemo(() => new THREE.Vector3(player.x, player.y, player.z), [player.x, player.y, player.z]);
  
  useBox(() => ({ 
    mass: 1, 
    type: 'Kinematic', 
    position: [player.x, player.y, player.z], 
    args: [1, 2, 1],
    userData: { id: player.id, type: 'enemy' }
  }), ref);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.position.lerp(targetPos, 10 * delta);
    }
  });

  const asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", player.modelFile || "spark.glb");
  return (
    <group ref={ref}>
      <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} />
    </group>
  );
};

const NPC: React.FC<{ npc: any, setInteractingNpcId?: (id: string | null) => void }> = ({ npc, setInteractingNpcId }) => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [inRange, setInRange] = useState(false);
  
  useBox(() => ({
    mass: 1,
    type: 'Kinematic',
    position: [npc.x, npc.y, npc.z],
    args: [1, 2, 1],
    userData: { id: npc.id, type: 'enemy' }
  }), ref);

  useFrame(() => {
    const state = useMultiplayerStore.getState();
    const local = state.players.find(p => p.id === state.sessionId);
    if (local && ref.current) {
      const dist = ref.current.position.distanceTo(new THREE.Vector3(local.x, local.y, local.z));
      if (dist < 10 && !inRange) setInRange(true);
      if (dist >= 10 && inRange) setInRange(false);
    }
  });

  const onClick = (e: any) => {
    e.stopPropagation();
    if (inRange && setInteractingNpcId) {
      setInteractingNpcId(npc.id || npc.name || 'Elder');
    }
  };

  const asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", npc.modelFile || "bot.glb");
  return (
    <group 
      ref={ref} 
      position={[npc.x, npc.y, npc.z]} 
      onClick={onClick}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => { setHovered(false); }}
    >
      <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} />
      {inRange && (
        <Html position={[0, 4, 0]} center zIndexRange={[100, 0]}>
          <div 
            style={{ 
              background: 'rgba(0,0,0,0.8)', 
              color: 'white', 
              padding: '4px 8px', 
              borderRadius: '4px', 
              border: '1px solid #f59e0b',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s',
              fontFamily: 'sans-serif',
              fontSize: '12px'
            }}
          >
            <span style={{ color: '#f59e0b', fontWeight: 'bold', marginRight: '4px' }}>[Click]</span>
            Interact {npc.name ? `with ${npc.name}` : ''}
          </div>
        </Html>
      )}
    </group>
  );
};

// ------------------------------------------------------------------
// MAIN RENDERER
// ------------------------------------------------------------------

export const WorldRenderer: React.FC<WorldRendererProps> = ({ setInteractingNpcId }) => {
  const localPlayerId = useMultiplayerStore(state => state.sessionId);
  const players = useMultiplayerStore(state => state.players);
  const sendMove = useMultiplayerStore(state => state.sendMove);
  const worldNpcs = useMultiplayerStore(state => state.worldNpcs);
  const bosses = useMultiplayerStore(state => state.bosses);
  const worldObjects = useMultiplayerStore(state => state.worldObjects);

  const localPlayer = players.find(p => p.id === localPlayerId);
  const remotePlayers = players.filter(p => p.id !== localPlayerId);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas shadows camera={{ position: [0, 15, 20], fov: 60 }}>
        <Suspense fallback={null}>
        <SceneSetup />
        <WeatherSystem />

        <Physics gravity={[0, 0, 0]}>
          <AdvancedArena />

          {worldObjects && worldObjects.map((obj: any) => {
            const asset = getAssetByType(obj.type || 'wooden_crate');
            const scale = obj.s || 1;
            return (
              <group key={obj.id} position={[obj.x, obj.y || 0, obj.z]} rotation={[0, obj.r || 0, 0]}>
                <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaling={[scale, scale, scale]} colorTint={obj.color} />
              </group>
            );
          })}

          {localPlayer && (
            <LocalPlayer player={localPlayer} sendMove={sendMove} />
          )}

          {remotePlayers.map(p => <RemotePlayer key={p.id} player={p} />)}
          {bosses.map(b => <RemotePlayer key={b.id} player={{...b, modelFile: 'boss.glb'}} />)}
          {worldNpcs.map(npc => <NPC key={npc.id} npc={npc} setInteractingNpcId={setInteractingNpcId} />)}
        </Physics>

        {/* High-End Post-Processing */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};
