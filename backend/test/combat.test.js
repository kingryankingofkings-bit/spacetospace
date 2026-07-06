const test = require('node:test');
const assert = require('node:assert');
const Module = require('module');

// Mock bossController
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  if (id === './bossController' || id === '../bossController') {
    return {
      handleBossDamage: (bossId, dmg, combo) => {}
    };
  }
  return originalRequire.apply(this, arguments);
};

const combatSystem = require('../combatSystem');

test('Combat System Unit Tests', async (t) => {
  // Save original Math.random
  const originalRandom = Math.random;

  t.afterEach(() => {
    Math.random = originalRandom;
  });

  await t.test('Base damage calculations (no crit)', () => {
    // Force Math.random to always return a high value so no critical strike occurs
    Math.random = () => 0.99;

    const attacker = {
      playerClass: 'Warrior',
      level: 3,
      gear: []
    };

    const result = combatSystem.applyDamage(
      { health: 100, gear: [] },
      10, // fallback
      0,  // combo
      false, // isNpc
      false, // isBoss
      attacker
    );
    // Attacker damage = level * 10 = 30. No armor/shields on target. Remaining damage = 30.
    // Target health = 100 - 30 = 70.
    assert.strictEqual(result, 70);
  });

  await t.test('Base damage calculations (guaranteed crit)', () => {
    // Force Math.random to return 0.01 (always crit since critChance is 0.05)
    Math.random = () => 0.01;

    const attacker = {
      playerClass: 'Warrior',
      level: 3,
      gear: []
    };

    const target = { health: 150, gear: [] };
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    // Base damage = level * 10 = 30.
    // Crit multiplier = 1.5. Final damage = 30 * 1.5 = 45.
    // Target health = 150 - 45 = 105.
    assert.strictEqual(target.health, 105);
  });

  await t.test('Weapon power, crit chance/damage bonuses and caps', () => {
    // Force crit
    Math.random = () => 0.01;

    const attacker = {
      playerClass: 'Warrior',
      level: 1,
      gear: [
        { type: 'Weapon', power: 20, critChance: 0.1, critDamage: 0.2 }
      ]
    };
    // Base damage = 10. Weapon power = 20. Total base = 30.
    // Base critChance = 0.05 + 0.1 = 0.15.
    // Base critDamage = 1.5 + 0.2 = 1.7.
    // Expected damage = 30 * 1.7 = 51.

    const target = { health: 100, gear: [] };
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 49); // 100 - 51 = 49
  });

  await t.test('Crit chance and crit damage hard caps', () => {
    // Force crit
    Math.random = () => 0.01;

    const attacker = {
      playerClass: 'Warrior',
      level: 1,
      gear: [
        { type: 'Weapon', power: 10, critChance: 0.9, critDamage: 2.0 }
      ]
    };
    // Base damage = 10 + 10 = 20.
    // Crit chance capped at 0.6.
    // Crit damage capped at 3.0.
    // Expected crit damage = 20 * 3.0 = 60.

    const target = { health: 100, gear: [] };
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 40); // 100 - 60 = 40
  });

  await t.test('Beast oil bonus multiplies damage by 2', () => {
    Math.random = () => 0.99; // no crit

    const attacker = {
      playerClass: 'Warrior',
      level: 2, // base damage 20
      statusEffects: [{ type: 'beast_oil' }]
    };
    // Expected damage = 20 * 2 = 40.

    const target = { health: 100, gear: [] };
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 60);
  });

  await t.test('Perfect counter active on attacker multiplies damage by 3 and consumes it', () => {
    Math.random = () => 0.99; // no crit

    const attacker = {
      playerClass: 'Warrior',
      level: 2, // base damage 20
      perfectCounterActive: true
    };
    // Expected damage = 20 * 3 = 60.

    const target = { health: 100, gear: [] };
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 40);
    assert.strictEqual(attacker.perfectCounterActive, false); // consumed
  });

  await t.test('Underleveled level difference penalty (deals 50% damage)', () => {
    Math.random = () => 0.99; // no crit

    const attacker = {
      playerClass: 'Warrior',
      level: 5 // base damage 50
    };
    const target = {
      health: 100,
      level: 10, // 5 levels higher than attacker
      gear: []
    };
    // Expected damage = 50 * 0.5 = 25.

    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 75);
  });

  await t.test('Armor flat mitigation (capped at 75% reduction)', () => {
    Math.random = () => 0.99;

    const attacker = {
      playerClass: 'Warrior',
      level: 10 // base damage 100
    };
    const target = {
      health: 100,
      gear: [
        { type: 'Armor', weight: 12.0, power: 100 } // Grants flat armor = 100 * 0.5 = 50
      ]
    };
    // Base damage = 100. Armor = 50.
    // 75% mitigation cap is 100 * 0.75 = 75. Mitigated is min(50, 75) = 50.
    // Remaining damage = 100 - 50 = 50.

    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 50);
  });

  await t.test('Shield absorption', () => {
    Math.random = () => 0.99;

    const attacker = {
      playerClass: 'Warrior',
      level: 5 // base damage 50
    };
    const target = {
      health: 100,
      shield: 30,
      gear: []
    };
    // Base damage = 50.
    // Shield absorbs 30. Remaining damage = 20.
    // Target health = 100 - 20 = 80. Target shield = 0.

    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 80);
    assert.strictEqual(target.shield, 0);
  });

  await t.test('Minimum 1 damage is enforced', () => {
    Math.random = () => 0.99;

    const attacker = {
      playerClass: 'Warrior',
      level: 1 // base damage 10
    };
    const target = {
      health: 100,
      gear: [
        { type: 'Armor', weight: 12.0, power: 1000 } // Huge armor
      ]
    };
    // Expected base damage = 10. Armor = 500.
    // Capped at 75% mitigation = 7.5. Remaining = 2.5.
    // But let's say target has a shield = 100.
    target.shield = 100;
    
    // Shield absorbs all. Remaining damage is 0.
    // But since base calcDamage was 10 > 0, minimum 1 damage is enforced.
    // Target shield should absorb up to 0, target health should decrease by 1.
    combatSystem.applyDamage(target, 10, 0, false, false, attacker);
    assert.strictEqual(target.health, 99);
  });

  await t.test('Guarding (Perfect Counter vs regular guard)', async (t) => {
    await t.test('Perfect Counter window (<= 300ms) blocks all damage and sets perfectCounterActive', () => {
      Math.random = () => 0.99;
      const target = {
        health: 100,
        isGuarding: true,
        lastGuardTime: Date.now()
      };
      
      const resHealth = combatSystem.applyDamage(target, 50, 0, false, false, null);
      assert.strictEqual(resHealth, 100);
      assert.strictEqual(target.perfectCounterActive, true);
    });

    await t.test('Regular guard (> 300ms) blocks all damage but does not set perfectCounterActive', () => {
      Math.random = () => 0.99;
      const target = {
        health: 100,
        isGuarding: true,
        lastGuardTime: Date.now() - 400
      };
      
      const resHealth = combatSystem.applyDamage(target, 50, 0, false, false, null);
      assert.strictEqual(resHealth, 100);
      assert.strictEqual(target.perfectCounterActive, undefined);
    });
  });

  await t.test('Hit-stun and stagger rules for NPCs', async (t) => {
    await t.test('Fodder NPC stagger immediately on heavy attack', () => {
      const attacker = { currentAttackType: 'heavy' };
      const npc = { hp: 100, maxHp: 100, role: 'Fodder', gear: [] };

      combatSystem.applyDamage(npc, 10, 0, true, false, attacker);
      assert.strictEqual(npc.state, 'STAGGER');
      assert.ok(npc.staggerEndTime > Date.now());
    });

    await t.test('Elite NPC stagger requires 3 rapid heavy attacks', () => {
      const attacker = { currentAttackType: 'heavy' };
      const npc = { hp: 100, maxHp: 100, role: 'Elite', gear: [] };
      const now = Date.now();

      // Hit 1
      combatSystem.applyDamage(npc, 10, 0, true, false, attacker);
      assert.strictEqual(npc.staggerHits, 1);
      assert.notStrictEqual(npc.state, 'STAGGER');

      // Hit 2
      combatSystem.applyDamage(npc, 10, 0, true, false, attacker);
      assert.strictEqual(npc.staggerHits, 2);
      assert.notStrictEqual(npc.state, 'STAGGER');

      // Hit 3
      combatSystem.applyDamage(npc, 10, 0, true, false, attacker);
      assert.strictEqual(npc.staggerHits, 0); // reset
      assert.strictEqual(npc.state, 'STAGGER');
      assert.ok(npc.staggerEndTime >= now + 1500);
    });

    await t.test('Elite NPC stagger hits reset if not rapid (> 2s)', () => {
      const attacker = { currentAttackType: 'heavy' };
      const npc = { hp: 100, maxHp: 100, role: 'Elite', staggerHits: 2, lastStaggerHit: Date.now() - 2500, gear: [] };

      combatSystem.applyDamage(npc, 10, 0, true, false, attacker);
      // staggerHits should reset to 0 and then increment to 1
      assert.strictEqual(npc.staggerHits, 1);
      assert.notStrictEqual(npc.state, 'STAGGER');
    });
  });
});
