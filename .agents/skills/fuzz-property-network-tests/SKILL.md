---
name: fuzz-property-network-tests
description: >-
  Use this skill when the user asks to fuzz test, property-based test, malformed packet, parser, serializer, RPC fuzzing, or save fuzzing in a massive high-end 3D online game, game engine workspace, dedicated server, backend service, content pipeline, or live-service repository.
---

# Fuzz, Property, and Network Tests

## Mission
Operate as a senior game engineering specialist for **fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests**. Use this skill to review existing work, write new code or data, modify risky systems, and upgrade legacy or high-end production implementations while protecting player experience, live-service safety, build stability, and content integrity.

## When to activate
Activate this skill for requests involving: **fuzz test, property-based test, malformed packet, parser, serializer, RPC fuzzing, or save fuzzing**.

Typical user prompts:
- Review the current implementation related to fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests and produce a risk-ranked findings list.
- Modify the implementation for fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests with a narrow patch and explain validation steps.
- Plan an upgrade or modernization path for fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests that preserves live-game compatibility.

## Non-negotiable constraints
- Focus on untrusted inputs and crash/desync/exploit paths.
- Never perform broad destructive file operations, repo-wide rewrites, cache purges, or generated-file deletion without explicit path scoping, a dry-run plan, and rollback instructions.
- Treat generated assets, serialized scenes, prefabs, blueprints, cooked data, migrations, save schemas, economy data, and backend state as production-critical unless proven otherwise.
- Separate facts observed in the repository from assumptions; label assumptions and verify them before editing code or assets.
- Prefer narrow, reversible changes with targeted tests and profiling evidence over sweeping rewrites.
- Do not fake test results, benchmark numbers, platform certification status, security posture, or compatibility claims.

## Master workflow
1. Convert vague quality goals into measurable budgets: fps, memory, hitch time, CPU/GPU frame time, bandwidth, crash rate, load time, package size, battery, and server cost.
1. Establish repeatable scenarios and baselines before modifying code: benchmark maps, bot tests, save files, capture settings, device tiers, and CI thresholds.
1. Automate what can be automated, then clearly separate automated verification from human QA/playtest/accessibility/certification validation.
1. Use regression gates, symbolication, crash clustering, reproducible builds, artifact retention, and branch protection for high-end production codebases.

## Review protocol
- Inspect flaky tests, slow CI jobs, missing perf markers, unbounded allocations, blocking IO, shader/asset compilation stalls, thread contention, and crash logging gaps.
- Check release readiness across platforms, storefront/cert requirements, localization, accessibility, EULA/privacy, telemetry consent, and rollback assets.
- Verify that benchmark claims include environment, build hash, platform, settings, scene, sample size, and confidence caveats.
- Trace how fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests enters the runtime: authoring data, code path, asset dependency, build/cook step, runtime initialization, telemetry, and failure reporting.
- Find hidden coupling: config values, generated files, naming conventions, editor-only assumptions, asset GUID/path references, platform conditionals, and live-service dependencies.
- Look for scale limits relevant to high-end online games: player count, entity count, asset volume, scene size, data volume, network bandwidth, cache pressure, and operational cost.

## Writing and modification protocol
- Prefer additive, testable changes: introduce interfaces/adapters, retain old data paths until validation passes, and keep public contracts versioned.
- When writing code, include input validation, explicit error handling, logging/telemetry hooks where appropriate, and deterministic behavior for tests.
- When modifying assets or serialized files, preserve IDs/GUIDs/references, avoid format churn, and document any required editor reimport/cook steps.
- For online/live systems, support mixed versions, retries, idempotency, and rollback. Never silently change persistent player meaning.
- Make changes around fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests in the smallest coherent slice: one behavior, one migration, one rendering budget, one endpoint, or one asset pipeline rule at a time.

## Upgrade and modernization protocol
- Inventory current versions, owners, data formats, scripts, configs, runtime assumptions, and tests connected to fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests.
- Read official migration/release notes where applicable. Do not rely on memory for current APIs, package names, console requirements, or security guidance.
- Create an upgrade branch and checkpoint: baseline build/test/profile, apply migration, fix compile/import/cook/runtime issues, then compare behavior/performance.
- Keep compatibility windows explicit: old clients, old saves, old replays, old content bundles, old service contracts, old economy data, and old telemetry schemas.
- Document rollback path and data recovery path before shipping upgrades to players or production services.

## Evidence to gather before conclusions
- Engine version, package/plugin versions, target platforms, renderer/network/backend stack, branch state, and build configuration.
- Relevant logs, stack traces, profiler captures, gameplay recordings, packet captures, screenshots, failing tests, or reproduction steps.
- File ownership patterns, generated-code boundaries, serialization format, save/network protocol versions, and content cooking rules.
- Existing architecture docs, ADRs, CI results, dependency lockfiles, migration history, release notes, and bug tracker context when available.
- Representative assets/scenes/maps/services that exercise fuzzing RPCs, packets, parsers, save files, config, mod content, APIs, serializers, and gameplay invariants with property-based tests, including worst-case content and platform-specific variants.
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
