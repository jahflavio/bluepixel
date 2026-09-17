import React, { useEffect } from 'react';
import ThreeClustersOverview from '../sections/ThreeClustersOverview';
import MultiStepContact from '../forms/MultiStepContact';

const PilaresLandingPage = ({ onNavigateCluster }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 rounded-full mb-8">
            ✦ FILOSOFÍA Y ARQUITECTURA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pilares Tecnológicos</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            No creemos en soluciones genéricas. Estructuramos nuestro músculo de ingeniería en 3 grandes áreas de especialidad diseñadas para escalar operaciones corporativas.
          </p>
        </div>
      </section>

      {/* Componente Original */}
      <ThreeClustersOverview onNavigateCluster={onNavigateCluster} />

      {/* CTA Section */}
      <section className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">¿En qué pilar necesitas apoyo?</h2>
            <p className="text-slate-400">Nuestro equipo de arquitectura te ayudará a trazar la ruta.</p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact hideCloseButton={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PilaresLandingPage;
