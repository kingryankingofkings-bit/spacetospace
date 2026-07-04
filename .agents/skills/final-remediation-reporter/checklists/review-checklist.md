# Final Remediation Reporter — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Gather all findings, patches, tests, commands, failures, unexecuted checks, and deferred risks.
- [ ] Confirm severity and confidence labels are consistent.
- [ ] Check that each file changed has a reason tied to a finding or test.
- [ ] Separate fixed, partially fixed, deferred, not reproducible, and false-positive items.
- [ ] Verify final report avoids unsupported claims.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Write the report in merge-ready form with clear sections and no hidden caveats.
- [ ] Include exact commands and outcomes when available.
- [ ] State what was not checked or could not be verified.
- [ ] List next actions in priority order when work remains.
- [ ] Flag high-risk changes requiring human review before merge.

## Final verification

- [ ] Cross-check the final report against the actual diff and command logs.
- [ ] Ensure no finding marked fixed lacks a corresponding patch or verified rationale.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
