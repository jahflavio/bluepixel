import React from 'react';

const AgenticTechStack = () => {
      return (
        <section id="tech-stack" className="py-24 bg-navy-900 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                Nuestro ecosistema tecnológico<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Cuatro pilares de ingeniería para equipos que mueven agentes de lenguajes (LLM) de pruebas piloto a entornos de producción corporativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
              
              {/* Card 1: Large Left (Spans 2 rows on desktop) */}
              <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-navy-800 to-navy-950 border border-white/[0.08] rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col min-h-[400px]">
                {/* Abstract Data Background Effect */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">01</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">PROTOCOLO CORE</span>
                  </div>
                  <h3 className="mb-4 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Model Context Protocol (MCP)<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    El estándar abierto que conecta de forma determinística los LLMs con tus orígenes de datos locales, ERPs y APIs corporativas. Sin integraciones frágiles.
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>SAP</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>Salesforce</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>HubSpot</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Top Middle */}
              <div className="md:col-span-1 bg-navy-850 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-colors"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">02</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">FRAMEWORKS AGENTICOS</span>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Orquestación de Enjambres<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sistemas multi-agente construidos con rigor de ingeniería de software. Tipado estricto y flujos dirigidos.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-blue-400">⚡</span>Pydantic AI</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-emerald-400">🦜</span>LangGraph</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Top Right */}
              <div className="md:col-span-1 bg-navy-950 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between hover:border-indigo-500/20 transition-colors group relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">03</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">MEMORIA & CONTEXTO</span>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">RAG & Bases Vectoriales<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Pipelines de recuperación avanzada que evitan alucinaciones anclando las respuestas a tu data.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">Pinecone</span></span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">🐘</span>pgvector</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom Wide (Spans 2 columns) */}
              <div className="md:col-span-2 bg-navy-850 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-center hover:border-white/10 transition-colors group relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">04</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">DESPLIEGUE CLOUD</span>
                  </div>
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">LLMOps & Serverless Architecture<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                    Agentes que corren en producción exigen infraestructura de grado empresarial. Monitoreo de latencia, tracking de costos por token, despliegues CI/CD y contenedores escalables sin fricción.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      );
    };

export default AgenticTechStack;
