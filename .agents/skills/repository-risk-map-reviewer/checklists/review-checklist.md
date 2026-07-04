# Repository Risk Map Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Read root manifests, workspace files, package metadata, build scripts, test configuration, CI workflows, container files, and docs before opening many source files.
- [ ] Classify modules by role: UI, API, persistence, jobs, engine/runtime, networking, auth, integrations, tooling, and infrastructure.
- [ ] Find entry points, dependency direction, public contracts, generated artifacts, vendored code, migration folders, and codegen output.
- [ ] Locate flaky or absent tests by comparing critical modules with available test files.
- [ ] Identify files with high churn or obvious complexity if Git history is accessible.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Do not patch during the initial map unless a trivial, high-confidence breakage blocks inspection.
- [ ] Create a prioritized review route from highest risk and easiest verification to lower-risk cleanup.
- [ ] Mark files that require human confirmation before change, such as migrations, protocol schemas, save formats, and security policies.
- [ ] Recommend missing review skills for each risk zone.
- [ ] Capture prerequisite setup commands only after reading project docs and package metadata.

## Final verification

- [ ] Confirm the map by sampling representative files from each major module.
- [ ] Cross-check claimed build/test commands against package scripts or CI before recommending them.
- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
