---
name: game-engine-asset-integration-master
description: Use this skill when the user asks to integrate, import, validate, convert, register, package, stream, spawn, procedurally generate, or troubleshoot .glb/.gltf assets and other game-engine files including 3D models, meshes, materials, textures, rigs, animations, audio, VFX, shaders, UI art, fonts, scenes, prefabs, blueprints, packed scenes, gameplay data, localization, DLC, live-content bundles, or user-generated content for accurate editor use and in-game runtime generation across Unity, Unreal, Godot, or a custom engine.
---

# Game Engine Asset Integration Master Skill

## Mission

Use this skill to turn source asset files into reliable engine-ready and runtime-ready game content. The skill covers ingestion, validation, conversion, import settings, dependency mapping, engine-native asset generation, runtime loading, spawning, procedural generation hooks, content registry setup, quality gates, and final verification.

The skill is intentionally engine-agnostic first, then engine-specific. It supports Unity, Unreal Engine, Godot, and custom engines without assuming one stack unless the user or project files make the engine clear.

## Non-negotiable outcome

Every integrated asset must end with:

1. A stable asset identity that gameplay and UI systems can reference.
2. Verified source-file health before import.
3. Correct scale, orientation, pivot, sockets/anchors, materials, textures, collisions, animations, metadata, and dependencies.
4. An engine-native representation such as a prefab, Blueprint, PackedScene, resource, entity archetype, asset bundle entry, Addressable, Primary Asset, or custom registry entry.
5. A runtime generation path that can load, instantiate, release, and validate the asset without hard-coded editor-only assumptions.
6. A testable report describing what changed, what was skipped, what requires human review, and how the asset is used in game.

## When to use this skill

Use this skill for requests involving any of the following:

- Importing `.glb`, `.gltf`, `.fbx`, `.usd`, `.usdz`, `.obj`, `.blend`, `.dae`, or engine-native scene/model files.
- Preparing 3D models, characters, cards, boards, environments, props, UI models, cosmetics, avatars, particles, cinematic props, or generated game objects.
- Making game-ready prefabs, Blueprints, PackedScenes, entities, asset catalogs, Addressables, Primary Assets, asset bundles, cooked packages, mod packages, downloadable content, or live content.
- Mapping textures, PBR materials, shaders, animations, animation events, rigs, skeletons, blend shapes, LODs, colliders, hitboxes, nav data, sockets, attachment points, physics assets, or spawn points.
- Building runtime import, runtime generation, procedural generation, user-generated content, card-game board generation, cosmetic spawning, VFX spawning, or asset streaming flows.
- Troubleshooting incorrect scale, missing materials, broken normals, pink/missing shaders, animation mismatch, runtime load failure, dependency missing, memory spikes, incorrect import settings, or asset version mismatch.

## Default assumptions when the project context is incomplete

Do not stall on missing information. If the user does not provide enough details, proceed with safe assumptions and clearly list them.

Default assumptions:

- Game scale is 1 engine unit = 1 meter unless the project has a different convention.
- Runtime-facing assets use stable IDs rather than direct file paths.
- Source assets are immutable; generated/imported assets can be regenerated.
- `.glb` and `.gltf` are treated as interchange/runtime 3D assets, not as the final gameplay contract by themselves.
- Gameplay objects must be generated from an engine-native wrapper: prefab, Blueprint, PackedScene, entity archetype, or project-specific runtime descriptor.
- Materials should be mapped to the project’s active render pipeline instead of accepting unreviewed defaults.
- Large assets should load asynchronously and release cleanly.
- Untrusted runtime-imported assets must be sandboxed, validated, limited, and denied access to code execution.
- Networking must reference content hashes and asset IDs, not raw local file names.

Ask a clarification question only when proceeding would be destructive, legally risky, security-sensitive, or likely to corrupt production content. Otherwise, make a best-effort integration plan with explicit assumptions.

## Source control and safety rules

- Never overwrite source files unless the user explicitly requests it.
- Never delete engine-native assets without creating a replacement plan and migration map.
- Never rename public asset IDs without producing redirect rules or backward-compatibility notes.
- Never add unknown third-party assets to a commercial project without a license/status field.
- Never trust a runtime-imported model, texture, shader, script, bundle, or archive by extension alone.
- Never allow downloaded or user-generated content to execute scripts, native plugins, editor commands, or shader compilation paths unless the project has a reviewed sandbox policy.
- Never let editor-only paths, absolute local paths, or workstation-specific paths leak into runtime registries.
- Never bind gameplay logic to material names, mesh node order, hierarchy order, or localized display names.
- Never ship test placeholder assets unless they are intentionally flagged for shipping.

## Required working model

Think in six layers:

1. **Source layer**: raw files from DCC tools, audio tools, UI tools, localization tools, spreadsheets, content design tools, or external services.
2. **Validation layer**: format checks, naming checks, metadata checks, dependency checks, license checks, size/performance checks, security checks.
3. **Canonicalization layer**: scale, orientation, pivots, material conventions, texture color spaces, animation naming, collision naming, compression, LOD policy, import profile assignment.
4. **Engine-native layer**: prefab, Blueprint, PackedScene, entity archetype, material instances, animation controllers, state machines, Niagara/VFX Graph particles, audio events, UI resources, data assets.
5. **Runtime catalog layer**: stable IDs, content hashes, bundle groups, dependency graph, load priority, memory budget, streaming policy, generation recipe, spawn policy, unload policy.
6. **Gameplay utilization layer**: actual in-game systems such as character spawners, card battlefield, UI views, board generation, cosmetics, VFX triggers, sound triggers, localization, tutorials, store items, matchmaking scene flow, and live-content updates.

Do not skip a layer. If a layer does not exist yet in the project, define the minimum viable version.

## Intake checklist

Before proposing or applying integration, collect or infer:

- Engine: Unity, Unreal, Godot, custom, or unknown.
- Engine version and render pipeline where available.
- Target platforms: PC, console, mobile, web, VR/AR, cloud streaming, or internal tools.
- Asset categories: 3D, texture, material, animation, audio, VFX, UI, data, localization, video, shader, scene, prefab, bundle, mod, DLC.
- Runtime requirement: editor-only, built-in shipping content, downloadable content, live ops, user-generated content, procedural generation, or network-replicated generation.
- Ownership: first-party, outsourced, marketplace, AI-generated, player-generated, temporary placeholder, licensed IP, or unknown.
- Gameplay role: visual-only, physics, collision, hitbox, interactable, UI, cosmetic, card, board, character, environment, projectile, VFX, sound, localization, data-only.
- Required quality level: prototype, vertical slice, production, certification, or shipping.
- Existing asset registry, folder convention, naming convention, import profiles, and platform budgets.

When the answer is unknown, mark it as `Unknown` rather than inventing facts.

## Master workflow

### Phase 1: Discover and inventory

1. Identify every input file and classify it by asset domain.
2. Record filename, extension, relative path, size, modified date if available, owner/license status, intended use, and dependency relationships.
3. Group files into logical asset packages: character, card, board, stage, UI screen, VFX set, audio bank, shader pack, localization pack, gameplay data pack, DLC pack, or mod pack.
4. Detect duplicate names, ambiguous names, incompatible capitalization, illegal path characters, oversized files, missing sidecar files, and source/generated mixing.
5. Produce an asset inventory table before import.

### Phase 2: Assign stable identity

Every runtime-usable asset needs a stable identifier. Use this pattern unless the project already has one:

- `domain.category.asset_slug.variant.platform_or_quality`
- Examples:
  - `3d.card.creature_dragon_fire.base.high`
  - `ui.icon.mana_fire.default.hd`
  - `vfx.card_cast.fireburst.red.mobile`
  - `audio.sfx.card_draw.paper_soft.default`
  - `scene.board.arcane_table.night.pc`

Rules:

- Stable IDs are lowercase and use `a-z`, `0-9`, `_`, `.`, and `-` only.
- Stable IDs must not include localized names, random UUIDs without a manifest, local usernames, absolute paths, or source-control branch names.
- Human-readable display names are metadata, not IDs.
- One source asset can generate multiple runtime IDs if variants are genuinely distinct.
- One runtime ID may reference multiple dependencies.

### Phase 3: Validate source files

Validate before import.

For every asset package, check:

- File opens in the expected importer.
- Extension matches content type.
- Required dependencies are present.
- Naming follows project convention.
- Asset does not exceed size, texture, triangle, bone, animation, audio, shader, or localization budgets.
- License/status is recorded.
- Source and generated content are separated.
- No executable content is included unless intended and reviewed.

For `.glb` and `.gltf`, also check:

- Valid glTF 2.0 structure.
- Scenes, nodes, cameras, meshes, buffers, materials, textures, skins, and animations are present only as intended.
- Mesh primitive modes, indices, normals, tangents, UVs, vertex colors, skins, morph targets, and animation channels are valid.
- Materials use supported PBR properties and supported extensions.
- Embedded textures are intentional; external dependencies are available when using `.gltf`.
- Units, axes, transforms, pivots, sockets, and bounds match the engine profile.
- Blend shapes and skeleton export settings are compatible with the target engine.
- Texture color space is correct: base color and emissive are color/sRGB; normals, masks, roughness, metallic, occlusion, height, and data maps are linear/non-color.

### Phase 4: Canonicalize import profile

Create or select an import profile before importing. Import profiles are reusable rules, not one-off guesses.

Each import profile should define:

- Asset domain and category.
- Accepted file extensions.
- Scale factor and unit policy.
- Axis conversion policy.
- Pivot policy.
- Mesh cleanup policy.
- Material mapping policy.
- Texture compression and color-space policy.
- Mipmap, streaming, and anisotropy policy.
- Animation clip extraction policy.
- Rig retargeting policy.
- LOD policy.
- Collision generation policy.
- Lightmap and UV policy.
- Runtime loading group.
- Platform override policy.
- Validation gates.
- Reimport behavior.

### Phase 5: Import or convert

Choose the least lossy path.

Preferred sequence:

1. Import the source format directly when the engine importer is reliable for the asset category.
2. Convert to a project-standard interchange format when direct import loses critical data.
3. Generate engine-native wrappers after import.
4. Store conversion results as generated artifacts, not as the original source of truth unless the user explicitly chooses them as canonical.

Do not convert just because conversion is possible. Convert only to fix compatibility, reduce runtime cost, comply with platform constraints, standardize the pipeline, or support runtime loading.

### Phase 6: Generate engine-native wrappers

Raw imported assets are rarely sufficient for gameplay. Generate or update the correct wrapper type:

- **Unity**: prefab, material, Animator Controller, Avatar, Timeline asset, VFX Graph, ScriptableObject, Addressable entry, scene, UI prefab, audio mixer group assignment.
- **Unreal**: Blueprint, material instance, skeletal mesh asset, animation Blueprint, physics asset, Niagara system, Primary Asset, Data Asset, Level Instance, World Partition content, sound cue/metasound, UMG widget.
- **Godot**: PackedScene, inherited scene, Resource, Material, AnimationPlayer/AnimationTree setup, Skeleton3D retargeting, GPUParticles3D, Control scene, AudioStream assignment, import preset.
- **Custom engine**: compiled asset, metadata descriptor, entity archetype, render resource, physics resource, audio resource, shader permutation, localization entry, streaming bundle entry.

Each wrapper must contain or reference:

- Stable asset ID.
- Source file path or source hash.
- Generated asset path.
- Dependencies.
- Runtime load group.
- Spawn recipe.
- Ownership/license metadata.
- Quality tier/platform variant metadata.
- Last validation status.

### Phase 7: Register runtime catalog

The runtime catalog is the contract between content and game systems.

For each runtime asset, register:

- Stable asset ID.
- Human display name.
- Domain/category.
- Engine-native asset path or bundle address.
- Source hash and generated hash.
- Version.
- Dependencies.
- Required systems: renderer, animation, physics, audio, VFX, UI, input, localization, netcode.
- Load mode: eager, async on demand, streamed, preloaded per scene, remote downloadable, generated, pooled.
- Unload mode: scene unload, reference-counted, memory-pressure unload, never unload during match, manually released.
- Platform profile.
- Memory estimate.
- CPU/GPU load estimate.
- Content rating or safety notes where relevant.
- Network determinism notes where relevant.

### Phase 8: Configure runtime loading and generation

Every asset used in game must have a runtime pathway.

Decide whether it is:

- **Prebuilt**: included in the base build.
- **Bundled**: included in an asset bundle, PAK, Addressable group, resource pack, or custom bundle.
- **Remote**: downloaded after install.
- **Generated**: generated from recipes, gameplay data, procedural rules, or user choices.
- **Runtime imported**: imported from `.glb`, image, audio, or data at runtime.
- **User-generated**: uploaded or selected by players and treated as untrusted.

Runtime generation recipe must specify:

- Required asset IDs.
- Required data records.
- Spawn position and attachment parent.
- Scale, rotation, and pivot expectations.
- Material variant selection.
- Animation state initialization.
- Physics/collider state.
- Audio/VFX hooks.
- UI/localization hooks.
- Pooling policy.
- Network replication policy.
- Save/load persistence policy.
- Cleanup/unload policy.

### Phase 9: Verify in-editor use

Validate that artists, designers, and developers can use the asset correctly in the editor:

- Asset appears in the expected folder.
- Preview thumbnail is readable.
- Materials render correctly under project lighting.
- Scale matches reference objects.
- Pivot behaves correctly when rotated, snapped, attached, or animated.
- Colliders are correct and not excessive.
- LODs switch appropriately.
- Animations play and loop correctly.
- Audio routes to the correct mixer/bus.
- UI assets scale correctly across target resolutions.
- Data assets resolve references by stable IDs.
- Reimport does not break wrapper assets.

### Phase 10: Verify runtime use

Validate in play mode or packaged build:

- Asset loads from the runtime catalog.
- Dependencies load before use.
- Missing dependency failures are explicit and recoverable.
- Spawned object appears in the correct position, orientation, scale, and visual state.
- Materials and shaders are included in the build and do not fall back unexpectedly.
- Animations, VFX, audio, UI, and physics initialize correctly.
- Asset unloads or returns to pool cleanly.
- Memory returns to expected range after release.
- Remote content version and hash match the catalog.
- Multiplayer clients resolve the same asset ID to compatible content.
- Generated content is reproducible when it needs to be deterministic.

### Phase 11: Report and handoff

Every integration pass must produce a report with:

- Summary of assets processed.
- Assets imported/generated.
- Assets skipped and why.
- Validation errors.
- Warnings requiring artist/designer/engineer review.
- Runtime catalog entries created or changed.
- Bundle/address/cook changes.
- Platform-specific overrides.
- Remaining risks.
- Exact assumptions made.
- Manual test checklist.

## File-domain handling rules

### 3D models and scenes

Supported categories include `.glb`, `.gltf`, `.fbx`, `.usd`, `.usdz`, `.obj`, `.blend`, `.dae`, and engine-native scene/model files.

Check:

- Unit scale.
- Up-axis and forward-axis.
- Pivot and origin.
- Hierarchy depth and naming.
- Mesh count and draw-call impact.
- Triangle/vertex budget.
- Vertex attributes: normals, tangents, UV sets, vertex colors, skin weights.
- Materials and material slots.
- Texture references.
- Skeletons and bones.
- Morph targets/blend shapes.
- Animation clips.
- Cameras and lights if intentionally used.
- Collisions and sockets.
- LODs and impostors.
- Lightmap UVs if relevant.
- Bounds and culling behavior.

For card-game UIs, 3D models may include card meshes, premium foil card variants, board tables, avatars, pets, tokens, portals, pack-opening props, deck boxes, stage props, and cosmetic skins.

### Textures and images

Supported categories include `.png`, `.jpg`, `.jpeg`, `.tga`, `.tif`, `.tiff`, `.psd`, `.exr`, `.hdr`, `.webp`, `.ktx`, `.ktx2`, `.dds`, and engine-native texture assets.

Classify each image as:

- Base color/albedo.
- Normal.
- Metallic.
- Roughness/smoothness.
- Ambient occlusion.
- Emissive.
- Height/displacement.
- Mask map.
- Opacity/alpha.
- UI sprite.
- Icon.
- Font atlas.
- Render target.
- Lookup table.
- Data texture.
- Card art.
- Avatar portrait.
- Store/banner art.

Rules:

- Use correct color space.
- Use alpha only when needed.
- Use mipmaps for world-space textures; avoid mipmaps for most crisp UI unless the project has a specific UI scaling policy.
- Apply platform compression overrides.
- Use texture arrays/atlases only when they serve batching or streaming goals.
- Preserve source art separately from compressed runtime texture outputs.
- Ensure card art and UI art have safe-area variants for multiple aspect ratios and languages.

### Materials and shaders

Classify materials as:

- Standard PBR.
- Stylized.
- UI.
- Transparent.
- Cutout.
- Unlit.
- Emissive.
- Holographic/foil.
- Particle.
- Post-process.
- Terrain.
- Water/glass.
- Debug.
- Platform-specific fallback.

Rules:

- Map imported PBR material properties to the project’s shader pipeline.
- Create material instances/variants where supported.
- Avoid runtime shader compilation in shipping builds unless the platform and engine policy support it.
- Include required shader variants/permutations in build settings.
- Define fallbacks for unsupported glTF extensions or engine-specific shader features.
- For card games, premium card treatments must still be readable at gameplay camera distance and must not obscure rules text or targeting states.

### Animation, rigs, and motion

Supported categories include skeletal animation, transform animation, material animation, sprite animation, UI animation, timelines, cutscenes, camera shakes, procedural animation, and gameplay animation events.

Check:

- Skeleton compatibility.
- Bone count.
- Bind pose.
- Root motion policy.
- Clip names.
- Clip ranges.
- Loop settings.
- Additive settings.
- Retargeting settings.
- Event markers.
- Curves.
- Compression tolerance.
- Runtime controller/state-machine assignment.

Rules:

- Do not assume imported clips are gameplay-ready until clip naming, loop settings, root motion, and event markers are reviewed.
- Gameplay timing should not depend on lossy animation compression unless explicitly approved.
- For multiplayer or deterministic simulations, animation is usually visual presentation; gameplay state should come from authoritative rules/state, not animation playback.

### Physics, collision, hitboxes, and navigation

Handle:

- Static colliders.
- Convex colliders.
- Complex mesh colliders.
- Trigger volumes.
- Hitboxes and hurtboxes.
- Attachment sockets.
- Ragdoll/physics assets.
- Cloth/hair simulation assets.
- Navmesh source geometry.
- Occlusion/culling volumes.

Rules:

- Prefer authored low-complexity collision over visual mesh collision for runtime gameplay.
- Never use high-poly visual meshes as dynamic collision unless explicitly justified.
- Separate visual bounds from gameplay bounds.
- For card-game UI boards, clickable zones and target zones must use explicit interaction colliders or UI hit regions rather than relying on visual mesh geometry.

### Audio

Supported categories include `.wav`, `.aiff`, `.flac`, `.ogg`, `.mp3`, `.m4a`, engine-native audio clips, sound cues, audio events, middleware banks, and music stems.

Classify audio as:

- UI SFX.
- Gameplay SFX.
- Card action SFX.
- Character voice.
- Announcer voice.
- Ambient loop.
- Music loop.
- Music stem.
- Cinematic audio.
- Localization voiceover.

Rules:

- Route audio to correct mixer/bus.
- Apply compression/load settings by use case.
- Keep short latency-critical SFX ready or pooled.
- Stream long music and ambience where appropriate.
- Use loudness normalization and platform-safe peak limits.
- Register subtitle/localization keys for spoken lines.
- For card games, repeated card draw/play/cancel/hover sounds must have variation and cooldown rules to avoid fatigue.

### VFX and particles

Supported categories include particle systems, Niagara systems, VFX Graphs, shader-driven effects, flipbooks, trails, decals, screen effects, post-process effects, and UI particles.

Rules:

- Bind VFX to stable event names, not animation frame numbers alone.
- Define spawn, update, and cleanup ownership.
- Pool frequently used effects.
- Limit particles for mobile and low-quality profiles.
- Define reduced-motion and reduced-flash alternatives.
- Ensure effects communicate gameplay states without relying on color alone.
- For card games, targeting, legal-play states, stack/chain resolution, resource spend, shield, damage, healing, destroy, exile/banish, discard, draw, reveal, and transform effects need consistent visual grammar.

### UI art, fonts, and layout assets

Supported categories include sprites, nine-slice images, vector art, icon atlases, font files, font atlases, UI prefabs/widgets/scenes, cursor assets, input glyphs, and menu backgrounds.

Rules:

- Preserve source art and generate optimized runtime atlases separately.
- Register icons by semantic role, not raw filename.
- Support keyboard, controller, mouse, touch, and screen-reader semantics where the project supports them.
- Verify UI scale at all supported aspect ratios and safe areas.
- Ensure contrast, high-contrast mode, colorblind assists, reduced motion, text scaling, and readable font fallbacks are respected.
- For playing-card games, rules text, costs, type lines, attack/health/power/toughness, rarity, set symbols, counters, and status badges must remain readable at gameplay camera distance.

### Gameplay data and configuration

Supported categories include `.json`, `.yaml`, `.yml`, `.toml`, `.csv`, `.tsv`, `.xml`, spreadsheets, binary tables, engine data assets, localization tables, card definitions, deck definitions, balance tables, economy tables, matchmaking config, AI config, tutorial scripts, and live-ops schedules.

Rules:

- Validate schema before import.
- Separate design data from presentation assets.
- Reference assets by stable IDs.
- Avoid duplicated truth across spreadsheet, JSON, and engine-native data assets.
- Generate runtime data from canonical source when possible.
- Version gameplay-affecting data separately from visual-only data.
- For networked games, clients must agree on gameplay data version before match start.

### Localization

Supported categories include string tables, pluralization files, subtitle files, voiceover maps, font fallback maps, right-to-left layout metadata, and regional asset overrides.

Rules:

- Do not bake localized text into textures unless there is a strong art reason and all locales have variants.
- All player-facing strings need stable localization keys.
- Card rules text should support variable expansion and formatting without changing gameplay IDs.
- UI layouts must survive text expansion.
- Voiceover files must map to subtitle keys and speaker metadata.

### Video and cinematic files

Supported categories include `.mp4`, `.webm`, `.mov`, image sequences, timeline assets, cinematic scenes, camera animation, cutscene bundles, and platform-specific movie files.

Rules:

- Use platform-compatible codecs.
- Include subtitle and accessibility alternatives.
- Avoid blocking critical runtime asset loads behind nonessential video playback.
- Keep cinematic content in dedicated streaming groups when large.

### Scripts, plugins, and executable-adjacent files

This skill can inventory scripts and plugins but must treat them differently from art/data assets.

Rules:

- Do not import or enable scripts/plugins from unknown sources without explicit user approval.
- Do not execute external scripts as part of asset import unless the user requests implementation and the project trusts the script.
- Separate content integration from code execution.
- For user-generated content, never allow script execution by default.

## `.glb` and `.gltf` master integration rules

### Why `.glb`/`.gltf` need special handling

`.glb` is convenient because it can carry scene structure, meshes, buffers, materials, textures, skins, and animations in one binary package. That convenience can hide bad scale, wrong pivots, excess hierarchy, embedded oversized textures, unsupported material extensions, invalid animation clips, missing tangents, or runtime-heavy content. Treat `.glb` as a source/interchange container that must be validated, normalized, and wrapped before gameplay use.

### Required `.glb`/`.gltf` checks

For each `.glb`/`.gltf` file, inspect and report:

- File validity and validator severity.
- Scene count.
- Node count.
- Mesh count.
- Primitive count.
- Vertex count.
- Triangle count.
- Material count.
- Texture count.
- Animation count.
- Skin count.
- Morph target count.
- Camera/light presence.
- Extensions used.
- Embedded vs external resources.
- Image formats and dimensions.
- Alpha/transparency usage.
- Bounds.
- Transform scale.
- Negative scale or non-uniform scale.
- Coordinate/up-axis conversion needs.
- Pivot and origin.
- Tangent/normal presence.
- UV set count.
- Vertex color usage.
- Bone weight count.
- Clip names and durations.
- License metadata if available.

### `.glb`/`.gltf` material mapping

Map glTF PBR to the engine render pipeline intentionally:

- Base Color → albedo/base color, sRGB.
- Metallic Factor/Texture → metallic channel, linear.
- Roughness Factor/Texture → roughness or inverted smoothness depending on engine shader model, linear.
- Normal Texture → tangent-space normal, linear/non-color.
- Occlusion Texture → AO/mask channel, linear.
- Emissive Factor/Texture → emission, usually sRGB for texture source but handled per engine import rules.
- Alpha Mode `OPAQUE`, `MASK`, `BLEND` → corresponding material mode.
- Double-sided → explicit culling policy.
- Extensions → supported extension, project shader mapping, or fallback material.

Do not silently accept a material that looks wrong. If a material cannot map exactly, create a warning and a fallback.

### `.glb`/`.gltf` animation mapping

For animation-bearing files:

- Extract named clips or define clip ranges.
- Assign idle/loop/one-shot states.
- Validate skeleton and skin weights.
- Validate root motion use.
- Validate blend shapes/morph targets.
- Preserve animation events only if encoded or mapped by sidecar metadata.
- Create animation controller/state-machine entry if the asset is gameplay-facing.
- Document unsupported channels or curves.

### `.glb`/`.gltf` runtime import rules

Runtime import is allowed only if the project needs dynamic content, user-generated content, modding, remote downloadable models, or procedural generation from external 3D files.

Runtime import must include:

- File-type validation.
- Size limit.
- Node/mesh/texture/material/animation limits.
- Extension allowlist.
- Texture dimension limits.
- Triangle/vertex limits.
- Memory budget.
- Async loading path.
- Main-thread handoff policy where required by engine.
- Error fallback object.
- Cache policy.
- Unload policy.
- Content hash.
- User/content ownership metadata.
- Abuse/security policy.

For multiplayer, the authoritative game state should replicate the stable asset ID and content version/hash. Do not replicate local file paths.

## Engine-specific adapters

### Unity adapter

Use this section when the project is Unity.

#### Unity intake

Identify:

- Unity version.
- Render pipeline: Built-in, URP, HDRP, custom SRP.
- glTF importer package if any.
- Addressables usage.
- AssetBundle usage.
- Target platforms.
- Asset folder convention.
- Existing prefab and ScriptableObject conventions.

#### Unity import strategy

- Place source assets under the project’s chosen source/import folder, normally inside `Assets/` only when Unity must import them directly.
- Use import settings per file type rather than accepting default settings blindly.
- For `.glb`/`.gltf`, use the project-approved glTF importer; if none exists, recommend selecting one before production import.
- For textures, set texture type, color space, compression, max size, mipmaps, alpha handling, sprite settings, and platform overrides.
- For audio, set load type, compression format, sample-rate setting, preload policy, streaming policy, and mixer routing.
- For models, set scale factor, animation import mode, rig mode, normals/tangents, materials, mesh compression, read/write flag, optimize mesh, and collider policy.
- For UI sprites, set sprite mode, pixels per unit, mesh type, packing tag/atlas policy, nine-slice border, and mipmap policy.
- For shaders/materials, map to URP/HDRP/Built-in compatible shaders and include required shader variants.

#### Unity generated outputs

Generate or update:

- Prefab per gameplay object.
- Material assets and material variants.
- Animation Controller or playable graph metadata.
- Avatar for humanoid rigs where applicable.
- ScriptableObject or project data asset for runtime catalog entry.
- Addressables entry/group/label when runtime streaming or downloadable content is required.
- Scene reference or additive scene group for large environment assets.
- UI prefab or UI Toolkit/UXML-linked asset when integrating UI.

#### Unity runtime generation rules

- Runtime systems should load by stable ID or Addressables address, not editor asset path.
- Prefer async loading for nontrivial content.
- Track handles/references and release them.
- Do not rely on `Resources` for large production content unless the project has explicitly chosen that pattern.
- Ensure shader variants/materials required by runtime imported glTF assets are included in builds.
- For user-selected `.glb` runtime import, use a validated runtime importer and enforce limits before instantiation.

### Unreal Engine adapter

Use this section when the project is Unreal Engine.

#### Unreal intake

Identify:

- Unreal version.
- Content Browser path conventions.
- Interchange pipeline usage.
- Primary Asset types and Asset Manager settings.
- Data Asset/Blueprint conventions.
- Target platforms and cook/chunk policy.
- World Partition or streaming-level strategy.
- Rendering setup, material master library, Niagara conventions, audio system, and localization pipeline.

#### Unreal import strategy

- Import content into an intentional `/Game/...` path, not a temporary root path.
- Use Interchange pipeline stacks or project-approved import presets for glTF, FBX, textures, materials, scenes, and animations.
- For `.glb`/`.gltf`, select whether to import as individual assets or as a full scene.
- Map materials to master materials/material instances.
- Generate skeletal mesh, skeleton, physics asset, animation sequence, animation Blueprint, and control rig resources where needed.
- Generate collision and sockets using project naming conventions.
- Configure Nanite, LODs, virtual textures, texture groups, and platform compression according to project targets.
- Keep editor test assets out of shipping cook unless explicitly marked.

#### Unreal generated outputs

Generate or update:

- Blueprint Actor for spawnable gameplay object.
- Data Asset or Primary Data Asset for registry entry.
- Material Instances.
- Niagara systems.
- Sound cues/metasounds.
- Animation Blueprint.
- Physics Asset.
- Primary Asset registration.
- Asset bundle/chunk/cook metadata.

#### Unreal runtime generation rules

- Runtime systems should load by Primary Asset ID, Soft Object Path, or project registry ID, not raw imported file names.
- Use Asset Manager conventions for load/unload and bundles where available.
- If using runtime Interchange import in a cooked application, ensure required Interchange content is included in packaging settings.
- Treat runtime external imports and mods as untrusted until validated and sandboxed.
- For networked games, replicate authoritative asset IDs and gameplay state, not editor-only object paths unless all clients share the same cooked content contract.

### Godot adapter

Use this section when the project is Godot.

#### Godot intake

Identify:

- Godot version.
- Renderer: Forward+, Mobile, Compatibility, or project-specific.
- Import presets.
- Scene folder convention.
- Resource naming convention.
- Whether `.glb`/`.gltf` is imported as inherited scene, saved scene, runtime import, or converted resource.
- Target platforms.

#### Godot import strategy

- Place source files under `res://` only when they belong in the project import pipeline.
- Use `.import` outputs as generated data, not as source of truth.
- For `.glb`/`.gltf`, import as a scene, then create an inherited scene or saved PackedScene wrapper for gameplay use.
- Configure materials, textures, skeletons, animations, collisions, and import presets intentionally.
- Use Resources for reusable data and PackedScenes for spawnable objects.
- Ensure scripts attached to imported scenes are intentional and trusted.

#### Godot generated outputs

Generate or update:

- PackedScene wrapper.
- Material resources.
- AnimationPlayer or AnimationTree configuration.
- CollisionShape3D/Area3D/StaticBody3D/CharacterBody3D nodes as appropriate.
- Resource file for runtime registry entry.
- UI Control scenes.
- AudioStream assignments.

#### Godot runtime generation rules

- Runtime systems should instantiate PackedScenes or generated scenes from validated GLTFState/runtime import paths.
- Add runtime-imported scenes to the tree only after validation and cleanup.
- Keep gameplay state in project data/resources, not in fragile imported node ordering.
- Use stable IDs and resource paths through a registry layer.

### Custom engine adapter

Use this section when the project uses a custom engine.

#### Custom engine intake

Identify:

- Supported source formats.
- Offline asset compiler path.
- Runtime asset format.
- Renderer material model.
- Texture compression targets.
- Audio backend.
- Animation system.
- Physics backend.
- Entity/component model.
- Package/bundle format.
- Hot reload policy.
- Runtime import policy.
- Platform budgets.

#### Custom engine import strategy

- Define source asset schema.
- Define compiled asset schema.
- Define asset registry schema.
- Define dependency graph format.
- Define deterministic asset IDs and content hashes.
- Define build profiles by platform.
- Define engine-native runtime handles and lifetime rules.
- Define validation gates in the asset compiler.
- Define editor preview parity with runtime loading.

#### Custom engine generated outputs

Generate or update:

- Compiled mesh buffers.
- Compiled texture resources.
- Material descriptors.
- Skeleton and animation clips.
- Collision resources.
- Audio resources.
- UI atlas/fonts.
- Shader permutations.
- Entity archetypes.
- Spawn recipes.
- Package manifests.
- Dependency manifests.
- Asset registry entries.

#### Custom engine runtime generation rules

- Runtime generation must be data-driven.
- Asset handles must be reference-counted or lifetime-managed.
- Asset IDs must resolve through the registry.
- Asynchronous load must expose ready/error/cancel states.
- Missing assets must produce fallback content and diagnostics.
- Generated objects must be reproducible when required for gameplay, networking, replay, or save/load.

## Runtime generation patterns

### Pattern A: Static content spawned at runtime

Use for built-in cards, boards, characters, props, UI screens, and standard VFX.

Flow:

1. Game asks registry for asset ID.
2. Registry resolves bundle/native path/dependencies.
3. Loader async-loads dependencies.
4. Factory instantiates prefab/Blueprint/PackedScene/archetype.
5. Initialization applies variant data.
6. Object registers with gameplay/UI/physics/audio systems.
7. Cleanup releases or pools the object.

### Pattern B: Procedural object assembled from parts

Use for customizable avatars, deck boxes, premium cards, generated boards, modular arenas, cosmetics, random encounters, or dynamic UI scenes.

Flow:

1. Recipe lists component asset IDs.
2. Loader resolves and loads each component.
3. Generator creates parent object.
4. Components attach to named anchors/sockets.
5. Materials/skins/variants apply from data.
6. Bounds, collisions, VFX, and UI hooks are regenerated.
7. Final object receives a generated content ID or save token.
8. Runtime cleanup releases components according to dependency ownership.

### Pattern C: Runtime imported `.glb`/external asset

Use for modding, user-generated content, remote 3D rewards, marketplace content, or creator tools.

Flow:

1. Quarantine input file.
2. Validate extension and content signature.
3. Enforce file size and resource limits.
4. Validate glTF structure and extension allowlist.
5. Inspect mesh/material/texture/animation stats.
6. Reject unsafe or oversized assets.
7. Convert unsupported features to fallback where possible.
8. Load asynchronously.
9. Create runtime wrapper object.
10. Assign sandboxed materials and colliders.
11. Register temporary asset ID and content hash.
12. Allow use only inside approved contexts.
13. Unload and clear cache per policy.

### Pattern D: Downloadable/live content

Use for live cards, seasonal boards, cosmetics, events, skins, battle passes, reward packs, or updated UI assets.

Flow:

1. Manifest download.
2. Signature/hash verification.
3. Compatibility check against client version.
4. Bundle download.
5. Dependency check.
6. Cache and install.
7. Register assets.
8. Warm critical assets if needed.
9. Enable content through entitlement or event config.
10. Rollback on failure.

### Pattern E: Networked runtime content

Use when asset choices affect multiplayer visuals or gameplay presentation.

Flow:

1. Server/match rules specify content version.
2. Client verifies required content hashes.
3. Client blocks matchmaking or uses fallback if required gameplay assets are missing.
4. Gameplay state references stable asset IDs.
5. Presentation layer resolves IDs locally.
6. Mismatches are logged and handled deterministically.
7. Gameplay-affecting data must match exactly; visual-only cosmetics may degrade gracefully if the rules allow it.

## Playing-card game specialization

Use this subsection when assets support a digital playing-card game, collectible card game, trading card game, deckbuilder, board-card hybrid, or similar UI-heavy game.

### Card visual asset domains

- Card frame.
- Card art.
- Card back.
- Card foil/premium treatment.
- Rarity gem.
- Resource/cost icons.
- Faction/color/class icons.
- Type-line icons.
- Rules text frame.
- Power/health/attack/toughness frame.
- Counter badges.
- Status overlays.
- Token markers.
- Targeting outlines.
- Graveyard/discard/exile/banish indicators.
- Stack/chain effect icons.
- Reveal/hidden/face-down variants.
- Full-art/alternate-art variants.
- Animated card variants.

### Card-game board and UI asset domains

- Main board/table/playmat.
- Player avatar models or portraits.
- Hero/leader frame.
- Deck object.
- Hand zone.
- Battlefield/minion/monster zones.
- Resource row.
- Graveyard/discard pile.
- Exile/banish zone.
- Stack/chain area.
- Phase/turn indicator.
- Timer/rope/fuse.
- Targeting arrow.
- Legal-play highlight.
- Invalid-play warning.
- Card inspect/zoom view.
- Deckbuilder card tile.
- Collection binder grid.
- Pack-opening scene.
- Reward chest/event prop.
- Store item preview.

### Card-game data integration rules

- Gameplay card definitions are canonical data, not art files.
- A card definition references visual asset IDs.
- Visual variants reference the same gameplay card ID unless the variant changes mechanics.
- Rules text is localized and generated from data where possible.
- Counters, status effects, keywords, and targeting states use semantic IDs.
- Board objects and card visuals must be generated from game state; game state must not be inferred from scene hierarchy.
- Multiplayer match state must validate card data version before match start.
- UI should support accessibility options such as contrast, colorblind aids, reduced motion, text scaling, hover/inspect zoom, and non-color cues.

### Card-game runtime generation examples

- Generate a card object from `card_id`, `art_variant_id`, `frame_variant_id`, `foil_variant_id`, `language`, and `quality_profile`.
- Generate a board from `board_id`, `season_id`, `player_cosmetic_ids`, `quality_profile`, and `accessibility_profile`.
- Generate a spell VFX from `effect_type`, `source_card_id`, `target_ids`, `color_theme`, and `reduced_motion_enabled`.
- Generate a pack-opening scene from `pack_id`, `rarity_results`, `foil_results`, `cosmetic_theme`, and `platform_profile`.

## Quality gates

### Gate 1: Source asset gate

Pass only when:

- File opens and validates.
- Required dependencies exist.
- License/status is known or explicitly marked unknown.
- Asset naming is acceptable.
- No source/generated confusion exists.
- No obvious unsafe executable content is present.

### Gate 2: Import gate

Pass only when:

- Importer generated expected asset types.
- Scale, pivot, orientation, and bounds are correct.
- Materials are assigned.
- Textures have correct color space and compression.
- Animations and rigs import correctly.
- Collision strategy is valid.
- Warnings are documented.

### Gate 3: Engine-native wrapper gate

Pass only when:

- Prefab/Blueprint/PackedScene/archetype exists.
- Stable ID is assigned.
- Dependencies are registered.
- Runtime load group is assigned.
- Spawn recipe exists.
- Reimport will not break gameplay wrapper.

### Gate 4: Runtime gate

Pass only when:

- Asset loads in play mode or packaged build.
- Asset spawns correctly.
- Dependencies load correctly.
- Fallback behavior works.
- Memory and performance are within budget.
- Asset unloads or pools cleanly.

### Gate 5: Platform gate

Pass only when:

- Platform texture compression is valid.
- Audio format/load mode is valid.
- Shader variants are available.
- Asset bundle/cook/packaging includes required dependencies.
- File paths are platform-safe.
- Memory budgets fit platform limits.

### Gate 6: Multiplayer/live-content gate

Pass only when:

- Asset IDs and content hashes match expected versions.
- Gameplay-affecting data is compatible.
- Remote content has signature/hash verification where required.
- Missing visual-only cosmetics degrade gracefully if allowed.
- Critical gameplay assets block use until installed.

### Gate 7: Accessibility/readability gate

Pass only when:

- UI and card visuals remain readable at gameplay distance.
- Color is not the only indicator of state.
- Contrast modes remain functional.
- Reduced-motion and reduced-flash modes have alternatives.
- Text and icon scaling do not break layouts.
- Input glyphs and localized strings fit the interface.

## Naming conventions

Use consistent naming. Prefer this pattern:

`<domain>_<category>_<asset-slug>_<variant>_<quality-or-platform>`

Examples:

- `mdl_card_dragon_fire_base_high.glb`
- `tex_card_dragon_fire_art_base_2k.png`
- `mat_card_foil_arcane_gold_high`
- `anim_avatar_mage_emote_victory_loop`
- `vfx_spell_fireburst_target_mobile`
- `sfx_ui_card_hover_soft_default.wav`
- `ui_icon_resource_fire_hd.png`
- `data_card_creature_dragon_fire_v001.json`
- `loc_cards_en_us_v001.csv`

Rules:

- Do not use spaces.
- Do not use inconsistent capitalization.
- Do not include temporary labels like `final_final`, `new`, `copy`, or `test` in production IDs.
- Include version in data assets when gameplay content changes over time.
- Keep source filenames and runtime asset IDs traceable but not necessarily identical.

## Dependency graph rules

For each runtime object, identify dependencies:

- Meshes.
- Materials.
- Textures.
- Skeletons.
- Animation clips.
- VFX.
- Audio.
- UI icons.
- Fonts.
- Localization keys.
- Data records.
- Shader variants.
- Physics/collision resources.
- Other prefabs/Blueprints/PackedScenes/archetypes.

Rules:

- A dependency must have a stable ID or explicit generated path.
- Shared dependencies should be loaded once and reference-counted where possible.
- Circular dependencies must be flagged.
- Optional dependencies must define fallback behavior.
- Remote dependencies must include hash/version checks.

## Manifest format requirements

When asked to create or update an asset manifest, include at minimum:

| Field | Required | Purpose |
|---|---:|---|
| asset_id | Yes | Stable runtime identifier. |
| display_name | Yes | Human-readable name. |
| domain | Yes | 3D, texture, material, animation, audio, VFX, UI, data, localization, scene, bundle, etc. |
| category | Yes | More specific type. |
| source_path | Yes | Source or canonical input path. |
| generated_path | Yes | Engine-native output path. |
| source_hash | Recommended | Detect source changes. |
| generated_hash | Recommended | Detect generated output changes. |
| owner | Recommended | Team/vendor/creator. |
| license_status | Recommended | First-party, licensed, marketplace, unknown, restricted. |
| engine | Yes | Unity, Unreal, Godot, custom. |
| import_profile | Yes | Profile used. |
| runtime_group | Yes | Load/preload/streaming group. |
| dependencies | Yes | Stable IDs or paths. |
| platform_profiles | Yes | Platform overrides. |
| memory_budget | Recommended | Expected memory. |
| quality_tier | Recommended | Low/medium/high/ultra/mobile/etc. |
| gameplay_affecting | Yes | True/false. |
| network_required | Recommended | Whether clients must match. |
| validation_status | Yes | Passed/warning/failed. |
| notes | Optional | Human notes. |

## Import profile requirements

Each import profile should be documented as a table or data asset with:

| Field | Purpose |
|---|---|
| profile_id | Stable name. |
| applies_to | Domain/category/extensions. |
| engine | Engine adapter. |
| scale_factor | Unit conversion. |
| axis_conversion | Up/forward conversion. |
| pivot_policy | Origin/anchor behavior. |
| material_policy | Shader/material mapping. |
| texture_policy | Color space, compression, max size, mipmaps. |
| animation_policy | Clip extraction, rig, retarget, root motion. |
| collision_policy | Collider/hitbox generation. |
| lod_policy | LOD generation/selection. |
| runtime_policy | Eager/async/stream/remote/generated. |
| platform_overrides | Platform-specific settings. |
| validation_gates | Gates required before shipping. |
| reimport_policy | How changes propagate safely. |

## Troubleshooting playbook

### Model appears too large or too small

Check unit scale, import scale factor, parent transform scale, DCC export units, prefab/Blueprint/PackedScene wrapper scale, and runtime spawn scale overrides.

### Model faces wrong direction or lies on its side

Check up-axis and forward-axis conversion, root node transform, parent wrapper rotation, DCC export settings, and engine coordinate convention.

### Pivot is wrong

Check source origin, wrapper pivot, generated parent object, socket attachment, UI anchor, and procedural spawn offset.

### Materials are missing or pink

Check shader compatibility, render pipeline mapping, material instance generation, texture dependencies, unsupported glTF extensions, shader variant inclusion, and platform stripping.

### Textures look washed out or too dark

Check sRGB/linear color space, normal map import type, metallic/roughness packing, compression format, color management, lighting, tone mapping, and material mapping.

### Normal maps look broken

Check normal map import setting, tangent generation, green channel convention, mesh tangents, mirrored UVs, and compression format.

### Animation does not play

Check clip import, animation controller/state machine, rig compatibility, skeleton binding, clip loop setting, runtime initialization, and event/state trigger.

### Runtime import works in editor but fails in build

Check build inclusion of importer dependencies, shader variants, file permissions, platform file APIs, bundle paths, Addressables/catalog setup, cooked content rules, and runtime plugin availability.

### Asset loads but dependencies are missing

Check catalog dependency graph, bundle group assignments, indirect material/texture references, shader variants, localization tables, audio banks, and optional fallback behavior.

### Memory spikes during load

Check texture size/compression, read/write mesh flags, duplicate embedded textures, uncompressed audio, synchronous load, bundle duplication, pooling policy, and release handles.

### Multiplayer clients see different visuals

Check content version negotiation, asset ID mapping, cosmetic entitlement, remote content hash, platform-specific bundle differences, and fallback policy.

### Card text or icon layout breaks

Check localization expansion, font fallback, layout constraints, card zoom view, text scale settings, icon atlas resolution, and safe area.

## Output response templates

### Asset integration plan response

When the user asks for an integration plan, produce:

1. Scope summary.
2. Assumptions.
3. Asset inventory.
4. Proposed folder paths.
5. Import profiles.
6. Engine-specific steps.
7. Runtime catalog requirements.
8. Runtime generation/spawn flow.
9. Validation gates.
10. Risks and unresolved questions.

### Asset integration report response

When assets have been integrated or inspected, produce:

1. Processed assets.
2. Imported/generated outputs.
3. Registry entries.
4. Dependency graph summary.
5. Runtime load/spawn status.
6. Validation pass/warning/fail table.
7. Manual checks still needed.
8. Recommended next actions.

### Troubleshooting response

When the user reports a broken asset, produce:

1. Symptom summary.
2. Most likely causes ranked by probability.
3. Targeted checks.
4. Safe fixes.
5. Tests to confirm resolution.
6. Prevention rule to add to the import profile.

## Required final answer style when using this skill

Be direct and operational. Prefer tables, checklists, and explicit file paths. Do not provide vague advice like “import the asset into the engine” without specifying what must be validated, generated, registered, and tested.

If creating files, create Markdown, TXT, JSON, YAML, CSV, or engine-native text/config formats as appropriate. Do not create `.docx` unless the user explicitly asks for it.

## Minimal acceptance checklist

An asset integration task is not complete until all applicable items are true:

- Source files are inventoried.
- Asset IDs are assigned.
- Source files validate.
- Import profiles are defined or selected.
- Engine-native outputs exist.
- Materials/textures/animations/collisions are correct.
- Runtime catalog entries exist.
- Dependencies are mapped.
- Runtime load path is defined.
- Runtime spawn/generation recipe is defined.
- Platform settings are considered.
- Accessibility/readability is considered for UI/card assets.
- Multiplayer/content-version requirements are considered if applicable.
- Validation report is produced.

## Reference baseline for agents

When reasoning about standards or engine behavior, prefer official documentation and project-local documentation over memory. Key external baselines to consult when needed:

- Google Antigravity skill documentation for skill folder and `SKILL.md` formatting.
- Khronos glTF 2.0 specification for `.gltf` and `.glb` structure, validation, PBR materials, extensions, skins, and animations.
- Khronos glTF Validator for validating `.gltf` and `.glb` files.
- Unity documentation for asset import settings, Unity glTFast, Addressables, AssetBundles, import pipeline behavior, texture/audio/model settings, and shader variant inclusion.
- Unreal Engine documentation for Interchange import pipelines, glTF import, Asset Manager, Primary Assets, cooking/chunking, Blueprints, Materials, Niagara, and runtime loading.
- Godot documentation for importing 3D scenes, glTF/GLB handling, GLTFState, PackedScenes, Resources, import presets, materials, and runtime scene instantiation.
- Project-local engine documentation, because project conventions override generic rules.
