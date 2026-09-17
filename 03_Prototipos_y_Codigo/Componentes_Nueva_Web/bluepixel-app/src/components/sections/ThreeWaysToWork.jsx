import React from 'react';

const ThreeWaysToWork = ({ onSelectPackage }) => {
  return (
    <section id="three-ways" className="py-24 bg-[#040711] border-t border-b border-white/[0.06] relative overflow-hidden">

      {/* Isometric Grid Background — full section width */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)',
          backgroundSize: '40px 70px',
          backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
            CÓMO TRABAJAR CON NOSOTROS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Tres formas de colaborar con BluePixel<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Dos paquetes de entrada para equipos que buscan certidumbre técnica inmediata, y un programa integral para construir y operar tu capa completa de agentes en producción.
          </p>
        </div>

        {/* Grid de 3 Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* CARD 01: Diagnóstico */}
          <div className="bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  ENTRY PACKAGE
                </span>
                <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-blue-400 transition-colors">01</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico &amp; Auditoría FutureProof</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Te mostramos exactamente el camino e identificamos qué automatizar. Tu equipo adquiere claridad y músculo antes de invertir en código.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Mapeo de procesos y diagnóstico de operaciones',
                  'Detección de fricción con gemelos digitales (IMPATH™)',
                  'Matriz de priorización de agentes IA y cálculo de ROI',
                  'Blueprint de arquitectura técnica y gobernanza de datos',
                  'Reporte ejecutivo con costo de inacción cuantificado en pesos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-blue-400 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">2 a 4 Semanas</span>
              <a
                href="#/diagnostico"
                className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                <span>Solicitar Diagnóstico</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* CARD 02: Agentic Engineering */}
          <div className="bg-[#060A14] border border-white/[0.08] hover:border-indigo-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                  ENTRY PACKAGE
                </span>
                <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-indigo-400 transition-colors">02</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Ingeniería de Agentes &amp; MCP</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ya sabes qué flujo necesitas construir. Nosotros diseñamos la arquitectura, programamos los agentes y los integramos en tu entorno real.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Diseño de arquitectura agéntica con protocolos MCP',
                  'Flujos de trabajo autónomos sobre datos reales con RAG',
                  'Integración con tu stack empresarial (SAP, Salesforce, ERP)',
                  'Ingeniería, pruebas de estrés y despliegue cloud en producción',
                  'Blindaje contra alucinaciones y cumplimiento OWASP / LFPDPPP'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-indigo-400 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Sprints Mensuales</span>
              <a
                href="#/ingenieria"
                className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5 transition-colors">
                <span>Explorar Ingeniería</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* CARD 03: Full Transformation (Destacado) */}
          <div className="bg-gradient-to-b from-[#0F1628] to-[#060A14] border-2 border-blue-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500 text-white font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  FULL TRANSFORMATION
                </span>
                <span className="text-2xl font-black text-blue-400 font-mono">01+02</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Transformación: BUILD + EVOLVE</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                De cero a una capa agentizada y plataforma digital de alta disponibilidad en producción. Estrategia, ingeniería y evolución continua end-to-end.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Equipo senior dedicado embebido: Tech Lead, AI Engineer y UX Lead',
                  'Todo lo incluido en los paquetes 01 (Diagnóstico) y 02 (Ingeniería)',
                  'Construcción completa de plataforma en 90 días (BUILD)',
                  'Monitoreo trimestral de UX Health Score y ROI (EVOLVE)',
                  'Hand-off estructurado: tu equipo es dueño absoluto de lo que opera'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.12] flex items-center justify-between">
              <span className="text-xs font-mono text-blue-300 font-semibold uppercase tracking-wider">3+ Meses / Continuo</span>
              <a
                href="#/transformacion"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5">
                <span>Explorar Transformación</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreeWaysToWork;
