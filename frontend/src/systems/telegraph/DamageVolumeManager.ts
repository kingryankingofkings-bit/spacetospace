import * as THREE from 'three';
import { Telegraph } from './types';

export interface DamageableEntity {
  id: string;
  position: { x: number; y: number; z: number }; 
  radius?: number; // Hitbox radius
  onDamage: (amount: number, sourceId?: string) => void;
}

class DamageVolumeManager {
  private entities = new Map<string, DamageableEntity>();

  public registerEntity(entity: DamageableEntity) {
    this.entities.set(entity.id, entity);
  }

  public unregisterEntity(id: string) {
    this.entities.delete(id);
  }

  public getEntities(): DamageableEntity[] {
    return Array.from(this.entities.values());
  }

  /**
   * Called automatically when a telegraph completes.
   * Resolves collision mathematics to damage valid entities.
   */
  public applyDamageVolume(telegraph: Telegraph) {
    if (!telegraph.damage) return;

    const entities = this.getEntities();
    const tPos = new THREE.Vector3(...telegraph.position);
    const tRot = new THREE.Euler(...(telegraph.rotation || [0, 0, 0]));

    for (const entity of entities) {
      const ePos = new THREE.Vector3(entity.position.x, entity.position.y, entity.position.z);
      const eRadius = entity.radius || 0.5;

      if (this.checkCollision(telegraph, tPos, tRot, ePos, eRadius)) {
        entity.onDamage(telegraph.damage, telegraph.id);
      }
    }
  }

  private checkCollision(
    telegraph: Telegraph, 
    tPos: THREE.Vector3, 
    tRot: THREE.Euler, 
    ePos: THREE.Vector3, 
    eRadius: number
  ): boolean {
    const dist = tPos.distanceTo(ePos);

    if (telegraph.shape === 'circle') {
      return dist <= (telegraph.radius + eRadius);
    }

    if (telegraph.shape === 'cone') {
      if (dist > telegraph.radius + eRadius) return false;
      
      const dirToEntity = new THREE.Vector3().subVectors(ePos, tPos).normalize();
      // Assumes cone aims along local +Z axis
      const coneForward = new THREE.Vector3(0, 0, 1).applyEuler(tRot).normalize();
      
      const angle = coneForward.angleTo(dirToEntity);
      return angle <= telegraph.angle / 2;
    }

    if (telegraph.shape === 'line') {
      // Transform entity position into the line's local space
      const localPos = ePos.clone().sub(tPos).applyEuler(new THREE.Euler(-tRot.x, -tRot.y, -tRot.z));
      
      // Line extends along +Z, width is along X
      if (localPos.z >= -eRadius && localPos.z <= telegraph.length + eRadius) {
        if (Math.abs(localPos.x) <= (telegraph.width / 2) + eRadius) {
          return true;
        }
      }
      return false;
    }

    return false;
  }
}

export const damageVolumeManager = new DamageVolumeManager();
