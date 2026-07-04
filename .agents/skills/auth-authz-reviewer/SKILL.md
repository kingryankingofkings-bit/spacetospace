---
name: auth-authz-reviewer
description: "Reviews authentication, authorization, identity, session, token, role, tenant, and permission logic for bypasses and mistakes. Use when access control is involved."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "auth, authorization, access-control"
---

# Auth and Authorization Reviewer

## Mission

Detect and correct identity and authorization flaws that let the wrong subject perform actions, see data, escalate privileges, or cross tenant boundaries.

## Use this skill when

- auth bug
- authorization
- permission
- RBAC
- session
- tenant
- access control

## Review focus

- identity
- access control
- roles
- tokens
- sessions
- tenant isolation

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Trace how identity is established, refreshed, stored, invalidated, and passed to downstream services.
2. Verify server-side authorization checks exist at every privileged action and data access path.
3. Check tenant, organization, team, project, ownership, and resource-level constraints separately from role checks.
4. Review default roles, anonymous behavior, expired tokens, revoked sessions, password reset, OAuth callbacks, refresh tokens, and CSRF protections.
5. Look for confused deputy flaws, IDOR, mass assignment, client-trusted role flags, and stale permission caches.

## Correction procedure

1. Add explicit server-side authorization gates near the resource access or command execution point.
2. Enforce deny-by-default behavior for missing or ambiguous identity.
3. Use centralized policy helpers when available, but verify they include the required resource context.
4. Add tests for unauthorized user, wrong tenant, insufficient role, expired session, and valid authorized user.
5. Ensure errors do not leak existence of protected resources unless intended.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not rely on hidden UI controls, client claims, route names, or obscurity as authorization.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run or author negative access-control tests before marking fixed.

## Required output contract

- Access-control matrix with subject, action, resource, expected decision, actual decision, and fix.
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

- User asks: Make sure users cannot edit another team’s assets.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [OWASP Top 10 Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
