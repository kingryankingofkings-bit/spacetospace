import { useContext } from 'react';
import { NavMeshContext, NavMeshContextType } from './NavMeshProvider';

export const useNavMesh = (): NavMeshContextType => {
  const context = useContext(NavMeshContext);
  if (!context) {
    throw new Error('useNavMesh must be used within a NavMeshProvider');
  }
  return context;
};
