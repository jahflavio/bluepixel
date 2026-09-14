const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const footerCode = `
    const Footer = () => (
      <footer className="bg-[#02040A] border-t border-white/[0.05] pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 relative z-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  BP
                </div>
                <span className="font-display font-black text-xl tracking-tight text-white">BluePixel<span className="text-blue-500">.</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ingeniería de Agentes IA &amp; Arquitecturas Future-Proof. Transformamos corporativos en ecosistemas algorítmicos resilientes.
              </p>
              <div className="flex items-center gap-3">
                {/* Social Placeholders */}
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Plataformas</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Sistemas RAG Avanzados</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Orquestación Multi-Agente (Swarm)</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Infraestructura LLMOps</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Modernización de Core Legacy</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Compañía</h3>
              <ul className="space-y-4">
                <li><a href="#casos" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Casos de Éxito</a></li>
                <li><a href="#metodologia" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Metodología de Implementación</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Transparencia Técnica</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Careers / Hub de Talento</a></li>
              </ul>
            </div>

            {/* Compliance Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Compliance &amp; Privacidad</h3>
              <ul className="space-y-4 mb-6">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Política de Privacidad de Datos</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Términos de Servicio API</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">SLA de Soporte Enterprise</a></li>
              </ul>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="text-white text-xs font-bold mb-1">Enterprise Grade Security</p>
                  <p className="text-slate-500 text-[10px] leading-tight">Gobernanza estricta. Cero entrenamiento de modelos con su IP.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} BluePixel. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-slate-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Sistemas operando al 100%
              </span>
              <span className="text-slate-600 text-xs">Ciudad de México / Global</span>
            </div>
          </div>
        </div>
      </footer>
    );
`;

// Insert the definition right before 'const App = () => {'
if (!txt.includes('const Footer = () => (')) {
    txt = txt.replace('const App = () => {', footerCode + '\n    const App = () => {');
}

// Insert `<Footer />` inside `App` right after `<FinalCTA ... />`
const targetAppTag = '<FinalCTA onOpenContact={() => scrollToForm()} />';
if (txt.includes(targetAppTag)) {
    txt = txt.replace(targetAppTag, targetAppTag + '\n          <Footer />');
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Footer injected successfully.");
} else {
    console.log("Could not find FinalCTA in App.");
}
