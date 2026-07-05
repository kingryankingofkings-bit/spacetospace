const fs = require('fs');
let npcs = JSON.parse(fs.readFileSync('backend/npc_data.json', 'utf8'));

const ulrich = {
  id: 'npc_sky_warden_ulrich',
  name: 'Ulrich Son of Gunther',
  role: 'Sky Warden Founder',
  archetype: 'tank_bruiser',
  x: 2,
  y: 1,
  z: 10,
  hp: 99999,
  maxHp: 99999,
  baseDamage: 4000,
  state: 'idle',
  modelFile: 'geographic_npcs/sky_wardens/ulrich.glb',
  zone: 'urban_core',
  specialAura: 'bear_spirit',
  dialogue: [
    'The weak need a shield.',
    'I bear the weight so others don\'t have to.',
    'Stand firm.'
  ],
  dialogueTree: {
    start: {
      text: 'I am Ulrich, tied to the Land of the Bear. The Sky Wardens do not judge your past, only your willingness to bleed for the future. Many of our ranks are former criminals. Does that bother you?',
      choices: [
        { label: 'Not if they protect people.', next: 'protect' },
        { label: 'A criminal is a criminal.', next: 'criminal' }
      ]
    },
    protect: {
      text: 'Good. We are conscripted, branded, and bound. But we hold the line.',
      choices: [
        { label: 'I understand.', next: 'start' }
      ]
    },
    criminal: {
      text: 'Perhaps. But our magical tattoos ensure we resurrect when we die in duty. We pay our debts in blood, over and over.',
      choices: [
        { label: 'I see.', next: 'start' }
      ]
    }
  },
  level: 99,
  xpReward: 0
};

const reed = {
  id: 'npc_sky_warden_reed',
  name: 'Reed Ulmo / The Ghost King',
  role: 'Sky Warden Founder',
  archetype: 'rogue_assassin',
  x: -2,
  y: 1,
  z: 10,
  hp: 99999,
  maxHp: 99999,
  baseDamage: 6000,
  state: 'idle',
  modelFile: 'geographic_npcs/sky_wardens/reed.glb',
  zone: 'urban_core',
  specialAura: 'shadow_cloak',
  dialogue: [
    'Shadows hide many sins.',
    'Death is just a routing protocol for us.',
    'I am the Ghost King.'
  ],
  dialogueTree: {
    start: {
      text: 'Reed Ulmo. Or the Ghost King, depending on who you ask in the Land of the Shadow. We are the reason monsters don\'t eat the innocent. Don\'t let Narexi\'s fear campaign turn you against us.',
      choices: [
        { label: 'What is Narexi saying?', next: 'narexi' }
      ]
    },
    narexi: {
      text: 'She tells the truth, mostly. She sharpens our conscription, our secrecy, and our power imbalance into weapons to make the world doubt us. It is heroic, but uncomfortable.',
      choices: [
        { label: 'Thank you for the warning.', next: 'start' }
      ]
    }
  },
  level: 99,
  xpReward: 0
};

npcs.push(ulrich);
npcs.push(reed);
fs.writeFileSync('backend/npc_data.json', JSON.stringify(npcs, null, 2), 'utf8');
console.log('Added Ulrich and Reed');
