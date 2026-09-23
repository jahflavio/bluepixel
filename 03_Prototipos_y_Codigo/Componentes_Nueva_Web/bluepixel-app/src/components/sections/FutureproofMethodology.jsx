import React from 'react';
import { Target, Code2, Zap, ArrowRight, Clock, ShieldCheck, Activity } from 'lucide-react';

const FutureproofMethodology = ({ data }) => {
  const d = data || {};

  return (
    <section className="py-24 border-b border-white/[0.08] bg-[#02040B] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- PART 1: THE PROBLEM (STAGNATION) --- */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold mb-4 block">
              El Diagnóstico
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Por qué {d.stagnationContext || 'las plataformas'} se estancan<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              {d.stagnationSubtitle || 'Plataformas digitales estancadas. La metodología Futureproof las transforma.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(d.painPoints || [
              { title: 'El lanzamiento no valida hipótesis.', description: 'Se sale a producción sin evidencia de comportamiento y el aprendizaje llega tarde, cuando ya se gastó el presupuesto.' },
              { title: 'La deuda técnica empieza en el sprint 1.', description: 'Decisiones de arquitectura tomadas por velocidad se convierten en el techo de crecimiento de la plataforma.' },
              { title: 'La métrica se reporta, pero no se acciona.', description: 'Dashboards que describen el pasado sin traducirse en un roadmap priorizado por impacto de negocio.' },
              { title: 'La inversión inicial no garantiza retorno.', description: 'Sin una cadencia de evolución continua, la plataforma nace desactualizada y la fricción se acumula.' }
            ]).map((pain, idx) => (
              <div key={idx} className="bg-[#050A19] border border-white/[0.05] rounded-2xl p-6 hover:bg-[#0A1024] hover:border-red-500/30 transition-colors group">
                <div className="text-4xl font-black text-white/[0.05] group-hover:text-red-500/20 transition-colors mb-4 font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{pain.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: THE SOLUTION (FUTUREPROOF METHODOLOGY) --- */}
        <div className="pt-24 border-t border-white/[0.05]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold mb-4 block">
              La Solución
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Cómo funciona Futureproof<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Un sistema vivo para diseñar, construir y evolucionar {d.stagnationContext || 'plataformas digitales'}.
            </p>
          </div>

          {/* Timeline Visual (Abstracted) */}
          <div className="bg-[#050A19] border border-white/[0.08] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center">
              <div className="flex-1">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">MVP Definido</div>
                <div className="text-xs text-slate-500 font-mono">90 días</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-white/20"></div>
              
              <div className="flex-1">
                <Zap className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <div className="font-bold text-white mb-1">Lanzamiento</div>
                <div className="text-xs text-slate-500 font-mono">A Producción</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-white/20"></div>

              <div className="flex-1 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                <Activity className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="font-bold text-emerald-400 mb-1">Inicio Evolución Digital</div>
                <div className="text-xs text-emerald-500/70 font-mono">6, 12, 24 meses</div>
              </div>
            </div>
          </div>

          {/* The 3 Phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Diseña */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <span className="font-mono font-bold text-blue-400">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">DISEÑA</h3>
                <p className="text-blue-400 font-bold mb-4">{d.phases?.design?.title || 'Descubrimos qué construir'}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {d.phases?.design?.description || 'Estrategia de producto, arquitectura de experiencia y validación con usuarios reales antes de escribir código.'}
                </p>
                <ul className="space-y-2">
                  {(d.phases?.design?.bullets || ['Estrategia', 'UX Research', 'Design System']).map((item, i) => (
                    <li key={i} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Construye */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <span className="font-mono font-bold text-indigo-400">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">CONSTRUYE</h3>
                <p className="text-indigo-400 font-bold mb-4">{d.phases?.build?.title || 'Construimos rápido y con propósito'}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {d.phases?.build?.description || 'Ciclo completo de ingeniería con QA continuo, integraciones y una arquitectura sin deuda técnica lista para escalar.'}
                </p>
                <ul className="space-y-2">
                  {(d.phases?.build?.bullets || ['Ingeniería Cloud-Native', 'Seguridad ISO 27001', 'Lanzamiento Zero-Downtime']).map((item, i) => (
                    <li key={i} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-indigo-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Evoluciona */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <span className="font-mono font-bold text-emerald-400">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">EVOLUCIONA</h3>
                <p className="text-emerald-400 font-bold mb-4">{d.phases?.evolve?.title || 'Nunca dejamos de mejorar'}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {d.phases?.evolve?.description || 'Roadmap vivo alimentado por datos de comportamiento real, IA y automatización, con cadencia de accountability.'}
                </p>
                <ul className="space-y-2">
                  {(d.phases?.evolve?.bullets || ['Telemetría IMPATH', 'Agentes IA', 'Roadmap por ROI']).map((item, i) => (
                    <li key={i} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FutureproofMethodology;
