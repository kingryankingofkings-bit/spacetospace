---
name: streamer-mode-reviewer
description: "Reviews and fixes streamer mode, copyrighted audio suppression, PII hiding, IP/privacy protection, Twitch or YouTube chat integration, audience voting, and creator-safe UI. Use for creator features."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "streamer-mode, twitch, youtube, privacy"
---

# Content Creator Streamer Mode Reviewer

## Mission

Ensure built-in streamer and creator modes protect privacy, reduce copyright risk, integrate audience features safely, and do not alter gameplay fairness unexpectedly.

## Use this skill when

- streamer mode
- creator mode
- Twitch chat
- YouTube live chat
- hide PII
- copyright music
- audience voting

## Review focus

- creator safety
- copyright audio
- PII redaction
- chat integration
- audience interaction
- moderation

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Inventory all content shown or emitted during gameplay: player names, account IDs, emails, IP addresses, server codes, invite links, voice chat, map seeds, chat logs, copyrighted music, cutscenes, overlays, and debug panels.
2. Check streamer mode toggles for coverage, persistence, hot reload behavior, default state, platform-specific settings, and recording/broadcast separation.
3. Review audio routing so copyrighted or licensed music can be muted or replaced without muting critical gameplay audio.
4. Inspect Twitch and YouTube chat integrations for OAuth scopes, rate limits, moderation, identity display, command authorization, spam control, and safe rendering.
5. Review audience voting or chat-controlled events for abuse prevention, cooldowns, eligibility, duplicate votes, bot resistance, and server authority.
6. Check privacy mode for P2P IP exposure, matchmaking codes, friend lists, telemetry overlays, QR codes, and crash/report dialogs.
7. Review accessibility and UX so streamers can quickly verify the mode is active before going live.

## Correction procedure

1. Add centralized redaction helpers for PII and creator-sensitive identifiers instead of scattered string replacements.
2. Route licensed music through a separate controllable category and provide clear fallback audio behavior.
3. Sanitize and rate-limit chat-derived text before rendering it in the game UI.
4. Use minimal OAuth scopes and store tokens securely.
5. Keep audience actions advisory or server-validated; do not let chat directly execute privileged commands.
6. Add tests for redaction, disabled music, chat sanitization, command authorization, and persisted streamer-mode settings.
7. Document known content that cannot be made stream-safe automatically.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not promise copyright safety as absolute; implement technical safeguards and document residual rights risk.
- Do not expose raw viewer chat in-game without moderation, sanitization, and rate limits.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run streamer-mode snapshots or UI checks with sensitive mock data if possible.
7. Verify creator mode affects every output surface, not only the main HUD.

## Required output contract

- Streamer-mode coverage matrix with sensitive surface, current behavior, risk, patch, and verification.
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

- User asks: Review streamer mode so it hides PII, disables copyrighted audio, and safely reads Twitch chat votes.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [Twitch Chat and Chatbots](https://dev.twitch.tv/docs/chat/)
- [Twitch Extensions](https://dev.twitch.tv/docs/extensions/)
- [Twitch Game Developer Playbook](https://dev.twitch.tv/gamedevelopers/)
- [YouTube LiveChatMessages API](https://developers.google.com/youtube/v3/live/docs/liveChatMessages)
