# Memory and Resource Lifecycle Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Inventory allocations: listeners, timers, subscriptions, sockets, files, database connections, workers, GPU buffers/textures, audio nodes, caches, and observers.
- [ ] Trace lifecycle from creation through all success, error, cancellation, unmount, and shutdown paths.
- [ ] Check whether cleanup is idempotent and safe after partial initialization.
- [ ] Look for retained closures, global registries, caches without bounds, detached DOM/canvas references, and unclosed streams.
- [ ] Review ownership transfer and disposal conventions in the framework or engine.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add deterministic cleanup in finally blocks, disposal hooks, effect cleanup functions, or owner destructors as appropriate.
- [ ] Make cleanup idempotent and tolerant of partially initialized state.
- [ ] Bound caches and remove stale entries.
- [ ] Avoid retaining heavyweight resources beyond their intended owner.
- [ ] Add leak regression tests or lifecycle tests where feasible.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Use lifecycle tests, repeated mount/unmount, or resource counters when available.
