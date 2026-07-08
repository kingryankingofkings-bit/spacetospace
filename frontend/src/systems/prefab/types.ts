export type Vec3 = [number, number, number];

export interface ModelComponentConfig {
  url: string;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export interface PhysicsComponentConfig {
  type: 'box' | 'sphere' | 'cylinder' | 'plane';
  mass?: number;
  args?: any[]; // specific to shape, e.g., [width, height, depth] for box
  fixedRotation?: boolean;
  isTrigger?: boolean;
}

export interface PrefabConfig {
  id: string;
  model?: ModelComponentConfig;
  physics?: PhysicsComponentConfig;
  customData?: Record<string, any>;
}

export interface EntityState {
  id: string;
  prefabId: string;
  position: Vec3;
  rotation: Vec3;
  scale: Vec3;
  active: boolean; 
  customData?: Record<string, any>;
}
