# Loot and Rarity System Rules

## Absolute Constraints

1. Required level 1 items must all be Common.
2. Godly rarity is reserved exclusively for the 200 level-40 unique pieces.
3. Legend, Ancient, and Mythological items cannot appear before required level 21.
4. Ancient items cannot appear before required level 26.
5. Mythological items cannot appear before required level 31.
6. Normal shops cannot sell Godly gear.
7. Normal monster drop tables cannot contain Godly gear.
8. Random chest tables cannot contain Godly gear.
9. Godly items must be account-bound and cannot be traded or sold.
10. High-tier items should support build expression without bypassing level progression.

## Rarity Availability Bands

- Level 1: Common only.
- Levels 2–4: Common and Uncommon.
- Levels 5–8: Rare enters in limited quantities.
- Levels 9–12: Very Rare enters in limited quantities.
- Levels 13–20: Super enters; no Legend, Ancient, or Mythological.
- Levels 21–25: Legend enters slowly.
- Levels 26–30: Ancient enters slowly.
- Levels 31–40: Mythological enters slowly.
- Level 40: 200 Godly uniques exist outside normal loot pools.

## Economy Controls

- Common through Rare gear can be freely replaced during leveling.
- Very Rare and Super gear should last several levels but not dominate the endgame.
- Legend gear should feel memorable and be scarce.
- Ancient gear should feel like late-era relic technology.
- Mythological gear should be near-endgame chase gear but still weaker than Godly uniques.
- Godly gear is prestige, account-bound, and level-40-only.

## Drop Table Controls

- Use `drop_weight` only within comparable loot pools.
- Do not compare Godly `drop_weight` to normal items; Godly rows are not random drops.
- Quest rewards may offer choices, but should not guarantee perfect build coverage.
- Boss drops after level 20 can carry Legend, Ancient, and Mythological entries according to the level table.
- Random chests should favor Common through Rare and rarely include Very Rare or Super.
- World secrets can reward late high-rarity gear, but only behind traversal, puzzle, or map-completion skill.
