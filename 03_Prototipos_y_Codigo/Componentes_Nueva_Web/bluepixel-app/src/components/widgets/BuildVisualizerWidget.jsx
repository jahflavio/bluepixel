import React, { useState, useEffect } from 'react';

const BuildVisualizerWidget = () => {
  const [week, setWeek] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 16) {
        current = 16;
        clearInterval(interval);
      }
      setWeek(current);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    { label: 'UX DISCOVERY & PS (SEM 1-3)', color: 'bg-blue-500 text-blue-400', n: 3, activeN: Math.min(3, week) },
    { label: 'PROTOTIPADO & ARQUITECTURA (SEM 4-6)', color: 'bg-emerald-500 text-emerald-400', n: 3, activeN: week > 3 ? Math.min(3, week - 3) : 0 },
    { label: 'DESARROLLO CORE FULL STACK (SEM 7-12)', color: 'bg-cyan-500 text-cyan-400', n: 6, activeN: week > 6 ? Math.min(6, week - 6) : 0 },
    { label: 'QA, SEGURIDAD & OWASP (SEM 13-14)', color: 'bg-amber-500 text-amber-400', n: 2, activeN: week > 12 ? Math.min(2, week - 12) : 0 },
    { label: 'GO-LIVE PRODUCCIÓN & SLA (SEM 15-16)', color: 'bg-purple-500 text-purple-400', n: 2, activeN: week > 14 ? Math.min(2, week - 14) : 0 },
  ];

  return (
    <div className="bg-[#050A19] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
            Simulador de Construcción · 2 a 4 Meses
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-cyan-300">
          Semana {week}/16 (Mes {Math.min(4, Math.max(1, Math.ceil(week / 4)))})
        </span>
      </div>

      <div className="space-y-3">
        {phases.map((p, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-1">
              <span className={p.color.split(' ')[1]}>{p.label}</span>
              <span className="text-slate-500">{p.activeN}/{p.n}</span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: p.n }).map((_, i) => (
                <div 
                  key={i}
                  className={`h-2 flex-1 rounded-sm transition-all duration-300 ${i < p.activeN ? p.color.split(' ')[0] : 'bg-white/[0.05]'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>SLA 99.9% Cloud-Native</span>
        </div>
        <span className="text-cyan-400 font-semibold">100% Código Tuyo</span>
      </div>
    </div>
  );
};


export default BuildVisualizerWidget;