---
name: frontend-state-ui-reviewer
description: "Reviews frontend code for state bugs, stale renders, broken forms, hydration mismatches, accessibility regressions, client/server drift, and UI error paths. Use for web UI changes."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "frontend, react, ui"
---

# Frontend State and UI Reviewer

## Mission

Find and fix UI defects that cause wrong state, broken interactions, stale async data, accessibility gaps, or inconsistent client behavior.

## Use this skill when

- React bug
- frontend review
- UI state
- hydration
- form bug
- accessibility

## Review focus

- state management
- effects
- forms
- async UI
- accessibility
- render correctness

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Trace component props, local state, global stores, server state, derived state, memoization, and effects.
2. Check effect dependencies, cleanup, stale closures, race between requests, and state updates after unmount.
3. Review forms for validation, disabled/loading states, double submit, error display, and data normalization.
4. Inspect hydration assumptions, browser-only APIs, SSR boundaries, and client/server field mismatches.
5. Check keyboard access, focus management, ARIA correctness, labels, contrast-sensitive state names, and semantic HTML.

## Correction procedure

1. Patch state ownership and derivation to remove duplicated or stale sources of truth.
2. Fix effect dependencies and cleanup using project conventions.
3. Add UI tests or component tests for interactions and failure states when available.
4. Use accessible semantic controls before custom ARIA when possible.
5. Preserve visual behavior unless the defect is visual.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not solve frontend state bugs by forcing full page reloads unless that is the product contract.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run component, browser, or accessibility checks if available.

## Required output contract

- UI state trace with event, state transition, expected result, actual result, and fix.
- Patch plan before edits when the fix is non-trivial or touches multiple files.
- Implemented patch summary that maps each change back to a finding.
- Verification log with exact commands or static review steps and results.
- Residual risk list and rollback notes when appropriate.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: Review this React UI for stale state and form bugs.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
