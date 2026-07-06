import * as THREE from 'three';

export class ObjectPool {
  private static vec3Pool: THREE.Vector3[] = [];
  private static quatPool: THREE.Quaternion[] = [];
  private static mat4Pool: THREE.Matrix4[] = [];

  // Pre-allocate pools
  static init(size: number = 100) {
    for (let i = 0; i < size; i++) {
      this.vec3Pool.push(new THREE.Vector3());
      this.quatPool.push(new THREE.Quaternion());
      this.mat4Pool.push(new THREE.Matrix4());
    }
  }

  static getVec3(x = 0, y = 0, z = 0): THREE.Vector3 {
    if (this.vec3Pool.length > 0) {
      const v = this.vec3Pool.pop()!;
      return v.set(x, y, z);
    }
    return new THREE.Vector3(x, y, z);
  }

  static releaseVec3(v: THREE.Vector3) {
    this.vec3Pool.push(v);
  }

  static getQuat(): THREE.Quaternion {
    if (this.quatPool.length > 0) {
      const q = this.quatPool.pop()!;
      return q.identity();
    }
    return new THREE.Quaternion();
  }

  static releaseQuat(q: THREE.Quaternion) {
    this.quatPool.push(q);
  }

  static getMat4(): THREE.Matrix4 {
    if (this.mat4Pool.length > 0) {
      const m = this.mat4Pool.pop()!;
      return m.identity();
    }
    return new THREE.Matrix4();
  }

  static releaseMat4(m: THREE.Matrix4) {
    this.mat4Pool.push(m);
  }
}

// Initialize default capacity
ObjectPool.init(100);
