const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const startIndex = txt.indexOf('const CaseStudiesSection =');
const endIndex = txt.indexOf('const EngineeringLeadership =');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find bounds");
    process.exit(1);
}

const newComponent = `const CaseStudiesSection = ({ onOpenCase }) => {
      const cases = [
        {
          id: 'bimbo',
          client: 'Grupo Bimbo',
          industry: 'Consumo Masivo / Global',
          title: 'Estandarización analítica y aplicaciones operativas para miles de colaboradores',
          kpi: '+40%',
          kpiLabel: 'Productividad Directiva',
          desc: 'Diseño y desarrollo de plataformas de analítica de datos e interfaces internas para estandarizar la toma de decisiones directivas en múltiples regiones.',
          tags: ['Data & Analytics', 'Enterprise UX', 'Custom Software']
        },
        {
          id: 'radioshack',
          client: 'RadioShack',
          industry: 'Retail & E-commerce',
          title: 'Reinvención transaccional de comercio digital y reducción de fricción de compra',
          kpi: '-60%',
          kpiLabel: 'Fricción de Pago',
          desc: 'Rediseño integral de la plataforma de ventas y arquitectura transaccional para optimizar conversión, reduciendo fricción cognitiva en carritos de compra.',
          tags: ['E-Commerce', 'Mobile Apps', 'UX Redesign']
        },
        {
          id: 'lifemiles',
          client: 'LifeMiles / Avianca',
          industry: 'Travel & Loyalty LATAM',
          title: 'Optimización de experiencia en uno de los mayores programas de lealtad de LATAM',
          kpi: '+28%',
          kpiLabel: 'Retención Digital',
          desc: 'Rediseño de flujos críticos de usuario y pasarelas de redención para reducir abandonos y maximizar retención de clientes en entornos móviles.',
          tags: ['Loyalty Systems', 'Behavioral UX', 'Mobile First']
        },
        {
          id: 'frmedical',
          client: 'FR Medical Diagnostics',
          industry: 'HealthTech & Logística',
          title: 'Enjambre de agentes IA para cotización y despacho en tiempo real',
          kpi: '3 min',
          kpiLabel: 'En lugar de 48 horas',
          desc: 'Implementación de servidores MCP y agentes autónomos para calcular cotizaciones médicas complejas y validar inventario hospitalario 24/7.',
          tags: ['Agentes IA', 'MCP Protocol', 'Cloud Serverless']
        }
      ];

      const [activeIndex, setActiveIndex] = useState(0);
      const activeCase = cases[activeIndex];

      return (
        <section id="case-studies" className="py-24 px-6 md:px-12 bg-gradient-to-b from-navy-950 to-navy-900 border-t border-white/[0.08] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold">
                CASOS DE ÉXITO AUDITADOS
              </span>
              <h2 className="mt-3 mb-4 font-black font-display tracking-tight leading-[1.15] text-3xl md:text-4xl lg:text-5xl">
                Resultados medibles a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">escala corporativa</span>
              </h2>
            </div>

            {/* Interactive Showcase Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Navigation Tabs */}
              <div className="lg:w-1/3 flex flex-col gap-3">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveIndex(idx)}
                    className={\`text-left p-6 rounded-2xl border transition-all duration-300 \${activeIndex === idx ? 'bg-navy-800 border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]' : 'bg-transparent border-transparent hover:bg-white/[0.02] opacity-50 hover:opacity-100'}\`}
                  >
                    <h3 className={\`font-bold font-display text-xl mb-1 transition-colors \${activeIndex === idx ? 'text-white' : 'text-slate-400'}\`}>{c.client}</h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{c.industry}</p>
                  </button>
                ))}
              </div>

              {/* Right Column: Deep Dive Panel */}
              <div className="lg:w-2/3 relative h-[600px]">
                {/* We map over cases to render them all, but hide inactive ones with opacity for smooth fade transitions */}
                {cases.map((c, idx) => (
                  <div 
                    key={c.id} 
                    className={\`absolute inset-0 h-full bg-[#060A14]/80 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 \${activeIndex === idx ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}\`}
                  >
                    
                    {/* Dynamic Background Glow based on active case */}
                    <div className={\`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 \${idx === 0 ? 'bg-blue-600/30' : idx === 1 ? 'bg-red-600/20' : idx === 2 ? 'bg-purple-600/20' : 'bg-emerald-600/20'}\`}></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* KPI Section */}
                      <div className="mb-8 border-b border-white/[0.05] pb-8">
                         <div className={\`font-black font-display text-6xl md:text-8xl tracking-tighter mb-2 transition-colors duration-700 \${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-red-400' : idx === 2 ? 'text-purple-400' : 'text-emerald-400'}\`}>
                           {c.kpi}
                         </div>
                         <div className="text-slate-400 text-sm md:text-base font-mono uppercase tracking-widest">{c.kpiLabel}</div>
                      </div>

                      {/* Challenge & Solution */}
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{c.title}</h4>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                        {c.desc}
                      </p>

                      {/* Footer: Tags & Action */}
                      <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {c.tags.map(tag => (
                            <span key={tag} className="bg-white/[0.03] border border-white/[0.08] text-slate-300 text-[10px] px-3 py-1.5 rounded-lg uppercase tracking-wider font-semibold">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="text-white hover:text-purple-300 font-semibold text-sm transition-colors flex items-center gap-2 group whitespace-nowrap">
                          Leer caso arquitectónico 
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      );
    };
    
    `;

const finalTxt = txt.substring(0, startIndex) + newComponent + txt.substring(endIndex);
fs.writeFileSync('../index.html', finalTxt, 'utf8');
console.log("Interactive Showcase deployed!");
