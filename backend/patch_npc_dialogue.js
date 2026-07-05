const fs = require('fs');
const path = require('path');

const npcPath = path.join(__dirname, 'npc_data.json');
const npcs = JSON.parse(fs.readFileSync(npcPath, 'utf8'));

// Dictionaries of generic lore based on archetype or role
const randomLore = [
  "Stay sharp. The wilds are unforgiving.",
  "I heard there's a surge of Void Anomalies in the east.",
  "Keep your weapon drawn. You never know.",
  "Have you seen the Ascendant Colossus? terrifying.",
  "I'm just trying to make it to the next cycle."
];

let updatedCount = 0;

npcs.forEach(npc => {
  if (npc.dialogueTree && Object.keys(npc.dialogueTree).length > 2) {
     return; 
  }

  const lore = randomLore[Math.floor(Math.random() * randomLore.length)];
  let tree = null;

  if (["Broker", "Smith", "Fixer"].includes(npc.role)) {
    let vType = npc.role === "Smith" ? "blacksmith" : "general";
    if (npc.role === "Fixer") vType = "alchemist";
    npc.vendorType = vType; 
    
    tree = {
      "start": {
        "text": `Welcome. If you have the credits, I have the goods.`,
        "choices": [
          { "label": "Show me what you have.", "next": "do_vendor" },
          { "label": "Not right now.", "next": null }
        ]
      },
      "do_vendor": {
        "action": "vendor_open",
        "text": "Have a look.",
        "choices": [ { "label": "Leave", "next": null } ]
      }
    };
  } 
  else if (["Medic", "Custodian"].includes(npc.role)) {
    tree = {
      "start": {
        "text": "You look banged up. Need some immediate triage?",
        "choices": [
          { "label": "Yes, please heal me.", "next": "do_heal" },
          { "label": "I'll manage.", "next": null }
        ]
      },
      "do_heal": {
        "action": "heal",
        "text": "There you go. Good as new. Stay out of trouble.",
        "choices": [
          { "label": "Thanks.", "next": null }
        ]
      }
    };
  }
  else if (["Captain", "Warden", "Marshal"].includes(npc.role)) {
    tree = {
      "start": {
        "text": `Hold a moment, traveler. We're short-handed and could use capable fighters.`,
        "choices": [
          { "label": "What do you need done?", "next": "offer" },
          { "label": "I'm busy.", "next": null }
        ]
      },
      "offer": {
        "text": "There's a bounty on a high-value target in this sector. Standard Vanguard payout.",
        "choices": [
          { "label": "I'll take the job.", "next": "do_accept_quest" },
          { "label": "Maybe later.", "next": null }
        ]
      },
      "do_accept_quest": {
        "action": "accept_quest", 
        "questId": "bounty_test_1",
        "text": "Excellent. Report back when the deed is done.",
        "choices": [
          { "label": "Will do.", "next": null }
        ]
      }
    };
  }
  else {
    tree = {
      "start": {
        "text": `Greetings. ${lore}`,
        "choices": [
          { "label": "Farewell.", "next": null }
        ]
      }
    };
  }

  npc.dialogueTree = tree;
  updatedCount++;
});

fs.writeFileSync(npcPath, JSON.stringify(npcs, null, 2), 'utf8');
console.log(`Successfully injected dialogue trees into ${updatedCount} NPCs.`);
