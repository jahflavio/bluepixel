import React, { useState } from 'react';

const Navbar = ({ onOpenContact, onNavigateCluster }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-b border-white/[0.08] bg-[#02040A]/85 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => onNavigateCluster && onNavigateCluster('home')} 
          className="flex items-center gap-2 text-left focus:outline-none"
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="BluePixel" className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
        </button>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          
          <a href="#/pilares" className="hover:text-blue-400 transition-colors">
            Nuestros Pilares
          </a>

          <a href="#/como-trabajamos" className="hover:text-blue-400 transition-colors">
            Cómo Trabajamos
          </a>
          
          {/* Dropdown Capacidades */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#/servicios" className="flex items-center gap-1 hover:text-blue-400 transition-colors focus:outline-none">
              Directorio de Servicios
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Dropdown Menu (Mega Menu Style) */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl shadow-2xl p-6 w-[600px] grid grid-cols-3 gap-6 relative overflow-hidden">
                {/* Glow decorativo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400"></div>

                {/* Col 1 */}
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05]">Apps & Producto</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#/servicio/ux-ui" className="block text-sm text-white hover:text-emerald-400 transition-colors">UX/UI Design</a>
                    </li>
                    <li>
                      <a href="#/servicio/ai-engineering" className="block text-sm text-white hover:text-cyan-400 transition-colors">AI Engineering</a>
                    </li>
                  </ul>
                </div>

                {/* Col 2 */}
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05]">Automatización</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#/servicio/ai-agents" className="block text-sm text-white hover:text-purple-400 transition-colors">Agentes IA</a>
                    </li>
                    <li>
                      <a href="#/servicio/data-analytics" className="block text-sm text-white hover:text-indigo-400 transition-colors">Data & Analytics</a>
                    </li>
                  </ul>
                </div>

                {/* Col 3 */}
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05]">Gobernanza IA</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#/servicio/security" className="block text-sm text-white hover:text-amber-400 transition-colors">Security & Vault</a>
                    </li>
                    <li>
                      <a href="#/servicio/business-ai" className="block text-sm text-white hover:text-blue-400 transition-colors">Business AI Consulting</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              if (onNavigateCluster) {
                onNavigateCluster('home');
                setTimeout(() => {
                  const el = document.getElementById('case-studies');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }
            }} 
            className="hover:text-blue-400 transition-colors"
          >
            Casos de Estudio
          </button>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onOpenContact && onOpenContact()}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2">
            <span>Agenda Diagnóstico</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
