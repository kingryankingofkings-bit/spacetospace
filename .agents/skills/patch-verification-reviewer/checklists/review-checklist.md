# Patch Verification Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Re-read the original bug report or finding and restate the acceptance criteria.
- [ ] Inspect final diff for scope creep, unrelated edits, missing tests, and accidental behavior changes.
- [ ] Trace the patched path and at least one unaffected path.
- [ ] Compare verification commands with the actual impacted areas.
- [ ] Check whether known risks were truly fixed, deferred, or left unresolved.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch missing edge cases or tests discovered during verification.
- [ ] Revert unrelated edits if they do not belong to the fix.
- [ ] Add a final guard or test only if it directly improves confidence in the original fix.
- [ ] Clearly label unverified areas when environment limitations prevent execution.
- [ ] Prepare the completion summary only after evidence is gathered.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Ensure every claimed fix maps to a finding and every finding maps to evidence.
