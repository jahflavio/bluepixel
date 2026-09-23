import React, { useState, useEffect } from 'react';
import MultiStepContact from '../../forms/MultiStepContact';
import Footer from '../../layout/Footer';
import WaysToWorkSubNavbar from '../../layout/WaysToWorkSubNavbar';
import FutureproofCTABanner from '../../widgets/FutureproofCTABanner';
import StatValue from '../../widgets/StatValue';
import { CLIENT_LOGOS } from '../../../data/constants';

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
    timelineNode: 'border-blue-500 text-blue-400',
    solidGlow: 'bg-blue-600'
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
    timelineNode: 'border-purple-500 text-purple-400',
    solidGlow: 'bg-purple-600'
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
    timelineNode: 'border-cyan-500 text-cyan-400',
    solidGlow: 'bg-cyan-500'
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
    timelineNode: 'border-indigo-500 text-indigo-400',
    solidGlow: 'bg-indigo-600'
  }
};

const ALL_PILLARS = [
  { id: 'consultoria-digital', num: '01', name: 'Consultoría Digital', duration: '2 a 4 Semanas', route: 'consultoria-tecnologica', dot: 'bg-blue-400' },
  { id: 'agentes-automatizacion', num: '02', name: 'Agentes & Automatización', duration: '2 a 4 Semanas', route: 'automatizacion-agentica', dot: 'bg-purple-400' },
  { id: 'plataformas-digitales', num: '03', name: 'Plataformas Digitales', duration: '2 a 4 Meses a Producción', route: 'producto-digital', dot: 'bg-cyan-400' },
  { id: 'evolucion-digital', num: '04', name: 'Evolución Digital', duration: 'Roadmap 6/12 Meses', route: 'evolucion-digital', dot: 'bg-indigo-400' }
];

/* WIDGET INTERACTIVO PILAR 01: CALCULADOR DE COSTO DE INACCIÓN & ROI */
const RoiCalculatorWidget = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [frictionPct, setFrictionPct] = useState(25);

  // Estimación financiera estándar B2B México:
  // Horas por año: 1,900 hrs/persona. Costo hora promedio: $350 MXN (nómina + overhead)
  const annualPayroll = teamSize * 1900 * 350;
  const annualWaste = Math.round(annualPayroll * (frictionPct / 100));
  const roiMultiplier = (annualWaste / 280000).toFixed(1);

  return (
    <div className="bg-[#050A19] border border-blue-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"></div>
      
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-300 font-bold">
            Calculador de Costo de Inacción (COI) & ROI
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Modelo Financiero IMPATH™</span>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between text-xs text-slate-300 font-mono mb-2">
            <span>Personas en el equipo / operación:</span>
            <span className="font-bold text-white text-sm">{teamSize} colaboradores</span>
          </div>
          <div className="flex gap-2">
            {[5, 15, 35, 75].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setTeamSize(size)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${teamSize === size ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400' : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] border border-white/[0.06]'}`}
              >
                {size} pers.
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-300 font-mono mb-2">
            <span>Fricción o tiempo perdido en reprocesos / silos:</span>
            <span className="font-bold text-amber-400 text-sm">{frictionPct}% del tiempo</span>
          </div>
          <div className="flex gap-2">
            {[
              { label: '15% Leve', val: 15 },
              { label: '25% Promedio B2B', val: 25 },
              { label: '40% Crítica', val: 40 }
            ].map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setFrictionPct(f.val)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${frictionPct === f.val ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] border border-white/[0.06]'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#02050E] border border-blue-500/30 space-y-3">
        <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-2.5">
          <span className="text-xs text-slate-400 font-mono">Fuga Anual por Inacción (COI):</span>
          <span className="text-xl md:text-2xl font-mono font-black text-red-400">
            -${(annualWaste / 1000000).toFixed(2)}M MXN<span className="text-xs text-slate-500 font-normal">/año</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="text-[10px] font-mono text-slate-400">Amortización Diagnóstico:</div>
            <div className="text-sm font-mono font-bold text-blue-300">&lt; 21 días de backlog</div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-[10px] font-mono text-slate-400">Multiplicador ROI Esperado:</div>
            <div className="text-sm font-mono font-bold text-emerald-300">+{roiMultiplier}x de retorno</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Entrega en 14 a 28 días</span>
        </div>
        <span className="text-blue-400 font-semibold">100% Certeza Previa</span>
      </div>
    </div>
  );
};

/* WIDGET INTERACTIVO PILAR 02: SIMULADOR DE AGENTE DETERMINÍSTICO MCP */
const McpAgentSimulatorWidget = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: 'Quirófano 24/7 (logística quirúrgica)',
      event: 'Urgencia 2:14 AM: Solicitud Kit Fijación Cirugía de Columna vía WhatsApp',
      agentStep: 'RAG Privado: Validación COFEPRIS y cruce con stock de guardia en 0.4s',
      mcpStep: 'Protocolo MCP: POST /erp/v1/orders - Reserva y despacho GPS en 0.5s',
      result: 'Cotización membretada emitida en 1.8s. 0 llamadas perdidas.',
      tag: 'Operativo Quirúrgico'
    },
    {
      title: 'Conciliación SAP + SAT',
      event: 'Cierre de mes: 1,420 facturas con discrepancia en portal bancario',
      agentStep: 'RAG Privado: Matching determinístico de UUIDs y órdenes de compra',
      mcpStep: 'Protocolo MCP: PUT /sap/accounting/reconciliation con token auditado',
      result: 'Conciliación de 40 horas reducida a 14 segundos sin error humano.',
      tag: 'Finanzas & Compliance'
    },
    {
      title: 'Cotización B2B Salesforce',
      event: 'Lead Enterprise solicita RFP de 50 licencias personalizadas',
      agentStep: 'RAG Privado: Consulta matriz de descuentos por volumen y márgenes',
      mcpStep: 'Protocolo MCP: POST /salesforce/opportunity + generación PDF',
      result: 'Propuesta formal entregada en 2.3s con seguimiento automático.',
      tag: 'Ventas Enterprise'
    }
  ];

  const current = scenarios[activeScenario];

  return (
    <div className="bg-[#050A19] border border-purple-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500"></div>

      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-bold">
            Simulador Agéntico · Protocolo MCP en Vivo
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-purple-300">
          Cero Alucinaciones
        </span>
      </div>

      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
        {scenarios.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveScenario(idx)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${activeScenario === idx ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30' : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="space-y-2.5 mb-4">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>1. Trigger de Entrada</span>
          </div>
          <div className="font-mono text-slate-200">{current.event}</div>
        </div>

        <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-purple-300 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span>2. Agente Autónomo + RAG Privado</span>
          </div>
          <div className="font-mono text-slate-200">{current.agentStep}</div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>3. Conexión Determinística MCP (Zero Lock-In)</span>
          </div>
          <div className="font-mono text-emerald-200 font-semibold">{current.mcpStep}</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#02050E] border border-purple-500/30 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Resultado en Producción:</div>
          <div className="text-xs font-mono font-bold text-white mt-0.5">{current.result}</div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded">
          {current.tag}
        </span>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Despliegue en 2 a 4 semanas</span>
        </div>
        <span className="text-purple-400 font-semibold">Sin tocar código legado</span>
      </div>
    </div>
  );
};

/* WIDGET INTERACTIVO PILAR 03: SIMULADOR DE CONSTRUCCIÓN 2 A 4 MESES */
const BuildVisualizerWidget = () => {
  const [week, setWeek] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 16) {
        current = 16;
        clearInterval(interval);
      }
      setWeek(current);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    { label: 'UX DISCOVERY & PS (SEM 1-3)', color: 'bg-blue-500 text-blue-400', n: 3, activeN: Math.min(3, week) },
    { label: 'PROTOTIPADO & ARQUITECTURA (SEM 4-6)', color: 'bg-emerald-500 text-emerald-400', n: 3, activeN: week > 3 ? Math.min(3, week - 3) : 0 },
    { label: 'DESARROLLO CORE FULL STACK (SEM 7-12)', color: 'bg-cyan-500 text-cyan-400', n: 6, activeN: week > 6 ? Math.min(6, week - 6) : 0 },
    { label: 'QA, SEGURIDAD & OWASP (SEM 13-14)', color: 'bg-amber-500 text-amber-400', n: 2, activeN: week > 12 ? Math.min(2, week - 12) : 0 },
    { label: 'GO-LIVE PRODUCCIÓN & SLA (SEM 15-16)', color: 'bg-purple-500 text-purple-400', n: 2, activeN: week > 14 ? Math.min(2, week - 14) : 0 },
  ];

  return (
    <div className="bg-[#050A19] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
            Simulador de Construcción · 2 a 4 Meses
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-cyan-300">
          Semana {week}/16 (Mes {Math.min(4, Math.max(1, Math.ceil(week / 4)))})
        </span>
      </div>

      <div className="space-y-3">
        {phases.map((p, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-1">
              <span className={p.color.split(' ')[1]}>{p.label}</span>
              <span className="text-slate-500">{p.activeN}/{p.n}</span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: p.n }).map((_, i) => (
                <div 
                  key={i}
                  className={`h-2 flex-1 rounded-sm transition-all duration-300 ${i < p.activeN ? p.color.split(' ')[0] : 'bg-white/[0.05]'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>SLA 99.9% Cloud-Native</span>
        </div>
        <span className="text-cyan-400 font-semibold">100% Código Tuyo</span>
      </div>
    </div>
  );
};

/* WIDGET INTERACTIVO PILAR 04: DASHBOARD UX HEALTH SCORE™ */
const UXHealthScoreWidget = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 87) {
        current = 87;
        clearInterval(interval);
      }
      setScore(current);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { name: 'Usabilidad (IMPATH™)', val: 94, color: 'bg-emerald-400' },
    { name: 'Rendimiento (Core Web Vitals)', val: 88, color: 'bg-cyan-400' },
    { name: 'Estabilidad (SLA 99.9%)', val: 99, color: 'bg-emerald-400' },
    { name: 'Conversión (CRO Funnel)', val: 82, color: 'bg-indigo-400' },
  ];

  return (
    <div className="bg-[#050A19] border border-indigo-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500"></div>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
            UX Health Score™ · Monitoreo en Vivo
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Mixpanel Telemetry 24/7</span>
      </div>

      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight">
            {score}<span className="text-lg text-slate-500 font-normal">/100</span>
          </div>
          <div className="text-[11px] font-mono text-emerald-400 font-semibold mt-1">
            ↑ +12 pts vs. trimestre anterior
          </div>
        </div>
        <div className="text-right text-xs text-slate-400 font-mono">
          <div>Ganancia 4 trimestres:</div>
          <div className="text-base font-bold text-amber-400 font-mono">+34 pts CRO</div>
        </div>
      </div>

      <div className="space-y-2.5 mb-5">
        {metrics.map((m, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
              <span>{m.name}</span>
              <span className="font-bold text-white">{m.val}%</span>
            </div>
            <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
              <div 
                className={`h-full ${m.color} transition-all duration-700 rounded-full`}
                style={{ width: `${(score / 87) * m.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-center">
        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-red-400 font-bold">
          2 Fricciones Activas
        </div>
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 font-bold">
          1 Oportunidad CRO
        </div>
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold">
          SLA 99.9% Óptimo
        </div>
      </div>
    </div>
  );
};

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

  // Calculamos el resultado en base a las opciones y lo ligamos dinámicamente con data.quiz.results
  const getQuizResult = () => {
    const total = Object.values(quizScores).reduce((a, b) => a + b, 0);
    if (total >= 10) return data.quiz.results.high;
    if (total >= 6) return data.quiz.results.medium;
    return data.quiz.results.low;
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Active Theme
  const theme = PILLAR_THEMES[data.themeKey] || PILLAR_THEMES.blue;

  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Columna vertebral del relato, en el mismo orden en que se renderiza. Cada
  // pilar tiene un subconjunto distinto de estas secciones, asi que el numero
  // se calcula aqui sobre las que realmente existen: antes venia escrito a mano
  // en el dato y el visitante veia la secuencia saltando de 02 a 05.
  // 'capabilitiesActivation' no entra: vive en el cierre como directorio hacia
  // las paginas de servicio, no como capitulo del argumento.
  const NARRATIVE_SECTIONS = [
    'painPoints', 'financialCallout', 'specs', 'comparisonMatrix',
    'aiLayer', 'cycle', 'timeline', 'cadence', 'deliverables', 'plans'
  ];

  const sectionNumbers = {};
  NARRATIVE_SECTIONS.filter((key) => data[key]).forEach((key, idx) => {
    sectionNumbers[key] = String(idx + 1).padStart(2, '0');
  });

  // Logo del cliente del caso de estudio. El dato puede declararlo con
  // 'logoKey'; si no, se busca por coincidencia del nombre dentro del campo
  // 'client', que suele traer razon social y descripcion del giro.
  const caseStudyLogo = data.caseStudy
    ? CLIENT_LOGOS.find((logo) =>
        data.caseStudy.logoKey
          ? logo.name === data.caseStudy.logoKey
          : (data.caseStudy.client || '').toLowerCase().includes(logo.name.toLowerCase())
      )
    : null;

  // Antepone el numero calculado y descarta el que traiga el texto del dato.
  // Contempla los prefijos decimales del Pilar 04 ("03.5 — ...") y tanto el
  // guion medio como el corto, porque el dato mezcla ambos.
  const numbered = (key, text) =>
    `${sectionNumbers[key]} — ${String(text || '').replace(/^\s*\d{1,2}(\.\d+)?\s*[—–-]\s*/, '')}`;

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 0. SUBNAVBAR DE LOS 4 PILARES */}
      <WaysToWorkSubNavbar currentView={data.id} onNavigate={onNavigateCluster} />

      <section className="relative pt-16 md:pt-24 pb-16 lg:pb-24 overflow-hidden border-b border-white/[0.08] min-h-[75vh] flex items-center">
        {/* Glow */}
        <div className={`absolute top-1/4 -left-32 w-[600px] h-[600px] ${theme.glow} blur-[140px] pointer-events-none rounded-full`} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="text-left">
            
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${theme.accentText} font-bold`}>
                <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></span>
                {data.badgeText}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                🎯 {data.targetAudience}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.08] mb-6 font-display">
              {data.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={scrollToContact}
                className={`font-bold text-sm px-8 py-4 rounded-xl transition-all flex items-center gap-2 ${theme.btnPrimary}`}
              >
                <span>Cotizar bajo este Pilar</span>
                <span>→</span>
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById('entregables');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-bold text-sm px-7 py-4 rounded-xl transition-all border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20"
              >
                <span>Ver Entregables ↓</span>
              </button>
            </div>

            {/* El takeaway ya lo dice el H1 casi palabra por palabra, asi que
                aqui va el plazo, que es informacion nueva y concreta. */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
              <span className="text-emerald-400">✓</span>
              <span>{data.duration} · Entregables en tu poder, sin permanencia</span>
            </div>
          </div>

          {/* Right Column: El Diferenciador Box */}
          <div className="w-full lg:-mt-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square ${theme.solidGlow} blur-[120px] opacity-30 pointer-events-none rounded-full`}></div>
              
              <div className="relative bg-[#050A19]/80 backdrop-blur-xl border border-white/[0.1] rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Inner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.glow} blur-3xl opacity-60`}></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center ${theme.accentText}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Qué te llevas
                  </div>
                </div>

                {/* Antes esta caja repetia el takeaway, que ya esta en el H1 y
                    en la linea de abajo. Ahora adelanta los entregables reales:
                    es lo unico concreto que puede mostrarse above the fold. */}
                <div className="space-y-3 mb-6 relative z-10">
                  {(data.deliverables?.items || []).slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className={`text-xs font-mono font-bold mt-0.5 ${theme.accentText}`}>{item.num}</span>
                      <span className="text-sm font-semibold text-white leading-snug">{item.title}</span>
                    </div>
                  ))}
                  {data.deliverables?.items?.length > 4 && (
                    <div className="text-xs font-mono text-slate-500 pt-1">
                      + {data.deliverables.items.length - 4} entregables más
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Estándar BluePixel
                  </div>
                  <div className={`text-[10px] font-mono font-bold ${theme.accentText}`}>
                    FutureProof™
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1.5. TRUST CLIENTS STRIP */}
      <div className="border-b border-white/[0.08] bg-[#030612] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
              Confianza Enterprise Comprobada:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.slice(0, 8).map((c, i) => (
              <img key={i} src={c.url} alt={c.name} className="h-8 md:h-11 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            ))}
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
                  <StatValue value={st.value} />
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

      {/* 3. PAIN POINTS */}
      {data.painPoints && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('painPoints', data.painPoints.eyebrow)}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 max-w-3xl text-white">
              {data.painPoints.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.painPoints.items.map((item, idx) => (
                <div key={idx} className="bg-[#02040A] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-red-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-mono font-bold text-sm">
                      0{idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COSTO DE INACCIÓN: cuantifica el problema recién planteado */}
      {data.financialCallout && (
        <section className="py-20 border-b border-white/[0.08] bg-[#040816]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                ✦ {numbered('financialCallout', data.financialCallout.eyebrow)}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                {data.financialCallout.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {data.financialCallout.desc}
              </p>
              <div className="p-4 rounded-xl bg-[#02050E] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  {data.financialCallout.exampleLabel}:
                </span>
                <span className="text-sm md:text-base font-mono font-bold text-amber-300">
                  {data.financialCallout.exampleText}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AUTODIAGNÓSTICO: entrada de bajo compromiso, justo tras plantear el
          problema y su costo. Antes vivía enterrado en la segunda mitad. */}
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

      {/* NUESTRO ENFOQUE / PRINCIPIOS DEL PILAR */}
      {data.specs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('specs', data.specs.eyebrow)}
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

      {/* DIFERENCIACIÓN VS ALTERNATIVAS */}
      {data.comparisonMatrix && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('comparisonMatrix', data.comparisonMatrix.eyebrow)}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.comparisonMatrix.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.comparisonMatrix.subtitle}</p>

            {/* En movil la tabla exige scroll horizontal y la columna BluePixel,
                que es la ultima, quedaba fuera de pantalla: el visitante solo
                veia a la competencia. Debajo de md se apila por criterio, con
                la propuesta propia primero. */}
            <div className="md:hidden space-y-4">
              {data.comparisonMatrix.rows.map((row, idx) => {
                const lastIdx = row.cols.length - 1;
                return (
                  <div key={idx} className="border border-white/[0.08] rounded-2xl bg-[#050A17] overflow-hidden">
                    <div className="px-5 py-3 bg-[#040813] text-sm font-bold text-white border-b border-white/[0.08]">
                      {row.label}
                    </div>
                    <div className={`px-5 py-4 ${theme.accentBg} border-b border-white/[0.06]`}>
                      <div className={`text-[10px] font-mono uppercase tracking-widest font-bold mb-1.5 ${theme.accentText}`}>
                        {data.comparisonMatrix.headers[lastIdx + 1] || 'BluePixel'}
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className={`font-black shrink-0 mt-0.5 ${theme.accentText}`}>✓</span>
                        <span className={`text-sm ${theme.tableHighlight} bg-transparent`}>{row.cols[lastIdx]}</span>
                      </div>
                    </div>
                    {row.cols.slice(0, lastIdx).map((col, cIdx) => (
                      <div key={cIdx} className="px-5 py-3.5 border-b border-white/[0.04] last:border-b-0">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5">
                          {data.comparisonMatrix.headers[cIdx + 1]}
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-slate-600 font-black shrink-0 mt-0.5">✕</span>
                          <span className="text-sm text-slate-400">{col}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="hidden md:block overflow-x-auto border border-white/[0.08] rounded-2xl bg-[#050A17] shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    {data.comparisonMatrix.headers.map((h, idx) => {
                      const isLast = idx === data.comparisonMatrix.headers.length - 1;
                      return (
                        <th 
                          key={idx} 
                          className={`p-6 text-xs font-mono tracking-widest uppercase border-b border-white/[0.08] ${isLast ? `${theme.accentText} font-bold ${theme.accentBg} border-l border-r border-t-2 ${theme.accentBorder}` : 'text-slate-500'}`}
                        >
                          <div className="flex items-center gap-2">
                            {isLast && <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`}></span>}
                            {h}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.08]">
                  {data.comparisonMatrix.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6 font-bold text-white text-sm bg-[#040813] whitespace-nowrap">{row.label}</td>
                      {row.cols.map((col, cIdx) => {
                        const isLast = cIdx === row.cols.length - 1;
                        return (
                          <td 
                            key={cIdx} 
                            className={`p-6 text-sm ${isLast ? `${theme.tableHighlight} border-l border-r ${theme.accentBorder}` : 'text-slate-400 group-hover:text-slate-300'}`}
                          >
                            <div className="flex items-start gap-3">
                              {isLast ? (
                                <span className={`font-black shrink-0 mt-0.5 ${theme.accentText}`}>✓</span>
                              ) : (
                                <span className="text-slate-600 font-black shrink-0 mt-0.5">✕</span>
                              )}
                              <span>{col}</span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CASO DE ESTUDIO REAL DEL PILAR */}
      {data.caseStudy && (
        <section className="py-20 border-b border-white/[0.08] bg-gradient-to-b from-[#040815] to-[#02040A] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className={`absolute top-0 right-1/4 w-[600px] h-[350px] ${theme.glow} blur-[140px] pointer-events-none rounded-full`}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-[#050A19] border border-white/[0.1] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${theme.gradientText}`}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 pr-0 lg:pr-6">
                  {/* El logo se resuelve contra CLIENT_LOGOS, la misma lista que
                      ya alimenta la tira de confianza de arriba: si la marca se
                      muestra ahi, se muestra aqui. */}
                  {caseStudyLogo && (
                    <img
                      src={caseStudyLogo.url}
                      alt={caseStudyLogo.name}
                      className="h-9 md:h-10 object-contain mb-5 opacity-90"
                    />
                  )}

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
                    <span className={`font-bold uppercase tracking-widest ${theme.accentText}`}>
                      ✦ {data.caseStudy.tag}
                    </span>
                    {/* Con el logo a la vista, repetir el nombre solo estorba. */}
                    {!caseStudyLogo && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">
                          Cliente: <strong className="text-white">{data.caseStudy.client}</strong>
                        </span>
                      </>
                    )}
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

      {/* CAPA AGENTIC IA (solo Pilar 03) */}
      {data.aiLayer && (
        <section className="py-24 border-b border-white/[0.08] bg-[#030713]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('aiLayer', data.aiLayer.eyebrow)}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.aiLayer.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.aiLayer.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.aiLayer.items.map((item, idx) => (
                <div key={idx} className="bg-[#050A19] border border-cyan-500/20 rounded-2xl p-6 md:p-8 flex flex-col gap-3 hover:border-cyan-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6.4. FINANCIAL CALLOUT (Pilar 04) */}
      {data.cycle && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('cycle', data.cycle.eyebrow)}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.cycle.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base italic max-w-2xl mb-12 border-l-2 border-indigo-500/40 pl-4">
              "{data.cycle.desc}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.cycle.steps.map((step, idx) => (
                <div key={idx} className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-colors">
                  <div>
                    <div className="text-2xl mb-3">{step.icon}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold">FASE 0{idx + 1}</span>
                      <h4 className="text-base font-bold text-white">{step.name}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CRONOGRAMA: el calendario va pegado al metodo que acaba de explicarse */}
      {data.timeline && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-5xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('timeline', data.timeline.eyebrow)}
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

      {/* CADENCIA DE ACCOUNTABILITY (solo Pilar 04) */}
      {data.cadence && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-5xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('cadence', data.cadence.eyebrow)}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
              {data.cadence.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.cadence.subtitle}</p>

            <div className="space-y-4">
              {data.cadence.items.map((item, idx) => (
                <div key={idx} className="bg-[#02040A] border border-white/[0.08] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-500/30 transition-colors">
                  <div className="md:w-1/4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 inline-block">
                      {item.freq}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ENTREGABLES: el valor concreto, antes de hablar de alcance y precio */}
      {data.deliverables && (
        <section id="entregables" className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-7xl mx-auto px-6">
            <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-4 ${theme.accentText}`}>
              {numbered('deliverables', data.deliverables.eyebrow)}
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

      {/* MODALIDADES / PRECIO: va despues de los entregables, nunca antes */}
      {data.plans && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className={`block text-xs font-mono uppercase tracking-widest font-bold mb-3 ${theme.accentText}`}>
                ✦ {numbered('plans', data.plans.eyebrow)}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                {data.plans.title.replace(/\.$/, '')}<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">{data.plans.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.plans.items.map((plan, idx) => (
                <div 
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${plan.featured ? 'bg-[#060C1F] border-2 border-indigo-500/60 shadow-2xl shadow-indigo-500/10 -translate-y-2' : 'bg-[#040814] border border-white/[0.08] hover:border-white/20'}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-md bg-indigo-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{plan.horizon}</span>
                      <span className="text-xl font-black text-white font-mono">{plan.name}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {plan.desc}
                    </p>

                    <div className="h-px bg-white/[0.06] mb-6"></div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${plan.featured ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30' : 'bg-white/[0.04] hover:bg-white/10 text-white border border-white/10'}`}
                  >
                    {plan.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GARANTÍA DE LIDERAZGO & FILOSOFÍA FUTUREPROOF */}
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
            {/* Rol institucional: la politica de la casa prohibe nombres
                personales en copy publico. */}
            <div className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold font-mono">
                    PS
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Dirección de Producto & UX</h4>
                    <span className="text-xs font-mono text-blue-400">Product Strategy & Diseño Conductual</span>
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

            <div className="bg-[#050A17] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-colors">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono">
                    TL
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Dirección de Ingeniería</h4>
                    <span className="text-xs font-mono text-purple-400">Lead Architects & Tech Leads</span>
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

          {/* Los 5 principios vivian duplicados aqui y en el FutureproofCTABanner
              del cierre, separados solo por las FAQs. Se conserva una sola vez,
              en el banner, que es donde rematan con su CTA. */}
        </div>
      </section>

      {/* 10. FAQs */}
      {data.faqs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#050A17]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-12 text-center text-white">
              Preguntas Frecuentes sobre {data.name}<span className="text-blue-500">.</span>
            </h2>
            
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaq === idx 
                      ? `${theme.accentBorder} bg-white/[0.04] shadow-lg` 
                      : 'border-white/[0.08] bg-[#02040A] hover:border-white/[0.15] hover:bg-white/[0.02]'
                  }`}
                >
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

      {/* LAS 6 CAPACIDADES. Vivia a media pagina, justo despues del caso de
          estudio, y cortaba el argumento para hablar de nosotros en el punto
          mas alto del relato. Aqui abajo funciona como directorio hacia las 6
          paginas de servicio, y por eso ya no lleva numero de seccion: no es
          un capitulo del argumento, es navegacion. */}
      {data.capabilitiesActivation && (
        <section className="py-16 border-b border-white/[0.08] bg-[#030713]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
                Capacidades BluePixel
              </span>
              <h3 className="text-xl font-bold text-white">
                Las 6 capacidades que se activan en este pilar<span className="text-blue-500">.</span>
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                Un mismo squad multidisciplinario. Cada capacidad entra con un rol distinto según el pilar que contrates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.capabilitiesActivation.map((cap, idx) => {
                const isCore = cap.role && cap.role.includes('Núcleo');
                return (
                  <a
                    key={idx}
                    href={`#/${cap.route}`}
                    className={`group bg-[#050A19] border rounded-2xl p-5 flex flex-col gap-2.5 transition-all hover:-translate-y-1 ${
                      isCore
                        ? `${theme.accentBorder} shadow-lg`
                        : 'border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    <span className={`self-start text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${theme.accentBorder} ${theme.accentText}`}>
                      {cap.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-tight">{cap.name}</h4>
                    <div className="text-[11px] font-mono text-slate-400">{cap.role}</div>
                    <p className="text-slate-400 text-xs leading-relaxed flex-1">{cap.desc}</p>
                    <span className={`text-[11px] font-mono font-bold mt-1 ${theme.accentText}`}>
                      Ver capacidad <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PUENTE AL SIGUIENTE PILAR. Se perdio en el commit acb7e2f junto con la
          navegacion cruzada de abajo, pero el dato 'bridge' siguio vivo en los
          4 pilares, sin nadie que lo renderizara. */}
      {data.bridge && (
        <section className="border-b border-white/[0.08] bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-cyan-950/20 py-14 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className={`text-[10px] font-mono uppercase tracking-widest font-bold block mb-1.5 ${theme.accentText}`}>
                ✦ {data.bridge.eyebrow}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                {data.bridge.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {data.bridge.desc}
              </p>
            </div>
            <a
              href={`#/${data.bridge.ctaRoute}`}
              className={`font-bold text-xs md:text-sm px-7 py-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText} hover:bg-white/10 hover:border-white/30`}
            >
              <span>{data.bridge.ctaText}</span>
              <span>→</span>
            </a>
          </div>
        </section>
      )}

      {/* NAVEGACIÓN CRUZADA: los 4 pilares, resaltando el actual */}
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
            {ALL_PILLARS.map((pil) => {
              const isCurrent = pil.id === data.id;
              return (
                <a
                  key={pil.id}
                  href={`#/${pil.route}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`p-5 rounded-2xl border text-left transition-all ${isCurrent ? `${theme.accentBorder} ${theme.accentBg}` : 'border-white/[0.08] bg-[#060A14] hover:border-white/20'}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono font-bold ${isCurrent ? theme.accentText : 'text-slate-500'}`}>{pil.num}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{pil.duration}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {pil.name}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    {/* El pilar actual no se anuncia como destino. */}
                    <span>{isCurrent ? 'Estás aquí' : 'Conocer más'}</span>
                    {!isCurrent && <span>→</span>}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FUTUREPROOF CTA BANNER */}
      <FutureproofCTABanner />

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

