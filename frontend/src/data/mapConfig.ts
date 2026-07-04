export type HotspotType = 'drill_down' | 'fast_travel';

export interface MapHotspot {
  id: string;
  name: string;
  top: string;
  left: string;
  type: HotspotType;
  targetId: string; // If drill_down, this is the mapId. If fast_travel, this is the zoneId.
}

export interface MapConfig {
  id: string;
  name: string;
  imageUrl: string;
  hotspots: MapHotspot[];
}

export const MAPS: Record<string, MapConfig> = {
  'world_map': {
    id: 'world_map',
    name: 'Global Overview',
    imageUrl: '/assets/images/world_map.jpg',
    hotspots: [
      { id: 'hs_cosmic_layer', name: 'The Cosmic Layer', top: '10%', left: '50%', type: 'drill_down', targetId: 'cosmic_layer' },
      { id: 'hs_urban_core', name: 'The Urban Core', top: '35%', left: '50%', type: 'drill_down', targetId: 'urban_core' },
      { id: 'hs_western_wastes', name: 'Western Wastes', top: '35%', left: '20%', type: 'fast_travel', targetId: 'western_wastes' },
      { id: 'hs_eastern_wilds', name: 'Eastern Wilds', top: '35%', left: '80%', type: 'fast_travel', targetId: 'eastern_wilds' },
      { id: 'hs_geothermal_abyss', name: 'Geothermal Abyss', top: '75%', left: '50%', type: 'fast_travel', targetId: 'geothermal_abyss' }
    ]
  },
  'cosmic_layer': {
    id: 'cosmic_layer',
    name: 'The Cosmic Layer',
    imageUrl: '/assets/images/maps/01_main_locations/01_the_cosmic_layer.png',
    hotspots: [
      { id: 'lunar_readiness_base', name: 'Lunar Readiness Base', top: '30%', left: '40%', type: 'fast_travel', targetId: 'lunar_readiness_base' },
      { id: 'planet_defense_perimeter', name: 'Planet Defense Perimeter', top: '50%', left: '60%', type: 'fast_travel', targetId: 'planet_defense_perimeter' },
      { id: 'orbital_tether_station', name: 'Orbital Tether Station', top: '70%', left: '30%', type: 'fast_travel', targetId: 'orbital_tether_station' },
      { id: 'space_elevator', name: 'Space Elevator', top: '80%', left: '50%', type: 'fast_travel', targetId: 'space_elevator' }
    ]
  },
  'urban_core': {
    id: 'urban_core',
    name: 'The Urban Core',
    imageUrl: '/assets/images/maps/01_main_locations/02_the_urban_core.png',
    hotspots: [
      { id: 'zenith_spire', name: 'Zenith Spire', top: '25%', left: '50%', type: 'fast_travel', targetId: 'zenith_spire' },
      { id: 'provisioning_sectors', name: 'Provisioning Sectors', top: '40%', left: '35%', type: 'fast_travel', targetId: 'provisioning_sectors' },
      { id: 'on_demand_arteries', name: 'On-Demand Arteries', top: '45%', left: '65%', type: 'fast_travel', targetId: 'on_demand_arteries' },
      { id: 'raid_rush_choke_points', name: 'Raid Rush Choke Points', top: '60%', left: '30%', type: 'fast_travel', targetId: 'raid_rush_choke_points' },
      { id: 'front_matter_void', name: 'Front Matter Void', top: '75%', left: '50%', type: 'fast_travel', targetId: 'front_matter_void' },
      { id: 'micro_markets', name: 'Micro Markets', top: '65%', left: '70%', type: 'fast_travel', targetId: 'micro_markets' }
    ]
  }
};
