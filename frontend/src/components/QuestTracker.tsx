import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';

export const QuestTracker: React.FC = () => {
  const quests = useMultiplayerStore(state => state.activeQuests) || [];

  if (quests.length === 0) return null;

  return (
    <div className="fixed top-24 right-6 w-72 pointer-events-none z-40 font-sans">
      <h4 className="text-amber-400 uppercase tracking-widest text-xs font-bold mb-3 flex items-center gap-2 drop-shadow-md">
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
        Quest Log
      </h4>
      <ul className="flex flex-col gap-3">
        {quests.map(quest => (
          <li 
            key={quest.id} 
            className={`
              relative p-3 rounded-lg backdrop-blur-md border 
              ${quest.completed ? 'bg-emerald-900/40 border-emerald-500/30 text-emerald-200' : 'bg-slate-900/60 border-slate-700/50 text-slate-100'}
              transition-all duration-500 shadow-lg overflow-hidden
            `}
          >
            {/* Animated progress bar background */}
            {!quest.completed && quest.targetCount > 1 && (
              <div 
                className="absolute inset-y-0 left-0 bg-blue-500/10 transition-all duration-300"
                style={{ width: `${(quest.progress / quest.targetCount) * 100}%` }}
              />
            )}
            
            <div className="relative z-10">
              <div className="font-semibold text-sm flex justify-between items-center mb-1">
                <span className={quest.completed ? 'line-through opacity-70' : ''}>{quest.title}</span>
                {!quest.completed && quest.targetCount > 1 && (
                  <span className="text-xs text-blue-300 bg-blue-900/50 px-1.5 py-0.5 rounded">
                    {quest.progress || 0} / {quest.targetCount}
                  </span>
                )}
                {quest.completed && (
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Done
                  </span>
                )}
              </div>
              <div className="text-xs opacity-75 leading-relaxed">{quest.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
