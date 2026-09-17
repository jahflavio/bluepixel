import React, { useEffect } from 'react';
import MultiStepContact from '../forms/MultiStepContact';

const TransformacionLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            ● FULL TRANSFORMATION (BUILD + EVOLVE)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            MVPs Corporativos a producción en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">90 días</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            De cero a una plataforma de alta disponibilidad. Tomamos responsabilidad absoluta del ciclo End-to-End: construcción de la arquitectura (BUILD) y evolución continua bajo estrictos SLAs (EVOLVE). Todo cumpliendo normativas SOC2 y privacidad LFPDPPP.
          </p>
        </div>
      </section>

      {/* Qué entregamos */}
      <section className="py-16 px-6 bg-[#040711] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-mono text-sm tracking-widest text-slate-400 mb-12 uppercase">El modelo End-to-End incluye:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnóstico Integrado</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Arrancamos mitigando riesgos. Mapeamos tu deuda técnica actual y entregamos el blueprint de arquitectura cloud para asegurar escalabilidad desde el día 1.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Lanzamiento a 90 Días</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Nuestro equipo dedicado (Tech, UX, Data) programa tu plataforma empresarial bajo metodologías ágiles y con estándares de seguridad OWASP/LFPDPPP.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">SLA y Monitoreo (Evolve)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No te dejamos solo después del pase a producción. Monitoreamos el rendimiento, medimos el UX Health Score y operamos mantenimiento correctivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Agenda tu Sesión de Transformación</h2>
            <p className="text-slate-400">Si buscas un partner tecnológico que se comprometa con tus resultados de negocio, agenda una llamada exploratoria con nuestros Directores.</p>
          </div>
          
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact preselectedPackage="Transformación Integral (01+02)" hideCloseButton={true} />
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="border-t border-white/[0.05] py-8 text-center text-slate-500 text-xs font-mono bg-[#02040A]">
        &copy; {new Date().getFullYear()} BluePixel Engineering. Transformando corporativos en ecosistemas resilientes.
      </footer>
    </div>
  );
};

export default TransformacionLandingPage;
