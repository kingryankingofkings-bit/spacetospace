# Concurrency Race Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/concurrency-race-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find and fix bugs caused by interleavings, async ordering, shared mutable state, locks, queues, retries, idempotency, and distributed coordination.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify shared mutable state, caches, singletons, connection state, global stores, queues, workers, timers, and event listeners.
2. Trace lifecycle: create, subscribe, start, cancel, retry, timeout, cleanup, and dispose.
3. Check lock ordering, await gaps, callback reentrancy, duplicate messages, out-of-order delivery, and lost updates.
4. Review idempotency of retries, event handlers, network reconciliation, and database writes.
5. Look for races between UI unmount, request completion, state updates, and background tasks.

## Correction sequence

1. Use explicit synchronization, atomic operations, transactional updates, deduplication keys, or state machines as appropriate.
2. Cancel or ignore stale async results safely.
3. Make retries idempotent and safe under duplicate delivery.
4. Add tests with controlled scheduling, fake timers, repeated runs, or deterministic event order where possible.
5. Prefer local ownership and immutable updates over shared mutable state.

## Evidence standards

- A finding needs a file path, symbol or line context, observed code behavior, expected behavior, and impact.
- A fix needs a direct mapping to a finding and a verification step.
- A security finding needs a trust boundary and affected asset or capability.
- A performance finding needs a measurement, profiler trace, benchmark, or static complexity proof.
- A compatibility finding needs an old/new contract comparison.

## Escalation rules

Escalate instead of patching when the fix requires product policy, irreversible data changes, public API breakage, secret rotation, production deployment action, legal/licensing judgment, or major architecture migration.

## Source references

- **Google Engineering Practices - Code Review:** https://google.github.io/eng-practices/review/
- **Google Engineering Practices - Standard of Code Review:** https://google.github.io/eng-practices/review/reviewer/standard.html
- **NIST SP 800-218 Secure Software Development Framework:** https://csrc.nist.gov/pubs/sp/800/218/final
- **OWASP Top Ten Web Application Security Risks:** https://owasp.org/www-project-top-ten/
- **Agent Skills Specification:** https://agentskills.io/specification
- **Google Antigravity Skills Documentation:** https://antigravity.google/docs/skills
