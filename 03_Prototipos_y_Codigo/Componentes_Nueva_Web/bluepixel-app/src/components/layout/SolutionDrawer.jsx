import React from 'react';

const SolutionDrawer = ({ solution, onClose, onOpenContact }) => {
      if (!solution) return null;

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-blue-500/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl glow-agentic relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 text-sm">
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 uppercase tracking-widest font-semibold">
                {solution.categoria}
              </span>
              <h3 className="md: mt-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">
                Arquitectura de Solución para tu Operación<span className="text-blue-500">.</span>
              </h3>
              <p className="text-slate-300 text-sm mt-1.5 italic bg-navy-850 p-3 rounded-xl border border-white/[0.06]">
                "{solution.prompt}"
              </p>
            </div>

            <div className="mb-6 bg-red-500/10 border border-red-500/25 rounded-xl p-4">
              <div className="text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                ⚠ Fricción Operativa & Costo de Inacción
              </div>
              <p className="text-white text-sm font-medium">{solution.impacto}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                ◈ Flujo de Trabajo Agentizado (Blueprint de Ingeniería)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solution.arquitectura.map((p, idx) => (
                  <div key={idx} className="bg-navy-850 border border-white/[0.08] rounded-xl p-3.5">
                    <span className="text-blue-400 font-mono text-xs font-bold block mb-1">{p.paso}</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-4">
                <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1">
                  ✦ Caso Real Análogo en Producción
                </span>
                <p className="text-white text-xs font-medium leading-relaxed">{solution.casoAnalogo}</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/25 rounded-xl p-4">
                <span className="text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1">
                  ✦ Retorno Financiero Estimado
                </span>
                <p className="text-white text-xs font-medium leading-relaxed">{solution.roiEstimado}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400">
                Implementación estimada: <strong className="text-white font-semibold">{solution.tiempoImplementacion}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                  Cerrar
                </button>
                <button
                  onClick={() => { onClose(); onOpenContact(); }}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                  <span>Solicitar Diagnóstico</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      );
    };

export default SolutionDrawer;
