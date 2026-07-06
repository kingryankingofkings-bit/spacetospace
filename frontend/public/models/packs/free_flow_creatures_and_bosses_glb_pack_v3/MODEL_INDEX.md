# Model Index

## The Gnarl-Maws

- **File:** `models/creatures/01_gnarl_maw.glb`
- **Category:** creature
- **Role:** Fodder / Movement Restrictor
- **Description:** Squat, blocky heavy-chewer with oversized steel-gnawing jaws, durable leathery hide, latch hooks, and stumpy braced legs.
- **Mechanics:** Latch & Drag, Shake-Off
- **Geometry count:** 51
- **Triangles:** 1214
- **Vertices:** 3642
- **Visual bounds:** min `[-0.77, -0.01, -1.35]`, max `[0.77, 0.964, 0.901]`

**Engine hooks:**
- `main_hit_region`: `gnarl_maw_blocky_torso`
- `latch_origin`: `gnarl_maw_lower_jaw_latch_plate`
- `shake_off_target`: `gnarl_maw_overdeveloped_head`

**Suggested animation states:**
`idle_chew`, `crawl`, `latch_jump`, `drag_resist`, `shake_off_stun`, `death_sprawl`

## The Grid-Rushers

- **File:** `models/creatures/02_grid_rusher.glb`
- **Category:** creature
- **Role:** Combo-Batteries / Positional Threat
- **Description:** Spindly, glowing automaton-insect built around a forward lance silhouette, thin legs, grid bars, and a rear thrust flare.
- **Mechanics:** Linear Swarm, One-Hit Wonders
- **Geometry count:** 27
- **Triangles:** 574
- **Vertices:** 1722
- **Visual bounds:** min `[-0.72, 0.016, -0.92]`, max `[0.72, 0.691, 0.76]`

**Engine hooks:**
- `core`: `grid_rusher_glowing_core`
- `forward_direction_hint`: `grid_rusher_forward_lance_head`
- `death_pop_origin`: `grid_rusher_rear_thrust_flare`

**Suggested animation states:**
`idle_twitch`, `linear_sprint`, `impact_pop`, `lane_swarm`

## The Scrap-Phalanx

- **File:** `models/creatures/03_scrap_phalanx.glb`
- **Category:** creature
- **Role:** Defensive Horde / Clumper
- **Description:** Fragile scavenger-drone holding a jagged improvised shield wall made from rusted car-door metal and wood planks.
- **Mechanics:** The Turtle Shell, Scatter Strike
- **Geometry count:** 20
- **Triangles:** 618
- **Vertices:** 1854
- **Visual bounds:** min `[-0.628, 0.01, -0.966]`, max `[0.631, 1.98, 0.227]`

**Engine hooks:**
- `shield_root`: `scrap_phalanx_rusted_car_door_shield`
- `vulnerable_body`: `scrap_phalanx_small_body`
- `scatter_origin`: `scrap_phalanx_jagged_scrap_top_edge`

**Suggested animation states:**
`idle_hide`, `clump_formation`, `shield_brace`, `scatter_break`, `panic_scurry`

## The Siphon-Ticks

- **File:** `models/creatures/04_siphon_tick.glb`
- **Category:** creature
- **Role:** Evasive Nuisance / Priority Target
- **Description:** Low floor-camouflaged tick with skittering legs, energy siphon proboscis, and glowing combo-meter abdomen.
- **Mechanics:** The Opportunist, The Chase
- **Geometry count:** 29
- **Triangles:** 730
- **Vertices:** 2190
- **Visual bounds:** min `[-0.76, 0.018, -0.84]`, max `[0.76, 0.4, 0.5]`

**Engine hooks:**
- `siphon_probe`: `siphon_tick_energy_proboscis`
- `stolen_meter_visual`: `siphon_tick_combo_meter_core`
- `weak_point`: `siphon_tick_translucent_energy_abdomen`

**Suggested animation states:**
`floor_idle`, `ambush_dart`, `siphon_channel`, `flee_to_edge`, `squash`

## The Ascendant Colossus

- **File:** `models/bosses/boss_01_ascendant_colossus.glb`
- **Category:** boss
- **Role:** Multi-Phase Titan / Form-Shifter
- **Description:** Towering stone giant with breakable phase-one armor, exposed lightning phase-two core, grapple weakpoints, and floating shattered shell pieces.
- **Mechanics:** Evolutionary Phases, Structural Scaling
- **Geometry count:** 41
- **Triangles:** 1640
- **Vertices:** 4920
- **Visual bounds:** min `[-2.261, -0.058, -0.739]`, max `[2.265, 4.805, 0.621]`

**Engine hooks:**
- `phase1_group_prefix`: `ascendant_colossus_phase1_`
- `phase2_group_prefix`: `ascendant_colossus_phase2_`
- `grapple_points_prefix`: `ascendant_colossus_grapple_weakpoint_`

**Suggested animation states:**
`slow_walk`, `armor_chip_react`, `shell_shatter`, `lightning_phase_idle`, `limb_climb_reacts`, `titan_slam`

## The Syndicate Lich

- **File:** `models/bosses/boss_02_syndicate_lich.glb`
- **Category:** boss
- **Role:** Undead Commander / Zone Controller
- **Description:** Floating skeletal commander in tattered regal robes, with visible command orbs, combo-locked barrier rings, crown spikes, and dark magic particles.
- **Mechanics:** Issuing Orders, Combo-Locked Shielding
- **Geometry count:** 38
- **Triangles:** 3186
- **Vertices:** 9558
- **Visual bounds:** min `[-1.37, 0.55, -0.975]`, max `[1.37, 3.25, 0.975]`

**Engine hooks:**
- `shield_ring_A`: `syndicate_lich_combo_locked_barrier_ring_vertical`
- `shield_ring_B`: `syndicate_lich_combo_locked_barrier_ring_horizontal`
- `order_orbs_prefix`: `syndicate_lich_marked_minion_order_orb_`

**Suggested animation states:**
`hover_idle`, `issue_order`, `barrier_pulse`, `shield_break`, `summon_swirl`, `death_unravel`

## The Resonant Behemoth

- **File:** `models/bosses/boss_03_resonant_behemoth.glb`
- **Category:** boss
- **Role:** Rhythm-Based Giant / Environmental Hazard
- **Description:** Colossal subterranean amphibian with resonant throat sacs, mallet forelimbs, vibrating spine crystals, and shockwave telegraph rings.
- **Mechanics:** The Bass Drop, Echo Strikes
- **Geometry count:** 28
- **Triangles:** 2296
- **Vertices:** 6888
- **Visual bounds:** min `[-2.318, -0.036, -3.168]`, max `[2.318, 2.34, 1.984]`

**Engine hooks:**
- `throat_sacs_prefix`: `resonant_behemoth_resonant_throat_sac_`
- `spine_crystals_prefix`: `resonant_behemoth_vibrating_spine_crystal_`
- `shockwave_rings_prefix`: `resonant_behemoth_echo_shockwave_ring_`

**Suggested animation states:**
`idle_hum`, `sac_charge`, `bass_drop`, `echo_slam`, `submerge`, `crystal_crack`

## The Null Anomaly

- **File:** `models/bosses/boss_04_null_anomaly.glb`
- **Category:** boss
- **Role:** Reality Warper / Precision Tester
- **Description:** Fragmented digital-light humanoid with one real shadow-tell form, three fake echoes, gravity-reversal debris, and void-energy fragments.
- **Mechanics:** Echo Splintering, Gravity Reversal
- **Geometry count:** 33
- **Triangles:** 992
- **Vertices:** 2976
- **Visual bounds:** min `[-1.359, -0.002, -1.015]`, max `[1.319, 2.058, 0.993]`

**Engine hooks:**
- `real_shadow_tell`: `null_anomaly_real_shadow_tell_ring`
- `real_core`: `null_anomaly_real_core_magenta`
- `fake_echo_prefix`: `null_anomaly_fake_echo_`

**Suggested animation states:**
`glitch_idle`, `split_echoes`, `fake_hit_stun_player`, `gravity_flip`, `reform`, `phase_warp`

## The Apex Chimera

- **File:** `models/bosses/boss_05_apex_chimera.glb`
- **Category:** boss
- **Role:** Evolutionary Beast / Mob Integrator
- **Description:** Biomechanical predator with exposed integration ports, synthetic muscle, mechanical limbs, an evolved shoulder cannon, and reinforced tail club.
- **Mechanics:** Forced Evolution, Interception Combos
- **Geometry count:** 55
- **Triangles:** 2138
- **Vertices:** 6414
- **Visual bounds:** min `[-1.0, -0.019, -1.906]`, max `[1.16, 1.87, 2.68]`

**Engine hooks:**
- `integration_ports_prefix`: `apex_chimera_exposed_integration_port_`
- `plasma_cannon`: `apex_chimera_evolved_shoulder_plasma_cannon`
- `tail_club`: `apex_chimera_tail_club_weapon`

**Suggested animation states:**
`predator_idle`, `consume_mob`, `grow_weapon`, `intercept_interrupt`, `tail_slam`, `cannon_fire`

## The Resonance Maestro

- **File:** `models/bosses/boss_06_resonance_maestro.glb`
- **Category:** boss
- **Role:** Sonic Spellcaster / Tempo Controller
- **Description:** Hovering sonic spellcaster with festival-like armor, twin tuning forks, visible bass wave rings, and a bounceable sonic trap sphere.
- **Mechanics:** The Bass Trap, Tempo Shift
- **Geometry count:** 33
- **Triangles:** 2658
- **Vertices:** 7974
- **Visual bounds:** min `[-1.09, 0.35, -1.468]`, max `[1.09, 3.077, 0.768]`

**Engine hooks:**
- `bass_trap`: `resonance_maestro_bounceable_bass_trap_sphere`
- `wave_rings_prefix`: `resonance_maestro_visible_bass_wave_ring_`
- `tuning_forks_prefix`: `resonance_maestro_tuning_fork_`

**Suggested animation states:**
`hover_idle`, `tempo_shift_slow`, `tempo_shift_fast`, `fork_strike`, `bass_trap_cast`, `redirect_hit`

## The Data-Forged Evolvarch

- **File:** `models/bosses/boss_07_data_forged_evolvarch.glb`
- **Category:** boss
- **Role:** Evolutionary Titan / Form-Shifter
- **Description:** Digital metallic titan with quadruped armored body, wing/biped modules, streaming code lines, glowing bio-core, and interruptible data rings.
- **Mechanics:** Tiered Evolution, Evolution Interrupt
- **Geometry count:** 52
- **Triangles:** 2344
- **Vertices:** 7032
- **Visual bounds:** min `[-1.75, -0.535, -1.889]`, max `[1.75, 3.035, 1.814]`

**Engine hooks:**
- `interrupt_ring`: `data_forged_evolvarch_interruptible_data_ring`
- `code_lines_prefix`: `data_forged_evolvarch_streaming_code_line_`
- `wing_modules_prefix`: `data_forged_evolvarch_folded_wing_panel_`

**Suggested animation states:**
`guarded_quad_idle`, `data_ring_charge`, `evolution_interrupt`, `wing_unfold`, `biped_restructure`, `mega_phase_warning`

## The Ivory Behemoth

- **File:** `models/bosses/boss_08_ivory_behemoth.glb`
- **Category:** boss
- **Role:** Charging Giant / Positioning Test
- **Description:** Ancient pachyderm giant with cracked earth skin, multi-pronged tusks, pillar legs, heavy trunk, and attached parasitic swarm units.
- **Mechanics:** The Stampede, Parasitic Swarm
- **Geometry count:** 39
- **Triangles:** 2052
- **Vertices:** 6156
- **Visual bounds:** min `[-1.45, -0.06, -2.95]`, max `[1.45, 2.424, 2.135]`

**Engine hooks:**
- `primary_tusks_prefix`: `ivory_behemoth_primary_sweeping_tusk_`
- `parasites_prefix`: `ivory_behemoth_parasitic_swarm_tick_`
- `trunk`: `ivory_behemoth_heavy_trunk`

**Suggested animation states:**
`heavy_idle`, `stampede_charge`, `wall_crash_stun`, `parasite_shake`, `tusk_vault_window`, `stomp`

## The Astral Sovereign

- **File:** `models/bosses/boss_09_astral_sovereign.glb`
- **Category:** boss
- **Role:** Cosmic Lich / Gravity Manipulator
- **Description:** Skeletal ethereal cosmic lich with light-absorbing robes, orbital debris, meteor projectiles, cosmic shield rings, and dark space-dust particles.
- **Mechanics:** Zero-G Combos, Orbital Deflection
- **Geometry count:** 51
- **Triangles:** 3338
- **Vertices:** 10014
- **Visual bounds:** min `[-1.759, 0.75, -1.712]`, max `[1.647, 3.315, 1.638]`

**Engine hooks:**
- `cosmic_shield_A`: `astral_sovereign_cosmic_shield_orbit_A`
- `cosmic_shield_B`: `astral_sovereign_cosmic_shield_orbit_B`
- `debris_prefix`: `astral_sovereign_zero_g_orbital_debris_`

**Suggested animation states:**
`zero_g_idle`, `raise_meteors`, `orbital_deflection_opening`, `gravity_suspend`, `shield_crack`, `cosmic_disperse`
