import React from 'react';

const Footer = ({ onOpenContact, onNavigateCluster }) => {
  const handleComoTrabajamos = (e) => {
    if (e) e.preventDefault();
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

    if (window.location.hash && window.location.hash !== '' && window.location.hash !== '#/' && !window.location.hash.includes('como-trabajamos')) {
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

  const handleOpenContact = (pkgName = 'Diagnóstico Técnico') => {
    if (onOpenContact) {
      onOpenContact(pkgName);
    } else if (typeof window !== 'undefined' && window.__openContactModal) {
      window.__openContactModal(pkgName);
    } else {
      const el = document.getElementById('contact-form') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact-form';
      }
    }
  };

  return (
    <footer className="bg-[#02040A] border-t border-white/[0.08] pt-20 pb-12 px-6 md:px-12 relative overflow-hidden text-slate-400">
      {/* Glow decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-blue-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Brand & Posicionamiento (lg:col-span-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center mb-6">
              <a href="#/" onClick={(e) => { e.preventDefault(); if (onNavigateCluster) onNavigateCluster('home'); else window.location.hash = ''; }} className="focus:outline-none">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="BluePixel" 
                  className="h-10 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" 
                />
              </a>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              No somos una fábrica de software ni una agencia de diseño superficial. BluePixel es una firma de{' '}
              <strong className="text-white font-semibold">Ingeniería Agéntica, Desarrollo Cloud-Native y Garantía FutureProof™</strong>.
              Unificamos UX/UI conductual y Product Strategy con código blindado de misión crítica.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 mb-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Enterprise Ready</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Despliegues en VPC privada del cliente. Blindaje ISO 27001 & OWASP Top 10. Cero entrenamiento de modelos públicos con tu IP propietaria.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleOpenContact('Diagnóstico Técnico Ejecutivo')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-lg transition-all cursor-pointer"
              >
                <span>Agenda Diagnóstico Técnico</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Columna 2: 4 Formas de Trabajar (Pilares) (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest">Cómo Trabajamos</h3>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/25 font-bold">4 Pilares</span>
            </div>
            
            <ul className="space-y-3.5">
              <li>
                <a href="#/consultoria-tecnologica" className="block text-slate-300 hover:text-blue-400 transition-colors group">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400">
                    <span className="font-mono text-blue-400 text-xs">01</span>
                    <span>Consultoría Digital</span>
                    <span className="text-[10px] font-mono text-slate-500 ml-auto">2-4 sem</span>
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Diagnóstico IMPATH™, ROI & Costo de Inacción</span>
                </a>
              </li>

              <li>
                <a href="#/automatizacion-agentica" className="block text-slate-300 hover:text-purple-400 transition-colors group">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-purple-400">
                    <span className="font-mono text-purple-400 text-xs">02</span>
                    <span>Agentes & Automatización</span>
                    <span className="text-[10px] font-mono text-slate-500 ml-auto">2-4 sem</span>
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Agentes autónomos RAG sobre tu stack actual</span>
                </a>
              </li>

              <li>
                <a href="#/producto-digital" className="block text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-400">
                    <span className="font-mono text-cyan-400 text-xs">03</span>
                    <span>Plataformas Digitales</span>
                    <span className="text-[10px] font-mono text-slate-500 ml-auto">90 días</span>
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-0.5">De 0 a producción con UX validado</span>
                </a>
              </li>

              <li>
                <a href="#/evolucion-digital" className="block text-slate-300 hover:text-indigo-400 transition-colors group">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400">
                    <span className="font-mono text-indigo-400 text-xs">04</span>
                    <span>Evolución Digital</span>
                    <span className="text-[10px] font-mono text-slate-500 ml-auto">6-12 m</span>
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Squad continuo, CRO y cero deuda técnica</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={handleComoTrabajamos}
                className="text-xs font-mono text-blue-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
              >
                <span>Ver comparativa interactiva en Home</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Columna 3: 6 Capacidades Oficiales (Servicios) (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest">Capacidades</h3>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-bold">6 Servicios</span>
            </div>

            <ul className="space-y-3">
              <li>
                <a href="#/servicio/ux-ui" className="block text-slate-300 hover:text-emerald-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-emerald-400">UX/UI & Product Strategy</span>
                  <span className="block text-[10px] font-mono text-emerald-400/80">IMPATH™ Enabled • Psicología Conductual</span>
                </a>
              </li>

              <li>
                <a href="#/servicio/ai-engineering" className="block text-slate-300 hover:text-cyan-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-cyan-400">Software Engineering</span>
                  <span className="block text-[10px] font-mono text-cyan-400/80">Full Stack Cloud-Native • SOC2-Ready</span>
                </a>
              </li>

              <li>
                <a href="#/servicio/ai-agents" className="block text-slate-300 hover:text-purple-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-purple-400">IA & Automatización</span>
                  <span className="block text-[10px] font-mono text-purple-400/80">Agentic RAG • Conectores MCP Corporativos</span>
                </a>
              </li>

              <li>
                <a href="#/servicio/data-analytics" className="block text-slate-300 hover:text-indigo-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-indigo-400">Data & Analytics</span>
                  <span className="block text-[10px] font-mono text-indigo-400/80">Mixpanel Telemetry • KPIs en Tiempo Real</span>
                </a>
              </li>

              <li>
                <a href="#/servicio/security" className="block text-slate-300 hover:text-amber-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-amber-400">Security & Reliability</span>
                  <span className="block text-[10px] font-mono text-amber-400/80">ISO 27001 • OWASP Top 10 • SLA 99.9%</span>
                </a>
              </li>

              <li>
                <a href="#/servicio/business-ai" className="block text-slate-300 hover:text-blue-400 transition-colors group">
                  <span className="text-sm font-medium text-white group-hover:text-blue-400">Consulting Digital</span>
                  <span className="block text-[10px] font-mono text-blue-400/80">FutureProof™ Framework • Backlog por ROI</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-white/[0.06]">
              <a href="#/servicios" className="text-xs font-mono text-emerald-400 hover:text-white transition-colors flex items-center gap-1.5">
                <span>Directorio Completo de Servicios</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Columna 4: Gobernanza & Soberanía (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest">Gobernanza</h3>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/25 font-bold">FutureProof</span>
            </div>

            <ul className="space-y-3 text-xs">
              <li>
                <a href="#/casos-de-exito" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Casos de Estudio & ROI
                </a>
              </li>
              <li>
                <a href="#/componentes" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <span>Showroom de Prototipos</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                </a>
              </li>
              <li>
                <span className="text-slate-400 block py-0.5 text-slate-300">
                  Soberanía Total de Código
                </span>
              </li>
              <li>
                <span className="text-slate-400 block py-0.5 text-slate-300">
                  Cero Vendor Lock-in
                </span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleOpenContact('Acuerdo de Confidencialidad (NDA)')}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-xs"
                >
                  Acuerdo de Confidencialidad (NDA)
                </button>
              </li>
              <li>
                <span className="text-slate-400 block py-0.5 text-slate-300">
                  SLA 99.9% de Misión Crítica
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-slate-500">
              &copy; {new Date().getFullYear()} BluePixel Engineering.
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">
              Transformando corporativos en ecosistemas de software resilientes.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">All Systems Operational</span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.08] text-slate-400 text-[10px]">
              <span className="text-blue-400 font-bold">VPC</span>
              <span>Private Cloud Ready</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default React.memo(Footer);
