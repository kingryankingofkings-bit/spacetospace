# Engine Import Rules

## Import conventions

- Preserve original ZIP and GLB filenames in metadata.
- Convert spaces to underscores only in engine object names.
- Do not silently merge meshes for animated/rigged assets.
- Do merge or instance repeated static props after validation.
- Use meters as the default unit.
- Assume Z-up source geometry may need engine-specific orientation correction.

## Materials

Generated materials are placeholders. Antigravity 2.0 should create engine-side material presets:

- `mat_world_stone`
- `mat_world_wood`
- `mat_world_metal`
- `mat_world_glass`
- `mat_vfx_additive_fire`
- `mat_vfx_additive_ice`
- `mat_vfx_additive_lightning`
- `mat_vfx_additive_poison`
- `mat_vfx_additive_void`
- `mat_ui_worldspace`
- `mat_rarity_common`
- `mat_rarity_uncommon`
- `mat_rarity_rare`
- `mat_rarity_epic`
- `mat_rarity_legendary`
- `mat_rarity_mythic`
- `mat_rarity_godly`

## Prefab directory layout

```text
Assets/
  Prefabs/
    Characters/
    Monsters/
    Bosses/
    Environment/
    Props/
    Items/
    VFX/
    UI/
    Quest/
    Vehicles/
    Audio/
  Art/
    SourceGLB/
  Data/
    GeneratedManifests/
```

## Naming

Prefab ID should equal the source filename stem.

Example:
`glb_assets/weapon_pickup_gilded_sword_legendary.glb`
becomes:
`PF_weapon_pickup_gilded_sword_legendary`
