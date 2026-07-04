---
name: safe-patch-planner
description: "Plans safe fixes before editing high-risk code. Use when correcting bugs across multiple files, public APIs, data, security, infra, or live-service systems."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "patch-plan, safety, risk"
---

# Safe Patch Planner

## Mission

Create an explicit patch contract that defines scope, risk, rollback, verification, and user approval points for non-trivial or high-risk corrections.

## Use this skill when

- plan the fix
- safe patch
- risky change
- multi-file fix
- before editing

## Review focus

- scope control
- rollback
- risk acceptance
- verification plan
- change contract

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Define the defect, impacted behavior, root-cause hypothesis, affected files, and non-goals.
2. Identify irreversible operations, migrations, production settings, external APIs, and compatibility-sensitive files.
3. Assess whether a feature flag, compatibility shim, or phased patch is safer than a direct replacement.
4. Determine test and rollback steps before edits.
5. Identify manual confirmation points for destructive or ambiguous changes.

## Correction procedure

1. Produce a patch plan before touching files when the change is high-risk.
2. Break large fixes into reviewable phases and verify each phase independently.
3. Prefer additive compatibility layers over breaking changes when feasible.
4. Document assumptions and constraints directly in the plan.
5. After patching, reconcile implementation against the original plan.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not proceed with irreversible or production-affecting changes without explicit user direction.

## Verification procedure

1. Validate the plan against project docs, tests, CI, and deployment constraints.
2. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
3. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
4. Verify both the positive path and the original failing or risky path.
5. Inspect diffs after editing and confirm that only intended files changed.
6. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.

## Required output contract

- Patch plan with scope, file list, edit strategy, tests, rollback, and risk register.
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

- User asks: The auth bug spans client and server; plan the fix before editing.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
