const abilityRegistry = require('./abilities/registry');

function generateMonster(archetype, level) {
  // Base stats
  let baseHp = 100 * level;
  let baseDmg = 5 * level;
  
  // Random prefix/suffix for diversity
  const prefixes = ["Flame-Touched", "Venomous", "Frenzied", "Armored", "Cursed"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  
  const name = `${prefix} ${archetype}`;
  
  // Generate basic gear based on archetype
  const gear = [];
  if (archetype === "goblin") {
    gear.push({ slot: 'weapon', model: 'rusty_sword.glb', dmg: baseDmg });
    gear.push({ slot: 'armor', model: 'leather_scrap.glb', hp: 20 });
  } else if (archetype === "skeleton") {
    gear.push({ slot: 'weapon', model: 'bone_club.glb', dmg: baseDmg * 1.2 });
  } else {
    gear.push({ slot: 'weapon', model: 'claws.glb', dmg: baseDmg });
  }
  
  // Assign 1-2 random abilities
  const abilities = [];
  const abilityNames = Object.keys(abilityRegistry);
  const numAbilities = Math.floor(Math.random() * 2) + 1; // 1 or 2 abilities
  for (let i=0; i<numAbilities; i++) {
    const randomAbility = abilityNames[Math.floor(Math.random() * abilityNames.length)];
    if (!abilities.includes(randomAbility)) {
       abilities.push(randomAbility);
    }
  }
  
  // Attack chain (combo)
  const attackChains = [
    ['light', 'light', 'heavy'],
    ['heavy', 'light', 'heavy'],
    ['light', 'heavy']
  ];
  const attackChain = attackChains[Math.floor(Math.random() * attackChains.length)];
  
  return {
    name,
    level,
    hp: baseHp,
    maxHp: baseHp,
    gear,
    abilities,
    attackChain,
    comboIndex: 0
  };
}

module.exports = {
  generateMonster
};
