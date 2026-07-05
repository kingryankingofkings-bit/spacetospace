import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const CombatHUD: React.FC = () => {
  const health = useMultiplayerStore(state => state.health);
  const combo = useMultiplayerStore(state => state.combo);

  return (
    <>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 pointer-events-none z-[100]">
        
        {/* Combo Text - High-end Floating Display */}
        <AnimatePresence>
          {combo > 0 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              key={combo}
              className="text-6xl font-black text-white uppercase tracking-widest font-['Outfit']"
              style={{
                textShadow: '0 0 10px rgba(0,240,255,0.8), 0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(112,0,255,0.6)',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              }}
            >
              Combo <span className="text-cyan-300">x{combo}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Health Bar - Glassmorphism Sci-Fi Design */}
        <div className="relative w-[500px] h-[28px] bg-black/40 backdrop-blur-xl rounded-full p-1 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,240,255,0.1)]">
          {/* Edge highlights */}
          <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          <div className="absolute -bottom-[1px] left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
          
          <div className="relative w-full h-full rounded-full overflow-hidden bg-black/60 shadow-inner">
            {/* Health Fill Track */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(0, Math.min(100, health))}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7000ff 0%, #00f0ff 100%)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.6), inset 0 0 10px rgba(255,255,255,0.5)',
              }}
            >
              {/* Animated gleam */}
              <motion.div
                animate={{ x: ['-100%', '400%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-12"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  transform: 'skewX(-20deg)'
                }}
              />
              
              {/* Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 4px)'
                }}
              />
            </motion.div>
          </div>
          
          {/* Health Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white font-black text-sm font-['Outfit'] tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              {Math.round(health)} <span className="text-cyan-200/60 mx-1">/</span> 100
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
