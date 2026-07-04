# Global Patch Safety Rules

This file is placed inside `.agents/skills/` as a shared support document for all correction skills.

## Never silently perform

- Deleting user data, migrations, production resources, or branches.
- Rotating, revoking, or printing secrets.
- Rewriting Git history.
- Disabling security checks or CI gates.
- Suppressing tests or analyzer findings without a narrow justification.
- Broad dependency upgrades unrelated to the issue.
- Replacing architecture when a local fix is available.

## Always preserve

- Build and test commands from project docs or CI.
- Existing style and framework conventions.
- Public API compatibility unless explicitly changing it.
- User-facing behavior outside the defect path.
- Accurate reporting of what was and was not verified.

## Before editing high-risk files

Create a patch plan when touching authentication, authorization, payment, currency, inventory, database migrations, public protocols, infrastructure, generated files, production configuration, multiplayer authority, anti-cheat, or content-safety code.
