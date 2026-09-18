import React, { useEffect } from 'react';
import ThreeWaysToWork from '../sections/ThreeWaysToWork';

const ComoTrabajamosLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040711] text-white selection:bg-blue-500/30">

      {/* Intro Section */}
      <section className="relative pt-32 pb-8 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 font-display">
            Nuestra Metodología B2B: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">De la fricción a la agentización.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            No somos una "fábrica de software". Operamos bajo un modelo de Ingeniería de Misión Crítica. Conoce nuestros 4 servicios de colaboración diseñados para mitigar riesgo, asegurar adopción y garantizar el ROI.
          </p>
        </div>
      </section>

      {/* Componente Reutilizado */}
      <ThreeWaysToWork />

      {/* Simplified Footer */}
      <footer className="border-t border-white/[0.05] py-8 text-center text-slate-500 text-xs font-mono bg-[#02040A]">
        &copy; {new Date().getFullYear()} BluePixel Engineering. Transformando corporativos en ecosistemas resilientes.
      </footer>
    </div>
  );
};

export default ComoTrabajamosLandingPage;
