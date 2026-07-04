# Static Analysis Triage Fixer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/static-analysis-triage-fixer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Separate true defects from noise in static-analysis output and apply safe fixes that improve correctness, security, and maintainability without silencing valuable signals.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Read the exact analyzer rule, file, line, trace, severity, and confidence before editing.
2. Inspect data flow from source to sink for security findings and type flow for type findings.
3. Check whether the same pattern appears elsewhere and whether a shared helper is appropriate.
4. Look for previous suppressions and evaluate whether they are still justified.
5. Prioritize findings that correspond to runtime bugs, security impact, resource leaks, or dead code.

## Correction sequence

1. Fix root cause before considering suppression.
2. Use narrow suppressions only with a specific justification and only when the analyzer is demonstrably wrong.
3. Refactor repeated analyzer issues into safer APIs when the change is localized and testable.
4. Add type annotations, validation, sanitization, or guard clauses where they encode real invariants.
5. Re-run the specific analyzer command after patching if available.

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
- **GitHub CodeQL Documentation:** https://codeql.github.com/docs/
