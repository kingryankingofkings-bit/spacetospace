import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export function spawnVFX(scene, url, position = {x:0, y:0, z:0}, scale = 1, lifetimeMs = 700) {
  loader.load(url, (gltf) => {
    const model = gltf.scene;
    model.position.set(position.x, position.y, position.z);
    model.scale.setScalar(scale);
    model.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
        if (obj.material) {
          obj.material.transparent = true;
          obj.material.depthWrite = false;
        }
      }
    });
    scene.add(model);
    window.setTimeout(() => {
      scene.remove(model);
      model.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose?.();
      });
    }, lifetimeMs);
  });
}

// Example:
// spawnVFX(scene, '/assets/glb_assets/telegraph_warning_circle_large.glb', {x:0,y:0,z:0}, 1, 1200);
