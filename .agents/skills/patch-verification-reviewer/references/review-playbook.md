# Patch Verification Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/patch-verification-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Audit the final patch against the original finding, test evidence, diff scope, and residual risks before reporting completion.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Re-read the original bug report or finding and restate the acceptance criteria.
2. Inspect final diff for scope creep, unrelated edits, missing tests, and accidental behavior changes.
3. Trace the patched path and at least one unaffected path.
4. Compare verification commands with the actual impacted areas.
5. Check whether known risks were truly fixed, deferred, or left unresolved.

## Correction sequence

1. Patch missing edge cases or tests discovered during verification.
2. Revert unrelated edits if they do not belong to the fix.
3. Add a final guard or test only if it directly improves confidence in the original fix.
4. Clearly label unverified areas when environment limitations prevent execution.
5. Prepare the completion summary only after evidence is gathered.

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
