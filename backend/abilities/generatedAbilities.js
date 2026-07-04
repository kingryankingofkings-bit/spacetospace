// AUTO-GENERATED FILE
const { register } = require('./registry');

module.exports = function initializeGeneratedAbilities(db, broadcast, npcs, players) {

  // ==========================================
  // Class: The Protocol Weaver
  // ==========================================

  // Syntax Strike (Level 1)
  register('the_protocol_weaver_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vaulting Lexicon (Level 4)
  register('the_protocol_weaver_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Structural Rewrite (Level 5)
  register('the_protocol_weaver_skill_5', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Parry Protocol (Level 7)
  register('the_protocol_weaver_skill_7', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Aerial Extraction (Level 9)
  register('the_protocol_weaver_skill_9', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Red Pen (Level 10)
  register('the_protocol_weaver_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Ground-Swell (Level 13)
  register('the_protocol_weaver_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Phonetic Resonance (Level 15)
  register('the_protocol_weaver_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Grapple Syntax (Level 17)
  register('the_protocol_weaver_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Draft Deletion (Level 20)
  register('the_protocol_weaver_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Frame-Trap (Level 24)
  register('the_protocol_weaver_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual Rewrite (Level 28)
  register('the_protocol_weaver_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // System Override (Level 30)
  register('the_protocol_weaver_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - EPI-Omniscience (Level 40)
  register('the_protocol_weaver_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // ==========================================
  // Class: The Apex Mutator
  // ==========================================

  // Data-Rend (Level 1)
  register('the_apex_mutator_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Feral Glide (Level 3)
  register('the_apex_mutator_skill_3', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // DNA Siphon (Level 5)
  register('the_apex_mutator_skill_5', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Reactive Carapace (Level 7)
  register('the_apex_mutator_skill_7', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Launch Pad (Level 9)
  register('the_apex_mutator_skill_9', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Beta-Sweep (Level 11)
  register('the_apex_mutator_skill_11', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Aerial Pounce (Level 13)
  register('the_apex_mutator_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Assimilation Roar (Level 15)
  register('the_apex_mutator_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vaulting Mutation (Level 17)
  register('the_apex_mutator_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Omega Cleave (Level 21)
  register('the_apex_mutator_skill_21', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap (Level 24)
  register('the_apex_mutator_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual Siphon (Level 28)
  register('the_apex_mutator_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // The Anomaly Virus (Level 30)
  register('the_apex_mutator_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - Apex Ascendancy (Level 40)
  register('the_apex_mutator_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // ==========================================
  // Class: The Resonant
  // ==========================================

  // Metric Strike (Level 1)
  register('the_resonant_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Flow-Arts Evasion (Level 3)
  register('the_resonant_skill_3', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Sub-Woofer Slam (Level 4)
  register('the_resonant_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_resonant_skill_4_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // Acoustic Counter (Level 6)
  register('the_resonant_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Aerial Kick-Drum (Level 8)
  register('the_resonant_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Bass Drop (Level 10)
  register('the_resonant_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
  });

  // Tremor Vault (Level 12)
  register('the_resonant_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Heavy Wubs (Level 15)
  register('the_resonant_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Wall of Sound (Level 17)
  register('the_resonant_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Tectonic Shift (Level 20)
  register('the_resonant_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap (Level 24)
  register('the_resonant_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Woofer Slam (Level 28)
  register('the_resonant_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Soundscape (Level 30)
  register('the_resonant_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - The Festival Headliner (Level 40)
  register('the_resonant_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // ==========================================
  // Class: The Packmaster
  // ==========================================

  // Twin-Strike (Level 1)
  register('the_packmaster_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Latch (Level 2)
  register('the_packmaster_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vaulting Assist (Level 3)
  register('the_packmaster_skill_3', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Heel & Heel-Strike (Level 5)
  register('the_packmaster_skill_5', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Tag-Team Parry (Level 7)
  register('the_packmaster_skill_7', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Launching Bite (Level 9)
  register('the_packmaster_skill_9', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Sic 'Em (Level 10)
  register('the_packmaster_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Meat-Shield (Level 12)
  register('the_packmaster_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Ferocious Growl (Level 15)
  register('the_packmaster_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Drag to Hell (Level 17)
  register('the_packmaster_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Alpha's Command (Level 20)
  register('the_packmaster_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap Bait (Level 24)
  register('the_packmaster_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Latch (Level 28)
  register('the_packmaster_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Den (Level 30)
  register('the_packmaster_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - Release the Hound (Level 40)
  register('the_packmaster_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
  });

  // ==========================================
  // Class: The Orbital Striker
  // ==========================================

  // Thruster-Strike (Level 1)
  register('the_orbital_striker_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Hover-Dash (Level 3)
  register('the_orbital_striker_skill_3', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Stratosphere Slam (Level 4)
  register('the_orbital_striker_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Thruster Parry (Level 6)
  register('the_orbital_striker_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Tractor Grapple (Level 8)
  register('the_orbital_striker_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // The Grav-Lift (Level 10)
  register('the_orbital_striker_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vaulting Ascent (Level 12)
  register('the_orbital_striker_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vacuum Aura (Level 15)
  register('the_orbital_striker_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Ground-Zero Pull (Level 17)
  register('the_orbital_striker_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Orbital Singularity (Level 20)
  register('the_orbital_striker_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap Afterburner (Level 24)
  register('the_orbital_striker_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual Stratosphere (Level 28)
  register('the_orbital_striker_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Exosphere Stasis (Level 30)
  register('the_orbital_striker_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - The Rod of God (Level 40)
  register('the_orbital_striker_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // ==========================================
  // Class: The Scrap-Tek
  // ==========================================

  // Ratchet-Strike (Level 1)
  register('the_scrap_tek_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Magnetic Tether (Level 2)
  register('the_scrap_tek_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // Vaulting Caltrops (Level 3)
  register('the_scrap_tek_skill_3', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Hydraulic Piston (Level 4)
  register('the_scrap_tek_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
  });

  // Repulsor Parry (Level 6)
  register('the_scrap_tek_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Aerial Ripcord (Level 8)
  register('the_scrap_tek_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // The Junkyard Turret (Level 10)
  register('the_scrap_tek_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_scrap_tek_skill_10_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
  });

  // Tether Whip (Level 12)
  register('the_scrap_tek_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // Polarity Shift (Level 15)
  register('the_scrap_tek_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Wrecking Ball (Level 17)
  register('the_scrap_tek_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // The Scrap-Storm (Level 20)
  register('the_scrap_tek_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap Decoy (Level 24)
  register('the_scrap_tek_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Piston Overdrive (Level 28)
  register('the_scrap_tek_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_scrap_tek_skill_28_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // The EMP Grid (Level 30)
  register('the_scrap_tek_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
  });

  // CAPSTONE - The Junkyard Titan (Level 40)
  register('the_scrap_tek_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
      // Spawn logic
      if (attacker) {
        const objId = 'the_scrap_tek_skill_40_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // ==========================================
  // Class: The Kinetic Juggernaut
  // ==========================================

  // Heavy-Handed (Level 1)
  register('the_kinetic_juggernaut_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Kinetic Guard (Level 2)
  register('the_kinetic_juggernaut_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // Release Valve (Level 4)
  register('the_kinetic_juggernaut_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
  });

  // Vaulting Stomp (Level 6)
  register('the_kinetic_juggernaut_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Uppercut Transfer (Level 8)
  register('the_kinetic_juggernaut_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Haymaker (Level 10)
  register('the_kinetic_juggernaut_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // Crater Drop (Level 13)
  register('the_kinetic_juggernaut_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Gravity Well (Level 15)
  register('the_kinetic_juggernaut_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Grapple Toss (Level 17)
  register('the_kinetic_juggernaut_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Juggernaut Charge (Level 20)
  register('the_kinetic_juggernaut_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap Absorption (Level 24)
  register('the_kinetic_juggernaut_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // Dual Release (Level 28)
  register('the_kinetic_juggernaut_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Ground Zero (Level 30)
  register('the_kinetic_juggernaut_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // CAPSTONE - The Asteroid (Level 40)
  register('the_kinetic_juggernaut_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // ==========================================
  // Class: The Phantom-Shift
  // ==========================================

  // Flicker-Strike (Level 1)
  register('the_phantom_shift_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Stutter-Step (Level 2)
  register('the_phantom_shift_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // Temporal Rip (Level 4)
  register('the_phantom_shift_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Blink-Parry (Level 6)
  register('the_phantom_shift_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // Afterimage Uppercut (Level 8)
  register('the_phantom_shift_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Phantom Array (Level 10)
  register('the_phantom_shift_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Vaulting Stutter (Level 12)
  register('the_phantom_shift_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Aerial Flicker (Level 13)
  register('the_phantom_shift_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
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
      }
  });

  // Time-Dilation Aura (Level 15)
  register('the_phantom_shift_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Phase-Hook (Level 17)
  register('the_phantom_shift_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
      // Teleport/Dash logic
      if (attacker && x !== undefined && z !== undefined) {
        attacker.x = x;
        attacker.z = z;
        broadcast({ type: "move", sessionId: attacker.sessionId || attacker.id, position: attacker }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Chrono-Collapse (Level 20)
  register('the_phantom_shift_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Frame-Trap Blink (Level 24)
  register('the_phantom_shift_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Rip (Level 28)
  register('the_phantom_shift_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Singularity Event (Level 30)
  register('the_phantom_shift_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_phantom_shift_skill_30_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // CAPSTONE - Reality Shatter (Level 40)
  register('the_phantom_shift_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_phantom_shift_skill_40_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // ==========================================
  // Class: The Sylvan Warden
  // ==========================================

  // Vine-Whip (Level 1)
  register('the_sylvan_warden_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Symbiotic Tether (Level 2)
  register('the_sylvan_warden_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // Bramble-Slam (Level 4)
  register('the_sylvan_warden_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // Thistle-Parry (Level 6)
  register('the_sylvan_warden_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Up-Root (Level 8)
  register('the_sylvan_warden_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Briar Web (Level 10)
  register('the_sylvan_warden_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Vaulting Sap (Level 12)
  register('the_sylvan_warden_skill_12', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Canopy Drop (Level 13)
  register('the_sylvan_warden_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_sylvan_warden_skill_13_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // Toxic Bloom (Level 15)
  register('the_sylvan_warden_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // Vine-Pull (Level 17)
  register('the_sylvan_warden_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Forest's Wrath (Level 20)
  register('the_sylvan_warden_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // Frame-Trap Substitution (Level 24)
  register('the_sylvan_warden_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Bramble (Level 28)
  register('the_sylvan_warden_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_sylvan_warden_skill_28_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // The World-Tree (Level 30)
  register('the_sylvan_warden_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_sylvan_warden_skill_30_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
  });

  // CAPSTONE - Force of Nature (Level 40)
  register('the_sylvan_warden_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_sylvan_warden_skill_40_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

  // ==========================================
  // Class: The Flux-Caster
  // ==========================================

  // Flux-Strike (Level 1)
  register('the_flux_caster_skill_1', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Stance Dance (Level 2)
  register('the_flux_caster_skill_2', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Thermal Detonation (Level 4)
  register('the_flux_caster_skill_4', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Flux-Parry (Level 6)
  register('the_flux_caster_skill_6', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Vaulting Catalyst (Level 7)
  register('the_flux_caster_skill_7', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Updraft (Level 8)
  register('the_flux_caster_skill_8', (context) => {
    const { attacker, target, x, y, z } = context;
      // Spawn logic
      if (attacker) {
        const objId = 'the_flux_caster_skill_8_obj_' + Math.random().toString(36).substr(2, 9);
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
      }
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
      }
  });

  // The Crucible (Level 10)
  register('the_flux_caster_skill_10', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Elemental Dive (Level 13)
  register('the_flux_caster_skill_13', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Convection Aura (Level 15)
  register('the_flux_caster_skill_15', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Ley-Line Pull (Level 17)
  register('the_flux_caster_skill_17', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Flash-Freeze / Flash-Fry (Level 20)
  register('the_flux_caster_skill_20', (context) => {
    const { attacker, target, x, y, z } = context;
      // Healing logic
      if (attacker) {
        // Broadcast a heal visual effect
        broadcast({ type: "effect", effectType: "heal", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
      }
  });

  // Frame-Trap Decoy (Level 24)
  register('the_flux_caster_skill_24', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // Dual-Cast Detonation (Level 28)
  register('the_flux_caster_skill_28', (context) => {
    const { attacker, target, x, y, z } = context;
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
      }
  });

  // The Maelstrom (Level 30)
  register('the_flux_caster_skill_30', (context) => {
    const { attacker, target, x, y, z } = context;
      // Pull logic
      if (attacker && target) {
        target.x = attacker.x;
        target.z = attacker.z;
        if (target.id && target.id.startsWith('npc_')) {
          broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
        } else {
          broadcast({ type: "move", sessionId: target.sessionId || target.id, position: target }, null, target.zone, target.x, target.z);
        }
      }
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
      }
  });

  // CAPSTONE - The Avatar of Flux (Level 40)
  register('the_flux_caster_skill_40', (context) => {
    const { attacker, target, x, y, z } = context;
      // Shield/Guard logic
      if (attacker) {
        const { addStatusEffect, StatusEffects } = require('../combatSystem');
        addStatusEffect(attacker, { type: StatusEffects.SHIELD, duration: 5000 });
        
        attacker.isGuarding = true;
        broadcast({ type: "effect", effectType: "shield", targetId: attacker.sessionId || attacker.id }, null, attacker.zone, attacker.x, attacker.z);
        setTimeout(() => { if (attacker) attacker.isGuarding = false; }, 5000);
      }
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
      }
  });

};
