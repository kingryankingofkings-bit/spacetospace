# Business Invariant Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Extract domain rules from tests, docs, constants, admin UI, product names, schemas, and adjacent code.
- [ ] Identify invariants such as one reward per event, non-negative balances, ownership, cooldowns, caps, tiers, eligibility, and progression gates.
- [ ] Check bypass paths through admin tools, retries, imports, bulk operations, offline clients, and stale caches.
- [ ] Review rounding, currency, item rarity, inventory capacity, and time-window calculations.
- [ ] Find missing auditability for sensitive rule changes.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch rule enforcement at authoritative points, not only presentation layers.
- [ ] Add invariant assertions or tests for prohibited states.
- [ ] Use existing domain terminology and constants instead of duplicating magic values.
- [ ] Protect economic or entitlement changes with compatibility and audit notes.
- [ ] Document assumptions when rules are inferred rather than specified.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run tests that cover both eligible and ineligible cases plus boundary values.
