# Dawnforge Questline XP Rewards Support Pack

This pack adds balanced XP rewards, subquest XP rewards, monster gates, boss milestone XP, gear rewards, consumable rewards, and reward-tier rules to the 250-quest Echoes of the Dawnforge storyline.

## Files

- `QUESTLINE_XP_AND_REWARD_SUPPORT_DOCUMENT.md` — full support document with all 250 quests and all 1,500 subquests.
- `QUESTLINE_XP_AND_REWARD_SUPPORT_DOCUMENT.txt` — plaintext copy of the main document.
- `QUEST_REWARD_MATRIX.csv` — one row per quest, useful for implementation, tuning, and import into production tools.
- `SUBQUEST_XP_REWARD_MATRIX.csv` — one row per subquest, useful for scripting quest rewards.
- `LEVEL_AND_ACT_BUDGETS.csv` — level-by-level XP budget allocation.
- `LEVEL_XP_CURVE.csv` — hardcore level curve from the supplied data.
- `BOSS_MILESTONE_XP_TABLE.csv` — boss placement, boss level, boss base XP, and trophy reward.
- `MONSTER_GATING_AND_BOSS_MILESTONES.md` — monster availability and safety gates.
- `REWARD_TIER_AND_ITEMIZATION_GUIDE.md` — reward-tier rules and itemization philosophy.
- `BALANCE_VALIDATION_REPORT.txt` — validation totals and gate checks.
- `data/quest_reward_matrix.json` and `data/subquest_xp_reward_matrix.json` — JSON versions for tooling.

## Validation Summary

- Quests: 250
- Subquests: 1500
- Total quest + subquest story XP: 2,107,770
- Total milestone boss encounter XP: 173,200
- Combined story + boss XP: 2,280,970 (22.1% of level-40 cap XP)
- Gating errors: 0

