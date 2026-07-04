import { useMultiplayer } from './useMultiplayer';

export const useInventory = () => {
  const { inventory, sendPickupLoot } = useMultiplayer();

  return {
    inventory,
    pickupLoot: sendPickupLoot
  };
};
