# Secrets and Configuration Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Search for tokens, keys, passwords, private URLs, certificates, connection strings, and secrets embedded in source, tests, examples, logs, CI, Docker, and config files.
- [ ] Check that required environment variables are validated at startup with safe error messages.
- [ ] Review defaults for debug mode, CORS, TLS, admin accounts, auth bypass, telemetry, and feature flags.
- [ ] Inspect logging and error handling for accidental secret or PII exposure.
- [ ] Check whether sample files clearly distinguish placeholders from real credentials.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Remove hardcoded secrets and replace with secret manager or environment references.
- [ ] Add configuration schema validation and fail-fast startup for missing critical config.
- [ ] Redact sensitive values in logs and error paths.
- [ ] Make insecure development defaults impossible or explicit in production.
- [ ] Document required configuration without exposing real secrets.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run secret scanners or targeted grep patterns if available and record remaining suspected exposures.
