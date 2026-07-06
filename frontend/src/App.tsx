import { useEffect, useState, lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const WorldRenderer = lazy(() => import('./components/WorldRenderer').then(m => ({ default: m.WorldRenderer })));
const CharacterCreator = lazy(() => import('./components/CharacterCreator').then(m => ({ default: m.CharacterCreator })));
const MapViewer = lazy(() => import('./components/MapViewer'));

import { CombatHUD } from './components/CombatHUD';
import { MapPanel } from './components/MapPanel';
import { SkillTreePanel } from './components/SkillTreePanel';
import { ActionBar } from './components/ActionBar';
import BossHUD from './components/BossHUD';
import { DialoguePanel, NarrativeOverlay } from './components/DialoguePanel';
import { QuestTracker } from './components/QuestTracker';
import { InventoryPanel } from './components/InventoryPanel';
import { CraftingPanel } from './components/CraftingPanel';
import { useMultiplayerStore, initMultiplayer } from './store/multiplayerStore';
import { Login } from './components/Login';
import { GraphicsSettingsPanel } from './components/GraphicsSettingsPanel';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('auth_token'));
  const [interactingNpcId, setInteractingNpcId] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showCrafting, setShowCrafting] = useState(false);
  const [showAreaMap, setShowAreaMap] = useState(false);
  const [isAppearanceDone, setIsAppearanceDone] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      initMultiplayer();
    }
  }, [isAuthenticated]);

  const playerClass = useMultiplayerStore(state => state.playerClass);
  const playerCount = useMultiplayerStore(state => state.players.length);
  const sendSpawnBoss = useMultiplayerStore(state => state.sendSpawnBoss);
  const sendAcceptQuest = useMultiplayerStore(state => state.sendAcceptQuest);
  const selectClass = useMultiplayerStore(state => state.selectClass);
  const sendAppearance = useMultiplayerStore(state => state.sendAppearance);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key.toLowerCase() === 'm') {
        setShowMap(prev => !prev);
      } else if (e.key.toLowerCase() === 'k') {
        setShowSkillTree(prev => !prev);
      } else if (e.key.toLowerCase() === 'i') {
        setShowInventory(prev => !prev);
      } else if (e.key.toLowerCase() === 'c') {
        setShowCrafting(prev => !prev);
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
        <ErrorBoundary fallbackRender={({error}: {error: any}) => <div style={{position:'absolute', zIndex:9999, background:'red', color:'white', padding:'20px', width:'100vw', height:'100vh'}}><h1>CRASH</h1><pre>{error.message}</pre><pre>{error.stack}</pre></div>}>
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white font-mono">LOADING 3D ENGINE...</div>}>
            <WorldRenderer 
              setInteractingNpcId={setInteractingNpcId}
            />
          </Suspense>
        </ErrorBoundary>
      </div>

      {isAuthenticated && !playerClass && !isAppearanceDone && <Suspense fallback={null}><CharacterCreator onComplete={(data: any) => {
        sendAppearance(data);
        if (data.charClass) {
          selectClass(data.charClass.toLowerCase().replace(/ /g, '_'));
        }
        setIsAppearanceDone(true);
      }} /></Suspense>}

      {isAuthenticated && isAppearanceDone && (
        <>
          <CombatHUD />
          <BossHUD />
          <ActionBar />

          {/* Development Tool: Spawn Boss */}
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            <button 
              className="bg-black/50 hover:bg-cyan-500/50 text-cyan-400 border border-cyan-500/50 px-3 py-1 rounded text-xs font-mono transition-colors"
              onClick={() => setShowSettings(true)}
            >
              SETTINGS
            </button>

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
            <button 
              className="bg-black/50 hover:bg-orange-500/50 text-orange-500 hover:text-white border border-orange-500/50 px-3 py-1 rounded text-xs font-mono transition-colors"
              onClick={() => sendSpawnBoss('torinn_rhogar')}
            >
              SPAWN TORINN
            </button>
          </div>
        </>
      )}

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

      {/* Game UI Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <div style={{ height: '40px', display: 'flex', alignItems: 'center', padding: '0 20px', color: 'white', pointerEvents: 'none' }}>
          <div style={{ marginLeft: 'auto', fontSize: '0.9rem', color: '#00ff88', textShadow: '0px 1px 2px rgba(0,0,0,0.8)' }}>
            Multiplayer: {playerCount} connected
          </div>
        </div>

        {/* Floating Panels Container */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Center (Empty to click through to canvas) */}
          <div style={{ flex: 1 }} />

          {/* Right Sidebar - Player Menus */}
          <div style={{ padding: '20px', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button 
              onClick={() => setShowAreaMap(true)}
              style={{ padding: '10px', background: '#ffd700', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer', borderRadius: '4px', opacity: 0.8 }}
            >
              Test Premium Area Map
            </button>
            {showInventory && <InventoryPanel />}
            {showCrafting && <CraftingPanel />}
          </div>
        </div>

      </div>

      {showAreaMap && (
        <Suspense fallback={null}>
          <MapViewer 
            mapUrl="/maps/area_maps/sub_locations/02_urban_core/06_the_micro_markets/03_black_market_alleys_map.webp"
            mapTitle="Black Market Alleys"
            onClose={() => setShowAreaMap(false)}
          />
        </Suspense>
      )}

      {showSettings && (
        <GraphicsSettingsPanel onClose={() => setShowSettings(false)} />
      )}
    </div>

  );
}

export default App;
