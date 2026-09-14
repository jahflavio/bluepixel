const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. REFACTOR CaseStudiesSection (Replace images with flowcharts)
const oldRightColumnRegex = /<div className="md:w-\[55%\] lg:w-\[60%\] relative bg-black flex items-center justify-center overflow-hidden">[\s\S]*?<img src=\{c\.image\}[\s\S]*?<\/div>/;

const newRightColumn = `
                    <div className="md:w-[55%] lg:w-[60%] relative bg-[#02040A] flex items-center justify-center overflow-hidden perspective-1000">
                       
                       {/* SVG Graph specific to each case study */}
                       <div className="absolute inset-0 w-full h-full p-8 flex items-center justify-center">
                          
                          {/* BIMBO GRAPH */}
                          {c.id === 'bimbo' && (
                            <div className="relative w-full max-w-sm aspect-video">
                              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 250">
                                <defs>
                                  <filter id="glowBimbo" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                                </defs>
                                {/* Multiple sources merging into central DB */}
                                <path id="b1" d="M 50 50 C 150 50, 100 125, 200 125" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="b2" d="M 50 125 L 200 125" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="b3" d="M 50 200 C 150 200, 100 125, 200 125" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="b4" d="M 200 125 C 280 125, 250 125, 350 125" stroke="rgba(99,102,241,0.5)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                                
                                {/* Moving dots */}
                                <circle r="3" fill="#60A5FA" filter="url(#glowBimbo)"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#b1" /></animateMotion></circle>
                                <circle r="3" fill="#60A5FA" filter="url(#glowBimbo)"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#b2" /></animateMotion></circle>
                                <circle r="3" fill="#60A5FA" filter="url(#glowBimbo)"><animateMotion dur="1.8s" repeatCount="indefinite"><mpath href="#b3" /></animateMotion></circle>
                                <circle r="4" fill="#818CF8" filter="url(#glowBimbo)"><animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#b4" /></animateMotion></circle>
                              </svg>
                              
                              {/* Nodes HTML */}
                              <div className="absolute left-[20px] top-[40px] text-[8px] font-mono text-slate-500 bg-black/50 border border-slate-700 px-2 py-1 rounded">ERP Local</div>
                              <div className="absolute left-[20px] top-[115px] text-[8px] font-mono text-slate-500 bg-black/50 border border-slate-700 px-2 py-1 rounded">Ventas</div>
                              <div className="absolute left-[20px] top-[190px] text-[8px] font-mono text-slate-500 bg-black/50 border border-slate-700 px-2 py-1 rounded">Logística</div>
                              
                              <div className="absolute left-[175px] top-[100px] w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                              </div>
                              <div className="absolute left-[330px] top-[115px] text-[10px] font-mono text-indigo-400 bg-indigo-950/80 border border-indigo-500 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(99,102,241,0.5)]">Agent Layer</div>
                            </div>
                          )}

                          {/* RADIOSHACK GRAPH */}
                          {c.id === 'radioshack' && (
                            <div className="relative w-full max-w-sm aspect-video">
                              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 250">
                                <defs>
                                  <filter id="glowRadio" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                                </defs>
                                <path id="r1" d="M 50 125 C 100 125, 100 50, 150 50 L 250 50 C 300 50, 300 125, 350 125" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="r2" d="M 50 125 C 100 125, 100 200, 150 200 L 250 200 C 300 200, 300 125, 350 125" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <circle r="4" fill="#10B981" filter="url(#glowRadio)"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#r1" /></animateMotion></circle>
                                <circle r="4" fill="#10B981" filter="url(#glowRadio)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s"><mpath href="#r2" /></animateMotion></circle>
                              </svg>
                              <div className="absolute left-[20px] top-[115px] text-[8px] font-mono text-slate-500 bg-black/50 border border-slate-700 px-2 py-1 rounded">Usuario</div>
                              <div className="absolute left-[130px] top-[40px] text-[8px] font-mono text-emerald-500 bg-emerald-950/50 border border-emerald-800 px-2 py-1 rounded">Serverless API</div>
                              <div className="absolute left-[130px] top-[190px] text-[8px] font-mono text-emerald-500 bg-emerald-950/50 border border-emerald-800 px-2 py-1 rounded">Edge CDN</div>
                              <div className="absolute left-[330px] top-[115px] text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-500 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.5)]">Checkout</div>
                            </div>
                          )}

                          {/* LIFEMILES GRAPH */}
                          {c.id === 'lifemiles' && (
                            <div className="relative w-full max-w-sm aspect-video">
                              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 250">
                                <defs>
                                  <filter id="glowLife" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                                </defs>
                                <path id="l1" d="M 50 125 L 150 125" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="l2" d="M 150 125 C 200 125, 200 50, 250 50 L 350 50" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="l3" d="M 150 125 C 200 125, 200 125, 250 125 L 350 125" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <path id="l4" d="M 150 125 C 200 125, 200 200, 250 200 L 350 200" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <circle r="3" fill="#EF4444" filter="url(#glowLife)"><animateMotion dur="1s" repeatCount="indefinite"><mpath href="#l1" /></animateMotion></circle>
                                <circle r="3" fill="#EF4444" filter="url(#glowLife)"><animateMotion dur="2s" repeatCount="indefinite" begin="1s"><mpath href="#l2" /></animateMotion></circle>
                                <circle r="3" fill="#EF4444" filter="url(#glowLife)"><animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s"><mpath href="#l3" /></animateMotion></circle>
                                <circle r="3" fill="#EF4444" filter="url(#glowLife)"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0.8s"><mpath href="#l4" /></animateMotion></circle>
                              </svg>
                              <div className="absolute left-[130px] top-[110px] w-8 h-8 rounded bg-red-900/40 border border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                              </div>
                              <div className="absolute left-[20px] top-[115px] text-[8px] font-mono text-slate-500 bg-black/50 border border-slate-700 px-2 py-1 rounded">API Gateway</div>
                              <div className="absolute left-[270px] top-[40px] text-[8px] font-mono text-red-400 bg-red-950/50 border border-red-800 px-2 py-1 rounded">Microservice A</div>
                              <div className="absolute left-[270px] top-[115px] text-[8px] font-mono text-red-400 bg-red-950/50 border border-red-800 px-2 py-1 rounded">Microservice B</div>
                              <div className="absolute left-[270px] top-[190px] text-[8px] font-mono text-red-400 bg-red-950/50 border border-red-800 px-2 py-1 rounded">Microservice C</div>
                            </div>
                          )}

                          {/* IQOS GRAPH (Fallback for others) */}
                          {c.id !== 'bimbo' && c.id !== 'radioshack' && c.id !== 'lifemiles' && (
                            <div className="relative w-full max-w-sm aspect-video">
                              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 250">
                                <defs>
                                  <filter id="glowPurp" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                                </defs>
                                <path id="p1" d="M 200 50 C 200 150, 200 150, 200 200" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <circle r="4" fill="#A855F7" filter="url(#glowPurp)"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#p1" /></animateMotion></circle>
                              </svg>
                              <div className="absolute left-[170px] top-[20px] text-[10px] font-mono text-purple-400 bg-purple-950 border border-purple-500 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.5)]">Data Lake</div>
                              <div className="absolute left-[170px] top-[200px] text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-600 px-3 py-1.5 rounded">Analytics</div>
                            </div>
                          )}

                       </div>

                       {/* Sophisticated gradient overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#060A14] via-[#060A14]/40 to-transparent z-10 pointer-events-none"></div>
                       <div className="absolute inset-0 border-l border-white/[0.05] z-20 pointer-events-none"></div>
                    </div>
`;

txt = txt.replace(oldRightColumnRegex, newRightColumn);

// 2. REFACTOR HeroPromptEngine (Add SVG Flow background)
const oldHeroContainerRegex = /<div className="w-full max-w-xl mx-auto relative group perspective-1000 mt-10 lg:mt-0">/;

const newHeroContainer = `
    <div className="w-full max-w-4xl mx-auto relative group mt-10 lg:mt-0 flex justify-center">
      
      {/* Background Flowchart Network for Hero */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-60">
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 600">
          <defs>
            <filter id="glowHero" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
          </defs>
          {/* Paths emanating from terminal center (approx 500, 300) to external nodes */}
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
txt = txt.replace(oldHeroContainerRegex, newHeroContainer + '\n        {/* Add closing div at the end of HeroPromptEngine */}\n');

// We also need to add a closing </div> at the end of HeroPromptEngine since we wrapped it.
const endHeroRegex = /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\};\s*const HeroWithPrompt = /;
const endHeroReplacement = `      </div>\n      </div>\n      </div>\n    </div>\n  );\n};\n\n    const HeroWithPrompt = `;
txt = txt.replace(endHeroRegex, endHeroReplacement);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Global flowcharts injected to Hero and Case Studies.");
