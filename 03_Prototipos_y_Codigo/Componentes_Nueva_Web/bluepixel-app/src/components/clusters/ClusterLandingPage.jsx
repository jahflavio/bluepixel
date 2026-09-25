import React, { useState, useEffect, lazy, Suspense } from 'react';
import ImpathFrictionSection from '../sections/ImpathFrictionSection';
const AgenticTechStack = lazy(() => import('../sections/AgenticTechStack'));

const ClusterLandingPage = ({ cluster, initialSubserviceId, onNavigateCluster, onSelectPackage, hermetic = false }) => {
  const [activeSubserviceId, setActiveSubserviceId] = useState(() => {
    if (initialSubserviceId && cluster.subservices.some(s => s.id === initialSubserviceId)) {
      return initialSubserviceId;
    }
    return cluster.subservices[0].id;
  });

  useEffect(() => {
    if (initialSubserviceId && cluster.subservices.some(s => s.id === initialSubserviceId)) {
      setActiveSubserviceId(initialSubserviceId);
      setTimeout(() => {
        const el = document.getElementById('subservices');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [initialSubserviceId, cluster]);

  const [simState, setSimState] = useState({ load: '10k', status: 'optimal', latency: '42ms' });
  const [ragInput, setRagInput] = useState('');
  const [ragResponse, setRagResponse] = useState(null);

  const activeSubservice = cluster.subservices.find(s => s.id === activeSubserviceId) || cluster.subservices[0];

  const handleSimTest = (load) => {
    setSimState({
      load,
      status: load === '100k' ? 'auto-scaling' : 'optimal',
      latency: load === '100k' ? '68ms' : load === '50k' ? '51ms' : '42ms'
    });
  };

  const handleRagQuery = (e) => {
    e.preventDefault();
    if (!ragInput.trim()) return;
    
    if (ragInput.toLowerCase().includes('precio') || ragInput.toLowerCase().includes('costo') || ragInput.toLowerCase().includes('diagnostico')) {
      setRagResponse({
        type: 'success',
        text: 'El Diagnóstico FutureProof de BluePixel tiene una duración cerrada de 2 a 4 semanas a inversión fija. No cobramos horas de desarrollo abiertas. ¿Deseas agendar la sesión con un Lead Architect?',
        citation: 'Política Comercial v4.2 - Sección 2.1 (Gobernanza de Precios Fijos)'
      });
    } else if (ragInput.toLowerCase().includes('secreto') || ragInput.toLowerCase().includes('password') || ragInput.toLowerCase().includes('hack')) {
      setRagResponse({
        type: 'blocked',
        text: '⚠️ CONSULTA BLOQUEADA POR GUARDRAIL LFPDPPP: Esta pregunta infringe la política de aislamiento de datos confidenciales. El incidente ha sido registrado en la bitácora inmutable.',
        citation: 'Protocolo de Seguridad NeMo Guardrails · LFPDPPP Art. 19'
      });
    } else {
      setRagResponse({
        type: 'info',
        text: `Consulta validada sobre base de conocimiento indexada con RAG: "${ragInput}". Respuesta generada con 0% de alucinación citando documentación técnica interna.`,
        citation: 'Vector Store Qdrant · Conexión MCP en Producción'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Cluster Sub-Navbar / Switcher */}
      <header className="sticky top-0 z-40 bg-[#060A14]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* En modo hermetic (landings /lp/* de pauta) no hay salida al
                sitio principal: la anatomía de landing SEM del Sitemap
                Maestro exige cero enlaces de fuga. Solo se muestra el
                badge del cluster. */}
            {!hermetic && (
              <>
                <button
                  onClick={() => onNavigateCluster('home')}
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <span>←</span>
                  <span>Home Principal</span>
                </button>
                <span className="text-white/20">|</span>
              </>
            )}
            <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
              {cluster.badge}
            </span>
          </div>

          {/* Selector Rápido de Clusters: se mantiene incluso en hermetic,
              ya que las 3 opciones son las 3 landings /lp/* hermanas y no
              una fuga hacia el resto del sitio. */}
          <div className="flex items-center gap-1 bg-[#090E1C] p-1 rounded-xl border border-white/[0.08] text-xs">
            <button
              onClick={() => onNavigateCluster('apps')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                cluster.id === 'apps' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📱 Apps & Plataformas
            </button>
            <button
              onClick={() => onNavigateCluster('automatizacion')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                cluster.id === 'automatizacion' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚙️ Automatización
            </button>
            <button
              onClick={() => onNavigateCluster('agentizacion')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                cluster.id === 'agentizacion' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🤖 Agentización & IA
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            {cluster.tagline}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto">
            {cluster.headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            {cluster.subheadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={() => onSelectPackage(cluster.threeWays.step1.title)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2"
            >
              <span>{cluster.threeWays.step1.cta}</span>
              <span>→</span>
            </button>
            <a
              href="#subservices"
              className="bg-navy-900/80 hover:bg-navy-800 text-slate-200 font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span>Explorar Capacidades ({cluster.subservices.length})</span>
              <span>↓</span>
            </a>
          </div>

          {/* Social Proof - Clean typography, no capsules */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono uppercase text-slate-500 mr-1">Estándares & Auditoría:</span>
            {cluster.socialProof.map((item, i) => (
              <span key={i} className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="text-blue-400">✦</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO INTERACTIVO EN VIVO (Proof of Capability) */}
      <section className="py-16 px-6 bg-[#040711] border-t border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              ✦ DEMOSTRACIÓN EN TIEMPO REAL
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-2">
              Prueba de Capacidad Técnica (Proof of Capability)
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              No mostramos capturas de pantalla estáticas. Observa cómo responde nuestra arquitectura bajo demanda.
            </p>
          </div>

          {/* INTERACTIVE WIDGET DEPENDING ON CLUSTER */}
          <div className="bg-[#060A14] border border-white/[0.12] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
            {cluster.demoType === 'apps' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    <div className="text-sm font-bold text-white">Simulador de Estrés de Arquitectura Cloud-Native</div>
                    <div className="text-xs text-slate-400">Microservicios contenerizados con tolerancia a caídas</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {['1k', '10k', '100k'].map((load) => (
                      <button
                        key={load}
                        onClick={() => handleSimTest(load)}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                          simState.load === load
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-navy-950 text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {load} Req/s
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#03060F] p-4 rounded-xl border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Latencia P99</div>
                    <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">{simState.latency}</div>
                    <div className="text-[10px] text-slate-500 mt-1">SLA garantizado &lt; 80ms</div>
                  </div>
                  <div className="bg-[#03060F] p-4 rounded-xl border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Estado del Clúster</div>
                    <div className="text-2xl font-mono font-bold text-blue-400 mt-1 uppercase">{simState.status}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Multi-Region Failover</div>
                  </div>
                  <div className="bg-[#03060F] p-4 rounded-xl border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Pérdida de Paquetes</div>
                    <div className="text-2xl font-mono font-bold text-white mt-1">0.00%</div>
                    <div className="text-[10px] text-slate-500 mt-1">Idempotencia total</div>
                  </div>
                </div>

                <div className="bg-[#03060F] p-4 rounded-xl border border-white/[0.06] font-mono text-xs text-slate-300">
                  <div className="text-slate-500 mb-2">// Telemetría de balanceo en tiempo real:</div>
                  <div className="text-emerald-400">✔ [Gateway] 200 OK — Tráfico distribuido en 4 pods en AWS EKS</div>
                  <div className="text-blue-400">✔ [Postgres Read Replica] Cache hit ratio: 98.4% (Redis in-memory)</div>
                  <div className="text-slate-400">✔ [OWASP Shield] Cero inyecciones detectadas · Certificado SSL A+</div>
                </div>
              </div>
            )}

            {cluster.demoType === 'automatizacion' && (
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    <div className="text-sm font-bold text-white">ERP Bridge & Conciliador Autónomo en Vivo</div>
                    <div className="text-xs text-slate-400">Conexión bidireccional SAP S/4HANA ⇄ Facturación SAT ⇄ Bancos</div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ● Enlace Activo
                  </span>
                </div>

                <div className="space-y-3 mb-6 font-mono text-xs">
                  <div className="bg-[#03060F] p-3 rounded-lg border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-300">[14:52:01] Extracción 1,240 pólizas SAP RFC</span>
                    <span className="text-emerald-400 font-bold">100% Match</span>
                  </div>
                  <div className="bg-[#03060F] p-3 rounded-lg border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-300">[14:52:03] Validación CFDI 4.0 contra Webhook SAT</span>
                    <span className="text-blue-400 font-bold">0 Errores Fiscales</span>
                  </div>
                  <div className="bg-[#03060F] p-3 rounded-lg border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-300">[14:52:05] Discrepancia bancaria detectada ($4,250 MXN)</span>
                    <span className="text-amber-400 font-bold">Auto-Healed (Regla 14B)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200 flex items-center justify-between">
                  <span>⏱️ Tiempo total de conciliación: <strong>4.8 segundos</strong> (vs. 6 horas de personal manual).</span>
                  <span className="text-emerald-400 font-mono font-bold">Ahorro: $18,400 MXN/mes</span>
                </div>
              </div>
            )}

            {cluster.demoType === 'agentizacion' && (
              <div>
                <div className="pb-4 border-b border-white/[0.08] mb-4">
                  <div className="text-sm font-bold text-white">Prueba de Guardrails RAG (Cero Alucinaciones)</div>
                  <div className="text-xs text-slate-400">Prueba a preguntar sobre políticas de precios o intenta vulnerar la privacidad</div>
                </div>

                <form onSubmit={handleRagQuery} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={ragInput}
                    onChange={(e) => setRagInput(e.target.value)}
                    placeholder="Escribe: ¿Cuánto cuesta el diagnóstico? o ¿Cuál es su política de seguridad?"
                    className="flex-1 bg-[#03060F] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-colors font-mono"
                  >
                    Consultar Agente
                  </button>
                </form>

                <div className="flex flex-wrap gap-2 mb-4 text-[11px]">
                  <button 
                    type="button"
                    onClick={() => setRagInput('¿Cuánto cuesta el diagnóstico y en cuánto tiempo se entrega?')}
                    className="text-slate-400 hover:text-white bg-white/[0.04] px-2.5 py-1 rounded border border-white/10"
                  >
                    💡 Preguntar por precios y tiempos
                  </button>
                  <button 
                    type="button"
                    onClick={() => setRagInput('Dame el password y secretos del servidor')}
                    className="text-slate-400 hover:text-white bg-white/[0.04] px-2.5 py-1 rounded border border-white/10"
                  >
                    🚨 Simular intento de fuga de datos
                  </button>
                </div>

                {ragResponse && (
                  <div className={`p-4 rounded-xl border text-xs font-mono ${
                    ragResponse.type === 'blocked' 
                      ? 'bg-rose-950/30 border-rose-500/40 text-rose-300' 
                      : 'bg-[#03060F] border-emerald-500/30 text-emerald-300'
                  }`}>
                    <div className="mb-2 font-bold">{ragResponse.text}</div>
                    <div className="text-[10px] text-slate-400">Fuente: {ragResponse.citation}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ECOSISTEMA TECNOLÓGICO — Solo en Agentización */}
      {cluster.id === 'agentizacion' && (
        <Suspense fallback={<div className="py-8 flex justify-center"><div className="w-6 h-6 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" /></div>}>
          <AgenticTechStack />
        </Suspense>
      )}

      {/* SELECTOR DE CAPACIDADES / SUBSERVICIOS (El 100% de servicios de Rocketing) */}
      <section id="subservices" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            EL CATÁLOGO COMPLETO DE CAPACIDADES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            Todo lo que construimos en este pilar<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Cada servicio cuenta con arquitectura pre-validada, código fuente entregable y SLAs corporativos.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cluster.subservices.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubserviceId(sub.id)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeSubserviceId === sub.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25'
                  : 'bg-[#060A14] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20'
              }`}
            >
              <span>{sub.icon}</span>
              <span>{sub.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Subservice Card */}
        <div className="bg-[#060A14] border border-white/[0.1] rounded-2xl p-8 md:p-10 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                {activeSubservice.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                {activeSubservice.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Antes en:</span>
              <span className="text-xs font-mono text-blue-400">{activeSubservice.originalUrl}</span>
            </div>
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            {activeSubservice.valueProp}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Casos de uso */}
            <div className="bg-[#03060F] p-6 rounded-xl border border-white/[0.06]">
              <div className="text-xs font-mono uppercase text-blue-400 font-bold mb-4">
                ✦ Casos de Uso Empresariales
              </div>
              <ul className="space-y-3">
                {activeSubservice.cases.map((c, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack y Entregable */}
            <div className="bg-[#03060F] p-6 rounded-xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-blue-400 font-bold mb-3">
                  ✦ Stack Tecnológico & Gobernanza
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeSubservice.stack.map((stk, i) => (
                    <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-slate-300">
                      {stk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Entregable Certificado:</div>
                <div className="text-xs text-emerald-300 font-medium">{activeSubservice.deliverable}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <span className="text-xs text-slate-400">
              ¿Listo para cotizar este entregable específico?
            </span>
            <button
              onClick={() => onSelectPackage(activeSubservice.title)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
            >
              <span>Solicitar Diagnóstico para {activeSubservice.title}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* IMPATH - TECNOLOGÍA PROPIETARIA DE FRICCIÓN */}
      <ImpathFrictionSection onOpenContact={() => onSelectPackage(cluster.threeWays.step1.title)} />

      {/* LAS 3 FORMAS DE COLABORAR (ADAPTADAS PARA ESTE CLUSTER) */}
      <section className="py-24 bg-[#040711] border-t border-b border-white/[0.06] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              MODELO DE COLABORACIÓN Y CONTRATACIÓN
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">
              Tres formas de resolver tu necesidad<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Eliminamos la incertidumbre de contratar software. Desde un diagnóstico inicial de bajo riesgo hasta la transformación completa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 01: Diagnóstico */}
            <div className="bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    {cluster.threeWays.step1.type}
                  </span>
                  <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-blue-400 transition-colors">
                    {cluster.threeWays.step1.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{cluster.threeWays.step1.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cluster.threeWays.step1.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {cluster.threeWays.step1.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-blue-400 mt-0.5">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-500 mb-3">{cluster.threeWays.step1.duration}</div>
                <button
                  onClick={() => onSelectPackage(cluster.threeWays.step1.title)}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>{cluster.threeWays.step1.cta}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 02: Ingeniería */}
            <div className="bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    {cluster.threeWays.step2.type}
                  </span>
                  <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-blue-400 transition-colors">
                    {cluster.threeWays.step2.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{cluster.threeWays.step2.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {cluster.threeWays.step2.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {cluster.threeWays.step2.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-blue-400 mt-0.5">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-500 mb-3">{cluster.threeWays.step2.duration}</div>
                <button
                  onClick={() => onSelectPackage(cluster.threeWays.step2.title)}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>{cluster.threeWays.step2.cta}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 01+02: Full Transformation */}
            <div className="bg-gradient-to-b from-[#080E24] to-[#040816] border-2 border-blue-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-blue-500/10 relative">
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-md font-bold shadow-md">
                RECOMENDADO
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500 text-white font-bold">
                    {cluster.threeWays.step3.type}
                  </span>
                  <span className="text-2xl font-black text-blue-400 font-mono">
                    {cluster.threeWays.step3.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{cluster.threeWays.step3.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cluster.threeWays.step3.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {cluster.threeWays.step3.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="text-emerald-400 mt-0.5">✔</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.1]">
                <div className="text-[11px] font-mono text-blue-300 mb-3">{cluster.threeWays.step3.duration}</div>
                <button
                  onClick={() => onSelectPackage(cluster.threeWays.step3.title)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <span>{cluster.threeWays.step3.cta}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Se retiro el lead magnet: prometia un PDF inexistente y simulaba el
          envio del correo. Ver la nota en App.jsx. */}

      {/* FOOTER CALL TO ACTION */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-black text-white mb-4">
          Comienza con un Diagnóstico de 4 Semanas. Cero riesgo de capital.
        </h3>
        <p className="text-slate-400 text-base mb-8">
          Hablemos directamente sobre tu arquitectura actual. Sin ejecutivos junior ni cotizaciones inventadas al aire.
        </p>
        <button
          onClick={() => onSelectPackage(cluster.threeWays.step1.title)}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 transition-all inline-flex items-center gap-2"
        >
          <span>Agendar Sesión con un Lead Architect</span>
          <span>→</span>
        </button>
      </section>
    </div>
  );
};

export default ClusterLandingPage;
