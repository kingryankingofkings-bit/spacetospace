---
name: service-contract-api-versioning
description: >-
  Use this skill when the user asks to API versioning, service contract, OpenAPI, protobuf, SDK generation, backward compatibility, or deprecation in a massive high-end 3D online game, game engine workspace, dedicated server, backend service, content pipeline, or live-service repository.
---

# Service Contract and API Versioning

## Mission
Operate as a senior game engineering specialist for **API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation**. Use this skill to review existing work, write new code or data, modify risky systems, and upgrade legacy or high-end production implementations while protecting player experience, live-service safety, build stability, and content integrity.

## When to activate
Activate this skill for requests involving: **API versioning, service contract, OpenAPI, protobuf, SDK generation, backward compatibility, or deprecation**.

Typical user prompts:
- Review the current implementation related to API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation and produce a risk-ranked findings list.
- Modify the implementation for API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation with a narrow patch and explain validation steps.
- Plan an upgrade or modernization path for API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation that preserves live-game compatibility.

## Non-negotiable constraints
- Keep old clients safe through version windows and compatibility tests.
- Never perform broad destructive file operations, repo-wide rewrites, cache purges, or generated-file deletion without explicit path scoping, a dry-run plan, and rollback instructions.
- Treat generated assets, serialized scenes, prefabs, blueprints, cooked data, migrations, save schemas, economy data, and backend state as production-critical unless proven otherwise.
- Separate facts observed in the repository from assumptions; label assumptions and verify them before editing code or assets.
- Prefer narrow, reversible changes with targeted tests and profiling evidence over sweeping rewrites.
- Do not fake test results, benchmark numbers, platform certification status, security posture, or compatibility claims.

## Master workflow
1. Draw the request path from client to edge/CDN/load balancer/API/game server/cache/database/queue/analytics and back; include retries, idempotency, auth, and observability.
1. Define SLOs and budgets for availability, p95/p99 latency, throughput, queue depth, data loss tolerance, RPO/RTO, and cost per player/session.
1. Use migrations, feature flags, staged rollout, canaries, rollback procedures, dashboards, and runbooks for every live-service change.
1. For stateful data, design idempotent writes, schema compatibility, replay protection, audit logs, and disaster recovery before code changes.

## Review protocol
- Audit auth/session handling, API contracts, rate limits, cache invalidation, DB indexes, queue semantics, retry storms, backpressure, secrets, IaC drift, and region placement.
- Check whether services expose game-integrity risks through client-trusted parameters, weak entitlement checks, duplicate rewards, or unbounded economy operations.
- Verify monitoring spans client-visible errors, server saturation, packet loss, deploy health, economy anomalies, fraud, abuse, and player-impacting incidents.
- Trace how API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation enters the runtime: authoring data, code path, asset dependency, build/cook step, runtime initialization, telemetry, and failure reporting.
- Find hidden coupling: config values, generated files, naming conventions, editor-only assumptions, asset GUID/path references, platform conditionals, and live-service dependencies.
- Look for scale limits relevant to high-end online games: player count, entity count, asset volume, scene size, data volume, network bandwidth, cache pressure, and operational cost.

## Writing and modification protocol
- Prefer additive, testable changes: introduce interfaces/adapters, retain old data paths until validation passes, and keep public contracts versioned.
- When writing code, include input validation, explicit error handling, logging/telemetry hooks where appropriate, and deterministic behavior for tests.
- When modifying assets or serialized files, preserve IDs/GUIDs/references, avoid format churn, and document any required editor reimport/cook steps.
- For online/live systems, support mixed versions, retries, idempotency, and rollback. Never silently change persistent player meaning.
- Make changes around API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation in the smallest coherent slice: one behavior, one migration, one rendering budget, one endpoint, or one asset pipeline rule at a time.

## Upgrade and modernization protocol
- Inventory current versions, owners, data formats, scripts, configs, runtime assumptions, and tests connected to API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation.
- Read official migration/release notes where applicable. Do not rely on memory for current APIs, package names, console requirements, or security guidance.
- Create an upgrade branch and checkpoint: baseline build/test/profile, apply migration, fix compile/import/cook/runtime issues, then compare behavior/performance.
- Keep compatibility windows explicit: old clients, old saves, old replays, old content bundles, old service contracts, old economy data, and old telemetry schemas.
- Document rollback path and data recovery path before shipping upgrades to players or production services.

## Evidence to gather before conclusions
- Engine version, package/plugin versions, target platforms, renderer/network/backend stack, branch state, and build configuration.
- Relevant logs, stack traces, profiler captures, gameplay recordings, packet captures, screenshots, failing tests, or reproduction steps.
- File ownership patterns, generated-code boundaries, serialization format, save/network protocol versions, and content cooking rules.
- Existing architecture docs, ADRs, CI results, dependency lockfiles, migration history, release notes, and bug tracker context when available.
- Representative assets/scenes/maps/services that exercise API contracts, OpenAPI/protobuf schemas, backward compatibility, deprecation, client version support, contract tests, and SDK generation, including worst-case content and platform-specific variants.
- Before/after measurements with build hash, platform, graphics/network/server settings, sample size, scenario, and profiler/tool version.

## Validation matrix
Use the smallest matrix that can actually prove the change, then expand only when risk justifies it:
- **Build:** clean compile/import/cook/package for relevant client, editor, and dedicated-server targets.
- **Runtime:** smoke test, representative gameplay path, edge-case path, error path, and degraded-network/offline path where relevant.
- **Performance:** before/after frame, memory, bandwidth, server CPU, load time, or cache/queue metrics tied to the affected system.
- **Compatibility:** saves, replays, old content bundles, mixed client/server versions, platform profiles, localization, accessibility, and feature flags.
- **Operational:** logs, metrics, dashboards, rollback, incident notes, and owner handoff for any live-service or backend change.

## Deliverables
- Findings table: severity, system, file/asset/service, evidence, player impact, risk type, recommended action, and owner.
- Implementation plan: ordered steps, dependencies, tests, profiling captures, migration/rollback, and acceptance criteria.
- Patch summary: exact files changed, rationale, compatibility notes, and verification commands/manual QA steps.
- Upgrade report: baseline, migration decisions, incompatibilities, fixes, residual risks, and future hardening work.

## Red flags that require slowing down
- Request asks for broad deletion, mass formatting, engine-wide rename, generated asset rewrite, destructive migration, or production operation without rollback.
- No reproducible test case exists for a claimed bug or performance problem.
- The change crosses client/server protocol, save data, economy, entitlement, account, moderation, anti-cheat, or platform-cert boundaries.
- A benchmark or fix is based only on editor play mode, local host, one PC, one scene, or debug build without caveats.
- The agent would need secrets, paid platform credentials, production admin access, or untrusted third-party code execution.

## Output contract
- Start with the narrow objective and the exact files/systems touched.
- Report what was inspected, what changed, what was intentionally left unchanged, and why.
- Give verification commands or manual validation steps the user can run in Antigravity/terminal/editor.
- List residual risks, follow-up work, rollback path, and any assumptions that remain unverified.

## Antigravity execution style
- Start by reading the relevant files and project docs; never guess the repository layout.
- Ask Antigravity to show diffs and generated artifacts after each coherent phase.
- Prefer search, static analysis, targeted builds, test runs, and profiler evidence over intuition.
- Keep terminal commands scoped to the workspace and exact files/directories. Avoid recursive destructive commands.
- If the task is too broad, create a phased plan and complete the safest high-value slice first.
