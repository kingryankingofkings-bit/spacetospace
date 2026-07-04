# Backend Service Boundary Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify inbound and outbound boundaries: HTTP, RPC, queues, jobs, database, cache, third-party APIs, websockets, and file storage.
- [ ] Check validation, auth, authorization, rate limiting, timeouts, retries, circuit breakers, and idempotency at each boundary.
- [ ] Review worker/job logic for duplicate delivery, poison messages, dead-letter handling, and partial failure.
- [ ] Check transaction boundaries across database and external side effects.
- [ ] Inspect integration contracts and error mapping.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add boundary validation and explicit error handling close to the boundary.
- [ ] Make side-effecting operations idempotent or protected with dedupe keys.
- [ ] Set bounded timeouts and retries using project conventions.
- [ ] Add integration or contract tests for boundary behavior.
- [ ] Record when full reliability requires design work beyond a local patch.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Test failure and duplicate-delivery behavior when practical.
