---
name: database-data-integrity-reviewer
description: "Reviews database access, migrations, transactions, constraints, indexes, query correctness, and data integrity risks. Use when storage, persistence, or migrations change."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "database, migrations, integrity"
---

# Database Data Integrity Reviewer

## Mission

Prevent data loss, corruption, inconsistency, unsafe migrations, and incorrect query behavior by reviewing persistence code and correcting safe defects.

## Use this skill when

- database review
- migration
- transaction
- data integrity
- query bug
- schema

## Review focus

- transactions
- constraints
- migrations
- query correctness
- indexes
- data loss

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Review schema, migrations, ORM mappings, query builders, raw SQL, seed data, data access layers, and tests together.
2. Check whether invariants are enforced by database constraints, application logic, or both.
3. Inspect transactions for atomicity, isolation, retries, lock ordering, and partial failure behavior.
4. Review migrations for reversibility, backfill safety, default values, nullability, large-table risk, and online deployment constraints.
5. Check queries for incorrect joins, missing tenant filters, N+1 behavior, pagination drift, and stale denormalized data.

## Correction procedure

1. Add constraints or transactional guards when safe and compatible with existing data.
2. Patch query filters, joins, ordering, limits, and parameterization.
3. Add data-integrity tests and migration tests when available.
4. Separate schema changes, backfills, and application reads/writes when a zero-downtime pattern is needed.
5. Flag data cleanup or irreversible migration steps for human review.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not run migrations, deletes, truncations, or data modifications without explicit instruction and backup/rollback context.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Validate migration up/down or dry-run behavior when project tooling supports it.

## Required output contract

- Data-integrity risk report with invariant, enforcement layer, failing path, fix, and migration risk.
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

- User asks: Review this migration and repository method for data-loss bugs.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
