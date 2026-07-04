# Injection and Input Validation Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Inventory all external inputs: HTTP, WebSocket, WebRTC, files, query strings, forms, headers, cookies, config, environment, CLI args, third-party callbacks, and generated AI outputs.
- [ ] Trace data to dangerous sinks: SQL, shell, template/rendering, HTML, URLs, filesystem, deserialization, eval, regex, logs, and outbound HTTP.
- [ ] Check for context-specific output encoding and parameterized APIs.
- [ ] Verify validation happens before normalization-sensitive comparisons and before side effects.
- [ ] Look for blacklist validation, partial sanitization, double decoding, and inconsistent server/client checks.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Use parameterized queries, safe command APIs, strict URL parsing, path normalization with base-directory enforcement, safe template APIs, and context-aware encoding.
- [ ] Implement allowlist validation for constrained values and schema validation for structured objects.
- [ ] Reject ambiguous encodings and malformed inputs early.
- [ ] Add malicious and boundary-case tests for rejected inputs and valid inputs.
- [ ] Preserve detailed internal logs without returning sensitive parser detail to attackers.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Verify the same input cannot reach the dangerous sink through alternate routes.
