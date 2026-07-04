# Infrastructure Config Policy Reviewer — Review Playbook

This supplemental document is intentionally stored inside `.agents/skills/infra-config-policy-reviewer/references/` so the skill can load deeper guidance only when needed.

## Primary objective

Detect configuration and policy mistakes in infrastructure code that can cause outages, privilege exposure, insecure networking, or broken deployments.

## Triage model

Classify every issue with:

- **Severity:** blocker, high, medium, low, nit.
- **Confidence:** confirmed, likely, possible, informational.
- **Category:** correctness, security, reliability, performance, maintainability, compatibility, test gap, documentation.
- **Fixability:** safe patch now, needs plan, needs user/product decision, defer.

## Deep review sequence

1. Review Dockerfiles, compose files, Kubernetes manifests, Helm charts, Terraform, cloud IAM, ingress, secrets references, resource limits, and deployment scripts.
2. Check least privilege, network exposure, TLS, service account permissions, container user, image tags, health probes, resource requests/limits, and rollout strategy.
3. Inspect secret handling and whether secret values are stored directly in manifests.
4. Check environment-specific overlays for drift between dev, staging, and production.
5. Review destructive infrastructure changes such as deletion, replacement, public exposure, or state migration.

## Correction sequence

1. Patch unsafe defaults with least-privilege, non-root containers, pinned images, safe probes, resource limits, and restricted exposure where compatible.
2. Use secret references rather than inline secret values.
3. Preserve deployment semantics and environment overlays.
4. Add validation, policy checks, or comments for non-obvious constraints.
5. Escalate risky state changes rather than applying them blindly.

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
- **Kubernetes Documentation:** https://kubernetes.io/docs/home/
