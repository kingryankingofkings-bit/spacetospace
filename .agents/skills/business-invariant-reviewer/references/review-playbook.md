# Business Invariant Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/business-invariant-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find defects where code violates product, economy, gameplay, or domain invariants and patch them without altering unrelated rules.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Extract domain rules from tests, docs, constants, admin UI, product names, schemas, and adjacent code.
2. Identify invariants such as one reward per event, non-negative balances, ownership, cooldowns, caps, tiers, eligibility, and progression gates.
3. Check bypass paths through admin tools, retries, imports, bulk operations, offline clients, and stale caches.
4. Review rounding, currency, item rarity, inventory capacity, and time-window calculations.
5. Find missing auditability for sensitive rule changes.

## Correction sequence

1. Patch rule enforcement at authoritative points, not only presentation layers.
2. Add invariant assertions or tests for prohibited states.
3. Use existing domain terminology and constants instead of duplicating magic values.
4. Protect economic or entitlement changes with compatibility and audit notes.
5. Document assumptions when rules are inferred rather than specified.

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
