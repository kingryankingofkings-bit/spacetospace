# Performance Regression Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/performance-regression-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find likely performance defects, validate them with available measurements, and patch bottlenecks without premature or speculative optimization.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Identify critical paths from profiling data, code structure, request paths, render loops, or user-reported symptoms.
2. Check loops, nested scans, repeated serialization, unnecessary allocations, blocking IO, sync-over-async, cache misses, and repeated expensive initialization.
3. Review database queries, network chatter, bundle size, asset loading, and render/update frequency.
4. Differentiate measurable bottlenecks from theoretical micro-optimizations.
5. Check for performance/security tradeoffs before caching sensitive or authorization-dependent data.

## Correction sequence

1. Fix algorithmic or IO inefficiencies with clear before/after rationale.
2. Add caching only with invalidation, memory bounds, and authorization safety.
3. Move expensive work out of per-frame or per-request hot paths where safe.
4. Add benchmarks or performance tests for critical regressions when project tooling supports it.
5. Preserve correctness first, then optimize.

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
