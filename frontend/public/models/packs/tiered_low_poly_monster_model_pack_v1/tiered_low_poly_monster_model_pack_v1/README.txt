Tiered Low-Poly Monster Model Pack

This pack contains **actual `.glb` 3D model files** for browser-game prototyping.

These are not just concept images. They are simplified, procedural, low-poly meshes built for loading into web 3D engines such as Three.js, Babylon.js, PlayCanvas, or any engine that supports glTF/GLB.

#Contents

- `models/` — 8 GLB files
  - 4 biped goblin/demon monsters
  - 4 four-legged reptile-wolf monsters
- `manifest.json` — asset metadata, tier data, dimensions, axes, and file paths
- `colliders/colliders.json` — suggested hitbox/collider data
- `docs/threejs_loader_example.html` — minimal Three.js loading example

#Model List

| ID | Name | Family | Tier | File |
|---|---:|---|---:|---|
| `biped_tier_1_imp_grunt` | Imp Grunt | biped_goblin_demon | 1 | `models/biped_tier_1_imp_grunt.glb` |
| `biped_tier_2_bone_brute` | Bone Brute | biped_goblin_demon | 2 | `models/biped_tier_2_bone_brute.glb` |
| `biped_tier_3_spine_hunter` | Spine Hunter | biped_goblin_demon | 3 | `models/biped_tier_3_spine_hunter.glb` |
| `biped_tier_4_warlord_boss` | Warlord Boss | biped_goblin_demon | 4 | `models/biped_tier_4_warlord_boss.glb` |
| `quadruped_tier_1_razorhound` | Razorhound | quadruped_reptile_wolf | 1 | `models/quadruped_tier_1_razorhound.glb` |
| `quadruped_tier_2_boneback_stalker` | Boneback Stalker | quadruped_reptile_wolf | 2 | `models/quadruped_tier_2_boneback_stalker.glb` |
| `quadruped_tier_3_spined_alpha` | Spined Alpha | quadruped_reptile_wolf | 3 | `models/quadruped_tier_3_spined_alpha.glb` |
| `quadruped_tier_4_apex_beast` | Apex Beast | quadruped_reptile_wolf | 4 | `models/quadruped_tier_4_apex_beast.glb` |

#Import Notes

- Format: binary glTF (`.glb`)
- Up axis: `+Y`
- Forward axis: `-Z`
- Materials: embedded vertex colors
- External textures: none
- Rigged: no
- Animated: no
- Intended use: static enemies, prototypes, or base meshes for further Blender cleanup/rigging

#Three.js Loading Example

```js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load("./models/quadruped_tier_1_razorhound.glb", (gltf) => {
  const monster = gltf.scene;
  monster.position.set(0, 0, 0);
  scene.add(monster);
});
```

#Suggested Pipeline

1. Load the `.glb` directly into your browser game for testing.
2. Use `manifest.json` to select models by tier.
3. Use `colliders/colliders.json` for approximate hitbox setup.
4. For production polish, import into Blender to add:
   - armature/rig
   - idle/walk/attack/death animations
   - optimized merged materials
   - custom collision meshes
   - LODs

#Quality Note

These are stylized procedural low-poly prototype assets. They are real 3D model files, but they are not handcrafted Blender sculpts and are not rigged/animated. They are designed to get usable monsters into a 3D browser game quickly.
