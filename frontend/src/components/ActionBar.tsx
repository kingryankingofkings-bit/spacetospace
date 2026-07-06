import React, { useEffect, useState } from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { CLASSES } from '../data/classConfig';
import { motion, AnimatePresence } from 'framer-motion';

export const ActionBar: React.FC = () => {
  const playerClass = useMultiplayerStore(state => state.playerClass);
  const unlockedSkills = useMultiplayerStore(state => state.unlockedSkills);
  const sendAbility = useMultiplayerStore(state => state.sendAbility);
  
  const [cooldowns, setCooldowns] = useState<Record<string, { expires: number, total: number }>>({});
  const [activeAbilityId, setActiveAbilityId] = useState<string | null>(null);

  const activeAbilities = React.useMemo(() => {
    if (!playerClass || !CLASSES[playerClass]) return [];
    
    const allSkills = CLASSES[playerClass].skillTree.flatMap(t => t.skills);
    const unlocked = allSkills.filter(s => unlockedSkills.includes(s.id) && s.type.includes('Active'));
    
    const slots = Array(4).fill(null);
    for (let i = 0; i < Math.min(4, unlocked.length); i++) {
      slots[i] = unlocked[i];
    }
    return slots;
  }, [playerClass, unlockedSkills]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      
      const key = parseInt(e.key);
      if (key >= 1 && key <= 4) {
        const ability = activeAbilities[key - 1];
        if (ability) {
          handleUseAbility(ability);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeAbilities]);

  const handleUseAbility = (ability: any) => {
    if (!ability) return;
    
    if (cooldowns[ability.id] && cooldowns[ability.id].expires > Date.now()) {
      return; 
    }

    sendAbility(ability.id);
    setActiveAbilityId(ability.id);
    setTimeout(() => setActiveAbilityId(null), 150);

    let cdMs = 1000; 
    if (ability.cooldown) {
      const match = ability.cooldown.match(/(\d+)-second/);
      if (match) {
        cdMs = parseInt(match[1]) * 1000;
      }
    }

    setCooldowns(prev => ({ ...prev, [ability.id]: { expires: Date.now() + cdMs, total: cdMs } }));
  };

  const [, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 50);
    return () => clearInterval(timer);
  }, []);

  if (!playerClass) return null;

  return (
    <div className="absolute flex gap-4 z-100 pointer-events-auto" style={{ bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
      {activeAbilities.map((ability, index) => {
        const cd = ability && cooldowns[ability.id];
        const remainingCd = cd ? Math.max(0, cd.expires - Date.now()) : 0;
        const isOnCooldown = remainingCd > 0;
        const cdPercent = cd && cd.total > 0 ? (remainingCd / cd.total) * 100 : 0;
        const isActive = activeAbilityId === ability?.id;

        return (
          <motion.div 
            key={index}
            whileHover={ability && !isOnCooldown ? { scale: 1.1, y: -5 } : {}}
            whileTap={ability && !isOnCooldown ? { scale: 0.95 } : {}}
            animate={isActive ? { scale: [1, 0.8, 1.2, 1] } : {}}
            onClick={() => handleUseAbility(ability)}
            className="aaa-panel"
            style={{
              width: '80px',
              height: '80px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: ability && !isOnCooldown ? 'pointer' : 'default',
              border: ability 
                ? isOnCooldown 
                  ? '1px solid var(--panel-border)' 
                  : '1px solid var(--accent-primary)' 
                : '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: ability && !isOnCooldown ? '0 0 20px var(--accent-primary-glow), inset 0 0 10px rgba(0, 240, 255, 0.2)' : '0 10px 20px rgba(0,0,0,0.8)',
              background: ability && !isOnCooldown ? 'rgba(0, 240, 255, 0.1)' : 'var(--panel-bg)'
            }}
          >
            {/* Slot Number */}
            <div style={{
              position: 'absolute',
              top: '6px',
              left: '8px',
              color: ability && !isOnCooldown ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontSize: '0.85rem',
              fontWeight: 900
            }}>
              {index + 1}
            </div>

            {/* Ability Icon Placeholder */}
            {ability && (
              <div style={{
                color: isOnCooldown ? 'var(--text-muted)' : 'var(--text-main)',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 800,
                letterSpacing: '1px',
                zIndex: 10
              }}>
                {ability.name.split(' ').map((w: string) => w[0]).join('')}
              </div>
            )}

            {/* Cooldown Overlay */}
            <AnimatePresence>
              {isOnCooldown && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${cdPercent}%`,
                    background: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'grayscale(100%)',
                    zIndex: 5
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    textShadow: '0 0 10px black'
                  }}>
                    {Math.ceil(remainingCd / 1000)}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
