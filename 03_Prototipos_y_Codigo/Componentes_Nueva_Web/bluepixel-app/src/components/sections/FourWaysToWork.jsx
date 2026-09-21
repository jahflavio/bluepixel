import React, { useState } from 'react';

const CONTENT = {
  es: {
    badge: 'SERVICIOS MODULARES B2B • EXPERTISE UX & IA',
    title: '4 formas de trabajar juntos según el momento de tu empresa',
    subtitle: 'Servicios independientes de alta especialidad con maestría en UX e ingeniería de misión crítica. Elige la capacidad exacta que tu negocio necesita hoy, sin procesos rígidos ni ciclos obligatorios.',
    phases: [
      {
        num: '01',
        titleLine1: 'Consultoría',
        titleLine2: 'Digital',
        badges: ['PYMES', 'ENTERPRISE'],
        target: 'Para empresas buscando certidumbre técnica y ROI cuantificado',
        desc: 'Elimina brechas actuales e identifica oportunidades de mayor ROI con las mejores metodologías de software.',
        bullets: [
          'Diagnóstico, backlog priorizado y cálculo de ROI en 2 a 4 semanas',
          'Eliminación de brechas operativas con las mejores metodologías de software',
          'Mapeo profundo de procesos, journeys de usuario (UX Research) y fricción operativa',
          'Evaluación estratégica para integrar IA con sentido de negocio (AI Readiness)',
          'Blueprint de arquitectura técnica, gobernanza y roadmap de trabajo'
        ],
        hoverBorder: 'hover:border-slate-500/50',
        hasGlow: false,
        dot: 'bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.6)]',
        gradient: 'from-slate-500/10',
        hoverFooterBorder: 'group-hover:border-slate-500/30',
        footerTitle: 'Certeza Técnica & ROI Cuantificado.',
        footerDesc: 'Roadmap ejecutivo y business case para invertir sobre seguro antes de tirar una sola línea de código.'
      },
      {
        num: '02',
        titleLine1: 'Agentes &',
        titleLine2: 'Automatización',
        badges: ['PYMES', 'ENTERPRISE'],
        target: 'Para operaciones con cuellos de botella y tareas repetitivas',
        desc: 'Conecta softwares existentes, elimina trabajo repetitivo y diseña adopción fluida para tu equipo (SMEs).',
        bullets: [
          'Primeros agentes y automatizaciones en producción en 2 a 4 semanas',
          'Conexión e integración con softwares existentes (SAP, Salesforce, ERP, CRM)',
          'Sistemas multi-agente con arquitectura RAG sobre datos reales de tu empresa',
          'UX conversacional e interfaces intuitivas para adopción humana fluida sin fricción',
          'Eleva a tu equipo con skills desarrollados como Subject Matter Experts (SMEs)'
        ],
        hoverBorder: 'hover:border-emerald-500/50',
        hasGlow: false,
        dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
        gradient: 'from-emerald-500/10',
        hoverFooterBorder: 'group-hover:border-emerald-500/30',
        footerTitle: 'Ecosistema Conectado & Multi-Agente.',
        footerDesc: 'Tu stack actual potenciado con IA para eliminar fricción y liberar tiempo operativo de tu equipo.'
      },
      {
        num: '03',
        titleLine1: 'Plataformas',
        titleLine2: 'Digitales',
        badges: ['STARTUPS', 'PYMES', 'ENTERPRISE'],
        target: 'Para construir plataformas y MVPs desde cero con UX validado',
        desc: 'Unimos nuestra maestría referente en UX/UI con ingeniería Full Stack para crear plataformas que tus usuarios aman.',
        bullets: [
          'Plataforma o MVP listo en 3 meses con UX validado y time-to-market prioritario',
          'Construcción de software a la medida desde cero con capacidades Full Stack',
          'Expertise referente en UX/UI: investigación con usuarios reales, design systems y prototipado',
          'Ingeniería acelerada por IA (AI-Forward Deploy Engineering) y QA testing riguroso',
          'PMO dedicado, arquitectura sin deuda técnica y Security & Reliability'
        ],
        hoverBorder: 'hover:border-blue-500/50',
        hasGlow: true,
        dot: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
        gradient: 'from-blue-500/10',
        hoverFooterBorder: 'group-hover:border-blue-500/30',
        footerTitle: 'Plataforma Core Lista para Escalar.',
        footerDesc: 'Software a la medida con UX de clase mundial, arquitectura Full Stack sólida y cero deuda técnica.'
      },
      {
        num: '04',
        titleLine1: 'Evolución',
        titleLine2: 'Digital',
        badges: ['PYMES', 'ENTERPRISE'],
        target: 'Para escalar plataformas existentes con optimización continua de UX',
        desc: 'Entendimiento de negocio, homologación de intereses y optimización continua de UX para evolucionar con el mercado.',
        bullets: [
          'Roadmap vivo de 6 o 12 meses con entregas continuas cada sprint',
          'Entendimiento profundo de negocio y homologación de intereses mutuos',
          'Upscaling consultivo y evolución constante al ritmo del mercado',
          'Capa de capacidades transversales (UX/UI Evolutivo, Software, Analítica y Seguridad)',
          'Optimización continua de conversión (CRO), retención y UX Health Score'
        ],
        hoverBorder: 'hover:border-indigo-500/50',
        hasGlow: false,
        dot: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
        gradient: 'from-purple-500/10',
        hoverFooterBorder: 'group-hover:border-purple-500/30',
        footerTitle: 'Brazo Tecnológico On-Demand.',
        footerDesc: 'Escuadrón continuo de CRO, UX, Analítica y Seguridad evolucionando tu plataforma sin inflar nómina.'
      }
    ]
  },
  en: {
    badge: 'MODULAR B2B SERVICES • UX & AI MASTERY',
    title: '4 ways to partner based on where your business stands today',
    subtitle: 'Independent, high-impact services backed by world-class UX and mission-critical engineering. Engage the exact capability you need today—no rigid cycles, no mandatory sequences.',
    phases: [
      {
        num: '01',
        titleLine1: 'Digital',
        titleLine2: 'Consulting',
        badges: ['SMES', 'ENTERPRISE'],
        target: 'For companies seeking technical certainty and quantified ROI',
        desc: 'Eliminate existing gaps and identify highest-ROI opportunities with industry-leading software methodologies.',
        bullets: [
          'Diagnosis, prioritized backlog, and ROI projection in 2 to 4 weeks',
          'Operational gap elimination with best-in-class software engineering practices',
          'In-depth process mapping, user journey discovery (UX Research), and friction diagnosis',
          'Strategic assessment to integrate AI with real business viability (AI Readiness)',
          'Technical architecture blueprint, data governance, and execution roadmap'
        ],
        hoverBorder: 'hover:border-slate-500/50',
        hasGlow: false,
        dot: 'bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.6)]',
        gradient: 'from-slate-500/10',
        hoverFooterBorder: 'group-hover:border-slate-500/30',
        footerTitle: 'Technical Certainty & Quantified ROI.',
        footerDesc: 'Executive roadmap and business case to invest with total confidence before writing code.'
      },
      {
        num: '02',
        titleLine1: 'Agents &',
        titleLine2: 'Automation',
        badges: ['SMES', 'ENTERPRISE'],
        target: 'For operations facing productivity bottlenecks and repetitive tasks',
        desc: 'Connect existing software, eliminate repetitive tasks, and design frictionless adoption for your team (SMEs).',
        bullets: [
          'First production-ready agents and workflows deployed in 2 to 4 weeks',
          'Seamless integration with your existing stack (SAP, Salesforce, ERP, CRM)',
          'Multi-agent systems with enterprise RAG architecture on real company data',
          'Conversational UX and intuitive interfaces for frictionless, human-first adoption',
          'Empower your team with specialized skills as Subject Matter Experts (SMEs)'
        ],
        hoverBorder: 'hover:border-emerald-500/50',
        hasGlow: false,
        dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
        gradient: 'from-emerald-500/10',
        hoverFooterBorder: 'group-hover:border-emerald-500/30',
        footerTitle: 'Connected & Multi-Agent Ecosystem.',
        footerDesc: 'Your existing stack supercharged with AI to eliminate operational friction and manual tasks.'
      },
      {
        num: '03',
        titleLine1: 'Digital',
        titleLine2: 'Platforms',
        badges: ['STARTUPS', 'SMES', 'ENTERPRISE'],
        target: 'To build digital platforms & MVPs from scratch with validated UX',
        desc: 'We blend our benchmark UX/UI mastery with Full Stack engineering to build intuitive platforms users genuinely love.',
        bullets: [
          'Production-ready platform or MVP in 3 months with validated UX and fast time-to-market',
          'Custom software built from the ground up with end-to-end Full Stack capabilities',
          'Benchmark UX/UI mastery: real user research, scalable design systems, and interactive prototyping',
          'AI-Forward Deploy Engineering with enterprise-grade QA testing',
          'Dedicated PMO governance, zero technical debt, and Security & Reliability'
        ],
        hoverBorder: 'hover:border-blue-500/50',
        hasGlow: true,
        dot: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
        gradient: 'from-blue-500/10',
        hoverFooterBorder: 'group-hover:border-blue-500/30',
        footerTitle: 'Core Platform Ready to Scale.',
        footerDesc: 'Custom software with benchmark UX design, robust Full Stack architecture, and zero technical debt.'
      },
      {
        num: '04',
        titleLine1: 'Digital',
        titleLine2: 'Evolution',
        badges: ['SMES', 'ENTERPRISE'],
        target: 'To scale existing platforms with continuous UX and conversion optimization',
        desc: 'Deep business alignment, mutual incentives, and continuous UX optimization to evolve alongside market demands.',
        bullets: [
          'Living 6- or 12-month roadmap with continuous sprint-by-sprint deliveries',
          'Deep business understanding and alignment of mutual incentives with company goals',
          'Consultative upscaling and agile platform evolution matching market dynamics',
          'Cross-functional capability layer: Evolutionary UX/UI, Software, Data Analytics, and Security',
          'Continuous Conversion Rate Optimization (CRO), retention gains, and UX Health Score'
        ],
        hoverBorder: 'hover:border-indigo-500/50',
        hasGlow: false,
        dot: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
        gradient: 'from-purple-500/10',
        hoverFooterBorder: 'group-hover:border-purple-500/30',
        footerTitle: 'On-Demand Technology Partner.',
        footerDesc: 'Dedicated squad for CRO, UX, Analytics, and Security evolving your platform without payroll overhead.'
      }
    ]
  }
};

const FourWaysToWork = ({ defaultLang = 'es' }) => {
  const [lang, setLang] = useState(defaultLang);
  const t = CONTENT[lang] || CONTENT.es;

  return (
    <section id="como-trabajamos" className="py-24 bg-[#02050A] border-t border-b border-white/[0.06] relative overflow-hidden scroll-mt-20">
      <span id="how-we-work" className="absolute -top-20" />
      <span id="pilares" className="absolute -top-20" />
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                {t.badge}
              </span>
            </div>

            {/* Language Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.title}<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de 4 Fases en Formato Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {t.phases.map((phase) => (
            <div
              key={phase.num}
              className={`bg-[#080B12] border border-white/10 rounded-2xl flex flex-col justify-between ${phase.hoverBorder} transition-all group relative overflow-hidden`}
            >
              {phase.hasGlow && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
              )}

              <div className="p-8 flex-1 flex flex-col relative z-10">
                {/* Phase Header - Fixed Height 64px */}
                <div className="flex items-start gap-3 mb-6 h-[64px]">
                  <span className="text-blue-400 font-mono text-sm font-bold mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                    {phase.num}
                  </span>
                  <h3 className="text-white font-black text-2xl tracking-wide uppercase leading-tight">
                    {phase.titleLine1}<br/>{phase.titleLine2}
                  </h3>
                </div>
                
                {/* Badges (Cápsulas) - Single Row h-[32px] */}
                <div className="flex items-center gap-1.5 mb-6 h-[32px] overflow-hidden">
                  {phase.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[9px] font-bold tracking-widest uppercase shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.12)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title - Uniform Min-Height 84px */}
                <h4 className="text-xl font-bold text-white mb-3 min-h-[84px] flex items-center leading-snug">
                  {phase.target}
                </h4>

                {/* Subtitle - Uniform Min-Height 64px */}
                <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[64px] flex items-start">
                  {phase.desc}
                </p>

                {/* Bullets (Palomitas en azul) */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {phase.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-blue-400 mt-0.5 font-bold shrink-0 text-base leading-none drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Area */}
              <div className="px-8 pb-8 relative z-10">
                <div className={`bg-[#0C101A] border border-white/5 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden ${phase.hoverFooterBorder} transition-all min-h-[84px]`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-1.5 h-1.5 rounded-full ${phase.dot} mt-1.5 shrink-0 relative z-10`}></div>
                  <div className="relative z-10">
                    <div className="text-white text-sm font-bold min-h-[22px] flex items-center">{phase.footerTitle}</div>
                    <div className="text-slate-400 text-xs mt-1">{phase.footerDesc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FourWaysToWorkEN = (props) => <FourWaysToWork defaultLang="en" {...props} />;
export const ThreeWaysToWork = FourWaysToWork;
export const ThreeWaysToWorkEN = FourWaysToWorkEN;

export default FourWaysToWork;
