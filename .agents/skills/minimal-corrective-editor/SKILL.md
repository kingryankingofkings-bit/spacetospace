---
name: minimal-corrective-editor
description: "Applies narrowly scoped code fixes for confirmed bugs while avoiding unnecessary rewrites. Use when a defect is understood and the safest correction is a small patch."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "patching, minimal, fix"
---

# Minimal Corrective Editor

## Mission

Make the smallest correct edit that fixes a confirmed defect, preserves project style, and leaves the codebase easier to verify than before.

## Use this skill when

- apply fix
- small patch
- correct this bug
- minimal edit
- surgical fix

## Review focus

- surgical patching
- style preservation
- diff hygiene
- root-cause alignment

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Confirm the finding, target file, intended behavior, and verification command before editing.
2. Identify the existing idiom in nearby code for naming, errors, logging, validation, async handling, and tests.
3. Check whether a one-line change has hidden compatibility or security implications.
4. Inspect generated or vendored status before editing a file.
5. Review imports and dependency effects caused by the patch.

## Correction procedure

1. Edit only the lines needed to fix the confirmed issue and any directly required tests.
2. Preserve formatting and project conventions.
3. Remove dead branches or unused imports introduced by the fix.
4. Avoid opportunistic cleanup unrelated to the defect.
5. Prepare a rollback-friendly diff.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not rewrite modules, rename APIs, or rearrange files as part of a surgical bug fix.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Inspect final diff for unintended whitespace, formatting, or unrelated changes.

## Required output contract

- Minimal patch summary with before/after behavior and exact verification.
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

- User asks: We know the null check is wrong; patch it cleanly.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
