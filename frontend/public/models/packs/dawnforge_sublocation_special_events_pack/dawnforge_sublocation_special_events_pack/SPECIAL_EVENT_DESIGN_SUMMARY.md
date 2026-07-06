# Special Event Design Summary

## Event Count by Required Level

|   required_player_level |   event_count |
|------------------------:|--------------:|
|                      20 |             6 |
|                      21 |            11 |
|                      22 |            10 |
|                      23 |            11 |
|                      24 |            11 |
|                      25 |            10 |
|                      26 |            11 |
|                      27 |            11 |
|                      28 |            10 |
|                      29 |            11 |
|                      30 |            11 |
|                      31 |            11 |
|                      32 |            10 |
|                      33 |             1 |
|                      34 |            10 |
|                      36 |            11 |
|                      37 |             9 |
|                      38 |             1 |
|                      39 |            11 |
|                      40 |            38 |

## Event Count by World Location

| world_map_location                      |   events |
|:----------------------------------------|---------:|
| Sector 6 Quarantine                     |        5 |
| The Abyssal Trench                      |        5 |
| The Alternating Archives                |        5 |
| The Anomaly Ward                        |        5 |
| The Burning Playa                       |        5 |
| The Canceled Supabase                   |        5 |
| The Canopy Portrait Halls               |        5 |
| The Central Pillar / Star-Elevator Core |        5 |
| The Deprecated Repositories             |        5 |
| The EPI-Center                          |        5 |
| The Emerald Canopy Sanctuary            |        5 |
| The Evolution Arenas                    |        5 |
| The Front-Matter Void                   |        5 |
| The Heavy-Chewer Canyons                |        5 |
| The Infinite Archives                   |        5 |
| The Lich's Court                        |        5 |
| The Lunar Readiness Base                |        5 |
| The Magma-Core Forges                   |        5 |
| The Marlowe Editing Protocol            |        5 |
| The Micro-Transaction Markets           |        5 |
| The Molten Forge                        |        5 |
| The On-Demand Arteries                  |        5 |
| The Orbital Tether Station              |        5 |
| The Pachyderm Sanctuaries               |        5 |
| The Phonetic Wastes                     |        5 |
| The Planet Defense Perimeter            |        5 |
| The Playa of Ash                        |        5 |
| The Pocket-Monster Data Plains          |        5 |
| The Provisioning Sectors                |        5 |
| The Raid-Rush Choke Points              |        5 |
| The Reggae-Dub Oasis                    |        5 |
| The Resonant Peaks                      |        5 |
| The Rhyming Labyrinths                  |        5 |
| The Scrap-Yard Labyrinth                |        5 |
| The Shut-Down Academies                 |        5 |
| The Sonic Badlands                      |        5 |
| The Subterranean Grid                   |        5 |
| The Syndicate Spire                     |        5 |
| The Urban Sprawl                        |        5 |
| The Voyage Incubator                    |        5 |
| The Wayfora Archipelago                 |        5 |
| The Whispering Glade                    |        5 |
| The Zenith Spire                        |        5 |

## No-XP Enforcement

Every row in the trigger, loot, and monster stat tables uses XP reward value `0`. This prevents these special events from becoming a leveling shortcut. Their purpose is hard optional loot, mastery, and location reuse after level 20.

## Difficulty Tuning

Each event is tuned at recommended combat rating `required_player_level + 2` except the highest capstone events, which may use overcap challenge rating 42. Stat blocks in `SPECIAL_EVENT_MONSTER_STATS.csv` show the raised variant values beside the standard baseline values.
