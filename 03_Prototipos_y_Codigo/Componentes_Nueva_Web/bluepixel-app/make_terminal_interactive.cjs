const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const startIndex = txt.indexOf('const HeroPromptEngine =');
const endIndex = txt.indexOf('const HeroWithPrompt =');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds");
    process.exit(1);
}

const newEngine = `const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);

  (React.useEffect || useEffect)(() => {
    if (isManualMode) return; // Detener animación si el usuario interactúa

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
      
      {/* Interactive Hint - Visible before interaction */}
      {!isManualMode && (
        <div className="absolute -top-10 right-4 animate-bounce z-20">
          <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center gap-2 border border-blue-400/30">
            <span>Haz clic para probarlo</span>
            <span className="text-white/70">↓</span>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
      {/* Glass Terminal */}
      <div className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]">
        
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-white/[0.02] cursor-default">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="mx-auto text-[10px] font-mono text-slate-500">agent-kernel ~ zsh</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm">
          <div className="mb-6 opacity-60">
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">/system/core</span> <span className="text-slate-500">initialize_agentic_context</span>
            <div className="text-slate-400 mt-2 text-xs">[OK] Context loaded. Awaiting manual friction input...</div>
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">➜</span> 
              <span className="text-purple-400 mt-1">user</span>
              <textarea
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onFocus={handleFocus}
                placeholder={isManualMode ? "Escribe aquí la peor fricción manual de tu empresa..." : placeholderText}
                className="flex-1 bg-transparent text-white placeholder-slate-400 focus:placeholder-slate-600 text-sm focus:outline-none resize-none mt-1 min-h-[60px] cursor-text"
                spellCheck="false"
              />
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={\`w-2 h-2 rounded-full \${isManualMode ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse\`}></span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{isManualMode ? 'Awaiting Input' : 'Auto Pilot Mode'}</span>
              </div>
              <button
                type="submit"
                className={\`\${isManualMode ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'} text-xs font-sans px-4 py-2 rounded-lg transition-all flex items-center gap-2\`}
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

    `;

const finalTxt = txt.substring(0, startIndex) + newEngine + txt.substring(endIndex);
fs.writeFileSync('../index.html', finalTxt, 'utf8');
console.log("Terminal made highly interactive!");
