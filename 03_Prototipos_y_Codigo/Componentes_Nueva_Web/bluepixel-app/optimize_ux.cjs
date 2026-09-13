const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Shorten PRESETS
txt = txt.replace(/'Cotizaciones complejas en Excel que tardan horas y nos hacen perder ventas\.'/, "'Cotizaciones complejas en Excel.'");
txt = txt.replace(/'Conciliación manual de miles de facturas y pagos contra el ERP a fin de mes\.'/, "'Conciliación contable masiva.'");
txt = txt.replace(/'Alta tasa de abandono \(68\%\) en el flujo de pago de la plataforma digital\.'/, "'Fuga de clientes en el checkout.'");
txt = txt.replace(/'Automatizar atención en WhatsApp sin que la IA invente datos falsos \(alucinaciones\)\.'/, "'Atención al cliente sin alucinaciones.'");

// 2. Speed up Hero Animation
txt = txt.replace(/setTimeout\(\(\) => \{\s*setIsPaused\(false\);\s*setIsDeleting\(true\);\s*\}, 2500\);/g, 'setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1500);');
txt = txt.replace(/setTimeout\(\(\) => \{\s*setPlaceholderText\(currentPrompt\.substring\(0, placeholderText\.length - 2\)\);\s*\}, 15\);/g, 'setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2)); }, 5);');
txt = txt.replace(/setTimeout\(\(\) => \{\s*setPlaceholderText\(currentPrompt\.substring\(0, placeholderText\.length \+ 1\)\);\s*\}, 40\);/g, 'setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1)); }, 15);');

// 3. Hide AgentTerminalDemo
txt = txt.replace(/<AgentTerminalDemo \/>/g, '{/* <AgentTerminalDemo /> */}');

// 4. Improve Contrast
txt = txt.replace(/className="py-24 px-6 md:px-12 bg-navy-900\/40 border-t border-white\/\[0\.08\]"/g, 'className="py-24 px-6 md:px-12 bg-gradient-to-b from-navy-950 to-navy-900 border-t border-white/[0.08]"');
txt = txt.replace(/className="py-24 px-6 md:px-12 bg-\[\#060A14\] border-t border-white\/\[0\.04\]"/g, 'className="py-24 px-6 md:px-12 bg-gradient-to-t from-navy-950 to-navy-900 border-t border-white/[0.04]"');

// 5. Button micro-copy
txt = txt.replace(/Solicitar Diagnóstico Operativo \(Sin Costo\)/g, 'Auditar mi operación');
txt = txt.replace(/Personas en tareas repetitivas \/ back-office/g, 'Tamaño del equipo operativo');

// 6. Convert Contact to Modal
// Inject custom scrollbar style
if (!txt.includes('.custom-scrollbar::-webkit-scrollbar')) {
    txt = txt.replace('</style>', `
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
  </style>`);
}

// Modify App component
const appRegex = /const App = \(\) => \{[\s\S]*?return \([\s\S]*?\}\);/;
const newApp = `const App = () => {
      const [selectedSolution, setSelectedSolution] = useState(null);
      const [isContactOpen, setIsContactOpen] = useState(false);
      const [preselectedPkg, setPreselectedPkg] = useState(null);

      const scrollToForm = (pkgName) => {
        if (pkgName) setPreselectedPkg(pkgName);
        setIsContactOpen(true);
      };

      return (
        <div className="min-h-screen">
          <Navbar onOpenContact={() => scrollToForm()} />
          <HeroWithPrompt 
            onSelectSolution={(sol) => setSelectedSolution(sol)} 
            onOpenContact={() => scrollToForm()}
          />
          <SocialProofSection />
          <WorkflowTeardown />
          {/* <AgentTerminalDemo /> */}
          <AgenticTechStack />
          <TechnicalSovereignty />
          <TechPartners />
          <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
          <ROICalculator onOpenContact={(data) => scrollToForm(data)} />
          <ThreeWaysToWork onSelectPackage={(pkg) => scrollToForm(pkg)} />
          <EngineeringLeadership />
          <PostContactSLA />
          <FinalCTA onOpenContact={() => scrollToForm()} />
          
          <SolutionDrawer 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
            onOpenContact={() => scrollToForm()} 
          />
          
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
              <div className="bg-navy-900 border border-white/[0.08] rounded-2xl w-full max-w-4xl relative overflow-hidden my-auto shadow-2xl">
                <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 z-50 text-sm transition-colors">✕</button>
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                  <MultiStepContact preselectedPackage={preselectedPkg} />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };`;

txt = txt.replace(appRegex, newApp);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("UX Optimizations applied successfully!");
