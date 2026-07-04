# Diff Impact Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Read the diff first, then inspect surrounding code for each changed symbol, public interface, and dependency edge.
- [ ] Determine whether the change alters behavior, data shape, error handling, persistence, performance, security posture, or compatibility.
- [ ] Trace at least one caller and one callee for non-trivial changes.
- [ ] Check whether tests changed in proportion to behavior risk.
- [ ] Look for partial edits: renamed symbols not updated everywhere, new options not documented, error branches not handled, and config flags not wired.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch only defects attributable to the diff unless a pre-existing issue blocks correct behavior.
- [ ] Add targeted regression tests for newly discovered breakage when test infrastructure exists.
- [ ] Preserve the author intent and commit scope.
- [ ] If fixing requires larger design work, provide a blocking finding plus a minimal safe guard if possible.
- [ ] Update docs or examples only when the diff changed a user-facing contract.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Compare final diff against original diff to confirm the review did not introduce unrelated churn.
