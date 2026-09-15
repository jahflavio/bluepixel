import React from 'react';

const CLUSTERS = [
  {
    number: '01',
    id: 'apps',
    icon: '📱',
    color: 'blue',
    accentFrom: 'from-blue-600/20',
    accentTo: 'to-blue-600/5',
    borderHover: 'group-hover:border-blue-500/50',
    glowColor: 'group-hover:shadow-blue-500/15',
    badgeText: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20',
    name: 'Apps & Plataformas',
    tagline: 'CLUSTER 01 · SOFTWARE DE MISIÓN CRÍTICA',
    headline: 'Tu plataforma digital, construida para durar y escalar.',
    impact: '99.98% Uptime',
    impactLabel: 'SLA en Producción',
    impactColor: 'text-blue-400',
    bullets: [
      'Apps nativas iOS/Android para operaciones de campo offline-first',
      'Portales B2B transaccionales que reemplazan hojas de cálculo',
      'MVPs de alta fidelidad en 90 días con código de tu propiedad',
      'Modernización de software legacy sin parar tu operación',
    ],
    proof: 'SOC2 · OWASP · AWS Certified',
  },
  {
    number: '02',
    id: 'automatizacion',
    icon: '⚙️',
    color: 'purple',
    accentFrom: 'from-purple-600/20',
    accentTo: 'to-purple-600/5',
    borderHover: 'group-hover:border-purple-500/50',
    glowColor: 'group-hover:shadow-purple-500/15',
    badgeText: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/20',
    name: 'Automatización Operativa',
    tagline: 'CLUSTER 02 · MIDDLEWARE & APA DETERMINÍSTICO',
    headline: 'Elimina la fricción manual entre tus sistemas y tu equipo.',
    impact: '−94%',
    impactLabel: 'Tiempo de Conciliación',
    impactColor: 'text-purple-400',
    bullets: [
      'Integración de ERPs (SAP, Oracle, NetSuite) con middleware resiliente',
      'Conciliación financiera y bancaria autónoma vía SAT/CFDI 4.0',
      'APA con visión computacional y auto-healing — el reemplazo del RPA obsoleto',
      'Pipelines de datos que unifican CRM, ERP y notificaciones en un solo bus',
    ],
    proof: 'SAP S/4HANA · Oracle · Salesforce',
  },
  {
    number: '03',
    id: 'agentizacion',
    icon: '🤖',
    color: 'emerald',
    accentFrom: 'from-emerald-600/20',
    accentTo: 'to-emerald-600/5',
    borderHover: 'group-hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-emerald-500/15',
    badgeText: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
    name: 'Agentización & IA Corporativa',
    tagline: 'CLUSTER 03 · PROTOCOLO MCP & PRIVACIDAD LFPDPPP',
    headline: 'Agentes de IA que operan sobre tus datos reales. Sin alucinar.',
    impact: '0%',
    impactLabel: 'Alucinaciones en Políticas',
    impactColor: 'text-emerald-400',
    bullets: [
      'Asistentes RAG para soporte 24/7 en WhatsApp/Web con guardrails estrictos',
      'Análisis documental de contratos, KYC y licitaciones públicas en minutos',
      'AOC: monitoreo agéntico de infraestructura cloud con auto-remediación',
      'Data Privacy & blindaje de modelos bajo LFPDPPP y AWS Bedrock VPC',
    ],
    proof: 'MCP · LFPDPPP · Anthropic · OpenAI',
  },
];

const ThreeClustersOverview = ({ onNavigateCluster, onOpenContact }) => {
  return (
    <section className="py-24 px-6 bg-[#02040A] border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            ✦ MODELO DE DEMANDA 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-4 mb-4 leading-[1.1]">
            Tres clusters<span className="text-blue-500">.</span> Un solo socio tecnológico<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Organizamos toda nuestra capacidad técnica en 3 clusters de demanda para que tu empresa encuentre exactamente lo que necesita — sin pagar por lo que no usa.
          </p>
        </div>

        {/* 3 Cluster Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {CLUSTERS.map((cluster) => (
            <div
              key={cluster.id}
              className={`group relative bg-[#060A14] border border-white/[0.08] ${cluster.borderHover} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${cluster.glowColor} hover:shadow-2xl cursor-pointer`}
              onClick={() => onNavigateCluster && onNavigateCluster(cluster.id)}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${cluster.accentFrom} ${cluster.accentTo} pointer-events-none`} />

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border ${cluster.badgeBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cluster.icon}
                  </div>
                  <span className={`text-4xl font-black font-mono ${cluster.badgeText} opacity-20 group-hover:opacity-40 transition-opacity`}>
                    {cluster.number}
                  </span>
                </div>

                {/* Tagline */}
                <div className={`text-[10px] font-mono uppercase tracking-widest ${cluster.badgeText} mb-2 font-bold`}>
                  {cluster.tagline}
                </div>

                {/* Name */}
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-white transition-colors">
                  {cluster.name}
                </h3>

                {/* Headline */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cluster.headline}
                </p>

                {/* Metric */}
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className={`text-2xl font-black font-mono ${cluster.impactColor}`}>{cluster.impact}</span>
                  <span className="text-xs text-slate-400">{cluster.impactLabel}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {cluster.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className={`${cluster.badgeText} mt-0.5 flex-shrink-0`}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className={`text-[10px] font-mono ${cluster.badgeText} opacity-60 mb-3`}>{cluster.proof}</div>
                  <div className={`flex items-center justify-between text-xs font-semibold ${cluster.badgeText} group-hover:opacity-100 opacity-70 transition-opacity`}>
                    <span>Explorar este cluster</span>
                    <span className="text-sm font-mono group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#060A14] border border-white/[0.08]">
          <div>
            <div className="text-white font-bold text-base mb-1">
              ¿No estás seguro de qué cluster necesitas?
            </div>
            <p className="text-slate-400 text-sm">
              En un Diagnóstico FutureProof de 2 semanas determinamos exactamente dónde atacar primero para maximizar el ROI.
            </p>
          </div>
          <button
            onClick={() => onOpenContact && onOpenContact('Diagnóstico FutureProof')}
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/25 flex items-center gap-2 whitespace-nowrap"
          >
            <span>Solicitar Diagnóstico</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeClustersOverview;
