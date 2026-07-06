const test = require('node:test');
const assert = require('node:assert');
const economyManager = require('../economyManager');

test('Economy System tests', async (t) => {
  await t.test('getItemPrice lookups', () => {
    assert.strictEqual(economyManager.getItemPrice('sword_iron'), 100);
    assert.strictEqual(economyManager.getItemPrice('shield_wood'), 50);
    assert.strictEqual(economyManager.getItemPrice('armor_leather'), 150);
    assert.strictEqual(economyManager.getItemPrice('skin_neon_katana'), 500);
    assert.strictEqual(economyManager.getItemPrice('skin_astral_greatsword'), 5000);
    assert.strictEqual(economyManager.getItemPrice('non_existent_item'), null);
  });

  await t.test('canAfford checks', () => {
    const player = { currency: 100 };
    assert.ok(economyManager.canAfford(player, 100));
    assert.ok(economyManager.canAfford(player, 50));
    assert.ok(!economyManager.canAfford(player, 150));
    assert.ok(!economyManager.canAfford({}, 10));
  });

  await t.test('deductCurrency checks', () => {
    const player = { currency: 100 };
    const success = economyManager.deductCurrency(player, 40);
    assert.strictEqual(success, true);
    assert.strictEqual(player.currency, 60);

    const failure = economyManager.deductCurrency(player, 70);
    assert.strictEqual(failure, false);
    assert.strictEqual(player.currency, 60);
  });

  await t.test('addCurrency checks', () => {
    const player = { currency: 100 };
    economyManager.addCurrency(player, 50);
    assert.strictEqual(player.currency, 150);

    const player2 = {};
    economyManager.addCurrency(player2, 30);
    assert.strictEqual(player2.currency, 30);
  });

  await t.test('getVendorInventory checks', () => {
    const blacksmithInv = economyManager.getVendorInventory('blacksmith');
    assert.ok(Array.isArray(blacksmithInv));
    assert.ok(blacksmithInv.some(i => i.itemId === 'sword_iron'));

    const fallbackInv = economyManager.getVendorInventory('unknown_vendor');
    const generalInv = economyManager.getVendorInventory('general');
    assert.deepStrictEqual(fallbackInv, generalInv);
  });
});
