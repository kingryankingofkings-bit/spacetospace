// Three.js GLB loader example for the Concept Monsters Proper GLB Pack.
// Assumes files are served from /assets/monsters/models/*.glb

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const MONSTER_MODELS = {
  sylvanJuggernaut: "/assets/monsters/models/01_sylvan_juggernaut.glb",
  scrapStalker: "/assets/monsters/models/02_scrap_stalker.glb",
  nexusSwarmers: "/assets/monsters/models/03_nexus_swarmers_cluster.glb",
  nexusWarden: "/assets/monsters/models/03b_nexus_warden_evolved.glb",
  voidAnomaly: "/assets/monsters/models/04_void_anomaly.glb",
  tremorFiend: "/assets/monsters/models/05_tremor_fiend.glb",
  ironJawHound: "/assets/monsters/models/06_iron_jaw_hound.glb",
  aegisCarapace: "/assets/monsters/models/07_aegis_carapace.glb",
  venomSpitter: "/assets/monsters/models/08_venom_spitter.glb"
};

const loader = new GLTFLoader();

export function loadMonster(key, scene, {
  position = new THREE.Vector3(0, 0, 0),
  rotationY = 0,
  scale = 1
} = {}) {
  const url = MONSTER_MODELS[key];
  if (!url) throw new Error(`Unknown monster key: ${key}`);

  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene;
        model.position.copy(position);
        model.rotation.y = rotationY;
        model.scale.setScalar(scale);

        // The assets use +Y up and +Z forward.
        // If your controller assumes -Z forward, rotate by Math.PI.
        model.traverse((obj) => {
          if (obj.isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
            obj.frustumCulled = true;
          }
        });

        scene.add(model);
        resolve(model);
      },
      undefined,
      reject
    );
  });
}
