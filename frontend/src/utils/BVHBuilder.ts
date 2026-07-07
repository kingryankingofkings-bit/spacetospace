import * as THREE from 'three';

export interface BVHNode {
  aabbMin: THREE.Vector3;
  aabbMax: THREE.Vector3;
  leftFirst: number;
  triCount: number;
}

/**
 * A basic Bounding Volume Hierarchy (BVH) builder to accelerate Ray Tracing in WebGPU/Compute.
 * It flattens the tree into a Float32Array so it can be passed via Bind Groups to WGSL.
 */
export class BVHBuilder {
  private nodes: BVHNode[] = [];
  private triangles: number[] = [];
  private positions: Float32Array;
  private indices: Uint32Array;

  constructor(geometry: THREE.BufferGeometry) {
    const posAttr = geometry.getAttribute('position');
    this.positions = posAttr.array as Float32Array;
    
    if (geometry.getIndex()) {
      this.indices = geometry.getIndex()!.array as Uint32Array;
    } else {
      // Unindexed geometry, create sequential indices
      this.indices = new Uint32Array(this.positions.length / 3);
      for (let i = 0; i < this.indices.length; i++) this.indices[i] = i;
    }

    for (let i = 0; i < this.indices.length / 3; i++) {
      this.triangles.push(i);
    }
  }

  public build() {
    console.log(`[BVHBuilder] Building BVH for ${this.triangles.length} triangles...`);
    const rootNode: BVHNode = {
      aabbMin: new THREE.Vector3(),
      aabbMax: new THREE.Vector3(),
      leftFirst: 0,
      triCount: this.triangles.length
    };
    this.nodes.push(rootNode);

    this.updateNodeBounds(0);
    this.subdivide(0);
    
    console.log(`[BVHBuilder] BVH Built with ${this.nodes.length} nodes.`);
    return this.flatten();
  }

  private updateNodeBounds(nodeIdx: number) {
    const node = this.nodes[nodeIdx];
    node.aabbMin.set(Infinity, Infinity, Infinity);
    node.aabbMax.set(-Infinity, -Infinity, -Infinity);

    for (let i = 0; i < node.triCount; i++) {
      const triIdx = this.triangles[node.leftFirst + i];
      
      for (let j = 0; j < 3; j++) {
        const vIdx = this.indices[triIdx * 3 + j] * 3;
        const x = this.positions[vIdx];
        const y = this.positions[vIdx + 1];
        const z = this.positions[vIdx + 2];

        node.aabbMin.x = Math.min(node.aabbMin.x, x);
        node.aabbMin.y = Math.min(node.aabbMin.y, y);
        node.aabbMin.z = Math.min(node.aabbMin.z, z);
        node.aabbMax.x = Math.max(node.aabbMax.x, x);
        node.aabbMax.y = Math.max(node.aabbMax.y, y);
        node.aabbMax.z = Math.max(node.aabbMax.z, z);
      }
    }
  }

  private subdivide(nodeIdx: number) {
    const node = this.nodes[nodeIdx];
    if (node.triCount <= 2) return;

    // Very simple split at the center of the largest axis
    const extent = node.aabbMax.clone().sub(node.aabbMin);
    let axis = 0;
    if (extent.y > extent.x) axis = 1;
    if (extent.z > extent.toArray()[axis]) axis = 2;

    const splitPos = node.aabbMin.toArray()[axis] + extent.toArray()[axis] * 0.5;
    
    let i = node.leftFirst;
    let j = i + node.triCount - 1;

    // Partition
    while (i <= j) {
      const triIdx = this.triangles[i];
      const v0Idx = this.indices[triIdx * 3] * 3;
      const centroidVal = this.positions[v0Idx + axis];

      if (centroidVal < splitPos) {
        i++;
      } else {
        // Swap
        const temp = this.triangles[i];
        this.triangles[i] = this.triangles[j];
        this.triangles[j] = temp;
        j--;
      }
    }

    const leftCount = i - node.leftFirst;
    if (leftCount === 0 || leftCount === node.triCount) return;

    const leftChildIdx = this.nodes.length;
    const rightChildIdx = leftChildIdx + 1;
    
    node.leftFirst = leftChildIdx;
    
    this.nodes.push({
      aabbMin: new THREE.Vector3(),
      aabbMax: new THREE.Vector3(),
      leftFirst: node.leftFirst,
      triCount: leftCount
    });

    this.nodes.push({
      aabbMin: new THREE.Vector3(),
      aabbMax: new THREE.Vector3(),
      leftFirst: i,
      triCount: node.triCount - leftCount
    });

    node.triCount = 0; // Mark as internal node

    this.updateNodeBounds(leftChildIdx);
    this.updateNodeBounds(rightChildIdx);
    this.subdivide(leftChildIdx);
    this.subdivide(rightChildIdx);
  }

  // Flattens to a format GPU can read (Vec4 structs)
  private flatten(): Float32Array {
    // Each node takes 8 floats: aabbMin.xyz, leftFirst, aabbMax.xyz, triCount
    const buffer = new Float32Array(this.nodes.length * 8);
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      buffer[i * 8 + 0] = n.aabbMin.x;
      buffer[i * 8 + 1] = n.aabbMin.y;
      buffer[i * 8 + 2] = n.aabbMin.z;
      buffer[i * 8 + 3] = n.leftFirst;
      buffer[i * 8 + 4] = n.aabbMax.x;
      buffer[i * 8 + 5] = n.aabbMax.y;
      buffer[i * 8 + 6] = n.aabbMax.z;
      buffer[i * 8 + 7] = n.triCount;
    }
    return buffer;
  }
}
