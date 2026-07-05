# Scripting and Engine Prefab Spec

Every imported asset should become an engine prefab with a stable ID.

## Required prefab metadata

```json
{
  "prefab_id": "source_filename_stem",
  "source_zip": "pack_name.zip",
  "source_glb": "glb_assets/example.glb",
  "category": "environment | character | monster | item | vfx | ui | quest | audio | vehicle | boss_arena",
  "tags": [],
  "collider_profile": "none | box | sphere | capsule | cylinder | mesh | compound",
  "script_profile": "static_prop | interactable | pickup | enemy | boss | vehicle | vfx_timed | ui_marker | audio_cue"
}
```

## Component profiles

### static_prop
- RenderMesh
- Collider
- Optional Destructible
- Optional NavObstacle

### interactable
- RenderMesh
- Collider
- Interactable
- InteractionPrompt
- QuestStateBinding
- HighlightOnFocus

### pickup
- RenderMesh
- TriggerCollider
- PickupComponent
- RarityVisual
- AudioCue
- DespawnOnPickup

### enemy
- RenderMesh
- Rig
- Animator
- AIController
- Health
- HitReaction
- AttackHitboxes
- LootTable
- Faction

### boss
- RenderMesh
- Rig
- Animator
- BossController
- PhaseManager
- ArenaBindings
- WeakPointComponents
- BossHealthUI
- MusicState

### vfx_timed
- RenderMesh
- Lifetime
- ScaleCurve
- MaterialPulse
- Optional DamageVolume
- Optional AudioCue

### ui_marker
- WorldspaceBillboard
- DistanceFade
- OcclusionCheck
- AccessibilityScale
- ColorblindVariant

### vehicle
- RenderMesh
- Collider
- SeatSockets
- MountOrBoardComponent
- CameraAnchor
- TravelRouteBinding

### audio_cue
- AudioSource
- MixerGroup
- SpatializationRules
- VariationRules
- Cooldown
