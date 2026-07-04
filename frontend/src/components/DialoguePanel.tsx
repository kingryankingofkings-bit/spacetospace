import React, { useEffect, useState } from 'react';
import { useMultiplayerStore } from '../store/multiplayerStore';

interface DialoguePanelProps {
  npcName?: string;
  text?: string;
  onAcceptQuest?: () => void;
  onClose?: () => void;
}

export const DialoguePanel: React.FC<DialoguePanelProps> = ({ npcName, text, onAcceptQuest, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div 
      className={`
        pointer-events-auto max-w-2xl w-full
        transition-all duration-500 ease-out transform
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <div className="relative bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-t-3xl border-t border-white/10 backdrop-blur-sm text-center">
        {/* Name Badge */}
        {npcName && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            {npcName}
          </div>
        )}

        {/* Dialogue Text (Cinematic Subtitle style) */}
        <p className="text-xl md:text-2xl text-white font-serif italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed mb-6">
          "{text}"
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          {onAcceptQuest && (
            <button 
              onClick={onAcceptQuest}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-semibold uppercase tracking-wide text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Accept Quest
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold uppercase tracking-wide text-sm transition-all backdrop-blur hover:-translate-y-0.5 active:translate-y-0"
            >
              Dismiss
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const NarrativeOverlay: React.FC = () => {
  const dialogueTrigger = useMultiplayerStore(state => state.dialogueTrigger);
  const clearDialogueTrigger = useMultiplayerStore(state => state.clearDialogueTrigger);

  useEffect(() => {
    if (dialogueTrigger) {
      const timer = setTimeout(() => {
        clearDialogueTrigger();
      }, 5000); // auto-hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [dialogueTrigger, clearDialogueTrigger]);

  if (!dialogueTrigger) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[80%] z-50 pointer-events-none flex justify-center">
      <DialoguePanel 
        npcName={dialogueTrigger.npcName} 
        text={dialogueTrigger.text} 
      />
    </div>
  );
};
