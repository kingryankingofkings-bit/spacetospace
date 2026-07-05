import React, { useEffect, useState } from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';
import { motion, AnimatePresence } from 'framer-motion';

interface DialoguePanelProps {
  npcName?: string;
  text?: string;
  choices?: { label: string, next: string | null }[];
  onChoice?: (next: string | null) => void;
  onAcceptQuest?: () => void;
  onClose?: () => void;
}

export const DialoguePanel: React.FC<DialoguePanelProps> = ({ npcName, text, choices, onChoice, onAcceptQuest, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-auto max-w-3xl w-full"
    >
      <div className="relative bg-black/60 backdrop-blur-2xl p-10 rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] text-center">
        
        {/* Glowing Top Edge */}
        <div className="absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

        {/* Name Badge */}
        {npcName && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-cyan-500/40 text-cyan-50 px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-[0.3em] font-['Outfit'] shadow-[0_5px_20px_rgba(0,240,255,0.3)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              {npcName}
            </div>
          </div>
        )}

        {/* Dialogue Text */}
        <p className="text-2xl md:text-3xl text-white font-serif italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-relaxed mb-8 mt-4 font-light text-shadow-glow">
          "{text}"
        </p>

        {/* Actions / Choices */}
        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-lg mx-auto mt-4">
          <AnimatePresence>
            {choices && choices.length > 0 ? (
              choices.map((c, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onChoice && onChoice(c.next)}
                  className="w-full px-8 py-4 bg-white/5 text-white rounded-xl font-['Outfit'] font-semibold tracking-widest text-sm transition-all border border-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] text-left flex justify-between items-center group relative overflow-hidden"
                >
                  <span className="relative z-10">{c.label}</span>
                  <span className="text-cyan-400/0 group-hover:text-cyan-400 transition-colors relative z-10">→</span>
                  
                  {/* Hover sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.button>
              ))
            ) : (
              <div className="flex justify-center gap-6 mt-4">
                {onAcceptQuest && (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onAcceptQuest}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full font-['Outfit'] font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] border border-cyan-300/50 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                    <span className="relative z-10">Accept Quest</span>
                  </motion.button>
                )}
                {onClose && (
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-8 py-3 bg-white/5 text-white rounded-full font-['Outfit'] font-semibold uppercase tracking-[0.2em] text-sm transition-all border border-white/10 hover:border-white/30"
                  >
                    Dismiss
                  </motion.button>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export const NarrativeOverlay: React.FC = () => {
  const dialogueTrigger = useMultiplayerStore(state => state.dialogueTrigger);
  const clearDialogueTrigger = useMultiplayerStore(state => state.clearDialogueTrigger);
  const dialogueTree = useMultiplayerStore(state => state.dialogueTree);
  const clearDialogueTree = useMultiplayerStore(state => state.clearDialogueTree);
  const sendDialogueChoice = useMultiplayerStore(state => state.sendDialogueChoice);

  useEffect(() => {
    if (dialogueTrigger) {
      const timer = setTimeout(() => {
        clearDialogueTrigger();
      }, 6000); // auto-hide after 6 seconds
      return () => clearTimeout(timer);
    }
  }, [dialogueTrigger, clearDialogueTrigger]);

  return (
    <AnimatePresence>
      {(dialogueTree || dialogueTrigger) && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[80%] z-50 pointer-events-none flex justify-center perspective-[1000px]">
          {dialogueTree ? (
            <DialoguePanel 
              npcName="NPC" 
              text={dialogueTree.text}
              choices={dialogueTree.choices}
              onChoice={(next) => {
                if (next) {
                  sendDialogueChoice(dialogueTree.npcId, next);
                } else {
                  clearDialogueTree();
                }
              }}
            />
          ) : (
            <DialoguePanel 
              npcName={dialogueTrigger!.npcName} 
              text={dialogueTrigger!.text} 
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
};
