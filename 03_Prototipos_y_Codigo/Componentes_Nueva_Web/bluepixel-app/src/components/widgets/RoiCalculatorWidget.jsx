import React, { useState, useEffect } from 'react';

const RoiCalculatorWidget = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [frictionPct, setFrictionPct] = useState(25);

  // Estimación financiera estándar B2B México:
  // Horas por año: 1,900 hrs/persona. Costo hora promedio: $350 MXN (nómina + overhead)
  const annualPayroll = teamSize * 1900 * 350;
  const annualWaste = Math.round(annualPayroll * (frictionPct / 100));
  const roiMultiplier = (annualWaste / 280000).toFixed(1);

  return (
    <div className="bg-[#050A19] border border-blue-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"></div>
      
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-300 font-bold">
            Calculador de Costo de Inacción (COI) & ROI
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Modelo Financiero IMPATH™</span>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between text-xs text-slate-300 font-mono mb-2">
            <span>Personas en el equipo / operación:</span>
            <span className="font-bold text-white text-sm">{teamSize} colaboradores</span>
          </div>
          <div className="flex gap-2">
            {[5, 15, 35, 75].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setTeamSize(size)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${teamSize === size ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400' : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] border border-white/[0.06]'}`}
              >
                {size} pers.
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-300 font-mono mb-2">
            <span>Fricción o tiempo perdido en reprocesos / silos:</span>
            <span className="font-bold text-amber-400 text-sm">{frictionPct}% del tiempo</span>
          </div>
          <div className="flex gap-2">
            {[
              { label: '15% Leve', val: 15 },
              { label: '25% Promedio B2B', val: 25 },
              { label: '40% Crítica', val: 40 }
            ].map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setFrictionPct(f.val)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${frictionPct === f.val ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] border border-white/[0.06]'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#02050E] border border-blue-500/30 space-y-3">
        <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-2.5">
          <span className="text-xs text-slate-400 font-mono">Fuga Anual por Inacción (COI):</span>
          <span className="text-xl md:text-2xl font-mono font-black text-red-400">
            -${(annualWaste / 1000000).toFixed(2)}M MXN<span className="text-xs text-slate-500 font-normal">/año</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="text-[10px] font-mono text-slate-400">Amortización Diagnóstico:</div>
            <div className="text-sm font-mono font-bold text-blue-300">&lt; 21 días de backlog</div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-[10px] font-mono text-slate-400">Multiplicador ROI Esperado:</div>
            <div className="text-sm font-mono font-bold text-emerald-300">+{roiMultiplier}x de retorno</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Entrega en 14 a 28 días</span>
        </div>
        <span className="text-blue-400 font-semibold">100% Certeza Previa</span>
      </div>
    </div>
  );
};


export default RoiCalculatorWidget;