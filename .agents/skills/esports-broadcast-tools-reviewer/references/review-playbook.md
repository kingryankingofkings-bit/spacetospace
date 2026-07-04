# Esports Broadcast Tools Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/esports-broadcast-tools-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure esports and broadcast tooling is accurate, delayed when needed, fair, stable, secure, and usable by observer clients, tournament admins, and production overlays.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Map spectator data sources: live server state, replay files, observer clients, local client APIs, tournament systems, draft state, overlays, and third-party broadcast tools.
2. Check competitive integrity controls: spectator delay, fog-of-war/privacy filters, team-only data, hidden picks, admin roles, anti-spoiler timing, and stream sniping mitigation.
3. Review headless observer clients for lifecycle, reconnect, authentication, rate limits, memory use, camera automation, and non-interference with matches.
4. Inspect broadcast overlay APIs for schema stability, timestamps, sequence numbers, team/player IDs, localization, sponsor surfaces, and graceful degradation.
5. Review tournament and drafting screens for bracket state, seeding, bans/picks order, admin overrides, audit logs, lock-in semantics, disconnect recovery, and rollback.
6. Check replay/spectator determinism, seeking, speed control, event ordering, and patch-version compatibility.
7. Review data-feed security: read-only credentials, scoped tokens, CORS, WebSocket auth, cache TTL, and PII minimization.

## Correction sequence

1. Add explicit schemas and versioning for overlay and broadcast data feeds.
2. Enforce spectator delay and role-based data filtering server-side.
3. Make draft and tournament transitions atomic, auditable, and recoverable.
4. Add sequence numbers, server timestamps, and idempotent update handling to overlay streams.
5. Harden observer authentication and ensure observer clients cannot affect gameplay state.
6. Add tests for bracket transitions, draft lock-in, reconnect, delayed feed, hidden data, and overlay schema compatibility.
7. Document operational runbooks for broadcast failure modes and rollback.

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
- **Riot Games Live Client Data API:** https://developer.riotgames.com/docs/lol
- **Toornament API Overview:** https://developer.toornament.com/v2/doc/tournament_overview
- **Toornament Bracket Display Guide:** https://developer.toornament.com/v2/guides/display-bracket
- **OpenAPI Specification:** https://spec.openapis.org/oas/latest.html
