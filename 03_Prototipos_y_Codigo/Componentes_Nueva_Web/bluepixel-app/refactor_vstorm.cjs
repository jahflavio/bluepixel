const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Find WorkflowTeardown
const compStart = txt.indexOf('const WorkflowTeardown = () => {');
const compEnd = txt.indexOf('};', compStart) + 2;

const oldBlock = txt.substring(compStart, compEnd);

const newBlock = `const WorkflowTeardown = () => {
      const [activeTab, setActiveTab] = useState('legacy');
      const [progress, setProgress] = useState(0);
      const [isHovered, setIsHovered] = useState(false);

      useEffect(() => {
        if (isHovered) return;
        
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              if (activeTab === 'legacy') {
                setActiveTab('bluepixel');
                return 0;
              } else {
                return 100; // Stop at bluepixel
              }
            }
            return prev + 0.3; // Approx 15 seconds per tab
          });
        }, 50);

        return () => clearInterval(interval);
      }, [activeTab, isHovered]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
        setProgress(0);
      };

      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.06] relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                DIAGNÓSTICO OPERATIVO FORENSE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mt-4 mb-5">
                El abismo entre un proceso manual y una capa agentizada<span className="text-blue-500">.</span>
              </h2>
            </div>

            {/* Vstorm-style Container */}
            <div 
              className="bg-[#0A0F1D] border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl relative"
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
                <div className="inline-flex items-center p-1 bg-[#060A14] border border-white/[0.08] rounded-full shadow-inner">
                  <button 
                    onClick={() => handleTabClick('legacy')}
                    className={\`px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 \${activeTab === 'legacy' ? 'bg-[#131D35] text-white shadow-lg border border-white/[0.08]' : 'text-slate-500 hover:text-slate-300'}\`}
                  >
                    Proceso Manual
                  </button>
                  <button 
                    onClick={() => handleTabClick('bluepixel')}
                    className={\`px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 \${activeTab === 'bluepixel' ? 'bg-blue-600/10 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)] border border-emerald-500/20' : 'text-slate-500 hover:text-slate-300'}\`}
                  >
                    Con BluePixel
                  </button>
                </div>
              </div>

              {/* Dynamic Content Area */}
              <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-b from-transparent to-navy-950/30">
                
                {/* Legacy Tab */}
                <div className={\`absolute inset-0 p-8 md:p-16 transition-all duration-700 ease-in-out flex flex-col justify-center \${activeTab === 'legacy' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'}\`}>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    <div className="md:w-5/12 text-center md:text-left">
                      <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-3">Tasa de Error Operativo</span>
                      <div className="text-7xl md:text-8xl font-black text-white tracking-tighter">18<span className="text-4xl text-red-500">%</span></div>
                      <div className="mt-5 text-xs font-mono text-slate-400 bg-red-500/10 inline-block px-4 py-1.5 rounded-full border border-red-500/20">48 hrs de ciclo</div>
                    </div>
                    <div className="md:w-7/12 space-y-5">
                      <h3 className="text-2xl font-bold text-white leading-tight">Traspasos manuales y cuellos de botella humanos</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        Peticiones recibidas por correo sin estandarización. El ejecutivo teclea datos a mano en hojas de cálculo con fórmulas desactualizadas. Se pierde tiempo en llamadas internas para verificar reglas de negocio, generando <strong className="text-red-400 font-semibold">$1.2M MXN en pérdidas anuales</strong> por fricción.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BluePixel Tab */}
                <div className={\`absolute inset-0 p-8 md:p-16 transition-all duration-700 ease-in-out flex flex-col justify-center \${activeTab === 'bluepixel' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-8 pointer-events-none z-0'}\`}>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    <div className="md:w-5/12 text-center md:text-left">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-3">Precisión Operativa</span>
                      <div className="text-7xl md:text-8xl font-black text-white tracking-tighter">99<span className="text-4xl text-emerald-400">.9%</span></div>
                      <div className="mt-5 text-xs font-mono text-blue-300 bg-blue-500/10 inline-block px-4 py-1.5 rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">90 segundos de ciclo</div>
                    </div>
                    <div className="md:w-7/12 space-y-5">
                      <h3 className="text-2xl font-bold text-white leading-tight">Ejecución instantánea con validación determinística</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        El servidor MCP (Model Context Protocol) consulta el stock real y las políticas crediticias directamente en el ERP (SAP/Salesforce). Se genera la cotización formal en PDF al instante, asegurando un <strong className="text-emerald-400 font-semibold">+340% de ROI proyectado</strong> el primer año.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            <p className="text-center text-xs font-mono text-slate-500 mt-6">Pasa el cursor sobre el cuadro para pausar la animación</p>
          </div>
        </section>
      );
    };`;

txt = txt.replace(oldBlock, newBlock);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Replaced WorkflowTeardown with Vstorm-style dynamic component!");
