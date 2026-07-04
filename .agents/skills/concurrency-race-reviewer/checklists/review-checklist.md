# Concurrency Race Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify shared mutable state, caches, singletons, connection state, global stores, queues, workers, timers, and event listeners.
- [ ] Trace lifecycle: create, subscribe, start, cancel, retry, timeout, cleanup, and dispose.
- [ ] Check lock ordering, await gaps, callback reentrancy, duplicate messages, out-of-order delivery, and lost updates.
- [ ] Review idempotency of retries, event handlers, network reconciliation, and database writes.
- [ ] Look for races between UI unmount, request completion, state updates, and background tasks.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Use explicit synchronization, atomic operations, transactional updates, deduplication keys, or state machines as appropriate.
- [ ] Cancel or ignore stale async results safely.
- [ ] Make retries idempotent and safe under duplicate delivery.
- [ ] Add tests with controlled scheduling, fake timers, repeated runs, or deterministic event order where possible.
- [ ] Prefer local ownership and immutable updates over shared mutable state.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run repeated or stress checks if available and log nondeterministic limitations.
