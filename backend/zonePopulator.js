const { generateMonster } = require('./monsterGenerator');

// List of available 2D hero portraits to use as NPC skins
const npcPortraits = [
  "hero_androgynous_1783304800858.png",
  "hero_feminine_1783304794125.png",
  "hero_masculine_1783304787475.png",
  "class_protocol_weaver_1783304823328.png",
  "class_apex_mutator_1783304831954.png",
  "class_the_resonant_1783304839616.png",
  "class_packmaster_1783304846806.png",
  "class_orbital_striker_1783304854227.png",
  "class_scrap_tek_1783304868744.png",
  "class_kinetic_juggernaut_1783304876331.png",
  "class_phantom_shift_1783304885370.png",
  "class_sylvan_warden_1783304898302.png",
  "class_flux_caster_1783304906670.png",
  "origin_meridian_gate_1783304920955.png",
  "origin_elderbloom_1783304928172.png",
  "origin_cindervale_1783304935452.png",
  "origin_glass_desert_1783304943670.png",
  "origin_pelagos_1783304950491.png",
  "origin_lunarch_1783304957992.png",
  "origin_black_meridian_1783304971229.png",
  "origin_first_dream_1783304978523.png",
  "origin_syndicate_dominions_1783304986453.png",
  "origin_scrap_yard_1783304993734.png",
  "origin_orbital_1783305003010.png",
  "origin_dawnforge_1783305010857.png"
];

const names = ["Aria", "Balthazar", "Caelum", "Dax", "Elara", "Fenrir", "Gael", "Hera", "Ignis", "Juno", "Kael", "Lyra", "Mira", "Nova", "Orion", "Pax", "Quinn", "Rael", "Sora", "Tara", "Uriel", "Vex", "Wren", "Xael", "Yara", "Zephyr"];

const zoneConfig = {
  "urban_core": { type: "NPC" },
  "meridian_gate": { type: "NPC" },
  "cindervale": { type: "Monster", archetype: "goblin", level: 5 },
  "glass_desert": { type: "Monster", archetype: "skeleton", level: 15 },
  "elderbloom": { type: "Monster", archetype: "beast", level: 10 },
  "pelagos": { type: "NPC" },
  "scrap_yard": { type: "Monster", archetype: "mech", level: 25 },
  "orbital": { type: "Monster", archetype: "alien", level: 30 }
};

function generateNPC(zone, index, cx, cz) {
  const name = names[Math.floor(Math.random() * names.length)] + " " + names[Math.floor(Math.random() * names.length)];
  const portrait = npcPortraits[Math.floor(Math.random() * npcPortraits.length)];
  
  // Scatter around the center point
  const angle = Math.random() * Math.PI * 2;
  const radius = 20 + Math.random() * 80; // 20 to 100 units away
  const x = cx + Math.cos(angle) * radius;
  const z = cz + Math.sin(angle) * radius;

  return {
    id: `npc_${zone}_${index}_${Date.now()}`,
    name: name,
    zone: zone,
    x: x,
    y: 0,
    z: z,
    type: "NPC",
    behavior: "wander",
    appearance: {
      portraitUrl: `/images/character_creator/${portrait}`
    },
    quests: [] // Could assign random quests here
  };
}

function populateZone(zone, cx, cz, currentEntities, maxEntities = 20) {
  const config = zoneConfig[zone] || { type: "Monster", archetype: "goblin", level: 1 };
  
  const entitiesToSpawn = maxEntities - currentEntities;
  if (entitiesToSpawn <= 0) return [];

  const newEntities = [];
  for (let i = 0; i < entitiesToSpawn; i++) {
    if (config.type === "NPC") {
      newEntities.push(generateNPC(zone, i, cx, cz));
    } else {
      // Monster
      const baseMonster = generateMonster(config.archetype, config.level);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = 20 + Math.random() * 80;
      const x = cx + Math.cos(angle) * radius;
      const z = cz + Math.sin(angle) * radius;

      // Assign a color tint based on the level or archetype for basic AAA styling
      const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00", "#00ffff"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      newEntities.push({
        id: `monster_${zone}_${i}_${Date.now()}`,
        ...baseMonster, // name, hp, maxHp, gear, level, etc.
        zone: zone,
        x: x,
        y: 0,
        z: z,
        type: "Monster", // the engine expects "enemy" usually, let's check index.js
        behavior: "aggro",
        appearance: {
          color: color // Will be used to tint spark.glb if portrait not present
        },
        respawnTime: 60000,
        dead: false
      });
    }
  }

  return newEntities;
}

module.exports = {
  populateZone,
  zoneConfig
};
