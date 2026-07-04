import * as fs from 'fs';
import { CLASSES } from './frontend/src/data/classConfig';

const OUT_PATH = './backend/abilities/generatedAbilities.js';

let output = `// AUTO-GENERATED FILE
const { register } = require('./registry');

module.exports = function initializeGeneratedAbilities(db, broadcast, npcs, players) {
`;

let count = 0;

for (const key of Object.keys(CLASSES)) {
  const classDef = CLASSES[key] as any;
  output += `\n  // ==========================================\n`;
  output += `  // Class: ${classDef.name}\n`;
  output += `  // ==========================================\n`;

  for (const tier of classDef.skillTree) {
    for (const skill of tier.skills) {
      if (!skill.type.includes('Active')) continue; // Skip Passives

      count++;
      const desc = skill.description.toLowerCase();
      
      let actionLogic = ``;

      // Keyword Heuristics
      if (desc.includes('teleport') || desc.includes('dash') || desc.includes('blink') || desc.includes('shift')) {
        actionLogic += `
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }`;
      }
      
      if (desc.includes('heal') || desc.includes('restore')) {
        actionLogic += `
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }`;
      }
      
      if (desc.includes('turret') || desc.includes('spawn') || desc.includes('construct') || desc.includes('create')) {
        actionLogic += `
      // Spawn logic
      if (attacker) {
        const objId = '${skill.id}_obj_' + Math.random().toString(36).substr(2, 9);
        const obj = {
          id: objId,
          type: 'spawned_object',
          x: x !== undefined ? x : (attacker.x || 0) + 2,
          y: y !== undefined ? y : (attacker.y || 0),
          z: z !== undefined ? z : (attacker.z || 0) + 2,
          owner: attacker.sessionId || attacker.id
        };
        db.saveObject(obj);
        broadcast({ type: "place_object", object: obj }, null, attacker.zone, obj.x, obj.z);
        
        // Auto-despawn after 10s
        setTimeout(() => {
          if (db.deleteObject) {
            db.deleteObject(objId);
          }
          broadcast({ type: "remove_object", objectId: objId }, null, attacker.zone, obj.x, obj.z);
        }, 10000);
      }`;
      }
      
      if (desc.includes('shield') || desc.includes('guard') || desc.includes('protect') || desc.includes('armor')) {
        actionLogic += `
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }`;
      }
      
      if (desc.includes('pull') || desc.includes('tether') || desc.includes('drag')) {
        actionLogic += `
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }`;
      }

      // Default Damage Fallback for Actives that don't match or even if they do (most actives do damage)
      if (desc.includes('damage') || desc.includes('strike') || desc.includes('attack') || desc.includes('hit') || actionLogic === '') {
        actionLogic += `
      // Damage logic
      if (attacker && target) {
        let isNpc = target.id && target.id.startsWith('npc_');
        let isBoss = target.isBoss || (target.id && target.id.startsWith('boss_'));
        let damage = 25;
        
        const { applyDamage, handleDeath } = require('../combatSystem');
        const { awardXP } = require('../progressionSystem');
        const { getBoss } = require('../bossController');
        const { generateLoot } = require('../lootSystem');
        const db = require('../db');
        
        const targetHp = applyDamage(target, damage, attacker.combo || 0, isNpc, isBoss);
        
        if (!isBoss) {
          if (targetHp <= 0) {
            handleDeath(target, isNpc);
            const xpRes = awardXP(attacker, target.modelFile, false, attacker.combo);
            if (xpRes.leveledUp) {
               broadcast({ type: "player_level_up", sessionId: attacker.sessionId || attacker.id, newLevel: xpRes.newLevel }, null, attacker.zone);
            }
            if (isNpc) {
              const droppedItemId = generateLoot(target.modelFile, false);
              if (droppedItemId) {
                const objId = "loot_" + Date.now() + "_" + Math.floor(Math.random()*1000);
                const obj = { id: objId, type: droppedItemId, x: target.x, y: target.y || 0, z: target.z };
                db.saveObject(obj).catch(e => console.error(e));
                broadcast({ type: "spawn_object", object: obj }, null, attacker.zone, target.x, target.z);
              }
            }
          }
          
          if (isNpc) {
            broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
          } else {
            broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
          }
          
          broadcast({ 
            type: "combat_update", 
            targetId: target.id || target.sessionId, 
            attackerId: attacker.sessionId || attacker.id, 
            targetHealth: targetHp, 
            attackerCombo: attacker.combo || 0 
          }, null, attacker.zone, attacker.x, attacker.z);
        } else {
          if (targetHp <= 0) {
            const actualBoss = getBoss(target.id);
            const bossType = actualBoss ? actualBoss.type : "unknown";
            const xpRes = awardXP(attacker, bossType, true, attacker.combo);
            if (xpRes.leveledUp) {
               broadcast({ type: "player_level_up", sessionId: attacker.sessionId || attacker.id, newLevel: xpRes.newLevel }, null, attacker.zone);
            }
            const droppedItemId = generateLoot(bossType, true);
            if (droppedItemId) {
              const objId = "loot_" + Date.now() + "_" + Math.floor(Math.random()*1000);
              const obj = { id: objId, type: droppedItemId, x: target.x, y: target.y || 0, z: target.z };
              db.saveObject(obj).catch(e => console.error(e));
              broadcast({ type: "spawn_object", object: obj }, null, attacker.zone, target.x, target.z);
            }
          }
        }
        
        // Visual effect
        broadcast({ type: "effect", effectType: "damage", targetId: target.id || target.sessionId }, null, attacker.zone, target.x, target.z);
      }`;
      }

      output += `
  // ${skill.name} (Level ${skill.level})
  register('${skill.id}', (context) => {
    const { attacker, target, x, y, z } = context;${actionLogic}
  });
`;
    }
  }
}

output += `\n};\n`;

fs.writeFileSync(OUT_PATH, output);
console.log('Successfully generated ' + count + ' active abilities to ' + OUT_PATH);
