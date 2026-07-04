# Runtime Reproduction Debugger — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Capture exact command, input, environment variables, seed, browser/device, OS, version, and data state needed to reproduce.
- [ ] Read stack traces from the root cause frame outward rather than editing the final thrown line only.
- [ ] Add temporary local diagnostics only when they are removed or converted to appropriate logging before final patch.
- [ ] Minimize the reproduction to reduce unrelated variables.
- [ ] Check for race, time, random seed, cache, locale, timezone, and network dependencies.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch the root failing path and keep reproduction artifacts in tests or documented manual steps.
- [ ] Add defensive checks only when they preserve intended behavior and expose invalid states appropriately.
- [ ] Remove temporary debug code before final output.
- [ ] Prefer assertions in tests over production logs for proving correctness.
- [ ] For flaky bugs, widen verification through repeated or seeded runs when possible.

## Final verification

- [ ] Record reproduction before patch when possible.
- [ ] Run the exact failing command or scenario after patch.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
