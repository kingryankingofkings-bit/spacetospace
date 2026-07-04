# Usage Notes

## Three.js

Use `GLTFLoader` to load the `.glb` files. The included `threejs_loader_example.js` shows a minimal pattern.

## Static Meshes

These GLBs contain named mesh parts and materials, but no skeletons or animation clips. Treat them as static meshes until you rig them.

## Part Naming

Part names are intentionally descriptive. Examples:

- `*_weakpoint_*`
- `*_shield_*`
- `*_core_*`
- `*_ring_*`
- `*_spine_crystal_*`
- `*_integration_port_*`

Your game code can search mesh names to apply glow pulses, hide/show phase elements, attach hit sparks, or drive ability telegraphs.

## Boss Phases

Several bosses include phase or mechanic-specific meshes inside the same GLB:

- Ascendant Colossus includes stone phase and lightning phase parts.
- Null Anomaly includes real/fake echo meshes.
- Data-Forged Evolvarch includes evolution/data-ring parts.
- Astral Sovereign includes orbiting debris and shield rings.

You can hide/show these objects at runtime by traversing the loaded scene.

## Collision

`colliders.json` contains coarse gameplay collider suggestions. These are deliberately simpler than the visible geometry.

## Performance

The assets are low-poly and browser-friendly, but some boss files include optional visual rings/debris/particles. For large crowds, use instancing or LODs.
