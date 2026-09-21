import React, { useState, useEffect } from 'react';
import MultiStepContact from '../../forms/MultiStepContact';
import Footer from '../../layout/Footer';
import WaysToWorkSubNavbar from '../../layout/WaysToWorkSubNavbar';

const PILLAR_THEMES = {
  blue: {
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/30',
    accentBg: 'bg-blue-500/10',
    glow: 'bg-blue-600/10',
    btnPrimary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)]',
    dot: 'bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
    gradientText: 'from-blue-400 via-cyan-300 to-teal-300',
    activeQuiz: 'bg-blue-500/15 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    tableHighlight: 'text-blue-400 font-semibold bg-blue-500/5',
    iconCheck: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    deliverableNum: 'text-blue-400/60',
    timelineNode: 'border-blue-500 text-blue-400'
  },
  purple: {
    accentText: 'text-purple-400',
    accentBorder: 'border-purple-500/30',
    accentBg: 'bg-purple-500/10',
    glow: 'bg-purple-600/10',
    btnPrimary: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_25px_-5px_rgba(168,85,247,0.5)]',
    dot: 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
    gradientText: 'from-purple-400 via-violet-300 to-indigo-400',
    activeQuiz: 'bg-purple-500/15 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    tableHighlight: 'text-purple-400 font-semibold bg-purple-500/5',
    iconCheck: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
    deliverableNum: 'text-purple-400/60',
    timelineNode: 'border-purple-500 text-purple-400'
  },
  cyan: {
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-500/30',
    accentBg: 'bg-cyan-500/10',
    glow: 'bg-cyan-500/10',
    btnPrimary: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)]',
    dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]',
    gradientText: 'from-cyan-400 via-blue-400 to-indigo-400',
    activeQuiz: 'bg-cyan-500/15 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    tableHighlight: 'text-cyan-400 font-semibold bg-cyan-500/5',
    iconCheck: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
    deliverableNum: 'text-cyan-400/60',
    timelineNode: 'border-cyan-500 text-cyan-400'
  },
  indigo: {
    accentText: 'text-indigo-400',
    accentBorder: 'border-indigo-500/30',
    accentBg: 'bg-indigo-500/10',
    glow: 'bg-indigo-600/10',
    btnPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_25px_-5px_rgba(99,102,241,0.5)]',
    dot: 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]',
    gradientText: 'from-indigo-400 via-purple-300 to-blue-400',
    activeQuiz: 'bg-indigo-500/15 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    tableHighlight: 'text-indigo-400 font-semibold bg-indigo-500/5',
    iconCheck: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    deliverableNum: 'text-indigo-400/60',
    timelineNode: 'border-indigo-500 text-indigo-400'
  }
};

const ALL_PILLARS = [
  { id: 'consultoria-digital', num: '01', name: 'Consultoría Digital', duration: '2 a 4 Semanas', route: 'consultoria-tecnologica', dot: 'bg-blue-400' },
  { id: 'agentes-automatizacion', num: '02', name: 'Agentes & Automatización', duration: '2 a 4 Semanas', route: 'automatizacion-agentica', dot: 'bg-purple-400' },
  { id: 'plataformas-digitales', num: '03', name: 'Plataformas Digitales', duration: '3 Meses a Producción', route: 'producto-digital', dot: 'bg-cyan-400' },
  { id: 'evolucion-digital', num: '04', name: 'Evolución Digital', duration: 'Roadmap 6/12 Meses', route: 'evolucion-digital', dot: 'bg-indigo-400' }
];

const PillarLandingTemplate = ({ data, onNavigateCluster }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  // Quiz State
  const [quizScores, setQuizScores] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleQuizPick = (qIndex, score) => {
    const newScores = { ...quizScores, [qIndex]: score };
    setQuizScores(newScores);
    if (Object.keys(newScores).length === 4) {
      setShowResult(true);
    }
  };

  const getQuizResult = () => {
    const total = Object.values(quizScores).reduce((a, b) => a + b, 0);
    if (total >= 10) return { band: 'Alineación Total con este Pilar', desc: `Tu empresa reúne las condiciones ideales para arrancar con el ${data.name}. El retorno de inversión y la velocidad de entrega serán máximos.` };
    if (total >= 6) return { band: 'Alineación Favorable', desc: `Este pilar resolverá cuellos de botella clave en tu operación. Te recomendamos agendar la llamada exploratoria para ajustar el alcance de los primeros sprints.` };
    return { band: 'Recomendación de Fase Previa', desc: `Podrías beneficiarte de iniciar con el Pilar 01 (Consultoría Digital) para definir primero la viabilidad y el roadmap antes de comprometer más recursos.` };
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Active Theme
  const theme = PILLAR_THEMES[data.themeKey] || PILLAR_THEMES.blue;

  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 0. SUBNAVBAR DE LOS 4 PILARES */}
      <WaysToWorkSubNavbar currentView={data.id} onNavigate={onNavigateCluster} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 md:pt-24 pb-16 lg:pb-24 overflow-hidden border-b border-white/[0.08]">
        {/* Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] ${theme.glow} blur-[140px] pointer-events-none rounded-full`} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* Header badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText} font-bold`}>
                <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></span>
                {data.badgeText}
              </span>
              <span className="text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
                🎯 {data.targetAudience}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
              {data.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              {data.subtitle}
            </p>

            {/* Quote Takeaway de Valor */}
            <div className="mb-10 p-5 rounded-2xl bg-[#060A16] border border-white/[0.08] max-w-2xl mx-auto">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                Takeaway de Valor Oficial BluePixel
              </div>
              <div className={`text-sm md:text-base font-semibold italic ${theme.accentText}`}>
                "{data.takeaway}"
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={scrollToContact}
                className={`font-bold text-sm px-8 py-4 rounded-xl transition-all flex items-center gap-2 ${theme.btnPrimary}`}
              >
                <span>Cotizar bajo este Pilar</span>
                <span>→</span>
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById('activacion-capacidades') || document.getElementById('entregables');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-bold text-sm px-7 py-4 rounded-xl transition-all border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20"
              >
                <span>Ver Activación de Capacidades ↓</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5. TRUST CLIENTS STRIP */}
      <div className="border-b border-white/[0.08] bg-[#030612] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold">
              Confianza Enterprise Comprobada:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-mono font-bold text-slate-400 tracking-wider">
            <span className="hover:text-white transition-colors">GRUPO BIMBO</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">COCA-COLA FEMSA</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">AVIANCA</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">CLIP</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">FR MEDICAL</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">RADIOSHACK</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">BBVA</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-white transition-colors">CEMEX</span>
          </div>
        </div>
      </div>

      {/* 2. STATS STRIP */}
      {data.stats && (
        <div className="border-b border-white/[0.08] bg-[#040813]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {data.stats.map((st, sIdx) => (
              <div key={sIdx} className="flex flex-col items-center text-center pt-6 md:pt-0">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r ${sIdx === 0 ? theme.gradientText : 'from-white to-slate-200'}`}>
                  {st.value}
                </div>
                <div className="text-sm font-medium text-slate-300 max-w-xs">{st.label}</div>
                {st.sublabel && (
                  <div className={`text-[11px] font-mono tracking-wider uppercase mt-1 ${theme.accentText}`}>
                    {st.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2.5. CASO DE ESTUDIO REAL DEL PILAR */}
      {data.caseStudy && (
        <section className="py-20 border-b border-white/[0.08] bg-gradient-to-b from-[#040815] to-[#02040A] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className={`absolute top-0 right-1/4 w-[600px] h-[350px] ${theme.glow} blur-[140px] pointer-events-none rounded-full`}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-[#050A19] border border-white/[0.1] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${theme.gradientText}`}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 pr-0 lg:pr-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText}`}>
                      ✦ {data.caseStudy.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                      Cliente: <strong className="text-white">{data.caseStudy.client}</strong>
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug mb-6">
                    {data.caseStudy.title}
                  </h3>

                  <div className="space-y-4 text-sm text-slate-300 mb-8">
                    <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                      <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                        El Desafío Crítico:
                      </span>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        {data.caseStudy.problem}
                      </p>
                    </div>

                    <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4">
                      <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                        La Solución de Ingeniería BluePixel:
                      </span>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        {data.caseStudy.solution}
                      </p>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4">
                      <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                        El Impacto Cuantificado en Negocio:
                      </span>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        {data.caseStudy.result}
                      </p>
                    </div>
                  </div>

                  {data.caseStudy.quote && (
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] italic text-xs md:text-sm text-slate-200">
                      "{data.caseStudy.quote}"
                      {data.caseStudy.author && (
                        <span className="block not-italic text-[11px] font-mono text-slate-400 mt-2 font-semibold">
                          — {data.caseStudy.author}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 bg-[#02040A] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-xl">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold border-b border-white/[0.06] pb-3 mb-4">
                      Métricas Reales Obtenidas
                    </div>
                    <div className="space-y-5">
                      {data.caseStudy.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="border-b border-white/[0.04] pb-4 last:border-b-0 last:pb-0">
                          <div className={`text-3xl md:text-4xl font-black tracking-tight ${theme.accentText}`}>
                            {m.value}
                          </div>
                          <div className="text-xs text-slate-300 mt-1 leading-snug">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={scrollToContact}
                      className={`w-full text-center py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${theme.btnPrimary}`}
                    >
                      <span>Replicar este modelo en mi empresa</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. ACTIVACIÓN DE LAS 6 CAPACIDADES TÉCNICAS */}
      {data.capabilitiesActivation && (
        <section id="activacion-capacidades" className="py-24 border-b border-white/[0.08] bg-[#02040A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className={`inline-block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
                ✦ MATRIZ DE CRUCE OFICIAL · AGENTS.MD
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                Cómo este Pilar activa nuestras 6 Capacidades Técnicas<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Cada pilar de contratación activa nuestro músculo multidisciplinario. Así opera cada disciplina en este modelo:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.capabilitiesActivation.map((cap, cIdx) => (
                <div 
                  key={cIdx} 
                  className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-400">
                        {cap.badge}
                      </span>
                      <a 
                        href={`#/${cap.route}`} 
                        className={`text-xs font-mono hover:underline ${theme.accentText}`}
                      >
                        Ver capability →
                      </a>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {cap.name}
                    </h3>

                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme.accentText}`}>
                      {cap.role}
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <a 
                    href={`#/${cap.route}`}
                    className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400 group-hover:text-white flex items-center justify-between transition-colors"
                  >
                    <span>Explorar servicio a detalle</span>
                    <span>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PAIN POINTS */}
      {data.painPoints && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.painPoints.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 max-w-3xl text-white">
              {data.painPoints.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.painPoints.items.map((item, idx) => (
                <div key={idx} className="bg-[#02040A] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-red-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl font-black">
                    ✕
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. COMPARISON MATRIX FUTUREPROOF */}
      {data.comparisonMatrix && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.comparisonMatrix.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.comparisonMatrix.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.comparisonMatrix.subtitle}</p>

            <div className="overflow-x-auto border border-white/[0.08] rounded-2xl bg-[#050A17] shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    {data.comparisonMatrix.headers.map((h, idx) => (
                      <th 
                        key={idx} 
                        className={`p-5 text-xs font-mono tracking-widest uppercase border-b border-white/[0.08] ${idx === data.comparisonMatrix.headers.length - 1 ? `${theme.accentText} font-bold bg-white/[0.02]` : 'text-slate-400'}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.08]">
                  {data.comparisonMatrix.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-bold text-white text-sm bg-[#040813] whitespace-nowrap">{row.label}</td>
                      {row.cols.map((col, cIdx) => (
                        <td 
                          key={cIdx} 
                          className={`p-5 text-sm ${cIdx === row.cols.length - 1 ? theme.tableHighlight : 'text-slate-300'}`}
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 6. SPECS / METODOLOGÍA */}
      {data.specs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.specs.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.specs.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.specs.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.specs.items.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-b from-[#081126] to-[#040813] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-white/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl font-black ${theme.iconCheck}`}>
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. QUIZ DE AUTOEVALUACIÓN */}
      {data.quiz && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className={`text-xs font-mono uppercase tracking-widest font-bold block mb-2 ${theme.accentText}`}>
                ✦ TEST DE CALIFICACIÓN DE PILAR
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
                {data.quiz.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-lg">{data.quiz.subtitle}</p>
            </div>

            <div className="bg-[#050A17] border border-white/[0.08] rounded-3xl p-6 md:p-12 shadow-2xl">
              <div className="space-y-10">
                {data.quiz.questions.map((q, qIdx) => (
                  <div key={qIdx}>
                    <h3 className="text-sm md:text-base font-bold text-white mb-4 flex items-center gap-2">
                      <span className={`font-mono text-xs ${theme.accentText}`}>Q0{qIdx + 1}</span>
                      <span>{q.q}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizPick(qIdx, opt.score)}
                          className={`text-left p-4 rounded-xl border text-sm transition-all duration-200 leading-relaxed ${quizScores[qIdx] === opt.score ? theme.activeQuiz : 'bg-[#02040A] border-white/[0.08] text-slate-400 hover:border-white/[0.2] hover:text-slate-200'}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-mono text-xs text-slate-500 mt-0.5">[{String.fromCharCode(65 + oIdx)}]</span>
                            <span>{opt.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Result */}
              {showResult && (
                <div className="mt-12 pt-10 border-t border-white/[0.08] text-center animate-fadeIn">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Diagnóstico de Calificación
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} mb-4`}>
                    {getQuizResult().band}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-lg mx-auto mb-8 text-sm md:text-base">
                    {getQuizResult().desc}
                  </p>
                  <button 
                    onClick={scrollToContact}
                    className={`font-bold text-sm px-8 py-4 rounded-xl transition-all ${theme.btnPrimary}`}
                  >
                    Agendar Sesión con este Diagnóstico →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 8. DELIVERABLES / ESTÁNDAR DE ENTREGA */}
      {data.deliverables && (
        <section id="entregables" className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.deliverables.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 max-w-3xl text-white">
              {data.deliverables.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.deliverables.items.map((item, idx) => (
                <div key={idx} className="bg-[#02040A] border border-white/[0.08] rounded-xl p-6 flex gap-4 items-start hover:border-white/20 transition-colors">
                  <span className={`text-sm font-black font-mono mt-1 ${theme.deliverableNum}`}>{item.num}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. TIMELINE / METODOLOGÍA */}
      {data.timeline && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-5xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.timeline.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.timeline.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-16">{data.timeline.subtitle}</p>

            <div className="relative border-l border-white/[0.1] ml-4 md:ml-6 space-y-12 pb-8">
              {data.timeline.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#02040A] border flex items-center justify-center text-xs font-bold font-mono ${theme.timelineNode}`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className={`text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider border ${theme.accentBg} ${theme.accentBorder} ${theme.accentText}`}>
                        Entregable: {del}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9.5. GARANTÍA DE LIDERAZGO & FILOSOFÍA FUTUREPROOF */}
      <section className="py-20 border-b border-white/[0.08] bg-[#02040A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`inline-block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
              ✦ RESPALDO DIRECTIVO & GARANTÍA DE SOBERANÍA
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
              Dirección Técnica y Filosofía FutureProof™<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              En BluePixel los fundadores y tech leads asumen la responsabilidad técnica de cada entrega. Cero intermediarios, cero desarrolladores junior aprendiendo con tu capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Leonardo Flores */}
            <div className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold font-mono">
                    LF
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Leonardo Flores</h4>
                    <span className="text-xs font-mono text-blue-400">CEO & Head of Product Strategy</span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic mb-4">
                  "El código más sofisticado fracasa si los usuarios lo rechazan. Nuestro diseño conductual y estrategia de producto no es cosmética: es la armadura que asegura adopción y convierte tecnología pesada en ventaja comercial desde el día 1."
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                Liderazgo UX & Psicología Conductual · IMPATH™ Creator
              </div>
            </div>

            {/* Fabián Flores */}
            <div className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-colors">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono">
                    FF
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Fabián Flores</h4>
                    <span className="text-xs font-mono text-purple-400">CTO & VP of Systems Engineering</span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic mb-4">
                  "No vendemos horas de programador ni maquetas de Figma. Diseñamos sistemas desacoplados, agentes con protocolo abierto MCP y despliegues en la VPC del cliente con cero vendor lock-in y SLA 99.9%."
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                Arquitectura Cloud-Native · Deep Tech & Protocolos MCP
              </div>
            </div>
          </div>

          {/* 5 Principios FutureProof Bar */}
          <div className="bg-[#060B18] border border-white/[0.08] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold">
                Los 5 Principios Innegociables de la Garantía FutureProof™:
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                Soberanía Total de Datos
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono text-[11px] mb-1">1. Anti-Maquila</strong>
                <span className="text-slate-400 text-[11px]">Socios estratégicos de producto, no horas ciegas.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono text-[11px] mb-1">2. Certeza Previa</strong>
                <span className="text-slate-400 text-[11px]">Validar técnica y financieramente antes de codificar.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono text-[11px] mb-1">3. UX como Armadura</strong>
                <span className="text-slate-400 text-[11px]">Psicología conductual para adopción superior al 90% desde el día 1.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono text-[11px] mb-1">4. Cero Lock-in</strong>
                <span className="text-slate-400 text-[11px]">Protocolos abiertos MCP; código y datos en tu VPC.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block font-mono text-[11px] mb-1">5. Blindaje Seguro</strong>
                <span className="text-slate-400 text-[11px]">ISO 27001, OWASP Top 10 y SLA 99.9% de resiliencia.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      {data.faqs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 text-center text-white">
              Preguntas Frecuentes sobre el {data.name}<span className="text-blue-500">.</span>
            </h2>
            
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === idx ? `${theme.accentBorder} bg-white/[0.03]` : 'border-white/[0.08] bg-[#02040A]'}`}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm md:text-base text-white">{faq.q}</span>
                    <span className={`text-xl transition-transform duration-200 ${theme.accentText} ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  <div className={`px-6 pb-6 text-sm text-slate-400 leading-relaxed ${openFaq === idx ? 'block' : 'hidden'}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. OTRAS 3 FORMAS DE TRABAJAR (CROSS NAVIGATION) */}
      <section className="py-16 border-b border-white/[0.08] bg-[#030611]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
                Arquitectura Modular BluePixel
              </span>
              <h3 className="text-xl font-bold text-white">
                Explora nuestras otras 3 formas de colaborar<span className="text-blue-500">.</span>
              </h3>
            </div>
            <a 
              href="#/"
              className="text-xs font-mono text-blue-400 hover:text-white transition-colors"
            >
              Volver a "Cómo Trabajamos" en Home →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ALL_PILLARS.map((pil) => (
              <a
                key={pil.id}
                href={`#/${pil.route}`}
                className={`p-5 rounded-2xl border text-left transition-all ${pil.id === data.id ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/[0.08] bg-[#060A14] hover:border-white/20'}`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-400">{pil.num}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{pil.duration}</span>
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {pil.name}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span>Conocer más</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA / FORMULARIO */}
      <section id="contact-form" className="py-24 relative overflow-hidden bg-[#02040A]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className={`inline-block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
              ✦ RESPUESTA TÉCNICA EN &lt; 24 HORAS
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
              Comienza con el {data.name}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Un Arquitecto Senior evaluará tu caso para determinar viabilidad, tiempos de entrega y retorno de inversión antes de comprometer capital.
            </p>
          </div>
          
          <div className="bg-[#050A17] border border-white/[0.1] rounded-3xl p-4 md:p-8 shadow-2xl">
            <MultiStepContact preselectedPackage={data.packageName} />
          </div>
        </div>
      </section>

      {/* 13. FOOTER GLOBAL */}
      <Footer />

    </div>
  );
};

export default PillarLandingTemplate;
