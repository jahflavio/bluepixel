const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Define the TechnicalSovereignty component
const sovereigntyComponent = `
    // Soberanía Técnica y Cero Lock-in (Estrategia B2B)
    const TechnicalSovereignty = () => {
      return (
        <section className="py-24 px-6 md:px-12 bg-[#060A14] border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-4 block">
                CERO LOCK-IN · SOBERANÍA ABSOLUTA
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Tu infraestructura. Tus datos. Tu código fuente<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                Construimos agentes de IA bajo un principio fundacional innegociable: tú eres el dueño absoluto de la tecnología. No vendemos "cajas negras" ni cobramos licencias abusivas por usuario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-900 border border-white/[0.06] rounded-3xl p-8 hover:border-blue-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Despliegue en tu VPC</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad.
                </p>
              </div>

              <div className="bg-navy-900 border border-white/[0.06] rounded-3xl p-8 hover:border-purple-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-xl">🔓</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Propiedad del Código</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Al finalizar la fase de desarrollo (Build), te entregamos el 100% de los derechos y el código fuente. Eres libre de mantenerlo in-house o contratar nuestra póliza de Mantenimiento.
                </p>
              </div>

              <div className="bg-navy-900 border border-white/[0.06] rounded-3xl p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Modelos Blindados</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Utilizamos instancias empresariales de LLMs con políticas estrictas de privacidad (Zero Data Retention). Ninguna conversación de tus clientes se usará para entrenar modelos públicos.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const App = () => {`;

// Inject component right before App
txt = txt.replace('const App = () => {', sovereigntyComponent);

// 2. Modify the return block to include TechnicalSovereignty and PostContactSLA
const appStart = txt.indexOf('const App = () => {');
const returnStart = txt.indexOf('return (', appStart);
const returnEnd = txt.indexOf(');', returnStart);

const oldReturnBlock = txt.substring(returnStart, returnEnd + 2);

const newReturnBlock = `return (
        <div className="min-h-screen">
          <Navbar onOpenContact={() => scrollToForm()} />
          <HeroWithPrompt 
            onSelectSolution={(sol) => setSelectedSolution(sol)} 
            onOpenContact={() => scrollToForm()}
          />
          <SocialProofSection />
          <WorkflowTeardown />
          <AgentTerminalDemo />
          <AgenticTechStack />
          <TechnicalSovereignty />
          <TechPartners />
          <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
          <ROICalculator onOpenContact={(data) => scrollToForm(data)} />
          <ThreeWaysToWork onSelectPackage={(pkg) => scrollToForm(pkg)} />
          <EngineeringLeadership />
          <PostContactSLA />
          <FinalCTA onOpenContact={() => scrollToForm()} />
          
          <MultiStepContact />
          <SolutionDrawer 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
            onOpenContact={() => scrollToForm()} 
          />
        </div>
      );`;

txt = txt.replace(oldReturnBlock, newReturnBlock);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Strategy alignment successfully injected!");
