# Echoes of the Dawnforge — Questline XP and Reward Support Document
## Purpose
This support document layers balanced XP, subquest XP, encounter gating, boss XP separation, armor/weapon/consumable rewards, and progression-safe gear tiers onto the existing 250-quest main storyline. It is built to support a hardcore level curve where quest completion helps pacing but never replaces monster farming, combo mastery, horde clears, crafting, and repeatable high-risk content.
## Source Basis
- The campaign skeleton uses the uploaded 250-quest outline: 10 acts, 250 main-story quests, exactly six subquests per quest.
- Encounter gates use the uploaded monster, boss, class, and location design file plus the XP values supplied in the prompt.
- The hardcore level curve caps at level 40 with 10,327,000 total accumulated XP.

## Balance Philosophy
- Total quest + subquest story XP in this support pack: **2,107,770 XP**.
- Total listed milestone boss encounter XP: **173,200 XP**.
- Combined story + milestone boss XP: **2,280,970 XP**, which is **22.1%** of the level-40 cap requirement.
- This means the main questline can guide progression, but it cannot power-level a character to cap by itself. Players must still earn most XP from combat, horde density, combo multipliers, dungeons, elite routes, and other repeatable systems.
- Boss kill XP is deliberately separate from quest completion XP. A boss quest has its own quest/subquest rewards, while the boss kill adds encounter XP only if the boss is defeated.
- Gear is level-gated and power-capped to the quest tier. No quest around level 10 is allowed to require level-20+ monsters, late-game elites, or late-game boss mechanics.

## Level Budget Summary
| level | xp_required_for_next_level_basis | story_xp_share | story_xp_budget | quests_at_this_recommended_level | average_story_xp_per_quest | note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | 0.75 | 750 | 7 | 107.14 | Character level XP budget. |
| 2 | 1500 | 0.65 | 975 | 6 | 162.5 | Character level XP budget. |
| 3 | 2500 | 0.55 | 1375 | 6 | 229.17 | Character level XP budget. |
| 4 | 4000 | 0.48 | 1920 | 6 | 320.0 | Character level XP budget. |
| 5 | 6000 | 0.45 | 2700 | 7 | 385.71 | Character level XP budget. |
| 6 | 8500 | 0.45 | 3825 | 6 | 637.5 | Character level XP budget. |
| 7 | 11500 | 0.45 | 5175 | 6 | 862.5 | Character level XP budget. |
| 8 | 15000 | 0.45 | 6750 | 6 | 1125.0 | Character level XP budget. |
| 9 | 20000 | 0.4 | 8000 | 7 | 1142.86 | Character level XP budget. |
| 10 | 26000 | 0.4 | 10400 | 6 | 1733.33 | Character level XP budget. |
| 11 | 33000 | 0.34 | 11220 | 6 | 1870.0 | Character level XP budget. |
| 12 | 41000 | 0.34 | 13940 | 6 | 2323.33 | Character level XP budget. |
| 13 | 50000 | 0.34 | 17000 | 7 | 2428.57 | Character level XP budget. |
| 14 | 60000 | 0.34 | 20400 | 6 | 3400.0 | Character level XP budget. |
| 15 | 72000 | 0.34 | 24480 | 6 | 4080.0 | Character level XP budget. |
| 16 | 85000 | 0.34 | 28900 | 6 | 4816.67 | Character level XP budget. |
| 17 | 100000 | 0.3 | 30000 | 7 | 4285.71 | Character level XP budget. |
| 18 | 116000 | 0.3 | 34800 | 6 | 5800.0 | Character level XP budget. |
| 19 | 134000 | 0.3 | 40200 | 6 | 6700.0 | Character level XP budget. |
| 20 | 154000 | 0.3 | 46200 | 6 | 7700.0 | Character level XP budget. |
| 21 | 176000 | 0.26 | 45760 | 5 | 9152.0 | Character level XP budget. |
| 22 | 200000 | 0.26 | 52000 | 5 | 10400.0 | Character level XP budget. |
| 23 | 226000 | 0.26 | 58760 | 5 | 11752.0 | Character level XP budget. |
| 24 | 254000 | 0.26 | 66040 | 5 | 13208.0 | Character level XP budget. |
| 25 | 284000 | 0.26 | 73840 | 5 | 14768.0 | Character level XP budget. |
| 26 | 316000 | 0.22 | 69520 | 5 | 13904.0 | Character level XP budget. |
| 27 | 350000 | 0.22 | 77000 | 5 | 15400.0 | Character level XP budget. |
| 28 | 386000 | 0.22 | 84920 | 5 | 16984.0 | Character level XP budget. |
| 29 | 424000 | 0.22 | 93280 | 5 | 18656.0 | Character level XP budget. |
| 30 | 464000 | 0.22 | 102080 | 5 | 20416.0 | Character level XP budget. |
| 31 | 506000 | 0.18 | 91080 | 5 | 18216.0 | Character level XP budget. |
| 32 | 550000 | 0.18 | 99000 | 5 | 19800.0 | Character level XP budget. |
| 33 | 596000 | 0.18 | 107280 | 5 | 21456.0 | Character level XP budget. |
| 34 | 644000 | 0.18 | 115920 | 5 | 23184.0 | Character level XP budget. |
| 35 | 694000 | 0.18 | 124920 | 5 | 24984.0 | Character level XP budget. |
| 36 | 746000 | 0.14 | 104440 | 7 | 14920.0 | Character level XP budget. |
| 37 | 800000 | 0.14 | 112000 | 6 | 18666.67 | Character level XP budget. |
| 38 | 856000 | 0.14 | 119840 | 6 | 19973.33 | Character level XP budget. |
| 39 | 914000 | 0.14 | 127960 | 18 | 7108.89 | Character level XP budget. |
| 40 | 914000 | 0.08 | 73120 | 13 | 5624.62 | Capstone/Mastery budget; applies to leveling only if player is not yet capped. |

## Act and Recommended Level Schedule
| act | act_name | quest_range | recommended_levels | primary_reward_theme | main_material |
| --- | --- | --- | --- | --- | --- |
| 1 | Ashes of Meridian Gate | Q001-Q025 | 1-4 | Meridian | Cracked Aether Shard |
| 2 | The Verdant Accord | Q026-Q050 | 5-8 | Elderbloom | Living Amber |
| 3 | The Iron Crown Rebellion | Q051-Q075 | 9-12 | Cindervale | Cindervale Ingot |
| 4 | Glass Desert and the Sunken Star | Q076-Q100 | 13-16 | Sunken-Star | Sapglass Lens |
| 5 | Tides of the Leviathan Code | Q101-Q125 | 17-20 | Leviathan | Leviathan Pearl |
| 6 | The Hollow Moon War | Q126-Q150 | 21-25 | Hollow-Moon | Moonbone Alloy |
| 7 | Siege of the Black Meridian | Q151-Q175 | 26-30 | Black-Meridian | Meridian Cipher Plate |
| 8 | Shards of the First Dream | Q176-Q200 | 31-35 | First-Dream | Dreamglass Thread |
| 9 | The Sevenfold Eclipse | Q201-Q225 | 36-39 | Sevenfold | Eclipse Sigil Dust |
| 10 | Dawnforge Endgame | Q226-Q250 | 39-40 | Dawnforge | Dawnforge Seed-Splinter |

## Monster Gate Summary
| level_band | normal_monsters | rule |
| --- | --- | --- |
| 1-10 | The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks | Early-game only; teaches combo density, movement restriction, shield clumps, and meter-drain priority targets. |
| 11-25 | The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; early fodder may appear as combo fuel | Mid-game introduces counters, directional attacks, projectiles, timing disruption, and area denial. |
| 26-40 | The Nexus Swarmers/Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly | Late game introduces fusion pressure, assassin flanks, heavy environmental tanks, and phase/reality elites. |

## Milestone Boss Placement
| quest_id | boss | level | base_xp | reward |
| --- | --- | --- | --- | --- |
| Q024 | The Ivory Behemoth | 4 | 1200 | Ivory Tuskgraft Weapon Core |
| Q049 | The Resonant Behemoth | 8 | 2500 | Resonant Spine Resonator |
| Q074 | The Resonance Maestro | 12 | 4500 | Maestro's Tuning-Fork Focus |
| Q099 | The Apex Chimera | 16 | 7000 | Chimeric Adaptation Blade |
| Q124 | The Null Anomaly | 20 | 12000 | Null-Splinter Phaseblade |
| Q149 | The Ascendant Colossus | 25 | 18000 | Colossus Heartplate |
| Q174 | The Data-Forged Evolvarch | 30 | 28000 | Evolvarch Recursive Core |
| Q199 | The Syndicate Lich | 35 | 40000 | Lich-Court Command Scepter |
| Q249 | The Astral Sovereign | 40 | 60000 | Astral Sovereign Gravity Crown |

## Full Quest Reward Matrix
Each quest below lists six subquest XP values, the quest-completion XP, the separate boss encounter XP if relevant, the reward package, and the encounter-gating rule.

### Q001 — The Siren Over Starfall Plaza
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Investigation
- **Primary location:** Starfall Plaza
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 35 XP = **105 story XP**.
- **Quest completion reward:** Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Meet Captain Lyra Voss at Starfall Plaza, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Inspect Cloudhook Docks for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 10 | Faction scrip +1; 1x Weak Focus Tonic | Interview survivors from Meridian Guard and Skywright Guild, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 10 | 4x Cracked Aether Shard; repair parts bundle | Follow the recovered clue through Archive of First Light, avoiding false leads planted by the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 5 | Confrontation | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Deliver a verified finding to Engineer Sera Nox, update the alliance risk map, and unlock the next operational lead. |

### Q002 — Smoke in the Gearworks
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Rescue
- **Primary location:** Lower Gearworks
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 40 XP = **110 story XP**.
- **Quest completion reward:** Meridian Field-Survival Cache — Consumable + Utility Cache, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Triangulate the missing group’s last signal between Lower Gearworks, The Broken Lift, and The Embermarket. |
| 2 | Safe Route | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 10 | Faction scrip +1; 1x Weak Focus Tonic | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 10 | 4x Cracked Aether Shard; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while the Veiled Hand saboteurs and their commander, Sable Veyr tries to cut them off. |
| 6 | Debrief | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Return the survivors to Archivist Pell, extract their intelligence, and add their testimony to the main campaign board. |

### Q003 — The Courier with No Shadow
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Defense
- **Primary location:** Cloudhook Docks
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 45 XP = **115 story XP**.
- **Quest completion reward:** Meridian Field-Survival Cache — Consumable + Utility Cache, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Survey Cloudhook Docks, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Veiled Hand defenders. |
| 3 | First Wave | 10 | Faction scrip +1; 1x Weak Focus Tonic | Repel the opening attack from the Veiled Hand saboteurs and their commander, Sable Veyr while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 10 | 4x Cracked Aether Shard; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Archive of First Light before morale collapses. |
| 5 | Counterstrike | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Stabilize Crown Battery, count losses, recover evidence, and authorize the next campaign movement. |

### Q004 — Hold the Cloudhook Docks
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Stealth
- **Primary location:** The Broken Lift
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 35 XP = **105 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Warden Jalen without alerting the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 2 | Patrol Read | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across The Broken Lift. |
| 3 | Silent Entry | 10 | Faction scrip +1; 1x Weak Focus Tonic | Enter The Embermarket through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 10 | 4x Cracked Aether Shard; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Escape through Starfall Plaza, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Report to Captain Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q005 — A Core That Should Be Dead
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Crafting
- **Primary location:** Archive of First Light
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 40 XP = **110 story XP**.
- **Quest completion reward:** Meridian Gloves Armor Piece — Armor Piece, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Receive the schematic from Oracle Child Nima and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Recover parts or reagents from Archive of First Light, Crown Battery, and a hostile cache controlled by the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 3 | Prototype Build | 10 | Faction scrip +1; 1x Weak Focus Tonic | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 10 | 4x Cracked Aether Shard; repair parts bundle | Test the prototype in Lower Gearworks, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Defend Archivist Pell and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q006 — Archive Keys and Ashes
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Diplomacy
- **Primary location:** The Embermarket
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 30 XP = **100 story XP**.
- **Quest completion reward:** Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Embermarket by solving their immediate access demand. |
| 2 | Proof Package | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Collect verifiable proof from Starfall Plaza, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 10 | Faction scrip +1; 1x Weak Focus Tonic | Hear the objections of Skywright Guild and Veiled Hand, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 10 | 4x Cracked Aether Shard; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while the Veiled Hand saboteurs and their commander, Sable Veyr tries to inflame the room. |
| 5 | Binding Action | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Return to Captain Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q007 — The Warden’s Missing Watch
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 1
- **Quest type:** Exploration
- **Primary location:** Crown Battery
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers; normal combat cap: level 2.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 70 XP + quest completion 35 XP = **105 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 92, minimum level 1.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 4x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 10 | 2x Cracked Aether Shard; scouting reputation +1 | Open the route from Crown Battery into Lower Gearworks and establish a temporary forward camp. |
| 2 | Traversal Trial | 10 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 10 | Faction scrip +1; 1x Weak Focus Tonic | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 10 | 4x Cracked Aether Shard; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 15 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Signal Archivist Pell, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q008 — Embermarket Blackout
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Dungeon
- **Primary location:** Starfall Plaza
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 100 XP + quest completion 75 XP = **175 story XP**.
- **Quest completion reward:** Meridian Delver Cache: Gloves or Weapon-Mod Choice — Dungeon Gear Choice Cache, Common, item power 111, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Starfall Plaza. |
| 2 | First Wing | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 15 | Faction scrip +1; 1x Weak Focus Tonic | Solve the mid-dungeon puzzle or traversal gauntlet in Cloudhook Docks while enemies pressure the group. |
| 4 | Elite Guardian | 15 | 4x Cracked Aether Shard; repair parts bundle | Defeat a themed guardian tied to the Veiled Hand saboteurs and their commander, Sable Veyr, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 20 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the cracked Aether Core. |
| 6 | Dungeon Exit | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Escape collapse, corruption, or lockdown and brief Oracle Child Nima on what the dungeon revealed. |

### Q009 — Saboteurs Below the Lift
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Boss
- **Primary location:** Lower Gearworks
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 95 XP + quest completion 80 XP = **175 story XP**.
- **Quest completion reward:** Meridian Elite Spoils Cache: Gloves Pattern — Elite Gear Pattern, Common, item power 114, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 2 | Arena Preparation | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Disable shields, open safe lanes, and position allied supports around Lower Gearworks. |
| 3 | Phase One | 15 | Faction scrip +1; 1x Weak Focus Tonic | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 15 | 4x Cracked Aether Shard; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 15 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Secure the cracked Aether Core, report to Warden Jalen, and unlock the next act-level route or political consequence. |

### Q010 — A Pact with the Skywrights
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Moral
- **Primary location:** Cloudhook Docks
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 100 XP + quest completion 50 XP = **150 story XP**.
- **Quest completion reward:** Meridian Class Weapon Calibration Kit — Weapon Upgrade Component, Common, item power 104, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to Cloudhook Docks. |
| 2 | Evidence Balance | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Verify facts at Archive of First Light so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 15 | Faction scrip +1; 1x Weak Focus Tonic | Ask Oracle Child Nima and Archivist Pell to model the likely cost of each available decision. |
| 4 | Pressure Event | 15 | 4x Cracked Aether Shard; repair parts bundle | Survive an attack, riot, or betrayal by the Veiled Hand saboteurs and their commander, Sable Veyr that tries to force a rushed answer. |
| 5 | Decision | 20 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q011 — The Child Who Heard the Starwell
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Assault
- **Primary location:** The Broken Lift
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 100 XP + quest completion 70 XP = **170 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 109, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Coordinate with Captain Lyra Voss, assign allied squads, and identify the primary breach point at The Broken Lift. |
| 2 | Forward Push | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 15 | Faction scrip +1; 1x Weak Focus Tonic | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 4 | Interior Fight | 15 | 4x Cracked Aether Shard; repair parts bundle | Move through The Embermarket, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 20 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Secure Starfall Plaza, hand control to allies, and verify that the assault achieved the story purpose. |

### Q012 — Signal Fires on the Spire
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Escort
- **Primary location:** Archive of First Light
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 100 XP + quest completion 55 XP = **155 story XP**.
- **Quest completion reward:** Meridian Field-Survival Cache — Consumable + Utility Cache, Common, item power 104, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Archive of First Light to Lower Gearworks with Archivist Pell. |
| 2 | First Leg | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 15 | Faction scrip +1; 1x Weak Focus Tonic | Collect fuel, medicine, ritual charges, or repair parts at Crown Battery before the route collapses. |
| 4 | Ambush Response | 15 | 4x Cracked Aether Shard; repair parts bundle | Defeat or bypass the Veiled Hand saboteurs and their commander, Sable Veyr forces without losing the protected objective. |
| 5 | Final Crossing | 20 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q013 — The Broken Lift Descent
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 2
- **Quest type:** Puzzle
- **Primary location:** The Embermarket
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 3.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 100 XP + quest completion 50 XP = **150 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 104, minimum level 2.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 15 | 2x Cracked Aether Shard; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing The Embermarket. |
| 2 | First Solution | 15 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Solve the opening sequence using clues from Engineer Sera Nox, the environment, and one recovered record. |
| 3 | Constraint Shift | 15 | Faction scrip +1; 1x Weak Focus Tonic | Adapt when the Veiled Hand saboteurs and their commander, Sable Veyr changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 15 | 4x Cracked Aether Shard; repair parts bundle | Resolve three linked mechanisms across Starfall Plaza, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 20 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 20 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Open the path, recover the cracked Aether Core, and document the rule that will matter in a later quest. |

### Q014 — Sable Veyr’s Calling Card
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Heist
- **Primary location:** Crown Battery
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 145 XP + quest completion 85 XP = **230 story XP**.
- **Quest completion reward:** Meridian Technical Cache: Cracked Aether Shard Bundle — Crafting / Upgrade Materials, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Survey Crown Battery, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Assign support tasks to Warden Jalen, Captain Lyra Voss, and any recruited faction specialists. |
| 3 | Access Tool | 25 | Faction scrip +1; 1x Weak Focus Tonic | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Lower Gearworks. |
| 4 | The Lift | 25 | 4x Cracked Aether Shard; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 30 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q015 — Refugees at the Crown Battery
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Network
- **Primary location:** Starfall Plaza
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 145 XP + quest completion 85 XP = **230 story XP**.
- **Quest completion reward:** Meridian Helm Armor Piece — Armor Piece, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Starfall Plaza. |
| 2 | Signal Capture | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 25 | Faction scrip +1; 1x Weak Focus Tonic | Restore or harden three relay points across Cloudhook Docks while enemies attempt live sabotage. |
| 4 | Protocol Break | 25 | 4x Cracked Aether Shard; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 30 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Verify with Oracle Child Nima that the repaired network persists and unlocks a stable path forward. |

### Q016 — Three Locks of First Light
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Investigation
- **Primary location:** Lower Gearworks
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 150 XP + quest completion 70 XP = **220 story XP**.
- **Quest completion reward:** Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Meet Captain Lyra Voss at Lower Gearworks, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Inspect The Broken Lift for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 25 | Faction scrip +1; 1x Weak Focus Tonic | Interview survivors from Refugee Conclave and Meridian Guard, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 25 | 4x Cracked Aether Shard; repair parts bundle | Follow the recovered clue through The Embermarket, avoiding false leads planted by the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 5 | Confrontation | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 35 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Deliver a verified finding to Engineer Sera Nox, update the alliance risk map, and unlock the next operational lead. |

### Q017 — Ambush at the Rain Chain
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Rescue
- **Primary location:** Cloudhook Docks
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 145 XP + quest completion 80 XP = **225 story XP**.
- **Quest completion reward:** Meridian Field-Survival Cache — Consumable + Utility Cache, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Triangulate the missing group’s last signal between Cloudhook Docks, Archive of First Light, and Crown Battery. |
| 2 | Safe Route | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 25 | Faction scrip +1; 1x Weak Focus Tonic | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 25 | 4x Cracked Aether Shard; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while the Veiled Hand saboteurs and their commander, Sable Veyr tries to cut them off. |
| 6 | Debrief | 30 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Return the survivors to Archivist Pell, extract their intelligence, and add their testimony to the main campaign board. |

### Q018 — The Silent Bell Tower
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Defense
- **Primary location:** The Broken Lift
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 150 XP + quest completion 95 XP = **245 story XP**.
- **Quest completion reward:** Meridian Field-Survival Cache — Consumable + Utility Cache, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Survey The Broken Lift, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Skywright Guild defenders. |
| 3 | First Wave | 25 | Faction scrip +1; 1x Weak Focus Tonic | Repel the opening attack from the Veiled Hand saboteurs and their commander, Sable Veyr while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 25 | 4x Cracked Aether Shard; repair parts bundle | Respond to a breach, sabotage event, or elite flank at The Embermarket before morale collapses. |
| 5 | Counterstrike | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 35 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Stabilize Starfall Plaza, count losses, recover evidence, and authorize the next campaign movement. |

### Q019 — The Aether Core Awakens
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 3
- **Quest type:** Stealth
- **Primary location:** Archive of First Light
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws; normal combat cap: level 4.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 150 XP + quest completion 75 XP = **225 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 116, minimum level 3.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 5x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 20 | 2x Cracked Aether Shard; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Warden Jalen without alerting the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 2 | Patrol Read | 20 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Archive of First Light. |
| 3 | Silent Entry | 25 | Faction scrip +1; 1x Weak Focus Tonic | Enter Crown Battery through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 25 | 4x Cracked Aether Shard; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 25 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Escape through Lower Gearworks, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 35 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Report to Captain Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q020 — Trial of the Meridian Guard
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Crafting
- **Primary location:** The Embermarket
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 195 XP + quest completion 110 XP = **305 story XP**.
- **Quest completion reward:** Meridian Class Weapon Calibration Kit — Weapon Upgrade Component, Common, item power 128, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 25 | 2x Cracked Aether Shard; scouting reputation +1 | Receive the schematic from Oracle Child Nima and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Recover parts or reagents from The Embermarket, Starfall Plaza, and a hostile cache controlled by the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 3 | Prototype Build | 30 | Faction scrip +1; 1x Weak Focus Tonic | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 35 | 4x Cracked Aether Shard; repair parts bundle | Test the prototype in Cloudhook Docks, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Defend Archivist Pell and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 40 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q021 — The False Evacuation Order
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Diplomacy
- **Primary location:** Crown Battery
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 195 XP + quest completion 80 XP = **275 story XP**.
- **Quest completion reward:** Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Common, item power 128, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 25 | 2x Cracked Aether Shard; scouting reputation +1 | Earn entry to a council, war table, or faction court at Crown Battery by solving their immediate access demand. |
| 2 | Proof Package | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Collect verifiable proof from Lower Gearworks, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 30 | Faction scrip +1; 1x Weak Focus Tonic | Hear the objections of Meridian Guard and Skywright Guild, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 35 | 4x Cracked Aether Shard; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while the Veiled Hand saboteurs and their commander, Sable Veyr tries to inflame the room. |
| 5 | Binding Action | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 40 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Return to Captain Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q022 — Duel on the Elevator Spine
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Dungeon
- **Primary location:** Starfall Plaza
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 195 XP + quest completion 140 XP = **335 story XP**.
- **Quest completion reward:** Meridian Delver Cache: Chestguard or Weapon-Mod Choice — Dungeon Gear Choice Cache, Common, item power 135, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 25 | 2x Cracked Aether Shard; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Starfall Plaza. |
| 2 | First Wing | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 30 | Faction scrip +1; 1x Weak Focus Tonic | Solve the mid-dungeon puzzle or traversal gauntlet in Cloudhook Docks while enemies pressure the group. |
| 4 | Elite Guardian | 35 | 4x Cracked Aether Shard; repair parts bundle | Defeat a themed guardian tied to the Veiled Hand saboteurs and their commander, Sable Veyr, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the cracked Aether Core. |
| 6 | Dungeon Exit | 40 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Escape collapse, corruption, or lockdown and brief Warden Jalen on what the dungeon revealed. |

### Q023 — The Veiled Hand Revealed
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Assault
- **Primary location:** Lower Gearworks
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 190 XP + quest completion 130 XP = **320 story XP**.
- **Quest completion reward:** Meridian Wayfinder Supply Cache — General Reward Cache, Common, item power 133, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 25 | 2x Cracked Aether Shard; scouting reputation +1 | Coordinate with Engineer Sera Nox, assign allied squads, and identify the primary breach point at Lower Gearworks. |
| 2 | Forward Push | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 30 | Faction scrip +1; 1x Weak Focus Tonic | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 4 | Interior Fight | 30 | 4x Cracked Aether Shard; repair parts bundle | Move through The Broken Lift, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 40 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Secure The Embermarket, hand control to allies, and verify that the assault achieved the story purpose. |

### Q024 — Reignite the Crown Battery
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Boss
- **Primary location:** Cloudhook Docks
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** The Ivory Behemoth — separate encounter XP: 1,200.
- **XP package:** subquests total 185 XP + quest completion 155 XP = **340 story XP**.
- **Quest completion reward:** Ivory Tuskgraft Weapon Core (The Ivory Behemoth Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Common, item power 150, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 25 | 2x Cracked Aether Shard; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under the Veiled Hand saboteurs and their commander, Sable Veyr. |
| 2 | Arena Preparation | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Disable shields, open safe lanes, and position allied supports around Cloudhook Docks. |
| 3 | Phase One | 30 | Faction scrip +1; 1x Weak Focus Tonic | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 30 | 4x Cracked Aether Shard; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 35 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Secure the cracked Aether Core, report to Warden Jalen, and unlock the next act-level route or political consequence. |

### Q025 — Meridian Gate Holds
- **Act:** 1 — Ashes of Meridian Gate
- **Recommended level:** 4
- **Quest type:** Resolution
- **Primary location:** The Broken Lift
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 5.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 200 XP + quest completion 145 XP = **345 story XP**.
- **Quest completion reward:** Meridian Act-Capstone Relic: Aether Core Stabilizer — Act Artifact + Set Token, Common, item power 151, minimum level 4.
- **Consumables/materials:** 1x Minor Vitality Injector, 1x Weak Focus Tonic, 6x Cracked Aether Shard.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 30 | 2x Cracked Aether Shard; scouting reputation +1 | Meet Oracle Child Nima, Archivist Pell, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 30 | 3x Cracked Aether Shard; 1x Minor Vitality Injector | Resolve one survivor need, one political risk, and one technical or magical instability at The Broken Lift. |
| 3 | Public Moment | 30 | Faction scrip +1; 1x Weak Focus Tonic | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 35 | 4x Cracked Aether Shard; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 35 | 1x Minor Vitality Injector; 1x Weak Focus Tonic; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 40 | Quest-turn-in cache fragment; 5x Cracked Aether Shard | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q026 — The Forest Refuses the Map
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Investigation
- **Primary location:** Elderbloom Canopy
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 260 XP + quest completion 120 XP = **380 story XP**.
- **Quest completion reward:** Elderbloom Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 35 | 3x Living Amber; scouting reputation +1 | Meet Matriarch Ilyra Thorne at Elderbloom Canopy, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 40 | 4x Living Amber; 1x Standard Vitality Injector | Inspect The Sapglass Labyrinth for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 40 | Faction scrip +1; 1x Combo Salve | Interview survivors from Verdant Accord and Thorn Choir, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 45 | 5x Living Amber; repair parts bundle | Follow the recovered clue through Mosswake Village, avoiding false leads planted by Graft-King Osric and the Thorn Choir. |
| 5 | Confrontation | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 55 | Quest-turn-in cache fragment; 6x Living Amber | Deliver a verified finding to Biomancer Tavi, update the alliance risk map, and unlock the next operational lead. |

### Q027 — Amberback Crossing
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Rescue
- **Primary location:** Amberback Crossing
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 255 XP + quest completion 135 XP = **390 story XP**.
- **Quest completion reward:** Elderbloom Field-Survival Cache — Consumable + Utility Cache, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 35 | 3x Living Amber; scouting reputation +1 | Triangulate the missing group’s last signal between Amberback Crossing, Rootcourt Hollow, and Thorn Choir Nursery. |
| 2 | Safe Route | 40 | 4x Living Amber; 1x Standard Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 40 | Faction scrip +1; 1x Combo Salve | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 45 | 5x Living Amber; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Graft-King Osric and the Thorn Choir tries to cut them off. |
| 6 | Debrief | 50 | Quest-turn-in cache fragment; 6x Living Amber | Return the survivors to Rook the Rootless, extract their intelligence, and add their testimony to the main campaign board. |

### Q028 — A Village Wrapped in Vines
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Defense
- **Primary location:** The Sapglass Labyrinth
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 260 XP + quest completion 160 XP = **420 story XP**.
- **Quest completion reward:** Elderbloom Field-Survival Cache — Consumable + Utility Cache, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 35 | 3x Living Amber; scouting reputation +1 | Survey The Sapglass Labyrinth, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 40 | 4x Living Amber; 1x Standard Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Amberback Tribes defenders. |
| 3 | First Wave | 40 | Faction scrip +1; 1x Combo Salve | Repel the opening attack from Graft-King Osric and the Thorn Choir while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 45 | 5x Living Amber; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Mosswake Village before morale collapses. |
| 5 | Counterstrike | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 55 | Quest-turn-in cache fragment; 6x Living Amber | Stabilize Greenfire Basin, count losses, recover evidence, and authorize the next campaign movement. |

### Q029 — The Rootless Guide
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Stealth
- **Primary location:** Rootcourt Hollow
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 250 XP + quest completion 130 XP = **380 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 35 | 3x Living Amber; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Huntress Mael without alerting Graft-King Osric and the Thorn Choir. |
| 2 | Patrol Read | 40 | 4x Living Amber; 1x Standard Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Rootcourt Hollow. |
| 3 | Silent Entry | 40 | Faction scrip +1; 1x Combo Salve | Enter Thorn Choir Nursery through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 40 | 5x Living Amber; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escape through Elderbloom Canopy, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 50 | Quest-turn-in cache fragment; 6x Living Amber | Report to Matriarch Ilyra Thorne, compare the intel to existing clues, and flag the next vulnerability. |

### Q030 — Sapglass Footprints
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Crafting
- **Primary location:** Mosswake Village
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 255 XP + quest completion 145 XP = **400 story XP**.
- **Quest completion reward:** Elderbloom Class Weapon Calibration Kit — Weapon Upgrade Component, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 35 | 3x Living Amber; scouting reputation +1 | Receive the schematic from Sprig-Oracle Fen and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 40 | 4x Living Amber; 1x Standard Vitality Injector | Recover parts or reagents from Mosswake Village, Greenfire Basin, and a hostile cache controlled by Graft-King Osric and the Thorn Choir. |
| 3 | Prototype Build | 40 | Faction scrip +1; 1x Combo Salve | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 45 | 5x Living Amber; repair parts bundle | Test the prototype in Amberback Crossing, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defend Rook the Rootless and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 50 | Quest-turn-in cache fragment; 6x Living Amber | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q031 — The Thorn Choir’s Hymn
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Diplomacy
- **Primary location:** Thorn Choir Nursery
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 250 XP + quest completion 110 XP = **360 story XP**.
- **Quest completion reward:** Elderbloom Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 35 | 3x Living Amber; scouting reputation +1 | Earn entry to a council, war table, or faction court at Thorn Choir Nursery by solving their immediate access demand. |
| 2 | Proof Package | 40 | 4x Living Amber; 1x Standard Vitality Injector | Collect verifiable proof from Elderbloom Canopy, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 40 | Faction scrip +1; 1x Combo Salve | Hear the objections of Thorn Choir and Amberback Tribes, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 40 | 5x Living Amber; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Graft-King Osric and the Thorn Choir tries to inflame the room. |
| 5 | Binding Action | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 50 | Quest-turn-in cache fragment; 6x Living Amber | Return to Matriarch Ilyra Thorne, lock in the new ally or resource, and record the consequence for future quests. |

### Q032 — Spores in the Survey Camp
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 5
- **Quest type:** Exploration
- **Primary location:** Greenfire Basin
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx; normal combat cap: level 6.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 250 XP + quest completion 120 XP = **370 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 140, minimum level 5.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 6x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 35 | 3x Living Amber; scouting reputation +1 | Open the route from Greenfire Basin into Amberback Crossing and establish a temporary forward camp. |
| 2 | Traversal Trial | 40 | 4x Living Amber; 1x Standard Vitality Injector | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 40 | Faction scrip +1; 1x Combo Salve | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 40 | 5x Living Amber; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 45 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 50 | Quest-turn-in cache fragment; 6x Living Amber | Signal Rook the Rootless, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q033 — A Trial Before Rootcourt
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Dungeon
- **Primary location:** Elderbloom Canopy
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 395 XP + quest completion 290 XP = **685 story XP**.
- **Quest completion reward:** Elderbloom Delver Cache: Cloak or Weapon-Mod Choice — Dungeon Gear Choice Cache, Uncommon, item power 159, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 55 | 3x Living Amber; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Elderbloom Canopy. |
| 2 | First Wing | 60 | 4x Living Amber; 1x Standard Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 65 | Faction scrip +1; 1x Combo Salve | Solve the mid-dungeon puzzle or traversal gauntlet in The Sapglass Labyrinth while enemies pressure the group. |
| 4 | Elite Guardian | 65 | 5x Living Amber; repair parts bundle | Defeat a themed guardian tied to Graft-King Osric and the Thorn Choir, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Verdant Cipher. |
| 6 | Dungeon Exit | 80 | Quest-turn-in cache fragment; 6x Living Amber | Escape collapse, corruption, or lockdown and brief Sprig-Oracle Fen on what the dungeon revealed. |

### Q034 — Greenfire Samples
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Boss
- **Primary location:** Amberback Crossing
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 380 XP + quest completion 315 XP = **695 story XP**.
- **Quest completion reward:** Elderbloom Elite Spoils Cache: Cloak Pattern — Elite Gear Pattern, Uncommon, item power 162, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 55 | 3x Living Amber; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Graft-King Osric and the Thorn Choir. |
| 2 | Arena Preparation | 55 | 4x Living Amber; 1x Standard Vitality Injector | Disable shields, open safe lanes, and position allied supports around Amberback Crossing. |
| 3 | Phase One | 60 | Faction scrip +1; 1x Combo Salve | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 65 | 5x Living Amber; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 75 | Quest-turn-in cache fragment; 6x Living Amber | Secure the Verdant Cipher, report to Huntress Mael, and unlock the next act-level route or political consequence. |

### Q035 — The Missing Amberback Calves
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Moral
- **Primary location:** The Sapglass Labyrinth
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 390 XP + quest completion 200 XP = **590 story XP**.
- **Quest completion reward:** Elderbloom Bracers Armor Piece — Armor Piece, Uncommon, item power 152, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 55 | 3x Living Amber; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to The Sapglass Labyrinth. |
| 2 | Evidence Balance | 60 | 4x Living Amber; 1x Standard Vitality Injector | Verify facts at Mosswake Village so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 60 | Faction scrip +1; 1x Combo Salve | Ask Sprig-Oracle Fen and Rook the Rootless to model the likely cost of each available decision. |
| 4 | Pressure Event | 65 | 5x Living Amber; repair parts bundle | Survive an attack, riot, or betrayal by Graft-King Osric and the Thorn Choir that tries to force a rushed answer. |
| 5 | Decision | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 80 | Quest-turn-in cache fragment; 6x Living Amber | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q036 — Nursery of Borrowed Faces
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Assault
- **Primary location:** Rootcourt Hollow
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 395 XP + quest completion 265 XP = **660 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 157, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 55 | 3x Living Amber; scouting reputation +1 | Coordinate with Matriarch Ilyra Thorne, assign allied squads, and identify the primary breach point at Rootcourt Hollow. |
| 2 | Forward Push | 60 | 4x Living Amber; 1x Standard Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 65 | Faction scrip +1; 1x Combo Salve | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Graft-King Osric and the Thorn Choir. |
| 4 | Interior Fight | 65 | 5x Living Amber; repair parts bundle | Move through Thorn Choir Nursery, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 80 | Quest-turn-in cache fragment; 6x Living Amber | Secure Elderbloom Canopy, hand control to allies, and verify that the assault achieved the story purpose. |

### Q037 — The Biomancer’s Debt
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Escort
- **Primary location:** Mosswake Village
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 395 XP + quest completion 215 XP = **610 story XP**.
- **Quest completion reward:** Elderbloom Field-Survival Cache — Consumable + Utility Cache, Uncommon, item power 152, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 55 | 3x Living Amber; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Mosswake Village to Amberback Crossing with Rook the Rootless. |
| 2 | First Leg | 60 | 4x Living Amber; 1x Standard Vitality Injector | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 65 | Faction scrip +1; 1x Combo Salve | Collect fuel, medicine, ritual charges, or repair parts at Greenfire Basin before the route collapses. |
| 4 | Ambush Response | 65 | 5x Living Amber; repair parts bundle | Defeat or bypass Graft-King Osric and the Thorn Choir forces without losing the protected objective. |
| 5 | Final Crossing | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 80 | Quest-turn-in cache fragment; 6x Living Amber | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q038 — The River That Flows Upward
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 6
- **Quest type:** Puzzle
- **Primary location:** Thorn Choir Nursery
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 7.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 385 XP + quest completion 200 XP = **585 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 152, minimum level 6.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 55 | 3x Living Amber; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing Thorn Choir Nursery. |
| 2 | First Solution | 60 | 4x Living Amber; 1x Standard Vitality Injector | Solve the opening sequence using clues from Biomancer Tavi, the environment, and one recovered record. |
| 3 | Constraint Shift | 60 | Faction scrip +1; 1x Combo Salve | Adapt when Graft-King Osric and the Thorn Choir changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 65 | 5x Living Amber; repair parts bundle | Resolve three linked mechanisms across Elderbloom Canopy, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 70 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 75 | Quest-turn-in cache fragment; 6x Living Amber | Open the path, recover the Verdant Cipher, and document the rule that will matter in a later quest. |

### Q039 — Three Seeds of Consent
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Heist
- **Primary location:** Greenfire Basin
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 560 XP + quest completion 315 XP = **875 story XP**.
- **Quest completion reward:** Elderbloom Technical Cache: Living Amber Bundle — Crafting / Upgrade Materials, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 80 | 3x Living Amber; scouting reputation +1 | Survey Greenfire Basin, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 85 | 4x Living Amber; 1x Standard Vitality Injector | Assign support tasks to Huntress Mael, Matriarch Ilyra Thorne, and any recruited faction specialists. |
| 3 | Access Tool | 90 | Faction scrip +1; 1x Combo Salve | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Amberback Crossing. |
| 4 | The Lift | 95 | 5x Living Amber; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 110 | Quest-turn-in cache fragment; 6x Living Amber | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q040 — Rook’s Broken Oath
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Network
- **Primary location:** Elderbloom Canopy
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 560 XP + quest completion 315 XP = **875 story XP**.
- **Quest completion reward:** Elderbloom Class Weapon Calibration Kit — Weapon Upgrade Component, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 80 | 3x Living Amber; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Elderbloom Canopy. |
| 2 | Signal Capture | 85 | 4x Living Amber; 1x Standard Vitality Injector | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 90 | Faction scrip +1; 1x Combo Salve | Restore or harden three relay points across The Sapglass Labyrinth while enemies attempt live sabotage. |
| 4 | Protocol Break | 95 | 5x Living Amber; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 110 | Quest-turn-in cache fragment; 6x Living Amber | Verify with Sprig-Oracle Fen that the repaired network persists and unlocks a stable path forward. |

### Q041 — The Sapglass Labyrinth
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Investigation
- **Primary location:** Amberback Crossing
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 565 XP + quest completion 265 XP = **830 story XP**.
- **Quest completion reward:** Elderbloom Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 80 | 3x Living Amber; scouting reputation +1 | Meet Matriarch Ilyra Thorne at Amberback Crossing, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 85 | 4x Living Amber; 1x Standard Vitality Injector | Inspect Rootcourt Hollow for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 90 | Faction scrip +1; 1x Combo Salve | Interview survivors from Skywright Surveyors and Verdant Accord, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 95 | 5x Living Amber; repair parts bundle | Follow the recovered clue through Thorn Choir Nursery, avoiding false leads planted by Graft-King Osric and the Thorn Choir. |
| 5 | Confrontation | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 115 | Quest-turn-in cache fragment; 6x Living Amber | Deliver a verified finding to Biomancer Tavi, update the alliance risk map, and unlock the next operational lead. |

### Q042 — Huntress Mael’s Red Trail
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Rescue
- **Primary location:** The Sapglass Labyrinth
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 555 XP + quest completion 300 XP = **855 story XP**.
- **Quest completion reward:** Elderbloom Field-Survival Cache — Consumable + Utility Cache, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 80 | 3x Living Amber; scouting reputation +1 | Triangulate the missing group’s last signal between The Sapglass Labyrinth, Mosswake Village, and Greenfire Basin. |
| 2 | Safe Route | 85 | 4x Living Amber; 1x Standard Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 90 | Faction scrip +1; 1x Combo Salve | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 95 | 5x Living Amber; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Graft-King Osric and the Thorn Choir tries to cut them off. |
| 6 | Debrief | 105 | Quest-turn-in cache fragment; 6x Living Amber | Return the survivors to Rook the Rootless, extract their intelligence, and add their testimony to the main campaign board. |

### Q043 — The Graft-King’s First Bloom
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Defense
- **Primary location:** Rootcourt Hollow
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 565 XP + quest completion 350 XP = **915 story XP**.
- **Quest completion reward:** Elderbloom Field-Survival Cache — Consumable + Utility Cache, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 80 | 3x Living Amber; scouting reputation +1 | Survey Rootcourt Hollow, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 85 | 4x Living Amber; 1x Standard Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Thorn Choir defenders. |
| 3 | First Wave | 90 | Faction scrip +1; 1x Combo Salve | Repel the opening attack from Graft-King Osric and the Thorn Choir while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 95 | 5x Living Amber; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Thorn Choir Nursery before morale collapses. |
| 5 | Counterstrike | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 115 | Quest-turn-in cache fragment; 6x Living Amber | Stabilize Elderbloom Canopy, count losses, recover evidence, and authorize the next campaign movement. |

### Q044 — Verdant Cipher Fragment
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 7
- **Quest type:** Stealth
- **Primary location:** Mosswake Village
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 8.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 545 XP + quest completion 280 XP = **825 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 164, minimum level 7.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 7x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 75 | 3x Living Amber; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Huntress Mael without alerting Graft-King Osric and the Thorn Choir. |
| 2 | Patrol Read | 80 | 4x Living Amber; 1x Standard Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Mosswake Village. |
| 3 | Silent Entry | 85 | Faction scrip +1; 1x Combo Salve | Enter Greenfire Basin through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 95 | 5x Living Amber; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 100 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escape through Amberback Crossing, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 110 | Quest-turn-in cache fragment; 6x Living Amber | Report to Matriarch Ilyra Thorne, compare the intel to existing clues, and flag the next vulnerability. |

### Q045 — Mosswake Under Siege
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Crafting
- **Primary location:** Thorn Choir Nursery
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 680 XP + quest completion 385 XP = **1,065 story XP**.
- **Quest completion reward:** Elderbloom Amulet Armor Piece — Armor Piece, Uncommon, item power 176, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 95 | 3x Living Amber; scouting reputation +1 | Receive the schematic from Sprig-Oracle Fen and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 100 | 4x Living Amber; 1x Standard Vitality Injector | Recover parts or reagents from Thorn Choir Nursery, Elderbloom Canopy, and a hostile cache controlled by Graft-King Osric and the Thorn Choir. |
| 3 | Prototype Build | 110 | Faction scrip +1; 1x Combo Salve | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 115 | 5x Living Amber; repair parts bundle | Test the prototype in The Sapglass Labyrinth, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 120 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defend Rook the Rootless and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 140 | Quest-turn-in cache fragment; 6x Living Amber | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q046 — The Speaking Grove
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Diplomacy
- **Primary location:** Greenfire Basin
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 670 XP + quest completion 290 XP = **960 story XP**.
- **Quest completion reward:** Elderbloom Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon, item power 176, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 95 | 3x Living Amber; scouting reputation +1 | Earn entry to a council, war table, or faction court at Greenfire Basin by solving their immediate access demand. |
| 2 | Proof Package | 100 | 4x Living Amber; 1x Standard Vitality Injector | Collect verifiable proof from Amberback Crossing, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 105 | Faction scrip +1; 1x Combo Salve | Hear the objections of Verdant Accord and Thorn Choir, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 115 | 5x Living Amber; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Graft-King Osric and the Thorn Choir tries to inflame the room. |
| 5 | Binding Action | 120 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 135 | Quest-turn-in cache fragment; 6x Living Amber | Return to Matriarch Ilyra Thorne, lock in the new ally or resource, and record the consequence for future quests. |

### Q047 — Cut the Black Root
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Dungeon
- **Primary location:** Elderbloom Canopy
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 680 XP + quest completion 495 XP = **1,175 story XP**.
- **Quest completion reward:** Elderbloom Delver Cache: Amulet or Weapon-Mod Choice — Dungeon Gear Choice Cache, Uncommon, item power 183, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 95 | 3x Living Amber; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Elderbloom Canopy. |
| 2 | First Wing | 100 | 4x Living Amber; 1x Standard Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 110 | Faction scrip +1; 1x Combo Salve | Solve the mid-dungeon puzzle or traversal gauntlet in The Sapglass Labyrinth while enemies pressure the group. |
| 4 | Elite Guardian | 115 | 5x Living Amber; repair parts bundle | Defeat a themed guardian tied to Graft-King Osric and the Thorn Choir, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 120 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Verdant Cipher. |
| 6 | Dungeon Exit | 140 | Quest-turn-in cache fragment; 6x Living Amber | Escape collapse, corruption, or lockdown and brief Huntress Mael on what the dungeon revealed. |

### Q048 — The Thorn Choir Unmasked
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Assault
- **Primary location:** Amberback Crossing
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 680 XP + quest completion 450 XP = **1,130 story XP**.
- **Quest completion reward:** Elderbloom Wayfinder Supply Cache — General Reward Cache, Uncommon, item power 181, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 95 | 3x Living Amber; scouting reputation +1 | Coordinate with Biomancer Tavi, assign allied squads, and identify the primary breach point at Amberback Crossing. |
| 2 | Forward Push | 100 | 4x Living Amber; 1x Standard Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 110 | Faction scrip +1; 1x Combo Salve | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Graft-King Osric and the Thorn Choir. |
| 4 | Interior Fight | 115 | 5x Living Amber; repair parts bundle | Move through Rootcourt Hollow, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 120 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 140 | Quest-turn-in cache fragment; 6x Living Amber | Secure Thorn Choir Nursery, hand control to allies, and verify that the assault achieved the story purpose. |

### Q049 — Awaken the Elderbloom Node
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Boss
- **Primary location:** The Sapglass Labyrinth
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** The Resonant Behemoth — separate encounter XP: 2,500.
- **XP package:** subquests total 655 XP + quest completion 540 XP = **1,195 story XP**.
- **Quest completion reward:** Resonant Spine Resonator (The Resonant Behemoth Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Uncommon, item power 198, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 90 | 3x Living Amber; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Graft-King Osric and the Thorn Choir. |
| 2 | Arena Preparation | 100 | 4x Living Amber; 1x Standard Vitality Injector | Disable shields, open safe lanes, and position allied supports around The Sapglass Labyrinth. |
| 3 | Phase One | 105 | Faction scrip +1; 1x Combo Salve | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 110 | 5x Living Amber; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 120 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 130 | Quest-turn-in cache fragment; 6x Living Amber | Secure the Verdant Cipher, report to Huntress Mael, and unlock the next act-level route or political consequence. |

### Q050 — The Accord Signed in Greenfire
- **Act:** 2 — The Verdant Accord
- **Recommended level:** 8
- **Quest type:** Resolution
- **Primary location:** Rootcourt Hollow
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 9.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 710 XP + quest completion 515 XP = **1,225 story XP**.
- **Quest completion reward:** Elderbloom Act-Capstone Relic: Verdant Cipher Seal — Act Artifact + Set Token, Uncommon, item power 199, minimum level 8.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Living Amber.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 100 | 3x Living Amber; scouting reputation +1 | Meet Sprig-Oracle Fen, Rook the Rootless, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 105 | 4x Living Amber; 1x Standard Vitality Injector | Resolve one survivor need, one political risk, and one technical or magical instability at Rootcourt Hollow. |
| 3 | Public Moment | 115 | Faction scrip +1; 1x Combo Salve | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 120 | 5x Living Amber; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 130 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 140 | Quest-turn-in cache fragment; 6x Living Amber | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q051 — The Gate That Taxes Breath
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Investigation
- **Primary location:** Cindervale Gate
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 765 XP + quest completion 360 XP = **1,125 story XP**.
- **Quest completion reward:** Cindervale Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 105 | 3x Cindervale Ingot; scouting reputation +1 | Meet Foreman Oda Marr at Cindervale Gate, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 115 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Inspect Elemental Chainhouse for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 120 | Faction scrip +1; 1x Combo Salve | Interview survivors from Iron Crown and Foundry Workers Union, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 130 | 5x Cindervale Ingot; repair parts bundle | Follow the recovered clue through Foundry Nine, avoiding false leads planted by Lord-Marshal Krann and the Brass Inquisition. |
| 5 | Confrontation | 140 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 155 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Deliver a verified finding to Doctor Hesh, update the alliance risk map, and unlock the next operational lead. |

### Q052 — Ashline Tenement Ledger
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Rescue
- **Primary location:** Ashline Tenements
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 755 XP + quest completion 405 XP = **1,160 story XP**.
- **Quest completion reward:** Cindervale Field-Survival Cache — Consumable + Utility Cache, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 105 | 3x Cindervale Ingot; scouting reputation +1 | Triangulate the missing group’s last signal between Ashline Tenements, Propaganda Mint, and The Brass Court. |
| 2 | Safe Route | 115 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 120 | Faction scrip +1; 1x Combo Salve | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 130 | 5x Cindervale Ingot; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 135 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Lord-Marshal Krann and the Brass Inquisition tries to cut them off. |
| 6 | Debrief | 150 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Return the survivors to Defector Vale Crix, extract their intelligence, and add their testimony to the main campaign board. |

### Q053 — The Defector’s Brand
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Defense
- **Primary location:** Elemental Chainhouse
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 770 XP + quest completion 475 XP = **1,245 story XP**.
- **Quest completion reward:** Cindervale Field-Survival Cache — Consumable + Utility Cache, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 110 | 3x Cindervale Ingot; scouting reputation +1 | Survey Elemental Chainhouse, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 115 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Brass Inquisition defenders. |
| 3 | First Wave | 125 | Faction scrip +1; 1x Combo Salve | Repel the opening attack from Lord-Marshal Krann and the Brass Inquisition while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 130 | 5x Cindervale Ingot; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Foundry Nine before morale collapses. |
| 5 | Counterstrike | 140 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 150 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Stabilize Molten Rail Yard, count losses, recover evidence, and authorize the next campaign movement. |

### Q054 — Strike Bells at Foundry Nine
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Stealth
- **Primary location:** Propaganda Mint
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 745 XP + quest completion 380 XP = **1,125 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 105 | 3x Cindervale Ingot; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Union Saint Bracca without alerting Lord-Marshal Krann and the Brass Inquisition. |
| 2 | Patrol Read | 110 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Propaganda Mint. |
| 3 | Silent Entry | 120 | Faction scrip +1; 1x Combo Salve | Enter The Brass Court through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 125 | 5x Cindervale Ingot; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 135 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Escape through Cindervale Gate, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 150 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Report to Foreman Oda Marr, compare the intel to existing clues, and flag the next vulnerability. |

### Q055 — Elemental Chainhouse Intake
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Crafting
- **Primary location:** Foundry Nine
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 760 XP + quest completion 425 XP = **1,185 story XP**.
- **Quest completion reward:** Cindervale Gloves Armor Piece — Armor Piece, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 105 | 3x Cindervale Ingot; scouting reputation +1 | Receive the schematic from Courier Lita Vane and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 115 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Recover parts or reagents from Foundry Nine, Molten Rail Yard, and a hostile cache controlled by Lord-Marshal Krann and the Brass Inquisition. |
| 3 | Prototype Build | 120 | Faction scrip +1; 1x Combo Salve | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 130 | 5x Cindervale Ingot; repair parts bundle | Test the prototype in Ashline Tenements, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 135 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defend Defector Vale Crix and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 155 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q056 — Sabotage Without Slaughter
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Diplomacy
- **Primary location:** The Brass Court
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 745 XP + quest completion 320 XP = **1,065 story XP**.
- **Quest completion reward:** Cindervale Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 105 | 3x Cindervale Ingot; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Brass Court by solving their immediate access demand. |
| 2 | Proof Package | 110 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Collect verifiable proof from Cindervale Gate, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 120 | Faction scrip +1; 1x Combo Salve | Hear the objections of Foundry Workers Union and Brass Inquisition, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 125 | 5x Cindervale Ingot; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Lord-Marshal Krann and the Brass Inquisition tries to inflame the room. |
| 5 | Binding Action | 135 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 150 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Return to Foreman Oda Marr, lock in the new ally or resource, and record the consequence for future quests. |

### Q057 — The Propaganda Mint
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 9
- **Quest type:** Exploration
- **Primary location:** Molten Rail Yard
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 745 XP + quest completion 350 XP = **1,095 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 188, minimum level 9.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 8x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 105 | 3x Cindervale Ingot; scouting reputation +1 | Open the route from Molten Rail Yard into Ashline Tenements and establish a temporary forward camp. |
| 2 | Traversal Trial | 110 | 4x Cindervale Ingot; 1x Standard Vitality Injector | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 120 | Faction scrip +1; 1x Combo Salve | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 125 | 5x Cindervale Ingot; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 135 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 150 | Quest-turn-in cache fragment; 6x Cindervale Ingot | Signal Defector Vale Crix, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q058 — Doctor Hesh’s Impossible Clinic
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Dungeon
- **Primary location:** Cindervale Gate
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,075 XP + quest completion 780 XP = **1,855 story XP**.
- **Quest completion reward:** Cindervale Delver Cache: Gloves or Weapon-Mod Choice — Dungeon Gear Choice Cache, Uncommon+, item power 207, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 150 | 4x Cindervale Ingot; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Cindervale Gate. |
| 2 | First Wing | 160 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 170 | Faction scrip +2; 1x Combo Salve | Solve the mid-dungeon puzzle or traversal gauntlet in Elemental Chainhouse while enemies pressure the group. |
| 4 | Elite Guardian | 185 | 6x Cindervale Ingot; repair parts bundle | Defeat a themed guardian tied to Lord-Marshal Krann and the Brass Inquisition, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 195 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Iron Crown Override. |
| 6 | Dungeon Exit | 215 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Escape collapse, corruption, or lockdown and brief Courier Lita Vane on what the dungeon revealed. |

### Q059 — The Brass Court Summons
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Boss
- **Primary location:** Ashline Tenements
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,040 XP + quest completion 850 XP = **1,890 story XP**.
- **Quest completion reward:** Cindervale Elite Spoils Cache: Gloves Pattern — Elite Gear Pattern, Uncommon+, item power 210, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 145 | 4x Cindervale Ingot; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Lord-Marshal Krann and the Brass Inquisition. |
| 2 | Arena Preparation | 155 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Disable shields, open safe lanes, and position allied supports around Ashline Tenements. |
| 3 | Phase One | 165 | Faction scrip +2; 1x Combo Salve | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 175 | 6x Cindervale Ingot; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 185 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 215 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Secure the Iron Crown Override, report to Union Saint Bracca, and unlock the next act-level route or political consequence. |

### Q060 — A Union Saint in Chains
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Moral
- **Primary location:** Elemental Chainhouse
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,060 XP + quest completion 545 XP = **1,605 story XP**.
- **Quest completion reward:** Cindervale Class Weapon Calibration Kit — Weapon Upgrade Component, Uncommon+, item power 200, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 150 | 4x Cindervale Ingot; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to Elemental Chainhouse. |
| 2 | Evidence Balance | 160 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Verify facts at Foundry Nine so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 170 | Faction scrip +2; 1x Combo Salve | Ask Courier Lita Vane and Defector Vale Crix to model the likely cost of each available decision. |
| 4 | Pressure Event | 180 | 6x Cindervale Ingot; repair parts bundle | Survive an attack, riot, or betrayal by Lord-Marshal Krann and the Brass Inquisition that tries to force a rushed answer. |
| 5 | Decision | 190 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 210 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q061 — Molten Rail Yard Run
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Assault
- **Primary location:** Propaganda Mint
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,075 XP + quest completion 715 XP = **1,790 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 205, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 150 | 4x Cindervale Ingot; scouting reputation +1 | Coordinate with Foreman Oda Marr, assign allied squads, and identify the primary breach point at Propaganda Mint. |
| 2 | Forward Push | 160 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 170 | Faction scrip +2; 1x Combo Salve | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Lord-Marshal Krann and the Brass Inquisition. |
| 4 | Interior Fight | 185 | 6x Cindervale Ingot; repair parts bundle | Move through The Brass Court, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 195 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 215 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Secure Cindervale Gate, hand control to allies, and verify that the assault achieved the story purpose. |

### Q062 — The Inquisitor’s Census
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Escort
- **Primary location:** Foundry Nine
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,075 XP + quest completion 580 XP = **1,655 story XP**.
- **Quest completion reward:** Cindervale Field-Survival Cache — Consumable + Utility Cache, Uncommon+, item power 200, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 150 | 4x Cindervale Ingot; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Foundry Nine to Ashline Tenements with Defector Vale Crix. |
| 2 | First Leg | 160 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 170 | Faction scrip +2; 1x Combo Salve | Collect fuel, medicine, ritual charges, or repair parts at Molten Rail Yard before the route collapses. |
| 4 | Ambush Response | 185 | 6x Cindervale Ingot; repair parts bundle | Defeat or bypass Lord-Marshal Krann and the Brass Inquisition forces without losing the protected objective. |
| 5 | Final Crossing | 195 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 215 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q063 — Vale Crix’s Trial
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 10
- **Quest type:** Puzzle
- **Primary location:** The Brass Court
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Early Game; allowed normal monsters: The Grid-Rushers, The Gnarl-Maws, The Scrap-Phalanx, The Siphon-Ticks; normal combat cap: level 10.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,060 XP + quest completion 545 XP = **1,605 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 200, minimum level 10.
- **Consumables/materials:** 1x Standard Vitality Injector, 1x Combo Salve, 9x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 150 | 4x Cindervale Ingot; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing The Brass Court. |
| 2 | First Solution | 160 | 5x Cindervale Ingot; 1x Standard Vitality Injector | Solve the opening sequence using clues from Doctor Hesh, the environment, and one recovered record. |
| 3 | Constraint Shift | 170 | Faction scrip +2; 1x Combo Salve | Adapt when Lord-Marshal Krann and the Brass Inquisition changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 180 | 6x Cindervale Ingot; repair parts bundle | Resolve three linked mechanisms across Cindervale Gate, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 190 | 1x Standard Vitality Injector; 1x Combo Salve; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 210 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Open the path, recover the Iron Crown Override, and document the rule that will matter in a later quest. |

### Q064 — Fuel for the Hunger Engines
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Heist
- **Primary location:** Molten Rail Yard
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,210 XP + quest completion 680 XP = **1,890 story XP**.
- **Quest completion reward:** Cindervale Technical Cache: Cindervale Ingot Bundle — Crafting / Upgrade Materials, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 170 | 4x Cindervale Ingot; scouting reputation +1 | Survey Molten Rail Yard, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 180 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Assign support tasks to Union Saint Bracca, Foreman Oda Marr, and any recruited faction specialists. |
| 3 | Access Tool | 195 | Faction scrip +2; 1x Guard-Break Oil | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Ashline Tenements. |
| 4 | The Lift | 205 | 6x Cindervale Ingot; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 220 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 240 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q065 — Blueprints Under the Ash
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Network
- **Primary location:** Cindervale Gate
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,210 XP + quest completion 680 XP = **1,890 story XP**.
- **Quest completion reward:** Cindervale Helm Armor Piece — Armor Piece, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 170 | 4x Cindervale Ingot; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Cindervale Gate. |
| 2 | Signal Capture | 180 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 195 | Faction scrip +2; 1x Guard-Break Oil | Restore or harden three relay points across Elemental Chainhouse while enemies attempt live sabotage. |
| 4 | Protocol Break | 205 | 6x Cindervale Ingot; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 220 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 240 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Verify with Courier Lita Vane that the repaired network persists and unlocks a stable path forward. |

### Q066 — The Crown Override Rumor
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Investigation
- **Primary location:** Ashline Tenements
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,220 XP + quest completion 575 XP = **1,795 story XP**.
- **Quest completion reward:** Cindervale Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 170 | 4x Cindervale Ingot; scouting reputation +1 | Meet Foreman Oda Marr at Ashline Tenements, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 185 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Inspect Propaganda Mint for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 195 | Faction scrip +2; 1x Guard-Break Oil | Interview survivors from Free Gear Cells and Iron Crown, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 205 | 6x Cindervale Ingot; repair parts bundle | Follow the recovered clue through The Brass Court, avoiding false leads planted by Lord-Marshal Krann and the Brass Inquisition. |
| 5 | Confrontation | 220 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 245 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Deliver a verified finding to Doctor Hesh, update the alliance risk map, and unlock the next operational lead. |

### Q067 — Rescue at Furnace Mile
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Rescue
- **Primary location:** Elemental Chainhouse
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,205 XP + quest completion 650 XP = **1,855 story XP**.
- **Quest completion reward:** Cindervale Field-Survival Cache — Consumable + Utility Cache, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 170 | 4x Cindervale Ingot; scouting reputation +1 | Triangulate the missing group’s last signal between Elemental Chainhouse, Foundry Nine, and Molten Rail Yard. |
| 2 | Safe Route | 180 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 195 | Faction scrip +2; 1x Guard-Break Oil | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 205 | 6x Cindervale Ingot; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 215 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Lord-Marshal Krann and the Brass Inquisition tries to cut them off. |
| 6 | Debrief | 240 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Return the survivors to Defector Vale Crix, extract their intelligence, and add their testimony to the main campaign board. |

### Q068 — The Clockwork Witness
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Defense
- **Primary location:** Propaganda Mint
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,230 XP + quest completion 755 XP = **1,985 story XP**.
- **Quest completion reward:** Cindervale Field-Survival Cache — Consumable + Utility Cache, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 170 | 4x Cindervale Ingot; scouting reputation +1 | Survey Propaganda Mint, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 185 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Foundry Workers Union defenders. |
| 3 | First Wave | 195 | Faction scrip +2; 1x Guard-Break Oil | Repel the opening attack from Lord-Marshal Krann and the Brass Inquisition while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 210 | 6x Cindervale Ingot; repair parts bundle | Respond to a breach, sabotage event, or elite flank at The Brass Court before morale collapses. |
| 5 | Counterstrike | 220 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 250 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Stabilize Cindervale Gate, count losses, recover evidence, and authorize the next campaign movement. |

### Q069 — Broadcast from the Smokestacks
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 11
- **Quest type:** Stealth
- **Primary location:** Foundry Nine
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace; normal combat cap: level 12.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,190 XP + quest completion 615 XP = **1,805 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 212, minimum level 11.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 9x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 165 | 4x Cindervale Ingot; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Union Saint Bracca without alerting Lord-Marshal Krann and the Brass Inquisition. |
| 2 | Patrol Read | 180 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Foundry Nine. |
| 3 | Silent Entry | 190 | Faction scrip +2; 1x Guard-Break Oil | Enter Molten Rail Yard through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 200 | 6x Cindervale Ingot; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 215 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escape through Ashline Tenements, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 240 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Report to Foreman Oda Marr, compare the intel to existing clues, and flag the next vulnerability. |

### Q070 — Krann’s Peace Offer
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Crafting
- **Primary location:** The Brass Court
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,410 XP + quest completion 790 XP = **2,200 story XP**.
- **Quest completion reward:** Cindervale Class Weapon Calibration Kit — Weapon Upgrade Component, Uncommon+, item power 224, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 195 | 4x Cindervale Ingot; scouting reputation +1 | Receive the schematic from Courier Lita Vane and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 210 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Recover parts or reagents from The Brass Court, Cindervale Gate, and a hostile cache controlled by Lord-Marshal Krann and the Brass Inquisition. |
| 3 | Prototype Build | 225 | Faction scrip +2; 1x Guard-Break Oil | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 240 | 6x Cindervale Ingot; repair parts bundle | Test the prototype in Elemental Chainhouse, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 255 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defend Defector Vale Crix and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 285 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q071 — The Iron Crown Lies
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Diplomacy
- **Primary location:** Molten Rail Yard
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,385 XP + quest completion 595 XP = **1,980 story XP**.
- **Quest completion reward:** Cindervale Reputation Writ + Evidence Cache — Reputation / Utility, Uncommon+, item power 224, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 195 | 4x Cindervale Ingot; scouting reputation +1 | Earn entry to a council, war table, or faction court at Molten Rail Yard by solving their immediate access demand. |
| 2 | Proof Package | 210 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Collect verifiable proof from Ashline Tenements, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 220 | Faction scrip +2; 1x Guard-Break Oil | Hear the objections of Iron Crown and Foundry Workers Union, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 235 | 6x Cindervale Ingot; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Lord-Marshal Krann and the Brass Inquisition tries to inflame the room. |
| 5 | Binding Action | 250 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 275 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Return to Foreman Oda Marr, lock in the new ally or resource, and record the consequence for future quests. |

### Q072 — Free Gear Uprising
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Dungeon
- **Primary location:** Cindervale Gate
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,405 XP + quest completion 1,015 XP = **2,420 story XP**.
- **Quest completion reward:** Cindervale Delver Cache: Chestguard or Weapon-Mod Choice — Dungeon Gear Choice Cache, Uncommon+, item power 231, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 195 | 4x Cindervale Ingot; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Cindervale Gate. |
| 2 | First Wing | 210 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 225 | Faction scrip +2; 1x Guard-Break Oil | Solve the mid-dungeon puzzle or traversal gauntlet in Elemental Chainhouse while enemies pressure the group. |
| 4 | Elite Guardian | 240 | 6x Cindervale Ingot; repair parts bundle | Defeat a themed guardian tied to Lord-Marshal Krann and the Brass Inquisition, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 255 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Iron Crown Override. |
| 6 | Dungeon Exit | 280 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Escape collapse, corruption, or lockdown and brief Union Saint Bracca on what the dungeon revealed. |

### Q073 — Break the Chainhouse
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Assault
- **Primary location:** Ashline Tenements
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,400 XP + quest completion 935 XP = **2,335 story XP**.
- **Quest completion reward:** Cindervale Wayfinder Supply Cache — General Reward Cache, Uncommon+, item power 229, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 195 | 4x Cindervale Ingot; scouting reputation +1 | Coordinate with Doctor Hesh, assign allied squads, and identify the primary breach point at Ashline Tenements. |
| 2 | Forward Push | 210 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 225 | Faction scrip +2; 1x Guard-Break Oil | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Lord-Marshal Krann and the Brass Inquisition. |
| 4 | Interior Fight | 240 | 6x Cindervale Ingot; repair parts bundle | Move through Propaganda Mint, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 250 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 280 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Secure The Brass Court, hand control to allies, and verify that the assault achieved the story purpose. |

### Q074 — Duel with Lord-Marshal Krann
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Boss
- **Primary location:** Elemental Chainhouse
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** The Resonance Maestro — separate encounter XP: 4,500.
- **XP package:** subquests total 1,355 XP + quest completion 1,110 XP = **2,465 story XP**.
- **Quest completion reward:** Maestro's Tuning-Fork Focus (The Resonance Maestro Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Uncommon+, item power 246, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 190 | 4x Cindervale Ingot; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Lord-Marshal Krann and the Brass Inquisition. |
| 2 | Arena Preparation | 205 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Disable shields, open safe lanes, and position allied supports around Elemental Chainhouse. |
| 3 | Phase One | 215 | Faction scrip +2; 1x Guard-Break Oil | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 230 | 6x Cindervale Ingot; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 245 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 270 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Secure the Iron Crown Override, report to Union Saint Bracca, and unlock the next act-level route or political consequence. |

### Q075 — Cindervale Breathes Free
- **Act:** 3 — The Iron Crown Rebellion
- **Recommended level:** 12
- **Quest type:** Resolution
- **Primary location:** Propaganda Mint
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 13.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,475 XP + quest completion 1,065 XP = **2,540 story XP**.
- **Quest completion reward:** Cindervale Act-Capstone Relic: Iron Crown Override Plate — Act Artifact + Set Token, Uncommon+, item power 247, minimum level 12.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Cindervale Ingot.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 205 | 4x Cindervale Ingot; scouting reputation +1 | Meet Courier Lita Vane, Defector Vale Crix, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 220 | 5x Cindervale Ingot; 1x Reinforced Vitality Injector | Resolve one survivor need, one political risk, and one technical or magical instability at Propaganda Mint. |
| 3 | Public Moment | 235 | Faction scrip +2; 1x Guard-Break Oil | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 250 | 6x Cindervale Ingot; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 265 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 300 | Quest-turn-in cache fragment; 7x Cindervale Ingot | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q076 — Mirage Gate Opens Once
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Investigation
- **Primary location:** Mirage Gate
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,630 XP + quest completion 765 XP = **2,395 story XP**.
- **Quest completion reward:** Sunken-Star Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 230 | 4x Sapglass Lens; scouting reputation +1 | Meet Navigator Sahel at Mirage Gate, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 245 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Inspect The Oasis That Remembers for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 260 | Faction scrip +2; 1x Guard-Break Oil | Interview survivors from Mirror Caravan and Glass Nomads, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 275 | 6x Sapglass Lens; repair parts bundle | Follow the recovered clue through Caravan of Mirrors, avoiding false leads planted by The Prophet of Dust and the Mirror Caravan. |
| 5 | Confrontation | 295 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 325 | Quest-turn-in cache fragment; 7x Sapglass Lens | Deliver a verified finding to Exile Prince Varo, update the alliance risk map, and unlock the next operational lead. |

### Q077 — The Navigator’s Thirst
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Rescue
- **Primary location:** Glassdune Sea
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,605 XP + quest completion 865 XP = **2,470 story XP**.
- **Quest completion reward:** Sunken-Star Field-Survival Cache — Consumable + Utility Cache, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 225 | 4x Sapglass Lens; scouting reputation +1 | Triangulate the missing group’s last signal between Glassdune Sea, Vault of Shattered Suns, and Black Comet Crater. |
| 2 | Safe Route | 240 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 255 | Faction scrip +2; 1x Guard-Break Oil | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 275 | 6x Sapglass Lens; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 290 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Prophet of Dust and the Mirror Caravan tries to cut them off. |
| 6 | Debrief | 320 | Quest-turn-in cache fragment; 7x Sapglass Lens | Return the survivors to Glassmith Yara, extract their intelligence, and add their testimony to the main campaign board. |

### Q078 — Tracks Across Glassdune Sea
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Defense
- **Primary location:** The Oasis That Remembers
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,640 XP + quest completion 1,005 XP = **2,645 story XP**.
- **Quest completion reward:** Sunken-Star Field-Survival Cache — Consumable + Utility Cache, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 230 | 4x Sapglass Lens; scouting reputation +1 | Survey The Oasis That Remembers, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 245 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Dustbound Pilgrims defenders. |
| 3 | First Wave | 260 | Faction scrip +2; 1x Guard-Break Oil | Repel the opening attack from The Prophet of Dust and the Mirror Caravan while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 280 | 6x Sapglass Lens; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Caravan of Mirrors before morale collapses. |
| 5 | Counterstrike | 295 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 330 | Quest-turn-in cache fragment; 7x Sapglass Lens | Stabilize The Sunken Star Chamber, count losses, recover evidence, and authorize the next campaign movement. |

### Q079 — Oasis of Borrowed Memories
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Stealth
- **Primary location:** Vault of Shattered Suns
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,580 XP + quest completion 815 XP = **2,395 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 220 | 4x Sapglass Lens; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Silent Cartographer Jun without alerting The Prophet of Dust and the Mirror Caravan. |
| 2 | Patrol Read | 235 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Vault of Shattered Suns. |
| 3 | Silent Entry | 255 | Faction scrip +2; 1x Guard-Break Oil | Enter Black Comet Crater through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 270 | 6x Sapglass Lens; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 285 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escape through Mirage Gate, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 315 | Quest-turn-in cache fragment; 7x Sapglass Lens | Report to Navigator Sahel, compare the intel to existing clues, and flag the next vulnerability. |

### Q080 — The Glassmith’s Price
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Crafting
- **Primary location:** Caravan of Mirrors
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,615 XP + quest completion 905 XP = **2,520 story XP**.
- **Quest completion reward:** Sunken-Star Class Weapon Calibration Kit — Weapon Upgrade Component, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 225 | 4x Sapglass Lens; scouting reputation +1 | Receive the schematic from Mirage-Saint Iren and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 240 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Recover parts or reagents from Caravan of Mirrors, The Sunken Star Chamber, and a hostile cache controlled by The Prophet of Dust and the Mirror Caravan. |
| 3 | Prototype Build | 260 | Faction scrip +2; 1x Guard-Break Oil | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 275 | 6x Sapglass Lens; repair parts bundle | Test the prototype in Glassdune Sea, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 290 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defend Glassmith Yara and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 325 | Quest-turn-in cache fragment; 7x Sapglass Lens | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q081 — A Caravan That Reflects Lies
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Diplomacy
- **Primary location:** Black Comet Crater
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,585 XP + quest completion 680 XP = **2,265 story XP**.
- **Quest completion reward:** Sunken-Star Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 220 | 4x Sapglass Lens; scouting reputation +1 | Earn entry to a council, war table, or faction court at Black Comet Crater by solving their immediate access demand. |
| 2 | Proof Package | 240 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Collect verifiable proof from Mirage Gate, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 255 | Faction scrip +2; 1x Guard-Break Oil | Hear the objections of Glass Nomads and Dustbound Pilgrims, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 270 | 6x Sapglass Lens; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Prophet of Dust and the Mirror Caravan tries to inflame the room. |
| 5 | Binding Action | 285 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 315 | Quest-turn-in cache fragment; 7x Sapglass Lens | Return to Navigator Sahel, lock in the new ally or resource, and record the consequence for future quests. |

### Q082 — Dustbound Pilgrim Trial
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 13
- **Quest type:** Exploration
- **Primary location:** The Sunken Star Chamber
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound; normal combat cap: level 14.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 1,570 XP + quest completion 740 XP = **2,310 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 236, minimum level 13.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 10x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 220 | 4x Sapglass Lens; scouting reputation +1 | Open the route from The Sunken Star Chamber into Glassdune Sea and establish a temporary forward camp. |
| 2 | Traversal Trial | 235 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 250 | Faction scrip +2; 1x Guard-Break Oil | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 265 | 6x Sapglass Lens; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 285 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 315 | Quest-turn-in cache fragment; 7x Sapglass Lens | Signal Glassmith Yara, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q083 — The Black Comet Map
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Dungeon
- **Primary location:** Mirage Gate
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,115 XP + quest completion 1,530 XP = **3,645 story XP**.
- **Quest completion reward:** Sunken-Star Delver Cache: Cloak or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare, item power 255, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 295 | 4x Sapglass Lens; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Mirage Gate. |
| 2 | First Wing | 315 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 340 | Faction scrip +2; 1x Guard-Break Oil | Solve the mid-dungeon puzzle or traversal gauntlet in The Oasis That Remembers while enemies pressure the group. |
| 4 | Elite Guardian | 360 | 6x Sapglass Lens; repair parts bundle | Defeat a themed guardian tied to The Prophet of Dust and the Mirror Caravan, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 380 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Sunken Star Astrolabe. |
| 6 | Dungeon Exit | 425 | Quest-turn-in cache fragment; 7x Sapglass Lens | Escape collapse, corruption, or lockdown and brief Mirage-Saint Iren on what the dungeon revealed. |

### Q084 — Exile Prince Varo
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Boss
- **Primary location:** Glassdune Sea
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,040 XP + quest completion 1,670 XP = **3,710 story XP**.
- **Quest completion reward:** Sunken-Star Elite Spoils Cache: Cloak Pattern — Elite Gear Pattern, Rare, item power 258, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 285 | 4x Sapglass Lens; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Prophet of Dust and the Mirror Caravan. |
| 2 | Arena Preparation | 305 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Disable shields, open safe lanes, and position allied supports around Glassdune Sea. |
| 3 | Phase One | 325 | Faction scrip +2; 1x Guard-Break Oil | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 345 | 6x Sapglass Lens; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 365 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 415 | Quest-turn-in cache fragment; 7x Sapglass Lens | Secure the Sunken Star Astrolabe, report to Silent Cartographer Jun, and unlock the next act-level route or political consequence. |

### Q085 — The Silent Cartographer
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Moral
- **Primary location:** The Oasis That Remembers
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,075 XP + quest completion 1,070 XP = **3,145 story XP**.
- **Quest completion reward:** Sunken-Star Bracers Armor Piece — Armor Piece, Rare, item power 248, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 290 | 4x Sapglass Lens; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to The Oasis That Remembers. |
| 2 | Evidence Balance | 310 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Verify facts at Caravan of Mirrors so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 330 | Faction scrip +2; 1x Guard-Break Oil | Ask Mirage-Saint Iren and Glassmith Yara to model the likely cost of each available decision. |
| 4 | Pressure Event | 355 | 6x Sapglass Lens; repair parts bundle | Survive an attack, riot, or betrayal by The Prophet of Dust and the Mirror Caravan that tries to force a rushed answer. |
| 5 | Decision | 375 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 415 | Quest-turn-in cache fragment; 7x Sapglass Lens | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q086 — Shardstorm Shelter
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Assault
- **Primary location:** Vault of Shattered Suns
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,105 XP + quest completion 1,405 XP = **3,510 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 253, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 295 | 4x Sapglass Lens; scouting reputation +1 | Coordinate with Navigator Sahel, assign allied squads, and identify the primary breach point at Vault of Shattered Suns. |
| 2 | Forward Push | 315 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 335 | Faction scrip +2; 1x Guard-Break Oil | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Prophet of Dust and the Mirror Caravan. |
| 4 | Interior Fight | 360 | 6x Sapglass Lens; repair parts bundle | Move through Black Comet Crater, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 380 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 420 | Quest-turn-in cache fragment; 7x Sapglass Lens | Secure Mirage Gate, hand control to allies, and verify that the assault achieved the story purpose. |

### Q087 — Vault of Shattered Suns
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Escort
- **Primary location:** Caravan of Mirrors
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,110 XP + quest completion 1,135 XP = **3,245 story XP**.
- **Quest completion reward:** Sunken-Star Field-Survival Cache — Consumable + Utility Cache, Rare, item power 248, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 295 | 4x Sapglass Lens; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Caravan of Mirrors to Glassdune Sea with Glassmith Yara. |
| 2 | First Leg | 315 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 340 | Faction scrip +2; 1x Guard-Break Oil | Collect fuel, medicine, ritual charges, or repair parts at The Sunken Star Chamber before the route collapses. |
| 4 | Ambush Response | 360 | 6x Sapglass Lens; repair parts bundle | Defeat or bypass The Prophet of Dust and the Mirror Caravan forces without losing the protected objective. |
| 5 | Final Crossing | 380 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 420 | Quest-turn-in cache fragment; 7x Sapglass Lens | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q088 — The Prophet’s First Miracle
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 14
- **Quest type:** Puzzle
- **Primary location:** Black Comet Crater
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 15.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,075 XP + quest completion 1,070 XP = **3,145 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 248, minimum level 14.
- **Consumables/materials:** 1x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 290 | 4x Sapglass Lens; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing Black Comet Crater. |
| 2 | First Solution | 310 | 5x Sapglass Lens; 1x Reinforced Vitality Injector | Solve the opening sequence using clues from Exile Prince Varo, the environment, and one recovered record. |
| 3 | Constraint Shift | 330 | Faction scrip +2; 1x Guard-Break Oil | Adapt when The Prophet of Dust and the Mirror Caravan changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 355 | 6x Sapglass Lens; repair parts bundle | Resolve three linked mechanisms across Mirage Gate, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 375 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 415 | Quest-turn-in cache fragment; 7x Sapglass Lens | Open the path, recover the Sunken Star Astrolabe, and document the rule that will matter in a later quest. |

### Q089 — Seven Mirrors, One Truth
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Heist
- **Primary location:** The Sunken Star Chamber
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,645 XP + quest completion 1,485 XP = **4,130 story XP**.
- **Quest completion reward:** Sunken-Star Technical Cache: Sapglass Lens Bundle — Crafting / Upgrade Materials, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 370 | 5x Sapglass Lens; scouting reputation +1 | Survey The Sunken Star Chamber, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 395 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Assign support tasks to Silent Cartographer Jun, Navigator Sahel, and any recruited faction specialists. |
| 3 | Access Tool | 425 | Faction scrip +2; 1x Guard-Break Oil | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Glassdune Sea. |
| 4 | The Lift | 450 | 7x Sapglass Lens; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 475 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 530 | Quest-turn-in cache fragment; 8x Sapglass Lens | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q090 — The Astrolabe’s Missing Teeth
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Network
- **Primary location:** Mirage Gate
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,645 XP + quest completion 1,485 XP = **4,130 story XP**.
- **Quest completion reward:** Sunken-Star Class Weapon Calibration Kit — Weapon Upgrade Component, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 370 | 5x Sapglass Lens; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Mirage Gate. |
| 2 | Signal Capture | 395 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 425 | Faction scrip +2; 1x Guard-Break Oil | Restore or harden three relay points across The Oasis That Remembers while enemies attempt live sabotage. |
| 4 | Protocol Break | 450 | 7x Sapglass Lens; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 475 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 530 | Quest-turn-in cache fragment; 8x Sapglass Lens | Verify with Mirage-Saint Iren that the repaired network persists and unlocks a stable path forward. |

### Q091 — Raid on the Mirror Caravan
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Investigation
- **Primary location:** Glassdune Sea
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,665 XP + quest completion 1,255 XP = **3,920 story XP**.
- **Quest completion reward:** Sunken-Star Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 375 | 5x Sapglass Lens; scouting reputation +1 | Meet Navigator Sahel at Glassdune Sea, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 400 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Inspect Vault of Shattered Suns for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 425 | Faction scrip +2; 1x Guard-Break Oil | Interview survivors from Starwell Remnants and Mirror Caravan, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 455 | 7x Sapglass Lens; repair parts bundle | Follow the recovered clue through Black Comet Crater, avoiding false leads planted by The Prophet of Dust and the Mirror Caravan. |
| 5 | Confrontation | 480 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 530 | Quest-turn-in cache fragment; 8x Sapglass Lens | Deliver a verified finding to Exile Prince Varo, update the alliance risk map, and unlock the next operational lead. |

### Q092 — The Oasis Chooses a Keeper
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Rescue
- **Primary location:** The Oasis That Remembers
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,630 XP + quest completion 1,415 XP = **4,045 story XP**.
- **Quest completion reward:** Sunken-Star Field-Survival Cache — Consumable + Utility Cache, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 370 | 5x Sapglass Lens; scouting reputation +1 | Triangulate the missing group’s last signal between The Oasis That Remembers, Caravan of Mirrors, and The Sunken Star Chamber. |
| 2 | Safe Route | 395 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 420 | Faction scrip +2; 1x Guard-Break Oil | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 445 | 7x Sapglass Lens; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 475 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Prophet of Dust and the Mirror Caravan tries to cut them off. |
| 6 | Debrief | 525 | Quest-turn-in cache fragment; 8x Sapglass Lens | Return the survivors to Glassmith Yara, extract their intelligence, and add their testimony to the main campaign board. |

### Q093 — Descent Beneath the Glass
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Defense
- **Primary location:** Vault of Shattered Suns
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,690 XP + quest completion 1,645 XP = **4,335 story XP**.
- **Quest completion reward:** Sunken-Star Field-Survival Cache — Consumable + Utility Cache, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 375 | 5x Sapglass Lens; scouting reputation +1 | Survey Vault of Shattered Suns, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 405 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Glass Nomads defenders. |
| 3 | First Wave | 430 | Faction scrip +2; 1x Guard-Break Oil | Repel the opening attack from The Prophet of Dust and the Mirror Caravan while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 455 | 7x Sapglass Lens; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Black Comet Crater before morale collapses. |
| 5 | Counterstrike | 485 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 540 | Quest-turn-in cache fragment; 8x Sapglass Lens | Stabilize Mirage Gate, count losses, recover evidence, and authorize the next campaign movement. |

### Q094 — The Sunken Star Speaks
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 15
- **Quest type:** Stealth
- **Primary location:** Caravan of Mirrors
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter; normal combat cap: level 16.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,585 XP + quest completion 1,335 XP = **3,920 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 260, minimum level 15.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 11x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 360 | 5x Sapglass Lens; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Silent Cartographer Jun without alerting The Prophet of Dust and the Mirror Caravan. |
| 2 | Patrol Read | 390 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Caravan of Mirrors. |
| 3 | Silent Entry | 415 | Faction scrip +2; 1x Guard-Break Oil | Enter The Sunken Star Chamber through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 440 | 7x Sapglass Lens; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 465 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escape through Glassdune Sea, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 515 | Quest-turn-in cache fragment; 8x Sapglass Lens | Report to Navigator Sahel, compare the intel to existing clues, and flag the next vulnerability. |

### Q095 — Iren’s False Halo
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Crafting
- **Primary location:** Black Comet Crater
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,920 XP + quest completion 1,645 XP = **4,565 story XP**.
- **Quest completion reward:** Sunken-Star Amulet Armor Piece — Armor Piece, Rare, item power 272, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 410 | 5x Sapglass Lens; scouting reputation +1 | Receive the schematic from Mirage-Saint Iren and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 440 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Recover parts or reagents from Black Comet Crater, Mirage Gate, and a hostile cache controlled by The Prophet of Dust and the Mirror Caravan. |
| 3 | Prototype Build | 465 | Faction scrip +2; 1x Guard-Break Oil | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 495 | 7x Sapglass Lens; repair parts bundle | Test the prototype in The Oasis That Remembers, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 525 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defend Glassmith Yara and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 585 | Quest-turn-in cache fragment; 8x Sapglass Lens | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q096 — The Prophet of Dust Revealed
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Diplomacy
- **Primary location:** The Sunken Star Chamber
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,875 XP + quest completion 1,235 XP = **4,110 story XP**.
- **Quest completion reward:** Sunken-Star Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 272, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 405 | 5x Sapglass Lens; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Sunken Star Chamber by solving their immediate access demand. |
| 2 | Proof Package | 430 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Collect verifiable proof from Glassdune Sea, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 460 | Faction scrip +2; 1x Guard-Break Oil | Hear the objections of Mirror Caravan and Glass Nomads, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 490 | 7x Sapglass Lens; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Prophet of Dust and the Mirror Caravan tries to inflame the room. |
| 5 | Binding Action | 520 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 570 | Quest-turn-in cache fragment; 8x Sapglass Lens | Return to Navigator Sahel, lock in the new ally or resource, and record the consequence for future quests. |

### Q097 — Turn the Desert Lens
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Dungeon
- **Primary location:** Mirage Gate
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,910 XP + quest completion 2,110 XP = **5,020 story XP**.
- **Quest completion reward:** Sunken-Star Delver Cache: Amulet or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare, item power 279, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 405 | 5x Sapglass Lens; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Mirage Gate. |
| 2 | First Wing | 435 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 465 | Faction scrip +2; 1x Guard-Break Oil | Solve the mid-dungeon puzzle or traversal gauntlet in The Oasis That Remembers while enemies pressure the group. |
| 4 | Elite Guardian | 495 | 7x Sapglass Lens; repair parts bundle | Defeat a themed guardian tied to The Prophet of Dust and the Mirror Caravan, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 525 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Sunken Star Astrolabe. |
| 6 | Dungeon Exit | 585 | Quest-turn-in cache fragment; 8x Sapglass Lens | Escape collapse, corruption, or lockdown and brief Silent Cartographer Jun on what the dungeon revealed. |

### Q098 — Break the Comet Seal
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Assault
- **Primary location:** Glassdune Sea
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,905 XP + quest completion 1,935 XP = **4,840 story XP**.
- **Quest completion reward:** Sunken-Star Wayfinder Supply Cache — General Reward Cache, Rare, item power 277, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 405 | 5x Sapglass Lens; scouting reputation +1 | Coordinate with Exile Prince Varo, assign allied squads, and identify the primary breach point at Glassdune Sea. |
| 2 | Forward Push | 435 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 465 | Faction scrip +2; 1x Guard-Break Oil | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Prophet of Dust and the Mirror Caravan. |
| 4 | Interior Fight | 495 | 7x Sapglass Lens; repair parts bundle | Move through Vault of Shattered Suns, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 525 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 580 | Quest-turn-in cache fragment; 8x Sapglass Lens | Secure Black Comet Crater, hand control to allies, and verify that the assault achieved the story purpose. |

### Q099 — Awaken the Sunken Star Chamber
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Boss
- **Primary location:** The Oasis That Remembers
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** The Apex Chimera — separate encounter XP: 7,000.
- **XP package:** subquests total 2,815 XP + quest completion 2,300 XP = **5,115 story XP**.
- **Quest completion reward:** Chimeric Adaptation Blade (The Apex Chimera Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Rare, item power 294, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 395 | 5x Sapglass Lens; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Prophet of Dust and the Mirror Caravan. |
| 2 | Arena Preparation | 420 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Disable shields, open safe lanes, and position allied supports around The Oasis That Remembers. |
| 3 | Phase One | 450 | Faction scrip +2; 1x Guard-Break Oil | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 480 | 7x Sapglass Lens; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 505 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 565 | Quest-turn-in cache fragment; 8x Sapglass Lens | Secure the Sunken Star Astrolabe, report to Silent Cartographer Jun, and unlock the next act-level route or political consequence. |

### Q100 — Coordinates of the Eclipse Engine
- **Act:** 4 — Glass Desert and the Sunken Star
- **Recommended level:** 16
- **Quest type:** Resolution
- **Primary location:** Vault of Shattered Suns
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 17.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,045 XP + quest completion 2,205 XP = **5,250 story XP**.
- **Quest completion reward:** Sunken-Star Act-Capstone Relic: Sunken Star Astrolabe Gear — Act Artifact + Set Token, Rare, item power 295, minimum level 16.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Sapglass Lens.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 425 | 5x Sapglass Lens; scouting reputation +1 | Meet Mirage-Saint Iren, Glassmith Yara, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 455 | 6x Sapglass Lens; 1x Reinforced Vitality Injector | Resolve one survivor need, one political risk, and one technical or magical instability at Vault of Shattered Suns. |
| 3 | Public Moment | 485 | Faction scrip +2; 1x Guard-Break Oil | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 520 | 7x Sapglass Lens; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 550 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 610 | Quest-turn-in cache fragment; 8x Sapglass Lens | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q101 — Reefspire Harbor in Lockdown
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Investigation
- **Primary location:** Reefspire Harbor
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,870 XP + quest completion 1,350 XP = **4,220 story XP**.
- **Quest completion reward:** Leviathan Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 400 | 5x Leviathan Pearl; scouting reputation +1 | Meet Tidecaller Renn at Reefspire Harbor, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 430 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Inspect The Pressure Road for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 460 | Faction scrip +2; 1x Guard-Break Oil | Interview survivors from Pelagos Freeports and Drowned Armada, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 490 | 7x Leviathan Pearl; repair parts bundle | Follow the recovered clue through Caldera’s Wake, avoiding false leads planted by Admiral Nyx Solaro and the Drowned Armada. |
| 5 | Confrontation | 515 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 575 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Deliver a verified finding to Diver Kesh, update the alliance risk map, and unlock the next operational lead. |

### Q102 — The Buoy That Prayed
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Rescue
- **Primary location:** Pearl Court Dome
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,830 XP + quest completion 1,525 XP = **4,355 story XP**.
- **Quest completion reward:** Leviathan Field-Survival Cache — Consumable + Utility Cache, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 395 | 5x Leviathan Pearl; scouting reputation +1 | Triangulate the missing group’s last signal between Pearl Court Dome, Abyssal Relay Nine, and Stormbreak Shoals. |
| 2 | Safe Route | 425 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 455 | Faction scrip +2; 1x Guard-Break Oil | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 480 | 7x Leviathan Pearl; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 510 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Admiral Nyx Solaro and the Drowned Armada tries to cut them off. |
| 6 | Debrief | 565 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Return the survivors to Captain Mora Quill, extract their intelligence, and add their testimony to the main campaign board. |

### Q103 — Pearl Court Audience
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Defense
- **Primary location:** The Pressure Road
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,890 XP + quest completion 1,775 XP = **4,665 story XP**.
- **Quest completion reward:** Leviathan Field-Survival Cache — Consumable + Utility Cache, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 405 | 5x Leviathan Pearl; scouting reputation +1 | Survey The Pressure Road, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 435 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Pearl Court defenders. |
| 3 | First Wave | 460 | Faction scrip +2; 1x Guard-Break Oil | Repel the opening attack from Admiral Nyx Solaro and the Drowned Armada while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 490 | 7x Leviathan Pearl; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Caldera’s Wake before morale collapses. |
| 5 | Counterstrike | 520 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 580 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Stabilize The Sunless Trench, count losses, recover evidence, and authorize the next campaign movement. |

### Q104 — Pressure Road Certification
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Stealth
- **Primary location:** Abyssal Relay Nine
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,785 XP + quest completion 1,435 XP = **4,220 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 390 | 5x Leviathan Pearl; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from AI Buoy-13 without alerting Admiral Nyx Solaro and the Drowned Armada. |
| 2 | Patrol Read | 420 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Abyssal Relay Nine. |
| 3 | Silent Entry | 445 | Faction scrip +2; 1x Guard-Break Oil | Enter Stormbreak Shoals through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 475 | 7x Leviathan Pearl; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 500 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escape through Reefspire Harbor, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 555 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Report to Tidecaller Renn, compare the intel to existing clues, and flag the next vulnerability. |

### Q105 — Diver Kesh’s Last Ping
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Crafting
- **Primary location:** Caldera’s Wake
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,845 XP + quest completion 1,600 XP = **4,445 story XP**.
- **Quest completion reward:** Leviathan Gloves Armor Piece — Armor Piece, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 400 | 5x Leviathan Pearl; scouting reputation +1 | Receive the schematic from Leviathan Caldera and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 425 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Recover parts or reagents from Caldera’s Wake, The Sunless Trench, and a hostile cache controlled by Admiral Nyx Solaro and the Drowned Armada. |
| 3 | Prototype Build | 455 | Faction scrip +2; 1x Guard-Break Oil | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 485 | 7x Leviathan Pearl; repair parts bundle | Test the prototype in Pearl Court Dome, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 510 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defend Captain Mora Quill and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 570 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q106 — The Drowned Armada’s Wake
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Diplomacy
- **Primary location:** Stormbreak Shoals
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,800 XP + quest completion 1,200 XP = **4,000 story XP**.
- **Quest completion reward:** Leviathan Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 390 | 5x Leviathan Pearl; scouting reputation +1 | Earn entry to a council, war table, or faction court at Stormbreak Shoals by solving their immediate access demand. |
| 2 | Proof Package | 420 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Collect verifiable proof from Reefspire Harbor, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 450 | Faction scrip +2; 1x Guard-Break Oil | Hear the objections of Drowned Armada and Pearl Court, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 475 | 7x Leviathan Pearl; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Admiral Nyx Solaro and the Drowned Armada tries to inflame the room. |
| 5 | Binding Action | 505 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 560 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Return to Tidecaller Renn, lock in the new ally or resource, and record the consequence for future quests. |

### Q107 — A Language Made of Whalesong
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 17
- **Quest type:** Exploration
- **Primary location:** The Sunless Trench
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 18.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 2,785 XP + quest completion 1,310 XP = **4,095 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 284, minimum level 17.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 12x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 390 | 5x Leviathan Pearl; scouting reputation +1 | Open the route from The Sunless Trench into Pearl Court Dome and establish a temporary forward camp. |
| 2 | Traversal Trial | 420 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 445 | Faction scrip +2; 1x Guard-Break Oil | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 475 | 7x Leviathan Pearl; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 500 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 555 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Signal Captain Mora Quill, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q108 — Stormbreak Shoals
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Dungeon
- **Primary location:** Reefspire Harbor
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,605 XP + quest completion 2,610 XP = **6,215 story XP**.
- **Quest completion reward:** Leviathan Delver Cache: Gloves or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare, item power 303, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 505 | 5x Leviathan Pearl; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Reefspire Harbor. |
| 2 | First Wing | 540 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 575 | Faction scrip +2; 1x Guard-Break Oil | Solve the mid-dungeon puzzle or traversal gauntlet in The Pressure Road while enemies pressure the group. |
| 4 | Elite Guardian | 615 | 7x Leviathan Pearl; repair parts bundle | Defeat a themed guardian tied to Admiral Nyx Solaro and the Drowned Armada, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 650 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Leviathan Code Array. |
| 6 | Dungeon Exit | 720 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Escape collapse, corruption, or lockdown and brief Leviathan Caldera on what the dungeon revealed. |

### Q109 — Cargo of Impossible Pearls
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Boss
- **Primary location:** Pearl Court Dome
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,480 XP + quest completion 2,845 XP = **6,325 story XP**.
- **Quest completion reward:** Leviathan Elite Spoils Cache: Gloves Pattern — Elite Gear Pattern, Rare, item power 306, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 485 | 5x Leviathan Pearl; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Admiral Nyx Solaro and the Drowned Armada. |
| 2 | Arena Preparation | 520 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Disable shields, open safe lanes, and position allied supports around Pearl Court Dome. |
| 3 | Phase One | 555 | Faction scrip +2; 1x Guard-Break Oil | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 590 | 7x Leviathan Pearl; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 625 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 705 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Secure the Leviathan Code Array, report to AI Buoy-13, and unlock the next act-level route or political consequence. |

### Q110 — The Captain’s Mutiny
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Moral
- **Primary location:** The Pressure Road
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,540 XP + quest completion 1,825 XP = **5,365 story XP**.
- **Quest completion reward:** Leviathan Class Weapon Calibration Kit — Weapon Upgrade Component, Rare, item power 296, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 495 | 5x Leviathan Pearl; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to The Pressure Road. |
| 2 | Evidence Balance | 530 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Verify facts at Caldera’s Wake so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 565 | Faction scrip +2; 1x Guard-Break Oil | Ask Leviathan Caldera and Captain Mora Quill to model the likely cost of each available decision. |
| 4 | Pressure Event | 600 | 7x Leviathan Pearl; repair parts bundle | Survive an attack, riot, or betrayal by Admiral Nyx Solaro and the Drowned Armada that tries to force a rushed answer. |
| 5 | Decision | 635 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 715 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q111 — Abyssal Relay Nine
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Assault
- **Primary location:** Abyssal Relay Nine
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,595 XP + quest completion 2,395 XP = **5,990 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 301, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 505 | 5x Leviathan Pearl; scouting reputation +1 | Coordinate with Tidecaller Renn, assign allied squads, and identify the primary breach point at Abyssal Relay Nine. |
| 2 | Forward Push | 540 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 575 | Faction scrip +2; 1x Guard-Break Oil | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Admiral Nyx Solaro and the Drowned Armada. |
| 4 | Interior Fight | 610 | 7x Leviathan Pearl; repair parts bundle | Move through Stormbreak Shoals, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 645 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 720 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Secure Reefspire Harbor, hand control to allies, and verify that the assault achieved the story purpose. |

### Q112 — Nyx Solaro’s Ultimatum
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Escort
- **Primary location:** Caldera’s Wake
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,600 XP + quest completion 1,935 XP = **5,535 story XP**.
- **Quest completion reward:** Leviathan Field-Survival Cache — Consumable + Utility Cache, Rare, item power 296, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 505 | 5x Leviathan Pearl; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Caldera’s Wake to Pearl Court Dome with Captain Mora Quill. |
| 2 | First Leg | 540 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 575 | Faction scrip +2; 1x Guard-Break Oil | Collect fuel, medicine, ritual charges, or repair parts at The Sunless Trench before the route collapses. |
| 4 | Ambush Response | 610 | 7x Leviathan Pearl; repair parts bundle | Defeat or bypass Admiral Nyx Solaro and the Drowned Armada forces without losing the protected objective. |
| 5 | Final Crossing | 650 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 720 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q113 — Caldera Surfaces
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 18
- **Quest type:** Puzzle
- **Primary location:** Stormbreak Shoals
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 19.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,545 XP + quest completion 1,825 XP = **5,370 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 296, minimum level 18.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 495 | 5x Leviathan Pearl; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing Stormbreak Shoals. |
| 2 | First Solution | 530 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Solve the opening sequence using clues from Diver Kesh, the environment, and one recovered record. |
| 3 | Constraint Shift | 565 | Faction scrip +2; 1x Guard-Break Oil | Adapt when Admiral Nyx Solaro and the Drowned Armada changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 605 | 7x Leviathan Pearl; repair parts bundle | Resolve three linked mechanisms across Reefspire Harbor, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 640 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 710 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Open the path, recover the Leviathan Code Array, and document the rule that will matter in a later quest. |

### Q114 — The Choir Beneath the Hull
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Heist
- **Primary location:** The Sunless Trench
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,340 XP + quest completion 2,440 XP = **6,780 story XP**.
- **Quest completion reward:** Leviathan Technical Cache: Leviathan Pearl Bundle — Crafting / Upgrade Materials, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 610 | 5x Leviathan Pearl; scouting reputation +1 | Survey The Sunless Trench, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 650 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Assign support tasks to AI Buoy-13, Tidecaller Renn, and any recruited faction specialists. |
| 3 | Access Tool | 695 | Faction scrip +2; 1x Guard-Break Oil | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Pearl Court Dome. |
| 4 | The Lift | 740 | 7x Leviathan Pearl; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 780 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 865 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q115 — Keys to the Sunless Trench
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Network
- **Primary location:** Reefspire Harbor
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,340 XP + quest completion 2,440 XP = **6,780 story XP**.
- **Quest completion reward:** Leviathan Helm Armor Piece — Armor Piece, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 610 | 5x Leviathan Pearl; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Reefspire Harbor. |
| 2 | Signal Capture | 650 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 695 | Faction scrip +2; 1x Guard-Break Oil | Restore or harden three relay points across The Pressure Road while enemies attempt live sabotage. |
| 4 | Protocol Break | 740 | 7x Leviathan Pearl; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 780 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 865 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Verify with Leviathan Caldera that the repaired network persists and unlocks a stable path forward. |

### Q116 — Saboteurs in the Airlocks
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Investigation
- **Primary location:** Pearl Court Dome
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,380 XP + quest completion 2,060 XP = **6,440 story XP**.
- **Quest completion reward:** Leviathan Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 615 | 5x Leviathan Pearl; scouting reputation +1 | Meet Tidecaller Renn at Pearl Court Dome, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 655 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Inspect Abyssal Relay Nine for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 700 | Faction scrip +2; 1x Guard-Break Oil | Interview survivors from Leviathan Choir and Pelagos Freeports, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 745 | 7x Leviathan Pearl; repair parts bundle | Follow the recovered clue through Stormbreak Shoals, avoiding false leads planted by Admiral Nyx Solaro and the Drowned Armada. |
| 5 | Confrontation | 790 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 875 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Deliver a verified finding to Diver Kesh, update the alliance risk map, and unlock the next operational lead. |

### Q117 — The Pearl Court Betrayal
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Rescue
- **Primary location:** The Pressure Road
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,320 XP + quest completion 2,325 XP = **6,645 story XP**.
- **Quest completion reward:** Leviathan Field-Survival Cache — Consumable + Utility Cache, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 605 | 5x Leviathan Pearl; scouting reputation +1 | Triangulate the missing group’s last signal between The Pressure Road, Caldera’s Wake, and The Sunless Trench. |
| 2 | Safe Route | 650 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 690 | Faction scrip +2; 1x Guard-Break Oil | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 735 | 7x Leviathan Pearl; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 780 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Admiral Nyx Solaro and the Drowned Armada tries to cut them off. |
| 6 | Debrief | 860 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Return the survivors to Captain Mora Quill, extract their intelligence, and add their testimony to the main campaign board. |

### Q118 — Leviathan Code Fragment
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Defense
- **Primary location:** Abyssal Relay Nine
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,415 XP + quest completion 2,705 XP = **7,120 story XP**.
- **Quest completion reward:** Leviathan Field-Survival Cache — Consumable + Utility Cache, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 620 | 5x Leviathan Pearl; scouting reputation +1 | Survey Abyssal Relay Nine, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 660 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Repair barricades, deploy sensors or wards, and place fallback supplies for Drowned Armada defenders. |
| 3 | First Wave | 705 | Faction scrip +2; 1x Guard-Break Oil | Repel the opening attack from Admiral Nyx Solaro and the Drowned Armada while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 750 | 7x Leviathan Pearl; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Stormbreak Shoals before morale collapses. |
| 5 | Counterstrike | 795 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 885 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Stabilize Reefspire Harbor, count losses, recover evidence, and authorize the next campaign movement. |

### Q119 — Battle of Stormbreak Shoals
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 19
- **Quest type:** Stealth
- **Primary location:** Caldera’s Wake
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 20.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,245 XP + quest completion 2,190 XP = **6,435 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 308, minimum level 19.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 1x Guard-Break Oil, 13x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 595 | 5x Leviathan Pearl; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from AI Buoy-13 without alerting Admiral Nyx Solaro and the Drowned Armada. |
| 2 | Patrol Read | 635 | 6x Leviathan Pearl; 1x Reinforced Vitality Injector | Map guard paths, camera/scrying cones, and alarm relays across Caldera’s Wake. |
| 3 | Silent Entry | 680 | Faction scrip +2; 1x Guard-Break Oil | Enter The Sunless Trench through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 720 | 7x Leviathan Pearl; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 765 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Escape through Pearl Court Dome, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 850 | Quest-turn-in cache fragment; 8x Leviathan Pearl | Report to Tidecaller Renn, compare the intel to existing clues, and flag the next vulnerability. |

### Q120 — Mora Quill’s Reckoning
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Crafting
- **Primary location:** Stormbreak Shoals
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,670 XP + quest completion 2,630 XP = **7,300 story XP**.
- **Quest completion reward:** Leviathan Class Weapon Calibration Kit — Weapon Upgrade Component, Rare, item power 320, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 655 | 6x Leviathan Pearl; scouting reputation +1 | Receive the schematic from Leviathan Caldera and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 700 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Recover parts or reagents from Stormbreak Shoals, Reefspire Harbor, and a hostile cache controlled by Admiral Nyx Solaro and the Drowned Armada. |
| 3 | Prototype Build | 745 | Faction scrip +3; 1x Guard-Break Oil | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 795 | 8x Leviathan Pearl; repair parts bundle | Test the prototype in The Pressure Road, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 840 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defend Captain Mora Quill and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 935 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q121 — The Armada Below
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Diplomacy
- **Primary location:** The Sunless Trench
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,600 XP + quest completion 1,970 XP = **6,570 story XP**.
- **Quest completion reward:** Leviathan Reputation Writ + Evidence Cache — Reputation / Utility, Rare, item power 320, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 645 | 6x Leviathan Pearl; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Sunless Trench by solving their immediate access demand. |
| 2 | Proof Package | 690 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Collect verifiable proof from Pearl Court Dome, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 735 | Faction scrip +3; 1x Guard-Break Oil | Hear the objections of Pelagos Freeports and Drowned Armada, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 780 | 8x Leviathan Pearl; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Admiral Nyx Solaro and the Drowned Armada tries to inflame the room. |
| 5 | Binding Action | 830 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 920 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Return to Tidecaller Renn, lock in the new ally or resource, and record the consequence for future quests. |

### Q122 — Decode the Whale-Signal
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Dungeon
- **Primary location:** Reefspire Harbor
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,655 XP + quest completion 3,375 XP = **8,030 story XP**.
- **Quest completion reward:** Leviathan Delver Cache: Chestguard or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare, item power 327, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 650 | 6x Leviathan Pearl; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Reefspire Harbor. |
| 2 | First Wing | 700 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 745 | Faction scrip +3; 1x Guard-Break Oil | Solve the mid-dungeon puzzle or traversal gauntlet in The Pressure Road while enemies pressure the group. |
| 4 | Elite Guardian | 790 | 8x Leviathan Pearl; repair parts bundle | Defeat a themed guardian tied to Admiral Nyx Solaro and the Drowned Armada, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 840 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Leviathan Code Array. |
| 6 | Dungeon Exit | 930 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Escape collapse, corruption, or lockdown and brief AI Buoy-13 on what the dungeon revealed. |

### Q123 — The Sunless Trench Descent
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Assault
- **Primary location:** Pearl Court Dome
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,640 XP + quest completion 3,095 XP = **7,735 story XP**.
- **Quest completion reward:** Leviathan Wayfinder Supply Cache — General Reward Cache, Rare, item power 325, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 650 | 6x Leviathan Pearl; scouting reputation +1 | Coordinate with Diver Kesh, assign allied squads, and identify the primary breach point at Pearl Court Dome. |
| 2 | Forward Push | 695 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 740 | Faction scrip +3; 1x Guard-Break Oil | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Admiral Nyx Solaro and the Drowned Armada. |
| 4 | Interior Fight | 790 | 8x Leviathan Pearl; repair parts bundle | Move through Abyssal Relay Nine, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 835 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 930 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Secure Stormbreak Shoals, hand control to allies, and verify that the assault achieved the story purpose. |

### Q124 — Duel with Admiral Solaro
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Boss
- **Primary location:** The Pressure Road
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** The Null Anomaly — separate encounter XP: 12,000.
- **XP package:** subquests total 4,495 XP + quest completion 3,680 XP = **8,175 story XP**.
- **Quest completion reward:** Null-Splinter Phaseblade (The Null Anomaly Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Rare, item power 342, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 630 | 6x Leviathan Pearl; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Admiral Nyx Solaro and the Drowned Armada. |
| 2 | Arena Preparation | 675 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Disable shields, open safe lanes, and position allied supports around The Pressure Road. |
| 3 | Phase One | 720 | Faction scrip +3; 1x Guard-Break Oil | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 765 | 8x Leviathan Pearl; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 810 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 895 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Secure the Leviathan Code Array, report to AI Buoy-13, and unlock the next act-level route or political consequence. |

### Q125 — The Leviathan Code Sings
- **Act:** 5 — Tides of the Leviathan Code
- **Recommended level:** 20
- **Quest type:** Resolution
- **Primary location:** Abyssal Relay Nine
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 21.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,865 XP + quest completion 3,525 XP = **8,390 story XP**.
- **Quest completion reward:** Leviathan Act-Capstone Relic: Leviathan Code Array Prism — Act Artifact + Set Token, Rare, item power 343, minimum level 20.
- **Consumables/materials:** 2x Reinforced Vitality Injector, 2x Guard-Break Oil, 14x Leviathan Pearl.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 680 | 6x Leviathan Pearl; scouting reputation +1 | Meet Leviathan Caldera, Captain Mora Quill, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 730 | 7x Leviathan Pearl; 1x Reinforced Vitality Injector | Resolve one survivor need, one political risk, and one technical or magical instability at Abyssal Relay Nine. |
| 3 | Public Moment | 780 | Faction scrip +3; 1x Guard-Break Oil | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 825 | 8x Leviathan Pearl; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 875 | 1x Reinforced Vitality Injector; 1x Guard-Break Oil; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 975 | Quest-turn-in cache fragment; 9x Leviathan Pearl | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q126 — Cratergate Opens Above
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 21
- **Quest type:** Investigation
- **Primary location:** Cratergate
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 22.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,000 XP + quest completion 2,820 XP = **8,820 story XP**.
- **Quest completion reward:** Hollow-Moon Reputation Writ + Evidence Cache — Reputation / Utility, Rare+, item power 332, minimum level 21.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 14x Moonbone Alloy.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 840 | 6x Moonbone Alloy; scouting reputation +1 | Meet Gravity-Knight Asha at Cratergate, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 900 | 7x Moonbone Alloy; 1x Aether Reconstructor | Inspect Mirror Barrens for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 960 | Faction scrip +3; 1x Overdrive Ampoule | Interview survivors from Lunarch Wardens and Mirrorborn Legions, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 1,020 | 8x Moonbone Alloy; repair parts bundle | Follow the recovered clue through Orbital Anchor Field, avoiding false leads planted by The Pale Regent and the Mirrorborn Legions. |
| 5 | Confrontation | 1,080 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 1,200 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Deliver a verified finding to Professor Quen, update the alliance risk map, and unlock the next operational lead. |

### Q127 — First Steps in Low Gravity
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 21
- **Quest type:** Rescue
- **Primary location:** The Upside Citadel
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 22.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 5,910 XP + quest completion 3,185 XP = **9,095 story XP**.
- **Quest completion reward:** Hollow-Moon Field-Survival Cache — Consumable + Utility Cache, Rare+, item power 332, minimum level 21.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 14x Moonbone Alloy.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 825 | 6x Moonbone Alloy; scouting reputation +1 | Triangulate the missing group’s last signal between The Upside Citadel, Silver Monastery, and The Weightless Archive. |
| 2 | Safe Route | 885 | 7x Moonbone Alloy; 1x Aether Reconstructor | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 945 | Faction scrip +3; 1x Overdrive Ampoule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 1,005 | 8x Moonbone Alloy; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 1,065 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Pale Regent and the Mirrorborn Legions tries to cut them off. |
| 6 | Debrief | 1,185 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Return the survivors to Mirror-Twin Kael, extract their intelligence, and add their testimony to the main campaign board. |

### Q128 — The Mirror-Twin’s Warning
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 21
- **Quest type:** Defense
- **Primary location:** Mirror Barrens
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 22.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,040 XP + quest completion 3,705 XP = **9,745 story XP**.
- **Quest completion reward:** Hollow-Moon Field-Survival Cache — Consumable + Utility Cache, Rare+, item power 332, minimum level 21.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 14x Moonbone Alloy.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 845 | 6x Moonbone Alloy; scouting reputation +1 | Survey Mirror Barrens, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 905 | 7x Moonbone Alloy; 1x Aether Reconstructor | Repair barricades, deploy sensors or wards, and place fallback supplies for Gravity-Knights defenders. |
| 3 | First Wave | 965 | Faction scrip +3; 1x Overdrive Ampoule | Repel the opening attack from The Pale Regent and the Mirrorborn Legions while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 1,025 | 8x Moonbone Alloy; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Orbital Anchor Field before morale collapses. |
| 5 | Counterstrike | 1,085 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 1,215 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Stabilize Pale Court Theater, count losses, recover evidence, and authorize the next campaign movement. |

### Q129 — Upside Citadel Breach
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 21
- **Quest type:** Stealth
- **Primary location:** Silver Monastery
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 22.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 5,820 XP + quest completion 3,000 XP = **8,820 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 332, minimum level 21.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 14x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 815 | 6x Moonbone Alloy; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Moon Monk Sovan without alerting The Pale Regent and the Mirrorborn Legions. |
| 2 | Patrol Read | 875 | 7x Moonbone Alloy; 1x Aether Reconstructor | Map guard paths, camera/scrying cones, and alarm relays across Silver Monastery. |
| 3 | Silent Entry | 930 | Faction scrip +3; 1x Overdrive Ampoule | Enter The Weightless Archive through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 990 | 8x Moonbone Alloy; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 1,050 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escape through Cratergate, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 1,160 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Report to Gravity-Knight Asha, compare the intel to existing clues, and flag the next vulnerability. |

### Q130 — Professor Quen’s Paradox
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 21
- **Quest type:** Crafting
- **Primary location:** Orbital Anchor Field
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 22.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 5,940 XP + quest completion 3,340 XP = **9,280 story XP**.
- **Quest completion reward:** Hollow-Moon Class Weapon Calibration Kit — Weapon Upgrade Component, Rare+, item power 332, minimum level 21.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 14x Moonbone Alloy.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 830 | 6x Moonbone Alloy; scouting reputation +1 | Receive the schematic from Pilot Rixx and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 890 | 7x Moonbone Alloy; 1x Aether Reconstructor | Recover parts or reagents from Orbital Anchor Field, Pale Court Theater, and a hostile cache controlled by The Pale Regent and the Mirrorborn Legions. |
| 3 | Prototype Build | 950 | Faction scrip +3; 1x Overdrive Ampoule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 1,010 | 8x Moonbone Alloy; repair parts bundle | Test the prototype in The Upside Citadel, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 1,070 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defend Mirror-Twin Kael and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 1,190 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q131 — Silver Monastery Vows
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 22
- **Quest type:** Diplomacy
- **Primary location:** The Weightless Archive
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 23.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,565 XP + quest completion 2,815 XP = **9,380 story XP**.
- **Quest completion reward:** Hollow-Moon Reputation Writ + Evidence Cache — Reputation / Utility, Rare+, item power 344, minimum level 22.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 920 | 6x Moonbone Alloy; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Weightless Archive by solving their immediate access demand. |
| 2 | Proof Package | 985 | 7x Moonbone Alloy; 1x Aether Reconstructor | Collect verifiable proof from Cratergate, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 1,050 | Faction scrip +3; 1x Overdrive Ampoule | Hear the objections of Mirrorborn Legions and Gravity-Knights, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 1,115 | 8x Moonbone Alloy; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Pale Regent and the Mirrorborn Legions tries to inflame the room. |
| 5 | Binding Action | 1,180 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 1,315 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Return to Gravity-Knight Asha, lock in the new ally or resource, and record the consequence for future quests. |

### Q132 — The Pale Court’s Invitation
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 22
- **Quest type:** Exploration
- **Primary location:** Pale Court Theater
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 23.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,520 XP + quest completion 3,065 XP = **9,585 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 344, minimum level 22.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 915 | 6x Moonbone Alloy; scouting reputation +1 | Open the route from Pale Court Theater into The Upside Citadel and establish a temporary forward camp. |
| 2 | Traversal Trial | 980 | 7x Moonbone Alloy; 1x Aether Reconstructor | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 1,045 | Faction scrip +3; 1x Overdrive Ampoule | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 1,110 | 8x Moonbone Alloy; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 1,175 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 1,295 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Signal Mirror-Twin Kael, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q133 — Orbital Anchor Survey
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 22
- **Quest type:** Dungeon
- **Primary location:** Cratergate
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 23.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,650 XP + quest completion 4,815 XP = **11,465 story XP**.
- **Quest completion reward:** Hollow-Moon Delver Cache: Cloak or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare+, item power 351, minimum level 22.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 930 | 6x Moonbone Alloy; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Cratergate. |
| 2 | First Wing | 1,000 | 7x Moonbone Alloy; 1x Aether Reconstructor | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 1,065 | Faction scrip +3; 1x Overdrive Ampoule | Solve the mid-dungeon puzzle or traversal gauntlet in Mirror Barrens while enemies pressure the group. |
| 4 | Elite Guardian | 1,130 | 8x Moonbone Alloy; repair parts bundle | Defeat a themed guardian tied to The Pale Regent and the Mirrorborn Legions, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 1,195 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Hollow Moon Keystone. |
| 6 | Dungeon Exit | 1,330 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Escape collapse, corruption, or lockdown and brief Pilot Rixx on what the dungeon revealed. |

### Q134 — Pilot Rixx’s Crash Site
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 22
- **Quest type:** Boss
- **Primary location:** The Upside Citadel
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 23.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,420 XP + quest completion 5,250 XP = **11,670 story XP**.
- **Quest completion reward:** Hollow-Moon Elite Spoils Cache: Cloak Pattern — Elite Gear Pattern, Rare+, item power 354, minimum level 22.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 900 | 6x Moonbone Alloy; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Pale Regent and the Mirrorborn Legions. |
| 2 | Arena Preparation | 965 | 7x Moonbone Alloy; 1x Aether Reconstructor | Disable shields, open safe lanes, and position allied supports around The Upside Citadel. |
| 3 | Phase One | 1,025 | Faction scrip +3; 1x Overdrive Ampoule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 1,090 | 8x Moonbone Alloy; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 1,155 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 1,285 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Secure the Hollow Moon Keystone, report to Moon Monk Sovan, and unlock the next act-level route or political consequence. |

### Q135 — The Barrens Reflect Back
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 22
- **Quest type:** Moral
- **Primary location:** Mirror Barrens
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 23.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 6,535 XP + quest completion 3,365 XP = **9,900 story XP**.
- **Quest completion reward:** Hollow-Moon Bracers Armor Piece — Armor Piece, Rare+, item power 344, minimum level 22.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 915 | 6x Moonbone Alloy; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to Mirror Barrens. |
| 2 | Evidence Balance | 980 | 7x Moonbone Alloy; 1x Aether Reconstructor | Verify facts at Orbital Anchor Field so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 1,045 | Faction scrip +3; 1x Overdrive Ampoule | Ask Pilot Rixx and Mirror-Twin Kael to model the likely cost of each available decision. |
| 4 | Pressure Event | 1,110 | 8x Moonbone Alloy; repair parts bundle | Survive an attack, riot, or betrayal by The Pale Regent and the Mirrorborn Legions that tries to force a rushed answer. |
| 5 | Decision | 1,175 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 1,310 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q136 — Moon Monk Sovan’s Trial
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 23
- **Quest type:** Assault
- **Primary location:** Silver Monastery
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 24.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 7,490 XP + quest completion 4,990 XP = **12,480 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 361, minimum level 23.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,050 | 6x Moonbone Alloy; scouting reputation +1 | Coordinate with Gravity-Knight Asha, assign allied squads, and identify the primary breach point at Silver Monastery. |
| 2 | Forward Push | 1,125 | 7x Moonbone Alloy; 1x Aether Reconstructor | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 1,200 | Faction scrip +3; 1x Overdrive Ampoule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Pale Regent and the Mirrorborn Legions. |
| 4 | Interior Fight | 1,275 | 8x Moonbone Alloy; repair parts bundle | Move through The Weightless Archive, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 1,350 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 1,490 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Secure Cratergate, hand control to allies, and verify that the assault achieved the story purpose. |

### Q137 — Asha’s Gravity Lance
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 23
- **Quest type:** Escort
- **Primary location:** Orbital Anchor Field
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 24.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 7,500 XP + quest completion 4,040 XP = **11,540 story XP**.
- **Quest completion reward:** Hollow-Moon Field-Survival Cache — Consumable + Utility Cache, Rare+, item power 356, minimum level 23.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 1,050 | 6x Moonbone Alloy; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Orbital Anchor Field to The Upside Citadel with Mirror-Twin Kael. |
| 2 | First Leg | 1,125 | 7x Moonbone Alloy; 1x Aether Reconstructor | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 1,200 | Faction scrip +3; 1x Overdrive Ampoule | Collect fuel, medicine, ritual charges, or repair parts at Pale Court Theater before the route collapses. |
| 4 | Ambush Response | 1,275 | 8x Moonbone Alloy; repair parts bundle | Defeat or bypass The Pale Regent and the Mirrorborn Legions forces without losing the protected objective. |
| 5 | Final Crossing | 1,350 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 1,500 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q138 — The Weightless Archive
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 23
- **Quest type:** Puzzle
- **Primary location:** The Weightless Archive
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 24.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 7,380 XP + quest completion 3,805 XP = **11,185 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 356, minimum level 23.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 1,035 | 6x Moonbone Alloy; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing The Weightless Archive. |
| 2 | First Solution | 1,105 | 7x Moonbone Alloy; 1x Aether Reconstructor | Solve the opening sequence using clues from Professor Quen, the environment, and one recovered record. |
| 3 | Constraint Shift | 1,180 | Faction scrip +3; 1x Overdrive Ampoule | Adapt when The Pale Regent and the Mirrorborn Legions changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 1,255 | 8x Moonbone Alloy; repair parts bundle | Resolve three linked mechanisms across Cratergate, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 1,330 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 1,475 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Open the path, recover the Hollow Moon Keystone, and document the rule that will matter in a later quest. |

### Q139 — Legion of Borrowed Faces
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 23
- **Quest type:** Heist
- **Primary location:** Pale Court Theater
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 24.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 7,535 XP + quest completion 4,240 XP = **11,775 story XP**.
- **Quest completion reward:** Hollow-Moon Technical Cache: Moonbone Alloy Bundle — Crafting / Upgrade Materials, Rare+, item power 356, minimum level 23.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 1,055 | 6x Moonbone Alloy; scouting reputation +1 | Survey Pale Court Theater, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 1,130 | 7x Moonbone Alloy; 1x Aether Reconstructor | Assign support tasks to Moon Monk Sovan, Gravity-Knight Asha, and any recruited faction specialists. |
| 3 | Access Tool | 1,205 | Faction scrip +3; 1x Overdrive Ampoule | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter The Upside Citadel. |
| 4 | The Lift | 1,280 | 8x Moonbone Alloy; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 1,355 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 1,510 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q140 — Keystone in Three Shadows
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 23
- **Quest type:** Network
- **Primary location:** Cratergate
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 24.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 7,540 XP + quest completion 4,240 XP = **11,780 story XP**.
- **Quest completion reward:** Hollow-Moon Class Weapon Calibration Kit — Weapon Upgrade Component, Rare+, item power 356, minimum level 23.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 15x Moonbone Alloy.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 1,055 | 6x Moonbone Alloy; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Cratergate. |
| 2 | Signal Capture | 1,130 | 7x Moonbone Alloy; 1x Aether Reconstructor | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 1,205 | Faction scrip +3; 1x Overdrive Ampoule | Restore or harden three relay points across Mirror Barrens while enemies attempt live sabotage. |
| 4 | Protocol Break | 1,280 | 8x Moonbone Alloy; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 1,355 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 1,515 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Verify with Pilot Rixx that the repaired network persists and unlocks a stable path forward. |

### Q141 — Sabotage the Anchor Field
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 24
- **Quest type:** Investigation
- **Primary location:** The Upside Citadel
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,655 XP + quest completion 4,070 XP = **12,725 story XP**.
- **Quest completion reward:** Hollow-Moon Reputation Writ + Evidence Cache — Reputation / Utility, Rare+, item power 368, minimum level 24.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,210 | 6x Moonbone Alloy; scouting reputation +1 | Meet Gravity-Knight Asha at The Upside Citadel, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,300 | 7x Moonbone Alloy; 1x Aether Reconstructor | Inspect Silver Monastery for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 1,385 | Faction scrip +3; 1x Overdrive Ampoule | Interview survivors from Pale Court and Lunarch Wardens, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 1,470 | 8x Moonbone Alloy; repair parts bundle | Follow the recovered clue through The Weightless Archive, avoiding false leads planted by The Pale Regent and the Mirrorborn Legions. |
| 5 | Confrontation | 1,560 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 1,730 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Deliver a verified finding to Professor Quen, update the alliance risk map, and unlock the next operational lead. |

### Q142 — Mirror-Twin Betrayal
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 24
- **Quest type:** Rescue
- **Primary location:** Mirror Barrens
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,535 XP + quest completion 4,595 XP = **13,130 story XP**.
- **Quest completion reward:** Hollow-Moon Field-Survival Cache — Consumable + Utility Cache, Rare+, item power 368, minimum level 24.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,195 | 6x Moonbone Alloy; scouting reputation +1 | Triangulate the missing group’s last signal between Mirror Barrens, Orbital Anchor Field, and Pale Court Theater. |
| 2 | Safe Route | 1,280 | 7x Moonbone Alloy; 1x Aether Reconstructor | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 1,365 | Faction scrip +3; 1x Overdrive Ampoule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 1,450 | 8x Moonbone Alloy; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 1,535 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Pale Regent and the Mirrorborn Legions tries to cut them off. |
| 6 | Debrief | 1,710 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Return the survivors to Mirror-Twin Kael, extract their intelligence, and add their testimony to the main campaign board. |

### Q143 — The Pale Regent’s Masquerade
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 24
- **Quest type:** Defense
- **Primary location:** Silver Monastery
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,720 XP + quest completion 5,345 XP = **14,065 story XP**.
- **Quest completion reward:** Hollow-Moon Field-Survival Cache — Consumable + Utility Cache, Rare+, item power 368, minimum level 24.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,220 | 6x Moonbone Alloy; scouting reputation +1 | Survey Silver Monastery, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,310 | 7x Moonbone Alloy; 1x Aether Reconstructor | Repair barricades, deploy sensors or wards, and place fallback supplies for Mirrorborn Legions defenders. |
| 3 | First Wave | 1,395 | Faction scrip +3; 1x Overdrive Ampoule | Repel the opening attack from The Pale Regent and the Mirrorborn Legions while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 1,480 | 8x Moonbone Alloy; repair parts bundle | Respond to a breach, sabotage event, or elite flank at The Weightless Archive before morale collapses. |
| 5 | Counterstrike | 1,570 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 1,745 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Stabilize Cratergate, count losses, recover evidence, and authorize the next campaign movement. |

### Q144 — Lunarch Civil War
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 24
- **Quest type:** Stealth
- **Primary location:** Orbital Anchor Field
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,400 XP + quest completion 4,325 XP = **12,725 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 368, minimum level 24.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,175 | 6x Moonbone Alloy; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Moon Monk Sovan without alerting The Pale Regent and the Mirrorborn Legions. |
| 2 | Patrol Read | 1,260 | 7x Moonbone Alloy; 1x Aether Reconstructor | Map guard paths, camera/scrying cones, and alarm relays across Orbital Anchor Field. |
| 3 | Silent Entry | 1,345 | Faction scrip +3; 1x Overdrive Ampoule | Enter Pale Court Theater through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 1,430 | 8x Moonbone Alloy; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 1,510 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escape through The Upside Citadel, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 1,680 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Report to Gravity-Knight Asha, compare the intel to existing clues, and flag the next vulnerability. |

### Q145 — The Upside Citadel Falls
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 24
- **Quest type:** Crafting
- **Primary location:** The Weightless Archive
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,575 XP + quest completion 4,820 XP = **13,395 story XP**.
- **Quest completion reward:** Hollow-Moon Amulet Armor Piece — Armor Piece, Rare+, item power 368, minimum level 24.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 1,200 | 6x Moonbone Alloy; scouting reputation +1 | Receive the schematic from Pilot Rixx and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 1,285 | 7x Moonbone Alloy; 1x Aether Reconstructor | Recover parts or reagents from The Weightless Archive, Cratergate, and a hostile cache controlled by The Pale Regent and the Mirrorborn Legions. |
| 3 | Prototype Build | 1,370 | Faction scrip +3; 1x Overdrive Ampoule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 1,460 | 8x Moonbone Alloy; repair parts bundle | Test the prototype in Mirror Barrens, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 1,545 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defend Mirror-Twin Kael and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 1,715 | Quest-turn-in cache fragment; 9x Moonbone Alloy | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q146 — Orbit Burns Blue
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 25
- **Quest type:** Diplomacy
- **Primary location:** Pale Court Theater
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,730 XP + quest completion 3,740 XP = **12,470 story XP**.
- **Quest completion reward:** Hollow-Moon Reputation Writ + Evidence Cache — Reputation / Utility, Rare+, item power 380, minimum level 25.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 1,220 | 7x Moonbone Alloy; scouting reputation +1 | Earn entry to a council, war table, or faction court at Pale Court Theater by solving their immediate access demand. |
| 2 | Proof Package | 1,310 | 8x Moonbone Alloy; 1x Aether Reconstructor | Collect verifiable proof from The Upside Citadel, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 1,395 | Faction scrip +3; 1x Overdrive Ampoule | Hear the objections of Lunarch Wardens and Mirrorborn Legions, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 1,485 | 9x Moonbone Alloy; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Pale Regent and the Mirrorborn Legions tries to inflame the room. |
| 5 | Binding Action | 1,570 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 1,750 | Quest-turn-in cache fragment; 10x Moonbone Alloy | Return to Gravity-Knight Asha, lock in the new ally or resource, and record the consequence for future quests. |

### Q147 — Resolve the Paradox
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 25
- **Quest type:** Dungeon
- **Primary location:** Cratergate
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,840 XP + quest completion 6,400 XP = **15,240 story XP**.
- **Quest completion reward:** Hollow-Moon Delver Cache: Amulet or Weapon-Mod Choice — Dungeon Gear Choice Cache, Rare+, item power 387, minimum level 25.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 1,240 | 7x Moonbone Alloy; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Cratergate. |
| 2 | First Wing | 1,325 | 8x Moonbone Alloy; 1x Aether Reconstructor | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 1,415 | Faction scrip +3; 1x Overdrive Ampoule | Solve the mid-dungeon puzzle or traversal gauntlet in Mirror Barrens while enemies pressure the group. |
| 4 | Elite Guardian | 1,505 | 9x Moonbone Alloy; repair parts bundle | Defeat a themed guardian tied to The Pale Regent and the Mirrorborn Legions, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 1,590 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Hollow Moon Keystone. |
| 6 | Dungeon Exit | 1,765 | Quest-turn-in cache fragment; 10x Moonbone Alloy | Escape collapse, corruption, or lockdown and brief Moon Monk Sovan on what the dungeon revealed. |

### Q148 — Storm the Pale Court Theater
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 25
- **Quest type:** Assault
- **Primary location:** The Upside Citadel
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,810 XP + quest completion 5,875 XP = **14,685 story XP**.
- **Quest completion reward:** Hollow-Moon Wayfinder Supply Cache — General Reward Cache, Rare+, item power 385, minimum level 25.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,235 | 7x Moonbone Alloy; scouting reputation +1 | Coordinate with Professor Quen, assign allied squads, and identify the primary breach point at The Upside Citadel. |
| 2 | Forward Push | 1,320 | 8x Moonbone Alloy; 1x Aether Reconstructor | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 1,410 | Faction scrip +3; 1x Overdrive Ampoule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Pale Regent and the Mirrorborn Legions. |
| 4 | Interior Fight | 1,500 | 9x Moonbone Alloy; repair parts bundle | Move through Silver Monastery, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 1,585 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 1,760 | Quest-turn-in cache fragment; 10x Moonbone Alloy | Secure The Weightless Archive, hand control to allies, and verify that the assault achieved the story purpose. |

### Q149 — Break the Moon Siege Anchor
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 25
- **Quest type:** Boss
- **Primary location:** Mirror Barrens
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** The Ascendant Colossus — separate encounter XP: 18,000.
- **XP package:** subquests total 8,535 XP + quest completion 6,980 XP = **15,515 story XP**.
- **Quest completion reward:** Colossus Heartplate (The Ascendant Colossus Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Rare+, item power 402, minimum level 25.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 1,195 | 7x Moonbone Alloy; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Pale Regent and the Mirrorborn Legions. |
| 2 | Arena Preparation | 1,280 | 8x Moonbone Alloy; 1x Aether Reconstructor | Disable shields, open safe lanes, and position allied supports around Mirror Barrens. |
| 3 | Phase One | 1,365 | Faction scrip +3; 1x Overdrive Ampoule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 1,450 | 9x Moonbone Alloy; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 1,535 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 1,710 | Quest-turn-in cache fragment; 10x Moonbone Alloy | Secure the Hollow Moon Keystone, report to Moon Monk Sovan, and unlock the next act-level route or political consequence. |

### Q150 — The Hollow Moon Remembers
- **Act:** 6 — The Hollow Moon War
- **Recommended level:** 25
- **Quest type:** Resolution
- **Primary location:** Silver Monastery
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Mid Game; allowed normal monsters: The Aegis Carapace, The Iron-Jaw Hound, The Venom-Spitter, The Tremor-Fiend; normal combat cap: level 25.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,240 XP + quest completion 6,690 XP = **15,930 story XP**.
- **Quest completion reward:** Hollow-Moon Act-Capstone Relic: Hollow Moon Keystone Shard — Act Artifact + Set Token, Rare+, item power 403, minimum level 25.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 16x Moonbone Alloy.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 1,295 | 7x Moonbone Alloy; scouting reputation +1 | Meet Pilot Rixx, Mirror-Twin Kael, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 1,385 | 8x Moonbone Alloy; 1x Aether Reconstructor | Resolve one survivor need, one political risk, and one technical or magical instability at Silver Monastery. |
| 3 | Public Moment | 1,480 | Faction scrip +3; 1x Overdrive Ampoule | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 1,570 | 9x Moonbone Alloy; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 1,665 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 1,845 | Quest-turn-in cache fragment; 10x Moonbone Alloy | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q151 — The Armies Arrive Separately
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 26
- **Quest type:** Investigation
- **Primary location:** Outer Siege Lines
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 27.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,110 XP + quest completion 4,285 XP = **13,395 story XP**.
- **Quest completion reward:** Black-Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Epic, item power 392, minimum level 26.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,275 | 7x Meridian Cipher Plate; scouting reputation +1 | Meet General Lyra Voss at Outer Siege Lines, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,365 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Inspect The Senatorial Maze for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 1,460 | Faction scrip +3; 1x Overdrive Ampoule | Interview survivors from United Accord and Null Paladins, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 1,550 | 9x Meridian Cipher Plate; repair parts bundle | Follow the recovered clue through Civic Catacombs, avoiding false leads planted by Chancellor Marek Thorne and the Null Paladins. |
| 5 | Confrontation | 1,640 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 1,820 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Deliver a verified finding to Prince Varo, update the alliance risk map, and unlock the next operational lead. |

### Q152 — Outer Siege Line Council
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 26
- **Quest type:** Rescue
- **Primary location:** East Aqueduct Wall
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 27.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,985 XP + quest completion 4,835 XP = **13,820 story XP**.
- **Quest completion reward:** Black-Meridian Field-Survival Cache — Consumable + Utility Cache, Epic, item power 392, minimum level 26.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,260 | 7x Meridian Cipher Plate; scouting reputation +1 | Triangulate the missing group’s last signal between East Aqueduct Wall, Null Cathedral, and Meridian Switchyard. |
| 2 | Safe Route | 1,350 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 1,440 | Faction scrip +3; 1x Overdrive Ampoule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 1,525 | 9x Meridian Cipher Plate; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 1,615 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Chancellor Marek Thorne and the Null Paladins tries to cut them off. |
| 6 | Debrief | 1,795 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Return the survivors to Spymaster Sera Nox, extract their intelligence, and add their testimony to the main campaign board. |

### Q153 — Aqueduct Wall Weakpoint
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 26
- **Quest type:** Defense
- **Primary location:** The Senatorial Maze
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 27.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,180 XP + quest completion 5,625 XP = **14,805 story XP**.
- **Quest completion reward:** Black-Meridian Field-Survival Cache — Consumable + Utility Cache, Epic, item power 392, minimum level 26.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,285 | 7x Meridian Cipher Plate; scouting reputation +1 | Survey The Senatorial Maze, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,375 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Repair barricades, deploy sensors or wards, and place fallback supplies for Black Meridian Senate defenders. |
| 3 | First Wave | 1,470 | Faction scrip +3; 1x Overdrive Ampoule | Repel the opening attack from Chancellor Marek Thorne and the Null Paladins while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 1,560 | 9x Meridian Cipher Plate; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Civic Catacombs before morale collapses. |
| 5 | Counterstrike | 1,650 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 1,840 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Stabilize Chancellor’s Bastion, count losses, recover evidence, and authorize the next campaign movement. |

### Q154 — Civilian Ward Evacuation
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 26
- **Quest type:** Stealth
- **Primary location:** Null Cathedral
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 27.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 8,840 XP + quest completion 4,555 XP = **13,395 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 392, minimum level 26.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,240 | 7x Meridian Cipher Plate; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Tidecaller Renn without alerting Chancellor Marek Thorne and the Null Paladins. |
| 2 | Patrol Read | 1,325 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Map guard paths, camera/scrying cones, and alarm relays across Null Cathedral. |
| 3 | Silent Entry | 1,415 | Faction scrip +3; 1x Overdrive Ampoule | Enter Meridian Switchyard through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 1,505 | 9x Meridian Cipher Plate; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 1,590 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escape through Outer Siege Lines, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 1,765 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Report to General Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q155 — The Senatorial Maze
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 26
- **Quest type:** Crafting
- **Primary location:** Civic Catacombs
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 27.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,025 XP + quest completion 5,080 XP = **14,105 story XP**.
- **Quest completion reward:** Black-Meridian Gloves Armor Piece — Armor Piece, Epic, item power 392, minimum level 26.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 1,265 | 7x Meridian Cipher Plate; scouting reputation +1 | Receive the schematic from Gravity-Knight Asha and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 1,355 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Recover parts or reagents from Civic Catacombs, Chancellor’s Bastion, and a hostile cache controlled by Chancellor Marek Thorne and the Null Paladins. |
| 3 | Prototype Build | 1,445 | Faction scrip +3; 1x Overdrive Ampoule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 1,535 | 9x Meridian Cipher Plate; repair parts bundle | Test the prototype in East Aqueduct Wall, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 1,625 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defend Spymaster Sera Nox and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 1,800 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q156 — Null Paladin Patrol Codes
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 27
- **Quest type:** Diplomacy
- **Primary location:** Meridian Switchyard
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 28.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,725 XP + quest completion 4,165 XP = **13,890 story XP**.
- **Quest completion reward:** Black-Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Epic, item power 404, minimum level 27.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 1,360 | 7x Meridian Cipher Plate; scouting reputation +1 | Earn entry to a council, war table, or faction court at Meridian Switchyard by solving their immediate access demand. |
| 2 | Proof Package | 1,460 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Collect verifiable proof from Outer Siege Lines, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 1,555 | Faction scrip +3; 1x Overdrive Ampoule | Hear the objections of Null Paladins and Black Meridian Senate, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 1,655 | 9x Meridian Cipher Plate; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Chancellor Marek Thorne and the Null Paladins tries to inflame the room. |
| 5 | Binding Action | 1,750 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 1,945 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Return to General Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q157 — Sera Nox’s Deep Cover
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 27
- **Quest type:** Exploration
- **Primary location:** Chancellor’s Bastion
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 28.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,655 XP + quest completion 4,540 XP = **14,195 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 404, minimum level 27.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 1,350 | 7x Meridian Cipher Plate; scouting reputation +1 | Open the route from Chancellor’s Bastion into East Aqueduct Wall and establish a temporary forward camp. |
| 2 | Traversal Trial | 1,450 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 1,545 | Faction scrip +3; 1x Overdrive Ampoule | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 1,640 | 9x Meridian Cipher Plate; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 1,740 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 1,930 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Signal Spymaster Sera Nox, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q158 — The Bastion Guns
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 27
- **Quest type:** Dungeon
- **Primary location:** Outer Siege Lines
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 28.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,845 XP + quest completion 7,130 XP = **16,975 story XP**.
- **Quest completion reward:** Black-Meridian Delver Cache: Gloves or Weapon-Mod Choice — Dungeon Gear Choice Cache, Epic, item power 411, minimum level 27.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 1,380 | 7x Meridian Cipher Plate; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Outer Siege Lines. |
| 2 | First Wing | 1,475 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 1,575 | Faction scrip +3; 1x Overdrive Ampoule | Solve the mid-dungeon puzzle or traversal gauntlet in The Senatorial Maze while enemies pressure the group. |
| 4 | Elite Guardian | 1,675 | 9x Meridian Cipher Plate; repair parts bundle | Defeat a themed guardian tied to Chancellor Marek Thorne and the Null Paladins, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 1,770 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Meridian Master Key. |
| 6 | Dungeon Exit | 1,970 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Escape collapse, corruption, or lockdown and brief Gravity-Knight Asha on what the dungeon revealed. |

### Q159 — Renn’s Floodgate Gambit
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 27
- **Quest type:** Boss
- **Primary location:** East Aqueduct Wall
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 28.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,505 XP + quest completion 7,780 XP = **17,285 story XP**.
- **Quest completion reward:** Black-Meridian Elite Spoils Cache: Gloves Pattern — Elite Gear Pattern, Epic, item power 414, minimum level 27.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 1,330 | 7x Meridian Cipher Plate; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Chancellor Marek Thorne and the Null Paladins. |
| 2 | Arena Preparation | 1,425 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Disable shields, open safe lanes, and position allied supports around East Aqueduct Wall. |
| 3 | Phase One | 1,520 | Faction scrip +3; 1x Overdrive Ampoule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 1,615 | 9x Meridian Cipher Plate; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 1,710 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 1,905 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Secure the Meridian Master Key, report to Tidecaller Renn, and unlock the next act-level route or political consequence. |

### Q160 — Varo’s Royal Claim
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 27
- **Quest type:** Moral
- **Primary location:** The Senatorial Maze
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden; normal combat cap: level 28.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,670 XP + quest completion 4,985 XP = **14,655 story XP**.
- **Quest completion reward:** Black-Meridian Class Weapon Calibration Kit — Weapon Upgrade Component, Epic, item power 404, minimum level 27.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 17x Meridian Cipher Plate.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 1,355 | 7x Meridian Cipher Plate; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to The Senatorial Maze. |
| 2 | Evidence Balance | 1,450 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Verify facts at Civic Catacombs so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 1,545 | Faction scrip +3; 1x Overdrive Ampoule | Ask Gravity-Knight Asha and Spymaster Sera Nox to model the likely cost of each available decision. |
| 4 | Pressure Event | 1,645 | 9x Meridian Cipher Plate; repair parts bundle | Survive an attack, riot, or betrayal by Chancellor Marek Thorne and the Null Paladins that tries to force a rushed answer. |
| 5 | Decision | 1,740 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 1,935 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q161 — Asha Holds the Skybridge
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 28
- **Quest type:** Assault
- **Primary location:** Null Cathedral
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 29.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,825 XP + quest completion 7,215 XP = **18,040 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 421, minimum level 28.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,515 | 7x Meridian Cipher Plate; scouting reputation +1 | Coordinate with General Lyra Voss, assign allied squads, and identify the primary breach point at Null Cathedral. |
| 2 | Forward Push | 1,625 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 1,730 | Faction scrip +3; 1x Overdrive Ampoule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Chancellor Marek Thorne and the Null Paladins. |
| 4 | Interior Fight | 1,840 | 9x Meridian Cipher Plate; repair parts bundle | Move through Meridian Switchyard, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 1,950 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 2,165 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Secure Outer Siege Lines, hand control to allies, and verify that the assault achieved the story purpose. |

### Q162 — Civic Catacomb Routes
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 28
- **Quest type:** Escort
- **Primary location:** Civic Catacombs
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 29.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,840 XP + quest completion 5,840 XP = **16,680 story XP**.
- **Quest completion reward:** Black-Meridian Field-Survival Cache — Consumable + Utility Cache, Epic, item power 416, minimum level 28.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 1,520 | 7x Meridian Cipher Plate; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Civic Catacombs to East Aqueduct Wall with Spymaster Sera Nox. |
| 2 | First Leg | 1,625 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 1,735 | Faction scrip +3; 1x Overdrive Ampoule | Collect fuel, medicine, ritual charges, or repair parts at Chancellor’s Bastion before the route collapses. |
| 4 | Ambush Response | 1,845 | 9x Meridian Cipher Plate; repair parts bundle | Defeat or bypass Chancellor Marek Thorne and the Null Paladins forces without losing the protected objective. |
| 5 | Final Crossing | 1,950 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 2,165 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q163 — The Senate Hostage Vote
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 28
- **Quest type:** Puzzle
- **Primary location:** Meridian Switchyard
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 29.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,670 XP + quest completion 5,495 XP = **16,165 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 416, minimum level 28.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 1,495 | 7x Meridian Cipher Plate; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing Meridian Switchyard. |
| 2 | First Solution | 1,600 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Solve the opening sequence using clues from Prince Varo, the environment, and one recovered record. |
| 3 | Constraint Shift | 1,705 | Faction scrip +3; 1x Overdrive Ampoule | Adapt when Chancellor Marek Thorne and the Null Paladins changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 1,815 | 9x Meridian Cipher Plate; repair parts bundle | Resolve three linked mechanisms across Outer Siege Lines, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 1,920 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 2,135 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Open the path, recover the Meridian Master Key, and document the rule that will matter in a later quest. |

### Q164 — Null Cathedral Black Mass
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 28
- **Quest type:** Heist
- **Primary location:** Chancellor’s Bastion
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 29.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,895 XP + quest completion 6,125 XP = **17,020 story XP**.
- **Quest completion reward:** Black-Meridian Technical Cache: Meridian Cipher Plate Bundle — Crafting / Upgrade Materials, Epic, item power 416, minimum level 28.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 1,525 | 7x Meridian Cipher Plate; scouting reputation +1 | Survey Chancellor’s Bastion, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 1,635 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Assign support tasks to Tidecaller Renn, General Lyra Voss, and any recruited faction specialists. |
| 3 | Access Tool | 1,745 | Faction scrip +3; 1x Overdrive Ampoule | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter East Aqueduct Wall. |
| 4 | The Lift | 1,850 | 9x Meridian Cipher Plate; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 1,960 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 2,180 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q165 — Master Key Components
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 28
- **Quest type:** Network
- **Primary location:** Outer Siege Lines
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 29.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,890 XP + quest completion 6,125 XP = **17,015 story XP**.
- **Quest completion reward:** Black-Meridian Helm Armor Piece — Armor Piece, Epic, item power 416, minimum level 28.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 1,525 | 7x Meridian Cipher Plate; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Outer Siege Lines. |
| 2 | Signal Capture | 1,635 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 1,740 | Faction scrip +3; 1x Overdrive Ampoule | Restore or harden three relay points across The Senatorial Maze while enemies attempt live sabotage. |
| 4 | Protocol Break | 1,850 | 9x Meridian Cipher Plate; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 1,960 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 2,180 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Verify with Gravity-Knight Asha that the repaired network persists and unlocks a stable path forward. |

### Q166 — Break the Bastion Guns
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 29
- **Quest type:** Investigation
- **Primary location:** East Aqueduct Wall
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 30.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,225 XP + quest completion 5,750 XP = **17,975 story XP**.
- **Quest completion reward:** Black-Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Epic, item power 428, minimum level 29.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,710 | 7x Meridian Cipher Plate; scouting reputation +1 | Meet General Lyra Voss at East Aqueduct Wall, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,835 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Inspect Null Cathedral for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 1,955 | Faction scrip +3; 1x Overdrive Ampoule | Interview survivors from Civilian Ward Councils and United Accord, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 2,080 | 9x Meridian Cipher Plate; repair parts bundle | Follow the recovered clue through Meridian Switchyard, avoiding false leads planted by Chancellor Marek Thorne and the Null Paladins. |
| 5 | Confrontation | 2,200 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 2,445 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Deliver a verified finding to Prince Varo, update the alliance risk map, and unlock the next operational lead. |

### Q167 — Turn the Ward Councils
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 29
- **Quest type:** Rescue
- **Primary location:** The Senatorial Maze
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 30.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,050 XP + quest completion 6,490 XP = **18,540 story XP**.
- **Quest completion reward:** Black-Meridian Field-Survival Cache — Consumable + Utility Cache, Epic, item power 428, minimum level 29.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,685 | 7x Meridian Cipher Plate; scouting reputation +1 | Triangulate the missing group’s last signal between The Senatorial Maze, Civic Catacombs, and Chancellor’s Bastion. |
| 2 | Safe Route | 1,810 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 1,930 | Faction scrip +3; 1x Overdrive Ampoule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 2,050 | 9x Meridian Cipher Plate; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 2,170 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while Chancellor Marek Thorne and the Null Paladins tries to cut them off. |
| 6 | Debrief | 2,405 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Return the survivors to Spymaster Sera Nox, extract their intelligence, and add their testimony to the main campaign board. |

### Q168 — The Chancellor’s Double
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 29
- **Quest type:** Defense
- **Primary location:** Null Cathedral
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 30.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,315 XP + quest completion 7,550 XP = **19,865 story XP**.
- **Quest completion reward:** Black-Meridian Field-Survival Cache — Consumable + Utility Cache, Epic, item power 428, minimum level 29.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,725 | 7x Meridian Cipher Plate; scouting reputation +1 | Survey Null Cathedral, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,845 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Repair barricades, deploy sensors or wards, and place fallback supplies for Null Paladins defenders. |
| 3 | First Wave | 1,970 | Faction scrip +3; 1x Overdrive Ampoule | Repel the opening attack from Chancellor Marek Thorne and the Null Paladins while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 2,095 | 9x Meridian Cipher Plate; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Meridian Switchyard before morale collapses. |
| 5 | Counterstrike | 2,215 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 2,465 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Stabilize Outer Siege Lines, count losses, recover evidence, and authorize the next campaign movement. |

### Q169 — Battle for East Aqueduct
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 29
- **Quest type:** Stealth
- **Primary location:** Civic Catacombs
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 30.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,865 XP + quest completion 6,110 XP = **17,975 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 428, minimum level 29.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,660 | 7x Meridian Cipher Plate; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Tidecaller Renn without alerting Chancellor Marek Thorne and the Null Paladins. |
| 2 | Patrol Read | 1,780 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Map guard paths, camera/scrying cones, and alarm relays across Civic Catacombs. |
| 3 | Silent Entry | 1,900 | Faction scrip +3; 1x Overdrive Ampoule | Enter Chancellor’s Bastion through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 2,015 | 9x Meridian Cipher Plate; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 2,135 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Escape through East Aqueduct Wall, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 2,375 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Report to General Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q170 — The Catacombs Ignite
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 29
- **Quest type:** Crafting
- **Primary location:** Meridian Switchyard
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 30.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,110 XP + quest completion 6,815 XP = **18,925 story XP**.
- **Quest completion reward:** Black-Meridian Class Weapon Calibration Kit — Weapon Upgrade Component, Epic, item power 428, minimum level 29.
- **Consumables/materials:** 2x Aether Reconstructor, 2x Overdrive Ampoule, 18x Meridian Cipher Plate.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 1,695 | 7x Meridian Cipher Plate; scouting reputation +1 | Receive the schematic from Gravity-Knight Asha and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 1,815 | 8x Meridian Cipher Plate; 1x Aether Reconstructor | Recover parts or reagents from Meridian Switchyard, Outer Siege Lines, and a hostile cache controlled by Chancellor Marek Thorne and the Null Paladins. |
| 3 | Prototype Build | 1,940 | Faction scrip +3; 1x Overdrive Ampoule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 2,060 | 9x Meridian Cipher Plate; repair parts bundle | Test the prototype in The Senatorial Maze, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 2,180 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defend Spymaster Sera Nox and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 2,420 | Quest-turn-in cache fragment; 10x Meridian Cipher Plate | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q171 — The Null Cathedral Falls
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 30
- **Quest type:** Diplomacy
- **Primary location:** Chancellor’s Bastion
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 31.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,065 XP + quest completion 5,170 XP = **17,235 story XP**.
- **Quest completion reward:** Black-Meridian Reputation Writ + Evidence Cache — Reputation / Utility, Epic, item power 440, minimum level 30.
- **Consumables/materials:** 3x Aether Reconstructor, 2x Overdrive Ampoule, 19x Meridian Cipher Plate.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 1,690 | 8x Meridian Cipher Plate; scouting reputation +1 | Earn entry to a council, war table, or faction court at Chancellor’s Bastion by solving their immediate access demand. |
| 2 | Proof Package | 1,810 | 9x Meridian Cipher Plate; 1x Aether Reconstructor | Collect verifiable proof from East Aqueduct Wall, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 1,930 | Faction scrip +4; 1x Overdrive Ampoule | Hear the objections of United Accord and Null Paladins, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 2,050 | 10x Meridian Cipher Plate; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while Chancellor Marek Thorne and the Null Paladins tries to inflame the room. |
| 5 | Binding Action | 2,170 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 2,415 | Quest-turn-in cache fragment; 11x Meridian Cipher Plate | Return to General Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q172 — Unlock the Meridian Switchyard
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 30
- **Quest type:** Dungeon
- **Primary location:** Outer Siege Lines
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 31.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,220 XP + quest completion 8,845 XP = **21,065 story XP**.
- **Quest completion reward:** Black-Meridian Delver Cache: Chestguard or Weapon-Mod Choice — Dungeon Gear Choice Cache, Epic, item power 447, minimum level 30.
- **Consumables/materials:** 3x Aether Reconstructor, 2x Overdrive Ampoule, 19x Meridian Cipher Plate.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 1,710 | 8x Meridian Cipher Plate; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Outer Siege Lines. |
| 2 | First Wing | 1,835 | 9x Meridian Cipher Plate; 1x Aether Reconstructor | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 1,955 | Faction scrip +4; 1x Overdrive Ampoule | Solve the mid-dungeon puzzle or traversal gauntlet in The Senatorial Maze while enemies pressure the group. |
| 4 | Elite Guardian | 2,075 | 10x Meridian Cipher Plate; repair parts bundle | Defeat a themed guardian tied to Chancellor Marek Thorne and the Null Paladins, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 2,200 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Meridian Master Key. |
| 6 | Dungeon Exit | 2,445 | Quest-turn-in cache fragment; 11x Meridian Cipher Plate | Escape collapse, corruption, or lockdown and brief Tidecaller Renn on what the dungeon revealed. |

### Q173 — Duel in the Senatorial Maze
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 30
- **Quest type:** Assault
- **Primary location:** East Aqueduct Wall
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 31.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,180 XP + quest completion 8,120 XP = **20,300 story XP**.
- **Quest completion reward:** Black-Meridian Wayfinder Supply Cache — General Reward Cache, Epic, item power 445, minimum level 30.
- **Consumables/materials:** 3x Aether Reconstructor, 2x Overdrive Ampoule, 19x Meridian Cipher Plate.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,705 | 8x Meridian Cipher Plate; scouting reputation +1 | Coordinate with Prince Varo, assign allied squads, and identify the primary breach point at East Aqueduct Wall. |
| 2 | Forward Push | 1,825 | 9x Meridian Cipher Plate; 1x Aether Reconstructor | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 1,950 | Faction scrip +4; 1x Overdrive Ampoule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to Chancellor Marek Thorne and the Null Paladins. |
| 4 | Interior Fight | 2,070 | 10x Meridian Cipher Plate; repair parts bundle | Move through Null Cathedral, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 2,190 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 2,440 | Quest-turn-in cache fragment; 11x Meridian Cipher Plate | Secure Meridian Switchyard, hand control to allies, and verify that the assault achieved the story purpose. |

### Q174 — Expose Chancellor Thorne
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 30
- **Quest type:** Boss
- **Primary location:** The Senatorial Maze
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 31.
- **Milestone boss:** The Data-Forged Evolvarch — separate encounter XP: 28,000.
- **XP package:** subquests total 11,800 XP + quest completion 9,650 XP = **21,450 story XP**.
- **Quest completion reward:** Evolvarch Recursive Core (The Data-Forged Evolvarch Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Epic, item power 462, minimum level 30.
- **Consumables/materials:** 3x Aether Reconstructor, 2x Overdrive Ampoule, 19x Meridian Cipher Plate.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 1,650 | 8x Meridian Cipher Plate; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under Chancellor Marek Thorne and the Null Paladins. |
| 2 | Arena Preparation | 1,770 | 9x Meridian Cipher Plate; 1x Aether Reconstructor | Disable shields, open safe lanes, and position allied supports around The Senatorial Maze. |
| 3 | Phase One | 1,890 | Faction scrip +4; 1x Overdrive Ampoule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 2,005 | 10x Meridian Cipher Plate; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 2,125 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 2,360 | Quest-turn-in cache fragment; 11x Meridian Cipher Plate | Secure the Meridian Master Key, report to Tidecaller Renn, and unlock the next act-level route or political consequence. |

### Q175 — The Black Meridian Liberated
- **Act:** 7 — Siege of the Black Meridian
- **Recommended level:** 30
- **Quest type:** Resolution
- **Primary location:** Null Cathedral
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker; normal combat cap: level 31.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,775 XP + quest completion 9,255 XP = **22,030 story XP**.
- **Quest completion reward:** Black-Meridian Act-Capstone Relic: Meridian Master Key Tooth — Act Artifact + Set Token, Epic, item power 463, minimum level 30.
- **Consumables/materials:** 3x Aether Reconstructor, 2x Overdrive Ampoule, 19x Meridian Cipher Plate.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 1,790 | 8x Meridian Cipher Plate; scouting reputation +1 | Meet Gravity-Knight Asha, Spymaster Sera Nox, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 1,915 | 9x Meridian Cipher Plate; 1x Aether Reconstructor | Resolve one survivor need, one political risk, and one technical or magical instability at Null Cathedral. |
| 3 | Public Moment | 2,045 | Faction scrip +4; 1x Overdrive Ampoule | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 2,170 | 10x Meridian Cipher Plate; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 2,300 | 1x Aether Reconstructor; 1x Overdrive Ampoule; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 2,555 | Quest-turn-in cache fragment; 11x Meridian Cipher Plate | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q176 — The Gate of Sleep Refuses Adults
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 31
- **Quest type:** Investigation
- **Primary location:** Gate of Sleep
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 32.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,935 XP + quest completion 5,615 XP = **17,550 story XP**.
- **Quest completion reward:** First-Dream Reputation Writ + Evidence Cache — Reputation / Utility, Epic+, item power 452, minimum level 31.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 19x Dreamglass Thread.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,670 | 8x Dreamglass Thread; scouting reputation +1 | Meet Oracle Nima at Gate of Sleep, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,790 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Inspect Library of Unlived Days for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 1,910 | Faction scrip +4; 1x Combo-Lock Capsule | Interview survivors from Dreamwardens and Architect-Shadow, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 2,030 | 10x Dreamglass Thread; repair parts bundle | Follow the recovered clue through Nightmare Engine Pit, avoiding false leads planted by The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 5 | Confrontation | 2,150 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 2,385 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Deliver a verified finding to Dreamsmith Oru, update the alliance risk map, and unlock the next operational lead. |

### Q177 — Nima’s Dream Lantern
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 31
- **Quest type:** Rescue
- **Primary location:** The Childhood District
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 32.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,770 XP + quest completion 6,335 XP = **18,105 story XP**.
- **Quest completion reward:** First-Dream Field-Survival Cache — Consumable + Utility Cache, Epic+, item power 452, minimum level 31.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 19x Dreamglass Thread.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,650 | 8x Dreamglass Thread; scouting reputation +1 | Triangulate the missing group’s last signal between The Childhood District, Founders’ Amphitheater, and River of Names. |
| 2 | Safe Route | 1,765 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 1,885 | Faction scrip +4; 1x Combo-Lock Capsule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 2,000 | 10x Dreamglass Thread; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 2,120 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Architect-Shadow and memory-corrupted echoes of fallen allies tries to cut them off. |
| 6 | Debrief | 2,350 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Return the survivors to Echo of Archivist Pell, extract their intelligence, and add their testimony to the main campaign board. |

### Q178 — The Childhood District
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 31
- **Quest type:** Defense
- **Primary location:** Library of Unlived Days
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 32.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,030 XP + quest completion 7,370 XP = **19,400 story XP**.
- **Quest completion reward:** First-Dream Field-Survival Cache — Consumable + Utility Cache, Epic+, item power 452, minimum level 31.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 19x Dreamglass Thread.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,685 | 8x Dreamglass Thread; scouting reputation +1 | Survey Library of Unlived Days, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,805 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Repair barricades, deploy sensors or wards, and place fallback supplies for Memory Revenants defenders. |
| 3 | First Wave | 1,925 | Faction scrip +4; 1x Combo-Lock Capsule | Repel the opening attack from The Architect-Shadow and memory-corrupted echoes of fallen allies while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 2,045 | 10x Dreamglass Thread; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Nightmare Engine Pit before morale collapses. |
| 5 | Counterstrike | 2,165 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 2,405 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Stabilize The First Dawn Room, count losses, recover evidence, and authorize the next campaign movement. |

### Q179 — Library of Unlived Days
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 31
- **Quest type:** Stealth
- **Primary location:** Founders’ Amphitheater
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 32.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,585 XP + quest completion 5,965 XP = **17,550 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 452, minimum level 31.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 19x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,620 | 8x Dreamglass Thread; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from The Nameless Founder without alerting The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 2 | Patrol Read | 1,740 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Map guard paths, camera/scrying cones, and alarm relays across Founders’ Amphitheater. |
| 3 | Silent Entry | 1,855 | Faction scrip +4; 1x Combo-Lock Capsule | Enter River of Names through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 1,970 | 10x Dreamglass Thread; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 2,085 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escape through Gate of Sleep, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 2,315 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Report to Oracle Nima, compare the intel to existing clues, and flag the next vulnerability. |

### Q180 — Echo of Archivist Pell
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 31
- **Quest type:** Crafting
- **Primary location:** Nightmare Engine Pit
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 32.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,825 XP + quest completion 6,650 XP = **18,475 story XP**.
- **Quest completion reward:** First-Dream Class Weapon Calibration Kit — Weapon Upgrade Component, Epic+, item power 452, minimum level 31.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 19x Dreamglass Thread.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 1,655 | 8x Dreamglass Thread; scouting reputation +1 | Receive the schematic from Sable Veyr’s Remnant and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 1,775 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Recover parts or reagents from Nightmare Engine Pit, The First Dawn Room, and a hostile cache controlled by The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 3 | Prototype Build | 1,890 | Faction scrip +4; 1x Combo-Lock Capsule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 2,010 | 10x Dreamglass Thread; repair parts bundle | Test the prototype in The Childhood District, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 2,130 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defend Echo of Archivist Pell and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 2,365 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q181 — A House Built from Regret
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 32
- **Quest type:** Diplomacy
- **Primary location:** River of Names
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 33.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,500 XP + quest completion 5,355 XP = **17,855 story XP**.
- **Quest completion reward:** First-Dream Reputation Writ + Evidence Cache — Reputation / Utility, Epic+, item power 464, minimum level 32.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 1,750 | 8x Dreamglass Thread; scouting reputation +1 | Earn entry to a council, war table, or faction court at River of Names by solving their immediate access demand. |
| 2 | Proof Package | 1,875 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Collect verifiable proof from Gate of Sleep, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 2,000 | Faction scrip +4; 1x Combo-Lock Capsule | Hear the objections of Architect-Shadow and Memory Revenants, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 2,125 | 10x Dreamglass Thread; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Architect-Shadow and memory-corrupted echoes of fallen allies tries to inflame the room. |
| 5 | Binding Action | 2,250 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 2,500 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Return to Oracle Nima, lock in the new ally or resource, and record the consequence for future quests. |

### Q182 — Dreamsmith Oru’s Commission
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 32
- **Quest type:** Exploration
- **Primary location:** The First Dawn Room
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 33.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,415 XP + quest completion 5,840 XP = **18,255 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 464, minimum level 32.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 1,740 | 8x Dreamglass Thread; scouting reputation +1 | Open the route from The First Dawn Room into The Childhood District and establish a temporary forward camp. |
| 2 | Traversal Trial | 1,860 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 1,985 | Faction scrip +4; 1x Combo-Lock Capsule | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 2,110 | 10x Dreamglass Thread; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 2,235 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 2,485 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Signal Echo of Archivist Pell, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q183 — The Founder Without a Name
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 32
- **Quest type:** Dungeon
- **Primary location:** Gate of Sleep
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 33.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,660 XP + quest completion 9,165 XP = **21,825 story XP**.
- **Quest completion reward:** First-Dream Delver Cache: Cloak or Weapon-Mod Choice — Dungeon Gear Choice Cache, Epic+, item power 471, minimum level 32.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 1,770 | 8x Dreamglass Thread; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Gate of Sleep. |
| 2 | First Wing | 1,900 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 2,025 | Faction scrip +4; 1x Combo-Lock Capsule | Solve the mid-dungeon puzzle or traversal gauntlet in Library of Unlived Days while enemies pressure the group. |
| 4 | Elite Guardian | 2,150 | 10x Dreamglass Thread; repair parts bundle | Defeat a themed guardian tied to The Architect-Shadow and memory-corrupted echoes of fallen allies, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 2,280 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the First Dream Schema. |
| 6 | Dungeon Exit | 2,535 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Escape collapse, corruption, or lockdown and brief Sable Veyr’s Remnant on what the dungeon revealed. |

### Q184 — Nightmare Engine Pit
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 32
- **Quest type:** Boss
- **Primary location:** The Childhood District
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 33.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,220 XP + quest completion 10,000 XP = **22,220 story XP**.
- **Quest completion reward:** First-Dream Elite Spoils Cache: Cloak Pattern — Elite Gear Pattern, Epic+, item power 474, minimum level 32.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 1,710 | 8x Dreamglass Thread; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 2 | Arena Preparation | 1,835 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Disable shields, open safe lanes, and position allied supports around The Childhood District. |
| 3 | Phase One | 1,955 | Faction scrip +4; 1x Combo-Lock Capsule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 2,075 | 10x Dreamglass Thread; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 2,200 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 2,445 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Secure the First Dream Schema, report to The Nameless Founder, and unlock the next act-level route or political consequence. |

### Q185 — The River of Names
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 32
- **Quest type:** Moral
- **Primary location:** Library of Unlived Days
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 33.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,440 XP + quest completion 6,405 XP = **18,845 story XP**.
- **Quest completion reward:** First-Dream Bracers Armor Piece — Armor Piece, Epic+, item power 464, minimum level 32.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 1,740 | 8x Dreamglass Thread; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to Library of Unlived Days. |
| 2 | Evidence Balance | 1,865 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Verify facts at Nightmare Engine Pit so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 1,990 | Faction scrip +4; 1x Combo-Lock Capsule | Ask Sable Veyr’s Remnant and Echo of Archivist Pell to model the likely cost of each available decision. |
| 4 | Pressure Event | 2,115 | 10x Dreamglass Thread; repair parts bundle | Survive an attack, riot, or betrayal by The Architect-Shadow and memory-corrupted echoes of fallen allies that tries to force a rushed answer. |
| 5 | Decision | 2,240 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 2,490 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q186 — Sable Veyr’s Remnant
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 33
- **Quest type:** Assault
- **Primary location:** Founders’ Amphitheater
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 34.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,675 XP + quest completion 9,115 XP = **22,790 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 481, minimum level 33.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,915 | 8x Dreamglass Thread; scouting reputation +1 | Coordinate with Oracle Nima, assign allied squads, and identify the primary breach point at Founders’ Amphitheater. |
| 2 | Forward Push | 2,050 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 2,190 | Faction scrip +4; 1x Combo-Lock Capsule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 4 | Interior Fight | 2,325 | 10x Dreamglass Thread; repair parts bundle | Move through River of Names, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 2,460 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 2,735 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Secure Gate of Sleep, hand control to allies, and verify that the assault achieved the story purpose. |

### Q187 — Three Memories, One Door
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 33
- **Quest type:** Escort
- **Primary location:** Nightmare Engine Pit
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 34.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,695 XP + quest completion 7,375 XP = **21,070 story XP**.
- **Quest completion reward:** First-Dream Field-Survival Cache — Consumable + Utility Cache, Epic+, item power 476, minimum level 33.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 1,915 | 8x Dreamglass Thread; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Nightmare Engine Pit to The Childhood District with Echo of Archivist Pell. |
| 2 | First Leg | 2,055 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 2,190 | Faction scrip +4; 1x Combo-Lock Capsule | Collect fuel, medicine, ritual charges, or repair parts at The First Dawn Room before the route collapses. |
| 4 | Ambush Response | 2,330 | 10x Dreamglass Thread; repair parts bundle | Defeat or bypass The Architect-Shadow and memory-corrupted echoes of fallen allies forces without losing the protected objective. |
| 5 | Final Crossing | 2,465 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 2,740 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q188 — The Architect-Shadow Watches
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 33
- **Quest type:** Puzzle
- **Primary location:** River of Names
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 34.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,480 XP + quest completion 6,945 XP = **20,425 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 476, minimum level 33.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 1,885 | 8x Dreamglass Thread; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing River of Names. |
| 2 | First Solution | 2,020 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Solve the opening sequence using clues from Dreamsmith Oru, the environment, and one recovered record. |
| 3 | Constraint Shift | 2,155 | Faction scrip +4; 1x Combo-Lock Capsule | Adapt when The Architect-Shadow and memory-corrupted echoes of fallen allies changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 2,290 | 10x Dreamglass Thread; repair parts bundle | Resolve three linked mechanisms across Gate of Sleep, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 2,425 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 2,705 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Open the path, recover the First Dream Schema, and document the rule that will matter in a later quest. |

### Q189 — A Trial of Unchosen Lives
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 33
- **Quest type:** Heist
- **Primary location:** The First Dawn Room
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 34.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,760 XP + quest completion 7,740 XP = **21,500 story XP**.
- **Quest completion reward:** First-Dream Technical Cache: Dreamglass Thread Bundle — Crafting / Upgrade Materials, Epic+, item power 476, minimum level 33.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 1,925 | 8x Dreamglass Thread; scouting reputation +1 | Survey The First Dawn Room, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 2,065 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Assign support tasks to The Nameless Founder, Oracle Nima, and any recruited faction specialists. |
| 3 | Access Tool | 2,200 | Faction scrip +4; 1x Combo-Lock Capsule | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter The Childhood District. |
| 4 | The Lift | 2,340 | 10x Dreamglass Thread; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 2,475 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 2,755 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q190 — The First Dream Schema Fragment
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 33
- **Quest type:** Network
- **Primary location:** Gate of Sleep
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut; normal combat cap: level 34.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,755 XP + quest completion 7,740 XP = **21,495 story XP**.
- **Quest completion reward:** First-Dream Class Weapon Calibration Kit — Weapon Upgrade Component, Epic+, item power 476, minimum level 33.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 20x Dreamglass Thread.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 1,925 | 8x Dreamglass Thread; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Gate of Sleep. |
| 2 | Signal Capture | 2,065 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 2,200 | Faction scrip +4; 1x Combo-Lock Capsule | Restore or harden three relay points across Library of Unlived Days while enemies attempt live sabotage. |
| 4 | Protocol Break | 2,340 | 10x Dreamglass Thread; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 2,475 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 2,750 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Verify with Sable Veyr’s Remnant that the repaired network persists and unlocks a stable path forward. |

### Q191 — Rescue the Dreamwardens
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 34
- **Quest type:** Investigation
- **Primary location:** The Childhood District
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 35.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 15,190 XP + quest completion 7,150 XP = **22,340 story XP**.
- **Quest completion reward:** First-Dream Reputation Writ + Evidence Cache — Reputation / Utility, Epic+, item power 488, minimum level 34.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 2,125 | 8x Dreamglass Thread; scouting reputation +1 | Meet Oracle Nima at The Childhood District, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 2,280 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Inspect Founders’ Amphitheater for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 2,430 | Faction scrip +4; 1x Combo-Lock Capsule | Interview survivors from Forgotten Founders and Dreamwardens, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 2,580 | 10x Dreamglass Thread; repair parts bundle | Follow the recovered clue through River of Names, avoiding false leads planted by The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 5 | Confrontation | 2,735 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 3,040 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Deliver a verified finding to Dreamsmith Oru, update the alliance risk map, and unlock the next operational lead. |

### Q192 — Seal the Nightmare Engine
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 34
- **Quest type:** Rescue
- **Primary location:** Library of Unlived Days
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 35.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 14,980 XP + quest completion 8,065 XP = **23,045 story XP**.
- **Quest completion reward:** First-Dream Field-Survival Cache — Consumable + Utility Cache, Epic+, item power 488, minimum level 34.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 2,095 | 8x Dreamglass Thread; scouting reputation +1 | Triangulate the missing group’s last signal between Library of Unlived Days, Nightmare Engine Pit, and The First Dawn Room. |
| 2 | Safe Route | 2,245 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 2,395 | Faction scrip +4; 1x Combo-Lock Capsule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 2,545 | 10x Dreamglass Thread; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 2,695 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Architect-Shadow and memory-corrupted echoes of fallen allies tries to cut them off. |
| 6 | Debrief | 3,005 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Return the survivors to Echo of Archivist Pell, extract their intelligence, and add their testimony to the main campaign board. |

### Q193 — The Founder’s Confession
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 34
- **Quest type:** Defense
- **Primary location:** Founders’ Amphitheater
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 35.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 15,310 XP + quest completion 9,380 XP = **24,690 story XP**.
- **Quest completion reward:** First-Dream Field-Survival Cache — Consumable + Utility Cache, Epic+, item power 488, minimum level 34.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 2,145 | 8x Dreamglass Thread; scouting reputation +1 | Survey Founders’ Amphitheater, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 2,295 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Repair barricades, deploy sensors or wards, and place fallback supplies for Architect-Shadow defenders. |
| 3 | First Wave | 2,450 | Faction scrip +4; 1x Combo-Lock Capsule | Repel the opening attack from The Architect-Shadow and memory-corrupted echoes of fallen allies while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 2,605 | 10x Dreamglass Thread; repair parts bundle | Respond to a breach, sabotage event, or elite flank at River of Names before morale collapses. |
| 5 | Counterstrike | 2,755 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 3,060 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Stabilize Gate of Sleep, count losses, recover evidence, and authorize the next campaign movement. |

### Q194 — The Starwells Were a Prison
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 34
- **Quest type:** Stealth
- **Primary location:** Nightmare Engine Pit
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 35.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 14,745 XP + quest completion 7,595 XP = **22,340 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 488, minimum level 34.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 2,065 | 8x Dreamglass Thread; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from The Nameless Founder without alerting The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 2 | Patrol Read | 2,210 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Map guard paths, camera/scrying cones, and alarm relays across Nightmare Engine Pit. |
| 3 | Silent Entry | 2,360 | Faction scrip +4; 1x Combo-Lock Capsule | Enter The First Dawn Room through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 2,505 | 10x Dreamglass Thread; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 2,655 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escape through The Childhood District, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 2,950 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Report to Oracle Nima, compare the intel to existing clues, and flag the next vulnerability. |

### Q195 — Nima Breaks the Script
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 34
- **Quest type:** Crafting
- **Primary location:** River of Names
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 35.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 15,045 XP + quest completion 8,460 XP = **23,505 story XP**.
- **Quest completion reward:** First-Dream Amulet Armor Piece — Armor Piece, Epic+, item power 488, minimum level 34.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 2,105 | 8x Dreamglass Thread; scouting reputation +1 | Receive the schematic from Sable Veyr’s Remnant and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 2,255 | 9x Dreamglass Thread; 1x Eclipse Recovery Flask | Recover parts or reagents from River of Names, Gate of Sleep, and a hostile cache controlled by The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 3 | Prototype Build | 2,405 | Faction scrip +4; 1x Combo-Lock Capsule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 2,560 | 10x Dreamglass Thread; repair parts bundle | Test the prototype in Library of Unlived Days, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 2,710 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defend Echo of Archivist Pell and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 3,010 | Quest-turn-in cache fragment; 11x Dreamglass Thread | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q196 — Architect-Shadow Revealed
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 35
- **Quest type:** Diplomacy
- **Primary location:** The First Dawn Room
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 36.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 14,765 XP + quest completion 6,330 XP = **21,095 story XP**.
- **Quest completion reward:** First-Dream Reputation Writ + Evidence Cache — Reputation / Utility, Epic+, item power 500, minimum level 35.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 2,065 | 9x Dreamglass Thread; scouting reputation +1 | Earn entry to a council, war table, or faction court at The First Dawn Room by solving their immediate access demand. |
| 2 | Proof Package | 2,215 | 10x Dreamglass Thread; 1x Eclipse Recovery Flask | Collect verifiable proof from The Childhood District, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 2,360 | Faction scrip +4; 1x Combo-Lock Capsule | Hear the objections of Dreamwardens and Architect-Shadow, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 2,510 | 11x Dreamglass Thread; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Architect-Shadow and memory-corrupted echoes of fallen allies tries to inflame the room. |
| 5 | Binding Action | 2,660 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 2,955 | Quest-turn-in cache fragment; 12x Dreamglass Thread | Return to Oracle Nima, lock in the new ally or resource, and record the consequence for future quests. |

### Q197 — Cross the River of Names
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 35
- **Quest type:** Dungeon
- **Primary location:** Gate of Sleep
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 36.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 14,950 XP + quest completion 10,830 XP = **25,780 story XP**.
- **Quest completion reward:** First-Dream Delver Cache: Amulet or Weapon-Mod Choice — Dungeon Gear Choice Cache, Epic+, item power 507, minimum level 35.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 2,095 | 9x Dreamglass Thread; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Gate of Sleep. |
| 2 | First Wing | 2,240 | 10x Dreamglass Thread; 1x Eclipse Recovery Flask | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 2,390 | Faction scrip +4; 1x Combo-Lock Capsule | Solve the mid-dungeon puzzle or traversal gauntlet in Library of Unlived Days while enemies pressure the group. |
| 4 | Elite Guardian | 2,540 | 11x Dreamglass Thread; repair parts bundle | Defeat a themed guardian tied to The Architect-Shadow and memory-corrupted echoes of fallen allies, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 2,690 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the First Dream Schema. |
| 6 | Dungeon Exit | 2,995 | Quest-turn-in cache fragment; 12x Dreamglass Thread | Escape collapse, corruption, or lockdown and brief The Nameless Founder on what the dungeon revealed. |

### Q198 — The First Dawn Room
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 35
- **Quest type:** Assault
- **Primary location:** The Childhood District
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 36.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 14,905 XP + quest completion 9,940 XP = **24,845 story XP**.
- **Quest completion reward:** First-Dream Wayfinder Supply Cache — General Reward Cache, Epic+, item power 505, minimum level 35.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 2,085 | 9x Dreamglass Thread; scouting reputation +1 | Coordinate with Dreamsmith Oru, assign allied squads, and identify the primary breach point at The Childhood District. |
| 2 | Forward Push | 2,235 | 10x Dreamglass Thread; 1x Eclipse Recovery Flask | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 2,385 | Faction scrip +4; 1x Combo-Lock Capsule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 4 | Interior Fight | 2,535 | 11x Dreamglass Thread; repair parts bundle | Move through Founders’ Amphitheater, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 2,685 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 2,980 | Quest-turn-in cache fragment; 12x Dreamglass Thread | Secure River of Names, hand control to allies, and verify that the assault achieved the story purpose. |

### Q199 — Rewrite Without Erasing
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 35
- **Quest type:** Boss
- **Primary location:** Library of Unlived Days
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 36.
- **Milestone boss:** The Syndicate Lich — separate encounter XP: 40,000.
- **XP package:** subquests total 14,440 XP + quest completion 11,810 XP = **26,250 story XP**.
- **Quest completion reward:** Lich-Court Command Scepter (The Syndicate Lich Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Epic+, item power 522, minimum level 35.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 2,020 | 9x Dreamglass Thread; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Architect-Shadow and memory-corrupted echoes of fallen allies. |
| 2 | Arena Preparation | 2,165 | 10x Dreamglass Thread; 1x Eclipse Recovery Flask | Disable shields, open safe lanes, and position allied supports around Library of Unlived Days. |
| 3 | Phase One | 2,310 | Faction scrip +4; 1x Combo-Lock Capsule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 2,455 | 11x Dreamglass Thread; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 2,600 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 2,890 | Quest-turn-in cache fragment; 12x Dreamglass Thread | Secure the First Dream Schema, report to The Nameless Founder, and unlock the next act-level route or political consequence. |

### Q200 — Carry the First Dream Home
- **Act:** 8 — Shards of the First Dream
- **Recommended level:** 35
- **Quest type:** Resolution
- **Primary location:** Founders’ Amphitheater
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 36.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 15,630 XP + quest completion 11,320 XP = **26,950 story XP**.
- **Quest completion reward:** First-Dream Act-Capstone Relic: First Dream Schema Strip — Act Artifact + Set Token, Epic+, item power 523, minimum level 35.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 21x Dreamglass Thread.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 2,190 | 9x Dreamglass Thread; scouting reputation +1 | Meet Sable Veyr’s Remnant, Echo of Archivist Pell, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 2,345 | 10x Dreamglass Thread; 1x Eclipse Recovery Flask | Resolve one survivor need, one political risk, and one technical or magical instability at Founders’ Amphitheater. |
| 3 | Public Moment | 2,500 | Faction scrip +4; 1x Combo-Lock Capsule | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 2,655 | 11x Dreamglass Thread; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 2,815 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 3,125 | Quest-turn-in cache fragment; 12x Dreamglass Thread | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q201 — The Eclipse Begins Everywhere
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Investigation
- **Primary location:** Meridian Front
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,995 XP + quest completion 4,705 XP = **14,700 story XP**.
- **Quest completion reward:** Sevenfold Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,400 | 9x Eclipse Sigil Dust; scouting reputation +1 | Meet General Lyra Voss at Meridian Front, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,500 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Inspect Cindervale Front for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 1,600 | Faction scrip +4; 1x Combo-Lock Capsule | Interview survivors from United Accord and Prime Wards, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 1,700 | 11x Eclipse Sigil Dust; repair parts bundle | Follow the recovered clue through Pelagos Front, avoiding false leads planted by The Eclipse Engine and its seven Prime Wards. |
| 5 | Confrontation | 1,800 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 1,995 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Deliver a verified finding to Foreman Oda Marr, update the alliance risk map, and unlock the next operational lead. |

### Q202 — Seven War Tables
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Rescue
- **Primary location:** Elderbloom Front
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,855 XP + quest completion 5,310 XP = **15,165 story XP**.
- **Quest completion reward:** Sevenfold Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,380 | 9x Eclipse Sigil Dust; scouting reputation +1 | Triangulate the missing group’s last signal between Elderbloom Front, Glass Desert Front, and Lunarch Front. |
| 2 | Safe Route | 1,480 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 1,575 | Faction scrip +4; 1x Combo-Lock Capsule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 1,675 | 11x Eclipse Sigil Dust; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 1,775 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Eclipse Engine and its seven Prime Wards tries to cut them off. |
| 6 | Debrief | 1,970 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Return the survivors to Matriarch Ilyra Thorne, extract their intelligence, and add their testimony to the main campaign board. |

### Q203 — Meridian Front: Black Rain
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Defense
- **Primary location:** Cindervale Front
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 10,070 XP + quest completion 6,175 XP = **16,245 story XP**.
- **Quest completion reward:** Sevenfold Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,410 | 9x Eclipse Sigil Dust; scouting reputation +1 | Survey Cindervale Front, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,510 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Repair barricades, deploy sensors or wards, and place fallback supplies for Civilian Militias defenders. |
| 3 | First Wave | 1,610 | Faction scrip +4; 1x Combo-Lock Capsule | Repel the opening attack from The Eclipse Engine and its seven Prime Wards while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 1,710 | 11x Eclipse Sigil Dust; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Pelagos Front before morale collapses. |
| 5 | Counterstrike | 1,815 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 2,015 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Stabilize Dream Front, count losses, recover evidence, and authorize the next campaign movement. |

### Q204 — Elderbloom Front: Rootfire
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Stealth
- **Primary location:** Glass Desert Front
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,700 XP + quest completion 5,000 XP = **14,700 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,360 | 9x Eclipse Sigil Dust; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Navigator Sahel without alerting The Eclipse Engine and its seven Prime Wards. |
| 2 | Patrol Read | 1,455 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Map guard paths, camera/scrying cones, and alarm relays across Glass Desert Front. |
| 3 | Silent Entry | 1,550 | Faction scrip +4; 1x Combo-Lock Capsule | Enter Lunarch Front through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 1,650 | 11x Eclipse Sigil Dust; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 1,745 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escape through Meridian Front, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 1,940 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Report to General Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q205 — Cindervale Front: Chainstorm
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Crafting
- **Primary location:** Pelagos Front
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,905 XP + quest completion 5,570 XP = **15,475 story XP**.
- **Quest completion reward:** Sevenfold Gloves Armor Piece — Armor Piece, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 1,385 | 9x Eclipse Sigil Dust; scouting reputation +1 | Receive the schematic from Leviathan Caldera and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 1,485 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Recover parts or reagents from Pelagos Front, Dream Front, and a hostile cache controlled by The Eclipse Engine and its seven Prime Wards. |
| 3 | Prototype Build | 1,585 | Faction scrip +4; 1x Combo-Lock Capsule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 1,685 | 11x Eclipse Sigil Dust; repair parts bundle | Test the prototype in Elderbloom Front, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 1,785 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defend Matriarch Ilyra Thorne and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 1,980 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q206 — Glass Desert Front: Mirrorfall
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Diplomacy
- **Primary location:** Lunarch Front
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,745 XP + quest completion 4,180 XP = **13,925 story XP**.
- **Quest completion reward:** Sevenfold Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 1,365 | 9x Eclipse Sigil Dust; scouting reputation +1 | Earn entry to a council, war table, or faction court at Lunarch Front by solving their immediate access demand. |
| 2 | Proof Package | 1,460 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Collect verifiable proof from Meridian Front, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 1,560 | Faction scrip +4; 1x Combo-Lock Capsule | Hear the objections of Prime Wards and Civilian Militias, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 1,655 | 11x Eclipse Sigil Dust; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Eclipse Engine and its seven Prime Wards tries to inflame the room. |
| 5 | Binding Action | 1,755 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 1,950 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Return to General Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q207 — Pelagos Front: Drowned Sky
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 36
- **Quest type:** Exploration
- **Primary location:** Dream Front
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 37.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 9,675 XP + quest completion 4,555 XP = **14,230 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 512, minimum level 36.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 1,355 | 9x Eclipse Sigil Dust; scouting reputation +1 | Open the route from Dream Front into Elderbloom Front and establish a temporary forward camp. |
| 2 | Traversal Trial | 1,450 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 1,550 | Faction scrip +4; 1x Combo-Lock Capsule | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 1,645 | 11x Eclipse Sigil Dust; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 1,740 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 1,935 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Signal Matriarch Ilyra Thorne, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q208 — Lunarch Front: Broken Orbit
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Dungeon
- **Primary location:** Meridian Front
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,600 XP + quest completion 8,400 XP = **20,000 story XP**.
- **Quest completion reward:** Sevenfold Delver Cache: Gloves or Weapon-Mod Choice — Dungeon Gear Choice Cache, Legendary, item power 531, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 1,625 | 9x Eclipse Sigil Dust; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Meridian Front. |
| 2 | First Wing | 1,740 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 1,855 | Faction scrip +4; 1x Combo-Lock Capsule | Solve the mid-dungeon puzzle or traversal gauntlet in Cindervale Front while enemies pressure the group. |
| 4 | Elite Guardian | 1,970 | 11x Eclipse Sigil Dust; repair parts bundle | Defeat a themed guardian tied to The Eclipse Engine and its seven Prime Wards, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 2,090 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Sevenfold Counter-Sigil. |
| 6 | Dungeon Exit | 2,320 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Escape collapse, corruption, or lockdown and brief Leviathan Caldera on what the dungeon revealed. |

### Q209 — Dream Front: Waking Nightmare
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Boss
- **Primary location:** Elderbloom Front
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,200 XP + quest completion 9,165 XP = **20,365 story XP**.
- **Quest completion reward:** Sevenfold Elite Spoils Cache: Gloves Pattern — Elite Gear Pattern, Legendary, item power 534, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 1,570 | 9x Eclipse Sigil Dust; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Eclipse Engine and its seven Prime Wards. |
| 2 | Arena Preparation | 1,680 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Disable shields, open safe lanes, and position allied supports around Elderbloom Front. |
| 3 | Phase One | 1,790 | Faction scrip +4; 1x Combo-Lock Capsule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 1,905 | 11x Eclipse Sigil Dust; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 2,015 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 2,240 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Secure the Sevenfold Counter-Sigil, report to Navigator Sahel, and unlock the next act-level route or political consequence. |

### Q210 — The First Prime Ward
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Moral
- **Primary location:** Cindervale Front
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,400 XP + quest completion 5,875 XP = **17,275 story XP**.
- **Quest completion reward:** Sevenfold Class Weapon Calibration Kit — Weapon Upgrade Component, Legendary, item power 524, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 1,595 | 9x Eclipse Sigil Dust; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to Cindervale Front. |
| 2 | Evidence Balance | 1,710 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Verify facts at Pelagos Front so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 1,825 | Faction scrip +4; 1x Combo-Lock Capsule | Ask Leviathan Caldera and Matriarch Ilyra Thorne to model the likely cost of each available decision. |
| 4 | Pressure Event | 1,940 | 11x Eclipse Sigil Dust; repair parts bundle | Survive an attack, riot, or betrayal by The Eclipse Engine and its seven Prime Wards that tries to force a rushed answer. |
| 5 | Decision | 2,050 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 2,280 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q211 — Counter-Sigil Assembly
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Assault
- **Primary location:** Glass Desert Front
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,565 XP + quest completion 7,710 XP = **19,275 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 529, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 1,620 | 9x Eclipse Sigil Dust; scouting reputation +1 | Coordinate with General Lyra Voss, assign allied squads, and identify the primary breach point at Glass Desert Front. |
| 2 | Forward Push | 1,735 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 1,850 | Faction scrip +4; 1x Combo-Lock Capsule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Eclipse Engine and its seven Prime Wards. |
| 4 | Interior Fight | 1,965 | 11x Eclipse Sigil Dust; repair parts bundle | Move through Lunarch Front, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 2,080 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 2,315 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Secure Meridian Front, hand control to allies, and verify that the assault achieved the story purpose. |

### Q212 — Evacuate the Unmapped
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Escort
- **Primary location:** Pelagos Front
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,585 XP + quest completion 6,235 XP = **17,820 story XP**.
- **Quest completion reward:** Sevenfold Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 524, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 1,620 | 9x Eclipse Sigil Dust; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Pelagos Front to Elderbloom Front with Matriarch Ilyra Thorne. |
| 2 | First Leg | 1,740 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 1,855 | Faction scrip +4; 1x Combo-Lock Capsule | Collect fuel, medicine, ritual charges, or repair parts at Dream Front before the route collapses. |
| 4 | Ambush Response | 1,970 | 11x Eclipse Sigil Dust; repair parts bundle | Defeat or bypass The Eclipse Engine and its seven Prime Wards forces without losing the protected objective. |
| 5 | Final Crossing | 2,085 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 2,315 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q213 — The Choirs Lose Synchrony
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 37
- **Quest type:** Puzzle
- **Primary location:** Lunarch Front
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 38.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 11,395 XP + quest completion 5,870 XP = **17,265 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 524, minimum level 37.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 22x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 1,595 | 9x Eclipse Sigil Dust; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing Lunarch Front. |
| 2 | First Solution | 1,710 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Solve the opening sequence using clues from Foreman Oda Marr, the environment, and one recovered record. |
| 3 | Constraint Shift | 1,825 | Faction scrip +4; 1x Combo-Lock Capsule | Adapt when The Eclipse Engine and its seven Prime Wards changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 1,935 | 11x Eclipse Sigil Dust; repair parts bundle | Resolve three linked mechanisms across Meridian Front, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 2,050 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 2,280 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Open the path, recover the Sevenfold Counter-Sigil, and document the rule that will matter in a later quest. |

### Q214 — Caldera’s Last Signal
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Heist
- **Primary location:** Dream Front
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,935 XP + quest completion 7,275 XP = **20,210 story XP**.
- **Quest completion reward:** Sevenfold Technical Cache: Eclipse Sigil Dust Bundle — Crafting / Upgrade Materials, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 1,810 | 9x Eclipse Sigil Dust; scouting reputation +1 | Survey Dream Front, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 1,940 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Assign support tasks to Navigator Sahel, General Lyra Voss, and any recruited faction specialists. |
| 3 | Access Tool | 2,070 | Faction scrip +4; 1x Combo-Lock Capsule | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter Elderbloom Front. |
| 4 | The Lift | 2,200 | 11x Eclipse Sigil Dust; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 2,330 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 2,585 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q215 — Oda Marr’s Line in Ash
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Network
- **Primary location:** Meridian Front
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,935 XP + quest completion 7,275 XP = **20,210 story XP**.
- **Quest completion reward:** Sevenfold Helm Armor Piece — Armor Piece, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 1,810 | 9x Eclipse Sigil Dust; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Meridian Front. |
| 2 | Signal Capture | 1,940 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 2,070 | Faction scrip +4; 1x Combo-Lock Capsule | Restore or harden three relay points across Cindervale Front while enemies attempt live sabotage. |
| 4 | Protocol Break | 2,200 | 11x Eclipse Sigil Dust; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 2,330 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 2,585 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Verify with Leviathan Caldera that the repaired network persists and unlocks a stable path forward. |

### Q216 — Sahel Navigates the Impossible
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Investigation
- **Primary location:** Elderbloom Front
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,055 XP + quest completion 6,145 XP = **19,200 story XP**.
- **Quest completion reward:** Sevenfold Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 1,830 | 9x Eclipse Sigil Dust; scouting reputation +1 | Meet General Lyra Voss at Elderbloom Front, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 1,960 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Inspect Glass Desert Front for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 2,090 | Faction scrip +4; 1x Combo-Lock Capsule | Interview survivors from Starwell Choirs and United Accord, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 2,220 | 11x Eclipse Sigil Dust; repair parts bundle | Follow the recovered clue through Lunarch Front, avoiding false leads planted by The Eclipse Engine and its seven Prime Wards. |
| 5 | Confrontation | 2,350 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 2,605 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Deliver a verified finding to Foreman Oda Marr, update the alliance risk map, and unlock the next operational lead. |

### Q217 — Ilyra Holds the Rootcourt
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Rescue
- **Primary location:** Cindervale Front
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,875 XP + quest completion 6,930 XP = **19,805 story XP**.
- **Quest completion reward:** Sevenfold Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 1,805 | 9x Eclipse Sigil Dust; scouting reputation +1 | Triangulate the missing group’s last signal between Cindervale Front, Pelagos Front, and Dream Front. |
| 2 | Safe Route | 1,930 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 2,060 | Faction scrip +4; 1x Combo-Lock Capsule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 2,190 | 11x Eclipse Sigil Dust; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 2,320 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Eclipse Engine and its seven Prime Wards tries to cut them off. |
| 6 | Debrief | 2,570 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Return the survivors to Matriarch Ilyra Thorne, extract their intelligence, and add their testimony to the main campaign board. |

### Q218 — Lyra’s Final Order
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Defense
- **Primary location:** Glass Desert Front
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 13,155 XP + quest completion 8,065 XP = **21,220 story XP**.
- **Quest completion reward:** Sevenfold Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 1,840 | 9x Eclipse Sigil Dust; scouting reputation +1 | Survey Glass Desert Front, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 1,975 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Repair barricades, deploy sensors or wards, and place fallback supplies for Prime Wards defenders. |
| 3 | First Wave | 2,105 | Faction scrip +4; 1x Combo-Lock Capsule | Repel the opening attack from The Eclipse Engine and its seven Prime Wards while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 2,235 | 11x Eclipse Sigil Dust; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Lunarch Front before morale collapses. |
| 5 | Counterstrike | 2,370 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 2,630 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Stabilize Meridian Front, count losses, recover evidence, and authorize the next campaign movement. |

### Q219 — Nima Opens the Dream Front
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 38
- **Quest type:** Stealth
- **Primary location:** Pelagos Front
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 39.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 12,670 XP + quest completion 6,525 XP = **19,195 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 536, minimum level 38.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 1,775 | 9x Eclipse Sigil Dust; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Navigator Sahel without alerting The Eclipse Engine and its seven Prime Wards. |
| 2 | Patrol Read | 1,900 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Map guard paths, camera/scrying cones, and alarm relays across Pelagos Front. |
| 3 | Silent Entry | 2,025 | Faction scrip +4; 1x Combo-Lock Capsule | Enter Dream Front through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 2,155 | 11x Eclipse Sigil Dust; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 2,280 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escape through Elderbloom Front, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 2,535 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Report to General Lyra Voss, compare the intel to existing clues, and flag the next vulnerability. |

### Q220 — Prime Wards Converge
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Crafting
- **Primary location:** Lunarch Front
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,475 XP + quest completion 2,520 XP = **6,995 story XP**.
- **Quest completion reward:** Sevenfold Class Weapon Calibration Kit — Weapon Upgrade Component, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 625 | 9x Eclipse Sigil Dust; scouting reputation +1 | Receive the schematic from Leviathan Caldera and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 670 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Recover parts or reagents from Lunarch Front, Meridian Front, and a hostile cache controlled by The Eclipse Engine and its seven Prime Wards. |
| 3 | Prototype Build | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 760 | 11x Eclipse Sigil Dust; repair parts bundle | Test the prototype in Cindervale Front, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 805 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defend Matriarch Ilyra Thorne and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 900 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q221 — The Sevenfold Counter-Sigil
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Diplomacy
- **Primary location:** Dream Front
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,405 XP + quest completion 1,890 XP = **6,295 story XP**.
- **Quest completion reward:** Sevenfold Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 615 | 9x Eclipse Sigil Dust; scouting reputation +1 | Earn entry to a council, war table, or faction court at Dream Front by solving their immediate access demand. |
| 2 | Proof Package | 660 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Collect verifiable proof from Elderbloom Front, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 705 | Faction scrip +4; 1x Combo-Lock Capsule | Hear the objections of United Accord and Prime Wards, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 750 | 11x Eclipse Sigil Dust; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Eclipse Engine and its seven Prime Wards tries to inflame the room. |
| 5 | Binding Action | 795 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 880 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Return to General Lyra Voss, lock in the new ally or resource, and record the consequence for future quests. |

### Q222 — Breach the Dimensional Heart
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Dungeon
- **Primary location:** Meridian Front
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,465 XP + quest completion 3,230 XP = **7,695 story XP**.
- **Quest completion reward:** Sevenfold Delver Cache: Chestguard or Weapon-Mod Choice — Dungeon Gear Choice Cache, Legendary, item power 555, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 625 | 9x Eclipse Sigil Dust; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Meridian Front. |
| 2 | First Wing | 670 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Solve the mid-dungeon puzzle or traversal gauntlet in Cindervale Front while enemies pressure the group. |
| 4 | Elite Guardian | 760 | 11x Eclipse Sigil Dust; repair parts bundle | Defeat a themed guardian tied to The Eclipse Engine and its seven Prime Wards, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 805 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Sevenfold Counter-Sigil. |
| 6 | Dungeon Exit | 890 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Escape collapse, corruption, or lockdown and brief Navigator Sahel on what the dungeon revealed. |

### Q223 — The Eclipse Engine Speaks
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Assault
- **Primary location:** Elderbloom Front
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,450 XP + quest completion 2,965 XP = **7,415 story XP**.
- **Quest completion reward:** Sevenfold Wayfinder Supply Cache — General Reward Cache, Legendary, item power 553, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 625 | 9x Eclipse Sigil Dust; scouting reputation +1 | Coordinate with Foreman Oda Marr, assign allied squads, and identify the primary breach point at Elderbloom Front. |
| 2 | Forward Push | 670 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 710 | Faction scrip +4; 1x Combo-Lock Capsule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Eclipse Engine and its seven Prime Wards. |
| 4 | Interior Fight | 755 | 11x Eclipse Sigil Dust; repair parts bundle | Move through Glass Desert Front, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 800 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 890 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Secure Lunarch Front, hand control to allies, and verify that the assault achieved the story purpose. |

### Q224 — All Fronts at Zero Hour
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Boss
- **Primary location:** Cindervale Front
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,310 XP + quest completion 3,525 XP = **7,835 story XP**.
- **Quest completion reward:** Sevenfold Elite Spoils Cache: Chestguard Pattern — Elite Gear Pattern, Legendary, item power 558, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 605 | 9x Eclipse Sigil Dust; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Eclipse Engine and its seven Prime Wards. |
| 2 | Arena Preparation | 645 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Disable shields, open safe lanes, and position allied supports around Cindervale Front. |
| 3 | Phase One | 690 | Faction scrip +4; 1x Combo-Lock Capsule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 735 | 11x Eclipse Sigil Dust; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 775 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 860 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Secure the Sevenfold Counter-Sigil, report to Navigator Sahel, and unlock the next act-level route or political consequence. |

### Q225 — Into the Engine Heart
- **Act:** 9 — The Sevenfold Eclipse
- **Recommended level:** 39
- **Quest type:** Resolution
- **Primary location:** Glass Desert Front
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,665 XP + quest completion 3,380 XP = **8,045 story XP**.
- **Quest completion reward:** Sevenfold Act-Capstone Relic: Sevenfold Counter-Sigil Segment — Act Artifact + Set Token, Legendary, item power 571, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Eclipse Sigil Dust.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 655 | 9x Eclipse Sigil Dust; scouting reputation +1 | Meet Leviathan Caldera, Matriarch Ilyra Thorne, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 700 | 10x Eclipse Sigil Dust; 1x Eclipse Recovery Flask | Resolve one survivor need, one political risk, and one technical or magical instability at Glass Desert Front. |
| 3 | Public Moment | 745 | Faction scrip +4; 1x Combo-Lock Capsule | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 795 | 11x Eclipse Sigil Dust; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 840 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 930 | Quest-turn-in cache fragment; 12x Eclipse Sigil Dust | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |

### Q226 — Threshold of the Engine Heart
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Investigation
- **Primary location:** Engine Heart Threshold
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,520 XP + quest completion 2,125 XP = **6,645 story XP**.
- **Quest completion reward:** Dawnforge Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 635 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Meet Oracle Nima at Engine Heart Threshold, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 680 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Inspect The Founder’s Cradle for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 725 | Faction scrip +4; 1x Combo-Lock Capsule | Interview survivors from United Accord and Dawnforge Custodians, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 770 | 11x Dawnforge Seed-Splinter; repair parts bundle | Follow the recovered clue through Hall of Possible Veyrs, avoiding false leads planted by The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 5 | Confrontation | 815 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 895 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Deliver a verified finding to Sera Nox, update the alliance risk map, and unlock the next operational lead. |

### Q227 — The Recursive Battlefield
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Rescue
- **Primary location:** The Recursive Battlefield
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,455 XP + quest completion 2,400 XP = **6,855 story XP**.
- **Quest completion reward:** Dawnforge Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 625 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Triangulate the missing group’s last signal between The Recursive Battlefield, Dawnforge Core, and The Last Starwell. |
| 2 | Safe Route | 670 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 755 | 11x Dawnforge Seed-Splinter; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 800 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Eclipse Engine, the Nameless Founder, and the temptation to control history forever tries to cut them off. |
| 6 | Debrief | 890 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Return the survivors to General Lyra Voss, extract their intelligence, and add their testimony to the main campaign board. |

### Q228 — A Room Full of Lost Bosses
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Defense
- **Primary location:** The Founder’s Cradle
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,555 XP + quest completion 2,790 XP = **7,345 story XP**.
- **Quest completion reward:** Dawnforge Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 640 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Survey The Founder’s Cradle, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 685 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Repair barricades, deploy sensors or wards, and place fallback supplies for Engineborn Remnants defenders. |
| 3 | First Wave | 730 | Faction scrip +4; 1x Combo-Lock Capsule | Repel the opening attack from The Eclipse Engine, the Nameless Founder, and the temptation to control history forever while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 775 | 11x Dawnforge Seed-Splinter; repair parts bundle | Respond to a breach, sabotage event, or elite flank at Hall of Possible Veyrs before morale collapses. |
| 5 | Counterstrike | 820 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 905 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Stabilize New Meridian Assembly, count losses, recover evidence, and authorize the next campaign movement. |

### Q229 — The Founder’s Cradle
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Stealth
- **Primary location:** Dawnforge Core
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,385 XP + quest completion 2,260 XP = **6,645 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 615 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Dreamsmith Oru without alerting The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 2 | Patrol Read | 660 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Map guard paths, camera/scrying cones, and alarm relays across Dawnforge Core. |
| 3 | Silent Entry | 700 | Faction scrip +4; 1x Combo-Lock Capsule | Enter The Last Starwell through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 745 | 11x Dawnforge Seed-Splinter; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 790 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Escape through Engine Heart Threshold, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 875 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Report to Oracle Nima, compare the intel to existing clues, and flag the next vulnerability. |

### Q230 — The Engine’s Childhood
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Crafting
- **Primary location:** Hall of Possible Veyrs
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,475 XP + quest completion 2,520 XP = **6,995 story XP**.
- **Quest completion reward:** Dawnforge Class Weapon Calibration Kit — Weapon Upgrade Component, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 625 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Receive the schematic from The Eclipse Engine and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 670 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Recover parts or reagents from Hall of Possible Veyrs, New Meridian Assembly, and a hostile cache controlled by The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 3 | Prototype Build | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 760 | 11x Dawnforge Seed-Splinter; repair parts bundle | Test the prototype in The Recursive Battlefield, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 805 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defend General Lyra Voss and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 900 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q231 — Sera Nox’s Last Infiltration
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Diplomacy
- **Primary location:** The Last Starwell
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,405 XP + quest completion 1,890 XP = **6,295 story XP**.
- **Quest completion reward:** Dawnforge Reputation Writ + Evidence Cache — Reputation / Utility, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 615 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Earn entry to a council, war table, or faction court at The Last Starwell by solving their immediate access demand. |
| 2 | Proof Package | 660 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Collect verifiable proof from Engine Heart Threshold, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 705 | Faction scrip +4; 1x Combo-Lock Capsule | Hear the objections of Dawnforge Custodians and Engineborn Remnants, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 750 | 11x Dawnforge Seed-Splinter; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Eclipse Engine, the Nameless Founder, and the temptation to control history forever tries to inflame the room. |
| 5 | Binding Action | 795 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 880 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Return to Oracle Nima, lock in the new ally or resource, and record the consequence for future quests. |

### Q232 — Lyra Voss at the Broken Line
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Exploration
- **Primary location:** New Meridian Assembly
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,375 XP + quest completion 2,060 XP = **6,435 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Map the Unknown | 615 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Open the route from New Meridian Assembly into The Recursive Battlefield and establish a temporary forward camp. |
| 2 | Traversal Trial | 655 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Cross the major environmental hazard using climbing, flight, swimming, portals, gravity, or mount mechanics. |
| 3 | Survey Markers | 700 | Faction scrip +4; 1x Combo-Lock Capsule | Place three survey beacons and scan for aether, ecological, political, and military abnormalities. |
| 4 | Lost Contact | 745 | 11x Dawnforge Seed-Splinter; repair parts bundle | Recover a missing scout, drone, spirit, or relay before the zone’s danger mechanic escalates. |
| 5 | Hidden Landmark | 790 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Discover the concealed shrine, bunker, engine room, or memory site that reframes the act’s conflict. |
| 6 | Route Secured | 870 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Signal General Lyra Voss, unlock the new hub path, and add the discovered threat to the main objective chain. |

### Q233 — Nima and the Impossible Door
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Dungeon
- **Primary location:** Engine Heart Threshold
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,465 XP + quest completion 3,230 XP = **7,695 story XP**.
- **Quest completion reward:** Dawnforge Delver Cache: Cloak or Weapon-Mod Choice — Dungeon Gear Choice Cache, Legendary, item power 555, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 625 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Engine Heart Threshold. |
| 2 | First Wing | 670 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Solve the mid-dungeon puzzle or traversal gauntlet in The Founder’s Cradle while enemies pressure the group. |
| 4 | Elite Guardian | 760 | 11x Dawnforge Seed-Splinter; repair parts bundle | Defeat a themed guardian tied to The Eclipse Engine, the Nameless Founder, and the temptation to control history forever, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 805 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Dawnforge Seed. |
| 6 | Dungeon Exit | 890 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Escape collapse, corruption, or lockdown and brief The Eclipse Engine on what the dungeon revealed. |

### Q234 — Dawnforge Custodians
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Boss
- **Primary location:** The Recursive Battlefield
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,310 XP + quest completion 3,525 XP = **7,835 story XP**.
- **Quest completion reward:** Dawnforge Elite Spoils Cache: Cloak Pattern — Elite Gear Pattern, Legendary, item power 558, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Local boss reward; power capped to quest level to avoid overgearing.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 605 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 2 | Arena Preparation | 645 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Disable shields, open safe lanes, and position allied supports around The Recursive Battlefield. |
| 3 | Phase One | 690 | Faction scrip +4; 1x Combo-Lock Capsule | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 735 | 11x Dawnforge Seed-Splinter; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 775 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 860 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Secure the Dawnforge Seed, report to Dreamsmith Oru, and unlock the next act-level route or political consequence. |

### Q235 — The Hall of Possible Veyrs
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Moral
- **Primary location:** The Founder’s Cradle
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,385 XP + quest completion 2,260 XP = **6,645 story XP**.
- **Quest completion reward:** Dawnforge Bracers Armor Piece — Armor Piece, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Stakeholder Testimony | 615 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Collect testimony from victims, perpetrators, and bystanders connected to The Founder’s Cradle. |
| 2 | Evidence Balance | 660 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Verify facts at Hall of Possible Veyrs so the choice is not based on propaganda or incomplete data. |
| 3 | Consequence Preview | 700 | Faction scrip +4; 1x Combo-Lock Capsule | Ask The Eclipse Engine and General Lyra Voss to model the likely cost of each available decision. |
| 4 | Pressure Event | 745 | 11x Dawnforge Seed-Splinter; repair parts bundle | Survive an attack, riot, or betrayal by The Eclipse Engine, the Nameless Founder, and the temptation to control history forever that tries to force a rushed answer. |
| 5 | Decision | 790 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Choose the resolution path and complete the concrete action that makes the choice irreversible. |
| 6 | Accountability | 875 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Return to the affected faction, hear the reaction, and log the choice for later story callbacks. |

### Q236 — The Engine Offers Peace
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Assault
- **Primary location:** Dawnforge Core
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,450 XP + quest completion 2,965 XP = **7,415 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Legendary, item power 553, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 625 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Coordinate with Oracle Nima, assign allied squads, and identify the primary breach point at Dawnforge Core. |
| 2 | Forward Push | 670 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 710 | Faction scrip +4; 1x Combo-Lock Capsule | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 4 | Interior Fight | 755 | 11x Dawnforge Seed-Splinter; repair parts bundle | Move through The Last Starwell, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 800 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 890 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Secure Engine Heart Threshold, hand control to allies, and verify that the assault achieved the story purpose. |

### Q237 — Three Futures of the Starwells
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 39
- **Quest type:** Escort
- **Primary location:** Hall of Possible Veyrs
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 4,470 XP + quest completion 2,405 XP = **6,875 story XP**.
- **Quest completion reward:** Dawnforge Field-Survival Cache — Consumable + Utility Cache, Legendary, item power 548, minimum level 39.
- **Consumables/materials:** 3x Eclipse Recovery Flask, 2x Combo-Lock Capsule, 23x Dawnforge Seed-Splinter.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Route Briefing | 625 | 9x Dawnforge Seed-Splinter; scouting reputation +1 | Plan the convoy, refugee path, or NPC movement from Hall of Possible Veyrs to The Recursive Battlefield with General Lyra Voss. |
| 2 | First Leg | 670 | 10x Dawnforge Seed-Splinter; 1x Eclipse Recovery Flask | Lead the group through the first hazard zone, keeping speed, stealth, or morale within safe limits. |
| 3 | Resource Stop | 715 | Faction scrip +4; 1x Combo-Lock Capsule | Collect fuel, medicine, ritual charges, or repair parts at New Meridian Assembly before the route collapses. |
| 4 | Ambush Response | 760 | 11x Dawnforge Seed-Splinter; repair parts bundle | Defeat or bypass The Eclipse Engine, the Nameless Founder, and the temptation to control history forever forces without losing the protected objective. |
| 5 | Final Crossing | 805 | 1x Eclipse Recovery Flask; 1x Combo-Lock Capsule; encounter cache key fragment | Complete the hardest traversal or combat segment while the escort target performs their own task. |
| 6 | Arrival | 895 | Quest-turn-in cache fragment; 12x Dawnforge Seed-Splinter | Deliver the target to safety, confirm the strategic gain, and unlock the next branch of the campaign. |

### Q238 — The Founder’s True Crime
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Puzzle
- **Primary location:** The Last Starwell
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,470 XP + quest completion 1,790 XP = **5,260 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Rules Discovery | 485 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Learn the rules of the ancient system, court ritual, engine lock, or dream logic governing The Last Starwell. |
| 2 | First Solution | 520 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Solve the opening sequence using clues from Sera Nox, the environment, and one recovered record. |
| 3 | Constraint Shift | 555 | Faction scrip +5; 1x Astral Guard Flask | Adapt when The Eclipse Engine, the Nameless Founder, and the temptation to control history forever changes the pattern, adds pressure, or corrupts one of the puzzle inputs. |
| 4 | Parallel Locks | 590 | 12x Dawnforge Seed-Splinter; repair parts bundle | Resolve three linked mechanisms across Engine Heart Threshold, each testing combat, traversal, and observation. |
| 5 | Final Alignment | 625 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Align the core symbols, circuits, memories, or vows to reveal the hidden answer. |
| 6 | Reward State | 695 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Open the path, recover the Dawnforge Seed, and document the rule that will matter in a later quest. |

### Q239 — Battle of Recursive Dawn
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Heist
- **Primary location:** New Meridian Assembly
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,540 XP + quest completion 1,995 XP = **5,535 story XP**.
- **Quest completion reward:** Dawnforge Technical Cache: Dawnforge Seed-Splinter Bundle — Crafting / Upgrade Materials, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Supports upgrades but requires additional farmed materials.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Case the Target | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Survey New Meridian Assembly, identify guards, escape routes, vault logic, and the exact item or record to obtain. |
| 2 | Crew Roles | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Assign support tasks to Dreamsmith Oru, Oracle Nima, and any recruited faction specialists. |
| 3 | Access Tool | 565 | Faction scrip +5; 1x Astral Guard Flask | Forge credentials, acquire uniforms, duplicate keys, or hack a ward to enter The Recursive Battlefield. |
| 4 | The Lift | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Steal, swap, or copy the objective while optional loot and story evidence tempt overextension. |
| 5 | Complication | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Respond to a betrayal, alarm, or unexpected prisoner without abandoning the main objective. |
| 6 | Fence the Truth | 715 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Deliver the prize to allies, expose the stolen truth, and convert it into a campaign advantage. |

### Q240 — Recover the Dawnforge Seed
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Network
- **Primary location:** Engine Heart Threshold
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,540 XP + quest completion 1,995 XP = **5,535 story XP**.
- **Quest completion reward:** Dawnforge Class Weapon Calibration Kit — Weapon Upgrade Component, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Upgrades the active class weapon one bracket if the player already meets the level gate.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Topology Read | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Map the Starwell, relay, dream, oceanic, moon, or civic network around Engine Heart Threshold. |
| 2 | Signal Capture | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Collect clean samples of friendly, hostile, and corrupted transmissions before they desynchronize. |
| 3 | Node Repair | 565 | Faction scrip +5; 1x Astral Guard Flask | Restore or harden three relay points across The Founder’s Cradle while enemies attempt live sabotage. |
| 4 | Protocol Break | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Decode the hostile instruction set or ritual pattern controlling the local crisis. |
| 5 | Counter-Signal | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Deploy a patch, counter-chant, spoof, or firewall that turns the enemy network against itself. |
| 6 | Sync Confirmation | 715 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Verify with The Eclipse Engine that the repaired network persists and unlocks a stable path forward. |

### Q241 — Plant the Seed in Fire
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Investigation
- **Primary location:** The Recursive Battlefield
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,575 XP + quest completion 1,685 XP = **5,260 story XP**.
- **Quest completion reward:** Dawnforge Reputation Writ + Evidence Cache — Reputation / Utility, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Briefing & Suspicion | 500 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Meet Oracle Nima at The Recursive Battlefield, record the reported anomaly, and mark three contradictions in the official account. |
| 2 | Scene Sweep | 535 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Inspect Dawnforge Core for physical traces, corrupted aether residue, witness routes, and any signs of staged evidence. |
| 3 | Witness Web | 570 | Faction scrip +5; 1x Astral Guard Flask | Interview survivors from Free Cities of Veyr and United Accord, then compare their timelines against the Starwell pulse log. |
| 4 | Hidden Trail | 610 | 12x Dawnforge Seed-Splinter; repair parts bundle | Follow the recovered clue through The Last Starwell, avoiding false leads planted by The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 5 | Confrontation | 645 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Corner the responsible agent or corrupted system, force a confession or data dump, and survive the countermeasure. |
| 6 | Case Closure | 715 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Deliver a verified finding to Sera Nox, update the alliance risk map, and unlock the next operational lead. |

### Q242 — Defend the Growing Dawn
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Rescue
- **Primary location:** The Founder’s Cradle
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,525 XP + quest completion 1,900 XP = **5,425 story XP**.
- **Quest completion reward:** Dawnforge Field-Survival Cache — Consumable + Utility Cache, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Distress Signal | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Triangulate the missing group’s last signal between The Founder’s Cradle, Hall of Possible Veyrs, and New Meridian Assembly. |
| 2 | Safe Route | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Clear hazards, ambush points, or environmental blockers so a rescue team can enter without wiping. |
| 3 | Locate Survivors | 565 | Faction scrip +5; 1x Astral Guard Flask | Find captives, wounded scouts, or trapped civilians while identifying which threats are guarding them. |
| 4 | Stabilize & Arm | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Treat injuries, distribute emergency gear, and assign escort roles to the survivors. |
| 5 | Breakout | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Escort the rescued group through a live combat or traversal sequence while The Eclipse Engine, the Nameless Founder, and the temptation to control history forever tries to cut them off. |
| 6 | Debrief | 700 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Return the survivors to General Lyra Voss, extract their intelligence, and add their testimony to the main campaign board. |

### Q243 — The Eclipse Engine Unmade
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Defense
- **Primary location:** Dawnforge Core
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,600 XP + quest completion 2,210 XP = **5,810 story XP**.
- **Quest completion reward:** Dawnforge Field-Survival Cache — Consumable + Utility Cache, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Sustains difficult play without replacing gear progression.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Assess the Line | 505 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Survey Dawnforge Core, identify three weak points, and choose where allied NPC squads should fortify. |
| 2 | Build the Hold | 540 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Repair barricades, deploy sensors or wards, and place fallback supplies for Dawnforge Custodians defenders. |
| 3 | First Wave | 575 | Faction scrip +5; 1x Astral Guard Flask | Repel the opening attack from The Eclipse Engine, the Nameless Founder, and the temptation to control history forever while preserving civilians, engineers, or critical structures. |
| 4 | Mid-Battle Crisis | 610 | 12x Dawnforge Seed-Splinter; repair parts bundle | Respond to a breach, sabotage event, or elite flank at The Last Starwell before morale collapses. |
| 5 | Counterstrike | 650 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Push out from the line, destroy the attackers’ command node, and defeat their field captain. |
| 6 | After-Action Lockdown | 720 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Stabilize Engine Heart Threshold, count losses, recover evidence, and authorize the next campaign movement. |

### Q244 — Choose the Starwell Covenant
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Stealth
- **Primary location:** Hall of Possible Veyrs
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,470 XP + quest completion 1,790 XP = **5,260 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Cover Identity | 485 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Acquire credentials, disguise tokens, or spoofed access from Dreamsmith Oru without alerting The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 2 | Patrol Read | 520 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Map guard paths, camera/scrying cones, and alarm relays across Hall of Possible Veyrs. |
| 3 | Silent Entry | 555 | Faction scrip +5; 1x Astral Guard Flask | Enter New Meridian Assembly through a maintenance path, forgotten ritual door, or vertical traversal route. |
| 4 | Plant or Extract | 590 | 12x Dawnforge Seed-Splinter; repair parts bundle | Install the needed device, steal the objective item, or copy the restricted records before detection rises. |
| 5 | Clean Exit | 625 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Escape through The Recursive Battlefield, erase trace evidence, and protect any undercover allies left inside. |
| 6 | Intel Hand-Off | 695 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Report to Oracle Nima, compare the intel to existing clues, and flag the next vulnerability. |

### Q245 — The Last Starwell Opens
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Crafting
- **Primary location:** The Last Starwell
- **Original story unlock:** Unlocks: an NPC loyalty increase, a tactical perk, and a changed patrol or civilian state.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,540 XP + quest completion 1,995 XP = **5,535 story XP**.
- **Quest completion reward:** Dawnforge Amulet Armor Piece — Armor Piece, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Single armor piece; set bonuses require several story and crafting inputs.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Specification | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Receive the schematic from The Eclipse Engine and identify the exact component, calibration, or ritual gap blocking progress. |
| 2 | Rare Components | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Recover parts or reagents from The Last Starwell, Engine Heart Threshold, and a hostile cache controlled by The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 3 | Prototype Build | 565 | Faction scrip +5; 1x Astral Guard Flask | Assemble the device, cure, key, or upgrade while keeping failure states visible to the player. |
| 4 | Field Calibration | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Test the prototype in The Founder’s Cradle, collect telemetry, and correct one unexpected malfunction. |
| 5 | Workshop Defense | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Defend General Lyra Voss and the build site while enemies attempt to interrupt final assembly. |
| 6 | Deployment | 715 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Install the completed tool into the campaign objective and document what new traversal, combat, or story route it unlocks. |

### Q246 — Return to Meridian Gate
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Diplomacy
- **Primary location:** New Meridian Assembly
- **Original story unlock:** Unlocks: a boss intel file, rare materials, and one main-story route unlock.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,485 XP + quest completion 1,495 XP = **4,980 story XP**.
- **Quest completion reward:** Dawnforge Reputation Writ + Evidence Cache — Reputation / Utility, Artifact, item power 560, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Primarily unlocks vendors, dialogue, and crafting discounts.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Gain Audience | 490 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Earn entry to a council, war table, or faction court at New Meridian Assembly by solving their immediate access demand. |
| 2 | Proof Package | 525 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Collect verifiable proof from The Recursive Battlefield, including one witness, one artifact, and one enemy contradiction. |
| 3 | Faction Demands | 560 | Faction scrip +5; 1x Astral Guard Flask | Hear the objections of United Accord and Dawnforge Custodians, then identify the demand that can be satisfied without betraying the main alliance. |
| 4 | Mediation Trial | 590 | 12x Dawnforge Seed-Splinter; repair parts bundle | Resolve a staged debate, duel of honor, or public accusation while The Eclipse Engine, the Nameless Founder, and the temptation to control history forever tries to inflame the room. |
| 5 | Binding Action | 625 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Complete the concession, rescue, exchange, or symbolic act required to make the agreement real. |
| 6 | Accord Ratified | 695 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Return to Oracle Nima, lock in the new ally or resource, and record the consequence for future quests. |

### Q247 — Councils of the Free Cities
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Dungeon
- **Primary location:** Engine Heart Threshold
- **Original story unlock:** Unlocks: campaign reputation, a new codex entry, and a permanent hub-state update.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,530 XP + quest completion 2,560 XP = **6,090 story XP**.
- **Quest completion reward:** Dawnforge Delver Cache: Amulet or Weapon-Mod Choice — Dungeon Gear Choice Cache, Artifact, item power 567, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Choice cache supports armor catch-up without providing a full weapon jump.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Entry Key | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Assemble the access key, ritual phrase, override code, or environmental condition needed to open Engine Heart Threshold. |
| 2 | First Wing | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Clear the opening section, teaching the dungeon’s signature mechanic through low-risk encounters. |
| 3 | Mechanic Deepening | 565 | Faction scrip +5; 1x Astral Guard Flask | Solve the mid-dungeon puzzle or traversal gauntlet in The Founder’s Cradle while enemies pressure the group. |
| 4 | Elite Guardian | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Defeat a themed guardian tied to The Eclipse Engine, the Nameless Founder, and the temptation to control history forever, preserving any optional prisoners, records, or artifacts. |
| 5 | Final Chamber | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Activate the core mechanism, survive a hazard spike, and claim or purify the Dawnforge Seed. |
| 6 | Dungeon Exit | 705 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Escape collapse, corruption, or lockdown and brief Dreamsmith Oru on what the dungeon revealed. |

### Q248 — Farewell to the First Dream
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Assault
- **Primary location:** The Recursive Battlefield
- **Original story unlock:** Unlocks: allied support tokens, upgraded travel access, and a new investigation lead.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,520 XP + quest completion 2,345 XP = **5,865 story XP**.
- **Quest completion reward:** Dawnforge Wayfinder Supply Cache — General Reward Cache, Artifact, item power 565, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Standard story reward; intentionally modest XP and power.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Battle Plan | 495 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Coordinate with Sera Nox, assign allied squads, and identify the primary breach point at The Recursive Battlefield. |
| 2 | Forward Push | 530 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Capture the outer objective while avoiding unnecessary damage to civilians or vital systems. |
| 3 | Disable Support | 565 | Faction scrip +5; 1x Astral Guard Flask | Destroy artillery, ritual anchors, drone relays, or elite reinforcements linked to The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 4 | Interior Fight | 600 | 12x Dawnforge Seed-Splinter; repair parts bundle | Move through Dawnforge Core, clear resistance, and keep the main objective from going into lockdown. |
| 5 | Command Node | 635 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Defeat the commander, seize the records or control interface, and prevent a last-second scuttle. |
| 6 | Occupation Protocol | 695 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Secure The Last Starwell, hand control to allies, and verify that the assault achieved the story purpose. |

### Q249 — A Sky Without Chains
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Boss
- **Primary location:** The Founder’s Cradle
- **Original story unlock:** Unlocks: a traversal upgrade, a faction favor, and a replayable encounter modifier.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** The Astral Sovereign — separate encounter XP: 60,000.
- **XP package:** subquests total 3,410 XP + quest completion 2,790 XP = **6,200 story XP**.
- **Quest completion reward:** Astral Sovereign Gravity Crown (The Astral Sovereign Trophy) — Milestone Boss Trophy / Adaptive Weapon Token, Artifact, item power 582, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Boss trophy converts to a class-appropriate weapon/focus and does not bypass the level requirement.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Boss Intel | 475 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Gather three tells, resistances, or arena hazards connected to the boss force under The Eclipse Engine, the Nameless Founder, and the temptation to control history forever. |
| 2 | Arena Preparation | 510 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Disable shields, open safe lanes, and position allied supports around The Founder’s Cradle. |
| 3 | Phase One | 545 | Faction scrip +5; 1x Astral Guard Flask | Engage the boss, learn the baseline pattern, and interrupt the first wipe mechanic. |
| 4 | Phase Two Crisis | 580 | 12x Dawnforge Seed-Splinter; repair parts bundle | Handle adds, environmental shifts, or corrupted allies as the fight escalates. |
| 5 | Final Break | 615 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Exploit the revealed weakness, defeat the boss, and choose whether to capture, cleanse, or destroy the remnant. |
| 6 | Victory Consequence | 685 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Secure the Dawnforge Seed, report to Dreamsmith Oru, and unlock the next act-level route or political consequence. |

### Q250 — Dawnforge: New Game Begins
- **Act:** 10 — Dawnforge Endgame
- **Recommended level:** 40
- **Quest type:** Resolution
- **Primary location:** Dawnforge Core
- **Original story unlock:** Unlocks: crafting schematics, world-state evidence, and access to the next secure location.
- **Monster gate:** Late Game; allowed normal monsters: The Nexus Swarmers, Nexus Warden, The Scrap-Stalker, The Sylvan Juggernaut, The Void Anomaly; normal combat cap: level 40.
- **Milestone boss:** None; keep any elite enemy at or below the normal combat cap.
- **XP package:** subquests total 3,690 XP + quest completion 2,675 XP = **6,365 story XP**.
- **Quest completion reward:** Dawnforge Act-Capstone Relic: Dawnforge Seed Husk — Act Artifact + Set Token, Artifact, item power 583, minimum level 40.
- **Consumables/materials:** 3x Dawnforge Restoration Core, 3x Astral Guard Flask, 24x Dawnforge Seed-Splinter.
- **Reward balance note:** Major act-finale reward; grants a story-set token, not a full best-in-slot item.

| # | Subquest | XP | Subquest Reward | Objective |
|---|---|---:|---|---|
| 1 | Consequence Review | 515 | 10x Dawnforge Seed-Splinter; scouting reputation +1 | Meet The Eclipse Engine, General Lyra Voss, and a faction representative to review what changed after the prior conflict. |
| 2 | Loose Ends | 555 | 11x Dawnforge Seed-Splinter; 1x Dawnforge Restoration Core | Resolve one survivor need, one political risk, and one technical or magical instability at Dawnforge Core. |
| 3 | Public Moment | 590 | Faction scrip +5; 1x Astral Guard Flask | Deliver a speech, trial result, memorial, coronation, or reveal that translates victory into social change. |
| 4 | Future Threat | 625 | 12x Dawnforge Seed-Splinter; repair parts bundle | Discover the next act’s clue through a relic, transmission, prisoner confession, or dream vision. |
| 5 | Unlock | 665 | 1x Dawnforge Restoration Core; 1x Astral Guard Flask; encounter cache key fragment | Open the new route, allied ability, world system, or hub upgrade needed for the next major arc. |
| 6 | Act Transition | 740 | Quest-turn-in cache fragment; 13x Dawnforge Seed-Splinter | Commit the party to the next destination and preserve one emotional beat for long-term payoff. |
