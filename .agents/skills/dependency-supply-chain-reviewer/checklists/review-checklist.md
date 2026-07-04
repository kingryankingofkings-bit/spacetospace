# Dependency Supply Chain Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Compare manifest and lockfile changes for unexpected packages, maintainers, scripts, registries, tarball URLs, integrity hashes, and version ranges.
- [ ] Check transitive dependency risk and whether the update changes runtime behavior, bundling, polyfills, or native code.
- [ ] Review package lifecycle scripts, postinstall hooks, code generation, and CI downloads.
- [ ] Check license compatibility when new packages are added.
- [ ] Assess whether a vulnerability is reachable before choosing upgrade, patch, mitigation, or deferred risk.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Pin or constrain versions according to project policy and preserve reproducible installs.
- [ ] Upgrade vulnerable packages when compatibility is acceptable and tests can verify behavior.
- [ ] Remove unused or suspicious dependencies.
- [ ] Disable or document risky install scripts only through project-supported mechanisms.
- [ ] Update lockfiles using the correct package manager, not manual edits.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run install, audit, license, build, and relevant tests if available.
