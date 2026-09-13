const fs = require('fs');

let txt = fs.readFileSync('../index.html', 'utf8');

const startIndex = txt.indexOf('// Hero with Prompt Engine');
const endIndex = txt.indexOf('// Social Proof & Client Marquee Section');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds");
    process.exit(1);
}

const newCode = `// Hero with Prompt Engine
    const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  (React.useEffect || useEffect)(() => {
    let timer;
    if (isPaused) {
      timer = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000); 
      return () => clearTimeout(timer);
    }

    const currentPrompt = PRESETS[presetIndex].prompt;
    
    if (isDeleting) {
      if (placeholderText.length === 0) {
        setIsDeleting(false);
        setPresetIndex((prev) => (prev + 1) % PRESETS.length);
      } else {
        timer = setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2)); }, 10);
      }
    } else {
      if (placeholderText.length === currentPrompt.length) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1)); }, 30);
      }
    }
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, isPaused, presetIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const solution = {
      ...PRESETS[presetIndex],
      prompt: inputVal || PRESETS[presetIndex].prompt
    };
    if (onSelectSolution) onSelectSolution(solution);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group perspective-1000">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* Glass Terminal */}
      <div className="relative bg-[#060A14]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-blue-500/20">
        
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="mx-auto text-[10px] font-mono text-slate-500">agent-kernel ~ zsh</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm">
          <div className="mb-6">
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">/system/core</span> <span className="text-slate-500">initialize_agentic_context</span>
            <div className="text-slate-400 mt-2 text-xs">[OK] Context loaded. Awaiting friction input...</div>
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">➜</span> 
              <span className="text-purple-400 mt-1">user</span>
              <textarea
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={placeholderText || "Describe tu problema operativo..."}
                className="flex-1 bg-transparent text-white placeholder-slate-300 text-sm focus:outline-none resize-none mt-1 min-h-[60px]"
                spellCheck="false"
              />
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Model Ready</span>
              </div>
              <button
                type="submit"
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-sans px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Analizar Fricción</span>
                <span className="text-[10px] opacity-50">⏎</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

    const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
      return (
        <section id="prompt-hero" className="relative pt-24 pb-24 px-6 md:px-12 overflow-hidden min-h-[90vh] flex items-center">
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
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">operan en producción.</span>
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

    `;

const finalTxt = txt.substring(0, startIndex) + newCode + txt.substring(endIndex);
fs.writeFileSync('../index.html', finalTxt, 'utf8');
console.log("Hero refactored to Asymmetric Glassmorphism!");
