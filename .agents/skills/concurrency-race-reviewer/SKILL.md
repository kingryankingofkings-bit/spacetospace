---
name: concurrency-race-reviewer
description: "Reviews async, threaded, event-driven, multiplayer, and distributed code for race conditions, deadlocks, stale state, and ordering bugs. Use when timing or parallelism matters."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "concurrency, race, async"
---

# Concurrency Race Reviewer

## Mission

Find and fix bugs caused by interleavings, async ordering, shared mutable state, locks, queues, retries, idempotency, and distributed coordination.

## Use this skill when

- race condition
- concurrency
- deadlock
- async bug
- stale state
- parallel
- event ordering

## Review focus

- ordering
- shared state
- locks
- async lifecycle
- idempotency
- distributed races

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Identify shared mutable state, caches, singletons, connection state, global stores, queues, workers, timers, and event listeners.
2. Trace lifecycle: create, subscribe, start, cancel, retry, timeout, cleanup, and dispose.
3. Check lock ordering, await gaps, callback reentrancy, duplicate messages, out-of-order delivery, and lost updates.
4. Review idempotency of retries, event handlers, network reconciliation, and database writes.
5. Look for races between UI unmount, request completion, state updates, and background tasks.

## Correction procedure

1. Use explicit synchronization, atomic operations, transactional updates, deduplication keys, or state machines as appropriate.
2. Cancel or ignore stale async results safely.
3. Make retries idempotent and safe under duplicate delivery.
4. Add tests with controlled scheduling, fake timers, repeated runs, or deterministic event order where possible.
5. Prefer local ownership and immutable updates over shared mutable state.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not add sleeps or arbitrary delays as the primary race-condition fix.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run repeated or stress checks if available and log nondeterministic limitations.

## Required output contract

- Interleaving analysis with shared state, race window, patch, and deterministic verification.
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

- User asks: Sometimes the matchmaking state gets overwritten; find the race.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
