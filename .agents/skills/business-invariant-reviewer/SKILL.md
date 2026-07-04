---
name: business-invariant-reviewer
description: "Reviews domain rules, game rules, entitlement logic, pricing, rewards, quotas, progression, and data invariants for mistakes. Use when code implements product or game rules."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "business-logic, game-rules, invariants"
---

# Business Invariant Reviewer

## Mission

Find defects where code violates product, economy, gameplay, or domain invariants and patch them without altering unrelated rules.

## Use this skill when

- business logic
- game rule
- entitlement
- quota
- reward
- economy
- invariant

## Review focus

- domain invariants
- entitlements
- pricing
- rewards
- quotas
- game economy
- rule consistency

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Extract domain rules from tests, docs, constants, admin UI, product names, schemas, and adjacent code.
2. Identify invariants such as one reward per event, non-negative balances, ownership, cooldowns, caps, tiers, eligibility, and progression gates.
3. Check bypass paths through admin tools, retries, imports, bulk operations, offline clients, and stale caches.
4. Review rounding, currency, item rarity, inventory capacity, and time-window calculations.
5. Find missing auditability for sensitive rule changes.

## Correction procedure

1. Patch rule enforcement at authoritative points, not only presentation layers.
2. Add invariant assertions or tests for prohibited states.
3. Use existing domain terminology and constants instead of duplicating magic values.
4. Protect economic or entitlement changes with compatibility and audit notes.
5. Document assumptions when rules are inferred rather than specified.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not invent product policy; infer cautiously and flag ambiguities.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run tests that cover both eligible and ineligible cases plus boundary values.

## Required output contract

- Invariant table with rule, enforcement point, bypass path, patch, and test coverage.
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

- User asks: Review reward-granting logic for duplicate or exploitable payouts.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
