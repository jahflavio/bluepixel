import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Database, 
  ShieldAlert, 
  TrendingDown, 
  Users, 
  Flame, 
  ZapOff 
} from 'lucide-react';
import MultiStepContact from '../../forms/MultiStepContact';
import Footer from '../../layout/Footer';

const renderPainIcon = (iconType) => {
  switch (iconType) {
    case 'monolith':
      return <Cpu className="w-5 h-5 text-red-400" />;
    case 'ai-lock':
    case 'silos-data':
      return <Database className="w-5 h-5 text-amber-400" />;
    case 'cloud-waste':
    case 'roi-blind':
      return <TrendingDown className="w-5 h-5 text-red-400" />;
    case 'users-drop':
    case 'funnel-leak':
      return <Users className="w-5 h-5 text-orange-400" />;
    case 'security-breach':
    case 'compliance-fail':
    case 'ai-leak':
      return <ShieldAlert className="w-5 h-5 text-red-400" />;
    case 'board-pressure':
    case 'competitor-threat':
      return <Flame className="w-5 h-5 text-amber-400" />;
    case 'bot-rigid':
    case 'pilot-fail':
      return <ZapOff className="w-5 h-5 text-amber-400" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-red-400" />;
  }
};

// Motor de temas cromáticos por clave de servicio
const THEME_CONFIG = {
  emerald: {
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    accentBg: 'bg-emerald-500/10',
    glow: 'bg-emerald-500/10',
    btnPrimary: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)]',
    btnSecondary: 'border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10',
    dot: 'bg-emerald-400',
    gradientText: 'from-emerald-400 via-teal-300 to-cyan-400',
    activeQuiz: 'bg-emerald-500/15 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    tableHighlight: 'text-emerald-400 font-semibold bg-emerald-500/5',
    pillCore: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    iconCheck: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
    deliverableNum: 'text-emerald-400/60',
    timelineNode: 'border-emerald-500 text-emerald-400'
  },
  cyan: {
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-500/30',
    accentBg: 'bg-cyan-500/10',
    glow: 'bg-cyan-500/10',
    btnPrimary: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)]',
    btnSecondary: 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10',
    dot: 'bg-cyan-400',
    gradientText: 'from-cyan-400 via-blue-400 to-indigo-400',
    activeQuiz: 'bg-cyan-500/15 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    tableHighlight: 'text-cyan-400 font-semibold bg-cyan-500/5',
    pillCore: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    iconCheck: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
    deliverableNum: 'text-cyan-400/60',
    timelineNode: 'border-cyan-500 text-cyan-400'
  },
  purple: {
    accentText: 'text-purple-400',
    accentBorder: 'border-purple-500/30',
    accentBg: 'bg-purple-500/10',
    glow: 'bg-purple-500/10',
    btnPrimary: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_25px_-5px_rgba(168,85,247,0.5)]',
    btnSecondary: 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10',
    dot: 'bg-purple-400',
    gradientText: 'from-purple-400 via-violet-300 to-indigo-400',
    activeQuiz: 'bg-purple-500/15 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    tableHighlight: 'text-purple-400 font-semibold bg-purple-500/5',
    pillCore: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    iconCheck: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
    deliverableNum: 'text-purple-400/60',
    timelineNode: 'border-purple-500 text-purple-400'
  },
  indigo: {
    accentText: 'text-indigo-400',
    accentBorder: 'border-indigo-500/30',
    accentBg: 'bg-indigo-500/10',
    glow: 'bg-indigo-500/10',
    btnPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_25px_-5px_rgba(99,102,241,0.5)]',
    btnSecondary: 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10',
    dot: 'bg-indigo-400',
    gradientText: 'from-indigo-400 via-sky-300 to-blue-400',
    activeQuiz: 'bg-indigo-500/15 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    tableHighlight: 'text-indigo-400 font-semibold bg-indigo-500/5',
    pillCore: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    iconCheck: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    deliverableNum: 'text-indigo-400/60',
    timelineNode: 'border-indigo-500 text-indigo-400'
  },
  amber: {
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    accentBg: 'bg-amber-500/10',
    glow: 'bg-amber-500/10',
    btnPrimary: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_25px_-5px_rgba(245,158,11,0.5)]',
    btnSecondary: 'border-amber-500/30 text-amber-300 hover:bg-amber-500/10',
    dot: 'bg-amber-400',
    gradientText: 'from-amber-400 via-orange-300 to-yellow-400',
    activeQuiz: 'bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    tableHighlight: 'text-amber-400 font-semibold bg-amber-500/5',
    pillCore: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    iconCheck: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
    deliverableNum: 'text-amber-400/60',
    timelineNode: 'border-amber-500 text-amber-400'
  },
  blue: {
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/30',
    accentBg: 'bg-blue-500/10',
    glow: 'bg-blue-500/10',
    btnPrimary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)]',
    btnSecondary: 'border-blue-500/30 text-blue-300 hover:bg-blue-500/10',
    dot: 'bg-blue-400',
    gradientText: 'from-blue-400 via-cyan-300 to-teal-300',
    activeQuiz: 'bg-blue-500/15 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    tableHighlight: 'text-blue-400 font-semibold bg-blue-500/5',
    pillCore: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    iconCheck: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    deliverableNum: 'text-blue-400/60',
    timelineNode: 'border-blue-500 text-blue-400'
  }
};

const ALL_SERVICES_SHORTCUTS = [
  { id: 'ux-ui', name: 'UX/UI Design', cluster: 'Apps & Producto', route: 'servicio/ux-ui', dot: 'bg-emerald-400' },
  { id: 'ai-engineering', name: 'AI Engineering', cluster: 'Apps & Producto', route: 'servicio/ai-engineering', dot: 'bg-cyan-400' },
  { id: 'ai-agents', name: 'Agentes IA', cluster: 'Automatización', route: 'servicio/ai-agents', dot: 'bg-purple-400' },
  { id: 'data-analytics', name: 'Data & Analytics', cluster: 'Automatización', route: 'servicio/data-analytics', dot: 'bg-indigo-400' },
  { id: 'security', name: 'Security & Vault', cluster: 'Gobernanza IA', route: 'servicio/security', dot: 'bg-amber-400' },
  { id: 'business-ai', name: 'Business AI Consulting', cluster: 'Gobernanza IA', route: 'servicio/business-ai', dot: 'bg-blue-400' }
];

const ServiceLandingTemplate = ({ data }) => {
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
    if (total >= 10) return { band: 'Madurez Avanzada', desc: 'Tu operación tiene bases sólidas. El siguiente paso es escalar agresivamente con arquitecturas nativas de IA y estándares enterprise para multiplicar márgenes.' };
    if (total >= 6) return { band: 'Madurez Intermedia', desc: 'Tienes procesos funcionales pero existen cuellos de botella críticos. Necesitamos estandarizar, integrar y blindar sistemas para evitar costosa deuda técnica.' };
    return { band: 'Madurez Temprana', desc: 'Tu operación depende fuertemente de intervención manual o sistemas frágiles. El retorno de diagnosticar y modernizar tus flujos críticos será masivo e inmediato.' };
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Active Theme
  const theme = THEME_CONFIG[data.themeKey] || THEME_CONFIG.blue;

  const scrollToFormWithPackage = (pkgText) => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 0. BREADCRUMB & CONTEXT BAR */}
      <div className="border-b border-white/[0.06] bg-[#030611]/80 backdrop-blur-md sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <a href="#/" className="hover:text-white transition-colors">Inicio</a>
            <span>/</span>
            <a href="#/servicios" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">{data.clusterName}</span>
            <span>/</span>
            <span className={`font-semibold ${theme.accentText}`}>{data.packageName}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest ${theme.accentText} font-bold`}>
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`}></span>
              {data.canonicalBadge}
            </span>
            <a 
              href="#/servicios" 
              className="text-slate-400 hover:text-white transition-colors font-mono text-[11px] hidden sm:inline-flex items-center gap-1"
            >
              <span>← Ver los 6 servicios</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 md:pt-24 pb-16 lg:pb-24 overflow-hidden border-b border-white/[0.08]">
        {/* Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] ${theme.glow} blur-[140px] pointer-events-none rounded-full`} />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-10 items-center text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Cluster Kicker - Clean typography without capsule */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold mb-6">
              <span className="text-slate-400">{data.clusterName}</span>
              <span className="text-slate-600">•</span>
              <span className={theme.accentText}>{data.canonicalBadge}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
              {data.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              {data.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToFormWithPackage(data.packageName)}
                className={`font-bold text-sm px-8 py-4 rounded-xl transition-all flex items-center gap-2 ${theme.btnPrimary}`}
              >
                <span>Agenda tu Diagnóstico</span>
                <span>→</span>
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById('cuatro-formas') || document.getElementById('entregables');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-bold text-sm px-7 py-4 rounded-xl transition-all border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20`}
              >
                <span>Ver 4 Formas de Contratar ↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZED STATS STRIP */}
      {data.stats && (
        <div className="border-b border-white/[0.08] bg-[#040813]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {data.stats.map((st, sIdx) => (
              <div key={sIdx} className="flex flex-col items-center text-center pt-6 md:pt-0">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r ${sIdx === 1 ? theme.gradientText : 'from-white to-slate-200'}`}>
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

      {/* 3. ALINEACIÓN CON LAS 4 FORMAS DE TRABAJAR */}
      {data.fourWaysToWork && (
        <section id="cuatro-formas" className="py-24 border-b border-white/[0.08] bg-[#02040A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className={`inline-block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
                ✦ ARQUITECTURA MODULAR B2B
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                4 Formas de Trabajar: ¿Cómo contratar esta capacidad<span className="text-blue-500">?</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Nuestros 4 pilares no son un ciclo obligatorio. Puedes contratar esta capability a través de cualquiera de las 4 modalidades según el momento y la necesidad de tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.fourWaysToWork.map((way, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#050A17] border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group ${way.isCore ? `${theme.accentBorder} shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] bg-gradient-to-b from-[#081126] to-[#040813]` : 'border-white/[0.08] hover:border-white/20'}`}
                >
                  <div>
                    {/* Header Pilar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                        {way.num}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        ⏳ {way.duration}
                      </span>
                    </div>

                    <a 
                      href={
                        way.num === '01' ? '#/consultoria-tecnologica' :
                        way.num === '02' ? '#/automatizacion-agentica' :
                        way.num === '03' ? '#/producto-digital' :
                        '#/evolucion-digital'
                      }
                      className="hover:text-blue-400 transition-colors group/title"
                    >
                      <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2 group-hover/title:text-blue-400 transition-colors">
                        <span>{way.name}</span>
                        {way.isCore && (
                          <span className={`text-[10px] font-mono uppercase font-black ${theme.accentText}`}>
                            [Núcleo]
                          </span>
                        )}
                      </h3>
                    </a>

                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme.accentText}`}>
                      {way.role}
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {way.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                        Entregable Concreto:
                      </div>
                      <div className="text-xs font-semibold text-slate-200">
                        {way.deliverable}
                      </div>
                    </div>

                    <a
                      href={
                        way.num === '01' ? '#/consultoria-tecnologica' :
                        way.num === '02' ? '#/automatizacion-agentica' :
                        way.num === '03' ? '#/producto-digital' :
                        '#/evolucion-digital'
                      }
                      className="w-full flex items-center justify-between text-xs font-mono font-bold text-blue-300 hover:text-white px-3.5 py-2.5 rounded-xl bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-400 shadow-[0_0_12px_-3px_rgba(59,130,246,0.25)] transition-all duration-200 group/btn"
                    >
                      <span>Ver Landing del Pilar {way.num}</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform font-bold">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => scrollToFormWithPackage(data.packageName)}
                className={`font-bold text-sm px-8 py-3.5 rounded-xl transition-all ${theme.btnPrimary}`}
              >
                Cotizar este servicio bajo la modalidad ideal →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4. PAIN POINTS & ANTIDOTES */}
      {data.painPoints && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17] relative overflow-hidden">
          {/* Ambient subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/5 blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="max-w-3xl mb-14">
              <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
                {data.painPoints.eyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
                {data.painPoints.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.painPoints.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-[#080E24] to-[#030612] border border-white/[0.08] hover:border-red-500/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl relative overflow-hidden group"
                >
                  {/* Subtle top ambient indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/30 via-amber-500/20 to-transparent group-hover:from-red-500 group-hover:via-amber-500 transition-all duration-500"></div>

                  <div>
                    {/* Top Row: Contextual Icon & Severity Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-inner">
                        {renderPainIcon(item.iconType)}
                      </div>
                      {item.tag && (
                        <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Problem Title */}
                    <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Problem Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Antidote Block */}
                  {item.antidote && (
                    <div className="pt-4 border-t border-white/[0.08] mt-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>El Antídoto BluePixel:</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium leading-relaxed bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3">
                        {item.antidote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cost of Inaction Bottom Strip */}
            {data.painPoints.costOfInaction && (
              <div className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent border border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-1">
                      ✦ Impacto Financiero del Costo de Inacción
                    </div>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                      {data.painPoints.costOfInaction}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => scrollToFormWithPackage(data.packageName)}
                  className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 cursor-pointer whitespace-nowrap"
                >
                  Evitar este costo ahora →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. MATRIX / EVOLUTION */}
      {data.matrix && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {data.matrix.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.matrix.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.matrix.subtitle}</p>

            <div className="overflow-x-auto border border-white/[0.08] rounded-2xl bg-[#050A17] shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    {data.matrix.headers.map((h, idx) => (
                      <th 
                        key={idx} 
                        className={`p-5 text-xs font-mono tracking-widest uppercase border-b border-white/[0.08] ${idx === data.matrix.headers.length - 2 ? `${theme.accentText} font-bold bg-white/[0.02]` : 'text-slate-400'}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.08]">
                  {data.matrix.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-bold text-white text-sm bg-[#040813] whitespace-nowrap">{row.label}</td>
                      {row.cols.map((col, cIdx) => (
                        <td 
                          key={cIdx} 
                          className={`p-5 text-sm ${cIdx === row.cols.length - 2 ? theme.tableHighlight : 'text-slate-300'}`}
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {data.callout1 && (
              <div className={`mt-12 p-8 md:p-10 ${theme.accentBg} border ${theme.accentBorder} rounded-2xl relative overflow-hidden`}>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold">
                  ✦ Garantía FutureProof BluePixel
                </div>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium">
                  {data.callout1}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. SPECS / SOLUTIONS */}
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

      {/* 7. QUIZ INTERACTIVO */}
      {data.quiz && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className={`text-xs font-mono uppercase tracking-widest font-bold block mb-2 ${theme.accentText}`}>
                ✦ TEST DIAGNÓSTICO RÁPIDO
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
                    Diagnóstico Preliminar
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} mb-4`}>
                    {getQuizResult().band}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-lg mx-auto mb-8 text-sm md:text-base">
                    {getQuizResult().desc}
                  </p>
                  <button 
                    onClick={() => scrollToFormWithPackage(`${data.packageName} — ${getQuizResult().band}`)}
                    className={`font-bold text-sm px-8 py-4 rounded-xl transition-all ${theme.btnPrimary}`}
                  >
                    Agendar Diagnóstico con este Resultado →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 8. DELIVERABLES / ESTÁNDAR DE CALIDAD */}
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
                    <div className="flex flex-wrap items-center gap-4">
                      {step.deliverables.map((del, dIdx) => (
                        <span key={dIdx} className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.accentText} flex items-center gap-1.5`}>
                          <span>✦</span> Entregable: {del}
                        </span>
                      ))}
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQs */}
      {data.faqs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 text-center text-white">
              Preguntas Frecuentes sobre {data.packageName}<span className="text-blue-500">.</span>
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

      {/* 11. OTRAS CAPACIDADES (CROSS NAVIGATION) */}
      <section className="py-16 border-b border-white/[0.08] bg-[#030611]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
                Ecosistema de Capacidades BluePixel
              </span>
              <h3 className="text-xl font-bold text-white">
                Explora nuestras otras capacidades técnicas<span className="text-blue-500">.</span>
              </h3>
            </div>
            <a 
              href="#/servicios" 
              className="text-xs font-mono text-blue-400 hover:text-white transition-colors"
            >
              Directorio Completo de Servicios →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {ALL_SERVICES_SHORTCUTS.map((srv) => (
              <a
                key={srv.id}
                href={`#/${srv.route}`}
                className={`p-4 rounded-xl border text-left transition-all ${srv.id === data.id ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/[0.08] bg-[#060A14] hover:border-white/20'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${srv.dot}`}></span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase truncate">{srv.cluster}</span>
                </div>
                <div className="text-xs font-bold text-white leading-tight">
                  {srv.name}
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
              ¿Listo para transformar tu operación con {data.packageName}<span className="text-blue-500">?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Un arquitecto senior revisará tu caso y te presentará un diagnóstico preliminar con cálculo de retorno de inversión.
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

export default ServiceLandingTemplate;
