# Unity Import Guide — Torinn Rhogar

1. Import `torinn_rhogar_proxy_LOD0.glb`, `LOD1`, and `LOD2` into `Assets/Characters/Torinn_Rhogar/Models/`.
2. Set model scale so the character stands at 1.93 meters.
3. Create materials from `torinn_rhogar_material_profile.json` and assign the 1080p textures.
4. Add the VFX sprites as additive particle textures.
5. Create sockets/empty transforms for:
   - `fist_vfx_L`
   - `fist_vfx_R`
   - `mouth_breath_vfx`
   - `halo_head_vfx`
   - `tail_tip`
6. Add a capsule collider and optional hand/tail hitboxes.
7. Use `torinn_rhogar_animation_state_machine.json` as the Animator Controller blueprint.
8. Use `torinn_rhogar_camera_profile.json` for Cinemachine or custom combat-camera setup.
9. Add a local visible aura particle system around Torinn; keep lore-level 2-mile aura as a gameplay/status system rather than rendering a full 2-mile VFX sphere.

## Unity Quality Settings for 1080p

- Texture max size: 2048 if available, 1080 minimum.
- Anisotropic filtering: enabled.
- Shadows: high for boss/cinematic scenes.
- Post: slight bloom only on VFX/gems/eyes.
- Particle max count: 650–1200 for boss scenes; 150–350 for normal gameplay.
