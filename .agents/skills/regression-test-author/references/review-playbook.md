# Regression Test Author — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/regression-test-author/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Turn a concrete bug report or finding into a deterministic regression test that fails before the fix and passes after the fix whenever the environment allows confirmation.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Extract the minimal failing input, state, permission context, timing condition, or data shape from the bug evidence.
2. Locate the nearest existing test style and fixture conventions.
3. Identify whether the bug belongs in unit, integration, contract, browser, e2e, or property-based tests.
4. Check existing tests for duplicate coverage before adding new files.
5. Determine whether the test can fail for the intended reason without relying on unrelated environment state.

## Correction sequence

1. Author the smallest test that fails for the bug and names the behavior explicitly.
2. Use helper builders or fixtures rather than fragile literal setup where project norms support it.
3. Assert externally visible behavior, not internal private implementation unless no better seam exists.
4. Add bug reproduction comments only when the scenario is non-obvious.
5. After fixing, keep the test strict enough to prevent regression.

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
