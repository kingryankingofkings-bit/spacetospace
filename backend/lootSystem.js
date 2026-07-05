const ITEM_DB = {
  // --- Early Game (Levels 1-10) ---
  // The Grid-Rushers
  'glowing_fluid': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'rusted_gear': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'rush_stim': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'intact_automaton_core': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'grid_runner_greaves': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'flawless_rush_matrix': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Gnarl-Maws
  'thick_hide': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'bone_fragment': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'minor_health_vial': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'intact_gnarl_tooth': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'gnarl_tooth_dagger': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'flawless_leathery_carapace': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Scrap-Phalanx
  'scrap_metal': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'deflective_plating': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'repair_kit': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'phalanx_visor': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'phalanx_riot_shield': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'pristine_phalanx_core': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Siphon-Ticks
  'tick_abdomen': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'energy_siphon_gland': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'combo_meter_stim': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'tick_silk_spool': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'siphon_silk_gloves': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'perfect_siphon_core': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // --- Mid Game (Levels 11-25) ---
  // The Aegis Carapace
  'chitinous_shell': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'aegis_thorax': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'stagger_ointment': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'aegis_mandible': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'carapace_chestplate': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'immovable_chitin_plate': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Iron-Jaw Hound
  'hound_muscle_fiber': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'reinforced_jawbone': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'adrenaline_gland': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'intact_hound_skull': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'iron_jaw_gauntlets': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'alpha_hound_mutagen': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Venom-Spitter
  'acid_sac': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'spitter_fang': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'antidote_flask': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'concentrated_venom_gland': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'venom_coated_whip': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'flawless_venom_sac': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Tremor-Fiend
  'resonant_throat_sac': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'subterranean_scales': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'seismic_charge': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'tremor_vocal_cord': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'tremor_mallet': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'bass_drop_boots': { maxStack: 1, weight: 5.0, type: 'Armor' },

  // --- Late Game Elites (Levels 26-40) ---
  // The Nexus Swarmers
  'crystalline_shard': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'glowing_dust': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'minor_energy_vial': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'nexus_core_fragment': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'swarmer_drone': { maxStack: 1, weight: 5.0, type: 'Accessory' },
  'perfect_nexus_crystal': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Scrap-Stalker
  'hydraulic_piston': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'augmented_cpu': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'overclock_stim': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'stalker_optical_sensor': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'prosthetic_stalker_blade': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'flawless_stalker_cpu': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Sylvan Juggernaut
  'iron_bark': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'glowing_moss': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'regeneration_sap': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'juggernaut_heartwood': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'juggernaut_pauldrons': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'seed_of_the_juggernaut': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Void Anomaly
  'void_dust': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'glitching_silhouette': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'reality_tear_scroll': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'anomaly_core': { maxStack: 99, weight: 0.1, type: 'Rare Material' },
  'phase_shift_dagger': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'flawless_void_matrix': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // --- Boss Milestones ---
  // The Ivory Behemoth
  'shattered_ivory': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'behemoth_tusk': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'parasitic_swarm_vial': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'cracked_earth_hammer': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'ivory_chestguard': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'flawless_ivory_heart': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Resonant Behemoth
  'crushed_crystal': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'crystalline_spine': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'resonance_amplifier': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'sub_bass_gauntlets': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'tremor_plated_greaves': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'resonant_core': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Resonance Maestro
  'shattered_tuning_fork': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'sonic_sphere_core': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'tempo_shift_elixir': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'maestros_tuning_fork': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'festival_armor_mantle': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'flawless_maestro_baton': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Apex Chimera
  'synthetic_muscle_fiber': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'chimera_integration_port': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'evolutionary_mutagen': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'biomechanical_claws': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'apex_predator_cowl': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'apex_mutagen_core': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Null Anomaly
  'corrupted_code_fragment': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'fragmented_digital_core': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'gravity_inverter': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'glitching_phase_blade': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'void_energy_bracers': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'null_singularity': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Ascendant Colossus
  'primeval_rubble': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'primeval_stone_core': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'elemental_surge_potion': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'ascendant_energy_bow': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'colossus_plate_helm': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'ascendant_spark': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Data-Forged Evolvarch
  'raw_data_stream': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'glowing_code_matrix': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'evolution_lock_drive': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'data_forged_greatsword': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'evolvarchs_wings': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'perfect_evolution_matrix': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Syndicate Lich
  'necrotic_ash': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'dark_swirling_magic_dust': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'combo_shield_generator': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'syndicate_commander_staff': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'lichs_regal_robes': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'syndicate_phylactery': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // The Astral Sovereign
  'stardust_residue': { maxStack: 99, weight: 0.1, type: 'Common Material' },
  'zero_g_thruster_core': { maxStack: 99, weight: 0.1, type: 'Uncommon Material' },
  'supernova_elixir': { maxStack: 20, weight: 0.5, type: 'Consumable' },
  'astral_sovereign_scythe': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'cosmic_lich_crown': { maxStack: 1, weight: 5.0, type: 'Armor' },
  'sovereigns_astral_soul': { maxStack: 99, weight: 0.1, type: 'Legendary Material' },

  // Fallbacks / Legacy
  'unknown': { maxStack: 1, weight: 1.0, type: 'Misc' },
  'potion_health': { maxStack: 99, weight: 0.5, type: 'Consumable' },
  'potion_mana': { maxStack: 99, weight: 0.5, type: 'Consumable' },
  'sword_iron': { maxStack: 1, weight: 5.0, type: 'Weapon' },
  'coin_gold': { maxStack: 9999, weight: 0.01, type: 'Currency' }
};

const DROP_TABLES = {
  // Early Game
  'grid_rusher': [
    { item: 'glowing_fluid', chance: 55.0 },
    { item: 'rusted_gear', chance: 25.0 },
    { item: 'rush_stim', chance: 12.0 },
    { item: 'intact_automaton_core', chance: 5.0 },
    { item: 'grid_runner_greaves', chance: 2.5 },
    { item: 'flawless_rush_matrix', chance: 0.5 }
  ],
  'gnarl_maw': [
    { item: 'thick_hide', chance: 50.0 },
    { item: 'bone_fragment', chance: 30.0 },
    { item: 'minor_health_vial', chance: 12.0 },
    { item: 'intact_gnarl_tooth', chance: 5.0 },
    { item: 'gnarl_tooth_dagger', chance: 2.5 },
    { item: 'flawless_leathery_carapace', chance: 0.5 }
  ],
  'scrap_phalanx': [
    { item: 'scrap_metal', chance: 55.0 },
    { item: 'deflective_plating', chance: 25.0 },
    { item: 'repair_kit', chance: 12.0 },
    { item: 'phalanx_visor', chance: 5.0 },
    { item: 'phalanx_riot_shield', chance: 2.5 },
    { item: 'pristine_phalanx_core', chance: 0.5 }
  ],
  'siphon_tick': [
    { item: 'tick_abdomen', chance: 60.0 },
    { item: 'energy_siphon_gland', chance: 25.0 },
    { item: 'combo_meter_stim', chance: 10.0 },
    { item: 'tick_silk_spool', chance: 3.5 },
    { item: 'siphon_silk_gloves', chance: 1.0 },
    { item: 'perfect_siphon_core', chance: 0.5 }
  ],
  
  // Mid Game
  'aegis_carapace': [
    { item: 'chitinous_shell', chance: 50.0 },
    { item: 'aegis_thorax', chance: 28.0 },
    { item: 'stagger_ointment', chance: 15.0 },
    { item: 'aegis_mandible', chance: 4.5 },
    { item: 'carapace_chestplate', chance: 2.0 },
    { item: 'immovable_chitin_plate', chance: 0.5 }
  ],
  'iron_jaw_hound': [
    { item: 'hound_muscle_fiber', chance: 55.0 },
    { item: 'reinforced_jawbone', chance: 25.0 },
    { item: 'adrenaline_gland', chance: 12.0 },
    { item: 'intact_hound_skull', chance: 5.0 },
    { item: 'iron_jaw_gauntlets', chance: 2.5 },
    { item: 'alpha_hound_mutagen', chance: 0.5 }
  ],
  'venom_spitter': [
    { item: 'acid_sac', chance: 55.0 },
    { item: 'spitter_fang', chance: 25.0 },
    { item: 'antidote_flask', chance: 12.0 },
    { item: 'concentrated_venom_gland', chance: 5.0 },
    { item: 'venom_coated_whip', chance: 2.5 },
    { item: 'flawless_venom_sac', chance: 0.5 }
  ],
  'tremor_fiend': [
    { item: 'resonant_throat_sac', chance: 50.0 },
    { item: 'subterranean_scales', chance: 25.0 },
    { item: 'seismic_charge', chance: 15.0 },
    { item: 'tremor_vocal_cord', chance: 7.5 },
    { item: 'tremor_mallet', chance: 2.0 },
    { item: 'bass_drop_boots', chance: 0.5 }
  ],
  
  // Late Game
  'nexus_swarmer': [
    { item: 'crystalline_shard', chance: 60.0 },
    { item: 'glowing_dust', chance: 25.0 },
    { item: 'minor_energy_vial', chance: 10.0 },
    { item: 'nexus_core_fragment', chance: 4.0 },
    { item: 'swarmer_drone', chance: 0.9 },
    { item: 'perfect_nexus_crystal', chance: 0.1 }
  ],
  'scrap_stalker': [
    { item: 'hydraulic_piston', chance: 50.0 },
    { item: 'augmented_cpu', chance: 25.0 },
    { item: 'overclock_stim', chance: 12.0 },
    { item: 'stalker_optical_sensor', chance: 7.0 },
    { item: 'prosthetic_stalker_blade', chance: 5.0 },
    { item: 'flawless_stalker_cpu', chance: 1.0 }
  ],
  'sylvan_juggernaut': [
    { item: 'iron_bark', chance: 45.0 },
    { item: 'glowing_moss', chance: 30.0 },
    { item: 'regeneration_sap', chance: 15.0 },
    { item: 'juggernaut_heartwood', chance: 7.0 },
    { item: 'juggernaut_pauldrons', chance: 2.9 },
    { item: 'seed_of_the_juggernaut', chance: 0.1 }
  ],
  'void_anomaly': [
    { item: 'void_dust', chance: 50.0 },
    { item: 'glitching_silhouette', chance: 30.0 },
    { item: 'reality_tear_scroll', chance: 12.0 },
    { item: 'anomaly_core', chance: 5.0 },
    { item: 'phase_shift_dagger', chance: 2.9 },
    { item: 'flawless_void_matrix', chance: 0.1 }
  ],
  
  // Bosses
  'ivory_behemoth': [
    { item: 'shattered_ivory', chance: 40.0 },
    { item: 'behemoth_tusk', chance: 30.0 },
    { item: 'parasitic_swarm_vial', chance: 15.0 },
    { item: 'cracked_earth_hammer', chance: 8.0 },
    { item: 'ivory_chestguard', chance: 6.5 },
    { item: 'flawless_ivory_heart', chance: 0.5 }
  ],
  'resonant_behemoth': [
    { item: 'crushed_crystal', chance: 40.0 },
    { item: 'crystalline_spine', chance: 30.0 },
    { item: 'resonance_amplifier', chance: 15.0 },
    { item: 'sub_bass_gauntlets', chance: 8.0 },
    { item: 'tremor_plated_greaves', chance: 6.5 },
    { item: 'resonant_core', chance: 0.5 }
  ],
  'resonance_maestro': [
    { item: 'shattered_tuning_fork', chance: 45.0 },
    { item: 'sonic_sphere_core', chance: 25.0 },
    { item: 'tempo_shift_elixir', chance: 15.0 },
    { item: 'maestros_tuning_fork', chance: 9.0 },
    { item: 'festival_armor_mantle', chance: 5.0 },
    { item: 'flawless_maestro_baton', chance: 1.0 }
  ],
  'apex_chimera': [
    { item: 'synthetic_muscle_fiber', chance: 45.0 },
    { item: 'chimera_integration_port', chance: 25.0 },
    { item: 'evolutionary_mutagen', chance: 15.0 },
    { item: 'biomechanical_claws', chance: 9.0 },
    { item: 'apex_predator_cowl', chance: 5.0 },
    { item: 'apex_mutagen_core', chance: 1.0 }
  ],
  'null_anomaly': [
    { item: 'corrupted_code_fragment', chance: 45.0 },
    { item: 'fragmented_digital_core', chance: 25.0 },
    { item: 'gravity_inverter', chance: 15.0 },
    { item: 'glitching_phase_blade', chance: 9.0 },
    { item: 'void_energy_bracers', chance: 5.0 },
    { item: 'null_singularity', chance: 1.0 }
  ],
  'ascendant_colossus': [
    { item: 'primeval_rubble', chance: 45.0 },
    { item: 'primeval_stone_core', chance: 25.0 },
    { item: 'elemental_surge_potion', chance: 15.0 },
    { item: 'ascendant_energy_bow', chance: 9.0 },
    { item: 'colossus_plate_helm', chance: 5.0 },
    { item: 'ascendant_spark', chance: 1.0 }
  ],
  'data_forged_evolvarch': [
    { item: 'raw_data_stream', chance: 45.0 },
    { item: 'glowing_code_matrix', chance: 25.0 },
    { item: 'evolution_lock_drive', chance: 15.0 },
    { item: 'data_forged_greatsword', chance: 9.0 },
    { item: 'evolvarchs_wings', chance: 5.5 },
    { item: 'perfect_evolution_matrix', chance: 0.5 }
  ],
  'syndicate_lich': [
    { item: 'necrotic_ash', chance: 45.0 },
    { item: 'dark_swirling_magic_dust', chance: 25.0 },
    { item: 'combo_shield_generator', chance: 15.0 },
    { item: 'syndicate_commander_staff', chance: 9.0 },
    { item: 'lichs_regal_robes', chance: 5.5 },
    { item: 'syndicate_phylactery', chance: 0.5 }
  ],
  'astral_sovereign': [
    { item: 'stardust_residue', chance: 50.0 },
    { item: 'zero_g_thruster_core', chance: 25.0 },
    { item: 'supernova_elixir', chance: 15.0 },
    { item: 'astral_sovereign_scythe', chance: 5.0 },
    { item: 'cosmic_lich_crown', chance: 4.95 },
    { item: 'sovereigns_astral_soul', chance: 0.05 }
  ]
};

function getItemDef(itemId) {
  return ITEM_DB[itemId] || ITEM_DB['unknown'];
}

/**
 * Normalizes enemy identifier and rolls against the drop table.
 * Returns the itemId of the dropped item, or null if no drop table matches.
 */
function generateLoot(identifier, isBoss) {
  if (!identifier) return null;
  
  const searchStr = identifier.toLowerCase().replace(/[-_ ]/g, "");
  
  let targetTableKey = null;
  
  for (const key of Object.keys(DROP_TABLES)) {
    const cleanedKey = key.replace(/_/g, "");
    if (searchStr.includes(cleanedKey)) {
      targetTableKey = key;
      break;
    }
  }
  
  if (!targetTableKey) return null;
  
  const table = DROP_TABLES[targetTableKey];
  const roll = Math.random() * 100;
  
  let cumulative = 0;
  for (const drop of table) {
    cumulative += drop.chance;
    if (roll <= cumulative) {
      return drop.item;
    }
  }
  
  return null;
}

const fs = require('fs');
const path = require('path');

try {
  const specialLootPath = path.join(__dirname, 'data', 'special_event_loot_table.json');
  if (fs.existsSync(specialLootPath)) {
    const specialLoot = JSON.parse(fs.readFileSync(specialLootPath, 'utf8'));
    for (const event of specialLoot) {
      if (!event.loot_item || !event.event_id) continue;
      
      const itemId = event.loot_item.toLowerCase().replace(/[^a-z0-9]/g, '_');
      
      if (!ITEM_DB[itemId]) {
        ITEM_DB[itemId] = {
          maxStack: 1,
          weight: 5.0,
          type: event.loot_tier || 'Special',
          power: event.item_power,
          perk: event.unique_perk
        };
      }
      
      const eventKey = event.event_id.toLowerCase().replace(/[^a-z0-9]/g, '');
      DROP_TABLES[eventKey] = [
        { item: itemId, chance: event.drop_chance_percent || 20.0 }
      ];
    }
  }
} catch (err) {
  console.error("Failed to load special event loot:", err);
}

try {
  const fullCatalogPath = path.join(__dirname, 'data', 'full_item_catalog.json');
  if (fs.existsSync(fullCatalogPath)) {
    const fullCatalog = JSON.parse(fs.readFileSync(fullCatalogPath, 'utf8'));
    for (const item of fullCatalog) {
      if (!item.item_id) continue;
      ITEM_DB[item.item_id] = {
        maxStack: item.item_category === 'Consumable' || item.item_category === 'Material' ? 99 : 1,
        weight: item.armor_weight_class === 'Heavy' ? 10.0 : (item.armor_weight_class === 'Medium' ? 7.0 : 5.0),
        type: item.item_category || 'Misc',
        power: item.item_power || 1,
        name: item.item_name,
        rarity: item.rarity,
        requiredLevel: item.required_level
      };
    }
    console.log(`Loaded ${fullCatalog.length} items from full_item_catalog.json`);
  }
  
  const godlyCatalogPath = path.join(__dirname, 'data', 'godly_level_40_uniques.json');
  if (fs.existsSync(godlyCatalogPath)) {
    const godlyCatalog = JSON.parse(fs.readFileSync(godlyCatalogPath, 'utf8'));
    for (const item of godlyCatalog) {
      if (!item.item_id) continue;
      ITEM_DB[item.item_id] = {
        maxStack: 1,
        weight: item.armor_weight_class === 'Heavy' ? 10.0 : 5.0,
        type: item.item_category || 'Misc',
        power: item.item_power || 100,
        name: item.item_name,
        rarity: item.rarity,
        requiredLevel: item.required_level,
        godlySet: item.godly_set
      };
    }
    console.log(`Loaded ${godlyCatalog.length} items from godly_level_40_uniques.json`);
  }
} catch (err) {
  console.error("Failed to load expanded item catalogs:", err);
}

module.exports = {
  ITEM_DB,
  getItemDef,
  generateLoot
};
