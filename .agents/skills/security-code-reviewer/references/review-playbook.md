# Security Code Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/security-code-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Identify exploitable or security-relevant defects, prioritize by impact and likelihood, and apply safe mitigations that preserve intended functionality.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify trust boundaries: browser/server, client/server, public/internal APIs, tenant boundaries, admin/user paths, file uploads, secrets, and third-party inputs.
2. Trace untrusted data through parsing, validation, authorization, storage, rendering, and command/query execution.
3. Review authentication, authorization, session handling, input validation, output encoding, crypto usage, logging, configuration, dependency risk, SSRF, deserialization, and file handling.
4. Check whether security controls live server-side and cannot be bypassed by client modification.
5. Search for known dangerous functions and framework-specific insecure patterns.

## Correction sequence

1. Fix root vulnerabilities with validation, authorization checks, safe APIs, encoding, parameterization, least privilege, or secure defaults.
2. Add tests that prove unauthorized, malformed, or malicious inputs are rejected.
3. Avoid homemade cryptography or custom parsers when mature safe APIs exist.
4. Mask sensitive data in logs and outputs.
5. When a full fix requires design changes, add safe guardrails and document remaining exposure.

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
- **OWASP Web Security Testing Guide:** https://owasp.org/www-project-web-security-testing-guide/
