const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const heroWithPromptCode = `
    const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
      return (
        <section id="prompt-hero" className="relative pt-16 pb-20 px-6 md:px-12 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                INGENIERÍA DE AGENTES IA & PLATAFORMAS FUTUREPROOF
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-white tracking-tight leading-[1.08] mb-6">
              Construimos agentes de Inteligencia Artificial que <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">operan en producción.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              BluePixel es la consultora de ingeniería agentica para empresas líderes en México y LATAM. Conectamos agentes autónomos a tus datos y sistemas reales (SAP, Salesforce, ERPs), blindados con <strong className="text-slate-200 font-semibold">diseño UX de clase mundial</strong> para garantizar adopción humana inmediata.
            </p>

            {/* THE HERO PROMPT BAR (PLG Engine) */}
            <div className="max-w-3xl mx-auto mb-6">
              <HeroPromptEngine onSelectSolution={onSelectSolution} />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button 
                onClick={onOpenContact}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2">
                <span>Solicitar Diagnóstico Operativo (Sin Costo)</span>
                <span>→</span>
              </button>
              <a 
                href="#three-ways"
                className="bg-[#0A0F1D] hover:bg-[#131D35] text-slate-300 font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/10 transition-colors">
                Conoce las 3 Formas de Trabajar ↓
              </a>
            </div>
          </div>
        </section>
      );
    };
`;

// Inject HeroWithPrompt exactly before SocialProofSection
const injectionPoint = '    // Social Proof & Client Marquee Section';
if (txt.includes(injectionPoint)) {
  txt = txt.replace(injectionPoint, heroWithPromptCode + '\n' + injectionPoint);
  fs.writeFileSync('../index.html', txt, 'utf8');
  console.log('HeroWithPrompt successfully restored!');
} else {
  console.log('Error: Could not find injection point (Social Proof Section)');
}
