import React from 'react';
import logoSrc from '../../assets/logo.png';

const Navbar = ({ onOpenContact }) => (
  <nav className="border-b border-white/[0.08] bg-navy-950/85 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logoSrc} alt="BluePixel" className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
        <a href="#prompt-hero" className="hover:text-blue-400 transition-colors">Diagnóstico en Vivo</a>
        <a href="#three-ways" className="hover:text-blue-400 transition-colors">3 Formas de Trabajar</a>
        <a href="./landings/index.html" onClick={() => window.dataLayer && window.dataLayer.push({'event': 'view_blueprint_directory'})} className="hover:text-blue-400 transition-colors flex items-center gap-1.5"><span className="text-emerald-400">⚡</span>Blueprint Library</a>
        <a href="#casos" className="hover:text-blue-400 transition-colors">Casos de Éxito</a>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onOpenContact}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2">
          <span>Diagnóstico Operativo</span>
          <span className="text-xs">→</span>
        </button>
      </div>
    </div>
  </nav>
);

export default React.memo(Navbar);
