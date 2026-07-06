# Monster Pack Runtime Selection Example

```js
async function loadMonsterByTier({ family, tier, scene, GLTFLoader }) {
  const manifest = await fetch("./manifest.json").then(r => r.json());
  const entry = manifest.models.find(m => m.family === family && m.tier === tier);

  if (!entry) {
    throw new Error(`No monster found for ${family} tier ${tier}`);
  }

  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(entry.file, (gltf) => {
      const monster = gltf.scene;
      monster.userData.monsterId = entry.id;
      monster.userData.tier = entry.tier;
      monster.userData.family = entry.family;
      scene.add(monster);
      resolve(monster);
    }, undefined, reject);
  });
}
```
