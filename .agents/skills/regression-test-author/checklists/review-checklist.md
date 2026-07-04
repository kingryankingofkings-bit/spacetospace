# Regression Test Author — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Extract the minimal failing input, state, permission context, timing condition, or data shape from the bug evidence.
- [ ] Locate the nearest existing test style and fixture conventions.
- [ ] Identify whether the bug belongs in unit, integration, contract, browser, e2e, or property-based tests.
- [ ] Check existing tests for duplicate coverage before adding new files.
- [ ] Determine whether the test can fail for the intended reason without relying on unrelated environment state.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Author the smallest test that fails for the bug and names the behavior explicitly.
- [ ] Use helper builders or fixtures rather than fragile literal setup where project norms support it.
- [ ] Assert externally visible behavior, not internal private implementation unless no better seam exists.
- [ ] Add bug reproduction comments only when the scenario is non-obvious.
- [ ] After fixing, keep the test strict enough to prevent regression.

## Final verification

- [ ] Run the regression test before the fix when practical and record failure.
- [ ] Run the same test after the fix and record pass.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
