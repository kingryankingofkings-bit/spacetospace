# Support NPC Assist Upgrade 065 - Reality Shatter

This pack is part of the **Combat + Magic + Character Upgrade Packs** set.

## Focus

- Monster/boss special attacks and magic
- Player class special attacks and combat flow
- Support NPC and pet assist procs
- High-tier magic weapons and armor
- Dynamic camera profiles triggered when combat starts
- Random monster skin systems so duplicate monsters are rare

## Key implementation rule

Create non-destructive prefab variants. Do not overwrite original source assets.

## Random monster skins

This pack defines 64 weighted random skins in `configs/random_skin_spawn_table.json`. The spawn system uses seeded hashing and nearby duplicate rejection so it should be rare to see two identical monsters in the same encounter.

## Antigravity 2.0

Use `configs/antigravity_2_0_prefab_instructions.json`, `configs/dynamic_camera_trigger_profile.json`, and the scripts in `scripts/` to convert these into engine-prefab upgrades.
