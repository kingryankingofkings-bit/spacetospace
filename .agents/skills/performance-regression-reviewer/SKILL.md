---
name: performance-regression-reviewer
description: "Reviews code for performance regressions, unnecessary allocations, slow queries, render-loop costs, algorithmic blowups, and inefficient IO. Use when speed or latency matters."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "performance, latency, optimization"
---

# Performance Regression Reviewer

## Mission

Find likely performance defects, validate them with available measurements, and patch bottlenecks without premature or speculative optimization.

## Use this skill when

- performance review
- slow
- latency
- regression
- benchmark
- frame rate
- N+1

## Review focus

- hot paths
- algorithmic complexity
- allocation
- IO
- render loops
- queries

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Identify critical paths from profiling data, code structure, request paths, render loops, or user-reported symptoms.
2. Check loops, nested scans, repeated serialization, unnecessary allocations, blocking IO, sync-over-async, cache misses, and repeated expensive initialization.
3. Review database queries, network chatter, bundle size, asset loading, and render/update frequency.
4. Differentiate measurable bottlenecks from theoretical micro-optimizations.
5. Check for performance/security tradeoffs before caching sensitive or authorization-dependent data.

## Correction procedure

1. Fix algorithmic or IO inefficiencies with clear before/after rationale.
2. Add caching only with invalidation, memory bounds, and authorization safety.
3. Move expensive work out of per-frame or per-request hot paths where safe.
4. Add benchmarks or performance tests for critical regressions when project tooling supports it.
5. Preserve correctness first, then optimize.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not claim speedups without measurement or a clearly static complexity proof.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Record benchmark/profiling commands and caveats when measurements are available.

## Required output contract

- Performance finding with hot path, cost model, evidence, optimization, and verification.
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

- User asks: Find why this endpoint got slower after the change and patch it.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
