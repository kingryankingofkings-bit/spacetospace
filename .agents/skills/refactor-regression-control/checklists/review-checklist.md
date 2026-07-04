# Refactor Regression Control — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Compare pre-refactor intent with post-refactor behavior by reading tests, docs, and public contracts.
- [ ] Trace renamed, moved, or extracted symbols across imports, DI wiring, serialization, reflection, routing, and config.
- [ ] Check that defaults, error behavior, side effects, ordering, and lifecycle hooks were preserved.
- [ ] Find duplicate old/new paths that can diverge.
- [ ] Look for stale docs, fixtures, snapshots, and generated files after the refactor.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch missed call sites, lost side effects, broken imports, or changed defaults.
- [ ] Add characterization tests when the original behavior is important but not covered.
- [ ] Keep compatibility shims when external callers may still use old names.
- [ ] Remove dead compatibility only when it is proven internal and safe.
- [ ] Record intentional behavior changes separately from accidental regressions.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run tests for both old and new entry points when compatibility is preserved.
