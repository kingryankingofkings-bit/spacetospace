import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Html, Instances, Instance, Billboard, useTexture, useKeyboardControls, Sky } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import * as THREE from 'three';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { useGraphicsSettingsStore } from '../store/graphicsSettingsStore';
import { 
  playerBuffer, 
  npcBuffer, 
  bossBuffer, 
  playerIndices, 
  npcIndices, 
  bossIndices,
  interpolateEntities 
} from '../store/transientStore';
import { WeatherSystem } from './WeatherSystem';
import { getCdnAssetPath } from '../utils/AssetManager';
import { getAssetByType } from '../utils/AssetRegistry';
import { ProceduralTerrain } from './ProceduralTerrain';
import { Controls } from '../store/InputManager';
import { TelemetryDashboard } from './TelemetryDashboard';
import { ParticleManager, useParticleStore } from './ParticleManager';
import { playHitSound } from '../utils/AudioEngine';

const holoHeadMap: Record<string, string> = {
  "Masculine Presentation": "holo_head_masc_1783307851588.png",
  "Feminine Presentation": "holo_head_fem_1783307859017.png",
  "Androgynous / Nonbinary Presentation": "holo_head_andro_1783307865512.png"
};
const holoHairMap: Record<string, string> = {
  "short": "holo_hair_short_1783307878879.png",
  "long": "holo_hair_long_1783307886323.png"
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

export const OptimizedModel: React.FC<{ 
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
      <TelemetryDashboard />
      <Sky sunPosition={[100, 20, 100]} turbidity={0.3} rayleigh={0.5} />

      {/* Solid background to prevent black/blank screen if environment preset fails */}
      <color attach="background" args={['#0f172a']} />
      
      {/* High-End IBL Lighting with offline resilience */}
      <SafeEnvironment>
        <Suspense fallback={null}>
          <FPSLimiter fps={60} />
          <Environment preset="night" background blur={0.5} />
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

import { AudioEngine } from '../utils/AudioEngine';

const CameraRig = React.memo(({ targetRef }: { targetRef: React.RefObject<THREE.Group> }) => {
  const { camera, scene } = useThree();

  useEffect(() => {
    AudioEngine.init(camera);
  }, [camera]);

  // Reusable vectors to optimize GC pressure by avoiding allocations in useFrame
  const offsetRef = useRef(new THREE.Vector3(0, 8, 15));
  const desiredPosRef = useRef(new THREE.Vector3());
  const lookAtPosRef = useRef(new THREE.Vector3());
  const currentLookAtRef = useRef(new THREE.Vector3());
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const rayDir = useRef(new THREE.Vector3());

  useFrame((_state, delta) => {
    if (targetRef.current) {
      // 3rd Person MMORPG Follow Camera
      lookAtPosRef.current.copy(targetRef.current.position);
      lookAtPosRef.current.y += 2; // Look slightly above feet

      desiredPosRef.current.copy(targetRef.current.position).add(offsetRef.current);
      
      // Collision-aware camera: Raycast from player head to desired camera position
      rayDir.current.subVectors(desiredPosRef.current, lookAtPosRef.current);
      const dist = rayDir.current.length();
      rayDir.current.normalize();
      
      raycaster.set(lookAtPosRef.current, rayDir.current);
      
      // Intersect only with environment meshes, skip players/triggers if possible
      const intersects = raycaster.intersectObjects(scene.children, true);
      
      let finalCameraPos = desiredPosRef.current;
      for (const hit of intersects) {
        // Ignore hits that are too close, or UI elements, or other players
        if (hit.distance < dist && hit.object.type === "Mesh" && !hit.object.userData?.isTrigger && !hit.object.userData?.isPlayer) {
          // Move camera slightly in front of the hit point
          finalCameraPos = hit.point.clone().sub(rayDir.current.clone().multiplyScalar(0.5));
          break;
        }
      }

      camera.position.lerp(finalCameraPos, 0.1); // Smooth follow
      
      currentLookAtRef.current.set(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
      currentLookAtRef.current.lerp(lookAtPosRef.current, 0.1);
      camera.lookAt(currentLookAtRef.current);

      // Process Audio Engine updates for Doppler and Occlusion
      AudioEngine.updateDopplerAndOcclusion(scene, delta);
    }
  });

  return null;
});

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
          // Emit particles on hit
          useParticleStore.getState().emit(
            [e.body.position.x, e.body.position.y + 1, e.body.position.z],
            [0, 5, 0],
            20,
            '#ff8800',
            0.5,
            0.5
          );
          playHitSound([e.body.position.x, e.body.position.y, e.body.position.z]);
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
        useParticleStore.getState().emit(
          [e.body.position.x, e.body.position.y + 1, e.body.position.z],
          [0, 2, 0],
          15,
          '#00f0ff',
          0.3,
          0.4
        );
        playHitSound([e.body.position.x, e.body.position.y, e.body.position.z]);
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

const spriteLayerGeo = new THREE.PlaneGeometry(3, 4.5);

const SpriteLayer: React.FC<{ file: string, color: string, zOffset: number }> = ({ file, color, zOffset }) => {
  const tex = useTexture(file);
  
  const mat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      color: color,
      emissive: color,
      emissiveIntensity: 0.5
    });
  }, [tex, color]);

  useEffect(() => {
    return () => {
      mat.dispose();
    };
  }, [mat]);

  return (
    <mesh position={[0, 2.5, zOffset]} geometry={spriteLayerGeo} material={mat} />
  );
};

const flatSpriteGeo = new THREE.PlaneGeometry(3, 4.5);
const spriteBorderGeo = new THREE.PlaneGeometry(3.2, 4.7);
const borderMat = new THREE.MeshBasicMaterial({ color: "#00f0ff", transparent: true, opacity: 0.3, side: THREE.DoubleSide });

const FlatSprite: React.FC<{ appearance: any }> = ({ appearance }) => {
  const imgFile = appearance.portraitUrl || `/images/character_creator/hero_androgynous_1783304800858.png`;
  const texture = useTexture(imgFile);
  
  const mat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: texture as THREE.Texture,
      transparent: true,
      side: THREE.DoubleSide,
      emissive: "#111"
    });
  }, [texture]);

  useEffect(() => {
    return () => {
      mat.dispose();
    };
  }, [mat]);

  return (
    <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
      <mesh position={[0, 2.5, 0]} geometry={flatSpriteGeo} material={mat} />
      {/* Frame border */}
      <mesh position={[0, 2.5, -0.05]} geometry={spriteBorderGeo} material={borderMat} />
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
          <FPSLimiter fps={60} />
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

const LocalPlayer = React.memo(({ player, sendMove }: { player: Player, sendMove?: (x: number, y: number, z: number) => void }) => {
  const [ref, api] = useBox(() => ({ 
    mass: 1, 
    type: 'Dynamic', 
    position: [player.x, player.y + 5, player.z], 
    fixedRotation: true,
    args: [1, 2, 1] // rough bounding box for character
  }));
  const targetPos = useMemo(() => new THREE.Vector3(player.x, player.y, player.z), [player.x, player.y, player.z]);
  
  const [, get] = useKeyboardControls<Controls>();
  const lastSend = useRef<number>(0);
  
  const velocity = useRef([0,0,0]);
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v));
    return unsubscribe;
  }, [api.velocity]);
  
  const [swings, setSwings] = useState<{id: number, pos: [number,number,number], rot: [number,number,number]}[]>([]);
  const swingIdRef = useRef(0);
  
  const [projectiles, setProjectiles] = useState<{id: number, pos: [number,number,number], dir: [number,number,number]}[]>([]);
  const projIdRef = useRef(0);
  
  const sendAttack = useMultiplayerStore(state => state.sendAttack);
  const previewAppearance = useMultiplayerStore(state => state.previewAppearance);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Prevent attacking if clicking UI
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'INPUT') return;
      
      const mesh = ref.current as any;
      if (!mesh) return;

      if (e.button === 0) {
        const id = swingIdRef.current++;
        const pPos = mesh.position;
        const angle = mesh.rotation.y;
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
      } else if (e.button === 2) {
        // Right click - Fire Projectile
        e.preventDefault();
        const id = projIdRef.current++;
        const pPos = mesh.position;
        const angle = mesh.rotation.y;
        
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
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [ref]);

  useFrame((_state, _delta) => {
    const mesh = ref.current as any;
    if (!mesh) return;

    const { forward, backward, left, right, jump } = get();
    
    let vx = 0;
    let vz = 0;
    const speed = 15;

    if (forward) vz -= speed;
    if (backward) vz += speed;
    if (left) vx -= speed;
    if (right) vx += speed;

    api.velocity.set(vx, velocity.current[1], vz);

    if (jump && Math.abs(velocity.current[1]) < 0.1) {
      api.velocity.set(vx, 10, vz);
    }
    
    let movedLocally = vx !== 0 || vz !== 0 || jump;

    if (movedLocally) {
      // Face movement direction
      if (vx !== 0 || vz !== 0) {
        const angle = Math.atan2(vx, vz);
        // api.rotation applies to the physics body, but we might just visually rotate the mesh inside
        mesh.rotation.y = angle;
      }
      
      // Network sync (Rate limited to ~10 ticks per sec)
      const now = Date.now();
      if (now - lastSend.current > 100 && sendMove) {
        sendMove(mesh.position.x, mesh.position.y, mesh.position.z);
        lastSend.current = now;
      }
    } else {
      // Server reconciliation lerp if not actively moving
      // Note: Modifying physics position directly can cause jitter if colliding, 
      // but since we are authority on our position locally, it's mostly for correcting drift.
      const dist = mesh.position.distanceTo(targetPos);
      if (dist > 5) {
        // Hard snap if desynced by a lot
        api.position.set(targetPos.x, targetPos.y, targetPos.z);
      }
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
      <CameraRig targetRef={ref as any} />
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
});

const RemotePlayer = React.memo(({ player, isBoss }: { player: Player, isBoss?: boolean }) => {
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
    let targetX, targetY, targetZ;
    if (isBoss && bossIndices.has(player.id)) {
      const idx = bossIndices.get(player.id)! * 6;
      targetX = bossBuffer[idx+3];
      targetY = bossBuffer[idx+4];
      targetZ = bossBuffer[idx+5];
    } else if (!isBoss && playerIndices.has(player.id)) {
      const idx = playerIndices.get(player.id)! * 6;
      targetX = playerBuffer[idx+3];
      targetY = playerBuffer[idx+4];
      targetZ = playerBuffer[idx+5];
    }

    if (targetX !== undefined && targetY !== undefined && targetZ !== undefined) {
      targetPos.set(targetX, targetY, targetZ);
      currentPos.current.lerp(targetPos, 10 * delta);
    }
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
});

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
    let targetX, targetY, targetZ;
    if (npcIndices.has(npc.id)) {
      const idx = npcIndices.get(npc.id)! * 6;
      targetX = npcBuffer[idx+3];
      targetY = npcBuffer[idx+4];
      targetZ = npcBuffer[idx+5];
    }
    
    if (targetX !== undefined && targetY !== undefined && targetZ !== undefined) {
      targetPos.set(targetX, targetY, targetZ);
      currentPos.current.lerp(targetPos, 10 * delta);
    }
    
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
  const playerClass = useMultiplayerStore(state => state.playerClass);

  // If playerClass is set, they've finished character creation and LocalPlayer will render.
  // We only render this fallback preview if they are actively customizing their character.
  if (playerClass || !previewAppearance) return null;

  // Render a standalone preview character with a static camera rig
  // Need a ref to attach the camera rig to
  return (
    <>
      <StaticPreviewRig appearance={previewAppearance} />
    </>
  );
};

const StaticPreviewRig: React.FC<{ appearance: any }> = ({ appearance }) => {
  const ref = useRef<THREE.Group>(null);
  
  return (
    <>
      <group ref={ref} position={[0, 0, 0]}>
        <PlayerSprite appearance={appearance} />
      </group>
      <CameraRig targetRef={ref as any} />
    </>
  );
};

const PlayersList = React.memo(() => {
  const localPlayerId = useMultiplayerStore(state => state.sessionId);
  const players = useMultiplayerStore(state => state.players);
  const playerClass = useMultiplayerStore(state => state.playerClass);
  const sendMove = useMultiplayerStore(state => state.sendMove);

  const localPlayer = players.find(p => p.id === localPlayerId);
  const remotePlayers = players.filter(p => p.id !== localPlayerId);

  return (
    <>
      <CharacterCreatorPreview />
      {localPlayer && playerClass && (
        <LocalPlayer player={localPlayer} sendMove={sendMove} />
      )}
      {remotePlayers.map(p => <RemotePlayer key={p.id} player={p} />)}
    </>
  );
});

const BossesList: React.FC = () => {
  const bosses = useMultiplayerStore(state => state.bosses);
  return (
    <>
      {bosses.map(b => (
        <RemotePlayer 
          key={b.id} 
          player={{...b, modelFile: b.modelFile || 'boss_01_ascendant_colossus'}} 
          isBoss={true}
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

const InterpolationSystem: React.FC = () => {
  useFrame(() => {
    // Slight delay (e.g. 100ms) to allow snapshots to accumulate
    interpolateEntities(performance.now() - 100);
  });
  return null;
};

// ------------------------------------------------------------------
// MAIN RENDERER (Memoized to prevent 2D UI updates from triggering canvas updates)
// ------------------------------------------------------------------


const FPSLimiter = ({ fps = 60 }: { fps?: number }) => {
  const set = useThree((state) => state.set);
  const invalidate = useThree((state) => state.invalidate);
  
  React.useEffect(() => {
    set({ frameloop: 'demand' });
    
    const interval = 1000 / fps;
    let lastTime = performance.now();
    let animationFrameId: number;
    
    const loop = (time: number) => {
      animationFrameId = requestAnimationFrame(loop);
      if (time - lastTime >= interval) {
        lastTime = time - ((time - lastTime) % interval);
        invalidate();
      }
    };
    
    animationFrameId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationFrameId);
      set({ frameloop: 'always' });
    };
  }, [fps, set, invalidate]);
  return null;
};

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
          <FPSLimiter fps={60} />
          <SceneSetup />
          <WeatherSystem />
          <ParticleManager maxParticles={2000} />
          <InterpolationSystem />

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
