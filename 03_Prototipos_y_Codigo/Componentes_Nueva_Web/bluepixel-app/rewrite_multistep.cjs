const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const start = txt.indexOf('const MultiStepContact =');
const end = txt.indexOf('const SolutionDrawer =', start);
const blockToReplace = txt.substring(start, end);

const cleanComponent = `const MultiStepContact = ({ preselectedPackage }) => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        company: '',
        role: '',
        phone: '',
        workflow: '',
        consentData: false,
        consentNewsletter: false
      });
      const [submitted, setSubmitted] = useState(false);

      const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
      };

      const handleNext = (e) => {
        e.preventDefault();
        setStep(prev => prev + 1);
      };

      const handleBack = () => {
        setStep(prev => prev - 1);
      };

      const handleSubmitFinal = (e) => {
        e.preventDefault();
        console.log("Submitting:", formData);
        setSubmitted(true);
      };

      return (
        <section id="contact-form" className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Fixed Title and Value Prop */}
            <div className="lg:w-5/12 lg:sticky lg:top-32">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 block">
                DIAGNÓSTICO TÉCNICO SIN COSTO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Completa el formulario<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                ¿Prefieres que revisemos tu operación? Llena los 3 pasos rápidos y un estratega técnico de BluePixel te entregará un diagnóstico de viabilidad y arquitectura en menos de 24 horas.
              </p>

              {/* Added trust signals (SLA) on the left side */}
              <div className="p-6 bg-navy-900/50 border border-white/[0.05] rounded-2xl space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Garantía de Confidencialidad</h4>
                    <p className="text-slate-500 text-xs mt-1">Tus datos y procesos internos están protegidos mediante NDA desde el primer minuto.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-blue-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Auditoría por Arquitectos</h4>
                    <p className="text-slate-500 text-xs mt-1">Tu caso es analizado por ingenieros y Tech Leads, no por equipos de ventas tradicionales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:w-7/12 w-full">
              {/* The Multi-Step Card */}
              <div className="bg-navy-900 border border-white/[0.08] rounded-[2rem] p-8 sm:p-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-blue-500/10"></div>
                
                <div className="relative z-10">
                  {/* Progress Indicator */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4 px-2">
                      <span className={\`transition-colors duration-500 \${step >= 1 ? 'text-blue-400 font-bold' : 'text-slate-600'}\`}>01. Tú</span>
                      <span className={\`transition-colors duration-500 \${step >= 2 ? 'text-blue-400 font-bold' : 'text-slate-600'}\`}>02. Empresa</span>
                      <span className={\`transition-colors duration-500 \${step === 3 ? 'text-blue-400 font-bold' : 'text-slate-600'}\`}>03. Fricción</span>
                    </div>
                    <div className="flex gap-2 w-full h-1.5 rounded-full overflow-hidden">
                      <div className={\`h-full transition-all duration-700 ease-in-out rounded-full \${step >= 1 ? 'w-1/3 bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-1/3 bg-white/[0.03]'}\`} />
                      <div className={\`h-full transition-all duration-700 ease-in-out rounded-full \${step >= 2 ? 'w-1/3 bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'w-1/3 bg-white/[0.03]'}\`} />
                      <div className={\`h-full transition-all duration-700 ease-in-out rounded-full \${step === 3 ? 'w-1/3 bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'w-1/3 bg-white/[0.03]'}\`} />
                    </div>
                  </div>

                  {!submitted ? (
                    <div>
                      {/* STEP 1 */}
                      {step === 1 && (
                        <form onSubmit={handleNext} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="text-2xl font-black text-white mb-2">Tus datos de contacto</h3>
                            <p className="text-slate-400 text-sm">Para saber con quién nos comunicamos directamente.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">NOMBRE COMPLETO</label>
                              <input required type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} placeholder="Ej. Roberto" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-navy-900/80 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 shadow-inner" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">CORREO CORPORATIVO</label>
                              <input required type="email" value={formData.workEmail} onChange={(e) => handleChange('workEmail', e.target.value)} placeholder="roberto@empresa.com" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-navy-900/80 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 shadow-inner" />
                            </div>
                          </div>
                          <div className="pt-4 border-t border-white/[0.04]">
                            <button type="submit" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Siguiente Paso</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <form onSubmit={handleNext} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="text-2xl font-black text-white mb-2">Datos de tu empresa</h3>
                            <p className="text-slate-400 text-sm">Para asignar al arquitecto ideal a tu sector operativo.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">NOMBRE DE LA EMPRESA</label>
                              <input required type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} placeholder="Ej. Grupo X" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">TU CARGO</label>
                              <input required type="text" value={formData.role} onChange={(e) => handleChange('role', e.target.value)} placeholder="Ej. Director de Operaciones" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" />
                            </div>
                          </div>
                          <div className="pt-8 flex items-center justify-between border-t border-white/[0.04]">
                            <button type="button" onClick={handleBack} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1] transition-colors">Atrás</button>
                            <button type="submit" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Continuar</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <form onSubmit={handleSubmitFinal} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="text-2xl font-black text-white mb-2">Cuello de botella técnico</h3>
                            <p className="text-slate-400 text-sm">Describe la fricción que deseas resolver.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">¿QUÉ FLUJO DE TRABAJO BUSCAS AGENTIZAR?</label>
                              <textarea required rows="5" value={formData.workflow} onChange={(e) => handleChange('workflow', e.target.value)} placeholder="Ej. Queremos automatizar la cotización..." className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none" />
                            </div>
                          </div>
                          <div className="pt-8 flex items-center justify-between border-t border-white/[0.04]">
                            <button type="button" onClick={handleBack} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1] transition-colors">Atrás</button>
                            <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Enviar Diagnóstico</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  ) : (
                    /* SUCCESS STATE */
                    <div className="text-center py-16 animate-fadeIn">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/20 to-emerald-400/5 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
                      <h4 className="text-3xl font-black text-white mb-4">Diagnóstico Recibido</h4>
                      <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-10">Gracias <strong className="text-white">{formData.fullName || 'por escribirnos'}</strong>. Un arquitecto te contactará en menos de 24 horas.</p>
                      <button onClick={() => { setSubmitted(false); setStep(1); }} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1]">Enviar nueva consulta</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </section>
      );
    };
`;

txt = txt.replace(blockToReplace, cleanComponent);
fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Completely replaced MultiStepContact with a robust, syntax-perfect 2-column component!");
