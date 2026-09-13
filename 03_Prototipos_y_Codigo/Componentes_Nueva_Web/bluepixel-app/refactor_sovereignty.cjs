const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const startIndex = txt.indexOf('const TechnicalSovereignty = () => {');
const endIndex = txt.indexOf('const App = () => {');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds");
    process.exit(1);
}

const newComponent = `const TechnicalSovereignty = () => {
      return (
        <section className="py-24 px-6 md:px-12 bg-gradient-to-t from-navy-950 to-navy-900 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Header left-aligned instead of centered to match asymmetric style */}
            <div className="max-w-3xl mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-4 block">
                CERO LOCK-IN · SOBERANÍA ABSOLUTA
              </span>
              <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-4xl lg:text-5xl">
                Tu infraestructura. Tus datos. Tu código fuente<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                Construimos agentes de IA bajo un principio fundacional innegociable: tú eres el dueño absoluto de la tecnología. No vendemos "cajas negras" ni cobramos licencias abusivas por usuario.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Card 1: Wide Card (Span 2 columns) */}
              <div className="lg:col-span-2 bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-colors group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-colors"></div>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNyw5OSwyMzUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                    <span className="text-2xl text-blue-400">☁️</span>
                  </div>
                  <h3 className="mb-4 font-bold font-display text-2xl md:text-3xl tracking-tight leading-[1.2]">Despliegue nativo en tu VPC</h3>
                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
                  </p>
                </div>
              </div>

              {/* Card 2: Square */}
              <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <span className="text-xl">🔓</span>
                </div>
                <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Propiedad del Código</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
                  Al finalizar la fase de desarrollo (Build), te entregamos el 100% de los derechos intelectuales y el código fuente. Eres completamente libre de mantenerlo in-house con tu equipo de ingeniería o contratar nuestra póliza de Mantenimiento.
                </p>
              </div>

              {/* Card 3: Square */}
              <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Modelos Blindados</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
                  Utilizamos instancias empresariales de LLMs con políticas estrictas de privacidad (Zero Data Retention). Ninguna conversación confidencial o dato de tus clientes se usará jamás para entrenar modelos públicos.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };

    `;

const finalTxt = txt.substring(0, startIndex) + newComponent + txt.substring(endIndex);
fs.writeFileSync('../index.html', finalTxt, 'utf8');
console.log("Bento Grid implemented!");
