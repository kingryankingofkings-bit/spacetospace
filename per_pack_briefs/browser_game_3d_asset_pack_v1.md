# Production Brief — browser_game_3d_asset_pack_v1.zip

Pack name: Browser Game 3D Asset Pack v1

Detected contents:
- GLB files: 50
- WAV files: 0
- Manifest asset count: 50
- ZIP size: 115876 bytes

## Antigravity 2.0 actions

1. Extract the ZIP into a source-controlled import directory.
2. Read `manifest.json`, `colliders.json`, and `ASSET_INDEX.md` if present.
3. Import GLB assets as source meshes or WAV files as audio cues.
4. Create engine prefabs using stable source filename stems.
5. Assign colliders from metadata where available.
6. Apply category-specific prefab scripts.
7. Generate LODs for repeated static props.
8. Add QA status fields to each generated prefab.
9. Produce a conversion report listing successes, warnings, and failures.

## Notes

Treat all generated models as prototype/base assets unless a later production pass marks them complete.
