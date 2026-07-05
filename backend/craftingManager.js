/**
 * craftingManager.js
 * Handles gear crafting recipes from gathered and looted materials.
 */

const RECIPE_DB = {
    // Weapons
    "craft_phase_shift_dagger": {
        requires: [
            { id: "void_dust", count: 10 },
            { id: "anomaly_core", count: 2 },
            { id: "scrap_metal", count: 5 }
        ],
        result: "phase_shift_dagger",
        requiredLevel: 20
    },
    "craft_biomechanical_claws": {
        requires: [
            { id: "synthetic_muscle_fiber", count: 15 },
            { id: "chimera_integration_port", count: 1 },
            { id: "augmented_cpu", count: 3 }
        ],
        result: "biomechanical_claws",
        requiredLevel: 30
    },
    // Armor
    "craft_juggernaut_pauldrons": {
        requires: [
            { id: "iron_bark", count: 20 },
            { id: "juggernaut_heartwood", count: 1 },
            { id: "glowing_moss", count: 5 }
        ],
        result: "juggernaut_pauldrons",
        requiredLevel: 25
    },
    // Starter Gear
    "craft_iron_sword": {
        requires: [
            { id: "scrap_metal", count: 5 },
            { id: "cloth", count: 2 }
        ],
        result: "sword_iron",
        requiredLevel: 1
    }
};

/**
 * Returns available recipes for a player based on their level/quest progress.
 */
function getAvailableRecipes(player) {
    const available = {};
    for (const [recipeId, data] of Object.entries(RECIPE_DB)) {
        if (player.level >= data.requiredLevel) {
            available[recipeId] = data;
        }
    }
    return available;
}

/**
 * Attempts to craft a recipe.
 * @returns {object} { success: boolean, message: string, resultItemId?: string }
 */
function craftRecipe(player, recipeId) {
    const recipe = RECIPE_DB[recipeId];
    if (!recipe) return { success: false, message: "Unknown recipe" };
    if (player.level < recipe.requiredLevel) return { success: false, message: "Level too low" };

    // Check inventory for materials
    const inventoryMap = {};
    if (player.inventory) {
        for (const item of player.inventory) {
            const idKey = item.itemId || item.type;
            inventoryMap[idKey] = (inventoryMap[idKey] || 0) + (item.quantity || 1);
        }
    }

    for (const req of recipe.requires) {
        if (!inventoryMap[req.id] || inventoryMap[req.id] < req.count) {
            return { success: false, message: `Missing material: ${req.id} (Need ${req.count})` };
        }
    }

    // Deduct materials
    for (const req of recipe.requires) {
        let countToRemove = req.count;
        for (let i = player.inventory.length - 1; i >= 0; i--) {
            if (player.inventory[i].type === req.id || player.inventory[i].itemId === req.id) {
                if (player.inventory[i].quantity > countToRemove) {
                    player.inventory[i].quantity -= countToRemove;
                    countToRemove = 0;
                    break;
                } else {
                    countToRemove -= player.inventory[i].quantity;
                    player.inventory.splice(i, 1);
                    if (countToRemove <= 0) break;
                }
            }
        }
    }

    // Add resulting item
    const newItem = {
        id: "item_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        type: recipe.result,
        itemId: recipe.result,
        quantity: 1
    };
    player.inventory.push(newItem);

    return { success: true, message: "Crafted successfully!", resultItemId: recipe.result, item: newItem };
}

module.exports = {
    RECIPE_DB,
    getAvailableRecipes,
    craftRecipe
};
