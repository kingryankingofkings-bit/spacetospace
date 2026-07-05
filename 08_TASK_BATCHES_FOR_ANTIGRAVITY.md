# Antigravity 2.0 Task Batches

## Batch A — Import and catalog
1. Import every ZIP.
2. Extract manifests.
3. Generate source asset registry.
4. Create missing metadata from filenames if no manifest exists.
5. Report duplicate filenames.

## Batch B — Static prefab conversion
1. Convert modular/environment/prop GLBs into static prefabs.
2. Add colliders.
3. Add tags and layer assignments.
4. Generate LODs for repeated static props.

## Batch C — Interactables and pickups
1. Convert quest objects to interactables.
2. Convert item pickups to trigger prefabs.
3. Add rarity visuals and audio cues.
4. Add objective state bindings.

## Batch D — Characters, monsters, and bosses
1. Classify biped/quadruped/hovering/static entity.
2. Generate or assign rigs.
3. Create placeholder animation clips.
4. Build animation state machines.
5. Add health, hitboxes, AI, and loot components.

## Batch E — VFX, UI, and audio
1. Convert VFX GLBs to timed effects.
2. Convert telegraphs to damage-window markers.
3. Convert HUD/worldspace markers to UI prefabs.
4. Import audio cues and route to mixers.

## Batch F — Boss arenas and gameplay scripting
1. Add boss arena triggers.
2. Bind phase mechanics to boss controllers.
3. Add weak point and climb/vault markers.
4. Validate phase transitions.

## Batch G — QA
1. Spawn-test every prefab.
2. Collision-test every interactable.
3. Animation-test every rigged entity.
4. Memory-test repeated props.
5. Produce failure report.
