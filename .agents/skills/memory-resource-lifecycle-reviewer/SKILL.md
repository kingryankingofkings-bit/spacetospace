---
name: memory-resource-lifecycle-reviewer
description: "Reviews memory leaks, event listener leaks, file/socket handles, GPU resources, subscriptions, timers, and lifecycle cleanup. Use when resources are allocated or retained."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "memory, resources, lifecycle"
---

# Memory and Resource Lifecycle Reviewer

## Mission

Find resource lifecycle defects and apply cleanup, ownership, disposal, and scope fixes that prevent leaks, exhaustion, and use-after-dispose behavior.

## Use this skill when

- memory leak
- resource leak
- event listener
- subscription
- dispose
- socket leak
- GPU leak

## Review focus

- ownership
- allocation
- cleanup
- lifecycle
- resource exhaustion
- retention

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Inventory allocations: listeners, timers, subscriptions, sockets, files, database connections, workers, GPU buffers/textures, audio nodes, caches, and observers.
2. Trace lifecycle from creation through all success, error, cancellation, unmount, and shutdown paths.
3. Check whether cleanup is idempotent and safe after partial initialization.
4. Look for retained closures, global registries, caches without bounds, detached DOM/canvas references, and unclosed streams.
5. Review ownership transfer and disposal conventions in the framework or engine.

## Correction procedure

1. Add deterministic cleanup in finally blocks, disposal hooks, effect cleanup functions, or owner destructors as appropriate.
2. Make cleanup idempotent and tolerant of partially initialized state.
3. Bound caches and remove stale entries.
4. Avoid retaining heavyweight resources beyond their intended owner.
5. Add leak regression tests or lifecycle tests where feasible.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not rely solely on garbage collection for resources that require explicit release.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Use lifecycle tests, repeated mount/unmount, or resource counters when available.

## Required output contract

- Resource lifecycle trace with allocation site, owner, cleanup path, leak risk, and patch.
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

- User asks: Review this React canvas component for leaks and fix them.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
