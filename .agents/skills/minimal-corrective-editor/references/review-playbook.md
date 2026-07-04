# Minimal Corrective Editor — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/minimal-corrective-editor/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Make the smallest correct edit that fixes a confirmed defect, preserves project style, and leaves the codebase easier to verify than before.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Confirm the finding, target file, intended behavior, and verification command before editing.
2. Identify the existing idiom in nearby code for naming, errors, logging, validation, async handling, and tests.
3. Check whether a one-line change has hidden compatibility or security implications.
4. Inspect generated or vendored status before editing a file.
5. Review imports and dependency effects caused by the patch.

## Correction sequence

1. Edit only the lines needed to fix the confirmed issue and any directly required tests.
2. Preserve formatting and project conventions.
3. Remove dead branches or unused imports introduced by the fix.
4. Avoid opportunistic cleanup unrelated to the defect.
5. Prepare a rollback-friendly diff.

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
