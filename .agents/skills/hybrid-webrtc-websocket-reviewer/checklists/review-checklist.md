# Hybrid WebRTC WebSocket Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Map network responsibilities: signaling, matchmaking, NAT traversal, unreliable movement, reliable events, chat, authoritative validation, reconnect, and telemetry.
- [ ] Check RTCDataChannel configuration for ordered/unordered delivery, maxRetransmits, maxPacketLifeTime, binary framing, backpressure, bufferedAmount thresholds, and message-size limits.
- [ ] Review WebSocket signaling for authentication, room authorization, replay protection, idempotent join/leave, and cleanup after failed peer negotiation.
- [ ] Inspect STUN/TURN configuration, ICE candidate handling, peer identity, DTLS assumptions, and fallback behavior when P2P fails.
- [ ] Check authority boundaries so clients cannot spoof state, teleport, tamper with authoritative game outcomes, or abuse peer topology.
- [ ] Review sequence numbers, tick rates, interpolation, prediction, reconciliation, duplicate/out-of-order handling, and packet loss behavior.
- [ ] Inspect privacy and IP exposure implications of P2P connections and whether streamer mode or privacy mode should force relay/server fallback.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Separate unreliable high-frequency state from reliable critical events with explicit message schemas and versioning.
- [ ] Add sequence numbers, monotonic timestamps, dedupe keys, and authority validation for state messages.
- [ ] Implement bounded send queues and backpressure handling for both data channels and WebSockets.
- [ ] Add reconnect and fallback paths from WebRTC to server relay or WebSocket mode when negotiation fails.
- [ ] Harden signaling with authenticated room membership and lifecycle cleanup.
- [ ] Add tests or simulations for packet loss, duplicate messages, out-of-order messages, disconnects, and reconnects.
- [ ] Document privacy tradeoffs and relay requirements.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Test or simulate negotiation failure, disconnect, packet loss, and fallback if project tooling allows.
- [ ] Record browser compatibility limits and network-condition assumptions.
