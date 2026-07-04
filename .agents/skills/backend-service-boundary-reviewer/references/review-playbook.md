# Backend Service Boundary Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/backend-service-boundary-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure backend service boundaries are robust, validated, observable, idempotent, and consistent under failure and integration pressure.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify inbound and outbound boundaries: HTTP, RPC, queues, jobs, database, cache, third-party APIs, websockets, and file storage.
2. Check validation, auth, authorization, rate limiting, timeouts, retries, circuit breakers, and idempotency at each boundary.
3. Review worker/job logic for duplicate delivery, poison messages, dead-letter handling, and partial failure.
4. Check transaction boundaries across database and external side effects.
5. Inspect integration contracts and error mapping.

## Correction sequence

1. Add boundary validation and explicit error handling close to the boundary.
2. Make side-effecting operations idempotent or protected with dedupe keys.
3. Set bounded timeouts and retries using project conventions.
4. Add integration or contract tests for boundary behavior.
5. Record when full reliability requires design work beyond a local patch.

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
