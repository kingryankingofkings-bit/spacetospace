# Auth and Authorization Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/auth-authz-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Detect and correct identity and authorization flaws that let the wrong subject perform actions, see data, escalate privileges, or cross tenant boundaries.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Trace how identity is established, refreshed, stored, invalidated, and passed to downstream services.
2. Verify server-side authorization checks exist at every privileged action and data access path.
3. Check tenant, organization, team, project, ownership, and resource-level constraints separately from role checks.
4. Review default roles, anonymous behavior, expired tokens, revoked sessions, password reset, OAuth callbacks, refresh tokens, and CSRF protections.
5. Look for confused deputy flaws, IDOR, mass assignment, client-trusted role flags, and stale permission caches.

## Correction sequence

1. Add explicit server-side authorization gates near the resource access or command execution point.
2. Enforce deny-by-default behavior for missing or ambiguous identity.
3. Use centralized policy helpers when available, but verify they include the required resource context.
4. Add tests for unauthorized user, wrong tenant, insufficient role, expired session, and valid authorized user.
5. Ensure errors do not leak existence of protected resources unless intended.

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
- **OWASP Top 10 Broken Access Control:** https://owasp.org/Top10/A01_2021-Broken_Access_Control/
