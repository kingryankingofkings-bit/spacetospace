# Test Gap Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/test-gap-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find where tests fail to protect important behavior and propose or implement targeted tests that would catch the reviewed defect class.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Map critical behavior to existing tests by feature, module, public API, and bug history.
2. Identify tests that execute code but do not assert meaningful outcomes.
3. Check edge cases: empty, null, missing, duplicate, invalid, max/min, concurrent, permission-denied, network-failure, and migration scenarios.
4. Look for over-mocked tests that cannot catch integration breakage.
5. Inspect whether tests reproduce the user's reported issue or merely test the happy path.

## Correction sequence

1. Add focused tests with clear arrange-act-assert structure.
2. Prefer deterministic tests over snapshots or broad golden outputs unless snapshots are the project norm and reviewed carefully.
3. Reuse existing fixtures and helper patterns to reduce test maintenance burden.
4. Strengthen assertions before increasing test count.
5. Mark impossible-to-automate coverage gaps with a manual verification checklist.

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
