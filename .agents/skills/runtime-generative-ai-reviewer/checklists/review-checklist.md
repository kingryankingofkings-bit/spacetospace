# Runtime Generative AI Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Map the AI pipeline: prompt sources, player inputs, system prompts, retrieval, tools, model calls, moderation, output parsing, caching, TTS, asset generation, and game-state application.
- [ ] Check whether LLM outputs are treated as untrusted input before being rendered, stored, spoken, executed, or used to modify game state.
- [ ] Review prompt-injection exposure from player chat, NPC memory, lore documents, user-generated content, web retrieval, mods, and creator integrations.
- [ ] Inspect guardrails for unsafe, hateful, sexual, self-harm, private, copyrighted, spoiler, or age-inappropriate content according to project policy.
- [ ] Check latency, rate limits, budget limits, retry storms, timeout behavior, queue backpressure, and offline fallback.
- [ ] Review local/cloud TTS voice consent, voice identity, text sanitization, audio caching, and streamer-safe audio routing.
- [ ] Inspect procedural textures/assets for licensing, moderation, memory growth, cache invalidation, determinism, and asset save format compatibility.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Add output validation, schema checks, moderation gates, allowlisted tool calls, and safe fallbacks before AI output affects gameplay or UI.
- [ ] Treat AI-generated text as untrusted for XSS, command, SQL, prompt chaining, and markup injection contexts.
- [ ] Add cost and rate-limit controls with bounded retries and user-visible fallback behavior.
- [ ] Separate deterministic gameplay logic from nondeterministic AI flavor unless design explicitly allows AI to affect rules.
- [ ] Redact PII and secrets from prompts, logs, caches, and analytics.
- [ ] Add tests for malicious prompt input, invalid model output, timeout, moderation block, and fallback paths.
- [ ] Document residual risks where policy decisions or content moderation thresholds require human approval.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run adversarial prompt tests and malformed-output tests if possible.
- [ ] Verify AI fallback behavior with model unavailable, timeout, or moderation rejection.
