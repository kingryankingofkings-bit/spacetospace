---
name: runtime-generative-ai-reviewer
description: "Reviews and fixes runtime LLM, TTS, NPC dialogue, procedural texture, moderation, prompt, token, caching, and AI-safety integration bugs. Use for games with generative AI content."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "llm, generative-ai, tts, runtime-ai"
---

# Runtime Generative AI Reviewer

## Mission

Evaluate runtime generative AI systems for safety, reliability, determinism controls, cost, privacy, moderation, content ownership, and gameplay integration defects, then patch safe issues.

## Use this skill when

- runtime AI
- LLM NPC
- dynamic dialogue
- text to speech
- TTS
- procedural texture
- prompt injection
- AI content

## Review focus

- prompt safety
- LLM output handling
- moderation
- TTS pipeline
- procedural content
- cost controls
- privacy

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Map the AI pipeline: prompt sources, player inputs, system prompts, retrieval, tools, model calls, moderation, output parsing, caching, TTS, asset generation, and game-state application.
2. Check whether LLM outputs are treated as untrusted input before being rendered, stored, spoken, executed, or used to modify game state.
3. Review prompt-injection exposure from player chat, NPC memory, lore documents, user-generated content, web retrieval, mods, and creator integrations.
4. Inspect guardrails for unsafe, hateful, sexual, self-harm, private, copyrighted, spoiler, or age-inappropriate content according to project policy.
5. Check latency, rate limits, budget limits, retry storms, timeout behavior, queue backpressure, and offline fallback.
6. Review local/cloud TTS voice consent, voice identity, text sanitization, audio caching, and streamer-safe audio routing.
7. Inspect procedural textures/assets for licensing, moderation, memory growth, cache invalidation, determinism, and asset save format compatibility.

## Correction procedure

1. Add output validation, schema checks, moderation gates, allowlisted tool calls, and safe fallbacks before AI output affects gameplay or UI.
2. Treat AI-generated text as untrusted for XSS, command, SQL, prompt chaining, and markup injection contexts.
3. Add cost and rate-limit controls with bounded retries and user-visible fallback behavior.
4. Separate deterministic gameplay logic from nondeterministic AI flavor unless design explicitly allows AI to affect rules.
5. Redact PII and secrets from prompts, logs, caches, and analytics.
6. Add tests for malicious prompt input, invalid model output, timeout, moderation block, and fallback paths.
7. Document residual risks where policy decisions or content moderation thresholds require human approval.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not let LLM output directly execute code, call privileged APIs, alter inventories, award currency, or bypass server authority.
- Do not clone or synthesize a real person's voice without explicit rights and policy approval.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run adversarial prompt tests and malformed-output tests if possible.
7. Verify AI fallback behavior with model unavailable, timeout, or moderation rejection.

## Required output contract

- Runtime AI safety and defect report with pipeline map, trust boundaries, guardrail gaps, patch, and verification.
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

- User asks: Review our LLM NPC dialogue system for prompt injection, bad outputs, and safe fallbacks.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [OWASP Top 10 for LLMs and Generative AI Apps](https://genai.owasp.org/llm-top-10/)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [NIST AI RMF Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
