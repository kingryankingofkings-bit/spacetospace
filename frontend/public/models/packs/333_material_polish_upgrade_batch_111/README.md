# Material Polish Upgrade Batch 111

This is one of the second set of 200 upgrade packs.

## Purpose

This pack upgrades prior generated textures and low-poly objects without duplicating the original source assets.

## Contents

- 6 `.glb` upgrade overlay/proxy meshes
- 12 `.png` texture upgrade maps
- 5 patch JSON files for Antigravity 2.0 / engine import
- `manifest.json`, `ASSET_INDEX.md`, and `VALIDATION_REPORT.json`

## Important

The target assets are referenced by `source_zip` and `path_in_zip` in `patches/asset_upgrade_patch_manifest.json`.
Antigravity 2.0 should create non-destructive prefab variants rather than overwriting the original files.
