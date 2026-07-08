import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { Vector3, BufferGeometry, Mesh } from 'three';
import { Pathfinding } from 'three-pathfinding';

export interface NavMeshContextType {
  pathfinder: Pathfinding;
  zone: string;
  isReady: boolean;
  setNavMesh: (mesh: Mesh | BufferGeometry, zoneName?: string) => void;
  findPath: (start: Vector3, end: Vector3) => Vector3[] | null;
}

export const NavMeshContext = createContext<NavMeshContextType | null>(null);

interface NavMeshProviderProps {
  children: ReactNode;
}

export const NavMeshProvider: React.FC<NavMeshProviderProps> = ({ children }) => {
  const [pathfinder] = useState(() => new Pathfinding());
  const [zone, setZone] = useState<string>('default');
  const [isReady, setIsReady] = useState(false);

  const setNavMesh = useCallback((meshOrGeom: Mesh | BufferGeometry, zoneName: string = 'default') => {
    // Extract geometry if a Mesh is provided
    const geometry = meshOrGeom instanceof Mesh ? meshOrGeom.geometry : meshOrGeom;
    if (!geometry) {
      console.error('NavMeshProvider: Invalid geometry provided to setNavMesh');
      return;
    }
    
    // Create zone data from the geometry
    const zoneData = Pathfinding.createZone(geometry);
    pathfinder.setZoneData(zoneName, zoneData);
    setZone(zoneName);
    setIsReady(true);
    console.log(`NavMesh loaded for zone: ${zoneName}`);
  }, [pathfinder]);

  const findPath = useCallback((start: Vector3, end: Vector3): Vector3[] | null => {
    if (!isReady) return null;
    
    const groupID = pathfinder.getGroup(zone, start);
    if (groupID === null) return null;
    
    const path = pathfinder.findPath(start, end, zone, groupID);
    return path;
  }, [pathfinder, zone, isReady]);

  return (
    <NavMeshContext.Provider value={{ pathfinder, zone, isReady, setNavMesh, findPath }}>
      {children}
    </NavMeshContext.Provider>
  );
};
