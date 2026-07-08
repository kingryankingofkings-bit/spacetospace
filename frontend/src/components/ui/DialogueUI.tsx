import React, { useEffect, useState } from 'react';
import { useDialogueStore } from '../../store/dialogueStore';
import { useQuestStore } from '../../store/questStore';

export const DialogueUI: React.FC = () => {
  const isOpen = useDialogueStore((state) => state.isOpen);
  const currentTree = useDialogueStore((state) => state.currentTree);
  const currentNodeId = useDialogueStore((state) => state.currentNodeId);
  const selectOption = useDialogueStore((state) => state.selectOption);
  const acceptQuest = useQuestStore((state) => state.acceptQuest);
  const quests = useQuestStore((state) => state.quests);

  const [displayedText, setDisplayedText] = useState('');

  const node = currentTree && currentNodeId ? currentTree.nodes[currentNodeId] : null;

  useEffect(() => {
    if (node) {
      setDisplayedText('');
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + node.text.charAt(index));
        index++;
        if (index >= node.text.length) {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [node]);

  if (!isOpen || !node) return null;

  const handleOptionClick = (opt: any) => {
    if (opt.action === 'ACCEPT_QUEST' && opt.questId) {
      // Find the quest mock data. In a real game, this would fetch from a database or be passed in.
      // We will just grab it from the initial mock in questStore if it exists, or create it.
      const quest = quests.find(q => q.id === opt.questId);
      if (quest) {
        acceptQuest(quest);
      } else {
        // Fallback mock for demonstration
        acceptQuest({
          id: opt.questId,
          title: 'A New Threat',
          description: 'The elders have reported strange activity. Slay 3 iron wardens to prove your worth.',
          giver: 'Elder',
          status: 'available',
          objectives: [
            {
              id: 'obj_01',
              type: 'kill',
              target: 'iron_warden',
              description: 'Slay Iron Wardens',
              currentAmount: 0,
              requiredAmount: 3
            }
          ]
        });
      }
    }
    selectOption(opt.nextNodeId, opt.action, opt.questId);
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '800px',
      background: 'rgba(20, 20, 20, 0.95)',
      border: '1px solid #666',
      borderTop: '4px solid #f59e0b',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'sans-serif',
      zIndex: 1000,
      pointerEvents: 'auto',
      boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
    }}>
      <div style={{ padding: '20px', minHeight: '120px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#f59e0b' }}>{node.speaker}</h3>
        <p style={{ fontSize: '18px', margin: 0, lineHeight: '1.5' }}>{displayedText}</p>
      </div>

      <div style={{ padding: '20px', borderTop: '1px solid #444', background: 'rgba(0,0,0,0.5)' }}>
        {node.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(opt)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              color: '#ddd',
              fontSize: '16px',
              padding: '10px',
              cursor: 'pointer',
              marginBottom: '5px',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};
