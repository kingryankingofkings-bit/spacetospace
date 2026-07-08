import React, { useEffect } from 'react';
import { useEventStore } from './useEventStore';
import { AnimatePresence, motion } from 'framer-motion';

export const EventSystem: React.FC = () => {
  const activeEvents = useEventStore((state) => state.activeEvents);
  const addEvent = useEventStore((state) => state.addEvent);

  // Debug hotkey: Press Shift+E to trigger a fake global event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'e' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        const types: Array<'boss' | 'invasion' | 'anomaly' | 'generic'> = ['boss', 'invasion', 'anomaly', 'generic'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const sectors = [4, 7, 12, 'Omega', 'Prime'];
        const randomSector = sectors[Math.floor(Math.random() * sectors.length)];
        addEvent(`The Void Boss has spawned in Sector ${randomSector}!`, randomType);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [addEvent]);

  return (
    <div 
      className="fixed z-100 pointer-events-none flex flex-col items-center gap-4"
      style={{ top: '80px', left: 0, right: 0 }}
    >
      <AnimatePresence>
        {activeEvents.map((event) => {
          let borderClass = 'var(--panel-border)';
          let textGlowClass = '0 0 10px rgba(255, 255, 255, 0.5)';
          
          if (event.type === 'boss') {
            borderClass = 'var(--accent-danger)';
            textGlowClass = '0 0 15px var(--accent-danger)';
          } else if (event.type === 'anomaly') {
            borderClass = 'var(--accent-primary)';
            textGlowClass = '0 0 15px var(--accent-primary-glow)';
          } else if (event.type === 'invasion') {
            borderClass = 'var(--accent-secondary)';
            textGlowClass = '0 0 15px var(--accent-secondary-glow)';
          }

          return (
            <motion.div
              key={event.id}
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="aaa-panel text-center"
              style={{
                borderTop: `2px solid ${borderClass}`,
                borderBottom: `2px solid ${borderClass}`,
                padding: '16px 32px',
                minWidth: '400px',
                maxWidth: '600px',
                pointerEvents: 'none',
              }}
            >
              <h2 
                style={{ 
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'white',
                  textShadow: textGlowClass 
                }}
              >
                Global Event
              </h2>
              <p style={{ 
                margin: '8px 0 0 0', 
                fontSize: '1.1rem', 
                color: 'var(--text-main)',
                fontWeight: 600
              }}>
                {event.message}
              </p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
