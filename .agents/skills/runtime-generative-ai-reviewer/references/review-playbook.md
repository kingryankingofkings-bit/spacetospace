# Runtime Generative AI Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/runtime-generative-ai-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Evaluate runtime generative AI systems for safety, reliability, determinism controls, cost, privacy, moderation, content ownership, and gameplay integration defects, then patch safe issues.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Map the AI pipeline: prompt sources, player inputs, system prompts, retrieval, tools, model calls, moderation, output parsing, caching, TTS, asset generation, and game-state application.
2. Check whether LLM outputs are treated as untrusted input before being rendered, stored, spoken, executed, or used to modify game state.
3. Review prompt-injection exposure from player chat, NPC memory, lore documents, user-generated content, web retrieval, mods, and creator integrations.
4. Inspect guardrails for unsafe, hateful, sexual, self-harm, private, copyrighted, spoiler, or age-inappropriate content according to project policy.
5. Check latency, rate limits, budget limits, retry storms, timeout behavior, queue backpressure, and offline fallback.
6. Review local/cloud TTS voice consent, voice identity, text sanitization, audio caching, and streamer-safe audio routing.
7. Inspect procedural textures/assets for licensing, moderation, memory growth, cache invalidation, determinism, and asset save format compatibility.

## Correction sequence

1. Add output validation, schema checks, moderation gates, allowlisted tool calls, and safe fallbacks before AI output affects gameplay or UI.
2. Treat AI-generated text as untrusted for XSS, command, SQL, prompt chaining, and markup injection contexts.
3. Add cost and rate-limit controls with bounded retries and user-visible fallback behavior.
4. Separate deterministic gameplay logic from nondeterministic AI flavor unless design explicitly allows AI to affect rules.
5. Redact PII and secrets from prompts, logs, caches, and analytics.
6. Add tests for malicious prompt input, invalid model output, timeout, moderation block, and fallback paths.
7. Document residual risks where policy decisions or content moderation thresholds require human approval.

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
- **OWASP Top 10 for LLMs and Generative AI Apps:** https://genai.owasp.org/llm-top-10/
- **OWASP Top 10 for Large Language Model Applications:** https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **NIST AI RMF Generative AI Profile:** https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
