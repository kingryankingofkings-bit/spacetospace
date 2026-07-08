import React from 'react';
import { useQuestStore, Quest } from '../../store/questStore';

export const QuestLogUI: React.FC = () => {
  const isOpen = useQuestStore((state) => state.isOpen);
  const quests = useQuestStore((state) => state.quests);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '10%',
      right: '10%',
      width: '400px',
      height: '600px',
      background: 'rgba(20, 20, 20, 0.95)',
      border: '1px solid #666',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      fontFamily: 'sans-serif',
      zIndex: 1000,
      pointerEvents: 'auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    }}>
      <div style={{ padding: '20px', borderBottom: '1px solid #444' }}>
        <h2 style={{ margin: 0 }}>Quest Log</h2>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {quests.length === 0 ? (
          <p style={{ color: '#aaa', textAlign: 'center' }}>No active quests.</p>
        ) : (
          quests.map(quest => (
            <div key={quest.id} style={{ 
              marginBottom: '20px', 
              padding: '15px', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '6px',
              borderLeft: quest.status === 'completed' ? '4px solid #10b981' : '4px solid #f59e0b'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: quest.status === 'completed' ? '#10b981' : '#f59e0b' }}>
                {quest.title} {quest.status === 'completed' ? '(Return to Giver)' : ''}
              </h3>
              <p style={{ fontSize: '14px', color: '#ccc', margin: '0 0 15px 0' }}>{quest.description}</p>
              
              <div style={{ fontSize: '13px' }}>
                {quest.objectives.map(obj => {
                  const isDone = obj.currentAmount >= obj.requiredAmount;
                  return (
                    <div key={obj.id} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      color: isDone ? '#10b981' : '#fff',
                      marginBottom: '4px'
                    }}>
                      <span>- {obj.description}</span>
                      <span>{obj.currentAmount} / {obj.requiredAmount}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const QuestTrackerOverlay: React.FC = () => {
  const quests = useQuestStore((state) => state.quests);
  const activeQuests = quests.filter(q => q.status === 'active' || q.status === 'completed');

  if (activeQuests.length === 0) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '50px',
      right: '20px',
      width: '250px',
      color: 'white',
      fontFamily: 'sans-serif',
      textShadow: '1px 1px 2px black',
      pointerEvents: 'none',
      zIndex: 900
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#f59e0b', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Active Quests</h4>
      {activeQuests.map(quest => (
        <div key={quest.id} style={{ marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px', color: quest.status === 'completed' ? '#10b981' : 'white' }}>
            {quest.title} {quest.status === 'completed' ? '(Complete)' : ''}
          </div>
          {quest.objectives.map(obj => (
            <div key={obj.id} style={{ fontSize: '12px', color: obj.currentAmount >= obj.requiredAmount ? '#10b981' : '#ddd', display: 'flex', justifyContent: 'space-between' }}>
              <span>{obj.description}</span>
              <span>{obj.currentAmount}/{obj.requiredAmount}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
