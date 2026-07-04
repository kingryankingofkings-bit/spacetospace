# Esports Broadcast Tools Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Map spectator data sources: live server state, replay files, observer clients, local client APIs, tournament systems, draft state, overlays, and third-party broadcast tools.
- [ ] Check competitive integrity controls: spectator delay, fog-of-war/privacy filters, team-only data, hidden picks, admin roles, anti-spoiler timing, and stream sniping mitigation.
- [ ] Review headless observer clients for lifecycle, reconnect, authentication, rate limits, memory use, camera automation, and non-interference with matches.
- [ ] Inspect broadcast overlay APIs for schema stability, timestamps, sequence numbers, team/player IDs, localization, sponsor surfaces, and graceful degradation.
- [ ] Review tournament and drafting screens for bracket state, seeding, bans/picks order, admin overrides, audit logs, lock-in semantics, disconnect recovery, and rollback.
- [ ] Check replay/spectator determinism, seeking, speed control, event ordering, and patch-version compatibility.
- [ ] Review data-feed security: read-only credentials, scoped tokens, CORS, WebSocket auth, cache TTL, and PII minimization.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add explicit schemas and versioning for overlay and broadcast data feeds.
- [ ] Enforce spectator delay and role-based data filtering server-side.
- [ ] Make draft and tournament transitions atomic, auditable, and recoverable.
- [ ] Add sequence numbers, server timestamps, and idempotent update handling to overlay streams.
- [ ] Harden observer authentication and ensure observer clients cannot affect gameplay state.
- [ ] Add tests for bracket transitions, draft lock-in, reconnect, delayed feed, hidden data, and overlay schema compatibility.
- [ ] Document operational runbooks for broadcast failure modes and rollback.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Simulate observer reconnect, overlay disconnect, draft rollback, and delayed feed behavior when possible.
- [ ] Validate overlay payloads against schemas or snapshots.
