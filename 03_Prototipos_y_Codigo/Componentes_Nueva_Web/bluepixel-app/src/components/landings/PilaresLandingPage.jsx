import React, { useEffect } from 'react';
import { pillarsData } from '../../data/pillarsData';
import MultiStepContact from '../forms/MultiStepContact';

// Hub real de los 4 Pilares (antes, #/pilares solo hacia scroll al Home y esta
// pagina era inalcanzable). Usa pillarsData.js como fuente unica de verdad
// para nombres, plazos y copy: si un pilar cambia alli, este hub se actualiza
// solo, sin duplicar texto a mano.
const PILLAR_ORDER = ['consultoria-digital', 'agentes-automatizacion', 'plataformas-digitales', 'evolucion-digital'];

const THEME = {
  blue: {
    text: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glow: 'from-blue-500/10',
    dot: 'bg-blue-400',
    button: 'bg-blue-600/15 hover:bg-blue-600 border-blue-500/30 hover:border-blue-400 text-blue-300',
  },
  purple: {
    text: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glow: 'from-purple-500/10',
    dot: 'bg-purple-400',
    button: 'bg-purple-600/15 hover:bg-purple-600 border-purple-500/30 hover:border-purple-400 text-purple-300',
  },
  cyan: {
    text: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glow: 'from-cyan-500/10',
    dot: 'bg-cyan-400',
    button: 'bg-cyan-600/15 hover:bg-cyan-600 border-cyan-500/30 hover:border-cyan-400 text-cyan-300',
  },
  indigo: {
    text: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glow: 'from-indigo-500/10',
    dot: 'bg-indigo-400',
    button: 'bg-indigo-600/15 hover:bg-indigo-600 border-indigo-500/30 hover:border-indigo-400 text-indigo-300',
  },
};

const PilaresLandingPage = ({ onNavigateCluster }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToPillar = (id) => {
    if (onNavigateCluster) onNavigateCluster(`pilares/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4">
            ✦ 4 MODELOS DE SERVICIO · MODULARES E INDEPENDIENTES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Los 4 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pilares de BluePixel</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            No son fases obligatorias de un ciclo cerrado: son 4 formas independientes de trabajar con nosotros.
            Puedes entrar directamente por cualquiera, según el momento exacto de tu empresa.
          </p>
        </div>
      </section>

      {/* Grid de 4 Pilares */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLAR_ORDER.map((id) => {
            const p = pillarsData[id];
            const theme = THEME[p.themeKey] || THEME.blue;
            return (
              <button
                key={id}
                onClick={() => goToPillar(id)}
                className={`text-left bg-[#080B12] border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all ${theme.borderHover}`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${theme.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <span className={`font-mono text-sm font-bold ${theme.text}`}>{p.num}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{p.duration}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 relative z-10 group-hover:text-white">
                  {p.name}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                  {p.targetAudience}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 relative z-10 flex-1">
                  {p.takeaway}
                </p>

                <span className={`inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-3 rounded-xl border ${theme.button} transition-all relative z-10 self-start`}>
                  <span>Conocer el Pilar {p.num} a detalle</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA de cierre para quien no sabe por cual empezar */}
      <section className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">¿No sabes por cuál pilar empezar?</h2>
            <p className="text-slate-400">Cuéntanos tu reto y un Lead Architect te ayuda a trazar la ruta correcta.</p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PilaresLandingPage;
