# Minimal Corrective Editor — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Confirm the finding, target file, intended behavior, and verification command before editing.
- [ ] Identify the existing idiom in nearby code for naming, errors, logging, validation, async handling, and tests.
- [ ] Check whether a one-line change has hidden compatibility or security implications.
- [ ] Inspect generated or vendored status before editing a file.
- [ ] Review imports and dependency effects caused by the patch.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Edit only the lines needed to fix the confirmed issue and any directly required tests.
- [ ] Preserve formatting and project conventions.
- [ ] Remove dead branches or unused imports introduced by the fix.
- [ ] Avoid opportunistic cleanup unrelated to the defect.
- [ ] Prepare a rollback-friendly diff.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Inspect final diff for unintended whitespace, formatting, or unrelated changes.
