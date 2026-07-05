const fs = require('fs');
const path = require('path');
const scalingManager = require('./scalingManager');

const npcPath = path.join(__dirname, 'npc_data.json');
const npcs = JSON.parse(fs.readFileSync(npcPath, 'utf8'));

// Geographical zone levels
const zoneLevels = {
  'urban_core': [1, 5],
  'central_pillar': [1, 10],
  'neon_district': [5, 12],
  'undercity': [10, 18],
  'rust_wastes': [15, 25],
  'abandoned_sector': [20, 30],
  'void_breach': [28, 35],
  'ascendant_peak': [35, 40]
};

let updatedCount = 0;

npcs.forEach(npc => {
  const range = zoneLevels[npc.zone] || [1, 40]; // Fallback if zone not found
  const minLevel = range[0];
  const maxLevel = range[1];
  
  // Assign random level within zone bracket
  npc.level = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;

  // Assign scaled HP and Damage using scalingManager
  const stats = scalingManager.getEnemyBaseStats(npc.level, npc.role);
  
  npc.maxHp = stats.hp;
  npc.hp = stats.hp;
  npc.baseDamage = stats.damage; // Store this for combatSystem use
  npc.xpReward = stats.xpReward; // Store this for index.js use
  
  updatedCount++;
});

fs.writeFileSync(npcPath, JSON.stringify(npcs, null, 2), 'utf8');
console.log(`Successfully assigned scaled levels and stats to ${updatedCount} NPCs.`);
