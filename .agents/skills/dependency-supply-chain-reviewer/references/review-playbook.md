# Dependency Supply Chain Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/dependency-supply-chain-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find and correct dependency and build-chain risks that can introduce vulnerable, malicious, incompatible, or unreproducible software into the project.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Compare manifest and lockfile changes for unexpected packages, maintainers, scripts, registries, tarball URLs, integrity hashes, and version ranges.
2. Check transitive dependency risk and whether the update changes runtime behavior, bundling, polyfills, or native code.
3. Review package lifecycle scripts, postinstall hooks, code generation, and CI downloads.
4. Check license compatibility when new packages are added.
5. Assess whether a vulnerability is reachable before choosing upgrade, patch, mitigation, or deferred risk.

## Correction sequence

1. Pin or constrain versions according to project policy and preserve reproducible installs.
2. Upgrade vulnerable packages when compatibility is acceptable and tests can verify behavior.
3. Remove unused or suspicious dependencies.
4. Disable or document risky install scripts only through project-supported mechanisms.
5. Update lockfiles using the correct package manager, not manual edits.

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
- **OpenSSF Scorecard:** https://securityscorecards.dev/
- **SLSA Framework:** https://slsa.dev/
