import React from 'react';
import { Layers, Database, Shield, Brain, Network, Cloud, Cpu } from 'lucide-react';

const OrbitingTechStack = () => {
  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden border-t border-white/[0.04]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Arquitectura Tecnológica</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 tracking-tight">
            Ecosistema FutureProof<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl">
            Sistemas construidos bajo protocolos *Deep Tech* y metodologías conductuales. Diseñados para escalar operaciones corporativas sin fricción ni deuda técnica.
          </p>
        </div>

        {/* Orbit Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8">
          
          {/* Left Column (3 items) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            
            {/* Item 1 */}
            <div className="flex gap-5 lg:text-right lg:flex-row-reverse items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Layers className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">Frontend & Adopción (UX/UI)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  React, Next.js, Tailwind CSS y Framer Motion. Código tipado y validación rigurosa de accesibilidad WCAG.
                </p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex gap-5 lg:text-right lg:flex-row-reverse items-start group lg:-ml-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <Database className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">Arquitectura Backend & APIs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Node.js, Python, PostgreSQL. Construcción de microservicios resilientes listos para escala corporativa masiva.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5 lg:text-right lg:flex-row-reverse items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-emerald-400 transition-colors">Seguridad y Compliance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Arquitectura Zero-Trust, cifrado de datos AES-256, cumplimiento LFPDPPP y mitigación exhaustiva OWASP Top 10.
                </p>
              </div>
            </div>

          </div>

          {/* Center Graphic */}
          <div className="w-full lg:w-1/3 flex justify-center items-center relative py-10 lg:py-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Orbits */}
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] rounded-full flex items-center justify-center">
              
              {/* Outer Orbit */}
              <div className="absolute w-full h-full rounded-full border border-white/5 animate-[spin_40s_linear_infinite]">
                 {/* Satellite nodes */}
                 <div className="absolute -top-2 left-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                 <div className="absolute bottom-10 -left-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
              </div>

              {/* Inner Orbit */}
              <div className="absolute w-3/4 h-3/4 rounded-full border border-white/10 border-dashed animate-[spin_25s_linear_infinite_reverse] flex items-center justify-center">
                 <div className="absolute top-4 right-8 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
              </div>

              {/* Central Core */}
              <div className="relative z-20 w-36 h-36 md:w-44 md:h-44 rounded-full bg-navy-900 border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center p-2 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Premium glowing central core */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-blue-500/40 animate-[ping_3s_ease-in-out_infinite]"></div>
                  <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-cyan-400/60 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 blur-xl rounded-full"></div>
                  <Cpu className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" strokeWidth={1} />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (3 items) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            
            {/* Item 4 */}
            <div className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20 transition-all shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <Brain className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-indigo-400 transition-colors">Memoria y Bases Vectoriales</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pinecone, pgvector. Sistemas RAG determinísticos que eliminan las alucinaciones de los modelos (LLMs).
                </p>
              </div>
            </div>
            
            {/* Item 5 */}
            <div className="flex gap-5 items-start group lg:-mr-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <Network className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors">Protocolos de Orquestación</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  LangGraph, Pydantic AI y Protocolo MCP. Despliegue de agentes conectados directamente a tu SAP o ERP.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 group-hover:border-sky-500/50 group-hover:bg-sky-500/20 transition-all shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                <Cloud className="w-7 h-7 text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-sky-400 transition-colors">Despliegue Cloud-Native</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  AWS, GCP, Vercel, Docker. CI/CD automatizado, contenedores escalables y SLAs de operación del 99.9%.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OrbitingTechStack;
