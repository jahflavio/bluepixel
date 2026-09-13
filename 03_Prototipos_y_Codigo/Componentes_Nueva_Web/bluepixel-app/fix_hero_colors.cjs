const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// === HeroPromptEngine section: revert to original purple/indigo colors ===

// 1. Prompt bar focus ring: sky -> indigo
txt = txt.replace(
  'focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-500/15',
  'focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/15'
);

// 2. Sparkle icon: sky -> blue
txt = txt.replace(
  '<span className="text-sky-400 text-lg">✦</span>',
  '<span className="text-blue-400 text-lg">✦</span>'
);

// 3. CTA button "Ver Solución Técnica": sky -> indigo/blue gradient  
txt = txt.replace(
  'from-sky-600 to-sky-600 hover:from-sky-500 hover:to-sky-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-sky-600/30',
  'from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-indigo-600/30'
);

// 4. Active preset chip: sky -> indigo
txt = txt.replace(
  "bg-sky-600/30 text-sky-300 border border-sky-500/50",
  "bg-indigo-600/30 text-indigo-300 border border-indigo-500/50"
);

// 5. Pulse dot below prompt: sky -> emerald
txt = txt.replace(
  'w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse',
  'w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse'
);

// 6. Hero background glow blurs: keep as subtle blue/purple
txt = txt.replace(
  'bg-sky-600/15 blur-[120px]',
  'bg-indigo-600/15 blur-[120px]'
);
txt = txt.replace(
  'bg-sky-600/10 blur-[140px]',
  'bg-purple-600/10 blur-[140px]'
);

// 7. Category kicker badge: sky -> blue/emerald
txt = txt.replace(
  'w-2 h-2 rounded-full bg-cyan-400 animate-pulse',
  'w-2 h-2 rounded-full bg-emerald-400 animate-pulse'
);
txt = txt.replace(
  'text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold',
  'text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold'
);

// 8. Hero title gradient: back to blue/indigo/purple
txt = txt.replace(
  'from-sky-400 via-sky-300 to-sky-400 bg-clip-text text-transparent',
  'from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent'
);

// 9. Main CTA button "Solicitar Diagnóstico": sky -> indigo
txt = txt.replace(
  'bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-sky-600/25',
  'bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/25'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Reverted HeroPromptEngine to original purple/indigo/blue colors');
console.log('Done!');
