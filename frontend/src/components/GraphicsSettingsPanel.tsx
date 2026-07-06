import React from 'react';
import { useGraphicsSettingsStore } from '../store/graphicsSettingsStore';
import { motion } from 'framer-motion';

interface GraphicsSettingsPanelProps {
  onClose: () => void;
}

export const GraphicsSettingsPanel: React.FC<GraphicsSettingsPanelProps> = ({ onClose }) => {
  const {
    bloomEnabled,
    vignetteEnabled,
    shadowQuality,
    resolutionScale,
    setBloomEnabled,
    setVignetteEnabled,
    setShadowQuality,
    setResolutionScale
  } = useGraphicsSettingsStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
    >
      <div className="relative w-full max-w-md bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl text-white">
        {/* Top glow */}
        <div className="absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase tracking-widest text-cyan-400 font-mono">Graphics Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors font-bold font-mono"
          >
            [X]
          </button>
        </div>

        <div className="space-y-6">
          {/* Resolution Scale */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold tracking-wider uppercase text-gray-300 font-mono">Resolution Scale (Max DPR)</label>
              <span className="text-cyan-400 font-mono font-bold">{resolutionScale.toFixed(1)}x</span>
            </div>
            <div className="flex gap-2">
              {[1.0, 1.5, 2.0].map((scale) => (
                <button
                  key={scale}
                  onClick={() => setResolutionScale(scale)}
                  className={`flex-1 py-2 rounded border transition-all text-sm font-mono uppercase tracking-wider ${
                    resolutionScale === scale
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                      : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600 hover:text-gray-200'
                  }`}
                >
                  {scale.toFixed(1)}x
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1 font-mono">Caps the maximum device pixel ratio. Capping to 2.0 or 1.5 significantly improves performance on high-density (4K/Retina) screens.</p>
          </div>

          {/* Shadow Quality */}
          <div>
            <label className="block text-sm font-semibold tracking-wider uppercase text-gray-300 mb-2 font-mono">Shadow Quality</label>
            <div className="flex gap-2">
              {(['low', 'medium', 'high'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => setShadowQuality(q)}
                  className={`flex-1 py-2 rounded border transition-all text-sm font-mono uppercase tracking-wider ${
                    shadowQuality === q
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                      : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600 hover:text-gray-200'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-1 font-mono">Low disables shadows completely. Medium and High use optimized shadow maps.</p>
          </div>

          {/* Post Processing Effects */}
          <div className="border-t border-slate-800 pt-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400/70 font-mono mb-2">Post Processing</h3>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300 font-mono uppercase tracking-wider">Bloom Effect</span>
              <button
                onClick={() => setBloomEnabled(!bloomEnabled)}
                className={`px-4 py-1.5 rounded border transition-all text-xs font-mono uppercase tracking-widest ${
                  bloomEnabled
                    ? 'bg-green-500/20 border-green-500 text-green-300 font-bold'
                    : 'bg-red-500/20 border-red-500 text-red-300'
                }`}
              >
                {bloomEnabled ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300 font-mono uppercase tracking-wider">Vignette Effect</span>
              <button
                onClick={() => setVignetteEnabled(!vignetteEnabled)}
                className={`px-4 py-1.5 rounded border transition-all text-xs font-mono uppercase tracking-widest ${
                  vignetteEnabled
                    ? 'bg-green-500/20 border-green-500 text-green-300 font-bold'
                    : 'bg-red-500/20 border-red-500 text-red-300'
                }`}
              >
                {vignetteEnabled ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};
