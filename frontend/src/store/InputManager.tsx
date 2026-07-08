import React, { useMemo } from 'react';
import { KeyboardControls } from '@react-three/drei';
import type { KeyboardControlsEntry } from '@react-three/drei';

export const Controls = {
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right',
  jump: 'jump',
  interact: 'interact',
  map: 'map',
  inventory: 'inventory',
  skilltree: 'skilltree',
  crafting: 'crafting',
  attack: 'attack'
} as const;

export type Controls = typeof Controls[keyof typeof Controls];

export const InputManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.backward, keys: ['ArrowDown', 'KeyS'] },
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
    { name: Controls.jump, keys: ['Space'] },
    { name: Controls.interact, keys: ['KeyE'] },
    { name: Controls.map, keys: ['KeyM', 'Keym'] },
    { name: Controls.inventory, keys: ['KeyI', 'Keyi'] },
    { name: Controls.skilltree, keys: ['KeyK', 'Keyk'] },
    { name: Controls.crafting, keys: ['KeyC', 'Keyc'] },
    { name: Controls.attack, keys: ['KeyF', 'Keyf', 'Click'] },
  ], []);

  return (
    <KeyboardControls map={map}>
      {children}
    </KeyboardControls>
  );
};
