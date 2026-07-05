import { getCdnAssetPath } from './AssetManager';

export type AssetType = 
  | 'trap_spike'
  | 'destructible_barrel'
  | 'puzzle_button'
  | 'banner_faction'
  | 'wildlife_deer'
  | 'lighting_torch';

export const ASSET_REGISTRY: Record<AssetType, { rootUrl: string, sceneFilename: string }> = {
  'trap_spike': getCdnAssetPath('/models/19_dungeon_traps_hazards_glb_pack_v1/glb_assets/', 'floor_spike_trap.glb'),
  'destructible_barrel': getCdnAssetPath('/models/08_destructible_debris_glb_pack_v1/glb_assets/', 'wooden_barrel_large.glb'), // assuming this exists
  'puzzle_button': getCdnAssetPath('/models/07_puzzle_mechanisms_glb_pack_v1/glb_assets/', 'floor_switch_heavy.glb'), // assuming this exists
  'banner_faction': getCdnAssetPath('/models/11_faction_banners_signage_glb_pack_v1/glb_assets/', 'banner_tall_red.glb'), // assuming this exists
  'wildlife_deer': getCdnAssetPath('/models/20_ambient_wildlife_critters_glb_pack_v1/glb_assets/', 'stag_adult.glb'), // assuming this exists
  'lighting_torch': getCdnAssetPath('/models/06_lighting_atmosphere_glb_pack_v1/glb_assets/', 'wall_sconce_lit.glb'), // assuming this exists
};

export function getAssetByType(type: string) {
  if (type in ASSET_REGISTRY) {
    return ASSET_REGISTRY[type as AssetType];
  }
  // Fallback to a default object if the type isn't registered
  return getCdnAssetPath('/models/browser_game_3d_asset_pack_v1/glb_assets/', 'wooden_crate.glb');
}
