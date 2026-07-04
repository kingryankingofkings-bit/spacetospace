# Performance Regression Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify critical paths from profiling data, code structure, request paths, render loops, or user-reported symptoms.
- [ ] Check loops, nested scans, repeated serialization, unnecessary allocations, blocking IO, sync-over-async, cache misses, and repeated expensive initialization.
- [ ] Review database queries, network chatter, bundle size, asset loading, and render/update frequency.
- [ ] Differentiate measurable bottlenecks from theoretical micro-optimizations.
- [ ] Check for performance/security tradeoffs before caching sensitive or authorization-dependent data.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Fix algorithmic or IO inefficiencies with clear before/after rationale.
- [ ] Add caching only with invalidation, memory bounds, and authorization safety.
- [ ] Move expensive work out of per-frame or per-request hot paths where safe.
- [ ] Add benchmarks or performance tests for critical regressions when project tooling supports it.
- [ ] Preserve correctness first, then optimize.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Record benchmark/profiling commands and caveats when measurements are available.
