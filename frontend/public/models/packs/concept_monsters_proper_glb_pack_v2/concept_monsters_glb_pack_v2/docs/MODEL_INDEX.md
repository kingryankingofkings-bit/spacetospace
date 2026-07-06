# Model Index

## The Sylvan Juggernaut

- File: `models/01_sylvan_juggernaut.glb`
- Role: Heavy Tank / Environmental Hazard
- Kind: massive biped forest-bark beast
- Vertices / Triangles: 2078 / 3808
- Dimensions: [3.68, 4.2392, 2.06]
- Key visual parts:
  - `wood_core_torso`
  - `ablative_chest_bark_plate_*`
  - `massive_wooden_fist_*`
  - `ground_root_tendril_*`
  - `moss_eye_*`
- Mechanic hooks:
  - **Ablative Armor:** Use named bark plates as destroyable visual chunks or material swap states.
  - **Rooting Strike:** Fist/root meshes mark the intended slam and ground-root silhouette.
  - **Regrowth:** Bark plate names can be re-enabled/re-grown by gameplay logic.

## The Scrap-Stalker

- File: `models/02_scrap_stalker.glb`
- Role: High-Mobility Assassin / Flanker
- Kind: augmented canine predator
- Vertices / Triangles: 1176 / 2116
- Dimensions: [1.4065, 1.5523, 3.7]
- Key visual parts:
  - `right_hydraulic_thigh_armor`
  - `right_hydraulic_upper_piston`
  - `bladed_prosthetic_forelimb`
  - `exposed_electric_wire_*`
  - `electric_eye_*`
- Mechanic hooks:
  - **Hydraulic Pounce:** Right mechanical hind leg and piston nodes indicate leap power.
  - **Overclock:** Electric wire/eye materials can be intensified or swapped during 30% HP phase.
  - **EMP Howl:** Head/muzzle area is the source socket for short-range EMP effect.

## The Nexus Swarmers

- File: `models/03_nexus_swarmers_cluster.glb`
- Role: Mob / Escalating Threat
- Kind: cluster of small crystalline parasites
- Vertices / Triangles: 988 / 1648
- Dimensions: [1.5863, 1.241, 1.7735]
- Key visual parts:
  - `nexus_swarmer_crystal_body_*`
  - `nexus_swarmer_scanning_eye_*`
  - `swarm_adaptive_link_*`
  - `nexus_hover_arc_*`
- Mechanic hooks:
  - **Swarm Mentality:** Cluster file includes multiple parasite bodies for group presentation.
  - **Adaptive Evolution:** Fusion links visualize the evolution trigger state.

## Nexus Warden Evolved

- File: `models/03b_nexus_warden_evolved.glb`
- Role: Evolved Nexus construct / bonus asset
- Kind: larger humanoid crystalline construct
- Vertices / Triangles: 240 / 368
- Dimensions: [2.1, 2.7555, 1.5723]
- Key visual parts:
  - `warden_crystal_torso`
  - `warden_core`
  - `warden_single_beam_eye`
  - `warden_long_range_beam_core`
  - `warden_beam_focus_shard_*`
- Mechanic hooks:
  - **Adaptive Evolution Result:** Spawn this asset when Swarmers survive and fuse.
  - **Long-Range Beam:** Use warden_long_range_beam_core as the beam source socket.

## The Void Anomaly

- File: `models/04_void_anomaly.glb`
- Role: Elite / Mini-Boss
- Kind: glitching humanoid anomaly
- Vertices / Triangles: 1438 / 2608
- Dimensions: [1.5458, 2.44, 1.117]
- Key visual parts:
  - `phase_shift_ghost_torso_*`
  - `glitch_fragment_*`
  - `broken_reality_tear_arc_*`
  - `void_chest_reality_gap`
- Mechanic hooks:
  - **Phase Shift:** Ghost silhouettes and glitch fragments support alpha/emission flicker during intangibility.
  - **Reality Tear:** Broken rift arcs can be separated or used as a source for battlefield rift VFX.

## The Tremor-Fiend

- File: `models/05_tremor_fiend.glb`
- Role: Area Denial / Pacing Dictator
- Kind: hulking subterranean amphibian
- Vertices / Triangles: 1605 / 2978
- Dimensions: [2.36, 1.66, 2.5459]
- Key visual parts:
  - `resonant_throat_sac_*`
  - `ground_slam_mallet_fist_*`
  - `sonic_hum_arc_*`
  - `subterranean_back_spike_*`
- Mechanic hooks:
  - **Metronome Strike:** Mallet forelimbs and fists define the rhythmic ground-slam animation targets.
  - **Sonic Bellow:** Throat sacs provide telegraph material for expanding/glowing before cone attack.

## The Iron-Jaw Hound

- File: `models/06_iron_jaw_hound.glb`
- Role: Combo Breaker / Priority Target
- Kind: low quadruped grappler with reinforced jaw
- Vertices / Triangles: 1616 / 2940
- Dimensions: [1.28, 1.215, 2.9648]
- Key visual parts:
  - `reinforced_upper_jaw_plate`
  - `reinforced_lower_jaw_plate`
  - `jaw_hinge_rivet_*`
  - `jaw_side_lock_bar_*`
- Mechanic hooks:
  - **The Latch:** Jaw plates and front bite zone indicate grapple source.
  - **Ally Assist:** Back/collar area supports vault-kick target marker.

## The Aegis Carapace

- File: `models/07_aegis_carapace.glb`
- Role: Directional Blocker
- Kind: insectoid creature with riot-shield front shell
- Vertices / Triangles: 716 / 1284
- Dimensions: [2.16, 1.6842, 1.905]
- Key visual parts:
  - `impenetrable_front_shell_riot_shield`
  - `central_shield_keel`
  - `exposed_rear_abdomen`
  - `rear_vulnerable_eye_spot`
- Mechanic hooks:
  - **Deflection:** Large front shell should use a directional block collider/material response.
  - **Vault-Over Vulnerability:** Rear abdomen is colored as the exposed weak point after vaulting.

## The Venom-Spitter

- File: `models/08_venom_spitter.glb`
- Role: Ranged Harasser / Flow Extender
- Kind: fragile serpentine wall-clinger/spitter
- Vertices / Triangles: 993 / 1814
- Dimensions: [1.1933, 0.8349, 3.81]
- Key visual parts:
  - `telegraphed_acid_globe_ready`
  - `spit_nozzle_mouth`
  - `venom_warning_frill_*`
  - `yellow_projectile_indicator_arc_*`
  - `wall_cling_hook_*`
- Mechanic hooks:
  - **Telegraphed Projectiles:** Acid globe and yellow indicator arcs show projectile warning state.
  - **Projectile Reversal:** Mouth/nozzle is projectile spawn socket; reversed projectile can target head collider.

