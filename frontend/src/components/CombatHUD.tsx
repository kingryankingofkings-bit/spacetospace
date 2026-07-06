import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const CombatHUD: React.FC = () => {
  const health = useMultiplayerStore(state => state.health);
  const combo = useMultiplayerStore(state => state.combo);

  return (
    <>
      <div className="absolute flex-col items-center gap-6 pointer-events-none z-100" style={{ bottom: '140px', left: '50%', transform: 'translateX(-50%)' }}>
        
        {/* Combo Text - High-end Floating Display */}
        <AnimatePresence>
          {combo > 0 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              key={combo}
              style={{
                fontSize: '4rem',
                fontWeight: 900,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                textShadow: '0 0 20px var(--accent-primary-glow), 0 0 40px var(--accent-secondary-glow)',
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
              }}
            >
              COMBO <span style={{ color: 'var(--accent-primary)' }}>x{combo}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Health Bar - Glassmorphism Sci-Fi Design */}
        <div className="aaa-panel relative" style={{ width: '600px', height: '36px', padding: '4px', borderRadius: '18px', display: 'flex', alignItems: 'center' }}>
          {/* Edge highlights */}
          <div className="absolute" style={{ top: '-1px', left: '40px', right: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }}></div>
          <div className="absolute" style={{ bottom: '-1px', left: '80px', right: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.4), transparent)' }}></div>
          
          <div className="relative w-full h-full overflow-hidden shadow-inner" style={{ background: 'rgba(0,0,0,0.8)', borderRadius: '14px' }}>
            {/* Health Fill Track */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(0, Math.min(100, health))}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative h-full"
              style={{
                background: 'linear-gradient(90deg, var(--accent-secondary) 0%, var(--accent-primary) 100%)',
                boxShadow: '0 0 25px var(--accent-primary-glow), inset 0 0 10px rgba(255,255,255,0.5)',
                borderRadius: '14px'
              }}
            >
              {/* Animated gleam */}
              <motion.div
                animate={{ x: ['-100%', '400%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0"
                style={{
                  width: '60px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  transform: 'skewX(-20deg)'
                }}
              />
              
              {/* Pattern Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  opacity: 0.2,
                  mixBlendMode: 'overlay',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 4px)'
                }}
              />
            </motion.div>
          </div>
          
          {/* Health Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span style={{ color: 'white', fontWeight: 900, fontSize: '0.9rem', letterSpacing: '4px', textShadow: '0 2px 4px black' }}>
              {Math.round(health)} <span style={{ color: 'rgba(0,240,255,0.6)', margin: '0 4px' }}>/</span> 100
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
