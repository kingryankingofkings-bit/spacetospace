# Repository Risk Map Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/repository-risk-map-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Create a fast, evidence-grounded risk map that tells the agent where defects are most likely, what should not be touched casually, and which checks are needed before edits.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Read root manifests, workspace files, package metadata, build scripts, test configuration, CI workflows, container files, and docs before opening many source files.
2. Classify modules by role: UI, API, persistence, jobs, engine/runtime, networking, auth, integrations, tooling, and infrastructure.
3. Find entry points, dependency direction, public contracts, generated artifacts, vendored code, migration folders, and codegen output.
4. Locate flaky or absent tests by comparing critical modules with available test files.
5. Identify files with high churn or obvious complexity if Git history is accessible.

## Correction sequence

1. Do not patch during the initial map unless a trivial, high-confidence breakage blocks inspection.
2. Create a prioritized review route from highest risk and easiest verification to lower-risk cleanup.
3. Mark files that require human confirmation before change, such as migrations, protocol schemas, save formats, and security policies.
4. Recommend missing review skills for each risk zone.
5. Capture prerequisite setup commands only after reading project docs and package metadata.

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
