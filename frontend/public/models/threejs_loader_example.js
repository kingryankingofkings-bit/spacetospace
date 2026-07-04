import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export async function loadMonster(url, scene, options = {}) {
  const {
    position = new THREE.Vector3(0, 0, 0),
    rotationY = 0,
    scale = 1,
    castShadow = true,
    receiveShadow = true,
    onLoaded = null
  } = options;

  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        const root = gltf.scene;
        root.position.copy(position);
        root.rotation.y = rotationY;
        root.scale.setScalar(scale);

        root.traverse((obj) => {
          if (obj.isMesh) {
            obj.castShadow = castShadow;
            obj.receiveShadow = receiveShadow;

            // Example: tag known gameplay parts from names.
            const n = obj.name.toLowerCase();
            if (n.includes('weakpoint') || n.includes('core')) {
              obj.userData.gameplayTag = 'weakpoint';
            }
            if (n.includes('shield') || n.includes('barrier')) {
              obj.userData.gameplayTag = 'shield';
            }
            if (n.includes('ring') || n.includes('telegraph')) {
              obj.userData.gameplayTag = 'ability_telegraph';
            }
          }
        });

        scene.add(root);
        if (onLoaded) onLoaded(root, gltf);
        resolve({ root, gltf });
      },
      undefined,
      reject
    );
  });
}

// Example usage:
// const { root } = await loadMonster('/models/bosses/boss_07_data_forged_evolvarch.glb', scene, {
//   position: new THREE.Vector3(0, 0, 0),
//   scale: 1.0,
//   onLoaded: (root) => {
//     root.traverse((obj) => {
//       if (obj.name.includes('interruptible_data_ring')) obj.visible = false;
//     });
//   }
// });
