---
name: runtime-reproduction-debugger
description: "Reproduces runtime bugs, crashes, exceptions, flaky behavior, and wrong outputs before patching. Use when static review is insufficient or the defect is environment-dependent."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "debugging, runtime, reproduction"
---

# Runtime Reproduction Debugger

## Mission

Convert runtime symptoms into a controlled reproduction, isolate the failing path, and patch with evidence from logs, traces, assertions, or debugger output.

## Use this skill when

- runtime bug
- crash
- exception
- flaky
- cannot reproduce
- debug this

## Review focus

- reproduction
- observability
- minimal failing case
- environment drift
- stack traces

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Capture exact command, input, environment variables, seed, browser/device, OS, version, and data state needed to reproduce.
2. Read stack traces from the root cause frame outward rather than editing the final thrown line only.
3. Add temporary local diagnostics only when they are removed or converted to appropriate logging before final patch.
4. Minimize the reproduction to reduce unrelated variables.
5. Check for race, time, random seed, cache, locale, timezone, and network dependencies.

## Correction procedure

1. Patch the root failing path and keep reproduction artifacts in tests or documented manual steps.
2. Add defensive checks only when they preserve intended behavior and expose invalid states appropriately.
3. Remove temporary debug code before final output.
4. Prefer assertions in tests over production logs for proving correctness.
5. For flaky bugs, widen verification through repeated or seeded runs when possible.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not treat an unreproduced symptom as fixed solely because a plausible code change was made.

## Verification procedure

1. Record reproduction before patch when possible.
2. Run the exact failing command or scenario after patch.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.

## Required output contract

- Reproduction recipe with observed failure, suspected root cause, patch, and post-fix result.
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

- User asks: This crashes after login; reproduce it and fix the cause.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
