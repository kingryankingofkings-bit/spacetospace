# Diff Impact Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/diff-impact-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Review a diff with context, detect direct and indirect breakage, and patch defects without expanding the change beyond the impact boundary.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Read the diff first, then inspect surrounding code for each changed symbol, public interface, and dependency edge.
2. Determine whether the change alters behavior, data shape, error handling, persistence, performance, security posture, or compatibility.
3. Trace at least one caller and one callee for non-trivial changes.
4. Check whether tests changed in proportion to behavior risk.
5. Look for partial edits: renamed symbols not updated everywhere, new options not documented, error branches not handled, and config flags not wired.

## Correction sequence

1. Patch only defects attributable to the diff unless a pre-existing issue blocks correct behavior.
2. Add targeted regression tests for newly discovered breakage when test infrastructure exists.
3. Preserve the author intent and commit scope.
4. If fixing requires larger design work, provide a blocking finding plus a minimal safe guard if possible.
5. Update docs or examples only when the diff changed a user-facing contract.

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
