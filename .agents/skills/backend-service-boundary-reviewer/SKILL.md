---
name: backend-service-boundary-reviewer
description: "Reviews backend services for boundary mistakes, validation gaps, retries, idempotency, transactions, queues, API layering, and integration bugs. Use for service-side code."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "backend, services, boundaries"
---

# Backend Service Boundary Reviewer

## Mission

Ensure backend service boundaries are robust, validated, observable, idempotent, and consistent under failure and integration pressure.

## Use this skill when

- backend review
- service boundary
- microservice
- queue
- worker
- integration bug

## Review focus

- service boundaries
- validation
- idempotency
- integrations
- queues
- failure modes

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Identify inbound and outbound boundaries: HTTP, RPC, queues, jobs, database, cache, third-party APIs, websockets, and file storage.
2. Check validation, auth, authorization, rate limiting, timeouts, retries, circuit breakers, and idempotency at each boundary.
3. Review worker/job logic for duplicate delivery, poison messages, dead-letter handling, and partial failure.
4. Check transaction boundaries across database and external side effects.
5. Inspect integration contracts and error mapping.

## Correction procedure

1. Add boundary validation and explicit error handling close to the boundary.
2. Make side-effecting operations idempotent or protected with dedupe keys.
3. Set bounded timeouts and retries using project conventions.
4. Add integration or contract tests for boundary behavior.
5. Record when full reliability requires design work beyond a local patch.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not make external calls inside database transactions unless the design explicitly requires and handles it.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Test failure and duplicate-delivery behavior when practical.

## Required output contract

- Service boundary checklist with input, control, side effect, failure mode, and fix.
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

- User asks: Review this worker and API handler for integration bugs.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
