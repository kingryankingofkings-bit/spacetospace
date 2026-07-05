const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\scratch\\dawnforge_sky_wardens_epochalypse_postgame_pack\\dawnforge_sky_wardens_epochalypse_postgame_pack\\data';
const destDir = 'C:\\Users\\Kingr\\Documents\\antigravity\\noble-pasteur\\backend\\data';
const backendDir = 'C:\\Users\\Kingr\\Documents\\antigravity\\noble-pasteur\\backend';

// 1. Copy isolated JSON files
fs.copyFileSync(path.join(srcDir, 'postgame_quests.json'), path.join(destDir, 'postgame_quests.json'));
console.log('Copied postgame_quests.json');

fs.copyFileSync(path.join(srcDir, 'godly_rewards.json'), path.join(destDir, 'godly_rewards.json'));
console.log('Copied godly_rewards.json');

// 2. Append NPCs to npc_data.json
const roster = JSON.parse(fs.readFileSync(path.join(srcDir, 'sky_warden_npc_roster.json'), 'utf8'));
let gameNpcs = JSON.parse(fs.readFileSync(path.join(backendDir, 'npc_data.json'), 'utf8'));

// Format the roster into game NPCs
const newNpcs = roster.map(r => ({
  id: r.npc_id,
  name: r.name,
  role: r.sky_warden_role,
  archetype: 'mystic', // generic
  x: Math.floor(Math.random() * 20) - 10,
  y: 1,
  z: Math.floor(Math.random() * 20) - 10,
  hp: 99999,
  maxHp: 99999,
  baseDamage: 2000,
  state: 'idle',
  modelFile: r.model_file, // models/characters/SWN-001_mira_vale.glb
  zone: 'urban_core',
  specialAura: 'divine_frost',
  dialogue: [
    `I am ${r.name}, ${r.rank_title}.`,
    `My affinity is ${r.class_affinity}.`,
    r.notes
  ],
  dialogueTree: {
    start: {
      text: `Greetings. I am assigned to ${r.hq_assignment}. Stay out of trouble.`,
      choices: []
    }
  },
  level: 99,
  xpReward: 0
}));

// Filter out already added ones to avoid duplicates
const existingIds = new Set(gameNpcs.map(n => n.id));
const toAdd = newNpcs.filter(n => !existingIds.has(n.id));

gameNpcs.push(...toAdd);

fs.writeFileSync(path.join(backendDir, 'npc_data.json'), JSON.stringify(gameNpcs, null, 2), 'utf8');
console.log(`Appended ${toAdd.length} new NPCs to npc_data.json`);

// 3. Copy 3D assets to frontend
const figmaSrc = 'C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\scratch\\dawnforge_sky_wardens_epochalypse_postgame_pack\\dawnforge_sky_wardens_epochalypse_postgame_pack\\models';
const figmaDest = 'C:\\Users\\Kingr\\Documents\\antigravity\\noble-pasteur\\frontend\\public\\models';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursiveSync(path.join(figmaSrc, 'characters'), path.join(figmaDest, 'geographic_npcs', 'sky_wardens'));
console.log('Copied character models');

copyRecursiveSync(path.join(figmaSrc, 'skyships'), path.join(figmaDest, 'skyships'));
console.log('Copied skyship models');

copyRecursiveSync(path.join(figmaSrc, 'headquarters'), path.join(figmaDest, 'headquarters'));
console.log('Copied headquarters model');
