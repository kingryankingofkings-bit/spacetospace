---
name: ci-quality-gate-reviewer
description: "Reviews CI workflows, test gates, lint gates, build jobs, cache settings, matrix coverage, and release checks for missed failures. Use when pipelines are unreliable or incomplete."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "ci, quality-gate, pipeline"
---

# CI Quality Gate Reviewer

## Mission

Ensure CI catches defects before merge or release by reviewing quality gates, job coverage, caching, secrets use, and failure handling.

## Use this skill when

- CI review
- GitHub Actions
- pipeline
- quality gate
- flaky CI
- build checks

## Review focus

- CI coverage
- quality gates
- flaky tests
- caching
- secrets
- release checks

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Read workflow files, package scripts, test configs, build matrices, required checks, and branch protection assumptions.
2. Check whether lint, typecheck, tests, security scan, dependency audit, build, and e2e gates run on relevant changes.
3. Review cache keys for stale dependency or build artifacts.
4. Check for continue-on-error, ignored failures, broad path filters, skipped matrices, and unpinned actions.
5. Inspect secrets exposure in logs, PRs from forks, and third-party actions.

## Correction procedure

1. Add missing gates using existing project scripts before inventing new tooling.
2. Make jobs fail when critical checks fail.
3. Tighten path filters and matrices to cover affected code.
4. Pin or constrain third-party actions according to project policy.
5. Document required local commands that mirror CI.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not remove failing CI steps or mark them non-blocking just to make the pipeline green.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Validate workflow syntax and affected scripts where possible.

## Required output contract

- CI gate matrix showing check, trigger, coverage, current gap, fix, and residual risk.
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

- User asks: Review our CI for missed checks and patch obvious workflow gaps.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [GitHub Actions Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
