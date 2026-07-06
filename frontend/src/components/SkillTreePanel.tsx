import React from 'react';
import { CLASSES } from '../data/classConfig';
import type { SkillNode, SkillTier } from '../data/classConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion } from 'framer-motion';

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
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90">
      <div className="aaa-panel" style={{ border: '1px solid var(--accent-danger)' }}>
        <h2 style={{ color: 'var(--accent-danger)' }}>SKILL TREE UNAVAILABLE</h2>
        <p>This class does not have an active skill tree yet.</p>
        <button onClick={onClose} className="aaa-button mt-4">Close</button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-100 flex flex-col">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(16px)' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative flex-col flex-1"
        style={{ padding: '40px', overflowY: 'auto' }}
      >
        <div className="flex justify-between items-center" style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--panel-border)' }}>
          <div>
            <h1 style={{ fontSize: '3rem', color: 'var(--accent-primary)', textShadow: '0 0 20px var(--accent-primary-glow)', margin: 0, textTransform: 'uppercase', letterSpacing: '4px' }}>
              {cls.name} <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontWeight: 400 }}>ARCHITECTURE</span>
            </h1>
            <div style={{ color: 'var(--text-main)', fontSize: '1rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>{cls.combatStyle}</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="aaa-label">CURRENT LEVEL</div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{level}</div>
            </div>
            <div className="text-right">
              <div className="aaa-label" style={{ color: 'var(--accent-primary)' }}>SKILL POINTS</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-primary)', textShadow: '0 0 15px var(--accent-primary-glow)' }}>{skillPoints}</div>
            </div>
            <button 
              onClick={onClose}
              className="aaa-button flex items-center justify-center"
              style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%', fontSize: '1.5rem', marginLeft: '16px' }}
            >
              ✕
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          {cls.skillTree.map((tier: SkillTier, index: number) => (
            <div key={index} style={{ marginBottom: '64px' }}>
              <h2 className="flex items-center gap-4" style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', textShadow: '0 0 10px var(--accent-secondary-glow)', marginBottom: '24px' }}>
                {tier.name}
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--accent-secondary), transparent)' }}></div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>LEVELS {tier.minLevel} - {tier.maxLevel}</span>
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {tier.skills.map((skill: SkillNode) => {
                  const isUnlocked = unlockedSkills.includes(skill.id);
                  const canUnlock = level >= skill.level && skillPoints > 0 && !isUnlocked;
                  const isLocked = level < skill.level && !isUnlocked;

                  let typeColor = 'var(--accent-primary)';
                  if (skill.type.includes('Finisher')) typeColor = 'var(--accent-danger)';
                  if (skill.type.includes('Passive')) typeColor = '#00ff88';

                  return (
                    <motion.div 
                      key={skill.id}
                      whileHover={canUnlock ? { scale: 1.05, y: -5 } : isUnlocked ? { scale: 1.02 } : {}}
                      className="aaa-panel relative flex-col"
                      style={{ 
                        padding: '24px', 
                        cursor: canUnlock ? 'pointer' : 'default',
                        opacity: isLocked ? 0.5 : 1,
                        border: isUnlocked ? '1px solid var(--accent-primary)' : canUnlock ? '1px solid var(--text-muted)' : '',
                        background: isUnlocked ? 'rgba(0, 240, 255, 0.05)' : ''
                      }}
                      onClick={() => canUnlock && onUnlockSkill(skill.id)}
                    >
                      <div className="flex justify-between items-start" style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, padding: '4px 8px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', border: '1px solid var(--panel-border)' }}>
                          LVL {skill.level}
                        </div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: typeColor }}>
                          {skill.type}
                        </div>
                      </div>
                      
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px', color: isUnlocked ? 'var(--accent-primary)' : 'var(--text-main)' }}>
                        {skill.name}
                      </h3>
                      
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', flex: 1, lineHeight: 1.6 }}>
                        {skill.description}
                      </p>

                      {skill.cooldown && (
                        <div style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                          ⏱ {skill.cooldown}
                        </div>
                      )}

                      {!isUnlocked && canUnlock && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0, 240, 255, 0.1)', opacity: 0, transition: 'opacity 0.2s', borderRadius: '12px', backdropFilter: 'blur(2px)' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                          <span className="aaa-button primary">
                            UNLOCK (1 SP)
                          </span>
                        </div>
                      )}
                      
                      {isUnlocked && (
                        <div className="absolute flex items-center justify-center" style={{ top: '-12px', right: '-12px', width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--accent-primary-glow)', border: '2px solid #000' }}>
                          <span style={{ color: '#000', fontSize: '1rem', fontWeight: 900 }}>✓</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
