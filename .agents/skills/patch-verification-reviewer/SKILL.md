---
name: patch-verification-reviewer
description: "Verifies that patches actually fix the reported issue and do not introduce regressions. Use after code changes, generated fixes, or manual edits."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "verification, patch, regression"
---

# Patch Verification Reviewer

## Mission

Audit the final patch against the original finding, test evidence, diff scope, and residual risks before reporting completion.

## Use this skill when

- verify patch
- review the fix
- did this fix it
- post-patch check
- regression check

## Review focus

- post-change verification
- diff audit
- test evidence
- regression risk
- completion criteria

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Re-read the original bug report or finding and restate the acceptance criteria.
2. Inspect final diff for scope creep, unrelated edits, missing tests, and accidental behavior changes.
3. Trace the patched path and at least one unaffected path.
4. Compare verification commands with the actual impacted areas.
5. Check whether known risks were truly fixed, deferred, or left unresolved.

## Correction procedure

1. Patch missing edge cases or tests discovered during verification.
2. Revert unrelated edits if they do not belong to the fix.
3. Add a final guard or test only if it directly improves confidence in the original fix.
4. Clearly label unverified areas when environment limitations prevent execution.
5. Prepare the completion summary only after evidence is gathered.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not equate clean formatting or no visible errors with correctness.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Ensure every claimed fix maps to a finding and every finding maps to evidence.

## Required output contract

- Verification report with acceptance criteria, patch mapping, commands, results, and residual risks.
- Residual risk list and rollback notes when appropriate.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: Check that your fix really resolves the bug.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
