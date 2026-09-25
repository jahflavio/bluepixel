import React, { useEffect } from 'react';
import Footer from '../layout/Footer';
import FinalCTA from '../sections/FinalCTA';
import FutureproofMethodology from '../sections/FutureproofMethodology';
import FutureproofPrinciples from '../sections/FutureproofPrinciples';
import OrbitingTechStack from '../sections/OrbitingTechStack';
import FourWaysToWork from '../sections/FourWaysToWork';

const FutureproofLandingPage = ({ onNavigateCluster }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#02040A] min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase mb-8">
            Metodología BluePixel
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            <span className="font-onest font-light tracking-[-0.035em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 animate-glow-flow">
              Futureproof
            </span>{' '}
            your company.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Futureproof es el sistema vivo con el que Bluepixel diseña, construye y evoluciona plataformas digitales que se convierten en ventaja competitiva, trimestre a trimestre.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                const el = document.getElementById('four-ways-to-work');
                if (el) {
                  const navHeight = 80;
                  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
            >
              Explorar nuestros Servicios →
            </button>
          </div>
        </div>
      </section>

      <FutureproofPrinciples />

      <FutureproofMethodology />

      <FourWaysToWork />

      <OrbitingTechStack />
      <FinalCTA onOpenContact={() => window.__openContactModal?.()} />
      <Footer onNavigateCluster={onNavigateCluster} onOpenContact={() => window.__openContactModal?.()} />
    </div>
  );
};

export default FutureproofLandingPage;
