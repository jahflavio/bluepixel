import React from 'react';

const FutureproofCTABanner = () => {
  return (
    <div className="w-full bg-[#02040A] py-16 md:py-24 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 5 Principios FutureProof Bar */}
        <div className="w-full bg-[#060B18] border border-white/[0.08] rounded-2xl p-6 mb-16 shadow-2xl">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold">
              Los 5 Principios Innegociables de la Garantía FutureProof™:
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              Soberanía Total de Datos
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs text-left">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block font-mono text-[11px] mb-1">1. Anti-Maquila</strong>
              <span className="text-slate-400 text-[11px]">Socios estratégicos de producto, no horas ciegas.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block font-mono text-[11px] mb-1">2. Certeza Previa</strong>
              <span className="text-slate-400 text-[11px]">Validar técnica y financieramente antes de codificar.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block font-mono text-[11px] mb-1">3. UX como Armadura</strong>
              <span className="text-slate-400 text-[11px]">Psicología conductual para adopción superior al 90% desde el día 1.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block font-mono text-[11px] mb-1">4. Cero Lock-in</strong>
              <span className="text-slate-400 text-[11px]">Protocolos abiertos MCP; código y datos en tu VPC.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-white block font-mono text-[11px] mb-1">5. Blindaje Seguro</strong>
              <span className="text-slate-400 text-[11px]">OWASP Top 10, CyberVadis y SLA 99.9% de resiliencia.</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          <span className="font-onest font-light tracking-[-0.035em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 animate-glow-flow">
            Futureproof
          </span>{' '}
          your company
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Un solo equipo de diseño, ingeniería e IA que construye, evoluciona y agentiza tu plataforma, trimestre a trimestre.
        </p>

        <a 
          href="#/filosofia-futureproof"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <span>Conoce la metodología Futureproof</span>
          <span className="font-mono ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default FutureproofCTABanner;
