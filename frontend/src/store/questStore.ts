import { create } from 'zustand';

export interface Objective {
  id: string;
  type: 'kill' | 'gather' | 'talk';
  target: string; // Target ID or name
  description: string;
  currentAmount: number;
  requiredAmount: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  giver: string;
  objectives: Objective[];
  status: 'available' | 'active' | 'completed' | 'turned_in';
  rewards?: {
    gold?: number;
    items?: string[]; // item IDs
    xp?: number;
  };
}

export interface QuestState {
  quests: Quest[];
  isOpen: boolean;
  
  toggleQuestLog: () => void;
  acceptQuest: (quest: Quest) => void;
  updateObjective: (questId: string, objectiveId: string, amount: number) => void;
  completeQuest: (questId: string) => void;
}

export const useQuestStore = create<QuestState>((set, get) => ({
  quests: [
    // Initial mock quest
    {
      id: 'q_01',
      title: 'A New Threat',
      description: 'The elders have reported strange activity. Slay 3 iron wardens to prove your worth.',
      giver: 'Elder',
      status: 'active',
      objectives: [
        {
          id: 'obj_01',
          type: 'kill',
          target: 'iron_warden',
          description: 'Slay Iron Wardens',
          currentAmount: 0,
          requiredAmount: 3
        }
      ],
      rewards: {
        gold: 100,
        xp: 50
      }
    }
  ],
  isOpen: false,

  toggleQuestLog: () => set((state) => ({ isOpen: !state.isOpen })),

  acceptQuest: (quest) => set((state) => {
    // If we already have it, don't duplicate
    if (state.quests.find(q => q.id === quest.id)) return state;
    return { quests: [...state.quests, { ...quest, status: 'active' }] };
  }),

  updateObjective: (questId, objectiveId, amount) => set((state) => {
    const quests = [...state.quests];
    const questIndex = quests.findIndex(q => q.id === questId);
    if (questIndex === -1) return state;

    const quest = { ...quests[questIndex] };
    const objIndex = quest.objectives.findIndex(o => o.id === objectiveId);
    if (objIndex === -1) return state;

    const obj = { ...quest.objectives[objIndex] };
    obj.currentAmount = Math.min(obj.currentAmount + amount, obj.requiredAmount);
    quest.objectives[objIndex] = obj;

    // Check if quest is complete
    const allComplete = quest.objectives.every(o => o.currentAmount >= o.requiredAmount);
    if (allComplete && quest.status === 'active') {
      quest.status = 'completed';
    }

    quests[questIndex] = quest;
    return { quests };
  }),

  completeQuest: (questId) => set((state) => {
    const quests = state.quests.map(q => 
      q.id === questId ? { ...q, status: 'turned_in' as const } : q
    );
    return { quests };
  }),
}));
