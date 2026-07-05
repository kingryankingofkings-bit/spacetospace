const fs = require('fs');
const path = require('path');

const npcFilePath = path.join(__dirname, 'npc_data.json');
let npcData = JSON.parse(fs.readFileSync(npcFilePath, 'utf8'));

// Find a specific NPC or just take the first one
const npc = npcData[0];

npc.dialogueTree = {
  start: {
    text: "Halt, traveler. The Lunar Readiness Base is on high alert. State your business.",
    choices: [
      { label: "I'm looking for work.", next: "work" },
      { label: "I belong to the Vanguard.", next: "vanguard_check", reqFaction: { faction: "vanguard", min: 10 } },
      { label: "Nevermind.", next: null }
    ]
  },
  work: {
    text: "Work? We don't hand out work to strangers. But... if you can prove your worth, we might talk.",
    choices: [
      { label: "I'll prove it. (Join Vanguard)", next: "join_vanguard" },
      { label: "I don't need your approval.", next: null }
    ]
  },
  join_vanguard: {
    text: "Very well. Consider yourself an initiate. Don't make me regret this.",
    addChoice: "joined_vanguard",
    addFactionRep: { faction: "vanguard", amount: 15 },
    choices: [
      { label: "Thank you.", next: null }
    ]
  },
  vanguard_check: {
    text: "Ah, a fellow Vanguard member. The armory is open to you. We have some special tasks if you're interested.",
    choices: [
      { label: "What tasks?", next: "tasks" },
      { label: "Good to know.", next: null }
    ]
  },
  tasks: {
    text: "We need someone to clear out the Night Terrors to the east. Report back when it's done.",
    choices: [
      { label: "Consider it done.", next: null }
    ]
  }
};

fs.writeFileSync(npcFilePath, JSON.stringify(npcData, null, 2), 'utf8');
console.log('Successfully patched npc_data.json with dialogue tree!');
