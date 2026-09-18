import React from 'react';

const ThreeWaysToWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-[#02050A] border-t border-b border-white/[0.06] relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            MODELO BLUEPIXEL (CÓMO TRABAJAMOS)
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-6 mb-4">
            La ruta de ascenso hacia tu madurez digital<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            No somos una fábrica de requerimientos. Trazamos una línea clara desde el diagnóstico estratégico hasta la escala y seguridad de tu plataforma.
          </p>
        </div>

        {/* Grid de 4 Fases en Formato Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* FASE 01: CONSULTORÍA DIGITAL */}
          <div className="bg-[#080B12] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-slate-500/50 transition-all group">
            <div className="p-8 flex-1 flex flex-col">
              {/* Phase Header - Fixed Height 64px */}
              <div className="flex items-start gap-3 mb-6 h-[64px]">
                <span className="text-slate-500 font-mono text-sm font-semibold mt-1">01</span>
                <h3 className="text-white font-black text-2xl tracking-wide uppercase leading-tight">
                  Consultoría<br/>Digital
                </h3>
              </div>
              
              {/* Badges - Single Row h-[32px] */}
              <div className="flex items-center gap-1.5 mb-6 h-[32px]">
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">PYMES</span>
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">ENTERPRISE</span>
              </div>

              {/* Title - Uniform Min-Height 56px */}
              <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center leading-snug">
                Para empresas buscando certidumbre técnica
              </h4>

              {/* Subtitle - Uniform Min-Height 64px */}
              <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[64px] flex items-start">
                Identifica brechas y cuantifica el mayor ROI antes de programar con un roadmap técnico seguro.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {[
                  'Auditoría profunda de arquitectura y fricción operativa',
                  'Mapeo de procesos y diagnóstico de operaciones',
                  'Evaluación de viabilidad para IA (AI Readiness) y retorno medible',
                  'Matriz de priorización de tecnología y cálculo de ROI',
                  'Blueprint de arquitectura técnica y gobernanza de datos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-white mt-0.5 opacity-60 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POWERED BY</span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold tracking-widest">IMPATH</span>
              </div>
              
              <div className="bg-[#0C101A] border border-white/5 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden group-hover:border-slate-500/30 transition-all min-h-[84px]">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shadow-[0_0_8px_rgba(148,163,184,0.6)] relative z-10 shrink-0"></div>
                <div className="relative z-10">
                  <div className="text-white text-sm font-bold min-h-[22px] flex items-center">Roadmap Estratégico Seguro.</div>
                  <div className="text-slate-400 text-xs mt-1">Entregable accionable y cuantificado en 2 a 4 semanas.</div>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 02: AGENTES & AUTOMATIZACIÓN */}
          <div className="bg-[#080B12] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
            <div className="p-8 flex-1 flex flex-col">
              {/* Phase Header - Fixed Height 64px */}
              <div className="flex items-start gap-3 mb-6 h-[64px]">
                <span className="text-slate-500 font-mono text-sm font-semibold mt-1">02</span>
                <h3 className="text-white font-black text-2xl tracking-wide uppercase leading-tight">
                  Agentes &<br/>Automatización
                </h3>
              </div>
              
              {/* Badges - Single Row h-[32px] */}
              <div className="flex items-center gap-1.5 mb-6 h-[32px]">
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">PYMES</span>
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">ENTERPRISE</span>
              </div>

              {/* Title - Uniform Min-Height 56px */}
              <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center leading-snug">
                Para operaciones con cuellos de botella
              </h4>

              {/* Subtitle - Uniform Min-Height 64px */}
              <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[64px] flex items-start">
                Conecta tus sistemas y elimina tareas manuales con agentes de IA sobre tu stack actual.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {[
                  'Agentes autónomos sobre datos reales de tu empresa (arquitectura RAG)',
                  'Integración con tu stack empresarial (SAP, Salesforce, ERP)',
                  'Elimina la carga operativa y convierte a tu equipo en Subject Matter Experts (SMEs)',
                  'Sprints quincenales con entregas funcionales en staging',
                  'Blindaje contra alucinaciones y cumplimiento de seguridad'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-white mt-0.5 opacity-60 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POWERED BY</span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold tracking-widest">IMPATH</span>
              </div>
              
              <div className="bg-[#0C101A] border border-white/5 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden group-hover:border-emerald-500/30 transition-all min-h-[84px]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)] relative z-10 shrink-0"></div>
                <div className="relative z-10">
                  <div className="text-white text-sm font-bold min-h-[22px] flex items-center">Ecosistema Automatizado.</div>
                  <div className="text-slate-400 text-xs mt-1">Retorno de inversión inmediato en tus procesos de negocio.</div>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 03: PLATAFORMAS DIGITALES */}
          <div className="bg-[#080B12] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
            <div className="p-8 relative z-10 flex-1 flex flex-col">
              {/* Phase Header - Fixed Height 64px */}
              <div className="flex items-start gap-3 mb-6 h-[64px]">
                <span className="text-slate-500 font-mono text-sm font-semibold mt-1">03</span>
                <h3 className="text-white font-black text-2xl tracking-wide uppercase leading-tight">
                  Plataformas<br/>Digitales
                </h3>
              </div>
              
              {/* Badges - Single Row h-[32px] */}
              <div className="flex items-center gap-1.5 mb-6 h-[32px]">
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">STARTUPS</span>
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">PYMES</span>
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">ENTERPRISE</span>
              </div>

              {/* Title - Uniform Min-Height 56px */}
              <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center leading-snug">
                Para construir plataformas digitales desde cero
              </h4>

              {/* Subtitle - Uniform Min-Height 64px */}
              <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[64px] flex items-start">
                Tu plataforma digital construida para validar rápido y escalar con solidez desde el día uno.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {[
                  'Plataforma lista en 3 meses con UX validado',
                  'Validación con usuarios reales y gemelos digitales antes de producción',
                  'Ciclo completo: estrategia → UX/UI → arquitectura → desarrollo → QA → lanzamiento',
                  'Design system y arquitectura sin deuda técnica',
                  'Consola administrativa, Backend e integraciones con sistemas legacy y terceros'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-white mt-0.5 opacity-60 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="px-8 pb-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POWERED BY</span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold tracking-widest">IMPATH</span>
              </div>
              
              <div className="bg-[#0C101A] border border-white/5 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden group-hover:border-blue-500/30 transition-all min-h-[84px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)] relative z-10 shrink-0"></div>
                <div className="relative z-10">
                  <div className="text-white text-sm font-bold min-h-[22px] flex items-center">Ingeniería Acelerada por IA (AI-Forward).</div>
                  <div className="text-slate-400 text-xs mt-1">Desarrollo potenciado con IA para reducir time-to-market sin deuda técnica.</div>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 04: EVOLUCIÓN DIGITAL */}
          <div className="bg-[#080B12] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
            <div className="p-8 flex-1 flex flex-col">
              {/* Phase Header - Fixed Height 64px */}
              <div className="flex items-start gap-3 mb-6 h-[64px]">
                <span className="text-slate-500 font-mono text-sm font-semibold mt-1">04</span>
                <h3 className="text-white font-black text-2xl tracking-wide uppercase leading-tight">
                  Evolución<br/>Digital
                </h3>
              </div>
              
              {/* Badges - Single Row h-[32px] */}
              <div className="flex items-center gap-1.5 mb-6 h-[32px]">
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">PYMES</span>
                <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-slate-400 text-[9px] font-bold tracking-widest uppercase">ENTERPRISE</span>
              </div>

              {/* Title - Uniform Min-Height 56px */}
              <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center leading-snug">
                Para empresas con plataformas digitales existentes
              </h4>

              {/* Subtitle - Uniform Min-Height 64px */}
              <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[64px] flex items-start">
                Convierte tu plataforma actual en una ventaja competitiva continua con impacto de negocio.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {[
                  'Roadmap vivo de 6, 12 o 24 meses con entregas continuas',
                  'Prioridades actualizadas cada sprint según comportamiento real de usuarios',
                  'UX Health Score continuo: usabilidad, estabilidad, velocidad y conversión',
                  'Optimización continua para convertir visitas en clientes (CRO) y retención',
                  'Cadencia estructurada de accountability y alineación a metas de negocio'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-white mt-0.5 opacity-60 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POWERED BY</span>
                <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold tracking-widest">IMPATH</span>
              </div>
              
              <div className="bg-[#0C101A] border border-white/5 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden group-hover:border-purple-500/30 transition-all min-h-[84px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shadow-[0_0_8px_rgba(168,85,247,0.8)] relative z-10 shrink-0"></div>
                <div className="relative z-10">
                  <div className="text-white text-sm font-bold min-h-[22px] flex items-center">Capacidades Transversales On-Demand.</div>
                  <div className="text-slate-400 text-xs mt-1">Escuadrón continuo de CRO, UX, Analítica y Seguridad sin elevar tu nómina.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreeWaysToWork;
