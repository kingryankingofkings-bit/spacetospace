---
name: static-analysis-triage-fixer
description: "Triages and fixes linter, type-checker, SAST, code-scanning, and analyzer findings without blindly suppressing warnings. Use when static analysis reports problems."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "static-analysis, sast, lint"
---

# Static Analysis Triage Fixer

## Mission

Separate true defects from noise in static-analysis output and apply safe fixes that improve correctness, security, and maintainability without silencing valuable signals.

## Use this skill when

- lint errors
- static analysis
- code scanning
- SAST
- type checker warnings
- Sonar
- CodeQL

## Review focus

- analyzer findings
- false-positive triage
- safe remediation
- suppression governance

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Read the exact analyzer rule, file, line, trace, severity, and confidence before editing.
2. Inspect data flow from source to sink for security findings and type flow for type findings.
3. Check whether the same pattern appears elsewhere and whether a shared helper is appropriate.
4. Look for previous suppressions and evaluate whether they are still justified.
5. Prioritize findings that correspond to runtime bugs, security impact, resource leaks, or dead code.

## Correction procedure

1. Fix root cause before considering suppression.
2. Use narrow suppressions only with a specific justification and only when the analyzer is demonstrably wrong.
3. Refactor repeated analyzer issues into safer APIs when the change is localized and testable.
4. Add type annotations, validation, sanitization, or guard clauses where they encode real invariants.
5. Re-run the specific analyzer command after patching if available.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not disable entire rule sets or weaken quality gates to make reports pass.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Capture before/after analyzer finding counts for the affected rules when possible.

## Required output contract

- Analyzer triage table with true-positive, false-positive, fix, suppression, and deferred categories.
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

- User asks: The scanner reports 48 warnings; triage and fix what is real.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [GitHub CodeQL Documentation](https://codeql.github.com/docs/)
