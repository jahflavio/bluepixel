import React, { useEffect } from 'react';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import MultiStepContact from '../forms/MultiStepContact';

const CasosEstudioLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 rounded-full mb-8">
            ✦ WORK & PORTAFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Ingeniería probada en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">producción</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Resultados medibles, adopción real y fricción cero. Explora cómo hemos ayudado a corporativos líderes a escalar sus operaciones a través de nuestra arquitectura.
          </p>
        </div>
      </section>

      {/* Aggregate Impact Section */}
      <section className="py-12 border-y border-white/[0.05] bg-[#040711]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.05]">
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">+500K</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Usuarios Impactados</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">99.99%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Uptime Histórico</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">&gt;50</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Sistemas Integrados</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">SOC2</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Seguridad Auditada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reutilizamos el componente original de Casos */}
      <CaseStudiesSection />

      {/* CTA Section */}
      <section className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">¿Listo para ser nuestro próximo caso de éxito?</h2>
            <p className="text-slate-400">Comienza con un Diagnóstico FutureProof de 14 días.</p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact hideCloseButton={true} preselectedPackage="Diagnóstico FutureProof (IMPATH)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosEstudioLandingPage;
