# Dawnforge Level 1–40 Armor and Weapon Itemization Support Document

## Purpose

This document defines a large, production-oriented itemization catalog for **Echoes of the Dawnforge**. It covers equippable armor and weaponry from required level 1 through required level 40, with a strict rarity ladder and a separate set of level-40-only Godly uniques.

The full importable catalog lives in `tables/FULL_ITEM_CATALOG.csv` and `data/full_item_catalog.json`. This narrative document explains how to use the catalog, how rarity availability is controlled, and how the 200 Godly items remain exclusive to level 40.

## Collection Scope

| Metric | Count |
|---|---:|
| Total equippable pieces | 2,200 |
| Non-Godly level 1–40 pieces | 2,000 |
| Level-40 Godly unique pieces | 200 |
| Weapon pieces | 900 |
| Armor pieces | 1,300 |
| Required level range | 1-40 |

## Rarity Ladder

The catalog uses this exact rarity ladder:

1. Common
2. Uncommon
3. Rare
4. Very Rare
5. Super
6. Legend
7. Ancient
8. Mythological
9. Godly

## Hard Rarity Rules

- Level 1 items are **all Common**.
- Godly items are **only** the 200 level-40 unique pieces.
- No non-Godly item is Godly.
- Legend, Ancient, and Mythological do **not** appear before level 21.
- Legend begins at level 21 in very low quantities.
- Ancient begins at level 26 in very low quantities.
- Mythological begins at level 31 in very low quantities.
- High-tier rarity density increases gradually through level 40.
- Godly items are not included in normal monster drops, normal random chests, regular shops, or standard quest reward pools.

## Level Progression Philosophy

The catalog is designed for a hardcore 1–40 curve. Gear helps players survive the monster ladder, but it does not replace leveling, encounter mastery, combo retention, or boss execution. Early gear emphasizes foundational survivability and flow consistency. Mid-game gear introduces monster-countering tools such as shield breaking, projectile reversal, poison resistance, and rhythm timing. Late-game gear adds build-defining but controlled high-rarity effects, with Mythological items remaining scarce and Godly items fully isolated to level 40 capstone acquisition.

## Monster and Boss Gating

The item source fields respect the monster difficulty bands:

- Levels 1–10: early monster families only, such as Grid-Rushers, Gnarl-Maws, Scrap-Phalanx, and Siphon-Ticks.
- Levels 11–25: mid-game monster families may appear, including Aegis Carapace, Iron-Jaw Hound, Venom-Spitter, and Tremor-Fiend.
- Levels 26–40: late-game families may appear, including Nexus Swarmers, Nexus Warden, Scrap-Stalker, Sylvan Juggernaut, and Void Anomaly.
- Boss source rows only reference bosses at or after their milestone level.

## Item Source Model

Sources are deliberately varied so the collection supports the whole world loop:

| source_type         |   Common |   Uncommon |   Rare |   Very Rare |   Super |   Legend |   Ancient |   Mythological |   Godly |   Total |
|:--------------------|---------:|-----------:|-------:|------------:|--------:|---------:|----------:|---------------:|--------:|--------:|
| Boss Drop           |        0 |          0 |      0 |          28 |      44 |       22 |        15 |              5 |       0 |     114 |
| Crafting Pattern    |       39 |         46 |     49 |           0 |      17 |        0 |         0 |              0 |       0 |     151 |
| Dungeon Cache       |        0 |          0 |     82 |          95 |      53 |       12 |         4 |              2 |       0 |     248 |
| Faction Vendor      |        0 |         22 |     51 |          46 |      19 |        3 |         2 |              0 |       0 |     143 |
| Godly Unique Source |        0 |          0 |      0 |           0 |       0 |        0 |         0 |              0 |     200 |     200 |
| Monster Drop        |       83 |         97 |    124 |          87 |       0 |        0 |         0 |              0 |       0 |     391 |
| Quest Reward        |       63 |         86 |    106 |         102 |      43 |       15 |         4 |              3 |       0 |     422 |
| Random Chest        |       81 |         74 |     76 |          21 |       0 |        0 |         0 |              0 |       0 |     252 |
| Shop Inventory      |      116 |         62 |      0 |           0 |       0 |        0 |         0 |              0 |       0 |     178 |
| Special Event Drop  |        0 |          0 |      0 |          37 |      24 |        6 |         9 |              2 |       0 |      78 |
| World Secret        |        0 |          0 |      0 |           0 |       5 |        6 |         8 |              4 |       0 |      23 |

## Rarity Count by Level

|   required_level |   Common |   Uncommon |   Rare |   Very Rare |   Super |   Legend |   Ancient |   Mythological |   Godly |   Total |
|-----------------:|---------:|-----------:|-------:|------------:|--------:|---------:|----------:|---------------:|--------:|--------:|
|                1 |       50 |          0 |      0 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                2 |       35 |         15 |      0 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                3 |       35 |         15 |      0 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                4 |       35 |         15 |      0 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                5 |       25 |         17 |      8 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                6 |       25 |         17 |      8 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                7 |       25 |         17 |      8 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                8 |       25 |         17 |      8 |           0 |       0 |        0 |         0 |              0 |       0 |      50 |
|                9 |       15 |         18 |     12 |           5 |       0 |        0 |         0 |              0 |       0 |      50 |
|               10 |       15 |         18 |     12 |           5 |       0 |        0 |         0 |              0 |       0 |      50 |
|               11 |       15 |         18 |     12 |           5 |       0 |        0 |         0 |              0 |       0 |      50 |
|               12 |       15 |         18 |     12 |           5 |       0 |        0 |         0 |              0 |       0 |      50 |
|               13 |        8 |         16 |     15 |           8 |       3 |        0 |         0 |              0 |       0 |      50 |
|               14 |        8 |         16 |     15 |           8 |       3 |        0 |         0 |              0 |       0 |      50 |
|               15 |        8 |         16 |     15 |           8 |       3 |        0 |         0 |              0 |       0 |      50 |
|               16 |        8 |         16 |     15 |           8 |       3 |        0 |         0 |              0 |       0 |      50 |
|               17 |        5 |         12 |     18 |          10 |       5 |        0 |         0 |              0 |       0 |      50 |
|               18 |        5 |         12 |     18 |          10 |       5 |        0 |         0 |              0 |       0 |      50 |
|               19 |        5 |         12 |     18 |          10 |       5 |        0 |         0 |              0 |       0 |      50 |
|               20 |        5 |         12 |     18 |          10 |       5 |        0 |         0 |              0 |       0 |      50 |
|               21 |        2 |          8 |     18 |          15 |       6 |        1 |         0 |              0 |       0 |      50 |
|               22 |        2 |          8 |     18 |          15 |       6 |        1 |         0 |              0 |       0 |      50 |
|               23 |        2 |          8 |     18 |          15 |       6 |        1 |         0 |              0 |       0 |      50 |
|               24 |        2 |          7 |     17 |          15 |       7 |        2 |         0 |              0 |       0 |      50 |
|               25 |        2 |          7 |     17 |          15 |       7 |        2 |         0 |              0 |       0 |      50 |
|               26 |        1 |          6 |     16 |          16 |       8 |        2 |         1 |              0 |       0 |      50 |
|               27 |        1 |          6 |     16 |          16 |       8 |        2 |         1 |              0 |       0 |      50 |
|               28 |        1 |          6 |     16 |          16 |       8 |        2 |         1 |              0 |       0 |      50 |
|               29 |        1 |          5 |     15 |          16 |       8 |        3 |         2 |              0 |       0 |      50 |
|               30 |        1 |          5 |     15 |          16 |       8 |        3 |         2 |              0 |       0 |      50 |
|               31 |        0 |          4 |     14 |          17 |       9 |        3 |         2 |              1 |       0 |      50 |
|               32 |        0 |          4 |     14 |          17 |       9 |        3 |         2 |              1 |       0 |      50 |
|               33 |        0 |          3 |     12 |          17 |      10 |        4 |         3 |              1 |       0 |      50 |
|               34 |        0 |          3 |     12 |          17 |      10 |        4 |         3 |              1 |       0 |      50 |
|               35 |        0 |          3 |     12 |          17 |      10 |        4 |         3 |              1 |       0 |      50 |
|               36 |        0 |          2 |     10 |          17 |      10 |        5 |         4 |              2 |       0 |      50 |
|               37 |        0 |          2 |     10 |          17 |      10 |        5 |         4 |              2 |       0 |      50 |
|               38 |        0 |          2 |     10 |          17 |      10 |        5 |         4 |              2 |       0 |      50 |
|               39 |        0 |          1 |      8 |          17 |      11 |        6 |         5 |              2 |       0 |      50 |
|               40 |        0 |          0 |      8 |          16 |      12 |        6 |         5 |              3 |     200 |     250 |

## Weapon Variety

The weapon catalog includes melee, ranged, caster, tech, resonant, aerial, companion, and hybrid weapon families. Examples include:

- One-Hand Sword
- Greatsword
- Twin Daggers
- Data-Katana
- Glaive
- Gravity Lance
- Warhammer
- Battleaxe
- Vine Scythe
- Sonic Maul
- Tuning-Fork Blade
- Flux Staff
- Aether Focus
- Rail Rifle
- Pulse Pistols
- Crossbow
- Magnetic Grapple Gauntlet
- Hydraulic Knuckles
- Command Whistle
- Protocol Blade
- Void Chakrams
- Thermal Scepter
- Scrap Cannon
- Briar Bow

## Armor Variety

Armor pieces cover light, medium, heavy, caster, tactical, mythic, and hybrid silhouettes:

- Helms
- Masks
- Visors
- Chestplates
- Coats
- Exo-Rigs
- Pauldrons
- Mantles
- Gauntlets
- Gloves
- Bracers
- Belts
- Greaves
- Legwraps
- Boots
- Cloaks
- Capes
- Aegis Shields

## Source Behavior

### Monster Drops
Monster rows use level-appropriate monster families and variant components. These are suitable for deterministic drop tables, low-weight random drops, and crafting material conversions.

### Random Chests
Random chest rows are tied to exploration locations and should be gated by player level, zone unlock, and chest quality. They never roll Godly.

### Quest Rewards
Quest reward rows point to a specific quest ID and title from the campaign matrix. They are appropriate as selectable quest rewards, not guaranteed best-in-slot upgrades.

### Shop Inventory
Shop entries are practical filler and catch-up gear. Shops should sell mostly Common, Uncommon, Rare, and limited Very Rare pieces. No shop should ever sell a Godly item.

### Dungeon and Boss Caches
Dungeon and boss rows carry stronger rarity possibilities, especially after level 20. They remain constrained by required level and boss milestone.

### Special Event Drops
Special event rows are loot-only and should remain no-XP rewards, matching the special-event support logic already created for sublocations.

### World Secrets
World secret rows provide slow-burn exploration value. They can include Ancient or Mythological non-Godly items late-game, but not Godly items.

## Godly Unique Rules

The Godly catalog contains exactly **200** items. All are required level 40. All are account-bound. They are named unique pieces with non-stacking named effects and special acquisition language. They are intentionally separated from normal loot tables.

Godly acquisition should require one or more of the following:

- Level-40 capstone boss chain completion.
- Perfect-flow or high-combo challenge completion.
- Endgame raid wing achievement.
- Hidden atlas completion at level 40.
- Account-bound crafting with non-tradeable capstone materials.
- Timelocked prestige challenge, with no player-power shortcut before level 40.

## File Guide

| File | Purpose |
|---|---|
| `tables/FULL_ITEM_CATALOG.csv` | Complete 2,200-row item catalog. |
| `tables/NON_GODLY_LEVEL_1_40_ITEMS.csv` | The 2,000 non-Godly items, 50 per level. |
| `tables/GODLY_LEVEL_40_UNIQUES.csv` | The 200 level-40-only Godly uniques. |
| `tables/LEVEL_RARITY_COUNTS.csv` | Validation-friendly rarity distribution by level. |
| `tables/SOURCE_DISTRIBUTION.csv` | Source-type distribution by rarity. |
| `tables/GEAR_TYPE_DISTRIBUTION.csv` | Gear slot and family distribution. |
| `loot_tables/*.csv` | Source-specific loot table extracts. |
| `data/full_item_catalog.json` | Complete JSON import file. |
| `data/godly_level_40_uniques.json` | Godly unique JSON import file. |
| `VALIDATION_REPORT.txt` | Automated constraint report. |

## Implementation Notes

- Treat `drop_weight` as a design-side relative weight, not an exact final probability.
- Godly rows use `drop_weight = 0` because they should not be added to generic random tables.
- Item power is intentionally monotonic by level band and rarity but includes small variation so every item does not feel numerically identical.
- Armor and weapon stat fields are separated. Armor pieces use armor, shield, and health bonuses. Weapons use min/max damage and speed tags.
- High-rarity non-Godly items can be powerful, but their affixes are intentionally generic and stack-limited. Godly items are the only named unique mechanics.
