# Unreal Import Guide — Torinn Rhogar

1. Import the `.glb` proxy files into `/Game/Characters/Torinn_Rhogar/Models/`.
2. Convert/assign PBR materials using `torinn_rhogar_material_profile.json`.
3. Use Niagara systems for fist frost static, blue-green mist, breath vapor, snow motes, and halo glyph.
4. Create sockets on the final rig:
   - `FistVFX_L`, `FistVFX_R`, `MouthBreathVFX`, `HaloHeadVFX`, `TailTip`.
5. Use Control Rig or an imported skeletal rig for tendril and robe secondary motion.
6. Build an Animation Blueprint from `torinn_rhogar_animation_state_machine.json`.
7. Use Level Sequence or Gameplay Camera Component with `torinn_rhogar_camera_profile.json` for intro and ultimate shots.

## Unreal Rendering Notes

- Use Lumen reflections carefully on gold skull pauldrons; avoid overblown gold glare.
- Cloth material should separate white robe from platinum scales using roughness and subtle edge shadow.
- VFX should be additive but capped so the face remains readable.
- Keep cold aura local visually; apply 31°F lore radius through gameplay systems.
