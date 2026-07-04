# Hybrid WebRTC WebSocket Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/hybrid-webrtc-websocket-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Find defects in hybrid browser networking stacks that split movement, state sync, chat, signaling, and reliable events across WebRTC data channels and WebSockets.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Map network responsibilities: signaling, matchmaking, NAT traversal, unreliable movement, reliable events, chat, authoritative validation, reconnect, and telemetry.
2. Check RTCDataChannel configuration for ordered/unordered delivery, maxRetransmits, maxPacketLifeTime, binary framing, backpressure, bufferedAmount thresholds, and message-size limits.
3. Review WebSocket signaling for authentication, room authorization, replay protection, idempotent join/leave, and cleanup after failed peer negotiation.
4. Inspect STUN/TURN configuration, ICE candidate handling, peer identity, DTLS assumptions, and fallback behavior when P2P fails.
5. Check authority boundaries so clients cannot spoof state, teleport, tamper with authoritative game outcomes, or abuse peer topology.
6. Review sequence numbers, tick rates, interpolation, prediction, reconciliation, duplicate/out-of-order handling, and packet loss behavior.
7. Inspect privacy and IP exposure implications of P2P connections and whether streamer mode or privacy mode should force relay/server fallback.

## Correction sequence

1. Separate unreliable high-frequency state from reliable critical events with explicit message schemas and versioning.
2. Add sequence numbers, monotonic timestamps, dedupe keys, and authority validation for state messages.
3. Implement bounded send queues and backpressure handling for both data channels and WebSockets.
4. Add reconnect and fallback paths from WebRTC to server relay or WebSocket mode when negotiation fails.
5. Harden signaling with authenticated room membership and lifecycle cleanup.
6. Add tests or simulations for packet loss, duplicate messages, out-of-order messages, disconnects, and reconnects.
7. Document privacy tradeoffs and relay requirements.

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
- **MDN Using WebRTC Data Channels:** https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels
- **MDN RTCDataChannel:** https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel
- **WebRTC Project:** https://webrtc.org/
- **RFC 8831 WebRTC Data Channels:** https://datatracker.ietf.org/doc/html/rfc8831
