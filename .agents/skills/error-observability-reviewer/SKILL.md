---
name: error-observability-reviewer
description: "Reviews error handling, logging, metrics, tracing, retries, alerts, and user-facing failure paths for hidden bugs and debugging gaps. Use when failures are hard to diagnose."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "errors, observability, reliability"
---

# Error Handling and Observability Reviewer

## Mission

Ensure failures are handled intentionally, surfaced safely, and observable enough to debug without leaking sensitive information or hiding defects.

## Use this skill when

- error handling
- logging
- observability
- trace
- metrics
- retry
- swallow errors

## Review focus

- exceptions
- logs
- metrics
- tracing
- retries
- alerts
- failure UX

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Find swallowed exceptions, broad catch blocks, missing awaits, unhandled promise rejections, panic paths, and inconsistent error translations.
2. Check retry loops for backoff, jitter, idempotency, max attempts, cancellation, and error classification.
3. Review logs for correlation IDs, context, severity, redaction, and actionability.
4. Verify user-facing errors are safe and useful without exposing secrets or internals.
5. Check whether metrics and traces cover critical failure paths.

## Correction procedure

1. Narrow catch blocks and preserve root cause through wrapping or structured error fields.
2. Add actionable logs or metrics at service boundaries and critical state transitions.
3. Make retries bounded, classified, cancellable, and idempotent.
4. Redact secrets and PII from errors and logs.
5. Add tests for failure paths, not only successful paths.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not hide failures by returning empty defaults unless that is the documented contract.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Trigger or unit-test representative failure paths where possible.

## Required output contract

- Failure-path review with error source, current handling, risk, patch, and observability improvement.
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

- User asks: Review this service for swallowed errors and bad retries.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
