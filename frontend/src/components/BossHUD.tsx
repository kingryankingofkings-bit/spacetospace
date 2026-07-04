import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

const BossHUD: React.FC = () => {
  const bosses = useMultiplayerStore(state => state.bosses);
  
  if (!bosses || bosses.length === 0) return null;
  
  // Display the first boss in the zone for the HUD
  const boss = bosses[0];
  const hpPercent = (boss.hp / boss.maxHp) * 100;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[800px] z-50 pointer-events-none"
      >
        <div className="bg-black/80 backdrop-blur-2xl border border-red-500/20 rounded-sm p-5 shadow-[0_20px_60px_rgba(255,0,0,0.15)] relative overflow-hidden">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/50"></div>

          {/* Boss Name & Phase */}
          <div className="flex justify-between items-end mb-3 px-2">
            <h2 className="text-4xl font-black text-white uppercase tracking-[0.3em] font-['Outfit']" style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.8)' }}>
              {boss.name}
            </h2>
            <motion.span 
              key={boss.phaseTitle}
              initial={{ scale: 1.2, opacity: 0, color: '#fff' }}
              animate={{ scale: 1, opacity: 1, color: 'rgba(252, 165, 165, 0.8)' }}
              className="font-mono text-sm uppercase tracking-widest"
            >
              {boss.phaseTitle}
            </motion.span>
          </div>
          
          {/* Massive Health Bar */}
          <div className="h-6 w-full bg-black/90 border border-red-900/50 overflow-hidden relative shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-900 via-red-600 to-red-500 relative"
              animate={{ width: `${Math.max(0, hpPercent)}%` }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
              {/* Glossy overlay */}
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/10"></div>
            </motion.div>
            
            {/* Shield indicator */}
            <AnimatePresence>
              {boss.shieldActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 border-[3px] border-cyan-400 bg-cyan-500/10 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute inset-0 bg-cyan-400/20 mix-blend-screen"
                  />
                  <span className="text-cyan-100 text-xs font-bold uppercase tracking-[0.4em] drop-shadow-[0_0_8px_rgba(34,211,238,1)] z-10">
                    Impenetrable Barrier
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-between px-2 mt-2">
            <span className="text-red-500/70 text-xs font-mono font-bold tracking-widest">{Math.round(Math.max(0, boss.hp))} / {boss.maxHp}</span>
            <span className="text-red-500/70 text-xs font-mono font-bold tracking-widest">TITAN CLASS ENTITY</span>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BossHUD;
