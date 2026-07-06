# Torinn Rhogar — Game Asset Kit

This kit was built from the supplied Torinn Rhogar images and canon description. It includes:

- detailed character profile
- asset requirements
- 3 procedural `.glb` proxy models for game import/blockout
- 1080p procedural texture maps
- 1080p VFX sprite assets
- Unity, Unreal, and Godot import notes
- combat/camera/material/animation JSON profiles
- exactness checklist
- Blender production pipeline notes
- nested upgrade packs
- source reference images and 1920×1080 reference board

## Important Scope Note

The included `.glb` files are usable proxy models, not final high-fidelity sculpted production meshes. They are meant to let your game immediately import, scale, test, and attach materials/VFX/camera behavior while a final modeler or AI-assisted 3D pipeline builds the image-accurate hero asset.

## Fast Import Path

1. Import `02_models_glb/torinn_rhogar_proxy_LOD0.glb` into your engine.
2. Assign 1080p materials from `03_textures_1080p`.
3. Attach VFX sprites from `04_vfx_1080p` to hand, mouth, and halo sockets.
4. Use `05_engine_configs/torinn_rhogar_combat_profile.json` for abilities.
5. Use `09_qa_checklists/TORINN_EXACTNESS_CHECKLIST.md` when replacing the proxy with the final hero model.

## Folder Map

- `01_character_profile` — profile and production requirements.
- `02_models_glb` — proxy GLB files.
- `03_textures_1080p` — base procedural texture maps.
- `04_vfx_1080p` — frost-lightning and aura sprite assets.
- `05_engine_configs` — engine import, combat, animation, camera, material profiles.
- `06_upgrade_packs` — smaller ZIP packs for targeted upgrades.
- `07_source_reference` — supplied images and 1080p reference board.
- `08_blender_pipeline` — Blender notes/script starter.
- `09_qa_checklists` — final validation checklist.
