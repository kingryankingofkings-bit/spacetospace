---
name: web-native-3d-rendering-reviewer
description: "Reviews and fixes browser-native 3D rendering code using WebGPU, WebGL, Babylon.js, Three.js, canvas, shaders, render loops, cameras, and GPU resources. Use for React-based 3D games."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "webgpu, webgl, babylonjs, threejs, 3d"
---

# Web-Native 3D Rendering Reviewer

## Mission

Find correctness, performance, memory, browser-compatibility, and rendering defects in WebGPU/WebGL/Babylon.js/Three.js code and apply safe corrections for web-native 3D games.

## Use this skill when

- WebGPU
- WebGL
- Babylon.js
- Three.js
- ArcRotateCamera
- canvas
- shader
- render loop
- React 3D

## Review focus

- render loop
- GPU resources
- shader compilation
- camera controls
- canvas lifecycle
- browser compatibility
- asset loading

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Identify whether the project uses Babylon.js, Three.js, raw WebGL, WebGPU, react-three-fiber, react-babylonjs, or a custom wrapper.
2. Review render-loop ownership: requestAnimationFrame, engine.runRenderLoop, React effects, fixed-step simulation, pause/resume, tab visibility, and cleanup.
3. Check canvas and GPU lifecycle: renderer/engine creation, resize handling, device loss, context loss, disposal of textures, buffers, materials, geometries, framebuffers, pipelines, and observers.
4. Review Babylon ArcRotateCamera or Three.js camera controls for target drift, input detachment, pointer capture, collision behavior, zoom limits, and accessibility of controls.
5. Check shader pipelines for compile errors, WGSL/GLSL mismatches, uniform/storage buffer layout issues, precision problems, feature detection, fallback paths, and async pipeline creation.
6. Inspect draw-call pressure, instancing opportunities, material churn, texture format/size, mipmaps, LODs, culling, batching, post-processing cost, shadow settings, and per-frame allocations.
7. Review React integration for multiple engines/renderers, duplicate canvases, stale refs, effect dependency mistakes, and unmount leaks.

## Correction procedure

1. Patch lifecycle bugs by creating one renderer/engine per canvas owner and disposing it deterministically on unmount or scene teardown.
2. Add WebGPU/WebGL capability detection and graceful fallback when required by project policy.
3. Move expensive resource creation out of per-frame paths and reuse materials, buffers, geometries, pipelines, and temporary vectors.
4. Fix resize and device-pixel-ratio handling without causing continuous reallocations.
5. Correct camera limits, targets, input handlers, and cleanup to match gameplay intent.
6. Add regression checks for context loss, unmount/remount, resize, and first-frame render where feasible.
7. Document any browser-specific limitation rather than pretending all GPUs or browsers behave identically.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not replace the rendering engine or rewrite the scene graph unless the user explicitly requests an architecture migration.
- Do not leak GPU handles by relying on React garbage collection alone.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run available browser tests or manually document render, resize, unmount/remount, and context/device-loss verification limitations.
7. Use frame timing, draw-call counts, memory snapshots, or browser GPU diagnostics if available; otherwise label performance findings as static.

## Required output contract

- Rendering defect report with scene path, render-loop path, GPU resource lifecycle, browser impact, patch, and verification.
- Patch plan before edits when the fix is non-trivial or touches multiple files.
- Implemented patch summary that maps each change back to a finding.
- Verification log with exact commands or static review steps and results.
- Residual risk list and rollback notes when appropriate.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: This React Babylon scene uses ArcRotateCamera and leaks memory after route changes; review and fix it.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [MDN WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
- [W3C WebGPU Specification](https://www.w3.org/TR/webgpu/)
- [Three.js WebGPURenderer](https://threejs.org/docs/pages/WebGPURenderer.html)
- [Babylon.js Cameras Documentation](https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction)
- [Babylon.js ArcRotateCamera Source](https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/core/src/Cameras/arcRotateCamera.ts)
