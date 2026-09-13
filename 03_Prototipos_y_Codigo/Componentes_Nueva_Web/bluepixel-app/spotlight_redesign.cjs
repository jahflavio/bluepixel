const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Find the start and end of HeroPromptEngine
const startStr = `export const HeroPromptEngine =`;
const startIndex = txt.indexOf(startStr) !== -1 ? txt.indexOf(startStr) : txt.indexOf('const HeroPromptEngine =');

if (startIndex === -1) {
  console.log('Error: HeroPromptEngine not found');
  process.exit(1);
}

// We need to find where the component ends. It ends at the start of `const SocialProofSection`
const endStr = `const SocialProofSection =`;
let endIndex = txt.indexOf(endStr, startIndex);

if (endIndex === -1) {
    endIndex = txt.indexOf('// Social Proof', startIndex);
}

if (endIndex === -1) {
  console.log('Error: End of HeroPromptEngine not found');
  process.exit(1);
}

const oldComponent = txt.substring(startIndex, endIndex);

const newComponent = `const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  (React.useEffect || useEffect)(() => {
    let timer;
    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2500); 
      return () => clearTimeout(timer);
    }

    const currentPrompt = PRESETS[presetIndex].prompt;
    
    if (isDeleting) {
      if (placeholderText.length === 0) {
        setIsDeleting(false);
        setPresetIndex((prev) => (prev + 1) % PRESETS.length);
      } else {
        timer = setTimeout(() => {
          setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2));
        }, 15);
      }
    } else {
      if (placeholderText.length === currentPrompt.length) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => {
          setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1));
        }, 40);
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
    <div className="w-full max-w-2xl mx-auto relative group mt-8">
      <form 
        onSubmit={handleSubmit} 
        className="flex items-center gap-3 bg-[#0A0E1A]/40 border border-white/[0.15] hover:border-white/30 rounded-full px-5 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] focus-within:bg-[#0A0E1A]/80"
      >
        <svg className="w-5 h-5 text-blue-400 opacity-70 group-focus-within:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={placeholderText || "Escribe un proceso para optimizar..."}
          className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none w-full tracking-wide"
        />

        <button
          type="submit"
          className="flex items-center justify-center bg-white/5 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 rounded-full p-2.5 transition-all duration-200"
          title="Solucionar"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
      
      <div className="flex justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Presiona Enter para analizar</span>
      </div>
    </div>
  );
};

    // Social Proof & Client Marquee Section
    `;

txt = txt.replace(oldComponent, newComponent);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Successfully redesigned HeroPromptEngine to Spotlight Style');
