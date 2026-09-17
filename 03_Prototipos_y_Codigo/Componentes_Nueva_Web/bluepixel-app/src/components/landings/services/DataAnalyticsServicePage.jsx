import React, { useEffect } from 'react';
import MultiStepContact from '../../forms/MultiStepContact';

const DataAnalyticsServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(var(--indigo-rgb),0.2)]">
            ✦ MIXPANEL TELEMETRY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Data & Analytics
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Una sola fuente de verdad para decidir con total confianza. KPIs de negocio en tiempo real para tu equipo directivo. Anticipa el comportamiento de tus usuarios antes de que impacte el negocio.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Inicia tu proyecto de Data & Analytics</h2>
            <p className="text-slate-400">Déjanos tus datos y un arquitecto de soluciones te contactará para evaluar tu caso de uso.</p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact preselectedPackage="Data & Analytics" hideCloseButton={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsServicePage;
