# Patch Plan Template — Regression Test Author

```markdown
## Patch Plan: <short title>

### Defect being corrected
<Describe the confirmed or likely defect.>

### Scope
- In scope: <files, modules, behaviors>
- Out of scope: <explicit non-goals>

### Planned edits
1. <edit and rationale>
2. <edit and rationale>
3. <edit and rationale>

### Safety checks
- Public contract affected: <yes/no/details>
- Data or migration affected: <yes/no/details>
- Security behavior affected: <yes/no/details>
- Deployment/config affected: <yes/no/details>
- Rollback strategy: <how to revert safely>

### Verification plan
- Pre-fix reproduction: <command or static evidence>
- Focused checks: <unit/type/lint/build/test commands>
- Broader checks: <integration/e2e/performance/manual checks>

### Stop conditions
Stop and ask for direction if the patch requires destructive operations, secret rotation, production access, major architecture migration, or product-policy decisions.
```
