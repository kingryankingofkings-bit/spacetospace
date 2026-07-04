const COMPANION_DB = {
  // Early Game
  'kael_the_cadet': {
    id: 'kael_the_cadet',
    name: 'Kael the Cadet',
    level: 4,
    location: 'The Shut-Down Academies',
    quest: 'Lethal Overdrive',
    className: 'The Phantom-Shift',
    subclass: 'The Chrono-Blade',
    gear: ['Standard-Issue Tactician\'s Uniform', 'Stutter-Blade']
  },
  'riff_the_ascetic': {
    id: 'riff_the_ascetic',
    name: 'Riff the Ascetic',
    level: 6,
    location: 'The Sonic Badlands',
    quest: 'Tuning the Wastes',
    className: 'The Resonant',
    subclass: 'The Sub-Bass Architect',
    gear: ['Acoustic Dampeners', 'Tuning-Fork Staff']
  },
  'silas_the_houndmaster': {
    id: 'silas_the_houndmaster',
    name: 'Silas the Houndmaster',
    level: 8,
    location: 'The Heavy-Chewer Canyons',
    quest: 'Alpha Pack',
    className: 'The Packmaster',
    subclass: 'The Alpha-Handler',
    gear: ['Beast-Tamer Leathers', 'Reinforced Synthetic Gauntlets']
  },
  'spark_the_hacker': {
    id: 'spark_the_hacker',
    name: 'Spark the Hacker',
    level: 10,
    location: 'The Subterranean Grid',
    quest: 'Train Dodge',
    className: 'The Scrap-Tek',
    subclass: 'The Field-Mechanic',
    gear: ['Neon-Lit Jacket', 'Scavenged Junkyard Turret Kit']
  },

  // Early-Mid Game
  'brunt_the_bastion': {
    id: 'brunt_the_bastion',
    name: 'Brunt the Bastion',
    level: 12,
    location: 'The Raid-Rush Choke Points',
    quest: 'Hold the Line',
    className: 'The Kinetic Juggernaut',
    subclass: 'The Inertia Bastion',
    gear: ['Heavy Barricade Shield', 'Riot-Gear Chestplate']
  },
  'kaelia_of_the_roots': {
    id: 'kaelia_of_the_roots',
    name: 'Kaelia of the Roots',
    level: 14,
    location: 'The Emerald Canopy Sanctuary',
    quest: 'Tethered Beasts',
    className: 'The Sylvan Warden',
    subclass: 'The Root-Binder',
    gear: ['Iron-Bark Chestpiece', 'Thorny Vine-Whip']
  },
  'tidespeaker_nami': {
    id: 'tidespeaker_nami',
    name: 'Tidespeaker Nami',
    level: 16,
    location: 'The Flooded Archipelago',
    quest: 'Tidal Anomalies',
    className: 'The Flux-Caster',
    subclass: 'The Storm-Caller',
    gear: ['Tropical Wraps', 'Coral-Tipped Staff']
  },
  'vex_the_scavenger': {
    id: 'vex_the_scavenger',
    name: 'Vex the Scavenger',
    level: 18,
    location: 'The Scrap-Yard Labyrinth',
    quest: 'Magnetic Anomaly',
    className: 'The Scrap-Tek',
    subclass: 'The Scavenger',
    gear: ['Hydraulic Gauntlets', 'Tether Whip']
  },

  // Mid-Late Game
  'flora_the_druid': {
    id: 'flora_the_druid',
    name: 'Flora the Druid',
    level: 21,
    location: 'The Whispering Glade',
    quest: 'Bioluminescent Path',
    className: 'The Sylvan Warden',
    subclass: 'The Verdant Weaver',
    gear: ['Twilight Cloak', 'Spore-Sack']
  },
  'jace_the_glitch': {
    id: 'jace_the_glitch',
    name: 'Jace "The Glitch"',
    level: 23,
    location: 'The Private Quarantine',
    quest: 'Corrupted Records',
    className: 'The Protocol Weaver',
    subclass: 'The Anomaly',
    gear: ['Sterilized Hazard Suit', 'Syntax-Blade']
  },
  'dr_aris_the_architect': {
    id: 'dr_aris_the_architect',
    name: 'Dr. Aris the Architect',
    level: 25,
    location: 'The Deprecated Repositories',
    quest: 'Version Control',
    className: 'The Protocol Weaver',
    subclass: 'The Evolutionary Coder',
    gear: ['Hard-Light Bracers', 'Code-Stream Visor']
  },
  'cipher_the_deviant': {
    id: 'cipher_the_deviant',
    name: 'Cipher the Deviant',
    level: 26,
    location: 'The Central Processing Vault',
    quest: 'Data Extraction',
    className: 'The Apex Mutator',
    subclass: 'The Data-Code Deviant',
    gear: ['Digitize-Weave Suit', 'Cyber-Claws']
  },
  'ignis_the_burner': {
    id: 'ignis_the_burner',
    name: 'Ignis the Burner',
    level: 28,
    location: 'The Burning Playa',
    quest: 'Fire-Spout Rhythm',
    className: 'The Flux-Caster',
    subclass: 'The Elemental Weaver',
    gear: ['Sun-Baked Robes', 'Ash-Wand']
  },
  'beastmaster_thorne': {
    id: 'beastmaster_thorne',
    name: 'Beastmaster Thorne',
    level: 30,
    location: 'The Digital Savanna',
    quest: 'Rhythmic Evolution',
    className: 'The Packmaster',
    subclass: 'The Hound-Rider',
    gear: ['Grid-Camo Gear', 'Heavy Crossbow']
  },

  // Late Game Elites
  'boomer_dax': {
    id: 'boomer_dax',
    name: '"Boomer" Dax',
    level: 32,
    location: 'The Molten Forge',
    quest: 'Thermal Updraft',
    className: 'The Kinetic Juggernaut',
    subclass: 'The Seismic Brawler',
    gear: ['Heat-Resistant Plating', 'Crater Mallet']
  },
  'echo_the_weaver': {
    id: 'echo_the_weaver',
    name: 'Echo the Weaver',
    level: 34,
    location: 'The Alternating Archives',
    quest: 'Flipping Physics',
    className: 'The Resonant',
    subclass: 'The Tempo-Weaver',
    gear: ['Archivist\'s Spectacles', 'Resonance Amplifier']
  },
  'red_pen_quinn': {
    id: 'red_pen_quinn',
    name: '"Red-Pen" Quinn',
    level: 35,
    location: 'The Revision Labs',
    quest: 'Avoid the Lasers',
    className: 'The Protocol Weaver',
    subclass: 'The Front-Matter Architect',
    gear: ['Geometric Processing Suit', 'Hard-Light Blade']
  },
  'lyra_the_void_touched': {
    id: 'lyra_the_void_touched',
    name: 'Lyra the Void-Touched',
    level: 37,
    location: 'The Lich\'s Court',
    quest: 'Shattered Stained Glass',
    className: 'The Phantom-Shift',
    subclass: 'The Void-Walker',
    gear: ['Ethereal Cloak', 'Phase-Shift Dagger']
  },
  'zephyr_the_pilot': {
    id: 'zephyr_the_pilot',
    name: 'Zephyr the Pilot',
    level: 39,
    location: 'The Orbital Tether Station',
    quest: 'Zero-G Retrieval',
    className: 'The Orbital Striker',
    subclass: 'The Zero-G Brawler',
    gear: ['Exosphere Flight Suit', 'Gravity-Nullifying Thrusters']
  },
  'orion_the_vanguard': {
    id: 'orion_the_vanguard',
    name: 'Orion the Vanguard',
    level: 40,
    location: 'The Lunar Readiness Base',
    quest: 'Crater Launch',
    className: 'The Orbital Striker',
    subclass: 'The Orbital Bombardment',
    gear: ['Heavy Space-Marine Suit', 'Laser Designator']
  }
};

function getCompanionByQuest(questName) {
  for (const key of Object.keys(COMPANION_DB)) {
    if (COMPANION_DB[key].quest.toLowerCase() === questName.toLowerCase()) {
      return COMPANION_DB[key];
    }
  }
  return null;
}

function getCompanion(id) {
  return COMPANION_DB[id];
}

module.exports = {
  COMPANION_DB,
  getCompanionByQuest,
  getCompanion
};
