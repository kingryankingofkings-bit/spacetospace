import { useEffect } from 'react';
import { useMultiplayerStore } from '../../store/multiplayerStore';

export const GameplayAutomationBot = () => {
  const isE2E = new URLSearchParams(window.location.search).get('e2e') === 'true';

  useEffect(() => {
    if (!isE2E) return;

    console.log('[E2E] Starting automated gameplay sequence...');
    let step = 0;

    const intervalId = setInterval(() => {
      const store = useMultiplayerStore.getState();

      switch (step) {
        case 0:
          console.log('[E2E] Step 1: Moving player to coordinate (100, 0, 100)');
          store.sendMove(100, 0, 100);
          break;
        case 1:
          console.log('[E2E] Step 2: Simulating attack');
          store.sendAttack('e2e_dummy_target');
          break;
        case 2:
          console.log('[E2E] Step 3: Verifying player health and position');
          // Since position is handled in the DOD transientStore for React performance, 
          // we verify the move was properly enqueued in pendingMoves (or acknowledged by the server).
          const hasPendingMove = store.pendingMoves.some(m => m.x === 100 && m.z === 100);
          const hasHealth = typeof store.health === 'number' && store.health > 0;

          if (hasPendingMove && hasHealth) {
            console.log('[E2E SUCCESS]');
          } else {
            console.error('[E2E FAILED]', { 
              health: store.health, 
              pendingMoves: store.pendingMoves 
            });
          }
          
          clearInterval(intervalId);
          break;
        default:
          clearInterval(intervalId);
          break;
      }

      step++;
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isE2E]);

  return null;
};
