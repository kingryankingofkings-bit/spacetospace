# Content Creator Streamer Mode Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/streamer-mode-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Ensure built-in streamer and creator modes protect privacy, reduce copyright risk, integrate audience features safely, and do not alter gameplay fairness unexpectedly.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Inventory all content shown or emitted during gameplay: player names, account IDs, emails, IP addresses, server codes, invite links, voice chat, map seeds, chat logs, copyrighted music, cutscenes, overlays, and debug panels.
2. Check streamer mode toggles for coverage, persistence, hot reload behavior, default state, platform-specific settings, and recording/broadcast separation.
3. Review audio routing so copyrighted or licensed music can be muted or replaced without muting critical gameplay audio.
4. Inspect Twitch and YouTube chat integrations for OAuth scopes, rate limits, moderation, identity display, command authorization, spam control, and safe rendering.
5. Review audience voting or chat-controlled events for abuse prevention, cooldowns, eligibility, duplicate votes, bot resistance, and server authority.
6. Check privacy mode for P2P IP exposure, matchmaking codes, friend lists, telemetry overlays, QR codes, and crash/report dialogs.
7. Review accessibility and UX so streamers can quickly verify the mode is active before going live.

## Correction sequence

1. Add centralized redaction helpers for PII and creator-sensitive identifiers instead of scattered string replacements.
2. Route licensed music through a separate controllable category and provide clear fallback audio behavior.
3. Sanitize and rate-limit chat-derived text before rendering it in the game UI.
4. Use minimal OAuth scopes and store tokens securely.
5. Keep audience actions advisory or server-validated; do not let chat directly execute privileged commands.
6. Add tests for redaction, disabled music, chat sanitization, command authorization, and persisted streamer-mode settings.
7. Document known content that cannot be made stream-safe automatically.

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
- **Twitch Chat and Chatbots:** https://dev.twitch.tv/docs/chat/
- **Twitch Extensions:** https://dev.twitch.tv/docs/extensions/
- **Twitch Game Developer Playbook:** https://dev.twitch.tv/gamedevelopers/
- **YouTube LiveChatMessages API:** https://developers.google.com/youtube/v3/live/docs/liveChatMessages
