/**
 * ecologySystem.js
 * Implements a dynamic respawn system for a living world.
 */

const { generateMonster } = require('./monsterGenerator');

let initialWorldObjects = [];

/**
 * Initializes the ecology system with the base layout.
 */
function init(objects) {
  initialWorldObjects = JSON.parse(JSON.stringify(objects));
}

/**
 * Checks for missing entities and schedules respawns.
 * Returns an array of objects/NPCs that should be respawned.
 */
function tickRespawn(currentNpcs) {
  const respawns = [];
  
  // Example logic: if a standard enemy from initialWorldObjects is missing, 
  // there's a 20% chance per tick to respawn it.
  for (const initialObj of initialWorldObjects) {
    if (initialObj.type === "enemy" && !initialObj.isBoss) {
      const exists = currentNpcs.find(n => n.id === initialObj.id);
      if (!exists) {
        if (Math.random() < 0.20) {
          // Time to respawn!
          const level = initialObj.level || 1;
          const archetype = initialObj.archetype || "goblin";
          const generatedData = generateMonster(archetype, level);
          
          respawns.push({
             ...initialObj,
             name: generatedData.name,
             health: generatedData.hp,
             maxHealth: generatedData.maxHp,
             gear: generatedData.gear,
             abilities: generatedData.abilities,
             attackChain: generatedData.attackChain,
             comboIndex: generatedData.comboIndex,
             state: 'IDLE'
          });
        }
      }
    }
  }
  
  return respawns;
}

module.exports = {
  init,
  tickRespawn
};
