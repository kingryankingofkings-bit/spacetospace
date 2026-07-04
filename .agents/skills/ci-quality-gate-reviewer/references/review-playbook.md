# CI Quality Gate Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/ci-quality-gate-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure CI catches defects before merge or release by reviewing quality gates, job coverage, caching, secrets use, and failure handling.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Read workflow files, package scripts, test configs, build matrices, required checks, and branch protection assumptions.
2. Check whether lint, typecheck, tests, security scan, dependency audit, build, and e2e gates run on relevant changes.
3. Review cache keys for stale dependency or build artifacts.
4. Check for continue-on-error, ignored failures, broad path filters, skipped matrices, and unpinned actions.
5. Inspect secrets exposure in logs, PRs from forks, and third-party actions.

## Correction sequence

1. Add missing gates using existing project scripts before inventing new tooling.
2. Make jobs fail when critical checks fail.
3. Tighten path filters and matrices to cover affected code.
4. Pin or constrain third-party actions according to project policy.
5. Document required local commands that mirror CI.

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
- **GitHub Actions Security Hardening:** https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions
