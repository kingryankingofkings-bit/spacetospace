const fs = require('fs');
const path = require('path');
const { generateLoot } = require('./lootSystem');

let SPECIAL_EVENTS = [];
let SPECIAL_EVENT_MONSTERS = [];
let dbRef;
let broadcastRef;
let playersRef;

function init(db, broadcast, players) {
  dbRef = db;
  broadcastRef = broadcast;
  playersRef = players;
  try {
    const eventsPath = path.join(__dirname, 'data', 'special_events.json');
    if (fs.existsSync(eventsPath)) {
      SPECIAL_EVENTS = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
      console.log(`Loaded ${SPECIAL_EVENTS.length} special events.`);
    }

    const monstersPath = path.join(__dirname, 'data', 'special_event_monster_stats.json');
    if (fs.existsSync(monstersPath)) {
      SPECIAL_EVENT_MONSTERS = JSON.parse(fs.readFileSync(monstersPath, 'utf8'));
      console.log(`Loaded ${SPECIAL_EVENT_MONSTERS.length} special event monster stats.`);
    }
  } catch (err) {
    console.error("Error loading special events:", err);
  }
}

function getEventForSublocation(sublocation) {
  return SPECIAL_EVENTS.find(e => e.sublocation === sublocation);
}

function triggerEvent(sessionId, sublocation) {
  const player = playersRef.get(sessionId);
  if (!player) return { success: false, message: "Player not found" };

  if (player.level < 20) {
    return { success: false, message: "Level 20 required" };
  }

  const event = getEventForSublocation(sublocation);
  if (!event) {
    return { success: false, message: "No special event for this sublocation" };
  }
  
  if (player.level < event.required_player_level) {
    return { success: false, message: `Level ${event.required_player_level} required` };
  }
  
  const monsters = SPECIAL_EVENT_MONSTERS.filter(m => m.event_id === event.event_id);
  
  if (broadcastRef) {
    broadcastRef({ type: 'special_event_triggered', sessionId, event, monsters });
  }

  return {
    success: true,
    event,
    monsters
  };
}

function completeEvent(sessionId, eventId) {
  const player = playersRef.get(sessionId);
  if (!player) return { success: false, message: "Player not found" };

  const event = SPECIAL_EVENTS.find(e => e.event_id === eventId);
  if (!event) return { success: false, message: "Event not found" };

  // Roll loot using event.event_id
  const lootItem = generateLoot(event.event_id);
  
  if (lootItem) {
    // We would ideally add it to player's inventory
    // Assuming we have some inventory append logic, we'll just broadcast for now
    if (broadcastRef) {
      broadcastRef({ type: 'loot_dropped', sessionId, lootItem });
    }
  }

  return {
    success: true,
    message: "Special event completed",
    loot: lootItem || null,
    xpGained: 0 // Policy: 0 XP
  };
}

module.exports = {
  init,
  getEventForSublocation,
  triggerEvent,
  completeEvent
};
