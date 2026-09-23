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
    <header className="sticky top-20 z-40 w-full bg-[#060A14]/80 backdrop-blur-2xl border-y border-white/[0.08] px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Go Back Button (Styled as a dark pill) */}
        <button 
          onClick={() => handleNav('servicios')}
          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#090E1C] border border-white/[0.08] hover:bg-white/[0.05] transition-colors group"
        >
          <div className="text-slate-400 group-hover:text-white flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider">
            <span>←</span>
            <span>Inicio</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold">
            Servicios
          </span>
        </button>

        {/* Right: 4 Pillars Quick Selector */}
        <div className="flex items-center gap-1 bg-[#090E1C]/80 p-1 rounded-xl border border-white/[0.08] text-xs overflow-x-auto">
          <button
            onClick={() => handleNav('consultoria-tecnologica')}
            className={`px-4 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isConsultoria 
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Consultoría
          </button>
          
          <button
            onClick={() => handleNav('automatizacion-agentica')}
            className={`px-4 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isAutomatizacion 
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)] font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            02. Agentes IA
          </button>
          
          <button
            onClick={() => handleNav('producto-digital')}
            className={`px-4 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isPlataformas 
                ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)] font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            03. Plataformas
          </button>

          <button
            onClick={() => handleNav('evolucion-digital')}
            className={`px-4 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              isEvolucion 
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] font-bold' 
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
