# Test Gap Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Map critical behavior to existing tests by feature, module, public API, and bug history.
- [ ] Identify tests that execute code but do not assert meaningful outcomes.
- [ ] Check edge cases: empty, null, missing, duplicate, invalid, max/min, concurrent, permission-denied, network-failure, and migration scenarios.
- [ ] Look for over-mocked tests that cannot catch integration breakage.
- [ ] Inspect whether tests reproduce the user's reported issue or merely test the happy path.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add focused tests with clear arrange-act-assert structure.
- [ ] Prefer deterministic tests over snapshots or broad golden outputs unless snapshots are the project norm and reviewed carefully.
- [ ] Reuse existing fixtures and helper patterns to reduce test maintenance burden.
- [ ] Strengthen assertions before increasing test count.
- [ ] Mark impossible-to-automate coverage gaps with a manual verification checklist.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run the new or modified tests alone first, then the relevant suite.
