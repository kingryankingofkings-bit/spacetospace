import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useBox, useSphere, useTrimesh, useConvexPolyhedron, BodyProps } from '@react-three/cannon';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { parseModelColliders, ParsedCollider, PhysicsParserOptions } from './physicsParser';

const HullShape = ({ collider, bodyProps }: { collider: ParsedCollider; bodyProps: any }) => {
  const geoArgs = useMemo(() => {
    try {
      const vectors = collider.args[0] as THREE.Vector3[];
      const convexGeo = new ConvexGeometry(vectors);
      
      const vertices = convexGeo.attributes.position.array;
      const indices = convexGeo.index ? convexGeo.index.array : [];
      
      const faces: number[][] = [];
      for (let i = 0; i < indices.length; i += 3) {
        faces.push([indices[i], indices[i+1], indices[i+2]]);
      }
      
      const vertArray: number[][] = [];
      for(let i = 0; i < vertices.length; i += 3) {
         vertArray.push([vertices[i], vertices[i+1], vertices[i+2]]);
      }
      
      return [vertArray, faces];
    } catch(e) {
      console.warn("Failed to generate convex hull", e);
      return [[[0,0,0]], []]; 
    }
  }, [collider.args]);

  const [ref] = useConvexPolyhedron(() => ({
    type: 'Static',
    position: collider.position,
    rotation: collider.rotation,
    args: geoArgs as any,
    ...bodyProps,
  }));
  
  return <group ref={ref as any} />;
};

const BoxShape = ({ collider, bodyProps }: { collider: ParsedCollider; bodyProps: any }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position: collider.position,
    rotation: collider.rotation,
    args: collider.args,
    ...bodyProps,
  }));
  return <group ref={ref as any} />;
};

const SphereShape = ({ collider, bodyProps }: { collider: ParsedCollider; bodyProps: any }) => {
  const [ref] = useSphere(() => ({
    type: 'Static',
    position: collider.position,
    rotation: collider.rotation,
    args: collider.args,
    ...bodyProps,
  }));
  return <group ref={ref as any} />;
};

const TrimeshShape = ({ collider, bodyProps }: { collider: ParsedCollider; bodyProps: any }) => {
  const [ref] = useTrimesh(() => ({
    type: 'Static',
    position: collider.position,
    rotation: collider.rotation,
    args: collider.args,
    ...bodyProps,
  }));
  return <group ref={ref as any} />;
};

export interface AutoColliderProps extends PhysicsParserOptions {
  object: THREE.Object3D;
  bodyProps?: Omit<BodyProps, 'args' | 'position' | 'rotation'>;
}

export const AutoCollider: React.FC<AutoColliderProps> = ({ object, bodyProps = { mass: 0 }, ...parserOptions }) => {
  const colliders = useMemo(() => {
    return parseModelColliders(object, parserOptions);
  }, [object, parserOptions]);

  return (
    <>
      {colliders.map((col, idx) => {
        let ShapeComponent = BoxShape;
        if (col.type === 'hull') ShapeComponent = HullShape as any;
        else if (col.type === 'sphere') ShapeComponent = SphereShape;
        else if (col.type === 'trimesh') ShapeComponent = TrimeshShape;
        
        return <ShapeComponent key={idx} collider={col} bodyProps={bodyProps} />;
      })}
    </>
  );
};
