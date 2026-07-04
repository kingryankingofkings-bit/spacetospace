---
name: injection-input-validation-reviewer
description: "Reviews untrusted inputs for injection, unsafe parsing, XSS, SQL or command injection, path traversal, SSRF, and validation gaps. Use when data crosses trust boundaries."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "injection, validation, xss"
---

# Injection and Input Validation Reviewer

## Mission

Find input-handling bugs that allow data to become code, queries, paths, markup, network targets, or unsafe object state, then patch with allowlists and safe APIs.

## Use this skill when

- input validation
- SQL injection
- XSS
- command injection
- path traversal
- SSRF
- parser bug

## Review focus

- untrusted input
- validation
- encoding
- safe sinks
- parser boundaries

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Inventory all external inputs: HTTP, WebSocket, WebRTC, files, query strings, forms, headers, cookies, config, environment, CLI args, third-party callbacks, and generated AI outputs.
2. Trace data to dangerous sinks: SQL, shell, template/rendering, HTML, URLs, filesystem, deserialization, eval, regex, logs, and outbound HTTP.
3. Check for context-specific output encoding and parameterized APIs.
4. Verify validation happens before normalization-sensitive comparisons and before side effects.
5. Look for blacklist validation, partial sanitization, double decoding, and inconsistent server/client checks.

## Correction procedure

1. Use parameterized queries, safe command APIs, strict URL parsing, path normalization with base-directory enforcement, safe template APIs, and context-aware encoding.
2. Implement allowlist validation for constrained values and schema validation for structured objects.
3. Reject ambiguous encodings and malformed inputs early.
4. Add malicious and boundary-case tests for rejected inputs and valid inputs.
5. Preserve detailed internal logs without returning sensitive parser detail to attackers.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not attempt to sanitize for every downstream context with one generic helper.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Verify the same input cannot reach the dangerous sink through alternate routes.

## Required output contract

- Input-to-sink trace with validation gaps, safe API replacement, and negative tests.
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

- User asks: Review this file upload endpoint for traversal and injection bugs.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
