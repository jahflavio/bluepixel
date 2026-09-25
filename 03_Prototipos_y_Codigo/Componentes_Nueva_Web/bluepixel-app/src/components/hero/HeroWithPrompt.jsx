import React from 'react';
import HeroPromptEngine from './HeroPromptEngine';

const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
  return (
    <section id="prompt-hero" className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden min-h-[75vh] flex items-center">
      {/* Subtle Dynamic Grids & Glows */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left Column: Copy & CTAs */}
        <div className="text-left">
          {/* Category Kicker - Clean typographic text, no capsule */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            {/* El H1 de abajo es de marca y no lleva keywords a proposito. El
                vocabulario de busqueda entra aqui y en el subtitulo: 'desarrollo
                de software a la medida' son 1,900 busquedas/mes y no aparecia en
                ninguna parte del sitio. */}
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              DESARROLLO DE SOFTWARE A LA MEDIDA & AGENTES IA · MÉXICO
            </span>
          </div>

          {/* Headline - Scaled for better vertical proportion */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.08] mb-4 font-display">
            Diseñamos la plataforma<span className="text-blue-500">,</span><br />
            automatizamos la operación<span className="text-blue-500">,</span><br />
            agentizamos el negocio<span className="text-blue-500">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            BluePixel es una empresa de <strong className="text-white font-semibold">desarrollo de software a la medida</strong> y agentes de IA para corporativos en México y LATAM. Construimos plataformas web y aplicaciones móviles, y conectamos agentes autónomos a tus sistemas reales (SAP, Salesforce, ERPs) bajo protocolos abiertos MCP, con diseño UX de clase mundial que asegura adopción sin fricción.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-5">
            <a
              href="#/diagnostico"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
              <span>Solicitar Diagnóstico Operativo</span>
              <span>→</span>
            </a>
            <a
              href="#/casos-de-estudio"
              className="bg-transparent hover:bg-white/5 text-slate-300 font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/10 transition-colors">
              Ver el Portafolio Completo →
            </a>
          </div>

          {/* Differentiator Badge */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
            <span className="text-emerald-400">✓</span>
            <span>El rigor técnico de una Big 4. La agilidad de un squad élite. Cero talento junior sin supervisión.</span>
          </div>
        </div>

        {/* Right Column: Agentic Terminal (Elevated position) */}
        <div className="w-full lg:-mt-4">
          <HeroPromptEngine onSelectSolution={onSelectSolution} />
        </div>

      </div>
    </section>
  );
};

export default HeroWithPrompt;
