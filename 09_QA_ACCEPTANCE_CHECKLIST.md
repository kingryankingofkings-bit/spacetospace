# QA Acceptance Checklist

## Asset import
- Every GLB or WAV imports without error.
- Every imported asset has source ZIP metadata.
- Every prefab has a stable prefab ID.
- No broken materials.
- No missing mesh references.

## Collision
- Static props block only where intended.
- Pickups use trigger colliders.
- VFX telegraphs do not block movement.
- Boss hitboxes are separate from boss body colliders.
- Doors/gates update navigation when opened/closed.

## Rigging and animation
- Humanoid rigs use a consistent skeleton.
- Quadruped rigs use consistent limb naming.
- Idle/walk/run/death clips exist for combat entities.
- Attack event markers exist and fire correctly.
- No mesh deformation collapse.

## Scripting
- Interactables show prompts.
- Quest objects respond to quest state.
- Pickups can be collected once.
- VFX despawns correctly.
- Audio cues respect cooldown and mixer routing.
- Boss arenas trigger and reset.

## Performance
- Repeated props are instanced or batched.
- Static props use LODs.
- Large packs are streamable by area/biome.
- VFX meshes are pooled.
- Audio cues are loaded by scene or addressable group.
