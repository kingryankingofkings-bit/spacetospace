# Collision, LOD, and Navigation Spec

## Collision

Use `colliders.json` where available.

Recommended profiles:
- Small pickups: sphere trigger
- Weapons/items: sphere trigger + optional display-only mesh collider
- Walls/floors/modules: box collider
- Trees/columns/posts: cylinder collider
- Characters/monsters: capsule collider
- Bosses: compound primitive colliders
- VFX/telegraphs: trigger volumes only
- Audio cues: no collider

## LOD

Generate LODs for:
- biome props
- town structures
- modular environment pieces
- skyship/city/cave props
- repeated static architecture

Suggested LOD levels:
- LOD0: source GLB
- LOD1: 50 percent triangle reduction
- LOD2: 20 percent triangle reduction or billboard/proxy
- Collider proxy: simplified primitive/compound

## Navigation

- Floor and platform modules: mark as walkable.
- Short walls/barricades: mark as vaultable if tagged.
- Large obstacles: mark as nav obstacles.
- Doors/gates: dynamic nav blockers.
- Boss arenas: nav mesh split into phase zones.
- VFX telegraphs: never block navigation unless scripted as active hazard.
