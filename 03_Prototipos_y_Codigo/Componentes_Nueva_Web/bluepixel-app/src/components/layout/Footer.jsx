import React from 'react';
import logoSrc from '../../assets/logo.png';

const Footer = () => (
      <footer className="bg-[#02040A] border-t border-white/[0.05] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Brand & Strategy Column (Takes 4 cols) */}
            <div className="lg:col-span-4 pr-8">
              <div className="flex items-center mb-8">
                <img src={logoSrc} alt="BluePixel" className="h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                No somos una agencia de marketing ni un equipo de "prompters". Somos una firma de <strong className="text-white">ingeniería de software corporativo</strong> especializada en Sistemas Multi-Agente, RAG y automatización determinística.
              </p>
              
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Enterprise Ready</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-tight font-mono">
                  Despliegues en VPC privadas. Cero entrenamiento de modelos con tu IP. Infraestructura escalable.
                </p>
              </div>
            </div>

            {/* Links Columns (Take 8 cols total) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* Architecture Column */}
              <div>
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Arquitectura</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> RAG Corporativo</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Swarms (Sistemas Multi-Agente)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Servidores MCP (ERP Integration)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Edge AI & Serverless</a></li>
                </ul>
              </div>

              {/* Operations Column */}
              <div>
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Metodología</h3>
                <ul className="space-y-4">
                  <li><a href="#casos" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Casos de Éxito & ROI</a></li>
                  <li><a href="#three-ways" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Fases de Implementación</a></li>
                  <li><a href="#contact-form" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Diagnóstico de Arquitectura</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Ingeniería vs Agencias</a></li>
                </ul>
              </div>

              {/* Compliance Column */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Seguridad B2B</h3>
                <ul className="space-y-4 mb-6">
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Acuerdo de Confidencialidad (NDA)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Políticas Zero-Data Retention</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">SLA de Soporte Crítico</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-slate-500 text-xs font-mono">
                &copy; {new Date().getFullYear()} BluePixel Engineering.
              </p>
              <span className="hidden md:block text-slate-700">|</span>
              <p className="text-slate-500 text-xs font-mono">
                Transformando corporativos en ecosistemas resilientes.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );

export default React.memo(Footer);
