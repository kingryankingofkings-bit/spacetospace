import * as THREE from 'three';

export type ColliderShapeType = 'box' | 'sphere' | 'hull' | 'trimesh';

export interface ParsedCollider {
  type: ColliderShapeType;
  position: [number, number, number];
  rotation: [number, number, number]; // Euler angles
  scale: [number, number, number];
  args: any;
  name: string;
}

export interface PhysicsParserOptions {
  defaultCollider?: ColliderShapeType;
  includeInvisible?: boolean;
  meshNameFilter?: RegExp;
  basePosition?: [number, number, number];
  baseRotation?: [number, number, number];
  baseScale?: [number, number, number];
}

export function parseModelColliders(
  object: THREE.Object3D,
  options: PhysicsParserOptions = {}
): ParsedCollider[] {
  const {
    defaultCollider = 'box',
    includeInvisible = false,
    meshNameFilter,
    basePosition = [0, 0, 0],
    baseRotation = [0, 0, 0],
    baseScale = [1, 1, 1],
  } = options;

  const colliders: ParsedCollider[] = [];
  
  const baseMatrix = new THREE.Matrix4().compose(
    new THREE.Vector3(...basePosition),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...baseRotation)),
    new THREE.Vector3(...baseScale)
  );

  object.updateMatrixWorld(true);

  object.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;

      if (!includeInvisible && !mesh.visible) return;
      if (meshNameFilter && !meshNameFilter.test(mesh.name)) return;
      
      const geometry = mesh.geometry;
      if (!geometry) return;

      const worldMatrix = new THREE.Matrix4().multiplyMatrices(baseMatrix, mesh.matrixWorld);
      
      const worldPosition = new THREE.Vector3();
      const worldQuaternion = new THREE.Quaternion();
      const worldScale = new THREE.Vector3();
      
      worldMatrix.decompose(worldPosition, worldQuaternion, worldScale);
      const euler = new THREE.Euler().setFromQuaternion(worldQuaternion);
      
      let type = defaultCollider;
      
      const lowerName = mesh.name.toLowerCase();
      if (lowerName.includes('col_box')) type = 'box';
      else if (lowerName.includes('col_sphere')) type = 'sphere';
      else if (lowerName.includes('col_hull') || lowerName.includes('convex')) type = 'hull';
      else if (lowerName.includes('col_trimesh') || lowerName.includes('col_mesh')) type = 'trimesh';
      
      if (mesh.userData?.colliderType) {
        type = mesh.userData.colliderType as ColliderShapeType;
      }

      let args: any;
      
      switch (type) {
        case 'box': {
          geometry.computeBoundingBox();
          const box = geometry.boundingBox;
          if (box) {
            const size = new THREE.Vector3();
            box.getSize(size);
            
            const center = new THREE.Vector3();
            box.getCenter(center);
            
            args = [size.x * worldScale.x, size.y * worldScale.y, size.z * worldScale.z];
            
            center.multiply(worldScale);
            center.applyQuaternion(worldQuaternion);
            worldPosition.add(center);
          } else {
            args = [1, 1, 1];
          }
          break;
        }
        case 'sphere': {
          geometry.computeBoundingSphere();
          const sphere = geometry.boundingSphere;
          if (sphere) {
             const maxScale = Math.max(Math.abs(worldScale.x), Math.abs(worldScale.y), Math.abs(worldScale.z));
             args = [sphere.radius * maxScale];
             
             const center = sphere.center.clone();
             center.multiply(worldScale);
             center.applyQuaternion(worldQuaternion);
             worldPosition.add(center);
          } else {
             args = [1];
          }
          break;
        }
        case 'trimesh': {
          const posAttribute = geometry.attributes.position;
          const vertices = posAttribute.array;
          
          let indices;
          if (geometry.index) {
             indices = geometry.index.array;
          } else {
             indices = Array.from({ length: vertices.length / 3 }, (_, i) => i);
          }
          
          const scaledVertices = new Float32Array(vertices.length);
          for (let i = 0; i < vertices.length; i += 3) {
            scaledVertices[i] = vertices[i] * worldScale.x;
            scaledVertices[i+1] = vertices[i+1] * worldScale.y;
            scaledVertices[i+2] = vertices[i+2] * worldScale.z;
          }
          
          args = [Array.from(scaledVertices), Array.from(indices)];
          break;
        }
        case 'hull': {
          const posAttribute = geometry.attributes.position;
          const vertices = posAttribute.array;
          const scaledVertices = [];
          for (let i = 0; i < vertices.length; i += 3) {
            scaledVertices.push(new THREE.Vector3(
               vertices[i] * worldScale.x,
               vertices[i+1] * worldScale.y,
               vertices[i+2] * worldScale.z
            ));
          }
          args = [scaledVertices];
          break;
        }
      }

      colliders.push({
        type,
        position: [worldPosition.x, worldPosition.y, worldPosition.z],
        rotation: [euler.x, euler.y, euler.z],
        scale: [worldScale.x, worldScale.y, worldScale.z],
        args,
        name: mesh.name
      });
    }
  });

  return colliders;
}
