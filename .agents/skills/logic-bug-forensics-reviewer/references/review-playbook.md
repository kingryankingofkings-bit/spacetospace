# Logic Bug Forensics Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/logic-bug-forensics-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Perform forensic reasoning over program behavior to find logic defects, prove the failing path, and implement the smallest correction that restores intended behavior.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify the intended invariant from tests, docs, naming, UI behavior, API contracts, or adjacent code.
2. Construct a control-flow path for the failing scenario and at least one non-failing scenario.
3. Check comparisons, negations, nullish defaults, time units, indexing, ordering, sorting, rounding, and enum fallthrough.
4. Look for stale state, double application, missed reset, late validation, and incorrect cache invalidation.
5. Review previous fixes in adjacent code to infer established patterns.

## Correction sequence

1. Patch the faulty predicate, state update, ordering, or invariant guard directly.
2. Add regression tests for boundary values and the original failing case.
3. Prefer named helper predicates when boolean expressions are hard to audit.
4. Update comments only when they clarify a non-obvious invariant.
5. Avoid broader refactors unless the current structure prevents a safe fix.

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
