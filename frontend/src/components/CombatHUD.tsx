import React from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

export const CombatHUD: React.FC = () => {
  const health = useMultiplayerStore(state => state.health);
  const combo = useMultiplayerStore(state => state.combo);

  return (
    <>
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        pointerEvents: 'none',
        zIndex: 100
      }}>
        {/* Combo Text */}
        <AnimatePresence>
          {combo > 0 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              key={combo}
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: '#fff',
                fontFamily: "'Outfit', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '4px',
                textShadow: '0 0 15px #ff0055, 0 0 30px #ff0055, 0 0 45px #ff0055'
              }}
            >
              Combo: x{combo}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Health Bar Container */}
        <div style={{
          width: '500px',
          height: '24px',
          background: 'rgba(5, 5, 8, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 0, 85, 0.1)',
          position: 'relative'
        }}>
          {/* Health Fill Track with glow */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(0, Math.min(100, health))}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #ff0055, #ff3377)',
              boxShadow: '0 0 25px rgba(255, 0, 85, 0.8)',
              borderRadius: '2px',
              position: 'relative'
            }}
          >
            {/* Animated gleam */}
            <motion.div
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '50px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                transform: 'skewX(-20deg)'
              }}
            />
          </motion.div>
          
          {/* Health Text Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 800,
            fontSize: '0.85rem',
            textShadow: '0 2px 4px rgba(0,0,0,1)',
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '2px'
          }}>
            {Math.round(health)} / 100
          </div>
        </div>
      </div>
    </>
  );
};
