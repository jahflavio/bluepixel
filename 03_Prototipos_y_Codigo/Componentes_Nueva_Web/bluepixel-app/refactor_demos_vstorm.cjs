const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. REFACTOR HeroPromptEngine
const newHeroPromptEngine = `
const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const textareaRef = React.useRef(null);

  (React.useEffect || useEffect)(() => {
    if (isManualMode) return; 

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
  }, [placeholderText, isDeleting, isPaused, presetIndex, isManualMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const solution = {
      ...PRESETS[presetIndex],
      prompt: inputVal || (isManualMode ? '' : PRESETS[presetIndex].prompt)
    };
    if (onSelectSolution) onSelectSolution(solution);
  };

  const handleFocus = () => {
    setIsManualMode(true);
    setPlaceholderText('');
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group perspective-1000 mt-10 lg:mt-0">
      
      {/* Background Deep Glows */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 rounded-2xl blur-3xl opacity-30 group-hover:opacity-70 transition duration-700"></div>
      
      {/* Hyper-stylized Glass Terminal */}
      <div onClick={() => { if(textareaRef.current) textareaRef.current.focus(); }} className="relative bg-[#03050B]/80 backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 shadow-black/80 flex flex-col cursor-text">
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* macOS Style Window Controls */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex gap-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            agent-cli
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 flex-grow">
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col h-full">
            <div className="flex gap-3 relative flex-grow mb-6">
              <span className="text-emerald-400 font-mono font-bold select-none mt-1 text-sm md:text-base">❯</span>
              
              <div className="relative w-full h-[120px]">
                {/* Visual Placeholder (Typewriter) */}
                {!isManualMode && (
                  <div className="absolute inset-0 text-slate-300 font-mono text-sm md:text-base leading-relaxed tracking-tight break-words whitespace-pre-wrap pointer-events-none">
                    {placeholderText}
                    <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 align-middle animate-pulse"></span>
                  </div>
                )}
                
                <textarea
                  ref={textareaRef}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onFocus={handleFocus}
                  className={\`w-full h-full bg-transparent text-emerald-400 font-mono text-sm md:text-base leading-relaxed tracking-tight resize-none focus:outline-none focus:ring-0 \${!isManualMode ? 'opacity-0' : 'opacity-100'}\`}
                  placeholder={isManualMode ? 'Escribe aquí el proceso que quieres automatizar...' : ''}
                />
              </div>
            </div>

            {/* Futuristic Sub-controls */}
            <div className="flex flex-wrap gap-2 mb-6">
               <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600 mb-1 w-full block">Quick Injections:</span>
               <button type="button" onClick={() => { setInputVal(PRESETS[0].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-mono bg-white/5 hover:bg-blue-500/20 border border-white/[0.05] rounded-md px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-all hover:border-blue-500/30">Extract-Data</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[1].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-mono bg-white/5 hover:bg-blue-500/20 border border-white/[0.05] rounded-md px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-all hover:border-blue-500/30">Reconcile-SAP</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[2].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-mono bg-white/5 hover:bg-blue-500/20 border border-white/[0.05] rounded-md px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-all hover:border-blue-500/30">Fix-Checkout</button>
            </div>
            
            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={\`text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2\`}>
                  {isManualMode ? <><span className="text-emerald-500">●</span> Awaiting Input</> : <><span className="text-blue-500 animate-pulse">●</span> Auto Pilot Mode</>}
                </span>
              </div>
              <button
                type="submit"
                className={\`\${isManualMode ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-white/5 text-slate-400 border border-white/5'} font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-md transition-all hover:bg-blue-500 flex items-center gap-2\`}
              >
                <span>Ejecutar</span>
                <span className="opacity-60 text-xs">⏎</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
`;

const heroRegex = /const HeroPromptEngine = \(\{ onSelectSolution \}\) => \{[\s\S]*?const HeroWithPrompt = /;
txt = txt.replace(heroRegex, newHeroPromptEngine + '\n\n    const HeroWithPrompt = ');

// 2. REFACTOR CaseStudiesSection
const newCaseStudiesSection = `
    const CaseStudiesSection = ({ onOpenCase }) => {
      const cases = [
        {
          id: 'bimbo',
          client: 'Grupo Bimbo',
          industry: 'Consumo Masivo / Global',
          title: 'Estandarización analítica y aplicaciones operativas para miles de colaboradores',
          kpi: '+40%',
          kpiLabel: 'Productividad Directiva',
          desc: 'Diseño y desarrollo de plataformas de analítica de datos e interfaces internas para estandarizar la toma de decisiones directivas a nivel global.',
          image: 'assets/bimbo.jpg'
        },
        {
          id: 'radioshack',
          client: 'RadioShack',
          industry: 'Retail Electrónica',
          title: 'Transformación total de la infraestructura de comercio electrónico',
          kpi: '3x',
          kpiLabel: 'Conversión Mobile',
          desc: 'Migración a arquitectura serverless, optimización radical del flujo de checkout y rediseño de UX/UI centrado en conversión omnicanal.',
          image: 'assets/radioshack.jpg'
        },
        {
          id: 'lifemiles',
          client: 'LifeMiles',
          industry: 'Fidelidad / Aerolíneas',
          title: 'Arquitectura escalable para el programa de lealtad líder en LATAM',
          kpi: '99.9%',
          kpiLabel: 'Uptime Transaccional',
          desc: 'Despliegue de microservicios críticos para soportar picos transaccionales masivos durante campañas de redención de millas.',
          image: 'assets/lifemiles.jpg'
        },
        {
          id: 'iqos',
          client: 'IQOS',
          industry: 'Tabaco / Tecnología',
          title: 'Experiencia digital B2C y orquestación de datos de consumidores',
          kpi: '+65%',
          kpiLabel: 'Retención de Usuarios',
          desc: 'Creación de portales de usuario hiper-personalizados y backends robustos para gestión segura de datos sensibles.',
          image: 'assets/iqos.jpg'
        }
      ];

      const [activeIndex, setActiveIndex] = useState(0);

      return (
        <section id="casos" className="py-24 px-6 md:px-12 bg-[#02040A] relative border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-4">
                Portafolio de Infraestructura
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6">
                Ingeniería que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">define industrias.</span>
              </h2>
            </div>

            {/* Highly Stylized Segmented Control (Vstorm Style) */}
            <div className="flex justify-center mb-12 relative z-20">
              <div className="inline-flex flex-wrap justify-center p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-xl">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveIndex(idx)}
                    className={\`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 \${activeIndex === idx ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'}\`}
                  >
                    {activeIndex === idx && (
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
                    )}
                    <span className="relative z-10">{c.client}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Demos Container */}
            <div className="relative">
              {/* Deep Glow behind the active showcase */}
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative h-[650px] md:h-[550px] perspective-1000">
                {cases.map((c, idx) => (
                  <div 
                    key={c.id} 
                    className={\`absolute inset-0 h-full bg-[#060A14] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 flex flex-col md:flex-row \${activeIndex === idx ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' : 'opacity-0 translate-y-12 scale-95 pointer-events-none z-0'}\`}
                  >
                    
                    {/* Noise Texture Overlay for the card */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                    {/* Left Column: Glass Data Panel */}
                    <div className="md:w-[45%] lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center relative z-30">
                      <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{c.industry}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-display font-black text-white mb-4 leading-tight">
                        {c.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        {c.desc}
                      </p>

                      <div className="mb-10">
                        {/* Vstorm stylized KPI */}
                        <div className="text-5xl lg:text-6xl font-mono font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-500 mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                          {c.kpi}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                          {c.kpiLabel}
                        </div>
                      </div>

                      <div>
                        <button 
                          onClick={() => onOpenCase(c.client)}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-lg transition-all flex items-center gap-2 w-max group">
                          <span>Analizar Arquitectura</span>
                          <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Image Presentation */}
                    <div className="md:w-[55%] lg:w-[60%] relative bg-black flex items-center justify-center overflow-hidden">
                       <img src={c.image} alt={c.client} className="w-full h-full object-cover object-left-top opacity-60 mix-blend-lighten" />
                       {/* Sophisticated gradient overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#060A14] via-[#060A14]/70 to-transparent z-10"></div>
                       <div className="absolute inset-0 border-l border-white/[0.05] z-20 pointer-events-none"></div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      );
    };
`;

const casesRegex = /const CaseStudiesSection = \(\{ onOpenCase \}\) => \{[\s\S]*?const FAQSection = /;
txt = txt.replace(casesRegex, newCaseStudiesSection + '\n    // FAQ Section (Manejo de Objeciones B2B)\n    const FAQSection = ');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Demos refactored to Vstorm style!");
