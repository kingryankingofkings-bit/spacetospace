import React, { useEffect } from 'react';
import { useInteractableStore } from './useInteractableStore';

export interface InteractableSystemProps {
  /** The keyboard key used to trigger interaction. Default is 'KeyF' (the F key). */
  interactKey?: string;
}

/**
 * Global system to handle keyboard inputs for interactables.
 * Render this component anywhere inside your application (React tree).
 */
export const InteractableSystem: React.FC<InteractableSystemProps> = ({ 
  interactKey = 'KeyF' 
}) => {
  const interact = useInteractableStore((state) => state.interact);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (e.code === interactKey) {
        interact();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [interact, interactKey]);

  return null;
};
