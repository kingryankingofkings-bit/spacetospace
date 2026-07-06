# Project Context: noble-pasteur Audit & Refactor

## Tech Stack
- **Frontend**: React (v19.2.7), Vite (v8.1.1), `@react-three/fiber` (v9.6.1), `@react-three/drei` (v10.7.7), `@react-three/cannon` (v6.6.0), `@react-three/postprocessing` (v3.0.4), `three` (v0.185.1), `zustand` (v5.0.14).
- **Backend**: Node.js, Express (v5.2.1), Colyseus.js (v0.16.22) / `ws` (v8.21.0), PostgreSQL (`pg` v8.22.0), `node-pg-migrate` (v8.0.4), `bcrypt` (v6.0.0), `jsonwebtoken` (v9.0.3).
- **Database**: PostgreSQL (local dev is using `world.db` SQLite or Postgres, wait! The package.json has `pg` and `node-pg-migrate`, and `world.db` is also present).
- **Asset Pipeline**: Static GLB meshes under `frontend/public/models/`.

## Key Files & Layout
- `frontend/src/components/WorldRenderer.tsx` — Main 3D Canvas, Physics, cameras, player sync, level structure.
- `frontend/src/store/multiplayerStore.ts` — Zustand store for state sharing.
- `backend/index.js` — Main Express and Colyseus game server entry point.
- `backend/combatSystem.js` — Logic for combat, counters, and hit-stun.
- `backend/db.js` and `backend/dbConnection.js` — Database access.
- `backend/npc_data.json` — NPC definitions.

## Key Constraints (Verbatim from Briefing & Requirements)
- **Do not introduce Next.js, Prisma, or other heavyweight dependencies/frameworks.**
- Strictly use the existing tech stack (React Three Fiber, Node, Postgres).
- Naming: Use **"Eon"** instead of Chronos.
- Lore: **"Narexi"** is only a teaser.
- Vocabulary: time-related vocabulary for Epoch faction.
- Performance: Enforce a strict 60 FPS target by minimizing React state updates inside the `useFrame` loop.
- No heavy dynamic shadows; prefer baked lighting, instancing, or tightly bounded directional shadow maps.
