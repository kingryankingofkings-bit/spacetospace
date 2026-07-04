---
name: infra-config-policy-reviewer
description: "Reviews infrastructure as code, containers, Kubernetes, cloud config, permissions, network policy, and deployment manifests for unsafe settings. Use when infra files change."
license: CC0-1.0
compatibility: Google Antigravity 2.0 and Agent Skills compatible skill folders
metadata:
  pack: antigravity-2-code-review-correction-skills
  version: "1.0.0"
  category: code-review-correction
  tags: "infrastructure, config, policy"
---

# Infrastructure Config Policy Reviewer

## Mission

Detect configuration and policy mistakes in infrastructure code that can cause outages, privilege exposure, insecure networking, or broken deployments.

## Use this skill when

- infra review
- Dockerfile
- Kubernetes
- Terraform
- cloud config
- deployment manifest
- policy

## Review focus

- IaC
- containers
- permissions
- network policy
- deployment safety
- configuration drift

## Operating contract

1. Start from evidence. Read the relevant code, tests, configuration, and docs before making claims.
2. Classify findings by severity and confidence. Prefer high-confidence defects over speculative improvements.
3. For every non-trivial edit, state the patch intent before changing code.
4. Keep edits minimal, reversible, and tied to a documented finding.
5. Verify honestly. If a test or build cannot be run, say exactly what was checked statically and what remains unverified.

## Inspection procedure

1. Review Dockerfiles, compose files, Kubernetes manifests, Helm charts, Terraform, cloud IAM, ingress, secrets references, resource limits, and deployment scripts.
2. Check least privilege, network exposure, TLS, service account permissions, container user, image tags, health probes, resource requests/limits, and rollout strategy.
3. Inspect secret handling and whether secret values are stored directly in manifests.
4. Check environment-specific overlays for drift between dev, staging, and production.
5. Review destructive infrastructure changes such as deletion, replacement, public exposure, or state migration.

## Correction procedure

1. Patch unsafe defaults with least-privilege, non-root containers, pinned images, safe probes, resource limits, and restricted exposure where compatible.
2. Use secret references rather than inline secret values.
3. Preserve deployment semantics and environment overlays.
4. Add validation, policy checks, or comments for non-obvious constraints.
5. Escalate risky state changes rather than applying them blindly.

## Safety and quality boundaries

- Do not make broad rewrites when a narrow, verifiable patch fixes the defect.
- Do not change public behavior, schemas, migrations, file formats, or network protocols without explicitly recording compatibility risk.
- Do not run destructive commands, delete data, rotate secrets, rewrite history, or modify production configuration unless the user explicitly asks and the risk is documented.
- Do not claim that tests, builds, benchmarks, or repro steps passed unless they were actually executed or the result is present in the provided artifacts.
- Do not suppress failing tests, lower security checks, remove validation, or hide errors as a substitute for fixing the root cause.
- Do not apply infrastructure changes or modify remote state unless explicitly requested.

## Verification procedure

1. Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
2. When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
3. Verify both the positive path and the original failing or risky path.
4. Inspect diffs after editing and confirm that only intended files changed.
5. Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
6. Run format, validate, plan, dry-run, or template rendering commands if available without mutating remote resources.

## Required output contract

- Infra risk matrix with resource, unsafe setting, blast radius, patch, and deployment caveat.
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

- User asks: Review this Kubernetes deployment for unsafe settings.

## Background references

- [Google Engineering Practices - Code Review](https://google.github.io/eng-practices/review/)
- [Google Engineering Practices - Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OWASP Top Ten Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Google Antigravity Skills Documentation](https://antigravity.google/docs/skills)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
