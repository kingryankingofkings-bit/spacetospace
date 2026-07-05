/**
 * dialogueManager.js
 * Implements a branching dialogue tree system for NPCs.
 */

const DIALOGUE_TREES = {
  "default_merchant": {
    "root": {
      text: "Greetings, traveler. Need supplies?",
      options: [
        { text: "Show me your wares.", action: "vendor_open" },
        { text: "Just passing through.", nextNode: "farewell" }
      ]
    },
    "farewell": {
      text: "Safe travels. Watch out for the corrupted.",
      options: [
        { text: "Goodbye.", action: "close" }
      ]
    }
  },
  "default_quest_giver": {
    "root": {
      text: "You there! I need help. The sector is overrun.",
      options: [
        { text: "What do you need?", nextNode: "quest_details" },
        { text: "Not my problem.", action: "close" }
      ]
    },
    "quest_details": {
      text: "Clear out 5 monsters in the quarantine zone. I'll pay you.",
      options: [
        { text: "I'll do it.", action: "accept_quest", questId: "quest_101" },
        { text: "Maybe later.", action: "close" }
      ]
    }
  }
};

/**
 * Gets a dialogue node for a given NPC dialogue tree.
 */
function getDialogueNode(treeId, nodeId = "root") {
  const tree = DIALOGUE_TREES[treeId] || DIALOGUE_TREES["default_merchant"];
  return tree[nodeId] || tree["root"];
}

module.exports = {
  getDialogueNode
};
