const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Inyectar SVG styles (keyframes) en el head
const styleTag = `
  <style>
    * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
    code, .font-mono { font-family: 'JetBrains Mono', monospace; }
    
    @keyframes flow-dash {
      to { stroke-dashoffset: -100; }
    }
    .animate-flow { animation: flow-dash 2s linear infinite; }
    .animate-flow-slow { animation: flow-dash 4s linear infinite; }
  </style>
`;
if (txt.includes('<style>')) {
  txt = txt.replace(/<style>[\s\S]*?<\/style>/, styleTag);
}

// 2. Refactor Workflow Teardown (Dictamen de Riesgo)
const oldLinesWorkflow = /<div className="relative w-full h-16 my-4">[\s\S]*?<\/div>/;
const newLinesWorkflow = `
                  {/* Conectores Curvos con Flujo de Datos */}
                  <div className="relative w-full h-20 my-4">
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100">
                      <defs>
                        <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      
                      {/* Trazos base punteados */}
                      <path id="pathCenter" d="M 500 0 C 500 50, 500 50, 500 100" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                      <path id="pathLeft" d="M 500 0 C 500 80, 150 20, 150 100" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                      <path id="pathRight" d="M 500 0 C 500 80, 850 20, 850 100" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                      
                      {/* Puntos de datos fluyendo (Animación) */}
                      <circle r="4" fill="#10B981" filter="url(#glowGreen)">
                        <animateMotion dur="2s" repeatCount="indefinite"><mpath href="#pathCenter" /></animateMotion>
                      </circle>
                      <circle r="4" fill="#10B981" filter="url(#glowGreen)">
                        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#pathLeft" /></animateMotion>
                      </circle>
                      <circle r="4" fill="#10B981" filter="url(#glowGreen)">
                        <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.2s"><mpath href="#pathRight" /></animateMotion>
                      </circle>
                    </svg>
                  </div>
`;
txt = txt.replace(oldLinesWorkflow, newLinesWorkflow);

// 3. Refactor ThreeWaysToWork (Methodology Timeline)
const oldTimelineMethodology = /<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">[\s\S]*?<\/svg>/;
const newTimelineMethodology = `
                {/* Curved Dashed Timeline with Flowing Data */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 600">
                  <defs>
                    <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Curva Sinuosa Principal (S-Shape) punteada */}
                  <path id="mainTimeline" d="M 100 540 C 300 540, 100 420, 300 420 C 500 420, 300 300, 500 300 C 700 300, 500 180, 700 180 C 900 180, 700 60, 900 60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="8 8" fill="none" />
                  
                  {/* Segmento resaltado fijo (POC) */}
                  <path d="M 500 300 C 700 300, 500 180, 700 180" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 8" fill="none" filter="url(#glowBlue)" opacity="0.5" className="animate-flow" />

                  {/* Partículas de datos fluyendo por toda la línea */}
                  <circle r="3" fill="#60A5FA" filter="url(#glowBlue)">
                    <animateMotion dur="8s" repeatCount="indefinite" begin="0s"><mpath href="#mainTimeline" /></animateMotion>
                  </circle>
                  <circle r="3" fill="#3B82F6" filter="url(#glowBlue)">
                    <animateMotion dur="8s" repeatCount="indefinite" begin="2.6s"><mpath href="#mainTimeline" /></animateMotion>
                  </circle>
                  <circle r="3" fill="#818CF8" filter="url(#glowBlue)">
                    <animateMotion dur="8s" repeatCount="indefinite" begin="5.3s"><mpath href="#mainTimeline" /></animateMotion>
                  </circle>
                </svg>
`;
txt = txt.replace(oldTimelineMethodology, newTimelineMethodology);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("SVG Curves and Animations injected successfully.");
