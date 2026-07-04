export interface SkillNode {
  id: string;
  name: string;
  level: number;
  type: string;
  description: string;
  cooldown?: string;
}

export interface SkillTier {
  name: string;
  minLevel: number;
  maxLevel: number;
  skills: SkillNode[];
}

export interface ClassDefinition {
  id: string;
  name: string;
  combatStyle: string;
  description: string;
  freeFlowMechanic: string;
  skillTree: SkillTier[];
}

export const CLASSES: Record<string, ClassDefinition> = {
  "the_protocol_weaver": {
    "id": "the_protocol_weaver",
    "name": "The Protocol Weaver",
    "combatStyle": "Reality Manipulation / Crowd Control",
    "description": "The master of battlefield manipulation, turning physical combat into an exercise of structural and cognitive analysis.",
    "freeFlowMechanic": "This class fights by analyzing and \"editing\" the battlefield. Instead of raw physical strikes, they use spatial anomalies to restructure the fight. A perfect parry allows them to \"revise\" an enemy's state, stripping away armor or reversing their attack vectors. High-level combos allow them to temporarily erase low-level fodder from the combat zone entirely to focus on priority targets.\n\nClass 1 Architecture: The Protocol Weaver",
    "skillTree": [
      {
        "name": "Tier 1: Foundation",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_protocol_weaver_skill_1",
            "name": "Syntax Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Protocol Point upon a successful hit without breaking your combo."
          },
          {
            "id": "the_protocol_weaver_skill_2",
            "name": "Ablative Edits",
            "level": 2,
            "type": "Passive",
            "description": "Syntax Strike now physically strips away 1% of an enemy\u2019s armor rating per hit. Stacks up to 10% on a single target."
          },
          {
            "id": "the_protocol_weaver_skill_3",
            "name": "Flow-State Analytics",
            "level": 3,
            "type": "Passive",
            "description": "The grace period before your combo multiplier resets is permanently increased by 0.75 seconds."
          },
          {
            "id": "the_protocol_weaver_skill_4",
            "name": "Vaulting Lexicon",
            "level": 4,
            "type": "Active",
            "description": "Unlocks the directional vault. Vaulting directly over an enemy\u2019s head applies the Exposed status effect to them for 3 seconds."
          },
          {
            "id": "the_protocol_weaver_skill_5",
            "name": "Structural Rewrite",
            "level": 5,
            "type": "Active / Finisher",
            "description": "Consumes 5 Protocol Points. A heavy, un-interruptible kinetic slam that shatters Exposed targets, dealing 250% base damage."
          },
          {
            "id": "the_protocol_weaver_skill_6",
            "name": "Momentum Retention",
            "level": 6,
            "type": "Passive",
            "description": "If Structural Rewrite kills the target, 2 Protocol Points are immediately refunded."
          },
          {
            "id": "the_protocol_weaver_skill_7",
            "name": "Parry Protocol",
            "level": 7,
            "type": "Active",
            "description": "Standard block is upgraded to a precision parry. Perfectly timing a parry against a melee attack instantly grants 3 Protocol Points."
          },
          {
            "id": "the_protocol_weaver_skill_8",
            "name": "Blunt Trauma",
            "level": 8,
            "type": "Passive",
            "description": "Increases the stagger duration of perfectly parried enemies by 1.5 seconds."
          },
          {
            "id": "the_protocol_weaver_skill_9",
            "name": "Aerial Extraction",
            "level": 9,
            "type": "Active",
            "description": "Holding the light attack button launches a staggered enemy into the air, allowing you to transition into an aerial juggle."
          },
          {
            "id": "the_protocol_weaver_skill_10",
            "name": "The Red Pen",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Swipes a wide arc of red energetic code in front of you. Instantly applies Exposed to all enemies hit and interrupts unblockable attacks. 15-second cooldown.",
            "cooldown": "15-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Crowd Control",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_protocol_weaver_skill_11",
            "name": "Kinetic Connectivity",
            "level": 11,
            "type": "Passive",
            "description": "Aerial juggles now generate 2 Protocol Points per hit instead of 1."
          },
          {
            "id": "the_protocol_weaver_skill_12",
            "name": "Area-of-Effect",
            "level": 12,
            "type": "AoE) Revisions (Passive",
            "description": "Structural Rewrite now deals 40% of its total damage to all enemies within a 3-meter radius of the primary target."
          },
          {
            "id": "the_protocol_weaver_skill_13",
            "name": "Ground-Swell",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to dive-bomb the ground. Damage scales directly with your current combo multiplier."
          },
          {
            "id": "the_protocol_weaver_skill_14",
            "name": "Feedback Loop",
            "level": 14,
            "type": "Passive",
            "description": "Taking damage no longer instantly resets your combo to zero; it now halves your current multiplier instead."
          },
          {
            "id": "the_protocol_weaver_skill_15",
            "name": "Phonetic Resonance",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 Protocol Point per second. While active, every strike emits a low-frequency hum that slows enemy movement speed in an 8-meter radius by 15%."
          },
          {
            "id": "the_protocol_weaver_skill_16",
            "name": "Deflection Matrix",
            "level": 16,
            "type": "Passive",
            "description": "While Phonetic Resonance is active, incoming projectiles are slowed by 50%, widening the parry window."
          },
          {
            "id": "the_protocol_weaver_skill_17",
            "name": "Grapple Syntax",
            "level": 17,
            "type": "Active",
            "description": "Unlocks a magnetic energy tether. Pulls lightweight fodder enemies directly to you from up to 15 meters away to sustain combos."
          },
          {
            "id": "the_protocol_weaver_skill_18",
            "name": "Heavy Tether",
            "level": 18,
            "type": "Passive",
            "description": "Grapple Syntax can now be used on massive Bosses/Titans. Instead of pulling them to you, it rapidly pulls you to them, granting brief invulnerability during travel."
          },
          {
            "id": "the_protocol_weaver_skill_19",
            "name": "Armor Sunder",
            "level": 19,
            "type": "Passive",
            "description": "Ablative Edits (Level 2) maximum armor reduction stack increased from 10% to 25%."
          },
          {
            "id": "the_protocol_weaver_skill_20",
            "name": "Draft Deletion",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. Target one non-boss enemy. If their health is below 30%, instantly execute them, digitizing their body and causing a burst of healing for the player. 30-second cooldown.",
            "cooldown": "30-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_protocol_weaver_skill_21",
            "name": "Over-Heal Analytics",
            "level": 21,
            "type": "Passive",
            "description": "If Draft Deletion is used while you are at full health, the healing is converted into a temporary over-shield."
          },
          {
            "id": "the_protocol_weaver_skill_22",
            "name": "Flawless Flow",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo grants a 10% boost to attack speed."
          },
          {
            "id": "the_protocol_weaver_skill_23",
            "name": "Perfect Flow",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo grants an additional 15% boost to attack speed and makes your light attacks unblockable by standard shielded mobs."
          },
          {
            "id": "the_protocol_weaver_skill_24",
            "name": "Frame-Trap",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind a static structural clone. The enemy will attack the clone, becoming staggered."
          },
          {
            "id": "the_protocol_weaver_skill_25",
            "name": "Explosive Decoy",
            "level": 25,
            "type": "Passive",
            "description": "The clone created by Frame-Trap now detonates after 2 seconds, dealing moderate kinetic damage."
          },
          {
            "id": "the_protocol_weaver_skill_26",
            "name": "Hard-Coded Health",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases maximum health by 15%."
          },
          {
            "id": "the_protocol_weaver_skill_27",
            "name": "Synergy Points",
            "level": 27,
            "type": "Passive",
            "description": "Protocol Points cap increased from 10 to 20."
          },
          {
            "id": "the_protocol_weaver_skill_28",
            "name": "Dual Rewrite",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 Protocol Points. Unleashes two rapid-fire Structural Rewrites back-to-back, with the second hit guaranteed to critically strike."
          },
          {
            "id": "the_protocol_weaver_skill_29",
            "name": "Executioner's Grace",
            "level": 29,
            "type": "Passive",
            "description": "Dual Rewrite now heals you for 5% of your max health if it successfully kills an Exposed target."
          },
          {
            "id": "the_protocol_weaver_skill_30",
            "name": "System Override",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. slamming your fist into the ground, completely suspending all enemies in a 15-meter radius in an anti-gravity stasis for 4 seconds. 60-second cooldown.",
            "cooldown": "60-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_protocol_weaver_skill_31",
            "name": "Stasis Strike",
            "level": 31,
            "type": "Passive",
            "description": "Hitting enemies suspended by System Override deals double damage but breaks them out of stasis early."
          },
          {
            "id": "the_protocol_weaver_skill_32",
            "name": "Unbroken Chain",
            "level": 32,
            "type": "Passive",
            "description": "Using System Override no longer pauses your combo timer; it locks it in place, completely preventing it from decaying while the stasis is active."
          },
          {
            "id": "the_protocol_weaver_skill_33",
            "name": "Critical Lexicon",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 5%."
          },
          {
            "id": "the_protocol_weaver_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 20% against targets with the Exposed status."
          },
          {
            "id": "the_protocol_weaver_skill_35",
            "name": "The Master Protocol",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 Protocol Points to activate. For 10 seconds, all light attacks apply Exposed, and all heavy attacks act as base-level Structural Rewrites."
          },
          {
            "id": "the_protocol_weaver_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful parry reduces the cooldown of all Major Abilities by 1 second."
          },
          {
            "id": "the_protocol_weaver_skill_37",
            "name": "Infinite Grapple",
            "level": 37,
            "type": "Passive",
            "description": "Grapple Syntax now has zero cooldown and can be used mid-air endlessly to traverse between aerial targets without touching the ground."
          },
          {
            "id": "the_protocol_weaver_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_protocol_weaver_skill_39",
            "name": "Final Revision",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 10%, instantly trigger an automatic System Override centered on you, at no cooldown cost. Can only occur once every 5 minutes."
          },
          {
            "id": "the_protocol_weaver_skill_40",
            "name": "CAPSTONE - EPI-Omniscience",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "You merge with the battlefield's code. For 15 seconds, you become completely intangible to enemy damage. Your combo multiplier is artificially locked at 100x, and every strike against an enemy permanently reduces their maximum health by 2% for the remainder of the encounter (incredibly effective for burning down Titan-class bosses)."
          }
        ]
      }
    ]
  },
  "the_apex_mutator": {
    "id": "the_apex_mutator",
    "name": "The Apex Mutator",
    "combatStyle": "Adaptive Brawler",
    "description": "The ultimate adaptive brawler, driven by a highly volatile genetic and digital matrix. This class thrives on aggressive momentum, physically evolving into deadlier forms as the combo multiplier climbs.",
    "freeFlowMechanic": "Driven by a volatile evolution mechanic. As the player's combo multiplier increases, this class physically transforms mid-fight, growing monstrous appendages or gaining new elemental properties. Reaching a 50-hit combo might trigger an evolution into a winged state for enhanced aerial juggles. If the combo drops, they revert to their base form, forcing a relentlessly aggressive playstyle.\n\nClass 2 Architecture: The Apex Mutator",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Alpha Stage",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_apex_mutator_skill_1",
            "name": "Data-Rend",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Evolution Point (EP) upon a successful hit."
          },
          {
            "id": "the_apex_mutator_skill_2",
            "name": "Alpha Trigger",
            "level": 2,
            "type": "Passive",
            "description": "Reaching a 10-hit combo instantly evolves you into your Alpha Form, increasing movement speed by 15% and slightly altering your physical silhouette with glowing, digital geometry."
          },
          {
            "id": "the_apex_mutator_skill_3",
            "name": "Feral Glide",
            "level": 3,
            "type": "Active",
            "description": "Unlocks a frictionless, digital air-dash to instantly close gaps between isolated targets and maintain your combo."
          },
          {
            "id": "the_apex_mutator_skill_4",
            "name": "Alpha Striker",
            "level": 4,
            "type": "Passive",
            "description": "While in Alpha Form, Data-Rend hits twice per input, effectively doubling EP generation."
          },
          {
            "id": "the_apex_mutator_skill_5",
            "name": "DNA Siphon",
            "level": 5,
            "type": "Active / Finisher",
            "description": "Consumes 5 EP. A vicious, latching bite that drains data from the target, healing you for 5% of your maximum health."
          },
          {
            "id": "the_apex_mutator_skill_6",
            "name": "Digitize Fodder",
            "level": 6,
            "type": "Passive",
            "description": "Killing an enemy instantly grants 2 EP and pauses the combo decay timer for 1 second."
          },
          {
            "id": "the_apex_mutator_skill_7",
            "name": "Reactive Carapace",
            "level": 7,
            "type": "Active",
            "description": "Standard block is upgraded to a parry. Perfectly timing a parry briefly hardens your digital skin, staggering the attacker and generating 3 EP."
          },
          {
            "id": "the_apex_mutator_skill_8",
            "name": "Structural Integrity",
            "level": 8,
            "type": "Passive",
            "description": "If you take damage, you now drop one Evolution Stage instead of instantly reverting all the way to your Base Form."
          },
          {
            "id": "the_apex_mutator_skill_9",
            "name": "Launch Pad",
            "level": 9,
            "type": "Active",
            "description": "Holding the heavy attack button executes a massive, launching uppercut, allowing you to transition seamlessly into an aerial juggle."
          },
          {
            "id": "the_apex_mutator_skill_10",
            "name": "Beta Trigger",
            "level": 10,
            "type": "Passive",
            "description": "Reaching a 25-hit combo evolves you into your Beta Form. You grow noticeably larger; light attacks gain a 2-meter Area-of-Effect (AoE) shockwave."
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Mid-Tier Evolution",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_apex_mutator_skill_11",
            "name": "Beta-Sweep",
            "level": 11,
            "type": "Active",
            "description": "While in Beta Form, holding the light attack button performs a massive, 360-degree tail spin that knocks down surrounding fodder enemies."
          },
          {
            "id": "the_apex_mutator_skill_12",
            "name": "Kinetic Battery",
            "level": 12,
            "type": "Passive",
            "description": "As long as you are actively moving (sprinting, vaulting, or attacking), EP generation is increased by 20%."
          },
          {
            "id": "the_apex_mutator_skill_13",
            "name": "Aerial Pounce",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to dive-bomb an enemy. Damage scales with your current combo multiplier."
          },
          {
            "id": "the_apex_mutator_skill_14",
            "name": "Hard-Coded Biology",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 15%."
          },
          {
            "id": "the_apex_mutator_skill_15",
            "name": "Assimilation Roar",
            "level": 15,
            "type": "Active / Cooldown",
            "description": "Major Ability. Unleashes a digitized roar. Fears low-level fodder for 3 seconds and taunts larger enemies to attack you directly. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          },
          {
            "id": "the_apex_mutator_skill_16",
            "name": "Data-Spike",
            "level": 16,
            "type": "Passive",
            "description": "Beta-Sweep now afflicts hit enemies with Corrupted Code, causing them to take 5% of their maximum health as damage over 4 seconds."
          },
          {
            "id": "the_apex_mutator_skill_17",
            "name": "Vaulting Mutation",
            "level": 17,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over an enemy briefly steals their defense stat, adding it to your own for 3 seconds."
          },
          {
            "id": "the_apex_mutator_skill_18",
            "name": "Symbiotic Link",
            "level": 18,
            "type": "Passive",
            "description": "In multiplayer, if an ally executes a combo finisher within 10 meters of you, you are instantly granted 2 EP."
          },
          {
            "id": "the_apex_mutator_skill_19",
            "name": "Armor Sunder",
            "level": 19,
            "type": "Passive",
            "description": "DNA Siphon (Level 5) now permanently shreds 15% of the target's armor upon a successful hit."
          },
          {
            "id": "the_apex_mutator_skill_20",
            "name": "Omega Threshold",
            "level": 20,
            "type": "Passive",
            "description": "Reaching a 50-hit combo evolves you into your Omega Form. You become a massive, bipedal beast of pure data. All standard light attacks become completely unblockable by normal enemies."
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_apex_mutator_skill_21",
            "name": "Omega Cleave",
            "level": 21,
            "type": "Active",
            "description": "Replaces Data-Rend in Omega Form. A massive, sweeping claw attack that hits all enemies in a frontal cone, dealing 150% base damage."
          },
          {
            "id": "the_apex_mutator_skill_22",
            "name": "Rapid Regression",
            "level": 22,
            "type": "Passive",
            "description": "If your combo timer runs out while in Beta or Omega Form, you explode with digital energy, dealing damage to all nearby enemies proportional to the lost combo size."
          },
          {
            "id": "the_apex_mutator_skill_23",
            "name": "Perfect Flow",
            "level": 23,
            "type": "Passive",
            "description": "Taking a hit in Omega Form no longer immediately degrades your form. Instead, it consumes 15 hits from your combo meter as a \"shield.\""
          },
          {
            "id": "the_apex_mutator_skill_24",
            "name": "Frame-Trap",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind a hollow, molted shell of your current evolutionary stage. The enemy will attack the shell and become staggered."
          },
          {
            "id": "the_apex_mutator_skill_25",
            "name": "Molted Detonation",
            "level": 25,
            "type": "Passive",
            "description": "The shell created by Frame-Trap detonates after 2 seconds, knocking enemies into the air."
          },
          {
            "id": "the_apex_mutator_skill_26",
            "name": "Base Code Optimization",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases base damage of all attacks by 10%."
          },
          {
            "id": "the_apex_mutator_skill_27",
            "name": "Evolution Cap",
            "level": 27,
            "type": "Passive",
            "description": "Maximum EP storage capacity is increased from 10 to 20."
          },
          {
            "id": "the_apex_mutator_skill_28",
            "name": "Dual Siphon",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 EP. DNA Siphon now strikes twice rapidly, doubling the healing and armor-shredding effects."
          },
          {
            "id": "the_apex_mutator_skill_29",
            "name": "Feral Grace",
            "level": 29,
            "type": "Passive",
            "description": "Dodge and vault distance increased by 20%."
          },
          {
            "id": "the_apex_mutator_skill_30",
            "name": "The Anomaly Virus",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. Inject a single target with a highly volatile digital virus. If they die within 5 seconds, they explode into 5 homing projectiles that track other enemies. 45-second cooldown.",
            "cooldown": "45-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_apex_mutator_skill_31",
            "name": "Viral Spread",
            "level": 31,
            "type": "Passive",
            "description": "The homing projectiles from The Anomaly Virus apply the Corrupted Code damage-over-time effect to secondary targets."
          },
          {
            "id": "the_apex_mutator_skill_32",
            "name": "Unbroken Chain",
            "level": 32,
            "type": "Passive",
            "description": "Being stunned or knocked down no longer resets your combo multiplier; it merely pauses the decay timer until you recover."
          },
          {
            "id": "the_apex_mutator_skill_33",
            "name": "Critical Mutation",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 5%."
          },
          {
            "id": "the_apex_mutator_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 20% when attacking targets inflicted with Corrupted Code."
          },
          {
            "id": "the_apex_mutator_skill_35",
            "name": "The Master Form",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 EP to activate. For 10 seconds, you are locked into Omega Form regardless of your current combo multiplier."
          },
          {
            "id": "the_apex_mutator_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful parry reduces the cooldown of Assimilation Roar and The Anomaly Virus by 1 second."
          },
          {
            "id": "the_apex_mutator_skill_37",
            "name": "Infinite Vault",
            "level": 37,
            "type": "Passive",
            "description": "You can now vault mid-air indefinitely, allowing you to bounce from enemy head to enemy head without ever touching the ground."
          },
          {
            "id": "the_apex_mutator_skill_38",
            "name": "Kinetic Battery II",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_apex_mutator_skill_39",
            "name": "Forced Ascension",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 10%, you instantly trigger an automatic evolution into Omega Form and heal for 25% of your max health. Can only occur once every 5 minutes."
          },
          {
            "id": "the_apex_mutator_skill_40",
            "name": "CAPSTONE - Apex Ascendancy",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You digitize into a screen-clearing, primeval avatar of pure corrupted code for 15 seconds. You are entirely invincible, and every single strike causes a cascading chain reaction of digital explosions, essentially turning the entire arena into an active hazard for your enemies."
          }
        ]
      }
    ]
  },
  "the_resonant": {
    "id": "the_resonant",
    "name": "The Resonant",
    "combatStyle": "Rhythm-Based Area of Effect",
    "description": "The kinetic master of the battlefield, treating combat as a heavy bass performance. This class relies on rhythmic strikes, flow-arts movement, and low-frequency area denial to control the tempo of the fight.",
    "freeFlowMechanic": "A highly kinetic class that treats combat like a heavy bass drop. They attack using low-frequency shockwaves and sweeping, flow-arts movement. Every successful timed counter unleashes a resonant blast that stuns surrounding enemies. Their combat loops are entirely rhythm-dependent, rewarding perfect timing to the \"beat\" of the fight with massive area-of-effect damage.\n\nClass 3 Architecture: The Resonant",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Beat",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_resonant_skill_1",
            "name": "Metric Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Decibel (dB) charge per hit."
          },
          {
            "id": "the_resonant_skill_2",
            "name": "Perfect Pitch",
            "level": 2,
            "type": "Passive",
            "description": "Hitting an enemy exactly on the \"beat\" (a visual/audio pulse in the combo meter) generates 2 dB charges and slightly increases the damage of the strike."
          },
          {
            "id": "the_resonant_skill_3",
            "name": "Flow-Arts Evasion",
            "level": 3,
            "type": "Active",
            "description": "Unlocks a rhythmic, spinning dodge. Dodging on the beat perfectly preserves your combo multiplier and grants a brief window of invulnerability."
          },
          {
            "id": "the_resonant_skill_4",
            "name": "Sub-Woofer Slam",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 10 dB. A heavy, ground-pounding kinetic strike that creates a 3-meter shockwave, knocking down all lightweight fodder."
          },
          {
            "id": "the_resonant_skill_5",
            "name": "Resonance Tuning",
            "level": 5,
            "type": "Passive",
            "description": "Enemies hit by Sub-Woofer Slam have their physical armor reduced by 10% for 5 seconds."
          },
          {
            "id": "the_resonant_skill_6",
            "name": "Acoustic Counter",
            "level": 6,
            "type": "Active",
            "description": "Replaces standard block. Parrying an attack releases a sharp burst of feedback, staggering the attacker and instantly generating 5 dB."
          },
          {
            "id": "the_resonant_skill_7",
            "name": "The Build-Up",
            "level": 7,
            "type": "Passive",
            "description": "As your combo multiplier climbs above 15, your light attacks passively emit a low hum that slows the movement speed of enemies within 2 meters."
          },
          {
            "id": "the_resonant_skill_8",
            "name": "Aerial Kick-Drum",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button mid-air causes you to crash down with immense force, launching nearby staggered enemies into the air."
          },
          {
            "id": "the_resonant_skill_9",
            "name": "Extended Range",
            "level": 9,
            "type": "Passive",
            "description": "The shockwave radius of Sub-Woofer Slam is increased from 3 meters to 5 meters."
          },
          {
            "id": "the_resonant_skill_10",
            "name": "The Bass Drop",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. You channel raw low-frequency energy into a devastating directional cone. Shatters enemy shields and completely deafens/disorients surviving targets for 4 seconds. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Shockwave Mastery",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_resonant_skill_11",
            "name": "Kinetic Feedback",
            "level": 11,
            "type": "Passive",
            "description": "Hitting enemies who are actively disoriented by The Bass Drop generates double dB charges."
          },
          {
            "id": "the_resonant_skill_12",
            "name": "Tremor Vault",
            "level": 12,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over a large enemy plants a \"sonic charge\" on their back that detonates after 2 seconds, dealing localized burst damage."
          },
          {
            "id": "the_resonant_skill_13",
            "name": "Ground-Loop",
            "level": 13,
            "type": "Passive",
            "description": "If Sub-Woofer Slam hits more than 3 enemies at once, 50% of the dB cost is instantly refunded."
          },
          {
            "id": "the_resonant_skill_14",
            "name": "Structural Resonance",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 10% and base physical defense by 5%."
          },
          {
            "id": "the_resonant_skill_15",
            "name": "Heavy Wubs",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Constantly drains 2 dB per second. While active, every step you take emits a micro-tremor that interrupts enemy ranged attack animations."
          },
          {
            "id": "the_resonant_skill_16",
            "name": "Defibrillator",
            "level": 16,
            "type": "Passive",
            "description": "Executing a perfect Acoustic Counter heals you for 3% of your maximum health."
          },
          {
            "id": "the_resonant_skill_17",
            "name": "Wall of Sound",
            "level": 17,
            "type": "Active",
            "description": "Pressing the light and heavy attack buttons simultaneously projects a stationary wall of hard-light and sound that absorbs incoming projectiles for 4 seconds."
          },
          {
            "id": "the_resonant_skill_18",
            "name": "Reverb",
            "level": 18,
            "type": "Passive",
            "description": "Enemies that physically strike the Wall of Sound are knocked backward and take minor sonic damage."
          },
          {
            "id": "the_resonant_skill_19",
            "name": "Deep Frequency",
            "level": 19,
            "type": "Passive",
            "description": "Resonance Tuning (Level 5) armor reduction is increased from 10% to 25%."
          },
          {
            "id": "the_resonant_skill_20",
            "name": "Tectonic Shift",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. You slam the ground, causing the very earth beneath you to ripple like water. All enemies within 10 meters are violently thrown into the air, allowing you to easily begin an aerial juggle on any target. 35-second cooldown.",
            "cooldown": "35-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_resonant_skill_21",
            "name": "Anti-Gravity Juggles",
            "level": 21,
            "type": "Passive",
            "description": "Enemies launched by Tectonic Shift fall 50% slower, giving you a massive window to execute complex mid-air combos."
          },
          {
            "id": "the_resonant_skill_22",
            "name": "Unbreakable Rhythm",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 30-hit combo makes you completely immune to being staggered by light enemy attacks."
          },
          {
            "id": "the_resonant_skill_23",
            "name": "Perfect Flow",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 60-hit combo adds a secondary echo to all of your light attacks, effectively causing every strike to hit twice."
          },
          {
            "id": "the_resonant_skill_24",
            "name": "Frame-Trap",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind a concentrated orb of screeching feedback. The enemy attacks the orb, triggering a flashbang effect."
          },
          {
            "id": "the_resonant_skill_25",
            "name": "Deafening Echo",
            "level": 25,
            "type": "Passive",
            "description": "The flashbang from Frame-Trap now heavily reduces the attack damage of blinded enemies by 30% for 5 seconds."
          },
          {
            "id": "the_resonant_skill_26",
            "name": "Sub-Harmonic Healing",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases all incoming healing effectiveness by 15%."
          },
          {
            "id": "the_resonant_skill_27",
            "name": "Maximum Volume",
            "level": 27,
            "type": "Passive",
            "description": "Maximum dB storage capacity is increased from 20 to 40."
          },
          {
            "id": "the_resonant_skill_28",
            "name": "Dual-Woofer Slam",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 20 dB. Executes two back-to-back Sub-Woofer Slams. The second slam has double the radius and automatically critically strikes."
          },
          {
            "id": "the_resonant_skill_29",
            "name": "Rhythmic Grace",
            "level": 29,
            "type": "Passive",
            "description": "Dodge and vault animations are 15% faster and travel 15% further."
          },
          {
            "id": "the_resonant_skill_30",
            "name": "The Soundscape",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You deploy a localized arena-wide aura. For 10 seconds, all enemies moving inside the Soundscape move in slow-motion, while you and your allies move at normal speed. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_resonant_skill_31",
            "name": "Lethal Acoustics",
            "level": 31,
            "type": "Passive",
            "description": "Enemies caught inside The Soundscape take 15% more damage from all sources."
          },
          {
            "id": "the_resonant_skill_32",
            "name": "Unbroken Chain",
            "level": 32,
            "type": "Passive",
            "description": "Taking a heavy hit no longer resets your combo multiplier; it merely reduces it by 10 hits and pushes you backward."
          },
          {
            "id": "the_resonant_skill_33",
            "name": "Critical Frequency",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 5%."
          },
          {
            "id": "the_resonant_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 20% against deafened or disoriented targets."
          },
          {
            "id": "the_resonant_skill_35",
            "name": "The Master Mixer",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 30 dB to activate. For 10 seconds, every single attack you land automatically registers as being perfectly on the \"beat,\" granting maximum damage and dB generation regardless of your actual timing."
          },
          {
            "id": "the_resonant_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Acoustic Counter reduces the cooldown of Tectonic Shift and The Soundscape by 1.5 seconds."
          },
          {
            "id": "the_resonant_skill_37",
            "name": "Infinite Vault",
            "level": 37,
            "type": "Passive",
            "description": "You can now vault mid-air indefinitely by bouncing off the solid soundwaves you create under your own feet."
          },
          {
            "id": "the_resonant_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_resonant_skill_39",
            "name": "Emergency Override",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 10%, you instantly trigger an automatic Tectonic Shift centered on yourself, throwing all threats away from you. Can only occur once every 5 minutes."
          },
          {
            "id": "the_resonant_skill_40",
            "name": "CAPSTONE - The Festival Headliner",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You float above the arena, transforming into a conduit of pure, destructive frequency. For 12 seconds, you cannot be damaged, and you project continuous, rippling shockwaves across the entire battlefield that deal massive damage, permanently shatter all enemy armor plating, and juggle every non-boss enemy in a state of suspended animation."
          }
        ]
      }
    ]
  },
  "the_packmaster": {
    "id": "the_packmaster",
    "name": "The Packmaster",
    "combatStyle": "Tag-Team / Grappler",
    "description": "The ultimate tag-team brawler. This class never fights alone, utilizing an aggressive, heavily augmented canine companion to lock down priority targets, break enemy formations, and extend free-flow combos across massive arenas.",
    "freeFlowMechanic": "Fights seamlessly alongside a heavily armored, aggressive canine companion. The core loop revolves around marking priority targets for the companion to latch onto with a heavy-chewing bite. While the enemy is pinned and their attacks are disrupted, the player can vault off their companion's back to launch into devastating aerial combos on surrounding foes.\n\nClass 4 Architecture: The Packmaster",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Hunt",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_packmaster_skill_1",
            "name": "Twin-Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Command Point (CP) upon a successful hit."
          },
          {
            "id": "the_packmaster_skill_2",
            "name": "The Latch",
            "level": 2,
            "type": "Active",
            "description": "Tap the command button to send the companion to bite and hold your current target. The enemy is completely immobilized for 3 seconds but takes reduced damage from your strikes while pinned."
          },
          {
            "id": "the_packmaster_skill_3",
            "name": "Vaulting Assist",
            "level": 3,
            "type": "Active",
            "description": "Unlocks directional vault. If you vault toward an enemy currently pinned by The Latch, you spring off the companion's back, launching yourself into an aerial combo while instantly generating 2 CP."
          },
          {
            "id": "the_packmaster_skill_4",
            "name": "K-0NG Reinforced Jaws",
            "level": 4,
            "type": "Passive",
            "description": "The companion\u2019s teeth are upgraded with ultra-durable synthetics. The Latch now permanently shreds 15% of an enemy's base armor when the pin ends."
          },
          {
            "id": "the_packmaster_skill_5",
            "name": "Heel & Heel-Strike",
            "level": 5,
            "type": "Active / Finisher",
            "description": "Consumes 5 CP. Recall the companion instantly to your side. As it returns, it wildly bashes through any enemies in its path, briefly staggering them."
          },
          {
            "id": "the_packmaster_skill_6",
            "name": "Momentum Share",
            "level": 6,
            "type": "Passive",
            "description": "If the companion kills an enemy while acting autonomously, your combo multiplier increases by 2."
          },
          {
            "id": "the_packmaster_skill_7",
            "name": "Tag-Team Parry",
            "level": 7,
            "type": "Active",
            "description": "Standard block is upgraded. If you perfectly parry an incoming attack, the companion instantly lunges at the attacker, interrupting their next animation."
          },
          {
            "id": "the_packmaster_skill_8",
            "name": "The Shake",
            "level": 8,
            "type": "Passive",
            "description": "While The Latch is active, the companion violently shakes the target, causing 5% of their max health as physical damage over the 3-second duration."
          },
          {
            "id": "the_packmaster_skill_9",
            "name": "Launching Bite",
            "level": 9,
            "type": "Active",
            "description": "Command the companion to perform a heavy uppercut bite, throwing an isolated enemy into the air for you to juggle."
          },
          {
            "id": "the_packmaster_skill_10",
            "name": "Sic 'Em",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. The companion goes into a frenzy, rapidly teleporting/dashing between up to 5 different targets, applying a 1-second Latch to each and grouping them tightly together. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Crowd Control",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_packmaster_skill_11",
            "name": "Kinetic Bond",
            "level": 11,
            "type": "Passive",
            "description": "Striking an enemy that is currently afflicted by The Latch generates double CP."
          },
          {
            "id": "the_packmaster_skill_12",
            "name": "Meat-Shield",
            "level": 12,
            "type": "Active",
            "description": "If an unblockable projectile is about to hit you, consuming 3 CP causes the companion to leap in front of you, absorbing the blow completely without taking damage."
          },
          {
            "id": "the_packmaster_skill_13",
            "name": "Ground-Pound Intercept",
            "level": 13,
            "type": "Passive",
            "description": "If you are knocked down, the companion automatically unleashes a 3-meter AoE shockwave to push enemies back while you recover."
          },
          {
            "id": "the_packmaster_skill_14",
            "name": "Structural Hardiness",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases your maximum health and the companion's damage resistance by 15%."
          },
          {
            "id": "the_packmaster_skill_15",
            "name": "Ferocious Growl",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 CP per second. The companion emits a terrifying low-frequency growl. All fodder-class enemies within 8 meters are too intimidated to initiate attacks."
          },
          {
            "id": "the_packmaster_skill_16",
            "name": "Opportunistic Strikes",
            "level": 16,
            "type": "Passive",
            "description": "While Ferocious Growl is active, your critical hit chance against intimidated enemies increases by 10%."
          },
          {
            "id": "the_packmaster_skill_17",
            "name": "Drag to Hell",
            "level": 17,
            "type": "Active",
            "description": "Command the companion to latch onto an enemy and drag them forcefully across the arena directly to your feet, knocking over any enemies in the way like bowling pins."
          },
          {
            "id": "the_packmaster_skill_18",
            "name": "Unyielding Grip",
            "level": 18,
            "type": "Passive",
            "description": "The duration of The Latch is increased from 3 seconds to 5 seconds on Boss and Titan-class enemies."
          },
          {
            "id": "the_packmaster_skill_19",
            "name": "Deep Tissue Tear",
            "level": 19,
            "type": "Passive",
            "description": "K-0NG Reinforced Jaws (Level 4) armor reduction is increased from 15% to 30%."
          },
          {
            "id": "the_packmaster_skill_20",
            "name": "Alpha's Command",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. You and the companion target the same enemy. You perform a synchronized, high-damage flurry of attacks. If this ability kills the target, it resets the cooldown of all your Major Abilities. 40-second cooldown.",
            "cooldown": "40-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_packmaster_skill_21",
            "name": "Over-Heal Analytics",
            "level": 21,
            "type": "Passive",
            "description": "If Alpha's Command successfully kills a target, both you and the companion are healed for 15% of your max health."
          },
          {
            "id": "the_packmaster_skill_22",
            "name": "Flawless Pack",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo causes the companion's standard attacks to emit shockwaves, damaging adjacent enemies."
          },
          {
            "id": "the_packmaster_skill_23",
            "name": "Perfect Pack",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo infuses the companion with kinetic energy. Their Latch now completely ignores enemy shielding."
          },
          {
            "id": "the_packmaster_skill_24",
            "name": "Frame-Trap Bait",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes. The companion instantly swaps positions with you, taking the hit and retaliating with a guaranteed critical strike."
          },
          {
            "id": "the_packmaster_skill_25",
            "name": "Retaliation Force",
            "level": 25,
            "type": "Passive",
            "description": "The guaranteed critical strike from Frame-Trap Bait knocks the enemy into a suspended aerial juggle state."
          },
          {
            "id": "the_packmaster_skill_26",
            "name": "Bestial Vigor",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases base movement speed and dodge distance by 10%."
          },
          {
            "id": "the_packmaster_skill_27",
            "name": "Maximum Command",
            "level": 27,
            "type": "Passive",
            "description": "CP storage capacity is increased from 10 to 20."
          },
          {
            "id": "the_packmaster_skill_28",
            "name": "Dual-Latch",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 CP. The companion splits into two hard-light visual echoes of itself, capable of locking down two separate heavy targets simultaneously."
          },
          {
            "id": "the_packmaster_skill_29",
            "name": "Shared Senses",
            "level": 29,
            "type": "Passive",
            "description": "You gain complete immunity to blindness and disorientation status effects."
          },
          {
            "id": "the_packmaster_skill_30",
            "name": "The Den",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You slam the ground, creating a 15-meter circular perimeter of hard-light thorns. Enemies cannot enter or exit the perimeter for 8 seconds, trapping you, the companion, and your prey in a cage match. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_packmaster_skill_31",
            "name": "Cornered Beasts",
            "level": 31,
            "type": "Passive",
            "description": "While inside The Den, you and your companion deal 20% increased damage."
          },
          {
            "id": "the_packmaster_skill_32",
            "name": "Unbroken Chain",
            "level": 32,
            "type": "Passive",
            "description": "Being staggered by an enemy no longer resets your combo timer as long as the companion is actively dealing damage to any target on the field."
          },
          {
            "id": "the_packmaster_skill_33",
            "name": "Critical Synergy",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit damage increased by 15% for both you and the companion."
          },
          {
            "id": "the_packmaster_skill_34",
            "name": "Executioner's Mark",
            "level": 34,
            "type": "Passive",
            "description": "If an enemy drops below 10% health, the companion will automatically abandon its current task to instantly execute them (does not work on Titans/Bosses)."
          },
          {
            "id": "the_packmaster_skill_35",
            "name": "The Master Handler",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 CP to activate. For 10 seconds, every time you strike an enemy, the companion instantly teleports to that enemy and strikes them simultaneously, effectively doubling your hit count and damage output."
          },
          {
            "id": "the_packmaster_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Tag-Team Parry reduces the cooldown of Sic 'Em and The Den by 1.5 seconds."
          },
          {
            "id": "the_packmaster_skill_37",
            "name": "Infinite Vault Assist",
            "level": 37,
            "type": "Passive",
            "description": "You can now bounce off the companion's back mid-air indefinitely, allowing you to juggle enemies in the sky without touching the ground as the companion maneuvers beneath you to catch your fall."
          },
          {
            "id": "the_packmaster_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_packmaster_skill_39",
            "name": "Guardian Angel",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, the companion forcefully grabs you and bounds 30 meters away from the danger zone, granting you a temporary 50% health shield. Can only occur once every 5 minutes."
          },
          {
            "id": "the_packmaster_skill_40",
            "name": "CAPSTONE - Release the Hound",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You take a knee and direct all your kinetic energy into the companion. For 15 seconds, the companion grows to the size of a Titan and enters an autonomous, uncontrollable rampage. It becomes entirely invincible, its jaws crush all enemy armor ratings to zero, and every step it takes causes localized earthquakes that continuously juggle all mobs in the arena."
          }
        ]
      }
    ]
  },
  "the_orbital_striker": {
    "id": "the_orbital_striker",
    "name": "The Orbital Striker",
    "combatStyle": "Aerial Specialist / Mobility",
    "description": "Equipped with experimental zero-gravity thrusters, this class abandons the ground entirely. They excel at launching enemies into the stratosphere and keeping them suspended indefinitely, treating the air as their primary domain.",
    "freeFlowMechanic": "Equipped with experimental zero-gravity thrusters, this class mimics the weightlessness of space travel. They excel at launching enemies into the air and keeping them suspended indefinitely. Their dodges are frictionless glides, allowing them to cross massive arenas instantly and juggle multiple enemies without ever touching the floor.\n\nClass 5 Architecture: The Orbital Striker",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & Liftoff",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_orbital_striker_skill_1",
            "name": "Thruster-Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Altitude (ALT) Charge upon a successful hit."
          },
          {
            "id": "the_orbital_striker_skill_2",
            "name": "Anti-Grav Uppercut",
            "level": 2,
            "type": "Passive",
            "description": "Holding the light attack button physically reverses the gravity on a single enemy, instantly launching them 10 meters into the air alongside you."
          },
          {
            "id": "the_orbital_striker_skill_3",
            "name": "Hover-Dash",
            "level": 3,
            "type": "Active",
            "description": "Unlocks a frictionless mid-air dodge. Dodging laterally in the air preserves your altitude and maintains your combo multiplier."
          },
          {
            "id": "the_orbital_striker_skill_4",
            "name": "Stratosphere Slam",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 ALT Charges. A brutal mid-air axe kick that sends a juggled enemy rocketing back into the floor, creating a kinetic shockwave on impact."
          },
          {
            "id": "the_orbital_striker_skill_5",
            "name": "Hang-Time Analytics",
            "level": 5,
            "type": "Passive",
            "description": "For every consecutive second you remain airborne, your light attack damage increases by 2% (caps at 20%)."
          },
          {
            "id": "the_orbital_striker_skill_6",
            "name": "Thruster Parry",
            "level": 6,
            "type": "Active",
            "description": "Standard block is upgraded. Perfectly timing a block mid-air fires a short burst from your thrusters, staggering the enemy and resetting your mid-air jump count."
          },
          {
            "id": "the_orbital_striker_skill_7",
            "name": "Aerodynamic Flow",
            "level": 7,
            "type": "Passive",
            "description": "Your combo decay timer pauses completely as long as you are actively performing a mid-air dash or vault."
          },
          {
            "id": "the_orbital_striker_skill_8",
            "name": "Tractor Grapple",
            "level": 8,
            "type": "Active",
            "description": "Fire a magnetic tether at an enemy on the ground, instantly ripping them up into the air to join your current juggle."
          },
          {
            "id": "the_orbital_striker_skill_9",
            "name": "Helium Core",
            "level": 9,
            "type": "Passive",
            "description": "Your base falling speed is permanently reduced by 50%, giving you wider windows to connect aerial combos."
          },
          {
            "id": "the_orbital_striker_skill_10",
            "name": "The Grav-Lift",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Deploy a localized anti-gravity well on the floor beneath you. All enemies that step into the 5-meter radius are slowly floated into the air, completely defenseless. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Aerial Dominance",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_orbital_striker_skill_11",
            "name": "Kinetic Transfer",
            "level": 11,
            "type": "Passive",
            "description": "Striking an enemy caught inside The Grav-Lift generates double ALT Charges."
          },
          {
            "id": "the_orbital_striker_skill_12",
            "name": "Vaulting Ascent",
            "level": 12,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting off an enemy's head propels you even higher into the air and guarantees your next strike will be a critical hit."
          },
          {
            "id": "the_orbital_striker_skill_13",
            "name": "Mid-Air Intercept",
            "level": 13,
            "type": "Passive",
            "description": "If an enemy attempts to leap at you while you are airborne, your next Thruster-Strike will automatically teleport you to them, countering their attack."
          },
          {
            "id": "the_orbital_striker_skill_14",
            "name": "Structural Lightweight",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum stamina/energy by 20% and base movement speed by 10%."
          },
          {
            "id": "the_orbital_striker_skill_15",
            "name": "Vacuum Aura",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 ALT Charge per second. You emit a localized vacuum field that slowly pulls floating enemies closer to your melee range, preventing them from drifting away."
          },
          {
            "id": "the_orbital_striker_skill_16",
            "name": "Deflection Rotors",
            "level": 16,
            "type": "Passive",
            "description": "While Vacuum Aura is active, your spinning aerial attacks automatically deflect small-arms projectiles back at the ground."
          },
          {
            "id": "the_orbital_striker_skill_17",
            "name": "Ground-Zero Pull",
            "level": 17,
            "type": "Active",
            "description": "Command your thrusters to reverse, violently yanking you from maximum altitude directly to the floor to stomp a priority target, instantly grounding you but dealing massive burst damage."
          },
          {
            "id": "the_orbital_striker_skill_18",
            "name": "Altitude Sickness",
            "level": 18,
            "type": "Passive",
            "description": "Enemies kept in the air for more than 4 seconds begin to suffer from Vertigo, reducing their physical defense by 15%."
          },
          {
            "id": "the_orbital_striker_skill_19",
            "name": "Atmospheric Entry",
            "level": 19,
            "type": "Passive",
            "description": "Stratosphere Slam (Level 4) now applies a burning damage-over-time effect to the target upon hitting the ground due to reentry friction."
          },
          {
            "id": "the_orbital_striker_skill_20",
            "name": "Orbital Singularity",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. Throw a miniature black hole into the center of the arena suspended 15 meters in the air. It rapidly sucks all lightweight and medium enemies off the floor, clumping them together in the sky for massive AoE combos. 40-second cooldown.",
            "cooldown": "40-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_orbital_striker_skill_21",
            "name": "Event Horizon",
            "level": 21,
            "type": "Passive",
            "description": "Enemies trapped in the Orbital Singularity take 10% more damage from all aerial attacks."
          },
          {
            "id": "the_orbital_striker_skill_22",
            "name": "Flawless Flight",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo while airborne grants you a temporary over-shield that absorbs one hit without breaking your combo or knocking you down."
          },
          {
            "id": "the_orbital_striker_skill_23",
            "name": "Perfect Flight",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows your Tractor Grapple (Level 8) to target up to three enemies simultaneously, pulling an entire squad into the sky."
          },
          {
            "id": "the_orbital_striker_skill_24",
            "name": "Frame-Trap Afterburner",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward mid-air precisely as an enemy strikes to leave behind a superheated exhaust cloud. The enemy strikes the cloud and is temporarily blinded and burned."
          },
          {
            "id": "the_orbital_striker_skill_25",
            "name": "Thermal Updraft",
            "level": 25,
            "type": "Passive",
            "description": "The superheated cloud from Frame-Trap Afterburner creates an updraft. Passing through it instantly restores your mid-air jump and dash counters."
          },
          {
            "id": "the_orbital_striker_skill_26",
            "name": "Gyroscopic Stabilizers",
            "level": 26,
            "type": "Passive",
            "description": "You gain complete immunity to being knocked down or grounded by heavy enemy attacks; you are instead just pushed backward in the air."
          },
          {
            "id": "the_orbital_striker_skill_27",
            "name": "Maximum Fuel",
            "level": 27,
            "type": "Passive",
            "description": "ALT Charge storage capacity is increased from 10 to 20."
          },
          {
            "id": "the_orbital_striker_skill_28",
            "name": "Dual Stratosphere",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 ALT Charges. Grab two floating enemies simultaneously and slam them both into the ground. The resulting shockwave is doubled in size."
          },
          {
            "id": "the_orbital_striker_skill_29",
            "name": "Zero-G Grace",
            "level": 29,
            "type": "Passive",
            "description": "Mid-air dodge distance and vaulting range are permanently increased by 25%."
          },
          {
            "id": "the_orbital_striker_skill_30",
            "name": "The Exosphere Stasis",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You snap your fingers, instantly freezing every currently airborne enemy in absolute time-stasis for 6 seconds. They cannot fall, move, or attack. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_orbital_striker_skill_31",
            "name": "Stasis Shatter",
            "level": 31,
            "type": "Passive",
            "description": "Hitting enemies trapped in The Exosphere Stasis builds up stored kinetic energy. When the stasis breaks, they take all the accumulated combo damage at once in a massive burst."
          },
          {
            "id": "the_orbital_striker_skill_32",
            "name": "Unbroken Orbit",
            "level": 32,
            "type": "Passive",
            "description": "Touching the ground no longer resets your combo multiplier; it merely halves it, giving you a chance to launch back into the air."
          },
          {
            "id": "the_orbital_striker_skill_33",
            "name": "Critical Altitude",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 10% while you are at least 5 meters off the ground."
          },
          {
            "id": "the_orbital_striker_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 20% against enemies suffering from Vertigo."
          },
          {
            "id": "the_orbital_striker_skill_35",
            "name": "The Master Aviator",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 ALT Charges to activate. For 10 seconds, your thrusters enter overdrive. You can fly freely in three dimensions (like standard swimming controls) without needing to combo enemies to stay afloat."
          },
          {
            "id": "the_orbital_striker_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Thruster Parry reduces the cooldown of Orbital Singularity and The Exosphere Stasis by 1.5 seconds."
          },
          {
            "id": "the_orbital_striker_skill_37",
            "name": "Infinite Grapple",
            "level": 37,
            "type": "Passive",
            "description": "Tractor Grapple now has zero cooldown and can be woven infinitely between light attacks to constantly feed new targets into your aerial blender."
          },
          {
            "id": "the_orbital_striker_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Hang-Time Analytics (Level 5) damage cap is completely removed. Your damage now scales infinitely by 2% for every second you remain airborne until the combat encounter ends."
          },
          {
            "id": "the_orbital_striker_skill_39",
            "name": "Emergency Thrusters",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 10%, your thrusters automatically detonate, launching you 50 meters into the air and away from danger while instantly fully recharging your shields. Can only occur once every 5 minutes."
          },
          {
            "id": "the_orbital_striker_skill_40",
            "name": "CAPSTONE - The Rod of God",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You launch yourself so high you briefly exit the arena's rendering bounds. You then select a target area on the ground and crash down like a kinetic meteor at Mach 5. The impact deals catastrophic, arena-wide damage, instantly vaporizes all non-boss enemies, and applies a permanent anti-gravity debuff to surviving Bosses, forcing them to float helplessly for the next 10 seconds."
          }
        ]
      }
    ]
  },
  "the_scrap_tek": {
    "id": "the_scrap_tek",
    "name": "The Scrap-Tek",
    "combatStyle": "Biomechanical / Harasser",
    "description": "The ultimate battlefield improviser. Relying on automated technology, hydraulic augments, and scavenged weaponry, this class seamlessly weaves deployable traps and turrets into their free-flow melee combos.",
    "freeFlowMechanic": "Relies on scavenged, automated technology and hydraulic limbs. They can seamlessly deploy temporary, hovering turrets or drop shock-traps mid-combo without breaking their attack animation. Their primary traversal tool is a magnetic grapple that rips fleeing enemies back into the center of the melee fray.\n\nClass 6 Architecture: The Scrap-Tek",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Magnet",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_scrap_tek_skill_1",
            "name": "Ratchet-Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Scrap Charge upon a successful hit."
          },
          {
            "id": "the_scrap_tek_skill_2",
            "name": "Magnetic Tether",
            "level": 2,
            "type": "Active",
            "description": "Tap the heavy attack button to fire a wrist-mounted magnet. Pulls lightweight fodder instantly to your fist, generating 2 Scrap Charges."
          },
          {
            "id": "the_scrap_tek_skill_3",
            "name": "Vaulting Caltrops",
            "level": 3,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over an enemy drops a cluster of jagged scrap on their head, staggering them and heavily reducing their movement speed."
          },
          {
            "id": "the_scrap_tek_skill_4",
            "name": "Hydraulic Piston",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 Scrap Charges. A devastating, point-blank mechanical punch that shatters enemy shields and knocks the target backward like a projectile."
          },
          {
            "id": "the_scrap_tek_skill_5",
            "name": "Salvage Protocol",
            "level": 5,
            "type": "Passive",
            "description": "Whenever an enemy is killed, they drop a physical piece of scrap on the floor. Running over it automatically absorbs it, granting 1 Scrap Charge."
          },
          {
            "id": "the_scrap_tek_skill_6",
            "name": "Repulsor Parry",
            "level": 6,
            "type": "Active",
            "description": "Standard block is upgraded. Perfectly parrying an attack reverses the polarity of your gauntlets, repelling the attacker and disarming them of their weapon for 3 seconds."
          },
          {
            "id": "the_scrap_tek_skill_7",
            "name": "Recycled Armor",
            "level": 7,
            "type": "Passive",
            "description": "For every 5 Scrap Charges you hold, you passively gain a 2% damage reduction buff (max 10%)."
          },
          {
            "id": "the_scrap_tek_skill_8",
            "name": "Aerial Ripcord",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button fires the Magnetic Tether into the air, launching you toward a flying or launched enemy to begin an aerial juggle."
          },
          {
            "id": "the_scrap_tek_skill_9",
            "name": "Jagged Edges",
            "level": 9,
            "type": "Passive",
            "description": "Enemies hit by Hydraulic Piston suffer from Tetanus, taking minor physical damage over time for 5 seconds."
          },
          {
            "id": "the_scrap_tek_skill_10",
            "name": "The Junkyard Turret",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Instantly construct a temporary, automated turret out of your current Scrap Charges. It fires rapidly at your locked-on target for 8 seconds, building your combo multiplier autonomously. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Battlefield Control",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_scrap_tek_skill_11",
            "name": "Coordinated Fire",
            "level": 11,
            "type": "Passive",
            "description": "Striking the same enemy that your Junkyard Turret is currently shooting generates double Scrap Charges."
          },
          {
            "id": "the_scrap_tek_skill_12",
            "name": "Tether Whip",
            "level": 12,
            "type": "Active",
            "description": "If you use Magnetic Tether on a heavy Titan/Boss, you cannot pull them. Instead, you instantly pull yourself to them, closing the gap for an immediate flurry of strikes."
          },
          {
            "id": "the_scrap_tek_skill_13",
            "name": "Ground-Slam Magnetics",
            "level": 13,
            "type": "Passive",
            "description": "Mid-air heavy attacks now emit a magnetic pulse upon hitting the ground, pulling all loose scrap and low-level enemies into the impact zone."
          },
          {
            "id": "the_scrap_tek_skill_14",
            "name": "Structural Reinforcement",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 15% and base physical defense by 10%."
          },
          {
            "id": "the_scrap_tek_skill_15",
            "name": "Polarity Shift",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 Scrap Charge per second. You project a magnetic field that passively deflects all metallic projectiles away from your body."
          },
          {
            "id": "the_scrap_tek_skill_16",
            "name": "Deflection Battery",
            "level": 16,
            "type": "Passive",
            "description": "Every projectile successfully deflected by Polarity Shift adds 1 hit to your combo multiplier."
          },
          {
            "id": "the_scrap_tek_skill_17",
            "name": "Wrecking Ball",
            "level": 17,
            "type": "Active",
            "description": "Consume 10 Scrap Charges to condense your collected metal into a massive ball on the end of your tether. Swing it in a 360-degree arc, instantly knocking down all surrounding enemies."
          },
          {
            "id": "the_scrap_tek_skill_18",
            "name": "Stripped Bare",
            "level": 18,
            "type": "Passive",
            "description": "Magnetic Tether now physically rips 10% of an enemy's armor rating off them permanently upon a successful pull."
          },
          {
            "id": "the_scrap_tek_skill_19",
            "name": "Deep Lacerations",
            "level": 19,
            "type": "Passive",
            "description": "Jagged Edges (Level 9) damage over time is increased by 50%."
          },
          {
            "id": "the_scrap_tek_skill_20",
            "name": "The Scrap-Storm",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. Overload your magnetic gauntlets. For 5 seconds, all loose debris, dead enemy weapons, and dropped scrap in the arena violently swirl around you in a lethal vortex, damaging anyone who approaches. 35-second cooldown.",
            "cooldown": "35-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_scrap_tek_skill_21",
            "name": "Kinetic Shredder",
            "level": 21,
            "type": "Passive",
            "description": "Enemies caught inside The Scrap-Storm have their shields instantly broken and are launched into a jugglable state."
          },
          {
            "id": "the_scrap_tek_skill_22",
            "name": "Flawless Assembly",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo causes your Ratchet-Strikes to arc with static electricity, dealing 10% bonus shock damage."
          },
          {
            "id": "the_scrap_tek_skill_23",
            "name": "Perfect Assembly",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows your Junkyard Turret to fire piercing rounds, hitting multiple enemies in a straight line."
          },
          {
            "id": "the_scrap_tek_skill_24",
            "name": "Frame-Trap Decoy",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to quickly assemble a crude, mechanical decoy of yourself. The enemy strikes the decoy, which explodes into shrapnel."
          },
          {
            "id": "the_scrap_tek_skill_25",
            "name": "Shrapnel Blindness",
            "level": 25,
            "type": "Passive",
            "description": "The explosion from Frame-Trap Decoy permanently blinds the attacker for 4 seconds, severely reducing their accuracy."
          },
          {
            "id": "the_scrap_tek_skill_26",
            "name": "Oil & Hydraulics",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases your stamina regeneration rate by 20%."
          },
          {
            "id": "the_scrap_tek_skill_27",
            "name": "Maximum Capacity",
            "level": 27,
            "type": "Passive",
            "description": "Scrap Charge storage capacity is increased from 20 to 40."
          },
          {
            "id": "the_scrap_tek_skill_28",
            "name": "Dual-Piston Overdrive",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 20 Scrap Charges. Executes two hydraulic punches back-to-back. The second punch guarantees a critical hit and creates a directional shockwave."
          },
          {
            "id": "the_scrap_tek_skill_29",
            "name": "Scavenger\u2019s Grace",
            "level": 29,
            "type": "Passive",
            "description": "Vaulting distance is increased by 15%, and vaulting over an enemy passively steals 1 Scrap Charge from their armor."
          },
          {
            "id": "the_scrap_tek_skill_30",
            "name": "The EMP Grid",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. Slam a high-voltage spike into the ground, emitting a massive electromagnetic pulse. Instantly stuns all biomechanical and tech-based enemies for 6 seconds and disables all enemy energy shields. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_scrap_tek_skill_31",
            "name": "System Reboot",
            "level": 31,
            "type": "Passive",
            "description": "Hitting enemies while they are stunned by the EMP Grid heals you for 2% of your maximum health per strike."
          },
          {
            "id": "the_scrap_tek_skill_32",
            "name": "Unbroken Machinery",
            "level": 32,
            "type": "Passive",
            "description": "Taking damage from an environmental hazard or trap no longer resets your combo multiplier."
          },
          {
            "id": "the_scrap_tek_skill_33",
            "name": "Critical Engineering",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 10% when attacking an enemy with no active shielding."
          },
          {
            "id": "the_scrap_tek_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 20% against enemies suffering from Tetanus."
          },
          {
            "id": "the_scrap_tek_skill_35",
            "name": "The Master Mechanic",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 30 Scrap Charges to activate. For 10 seconds, your Magnetic Tether has no cooldown, and your Junkyard Turrets no longer despawn, allowing you to build an entire automated firing squad on the field."
          },
          {
            "id": "the_scrap_tek_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Repulsor Parry reduces the cooldown of The Scrap-Storm and The EMP Grid by 1.5 seconds."
          },
          {
            "id": "the_scrap_tek_skill_37",
            "name": "Infinite Tether",
            "level": 37,
            "type": "Passive",
            "description": "You can now grapple to heavy enemies, launch off their chests, and instantly grapple to the next enemy mid-air indefinitely, creating a frictionless web of traversal."
          },
          {
            "id": "the_scrap_tek_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_scrap_tek_skill_39",
            "name": "Emergency Defibrillator",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, your suit automatically delivers a massive electrical shock, restoring 30% of your health and stunning all enemies within a 5-meter radius. Can only occur once every 5 minutes."
          },
          {
            "id": "the_scrap_tek_skill_40",
            "name": "CAPSTONE - The Junkyard Titan",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You activate a master magnet. Every piece of scrap, every turret, and every dead enemy in the arena flies to your body, constructing a massive, 20-foot-tall mechanical mech-suit around you. For 15 seconds, you pilot this titan. Your health is completely shielded, your light attacks become wide-cleaving structural sweeps, and your heavy attack fires a concentrated beam of raw plasma that melts everything in its path."
          }
        ]
      }
    ]
  },
  "the_kinetic_juggernaut": {
    "id": "the_kinetic_juggernaut",
    "name": "The Kinetic Juggernaut",
    "combatStyle": "Heavy Bruiser / Unstoppable Momentum",
    "description": "The immovable object and the unstoppable force. This class entirely discards standard evasion, boasting zero dodge mechanics. Instead, they absorb, store, and redirect incoming kinetic energy to plow through enemy ranks and shatter heavy armor.",
    "freeFlowMechanic": "The only class that does not have a standard dodge; instead, they absorb and redirect kinetic energy. By perfect-guarding incoming hits, they build a momentum charge. Once charged, their standard strikes become unstaggerable, allowing them to plow straight through enemy shields and interrupt massive boss attacks with sheer force.\n\nClass 7 Architecture: The Kinetic Juggernaut",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Wall",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_kinetic_juggernaut_skill_1",
            "name": "Heavy-Handed",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Slower than other classes, but heavily resistant to being interrupted. Generates 1 Kinetic Charge (KC) per hit."
          },
          {
            "id": "the_kinetic_juggernaut_skill_2",
            "name": "The Kinetic Guard",
            "level": 2,
            "type": "Active",
            "description": "Replaces the standard dodge/roll button. Hold to brace yourself. Taking damage while bracing completely negates stagger and converts 50% of the incoming damage into 3 KC, but still drains a portion of your health."
          },
          {
            "id": "the_kinetic_juggernaut_skill_3",
            "name": "Perfect Deflection",
            "level": 3,
            "type": "Passive",
            "description": "Tapping the Kinetic Guard precisely as an attack lands completely negates all damage, staggers the attacker, and instantly fills 5 KC."
          },
          {
            "id": "the_kinetic_juggernaut_skill_4",
            "name": "Release Valve",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 KC. A devastating, explosive gut-punch that physically launches the target backward, shattering all frontal shields."
          },
          {
            "id": "the_kinetic_juggernaut_skill_5",
            "name": "Unstoppable Force",
            "level": 5,
            "type": "Passive",
            "description": "While executing Release Valve, you gain Hyper-Armor and cannot be staggered or interrupted by any attack in the game."
          },
          {
            "id": "the_kinetic_juggernaut_skill_6",
            "name": "Vaulting Stomp",
            "level": 6,
            "type": "Active",
            "description": "Unlocks directional vault. Because of your mass, vaulting over an enemy violently stomps on their shoulders, instantly dropping them to the floor in a prone state."
          },
          {
            "id": "the_kinetic_juggernaut_skill_7",
            "name": "Momentum Decay",
            "level": 7,
            "type": "Passive",
            "description": "Your combo decay timer is 25% longer than other classes, compensating for your slower movement speed."
          },
          {
            "id": "the_kinetic_juggernaut_skill_8",
            "name": "Uppercut Transfer",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button unleashes a kinetic uppercut. Only launches lightweight enemies, but leaves heavy enemies severely staggered."
          },
          {
            "id": "the_kinetic_juggernaut_skill_9",
            "name": "Shock Absorption",
            "level": 9,
            "type": "Passive",
            "description": "For every KC you currently hold, you gain a flat 1% physical damage reduction (caps at 10%)."
          },
          {
            "id": "the_kinetic_juggernaut_skill_10",
            "name": "The Haymaker",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. You plant your feet, charge for 1 second, and dash straight forward in a 10-meter line. Anything caught in your path is violently thrown aside and takes massive blunt-force damage. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Retaliation",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_kinetic_juggernaut_skill_11",
            "name": "Aerial Weight",
            "level": 11,
            "type": "Passive",
            "description": "While you cannot jump as high as other classes, your mid-air attacks deal 20% more damage due to your extreme mass."
          },
          {
            "id": "the_kinetic_juggernaut_skill_12",
            "name": "Crowd Clearing",
            "level": 12,
            "type": "Passive",
            "description": "Release Valve (Level 4) now projects a short-range, cone-shaped shockwave behind the primary target, damaging tightly grouped enemies."
          },
          {
            "id": "the_kinetic_juggernaut_skill_13",
            "name": "Crater Drop",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to plummet straight down like a stone, creating a kinetic shockwave that knocks surrounding enemies completely off their feet."
          },
          {
            "id": "the_kinetic_juggernaut_skill_14",
            "name": "Thick-Skinned",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 25%."
          },
          {
            "id": "the_kinetic_juggernaut_skill_15",
            "name": "Gravity Well",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 KC per second. Your sheer density distorts the air around you, reducing the movement and attack speed of all enemies within 4 meters by 20%."
          },
          {
            "id": "the_kinetic_juggernaut_skill_16",
            "name": "Punishing Guard",
            "level": 16,
            "type": "Passive",
            "description": "Any enemy that physically strikes your Kinetic Guard takes 15% of their own damage reflected back at them as blunt trauma."
          },
          {
            "id": "the_kinetic_juggernaut_skill_17",
            "name": "Grapple Toss",
            "level": 17,
            "type": "Active",
            "description": "Press the grapple button to grab a lightweight enemy by the throat and instantly hurl them into another enemy, knocking both down and generating 2 KC."
          },
          {
            "id": "the_kinetic_juggernaut_skill_18",
            "name": "Shatter Point",
            "level": 18,
            "type": "Passive",
            "description": "The Haymaker (Level 10) now permanently destroys any physical shields or debris held by enemies in its path."
          },
          {
            "id": "the_kinetic_juggernaut_skill_19",
            "name": "Inertia Carry",
            "level": 19,
            "type": "Passive",
            "description": "Walking forward into an enemy's attack while bracing with the Kinetic Guard generates double the standard KC."
          },
          {
            "id": "the_kinetic_juggernaut_skill_20",
            "name": "The Juggernaut Charge",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. You drop your shoulder and sprint forward uncontrollably for up to 4 seconds. You can steer slightly. You instantly trample and kill any fodder enemies you touch, converting them into pure KC. 35-second cooldown.",
            "cooldown": "35-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_kinetic_juggernaut_skill_21",
            "name": "Bowling Pins",
            "level": 21,
            "type": "Passive",
            "description": "Enemies launched by Release Valve or The Haymaker become physical projectiles, dealing massive damage to any other enemies they collide with."
          },
          {
            "id": "the_kinetic_juggernaut_skill_22",
            "name": "Flawless Guard",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo causes your Kinetic Guard to emit a blinding kinetic flash when struck, interrupting enemy combo strings."
          },
          {
            "id": "the_kinetic_juggernaut_skill_23",
            "name": "Perfect Guard",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows your heavy attacks to completely ignore Titan/Boss hyper-armor, allowing you to flinch massive enemies."
          },
          {
            "id": "the_kinetic_juggernaut_skill_24",
            "name": "Frame-Trap Absorption",
            "level": 24,
            "type": "Active",
            "description": "Trigger Kinetic Guard precisely at the moment a fatal blow would land. The damage is negated, your combo multiplier is cut in half (instead of resetting to zero), and you instantly heal for 15% of your max health."
          },
          {
            "id": "the_kinetic_juggernaut_skill_25",
            "name": "Over-Cap Shielding",
            "level": 25,
            "type": "Passive",
            "description": "If you are at full health when Frame-Trap Absorption triggers, the healing is converted into a temporary over-shield."
          },
          {
            "id": "the_kinetic_juggernaut_skill_26",
            "name": "Muscle Memory",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases base melee damage by 15%."
          },
          {
            "id": "the_kinetic_juggernaut_skill_27",
            "name": "Deep Reserves",
            "level": 27,
            "type": "Passive",
            "description": "KC storage capacity is increased from 10 to 20. (Shock Absorption passive cap increases to 20%)."
          },
          {
            "id": "the_kinetic_juggernaut_skill_28",
            "name": "Dual Release",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 KC. You grab the target, hit them with a Release Valve to the gut, and immediately follow up with a devastating double-axe-handle slam to their back, bouncing them off the floor."
          },
          {
            "id": "the_kinetic_juggernaut_skill_29",
            "name": "Vaulting Crash",
            "level": 29,
            "type": "Passive",
            "description": "Vaulting over a heavy or Titan-class enemy creates a 3-meter shockwave upon your landing."
          },
          {
            "id": "the_kinetic_juggernaut_skill_30",
            "name": "Ground Zero",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You channel all your kinetic energy into a single, world-breaking foot stomp. The arena floor fractures, and every enemy within 15 meters is violently forced to their knees, completely stunned for 4 seconds. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_kinetic_juggernaut_skill_31",
            "name": "Helpless Targets",
            "level": 31,
            "type": "Passive",
            "description": "Enemies forced to their knees by Ground Zero take 30% bonus damage from Release Valve and The Haymaker."
          },
          {
            "id": "the_kinetic_juggernaut_skill_32",
            "name": "Unbroken Will",
            "level": 32,
            "type": "Passive",
            "description": "Taking a heavy hit completely unbraced no longer resets your combo multiplier to zero; it only removes 10 hits from the counter, allowing you to sustain flow through sheer grit."
          },
          {
            "id": "the_kinetic_juggernaut_skill_33",
            "name": "Critical Mass",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 10% when you are at maximum KC capacity."
          },
          {
            "id": "the_kinetic_juggernaut_skill_34",
            "name": "Brutal Crits",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 25% against enemies with an intact armor rating."
          },
          {
            "id": "the_kinetic_juggernaut_skill_35",
            "name": "The Master Brawler",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 KC to activate. For 10 seconds, your KC meter does not deplete when using Finishers, allowing you to spam Release Valve on every single strike."
          },
          {
            "id": "the_kinetic_juggernaut_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Perfect Deflection reduces the cooldown of all Major Abilities by 2 seconds."
          },
          {
            "id": "the_kinetic_juggernaut_skill_37",
            "name": "Infinite Grapple-Slam",
            "level": 37,
            "type": "Passive",
            "description": "You can chain Grapple Toss endlessly, picking up an enemy, throwing them, stepping forward, and instantly picking up the next to clear out an entire horde without throwing a punch."
          },
          {
            "id": "the_kinetic_juggernaut_skill_38",
            "name": "Airborne Slam",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 2 seconds guarantees your next Crater Drop (Level 13) will critically strike."
          },
          {
            "id": "the_kinetic_juggernaut_skill_39",
            "name": "Second Wind",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, your Kinetic Guard automatically deploys in a 360-degree sphere, instantly maxing out your KC and granting complete invulnerability for 4 seconds. Can only occur once every 5 minutes."
          },
          {
            "id": "the_kinetic_juggernaut_skill_40",
            "name": "CAPSTONE - The Asteroid",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You become the physical embodiment of kinetic force. For 15 seconds, you glow with superheated friction. You grow in size, and merely walking into enemies deals catastrophic damage and sends them flying. Your standard light attacks are replaced by full-power Release Valves, and you are entirely immune to all damage, debuffs, and environmental hazards."
          }
        ]
      }
    ]
  },
  "the_phantom_shift": {
    "id": "the_phantom_shift",
    "name": "The Phantom-Shift",
    "combatStyle": "Precision Assassin",
    "description": "The precision assassin. Relying on micro-teleportation, hyper-speed, and sensory manipulation, this class doesn't just attack the enemy\u2014they attack the space the enemy occupies, phasing in and out of reality to strike from multiple angles simultaneously.",
    "freeFlowMechanic": "Relies on micro-teleportation and hyper-speed strikes. Instead of vaulting over enemies to avoid unblockable attacks, they phase directly through them, striking from the inside out. Their combos do very little damage per hit but strike dozens of times in seconds, requiring extreme precision and lightning-fast reflexes to maintain.\n\nClass 8 Architecture: The Phantom-Shift",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Echo",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_phantom_shift_skill_1",
            "name": "Flicker-Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Flux Charge upon a successful hit."
          },
          {
            "id": "the_phantom_shift_skill_2",
            "name": "Stutter-Step",
            "level": 2,
            "type": "Active",
            "description": "Tap the dodge button to perform a short-range micro-teleport. If you attack immediately after, your afterimage appears and strikes the target again for 30% damage."
          },
          {
            "id": "the_phantom_shift_skill_3",
            "name": "Echo-Chamber",
            "level": 3,
            "type": "Passive",
            "description": "Every successful Stutter-Step generates 1 Flux Charge and extends the combo timer by 0.5 seconds."
          },
          {
            "id": "the_phantom_shift_skill_4",
            "name": "Temporal Rip",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 Flux Charges. You phase through an enemy, striking their vital points from three different temporal angles simultaneously."
          },
          {
            "id": "the_phantom_shift_skill_5",
            "name": "Rapid Retrace",
            "level": 5,
            "type": "Passive",
            "description": "Hitting an enemy with Temporal Rip increases your movement speed by 10% for 3 seconds."
          },
          {
            "id": "the_phantom_shift_skill_6",
            "name": "Blink-Parry",
            "level": 6,
            "type": "Active",
            "description": "Standard block is upgraded. Perfectly timing a parry causes you to instantly blink behind the attacker, staggering them and generating 3 Flux Charges."
          },
          {
            "id": "the_phantom_shift_skill_7",
            "name": "Precision Flow",
            "level": 7,
            "type": "Passive",
            "description": "Your combo decay is 30% slower than other classes."
          },
          {
            "id": "the_phantom_shift_skill_8",
            "name": "Afterimage Uppercut",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button triggers an uppercut. If performed after a Stutter-Step, your afterimage launches the enemy into the air for you."
          },
          {
            "id": "the_phantom_shift_skill_9",
            "name": "Reality Slip",
            "level": 9,
            "type": "Passive",
            "description": "While your combo is above 10, your afterimages have a 10% chance to duplicate your heavy attack."
          },
          {
            "id": "the_phantom_shift_skill_10",
            "name": "The Phantom Array",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Dash forward, leaving behind a trail of 3 afterimages that all perform a synchronized cross-slash on anyone caught in the line. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Multi-Threading",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_phantom_shift_skill_11",
            "name": "Flux Synergy",
            "level": 11,
            "type": "Passive",
            "description": "Striking an enemy while an afterimage is currently attacking them generates double Flux Charges."
          },
          {
            "id": "the_phantom_shift_skill_12",
            "name": "Vaulting Stutter",
            "level": 12,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over an enemy leaves an afterimage at the point of origin that continues to attack the enemy's back."
          },
          {
            "id": "the_phantom_shift_skill_13",
            "name": "Aerial Flicker",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to teleport instantly to the nearest enemy, maintaining your aerial juggle chain."
          },
          {
            "id": "the_phantom_shift_skill_14",
            "name": "Neural-Fiber Suit",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 10% and base physical defense by 5%."
          },
          {
            "id": "the_phantom_shift_skill_15",
            "name": "Time-Dilation Aura",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 Flux Charge per second. You slow time for all enemies within 5 meters, allowing you to land more hits during your combo windows."
          },
          {
            "id": "the_phantom_shift_skill_16",
            "name": "Reflex-Stim",
            "level": 16,
            "type": "Passive",
            "description": "While Time-Dilation Aura is active, your parry window is widened by 20%."
          },
          {
            "id": "the_phantom_shift_skill_17",
            "name": "Phase-Hook",
            "level": 17,
            "type": "Active",
            "description": "Fire a short-range hook that teleports you directly to the target. If the target is fodder, they are instantly stunned."
          },
          {
            "id": "the_phantom_shift_skill_18",
            "name": "Cascading Echoes",
            "level": 18,
            "type": "Passive",
            "description": "Every 3rd Stutter-Step leaves behind two afterimages instead of one."
          },
          {
            "id": "the_phantom_shift_skill_19",
            "name": "Armor Bypass",
            "level": 19,
            "type": "Passive",
            "description": "Attacks from afterimages now ignore 15% of the target's physical armor rating."
          },
          {
            "id": "the_phantom_shift_skill_20",
            "name": "Chrono-Collapse",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. You freeze all enemies within a 10-meter radius in time for 3 seconds. Any damage dealt to them during this window is stored and released in one massive burst when time resumes. 40-second cooldown.",
            "cooldown": "40-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_phantom_shift_skill_21",
            "name": "Delayed Execution",
            "level": 21,
            "type": "Passive",
            "description": "Enemies hit by the burst from Chrono-Collapse have their physical defense reduced by 20% for 5 seconds."
          },
          {
            "id": "the_phantom_shift_skill_22",
            "name": "Flawless Tempo",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo grants a 15% attack speed boost to both you and your afterimages."
          },
          {
            "id": "the_phantom_shift_skill_23",
            "name": "Perfect Tempo",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows afterimages to copy your heavy attacks with 100% damage efficacy."
          },
          {
            "id": "the_phantom_shift_skill_24",
            "name": "Frame-Trap Blink",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind a solid afterimage. The enemy strikes the image, which instantly detonates for minor damage."
          },
          {
            "id": "the_phantom_shift_skill_25",
            "name": "Stun-Flash",
            "level": 25,
            "type": "Passive",
            "description": "The detonation from Frame-Trap Blink blinds enemies for 3 seconds, forcing them to miss their next attack."
          },
          {
            "id": "the_phantom_shift_skill_26",
            "name": "Agile Build",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases base movement speed by 15%."
          },
          {
            "id": "the_phantom_shift_skill_27",
            "name": "Maximum Flux",
            "level": 27,
            "type": "Passive",
            "description": "Flux Charge storage capacity increased from 10 to 20."
          },
          {
            "id": "the_phantom_shift_skill_28",
            "name": "Dual-Rip",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 Flux Charges. Executes two back-to-back Temporal Rips. The second rip is guaranteed to critically strike."
          },
          {
            "id": "the_phantom_shift_skill_29",
            "name": "Elusive Grace",
            "level": 29,
            "type": "Passive",
            "description": "Vault and Stutter-Step distance increased by 20%."
          },
          {
            "id": "the_phantom_shift_skill_30",
            "name": "The Singularity Event",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You create a localized gravity distortion point. All enemies in a 15-meter radius are pulled to the center, and you leave behind afterimages that bombard the cluster from all sides. 60-second cooldown.",
            "cooldown": "60-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_phantom_shift_skill_31",
            "name": "Event Horizon",
            "level": 31,
            "type": "Passive",
            "description": "Enemies trapped in The Singularity Event take 20% increased damage from afterimage attacks."
          },
          {
            "id": "the_phantom_shift_skill_32",
            "name": "Unbroken Chain",
            "level": 32,
            "type": "Passive",
            "description": "Being stunned no longer resets your combo; it merely pauses the decay timer for 2 seconds."
          },
          {
            "id": "the_phantom_shift_skill_33",
            "name": "Critical Echoes",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance for afterimages increased by 10%."
          },
          {
            "id": "the_phantom_shift_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 25% against enemies suffering from Blinded status."
          },
          {
            "id": "the_phantom_shift_skill_35",
            "name": "The Master Phantom",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 Flux Charges to activate. For 10 seconds, every single Stutter-Step leaves 3 afterimages, allowing you to fill the screen with ghosts."
          },
          {
            "id": "the_phantom_shift_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Blink-Parry reduces the cooldown of Chrono-Collapse and The Singularity Event by 1.5 seconds."
          },
          {
            "id": "the_phantom_shift_skill_37",
            "name": "Infinite Stutter",
            "level": 37,
            "type": "Passive",
            "description": "Stutter-Step cooldown is removed. You can chain-teleport indefinitely, effectively staying in a constant state of flux."
          },
          {
            "id": "the_phantom_shift_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_phantom_shift_skill_39",
            "name": "Emergency Rewind",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, you automatically blink back to the location you were at 3 seconds ago, healing for 20% of your max health. Can only occur once every 5 minutes."
          },
          {
            "id": "the_phantom_shift_skill_40",
            "name": "CAPSTONE - Reality Shatter",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. For 15 seconds, you fracture reality. You and 5 of your afterimages occupy the battlefield simultaneously, all performing your inputs. You are entirely invincible, move at 3x speed, and every strike against an enemy creates a cascade of spatial rifts that deal massive, unavoidable damage to all enemies in the arena."
          }
        ]
      }
    ]
  },
  "the_sylvan_warden": {
    "id": "the_sylvan_warden",
    "name": "The Sylvan Warden",
    "combatStyle": "Environmental Trapper",
    "description": "The undisputed master of battlefield control. This class manipulates the arena by summoning massive, thorny root systems, highly toxic spores, and dense ablative armor, treating the combat zone as a living organism that fights alongside them.",
    "freeFlowMechanic": "Controls the arena by summoning massive, thorny root systems from the ground. They excel at managing large hordes by physically tethering enemies together with vines. Once tethered, striking one enemy transfers a percentage of the combo damage to all connected foes, allowing them to clear out massive waves efficiently.\n\nClass 9 Architecture: The Sylvan Warden",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Seed",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_sylvan_warden_skill_1",
            "name": "Vine-Whip",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Fast and wide-reaching. Generates 1 Verdant Point (VP) upon a successful hit."
          },
          {
            "id": "the_sylvan_warden_skill_2",
            "name": "The Symbiotic Tether",
            "level": 2,
            "type": "Active",
            "description": "Tap the heavy attack to strike an enemy with a specialized vine. If they are within 5 meters of another enemy, a tether snaps between them, physically linking them together for 8 seconds."
          },
          {
            "id": "the_sylvan_warden_skill_3",
            "name": "Shared Suffering",
            "level": 3,
            "type": "Passive",
            "description": "Whenever you deal damage to a tethered enemy, 20% of that damage is instantly duplicated and dealt to all other enemies connected to that tether network."
          },
          {
            "id": "the_sylvan_warden_skill_4",
            "name": "Bramble-Slam",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 VP. You summon a massive, thorny root to violently crash down on your target, dealing heavy kinetic damage and shattering enemy shields."
          },
          {
            "id": "the_sylvan_warden_skill_5",
            "name": "Parasitic Draw",
            "level": 5,
            "type": "Passive",
            "description": "Whenever an enemy dies while part of a tether network, you are healed for 2% of your maximum health."
          },
          {
            "id": "the_sylvan_warden_skill_6",
            "name": "Thistle-Parry",
            "level": 6,
            "type": "Active",
            "description": "Standard block is upgraded. Perfectly parrying an attack causes sharp thistles to burst from your forearms, staggering the attacker and instantly generating 3 VP."
          },
          {
            "id": "the_sylvan_warden_skill_7",
            "name": "Deep Roots",
            "level": 7,
            "type": "Passive",
            "description": "If you stand completely still for more than 1 second, your combo decay timer is completely paused until you move or attack again."
          },
          {
            "id": "the_sylvan_warden_skill_8",
            "name": "Up-Root",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button summons a geyser of vines beneath an enemy, launching them into the air for an aerial juggle."
          },
          {
            "id": "the_sylvan_warden_skill_9",
            "name": "Canopy Reach",
            "level": 9,
            "type": "Passive",
            "description": "The auto-connect range of The Symbiotic Tether is increased from 5 meters to 10 meters."
          },
          {
            "id": "the_sylvan_warden_skill_10",
            "name": "The Briar Web",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Slam both hands into the dirt. Instantly applies Symbiotic Tethers to every single non-boss enemy within a 15-meter radius, linking the entire arena into one massive network. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Network Management",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_sylvan_warden_skill_11",
            "name": "Kinetic Splicing",
            "level": 11,
            "type": "Passive",
            "description": "Striking an enemy that is part of a tether network generates double VP."
          },
          {
            "id": "the_sylvan_warden_skill_12",
            "name": "Vaulting Sap",
            "level": 12,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over an enemy coats them in sticky sap, severely reducing their movement speed and instantly tethering them to the nearest target."
          },
          {
            "id": "the_sylvan_warden_skill_13",
            "name": "Canopy Drop",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to plummet straight down, turning your legs into heavy wooden trunks to create a kinetic shockwave."
          },
          {
            "id": "the_sylvan_warden_skill_14",
            "name": "Heartwood Core",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum health by 15% and base physical defense by 10%."
          },
          {
            "id": "the_sylvan_warden_skill_15",
            "name": "Toxic Bloom",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 VP per second. Bright, poisonous flowers bloom along your active tethers, constantly dealing minor damage-over-time to any enemy connected to the network."
          },
          {
            "id": "the_sylvan_warden_skill_16",
            "name": "Allergic Reaction",
            "level": 16,
            "type": "Passive",
            "description": "Enemies suffering from Toxic Bloom have their physical armor reduced by 15%."
          },
          {
            "id": "the_sylvan_warden_skill_17",
            "name": "Vine-Pull",
            "level": 17,
            "type": "Active",
            "description": "Command all active tethers to violently retract, physically yanking all connected enemies into a tight, clustered pile directly in front of you."
          },
          {
            "id": "the_sylvan_warden_skill_18",
            "name": "Snapping Tethers",
            "level": 18,
            "type": "Passive",
            "description": "If enemies manage to run too far apart and break a tether by stretching it past 15 meters, the tether violently snaps, heavily damaging and knocking down both connected enemies."
          },
          {
            "id": "the_sylvan_warden_skill_19",
            "name": "Maximum Yield",
            "level": 19,
            "type": "Passive",
            "description": "Shared Suffering (Level 3) damage distribution is increased from 20% to 35%."
          },
          {
            "id": "the_sylvan_warden_skill_20",
            "name": "Forest's Wrath",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. Command the earth to erupt. Massive, jagged wooden spikes shoot up from the ground, impaling every single enemy currently connected to a tether network, locking them in place for 4 seconds. 35-second cooldown.",
            "cooldown": "35-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_sylvan_warden_skill_21",
            "name": "Siphon Sap",
            "level": 21,
            "type": "Passive",
            "description": "When you cast Forest's Wrath, you instantly gain a shield equal to 5% of your max health for every enemy successfully impaled."
          },
          {
            "id": "the_sylvan_warden_skill_22",
            "name": "Flawless Harvest",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo causes your Vine-Whip attacks to passively extend slightly, increasing your melee range by 20%."
          },
          {
            "id": "the_sylvan_warden_skill_23",
            "name": "Perfect Harvest",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows the shared damage from your tether networks to completely bypass Titan and Boss-level armor plating."
          },
          {
            "id": "the_sylvan_warden_skill_24",
            "name": "Frame-Trap Substitution",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind a hollow wooden log in your place. The enemy strikes the log, embedding their weapon and becoming temporarily disarmed/staggered."
          },
          {
            "id": "the_sylvan_warden_skill_25",
            "name": "Splinter Detonation",
            "level": 25,
            "type": "Passive",
            "description": "The wooden log from Frame-Trap Substitution explodes into lethal shrapnel after 2 seconds, dealing moderate pierce damage."
          },
          {
            "id": "the_sylvan_warden_skill_26",
            "name": "Photosynthetic Flow",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases your stamina regeneration rate by 20%."
          },
          {
            "id": "the_sylvan_warden_skill_27",
            "name": "Abundant Harvest",
            "level": 27,
            "type": "Passive",
            "description": "VP storage capacity is increased from 10 to 20."
          },
          {
            "id": "the_sylvan_warden_skill_28",
            "name": "Dual-Bramble",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 VP. Executes two Bramble-Slams back-to-back. The second slam guarantees a critical hit and creates a directional shockwave."
          },
          {
            "id": "the_sylvan_warden_skill_29",
            "name": "Canopy Glide",
            "level": 29,
            "type": "Passive",
            "description": "You can now hold the jump button mid-air to deploy large leaves from your arms, allowing you to slowly glide across the arena and perfectly position your aerial drops."
          },
          {
            "id": "the_sylvan_warden_skill_30",
            "name": "The World-Tree",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You summon a towering, radiant tree in the dead center of the arena. For 10 seconds, it acts as a massive magnet, constantly pulling all enemies toward its trunk and automatically tethering any new fodder that spawns. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_sylvan_warden_skill_31",
            "name": "Undergrowth",
            "level": 31,
            "type": "Passive",
            "description": "Enemies dragged within 5 meters of the World-Tree take 25% increased damage from all sources."
          },
          {
            "id": "the_sylvan_warden_skill_32",
            "name": "Unbroken Nature",
            "level": 32,
            "type": "Passive",
            "description": "As long as you have at least 3 enemies currently tethered together on the field, taking damage will never reset your combo multiplier."
          },
          {
            "id": "the_sylvan_warden_skill_33",
            "name": "Critical Bloom",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 10%."
          },
          {
            "id": "the_sylvan_warden_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 25% against enemies currently connected to a tether network."
          },
          {
            "id": "the_sylvan_warden_skill_35",
            "name": "The Master Gardener",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 VP to activate. For 10 seconds, every single light attack you land instantly applies an area-of-effect Briar Web to the target, ensuring 100% tether up-time on the entire horde."
          },
          {
            "id": "the_sylvan_warden_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Thistle-Parry reduces the cooldown of Forest's Wrath and The World-Tree by 1.5 seconds."
          },
          {
            "id": "the_sylvan_warden_skill_37",
            "name": "Infinite Vine",
            "level": 37,
            "type": "Passive",
            "description": "You can use Vine-Pull mid-air to grapple toward airborne enemies indefinitely, never touching the floor as you swing through the canopy."
          },
          {
            "id": "the_sylvan_warden_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_sylvan_warden_skill_39",
            "name": "Emergency Regrowth",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, you instantly encase yourself in an impenetrable cocoon of ironwood for 4 seconds, rendering you immune to damage while rapidly healing 30% of your max health. Can only occur once every 5 minutes."
          },
          {
            "id": "the_sylvan_warden_skill_40",
            "name": "CAPSTONE - Force of Nature",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You physically merge with the arena's flora, transforming into a 15-foot-tall, primeval Treant for 15 seconds. You gain absolute hyper-armor. Every step you take creates localized earthquakes that stagger enemies. Your light attacks become massive, sweeping branch-swipes that hit half the arena, and your Shared Suffering distribution is temporarily increased to 100%, meaning striking one fodder enemy effectively hits every single entity on the battlefield for maximum damage."
          }
        ]
      }
    ]
  },
  "the_flux_caster": {
    "id": "the_flux_caster",
    "name": "The Flux-Caster",
    "combatStyle": "Stance-Swapper / Elemental Combo",
    "description": "The master of elemental reactions and stance-dancing. This class wields pure arcane energy, requiring the player to constantly rotate between distinct elemental stances. The true devastating power comes not from the strikes themselves, but from combining opposing elements mid-combo to trigger massive chain reactions.",
    "freeFlowMechanic": "Wields pure elemental energy and requires the player to rotate stances constantly. The true damage comes from elemental reactions: hitting an enemy with a rapid fire-combo, immediately vaulting, and landing a heavy ice-finisher triggers a devastating thermal-shock explosion that launches nearby enemies into the air.\n\nClass 10 Architecture: The Flux-Caster",
    "skillTree": [
      {
        "name": "Tier 1: Foundation & The Catalyst",
        "minLevel": 1,
        "maxLevel": 10,
        "skills": [
          {
            "id": "the_flux_caster_skill_1",
            "name": "Flux-Strike",
            "level": 1,
            "type": "Active",
            "description": "Your base light melee attack. Generates 1 Aether Charge upon a successful hit."
          },
          {
            "id": "the_flux_caster_skill_2",
            "name": "Stance Dance",
            "level": 2,
            "type": "Active",
            "description": "Tap the stance button to seamlessly swap between Ignition (Fire) and Glacial (Ice) stances mid-combo without breaking your flow."
          },
          {
            "id": "the_flux_caster_skill_3",
            "name": "Elemental Primer",
            "level": 3,
            "type": "Passive",
            "description": "Striking an enemy applies a primer based on your current stance. Ignition applies Scorched (minor damage over time). Glacial applies Chilled (minor movement speed reduction)."
          },
          {
            "id": "the_flux_caster_skill_4",
            "name": "Thermal Detonation",
            "level": 4,
            "type": "Active / Finisher",
            "description": "Consumes 5 Aether Charges. If you strike a Scorched enemy while in Glacial stance (or a Chilled enemy in Ignition stance) with a heavy attack, you trigger a Thermal Detonation. The localized explosion deals 300% base damage and knocks the target into the air."
          },
          {
            "id": "the_flux_caster_skill_5",
            "name": "Kinetic Swap",
            "level": 5,
            "type": "Passive",
            "description": "Swapping stances instantly grants 1 Aether Charge (can only occur once every 2 seconds to prevent spam)."
          },
          {
            "id": "the_flux_caster_skill_6",
            "name": "Flux-Parry",
            "level": 6,
            "type": "Active",
            "description": "Standard block is upgraded. Perfectly parrying an attack releases a burst of your currently equipped element, staggering the attacker and applying the respective Primer."
          },
          {
            "id": "the_flux_caster_skill_7",
            "name": "Vaulting Catalyst",
            "level": 7,
            "type": "Active",
            "description": "Unlocks directional vault. Vaulting over an enemy automatically applies the Primer of the stance you are not currently in, perfectly setting them up for an immediate Thermal Detonation upon landing."
          },
          {
            "id": "the_flux_caster_skill_8",
            "name": "Updraft",
            "level": 8,
            "type": "Active",
            "description": "Holding the heavy attack button creates a geyser of either flame or ice spikes beneath an enemy, launching them for an aerial juggle."
          },
          {
            "id": "the_flux_caster_skill_9",
            "name": "Extended Flow",
            "level": 9,
            "type": "Passive",
            "description": "Your combo decay timer is 20% slower, giving you more time to manage your elemental combinations."
          },
          {
            "id": "the_flux_caster_skill_10",
            "name": "The Crucible",
            "level": 10,
            "type": "Active / Cooldown",
            "description": "Major Ability. Slam your hands together, creating a 10-meter ring around you. Half the ring is pure fire, the other half is pure ice. Enemies forced across the threshold immediately suffer a massive Thermal Detonation. 20-second cooldown.",
            "cooldown": "20-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 2: Combo Scaling & Chain Reactions",
        "minLevel": 11,
        "maxLevel": 20,
        "skills": [
          {
            "id": "the_flux_caster_skill_11",
            "name": "Synergistic Reactions",
            "level": 11,
            "type": "Passive",
            "description": "Hitting an enemy with a Thermal Detonation generates double Aether Charges."
          },
          {
            "id": "the_flux_caster_skill_12",
            "name": "Chain Detonation",
            "level": 12,
            "type": "Passive",
            "description": "If a Thermal Detonation kills its primary target, the explosion radius doubles and applies both Scorched and Chilled to any enemies caught in the blast."
          },
          {
            "id": "the_flux_caster_skill_13",
            "name": "Elemental Dive",
            "level": 13,
            "type": "Active",
            "description": "Mid-air, press the heavy attack button to plummet straight down, releasing a massive shockwave of your currently equipped element upon impact."
          },
          {
            "id": "the_flux_caster_skill_14",
            "name": "Aetheric Shielding",
            "level": 14,
            "type": "Passive",
            "description": "Permanently increases maximum energy/mana by 20% and base elemental resistance by 15%."
          },
          {
            "id": "the_flux_caster_skill_15",
            "name": "Convection Aura",
            "level": 15,
            "type": "Active / Aura",
            "description": "Toggle ability. Drains 1 Aether Charge per second. You project a swirling vortex of the element opposite to your current stance, allowing you to trigger micro-Thermal Shocks merely by walking into primed enemies."
          },
          {
            "id": "the_flux_caster_skill_16",
            "name": "Deflective Convection",
            "level": 16,
            "type": "Passive",
            "description": "While Convection Aura is active, projectile attacks from standard enemies incinerate or freeze mid-air before hitting you."
          },
          {
            "id": "the_flux_caster_skill_17",
            "name": "Ley-Line Pull",
            "level": 17,
            "type": "Active",
            "description": "Fire a whip of pure energy to grapple a lightweight enemy directly to you. The whip automatically applies your current stance's Primer."
          },
          {
            "id": "the_flux_caster_skill_18",
            "name": "Temperature Shock",
            "level": 18,
            "type": "Passive",
            "description": "Thermal Detonation (Level 4) now shatters 20% of an enemy's base armor rating permanently."
          },
          {
            "id": "the_flux_caster_skill_19",
            "name": "Deep Freeze / Wildfire",
            "level": 19,
            "type": "Passive",
            "description": "Scorched damage-over-time is increased by 50%. Chilled slow effect is increased to 40%."
          },
          {
            "id": "the_flux_caster_skill_20",
            "name": "Flash-Freeze / Flash-Fry",
            "level": 20,
            "type": "Active / Cooldown",
            "description": "Major Ability. Depending on your current stance, you release an arena-wide wave of energy. Ignition instantly incinerates all fodder enemies below 20% health. Glacial instantly turns all non-boss enemies into solid ice blocks for 4 seconds, pausing their animations completely. 35-second cooldown.",
            "cooldown": "35-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 3: Advanced Mechanics & Survivability",
        "minLevel": 21,
        "maxLevel": 30,
        "skills": [
          {
            "id": "the_flux_caster_skill_21",
            "name": "Shatter-Strike",
            "level": 21,
            "type": "Passive",
            "description": "Hitting an enemy frozen by Flash-Freeze with an Ignition attack deals 200% bonus critical damage and instantly breaks them out of the ice."
          },
          {
            "id": "the_flux_caster_skill_22",
            "name": "Flawless Casting",
            "level": 22,
            "type": "Passive",
            "description": "Reaching a 25-hit combo increases your stance-swapping animation speed to be completely instantaneous and boosts attack speed by 15%."
          },
          {
            "id": "the_flux_caster_skill_23",
            "name": "Perfect Casting",
            "level": 23,
            "type": "Passive",
            "description": "Reaching a 50-hit combo allows your Thermal Detonations to completely bypass all energy shields and physical barricades."
          },
          {
            "id": "the_flux_caster_skill_24",
            "name": "Frame-Trap Decoy",
            "level": 24,
            "type": "Active",
            "description": "Dodge backward precisely as an enemy strikes to leave behind an elemental clone of your current stance. You automatically swap to the opposite stance. The enemy strikes the clone, triggering an immediate Thermal Detonation."
          },
          {
            "id": "the_flux_caster_skill_25",
            "name": "Elemental Blindness",
            "level": 25,
            "type": "Passive",
            "description": "The explosion from Frame-Trap Decoy permanently blinds the attacker for 4 seconds."
          },
          {
            "id": "the_flux_caster_skill_26",
            "name": "Arcane Metabolism",
            "level": 26,
            "type": "Passive",
            "description": "Permanently increases stamina regeneration rate by 20%."
          },
          {
            "id": "the_flux_caster_skill_27",
            "name": "Maximum Charge",
            "level": 27,
            "type": "Passive",
            "description": "Aether Charge storage capacity is increased from 10 to 20."
          },
          {
            "id": "the_flux_caster_skill_28",
            "name": "Dual-Cast Detonation",
            "level": 28,
            "type": "Active / Finisher",
            "description": "Consumes 10 Aether Charges. You strike the target with Fire, instantly strike them with Ice, and then slam both hands into their chest to trigger a localized supernova that guarantees a critical hit."
          },
          {
            "id": "the_flux_caster_skill_29",
            "name": "Graceful Swap",
            "level": 29,
            "type": "Passive",
            "description": "Stance Dance (Level 2) now grants a 0.2-second window of complete invulnerability (i-frames) when activated, allowing you to phase through attacks by changing elements."
          },
          {
            "id": "the_flux_caster_skill_30",
            "name": "The Maelstrom",
            "level": 30,
            "type": "Active / Cooldown",
            "description": "Major Ability. You summon a towering, stationary tornado in the center of the arena. It constantly pulls enemies inward. Hitting the Maelstrom with your light attacks imbues it with your current element, turning it into a massive vortex of fire or ice. 50-second cooldown.",
            "cooldown": "50-second cooldown"
          }
        ]
      },
      {
        "name": "Tier 4: Capstones & Mastery",
        "minLevel": 31,
        "maxLevel": 40,
        "skills": [
          {
            "id": "the_flux_caster_skill_31",
            "name": "Maelstrom Synergy",
            "level": 31,
            "type": "Passive",
            "description": "You can imbue The Maelstrom with both elements sequentially, turning it into a sustained Thermal Shock generator that constantly juggles and detonates trapped enemies."
          },
          {
            "id": "the_flux_caster_skill_32",
            "name": "Unbroken Focus",
            "level": 32,
            "type": "Passive",
            "description": "Taking damage no longer resets your combo multiplier to zero. Instead, it instantly drains 10 Aether Charges to absorb the blow and maintain your combo. (If you have less than 10 charges, the combo breaks)."
          },
          {
            "id": "the_flux_caster_skill_33",
            "name": "Critical Element",
            "level": 33,
            "type": "Passive",
            "description": "Base critical hit chance increased by 10%."
          },
          {
            "id": "the_flux_caster_skill_34",
            "name": "Weak-Point Targeting",
            "level": 34,
            "type": "Passive",
            "description": "Critical hit damage increased by 25% against enemies currently afflicted with Scorched or Chilled."
          },
          {
            "id": "the_flux_caster_skill_35",
            "name": "The Master Weaver",
            "level": 35,
            "type": "Aura",
            "description": "Consumes 15 Aether Charges to activate. For 10 seconds, your strikes simultaneously count as both Ignition and Glacial. Every single light attack you land instantly triggers a Thermal Detonation on its own."
          },
          {
            "id": "the_flux_caster_skill_36",
            "name": "Cooldown Reduction",
            "level": 36,
            "type": "Passive",
            "description": "Every successful Flux-Parry reduces the cooldown of Flash-Freeze/Flash-Fry and The Maelstrom by 1.5 seconds."
          },
          {
            "id": "the_flux_caster_skill_37",
            "name": "Infinite Stride",
            "level": 37,
            "type": "Passive",
            "description": "You can perform elemental mid-air dashes indefinitely, leaving trails of fire and ice in the sky as you cross massive arenas without touching the ground."
          },
          {
            "id": "the_flux_caster_skill_38",
            "name": "Kinetic Battery",
            "level": 38,
            "type": "Passive",
            "description": "Staying airborne for more than 5 seconds grants a stacking damage buff (2% per second) until you touch the floor."
          },
          {
            "id": "the_flux_caster_skill_39",
            "name": "Emergency Stasis",
            "level": 39,
            "type": "Passive",
            "description": "When your health drops below 5%, you instantly encase yourself in a block of absolute zero ice for 4 seconds. You are completely immune to damage and heal 30% of your max health. Can only occur once every 5 minutes."
          },
          {
            "id": "the_flux_caster_skill_40",
            "name": "CAPSTONE - The Avatar of Flux",
            "level": 40,
            "type": "Active / Ultimate",
            "description": "Consumes a 100x combo multiplier to activate. You levitate off the ground, becoming a being of pure, raw thermal energy. For 15 seconds, you have infinite Aether Charges. Your basic attacks become massive, sweeping arcs of plasma (superheated gas). Every single enemy in the arena is perpetually primed with both elements, and every strike you land causes cascading, screen-clearing Thermal Detonations that ignore all armor, shields, and immunities."
          }
        ]
      }
    ]
  }
};
