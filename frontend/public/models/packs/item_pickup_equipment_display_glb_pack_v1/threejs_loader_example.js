import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export function loadItemAsset(scene, url, position = {x:0, y:0, z:0}, scale = 1) {
  loader.load(url, (gltf) => {
    const model = gltf.scene;
    model.position.set(position.x, position.y, position.z);
    model.scale.setScalar(scale);
    model.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    scene.add(model);
  });
}

// Example:
// loadItemAsset(scene, '/assets/glb_assets/weapon_pickup_gilded_sword_legendary.glb', {x:0,y:0,z:0}, 1);
