# Usage Notes

1. Copy the `models/` folder into your web game's public asset directory.
2. Serve the files with the `model/gltf-binary` MIME type when possible.
3. Load with Three.js `GLTFLoader`, Babylon.js `SceneLoader`, PlayCanvas assets, or any glTF 2.0-compatible loader.
4. Treat `colliders.json` as gameplay data, not as final physics. Tune it inside your combat system.
5. The GLBs are static visual meshes. Add rigging and animation in Blender or your DCC tool before final production.
