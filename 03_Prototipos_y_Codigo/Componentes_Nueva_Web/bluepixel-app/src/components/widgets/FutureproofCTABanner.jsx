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
        
        {/* Los 5 principios se movieron a la pagina de FutureProof
            (FutureproofPrinciples.jsx): aqui competian con el CTA y se
            repetian al pie de las 6 paginas de capacidad. */}

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
          href="#/metodologia-impath"
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
