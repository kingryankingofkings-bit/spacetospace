import { useEffect, useState } from 'react';
import { WorldRenderer } from './components/WorldRenderer';
import { ToolsPanel } from './components/ToolsPanel';
import { PropertiesPanel } from './components/PropertiesPanel';
import { AssetsPanel } from './components/AssetsPanel';
import { CombatHUD } from './components/CombatHUD';
import { MapPanel } from './components/MapPanel';
import { ClassSelector } from './components/ClassSelector';
import { CharacterCreator } from './components/CharacterCreator';
import { SkillTreePanel } from './components/SkillTreePanel';
import { ActionBar } from './components/ActionBar';
import BossHUD from './components/BossHUD';
import { DialoguePanel, NarrativeOverlay } from './components/DialoguePanel';
import { QuestTracker } from './components/QuestTracker';
import { InventoryPanel } from './components/InventoryPanel';
import { useMultiplayerStore, initMultiplayer } from './store/multiplayerStore';
import { Login } from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('auth_token'));
  const [interactingNpcId, setInteractingNpcId] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [isAppearanceDone, setIsAppearanceDone] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      initMultiplayer();
    }
  }, [isAuthenticated]);

  const playerClass = useMultiplayerStore(state => state.playerClass);
  const playerCount = useMultiplayerStore(state => state.players.length);
  const sendSpawnBoss = useMultiplayerStore(state => state.sendSpawnBoss);
  const sendAcceptQuest = useMultiplayerStore(state => state.sendAcceptQuest);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key.toLowerCase() === 'm') {
        setShowMap(prev => !prev);
      } else if (e.key.toLowerCase() === 'k') {
        setShowSkillTree(prev => !prev);
      } else if (e.key.toLowerCase() === 'i') {
        setShowInventory(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {!isAuthenticated && <Login onLoginSuccess={() => setIsAuthenticated(true)} />}

      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <WorldRenderer 
          setInteractingNpcId={setInteractingNpcId}
        />
      </div>

      {!playerClass && !isAppearanceDone && <CharacterCreator onComplete={() => setIsAppearanceDone(true)} />}
      {!playerClass && isAppearanceDone && <ClassSelector />}

      <CombatHUD />
      <BossHUD />
      <ActionBar />

      {/* Development Tool: Spawn Boss */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          className="bg-black/50 hover:bg-red-500/50 text-red-500 hover:text-white border border-red-500/50 px-3 py-1 rounded text-xs font-mono transition-colors"
          onClick={() => sendSpawnBoss('ascendant_colossus')}
        >
          SPAWN COLOSSUS
        </button>
        <button 
          className="bg-black/50 hover:bg-cyan-500/50 text-cyan-500 hover:text-white border border-cyan-500/50 px-3 py-1 rounded text-xs font-mono transition-colors"
          onClick={() => sendSpawnBoss('syndicate_lich')}
        >
          SPAWN LICH
        </button>
      </div>

      {showMap && (
        <MapPanel onClose={() => setShowMap(false)} />
      )}

      {showSkillTree && (
        <SkillTreePanel onClose={() => setShowSkillTree(false)} />
      )}

      {interactingNpcId && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <DialoguePanel 
            npcName={interactingNpcId} 
            text="Greetings, traveler! Will you assist me in slaying the Ascendant Colossus?" 
            onAcceptQuest={() => {
              sendAcceptQuest('quest_colossus');
              setInteractingNpcId(null);
            }}
            onClose={() => setInteractingNpcId(null)}
          />
        </div>
      )}

      <NarrativeOverlay />

      <QuestTracker />

      {/* UI Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar Placeholder */}
        <div style={{ height: '50px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', padding: '0 20px', color: 'white', pointerEvents: 'auto', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>ANTIGRAVITY RPG BUILDER</h1>
          <div style={{ marginLeft: 'auto', fontSize: '0.9rem', color: '#00ff88' }}>
            Multiplayer: {playerCount} connected
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          
          {/* Left Sidebar */}
          <div style={{ padding: '20px', pointerEvents: 'auto' }}>
            <ToolsPanel />
          </div>

          {/* Center (Empty to click through to canvas) */}
          <div style={{ flex: 1 }} />

          {/* Right Sidebar */}
          <div style={{ padding: '20px', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <PropertiesPanel />
            {showInventory && <InventoryPanel />}
          </div>

        </div>

        {/* Bottom Panel */}
        <div style={{ padding: '20px', pointerEvents: 'auto', paddingBottom: '30px' }}>
          <AssetsPanel />
        </div>

      </div>
    </div>
  );
}

export default App;
