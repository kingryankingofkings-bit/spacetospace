---
name: hybrid-webrtc-websocket-reviewer
description: "Reviews and fixes browser multiplayer networking that combines WebRTC data channels with WebSockets for low-latency game traffic and reliable events. Use for P2P or hybrid web games."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "webrtc, websocket, multiplayer, p2p"
---

# Hybrid WebRTC WebSocket Reviewer

## Mission

Find defects in hybrid browser networking stacks that split movement, state sync, chat, signaling, and reliable events across WebRTC data channels and WebSockets.

## Use this skill when

- WebRTC
- RTCDataChannel
- P2P
- data channel
- WebSocket
- signaling
- low latency browser networking

## Review focus

- WebRTC data channels
- WebSocket signaling
- hybrid reliability
- NAT traversal
- ordering
- authority

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Map network responsibilities: signaling, matchmaking, NAT traversal, unreliable movement, reliable events, chat, authoritative validation, reconnect, and telemetry.
2. Check RTCDataChannel configuration for ordered/unordered delivery, maxRetransmits, maxPacketLifeTime, binary framing, backpressure, bufferedAmount thresholds, and message-size limits.
3. Review WebSocket signaling for authentication, room authorization, replay protection, idempotent join/leave, and cleanup after failed peer negotiation.
4. Inspect STUN/TURN configuration, ICE candidate handling, peer identity, DTLS assumptions, and fallback behavior when P2P fails.
5. Check authority boundaries so clients cannot spoof state, teleport, tamper with authoritative game outcomes, or abuse peer topology.
6. Review sequence numbers, tick rates, interpolation, prediction, reconciliation, duplicate/out-of-order handling, and packet loss behavior.
7. Inspect privacy and IP exposure implications of P2P connections and whether streamer mode or privacy mode should force relay/server fallback.

## Correction procedure

1. Separate unreliable high-frequency state from reliable critical events with explicit message schemas and versioning.
2. Add sequence numbers, monotonic timestamps, dedupe keys, and authority validation for state messages.
3. Implement bounded send queues and backpressure handling for both data channels and WebSockets.
4. Add reconnect and fallback paths from WebRTC to server relay or WebSocket mode when negotiation fails.
5. Harden signaling with authenticated room membership and lifecycle cleanup.
6. Add tests or simulations for packet loss, duplicate messages, out-of-order messages, disconnects, and reconnects.
7. Document privacy tradeoffs and relay requirements.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not trust peer-sent gameplay outcomes without server or host authority validation.
- Do not assume WebRTC is UDP; review SCTP/data-channel semantics and configuration explicitly.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Test or simulate negotiation failure, disconnect, packet loss, and fallback if project tooling allows.
7. Record browser compatibility limits and network-condition assumptions.

## Required output contract

- Hybrid networking review with channel map, authority model, message reliability class, failure modes, patch, and verification.
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

- User asks: Review our browser game that uses WebRTC for movement and WebSockets for chat and events.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [MDN Using WebRTC Data Channels](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- [MDN RTCDataChannel](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel)
- [WebRTC Project](https://webrtc.org/)
- [RFC 8831 WebRTC Data Channels](https://datatracker.ietf.org/doc/html/rfc8831)
