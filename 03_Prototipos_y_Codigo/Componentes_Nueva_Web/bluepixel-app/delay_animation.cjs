const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const start = txt.indexOf('const WorkflowTeardown = () => {');
const end = txt.indexOf('const AgenticTechStack =', start);

if (start === -1 || end === -1) {
    console.error("Could not find WorkflowTeardown boundaries.");
    process.exit(1);
}

// Ensure we don't grab the comment above AgenticTechStack
const blockToReplace = txt.substring(start, txt.lastIndexOf('// Tech Stack & Ecosystem', end));

const cleanComponent = `const WorkflowTeardown = () => {
      const [activeTab, setActiveTab] = useState('legacy');
      const [progress, setProgress] = useState(0);
      const [isHovered, setIsHovered] = useState(false);
      const [isVisible, setIsVisible] = useState(false);
      const sectionRef = React.useRef(null);

      // Intersection Observer to detect when the section is on screen
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              // Optional: reset if you want it to restart when scrolled out and back in
              // setIsVisible(false); 
              // setProgress(0);
              // setActiveTab('legacy');
            }
          },
          { threshold: 0.3 } // Trigger when 30% of it is visible
        );

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }

        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      }, []);

      // Timer logic
      useEffect(() => {
        // Only run if it's visible on screen and not hovered
        if (!isVisible || isHovered) return;
        
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              if (activeTab === 'legacy') {
                setActiveTab('bluepixel');
                return 0;
              } else {
                return 100;
              }
            }
            return prev + 0.85; // Approx 6 seconds per tab
          });
        }, 50);

        return () => clearInterval(interval);
      }, [activeTab, isHovered, isVisible]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
        setProgress(0);
      };

      return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.06] relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Fixed/Sticky Title and Description (Vstorm Layout) */}
            <div className="lg:w-4/12 lg:sticky lg:top-32">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold mb-4 block">
                DIAGNÓSTICO OPERATIVO FORENSE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                El abismo entre un proceso manual y una capa agentizada<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                La mayoría de los proyectos de IA fracasan porque se enfocan en "chatbots" en lugar de infraestructura. En BluePixel, auditamos tus cuellos de botella antes de escribir una sola línea de código.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Nuestros agentes determinísticos (Model Context Protocol) transforman la fricción humana de días en una ejecución instantánea y auditable.
              </p>
            </div>

            {/* Right Column: Interactive Tab Card + Secondary Card */}
            <div className="lg:w-8/12 flex flex-col gap-8 w-full">
              
              {/* 1. Main Interactive Card */}
              <div 
                className="bg-[#0A0F1D] border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl relative w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Progress Line */}
                <div className="h-1 w-full bg-navy-950 absolute top-0 left-0 z-20">
                  <div 
                    className={\`h-full transition-all duration-75 \${activeTab === 'legacy' ? 'bg-red-500' : 'bg-emerald-400'}\`}
                    style={{ width: \`\${progress}%\` }}
                  ></div>
                </div>

                {/* Header & Tabs */}
                <div className="px-6 md:px-12 py-8 flex justify-center border-b border-white/[0.05]">
                  <div className="inline-flex items-center p-1 bg-[#060A14] border border-white/[0.08] rounded-full shadow-inner w-full sm:w-auto overflow-x-auto">
                    <button 
                      onClick={() => handleTabClick('legacy')}
                      className={\`flex-1 sm:flex-none px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 \${activeTab === 'legacy' ? 'bg-[#131D35] text-white shadow-lg border border-white/[0.08]' : 'text-slate-500 hover:text-slate-300'}\`}
                    >
                      Proceso Manual
                    </button>
                    <button 
                      onClick={() => handleTabClick('bluepixel')}
                      className={\`flex-1 sm:flex-none px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 \${activeTab === 'bluepixel' ? 'bg-blue-600/10 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)] border border-emerald-500/20' : 'text-slate-500 hover:text-slate-300'}\`}
                    >
                      Con BluePixel
                    </button>
                  </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-b from-transparent to-navy-950/30">
                  
                  {/* Legacy Tab */}
                  <div className={\`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out flex flex-col justify-center \${activeTab === 'legacy' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'}\`}>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="md:w-5/12">
                        <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-2">Error Operativo</span>
                        <div className="text-7xl font-black text-white tracking-tighter">18<span className="text-4xl text-red-500">%</span></div>
                      </div>
                      <div className="md:w-7/12 space-y-4">
                        <h3 className="text-xl font-bold text-white leading-tight">Cuellos de botella humanos</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          El ejecutivo teclea datos a mano en hojas de cálculo con fórmulas desactualizadas. Se pierde tiempo en llamadas internas para verificar reglas de negocio, generando <strong className="text-red-400 font-semibold">$1.2M MXN en pérdidas anuales</strong> por fricción.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BluePixel Tab */}
                  <div className={\`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out flex flex-col justify-center \${activeTab === 'bluepixel' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-8 pointer-events-none z-0'}\`}>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="md:w-5/12">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">Precisión</span>
                        <div className="text-7xl font-black text-white tracking-tighter">99<span className="text-4xl text-emerald-400">.9%</span></div>
                      </div>
                      <div className="md:w-7/12 space-y-4">
                        <h3 className="text-xl font-bold text-white leading-tight">Ejecución determinística</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">
                          El servidor MCP consulta el stock real directamente en el ERP (SAP/Salesforce). Se genera la cotización en PDF al instante, asegurando un <strong className="text-emerald-400 font-semibold">+340% de ROI proyectado</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. Secondary Static Card */}
              <div className="bg-[#0A0F1D]/40 border border-white/[0.04] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center hover:bg-[#0A0F1D]/80 hover:border-white/[0.1] transition-colors">
                <div className="text-5xl font-black text-white mb-4">340<span className="text-blue-500">%</span></div>
                <h3 className="text-lg font-bold text-white mb-3">Retorno de inversión (ROI) documentado</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  BluePixel destila patrones arquitectónicos exitosos de despliegues en producción para el sector logístico, fintech y enterprise SaaS. No experimentamos con tu operación; replicamos lo que ya funciona y lo adaptamos a tus sistemas legacy.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };
`;

txt = txt.replace(blockToReplace, cleanComponent);
fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Added IntersectionObserver to WorkflowTeardown!");
