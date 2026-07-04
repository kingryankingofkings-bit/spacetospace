const StatusEffects = {
  STUN: 'stun',
  DOT: 'dot',
  SHIELD: 'shield',
  REGEN: 'regen'
};

function applyDamage(target, damage, attackerCombo = 0, isNpc = false, isBoss = false) {
  if (target.statusEffects && target.statusEffects.some(e => e.type === StatusEffects.SHIELD)) {
    damage = 0;
  }
  
  if (isBoss) {
    const { handleBossDamage } = require('./bossController');
    handleBossDamage(target.id, damage, attackerCombo);
    return target.hp; // Might be outdated if boss state is hidden, but bossController handles its own hp
  } else if (isNpc) {
    target.hp = (target.hp || target.maxHp || 100) - Math.floor(damage);
    return target.hp;
  } else {
    if (target.isGuarding) damage = 0;
    target.health = (target.health || 100) - Math.floor(damage);
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
