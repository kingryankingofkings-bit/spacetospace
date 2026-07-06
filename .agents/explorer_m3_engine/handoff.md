# Handoff Report: Engine & Rendering Investigation

## 1. Observation

- **React Three Fiber Canvas**:
  In `frontend/src/components/WorldRenderer.tsx`, the `<Canvas>` component is declared at line 524 as:
  ```tsx
  <Canvas shadows camera={{ position: [0, 15, 20], fov: 60 }}>
  ```
  No `dpr` attribute is set. An `<EffectComposer>` with `<Bloom>` and `<Vignette>` is configured at lines 552–555. No event listener for context loss (`webglcontextlost`) is present.

- **Shaders and Weather System**:
  No custom shaders are defined in the project. The weather system at `frontend/src/components/WeatherSystem.tsx` is a code stub (lines 6–22):
  ```tsx
  export const WeatherSystem: React.FC = () => {
    useEffect(() => {
      let timeoutId: number;
      const shiftWeather = () => {
        const nextWeather = WEATHER_STATES[Math.floor(Math.random() * WEATHER_STATES.length)];
        console.log(`Weather shifting to: ${nextWeather}`);
        ...
  ```
  It has no visual elements or particle systems.

- **Environment & CDN dependency**:
  At line 86 of `WorldRenderer.tsx`, lighting is set via Drei's Environment:
  ```tsx
  <Environment preset="dawn" background blur={0.8} />
  ```

- **Material Mutation Bug**:
  In `WorldRenderer.tsx` (lines 53-54 and 61-64), the GLTF scene is cloned, but the shared material is mutated directly during tree traversal:
  ```tsx
  const clone = useMemo(() => scene.clone(), [scene]);
  ...
  if (colorTint) {
    const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.color.set(colorTint);
  }
  ```

- **Camera Rig Allocations and Lerp**:
  In `CameraRig` (lines 205–212), vector allocations occur per-frame:
  ```tsx
  const offset = new THREE.Vector3(0, 8, 15);
  const desiredPos = target.position.clone().add(offset);
  const lookAtPos = target.position.clone();
  const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
  ```
  Lerp is computed using a static scalar `0.1` (lines 207 and 213).

- **Physics & Position Desync Bug**:
  The local player moves via raw coordinates (lines 358–364) without a Cannon physics body.
  Remote players and NPCs register kinematic bodies via `useBox` (lines 417 and 446), but in `useFrame`, their visual positions are updated via direct mesh ref manipulation (lines 425–429 and 454–462) instead of the physics `api.position.set` method:
  ```tsx
  ref.current.position.lerp(targetPos, 10 * delta);
  ```

- **Modular Asset Instantiation**:
  In `AdvancedArena` (lines 115–134), modular floor tiles are instantiated via a nested loop using individual group wrappers and individual `<OptimizedModel>` nodes.

---

## 2. Logic Chain

- **Fill-rate Bottleneck**: Since `dpr` is not capped, high-density displays (Retina, 4K) render the entire scene and the `<EffectComposer>` bloom pass at native hardware resolution, significantly dropping framerates due to fill-rate pressure.
- **Offline Failure**: Because `<Environment preset="dawn" />` downloads `.hdr` assets from a remote CDN at runtime, compiling or executing the frontend in an offline or firewalled environment will cause the environment map to fail to load, blocking the `<Suspense>` boundary and rendering a blank black screen.
- **Shared Material Corruption**: Since `scene.clone()` does a shallow clone in Three.js, geometries and materials are shared across cloned models. Mutating `mat.color` inside `OptimizedModel` directly corrupts the material template in memory, causing all active and future instances of that model type to inherit the last color tint applied (visual color leak bug).
- **GC Stutter**: Creating four `THREE.Vector3` instances inside the `useFrame` hook on every tick generates 240–480 objects/sec (at 60–120 FPS), causing the browser's GC collector to trigger frequently, introducing micro-stutters.
- **Frame-rate dependent lag**: Lerping camera coordinates using a constant `0.1` factor causes camera speed to vary depending on display refresh rate (faster on 144Hz, slower on 60Hz).
- **Combat Collider Drift (Critical)**: Because `@react-three/cannon` coordinates must be updated via the physics API for kinematic bodies, updating `ref.current.position` directly leaves the physical collider at the initial spawn point. This creates a desync where the player's visual model moves, but their hit collision remains at the spawn coordinate.

---

## 3. Caveats

- Verification of local TypeScript compilation (`tsc -b`) completed successfully, proving that no compile-time type errors exist.
- However, the overall `npm run build` failed during the Vite/Rolldown assets bundling phase due to a Windows file-locking permission issue (`EPERM` when clearing the `dist` directory which contains massive copied static model assets).
- Real runtime behavior under packet loss or severe latency was not analyzed.
- GPU profiling was not conducted due to lack of direct browser profiling interface in CODE_ONLY sandbox.

---

## 4. Conclusion

The engine and rendering architecture contains several critical correctness and performance flaws:
1. **Critical Bug**: Visual-physics desync for remote players and NPCs, rendering hit detection completely non-functional when they move from spawn points.
2. **High Bug**: Material tinting bug leaking colors across model instances due to shared template materials.
3. **Performance/GC Stutter**: High garbage collection pressure from vector allocations in the camera update loop.
4. **Offline Vulnerability**: Drei Environmentpreset CDN dependency preventing loading in local-only / offline environments.
5. **Draw Call Pressure**: Modular environment assets lack instanced mesh batching, increasing GPU draw calls.
6. **Build Issue**: Vite clean-build EPERM errors under Windows due to file-locking of massive assets copied from `/public`.

---

## 5. Verification Method

- **Build Check**:
  To verify compilation, run `npx tsc -b` inside `frontend/` directory to ensure type safety.
  `npm run build` may fail on Windows with `EPERM` when attempting to clean and copy the massive `public/models` pack directory structure:
  ```powershell
  cd frontend
  npx tsc -b
  ```
- **Static Review Paths**:
  - Check the physics update logic in `frontend/src/components/WorldRenderer.tsx` lines 425–429 and 454–462.
  - Review material mutation behavior in `frontend/src/components/WorldRenderer.tsx` lines 61–64.
  - Inspect the per-frame allocations in `CameraRig` lines 205–212.
