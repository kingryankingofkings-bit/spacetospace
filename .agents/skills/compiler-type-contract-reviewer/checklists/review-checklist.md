# Compiler Type Contract Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Start from the first root compiler error, not cascaded diagnostics.
- [ ] Trace symbol definitions, overloads, interface implementations, generic constraints, and generated type sources.
- [ ] Compare runtime validation with static type declarations to find mismatches.
- [ ] Check for unsafe casts, any/unknown escape hatches, unchecked nulls, and stale declaration files.
- [ ] Inspect package or compiler version changes that may have altered type behavior.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Repair type declarations and call sites so they describe real runtime behavior.
- [ ] Prefer narrowing, guards, discriminated unions, explicit option types, or validated parsing over unsafe casts.
- [ ] Update generated code only through its generator when possible.
- [ ] Keep public type changes backward compatible unless the defect is a broken contract requiring a major change.
- [ ] Add compile-time or runtime tests for high-risk contracts.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run the exact build/typecheck command that previously failed when available.
