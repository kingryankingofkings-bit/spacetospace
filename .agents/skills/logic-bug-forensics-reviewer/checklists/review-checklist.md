# Logic Bug Forensics Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify the intended invariant from tests, docs, naming, UI behavior, API contracts, or adjacent code.
- [ ] Construct a control-flow path for the failing scenario and at least one non-failing scenario.
- [ ] Check comparisons, negations, nullish defaults, time units, indexing, ordering, sorting, rounding, and enum fallthrough.
- [ ] Look for stale state, double application, missed reset, late validation, and incorrect cache invalidation.
- [ ] Review previous fixes in adjacent code to infer established patterns.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch the faulty predicate, state update, ordering, or invariant guard directly.
- [ ] Add regression tests for boundary values and the original failing case.
- [ ] Prefer named helper predicates when boolean expressions are hard to audit.
- [ ] Update comments only when they clarify a non-obvious invariant.
- [ ] Avoid broader refactors unless the current structure prevents a safe fix.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Create a simple truth table or state table for complex conditional fixes.
