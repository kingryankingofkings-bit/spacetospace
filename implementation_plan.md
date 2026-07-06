# Procedural Terrain Generation

The environment currently relies on a static, pre-modeled arena (`AdvancedArena`) made of repetitive 3x3 tiles. To upgrade the engine to support dynamic landscape generation based on points, we need to construct a flexible, programmatic terrain system.

## User Review Required
This change will replace the static `.glb` arena with a programmatic 3D terrain grid. This is a foundational shift in how the environment is rendered. Please review the plan below.

## Open Questions
- Do you want to apply a specific texture (like grass, dirt, or a sci-fi grid) to this new flat base, or should it start as a solid, tinted color for now?
- Would you like the terrain to use a subtle noise function to give it slight hills, or should it remain perfectly flat (`Y=0`) initially while we focus on correct character placement?

## Proposed Changes

### `frontend/src/components/ProceduralTerrain.tsx`
#### [NEW] ProceduralTerrain.tsx
Create a new component that generates a massive, subdivided `PlaneGeometry`.
- Generates a horizontal mesh (e.g. 1000x1000 units with high segmentation).
- Uses `@react-three/cannon`'s `usePlane` or `useHeightfield` to provide a solid physics collider that covers the entire map.
- Exposes a terrain state/utility that calculates the exact ground `Y` height at any given `(X, Z)` coordinate, allowing the engine to "understand where people should be placed".

### `frontend/src/components/WorldRenderer.tsx`
#### [MODIFY] WorldRenderer.tsx
- Remove the `AdvancedArena` fallback placeholder.
- Import and render `<ProceduralTerrain />` in its place.
- Update `LocalPlayer` and `RemotePlayer` logic to query the terrain's `Y` height when spawning, ensuring characters don't clip through the floor or float above it.

## Verification Plan
### Manual Verification
- Start the local frontend (`http://localhost:5173`).
- Log in and spawn into the world.
- Verify that a massive, flat programmatic terrain replaces the old arena.
- Walk across the terrain and confirm the character correctly adheres to the ground plane and that physics/movement remains stable.
