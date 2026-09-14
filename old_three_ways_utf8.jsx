import React from 'react';

/**
 * ThreeWaysToWork.jsx
 * Componente que presenta las 3 formas de trabajar con BluePixel.
 * Resuelve la falta del paquete de Diagn├│stico/Auditor├¡a previa a BUILD y EVOLVE.
 */

export const ThreeWaysToWork = ({ onSelectPackage }) => {
  return (
    <section id="three-ways" className="py-24 px-6 md:px-12 bg-[#040711] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
            C├ôMO TRABAJAR CON NOSOTROS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Tres formas de colaborar con BluePixel.
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Dos paquetes de entrada para equipos que buscan certidumbre t├®cnica inmediata, y un programa integral para construir y operar tu capa completa de agentes en producci├│n.
          </p>
        </div>

        {/* Grid de 3 Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* CARD 01: Transformation Advisory / Diagn├│stico */}
          <div className="bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  ENTRY PACKAGE
                </span>
                <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-blue-400 transition-colors">01</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Diagn├│stico & Auditor├¡a FutureProof</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Te mostramos exactamente el camino e identificamos qu├® automatizar. Tu equipo adquiere claridad y m├║sculo antes de invertir en c├│digo.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Mapeo de procesos y diagn├│stico de operaciones',
                  'Detecci├│n de fricci├│n con gemelos digitales (IMPATHÔäó)',
                  'Matriz de priorizaci├│n de agentes IA y c├ílculo de ROI',
                  'Blueprint de arquitectura t├®cnica y gobernanza de datos',
                  'Reporte ejecutivo con costo de inacci├│n cuantificado en pesos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-blue-400 mt-0.5">Ôùê</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">2 a 4 Semanas</span>
              <button 
                onClick={() => onSelectPackage && onSelectPackage('Diagn├│stico & Auditor├¡a (01)')}
                className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                <span>Solicitar Diagn├│stico</span>
                <span>Ôåù</span>
              </button>
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

              <h3 className="text-2xl font-bold text-white mb-2">Ingenier├¡a de Agentes & MCP</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ya sabes qu├® flujo necesitas construir. Nosotros dise├▒amos la arquitectura, programamos los agentes y los integramos en tu entorno real.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Dise├▒o de arquitectura agentica con protocolos MCP',
                  'Flujos de trabajo aut├│nomos sobre datos reales con RAG',
                  'Integraci├│n con tu stack empresarial (SAP, Salesforce, ERP)',
                  'Ingenier├¡a, pruebas de estr├®s y despliegue cloud en producci├│n',
                  'Blindaje contra alucinaciones y cumplimiento OWASP / LFPDPPP'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-indigo-400 mt-0.5">Ôùê</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Sprints Mensuales</span>
              <button 
                onClick={() => onSelectPackage && onSelectPackage('Ingenier├¡a de Agentes (02)')}
                className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5 transition-colors">
                <span>Explorar Ingenier├¡a</span>
                <span>Ôåù</span>
              </button>
            </div>
          </div>

          {/* CARD 03 (01+02): Full Transformation (Destacado) */}
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

              <h3 className="text-2xl font-bold text-white mb-2">Transformaci├│n: BUILD + EVOLVE</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                De cero a una capa agentizada y plataforma digital de alta disponibilidad en producci├│n. Estrategia, ingenier├¡a y evoluci├│n continua end-to-end.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Equipo senior dedicado embebido: Tech Lead, AI Engineer y UX Lead',
                  'Todo lo incluido en los paquetes 01 (Diagn├│stico) y 02 (Ingenier├¡a)',
                  'Construcci├│n completa de plataforma en 90 d├¡as (BUILD)',
                  'Monitoreo trimestral de UX Health Score y ROI (EVOLVE)',
                  'Hand-off estructurado: tu equipo es due├▒o absoluto de lo que opera'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-emerald-400 font-bold mt-0.5">Ô£ô</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.12] flex items-center justify-between">
              <span className="text-xs font-mono text-blue-300 font-semibold uppercase tracking-wider">3+ Meses / Continuo</span>
              <button 
                onClick={() => onSelectPackage && onSelectPackage('Transformaci├│n Integral (01+02)')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5">
                <span>Agendar Sesi├│n</span>
                <span>ÔåÆ</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThreeWaysToWork;
