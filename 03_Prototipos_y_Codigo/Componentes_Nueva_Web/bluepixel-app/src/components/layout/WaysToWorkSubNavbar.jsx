import React from 'react';

const WaysToWorkSubNavbar = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#060A14]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('como-trabajamos')}
            className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <span>←</span>
            <span>Volver a Modelos</span>
          </button>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
            Engagement
          </span>
        </div>

        {/* Selector Rápido de Modelos */}
        <div className="flex items-center gap-1 bg-[#090E1C] p-1 rounded-xl border border-white/[0.08] text-xs">
          <button
            onClick={() => onNavigate('diagnostico')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              currentView === 'diagnostico' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Diagnóstico
          </button>
          <button
            onClick={() => onNavigate('ingenieria')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              currentView === 'ingenieria' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            02. Ingeniería
          </button>
          <button
            onClick={() => onNavigate('transformacion')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              currentView === 'transformacion' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            03. Transformación
          </button>
        </div>
      </div>
    </header>
  );
};

export default WaysToWorkSubNavbar;
