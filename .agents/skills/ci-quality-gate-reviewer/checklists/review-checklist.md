# CI Quality Gate Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Read workflow files, package scripts, test configs, build matrices, required checks, and branch protection assumptions.
- [ ] Check whether lint, typecheck, tests, security scan, dependency audit, build, and e2e gates run on relevant changes.
- [ ] Review cache keys for stale dependency or build artifacts.
- [ ] Check for continue-on-error, ignored failures, broad path filters, skipped matrices, and unpinned actions.
- [ ] Inspect secrets exposure in logs, PRs from forks, and third-party actions.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add missing gates using existing project scripts before inventing new tooling.
- [ ] Make jobs fail when critical checks fail.
- [ ] Tighten path filters and matrices to cover affected code.
- [ ] Pin or constrain third-party actions according to project policy.
- [ ] Document required local commands that mirror CI.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Validate workflow syntax and affected scripts where possible.
