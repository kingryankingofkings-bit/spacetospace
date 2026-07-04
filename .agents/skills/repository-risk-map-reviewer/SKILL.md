---
name: repository-risk-map-reviewer
description: "Builds a repository risk map before deep code review. Use when reviewing unfamiliar codebases, monorepos, large games, services, or apps for likely defect zones."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "repository, risk-map, intake"
---

# Repository Risk Map Reviewer

## Mission

Create a fast, evidence-grounded risk map that tells the agent where defects are most likely, what should not be touched casually, and which checks are needed before edits.

## Use this skill when

- new repo
- unfamiliar codebase
- monorepo review
- where are the risks
- map this project

## Review focus

- architecture topology
- hotspots
- ownership boundaries
- generated files
- dangerous edit zones

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Read root manifests, workspace files, package metadata, build scripts, test configuration, CI workflows, container files, and docs before opening many source files.
2. Classify modules by role: UI, API, persistence, jobs, engine/runtime, networking, auth, integrations, tooling, and infrastructure.
3. Find entry points, dependency direction, public contracts, generated artifacts, vendored code, migration folders, and codegen output.
4. Locate flaky or absent tests by comparing critical modules with available test files.
5. Identify files with high churn or obvious complexity if Git history is accessible.

## Correction procedure

1. Do not patch during the initial map unless a trivial, high-confidence breakage blocks inspection.
2. Create a prioritized review route from highest risk and easiest verification to lower-risk cleanup.
3. Mark files that require human confirmation before change, such as migrations, protocol schemas, save formats, and security policies.
4. Recommend missing review skills for each risk zone.
5. Capture prerequisite setup commands only after reading project docs and package metadata.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not assume framework defaults when project configuration overrides them.

## Verification procedure

1. Confirm the map by sampling representative files from each major module.
2. Cross-check claimed build/test commands against package scripts or CI before recommending them.
3. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
4. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
5. Verify both the positive path and the original failing or risky path.

## Required output contract

- Repository risk map table with module, risk type, evidence, suggested skill, and first check.
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

- User asks: Before editing, understand this repo and tell me the riskiest bug-prone areas.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
