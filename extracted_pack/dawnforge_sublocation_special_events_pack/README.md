# Echoes of the Dawnforge — Sublocation Special Event Support Pack

This support pack adds level-gated special events to every world-map sublocation used by the map coverage overlay. These are optional high-difficulty events, not main-story leveling content.

## Scope

- World locations covered: 43
- Sublocations covered: 215
- Special events created: 215
- Minimum required player level: 20
- Maximum required player level: 40
- Completion XP: 0 for every event
- Spawned enemy XP: 0 for every event-spawned monster
- Event difficulty: every event is tuned as an elite encounter above normal fights of the same required player level

## Included files

```text
dawnforge_sublocation_special_events_pack/
├── README.md
├── SPECIAL_EVENT_SYSTEM_RULES.md
├── SPECIAL_EVENT_CATALOG.md
├── SPECIAL_EVENT_CATALOG.txt
├── SPECIAL_EVENT_DESIGN_SUMMARY.md
├── EVENT_VALIDATION_REPORT.txt
├── tables/
│   ├── BASELINE_MONSTER_STAT_MODEL.csv
│   ├── SPECIAL_EVENT_TRIGGER_MATRIX.csv
│   ├── SPECIAL_EVENT_MONSTER_STATS.csv
│   ├── SPECIAL_EVENT_LOOT_TABLE.csv
│   └── SUBLOCATION_EVENT_COVERAGE.csv
└── data/
    ├── special_events.json
    ├── special_event_monster_stats.json
    └── special_event_loot_table.json
```

## Design intent

These events are deliberately not XP faucets. They are endgame-style revisits that make earlier map spaces relevant after level 20 while avoiding easy leveling. They should be used for unique loot, challenge rotations, mastery cosmetics, material imprints, and prestige progression, not character XP.
