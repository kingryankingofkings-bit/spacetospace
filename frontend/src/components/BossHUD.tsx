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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-12 left-1/2 transform -translate-x-1/2 w-[900px] z-50 pointer-events-none"
      >
        <div className="relative w-full">
          {/* Main Boss Frame - Glassmorphism */}
          <div className="bg-black/40 backdrop-blur-xl border border-red-900/30 rounded-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(220,38,38,0.1)] relative overflow-hidden">
            
            {/* Top/Bottom edge glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent"></div>
            <div className="absolute bottom-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/50 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/50 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 rounded-br-lg"></div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-screen" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }}></div>

            {/* Boss Name & Phase */}
            <div className="flex justify-between items-end mb-4 px-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-red-500/80 text-[10px] font-mono font-bold tracking-[0.4em] mb-1">TITAN CLASS ENTITY - LEVEL {boss.level || '??'}</span>
                <h2 className="text-4xl font-black text-white uppercase tracking-[0.3em] font-['Outfit']" style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)' }}>
                  {boss.name}
                </h2>
              </div>
              <motion.div 
                key={boss.phaseTitle}
                initial={{ scale: 1.1, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                className="flex items-center gap-3 bg-red-950/40 px-4 py-1.5 rounded-full border border-red-500/20 shadow-[inset_0_0_15px_rgba(239,68,68,0.2)]"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse"></div>
                <span className="font-['Outfit'] text-sm uppercase tracking-[0.2em] font-bold text-red-200/90 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  {boss.phaseTitle}
                </span>
              </motion.div>
            </div>
            
            {/* Massive Health Bar Container */}
            <div className="h-8 w-full bg-black/80 rounded-md border border-red-900/40 overflow-hidden relative shadow-inner px-1 py-1 flex items-center">
              {/* Back track glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,1)] z-10 pointer-events-none"></div>

              <motion.div 
                className="h-full rounded relative z-0"
                style={{
                  background: 'linear-gradient(90deg, #7f1d1d 0%, #dc2626 50%, #ef4444 100%)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
                }}
                animate={{ width: `${Math.max(0, hpPercent)}%` }}
                transition={{ type: 'spring', stiffness: 60, damping: 20 }}
              >
                {/* Diagonal striping for danger feel */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
                
                {/* Glossy overlay */}
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
                
                {/* Edge highlight */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_#fff]"></div>
              </motion.div>
              
              {/* Shield indicator overlay */}
              <AnimatePresence>
                {boss.shieldActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 border-y-2 border-cyan-400/80 bg-cyan-500/20 flex items-center justify-center z-20"
                    style={{ backdropFilter: 'sepia(50%) hue-rotate(180deg)' }}
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent skew-x-12"
                    />
                    <span className="text-cyan-100 text-xs font-black uppercase tracking-[0.5em] font-['Outfit'] drop-shadow-[0_0_10px_rgba(34,211,238,1)]">
                      Absolte Barrier
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between px-4 mt-3 relative z-10">
              <span className="text-red-500/80 text-xs font-mono font-bold tracking-widest">{hpPercent.toFixed(1)}%</span>
              <span className="text-red-500/80 text-xs font-mono font-bold tracking-widest">{Math.round(Math.max(0, boss.hp)).toLocaleString()} / {boss.maxHp.toLocaleString()}</span>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BossHUD;
