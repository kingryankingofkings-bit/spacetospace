---
name: regression-test-author
description: "Creates regression tests that reproduce known bugs before fixing or after fixing them. Use when a defect needs durable test protection."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "regression, tests, bug-repro"
---

# Regression Test Author

## Mission

Turn a concrete bug report or finding into a deterministic regression test that fails before the fix and passes after the fix whenever the environment allows confirmation.

## Use this skill when

- write regression test
- reproduce bug in test
- failing test
- lock this fix
- test before fix

## Review focus

- bug reproduction
- determinism
- minimal fixtures
- observable behavior
- failure clarity

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Extract the minimal failing input, state, permission context, timing condition, or data shape from the bug evidence.
2. Locate the nearest existing test style and fixture conventions.
3. Identify whether the bug belongs in unit, integration, contract, browser, e2e, or property-based tests.
4. Check existing tests for duplicate coverage before adding new files.
5. Determine whether the test can fail for the intended reason without relying on unrelated environment state.

## Correction procedure

1. Author the smallest test that fails for the bug and names the behavior explicitly.
2. Use helper builders or fixtures rather than fragile literal setup where project norms support it.
3. Assert externally visible behavior, not internal private implementation unless no better seam exists.
4. Add bug reproduction comments only when the scenario is non-obvious.
5. After fixing, keep the test strict enough to prevent regression.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not weaken assertions or mark the new test skipped to create the appearance of coverage.

## Verification procedure

1. Run the regression test before the fix when practical and record failure.
2. Run the same test after the fix and record pass.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.

## Required output contract

- Regression test intent statement with failing condition and expected behavior.
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

- User asks: Add a regression test for this crash before fixing it.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
