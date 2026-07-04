---
name: final-remediation-reporter
description: "Produces final review and remediation reports with findings, patches, verification, residual risks, and next actions. Use when review or correction work is complete."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "report, remediation, handoff"
---

# Final Remediation Reporter

## Mission

Convert review and patch work into a concise but complete engineering report that is honest, auditable, and useful for merge or handoff.

## Use this skill when

- final report
- summarize fixes
- remediation report
- handoff
- what changed

## Review focus

- reporting
- auditability
- evidence
- residual risk
- handoff clarity

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Gather all findings, patches, tests, commands, failures, unexecuted checks, and deferred risks.
2. Confirm severity and confidence labels are consistent.
3. Check that each file changed has a reason tied to a finding or test.
4. Separate fixed, partially fixed, deferred, not reproducible, and false-positive items.
5. Verify final report avoids unsupported claims.

## Correction procedure

1. Write the report in merge-ready form with clear sections and no hidden caveats.
2. Include exact commands and outcomes when available.
3. State what was not checked or could not be verified.
4. List next actions in priority order when work remains.
5. Flag high-risk changes requiring human review before merge.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not bury unresolved risks or make vague claims like fully tested without evidence.

## Verification procedure

1. Cross-check the final report against the actual diff and command logs.
2. Ensure no finding marked fixed lacks a corresponding patch or verified rationale.
3. Inspect diffs after editing and confirm that only intended files changed.
4. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.

## Required output contract

- Executive summary, findings table, patch summary, verification log, residual risks, and next actions.

## Local supporting documents

Read these files in this skill folder when more structure is needed:

- `references/review-playbook.md` for deeper review heuristics and source references.
- `checklists/review-checklist.md` for a strict pass/fail checklist.
- `templates/finding-record.md` for a standardized finding format.
- `templates/patch-plan.md` for a safe correction plan.
- `templates/verification-log.md` for recording what was checked.

## Example trigger prompts

- User asks: Give me a final remediation report for the review and fixes.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
