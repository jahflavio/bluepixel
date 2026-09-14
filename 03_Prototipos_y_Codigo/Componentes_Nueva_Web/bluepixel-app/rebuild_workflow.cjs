const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const newWorkflowTeardown = `
    const WorkflowTeardown = () => {
      const [activeTab, setActiveTab] = useState('bluepixel'); // Start with the pretty one

      return (
        <section className="py-24 px-6 md:px-12 bg-[#02040A] border-t border-white/[0.05] relative overflow-hidden">
          {/* Hexagonal Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 block">
                DIAGNÓSTICO Y ARQUITECTURA
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
                El abismo entre un proceso manual y una <br className="hidden md:block"/> capa agentizada<span className="text-emerald-500">.</span>
              </h2>
            </div>

            {/* Segmented Control */}
            <div className="flex justify-center mb-12 relative z-20">
              <div className="inline-flex flex-wrap justify-center p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-xl">
                <button 
                  onClick={() => setActiveTab('legacy')}
                  className={\`relative px-6 py-3 rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 \${activeTab === 'legacy' ? 'text-red-400' : 'text-slate-500 hover:text-slate-300'}\`}
                >
                  {activeTab === 'legacy' && (
                    <div className="absolute inset-0 bg-red-500/10 border border-red-500/20 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.1)]"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Flujo Manual</span>
                </button>
                <button 
                  onClick={() => setActiveTab('bluepixel')}
                  className={\`relative px-6 py-3 rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 \${activeTab === 'bluepixel' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}\`}
                >
                  {activeTab === 'bluepixel' && (
                    <div className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.1)]"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Con BluePixel</span>
                </button>
              </div>
            </div>

            {/* Diagram Container */}
            <div className="relative w-full max-w-4xl mx-auto h-[600px] bg-[#060A14] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center perspective-1000">
              
              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

              {/* BLUEPIXEL TAB: High-end Node Diagram */}
              <div className={\`absolute inset-0 w-full h-full p-8 transition-all duration-700 ease-in-out flex flex-col items-center justify-center \${activeTab === 'bluepixel' ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-0'}\`}>
                <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
                
                <div className="relative w-full max-w-2xl flex flex-col items-center">
                  
                  {/* Top Node */}
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">ACTA CONSTITUTIVA RECIBIDA</span>
                  <div className="w-16 h-16 rounded-full bg-[#1A2540] border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center relative z-20">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>

                  {/* Connecting Lines */}
                  <div className="relative w-full h-16 my-4">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path d="M50% 0 L50% 100%" stroke="#10B981" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                      <path d="M50% 20% L15% 100%" stroke="#10B981" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                      <path d="M50% 20% L85% 100%" stroke="#10B981" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                    </svg>
                  </div>

                  {/* 3 Middle Nodes */}
                  <div className="flex w-full justify-between items-center relative z-20 mb-12">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1628] border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest text-center">SAT OK<br/>(Lista Limpia)</span>
                    </div>
                    {/* Node 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1628] border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">OFAC Validado</span>
                    </div>
                    {/* Node 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F1628] border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a2 2 0 01-2 2H7a2 2 0 01-2-2m5-4V6a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6" /></svg>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">KYC Aprobado</span>
                    </div>
                  </div>

                  {/* Bottom Node */}
                  <div className="w-full max-w-lg bg-[#0F1628] border border-emerald-500/50 rounded-2xl py-6 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative z-20">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-xl font-display font-bold text-emerald-400">Dictamen de Riesgo</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Riesgo Bajo - Proveedor Listo</span>
                  </div>

                </div>
              </div>

              {/* LEGACY TAB: Chaotic Red Diagram */}
              <div className={\`absolute inset-0 w-full h-full p-8 transition-all duration-700 ease-in-out flex flex-col items-center justify-center \${activeTab === 'legacy' ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-0'}\`}>
                <div className="absolute inset-0 bg-red-600/5 blur-[100px] pointer-events-none"></div>
                
                <div className="relative w-full max-w-2xl flex flex-col items-center">
                  
                  {/* Top Node */}
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Recepción Manual (Email)</span>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-600 flex items-center justify-center relative z-20">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>

                  {/* Chaotic Lines & Steps */}
                  <div className="w-px h-10 bg-slate-700 border-l border-dashed border-slate-500 my-2"></div>
                  
                  <div className="w-full max-w-xs bg-slate-800/30 border border-slate-700 rounded-lg py-3 flex justify-center z-20 relative">
                     <span className="text-[10px] font-mono text-slate-400">Análisis Humano (Tarda 48hrs)</span>
                     <div className="absolute -right-16 top-2 animate-pulse flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500"></span>
                       <span className="text-[9px] font-mono text-red-500 uppercase">Cuello de Botella</span>
                     </div>
                  </div>

                  <div className="w-px h-10 bg-slate-700 border-l border-dashed border-slate-500 my-2"></div>

                  <div className="w-full max-w-xs bg-red-950/30 border border-red-900/50 rounded-lg py-3 flex justify-center z-20">
                     <span className="text-[10px] font-mono text-red-400">Captura en Excel (Errores de tipeo)</span>
                  </div>

                  <div className="w-px h-10 bg-slate-700 border-l border-dashed border-slate-500 my-2"></div>

                  <div className="w-full max-w-xs bg-slate-800/30 border border-slate-700 rounded-lg py-3 flex justify-center z-20 relative">
                     <span className="text-[10px] font-mono text-slate-400">Correos Internos para Validar</span>
                     <div className="absolute -left-20 top-2 animate-pulse flex items-center gap-2">
                       <span className="text-[9px] font-mono text-yellow-500 uppercase">Silo de Info</span>
                       <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                     </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      );
    };
`;

const regexWorkflow = /const WorkflowTeardown = \(\) => \{[\s\S]*?const AgenticTechStack =/;
txt = txt.replace(regexWorkflow, newWorkflowTeardown + '\n    const AgenticTechStack =');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Workflow Teardown CSS flowcharts injected.");
