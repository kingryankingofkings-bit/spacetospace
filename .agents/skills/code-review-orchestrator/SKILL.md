---
name: code-review-orchestrator
description: "Coordinates a complete bug, gap, mistake, and remediation review across a repository or large change. Use when asked to review code comprehensively, find problems, and correct safe issues."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "review, orchestration, bug-fixing"
---

# Code Review Orchestrator

## Mission

Plan and coordinate a complete code review that discovers defects, groups risks, delegates deeper analysis to specialized review skills, and drives safe corrective patches through verification.

## Use this skill when

- review entire repo
- audit this code
- find bugs
- fix issues
- full code review
- quality pass

## Review focus

- overall code health
- cross-cutting risk discovery
- review sequencing
- specialist skill selection
- safe remediation boundaries

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Map project languages, frameworks, build tools, package managers, test runners, deployment surfaces, and generated-code boundaries.
2. Identify high-risk files first: auth, payments, persistence, concurrency, networking, security-sensitive parsing, migrations, config, build scripts, and public APIs.
3. Segment findings into correctness, safety, security, maintainability, performance, reliability, test coverage, and release-readiness categories.
4. Choose specialist review skills based on evidence rather than using every skill indiscriminately.
5. Maintain an issue ledger so duplicate findings collapse into one root-cause item.

## Correction procedure

1. Prefer small, high-confidence patches for defects with concrete evidence.
2. Batch related edits only when they share a single root cause and can be verified together.
3. Escalate risky architectural changes into patch plans rather than performing speculative rewrites.
4. Add or update tests when the defect can be reproduced through automated checks.
5. Re-run relevant checks after each meaningful patch set.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not let cosmetic style findings crowd out correctness, security, or data-integrity issues.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Confirm every specialist review output is either fixed, explicitly deferred, or rejected with a reason.

## Required output contract

- Prioritized findings with severity, confidence, affected files, evidence, impact, and recommended fix.
- Patch plan before edits when the fix is non-trivial or touches multiple files.
- Implemented patch summary that maps each change back to a finding.
- Verification log with exact commands or static review steps and results.
- Residual risk list and rollback notes when appropriate.
- Review map showing which areas were inspected and which specialist skills were used.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: Review this project for bugs and fix what you can safely fix.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
