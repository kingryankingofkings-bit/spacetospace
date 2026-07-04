# Secrets and Configuration Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/secrets-config-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Prevent secret exposure and configuration mistakes by finding hardcoded credentials, unsafe defaults, missing validation, and environment drift before they reach production.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Search for tokens, keys, passwords, private URLs, certificates, connection strings, and secrets embedded in source, tests, examples, logs, CI, Docker, and config files.
2. Check that required environment variables are validated at startup with safe error messages.
3. Review defaults for debug mode, CORS, TLS, admin accounts, auth bypass, telemetry, and feature flags.
4. Inspect logging and error handling for accidental secret or PII exposure.
5. Check whether sample files clearly distinguish placeholders from real credentials.

## Correction sequence

1. Remove hardcoded secrets and replace with secret manager or environment references.
2. Add configuration schema validation and fail-fast startup for missing critical config.
3. Redact sensitive values in logs and error paths.
4. Make insecure development defaults impossible or explicit in production.
5. Document required configuration without exposing real secrets.

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
- **OWASP Secrets Management Cheat Sheet:** https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
