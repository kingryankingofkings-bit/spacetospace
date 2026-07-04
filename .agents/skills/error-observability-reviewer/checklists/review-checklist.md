# Error Handling and Observability Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Find swallowed exceptions, broad catch blocks, missing awaits, unhandled promise rejections, panic paths, and inconsistent error translations.
- [ ] Check retry loops for backoff, jitter, idempotency, max attempts, cancellation, and error classification.
- [ ] Review logs for correlation IDs, context, severity, redaction, and actionability.
- [ ] Verify user-facing errors are safe and useful without exposing secrets or internals.
- [ ] Check whether metrics and traces cover critical failure paths.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Narrow catch blocks and preserve root cause through wrapping or structured error fields.
- [ ] Add actionable logs or metrics at service boundaries and critical state transitions.
- [ ] Make retries bounded, classified, cancellable, and idempotent.
- [ ] Redact secrets and PII from errors and logs.
- [ ] Add tests for failure paths, not only successful paths.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Trigger or unit-test representative failure paths where possible.
