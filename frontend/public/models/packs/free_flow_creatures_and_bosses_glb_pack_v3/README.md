# Free-Flow Creature and Boss GLB Pack

This package contains **13 browser-loadable `.glb` model assets** created for the creature and boss concepts in your prompt.

## Contents

```text
models/
  creatures/
    01_gnarl_maw.glb
    02_grid_rusher.glb
    03_scrap_phalanx.glb
    04_siphon_tick.glb
  bosses/
    boss_01_ascendant_colossus.glb
    boss_02_syndicate_lich.glb
    boss_03_resonant_behemoth.glb
    boss_04_null_anomaly.glb
    boss_05_apex_chimera.glb
    boss_06_resonance_maestro.glb
    boss_07_data_forged_evolvarch.glb
    boss_08_ivory_behemoth.glb
    boss_09_astral_sovereign.glb
manifest.json
colliders.json
MODEL_INDEX.md
USAGE_NOTES.md
threejs_loader_example.js
```

## Asset Type

These are **actual `.glb` mesh files**, not images or concept sheets.

They are low-poly, static prototype/gameplay models with embedded materials and named parts. They are suitable as browser-game placeholder/production-base assets, but they are **not rigged or animated yet**.

## Coordinate System

- Y-up
- Origin near the center of the footprint
- Forward generally points toward negative Z
- Scale is arbitrary game units, intended to be convenient for Three.js-style scenes

## Recommended Next Steps

1. Import into Blender for rigging and animation.
2. Add skeletal bones, animation clips, and hit-reaction variants.
3. Replace or refine procedural geometry with hand-modeled topology where needed.
4. Use `manifest.json` for engine metadata and `colliders.json` for initial hitbox tuning.
5. Enable emissive bloom/postprocessing in the renderer for the glow materials.
