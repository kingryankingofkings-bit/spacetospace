# Blender Production Script Notes — Torinn Rhogar
# This is a pipeline guide/script starter, not a finished sculpt generator.
# Use it to set collection names, materials, scale, sockets, and required geometry groups.

import bpy

ASSET_NAME = "Torinn_Rhogar"
HEIGHT_METERS = 1.93

COLLECTIONS = [
    "Torinn_00_Blockout",
    "Torinn_01_Platinum_Scales",
    "Torinn_02_WhiteGold_Robes",
    "Torinn_03_Gold_Skull_Pauldrons",
    "Torinn_04_Tendrils_Jewelry",
    "Torinn_05_Tail",
    "Torinn_06_VFX_Sockets",
    "Torinn_07_Rig_Cloth_Tendrils",
]

SOCKETS = [
    "fist_vfx_L", "fist_vfx_R", "mouth_breath_vfx", "halo_head_vfx",
    "tail_tip", "shoulder_skull_L", "shoulder_skull_R"
]

VISUAL_LOCK = {
    "scales": "shimmering platinum, layered, reflective silver-white",
    "robe": "white tunic and layered monk robe with gold-thread trim",
    "pauldrons": "solid-gold human-like skull pauldrons",
    "tendrils": "thick scaly tendrils down back with gold/silver bangles and blue gemstones",
    "magic": "white-blue frost-lightning and blue-green static mist from clawed fists",
    "aura": "31F divine aura; cold breath, snow motes, frost halo"
}

# Suggested production pass:
# 1. Import proxy GLB as scale/silhouette blockout.
# 2. Sculpt head, snout, cheek spines, crown spikes, and scale plates.
# 3. Build tendril chains as curves with bevel_depth and convert to mesh after approved.
# 4. Model gold skull pauldrons as separate high-detail meshes.
# 5. Sim or sculpt robe panels, then retopologize for game deformation.
# 6. Add armature: humanoid + tail + 12 tendril chains + robe panels.
# 7. Bake PBR maps and export final GLB/FBX.

def ensure_collections():
    for name in COLLECTIONS:
        if name not in bpy.data.collections:
            bpy.context.scene.collection.children.link(bpy.data.collections.new(name))

ensure_collections()
print(f"{ASSET_NAME} production scene prepared. Target height: {HEIGHT_METERS}m")
