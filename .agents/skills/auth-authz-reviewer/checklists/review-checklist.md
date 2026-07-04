# Auth and Authorization Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Trace how identity is established, refreshed, stored, invalidated, and passed to downstream services.
- [ ] Verify server-side authorization checks exist at every privileged action and data access path.
- [ ] Check tenant, organization, team, project, ownership, and resource-level constraints separately from role checks.
- [ ] Review default roles, anonymous behavior, expired tokens, revoked sessions, password reset, OAuth callbacks, refresh tokens, and CSRF protections.
- [ ] Look for confused deputy flaws, IDOR, mass assignment, client-trusted role flags, and stale permission caches.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add explicit server-side authorization gates near the resource access or command execution point.
- [ ] Enforce deny-by-default behavior for missing or ambiguous identity.
- [ ] Use centralized policy helpers when available, but verify they include the required resource context.
- [ ] Add tests for unauthorized user, wrong tenant, insufficient role, expired session, and valid authorized user.
- [ ] Ensure errors do not leak existence of protected resources unless intended.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run or author negative access-control tests before marking fixed.
