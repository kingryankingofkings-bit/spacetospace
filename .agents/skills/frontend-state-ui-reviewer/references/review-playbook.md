# Frontend State and UI Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/frontend-state-ui-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find and fix UI defects that cause wrong state, broken interactions, stale async data, accessibility gaps, or inconsistent client behavior.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Trace component props, local state, global stores, server state, derived state, memoization, and effects.
2. Check effect dependencies, cleanup, stale closures, race between requests, and state updates after unmount.
3. Review forms for validation, disabled/loading states, double submit, error display, and data normalization.
4. Inspect hydration assumptions, browser-only APIs, SSR boundaries, and client/server field mismatches.
5. Check keyboard access, focus management, ARIA correctness, labels, contrast-sensitive state names, and semantic HTML.

## Correction sequence

1. Patch state ownership and derivation to remove duplicated or stale sources of truth.
2. Fix effect dependencies and cleanup using project conventions.
3. Add UI tests or component tests for interactions and failure states when available.
4. Use accessible semantic controls before custom ARIA when possible.
5. Preserve visual behavior unless the defect is visual.

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
- **WAI-ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/
