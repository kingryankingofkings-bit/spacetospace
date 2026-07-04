import React from 'react';
import { CLASSES } from '../data/classConfig';
import type { SkillNode, SkillTier } from '../data/classConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';

interface SkillTreePanelProps {
  onClose: () => void;
}

export const SkillTreePanel: React.FC<SkillTreePanelProps> = ({ onClose }) => {
  const playerClass = useMultiplayerStore(state => state.playerClass);
  const level = useMultiplayerStore(state => state.level);
  const skillPoints = useMultiplayerStore(state => state.skillPoints);
  const unlockedSkills = useMultiplayerStore(state => state.unlockedSkills);
  const onUnlockSkill = useMultiplayerStore(state => state.unlockSkill);

  if (!playerClass) return null;
  const cls = CLASSES[playerClass];
  if (!cls || !cls.skillTree) return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-[1000] backdrop-blur-sm">
      <div className="bg-red-900/50 p-8 rounded border border-red-500 text-red-200">
        <h2>SKILL TREE UNAVAILABLE</h2>
        <p>This class does not have an active skill tree yet.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-black/90 flex flex-col z-[1000] backdrop-blur-md font-['Orbitron'] p-8 text-white custom-scrollbar overflow-y-auto">
      <div className="flex justify-between items-center mb-8 border-b border-cyan-500/30 pb-4">
        <div>
          <h1 className="text-4xl text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] uppercase">
            {cls.name} <span className="text-2xl text-gray-400 font-normal">Architecture</span>
          </h1>
          <div className="text-cyan-500 text-sm mt-1 uppercase tracking-widest">{cls.combatStyle}</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-gray-400 text-xs">CURRENT LEVEL</div>
            <div className="text-2xl font-bold">{level}</div>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 text-xs">SKILL POINTS</div>
            <div className="text-3xl font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,1)]">{skillPoints}</div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors border border-red-500/30 ml-4"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-6xl mx-auto w-full">
        {cls.skillTree.map((tier: SkillTier, index: number) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-4">
              {tier.name}
              <div className="h-px bg-blue-500/30 flex-1"></div>
              <span className="text-sm text-gray-500 font-normal">Levels {tier.minLevel} - {tier.maxLevel}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {tier.skills.map((skill: SkillNode) => {
                const isUnlocked = unlockedSkills.includes(skill.id);
                const canUnlock = level >= skill.level && skillPoints > 0 && !isUnlocked;
                const isLocked = level < skill.level && !isUnlocked;

                return (
                  <div 
                    key={skill.id}
                    className={`relative p-4 rounded-lg border flex flex-col transition-all duration-300 ${
                      isUnlocked 
                        ? 'bg-cyan-900/40 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.2)]' 
                        : isLocked
                          ? 'bg-gray-900/50 border-gray-700 opacity-60'
                          : 'bg-blue-900/20 border-blue-500/50 hover:border-cyan-400 cursor-pointer group'
                    }`}
                    onClick={() => canUnlock && onUnlockSkill(skill.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-bold px-2 py-1 bg-black/50 rounded text-gray-300">
                        LVL {skill.level}
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${
                        skill.type.includes('Finisher') ? 'text-red-400' : 
                        skill.type.includes('Passive') ? 'text-green-400' : 
                        'text-yellow-400'
                      }`}>
                        {skill.type}
                      </div>
                    </div>
                    
                    <h3 className={`font-bold mb-2 ${isUnlocked ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                      {skill.name}
                    </h3>
                    
                    <p className="text-xs text-gray-400 flex-1 leading-relaxed">
                      {skill.description}
                    </p>

                    {skill.cooldown && (
                      <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
                        ⏱ {skill.cooldown}
                      </div>
                    )}

                    {!isUnlocked && canUnlock && (
                      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg backdrop-blur-[1px]">
                        <span className="font-bold text-cyan-300 tracking-widest bg-black/80 px-4 py-2 rounded shadow-lg border border-cyan-500/50">
                          UNLOCK (1 SP)
                        </span>
                      </div>
                    )}
                    
                    {isUnlocked && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,255,255,0.8)] border-2 border-gray-900">
                        <span className="text-gray-900 text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 255, 0.3); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 255, 255, 0.5); }
      `}} />
    </div>
  );
};
