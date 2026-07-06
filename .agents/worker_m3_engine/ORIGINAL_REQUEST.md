## 2026-07-05T20:22:19Z
You are the Frontend Engine & Performance Implementer. Your working directory is C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m3_engine.
Please review the engine and rendering findings in C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\explorer_m3_engine\analysis.md and C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\explorer_m3_engine\handoff.md. Also review C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\explorer_m1_stack\handoff.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Cap device pixel ratio (dpr) on <Canvas> to at most 2 in frontend/src/components/WorldRenderer.tsx.
2. Fix the physics position desync bug for remote players and NPCs (ensure their positions are updated using @react-three/cannon physics api, e.g. api.position.copy(targetPos) or api.position.set, instead of direct mesh ref lerping which leaves the colliders behind).
3. Fix the material color tint leak bug by cloning the material before modifying its color property during GLTF tree traversal.
4. Optimize camera updates in CameraRig (useFrame) by reusing vector variables (offset, desiredPos, etc.) using useRef or preallocated variables instead of allocating new Vector3 instances per frame.
5. Solve the CDN preset environment map failure offline (add solid background or fallback lights so that if the dawn preset fails to resolve offline, the scene doesn't go blank/black).
6. Implement PC/Console graphics settings in Zustand/React (toggle bloom, vignette, adjust shadow quality, cap resolution scale) and decouple 2D overlays (HUD, dialogue) from rendering canvas updates.
7. Optimize repeated modular props (floors, walls) in AdvancedArena using instanced mesh batching or distance-based culling (world partitioning/streaming).
8. Verify that the frontend compiles successfully (run "npm run build" in frontend directory). Note: handle the EPERM Windows permission clean-build lock issue by adding a prebuild clean step or using a clean script.
9. Write a handoff report to C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m3_engine\handoff.md and notify parent (8ba1cb12-37cc-4533-a6c7-5a00b1102e75).
