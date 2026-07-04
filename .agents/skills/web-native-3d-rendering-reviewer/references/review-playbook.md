# Web-Native 3D Rendering Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/web-native-3d-rendering-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find correctness, performance, memory, browser-compatibility, and rendering defects in WebGPU/WebGL/Babylon.js/Three.js code and apply safe corrections for web-native 3D games.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify whether the project uses Babylon.js, Three.js, raw WebGL, WebGPU, react-three-fiber, react-babylonjs, or a custom wrapper.
2. Review render-loop ownership: requestAnimationFrame, engine.runRenderLoop, React effects, fixed-step simulation, pause/resume, tab visibility, and cleanup.
3. Check canvas and GPU lifecycle: renderer/engine creation, resize handling, device loss, context loss, disposal of textures, buffers, materials, geometries, framebuffers, pipelines, and observers.
4. Review Babylon ArcRotateCamera or Three.js camera controls for target drift, input detachment, pointer capture, collision behavior, zoom limits, and accessibility of controls.
5. Check shader pipelines for compile errors, WGSL/GLSL mismatches, uniform/storage buffer layout issues, precision problems, feature detection, fallback paths, and async pipeline creation.
6. Inspect draw-call pressure, instancing opportunities, material churn, texture format/size, mipmaps, LODs, culling, batching, post-processing cost, shadow settings, and per-frame allocations.
7. Review React integration for multiple engines/renderers, duplicate canvases, stale refs, effect dependency mistakes, and unmount leaks.

## Correction sequence

1. Patch lifecycle bugs by creating one renderer/engine per canvas owner and disposing it deterministically on unmount or scene teardown.
2. Add WebGPU/WebGL capability detection and graceful fallback when required by project policy.
3. Move expensive resource creation out of per-frame paths and reuse materials, buffers, geometries, pipelines, and temporary vectors.
4. Fix resize and device-pixel-ratio handling without causing continuous reallocations.
5. Correct camera limits, targets, input handlers, and cleanup to match gameplay intent.
6. Add regression checks for context loss, unmount/remount, resize, and first-frame render where feasible.
7. Document any browser-specific limitation rather than pretending all GPUs or browsers behave identically.

## Evidence standards

- A finding needs a file path, symbol or line context, observed code behavior, expected behavior, and impact.
- A fix needs a direct mapping to a finding and a verification step.
- A security finding needs a trust boundary and affected asset or capability.
- A performance finding needs a measurement, profiler trace, benchmark, or static complexity proof.
- A compatibility finding needs an old/new contract comparison.

## Escalation rules

Escalate instead of patching when the fix requires product policy, irreversible data changes, public API breakage, secret rotation, production deployment action, legal/licensing judgment, or major architecture migration.

## Source references

- **Google Engineering Practices - Code Review:** https://google.github.io/eng-practices/review/
- **Google Engineering Practices - Standard of Code Review:** https://google.github.io/eng-practices/review/reviewer/standard.html
- **NIST SP 800-218 Secure Software Development Framework:** https://csrc.nist.gov/pubs/sp/800/218/final
- **OWASP Top Ten Web Application Security Risks:** https://owasp.org/www-project-top-ten/
- **Agent Skills Specification:** https://agentskills.io/specification
- **Google Antigravity Skills Documentation:** https://antigravity.google/docs/skills
- **MDN WebGPU API:** https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API
- **W3C WebGPU Specification:** https://www.w3.org/TR/webgpu/
- **Three.js WebGPURenderer:** https://threejs.org/docs/pages/WebGPURenderer.html
- **Babylon.js Cameras Documentation:** https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction
- **Babylon.js ArcRotateCamera Source:** https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/core/src/Cameras/arcRotateCamera.ts
