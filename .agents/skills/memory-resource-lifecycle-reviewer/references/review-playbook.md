# Memory and Resource Lifecycle Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/memory-resource-lifecycle-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find resource lifecycle defects and apply cleanup, ownership, disposal, and scope fixes that prevent leaks, exhaustion, and use-after-dispose behavior.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Inventory allocations: listeners, timers, subscriptions, sockets, files, database connections, workers, GPU buffers/textures, audio nodes, caches, and observers.
2. Trace lifecycle from creation through all success, error, cancellation, unmount, and shutdown paths.
3. Check whether cleanup is idempotent and safe after partial initialization.
4. Look for retained closures, global registries, caches without bounds, detached DOM/canvas references, and unclosed streams.
5. Review ownership transfer and disposal conventions in the framework or engine.

## Correction sequence

1. Add deterministic cleanup in finally blocks, disposal hooks, effect cleanup functions, or owner destructors as appropriate.
2. Make cleanup idempotent and tolerant of partially initialized state.
3. Bound caches and remove stale entries.
4. Avoid retaining heavyweight resources beyond their intended owner.
5. Add leak regression tests or lifecycle tests where feasible.

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
