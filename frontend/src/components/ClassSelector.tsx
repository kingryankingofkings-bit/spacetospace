import React from 'react';
import { CLASSES } from '../data/classConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion } from 'framer-motion';

const classImageMap: Record<string, string> = {
  "Protocol Weaver": "class_protocol_weaver_1783304823328.png",
  "Apex Mutator": "class_apex_mutator_1783304831954.png",
  "The Resonant": "class_the_resonant_1783304839616.png",
  "Packmaster": "class_packmaster_1783304846806.png",
  "Orbital Striker": "class_orbital_striker_1783304854227.png",
  "Scrap-Tek": "class_scrap_tek_1783304868744.png",
  "Kinetic Juggernaut": "class_kinetic_juggernaut_1783304876331.png",
  "Phantom-Shift": "class_phantom_shift_1783304885370.png",
  "Sylvan Warden": "class_sylvan_warden_1783304898302.png",
  "Flux-Caster": "class_flux_caster_1783304906670.png"
};

export const ClassSelector: React.FC = () => {
  const onSelectClass = useMultiplayerStore(state => state.selectClass);
  
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="aaa-panel relative flex-col"
        style={{ width: '85%', height: '85%', maxWidth: '1400px', padding: 0 }}
      >
        <div className="aaa-header justify-center" style={{ fontSize: '2rem', padding: '32px', letterSpacing: '4px' }}>
          INITIALIZE AWARENESS
        </div>
        <div className="text-center" style={{ padding: '0 24px 24px 24px', color: 'var(--text-muted)' }}>
          Select your combat architecture to interface with the simulation.
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {Object.values(CLASSES).map((cls, idx) => {
              const img = classImageMap[cls.name];

              return (
                <motion.div 
                  key={cls.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => onSelectClass(cls.id)}
                  className="aaa-panel relative overflow-hidden flex-col"
                  style={{ 
                    padding: 0, height: '320px',
                    cursor: 'pointer',
                    border: '1px solid var(--panel-border)'
                  }}
                >
                  {img ? (
                    <div style={{ position: 'absolute', inset: 0, background: `url(/images/character_creator/${img}) center/cover`, filter: 'grayscale(30%) brightness(0.7)', transition: 'all 0.3s' }} />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, background: '#111' }} />
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 40%, transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px' }}>
                    
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px black', margin: '0 0 4px 0' }}>{cls.name}</h2>
                    <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>{cls.combatStyle}</div>
                    
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px', flex: 1 }}>{cls.description}</p>
                    
                    <div style={{ background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', padding: '12px', borderRadius: '8px', width: '100%', boxSizing: 'border-box', backdropFilter: 'blur(4px)' }}>
                      <div style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', fontWeight: 800, marginBottom: '4px' }}>FREE-FLOW MECHANIC</div>
                      <div style={{ color: 'white', fontSize: '0.8rem' }}>{cls.freeFlowMechanic}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
