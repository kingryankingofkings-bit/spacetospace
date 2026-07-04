---
name: compiler-type-contract-reviewer
description: "Reviews and fixes compile errors, type errors, interface mismatches, generics misuse, nullability problems, and contract drift. Use when builds fail or types are unreliable."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "compiler, types, contracts"
---

# Compiler Type Contract Reviewer

## Mission

Restore type and build correctness while preserving public contracts and using the type system to prevent recurrence.

## Use this skill when

- compile error
- type error
- build failing
- interface mismatch
- nullability
- generics

## Review focus

- compiler diagnostics
- type contracts
- null safety
- schema drift
- ABI/API compatibility

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Start from the first root compiler error, not cascaded diagnostics.
2. Trace symbol definitions, overloads, interface implementations, generic constraints, and generated type sources.
3. Compare runtime validation with static type declarations to find mismatches.
4. Check for unsafe casts, any/unknown escape hatches, unchecked nulls, and stale declaration files.
5. Inspect package or compiler version changes that may have altered type behavior.

## Correction procedure

1. Repair type declarations and call sites so they describe real runtime behavior.
2. Prefer narrowing, guards, discriminated unions, explicit option types, or validated parsing over unsafe casts.
3. Update generated code only through its generator when possible.
4. Keep public type changes backward compatible unless the defect is a broken contract requiring a major change.
5. Add compile-time or runtime tests for high-risk contracts.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not use broad casts, any, reflection, or disabled strictness as the default fix.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run the exact build/typecheck command that previously failed when available.

## Required output contract

- Root diagnostic summary with cascaded errors separated from primary causes.
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

- User asks: TypeScript build fails after this refactor; fix the real contract problem.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
