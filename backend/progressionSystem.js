const scalingManager = require('./scalingManager');

// Keep the old constants around just in case any other file imports them, 
// but we will override their behavior dynamically
const LEVEL_CURVE = [0];
for (let i = 1; i <= 40; i++) {
  LEVEL_CURVE.push(scalingManager.getRequiredXP(i + 1));
}

/**
 * Awards XP to a player and checks for level up.
 * @returns { xpGained: number, leveledUp: boolean, newLevel: number, oldLevel: number }
 */
function awardXP(player, enemyLevel, enemyRole, combo) {
  if (!player.level) player.level = 1;
  if (!player.xp) player.xp = 0;
  
  // Cap at max level
  if (player.level >= 40 && player.xp >= scalingManager.getRequiredXP(40)) {
    return { xpGained: 0, leveledUp: false, newLevel: 40, oldLevel: 40 };
  }

  // Calculate dynamic XP based on enemy level and role
  const stats = scalingManager.getEnemyBaseStats(enemyLevel, enemyRole);
  const penalty = scalingManager.getLevelDifferenceModifiers(player.level, enemyLevel);
  
  const baseXP = stats.xpReward;
  const multiplier = Math.max(1, combo || 1);
  const finalXP = Math.floor(baseXP * multiplier * penalty.xpMultiplier);
  
  player.xp += finalXP;
  
  let leveledUp = false;
  const oldLevel = player.level;
  
  // Level up logic
  while (player.level < 40 && player.xp >= scalingManager.getRequiredXP(player.level + 1)) {
    player.level++;
    leveledUp = true;
  }
  
  // Hard cap enforcement
  if (player.level >= 40) {
      player.level = 40;
      const maxXP = scalingManager.getRequiredXP(40);
      if (player.xp > maxXP) player.xp = maxXP;
  }
  
  if (leveledUp) {
      // Dynamic scaling health instead of hardcoded 100
      player.health = scalingManager.getPlayerBaseHealth(player.level); 
  }
  
  return {
    xpGained: finalXP,
    leveledUp,
    newLevel: player.level,
    oldLevel
  };
}

/**
 * Awards fixed XP (from quests, no combo multiplier) and checks for level up.
 * @returns { xpGained: number, leveledUp: boolean, newLevel: number, oldLevel: number }
 */
function awardFixedXP(player, amount) {
  if (!player.level) player.level = 1;
  if (!player.xp) player.xp = 0;
  
  if (player.level >= 40 && player.xp >= scalingManager.getRequiredXP(40)) {
    return { xpGained: 0, leveledUp: false, newLevel: 40, oldLevel: 40 };
  }

  player.xp += amount;
  
  let leveledUp = false;
  const oldLevel = player.level;
  
  while (player.level < 40 && player.xp >= scalingManager.getRequiredXP(player.level + 1)) {
    player.level++;
    leveledUp = true;
  }
  
  if (player.level >= 40) {
      player.level = 40;
      const maxXP = scalingManager.getRequiredXP(40);
      if (player.xp > maxXP) player.xp = maxXP;
  }
  
  if (leveledUp) {
      player.health = scalingManager.getPlayerBaseHealth(player.level);
  }
  
  return {
    xpGained: amount,
    leveledUp,
    newLevel: player.level,
    oldLevel
  };
}

module.exports = {
  LEVEL_CURVE,
  awardXP,
  awardFixedXP
};
