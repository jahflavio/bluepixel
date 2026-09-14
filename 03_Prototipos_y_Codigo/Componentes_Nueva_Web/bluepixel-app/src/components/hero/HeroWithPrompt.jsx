import React from 'react';
import HeroPromptEngine from './HeroPromptEngine';

const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
      return (
        <section id="prompt-hero" className="relative pt-24 pb-24 overflow-hidden min-h-[90vh] flex items-center">
          {/* Subtle Dynamic Grids & Glows */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
          
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="text-left">
              {/* Category Kicker */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold border border-blue-500/20 bg-blue-500/5 px-3 py-1 rounded-full">
                  INGENIERÍA DE AGENTES IA
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 font-black font-display tracking-tight leading-[1.1] text-4xl lg:text-5xl xl:text-[3.5rem] text-white">
                Construimos agentes de IA que <br className="hidden lg:block"/>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">operan en producción</span><span className="text-blue-500">.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-400 text-base lg:text-lg max-w-xl leading-relaxed mb-10">
                BluePixel es la consultora boutique para empresas líderes en México y LATAM. Conectamos agentes autónomos a tus datos y sistemas reales (SAP, Salesforce), blindados con <strong className="text-white font-semibold">diseño UX de clase mundial</strong> para garantizar adopción humana inmediata.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={onOpenContact}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
                  <span>Auditar mi operación</span>
                  <span>→</span>
                </button>
                <a 
                  href="#three-ways"
                  className="bg-transparent hover:bg-white/5 text-slate-300 font-semibold text-sm px-8 py-4 rounded-xl border border-white/10 transition-colors">
                  Ver metodología ↓
                </a>
              </div>
            </div>

            {/* Right Column: Agentic Terminal */}
            <div className="w-full">
              <HeroPromptEngine onSelectSolution={onSelectSolution} />
            </div>

          </div>
        </section>
      );
    };

export default HeroWithPrompt;
