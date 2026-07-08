import { PrefabRegistry } from './PrefabRegistry';
import { usePrefabStore } from './store';

export function initializePrefabs() {
  PrefabRegistry.register({
    id: 'prop_tree_01',
    model: { url: '/models/biome_specific_props_glb_pack_v1/glb_assets/forest_giant_root_arch.glb' },
    physics: { type: 'cylinder', args: [1, 1, 5, 8] } // radiusTop, radiusBottom, height, numSegments
  });
  
  PrefabRegistry.register({
    id: 'prop_rock_large',
    model: { url: '/models/08_destructible_debris_glb_pack_v1/glb_assets/stone_rubble_large.glb' },
    physics: { type: 'box', args: [2, 2, 2] }
  });

  PrefabRegistry.register({
    id: 'structure_ruin_01',
    model: { url: '/models/03_enemy_faction_architecture_glb_pack_v1/glb_assets/scrap_bandit_watchtower.glb' },
    physics: { type: 'box', args: [4, 10, 4] }
  });
}

export function scatterWorldProps(count: number = 20, range: number = 100) {
  const store = usePrefabStore.getState();
  const prefabIds = ['prop_tree_01', 'prop_rock_large', 'structure_ruin_01'];

  for (let i = 0; i < count; i++) {
    const randomPrefab = prefabIds[Math.floor(Math.random() * prefabIds.length)];
    const x = (Math.random() - 0.5) * range;
    const z = (Math.random() - 0.5) * range;
    
    // Very basic y placement
    const y = 0; 

    store.spawn(randomPrefab, {
      position: [x, y, z],
      rotation: [0, Math.random() * Math.PI * 2, 0],
      scale: [1, 1, 1],
    });
  }
}
