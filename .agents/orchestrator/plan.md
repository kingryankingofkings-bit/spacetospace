# Project Plan: noble-pasteur Audit & Refactor

## Architecture
The `noble-pasteur` project is a multiplayer browser-based 3D game.
- **Frontend**: React, Vite, React Three Fiber (R3F), Drei, Zustand, `@react-three/cannon`.
- **Backend**: Node.js, Express, Colyseus.js for multiplayer room synchronization, PostgreSQL for database storage.
- **Goal**: Perform comprehensive engine, security, rendering, and performance audit and refactor, strictly utilizing the existing tech stack (R3F, Node, Postgres). No new heavyweight dependencies (Next.js, Prisma, etc.) may be introduced.

## Milestones & Domains Coverage

| # | Milestone Name | Covered Domains | Dependencies | Status |
|---|---|---|---|---|
| M1 | Stack & Upgrade Audit | `stack-selection-advisor`, `engine-version-upgrade-planner` | None | PLANNED |
| M2 | Security Audit & Hardening | `security-audit-reviewer` | None | PLANNED |
| M3 | Engine Architecture & Rendering Review | `custom-engine-runtime-architect`, `web-native-3d-rendering-reviewer` | None | PLANNED |
| M4 | Performance & Graphics Optimization | `performance-audit-optimizer`, `console-pc-graphics-settings`, `open-world-streaming-world-partition` | M3 | PLANNED |
| M5 | Frontend State & UI Review | `frontend-state-ui-reviewer` | M3 | PLANNED |
| M6 | Test Suite Buildout & Verification | `test-suite-builder`, `task-breakdown-and-agent-handoff` | M1, M2, M4, M5 | PLANNED |

---

## Milestone Details & Acceptance Criteria

### Milestone 1: Stack & Upgrade Audit
- **Objective**: Audit dependencies in `package.json` for frontend and backend. Ensure the stack complies with constraints (strictly React Three Fiber, Node, Postgres; no Next.js/Prisma). Provide an upgrade plan for package versions (e.g. React 19, R3F 9, etc.).
- **Deliverable**: `reports/stack_upgrade_audit.md`.

### Milestone 2: Security Audit & Hardening
- **Objective**: Audit user authentication, password hashing (`bcrypt`), JWT verification, CORS settings, database query parameters to prevent SQL injection, and websocket message handling. Implement safe mitigations without adding third-party frameworks.
- **Deliverable**: `reports/security_audit_report.md` and related code improvements.

### Milestone 3: Engine Architecture & Rendering Review
- **Objective**: Inspect the R3F `<Canvas>` setup, shaders, custom mesh materials, Environment/lighting, shadows, physics (`@react-three/cannon`), and modular asset prefab loading system in `WorldRenderer.tsx`.
- **Deliverable**: `reports/engine_rendering_review.md` and layout/interface guidelines.

### Milestone 4: Performance & Graphics Optimization
- **Objective**: Implement performance optimizations including instancing/batching of modular props (floors, walls), culling distant objects (world partitioning/streaming), pooling VFX meshes, optimizing R3F `useFrame` hook to prevent garbage collection and state updates, and adding PC/Console-style graphics settings (e.g., toggle postprocessing vignette/bloom, adjust shadow quality).
- **Deliverable**: Code changes in `frontend/src` and a performance report.

### Milestone 5: Frontend State & UI Review
- **Objective**: Decouple 2D HUD overlays (health, dialogue, boss health) from R3F frame updates. Refactor Zustand store logic to avoid triggering unneeded re-renders on the canvas. Ensure a consistent 60 FPS target is met.
- **Deliverable**: Code improvements and UI state review documentation.

### Milestone 6: Test Suite Buildout & Verification
- **Objective**: Build a framework-free test runner or automated script that runs backend unit/integration tests and verifies frontend compilation. Ensure the game backend starts successfully and frontend compiles. Document all handoffs.
- **Deliverable**: Test runner scripts and `TEST_READY.md`.
