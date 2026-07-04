import React from 'react';
import { CLASSES } from '../data/classConfig';
import { useMultiplayerStore } from '../store/multiplayerStore';

export const ClassSelector: React.FC = () => {
  const onSelectClass = useMultiplayerStore(state => state.selectClass);
  
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-[1000] backdrop-blur-sm font-['Orbitron']">
      <div className="bg-white/10 p-8 rounded-xl border border-white/20 w-3/4 h-3/4 flex flex-col shadow-[0_0_50px_rgba(0,150,255,0.3)]">
        <h1 className="text-4xl text-cyan-400 font-bold mb-2 text-center drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">INITIALIZE AWARENESS</h1>
        <p className="text-gray-300 text-center mb-8 text-lg">Select your combat architecture to interface with the simulation.</p>
        
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 custom-scrollbar">
          {Object.values(CLASSES).map((cls) => (
            <div 
              key={cls.id} 
              onClick={() => onSelectClass(cls.id)}
              className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 flex flex-col cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 group"
            >
              <h2 className="text-2xl text-white font-bold mb-1 group-hover:text-cyan-300">{cls.name}</h2>
              <div className="text-cyan-500 text-sm mb-4 font-semibold uppercase tracking-wider">{cls.combatStyle}</div>
              <p className="text-gray-400 text-sm mb-4 italic flex-1">{cls.description}</p>
              
              <div className="bg-blue-900/30 p-3 rounded border border-blue-500/20">
                <div className="text-blue-300 text-xs font-bold mb-1">FREE-FLOW MECHANIC</div>
                <p className="text-gray-300 text-xs leading-relaxed">{cls.freeFlowMechanic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.3); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.5); 
        }
      `}} />
    </div>
  );
};
