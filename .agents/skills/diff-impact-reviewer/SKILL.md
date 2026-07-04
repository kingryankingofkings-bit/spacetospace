---
name: diff-impact-reviewer
description: "Reviews changed files and pull requests for defects, gaps, regressions, missing tests, and unsafe side effects. Use for PR review, staged changes, or branch diffs."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "diff, pull-request, review"
---

# Diff Impact Reviewer

## Mission

Review a diff with context, detect direct and indirect breakage, and patch defects without expanding the change beyond the impact boundary.

## Use this skill when

- review this PR
- review my diff
- staged changes
- pull request review
- changed files

## Review focus

- changed code
- callers/callees
- side effects
- contract changes
- test delta

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Read the diff first, then inspect surrounding code for each changed symbol, public interface, and dependency edge.
2. Determine whether the change alters behavior, data shape, error handling, persistence, performance, security posture, or compatibility.
3. Trace at least one caller and one callee for non-trivial changes.
4. Check whether tests changed in proportion to behavior risk.
5. Look for partial edits: renamed symbols not updated everywhere, new options not documented, error branches not handled, and config flags not wired.

## Correction procedure

1. Patch only defects attributable to the diff unless a pre-existing issue blocks correct behavior.
2. Add targeted regression tests for newly discovered breakage when test infrastructure exists.
3. Preserve the author intent and commit scope.
4. If fixing requires larger design work, provide a blocking finding plus a minimal safe guard if possible.
5. Update docs or examples only when the diff changed a user-facing contract.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not review only the visible hunks when the change affects hidden call paths.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Compare final diff against original diff to confirm the review did not introduce unrelated churn.

## Required output contract

- PR review findings grouped by blocking, important, and nit categories.
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

- User asks: Review this PR and fix any obvious bug before I merge.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
