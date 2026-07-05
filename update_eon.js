const fs = require('fs');
let npcs = JSON.parse(fs.readFileSync('backend/npc_data.json', 'utf8'));

const eon = npcs.find(n => n.id === 'npc_epochalypse_agent_chronos');
if (eon) {
  eon.id = 'npc_epochalypse_agent_eon';
  eon.name = 'Eon, The Time Weaver';
  
  eon.dialogue = [
    'The hourglass drains with every millisecond.',
    'Every passing generation marches toward the final epoch.',
    'We observe the entropy of this continuum.'
  ];
  
  eon.dialogueTree.start.text = 'Ah, the great hero. You have reached a crucial juncture in history. You have defeated the final boss, yet you do not see the impermanence of this era.';
  
  eon.dialogueTree.who.text = 'I am Eon, an agent of the Order of the Epochalypse. We manipulate the chronology of events, synchronizing the present and future to our grand agenda. We have guided your path since antiquity.';
  
  eon.dialogueTree.what.text = 'Your brief moment of victory is but an interval—a transient pause in the grand sequence of eternity. We are accelerating the pace, hastening reality toward its final expiration deadline.';
  
  eon.dialogueTree.goal.text = 'Our timeline demands an end to the passage of all eras. We seek the power to shatter the metronome of existence, forcing eternity into a singular instant of pure infinity. Forever ends now.';
}

fs.writeFileSync('backend/npc_data.json', JSON.stringify(npcs, null, 2), 'utf8');
console.log('Updated Chronos to Eon and injected time vocabulary');
