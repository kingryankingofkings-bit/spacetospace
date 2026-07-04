# Frontend State and UI Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Trace component props, local state, global stores, server state, derived state, memoization, and effects.
- [ ] Check effect dependencies, cleanup, stale closures, race between requests, and state updates after unmount.
- [ ] Review forms for validation, disabled/loading states, double submit, error display, and data normalization.
- [ ] Inspect hydration assumptions, browser-only APIs, SSR boundaries, and client/server field mismatches.
- [ ] Check keyboard access, focus management, ARIA correctness, labels, contrast-sensitive state names, and semantic HTML.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch state ownership and derivation to remove duplicated or stale sources of truth.
- [ ] Fix effect dependencies and cleanup using project conventions.
- [ ] Add UI tests or component tests for interactions and failure states when available.
- [ ] Use accessible semantic controls before custom ARIA when possible.
- [ ] Preserve visual behavior unless the defect is visual.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run component, browser, or accessibility checks if available.
