const PET_DB = {
  // The Urban Core & Industrial Zones
  'scrap_pup': { id: 'scrap_pup', name: 'Scrap-Pup', description: 'A tiny, energetic canine made entirely of recycled toaster parts, loose wires, and a glowing LED nose.', location: 'The Urban Core & Industrial Zones' },
  'neon_gecko': { id: 'neon_gecko', name: 'Neon Gecko', description: 'A wall-climbing lizard whose scales constantly shift colors to match the ambient neon signs of the city.', location: 'The Urban Core & Industrial Zones' },
  'hover_moth': { id: 'hover_moth', name: 'Hover-Moth', description: 'A palm-sized, mechanical moth that floats silently using miniature anti-gravity drives instead of wings.', location: 'The Urban Core & Industrial Zones' },
  'cable_snake': { id: 'cable_snake', name: 'Cable-Snake', description: 'A harmless serpent that mimics the look of heavy fiber-optic cables, complete with a USB-style tail.', location: 'The Urban Core & Industrial Zones' },
  'datapad_sprite': { id: 'datapad_sprite', name: 'Datapad Sprite', description: 'A small, hard-light hologram that projects a tiny, expressive face and jumps between digital screens.', location: 'The Urban Core & Industrial Zones' },
  'gutter_bot': { id: 'gutter_bot', name: 'Gutter-Bot', description: 'A rusted, dome-shaped cleaning drone the size of a roomba that happily follows you around picking up lint.', location: 'The Urban Core & Industrial Zones' },
  'chrome_raven': { id: 'chrome_raven', name: 'Chrome Raven', description: 'A sleek, highly polished metallic bird that obsessively collects shiny bullet casings and coins.', location: 'The Urban Core & Industrial Zones' },

  // The Eastern Wilds & Canopy Sanctuaries
  'spore_bunny': { id: 'spore_bunny', name: 'Spore-Bunny', description: 'A fluffy rabbit with a back covered in glowing, bioluminescent mushrooms that illuminate dark paths.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'bark_pug': { id: 'bark_pug', name: 'Bark-Pug', description: 'A squat, heavy-breathing dog whose skin is made of hardened, mossy tree bark.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'leaf_glider': { id: 'leaf_glider', name: 'Leaf-Glider', description: 'A tiny flying squirrel that camouflages perfectly as a falling autumn leaf.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'vine_snake': { id: 'vine_snake', name: 'Vine-Snake', description: 'A friendly reptile that functions and feels exactly like a living, wrapping ivy branch.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'nectar_hummer': { id: 'nectar_hummer', name: 'Nectar-Hummer', description: 'An oversized hummingbird with vibrant flower petals in place of feathers.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'pebble_toad': { id: 'pebble_toad', name: 'Pebble-Toad', description: 'A heavy toad that perfectly camouflages as a small, moss-covered rock until it hops.', location: 'The Eastern Wilds & Canopy Sanctuaries' },
  'dew_drop_beetle': { id: 'dew_drop_beetle', name: 'Dew-Drop Beetle', description: 'A large, friendly insect carrying a permanent, perfect sphere of pure water on its back.', location: 'The Eastern Wilds & Canopy Sanctuaries' },

  // The Western Wastes & Arid Plains
  'dust_fox': { id: 'dust_fox', name: 'Dust-Fox', description: 'A large-eared fennec fox that constantly sheds a harmless trail of sparkling, golden sand.', location: 'The Western Wastes & Arid Plains' },
  'tuning_pup': { id: 'tuning_pup', name: 'Tuning-Pup', description: 'A coyote cub with small, vibrating tuning forks for ears that hum when danger is nearby.', location: 'The Western Wastes & Arid Plains' },
  'canyon_crawler': { id: 'canyon_crawler', name: 'Canyon Crawler', description: 'A tiny, harmless scorpion whose stinger has been replaced by a softly glowing geode.', location: 'The Western Wastes & Arid Plains' },
  'ash_rat': { id: 'ash_rat', name: 'Ash-Rat', description: 'A rodent that safely eats smoldering embers and breathes tiny, happy puffs of smoke.', location: 'The Western Wastes & Arid Plains' },
  'glass_turtle': { id: 'glass_turtle', name: 'Glass-Turtle', description: 'A slow-moving tortoise with a shell made of naturally fused, transparent desert glass.', location: 'The Western Wastes & Arid Plains' },
  'echo_bat': { id: 'echo_bat', name: 'Echo-Bat', description: 'A bat with oversized ears that repeats your character\'s last spoken word in a tiny, high-pitched squeak.', location: 'The Western Wastes & Arid Plains' },

  // The Deep Transit & Subterranean Depths
  'lantern_guppy': { id: 'lantern_guppy', name: 'Lantern-Guppy', description: 'A floating, air-breathing fish with a glowing lure dangling from its head to light up the transit tunnels.', location: 'The Deep Transit & Subterranean Depths' },
  'slag_slime': { id: 'slag_slime', name: 'Slag-Slime', description: 'A warm, friendly puddle of sentient lava that purrs like a cat when interacted with.', location: 'The Deep Transit & Subterranean Depths' },
  'trench_crab': { id: 'trench_crab', name: 'Trench-Crab', description: 'A small crustacean wearing a discarded, crushed soda can as a makeshift pressure helmet.', location: 'The Deep Transit & Subterranean Depths' },
  'geode_snail': { id: 'geode_snail', name: 'Geode-Snail', description: 'A slow-moving gastropod leaving a trail of shimmering crystal dust instead of slime.', location: 'The Deep Transit & Subterranean Depths' },
  'blind_mole': { id: 'blind_mole', name: 'Blind-Mole', description: 'A cute, eyeless rodent that uses echolocation clicks to navigate the underground grids.', location: 'The Deep Transit & Subterranean Depths' },
  'subway_rat': { id: 'subway_rat', name: 'Subway-Rat', description: 'An unusually clean, highly intelligent rat wearing a tiny, scavenged train conductor\'s hat.', location: 'The Deep Transit & Subterranean Depths' },
  'pressure_squid': { id: 'pressure_squid', name: 'Pressure-Squid', description: 'A miniature squid that floats in the air, leaving a trail of harmless, floating ink bubbles.', location: 'The Deep Transit & Subterranean Depths' },

  // The Cosmic Layer & Ethereal Zones
  'star_mite': { id: 'star_mite', name: 'Star-Mite', description: 'A floating speck of concentrated starlight that orbits your character\'s head like a tiny moon.', location: 'The Cosmic Layer & Ethereal Zones' },
  'lunar_moth': { id: 'lunar_moth', name: 'Lunar-Moth', description: 'An ethereal insect with wings that display the real-time phases of the planet\'s moon.', location: 'The Cosmic Layer & Ethereal Zones' },
  'void_kitten': { id: 'void_kitten', name: 'Void-Kitten', description: 'A feline silhouette made entirely of dark matter that occasionally phases harmlessly through walls.', location: 'The Cosmic Layer & Ethereal Zones' },
  'meteor_pup': { id: 'meteor_pup', name: 'Meteor-Pup', description: 'A hyperactive dog made of floating, superheated space rock held together by gravity.', location: 'The Cosmic Layer & Ethereal Zones' },
  'aether_jelly': { id: 'aether_jelly', name: 'Aether-Jelly', description: 'A translucent jellyfish that swims through the air, completely unaffected by gravity or physics.', location: 'The Cosmic Layer & Ethereal Zones' },
  'gravity_sloth': { id: 'gravity_sloth', name: 'Gravity-Sloth', description: 'A miniature sloth that permanently floats upside down, completely ignoring the floor.', location: 'The Cosmic Layer & Ethereal Zones' },
  'plasma_wisp': { id: 'plasma_wisp', name: 'Plasma-Wisp', description: 'A sentient, friendly ball of static electricity that playfully zaps your armor.', location: 'The Cosmic Layer & Ethereal Zones' },
  'comet_turtle': { id: 'comet_turtle', name: 'Comet-Turtle', description: 'A tortoise with a glowing tail of ice and dust that trails behind it when it manages to break into a sprint.', location: 'The Cosmic Layer & Ethereal Zones' }
};

function getPet(id) {
  return PET_DB[id];
}

module.exports = {
  PET_DB,
  getPet
};
