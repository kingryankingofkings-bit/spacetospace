import React, { useState } from 'react';
import catalog from '../data/customization_catalog.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useMultiplayerStore } from '../store/multiplayerStore';

type Step = 'Identity' | 'Body' | 'Origin' | 'Skin' | 'Face' | 'Hair' | 'Class';
const STEPS: Step[] = ['Identity', 'Body', 'Origin', 'Skin', 'Face', 'Hair', 'Class'];

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

const originImageMap: Record<string, string> = {
  "Meridian Gate / Urban Sprawl": "origin_meridian_gate_1783304920955.png",
  "Elderbloom / Verdant Accord": "origin_elderbloom_1783304928172.png",
  "Cindervale / Iron Crown": "origin_cindervale_1783304935452.png",
  "Glass Desert / Luminous Expanse": "origin_glass_desert_1783304943670.png",
  "Pelagos / Oceanic Freeports": "origin_pelagos_1783304950491.png",
  "Lunarch / Hollow Moon": "origin_lunarch_1783304957992.png",
  "Black Meridian": "origin_black_meridian_1783304971229.png",
  "First Dream": "origin_first_dream_1783304978523.png",
  "Syndicate Dominions": "origin_syndicate_dominions_1783304986453.png",
  "Scrap-Yard / Deprecated Repositories": "origin_scrap_yard_1783304993734.png",
  "Orbital / Cosmic Fronts": "origin_orbital_1783305003010.png",
  "Dawnforge Custodian": "origin_dawnforge_1783305010857.png"
};

const heroImageMap: Record<string, string> = {
  "Masculine Presentation": "hero_masculine_1783304787475.png",
  "Feminine Presentation": "hero_feminine_1783304794125.png",
  "Androgynous / Nonbinary Presentation": "hero_androgynous_1783304800858.png"
};

const holoHeadMap: Record<string, string> = {
  "Masculine Presentation": "holo_head_masc_1783307851588.png",
  "Feminine Presentation": "holo_head_fem_1783307859017.png",
  "Androgynous / Nonbinary Presentation": "holo_head_andro_1783307865512.png"
};

const holoHairMap: Record<string, string> = {
  "short": "holo_hair_short_1783307878879.png",
  "long": "holo_hair_long_1783307886323.png"
};

const skinColors: Record<string, string> = {
  "Porcelain rose": "#ffe0d6", "Porcelain neutral": "#ffe6dc", "Pale ivory": "#ffeedf", "Pale olive": "#e8e1cd",
  "Light peach": "#ffdfc4", "Light gold": "#f3d1a5", "Light beige": "#e8c8a8", "Light cool sand": "#d9c1b0",
  "Warm sand": "#d4b38d", "Golden beige": "#c89f70", "Honey tan": "#b88a53", "Soft caramel": "#a77542",
  "Amber brown": "#8c5626", "Olive bronze": "#7d6240", "Copper bronze": "#8b4f32", "Warm sienna": "#743a1c",
  "Chestnut": "#5c2f16", "Red-brown umber": "#482110", "Mahogany": "#3d180b", "Deep walnut": "#33160a",
  "Espresso": "#271208", "Deep umber": "#1f0d06", "Blue-black brown": "#181016", "Obsidian brown": "#120a08",
  "Aether pale blue": "#ccebff", "Starwell cyan": "#00e5ff", "Lunar silver": "#e6e6e6", "Void ash": "#595959",
  "Moss green": "#8ba881", "Verdant bark-brown": "#4a3c2a", "Coral rose": "#ff9999", "Reef teal": "#33ccb3",
  "Molten ember": "#ff5500", "Magma charcoal": "#332a26", "Data-glass white": "#ffffff", "Hard-light violet": "#cc99ff",
  "Dream lavender": "#e6ccff", "Anomaly prism": "linear-gradient(45deg, #ff9a9e, #fecfef)", "Dust-gold": "#d4af37",
  "Sonic pearl": "#fdfbf7", "Bioluminescent midnight": "#0a1931", "Low-gravity grey": "#b3b3b3", "Cindervale soot": "#262626", "Scrap-metal bronze": "#b08d57"
};

const hairColors: Record<string, string> = {
  "black": "#0f0f0f", "soft black": "#1f1f1f", "blue-black": "#0a0f1c", "dark brown": "#301a0b",
  "medium brown": "#4a2a11", "light brown": "#785338", "auburn": "#8c3b1a", "copper": "#ba541e",
  "ginger": "#d16828", "strawberry blond": "#dca27d", "dark blond": "#b39160", "gold blond": "#e6cd7e",
  "platinum": "#f4f1e1", "silver": "#c2c4c7", "white": "#fcfcfc", "grey": "#7a7a7a",
  "salt-and-pepper": "linear-gradient(45deg, #2b2b2b, #b3b3b3)", "emerald": "#1b663b", "moss": "#587042",
  "cyan": "#00ffff", "aether blue": "#aaddff", "violet": "#6b2c91", "magenta": "#c71884",
  "rose": "#f590bc", "molten orange": "#ff4500", "ember red": "#cc1400", "deep burgundy": "#4f0814",
  "teal": "#0b7a77", "lunar chrome": "#e0e3e8", "data-glass iridescent": "linear-gradient(90deg, #00f, #0ff)"
};

interface CharacterCreatorProps {
  onComplete: (data: any) => void;
}

export const CharacterCreator: React.FC<CharacterCreatorProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = STEPS[currentStepIndex];

  const [selections, setSelections] = useState({
    name: '',
    pronouns: 'they/them',
    presentation: 'Androgynous / Nonbinary Presentation Face Presets',
    origin: '',
    skinTone: '',
    facePreset: '',
    facialHair: '',
    hairStyle: '',
    hairColor: '',
    charClass: ''
  });

  const setPreviewAppearance = useMultiplayerStore(state => state.setPreviewAppearance);

  React.useEffect(() => {
    let skinHex = skinColors[selections.skinTone] || '#00f0ff';
    let hairHex = hairColors[selections.hairColor] || '#00f0ff';
    
    // Sanitize gradients for ThreeJS Color parsing
    if (skinHex.includes('gradient')) skinHex = '#ff9a9e';
    if (hairHex.includes('gradient')) hairHex = '#e0e3e8';

    setPreviewAppearance({ ...selections, skinHex, hairHex });
  }, [selections, setPreviewAppearance]);

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete(selections);
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

  const currentHeroImg = heroImageMap[selections.presentation.replace(' Face Presets', '')] || heroImageMap['Androgynous / Nonbinary Presentation'];
  const currentHoloHead = holoHeadMap[selections.presentation.replace(' Face Presets', '')] || holoHeadMap['Androgynous / Nonbinary Presentation'];
  
  // Basic heuristic for hair selection
  const isLongHair = selections.hairStyle.toLowerCase().includes('long') || selections.hairStyle.toLowerCase().includes('braid');
  const hasHair = selections.hairStyle && !selections.hairStyle.toLowerCase().includes('bald');
  const holoHair = hasHair ? holoHairMap[isLongHair ? 'long' : 'short'] : null;
  const hasBeard = selections.facialHair && selections.facialHair !== 'Clean Shaven';

  const renderPreview = () => {
    return (
      <div style={{ width: '400px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '20px' }}>
         <h3 style={{ margin: 0, color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.5)', opacity: 0.5, textAlign: 'center' }}>LIVE 3D PREVIEW ACTIVE</h3>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'Identity':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 h-full justify-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', textShadow: '0 0 15px var(--accent-primary-glow)', marginBottom: '32px', textAlign: 'center', letterSpacing: '4px' }}>WAYFINDER IDENTITY</h2>
            <div className="flex-col gap-6">
              <div>
                <label className="aaa-label">CALLSIGN / NAME</label>
                <input 
                  type="text" 
                  value={selections.name}
                  onChange={(e) => updateSelection('name', e.target.value)}
                  className="aaa-input"
                  placeholder="Enter designation..."
                  style={{ fontSize: '1.2rem', padding: '16px' }}
                />
              </div>
              <div>
                <label className="aaa-label">PRONOUNS</label>
                <select 
                  value={selections.pronouns}
                  onChange={(e) => updateSelection('pronouns', e.target.value)}
                  className="aaa-input"
                  style={{ fontSize: '1.2rem', padding: '16px' }}
                >
                  <option value="he/him">He/Him</option>
                  <option value="she/her">She/Her</option>
                  <option value="they/them">They/Them</option>
                  <option value="ze/zir">Ze/Zir</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      
      case 'Body':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 h-full">
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '8px' }}>BODY FOUNDATION</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>Select a physical presentation framework. Filters available aesthetics.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', flex: 1 }}>
              {[
                'Masculine Presentation',
                'Feminine Presentation',
                'Androgynous / Nonbinary Presentation'
              ].map(p => {
                const isActive = selections.presentation.startsWith(p);
                const img = heroImageMap[p];
                return (
                  <motion.div 
                    key={p}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => updateSelection('presentation', p + ' Face Presets')}
                    className="aaa-panel relative overflow-hidden"
                    style={{ 
                      padding: 0, 
                      cursor: 'pointer',
                      border: isActive ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: isActive ? '0 0 30px var(--accent-primary-glow)' : 'none'
                    }}
                  >
                    <div style={{ position: 'absolute', inset: 0, background: `url(/images/character_creator/${img}) center/cover no-repeat`, filter: isActive ? 'none' : 'grayscale(100%) brightness(0.6)', transition: 'all 0.3s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', textAlign: 'center', fontWeight: 800, fontSize: '1.1rem', color: isActive ? 'var(--accent-primary)' : 'white' }}>
                      {p}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        );

      case 'Origin':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 h-full">
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '16px' }}>REGIONAL ORIGIN</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', overflowY: 'auto', paddingRight: '10px' }}>
              {catalog.origins.map((origin: any) => {
                const isActive = selections.origin === origin[0];
                const img = originImageMap[origin[0]];
                
                return (
                  <motion.div 
                    key={origin[0]}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => updateSelection('origin', origin[0])}
                    className="aaa-panel relative overflow-hidden flex-col"
                    style={{ 
                      padding: 0, height: '180px',
                      cursor: 'pointer',
                      border: isActive ? '2px solid var(--accent-primary)' : '1px solid var(--panel-border)',
                      boxShadow: isActive ? '0 0 20px var(--accent-primary-glow)' : 'none'
                    }}
                  >
                    {img && (
                      <div style={{ position: 'absolute', inset: 0, background: `url(/images/character_creator/${img}) center/cover`, opacity: isActive ? 0.6 : 0.3, transition: 'all 0.3s' }} />
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '4px', color: isActive ? 'var(--accent-primary)' : 'white' }}>{origin[0]}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', maxWidth: '70%' }}>{origin[1]}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        );

      case 'Skin':
        return (
          <div className="flex gap-8 h-full">
            {renderPreview()}
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 flex-1 h-full">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '16px' }}>SKIN TONE & DETAIL</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))', gap: '16px', overflowY: 'auto', paddingRight: '10px' }}>
                {catalog.skin_tones.map((tone: string) => {
                  const isActive = selections.skinTone === tone;
                  const color = skinColors[tone] || '#888';
                  return (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      title={tone}
                      key={tone}
                      onClick={() => updateSelection('skinTone', tone)}
                      style={{ 
                        width: '64px', height: '64px', borderRadius: '50%',
                        background: color,
                        border: isActive ? '3px solid var(--accent-primary)' : '2px solid rgba(255,255,255,0.2)',
                        boxShadow: isActive ? '0 0 15px var(--accent-primary-glow)' : '0 4px 10px rgba(0,0,0,0.5)',
                        cursor: 'pointer'
                      }}
                    />
                  )
                })}
              </div>
            </motion.div>
          </div>
        );

      case 'Face':
        const faceCategory = selections.presentation;
        const faces = (catalog.face_presets as any)[faceCategory] || [];
        return (
          <div className="flex gap-8 h-full">
            {renderPreview()}

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 flex-1 h-full" style={{ overflowY: 'auto', paddingRight: '10px' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '16px' }}>FACIAL STRUCTURE</h2>
              
              <div className="flex-col gap-6">
                <div>
                  <h3 className="aaa-label">FACE PRESET</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                    {faces.map((face: any) => {
                      const isActive = selections.facePreset === face[0];
                      return (
                        <div 
                          key={face[0]}
                          onClick={() => updateSelection('facePreset', face[0])}
                          className="aaa-item-slot"
                          style={{ 
                            padding: '16px',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '4px',
                            border: isActive ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
                            background: isActive ? 'rgba(0,240,255,0.1)' : ''
                          }}
                        >
                          <span style={{ color: isActive ? 'var(--accent-primary)' : 'white', fontWeight: 800 }}>{face[1]}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{face[2]}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <h3 className="aaa-label">FACIAL HAIR</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                    {catalog.facial_hair.map((fh: any) => {
                      const isActive = selections.facialHair === fh[0];
                      return (
                        <button
                          key={fh[0]}
                          onClick={() => updateSelection('facialHair', fh[0])}
                          className="aaa-item-slot"
                          style={{ 
                            padding: '12px',
                            fontSize: '0.85rem',
                            border: isActive ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
                            background: isActive ? 'rgba(0,240,255,0.1)' : ''
                          }}
                        >
                          {fh[1]}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case 'Hair':
        const hairCategory = selections.presentation.replace('Face', 'Hairstyle');
        const hairstyles = (catalog.hairstyles as any)[hairCategory] || [];
        return (
          <div className="flex gap-8 h-full">
             {renderPreview()}

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 flex-1 h-full" style={{ overflowY: 'auto', paddingRight: '10px' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '16px' }}>HAIR & STYLE</h2>
              
              <div className="flex-col gap-6">
                <div>
                  <h3 className="aaa-label">HAIR COLOR</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                    {catalog.hair_colors.map((color: string) => {
                      const isActive = selections.hairColor === color;
                      const hex = hairColors[color] || '#888';
                      return (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          title={color}
                          key={color}
                          onClick={() => updateSelection('hairColor', color)}
                          style={{ 
                            width: '48px', height: '48px', borderRadius: '50%',
                            background: hex,
                            border: isActive ? '2px solid var(--accent-primary)' : '2px solid rgba(255,255,255,0.2)',
                            boxShadow: isActive ? '0 0 15px var(--accent-primary-glow)' : '0 4px 10px rgba(0,0,0,0.5)',
                            cursor: 'pointer'
                          }}
                        />
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="aaa-label">HAIRSTYLE PRESET</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                    {hairstyles.map((hair: any) => {
                      const isActive = selections.hairStyle === hair[0];
                      return (
                        <div 
                          key={hair[0]}
                          onClick={() => updateSelection('hairStyle', hair[0])}
                          className="aaa-item-slot"
                          style={{ 
                            padding: '16px',
                            alignItems: 'flex-start',
                            border: isActive ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
                            background: isActive ? 'rgba(0,240,255,0.1)' : ''
                          }}
                        >
                          <div style={{ fontWeight: 800, color: isActive ? 'var(--accent-primary)' : 'white', marginBottom: '4px' }}>{hair[1]}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{hair[2]}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case 'Class':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-col gap-6 h-full">
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '16px' }}>COMBAT SPECIALIZATION</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', overflowY: 'auto', paddingRight: '10px' }}>
              {catalog.classes.map((cls: any) => {
                const isActive = selections.charClass === cls[0];
                const img = classImageMap[cls[0]];
                
                return (
                  <motion.div 
                    key={cls[0]}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => updateSelection('charClass', cls[0])}
                    className="aaa-panel relative overflow-hidden"
                    style={{ 
                      padding: 0, height: '220px',
                      cursor: 'pointer',
                      border: isActive ? '2px solid var(--accent-primary)' : '1px solid var(--panel-border)',
                      boxShadow: isActive ? '0 0 20px var(--accent-primary-glow)' : 'none'
                    }}
                  >
                    {img ? (
                      <div style={{ position: 'absolute', inset: 0, background: `url(/images/character_creator/${img}) center/cover`, filter: isActive ? 'none' : 'grayscale(60%) brightness(0.6)', transition: 'all 0.3s' }} />
                    ) : (
                      <div style={{ position: 'absolute', inset: 0, background: '#111' }} />
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 20%, transparent)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.3rem', color: isActive ? 'var(--accent-primary)' : 'white', textShadow: '0 2px 5px black' }}>{cls[0]}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: '#ccc', textShadow: '0 2px 5px black' }}>{cls[1]}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center pointer-events-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="aaa-panel flex"
        style={{ width: '95%', maxWidth: '1400px', height: '90%', padding: 0, overflow: 'hidden' }}
      >
        {/* Sidebar Steps */}
        <div style={{ width: '300px', background: 'rgba(0,0,0,0.6)', borderRight: '1px solid var(--panel-border)', padding: '40px 24px', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', textShadow: '0 0 10px var(--accent-primary-glow)', marginBottom: '40px', borderBottom: '1px solid var(--accent-primary)', paddingBottom: '16px' }}>
            SUBJECT GENESIS
          </h1>
          <div className="flex-col gap-6">
            {STEPS.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;
              return (
                <div 
                  key={step} 
                  className="flex items-center gap-4"
                  style={{ 
                    color: isActive ? 'var(--accent-primary)' : isPast ? 'white' : 'rgba(255,255,255,0.3)',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 800,
                    border: isActive ? '2px solid var(--accent-primary)' : isPast ? '1px solid white' : '1px solid rgba(255,255,255,0.3)',
                    background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    boxShadow: isActive ? '0 0 15px var(--accent-primary-glow)' : 'none'
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontWeight: isActive ? 800 : 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>{step}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-col" style={{ flex: 1, padding: '40px', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <React.Fragment key={currentStep}>
                {renderContent()}
              </React.Fragment>
            </AnimatePresence>
          </div>
          
          {/* Footer Controls */}
          <div className="flex items-center justify-between" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--panel-border)' }}>
            <button 
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="aaa-button"
              style={{ opacity: currentStepIndex === 0 ? 0.3 : 1, width: '160px' }}
            >
              PREVIOUS
            </button>
            <button 
              onClick={handleNext}
              className="aaa-button primary"
              style={{ width: '220px' }}
            >
              {currentStepIndex === STEPS.length - 1 ? 'FINALIZE WAYFINDER' : 'NEXT SEQUENCE'}
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
