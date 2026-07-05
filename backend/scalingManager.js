/**
 * Scaling Manager
 * Handles exponential XP curves, linear health scaling, and enemy combat scaling.
 */

const MAX_LEVEL = 40;

/**
 * Get required XP to reach a specific level.
 * Level 1 -> 2 is 500 XP. Level 39 -> 40 is ~1.5 million XP.
 * Using an exponential curve.
 */
function getRequiredXP(level) {
  if (level <= 1) return 0;
  if (level > MAX_LEVEL) return Infinity;
  
  // Exponential scaling formula: 500 * (1.23 ^ (level - 2))
  // At level 2: 500
  // At level 40: 500 * (1.23^38) = 1,304,772
  return Math.floor(500 * Math.pow(1.23, level - 2));
}

/**
 * Get maximum HP for a player at a specific level.
 * Level 1: 100 HP. Level 40: 4000 HP. (+100 per level)
 */
function getPlayerBaseHealth(level) {
  const l = Math.min(Math.max(1, level || 1), MAX_LEVEL);
  return 100 + ((l - 1) * 100);
}

/**
 * Get base stats for an enemy at a given level and role.
 */
function getEnemyBaseStats(level, role) {
  const l = Math.max(1, level || 1);
  const baseHpForLevel = 100 + ((l - 1) * 80); // Mobs scale slightly slower than players
  const baseDamageForLevel = 10 + ((l - 1) * 5); // 10 at 1, 205 at 40
  const baseXP = 50 + ((l - 1) * 40); // Base XP yield

  let hpMult = 1.0;
  let dmgMult = 1.0;
  let xpMult = 1.0;

  if (role === 'Elite' || role === 'Warden' || role === 'elite') {
    hpMult = 4.0;
    dmgMult = 2.0;
    xpMult = 3.0;
  } else if (role === 'Boss' || role === 'boss') {
    hpMult = 50.0;
    dmgMult = 5.0;
    xpMult = 20.0;
  }

  return {
    hp: Math.floor(baseHpForLevel * hpMult),
    damage: Math.floor(baseDamageForLevel * dmgMult),
    xpReward: Math.floor(baseXP * xpMult)
  };
}

/**
 * Calculate scaling penalty/bonus based on level difference.
 * If player is 5+ levels below enemy, deal 50% damage.
 * If player is 10+ levels above enemy, gain 0 XP.
 */
function getLevelDifferenceModifiers(attackerLevel, defenderLevel) {
  const diff = attackerLevel - defenderLevel;
  
  let damageMultiplier = 1.0;
  if (diff <= -5) {
     damageMultiplier = 0.5; // 50% damage penalty for being underleveled
  }

  let xpMultiplier = 1.0;
  if (diff >= 10) {
     xpMultiplier = 0.0; // No XP for killing trivial mobs
  }

  return { damageMultiplier, xpMultiplier };
}

module.exports = {
  MAX_LEVEL,
  getRequiredXP,
  getPlayerBaseHealth,
  getEnemyBaseStats,
  getLevelDifferenceModifiers
};
