# Security Code Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Identify trust boundaries: browser/server, client/server, public/internal APIs, tenant boundaries, admin/user paths, file uploads, secrets, and third-party inputs.
- [ ] Trace untrusted data through parsing, validation, authorization, storage, rendering, and command/query execution.
- [ ] Review authentication, authorization, session handling, input validation, output encoding, crypto usage, logging, configuration, dependency risk, SSRF, deserialization, and file handling.
- [ ] Check whether security controls live server-side and cannot be bypassed by client modification.
- [ ] Search for known dangerous functions and framework-specific insecure patterns.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Fix root vulnerabilities with validation, authorization checks, safe APIs, encoding, parameterization, least privilege, or secure defaults.
- [ ] Add tests that prove unauthorized, malformed, or malicious inputs are rejected.
- [ ] Avoid homemade cryptography or custom parsers when mature safe APIs exist.
- [ ] Mask sensitive data in logs and outputs.
- [ ] When a full fix requires design changes, add safe guardrails and document remaining exposure.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Verify negative security tests and confirm the legitimate happy path still works.
