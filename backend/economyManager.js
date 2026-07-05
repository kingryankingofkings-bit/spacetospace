/**
 * economyManager.js
 * Implements a merchant vendor, currency system, and weapon skin shops.
 */

const VENDOR_INVENTORIES = {
  "blacksmith": [
    { itemId: "sword_iron", price: 100 },
    { itemId: "shield_wood", price: 50 },
    { itemId: "armor_leather", price: 150 }
  ],
  "alchemist": [
    { itemId: "potion_health", price: 25 },
    { itemId: "potion_mana", price: 25 }
  ],
  "general": [
    { itemId: "scrap_metal", price: 5 },
    { itemId: "cloth", price: 2 }
  ],
  "dye_merchant": [
    { itemId: "dye_crimson_red", price: 50 },
    { itemId: "dye_abyssal_black", price: 50 },
    { itemId: "dye_celestial_white", price: 50 },
    { itemId: "dye_toxic_green", price: 50 },
    { itemId: "dye_royal_purple", price: 50 }
  ],
  // Zone-specific Weapon Skin Shops
  "skin_shop_urban_core": [
    { itemId: "skin_neon_katana", price: 500 },
    { itemId: "skin_street_bat", price: 300 }
  ],
  "skin_shop_rust_wastes": [
    { itemId: "skin_buzzsaw_blade", price: 1000 },
    { itemId: "skin_rusty_pipe", price: 800 }
  ],
  "skin_shop_ascendant_peak": [
    { itemId: "skin_astral_greatsword", price: 5000 },
    { itemId: "skin_void_scythe", price: 5000 }
  ]
};

/**
 * Gets the inventory for a specific vendor type.
 * Note: Zone-specific skin merchants can be dynamically requested.
 */
function getVendorInventory(vendorType) {
  return VENDOR_INVENTORIES[vendorType] || VENDOR_INVENTORIES["general"];
}

/**
 * Validates a purchase transaction.
 * Uses player.currency (defined in db.js)
 * @returns {boolean} True if purchase is valid.
 */
function canAfford(player, cost) {
  return (player.currency && player.currency >= cost);
}

/**
 * Deducts currency from a player.
 */
function deductCurrency(player, cost) {
  if (canAfford(player, cost)) {
    player.currency -= cost;
    return true;
  }
  return false;
}

/**
 * Adds currency to a player (from loot, quests).
 */
function addCurrency(player, amount) {
  if (!player.currency) player.currency = 0;
  player.currency += amount;
}

module.exports = {
  getVendorInventory,
  canAfford,
  deductCurrency,
  addCurrency
};
