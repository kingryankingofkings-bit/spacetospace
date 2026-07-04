# Global Review Protocol

This shared support document belongs inside `.agents/skills/` and applies to every review/correction skill in this pack.

## Review order

1. Understand scope and project conventions.
2. Read the relevant code before asserting defects.
3. Prioritize correctness, data integrity, security, reliability, compatibility, and test gaps over style.
4. Record findings with severity and confidence.
5. Patch only high-confidence defects or changes the user explicitly requested.
6. Verify with targeted tests, type checks, lint, builds, static reasoning, or manual reproduction notes.
7. Report honestly, including unverified areas.

## Severity definitions

- **Blocker:** likely crash, data loss, security bypass, production outage, broken build, or merge-stopping regression.
- **High:** serious bug, exploitable vulnerability, major compatibility break, or severe test gap in critical code.
- **Medium:** real defect with contained impact or important maintainability issue likely to cause bugs.
- **Low:** minor defect, edge-case issue, or localized quality problem.
- **Nit:** optional polish that should never block a meaningful fix.

## Correction constraints

- Keep fixes minimal and tied to findings.
- Avoid speculative rewrites.
- Avoid destructive actions without explicit user direction.
- Preserve public contracts unless the defect is itself a broken contract and a migration path is documented.
- Prefer adding regression tests over relying on explanation.
