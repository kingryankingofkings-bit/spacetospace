# Runtime Reproduction Debugger — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/runtime-reproduction-debugger/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Convert runtime symptoms into a controlled reproduction, isolate the failing path, and patch with evidence from logs, traces, assertions, or debugger output.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Capture exact command, input, environment variables, seed, browser/device, OS, version, and data state needed to reproduce.
2. Read stack traces from the root cause frame outward rather than editing the final thrown line only.
3. Add temporary local diagnostics only when they are removed or converted to appropriate logging before final patch.
4. Minimize the reproduction to reduce unrelated variables.
5. Check for race, time, random seed, cache, locale, timezone, and network dependencies.

## Correction sequence

1. Patch the root failing path and keep reproduction artifacts in tests or documented manual steps.
2. Add defensive checks only when they preserve intended behavior and expose invalid states appropriately.
3. Remove temporary debug code before final output.
4. Prefer assertions in tests over production logs for proving correctness.
5. For flaky bugs, widen verification through repeated or seeded runs when possible.

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
