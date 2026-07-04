# Injection and Input Validation Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/injection-input-validation-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find input-handling bugs that allow data to become code, queries, paths, markup, network targets, or unsafe object state, then patch with allowlists and safe APIs.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Inventory all external inputs: HTTP, WebSocket, WebRTC, files, query strings, forms, headers, cookies, config, environment, CLI args, third-party callbacks, and generated AI outputs.
2. Trace data to dangerous sinks: SQL, shell, template/rendering, HTML, URLs, filesystem, deserialization, eval, regex, logs, and outbound HTTP.
3. Check for context-specific output encoding and parameterized APIs.
4. Verify validation happens before normalization-sensitive comparisons and before side effects.
5. Look for blacklist validation, partial sanitization, double decoding, and inconsistent server/client checks.

## Correction sequence

1. Use parameterized queries, safe command APIs, strict URL parsing, path normalization with base-directory enforcement, safe template APIs, and context-aware encoding.
2. Implement allowlist validation for constrained values and schema validation for structured objects.
3. Reject ambiguous encodings and malformed inputs early.
4. Add malicious and boundary-case tests for rejected inputs and valid inputs.
5. Preserve detailed internal logs without returning sensitive parser detail to attackers.

## Evidence standards

- A finding needs a file path, symbol or line context, observed code behavior, expected behavior, and impact.
- A fix needs a direct mapping to a finding and a verification step.
- A security finding needs a trust boundary and affected asset or capability.
- A performance finding needs a measurement, profiler trace, benchmark, or static complexity proof.
- A compatibility finding needs an old/new contract comparison.

## Escalation rules

Escalate instead of patching when the fix requires product policy, irreversible data changes, public API breakage, secret rotation, production deployment action, legal/licensing judgment, or major architecture migration.

## Source references

- **Google Engineering Practices - Code Review:** https://google.github.io/eng-practices/review/
- **Google Engineering Practices - Standard of Code Review:** https://google.github.io/eng-practices/review/reviewer/standard.html
- **NIST SP 800-218 Secure Software Development Framework:** https://csrc.nist.gov/pubs/sp/800/218/final
- **OWASP Top Ten Web Application Security Risks:** https://owasp.org/www-project-top-ten/
- **Agent Skills Specification:** https://agentskills.io/specification
- **Google Antigravity Skills Documentation:** https://antigravity.google/docs/skills
- **OWASP Input Validation Cheat Sheet:** https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
