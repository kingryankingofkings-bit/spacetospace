import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Html, Instances, Instance, Billboard, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import * as THREE from 'three';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { useGraphicsSettingsStore } from '../store/graphicsSettingsStore';
import { WeatherSystem } from './WeatherSystem';
import { getCdnAssetPath } from '../utils/AssetManager';
import { getAssetByType } from '../utils/AssetRegistry';
import { ProceduralTerrain } from './ProceduralTerrain';

const holoHeadMap: Record<string, string> = {
  "Masculine Presentation": "holo_head_masc_1783307851588.png",
  "Feminine Presentation": "holo_head_fem_1783307859017.png",
  "Androgynous / Nonbinary Presentation": "holo_head_andro_1783307865512.png"
};
const holoHairMap: Record<string, string> = {
  "short": "holo_hair_short_1783307878879.png",
  "long": "holo_hair_long_1783307886323.png"
};

const heroImageMap: Record<string, string> = {
  "Masculine Presentation": "hero_masculine_1783304787475.png",
  "Feminine Presentation": "hero_feminine_1783304794125.png",
  "Androgynous / Nonbinary Presentation": "hero_androgynous_1783304800858.png"
};

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
    const clonedMaterials: THREE.Material[] = [];

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (colorTint) {
          if (Array.isArray(mesh.material)) {
            mesh.material = mesh.material.map(m => {
              const cloned = m.clone();
              clonedMaterials.push(cloned);
              if ('color' in cloned) {
                (cloned as any).color.set(colorTint);
              }
              return cloned;
            });
          } else if (mesh.material) {
            const cloned = mesh.material.clone();
            clonedMaterials.push(cloned);
            if ('color' in cloned) {
              (cloned as any).color.set(colorTint);
            }
            mesh.material = cloned;
          }
        }
      }
    });

    return () => {
      clonedMaterials.forEach(m => m.dispose());
    };
  }, [clone, colorTint]);

  const scale = scaling || (scaleToDimension ? [scaleToDimension, scaleToDimension, scaleToDimension] : [1, 1, 1]);
  return <primitive object={clone} scale={scale} />;
};

const PhysicsBox: React.FC<{ position: [number, number, number], args: [number, number, number] }> = ({ position, args }) => {
  useBox(() => ({ type: 'Static', args, position }));
  return null;
};

// Instanced model renderer to batch draw calls of repeated modular props
interface InstancedModelProps {
  url: string;
  instances: { position: [number, number, number]; scale?: [number, number, number] }[];
}

const InstancedModel: React.FC<InstancedModelProps> = ({ url, instances }) => {
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
          {instances.map((inst, instIdx) => (
            <Instance key={instIdx} position={inst.position} scale={inst.scale || [1, 1, 1]} />
          ))}
        </Instances>
      ))}
    </>
  );
};

// Safe wrapper for Drei Environment preset to handle offline CDN download failures gracefully
class SafeEnvironment extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn("Environment preset failed to load offline:", error);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// ------------------------------------------------------------------
// SCENE SETUP & MODULAR ENVIRONMENT
// ------------------------------------------------------------------

const SceneSetup: React.FC = () => {
  const shadowQuality = useGraphicsSettingsStore(state => state.shadowQuality);
  
  const shadowMapSize = useMemo(() => {
    switch (shadowQuality) {
      case 'low': return [256, 256];
      case 'medium': return [512, 512];
      case 'high':
      default:
        return [1024, 1024];
    }
  }, [shadowQuality]);

  return (
    <>
      {/* Solid background to prevent black/blank screen if environment preset fails */}
      <color attach="background" args={['#0f172a']} />
      
      {/* High-End IBL Lighting with offline resilience */}
      <SafeEnvironment>
        <Suspense fallback={null}>
          <Environment preset="dawn" background blur={0.8} />
        </Suspense>
      </SafeEnvironment>
      
      <ambientLight intensity={shadowQuality === 'low' ? 0.6 : 0.4} />
      <directionalLight
        castShadow={shadowQuality !== 'low'}
        position={[30, 50, -30]}
        intensity={2.0}
        shadow-mapSize={shadowMapSize}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0001}
      />
      
      {/* Secondary directional fill light to ensure the scene is lit if Environment fails */}
      <directionalLight
        position={[-30, 30, 30]}
        intensity={0.5}
      />
    </>
  );
};
// ------------------------------------------------------------------
// PLAYERS & CAMERAS
// ------------------------------------------------------------------

const CameraRig: React.FC<{ targetRef: React.RefObject<THREE.Group> }> = ({ targetRef }) => {
  const { camera } = useThree();

  // Reusable vectors to optimize GC pressure by avoiding allocations in useFrame
  const offsetRef = useRef(new THREE.Vector3(0, 8, 15));
  const desiredPosRef = useRef(new THREE.Vector3());
  const lookAtPosRef = useRef(new THREE.Vector3());
  const currentLookAtRef = useRef(new THREE.Vector3());

  useFrame(() => {
    if (targetRef.current) {
      // 3rd Person MMORPG Follow Camera
      desiredPosRef.current.copy(targetRef.current.position).add(offsetRef.current);
      camera.position.lerp(desiredPosRef.current, 0.1); // Smooth follow
      
      lookAtPosRef.current.copy(targetRef.current.position);
      lookAtPosRef.current.y += 2; // Look slightly above feet
      
      currentLookAtRef.current.set(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
      currentLookAtRef.current.lerp(lookAtPosRef.current, 0.1);
      camera.lookAt(currentLookAtRef.current);
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

const SpriteLayer: React.FC<{ file: string, color: string, zOffset: number }> = ({ file, color, zOffset }) => {
  const tex = useTexture(file);
  return (
    <mesh position={[0, 2.5, zOffset]}>
      <planeGeometry args={[3, 4.5]} />
      <meshStandardMaterial 
        map={tex} 
        transparent={true} 
        side={THREE.DoubleSide} 
        blending={THREE.AdditiveBlending}
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const FlatSprite: React.FC<{ appearance: any }> = ({ appearance }) => {
  const imgFile = appearance.portraitUrl || `/images/character_creator/hero_androgynous_1783304800858.png`;
  const texture = useTexture(imgFile);
  return (
    <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
      <mesh position={[0, 2.5, 0]}>
        <planeGeometry args={[3, 4.5]} />
        <meshStandardMaterial map={texture} transparent={true} side={THREE.DoubleSide} emissive={"#111"} />
      </mesh>
      {/* Frame border */}
      <mesh position={[0, 2.5, -0.05]}>
        <planeGeometry args={[3.2, 4.7]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </Billboard>
  );
};

const PlayerSprite: React.FC<{ appearance: any }> = ({ appearance }) => {
  // If it's an NPC or old data with a portraitUrl but no customized presentation, use the flat texture.
  if (appearance?.portraitUrl && !appearance?.presentation) {
    return <FlatSprite appearance={appearance} />;
  }

  // Otherwise, use the customizable layered holographic assembly
  const presentation = appearance?.presentation?.replace(' Face Presets', '') || 'Androgynous / Nonbinary Presentation';
  const headFile = `/images/character_creator/${holoHeadMap[presentation] || holoHeadMap['Androgynous / Nonbinary Presentation']}`;
  
  const isLongHair = appearance?.hairStyle?.toLowerCase().includes('long') || appearance?.hairStyle?.toLowerCase().includes('braid');
  const hasHair = appearance?.hairStyle && !appearance.hairStyle.toLowerCase().includes('bald');
  const hairFile = hasHair ? `/images/character_creator/${holoHairMap[isLongHair ? 'long' : 'short']}` : null;
  const hasBeard = appearance?.facialHair && appearance.facialHair !== 'Clean Shaven';
  const beardFile = hasBeard ? `/images/character_creator/holo_beard_full_1783307894762.png` : null;

  const skinColor = appearance?.skinHex || appearance?.color || '#00f0ff';
  const hairColor = appearance?.hairHex || '#00f0ff';
  
  return (
    <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
      <Suspense fallback={null}>
         <SpriteLayer file={headFile} color={skinColor} zOffset={0} />
         {hairFile && <SpriteLayer file={hairFile} color={hairColor} zOffset={0.01} />}
         {beardFile && <SpriteLayer file={beardFile} color={hairColor} zOffset={0.02} />}
      </Suspense>
      {/* Frame border */}
      <mesh position={[0, 2.5, -0.05]}>
        <planeGeometry args={[3.2, 4.7]} />
        <meshBasicMaterial color={skinColor} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </Billboard>
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
  const previewAppearance = useMultiplayerStore(state => state.previewAppearance);

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

  let asset = getAssetByType(player.modelFile as any);
  if (!asset) {
    asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", player.modelFile || "spark.glb");
  }

  const effectiveAppearance = previewAppearance || player.appearance;

  return (
    <>
      <group ref={ref}>
        {effectiveAppearance ? (
          <PlayerSprite appearance={effectiveAppearance} />
        ) : (
          <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} />
        )}
      </group>
      <CameraRig targetRef={ref} />
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
  const targetPos = useMemo(() => new THREE.Vector3(player.x, player.y, player.z), [player.x, player.y, player.z]);
  const currentPos = useRef(new THREE.Vector3(player.x, player.y, player.z));
  
  // Register Kinematic box body in Cannon and fetch physics api
  const [ref, api] = useBox(() => ({ 
    mass: 1, 
    type: 'Kinematic', 
    position: [player.x, player.y, player.z], 
    args: [1, 2, 1],
    userData: { id: player.id, type: 'enemy' }
  }));

  // Update physics body position directly rather than modifying the mesh ref to prevent desync
  useFrame((_state, delta) => {
    currentPos.current.lerp(targetPos, 10 * delta);
    api.position.set(currentPos.current.x, currentPos.current.y, currentPos.current.z);
  });

  let asset = getAssetByType(player.modelFile as any);
  if (!asset) {
    asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", player.modelFile || "spark.glb");
  }  
  return (
    <group ref={ref as any}>
      {player.appearance ? (
        <PlayerSprite appearance={player.appearance} />
      ) : (
        <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} />
      )}
    </group>
  );
};

const NPC: React.FC<{ npc: any, setInteractingNpcId?: (id: string | null) => void }> = ({ npc, setInteractingNpcId }) => {
  const [hovered, setHovered] = useState(false);
  const [inRange, setInRange] = useState(false);
  
  const targetPos = useMemo(() => new THREE.Vector3(npc.x, npc.y, npc.z), [npc.x, npc.y, npc.z]);
  const currentPos = useRef(new THREE.Vector3(npc.x, npc.y, npc.z));

  // Register Kinematic box body in Cannon and fetch physics api
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: 'Kinematic',
    position: [npc.x, npc.y, npc.z],
    args: [1, 2, 1],
    userData: { id: npc.id, type: 'enemy' }
  }));

  // Update physics body position directly rather than modifying the mesh ref to prevent desync
  useFrame((_state, delta) => {
    currentPos.current.lerp(targetPos, 10 * delta);
    api.position.set(currentPos.current.x, currentPos.current.y, currentPos.current.z);

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

  const asset = getCdnAssetPath("/models/sector_characters_glb_pack_v4/", npc.modelFile || "iron_warden.glb");
  return (
    <group 
      ref={ref as any} 
      onClick={onClick}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => { setHovered(false); }}
    >
      {npc.appearance && npc.appearance.portraitUrl ? (
        <PlayerSprite appearance={npc.appearance} />
      ) : (
        <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaleToDimension={2.5} colorTint={npc.appearance?.color} />
      )}
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
// SUB-LIST COMPONENTS (Decouples parent WorldRenderer from store updates)
// ------------------------------------------------------------------

const ObjectsList: React.FC = () => {
  const worldObjects = useMultiplayerStore(state => state.worldObjects);
  return (
    <>
      {worldObjects && worldObjects.map((obj: any) => {
        const asset = getAssetByType(obj.type || 'industrial_crate_stack');
        const scale = obj.s || 1;
        return (
          <group key={obj.id} position={[obj.x, obj.y || 0, obj.z]} rotation={[0, obj.r || 0, 0]}>
            <OptimizedModel url={`${asset.rootUrl}${asset.sceneFilename}`} scaling={[scale, scale, scale]} colorTint={obj.color} />
          </group>
        );
      })}
    </>
  );
};

const CharacterCreatorPreview: React.FC = () => {
  const previewAppearance = useMultiplayerStore(state => state.previewAppearance);
  const localPlayerId = useMultiplayerStore(state => state.sessionId);
  const players = useMultiplayerStore(state => state.players);
  
  const hasLocalPlayer = players.some(p => p.id === localPlayerId);

  // If localPlayer exists, LocalPlayer component already renders it.
  // We only render this fallback preview if the player hasn't fully joined yet
  // but they are actively customizing their character.
  if (hasLocalPlayer || !previewAppearance) return null;

  // Render a standalone preview character with a static camera rig
  // Need a ref to attach the camera rig to
  return (
    <>
      <StaticPreviewRig />
    </>
  );
};

const StaticPreviewRig: React.FC = () => {
  const ref = useRef<THREE.Group>(null);
  const previewAppearance = useMultiplayerStore(state => state.previewAppearance);
  
  return (
    <>
      <group ref={ref} position={[0, 0, 0]}>
        <PlayerSprite appearance={previewAppearance} />
      </group>
      <CameraRig targetRef={ref} />
    </>
  );
};

const PlayersList: React.FC = () => {
  const localPlayerId = useMultiplayerStore(state => state.sessionId);
  const players = useMultiplayerStore(state => state.players);
  const sendMove = useMultiplayerStore(state => state.sendMove);

  const localPlayer = players.find(p => p.id === localPlayerId);
  const remotePlayers = players.filter(p => p.id !== localPlayerId);

  return (
    <>
      <CharacterCreatorPreview />
      {localPlayer && (
        <LocalPlayer player={localPlayer} sendMove={sendMove} />
      )}
      {remotePlayers.map(p => <RemotePlayer key={p.id} player={p} />)}
    </>
  );
};

const BossesList: React.FC = () => {
  const bosses = useMultiplayerStore(state => state.bosses);
  return (
    <>
      {bosses.map(b => (
        <RemotePlayer 
          key={b.id} 
          player={{...b, modelFile: b.modelFile || 'boss_01_ascendant_colossus'}} 
        />
      ))}
    </>
  );
};

const NpcsList: React.FC<{ setInteractingNpcId?: (id: string | null) => void }> = ({ setInteractingNpcId }) => {
  const worldNpcs = useMultiplayerStore(state => state.worldNpcs);
  return (
    <>
      {worldNpcs.map(npc => (
        <NPC key={npc.id} npc={npc} setInteractingNpcId={setInteractingNpcId} />
      ))}
    </>
  );
};

// ------------------------------------------------------------------
// MAIN RENDERER (Memoized to prevent 2D UI updates from triggering canvas updates)
// ------------------------------------------------------------------

export const WorldRenderer: React.FC<WorldRendererProps> = React.memo(({ setInteractingNpcId }) => {
  const resolutionScale = useGraphicsSettingsStore(state => state.resolutionScale);
  const dpr = useMemo(() => Math.min(window.devicePixelRatio, resolutionScale, 2), [resolutionScale]);
  
  const bloomEnabled = useGraphicsSettingsStore(state => state.bloomEnabled);
  const vignetteEnabled = useGraphicsSettingsStore(state => state.vignetteEnabled);
  const shadowQuality = useGraphicsSettingsStore(state => state.shadowQuality);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas shadows={shadowQuality !== 'low'} camera={{ position: [0, 15, 20], fov: 60 }} dpr={dpr}>
        <Suspense fallback={null}>
          <SceneSetup />
          <WeatherSystem />

          <Physics gravity={[0, -30, 0]}>
            <ProceduralTerrain />
            <ObjectsList />
            <PlayersList />
            <BossesList />
            <NpcsList setInteractingNpcId={setInteractingNpcId} />
          </Physics>

          {bloomEnabled && vignetteEnabled ? (
            <EffectComposer>
              <Bloom luminanceThreshold={1} intensity={1.5} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          ) : bloomEnabled ? (
            <EffectComposer>
              <Bloom luminanceThreshold={1} intensity={1.5} />
            </EffectComposer>
          ) : vignetteEnabled ? (
            <EffectComposer>
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          ) : null}
        </Suspense>
      </Canvas>
    </div>
  );
});

WorldRenderer.displayName = 'WorldRenderer';
