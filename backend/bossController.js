const activeBosses = new Map();
const combatSystem = require('./combatSystem');

// Boss Definitions
const BOSS_CONFIGS = {
  "ascendant_colossus": {
    name: "The Ascendant Colossus",
    maxHp: 180000,
    model: "boss_01_ascendant_colossus",
    phases: [
      { threshold: 1.0, title: "Phase 1: Armored Stone", speed: 0.3 },
      { threshold: 0.5, title: "Phase 2: Pure Energy", speed: 0.8 }
    ],
    init: (boss) => {
      boss.currentPhase = 0;
      boss.telegraphs = [];
      boss.lastAttackTime = Date.now();
    },
    tick: (boss, players, broadcast) => {
      const now = Date.now();
      // Phase transition check
      const hpPercent = boss.hp / boss.maxHp;
      if (boss.currentPhase === 0 && hpPercent <= 0.5) {
        boss.currentPhase = 1;
        broadcast({ type: "boss_phase_transition", bossId: boss.id, phase: 1, title: boss.phases[1].title }, null, boss.zone);
        
        // Huge AoE on phase transition
        boss.telegraphs.push({ x: boss.x, z: boss.z, radius: 25, duration: 4000, endTime: now + 4000, damage: 100 });
        broadcast({ type: "boss_telegraph", bossId: boss.id, x: boss.x, z: boss.z, radius: 25, duration: 4000 }, null, boss.zone);
      }
      
      // Process Telegraphs
      for (let i = boss.telegraphs.length - 1; i >= 0; i--) {
        const t = boss.telegraphs[i];
        if (now >= t.endTime) {
           for (const [id, p] of players.entries()) {
             if (p.zone !== boss.zone) continue;
             const dist = Math.sqrt(Math.pow(p.x - t.x, 2) + Math.pow(p.z - t.z, 2));
             if (dist <= t.radius) {
                const hp = combatSystem.applyDamage(p, t.damage, 0, false, false, boss);
                if (hp <= 0) combatSystem.handleDeath(p, false);
                broadcast({ type: "combat_update", targetId: p.sessionId, attackerId: boss.id, targetHealth: hp }, null, boss.zone, boss.x, boss.z);
             }
           }
           boss.telegraphs.splice(i, 1);
        }
      }
      
      // Basic chase logic based on phase speed
      const speed = boss.phases[boss.currentPhase].speed;
      let closestPlayer = null;
      let minDistance = Infinity;
      
      for (const [id, p] of players.entries()) {
        if (p.zone !== boss.zone) continue;
        const dist = Math.sqrt(Math.pow(p.x - boss.x, 2) + Math.pow(p.z - boss.z, 2));
        if (dist < minDistance) {
          minDistance = dist;
          closestPlayer = p;
        }
      }
      
      if (closestPlayer && minDistance < 50) {
        if (minDistance < 5 && now - boss.lastAttackTime > 3000 && boss.telegraphs.length === 0) {
          // Standard telegraph attack
          boss.lastAttackTime = now;
          boss.telegraphs.push({ x: closestPlayer.x, z: closestPlayer.z, radius: 5, duration: 1500, endTime: now + 1500, damage: 30 });
          broadcast({ type: "boss_telegraph", bossId: boss.id, x: closestPlayer.x, z: closestPlayer.z, radius: 5, duration: 1500 }, null, boss.zone);
        } else {
          const dx = closestPlayer.x - boss.x;
          const dz = closestPlayer.z - boss.z;
          boss.x += (dx / minDistance) * speed;
          boss.z += (dz / minDistance) * speed;
        }
      }
    }
  },
  "syndicate_lich": {
    name: "The Syndicate Lich",
    maxHp: 500000,
    model: "boss_02_syndicate_lich",
    phases: [
      { threshold: 1.0, title: "Phase 1: Combo-Locked Barrier" }
    ],
    init: (boss) => {
      boss.shieldActive = true;
    },
    tick: (boss, players, broadcast) => {
      // Shield is broken if any player in the zone has a combo >= 50
      let shieldShouldBreak = false;
      for (const [id, p] of players.entries()) {
        if (p.zone === boss.zone && p.combo && p.combo >= 50) {
          shieldShouldBreak = true;
          break;
        }
      }
      
      if (boss.shieldActive && shieldShouldBreak) {
        boss.shieldActive = false;
        broadcast({ type: "boss_event", bossId: boss.id, event: "shield_broken" }, null, boss.zone);
      } else if (!boss.shieldActive && !shieldShouldBreak) {
        boss.shieldActive = true;
        broadcast({ type: "boss_event", bossId: boss.id, event: "shield_restored" }, null, boss.zone);
      }
      
      // Lich floats around randomly (Zone Controller)
      boss.x += (Math.random() - 0.5) * 0.4;
      boss.z += (Math.random() - 0.5) * 0.4;
    }
  },
  "ivory_behemoth": { name: "The Ivory Behemoth", maxHp: 20000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "resonant_behemoth": { name: "The Resonant Behemoth", maxHp: 32000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "resonance_maestro": { name: "The Resonance Maestro", maxHp: 45000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "apex_chimera": { name: "The Apex Chimera", maxHp: 70000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "null_anomaly": { name: "The Null Anomaly", maxHp: 100000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "data_forged_evolvarch": { name: "The Data-Forged Evolvarch", maxHp: 300000, model: "boss_01_ascendant_colossus.glb", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "astral_sovereign": { name: "The Astral Sovereign", maxHp: 1000000, model: "boss_01_ascendant_colossus", phases: [{ threshold: 1.0, title: "Phase 1" }] },
  "torinn_rhogar": {
    name: "Torinn Rhogar",
    maxHp: 200000,
    model: "torinn_rhogar_proxy_LOD0",
    phases: [
      { threshold: 1.0, title: "Phase 1: Dragonborn Warrior", speed: 0.5 }
    ],
    init: (boss) => {
      boss.currentPhase = 0;
      boss.telegraphs = [];
      boss.lastAttackTime = Date.now();
    },
    tick: (boss, players, broadcast) => {
      const now = Date.now();
      const speed = boss.phases[boss.currentPhase].speed;
      let closestPlayer = null;
      let minDistance = Infinity;
      
      for (const [id, p] of players.entries()) {
        if (p.zone !== boss.zone) continue;
        const dist = Math.sqrt(Math.pow(p.x - boss.x, 2) + Math.pow(p.z - boss.z, 2));
        if (dist < minDistance) {
          minDistance = dist;
          closestPlayer = p;
        }
      }
      
      if (closestPlayer && minDistance < 50) {
        if (minDistance < 5 && now - boss.lastAttackTime > 3000 && boss.telegraphs.length === 0) {
          boss.lastAttackTime = now;
          boss.telegraphs.push({ x: closestPlayer.x, z: closestPlayer.z, radius: 5, duration: 1500, endTime: now + 1500, damage: 30 });
          broadcast({ type: "boss_telegraph", bossId: boss.id, x: closestPlayer.x, z: closestPlayer.z, radius: 5, duration: 1500 }, null, boss.zone);
        } else {
          const dx = closestPlayer.x - boss.x;
          const dz = closestPlayer.z - boss.z;
          boss.x += (dx / minDistance) * speed;
          boss.z += (dz / minDistance) * speed;
        }
      }
    }
  }
};

function spawnBoss(type, zone, x, z) {
  const config = BOSS_CONFIGS[type];
  if (!config) return null;
  
  const id = `boss_${type}_${Date.now()}`;
  const boss = {
    id,
    type,
    name: config.name,
    hp: config.maxHp,
    maxHp: config.maxHp,
    zone,
    x,
    y: 0,
    z,
    modelFile: config.model,
    ...config
  };
  
  if (config.init) config.init(boss);
  activeBosses.set(id, boss);
  return boss;
}

function tickBosses(players, broadcast) {
  const updatesByZone = {};
  
  for (const [id, boss] of activeBosses.entries()) {
    if (boss.hp <= 0) {
      broadcast({ type: "boss_defeated", bossId: id }, null, boss.zone);
      activeBosses.delete(id);
      continue;
    }
    
    // Run specific boss mechanics
    if (boss.tick) boss.tick(boss, players, broadcast);
    
    if (!updatesByZone[boss.zone]) updatesByZone[boss.zone] = [];
    updatesByZone[boss.zone].push({
      id: boss.id,
      name: boss.name,
      x: Number(boss.x.toFixed(2)),
      y: Number(boss.y.toFixed(2)),
      z: Number(boss.z.toFixed(2)),
      hp: boss.hp,
      maxHp: boss.maxHp,
      modelFile: boss.modelFile,
      phaseTitle: boss.phases[boss.currentPhase || 0].title,
      shieldActive: boss.shieldActive
    });
  }
  
  for (const zone in updatesByZone) {
    if (updatesByZone[zone].length > 0) {
      broadcast({ type: "boss_update", bosses: updatesByZone[zone] }, null, zone);
    }
  }
}

function handleBossDamage(bossId, damage, attackerCombo) {
  const boss = activeBosses.get(bossId);
  if (!boss) return false;
  
  // Custom damage logic (e.g. Lich shield)
  if (boss.type === "syndicate_lich" && boss.shieldActive) {
    // Shield blocks damage entirely
    return true; // Hit registered, but 0 damage applied
  }
  
  boss.hp -= damage;
  return true;
}

function getBoss(bossId) {
  return activeBosses.get(bossId);
}

module.exports = {
  spawnBoss,
  tickBosses,
  handleBossDamage,
  getBoss
};
