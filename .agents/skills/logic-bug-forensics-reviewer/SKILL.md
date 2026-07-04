---
name: logic-bug-forensics-reviewer
description: "Finds and fixes incorrect branching, off-by-one errors, bad state transitions, impossible conditions, and broken business logic. Use when behavior is wrong but code compiles."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "logic, bug, forensics"
---

# Logic Bug Forensics Reviewer

## Mission

Perform forensic reasoning over program behavior to find logic defects, prove the failing path, and implement the smallest correction that restores intended behavior.

## Use this skill when

- logic bug
- wrong behavior
- off by one
- state machine
- condition is wrong
- game rule bug

## Review focus

- branch conditions
- state transitions
- boundary cases
- invariants
- temporal ordering

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Identify the intended invariant from tests, docs, naming, UI behavior, API contracts, or adjacent code.
2. Construct a control-flow path for the failing scenario and at least one non-failing scenario.
3. Check comparisons, negations, nullish defaults, time units, indexing, ordering, sorting, rounding, and enum fallthrough.
4. Look for stale state, double application, missed reset, late validation, and incorrect cache invalidation.
5. Review previous fixes in adjacent code to infer established patterns.

## Correction procedure

1. Patch the faulty predicate, state update, ordering, or invariant guard directly.
2. Add regression tests for boundary values and the original failing case.
3. Prefer named helper predicates when boolean expressions are hard to audit.
4. Update comments only when they clarify a non-obvious invariant.
5. Avoid broader refactors unless the current structure prevents a safe fix.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not mask logic errors by broad try/catch, default values, or silent fallback paths.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Create a simple truth table or state table for complex conditional fixes.

## Required output contract

- Failing path explanation with expected vs actual behavior.
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

- User asks: Players sometimes receive rewards twice; find the logic bug and fix it.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
