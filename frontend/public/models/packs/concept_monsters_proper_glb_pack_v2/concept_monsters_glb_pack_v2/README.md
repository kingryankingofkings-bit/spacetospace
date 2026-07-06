# Concept Monsters Proper GLB Pack

This package contains **real `.glb` 3D mesh assets**, not concept images.

## Contents

Core concepts:
1. `models/01_sylvan_juggernaut.glb`
2. `models/02_scrap_stalker.glb`
3. `models/03_nexus_swarmers_cluster.glb`
4. `models/04_void_anomaly.glb`
5. `models/05_tremor_fiend.glb`
6. `models/06_iron_jaw_hound.glb`
7. `models/07_aegis_carapace.glb`
8. `models/08_venom_spitter.glb`

Bonus evolution asset:
- `models/03b_nexus_warden_evolved.glb`

The Nexus Warden is included because the Nexus Swarmer mechanic evolves into this enemy.

## Technical Notes

- Format: `.glb`
- Style: stylized low-poly / browser-game-friendly
- Materials: embedded PBR material colors; no external texture files required
- Orientation: `+Y` up, `+Z` forward
- Pivot: grounded at local floor, approximately centered for gameplay placement
- Rigging: not rigged
- Animations: not animated
- Collisions: not baked into the GLBs; use `colliders.json` as suggested gameplay hitbox data

## Model Stats

| File | Vertices | Triangles | Dimensions |
|---|---:|---:|---|
| `01_sylvan_juggernaut.glb` | 2078 | 3808 | [3.68, 4.2392, 2.06] |
| `02_scrap_stalker.glb` | 1176 | 2116 | [1.4065, 1.5523, 3.7] |
| `03_nexus_swarmers_cluster.glb` | 988 | 1648 | [1.5863, 1.241, 1.7735] |
| `03b_nexus_warden_evolved.glb` | 240 | 368 | [2.1, 2.7555, 1.5723] |
| `04_void_anomaly.glb` | 1438 | 2608 | [1.5458, 2.44, 1.117] |
| `05_tremor_fiend.glb` | 1605 | 2978 | [2.36, 1.66, 2.5459] |
| `06_iron_jaw_hound.glb` | 1616 | 2940 | [1.28, 1.215, 2.9648] |
| `07_aegis_carapace.glb` | 716 | 1284 | [2.16, 1.6842, 1.905] |
| `08_venom_spitter.glb` | 993 | 1814 | [1.1933, 0.8349, 3.81] |

## Recommended Next Steps

For a production game pipeline, import these GLBs into Blender, Maya, or your engine editor to add:
- skeletons and animation clips
- optimized collision volumes
- LOD variants
- texture atlases or engine-native material variants
- attack/VFX sockets

The mesh parts are intentionally named so gameplay and VFX systems can target specific features such as jaws, bark armor plates, throat sacs, projectile origins, weak points, and evolution cores.
