---
name: refactor-regression-control
description: "Reviews refactors for accidental behavior changes, missing compatibility updates, and broken call sites. Use when code was reorganized, renamed, extracted, or upgraded."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "refactor, regression, compatibility"
---

# Refactor Regression Control

## Mission

Ensure refactors remain behavior-preserving unless intentionally changing behavior, and correct regressions introduced by movement, extraction, renaming, or abstraction.

## Use this skill when

- refactor review
- rename
- extract
- reorganize
- upgrade refactor
- behavior preserving

## Review focus

- behavior preservation
- call-site completeness
- compatibility
- dead paths
- migration risk

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Compare pre-refactor intent with post-refactor behavior by reading tests, docs, and public contracts.
2. Trace renamed, moved, or extracted symbols across imports, DI wiring, serialization, reflection, routing, and config.
3. Check that defaults, error behavior, side effects, ordering, and lifecycle hooks were preserved.
4. Find duplicate old/new paths that can diverge.
5. Look for stale docs, fixtures, snapshots, and generated files after the refactor.

## Correction procedure

1. Patch missed call sites, lost side effects, broken imports, or changed defaults.
2. Add characterization tests when the original behavior is important but not covered.
3. Keep compatibility shims when external callers may still use old names.
4. Remove dead compatibility only when it is proven internal and safe.
5. Record intentional behavior changes separately from accidental regressions.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not continue refactoring while attempting to stabilize a refactor regression.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run tests for both old and new entry points when compatibility is preserved.

## Required output contract

- Refactor regression table with intended changes, accidental changes, and fixes.
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

- User asks: Review this module extraction for accidental breakage.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
