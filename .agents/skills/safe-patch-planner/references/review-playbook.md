# Safe Patch Planner — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/safe-patch-planner/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Create an explicit patch contract that defines scope, risk, rollback, verification, and user approval points for non-trivial or high-risk corrections.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Define the defect, impacted behavior, root-cause hypothesis, affected files, and non-goals.
2. Identify irreversible operations, migrations, production settings, external APIs, and compatibility-sensitive files.
3. Assess whether a feature flag, compatibility shim, or phased patch is safer than a direct replacement.
4. Determine test and rollback steps before edits.
5. Identify manual confirmation points for destructive or ambiguous changes.

## Correction sequence

1. Produce a patch plan before touching files when the change is high-risk.
2. Break large fixes into reviewable phases and verify each phase independently.
3. Prefer additive compatibility layers over breaking changes when feasible.
4. Document assumptions and constraints directly in the plan.
5. After patching, reconcile implementation against the original plan.

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
