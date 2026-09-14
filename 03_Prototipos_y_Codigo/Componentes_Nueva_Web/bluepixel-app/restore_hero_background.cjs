const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const oldHeroContainerRegex = /<div className="w-full max-w-xl mx-auto relative group perspective-1000 mt-10 lg:mt-0">/;

const newHeroContainer = `
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
`;

txt = txt.replace(oldHeroContainerRegex, newHeroContainer);

const endHeroRegex = /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\};\s*const HeroWithPrompt = /;
const endHeroReplacement = `      </div>\n      </div>\n      </div>\n    </div>\n  );\n};\n\n    const HeroWithPrompt = `;
txt = txt.replace(endHeroRegex, endHeroReplacement);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Hero SVG background restored successfully.");
