const scalingManager = require('./scalingManager');

const StatusEffects = {
  STUN: 'stun',
  DOT: 'dot',
  SHIELD: 'shield',
  REGEN: 'regen'
};

function calculateDamage(attacker, fallbackDamage) {
  let finalDamage = fallbackDamage || 10;
  let critChance = 0.05; // 5% base
  let critDamage = 1.5; // 150% base

  if (attacker) {
    if (attacker.role || attacker.isBoss) {
      // NPC / Boss scaling overrides hardcoded damage
      const lvl = attacker.level || (attacker.isBoss ? 40 : 1);
      const role = attacker.role || (attacker.isBoss ? 'Boss' : 'Fodder');
      finalDamage = scalingManager.getEnemyBaseStats(lvl, role).damage;
    } else if (attacker.playerClass || attacker.sessionId || attacker.inventory) {
      // Player base scaling
      finalDamage = (attacker.level || 1) * 10;
      let weaponPower = 0;
      
      // Parse gear for damage, crit chance, crit damage
      if (attacker.gear && Array.isArray(attacker.gear)) {
        attacker.gear.forEach(item => {
          if (item && item.type === 'Weapon') {
             weaponPower += (item.power || 0);
          }
          critChance += (item.critChance || 0);
          critDamage += (item.critDamage || 0);
        });
      }
      
      finalDamage += weaponPower;
    }
  }

  // Enforce caps
  if (critChance > 0.6) critChance = 0.6; // 60% hard cap
  if (critDamage > 3.0) critDamage = 3.0; // 300% hard cap

  const isCrit = Math.random() < critChance;
  if (isCrit) {
    finalDamage *= critDamage;
  }

  // Beast Oil bonus
  if (attacker && attacker.statusEffects) {
    if (attacker.statusEffects.some(e => e.type === 'beast_oil')) {
      finalDamage *= 2;
    }
  }

  if (attacker && attacker.perfectCounterActive) {
    finalDamage *= 3.0; // 300% base damage
    attacker.perfectCounterActive = false; // consume it
  }

  return { damage: finalDamage, isCrit };
}

function applyDamage(target, incomingDamage, attackerCombo = 0, isNpc = false, isBoss = false, attacker = null) {
  const now = Date.now();

  // Parry Window check (300ms)
  if (!isNpc && !isBoss && target.isGuarding) {
    if (now - (target.lastGuardTime || 0) <= 300) {
       // Perfect Counter!
       target.perfectCounterActive = true;
       return target.health || 100; // Take 0 damage
    }
    // Regular guard blocks completely for now
    return target.health || 100;
  }

  const { damage: calcDamage, isCrit } = calculateDamage(attacker, incomingDamage);
  let remainingDamage = calcDamage;

  // Apply scaling penalties (Underleveled deals 50% damage)
  if (attacker && target) {
    const attackerLevel = attacker.level || 1;
    const targetLevel = target.level || 1;
    const penalty = scalingManager.getLevelDifferenceModifiers(attackerLevel, targetLevel);
    remainingDamage *= penalty.damageMultiplier;
  }

  // Track hit time for shield regen
  target.lastHitTime = now;

  // Target defensive stats parsing
  let maxShield = 0;
  let armor = 0;
  let resistVoid = 0; // percentage
  let resistElemental = 0;

  if (target.gear && Array.isArray(target.gear)) {
    target.gear.forEach(item => {
      if (!item) return;
      const pwr = item.power || 0;
      
      // Dynamic defense scaling from item power if it's armor
      if (item.type === 'Armor') {
        if (item.weight && item.weight >= 10.0) {
          armor += pwr * 0.5; // Heavy armor grants flat mitigation
        } else {
          maxShield += pwr * 2.0; // Light/Medium armor grants shields
        }
      }

      maxShield += (item.shield || 0);
      armor += (item.armor || 0);
      resistVoid += (item.resistVoid || 0);
      resistElemental += (item.resistElemental || 0);
    });
  }

  // Hard caps
  if (resistVoid > 0.65) resistVoid = 0.65;
  if (resistElemental > 0.65) resistElemental = 0.65;

  // Apply flat armor mitigation (capped at 75% reduction)
  if (armor > 0) {
    const maxMitigation = remainingDamage * 0.75;
    const mitigated = Math.min(armor, maxMitigation);
    remainingDamage -= mitigated;
  }

  // Apply Shields
  if (target.shield === undefined) target.shield = maxShield;
  if (target.shield > 0) {
    if (target.shield >= remainingDamage) {
      target.shield -= remainingDamage;
      remainingDamage = 0;
    } else {
      remainingDamage -= target.shield;
      target.shield = 0;
    }
  }

  // Ensure minimum 1 damage if any damage was meant to be dealt
  if (calcDamage > 0 && remainingDamage <= 0) {
    remainingDamage = 1;
  }

  // Hit-Stun Logic (Requires Heavy Attack)
  if (isNpc && calcDamage > 0 && attacker && attacker.currentAttackType === 'heavy') {
     const isElite = target.role === 'Elite' || target.role === 'Warden' || target.type === 'elite';
     
     if (isElite) {
        if (now - (target.lastStaggerHit || 0) > 2000) {
           target.staggerHits = 0; // Stagger hits must be rapid
        }
        target.staggerHits = (target.staggerHits || 0) + 1;
        target.lastStaggerHit = now;
        if (target.staggerHits >= 3) {
           target.staggerEndTime = now + 1500; // 1.5s stagger
           target.staggerHits = 0;
           target.state = 'STAGGER';
        }
     } else if (!isBoss) {
        // Fodder
        target.staggerEndTime = now + 500; // 0.5s stagger
        target.state = 'STAGGER';
     }
  }

  if (isBoss) {
    const { handleBossDamage } = require('./bossController');
    handleBossDamage(target.id, remainingDamage, attackerCombo);
    return target.hp; 
  } else if (isNpc) {
    target.hp = (target.hp || target.maxHp || 100) - Math.floor(remainingDamage);
    return target.hp;
  } else {
    target.health = (target.health || 100) - Math.floor(remainingDamage);
    return target.health;
  }
}

function handleDeath(target, isNpc = false) {
  if (isNpc) {
    target.hp = target.maxHp || 100;
    target.x = Math.random() * 50 - 25;
    target.z = Math.random() * 50 - 25;
    target.statusEffects = [];
    target.state = 'IDLE';
  } else {
    target.health = 100;
  }
}

function addStatusEffect(target, effect) {
  if (!target.statusEffects) target.statusEffects = [];
  effect.endTime = Date.now() + effect.duration;
  target.statusEffects.push(effect);
}

module.exports = {
  StatusEffects,
  applyDamage,
  handleDeath,
  addStatusEffect
};
