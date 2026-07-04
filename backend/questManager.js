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

module.exports = {
  init,
  completeSubquest,
  getQuestDef,
  getSubquestDef,
  getMapCoverageDef,
  getLocationCoverageDef
};
