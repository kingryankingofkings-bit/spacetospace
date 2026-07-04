# Code Review Orchestrator — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Map project languages, frameworks, build tools, package managers, test runners, deployment surfaces, and generated-code boundaries.
- [ ] Identify high-risk files first: auth, payments, persistence, concurrency, networking, security-sensitive parsing, migrations, config, build scripts, and public APIs.
- [ ] Segment findings into correctness, safety, security, maintainability, performance, reliability, test coverage, and release-readiness categories.
- [ ] Choose specialist review skills based on evidence rather than using every skill indiscriminately.
- [ ] Maintain an issue ledger so duplicate findings collapse into one root-cause item.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Prefer small, high-confidence patches for defects with concrete evidence.
- [ ] Batch related edits only when they share a single root cause and can be verified together.
- [ ] Escalate risky architectural changes into patch plans rather than performing speculative rewrites.
- [ ] Add or update tests when the defect can be reproduced through automated checks.
- [ ] Re-run relevant checks after each meaningful patch set.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Confirm every specialist review output is either fixed, explicitly deferred, or rejected with a reason.
