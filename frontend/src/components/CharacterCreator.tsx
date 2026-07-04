import React, { useState } from 'react';
import catalog from '../data/customization_catalog.json';

type Step = 'Identity' | 'Body' | 'Origin' | 'Skin' | 'Face' | 'Hair';
const STEPS: Step[] = ['Identity', 'Body', 'Origin', 'Skin', 'Face', 'Hair'];

interface CharacterCreatorProps {
  onComplete: () => void;
}

export const CharacterCreator: React.FC<CharacterCreatorProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = STEPS[currentStepIndex];

  // Selections state
  const [selections, setSelections] = useState({
    name: '',
    pronouns: 'they/them',
    presentation: 'Androgynous / Nonbinary Presentation Face Presets',
    origin: '',
    skinTone: '',
    facePreset: '',
    facialHair: '',
    hairStyle: '',
    hairColor: ''
  });

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const updateSelection = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'Identity':
        return (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-cyan-300 font-bold">Wayfinder Identity</h2>
            <div>
              <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wide">Callsign / Name</label>
              <input 
                type="text" 
                value={selections.name}
                onChange={(e) => updateSelection('name', e.target.value)}
                className="w-full bg-black/60 border border-cyan-500/50 rounded p-3 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Enter designation..."
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wide">Pronouns</label>
              <select 
                value={selections.pronouns}
                onChange={(e) => updateSelection('pronouns', e.target.value)}
                className="w-full bg-black/60 border border-cyan-500/50 rounded p-3 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="he/him">He/Him</option>
                <option value="she/her">She/Her</option>
                <option value="they/them">They/Them</option>
                <option value="ze/zir">Ze/Zir</option>
              </select>
            </div>
          </div>
        );
      
      case 'Body':
        return (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-cyan-300 font-bold">Body Foundation</h2>
            <div>
              <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wide">Presentation Base</label>
              <p className="text-xs text-gray-500 mb-4 italic">Filters face and hair preset categories. Does not affect hitbox or stats.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Masculine Presentation',
                  'Feminine Presentation',
                  'Androgynous / Nonbinary Presentation'
                ].map(p => (
                  <button 
                    key={p}
                    onClick={() => updateSelection('presentation', p + ' Face Presets')}
                    className={`p-4 rounded border text-left transition-all ${selections.presentation.startsWith(p) ? 'bg-cyan-900/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Origin':
        return (
          <div className="flex flex-col gap-6 h-full">
            <h2 className="text-2xl text-cyan-300 font-bold">Regional Origin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
              {catalog.origins.map((origin: any) => (
                <div 
                  key={origin[0]}
                  onClick={() => updateSelection('origin', origin[0])}
                  className={`p-4 rounded border cursor-pointer transition-all ${selections.origin === origin[0] ? 'bg-cyan-900/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                >
                  <div className="font-bold text-lg mb-1">{origin[0]}</div>
                  <div className="text-xs text-cyan-500 mb-2">{origin[1]}</div>
                  <div className="text-sm text-gray-400 italic">{origin[2]}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Skin':
        return (
          <div className="flex flex-col gap-6 h-full">
            <h2 className="text-2xl text-cyan-300 font-bold">Skin Tone & Detail</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 overflow-y-auto custom-scrollbar flex-1 pr-2">
              {catalog.skin_tones.map((tone: string) => (
                <button
                  key={tone}
                  onClick={() => updateSelection('skinTone', tone)}
                  className={`p-3 rounded border transition-all text-sm ${selections.skinTone === tone ? 'bg-cyan-900/40 border-cyan-400 text-white' : 'bg-black/50 border-gray-700 text-gray-300 hover:border-gray-500'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
        );

      case 'Face':
        const faceCategory = selections.presentation;
        const faces = (catalog.face_presets as any)[faceCategory] || [];
        return (
          <div className="flex flex-col gap-6 h-full">
            <h2 className="text-2xl text-cyan-300 font-bold">Facial Structure</h2>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-6">
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-3">Face Preset ({faceCategory.replace(' Face Presets', '')})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {faces.map((face: any) => (
                    <div 
                      key={face[0]}
                      onClick={() => updateSelection('facePreset', face[0])}
                      className={`p-3 rounded border cursor-pointer transition-all ${selections.facePreset === face[0] ? 'bg-cyan-900/40 border-cyan-400 text-white shadow-[0_0_10px_rgba(0,255,255,0.2)]' : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                      <span className="font-bold text-cyan-400 mr-2">{face[0]}</span>
                      <span className="text-sm">{face[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-3">Facial Hair</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {catalog.facial_hair.map((fh: any) => (
                    <button
                      key={fh[0]}
                      onClick={() => updateSelection('facialHair', fh[0])}
                      className={`p-2 rounded border transition-all text-sm ${selections.facialHair === fh[0] ? 'bg-cyan-900/40 border-cyan-400 text-white' : 'bg-black/50 border-gray-700 text-gray-300 hover:border-gray-500'}`}
                    >
                      {fh[1]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'Hair':
        const hairCategory = selections.presentation.replace('Face', 'Hairstyle');
        const hairstyles = (catalog.hairstyles as any)[hairCategory] || [];
        return (
          <div className="flex flex-col gap-6 h-full">
            <h2 className="text-2xl text-cyan-300 font-bold">Hair & Style</h2>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-6">
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-3">Hairstyle</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hairstyles.map((hair: any) => (
                    <div 
                      key={hair[0]}
                      onClick={() => updateSelection('hairStyle', hair[0])}
                      className={`p-3 rounded border cursor-pointer transition-all ${selections.hairStyle === hair[0] ? 'bg-cyan-900/40 border-cyan-400 text-white shadow-[0_0_10px_rgba(0,255,255,0.2)]' : 'bg-black/50 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                      <div className="font-bold text-cyan-400 mb-1">{hair[1]}</div>
                      <div className="text-xs text-gray-400 line-clamp-2">{hair[2]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-3">Hair Color</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {catalog.hair_colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => updateSelection('hairColor', color)}
                      className={`p-2 rounded border transition-all text-xs ${selections.hairColor === color ? 'bg-cyan-900/40 border-cyan-400 text-white' : 'bg-black/50 border-gray-700 text-gray-300 hover:border-gray-500'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-[1000] backdrop-blur-md font-['Orbitron']">
      <div className="w-[90%] max-w-6xl h-[85%] flex bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,150,255,0.15)]">
        
        {/* Sidebar Steps */}
        <div className="w-64 bg-black/60 border-r border-white/10 p-6 flex flex-col">
          <h1 className="text-xl text-cyan-500 font-bold mb-8 uppercase tracking-widest border-b border-cyan-500/30 pb-4">
            Subject Genesis
          </h1>
          <div className="flex flex-col gap-4">
            {STEPS.map((step, idx) => (
              <div 
                key={step} 
                className={`flex items-center gap-3 transition-colors ${idx === currentStepIndex ? 'text-cyan-400 font-bold' : idx < currentStepIndex ? 'text-gray-400' : 'text-gray-600'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${idx === currentStepIndex ? 'border-cyan-400 bg-cyan-400/20' : idx < currentStepIndex ? 'border-gray-400' : 'border-gray-600'}`}>
                  {idx + 1}
                </div>
                <span className="uppercase tracking-wider text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-8">
          <div className="flex-1 overflow-hidden">
            {renderContent()}
          </div>
          
          {/* Footer Controls */}
          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
            <button 
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-6 py-2 rounded font-bold uppercase tracking-wider transition-colors ${currentStepIndex === 0 ? 'opacity-30 cursor-not-allowed text-gray-500 bg-gray-800' : 'text-gray-300 bg-gray-800 hover:bg-gray-700'}`}
            >
              Previous
            </button>
            <button 
              onClick={handleNext}
              className="px-8 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)]"
            >
              {currentStepIndex === STEPS.length - 1 ? 'Select Class' : 'Next Step'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
