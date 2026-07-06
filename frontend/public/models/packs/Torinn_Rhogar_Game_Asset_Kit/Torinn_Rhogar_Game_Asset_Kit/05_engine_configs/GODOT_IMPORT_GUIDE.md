# Godot Import Guide — Torinn Rhogar

1. Import the `.glb` proxy files into `res://characters/torinn_rhogar/models/`.
2. Convert materials to StandardMaterial3D or ShaderMaterial.
3. Assign textures from `03_textures_1080p`.
4. Build GPUParticles3D effects from the 1080p VFX sprites.
5. Add sockets as child Node3D markers for fists, mouth, halo, and tail tip.
6. Use an AnimationTree based on `torinn_rhogar_animation_state_machine.json`.
7. Add a local visible aura sphere/particles around the character and apply the 2-mile 31°F aura through world state, not through a massive rendered particle volume.
