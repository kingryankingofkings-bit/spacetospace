const fs = require('fs');
const path = require('path');
const { awardFixedXP } = require('./progressionSystem');

let dbRef;
let broadcastRef;
let playersRef;

let QUEST_DEFINITIONS = [];
let SUBQUEST_DEFINITIONS = [];
let MAP_COVERAGE_DEFINITIONS = [];
let LOCATION_COVERAGE_LEDGER = [];
let POSTGAME_QUESTS = [];
let GODLY_REWARDS = [];

function loadQuestData() {
  try {
    const questsPath = path.join(__dirname, 'data', 'quest_reward_matrix.json');
    if (fs.existsSync(questsPath)) {
      QUEST_DEFINITIONS = JSON.parse(fs.readFileSync(questsPath, 'utf8'));
      console.log(`Loaded ${QUEST_DEFINITIONS.length} quests.`);
    }

    const subquestsPath = path.join(__dirname, 'data', 'subquest_xp_reward_matrix.json');
    if (fs.existsSync(subquestsPath)) {
      SUBQUEST_DEFINITIONS = JSON.parse(fs.readFileSync(subquestsPath, 'utf8'));
      console.log(`Loaded ${SUBQUEST_DEFINITIONS.length} subquests.`);
    }

    const mapCoveragePath = path.join(__dirname, 'data', 'quest_to_map_coverage_matrix.json');
    if (fs.existsSync(mapCoveragePath)) {
      MAP_COVERAGE_DEFINITIONS = JSON.parse(fs.readFileSync(mapCoveragePath, 'utf8'));
      console.log(`Loaded ${MAP_COVERAGE_DEFINITIONS.length} map coverage entries.`);
    }

    const locationCoveragePath = path.join(__dirname, 'data', 'location_coverage_ledger.json');
    if (fs.existsSync(locationCoveragePath)) {
      LOCATION_COVERAGE_LEDGER = JSON.parse(fs.readFileSync(locationCoveragePath, 'utf8'));
      console.log(`Loaded ${LOCATION_COVERAGE_LEDGER.length} location coverage ledger entries.`);
    }

    const postgameQuestsPath = path.join(__dirname, 'data', 'postgame_quests.json');
    if (fs.existsSync(postgameQuestsPath)) {
      POSTGAME_QUESTS = JSON.parse(fs.readFileSync(postgameQuestsPath, 'utf8'));
      console.log(`Loaded ${POSTGAME_QUESTS.length} postgame quests.`);
    }

    const godlyRewardsPath = path.join(__dirname, 'data', 'godly_rewards.json');
    if (fs.existsSync(godlyRewardsPath)) {
      GODLY_REWARDS = JSON.parse(fs.readFileSync(godlyRewardsPath, 'utf8'));
      console.log(`Loaded ${GODLY_REWARDS.length} godly rewards.`);
    }
  } catch (err) {
    console.error("Error loading quest data:", err);
  }
}

function init(db, broadcast, players) {
  dbRef = db;
  broadcastRef = broadcast;
  playersRef = players;
  loadQuestData();
}

function getPlayerQuests(sessionId) {
  const player = playersRef.get(sessionId);
  if (!player) return [];
  return player.quests || [];
}

function savePlayerQuests(sessionId, quests) {
  const player = playersRef.get(sessionId);
  if (player) {
    player.quests = quests;
    dbRef.saveUser(sessionId, player); // Assume db handles quests serialization
  }
}

function sendQuestUpdate(sessionId) {
  const quests = getPlayerQuests(sessionId);
  if (broadcastRef) {
    broadcastRef({ type: 'quest_update', sessionId, quests });
  }
}

/**
 * Returns a specific quest definition.
 */
function getQuestDef(questId) {
  return QUEST_DEFINITIONS.find(q => q.quest_id === questId);
}

/**
 * Returns a specific subquest definition.
 */
function getSubquestDef(questId, subquestNumber) {
  return SUBQUEST_DEFINITIONS.find(sq => sq.quest_id === questId && sq.subquest_number === subquestNumber);
}

/**
 * Returns a specific map coverage definition.
 */
function getMapCoverageDef(questId) {
  return MAP_COVERAGE_DEFINITIONS.find(mc => mc.quest_id === questId);
}

/**
 * Returns a specific location coverage definition.
 */
function getLocationCoverageDef(locationName) {
  return LOCATION_COVERAGE_LEDGER.find(lc => lc.world_map_location === locationName);
}

/**
 * Returns a specific postgame quest definition.
 */
function getPostgameQuestDef(questId) {
  return POSTGAME_QUESTS.find(q => q.quest_id === questId);
}

/**
 * Returns all postgame quests for Torinn Rhogar.
 */
function getTorinnPostgameQuests() {
  return POSTGAME_QUESTS.filter(q => q.giver === 'Torinn Rhogar');
}

/**
 * Returns a specific Godly Reward by item_id or quest_id.
 */
function getGodlyReward(questId) {
  return GODLY_REWARDS.find(gr => gr.quest_id === questId);
}

/**
 * Manually complete a subquest. Awards fixed XP, tracks it, and broadcasts events.
 */
function completeSubquest(sessionId, questId, subquestNumber) {
  const player = playersRef.get(sessionId);
  if (!player) return { success: false, message: "Player not found" };

  const subquest = getSubquestDef(questId, subquestNumber);
  if (!subquest) return { success: false, message: "Subquest not found" };

  let quests = getPlayerQuests(sessionId);
  
  // Find or create the quest tracker for this player
  let playerQuest = quests.find(q => q.id === questId);
  if (!playerQuest) {
    const qDef = getQuestDef(questId);
    if (!qDef) return { success: false, message: "Quest definition not found" };
    playerQuest = {
      id: questId,
      title: qDef.quest_title,
      completedSubquests: [],
      completed: false
    };
    quests.push(playerQuest);
  }

  // Check if they already completed this subquest
  if (playerQuest.completedSubquests.includes(subquestNumber)) {
    return { success: false, message: "Subquest already completed" };
  }

  // Mark completed
  playerQuest.completedSubquests.push(subquestNumber);
  
  // Check if they completed the whole quest
  if (playerQuest.completedSubquests.length === 6) {
    playerQuest.completed = true;
    
    // Check if this quest completion awards a companion
    const companionData = require('./companionData');
    const qDef = getQuestDef(questId);
    if (qDef) {
      const companion = companionData.getCompanionByQuest(qDef.quest_title);
      if (companion) {
        if (!player.unlockedCompanions) player.unlockedCompanions = [];
        if (!player.unlockedCompanions.includes(companion.id)) {
          player.unlockedCompanions.push(companion.id);
          if (broadcastRef) {
            broadcastRef({ type: 'companion_unlocked', sessionId, companion });
          }
        }
      }
    }
  }
  
  // Award Fixed XP
  const xpReward = subquest.subquest_xp || 0;
  let xpResult = null;
  if (xpReward > 0) {
    xpResult = awardFixedXP(player, xpReward);
  }

  // Save state
  savePlayerQuests(sessionId, quests);
  sendQuestUpdate(sessionId);

  return {
    success: true,
    message: `Completed: ${subquest.subquest_title}`,
    reward: subquest.subquest_reward,
    xpGained: xpReward,
    leveledUp: xpResult ? xpResult.leveledUp : false,
    newLevel: xpResult ? xpResult.newLevel : player.level
  };
}

/**
 * Event hook when a player changes zones.
 */
function onZoneChange(sessionId, zoneId) {
  // TODO: Check MAP_COVERAGE_DEFINITIONS to see if this triggers an exploration subquest
  // Example: if zoneId matches a location in map coverage, award subquest XP.
  // This is a placeholder to prevent crashes from index.js
}

/**
 * Event hook when a player kills an enemy.
 */
function onEnemyDeath(sessionId, enemyId, isBoss) {
  const player = playersRef.get(sessionId);
  if (!player) return;

  let quests = getPlayerQuests(sessionId);
  let updated = false;

  // Injects a default quest so the user immediately sees it working on kill
  let killQuest = quests.find(q => q.id === 'kill_monsters_demo');
  if (!killQuest) {
    killQuest = {
      id: 'kill_monsters_demo',
      title: 'Monster Hunter',
      description: 'Kill 5 monsters in the wild to prove your worth.',
      progress: 0,
      targetCount: 5,
      completed: false
    };
    quests.push(killQuest);
    updated = true;
  }

  for (let q of quests) {
    if (!q.completed && q.targetCount && q.targetCount > 1) {
      if (!q.progress) q.progress = 0;
      q.progress += 1;
      updated = true;
      if (q.progress >= q.targetCount) {
        q.completed = true;
        q.progress = q.targetCount;
        
        // Example Reward
        const { awardFixedXP } = require('./progressionSystem');
        awardFixedXP(player, 100);
      }
    }
  }

  if (updated) {
    savePlayerQuests(sessionId, quests);
    sendQuestUpdate(sessionId); // This broadcasts `quest_update` for QuestTracker to read
  }
}

/**
 * Adds a quest to a player's active quest list.
 */
function addQuest(sessionId, questId) {
  if (playersRef && broadcastRef) {
     const player = playersRef.get(sessionId);
     if (player) {
        if (!player.activeQuests) player.activeQuests = [];
        if (!player.completedQuests) player.completedQuests = [];
        
        if (!player.activeQuests.includes(questId) && !player.completedQuests.includes(questId)) {
           player.activeQuests.push(questId);
           broadcastRef({ type: "quest_updated", questId, status: "active" }, { sessionId });
           console.log(`[Quest] Assinged ${questId} to ${sessionId}`);
        }
     }
  }
}

module.exports = {
  init,
  completeSubquest,
  getQuestDef,
  getSubquestDef,
  getMapCoverageDef,
  getLocationCoverageDef,
  onZoneChange,
  onEnemyDeath,
  addQuest,
  getPostgameQuestDef,
  getTorinnPostgameQuests,
  getGodlyReward
};
