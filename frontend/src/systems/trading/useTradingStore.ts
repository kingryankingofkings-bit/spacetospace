import { create } from 'zustand';

export interface TradeItem {
  instanceId: string;
  itemId?: string;
  name?: string;
  type?: string;
  icon?: string;
}

export type TradeStatus = 'idle' | 'requested' | 'trading' | 'completed' | 'cancelled';

export interface TradingState {
  status: TradeStatus;
  targetId: string | null;
  targetName: string | null;
  
  myOffer: TradeItem[];
  myCreditsOffer: number;
  myLocked: boolean;
  myAccepted: boolean;
  
  theirOffer: TradeItem[];
  theirCreditsOffer: number;
  theirLocked: boolean;
  theirAccepted: boolean;
  
  // Local Actions
  initiateTrade: (targetId: string, targetName: string) => void;
  receiveTradeRequest: (targetId: string, targetName: string) => void;
  acceptTrade: () => void;
  cancelTrade: () => void;
  
  offerItem: (item: TradeItem) => void;
  unofferItem: (instanceId: string) => void;
  setCreditsOffer: (amount: number) => void;
  
  toggleLock: () => void;
  confirmTrade: () => void;
  
  // Network Callbacks (hook these up to multiplayerStore WebSocket events)
  syncTheirOffer: (offer: TradeItem[], credits: number, locked: boolean, accepted: boolean) => void;
  tradeSuccess: () => void;
  tradeCancelled: () => void;
  reset: () => void;
}

export const useTradingStore = create<TradingState>((set, get) => ({
  status: 'idle',
  targetId: null,
  targetName: null,
  
  myOffer: [],
  myCreditsOffer: 0,
  myLocked: false,
  myAccepted: false,
  
  theirOffer: [],
  theirCreditsOffer: 0,
  theirLocked: false,
  theirAccepted: false,
  
  initiateTrade: (targetId, targetName) => {
    set({ status: 'requested', targetId, targetName });
    // TODO: Send WS request to targetId
  },
  
  receiveTradeRequest: (targetId, targetName) => {
    set({ status: 'requested', targetId, targetName });
  },
  
  acceptTrade: () => {
    set({ status: 'trading' });
    // TODO: Send WS accept to targetId
  },
  
  cancelTrade: () => {
    get().reset();
    // TODO: Send WS cancel
  },
  
  offerItem: (item) => {
    const { myOffer, myLocked } = get();
    if (myLocked) return;
    if (!myOffer.find(i => i.instanceId === item.instanceId)) {
      set({ myOffer: [...myOffer, item], myAccepted: false });
    }
  },
  
  unofferItem: (instanceId) => {
    const { myOffer, myLocked } = get();
    if (myLocked) return;
    set({ 
      myOffer: myOffer.filter(i => i.instanceId !== instanceId), 
      myAccepted: false 
    });
  },
  
  setCreditsOffer: (amount) => {
    if (get().myLocked) return;
    set({ myCreditsOffer: amount, myAccepted: false });
  },
  
  toggleLock: () => {
    const newLocked = !get().myLocked;
    set({ myLocked: newLocked, myAccepted: false });
    // TODO: Send WS lock status update
  },
  
  confirmTrade: () => {
    const state = get();
    if (!state.myLocked || !state.theirLocked) return;
    set({ myAccepted: true });
    // TODO: Send WS final confirmation
  },
  
  syncTheirOffer: (offer, credits, locked, accepted) => {
    set({ 
      theirOffer: offer, 
      theirCreditsOffer: credits, 
      theirLocked: locked,
      theirAccepted: accepted,
      // If their state changes and affects terms, automatically un-accept
      myAccepted: false 
    });
  },
  
  tradeSuccess: () => {
    set({ status: 'completed' });
    setTimeout(() => get().reset(), 2500);
  },
  
  tradeCancelled: () => {
    set({ status: 'cancelled' });
    setTimeout(() => get().reset(), 2000);
  },
  
  reset: () => set({
    status: 'idle',
    targetId: null,
    targetName: null,
    myOffer: [],
    myCreditsOffer: 0,
    myLocked: false,
    myAccepted: false,
    theirOffer: [],
    theirCreditsOffer: 0,
    theirLocked: false,
    theirAccepted: false,
  })
}));
