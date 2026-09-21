import React from 'react';

const WaysToWorkSubNavbar = ({ currentView, onNavigate }) => {
  const isConsultoria = currentView === 'consultoria-tecnologica' || currentView === 'pilar/consultoria-digital' || currentView === 'consultoria-digital';
  const isAutomatizacion = currentView === 'automatizacion-agentica' || currentView === 'pilar/agentes-automatizacion' || currentView === 'agentes-automatizacion';
  const isPlataformas = currentView === 'producto-digital' || currentView === 'pilar/plataformas-digitales' || currentView === 'plataformas-digitales';
  const isEvolucion = currentView === 'evolucion-digital' || currentView === 'pilar/evolucion-digital';

  const handleNav = (targetRoute) => {
    if (onNavigate) {
      onNavigate(targetRoute);
    } else {
      window.location.hash = `#/${targetRoute}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#060A14]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNav('como-trabajamos')}
            className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <span>←</span>
            <span>Inicio (4 Formas)</span>
          </button>
          <span className="text-white/20">|</span>
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
            4 Pilares
          </span>
        </div>

        {/* Selector Rápido de los 4 Pilares */}
        <div className="flex items-center gap-1 bg-[#090E1C] p-1 rounded-xl border border-white/[0.08] text-xs overflow-x-auto max-w-full">
          <button
            onClick={() => handleNav('consultoria-tecnologica')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isConsultoria 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Consultoría
          </button>
          
          <button
            onClick={() => handleNav('automatizacion-agentica')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isAutomatizacion 
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            02. Agentes IA
          </button>
          
          <button
            onClick={() => handleNav('producto-digital')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isPlataformas 
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/25 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            03. Plataformas
          </button>

          <button
            onClick={() => handleNav('evolucion-digital')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isEvolucion 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            04. Evolución
          </button>
        </div>
      </div>
    </header>
  );
};

export default WaysToWorkSubNavbar;
