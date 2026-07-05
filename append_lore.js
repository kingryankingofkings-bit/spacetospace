const fs = require('fs');
let content = fs.readFileSync('C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\MASTER_GAME_SYSTEMS_BIBLE.md', 'utf8');

content += `

## 11. World Lore & Factions

### The Sky Wardens
The Sky Wardens are a private, world-policing guild built to protect living beings from cruelty, abuse, monsters, corruption, and supernatural catastrophe. They are not supposed to be a government, army, or ruling nation, even though their power makes many civilians fear they are becoming one. Their stated purpose is simple: stand between ordinary people and the things ordinary people cannot survive.

They were founded around the legendary figures Torinn Rhogar, Ulrich Son of Gunther, and Reed Ulmo / Reed the Ghost King, with Torinn tied to the Land of the Dragon, Ulrich to the Land of the Bear, and Reed to the Land of the Shadow. Over time, the Sky Wardens became a widely accepted protective force across Tristul.

Their members are often former criminals offered service instead of punishment. That makes the organization morally complicated: the Sky Wardens give people a second chance, but that 'choice' is often made under threat of prison, mutilation, execution, or ruin. Recruits receive a magical tattoo that grants a minor ability and, most importantly, death-response routing: when a Warden dies, the mark normally carries the body to a bastion for resurrection. That allows Wardens to face threats most people cannot, but it also turns death into part of their labor contract.

Their purpose in the story is both heroic and uncomfortable. They truly protect people. They also brand, bind, command, and spend their own members in the name of protection. That tension is why Narexi's fear campaign works: she does not need to invent every accusation against them. She sharpens the true parts—the conscription, the leash, the secrecy, the power imbalance—and uses them to make the world doubt the people holding the line.

In one sentence: the Sky Wardens are a powerful protector-guild of branded, resurrecting Wardens whose mission is to prevent the mistreatment and destruction of living beings, even when that protection costs freedom, trust, and sometimes the Wardens themselves.
`;

fs.writeFileSync('C:\\Users\\Kingr\\.gemini\\antigravity\\brain\\1586f70d-6beb-44f4-90da-b66099060288\\MASTER_GAME_SYSTEMS_BIBLE.md', content, 'utf8');
console.log('Appended lore to BIBLE');
