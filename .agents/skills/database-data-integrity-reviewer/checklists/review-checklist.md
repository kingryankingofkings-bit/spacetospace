# Database Data Integrity Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Review schema, migrations, ORM mappings, query builders, raw SQL, seed data, data access layers, and tests together.
- [ ] Check whether invariants are enforced by database constraints, application logic, or both.
- [ ] Inspect transactions for atomicity, isolation, retries, lock ordering, and partial failure behavior.
- [ ] Review migrations for reversibility, backfill safety, default values, nullability, large-table risk, and online deployment constraints.
- [ ] Check queries for incorrect joins, missing tenant filters, N+1 behavior, pagination drift, and stale denormalized data.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add constraints or transactional guards when safe and compatible with existing data.
- [ ] Patch query filters, joins, ordering, limits, and parameterization.
- [ ] Add data-integrity tests and migration tests when available.
- [ ] Separate schema changes, backfills, and application reads/writes when a zero-downtime pattern is needed.
- [ ] Flag data cleanup or irreversible migration steps for human review.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Validate migration up/down or dry-run behavior when project tooling supports it.
