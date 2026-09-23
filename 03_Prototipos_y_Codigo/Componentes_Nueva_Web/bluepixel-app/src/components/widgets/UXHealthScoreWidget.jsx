import React, { useState, useEffect } from 'react';

const UXHealthScoreWidget = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 87) {
        current = 87;
        clearInterval(interval);
      }
      setScore(current);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { name: 'Usabilidad (IMPATH™)', val: 94, color: 'bg-emerald-400' },
    { name: 'Rendimiento (Core Web Vitals)', val: 88, color: 'bg-cyan-400' },
    { name: 'Estabilidad (SLA 99.9%)', val: 99, color: 'bg-emerald-400' },
    { name: 'Conversión (CRO Funnel)', val: 82, color: 'bg-indigo-400' },
  ];

  return (
    <div className="bg-[#050A19] border border-indigo-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500"></div>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
            UX Health Score™ · Monitoreo en Vivo
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Mixpanel Telemetry 24/7</span>
      </div>

      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight">
            {score}<span className="text-lg text-slate-500 font-normal">/100</span>
          </div>
          <div className="text-[11px] font-mono text-emerald-400 font-semibold mt-1">
            ↑ +12 pts vs. trimestre anterior
          </div>
        </div>
        <div className="text-right text-xs text-slate-400 font-mono">
          <div>Ganancia 4 trimestres:</div>
          <div className="text-base font-bold text-amber-400 font-mono">+34 pts CRO</div>
        </div>
      </div>

      <div className="space-y-2.5 mb-5">
        {metrics.map((m, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
              <span>{m.name}</span>
              <span className="font-bold text-white">{m.val}%</span>
            </div>
            <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
              <div 
                className={`h-full ${m.color} transition-all duration-700 rounded-full`}
                style={{ width: `${(score / 87) * m.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-center">
        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-red-400 font-bold">
          2 Fricciones Activas
        </div>
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 font-bold">
          1 Oportunidad CRO
        </div>
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold">
          SLA 99.9% Óptimo
        </div>
      </div>
    </div>
  );
};

export default UXHealthScoreWidget;