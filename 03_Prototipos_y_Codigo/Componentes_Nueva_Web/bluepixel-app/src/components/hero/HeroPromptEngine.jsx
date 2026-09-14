import React, { useState, useEffect, useRef } from 'react';
import { PRESETS } from '../../data/constants';

const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
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
    
    <div className="w-full max-w-4xl mx-auto relative group mt-10 lg:mt-0 flex justify-center">
      
      {/* Background Flowchart Network for Hero */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-60">
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 600">
          <defs>
            <filter id="glowHero" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
          </defs>
          <path id="h1" d="M 500 300 C 200 300, 200 150, 100 150" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <path id="h2" d="M 500 300 C 800 300, 800 150, 900 150" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <path id="h3" d="M 500 300 C 500 100, 500 100, 500 50" stroke="rgba(168,85,247,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          
          <circle r="4" fill="#10B981" filter="url(#glowHero)"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#h1" /></animateMotion></circle>
          <circle r="4" fill="#3B82F6" filter="url(#glowHero)"><animateMotion dur="4s" repeatCount="indefinite" begin="1s"><mpath href="#h2" /></animateMotion></circle>
          <circle r="4" fill="#A855F7" filter="url(#glowHero)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#h3" /></animateMotion></circle>
        </svg>
        
        {/* Floating Node Labels */}
        <div className="absolute left-[5%] top-[23%] text-[9px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">Internal API</div>
        <div className="absolute right-[5%] top-[23%] text-[9px] font-mono text-blue-400 bg-blue-950/80 border border-blue-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">External ERP</div>
        <div className="absolute left-[45%] top-[5%] text-[9px] font-mono text-purple-400 bg-purple-950/80 border border-purple-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]">LLM Router</div>
      </div>

      <div className="w-full max-w-xl mx-auto relative group perspective-1000 z-10">

      
      {/* Interactive Hint - Visible before interaction */}
      {!isManualMode && (
        <div className="absolute -top-10 right-4 animate-bounce z-20">
          <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center gap-2 border border-blue-400/30">
            <span>Escribe tu problema y halla una solución</span>
            <span className="text-white/70">↓</span>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
      {/* Glass Terminal */}
      <div onClick={() => { if(textareaRef.current) textareaRef.current.focus(); }} className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] cursor-text">
        
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

          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">➜</span> 
              <span className="text-purple-400 mt-1">user</span>
              <textarea
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                ref={textareaRef}
                onFocus={handleFocus}
                placeholder={isManualMode ? "Escribe aquí la peor fricción manual de tu empresa..." : placeholderText}
                className="flex-1 bg-transparent text-white placeholder-slate-400 focus:placeholder-slate-600 text-sm focus:outline-none resize-none mt-1 min-h-[60px] cursor-text"
                spellCheck="false"
              />
            </div>
            {/* Suggestion Chips */}
            <div className={`mt-4 flex flex-wrap gap-2 transition-opacity duration-500 ${isManualMode ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}>
               <button type="button" onClick={() => { setInputVal(PRESETS[0].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Cotizaciones lentas</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[1].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Conciliación SAP</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[2].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Fuga en Checkout</button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isManualMode ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`}></span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{isManualMode ? 'Awaiting Input' : 'Auto Pilot Mode'}</span>
              </div>
              <button
                type="submit"
                className={`${isManualMode ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'} text-xs font-sans px-4 py-2 rounded-lg transition-all flex items-center gap-2`}
              >
                <span>Analizar Fricción</span>
                <span className="text-[10px] opacity-50">⏎</span>
              </button>
            </div>
          </form>
              </div>
      </div>
      </div>
    </div>
  );
};

export default HeroPromptEngine;
