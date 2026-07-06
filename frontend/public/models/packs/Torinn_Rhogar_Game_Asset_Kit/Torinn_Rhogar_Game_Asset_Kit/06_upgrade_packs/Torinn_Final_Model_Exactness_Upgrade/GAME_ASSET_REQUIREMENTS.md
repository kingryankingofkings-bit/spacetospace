# Torinn Rhogar — Game Asset Requirements

## Package Goal

This package gives you the files and specifications needed to place Torinn Rhogar into a game as a recognizable, engine-ready character asset. The included `.glb` files are procedural proxy meshes for blocking, scale, collision, shader setup, VFX alignment, and gameplay testing. They are not a final hand-sculpted production model. The reference board, exactness checklist, material maps, VFX sprites, manifests, and Blender generation notes are included so the final 1080p/HD version can be built to match the supplied images as closely as possible.

## Recommended Final Asset Targets

| Asset Layer | Target |
|---|---:|
| Texture resolution | 1080p minimum for gameplay, 2048 for close-up cinematics |
| LOD0 triangle budget | 70k–110k for hero/boss model |
| LOD1 triangle budget | 30k–50k |
| LOD2 triangle budget | 10k–18k |
| Skeleton bones | 95–130 including face, tail, tendrils, cloth helpers |
| Tendril chains | 10–16 simulated chains |
| Cloth zones | robe panels, sash strips, rear cloth, waist banners |
| Materials | platinum scales, white robe, gold armor, gems, claws, VFX |
| VFX layers | fist aura, glyph halo, cold breath, foot frost, snow motes, blue-green static |
| Gameplay camera | dynamic combat start camera, boss intro, close-range hand VFX framing |

## Included Proxy Models

- `torinn_rhogar_proxy_LOD0.glb` — most detailed procedural proxy.
- `torinn_rhogar_proxy_LOD1.glb` — reduced proxy.
- `torinn_rhogar_proxy_LOD2.glb` — lightweight distant proxy.

These contain the core readable silhouette: platinum dragonborn body, head spikes, snout, tendrils, robe, sash, gold skull pauldrons, tail, claws, fist magic rings, and halo ring.

## Required Final Production Pass

For a final model matching the images, use the proxy only as a blockout. The production artist or AI-assisted 3D pipeline must perform:

1. High-resolution sculpt pass for face, scale layering, cheek spines, brow horns, jaw geometry, and tendril segmentation.
2. Robe sculpt/sim pass with layered folds, gold embroidery, cloth panel thickness, and sash wrapping.
3. Skull pauldron sculpt pass with readable human-like skull forms in polished gold.
4. Tail sculpt pass with scale rows and jewelry accents.
5. Full retopology for animation.
6. Rigging for humanoid combat, tail, tendrils, robe cloth, and hand-claw deformation.
7. PBR material authoring.
8. In-engine VFX implementation using supplied sprites and manifests.
9. 1080p quality validation using `TORINN_EXACTNESS_CHECKLIST.md`.

## Scale and Placement

Set character height to 1.93 meters / 6'4" at import. The proxy is in generic model units; scale it in-engine using the import config.

## Collision Setup

Recommended colliders:

- Capsule collider: main body, 0.72m radius, 1.93m height.
- Secondary tail collider: segmented capsule chain, non-blocking unless using tail attacks.
- Shoulder collider: optional hit-zone volumes around skull pauldrons.
- Hand collider: active only during claw/fist strikes.
- Aura trigger: 2-mile world-level radius for lore/system effects; local combat radius for visible VFX.

## Rig Requirements

Minimum bones:

- pelvis, spine_01, spine_02, chest, neck, head, jaw.
- clavicle/upperarm/forearm/hand/finger chains for both arms.
- thigh/calf/foot/toe/claw chains for both legs.
- tail_01 through tail_08 minimum.
- tendril_01 through tendril_12, each with 4–6 bones.
- robe_front_L/R, robe_back_L/R, sash_L/R helper bones.
- shoulder_skull_L/R attachment bones.
- fist_vfx_L/R sockets.
- halo_vfx_head socket.
- breath_vfx_mouth socket.

## Animation Set

Core locomotion:

- idle_cold_breath
- idle_prayer_fists
- walk_robed_heavy
- run_monk_controlled
- turn_90_left/right
- pivot_180
- combat_ready

Combat:

- claw_jab_L
- claw_cross_R
- frost_palm_push
- spinning_tail_guard
- monk_step_reposition
- dual_fist_charge
- blue_green_static_release
- skull_pauldron_guard
- divine_halo_channel
- frost_breath_short
- boss_intro_stillness
- boss_execute_tempest

Reactions:

- light_hit_upper
- light_hit_lower
- heavy_hit_stagger
- parry_success
- knockback_recover
- low_health_aura_surge
- victory_stand

## Materials

Use PBR. Recommended material channels:

- Albedo/BaseColor
- Normal
- Roughness
- Metallic
- Ambient Occlusion
- Emissive for ice glyphs, fist aura, gemstones, and eyes
- Subsurface/translucency only for mist, cloth edge highlights, and VFX sprites

## 1080p Upgrade Definition

The 1080p upgrade is not just screen resolution. It means the model and effects hold up at 1920×1080 gameplay capture with no muddy texture patches, no unreadable skull pauldrons, no flat tendrils, no generic robe, and no loss of the frost-lightning identity.
