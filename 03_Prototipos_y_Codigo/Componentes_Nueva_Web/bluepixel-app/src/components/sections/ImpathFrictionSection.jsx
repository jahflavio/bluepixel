import React from 'react';

const ImpathFrictionSection = ({ onOpenContact }) => {
  return (
    <section className="py-24 px-6 bg-[#03060F] border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Descubre qué fricción le cuesta más dinero a tu plataforma con IMPATH y Mixpanel
          </h2>
        </div>

        {/* Content Layout: Left Sidebar + 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Summary Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 space-y-6">
            <div className="space-y-5 text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">IMPATH</strong> analiza 7 dimensiones de comportamiento real de tus usuarios y cuantifica las fricciones.
              </p>
              <p>
                Con <strong className="text-white">Mixpanel</strong> convertimos los datos de navegación en tiempo real en UX Health Score, traduciéndolo a costos para priorizar su evolución.
              </p>
              <p>
                Y <strong className="text-white">Vault</strong> identifica el riesgo técnico que tu plataforma no ve — cuantificado en pesos antes de que se convierta en una crisis.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Evalúa el costo de la fricción</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 3 Cards Container (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1: IMPATH */}
            <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group">
              <div>
                {/* Visual Header Box */}
                <div className="bg-[#03060F] border border-white/[0.06] rounded-xl p-4 mb-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400 font-bold">IMPATH <span className="text-slate-600 font-normal">Friction Intelligence</span></span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      3 activos
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-white/[0.04] flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">A</div>
                      <div>
                        <div className="font-bold text-white leading-none">Persona A — Power User</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">Director Ops · Desktop</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
                      Fricción detectada
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-white/[0.04] flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">B</div>
                      <div>
                        <div className="font-bold text-white leading-none">Persona B — Casual User</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">Gerente Comercial</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      Navegando OK
                    </span>
                  </div>
                </div>

                {/* Badge & Titles */}
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold block w-max mb-3">
                  UX RESEARCH & PRODUCT STRATEGY
                </span>
                <h3 className="text-xl font-bold text-white mb-0.5">IMPATH</h3>
                <h4 className="text-xs text-blue-400 font-semibold mb-3">Inteligencia de Experiencia</h4>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Construye gemelos digitales de los usuarios de tu plataforma — perfiles conductuales con 7 capas de análisis que simulan cómo distintos tipos de usuarios navegan, toman decisiones y encuentran fricción.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 text-xs">✦</span>
                    <span>Gemelos digitales activos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 text-xs">✦</span>
                    <span>Detección de fricción con impacto económico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 text-xs">✦</span>
                    <span>Interview Room — 7 stakeholders simultáneos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <button 
                  onClick={onOpenContact} 
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Conoce IMPATH en el Diagnóstico</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* CARD 2: MIXPANEL */}
            <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group">
              <div>
                {/* Visual Header Box */}
                <div className="bg-[#03060F] border border-white/[0.06] rounded-xl p-4 mb-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400 font-bold">MIXPANEL <span className="text-slate-600 font-normal">Platform Health</span></span>
                    <div className="flex gap-1 text-[9px] bg-white/5 p-0.5 rounded border border-white/10">
                      <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white font-semibold">Web</span>
                      <span className="px-1.5 py-0.5 text-slate-400">iOS</span>
                      <span className="px-1.5 py-0.5 text-slate-400">Android</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-1">
                    <div className="w-12 h-12 rounded-full border-2 border-blue-500/30 border-t-blue-500 flex flex-col items-center justify-center font-mono">
                      <span className="text-sm font-bold text-white leading-none">78</span>
                      <span className="text-[8px] text-slate-400">/100</span>
                    </div>
                    <div className="flex-1 space-y-1.5 text-[10px]">
                      <div className="flex justify-between text-slate-300">
                        <span>Usabilidad</span>
                        <span className="font-mono text-emerald-400">82%</span>
                      </div>
                      <div className="w-full bg-navy-950 rounded-full h-1">
                        <div className="bg-emerald-500 h-1 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Rendimiento</span>
                        <span className="font-mono text-amber-400">71%</span>
                      </div>
                      <div className="w-full bg-navy-950 rounded-full h-1">
                        <div className="bg-amber-500 h-1 rounded-full" style={{ width: '71%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-slate-400">
                    <div>Disponib: <strong className="text-white">97.8%</strong></div>
                    <div>Velocidad: <strong className="text-white">4.5s</strong></div>
                  </div>
                </div>

                {/* Badge & Titles */}
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold block w-max mb-3">
                  INTEGRACIÓN · ANALYTICS EN TIEMPO REAL
                </span>
                <h3 className="text-xl font-bold text-white mb-0.5">Mixpanel</h3>
                <h4 className="text-xs text-blue-400 font-semibold mb-3">Monitoreo de Salud de Plataforma</h4>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Integramos Mixpanel para generar un UX Health Score continuo, un roadmap vivo y reportes ejecutivos trimestrales con ROI documentado, monitoreando simultáneamente web, iOS y Android en tiempo real.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 text-xs">✦</span>
                    <span>UX Health Score — Usabilidad · Rendimiento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 text-xs">✦</span>
                    <span>Roadmap vivo actualizado cada sprint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 text-xs">✦</span>
                    <span>Business Impact & ROI documentado</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <button 
                  onClick={onOpenContact} 
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Ver integración en Retainer Evolve</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* CARD 3: VAULT */}
            <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group">
              <div>
                {/* Visual Header Box */}
                <div className="bg-[#03060F] border border-white/[0.06] rounded-xl p-4 mb-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400 font-bold">VAULT <span className="text-slate-600 font-normal">Security Impact</span></span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                      Live Q2
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-navy-950/80 border border-white/[0.04] flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Revenue en riesgo</div>
                      <div className="text-lg font-black font-mono text-white mt-0.5">$4.7M <span className="text-xs font-normal text-slate-400">MXN</span></div>
                      <div className="text-[9px] text-rose-400 font-mono mt-0.5">▲ 3 vulnerabilidades críticas</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center font-mono text-[10px] font-bold text-amber-400">
                      68%
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-rose-950/20 border border-rose-500/20 flex items-center justify-between text-[10px] font-mono">
                    <div>
                      <span className="text-white font-bold block">SQL Injection</span>
                      <span className="text-[9px] text-slate-400">$1.8M MXN en riesgo</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-rose-600 text-white font-bold text-[8px] uppercase tracking-wider">
                      Crítico
                    </span>
                  </div>
                </div>

                {/* Badge & Titles */}
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold block w-max mb-3">
                  SECURITY & RELIABILITY
                </span>
                <h3 className="text-xl font-bold text-white mb-0.5">Vault</h3>
                <h4 className="text-xs text-blue-400 font-semibold mb-3">Seguridad con Impacto Financiero</h4>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Audita continuamente las vulnerabilidades de tu plataforma y las traduce a riesgo económico medible. Cumplimiento OWASP, ISO 27001 y GDPR con monitoreo en tiempo real.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 text-xs">✦</span>
                    <span>Revenue en riesgo cuantificado en MXN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 text-xs">✦</span>
                    <span>Auditoría continua de vulnerabilidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 text-xs">✦</span>
                    <span>Cumplimiento OWASP · ISO 27001 · GDPR</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <button 
                  onClick={onOpenContact} 
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Auditar vulnerabilidades con Vault</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpathFrictionSection;
