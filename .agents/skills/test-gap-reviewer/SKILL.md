---
name: test-gap-reviewer
description: "Reviews tests for missing coverage, weak assertions, untested edge cases, brittle fixtures, and gaps around fixed bugs. Use when code may be under-tested."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "tests, coverage, quality"
---

# Test Gap Reviewer

## Mission

Find where tests fail to protect important behavior and propose or implement targeted tests that would catch the reviewed defect class.

## Use this skill when

- test coverage
- missing tests
- weak tests
- test gap
- edge cases
- quality gate

## Review focus

- coverage relevance
- assertion strength
- edge cases
- test isolation
- regression protection

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Map critical behavior to existing tests by feature, module, public API, and bug history.
2. Identify tests that execute code but do not assert meaningful outcomes.
3. Check edge cases: empty, null, missing, duplicate, invalid, max/min, concurrent, permission-denied, network-failure, and migration scenarios.
4. Look for over-mocked tests that cannot catch integration breakage.
5. Inspect whether tests reproduce the user's reported issue or merely test the happy path.

## Correction procedure

1. Add focused tests with clear arrange-act-assert structure.
2. Prefer deterministic tests over snapshots or broad golden outputs unless snapshots are the project norm and reviewed carefully.
3. Reuse existing fixtures and helper patterns to reduce test maintenance burden.
4. Strengthen assertions before increasing test count.
5. Mark impossible-to-automate coverage gaps with a manual verification checklist.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not add shallow tests that only lock in implementation details and miss observable behavior.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run the new or modified tests alone first, then the relevant suite.

## Required output contract

- Test gap matrix mapping behavior risk to existing coverage and proposed tests.
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

- User asks: Review whether this fix has enough tests and add missing ones.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
