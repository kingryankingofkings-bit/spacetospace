import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Engine, Scene, useBeforeRender, useScene } from 'react-babylonjs';
import { Vector3, Color3, Color4, VertexBuffer, GroundMesh, ParticleSystem, GPUParticleSystem, Texture, DefaultRenderingPipeline, SSAO2RenderingPipeline, CubeTexture, ShadowGenerator, DirectionalLight, SceneLoader, AssetContainer, Scene as BabylonScene, Matrix, Quaternion, Axis, KhronosTextureContainer2, ImageProcessingConfiguration, GlowLayer, VolumetricLightScatteringPostProcess } from '@babylonjs/core';
import '@babylonjs/loaders';
import { useToolStore } from '../store/toolStore';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { playBGM, playHitSound } from "../utils/AudioEngine";
import { WeatherSystem } from './WeatherSystem';
import { getCdnAssetPath } from '../utils/AssetManager';

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

// Global cache to avoid re-parsing GLBs
const assetContainerCache: Record<string, Promise<AssetContainer>> = {};
const loadAssetContainer = (scene: BabylonScene, rootUrl: string, filename: string) => {
  const key = rootUrl + filename;
  if (!assetContainerCache[key]) {
    assetContainerCache[key] = SceneLoader.LoadAssetContainerAsync(rootUrl, filename, scene);
  }
  return assetContainerCache[key];
};

const OptimizedModel: React.FC<{ 
  rootUrl: string, 
  sceneFilename: string, 
  name: string, 
  scaleToDimension?: number,
  scaling?: Vector3,
  onModelLoaded?: (model: { meshes: any[], animationGroups: any[] }) => void 
}> = ({ rootUrl, sceneFilename, name, scaleToDimension, scaling, onModelLoaded }) => {
  const scene = useScene();
  const nodeRef = useRef<any>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (!scene || !nodeRef.current) return;
    let isMounted = true;
    
    loadAssetContainer(scene, rootUrl, sceneFilename).then(container => {
      if (!isMounted) return;
      
      const instance = container.instantiateModelsToScene(n => `${name}-${n}`, false);
      instanceRef.current = instance;
      
      instance.rootNodes.forEach(n => {
        n.parent = nodeRef.current;
      });
      
      if (scaleToDimension) {
        let min = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        let max = new Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        instance.rootNodes.forEach(n => {
          const meshes = n.getChildMeshes(false);
          if (n.getClassName() === "Mesh" || n.getClassName() === "InstancedMesh") meshes.push(n as any);
          meshes.forEach(m => {
            m.computeWorldMatrix(true);
            const boundingBox = m.getBoundingInfo().boundingBox;
            min = Vector3.Minimize(min, boundingBox.minimumWorld);
            max = Vector3.Maximize(max, boundingBox.maximumWorld);
          });
        });
        const size = max.subtract(min);
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = scaleToDimension / maxDim;
          nodeRef.current.scaling = new Vector3(scale, scale, scale);
        }
      }

      if (onModelLoaded) {
        const allMeshes: any[] = [];
        instance.rootNodes.forEach(node => {
           allMeshes.push(...node.getChildMeshes(false));
           if (node.getClassName() === "Mesh" || node.getClassName() === "InstancedMesh") allMeshes.push(node);
        });
        onModelLoaded({ meshes: allMeshes, animationGroups: instance.animationGroups });
      }
    });

    return () => {
      isMounted = false;
      if (instanceRef.current) {
        instanceRef.current.rootNodes.forEach((n: any) => n.dispose());
        instanceRef.current.skeletons?.forEach((s: any) => s.dispose());
        instanceRef.current.animationGroups?.forEach((a: any) => a.dispose());
      }
    };
  }, [scene, rootUrl, sceneFilename, name, scaleToDimension]);

  return <transformNode ref={nodeRef} name={name} scaling={scaling} />;
};

export interface WorldRendererProps {
  localPlayerId?: string | null;
  players?: Player[];
  worldNpcs?: Player[];
  bosses?: any[];
  currentZone?: string;
  worldObjects?: WorldObject[];

  sendMove?: (x: number, y: number, z: number) => void;
  sendTerraform?: (x: number, z: number, height: number) => void;
  sendPlaceObject?: (type: string, x: number, y: number, z: number) => void;
  sendAttack?: (targetId: string) => void;
  setInteractingNpcId?: (id: string | null) => void;
}

const SceneEffects: React.FC<{ currentZone?: string }> = ({ currentZone }) => {
  const scene = useScene();
  useEffect(() => {
    if (!scene) return;
    const camera = scene.activeCamera;
    if (!camera) return;
    
    // KTX2 and Basis Configuration
    (KhronosTextureContainer2.URLConfig as any) = {
      jsDecoderModule: "https://cdn.babylonjs.com/ktx2Decoder.js",
      wasmUASTC: "https://cdn.babylonjs.com/babylon.ktx2Decoder.wasm",
      wasmMSCTranscoder: "https://cdn.babylonjs.com/msc_basis_transcoder.wasm",
      jsMSCTranscoder: "https://cdn.babylonjs.com/msc_basis_transcoder.js"
    };

      // Post Process Pipeline
      const pipeline = new DefaultRenderingPipeline("defaultPipeline", true, scene, [camera]);
      pipeline.fxaaEnabled = true;
      pipeline.bloomEnabled = true;
      pipeline.bloomThreshold = 0.5;
      pipeline.bloomWeight = 0.5;
      
      pipeline.imageProcessingEnabled = true;
      pipeline.imageProcessing.toneMappingEnabled = true;
      pipeline.imageProcessing.toneMappingType = ImageProcessingConfiguration.TONEMAPPING_ACES;
      pipeline.imageProcessing.exposure = 1.2;
      pipeline.imageProcessing.contrast = 1.1;
      
      pipeline.depthOfFieldEnabled = true;
      pipeline.depthOfField.focusDistance = 2000;
      pipeline.depthOfField.focalLength = 50;
      pipeline.depthOfField.fStop = 1.4;

    const ssao = new SSAO2RenderingPipeline("ssao", scene, 0.75, [camera]);
    ssao.radius = 2.5;
    ssao.totalStrength = 1.5;
    ssao.base = 0.5;

    // IBL Environment
    const envTexture = CubeTexture.CreateFromPrefilteredData("https://assets.babylonjs.com/environments/environmentSpecular.env", scene);
    scene.environmentTexture = envTexture;
    
    // Atmospheric Fog
    scene.fogMode = BabylonScene.FOGMODE_EXP2;
    scene.fogDensity = 0.003;
    scene.fogColor = new Color3(0.15, 0.18, 0.25); // Will dynamically update below based on biome, but setting a cool baseline

    // Glow Layer
    if (!scene.getGlowLayerByName("glow")) {
        const gl = new GlowLayer("glow", scene, {
            mainTextureSamples: 4,
            blurKernelSize: 32
        });
        gl.intensity = 1.2;
    }

    let vls: VolumetricLightScatteringPostProcess | null = null;
    let shadowGenerator: ShadowGenerator | null = null;
    let observer: any = null;

    // Shadows
    const dirLight = scene.getLightByName("dir-light") as DirectionalLight;
    if (dirLight && !dirLight.metadata?.hasShadows) {
      dirLight.metadata = { hasShadows: true };
      
      // Volumetric Light (God Rays)
      vls = new VolumetricLightScatteringPostProcess("vls", 1.0, camera, undefined, 100, Texture.BILINEAR_SAMPLINGMODE, scene.getEngine(), false);
      if (vls.mesh && vls.mesh.material) {
        (vls.mesh.material as any).unlit = true;
      }
      if (vls.mesh) {
        vls.mesh.scaling = new Vector3(20, 20, 20); // Scale the light mesh
        vls.mesh.position = dirLight.position;
      }
      
      shadowGenerator = new ShadowGenerator(2048, dirLight);
      shadowGenerator.useContactHardeningShadow = true;
      shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_HIGH;
      shadowGenerator.contactHardeningLightSizeUVRatio = 0.05;

      observer = scene.onNewMeshAddedObservable.add((mesh) => {
        if (mesh.name !== "skyBox" && mesh.name !== "ground" && !mesh.name.includes("LOD") && mesh.getBoundingInfo().boundingSphere.radius > 1.0) {
          shadowGenerator!.addShadowCaster(mesh, false);
        }
        if (mesh.name === "ground") {
          mesh.receiveShadows = true;
        }
      });
    }

    return () => {
      pipeline.dispose();
      ssao.dispose();
      envTexture.dispose();
      if (vls) vls.dispose(camera);
      if (shadowGenerator) shadowGenerator.dispose();
      if (observer) scene.onNewMeshAddedObservable.remove(observer);
      if (dirLight) dirLight.metadata = null;
    };
  }, [scene]);

  useEffect(() => {
    if (scene) {
      playBGM(scene, currentZone || "exploration");
    }
  }, [scene, currentZone]);

  return null;
};

const AestheticModApplier: React.FC = () => {
  const scene = useScene();
  const localMods = useToolStore(state => state.localMods);

  useEffect(() => {
    if (!scene) return;

    Object.entries(localMods).forEach(([entityId, mod]) => {
      const mesh = scene.meshes.find(m => m.name === `npc-${entityId}` || m.name === `obj-${entityId}` || m.name === `player-${entityId}`);
      if (!mesh) return;

      if (mod.scaleMod !== undefined) {
        mesh.scaling = new Vector3(mod.scaleMod, mod.scaleMod, mod.scaleMod);
      }

      if (mod.colorTint) {
        const color = Color3.FromHexString(mod.colorTint);
        const meshesToTint = [mesh, ...mesh.getChildMeshes()];
        meshesToTint.forEach(m => {
          if (m.material) {
            if ((m.material as any).albedoColor) {
              (m.material as any).albedoColor = color;
            } else if ((m.material as any).diffuseColor) {
              (m.material as any).diffuseColor = color;
            }
          }
        });
      }

      scene.particleSystems.forEach(ps => {
        if (ps.emitter === mesh && ps.name !== `vfx-${mod.vfx}`) {
          ps.dispose();
        }
      });

      if (mod.vfx && mod.vfx !== 'None') {
        const existingPs = scene.particleSystems.find(ps => ps.emitter === mesh && ps.name === `vfx-${mod.vfx}`);
        if (!existingPs) {
          const ps = new GPUParticleSystem(`vfx-${mod.vfx}`, { capacity: 2000 }, scene);
          ps.emitter = mesh;
          ps.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
          
          if (mod.vfx === 'flame') {
            ps.color1 = new Color4(1, 0.5, 0, 1);
            ps.color2 = new Color4(1, 0, 0, 1);
            ps.colorDead = new Color4(0, 0, 0, 0);
            ps.minSize = 0.1;
            ps.maxSize = 0.5;
            ps.minLifeTime = 0.3;
            ps.maxLifeTime = 1.5;
            ps.emitRate = 100;
            ps.blendMode = ParticleSystem.BLENDMODE_ADD;
            ps.gravity = new Vector3(0, 5, 0);
            ps.direction1 = new Vector3(-1, 2, -1);
            ps.direction2 = new Vector3(1, 2, 1);
          } else if (mod.vfx === 'sparkle') {
            ps.color1 = new Color4(1, 1, 0, 1);
            ps.color2 = new Color4(1, 1, 1, 1);
            ps.colorDead = new Color4(0, 0, 0, 0);
            ps.minSize = 0.05;
            ps.maxSize = 0.2;
            ps.emitRate = 50;
            ps.gravity = new Vector3(0, 0, 0);
            ps.direction1 = new Vector3(-1, -1, -1);
            ps.direction2 = new Vector3(1, 1, 1);
          } else if (mod.vfx === 'aura') {
            ps.color1 = new Color4(0, 0.8, 1, 0.5);
            ps.color2 = new Color4(0, 0.2, 1, 0.5);
            ps.colorDead = new Color4(0, 0, 0, 0);
            ps.minSize = 0.5;
            ps.maxSize = 1.5;
            ps.emitRate = 20;
            ps.gravity = new Vector3(0, 2, 0);
            ps.direction1 = new Vector3(0, 1, 0);
            ps.direction2 = new Vector3(0, 2, 0);
          }
          ps.start();
        }
      }
    });

  }, [scene, localMods]);

  return null;
};

const RemotePlayer: React.FC<{ player: Player }> = ({ player }) => {
  const nodeRef = useRef<any>(null);
  const targetPos = useMemo(() => new Vector3(player.x, player.y, player.z), [player.x, player.y, player.z]);
  const initialPos = useMemo(() => targetPos.clone(), []);

  const scene = useScene();
  const localMods = useToolStore(state => state.localMods);
  const mod = localMods[player.id];

  const baseScale = 2.5;
  const scaleToDimension = mod?.scaleMod ? baseScale * mod.scaleMod : baseScale;

  useBeforeRender((scene) => {
    if (nodeRef.current) {
      const currentPos = nodeRef.current.position;
      const deltaTime = scene.getEngine().getDeltaTime() / 1000;
      Vector3.LerpToRef(currentPos, targetPos, 10 * deltaTime, currentPos);
    }
  });

  useEffect(() => {
    if (!scene || !nodeRef.current || !mod?.vfx || mod.vfx === 'None') return;

    if (mod.vfx === 'aura') return; // Auras are handled via mesh in render

    const particleSystem = new GPUParticleSystem("particles", { capacity: 2000 }, scene);
    particleSystem.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = nodeRef.current; 
    
    if (mod.vfx === 'flame') {
      particleSystem.color1 = new Color4(1, 0.5, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.2, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 5, 0);
      particleSystem.direction1 = new Vector3(-1, 8, 1);
      particleSystem.direction2 = new Vector3(1, 8, -1);
    } else if (mod.vfx === 'sparkle') {
      particleSystem.color1 = new Color4(1, 1, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.8, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 2, 0);
    }

    particleSystem.minSize = 0.1 * scaleToDimension;
    particleSystem.maxSize = 0.5 * scaleToDimension;
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;
    particleSystem.emitRate = 50;
    
    particleSystem.start();

    return () => {
      particleSystem.dispose();
    };
  }, [scene, mod?.vfx, scaleToDimension]);

  return (
    <transformNode ref={nodeRef} name={`player-${player.id}`} position={initialPos}>
      {mod?.vfx === 'aura' && (
        <sphere name={`aura-${player.id}`} diameter={scaleToDimension * 2} position={new Vector3(0, scaleToDimension / 2, 0)}>
          <standardMaterial name={`aura-mat-${player.id}`} alpha={0.2} emissiveColor={mod?.colorTint ? Color3.FromHexString(mod.colorTint) : new Color3(1, 1, 1)} />
        </sphere>
      )}
      <OptimizedModel 
        name={`model-player-${player.id}`} 
        {...getCdnAssetPath("/models/sector_characters_glb_pack_v4/", player.modelFile || "spark.glb")}
        scaleToDimension={scaleToDimension}
        onModelLoaded={(model) => {
          if (mod?.colorTint && model.meshes) {
            const tint = Color3.FromHexString(mod.colorTint);
            model.meshes.forEach(mesh => {
              if (mesh.material) {
                // @ts-ignore
                if (mesh.material.albedoColor) mesh.material.albedoColor = tint;
                // @ts-ignore
                else if (mesh.material.diffuseColor) mesh.material.diffuseColor = tint;
              }
            });
          }
        }}
      />
    </transformNode>
  );
};

const RemoteNpc: React.FC<{ npc: Player }> = ({ npc }) => {
  const nodeRef = useRef<any>(null);
  const targetPos = useMemo(() => new Vector3(npc.x, npc.y, npc.z), [npc.x, npc.y, npc.z]);
  const initialPos = useMemo(() => targetPos.clone(), []);
  
  const scene = useScene();
  const localMods = useToolStore(state => state.localMods);
  const mod = localMods[npc.id];

  const baseScale = 3;
  const scaleToDimension = mod?.scaleMod ? baseScale * mod.scaleMod : baseScale;

  useBeforeRender((scene) => {
    if (nodeRef.current) {
      const currentPos = nodeRef.current.position;
      const deltaTime = scene.getEngine().getDeltaTime() / 1000;
      Vector3.LerpToRef(currentPos, targetPos, 10 * deltaTime, currentPos);

      const camera = scene.activeCamera;
      if (camera) {
        const dist = Vector3.DistanceSquared(currentPos, camera.globalPosition);
        nodeRef.current.isEnabled(dist < 40000); // Cull if further than 200 units
      }
    }
  });

  useEffect(() => {
    if (!scene || !nodeRef.current || !mod?.vfx || mod.vfx === 'None') return;

    const particleSystem = new GPUParticleSystem("particles", { capacity: 2000 }, scene);
    particleSystem.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = nodeRef.current; 
    
    if (mod?.vfx === 'flame') {
      particleSystem.color1 = new Color4(1, 0.5, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.2, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 5, 0);
      particleSystem.direction1 = new Vector3(-1, 8, 1);
      particleSystem.direction2 = new Vector3(1, 8, -1);
    } else if (mod?.vfx === 'sparkle') {
      particleSystem.color1 = new Color4(1, 1, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.8, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 2, 0);
    } else if ((npc as any).specialAura === 'divine_frost') {
      particleSystem.color1 = new Color4(0.8, 0.9, 1.0, 1.0);
      particleSystem.color2 = new Color4(0.4, 0.8, 1.0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, -2, 0);
      particleSystem.direction1 = new Vector3(-2, 2, 2);
      particleSystem.direction2 = new Vector3(2, 2, -2);
      particleSystem.emitRate = 200;
    }

    particleSystem.minSize = 0.1 * scaleToDimension;
    particleSystem.maxSize = 0.5 * scaleToDimension;
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;
    
    if (!mod?.vfx && (npc as any).specialAura !== 'divine_frost') {
      particleSystem.dispose();
      return;
    }

    particleSystem.start();

    return () => {
      particleSystem.dispose();
    };
  }, [scene, mod?.vfx, (npc as any).specialAura, scaleToDimension]);

  return (
    <transformNode ref={nodeRef} name={`npc-${npc.id}`} position={initialPos}>
      {(npc as any).specialAura === 'divine_frost' && (
        <plane name={`portrait-${npc.id}`} position={new Vector3(0, 4.5, 0)} width={3} height={3} billboardMode={7}>
          <standardMaterial name={`mat-portrait-${npc.id}`} disableLighting={true}>
            <texture url="/torinn.png" assignTo="emissiveTexture" />
            <texture url="/torinn.png" assignTo="diffuseTexture" hasAlpha={true} />
          </standardMaterial>
        </plane>
      )}
      <OptimizedModel 
        name={`model-npc-${npc.id}`} 
        {...getCdnAssetPath("/models/sector_characters_glb_pack_v4/", npc.modelFile || "elder_kaelen.glb")}
        scaleToDimension={scaleToDimension}
        onModelLoaded={(model) => {
          if (model.animationGroups && model.animationGroups.length > 0) {
            // Play the first animation (usually Idle or Walk) on loop
            model.animationGroups[0].play(true);
          }
          if (mod?.colorTint && model.meshes) {
            const tint = Color3.FromHexString(mod.colorTint);
            model.meshes.forEach(mesh => {
              if (mesh.material) {
                // @ts-ignore
                if (mesh.material.albedoColor) mesh.material.albedoColor = tint;
                // @ts-ignore
                else if (mesh.material.diffuseColor) mesh.material.diffuseColor = tint;
              }
            });
          }
        }}
      />
    </transformNode>
  );
};

const RemoteBoss: React.FC<{ boss: any }> = ({ boss }) => {
  const nodeRef = useRef<any>(null);
  const targetPos = useMemo(() => new Vector3(boss.x, boss.y, boss.z), [boss.x, boss.y, boss.z]);
  
  const scene = useScene();
  const localMods = useToolStore(state => state.localMods);
  const mod = localMods[boss.id];

  const baseScale = 10;
  const scaleToDimension = mod?.scaleMod ? baseScale * mod.scaleMod : baseScale;

  useBeforeRender((scene) => {
    if (nodeRef.current) {
      const currentPos = nodeRef.current.position;
      const deltaTime = scene.getEngine().getDeltaTime() / 1000;
      Vector3.LerpToRef(currentPos, targetPos, 5 * deltaTime, currentPos);
    }
  });

  useEffect(() => {
    if (!scene || !nodeRef.current || !mod?.vfx || mod.vfx === 'None') return;

    if (mod.vfx === 'aura') return; 

    const particleSystem = new GPUParticleSystem("particles", { capacity: 3000 }, scene);
    particleSystem.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = nodeRef.current; 
    
    if (mod.vfx === 'flame') {
      particleSystem.color1 = new Color4(1, 0.5, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.2, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 15, 0);
      particleSystem.direction1 = new Vector3(-2, 12, 2);
      particleSystem.direction2 = new Vector3(2, 12, -2);
    } else if (mod.vfx === 'sparkle') {
      particleSystem.color1 = new Color4(1, 1, 0, 1.0);
      particleSystem.color2 = new Color4(1, 0.8, 0, 1.0);
      particleSystem.colorDead = new Color4(0, 0, 0, 0.0);
      particleSystem.gravity = new Vector3(0, 5, 0);
    }

    particleSystem.minSize = 0.5 * scaleToDimension;
    particleSystem.maxSize = 2.0 * scaleToDimension;
    particleSystem.minLifeTime = 0.5;
    particleSystem.maxLifeTime = 2.0;
    particleSystem.emitRate = 200;
    
    particleSystem.start();

    return () => {
      particleSystem.dispose();
    };
  }, [scene, mod?.vfx, scaleToDimension]);

  return (
    <transformNode ref={nodeRef} name={`node-boss_${boss.id}`} position={targetPos}>
      {mod?.vfx === 'aura' && (
        <sphere name={`aura-${boss.id}`} diameter={scaleToDimension * 2.5} position={new Vector3(0, scaleToDimension / 2, 0)}>
          <standardMaterial name={`aura-mat-${boss.id}`} alpha={0.15} emissiveColor={mod?.colorTint ? Color3.FromHexString(mod.colorTint) : new Color3(1, 1, 1)} />
        </sphere>
      )}
      <OptimizedModel
        name={`boss-model-${boss.id}`}
        {...getCdnAssetPath("/models/free_flow_creatures_and_bosses_glb_pack_v3/", boss.modelFile || "boss_01_ascendant_colossus.glb")}
        scaling={new Vector3(scaleToDimension, scaleToDimension, scaleToDimension)}
        onModelLoaded={(model) => {
          if (mod?.colorTint && model.meshes) {
            const tint = Color3.FromHexString(mod.colorTint);
            model.meshes.forEach(mesh => {
              if (mesh.material) {
                // @ts-ignore
                if (mesh.material.albedoColor) mesh.material.albedoColor = tint;
                // @ts-ignore
                else if (mesh.material.diffuseColor) mesh.material.diffuseColor = tint;
              }
            });
          }
        }}
      />
      {boss.shieldActive && (
        <sphere name={`shield-${boss.id}`} diameter={scaleToDimension * 1.5} position={new Vector3(0, scaleToDimension / 2, 0)}>
          <standardMaterial name={`shield-mat-${boss.id}`} alpha={0.3} diffuseColor={new Color3(0, 1, 1)} emissiveColor={new Color3(0, 0.5, 0.5)} />
        </sphere>
      )}
    </transformNode>
  );
};

const InstancedWorldObjects: React.FC<{ objects: WorldObject[] }> = ({ objects }) => {
  const scene = useScene();
  const localMods = useToolStore(state => state.localMods);

  useEffect(() => {
    if (!scene) return;

    let isMounted = true;
    const treeAssets = getCdnAssetPath("/models/free_flow_creatures_and_bosses_glb_pack_v3/", "01_gnarl_maw.glb");
    const rockAssets = getCdnAssetPath("/models/free_flow_creatures_and_bosses_glb_pack_v3/", "02_grid_rusher.glb");
    
    const activeParticleSystems: ParticleSystem[] = [];

    const applyThinInstances = (container: AssetContainer, items: WorldObject[], isTree: boolean) => {
      const instance = container.instantiateModelsToScene(name => `base-${isTree ? 'tree' : 'rock'}-${name}`, false);
      const root = instance.rootNodes[0];
      root.position = new Vector3(0, -1000, 0); 
      
      const meshes = instance.rootNodes.flatMap(n => {
        const m = n.getChildMeshes(false);
        if (n.getClassName() === "Mesh") m.push(n as any);
        return m;
      });

      const matrices = new Float32Array(items.length * 16);
      
      items.forEach((obj, i) => {
        const mod = localMods[obj.id];
        let baseScale = 1;
        let rotY = 0;

        if (isTree) {
          let hash = 0;
          for (let j = 0; j < obj.id.length; j++) hash = Math.imul(31, hash) + obj.id.charCodeAt(j) | 0;
          const rand = Math.abs(hash) / 2147483648;
          baseScale = 1 + rand * 0.5;
          rotY = rand * Math.PI * 2;
        }

        const scale = mod?.scaleMod ? baseScale * mod.scaleMod : baseScale;
        const finalScale = isTree ? scale * 2 : scale * 1.5;

        const matrix = Matrix.Compose(
          new Vector3(finalScale, finalScale, finalScale),
          Quaternion.RotationAxis(Axis.Y, rotY),
          new Vector3(obj.x, obj.y, obj.z)
        );
        matrix.copyToArray(matrices, i * 16);

        if (mod?.vfx && mod.vfx !== 'None') {
          const ps = new GPUParticleSystem("particles", { capacity: 500 }, scene);
          ps.particleTexture = new Texture("https://assets.babylonjs.com/textures/flare.png", scene);
          ps.emitter = new Vector3(obj.x, obj.y, obj.z); 
          
          if (mod.vfx === 'flame') {
            ps.color1 = new Color4(1, 0.5, 0, 1.0);
            ps.color2 = new Color4(1, 0.2, 0, 1.0);
            ps.colorDead = new Color4(0, 0, 0, 0.0);
            ps.gravity = new Vector3(0, 5, 0);
          } else if (mod.vfx === 'sparkle') {
            ps.color1 = new Color4(1, 1, 0, 1.0);
            ps.color2 = new Color4(1, 0.8, 0, 1.0);
            ps.colorDead = new Color4(0, 0, 0, 0.0);
            ps.gravity = new Vector3(0, 2, 0);
          }
          ps.minSize = 0.2 * scale;
          ps.maxSize = 0.8 * scale;
          ps.minLifeTime = 0.3;
          ps.maxLifeTime = 1.5;
          ps.emitRate = 50;
          ps.start();
          activeParticleSystems.push(ps);
        }
      });

      meshes.forEach(mesh => {
        if (mesh.getTotalVertices() > 0) {
          mesh.thinInstanceSetBuffer("matrix", matrices, 16, false);
          mesh.doNotSyncBoundingInfo = true;
          mesh.alwaysSelectAsActiveMesh = true;
        }
      });
      
      return instance;
    };

    const trees = objects.filter(o => o.type === 'tree' || o.type === 'Asset 1');
    const rocks = objects.filter(o => o.type !== 'tree' && o.type !== 'Asset 1');
    
    let treeInstance: any = null;
    let rockInstance: any = null;

    if (trees.length > 0) {
      loadAssetContainer(scene, treeAssets.rootUrl, treeAssets.sceneFilename).then(container => {
        if (isMounted) treeInstance = applyThinInstances(container, trees, true);
      });
    }

    if (rocks.length > 0) {
      loadAssetContainer(scene, rockAssets.rootUrl, rockAssets.sceneFilename).then(container => {
        if (isMounted) rockInstance = applyThinInstances(container, rocks, false);
      });
    }

    return () => {
      isMounted = false;
      if (treeInstance) treeInstance.rootNodes.forEach((n: any) => n.dispose());
      if (rockInstance) rockInstance.rootNodes.forEach((n: any) => n.dispose());
      activeParticleSystems.forEach(ps => ps.dispose());
    };
  }, [scene, objects, localMods]);

  return null;
};

const LocalPlayer: React.FC<{ targetPos: Vector3, isAttacking: boolean, modelFile?: string, worldTime: 'day' | 'night' }> = ({ targetPos, isAttacking, modelFile, worldTime }) => {
  const nodeRef = useRef<any>(null);
  const initialPos = useMemo(() => new Vector3(targetPos.x, targetPos.y - 1, targetPos.z), []);
  const actualTarget = useMemo(() => new Vector3(targetPos.x, targetPos.y - 1, targetPos.z), [targetPos.x, targetPos.y, targetPos.z]);
  
  useBeforeRender((scene) => {
    if (nodeRef.current) {
      const currentPos = nodeRef.current.position;
      const deltaTime = scene.getEngine().getDeltaTime() / 1000;
      const speed = isAttacking ? 25 : 10;
      Vector3.LerpToRef(currentPos, actualTarget, speed * deltaTime, currentPos);
    }
  });

  return (
    <transformNode ref={nodeRef} name="local-player" position={initialPos}>
      {worldTime === 'night' && (
        <pointLight name="lantern" intensity={2.0} position={new Vector3(0, 3, 0)} diffuse={new Color3(1, 0.8, 0.5)} range={30} />
      )}
      <OptimizedModel 
        name="model-local-player" 
        {...getCdnAssetPath("/models/sector_characters_glb_pack_v4/", modelFile || "spark.glb")}
        scaleToDimension={2.5}
        onModelLoaded={(model) => {
          if (model.animationGroups && model.animationGroups.length > 0) {
            model.animationGroups[0].play(true);
          }
        }}
      />
    </transformNode>
  );
};



const ResourceNodeRender: React.FC<{ node: any }> = ({ node }) => {
  const isHerb = node.type === 'herb_node';
  const color = isHerb ? Color3.Green() : new Color3(0.5, 0.5, 0.5);
  return (
    <box 
      name={`node-${node.id}`} 
      position={new Vector3(node.x, node.y || 0.5, node.z)} 
      size={isHerb ? 1 : 2}
    >
      <standardMaterial name={`mat-${node.id}`} diffuseColor={color} />
    </box>
  );
};


export const WorldRenderer: React.FC<WorldRendererProps> = ({ 
  setInteractingNpcId
}) => {
  const localPlayerId = useMultiplayerStore(state => state.sessionId);
  const players = useMultiplayerStore(state => state.players);
  const worldNpcs = useMultiplayerStore(state => state.worldNpcs);
  const bosses = useMultiplayerStore(state => state.bosses);
  const worldObjects = useMultiplayerStore(state => state.worldObjects);
  const worldTime = useMultiplayerStore(state => state.worldTime);
  const resourceNodes = useMultiplayerStore(state => state.resourceNodes);

  const sendMove = useMultiplayerStore(state => state.sendMove);
  const sendTerraform = useMultiplayerStore(state => state.sendTerraform);
  const sendPlaceObject = useMultiplayerStore(state => state.sendPlaceObject);
  const sendAttack = useMultiplayerStore(state => state.sendAttack);
  const sendGatherNode = useMultiplayerStore(state => state.sendGatherNode);
  // @ts-ignore
  if (sendGatherNode) {}

  const [localPlayerPos, setLocalPlayerPos] = useState<Vector3>(new Vector3(0, 1, 0));
  const [isAttacking, setIsAttacking] = useState<boolean>(false);
  
  const localPlayer = players.find(p => p.id === localPlayerId);
  const remotePlayers = players.filter(p => p.id !== localPlayerId);
  const currentZone = localPlayer?.zone || "urban_core";

  useEffect(() => {
    if (localPlayer) {
      setLocalPlayerPos(new Vector3(localPlayer.x, localPlayer.y || 1, localPlayer.z));
    }
  }, [localPlayer?.x, localPlayer?.y, localPlayer?.z]);

  const playersRef = useRef(players);
  const worldNpcsRef = useRef(worldNpcs);
  const bossesRef = useRef(bosses);
  
  useEffect(() => { playersRef.current = players; }, [players]);
  useEffect(() => { worldNpcsRef.current = worldNpcs; }, [worldNpcs]);
  useEffect(() => { bossesRef.current = bosses; }, [bosses]);

  useEffect(() => {
    const handleRemoteAttack = (e: any) => {
      const data = e.detail;
      const scene = groundRef.current?.getScene();
      if (scene) {
        let target = playersRef.current.find(p => p.id === data.targetId) || worldNpcsRef.current.find(n => n.id === data.targetId) || bossesRef.current.find(b => b.id === data.targetId);
        if (target) {
          playHitSound(scene, new Vector3(target.x, target.y + 1, target.z));
        }
      }
    };
    window.addEventListener('remote_attack', handleRemoteAttack);
    return () => window.removeEventListener('remote_attack', handleRemoteAttack);
  }, []);
  
  const activeTool = useToolStore((state) => state.activeTool);
  const brushSize = useToolStore((state) => state.brushSize);
  const selectedAssetId = useToolStore((state) => state.selectedAssetId);

  const biomeColors = useMemo(() => {
    switch (currentZone) {
      case 'eastern_wilds': return { sky: new Color3(0.02, 0.05, 0.02), ground: new Color3(0.1, 0.6, 0.2) };
      case 'geothermal_abyss': return { sky: new Color3(0.1, 0.01, 0.01), ground: new Color3(0.6, 0.1, 0.1) };
      case 'cosmic_layer': return { sky: new Color3(0, 0, 0), ground: new Color3(0.3, 0.3, 0.35) };
      default: return { sky: new Color3(0.02, 0.02, 0.05), ground: new Color3(0.0, 0.5, 1.0) };
    }
  }, [currentZone]);
  const setSelectedEntityId = useToolStore((state) => state.setSelectedEntityId);
  
  const groundRef = useRef<GroundMesh>(null);

  const handlePointerDown = (_evt: any, pickInfo: any) => {
    if (pickInfo && pickInfo.hit && pickInfo.pickedMesh) {
      if (activeTool === 'mod') {
        let currentNode = pickInfo.pickedMesh;
        let foundId: string | null = null;
        while (currentNode) {
          if (currentNode.name && currentNode.name.startsWith('npc-')) {
            foundId = currentNode.name.replace('npc-', '');
            break;
          }
          if (currentNode.name && currentNode.name.startsWith('obj-')) {
            foundId = currentNode.name.replace('obj-', '');
            break;
          }
          if (currentNode.name && currentNode.name.startsWith('player-')) {
            foundId = currentNode.name.replace('player-', '');
            break;
          }
          if (currentNode.name && currentNode.name.startsWith('node-boss_')) {
            foundId = currentNode.name.replace('node-', '');
            break;
          }
          currentNode = currentNode.parent;
        }
        
        if (foundId) {
          setSelectedEntityId(foundId);
        } else if (pickInfo.pickedMesh.name === "world-grid") {
          setSelectedEntityId(null);
        }
        return;
      }

      if (activeTool === 'select') {
        let currentNode = pickInfo.pickedMesh;
        let foundNpcId: string | null = null;
        while (currentNode) {
          if (currentNode.name && currentNode.name.startsWith('npc-')) {
            foundNpcId = currentNode.name.replace('npc-', '');
            break;
          }
          currentNode = currentNode.parent;
        }
        
        if (foundNpcId) {
          if (setInteractingNpcId) setInteractingNpcId(foundNpcId);
          return;
        }
      }

      if (pickInfo.pickedMesh.name === "world-grid") {
        const point = pickInfo.pickedPoint;
        if (point) {
          if (activeTool === 'select') {
            if (setInteractingNpcId) setInteractingNpcId(null);
            setLocalPlayerPos(new Vector3(point.x, 1, point.z));
            if (sendMove) {
              sendMove(point.x, point.y, point.z);
            }
          } else if (activeTool === 'place') {
            console.log("Placing object at", point);
            if (sendPlaceObject) {
              sendPlaceObject(selectedAssetId, point.x, point.y, point.z);
            }
          } else if (activeTool === 'terraform') {
            console.log("Terraforming at", point);
            const heightIncrease = 2; // Arbitrary terraform height step
            if (sendTerraform) {
              sendTerraform(point.x, point.z, heightIncrease);
            }
            
            // Modify local ground vertices
            if (groundRef.current) {
              const mesh = groundRef.current;
              const positions = mesh.getVerticesData(VertexBuffer.PositionKind);
              if (positions) {
                const radius = brushSize;
                let updated = false;
                for (let i = 0; i < positions.length; i += 3) {
                  const vx = positions[i];
                  const vz = positions[i + 2];
                  const dx = vx - point.x;
                  const dz = vz - point.z;
                  if (dx * dx + dz * dz < radius * radius) {
                    positions[i + 1] += heightIncrease;
                    updated = true;
                  }
                }
                if (updated) {
                  mesh.updateVerticesData(VertexBuffer.PositionKind, positions);
                  mesh.createNormals(false);
                }
              }
            }
          } else if (activeTool === 'attack') {
            console.log("Attacking towards", point);
            let bestTargetId: string | null = null;
            let bestTargetPos: Vector3 | null = null;
            let minDistance = 15; // Max snap distance

            const checkTargets = (targets: any[]) => {
              targets.forEach(t => {
                const tPos = new Vector3(t.x, t.y + 1, t.z);
                const dist = Vector3.Distance(point, tPos);
                if (dist < minDistance) {
                  minDistance = dist;
                  bestTargetId = t.id;
                  bestTargetPos = tPos;
                }
              });
            };

            checkTargets(players);
            if (worldNpcs) checkTargets(worldNpcs);

            if (bestTargetId && bestTargetPos) {
              setIsAttacking(true);
              setLocalPlayerPos(bestTargetPos);
              if (sendAttack) {
                sendAttack(bestTargetId);
                const scene = groundRef.current?.getScene();
                if (scene) playHitSound(scene, bestTargetPos);
              }
              setTimeout(() => setIsAttacking(false), 500);
            }
          }
        }
      }
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" style={{ width: '100%', height: '100%', outline: 'none' }}>
        <Scene clearColor={new Color4(biomeColors.sky.r, biomeColors.sky.g, biomeColors.sky.b, 1)} onPointerDown={handlePointerDown}>
          
          <arcRotateCamera
            name="main-camera"
            alpha={Math.PI / 4}
            beta={Math.PI / 3}
            radius={150}
            target={localPlayerPos}
            lowerRadiusLimit={10}
            upperRadiusLimit={1000}
            wheelPrecision={50}
          />
          
          <SceneEffects currentZone={currentZone} />
          <WeatherSystem />
          <AestheticModApplier />

          <hemisphericLight
            name="hemi-light"
            direction={new Vector3(0, 1, 0)}
            intensity={worldTime === 'night' ? 0.0 : 0.6}
            groundColor={new Color3(0.1, 0.1, 0.2)}
          />
          
          <directionalLight
            name="dir-light"
            direction={new Vector3(-1, -2, -1)}
            intensity={worldTime === 'night' ? 0.0 : 0.8}
            position={new Vector3(20, 100, 20)}
          />

          <box name="skybox" size={5000} infiniteDistance={true}>
            <standardMaterial
              name="skybox-material"
              backFaceCulling={false}
              disableLighting={true}
              emissiveColor={worldTime === 'night' ? new Color3(0.0, 0.0, 0.0) : biomeColors.sky}
            />
          </box>

          <ground ref={groundRef} name="world-grid" width={2000} height={2000} subdivisions={100} updatable={true}>
            <pbrMaterial
              name="grid-material"
              albedoColor={biomeColors.ground}
              metallic={0.1}
              roughness={0.7}
              alpha={1.0}
            />
          </ground>
          
          {/* Local Player */}
          <LocalPlayer targetPos={localPlayerPos} isAttacking={isAttacking} modelFile={localPlayer?.modelFile} worldTime={worldTime} />

          {/* Remote Players */}
          {remotePlayers.map(p => (
            <RemotePlayer key={p.id} player={p} />
          ))}

          {/* Remote NPCs */}
          {worldNpcs.map(npc => (
            <RemoteNpc key={npc.id} npc={npc} />
          ))}

          {/* Bosses */}
          {bosses.map(boss => (
            <RemoteBoss key={boss.id} boss={boss} />
          ))}

          {/* World Objects using ThinInstances */}
          <InstancedWorldObjects objects={worldObjects} />

          {resourceNodes && resourceNodes.map((node: any) => (
          <ResourceNodeRender key={node.id} node={node} />
        ))}
        </Scene>
      </Engine>
    </div>
  );
};

export default WorldRenderer;
