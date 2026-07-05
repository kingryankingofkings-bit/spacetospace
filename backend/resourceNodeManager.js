/**
 * resourceNodeManager.js
 * Handles procedural spawning and gathering of landscape resources (flowers, insects, minerals).
 */

const { broadcast } = require('./index'); // To broadcast node spawns
const db = require('./db');

const GATHERABLES = {
    "herb_glowing_moss": { name: "Glowing Moss", type: "glowing_moss", respawnTime: 300000 },
    "herb_iron_bark": { name: "Iron Bark", type: "iron_bark", respawnTime: 600000 },
    "mineral_scrap_metal": { name: "Scrap Pile", type: "scrap_metal", respawnTime: 120000 },
    "mineral_crystalline_shard": { name: "Crystal Outcrop", type: "crystalline_shard", respawnTime: 300000 },
    "insect_void_beetle": { name: "Void Beetle", type: "void_dust", respawnTime: 400000 }
};

const ZONES = {
    "urban_core": ["mineral_scrap_metal"],
    "rust_wastes": ["mineral_scrap_metal", "herb_iron_bark"],
    "nexus_district": ["mineral_crystalline_shard", "herb_glowing_moss"],
    "ascendant_peak": ["insect_void_beetle", "mineral_crystalline_shard"]
};

// Map of active nodes: nodeId -> nodeData
const activeNodes = new Map();

/**
 * Spawns a node at random coordinates in a zone.
 */
function spawnNode(zone, nodeTemplateId) {
    const template = GATHERABLES[nodeTemplateId];
    if (!template) return;

    const nodeId = "node_" + Date.now() + "_" + Math.floor(Math.random() * 10000);
    // Random coordinates for demonstration (should match navmesh ideally)
    const x = (Math.random() * 200) - 100;
    const z = (Math.random() * 200) - 100;

    const nodeData = {
        id: nodeId,
        templateId: nodeTemplateId,
        type: template.type,
        name: template.name,
        zone: zone,
        x: x,
        y: 0,
        z: z,
        respawnTime: template.respawnTime
    };

    activeNodes.set(nodeId, nodeData);

    // Using global broadcast pattern
    if (global.broadcast) {
        global.broadcast({ type: "spawn_resource_node", node: nodeData }, null, zone);
    }
}

/**
 * Initializes nodes for the server startup.
 */
function initializeNodes() {
    for (const [zone, templates] of Object.entries(ZONES)) {
        for (const templateId of templates) {
            // Spawn 5 of each type per zone
            for (let i = 0; i < 5; i++) {
                spawnNode(zone, templateId);
            }
        }
    }
}

/**
 * Handles a player gathering a node.
 * @returns {object} The item type gathered, or null if invalid.
 */
function gatherNode(nodeId, player) {
    const node = activeNodes.get(nodeId);
    if (!node) return null;
    if (node.zone !== player.zone) return null;

    // Check distance (simple 5 unit check)
    const dx = player.x - node.x;
    const dz = player.z - node.z;
    const distSq = dx * dx + dz * dz;
    if (distSq > 25) return null; // Too far

    const itemType = node.type;
    const templateId = node.templateId;
    const zone = node.zone;

    // Remove the node
    activeNodes.delete(nodeId);
    
    // Broadcast despawn
    if (global.broadcast) {
        global.broadcast({ type: "despawn_resource_node", nodeId: nodeId }, null, zone);
    }

    // Schedule respawn
    setTimeout(() => {
        spawnNode(zone, templateId);
    }, node.respawnTime);

    return itemType;
}

/**
 * Get all active nodes in a zone (for sending to connecting players)
 */
function getActiveNodesInZone(zone) {
    const nodes = [];
    for (const node of activeNodes.values()) {
        if (node.zone === zone) {
            nodes.push(node);
        }
    }
    return nodes;
}

module.exports = {
    initializeNodes,
    gatherNode,
    getActiveNodesInZone
};
