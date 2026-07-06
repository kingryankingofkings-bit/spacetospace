# Event Relic Magic Upgrade 110 - Reality Tear

Pack number: **732**
Family: `event_relic_magic`
Theme: `scrap`
Monster: `The Nexus Swarmers`
Boss: `The Resonance Maestro`
Player Class: `The Packmaster`
Support NPC: `Echo the Weaver`

## GLB Upgrade Modules
- `glb_upgrades/01_special_attack_vfx.glb` — special_attack_vfx — Reality Tear
- `glb_upgrades/02_random_skin_projector.glb` — random_skin_projector — The Nexus Swarmers
- `glb_upgrades/03_magic_weapon_upgrade.glb` — magic_weapon_upgrade — Lich-Court Command Scepter
- `glb_upgrades/04_magic_armor_upgrade.glb` — magic_armor_upgrade — Colossus Heartplate
- `glb_upgrades/05_dynamic_camera_trigger.glb` — dynamic_camera_trigger — combat start dynamic camera
- `glb_upgrades/06_combat_flow_anchor.glb` — combat_flow_anchor — free-flow combat smoothing
- `glb_upgrades/07_support_npc_aura.glb` — support_npc_aura — Echo the Weaver
- `glb_upgrades/08_pet_companion_proc.glb` — pet_companion_proc — Ash-Rat
- `glb_upgrades/09_high_tier_relic_pedestal.glb` — high_tier_relic_pedestal — relic magic pickup

## Texture Upgrades
- `textures/01_monster_skin_albedo.png` — monster_skin_albedo
- `textures/02_monster_skin_emission.png` — monster_skin_emission
- `textures/03_random_spawn_decal_sheet.png` — random_spawn_decal_sheet
- `textures/04_vfx_emission_sheet.png` — vfx_emission_sheet
- `textures/05_magic_weapon_runes.png` — magic_weapon_runes
- `textures/06_magic_armor_trim.png` — magic_armor_trim
- `textures/07_camera_focus_overlay.png` — camera_focus_overlay
- `textures/08_combat_flow_trail.png` — combat_flow_trail
- `textures/09_high_tier_material_mask.png` — high_tier_material_mask
- `textures/10_support_npc_ability_icon.png` — support_npc_ability_icon
- `textures/11_normal_detail_proxy.png` — normal_detail_proxy

## Configs
- `configs/random_skin_spawn_table.json`
- `configs/special_attack_upgrade_manifest.json`
- `configs/boss_phase_magic_manifest.json`
- `configs/player_class_magic_upgrade.json`
- `configs/high_tier_magic_weapon_armor_manifest.json`
- `configs/support_npc_pet_assist_manifest.json`
- `configs/dynamic_camera_trigger_profile.json`
- `configs/combat_flow_smoothness_tuning.json`
- `configs/animation_event_markers.json`
- `configs/target_asset_reference_manifest.json`
- `configs/antigravity_2_0_prefab_instructions.json`

## Scripts
- `scripts/RandomMonsterSkinSelector.ts`
- `scripts/DynamicCombatCameraProfile.ts`
- `scripts/CombatFlowSmoothingHooks.ts`