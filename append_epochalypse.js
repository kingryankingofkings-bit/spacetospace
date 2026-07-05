const fs = require('fs');
let content = fs.readFileSync('C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\MASTER_GAME_SYSTEMS_BIBLE.md', 'utf8');

content += `

### The Order of the Epochalypse
A secretive, apocalyptic faction devoted to ending existence by weaponizing time itself, which only reveals itself after the 9th and final boss is defeated. They operate through indirect control rather than open rule—using suggestion spells, instigating in-fighting, political manipulation, and exploiting existing tensions among leaders, factions, and social classes.

Their true goal is not ordinary conquest, wealth, or rulership. They seek access to ancient time-based power profound enough to fast-forward all of time to the end of existence. 

In short: The Order of the Epochalypse is an apocalyptic time cult/conspiracy that manipulates others from the shadows while pursuing the acceleration of reality toward its final end.
`;

fs.writeFileSync('C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\MASTER_GAME_SYSTEMS_BIBLE.md', content, 'utf8');
console.log('Appended Epochalypse lore to BIBLE');
