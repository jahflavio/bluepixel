import React from 'react';

const Navbar = ({ onOpenContact, onNavigateCluster, currentView }) => (
  <nav className="border-b border-white/[0.08] bg-navy-950/85 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigateCluster && onNavigateCluster('home')} 
          className="flex items-center gap-2 text-left focus:outline-none"
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="BluePixel" className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
        </button>
        
        {/* Chips de los 3 Clusters */}
        <div className="hidden lg:flex items-center gap-1.5 ml-4 pl-4 border-l border-white/10 text-xs font-mono">
          <button
            onClick={() => onNavigateCluster && onNavigateCluster('apps')}
            className={`px-2.5 py-1 rounded-md transition-colors ${currentView === 'apps' ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            📱 Apps
          </button>
          <button
            onClick={() => onNavigateCluster && onNavigateCluster('automatizacion')}
            className={`px-2.5 py-1 rounded-md transition-colors ${currentView === 'automatizacion' ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            ⚙️ Automatización
          </button>
          <button
            onClick={() => onNavigateCluster && onNavigateCluster('agentizacion')}
            className={`px-2.5 py-1 rounded-md transition-colors ${currentView === 'agentizacion' ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            🤖 Agentización
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
        <a href="#clusters" onClick={() => onNavigateCluster && onNavigateCluster('home')} className="hover:text-blue-400 transition-colors">Capacidades</a>
        <a href="#/como-trabajamos" className="hover:text-blue-400 transition-colors">3 Formas de Trabajar</a>
        <a href="#case-studies" onClick={() => onNavigateCluster && onNavigateCluster('home')} className="hover:text-blue-400 transition-colors">Casos de Éxito</a>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="#/diagnostico"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2">
          <span>Diagnóstico Operativo</span>
          <span className="text-xs">→</span>
        </a>
      </div>
    </div>
  </nav>
);

export default React.memo(Navbar);
