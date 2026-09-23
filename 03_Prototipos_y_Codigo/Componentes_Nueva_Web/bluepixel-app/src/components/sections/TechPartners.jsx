import React from 'react';

const TechPartners = () => {
      const logos = [
        { name: 'OpenAI', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
        { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
        { name: 'Pinecone', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb99087d463854a86d_moradauno.svg' }, // Placeholder, can be text or different SVG later
        { name: 'LangChain', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa84cae103a5130734_pakke.svg' }, // Placeholder
        { name: 'PostgreSQL', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
        { name: 'GitHub', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' }
      ];

      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-4 font-black font-display tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                El stack detrás de la ingeniería<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Arquitectura de grado empresarial impulsada por los proveedores líderes de IA, bases de datos vectoriales y cloud computing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Dark Card */}
              <div className="lg:col-span-5 bg-navy-900 border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[300px]">
                <p className="text-white font-semibold text-lg leading-relaxed max-w-sm">
                  Desplegamos infraestructura sobre ecosistemas probados en producción.
                </p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center border-4 border-navy-950">
                    <span className="text-white font-bold text-xs">BP</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ecosistema Certificado</p>
                    <p className="text-xs text-slate-400">Integración nativa vía MCP</p>
                  </div>
                </div>
              </div>

              {/* Right Logo Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
                {/* Manual grid of tools */}
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">OpenAI</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">AWS</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">SAP</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Pydantic</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">LangGraph</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Pinecone</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Salesforce</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">pgvector</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default TechPartners;
