# Static Analysis Triage Fixer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Read the exact analyzer rule, file, line, trace, severity, and confidence before editing.
- [ ] Inspect data flow from source to sink for security findings and type flow for type findings.
- [ ] Check whether the same pattern appears elsewhere and whether a shared helper is appropriate.
- [ ] Look for previous suppressions and evaluate whether they are still justified.
- [ ] Prioritize findings that correspond to runtime bugs, security impact, resource leaks, or dead code.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Fix root cause before considering suppression.
- [ ] Use narrow suppressions only with a specific justification and only when the analyzer is demonstrably wrong.
- [ ] Refactor repeated analyzer issues into safer APIs when the change is localized and testable.
- [ ] Add type annotations, validation, sanitization, or guard clauses where they encode real invariants.
- [ ] Re-run the specific analyzer command after patching if available.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Capture before/after analyzer finding counts for the affected rules when possible.
