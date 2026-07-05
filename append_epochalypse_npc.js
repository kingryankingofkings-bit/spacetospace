const fs = require('fs');
let npcs = JSON.parse(fs.readFileSync('backend/npc_data.json', 'utf8'));

const epochalypseAgent = {
  id: 'npc_epochalypse_agent_chronos',
  name: 'Chronos, The Time Weaver',
  role: 'Agent of the Epochalypse',
  archetype: 'mystic',
  x: 10,
  y: 1,
  z: 10,
  hp: 99999,
  maxHp: 99999,
  baseDamage: 5000,
  state: 'idle',
  modelFile: 'geographic_npcs/epochalypse/chronos.glb',
  zone: 'urban_core',
  specialAura: 'shadow_cloak',
  dialogue: [
    'Time is winding down.',
    'You celebrate a victory, but the end approaches.',
    'Tick tock.'
  ],
  dialogueTree: {
    start: {
      text: 'Ah, the great hero. You have defeated the final boss and saved the realm. Or so you believe.',
      choices: [
        { label: 'Who are you?', next: 'who', reqChoice: 'defeated_final_boss' },
        { label: 'What do you mean?', next: 'what', reqChoice: 'defeated_final_boss' },
        { label: 'I do not have time for riddles.', next: null }
      ]
    },
    who: {
      text: 'I am but a servant of the Order of the Epochalypse. We have watched you from the shadows, manipulating the strings while you played the hero.',
      choices: [
        { label: 'What is your goal?', next: 'goal' }
      ]
    },
    what: {
      text: 'Your little victory merely bought this reality a few more breaths. We are accelerating time toward its inevitable, beautiful conclusion.',
      choices: [
        { label: 'What is your goal?', next: 'goal' }
      ]
    },
    goal: {
      text: 'Not conquest or wealth. We seek the ancient power to fast-forward all of existence to its final end. The true Epochalypse is coming, and you cannot stop time itself.',
      choices: [
        { label: 'We shall see about that.', next: 'start' }
      ]
    }
  },
  level: 99,
  xpReward: 0
};

npcs.push(epochalypseAgent);
fs.writeFileSync('backend/npc_data.json', JSON.stringify(npcs, null, 2), 'utf8');
console.log('Added Order of the Epochalypse NPC');
