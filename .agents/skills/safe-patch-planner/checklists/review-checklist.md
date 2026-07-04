# Safe Patch Planner — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Define the defect, impacted behavior, root-cause hypothesis, affected files, and non-goals.
- [ ] Identify irreversible operations, migrations, production settings, external APIs, and compatibility-sensitive files.
- [ ] Assess whether a feature flag, compatibility shim, or phased patch is safer than a direct replacement.
- [ ] Determine test and rollback steps before edits.
- [ ] Identify manual confirmation points for destructive or ambiguous changes.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Produce a patch plan before touching files when the change is high-risk.
- [ ] Break large fixes into reviewable phases and verify each phase independently.
- [ ] Prefer additive compatibility layers over breaking changes when feasible.
- [ ] Document assumptions and constraints directly in the plan.
- [ ] After patching, reconcile implementation against the original plan.

## Final verification

- [ ] Validate the plan against project docs, tests, CI, and deployment constraints.
- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
