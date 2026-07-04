# Infrastructure Config Policy Reviewer — Review Checklist

Use this checklist as a strict review aid. Mark an item as `pass`, `fail`, `not applicable`, or `not verified`.

## Intake

- [ ] Scope is understood and documented.
- [ ] Relevant files, tests, configuration, and docs were inspected.
- [ ] Generated, vendored, or migration files are identified before editing.
- [ ] High-risk areas are prioritized before cosmetic issues.

## Skill-specific inspection

- [ ] Review Dockerfiles, compose files, Kubernetes manifests, Helm charts, Terraform, cloud IAM, ingress, secrets references, resource limits, and deployment scripts.
- [ ] Check least privilege, network exposure, TLS, service account permissions, container user, image tags, health probes, resource requests/limits, and rollout strategy.
- [ ] Inspect secret handling and whether secret values are stored directly in manifests.
- [ ] Check environment-specific overlays for drift between dev, staging, and production.
- [ ] Review destructive infrastructure changes such as deletion, replacement, public exposure, or state migration.

## Correction readiness

- [ ] Each proposed edit maps to a concrete finding.
- [ ] Public API, data, security, and deployment risks are considered.
- [ ] Rollback or revert impact is understood.
- [ ] The patch can be verified with available checks or a clearly documented static review.

## Skill-specific correction checks

- [ ] Patch unsafe defaults with least-privilege, non-root containers, pinned images, safe probes, resource limits, and restricted exposure where compatible.
- [ ] Use secret references rather than inline secret values.
- [ ] Preserve deployment semantics and environment overlays.
- [ ] Add validation, policy checks, or comments for non-obvious constraints.
- [ ] Escalate risky state changes rather than applying them blindly.

## Final verification

- [ ] Run the smallest relevant automated checks first, then broaden to impacted unit, integration, end-to-end, lint, type, and build checks as available.
- [ ] When execution is unavailable, perform static verification and clearly label it as not runtime-confirmed.
- [ ] Verify both the positive path and the original failing or risky path.
- [ ] Inspect diffs after editing and confirm that only intended files changed.
- [ ] Record commands, observed outcomes, remaining risks, and any follow-up tests that require environment access.
- [ ] Run format, validate, plan, dry-run, or template rendering commands if available without mutating remote resources.
