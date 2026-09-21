import React, { useState } from 'react';

const Navbar = ({ onOpenContact, onNavigateCluster, currentView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPilaresOpen, setIsPilaresOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleComoTrabajamos = (e) => {
    if (e) e.preventDefault();
    setIsPilaresOpen(false);
    setIsMobileMenuOpen(false);

    const scrollToTarget = () => {
      const el = document.getElementById('como-trabajamos') || 
                 document.getElementById('four-ways-to-work') || 
                 document.getElementById('how-we-work') || 
                 document.getElementById('pilares');
      if (el) {
        const navHeight = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (currentView && currentView !== 'home') {
      if (onNavigateCluster) {
        onNavigateCluster('home');
      } else {
        window.location.hash = '';
      }
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 300);
      setTimeout(scrollToTarget, 600);
    } else {
      scrollToTarget();
    }
  };

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsPilaresOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="border-b border-white/[0.08] bg-[#02040A]/90 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => { closeMenus(); onNavigateCluster && onNavigateCluster('home'); }} 
          className="flex items-center gap-2 text-left focus:outline-none cursor-pointer"
          aria-label="Ir al inicio de BluePixel"
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="BluePixel" 
            className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
          />
        </button>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300 font-medium">
          
          {/* Dropdown Cómo Trabajamos (4 Pilares) */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsPilaresOpen(true)}
            onMouseLeave={() => setIsPilaresOpen(false)}
          >
            <button 
              type="button"
              onClick={handleComoTrabajamos}
              className="flex items-center gap-1 text-sm text-slate-300 hover:text-blue-400 font-medium transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            >
              <span>Cómo Trabajamos</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isPilaresOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu 4 Pilares */}
            <div className={`absolute top-full left-0 pt-3 transition-all duration-200 ${isPilaresOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl shadow-2xl p-4 w-[360px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"></div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 px-2 pt-1 font-bold">
                  <span>4 Formas de Trabajar</span>
                  <span className="text-blue-400">Modulares</span>
                </div>
                
                <div className="space-y-1">
                  <a 
                    href="#/consultoria-tecnologica" 
                    onClick={closeMenus}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover/item:text-blue-400 flex items-center gap-1.5">
                        <span className="font-mono text-blue-400 text-[10px]">01</span>
                        <span>Consultoría Digital</span>
                        <span className="text-[9px] font-mono text-slate-500">2-4 sem</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Diagnóstico, ROI y arquitectura previa</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover/item:text-blue-400">→</span>
                  </a>

                  <a 
                    href="#/automatizacion-agentica" 
                    onClick={closeMenus}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover/item:text-purple-400 flex items-center gap-1.5">
                        <span className="font-mono text-purple-400 text-[10px]">02</span>
                        <span>Agentes & Automatización</span>
                        <span className="text-[9px] font-mono text-slate-500">2-4 sem</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Agentes en producción sobre tu stack actual</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover/item:text-purple-400">→</span>
                  </a>

                  <a 
                    href="#/producto-digital" 
                    onClick={closeMenus}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover/item:text-cyan-400 flex items-center gap-1.5">
                        <span className="font-mono text-cyan-400 text-[10px]">03</span>
                        <span>Plataformas Digitales</span>
                        <span className="text-[9px] font-mono text-slate-500">90 días</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">De 0 a producción con UX validado</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover/item:text-cyan-400">→</span>
                  </a>

                  <a 
                    href="#/evolucion-digital" 
                    onClick={closeMenus}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover/item:text-indigo-400 flex items-center gap-1.5">
                        <span className="font-mono text-indigo-400 text-[10px]">04</span>
                        <span>Evolución Digital</span>
                        <span className="text-[9px] font-mono text-slate-500">6-12 m</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Squad continuo, CRO y cero deuda técnica</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover/item:text-indigo-400">→</span>
                  </a>
                </div>

                <div className="mt-2 pt-2 border-t border-white/[0.06] text-center">
                  <button
                    type="button"
                    onClick={handleComoTrabajamos}
                    className="text-[11px] font-mono text-blue-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
                  >
                    Ver comparativa en el Home ↓
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown Capacidades / Servicios */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#/servicios" className="flex items-center gap-1 hover:text-blue-400 transition-colors focus:outline-none">
              <span>Directorio de Servicios</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Dropdown Menu (Mega Menu Style) */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl shadow-2xl p-6 w-[660px] relative overflow-hidden">
                {/* Glow decorativo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400"></div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Col 1 */}
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05] font-bold">Apps & Producto</h4>
                    <ul className="space-y-3">
                      <li>
                        <a href="#/servicio/ux-ui" onClick={closeMenus} className="block text-sm text-white hover:text-emerald-400 transition-colors group">
                          <span className="font-semibold">UX/UI Design</span>
                          <span className="block text-[10px] font-mono text-emerald-400/80">IMPATH™ Enabled</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/servicio/ai-engineering" onClick={closeMenus} className="block text-sm text-white hover:text-cyan-400 transition-colors group">
                          <span className="font-semibold">AI Engineering</span>
                          <span className="block text-[10px] font-mono text-cyan-400/80">Cloud-Native SOC2</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05] font-bold">Automatización</h4>
                    <ul className="space-y-3">
                      <li>
                        <a href="#/servicio/ai-agents" onClick={closeMenus} className="block text-sm text-white hover:text-purple-400 transition-colors group">
                          <span className="font-semibold">Agentes IA</span>
                          <span className="block text-[10px] font-mono text-purple-400/80">Agentic RAG & MCP</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/servicio/data-analytics" onClick={closeMenus} className="block text-sm text-white hover:text-indigo-400 transition-colors group">
                          <span className="font-semibold">Data & Analytics</span>
                          <span className="block text-[10px] font-mono text-indigo-400/80">Mixpanel Telemetry</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 pb-2 border-b border-white/[0.05] font-bold">Gobernanza IA</h4>
                    <ul className="space-y-3">
                      <li>
                        <a href="#/servicio/security" onClick={closeMenus} className="block text-sm text-white hover:text-amber-400 transition-colors group">
                          <span className="font-semibold">Security & Vault</span>
                          <span className="block text-[10px] font-mono text-amber-400/80">ISO 27001 & OWASP</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/servicio/business-ai" onClick={closeMenus} className="block text-sm text-white hover:text-blue-400 transition-colors group">
                          <span className="font-semibold">Business AI Consulting</span>
                          <span className="block text-[10px] font-mono text-blue-400/80">FutureProof™ Framework</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">6 Capacidades de Misión Crítica</span>
                  <a href="#/servicios" onClick={closeMenus} className="text-xs font-mono text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Directorio Completo de Servicios</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#/casos-de-exito" className="hover:text-blue-400 transition-colors">
            Casos de Estudio
          </a>

          <a href="#/componentes" className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:text-white transition-all">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Showroom
          </a>
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => { closeMenus(); onOpenContact && onOpenContact(); }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2 cursor-pointer">
            <span>Agenda Diagnóstico</span>
            <span className="text-xs">→</span>
          </button>

          {/* Mobile Burger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Expandable) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/[0.08] pb-6 space-y-6 animate-fadeIn">
          {/* 4 Pilares Mobile */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">
              <span>4 Formas de Trabajar</span>
              <button 
                type="button" 
                onClick={handleComoTrabajamos}
                className="text-blue-400 hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Ver en Home ↓
              </button>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <a 
                href="#/consultoria-tecnologica" 
                onClick={closeMenus}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="font-mono text-blue-400 text-[10px]">01</span>
                    <span>Consultoría Digital</span>
                    <span className="text-[9px] font-mono text-slate-500">2-4 sem</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Diagnóstico, ROI y arquitectura</div>
                </div>
                <span className="text-slate-500 text-xs">→</span>
              </a>

              <a 
                href="#/automatizacion-agentica" 
                onClick={closeMenus}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="font-mono text-purple-400 text-[10px]">02</span>
                    <span>Agentes & Automatización</span>
                    <span className="text-[9px] font-mono text-slate-500">2-4 sem</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Agentes RAG sobre tu stack actual</div>
                </div>
                <span className="text-slate-500 text-xs">→</span>
              </a>

              <a 
                href="#/producto-digital" 
                onClick={closeMenus}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="font-mono text-cyan-400 text-[10px]">03</span>
                    <span>Plataformas Digitales</span>
                    <span className="text-[9px] font-mono text-slate-500">90 días</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">De 0 a producción con UX validado</div>
                </div>
                <span className="text-slate-500 text-xs">→</span>
              </a>

              <a 
                href="#/evolucion-digital" 
                onClick={closeMenus}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="font-mono text-indigo-400 text-[10px]">04</span>
                    <span>Evolución Digital</span>
                    <span className="text-[9px] font-mono text-slate-500">6-12 m</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Squad continuo, CRO y cero deuda</div>
                </div>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            </div>
          </div>

          {/* 6 Capacidades Mobile */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 px-2">
              <span>6 Capacidades Oficiales</span>
              <a href="#/servicios" onClick={closeMenus} className="text-emerald-400 hover:underline">
                Directorio →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="#/servicio/ux-ui" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">UX/UI Design</div>
                <div className="text-[9px] font-mono text-emerald-400/80">IMPATH™ Enabled</div>
              </a>
              <a 
                href="#/servicio/ai-engineering" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">Engineering</div>
                <div className="text-[9px] font-mono text-cyan-400/80">Cloud-Native</div>
              </a>
              <a 
                href="#/servicio/ai-agents" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">Agentes IA</div>
                <div className="text-[9px] font-mono text-purple-400/80">Agentic RAG</div>
              </a>
              <a 
                href="#/servicio/data-analytics" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">Data & Analytics</div>
                <div className="text-[9px] font-mono text-indigo-400/80">Mixpanel Telemetry</div>
              </a>
              <a 
                href="#/servicio/security" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">Security</div>
                <div className="text-[9px] font-mono text-amber-400/80">ISO 27001 & OWASP</div>
              </a>
              <a 
                href="#/servicio/business-ai" 
                onClick={closeMenus}
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06]"
              >
                <div className="text-xs font-semibold text-white">Consulting</div>
                <div className="text-[9px] font-mono text-blue-400/80">FutureProof™</div>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center justify-around pt-2 border-t border-white/[0.06] text-xs">
            <a href="#/casos-de-exito" onClick={closeMenus} className="text-slate-300 hover:text-blue-400 font-medium py-1">
              Casos de Estudio
            </a>
            <span className="text-slate-700">•</span>
            <a href="#/componentes" onClick={closeMenus} className="text-blue-400 hover:text-white font-mono flex items-center gap-1 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Showroom
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
