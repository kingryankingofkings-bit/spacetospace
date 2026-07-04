# Final Remediation Reporter — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/final-remediation-reporter/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Convert review and patch work into a concise but complete engineering report that is honest, auditable, and useful for merge or handoff.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Gather all findings, patches, tests, commands, failures, unexecuted checks, and deferred risks.
2. Confirm severity and confidence labels are consistent.
3. Check that each file changed has a reason tied to a finding or test.
4. Separate fixed, partially fixed, deferred, not reproducible, and false-positive items.
5. Verify final report avoids unsupported claims.

## Correction sequence

1. Write the report in merge-ready form with clear sections and no hidden caveats.
2. Include exact commands and outcomes when available.
3. State what was not checked or could not be verified.
4. List next actions in priority order when work remains.
5. Flag high-risk changes requiring human review before merge.

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
