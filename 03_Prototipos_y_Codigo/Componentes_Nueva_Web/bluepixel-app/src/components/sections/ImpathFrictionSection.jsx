import React from 'react';

// Version de una sola marca, segun el diseno de referencia (impath.png): un
// panel unico dedicado a IMPATH en vez de las tres tarjetas IMPATH + Mixpanel
// + Vault que traia antes. Mixpanel y Vault diluian el mensaje: la seccion
// existe para explicar IMPATH, y las otras dos herramientas ya se nombran en
// las capacidades de Data & Analytics y Security.
const PERSONAS = [
  { key: 'A', name: 'Persona A — Power User', role: 'Director Ops · Desktop', status: 'Revisado', tone: 'emerald', accent: 'bg-blue-500/20 text-blue-400' },
  { key: 'B', name: 'Persona B — Casual User', role: 'Gerente Comercial', status: 'Revisado', tone: 'emerald', accent: 'bg-purple-500/20 text-purple-400' },
  { key: 'C', name: 'Persona C — Mobile First', role: 'Usuario Móvil', status: 'En análisis', tone: 'blue', accent: 'bg-cyan-500/20 text-cyan-400' },
  { key: 'D', name: 'Persona D — Nuevo Usuario', role: 'Onboarding', status: 'En análisis', tone: 'blue', accent: 'bg-indigo-500/20 text-indigo-400' },
];

const TONES = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const ImpathFrictionSection = ({ onOpenContact }) => {
  return (
    <section className="py-24 px-6 bg-[#03060F] border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Descubre qué fricción le cuesta más dinero a tu plataforma con Impath<span className="text-blue-500">.</span>
          </h2>
        </div>

        <div className="bg-[#060A14] border border-white/[0.08] rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Columna izquierda: qué es IMPATH */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-2xl font-black text-white tracking-tight lowercase italic">impath</span>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  UX Research & Product Strategy
                </span>
              </div>

              <h3 className="text-sm text-blue-400 font-semibold mb-4">Inteligencia de Experiencia</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Construye gemelos digitales de los usuarios de tu plataforma — perfiles conductuales con 7 capas de análisis que simulan cómo distintos tipos de usuarios navegan, toman decisiones y encuentran fricción.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {[
                  'Gemelos digitales activos',
                  'Detección de fricción con impacto económico',
                  'Interview Room — 7 stakeholders simultáneos',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 shrink-0 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenContact}
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group transition-colors"
              >
                <span>Conoce IMPATH</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Columna derecha: el panel de Friction Intelligence */}
            <div className="bg-[#03060F] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center justify-between text-[11px] font-mono mb-4">
                <span className="text-slate-400 font-bold">
                  IMPATH <span className="text-slate-600 font-normal">Friction Intelligence</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {PERSONAS.length} activos
                </span>
              </div>

              <div className="space-y-2.5">
                {PERSONAS.map((p) => (
                  <div
                    key={p.key}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between gap-3 text-[11px]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-6 h-6 rounded shrink-0 flex items-center justify-center font-bold text-[10px] ${p.accent}`}>
                        {p.key}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white leading-tight truncate">{p.name}</div>
                        <div className="text-[9px] text-slate-400 mt-0.5 truncate">{p.role}</div>
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border font-semibold shrink-0 ${TONES[p.tone]}`}>
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                <span>Pantallas revisadas</span>
                <span className="text-slate-300">2/4</span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={onOpenContact}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
          >
            <span>Evalúa el costo de la fricción</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpathFrictionSection;
