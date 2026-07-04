# Code Review Orchestrator — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/code-review-orchestrator/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Plan and coordinate a complete code review that discovers defects, groups risks, delegates deeper analysis to specialized review skills, and drives safe corrective patches through verification.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Map project languages, frameworks, build tools, package managers, test runners, deployment surfaces, and generated-code boundaries.
2. Identify high-risk files first: auth, payments, persistence, concurrency, networking, security-sensitive parsing, migrations, config, build scripts, and public APIs.
3. Segment findings into correctness, safety, security, maintainability, performance, reliability, test coverage, and release-readiness categories.
4. Choose specialist review skills based on evidence rather than using every skill indiscriminately.
5. Maintain an issue ledger so duplicate findings collapse into one root-cause item.

## Correction sequence

1. Prefer small, high-confidence patches for defects with concrete evidence.
2. Batch related edits only when they share a single root cause and can be verified together.
3. Escalate risky architectural changes into patch plans rather than performing speculative rewrites.
4. Add or update tests when the defect can be reproduced through automated checks.
5. Re-run relevant checks after each meaningful patch set.

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
