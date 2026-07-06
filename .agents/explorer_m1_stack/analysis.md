# Stack & Upgrade Audit Report (Milestone 1)

## Executive Summary
This report presents a comprehensive dependency audit of the `noble-pasteur` project for both frontend and backend workspaces. The investigation was conducted in read-only mode to assess package.json dependencies, lockfile resolutions, version drift, deprecations, and stack compatibility. 

We verified that the codebase uses a lightweight, highly-performant tech stack:
* **Frontend**: React 19, Vite 8 (powered by Rolldown), TypeScript 6, React Three Fiber (R3F) v9, Zustand v5, and Colyseus.js.
* **Backend**: Express v5, pg (PostgreSQL), redis (caching & pub/sub), node-pg-migrate, and pm2.
* **No Heavyweight Dependencies**: We confirmed that no heavyweight frameworks (such as Next.js, NestJS) or ORMs (such as Prisma, TypeORM) are present in any of the workspaces. Database access is handled via raw SQL pools and direct Redis caching.

---

## 1. Workspace Dependency Inventory

### 1.1 Backend (`backend/package.json`)
* **Node.js Environment**: Compatible with Node v22.14.0 (LTS)
* **Production Dependencies**:
  | Dependency | Declared Version | Resolved Version | Description / Role |
  |---|---|---|---|
  | `@google-cloud/agones-sdk` | `^1.59.0` | `1.59.0` | Agones game server orchestration SDK |
  | `bcrypt` | `^6.0.0` | `6.0.0` | Password hashing library |
  | `cors` | `^2.8.6` | `2.8.6` | Cross-Origin Resource Sharing middleware |
  | `express` | `^5.2.1` | `5.2.1` | Web framework (Express v5) |
  | `jsonwebtoken` | `^9.0.3` | `9.0.3` | JSON Web Token auth utilities |
  | `node-pg-migrate` | `^8.0.4` | `8.0.4` | PostgreSQL migration runner |
  | `pg` | `^8.22.0` | `8.22.0` | PostgreSQL client pool |
  | `pm2` | `^7.0.3` | `7.0.3` | Production process manager |
  | `redis` | `^6.1.0` | `6.1.0` | Redis caching, state, and Pub/Sub |
  | `ws` | `^8.21.0` | `8.21.0` | WebSocket server library |

### 1.2 Backend Director (`backend/director/package.json`)
* **Production Dependencies**:
  | Dependency | Declared Version | Resolved Version | Description / Role |
  |---|---|---|---|
  | `@kubernetes/client-node` | `^1.4.0` | `1.4.0` | Kubernetes API client for Node.js |
  | `cors` | `^2.8.6` | `2.8.6` | CORS middleware |
  | `express` | `^5.2.1` | `5.2.1` | Web framework for matchmaking |

### 1.3 Frontend (`frontend/package.json`)
* **Production Dependencies**:
  | Dependency | Declared Version | Resolved Version | Description / Role |
  |---|---|---|---|
  | `@react-three/cannon` | `^6.6.0` | `6.6.0` | Cannon-es physics bindings for R3F |
  | `@react-three/drei` | `^10.7.7` | `10.7.7` | Useful helpers for React Three Fiber |
  | `@react-three/fiber` | `^9.6.1` | `9.6.1` | Three.js renderer wrapper for React |
  | `@react-three/postprocessing` | `^3.0.4` | `3.0.4` | Post-processing effects bindings |
  | `colyseus.js` | `^0.16.22` | `0.16.22` | Client-side real-time multiplayer SDK |
  | `framer-motion` | `^12.42.2` | `12.42.2` | Animation library |
  | `react` | `^19.2.7` | `19.2.7` | UI Framework (React 19) |
  | `react-dom` | `^19.2.7` | `19.2.7` | DOM rendering library |
  | `react-router-dom` | `^7.18.1` | `7.18.1` | Client-side routing (React Router v7) |
  | `three` | `^0.185.1` | `0.185.1` | Core WebGL 3D library (Three.js) |
  | `zustand` | `^5.0.14` | `5.0.14` | Client state management (Zustand v5) |

* **Development Dependencies**:
  | Dependency | Declared Version | Resolved Version | Description / Role |
  |---|---|---|---|
  | `@types/node` | `^24.13.2` | `24.13.2` | TypeScript types for Node |
  | `@types/react` | `^19.2.17` | `19.2.17` | Types for React |
  | `@types/react-dom` | `^19.2.3` | `19.2.3` | Types for React DOM |
  | `@types/three` | `^0.185.0` | `0.185.0` | Types for Three.js |
  | `@vitejs/plugin-react` | `^6.0.3` | `6.0.3` | React integration for Vite 8 / Rolldown |
  | `oxlint` | `^1.71.0` | `1.72.0` | Ultra-fast JS/TS linter |
  | `typescript` | `~6.0.2` | `6.0.3` | TypeScript compiler (TS v6.0) |
  | `vite` | `^8.1.1` | `8.1.3` | Build tool and bundler (Vite 8) |

---

## 2. Heavyweight Framework & ORM Validation
We explicitly audited the codebase for the presence of heavy-weight dependencies:
1. **Next.js**: Absent. The application uses a decoupled Single Page Application (SPA) built with Vite 8 + React Router v7 on the frontend, and a pure Express v5 JSON API on the backend.
2. **Prisma / TypeORM / Sequelize**: Absent. The data persistence layer (`backend/db.js` and `backend/dbConnection.js`) is constructed using the lightweight `pg` pool module, writing raw SQL queries, combined with direct Redis key-value operations.
3. **Other Heavyweight Libs (e.g. NestJS)**: Absent. The routing and middleware architecture relies on lightweight Express.

---

## 3. Version Compatibility & Critical Findings

### 3.1 Physics Engine Compatibility (High Risk)
* **Observation**: The frontend lists `@react-three/cannon@^6.6.0` and `@react-three/fiber@^9.6.1` under React 19.
* **Problem**: `@react-three/cannon@6.6.0` was designed for React 18 / Fiber 8 and utilizes `cannon-es`, which is unmaintained. Although npm resolved the dependencies without peer-dependency failure due to relaxed rules (`react: ">=18"`), at runtime `@react-three/cannon` is known to throw exceptions or fail to render body transforms correctly when matched with the internal fiber layout changes of R3F v9 (React 19).
* **Impact**: Potential runtime crashes, missing physics synchronization, and erratic player/projectile hitbox triggers.
* **Upgrade Plan**: Migrate the physics architecture to `@react-three/rapier`, which is compiled to WebAssembly (Rust core), has first-class native support for React 19 and R3F v9, is actively maintained, and runs significantly faster.

### 3.2 Express 5 API Contract Drift (Medium Risk)
* **Observation**: Both backend apps run on Express v5.2.1.
* **Problem**: Express 5 includes minor breaking changes regarding routing and response methods. Methods like `res.send(200)` and `res.json(200, {obj})` are deprecated/removed, and wildcards in route parameters (e.g. using `*` or `?` as path wildcards) are treated as literal characters.
* **Audit Result**: A search of the code showed that routes (e.g., `authManager.js` and `/matchmake` in director) use the correct v5-compliant syntax `res.status(code).json(data)` or `res.json(data)`. However, the catch-all route `app.get(/.*/, ...)` in `backend/index.js` uses a RegExp literal, which is correct and compatible. No legacy wildcard paths were found.

### 3.3 Vite 8 & Rolldown Windows Build Failure (Operational Risk)
* **Observation**: Vite v8 uses `rolldown` as the default bundler. During local verification of the frontend, running `npm run build` failed on Windows with a recursive directory clean error: `ENOTEMPTY: directory not empty, rmdir '...dist\models\packs...'`.
* **Problem**: This is a known Windows file-locking issue when a process (such as the agent's IDE indexer or active dev servers) holds open file handles in the `dist` directory, preventing Rolldown's clean plugin (`vite:prepare-out-dir`) from deleting deep structures recursively.
* **Workaround**: Introduce a build step that pre-cleans the `dist` directory via shell-native commands (`cmd /c "rmdir /s /q dist"` or PowerShell equivalents) before calling Vite, or configure Vite/Rolldown to skip directory cleaning during compilation if locks are expected.

### 3.4 Missing Test Frameworks (Quality Gate Risk)
* **Observation**: There are zero automated unit or integration tests in both frontend and backend package definitions (`"test": "echo \"Error: no test specified\" && exit 1"`).
* **Impact**: Upgrades, schema migrations, and feature rollouts cannot be automatically verified, increasing the risk of regression during the Milestone rollout.
* **Recommendation**: Set up `Vitest` for the frontend (to match the Vite 8 ecosystem) and `Jest` or `Vitest` for the backend, and write basic integration tests for the auth API and player state persistence.

---

## 4. Proposed Modernization Plan & Upgrade Steps

### Step 1: Resolve Physics Engine Drift (Transition to Rapier)
1. In `frontend/package.json`, replace:
   ```json
   "@react-three/cannon": "^6.6.0"
   ```
   with:
   ```json
   "@react-three/rapier": "^3.0.0"
   ```
2. Refactor physics wrapper in `WorldRenderer.tsx` from:
   ```typescript
   import { Physics, useBox, useSphere } from '@react-three/cannon';
   ```
   to:
   ```typescript
   import { Physics, RigidBody } from '@react-three/rapier';
   ```
   Wrap dynamic meshes in `<RigidBody type="dynamic">` and static triggers/colliders in `<RigidBody type="fixed" sensor>`.

### Step 2: Implement Windows-Safe Build Clean Step
Update `frontend/package.json` scripts:
```json
"scripts": {
  "prebuild": "cmd /c \"if exist dist rmdir /s /q dist\" || true",
  "build": "tsc -b && vite build"
}
```
This guarantees the directory is forcefully cleaned before Vite starts building, bypassing Rolldown clean plugin lock failures.

### Step 3: Establish Test Coverage
1. **Frontend devDependencies**: Install `vitest` and `@testing-library/react`.
2. **Backend devDependencies**: Install `supertest` and `jest` or `vitest`.
3. Add basic integration tests to verify API status routes and client component render states.
