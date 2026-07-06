# GLB Model Usage Notes

These GLB files are static low-poly blockouts. They are intended for:

- importing into engine scenes to validate scale and names;
- placeholder NPC placement in Sky Wardens headquarters;
- skyship dock spacing and collision planning;
- early cutscene blocking;
- data-driven asset reference testing.

They are not final art. They do not include skeletons, animation clips, skinning, blendshapes, facial rigs, optimized LODs, collision meshes, or final materials.

Recommended replacement pipeline:

1. Keep the file names and IDs stable.
2. Replace geometry with final rigged assets later.
3. Preserve JSON/CSV IDs so quests, vendors, cinematics, and spawn tables remain stable.
4. Add collision, LOD, impostors, animation controllers, and material instances inside the game engine.
