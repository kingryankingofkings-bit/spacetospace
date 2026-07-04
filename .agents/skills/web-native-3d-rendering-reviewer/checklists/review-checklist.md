# Web-Native 3D Rendering Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify whether the project uses Babylon.js, Three.js, raw WebGL, WebGPU, react-three-fiber, react-babylonjs, or a custom wrapper.
- [ ] Review render-loop ownership: requestAnimationFrame, engine.runRenderLoop, React effects, fixed-step simulation, pause/resume, tab visibility, and cleanup.
- [ ] Check canvas and GPU lifecycle: renderer/engine creation, resize handling, device loss, context loss, disposal of textures, buffers, materials, geometries, framebuffers, pipelines, and observers.
- [ ] Review Babylon ArcRotateCamera or Three.js camera controls for target drift, input detachment, pointer capture, collision behavior, zoom limits, and accessibility of controls.
- [ ] Check shader pipelines for compile errors, WGSL/GLSL mismatches, uniform/storage buffer layout issues, precision problems, feature detection, fallback paths, and async pipeline creation.
- [ ] Inspect draw-call pressure, instancing opportunities, material churn, texture format/size, mipmaps, LODs, culling, batching, post-processing cost, shadow settings, and per-frame allocations.
- [ ] Review React integration for multiple engines/renderers, duplicate canvases, stale refs, effect dependency mistakes, and unmount leaks.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch lifecycle bugs by creating one renderer/engine per canvas owner and disposing it deterministically on unmount or scene teardown.
- [ ] Add WebGPU/WebGL capability detection and graceful fallback when required by project policy.
- [ ] Move expensive resource creation out of per-frame paths and reuse materials, buffers, geometries, pipelines, and temporary vectors.
- [ ] Fix resize and device-pixel-ratio handling without causing continuous reallocations.
- [ ] Correct camera limits, targets, input handlers, and cleanup to match gameplay intent.
- [ ] Add regression checks for context loss, unmount/remount, resize, and first-frame render where feasible.
- [ ] Document any browser-specific limitation rather than pretending all GPUs or browsers behave identically.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run available browser tests or manually document render, resize, unmount/remount, and context/device-loss verification limitations.
- [ ] Use frame timing, draw-call counts, memory snapshots, or browser GPU diagnostics if available; otherwise label performance findings as static.
