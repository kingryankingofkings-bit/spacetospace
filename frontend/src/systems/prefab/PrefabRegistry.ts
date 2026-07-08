import { PrefabConfig } from './types';

class Registry {
  private prefabs: Map<string, PrefabConfig> = new Map();

  register(config: PrefabConfig) {
    this.prefabs.set(config.id, config);
  }

  registerMany(configs: PrefabConfig[]) {
    configs.forEach(c => this.register(c));
  }

  get(id: string): PrefabConfig | undefined {
    return this.prefabs.get(id);
  }

  getAll(): PrefabConfig[] {
    return Array.from(this.prefabs.values());
  }

  clear() {
    this.prefabs.clear();
  }
}

export const PrefabRegistry = new Registry();
