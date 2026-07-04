# Content Creator Streamer Mode Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Inventory all content shown or emitted during gameplay: player names, account IDs, emails, IP addresses, server codes, invite links, voice chat, map seeds, chat logs, copyrighted music, cutscenes, overlays, and debug panels.
- [ ] Check streamer mode toggles for coverage, persistence, hot reload behavior, default state, platform-specific settings, and recording/broadcast separation.
- [ ] Review audio routing so copyrighted or licensed music can be muted or replaced without muting critical gameplay audio.
- [ ] Inspect Twitch and YouTube chat integrations for OAuth scopes, rate limits, moderation, identity display, command authorization, spam control, and safe rendering.
- [ ] Review audience voting or chat-controlled events for abuse prevention, cooldowns, eligibility, duplicate votes, bot resistance, and server authority.
- [ ] Check privacy mode for P2P IP exposure, matchmaking codes, friend lists, telemetry overlays, QR codes, and crash/report dialogs.
- [ ] Review accessibility and UX so streamers can quickly verify the mode is active before going live.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add centralized redaction helpers for PII and creator-sensitive identifiers instead of scattered string replacements.
- [ ] Route licensed music through a separate controllable category and provide clear fallback audio behavior.
- [ ] Sanitize and rate-limit chat-derived text before rendering it in the game UI.
- [ ] Use minimal OAuth scopes and store tokens securely.
- [ ] Keep audience actions advisory or server-validated; do not let chat directly execute privileged commands.
- [ ] Add tests for redaction, disabled music, chat sanitization, command authorization, and persisted streamer-mode settings.
- [ ] Document known content that cannot be made stream-safe automatically.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run streamer-mode snapshots or UI checks with sensitive mock data if possible.
- [ ] Verify creator mode affects every output surface, not only the main HUD.
