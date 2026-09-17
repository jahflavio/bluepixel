import React, { useEffect } from 'react';
import SixCapabilitiesGrid from '../sections/SixCapabilitiesGrid';
import MultiStepContact from '../forms/MultiStepContact';

const ServiciosLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 rounded-full mb-8">
            ✦ DIRECTORIO TÉCNICO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Directorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Servicios Especializados</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Explora a detalle nuestras 6 capacidades operativas. Haz clic en cualquiera de ellas para ver su arquitectura, entregables y metodología.
          </p>
        </div>
      </section>

      {/* Reutilizamos el componente original */}
      <SixCapabilitiesGrid onNavigateCluster={(route) => window.location.hash = `#/${route}`} />

    </div>
  );
};

export default ServiciosLandingPage;
