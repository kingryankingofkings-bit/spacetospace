# Compiler Type Contract Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/compiler-type-contract-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Restore type and build correctness while preserving public contracts and using the type system to prevent recurrence.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Start from the first root compiler error, not cascaded diagnostics.
2. Trace symbol definitions, overloads, interface implementations, generic constraints, and generated type sources.
3. Compare runtime validation with static type declarations to find mismatches.
4. Check for unsafe casts, any/unknown escape hatches, unchecked nulls, and stale declaration files.
5. Inspect package or compiler version changes that may have altered type behavior.

## Correction sequence

1. Repair type declarations and call sites so they describe real runtime behavior.
2. Prefer narrowing, guards, discriminated unions, explicit option types, or validated parsing over unsafe casts.
3. Update generated code only through its generator when possible.
4. Keep public type changes backward compatible unless the defect is a broken contract requiring a major change.
5. Add compile-time or runtime tests for high-risk contracts.

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
