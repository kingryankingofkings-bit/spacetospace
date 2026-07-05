import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export function loadQuestObject(scene, url, position, scale = 1) {
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
