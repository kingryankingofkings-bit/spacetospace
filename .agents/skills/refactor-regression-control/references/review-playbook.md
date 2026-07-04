# Refactor Regression Control — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/refactor-regression-control/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure refactors remain behavior-preserving unless intentionally changing behavior, and correct regressions introduced by movement, extraction, renaming, or abstraction.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Compare pre-refactor intent with post-refactor behavior by reading tests, docs, and public contracts.
2. Trace renamed, moved, or extracted symbols across imports, DI wiring, serialization, reflection, routing, and config.
3. Check that defaults, error behavior, side effects, ordering, and lifecycle hooks were preserved.
4. Find duplicate old/new paths that can diverge.
5. Look for stale docs, fixtures, snapshots, and generated files after the refactor.

## Correction sequence

1. Patch missed call sites, lost side effects, broken imports, or changed defaults.
2. Add characterization tests when the original behavior is important but not covered.
3. Keep compatibility shims when external callers may still use old names.
4. Remove dead compatibility only when it is proven internal and safe.
5. Record intentional behavior changes separately from accidental regressions.

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
