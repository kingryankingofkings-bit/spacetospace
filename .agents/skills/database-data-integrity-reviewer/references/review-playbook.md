# Database Data Integrity Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/database-data-integrity-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Prevent data loss, corruption, inconsistency, unsafe migrations, and incorrect query behavior by reviewing persistence code and correcting safe defects.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Review schema, migrations, ORM mappings, query builders, raw SQL, seed data, data access layers, and tests together.
2. Check whether invariants are enforced by database constraints, application logic, or both.
3. Inspect transactions for atomicity, isolation, retries, lock ordering, and partial failure behavior.
4. Review migrations for reversibility, backfill safety, default values, nullability, large-table risk, and online deployment constraints.
5. Check queries for incorrect joins, missing tenant filters, N+1 behavior, pagination drift, and stale denormalized data.

## Correction sequence

1. Add constraints or transactional guards when safe and compatible with existing data.
2. Patch query filters, joins, ordering, limits, and parameterization.
3. Add data-integrity tests and migration tests when available.
4. Separate schema changes, backfills, and application reads/writes when a zero-downtime pattern is needed.
5. Flag data cleanup or irreversible migration steps for human review.

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
