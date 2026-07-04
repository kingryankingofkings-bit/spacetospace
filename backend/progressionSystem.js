const LEVEL_CURVE = [
  0,          // Level 0 (not used)
  0,          // Level 1
  1000,       // Level 2
  2500,       // Level 3
  5000,       // Level 4
  9000,       // Level 5
  15000,      // Level 6
  23500,      // Level 7
  35000,      // Level 8
  50000,      // Level 9
  70000,      // Level 10
  96000,      // Level 11
  129000,     // Level 12
  170000,     // Level 13
  220000,     // Level 14
  280000,     // Level 15
  352000,     // Level 16
  437000,     // Level 17
  537000,     // Level 18
  653000,     // Level 19
  787000,     // Level 20
  941000,     // Level 21
  1117000,    // Level 22
  1317000,    // Level 23
  1543000,    // Level 24
  1797000,    // Level 25
  2081000,    // Level 26
  2397000,    // Level 27
  2747000,    // Level 28
  3133000,    // Level 29
  3557000,    // Level 30
  4021000,    // Level 31
  4527000,    // Level 32
  5077000,    // Level 33
  5673000,    // Level 34
  6317000,    // Level 35
  7011000,    // Level 36
  7757000,    // Level 37
  8557000,    // Level 38
  9413000,    // Level 39
  10327000    // Level 40
];

const MOB_XP_YIELDS = {
  "grid_rusher": 5,
  "gnarl_maw": 10,
  "scrap_phalanx": 15,
  "siphon_tick": 25,
  "aegis_carapace": 40,
  "iron_jaw_hound": 55,
  "venom_spitter": 75,
  "tremor_fiend": 125,
  "nexus_swarmer": 15,
  "nexus_warden": 400,
  "scrap_stalker": 180,
  "sylvan_juggernaut": 300,
  "void_anomaly": 500
};

const BOSS_XP_YIELDS = {
  "ivory_behemoth": 1200,
  "resonant_behemoth": 2500,
  "resonance_maestro": 4500,
  "apex_chimera": 7000,
  "null_anomaly": 12000,
  "ascendant_colossus": 18000,
  "data_forged_evolvarch": 28000,
  "syndicate_lich": 40000,
  "astral_sovereign": 60000
};

function getBaseXp(identifier, isBoss) {
  if (!identifier) return 5;
  
  const searchStr = identifier.toLowerCase();
  
  if (isBoss) {
    for (const [key, value] of Object.entries(BOSS_XP_YIELDS)) {
      if (searchStr.includes(key)) return value;
    }
    return 1000; // Default fallback for unknown bosses
  }
  
  for (const [key, value] of Object.entries(MOB_XP_YIELDS)) {
    // Some basic formatting to match strings like "02_grid_rusher" or "Gnarl-Maw"
    const cleanedKey = key.replace(/_/g, "");
    const cleanedSearchStr = searchStr.replace(/[-_ ]/g, "");
    if (cleanedSearchStr.includes(cleanedKey)) {
      return value;
    }
  }
  
  return 5; // Default fallback for unknown mobs
}

/**
 * Awards XP to a player and checks for level up.
 * @returns { xpGained: number, leveledUp: boolean, newLevel: number, oldLevel: number }
 */
function awardXP(player, enemyIdentifier, isBoss, combo) {
  if (!player.level) player.level = 1;
  if (!player.xp) player.xp = 0;
  
  // Cap at max level
  if (player.level >= 40 && player.xp >= LEVEL_CURVE[40]) {
    return { xpGained: 0, leveledUp: false, newLevel: 40, oldLevel: 40 };
  }

  const baseXP = getBaseXp(enemyIdentifier, isBoss);
  const multiplier = Math.max(1, combo || 1);
  const finalXP = baseXP * multiplier;
  
  player.xp += finalXP;
  
  let leveledUp = false;
  const oldLevel = player.level;
  
  // Level up logic
  while (player.level < 40 && player.xp >= LEVEL_CURVE[player.level + 1]) {
    player.level++;
    leveledUp = true;
  }
  
  // Hard cap enforcement
  if (player.level >= 40) {
      player.level = 40;
      if (player.xp > LEVEL_CURVE[40]) player.xp = LEVEL_CURVE[40];
  }
  
  if (leveledUp) {
      player.health = 100; // Full heal on level up
      // In the future, grant skill points or stats here
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
  
  if (player.level >= 40 && player.xp >= LEVEL_CURVE[40]) {
    return { xpGained: 0, leveledUp: false, newLevel: 40, oldLevel: 40 };
  }

  player.xp += amount;
  
  let leveledUp = false;
  const oldLevel = player.level;
  
  while (player.level < 40 && player.xp >= LEVEL_CURVE[player.level + 1]) {
    player.level++;
    leveledUp = true;
  }
  
  if (player.level >= 40) {
      player.level = 40;
      if (player.xp > LEVEL_CURVE[40]) player.xp = LEVEL_CURVE[40];
  }
  
  if (leveledUp) {
      player.health = 100;
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
  MOB_XP_YIELDS,
  BOSS_XP_YIELDS,
  awardXP,
  awardFixedXP,
  getBaseXp
};
