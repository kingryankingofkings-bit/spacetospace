# API Compatibility Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Compare changed handlers, schemas, generated clients, examples, docs, fixtures, and tests.
- [ ] Check request/response fields for renamed, removed, newly required, type-changed, enum-changed, nullability-changed, or default-changed values.
- [ ] Review status codes, error shapes, pagination, sorting, filtering, idempotency, rate-limit behavior, auth requirements, and backwards compatibility.
- [ ] Check whether generated clients and mocks were updated from canonical schemas.
- [ ] Look for hidden consumers such as mobile apps, game clients, scripts, third-party integrations, and saved replays.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Prefer additive optional fields and backwards-compatible behavior.
- [ ] Add compatibility shims, version gates, or deprecation paths for breaking changes.
- [ ] Update canonical schema first, then generated artifacts through approved tooling.
- [ ] Add contract tests for old and new clients where possible.
- [ ] Document behavior changes and migration steps.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run schema validation, generated client checks, or contract tests if available.
