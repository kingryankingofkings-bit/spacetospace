---
name: esports-broadcast-tools-reviewer
description: "Reviews and fixes spectator, replay, observer client, tournament, draft, broadcast overlay, telemetry feed, and esports API code. Use for competitive or broadcast features."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "esports, spectator, broadcast, tournament"
---

# Esports Broadcast Tools Reviewer

## Mission

Ensure esports and broadcast tooling is accurate, delayed when needed, fair, stable, secure, and usable by observer clients, tournament admins, and production overlays.

## Use this skill when

- esports
- spectator
- observer client
- broadcast overlay
- tournament
- draft screen
- replay
- data feed

## Review focus

- spectator tools
- broadcast APIs
- observer clients
- tournament admin
- overlay feeds
- competitive integrity

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Map spectator data sources: live server state, replay files, observer clients, local client APIs, tournament systems, draft state, overlays, and third-party broadcast tools.
2. Check competitive integrity controls: spectator delay, fog-of-war/privacy filters, team-only data, hidden picks, admin roles, anti-spoiler timing, and stream sniping mitigation.
3. Review headless observer clients for lifecycle, reconnect, authentication, rate limits, memory use, camera automation, and non-interference with matches.
4. Inspect broadcast overlay APIs for schema stability, timestamps, sequence numbers, team/player IDs, localization, sponsor surfaces, and graceful degradation.
5. Review tournament and drafting screens for bracket state, seeding, bans/picks order, admin overrides, audit logs, lock-in semantics, disconnect recovery, and rollback.
6. Check replay/spectator determinism, seeking, speed control, event ordering, and patch-version compatibility.
7. Review data-feed security: read-only credentials, scoped tokens, CORS, WebSocket auth, cache TTL, and PII minimization.

## Correction procedure

1. Add explicit schemas and versioning for overlay and broadcast data feeds.
2. Enforce spectator delay and role-based data filtering server-side.
3. Make draft and tournament transitions atomic, auditable, and recoverable.
4. Add sequence numbers, server timestamps, and idempotent update handling to overlay streams.
5. Harden observer authentication and ensure observer clients cannot affect gameplay state.
6. Add tests for bracket transitions, draft lock-in, reconnect, delayed feed, hidden data, and overlay schema compatibility.
7. Document operational runbooks for broadcast failure modes and rollback.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not expose live private strategy data, player PII, admin tokens, or non-delayed authoritative state to public overlays.
- Do not make observer clients authoritative for match state.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Simulate observer reconnect, overlay disconnect, draft rollback, and delayed feed behavior when possible.
7. Validate overlay payloads against schemas or snapshots.

## Required output contract

- Esports tooling review with data-feed map, integrity risks, overlay contract, patch, and broadcast verification.
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

- User asks: Review spectator and broadcast overlay APIs for an esports mode before tournament launch.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [Riot Games Live Client Data API](https://developer.riotgames.com/docs/lol)
- [Toornament API Overview](https://developer.toornament.com/v2/doc/tournament_overview)
- [Toornament Bracket Display Guide](https://developer.toornament.com/v2/guides/display-bracket)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
