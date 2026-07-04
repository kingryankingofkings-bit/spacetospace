# Error Handling and Observability Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/error-observability-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure failures are handled intentionally, surfaced safely, and observable enough to debug without leaking sensitive information or hiding defects.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Find swallowed exceptions, broad catch blocks, missing awaits, unhandled promise rejections, panic paths, and inconsistent error translations.
2. Check retry loops for backoff, jitter, idempotency, max attempts, cancellation, and error classification.
3. Review logs for correlation IDs, context, severity, redaction, and actionability.
4. Verify user-facing errors are safe and useful without exposing secrets or internals.
5. Check whether metrics and traces cover critical failure paths.

## Correction sequence

1. Narrow catch blocks and preserve root cause through wrapping or structured error fields.
2. Add actionable logs or metrics at service boundaries and critical state transitions.
3. Make retries bounded, classified, cancellable, and idempotent.
4. Redact secrets and PII from errors and logs.
5. Add tests for failure paths, not only successful paths.

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
- **OpenTelemetry Documentation:** https://opentelemetry.io/docs/
