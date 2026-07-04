# API Compatibility Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/api-compatibility-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Protect external and internal contracts by finding incompatible changes, incorrect schemas, undocumented behavior, and missing migration or versioning safeguards.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Compare changed handlers, schemas, generated clients, examples, docs, fixtures, and tests.
2. Check request/response fields for renamed, removed, newly required, type-changed, enum-changed, nullability-changed, or default-changed values.
3. Review status codes, error shapes, pagination, sorting, filtering, idempotency, rate-limit behavior, auth requirements, and backwards compatibility.
4. Check whether generated clients and mocks were updated from canonical schemas.
5. Look for hidden consumers such as mobile apps, game clients, scripts, third-party integrations, and saved replays.

## Correction sequence

1. Prefer additive optional fields and backwards-compatible behavior.
2. Add compatibility shims, version gates, or deprecation paths for breaking changes.
3. Update canonical schema first, then generated artifacts through approved tooling.
4. Add contract tests for old and new clients where possible.
5. Document behavior changes and migration steps.

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
- **OpenAPI Specification:** https://spec.openapis.org/oas/latest.html
