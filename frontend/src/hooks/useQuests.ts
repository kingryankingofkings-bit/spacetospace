import { useState, useCallback } from 'react';

export interface Quest {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const useQuests = () => {
  const [activeQuests, setActiveQuests] = useState<Quest[]>([]);
  const [interactingNpcId, setInteractingNpcId] = useState<string | null>(null);

  const addQuest = useCallback((quest: Quest) => {
    setActiveQuests((prev) => {
      if (prev.find(q => q.id === quest.id)) return prev;
      return [...prev, quest];
    });
  }, []);

  const completeQuest = useCallback((questId: string) => {
    setActiveQuests((prev) =>
      prev.map((q) => (q.id === questId ? { ...q, completed: true } : q))
    );
  }, []);

  return {
    activeQuests,
    interactingNpcId,
    setInteractingNpcId,
    addQuest,
    completeQuest,
  };
};
