---
name: dependency-supply-chain-reviewer
description: "Reviews dependencies, lockfiles, build scripts, package updates, transitive risks, licenses, and supply-chain integrity. Use when packages or build tooling change."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "dependencies, supply-chain, lockfile"
---

# Dependency Supply Chain Reviewer

## Mission

Find and correct dependency and build-chain risks that can introduce vulnerable, malicious, incompatible, or unreproducible software into the project.

## Use this skill when

- dependency review
- package update
- lockfile
- supply chain
- npm audit
- SBOM
- license

## Review focus

- dependencies
- lockfiles
- build scripts
- integrity
- vulnerabilities
- licenses

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Compare manifest and lockfile changes for unexpected packages, maintainers, scripts, registries, tarball URLs, integrity hashes, and version ranges.
2. Check transitive dependency risk and whether the update changes runtime behavior, bundling, polyfills, or native code.
3. Review package lifecycle scripts, postinstall hooks, code generation, and CI downloads.
4. Check license compatibility when new packages are added.
5. Assess whether a vulnerability is reachable before choosing upgrade, patch, mitigation, or deferred risk.

## Correction procedure

1. Pin or constrain versions according to project policy and preserve reproducible installs.
2. Upgrade vulnerable packages when compatibility is acceptable and tests can verify behavior.
3. Remove unused or suspicious dependencies.
4. Disable or document risky install scripts only through project-supported mechanisms.
5. Update lockfiles using the correct package manager, not manual edits.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not delete lockfiles, switch package managers, or broaden semver ranges casually.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run install, audit, license, build, and relevant tests if available.

## Required output contract

- Dependency risk table with package, change, reason, reachability, action, and verification.
- Patch plan before edits when the fix is non-trivial or touches multiple files.
- Implemented patch summary that maps each change back to a finding.
- Verification log with exact commands or static review steps and results.
- Residual risk list and rollback notes when appropriate.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: Review this dependency bump and fix any risky package issues.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [OpenSSF Scorecard](https://securityscorecards.dev/)
- [SLSA Framework](https://slsa.dev/)
