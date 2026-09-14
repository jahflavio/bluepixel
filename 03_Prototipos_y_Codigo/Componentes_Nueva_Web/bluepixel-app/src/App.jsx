import React, { useState, useEffect, useRef } from 'react';
import './App.css';

    

    // Presets de Casos Operativos para el Hero Prompt Bar
    const PRESETS = [
  {
    id: 'cotizaciones',
    label: 'Cotizaciones lentas en Excel',
    prompt: 'Mi equipo tarda horas armando cotizaciones en Excel y estamos perdiendo ventas.',
    categoria: 'AUTOMATIZACIÓN COMERCIAL & PRICING',
    impacto: 'Pérdida de 35% de leads calificados por demora en respuesta. 120 horas hombre/mes consumidas.',
    arquitectura: [
      { paso: '01. Ingesta', desc: 'Agente Extractor captura requerimientos desde WhatsApp / Correo / Formulario.' },
      { paso: '02. MCP Grounding', desc: 'Servidor MCP consulta reglas de inventario, márgenes y tarifas en ERP (SAP/Salesforce).' },
      { paso: '03. Generación', desc: 'Agente cotizador genera PDF validado con firma digital en 90 segundos.' },
      { paso: '04. Human-in-the-loop', desc: 'Si el margen es < 18%, escala automáticamente a Director Comercial para visto bueno.' }
    ],
    casoAnalogo: 'Caso FR Medical / Bimbo: Reducción del tiempo de cotización de 48 hrs a 3 minutos con 0% de error de cálculo.',
    roiEstimado: 'Ahorro de $680,000 MXN anuales + incremento de 22% en win-rate comercial.',
    tiempoImplementacion: '4 a 6 semanas (Fase BUILD)'
  },
  {
    id: 'conciliacion',
    label: 'Conciliación contable & ERP',
    prompt: 'Tengo a 5 personas cruzando facturas a mano contra SAP cada fin de mes.',
    categoria: 'BACK-OFFICE FINANCIERO & COMPLIANCE',
    impacto: 'Demoras de 10 días en cierre mensual y multas por discrepancias fiscales ante el SAT.',
    arquitectura: [
      { paso: '01. Conexión Bancaria', desc: 'Agente Financiero conecta vía API a bancos y descarga estados de cuenta y XMLs del SAT.' },
      { paso: '02. Cruce Determinístico', desc: 'Lógica matemática estricta coteja RFC, montos y órdenes de compra en el ERP.' },
      { paso: '03. Reconciliación', desc: 'Asiento contable automático para el 94% de transacciones coincidentes.' },
      { paso: '04. Bandeja de Anomalías', desc: 'Solo el 6% de transacciones con discrepancia llega a revisión del contador jefe.' }
    ],
    casoAnalogo: 'Caso RadioShack / Retail: Cierre contable acelerado de 12 días a 18 horas continuas.',
    roiEstimado: 'Liberación de 160 hrs hombre mensuales de contadores senior.',
    tiempoImplementacion: '6 semanas'
  },
  {
    id: 'checkout',
    label: 'Fuga en checkout (IMPATH)',
    prompt: 'Los clientes están abandonando el checkout a la mitad y estamos perdiendo dinero.',
    categoria: 'UX INTEL & CONVERSIÓN TRANSACCIONAL',
    impacto: '$1.4M MXN en ingresos perdidos cada trimestre por fricción cognitiva y errores de validación.',
    arquitectura: [
      { paso: '01. Detección IMPATH', desc: 'Gemelos digitales simulan la navegación y señalan fricción en formulario de dirección y token.' },
      { paso: '02. Rediseño UX', desc: 'Simplificación a checkout de 1 solo paso con guardado seguro de credenciales.' },
      { paso: '03. Agente de Rescate', desc: 'Agente de retención detecta abandono en tiempo real y activa recordatorio contextual vía WhatsApp.' },
      { paso: '04. Mixpanel Score', desc: 'Monitoreo de UX Health Score continuo para evitar regresiones de usabilidad.' }
    ],
    casoAnalogo: 'Caso LifeMiles / Loyalty LATAM: Aumento del 28% en tasa de conversión en pasarelas móviles.',
    roiEstimado: 'Recuperación de $3.8M MXN en facturación retenida el primer año.',
    tiempoImplementacion: '3 a 5 semanas'
  },
  {
    id: 'soporte',
    label: 'Atención 24/7 sin alucinaciones',
    prompt: 'Necesito un bot en WhatsApp para soporte, pero que NO se invente las políticas de la empresa.',
    categoria: 'CUSTOMER EXPERIENCE & RAG BLINDADO',
    impacto: 'Pérdida de clientes en fines de semana y costos de call-center que crecen linealmente con el negocio.',
    arquitectura: [
      { paso: '01. RAG Seguro', desc: 'El agente responde estrictamente basado en la base de conocimiento oficial de la empresa.' },
      { paso: '02. Protocolo MCP', desc: 'El agente consulta el estado real de pedidos en base de datos sin inventar números.' },
      { paso: '03. Aislamiento', desc: 'Los datos de clientes nunca entrenan modelos públicos de terceros.' },
      { paso: '04. Traspaso Fluido', desc: 'Detección de sentimiento: si el cliente está molesto, transfiere al ejecutivo con resumen previo.' }
    ],
    casoAnalogo: 'Caso Avianca / DiDi: 78% de consultas de primer nivel resueltas de forma autónoma con 4.8/5 en CSAT.',
    roiEstimado: 'Reducción del 55% en costo operativo de atención a clientes.',
    tiempoImplementacion: '4 semanas'
  }
];


    // Logos de Clientes Reales
    const CLIENT_LOGOS = [
      { name: 'Grupo Bimbo', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc376e1868364a9968_bimbo.svg' },
      { name: 'BBVA', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc650ce64abe0f821d_bbva.svg' },
      { name: 'PepsiCo', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa919f7c67f75007f0_pepsico.svg' },
      { name: 'Cemex', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc0a22091a01735cfd_cemex.svg' },
      { name: 'DiDi', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fda13f3c511e50b61e_didi.svg' },
      { name: 'Avianca', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb8ec25c469538736b_avianca.svg' },
      { name: 'Subaru', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb33ee73cfddc84305_subaru.svg' },
      { name: 'RadioShack', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb48df2f18c557f360_radioshack.svg' },
      { name: 'LifeMiles', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc5160e0a1d17049cc_lifemiles.svg' },
      { name: 'MoradaUno', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb99087d463854a86d_moradauno.svg' },
      { name: 'Pakke', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa84cae103a5130734_pakke.svg' },
      { name: 'Suerox', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc77e3af64df4a29fb_suerox.svg' },
    ];

    // Navbar
    const Navbar = ({ onOpenContact }) => (
      <nav className="border-b border-white/[0.08] bg-navy-950/85 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BluePixel" className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#prompt-hero" className="hover:text-blue-400 transition-colors">Diagnóstico en Vivo</a>
            <a href="#three-ways" className="hover:text-blue-400 transition-colors">3 Formas de Trabajar</a>
            <a href="/landings/index.html" onClick={() => window.dataLayer && window.dataLayer.push({'event': 'view_blueprint_directory'})} className="hover:text-blue-400 transition-colors flex items-center gap-1.5"><span className="text-emerald-400">⚡</span> Blueprint Library</a>
            <a href="#casos" className="hover:text-blue-400 transition-colors">Casos de Éxito</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenContact}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2">
              <span>Diagnóstico Operativo</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </nav>
    );

    // Hero with Prompt Engine
    const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  
  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState('');
  const [presetIndex, setPresetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const textareaRef = React.useRef(null);

  (React.useEffect || useEffect)(() => {
    if (isManualMode) return; // Detener animación si el usuario interactúa

    let timer;
    if (isPaused) {
      timer = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000); 
      return () => clearTimeout(timer);
    }

    const currentPrompt = PRESETS[presetIndex].prompt;
    
    if (isDeleting) {
      if (placeholderText.length === 0) {
        setIsDeleting(false);
        setPresetIndex((prev) => (prev + 1) % PRESETS.length);
      } else {
        timer = setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2)); }, 10);
      }
    } else {
      if (placeholderText.length === currentPrompt.length) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1)); }, 30);
      }
    }
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, isPaused, presetIndex, isManualMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const solution = {
      ...PRESETS[presetIndex],
      prompt: inputVal || (isManualMode ? '' : PRESETS[presetIndex].prompt)
    };
    if (onSelectSolution) onSelectSolution(solution);
  };

  const handleFocus = () => {
    setIsManualMode(true);
    setPlaceholderText('');
  };

  return (
    
    <div className="w-full max-w-4xl mx-auto relative group mt-10 lg:mt-0 flex justify-center">
      
      {/* Background Flowchart Network for Hero */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-60">
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 600">
          <defs>
            <filter id="glowHero" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
          </defs>
          <path id="h1" d="M 500 300 C 200 300, 200 150, 100 150" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <path id="h2" d="M 500 300 C 800 300, 800 150, 900 150" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <path id="h3" d="M 500 300 C 500 100, 500 100, 500 50" stroke="rgba(168,85,247,0.2)" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          
          <circle r="4" fill="#10B981" filter="url(#glowHero)"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#h1" /></animateMotion></circle>
          <circle r="4" fill="#3B82F6" filter="url(#glowHero)"><animateMotion dur="4s" repeatCount="indefinite" begin="1s"><mpath href="#h2" /></animateMotion></circle>
          <circle r="4" fill="#A855F7" filter="url(#glowHero)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#h3" /></animateMotion></circle>
        </svg>
        
        {/* Floating Node Labels */}
        <div className="absolute left-[5%] top-[23%] text-[9px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">Internal API</div>
        <div className="absolute right-[5%] top-[23%] text-[9px] font-mono text-blue-400 bg-blue-950/80 border border-blue-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">External ERP</div>
        <div className="absolute left-[45%] top-[5%] text-[9px] font-mono text-purple-400 bg-purple-950/80 border border-purple-500/50 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]">LLM Router</div>
      </div>

      <div className="w-full max-w-xl mx-auto relative group perspective-1000 z-10">

      
      {/* Interactive Hint - Visible before interaction */}
      {!isManualMode && (
        <div className="absolute -top-10 right-4 animate-bounce z-20">
          <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center gap-2 border border-blue-400/30">
            <span>Escribe tu problema y halla una solución</span>
            <span className="text-white/70">↓</span>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 transition duration-500"></div>
      
      {/* Glass Terminal */}
      <div onClick={() => { if(textareaRef.current) textareaRef.current.focus(); }} className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] cursor-text">
        
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-white/[0.02] cursor-default">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="mx-auto text-[10px] font-mono text-slate-500">agent-kernel ~ zsh</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm">

          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">➜</span> 
              <span className="text-purple-400 mt-1">user</span>
              <textarea
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                ref={textareaRef}
                onFocus={handleFocus}
                placeholder={isManualMode ? "Escribe aquí la peor fricción manual de tu empresa..." : placeholderText}
                className="flex-1 bg-transparent text-white placeholder-slate-400 focus:placeholder-slate-600 text-sm focus:outline-none resize-none mt-1 min-h-[60px] cursor-text"
                spellCheck="false"
              />
            </div>
            {/* Suggestion Chips */}
            <div className={`mt-4 flex flex-wrap gap-2 transition-opacity duration-500 ${isManualMode ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}>
               <button type="button" onClick={() => { setInputVal(PRESETS[0].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Cotizaciones lentas</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[1].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Conciliación SAP</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[2].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Fuga en Checkout</button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isManualMode ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`}></span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{isManualMode ? 'Awaiting Input' : 'Auto Pilot Mode'}</span>
              </div>
              <button
                type="submit"
                className={`${isManualMode ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'} text-xs font-sans px-4 py-2 rounded-lg transition-all flex items-center gap-2`}
              >
                <span>Analizar Fricción</span>
                <span className="text-[10px] opacity-50">⏎</span>
              </button>
            </div>
          </form>
              </div>
      </div>
      </div>
    </div>
  );
};

    const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
      return (
        <section id="prompt-hero" className="relative pt-24 pb-24 px-6 md:px-12 overflow-hidden min-h-[90vh] flex items-center">
          {/* Subtle Dynamic Grids & Glows */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
          
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="text-left">
              {/* Category Kicker */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold border border-blue-500/20 bg-blue-500/5 px-3 py-1 rounded-full">
                  INGENIERÍA DE AGENTES IA
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 font-black font-display tracking-tight leading-[1.1] text-4xl lg:text-5xl xl:text-[3.5rem] text-white">
                Construimos agentes de IA que <br className="hidden lg:block"/>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">operan en producción</span><span className="text-blue-500">.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-400 text-base lg:text-lg max-w-xl leading-relaxed mb-10">
                BluePixel es la consultora boutique para empresas líderes en México y LATAM. Conectamos agentes autónomos a tus datos y sistemas reales (SAP, Salesforce), blindados con <strong className="text-white font-semibold">diseño UX de clase mundial</strong> para garantizar adopción humana inmediata.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={onOpenContact}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
                  <span>Auditar mi operación</span>
                  <span>→</span>
                </button>
                <a 
                  href="#three-ways"
                  className="bg-transparent hover:bg-white/5 text-slate-300 font-semibold text-sm px-8 py-4 rounded-xl border border-white/10 transition-colors">
                  Ver metodología ↓
                </a>
              </div>
            </div>

            {/* Right Column: Agentic Terminal */}
            <div className="w-full">
              <HeroPromptEngine onSelectSolution={onSelectSolution} />
            </div>

          </div>
        </section>
      );
    };

    // Social Proof & Client Marquee Section
    const SocialProofSection = () => {
      const doubledLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

      return (
        <section className="py-16 bg-navy-950/90 border-t border-b border-white/[0.08] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center mb-8">
            <h2 className="md: md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
              Empresas líderes en México y Norteamérica <span className="text-slate-400 font-normal">operan sobre arquitectura desarrollada por BluePixel</span><span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden py-4">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-navy-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-navy-950 to-transparent" />
            
            <div className="marquee-track flex items-center gap-14">
              {doubledLogos.map((c, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-4">
                  <img src={c.url} alt={c.name} className="client-logo" />
                </div>
              ))}
            </div>
          </div>

          {/* Hard Proof Numbers & Adoption Guarantee */}
          <div className="max-w-5xl mx-auto px-6 mt-12 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-mono">10+</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Años de Ingeniería</p>
            </div>
            <div className="relative">
              <div className="text-3xl md:text-4xl font-black text-blue-400 font-mono">#1</div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider font-mono mt-1">Firma UX en México</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="text-[10px] font-mono text-blue-400 font-semibold">DesignRush</span>
                <span className="text-slate-600 text-[10px]">·</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">&gt;95% Adopción</span>
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">200+</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Sistemas en Producción</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-400 font-mono">99.9%</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">SLA Cloud Serverless</p>
            </div>
          </div>

          {/* Micro-callout: The UX Moat explained to CTOs */}
          <div className="max-w-3xl mx-auto mt-8 px-4 text-center">
            <p className="text-xs font-mono text-slate-400 bg-navy-850/80 py-2 px-4 rounded-full border border-white/[0.06] inline-flex items-center gap-2">
              <span className="text-blue-400 font-bold">✦ El Secreto de Adopción:</span>
              <span>El 70% del software corporativo fracasa por rechazo del personal. Nosotros fusionamos Deep Tech con UX #1 para garantizar uso real.</span>
            </p>
          </div>
        </section>
      );
    };

    // Agent Terminal Demo (Vstorm Under The Hood Style)
    const AgentTerminalDemo = () => {
      const [activeStep, setActiveStep] = useState(0);
      const [terminalLines, setTerminalLines] = useState([]);
      
      const steps = [
        {
          id: '01',
          title: 'Ingesta Multicanal',
          desc: 'La solicitud de cotización llega por correo con contexto disperso y PDFs adjuntos.',
          logs: [
            '[00:00] task received - quote_request_#992',
            '[00:01] parse - extract text from attached PDF',
            '[00:03] identify - customer ID and 14 requested SKUs'
          ]
        },
        {
          id: '02',
          title: 'Retrieve (MCP)',
          desc: 'El agente consulta el ERP (SAP) en tiempo real para verificar stock y precios.',
          logs: [
            '[00:04] tool_call - mcp_query_sap (stock, pricing)',
            '[00:07] mcp_response - 12 SKUs in stock, 2 backordered',
            '[00:08] tool_call - mcp_query_crm (customer_tier)',
            '[00:10] mcp_response - tier: enterprise (15% volume discount)'
          ]
        },
        {
          id: '03',
          title: 'Verify',
          desc: 'Se cruzan los datos generados contra las reglas de negocio y márgenes operativos.',
          logs: [
            '[00:11] verify - cross-check pricing against min_margin_policy',
            '[00:14] verify - policy passed (margin at 22%)',
            '[00:15] draft - generate verified quote structure'
          ]
        },
        {
          id: '04',
          title: 'Gate & Output',
          desc: 'Se genera el PDF formal. Si hay excepciones, se rutea a un humano para aprobación.',
          logs: [
            '[00:17] tool_call - generate_pdf (quote_#992)',
            '[00:20] routing - standard parameters met -> dispatch to client',
            '[00:21] dispatch - email sent to customer',
            '[00:21] process_complete - awaiting client signature'
          ]
        }
      ];

      useEffect(() => {
        let currentStep = 0;
        let currentLine = 0;
        let isRunning = true;

        const processNextLog = () => {
          if (!isRunning) return;

          if (currentStep < steps.length) {
            setActiveStep(currentStep);
            
            if (currentLine < steps[currentStep].logs.length) {
              setTerminalLines(prev => [...prev, {
                text: steps[currentStep].logs[currentLine],
                step: currentStep
              }]);
              currentLine++;
              setTimeout(processNextLog, 150 + Math.random() * 200); // Random typing delay
            } else {
              currentStep++;
              currentLine = 0;
              setTimeout(processNextLog, 400); // Wait before next step
            }
          }
        };

        const timer = setTimeout(processNextLog, 1000);
        return () => {
          isRunning = false;
          clearTimeout(timer);
        };
      }, []);

      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-bold mb-4 block">
                UNDER THE HOOD
              </span>
              <h2 className="md: mb-6 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                Lo que hace un agente en producción<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Extrae, verifica, ejecuta herramientas y enruta casos límite a un humano cuando las políticas lo requieren. Cada paso queda registrado en la bitácora de auditoría.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Column: Timeline */}
              <div className="lg:col-span-4 relative pl-4 md:pl-0">
                <div className="relative z-10">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    
                    return (
                      <div key={idx} className="flex gap-6 relative">
                        
                        {/* Timeline Node & Line Segment */}
                        <div className="flex flex-col items-center shrink-0 w-6">
                          {/* Node */}
                          <div className={`w-6 h-6 shrink-0 mt-1 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] z-10 relative ${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                          
                          {/* Segment Line */}
                          {idx !== steps.length - 1 && (
                            <div className="w-[2px] flex-grow bg-white/[0.05] my-2 rounded-full overflow-hidden min-h-[48px]">
                              <div className={`w-full bg-red-500 transition-all duration-1000 ease-in-out ${isPast ? 'h-full' : 'h-0'}`}></div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className={`transition-opacity duration-500 flex-1 ${idx !== steps.length - 1 ? 'pb-12' : ''} ${isActive || isPast ? 'opacity-100' : 'opacity-40'}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-red-400 font-bold">{step.id}</span>
                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Terminal & Metrics */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Terminal Window */}
                <div className="bg-navy-900 border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Window Chrome */}
                  <div className="bg-navy-950 border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 flex items-center gap-4">
                      <span>agent · quote-generator</span>
                      <div className="flex items-center gap-1.5 border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 rounded-full">
                        <span>PRODUCTION SHAPE</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-white font-bold">DEMO</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-6 h-[320px] overflow-y-auto font-mono text-xs md:text-sm leading-relaxed flex flex-col">
                    {terminalLines.map((line, idx) => (
                      <div key={idx} className="mb-2 animate-fadeIn flex">
                        <span className="text-slate-500 w-16 shrink-0">{line.text?.substring(0, 7)}</span>
                        <span className={
                          line.text?.includes('task received') ? 'text-white font-bold' :
                          line.text?.includes('tool_call') ? 'text-blue-400' :
                          line.text?.includes('mcp_response') ? 'text-emerald-400' :
                          line.text?.includes('verify') ? 'text-purple-400' :
                          line.text?.includes('routing') || line.text?.includes('dispatch') ? 'text-amber-400' :
                          'text-slate-300'
                        }>
                          {line.text?.substring(7)}
                        </span>
                      </div>
                    ))}
                    {activeStep < steps.length && (
                      <div className="flex mt-2">
                        <span className="w-2 h-4 bg-slate-400 animate-pulse"></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">TIEMPO DE RESOLUCIÓN</span>
                    <span className="text-2xl font-black text-white">21s</span>
                  </div>
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">LLAMADAS MCP (ERP)</span>
                    <span className="text-2xl font-black text-white">2</span>
                  </div>
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AUDIT COVERAGE</span>
                    <span className="text-2xl font-black text-white">100%</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mt-2 px-2">
                  Walkthrough ilustrativo de un agente cotizador — el registro de bitácora está basado en telemetría real (anonimizada) de un sistema de cotización B2B integrado con SAP y Salesforce.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };

    // Workflow Teardown: Antes (Legacy Manual) vs. Después (Agentic BluePixel)
    const WorkflowTeardown = () => {
      const [activeTab, setActiveTab] = useState('legacy');
      const [progress, setProgress] = useState(0);
      const [isHovered, setIsHovered] = useState(false);
      const [isVisible, setIsVisible] = useState(false);
      const sectionRef = React.useRef(null);

      // Intersection Observer to detect when the section is on screen
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              // Optional: reset if you want it to restart when scrolled out and back in
              // setIsVisible(false); 
              // setProgress(0);
              // setActiveTab('legacy');
            }
          },
          { threshold: 0.3 } // Trigger when 30% of it is visible
        );

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }

        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      }, []);

      // Timer logic
      useEffect(() => {
        // Only run if it's visible on screen and not hovered
        if (!isVisible || isHovered) return;
        
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              if (activeTab === 'legacy') {
                setActiveTab('bluepixel');
                return 0;
              } else {
                return 100;
              }
            }
            return prev + 0.85; // Approx 6 seconds per tab
          });
        }, 50);

        return () => clearInterval(interval);
      }, [activeTab, isHovered, isVisible]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
        setProgress(0);
      };

      return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.06] relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Fixed/Sticky Title and Description (Vstorm Layout) */}
            <div className="lg:w-4/12 lg:sticky lg:top-32">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold mb-4 block">
                DIAGNÓSTICO OPERATIVO FORENSE
              </span>
              <h2 className="md: mb-6 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                El abismo entre un proceso manual y una capa agentizada<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                La mayoría de los proyectos de IA fracasan porque se enfocan en "chatbots" en lugar de infraestructura. En BluePixel, auditamos tus cuellos de botella antes de escribir una sola línea de código.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Nuestros agentes determinísticos (Model Context Protocol) transforman la fricción humana de días en una ejecución instantánea y auditable.
              </p>
            </div>

            {/* Right Column: Interactive Tab Card + Secondary Card */}
            <div className="lg:w-8/12 flex flex-col gap-8 w-full">
              
              {/* 1. Main Interactive Card */}
              <div 
                className="bg-[#0A0F1D] border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl relative w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Progress Line */}
                <div className="h-1 w-full bg-navy-950 absolute top-0 left-0 z-20">
                  <div 
                    className={`h-full transition-all duration-75 ${activeTab === 'legacy' ? 'bg-red-500' : 'bg-emerald-400'}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Header & Tabs */}
                <div className="px-6 md:px-12 py-8 flex justify-center border-b border-white/[0.05]">
                  <div className="inline-flex items-center p-1 bg-[#060A14] border border-white/[0.08] rounded-full shadow-inner w-full sm:w-auto overflow-x-auto">
                    <button 
                      onClick={() => handleTabClick('legacy')}
                      className={`flex-1 sm:flex-none px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'legacy' ? 'bg-[#131D35] text-white shadow-lg border border-white/[0.08]' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      Proceso Manual
                    </button>
                    <button 
                      onClick={() => handleTabClick('bluepixel')}
                      className={`flex-1 sm:flex-none px-6 md:px-10 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'bluepixel' ? 'bg-blue-600/10 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)] border border-emerald-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      Con BluePixel
                    </button>
                  </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-b from-transparent to-navy-950/30">
                  
                  {/* Legacy Tab */}
                  <div className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out flex flex-col justify-center ${activeTab === 'legacy' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'}`}>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="md:w-5/12">
                        <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-2">Error Operativo</span>
                        <div className="text-7xl font-black text-white tracking-tighter">18<span className="text-4xl text-red-500">%</span></div>
                      </div>
                      <div className="md:w-7/12 space-y-4">
                        <h3 className="font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Cuellos de botella humanos<span className="text-blue-500">.</span></h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          El ejecutivo teclea datos a mano en hojas de cálculo con fórmulas desactualizadas. Se pierde tiempo en llamadas internas para verificar reglas de negocio, generando <strong className="text-red-400 font-semibold">$1.2M MXN en pérdidas anuales</strong> por fricción.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BluePixel Tab */}
                  <div className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out flex flex-col justify-center ${activeTab === 'bluepixel' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-8 pointer-events-none z-0'}`}>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="md:w-5/12">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">Precisión</span>
                        <div className="text-7xl font-black text-white tracking-tighter">99<span className="text-4xl text-emerald-400">.9%</span></div>
                      </div>
                      <div className="md:w-7/12 space-y-4">
                        <h3 className="font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Ejecución determinística<span className="text-blue-500">.</span></h3>
                        <p className="text-slate-300 leading-relaxed text-sm">
                          El servidor MCP consulta el stock real directamente en el ERP (SAP/Salesforce). Se genera la cotización en PDF al instante, asegurando un <strong className="text-emerald-400 font-semibold">+340% de ROI proyectado</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. Secondary Static Card */}
              <div className="bg-[#0A0F1D]/40 border border-white/[0.04] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center hover:bg-[#0A0F1D]/80 hover:border-white/[0.1] transition-colors">
                <div className="text-5xl font-black text-white mb-4">340<span className="text-blue-500">%</span></div>
                <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Retorno de inversión (ROI) documentado<span className="text-blue-500">.</span></h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  BluePixel destila patrones arquitectónicos exitosos de despliegues en producción para el sector logístico, fintech y enterprise SaaS. No experimentamos con tu operación; replicamos lo que ya funciona y lo adaptamos a tus sistemas legacy.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };
// Tech Stack & Ecosystem (Vstorm Asymmetric Grid Style)
    const AgenticTechStack = () => {
      return (
        <section id="tech-stack" className="py-24 px-6 md:px-12 bg-navy-900 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="md: mb-6 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                Nuestro ecosistema tecnológico<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Cuatro pilares de ingeniería para equipos que mueven agentes de lenguajes (LLM) de pruebas piloto a entornos de producción corporativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
              
              {/* Card 1: Large Left (Spans 2 rows on desktop) */}
              <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-navy-800 to-navy-950 border border-white/[0.08] rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col min-h-[400px]">
                {/* Abstract Data Background Effect */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">01</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">PROTOCOLO CORE</span>
                  </div>
                  <h3 className="mb-4 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Model Context Protocol (MCP)<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    El estándar abierto que conecta de forma determinística los LLMs con tus orígenes de datos locales, ERPs y APIs corporativas. Sin integraciones frágiles.
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>SAP</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>Salesforce</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>HubSpot</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Top Middle */}
              <div className="md:col-span-1 bg-navy-850 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-colors"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">02</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">FRAMEWORKS AGENTICOS</span>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Orquestación de Enjambres<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sistemas multi-agente construidos con rigor de ingeniería de software. Tipado estricto y flujos dirigidos.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-blue-400">⚡</span>Pydantic AI</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-emerald-400">🦜</span>LangGraph</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Top Right */}
              <div className="md:col-span-1 bg-navy-950 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-between hover:border-indigo-500/20 transition-colors group relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">03</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">MEMORIA & CONTEXTO</span>
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">RAG & Bases Vectoriales<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Pipelines de recuperación avanzada que evitan alucinaciones anclando las respuestas a tu data.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">Pinecone</span></span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">🐘</span>pgvector</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom Wide (Spans 2 columns) */}
              <div className="md:col-span-2 bg-navy-850 border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-center hover:border-white/10 transition-colors group relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">04</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">DESPLIEGUE CLOUD</span>
                  </div>
                  <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">LLMOps & Serverless Architecture<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                    Agentes que corren en producción exigen infraestructura de grado empresarial. Monitoreo de latencia, tracking de costos por token, despliegues CI/CD y contenedores escalables sin fricción.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      );
    };

    // Tech Partners / Tools (Vstorm Logo Grid Style)
    const TechPartners = () => {
      const logos = [
        { name: 'OpenAI', url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
        { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
        { name: 'Pinecone', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb99087d463854a86d_moradauno.svg' }, // Placeholder, can be text or different SVG later
        { name: 'LangChain', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa84cae103a5130734_pakke.svg' }, // Placeholder
        { name: 'PostgreSQL', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
        { name: 'GitHub', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' }
      ];

      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="md: mb-4 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                El stack detrás de la ingeniería<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Arquitectura de grado empresarial impulsada por los proveedores líderes de IA, bases de datos vectoriales y cloud computing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Dark Card */}
              <div className="lg:col-span-5 bg-navy-900 border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[300px]">
                <p className="text-white font-semibold text-lg leading-relaxed max-w-sm">
                  Desplegamos infraestructura sobre ecosistemas probados en producción.
                </p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center border-4 border-navy-950">
                    <span className="text-white font-bold text-xs">BP</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ecosistema Certificado</p>
                    <p className="text-xs text-slate-400">Integración nativa vía MCP</p>
                  </div>
                </div>
              </div>

              {/* Right Logo Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
                {/* Manual grid of tools */}
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">OpenAI</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">AWS</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">SAP</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Pydantic</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">LangGraph</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Pinecone</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">Salesforce</span>
                </div>
                <div className="bg-navy-950 p-6 flex items-center justify-center hover:bg-navy-900 transition-colors">
                  <span className="text-slate-300 font-bold font-mono text-sm tracking-wider">pgvector</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    
    const CaseStudiesSection = ({ onOpenCase }) => {
      const cases = [
        {
          id: 'bimbo',
          client: 'Grupo Bimbo',
          industry: 'Consumo Masivo / Global',
          title: 'Estandarización analítica y aplicaciones operativas para miles de colaboradores',
          kpi: '+40%',
          kpiLabel: 'Productividad Directiva',
          desc: 'Diseño y desarrollo de plataformas de analítica de datos e interfaces internas para estandarizar la toma de decisiones directivas en múltiples regiones.',
          tags: ['Data & Analytics', 'Enterprise UX', 'Custom Software'],
          image: '/case4.jpg'
        },
        {
          id: 'radioshack',
          client: 'RadioShack',
          industry: 'Retail & E-commerce',
          title: 'Reinvención transaccional de comercio digital y reducción de fricción de compra',
          kpi: '-60%',
          kpiLabel: 'Fricción de Pago',
          desc: 'Rediseño integral de la plataforma de ventas y arquitectura transaccional para optimizar conversión, reduciendo fricción cognitiva en carritos de compra.',
          tags: ['E-Commerce', 'Mobile Apps', 'UX Redesign'],
          image: '/case1.jpg'
        },
        {
          id: 'lifemiles',
          client: 'LifeMiles / Avianca',
          industry: 'Travel & Loyalty LATAM',
          title: 'Optimización de experiencia en uno de los mayores programas de lealtad de LATAM',
          kpi: '+28%',
          kpiLabel: 'Retención Digital',
          desc: 'Rediseño de flujos críticos de usuario y pasarelas de redención para reducir abandonos y maximizar retención de clientes en entornos móviles.',
          tags: ['Loyalty Systems', 'Behavioral UX', 'Mobile First'],
          image: '/case2.jpg'
        },
        {
          id: 'iqos',
          client: 'IQOS / Philip Morris',
          industry: 'Retail & Hardware',
          title: 'Arquitectura de pagos y billetera digital in-app',
          kpi: '+55%',
          kpiLabel: 'Retención de Usuarios',
          desc: 'Construimos la plataforma transaccional de pagos recurrentes, reduciendo fricción y aumentando el Life Time Value de los usuarios en la región.',
          tags: ['Fintech', 'Mobile Apps', 'Payment Gateways'],
          image: '/case3.jpg'
        }
      ];

      const [active, setActive] = useState(0);

      return (
        <section id="casos" className="py-24 px-6 md:px-12 bg-[#02040A] border-t border-white/[0.08] overflow-hidden">
          <div className="max-w-7xl mx-auto">
             
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                CASOS DE ÉXITO AUDITADOS
              </span>
              <h2 className="mt-3 mb-4 font-black font-display tracking-tight leading-[1.15] text-3xl md:text-4xl lg:text-5xl text-white">
                Resultados medibles a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">escala corporativa</span><span className="text-blue-500">.</span>
              </h2>
            </div>
 
            {/* Interactive Showcase Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
               
              {/* Left Column: Navigation Tabs */}
              <div className="lg:w-1/3 flex flex-col gap-3">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 ${active === idx ? 'bg-navy-800 border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]' : 'bg-transparent border-transparent hover:bg-white/[0.02] opacity-50 hover:opacity-100'}`}
                  >
                    <h3 className={`font-bold font-display text-xl mb-1 transition-colors ${active === idx ? 'text-white' : 'text-slate-400'}`}>{c.client}</h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{c.industry}</p>
                  </button>
                ))}
              </div>
 
              {/* Right Column: Deep Dive Panel */}
              <div className="lg:w-2/3 relative h-[650px] md:h-[550px]">
                {cases.map((c, idx) => (
                  <div 
                    key={c.id} 
                    className={`absolute inset-0 h-full bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col md:flex-row ${active === idx ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    
                    {/* Left side of the card: Text Content */}
                    <div className="relative z-20 flex flex-col h-full p-8 md:p-12 md:w-3/5">
                      {/* KPI Section */}
                      <div className="mb-6 border-b border-white/[0.05] pb-6">
                         <div className={`font-black font-display text-5xl md:text-7xl tracking-tighter mb-1 transition-colors duration-700 ${idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-orange-400' : idx === 2 ? 'text-red-400' : 'text-teal-400'}`}>
                           {c.kpi}
                         </div>
                         <div className="text-slate-400 text-xs md:text-sm font-mono uppercase tracking-widest">{c.kpiLabel}</div>
                      </div>
 
                      {/* Challenge & Solution */}
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{c.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                        {c.desc}
                      </p>
 
                      {/* Footer: Tags */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {c.tags.map(tag => (
                          <span key={tag} className="bg-white/[0.03] border border-white/[0.08] text-slate-300 text-[10px] px-3 py-1.5 rounded-lg uppercase tracking-wider font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
 
                    {/* Right side of the card: Visual Graphic */}
                    <div className="relative md:w-2/5 h-48 md:h-full border-t md:border-t-0 md:border-l border-white/[0.05] bg-black">
                       <div className={`absolute inset-0 bg-gradient-to-tr opacity-20 mix-blend-screen z-10 ${idx === 0 ? 'from-blue-600' : idx === 1 ? 'from-orange-600' : idx === 2 ? 'from-red-600' : 'from-teal-600'}`}></div>
                       <img src={c.image} alt={c.client} className="w-full h-full object-cover object-left opacity-60 mix-blend-lighten" />
                       <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#060A14] via-[#060A14]/80 to-transparent z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    const FAQSection = () => {
      const faqs = [
        {
          q: "¿Quién es dueño de la Propiedad Intelectual (código, datos y prompts)?",
          a: "Ustedes. Al 100%. No usamos sus datos para entrenar modelos públicos ni retenemos derechos sobre la infraestructura que construimos. Todo el stack tecnológico se despliega en su nube privada (AWS, Azure o GCP) y es auditado por su equipo de seguridad antes del pase a producción."
        },
        {
          q: "¿Cuánto tiempo toma llevar un agente de IA a producción real?",
          a: "A diferencia de PoCs eternas, nuestra metodología de despliegue asegura un Agente MVP funcional en 4 a 6 semanas. Las semanas 7 a 12 se enfocan exclusivamente en hardening (seguridad, manejo de excepciones y escalabilidad) para un pase a producción libre de fricción."
        },
        {
          q: "¿Qué modelos usan bajo el capó? ¿Están atados a OpenAI?",
          a: "Somos completamente agnósticos. Diseñamos plataformas enrutables (Router-based AI). Usamos Claude 3.5 Sonnet para tareas complejas de razonamiento lógico, GPT-4o para parsing estructurado, o modelos Llama 3 on-premise si sus políticas de gobernanza de datos exigen aislamiento total."
        },
        {
          q: "¿No podemos hacer esto internamente con nuestro equipo de ingeniería?",
          a: "Construir aplicaciones SaaS tradicionales es muy distinto a orquestar agentes no-determinísticos. Su equipo domina su negocio y su código base; nosotros aportamos los patrones arquitectónicos exclusivos de IA (Graph-state, Vector DBs, Model Context Protocol) para no reinventar la rueda y evitar sobrecostos ocultos."
        }
      ];
      
      const [openIdx, setOpenIdx] = useState(null);

      return (
        <section className="py-24 px-6 md:px-12 bg-[#02040A] relative border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-4">
                Transparencia Técnica
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
                Respuestas para líderes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">tecnología</span><span className="text-blue-500">.</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/[0.08] bg-[#060A14] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.15]">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className={`text-lg font-bold pr-8 transition-colors ${openIdx === idx ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                    <span className={`text-blue-400 flex-shrink-0 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-400 leading-relaxed mt-2">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };


// Our Services (Vstorm Asymmetric Grid Style)
    
    const ThreeWaysToWork = ({ onSelectPackage }) => {
      return (
        <section id="three-ways" className="py-24 px-6 md:px-12 bg-[#040711] border-t border-b border-white/[0.06] relative overflow-hidden">
          
          {/* Subtle Node-Network Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)', backgroundSize: '40px 70px', backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px' }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                CÓMO TRABAJAR CON NOSOTROS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 mb-4">
                Tres formas de colaborar con BluePixel<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Dos paquetes de entrada para equipos que buscan certidumbre técnica inmediata, y un programa integral para construir y operar tu capa completa de agentes en producción.
              </p>
            </div>
    
            {/* Grid de 3 Tarjetas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
    
              {/* CARD 01: Transformation Advisory / Diagnóstico */}
              <div className="bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                      ENTRY PACKAGE
                    </span>
                    <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-blue-400 transition-colors">01</span>
                  </div>
    
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico & Auditoría FutureProof</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Te mostramos exactamente el camino e identificamos qué automatizar. Tu equipo adquiere claridad y músculo antes de invertir en código.
                  </p>
    
                  <ul className="space-y-3 mb-8">
                    {[
                      'Mapeo de procesos y diagnóstico de operaciones',
                      'Detección de fricción con gemelos digitales (IMPATH™)',
                      'Matriz de priorización de agentes IA y cálculo de ROI',
                      'Blueprint de arquitectura técnica y gobernanza de datos',
                      'Reporte ejecutivo con costo de inacción cuantificado en pesos'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-blue-400 mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">2 a 4 Semanas</span>
                  <button 
                    onClick={() => onSelectPackage && onSelectPackage('Diagnóstico & Auditoría (01)')}
                    className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                    <span>Solicitar Diagnóstico</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
    
              {/* CARD 02: Agentic Engineering */}
              <div className="bg-[#060A14] border border-white/[0.08] hover:border-indigo-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                      ENTRY PACKAGE
                    </span>
                    <span className="text-2xl font-black text-slate-600 font-mono group-hover:text-indigo-400 transition-colors">02</span>
                  </div>
    
                  <h3 className="text-2xl font-bold text-white mb-2">Ingeniería de Agentes & MCP</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Ya sabes qué flujo necesitas construir. Nosotros diseñamos la arquitectura, programamos los agentes y los integramos en tu entorno real.
                  </p>
    
                  <ul className="space-y-3 mb-8">
                    {[
                      'Diseño de arquitectura agéntica con protocolos MCP',
                      'Flujos de trabajo autónomos sobre datos reales con RAG',
                      'Integración con tu stack empresarial (SAP, Salesforce, ERP)',
                      'Ingeniería, pruebas de estrés y despliegue cloud en producción',
                      'Blindaje contra alucinaciones y cumplimiento OWASP / LFPDPPP'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-indigo-400 mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Sprints Mensuales</span>
                  <button 
                    onClick={() => onSelectPackage && onSelectPackage('Ingeniería de Agentes (02)')}
                    className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5 transition-colors">
                    <span>Explorar Ingeniería</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
    
              {/* CARD 03 (01+02): Full Transformation (Destacado) */}
              <div className="bg-gradient-to-b from-[#0F1628] to-[#060A14] border-2 border-blue-500/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500 text-white font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      FULL TRANSFORMATION
                    </span>
                    <span className="text-2xl font-black text-blue-400 font-mono">01+02</span>
                  </div>
    
                  <h3 className="text-2xl font-bold text-white mb-2">Transformación: BUILD + EVOLVE</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    De cero a una capa agentizada y plataforma digital de alta disponibilidad en producción. Estrategia, ingeniería y evolución continua end-to-end.
                  </p>
    
                  <ul className="space-y-3 mb-8">
                    {[
                      'Equipo senior dedicado embebido: Tech Lead, AI Engineer y UX Lead',
                      'Todo lo incluido en los paquetes 01 (Diagnóstico) y 02 (Ingeniería)',
                      'Construcción completa de plataforma en 90 días (BUILD)',
                      'Monitoreo trimestral de UX Health Score y ROI (EVOLVE)',
                      'Hand-off estructurado: tu equipo es dueño absoluto de lo que opera'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <div className="pt-6 border-t border-white/[0.12] flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-300 font-semibold uppercase tracking-wider">3+ Meses / Continuo</span>
                  <button 
                    onClick={() => onSelectPackage && onSelectPackage('Transformación Integral (01+02)')}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5">
                    <span>Agendar Sesión</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
      );
    };

    const EngineeringLeadership = () => (
      <section className="py-24 px-6 md:px-12 bg-navy-900 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                ENGINEERING LEADERSHIP
              </span>
              <h2 className="md: md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                No vendemos "recursos". Asignamos Arquitectos a tu operación<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                El 90% de las agencias de software escalan contratando juniors y cobrándolos a precio de senior. En BluePixel, cada proyecto es liderado de principio a fin por un <strong>Lead Architect</strong> con experiencia probada en sistemas enterprise. Tú firmas el cheque con humanos responsables del ROI, no con "vendedores".
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center font-bold text-white text-xl">
                    L
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Leonardo</h4>
                    <span className="text-slate-400 text-xs font-mono">Lead Agentic Engineer</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center font-bold text-white text-xl">
                    P
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Pablo G.</h4>
                    <span className="text-slate-400 text-xs font-mono">Principal Architect</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-navy-950 p-8 rounded-3xl border border-blue-500/20 shadow-2xl relative">
              <div className="absolute -top-6 -left-4 text-6xl text-blue-500/20 font-serif leading-none">"</div>
              <p className="text-white text-lg font-medium italic leading-relaxed mb-6">
                "Nuestra promesa a los CTOs es simple: Si al mes 2 el agente no ha liberado horas de tu equipo, fallamos. Por eso no vendemos código a granel; diagnosticamos y operamos."
              </p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">Liderazgo Técnico Directo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

    // Línea de Tiempo de Transparencia B2B (¿Qué pasa después de contactar?)
    const PostContactSLA = ({ onOpenContact }) => {
      const steps = [
        {
          time: 'Minuto 0',
          title: 'NDA Bilateral Inmediato',
          desc: 'Recibes acuse automático con nuestro Acuerdo de Confidencialidad firmado digitalmente para proteger tus datos y procesos de negocio.'
        },
        {
          time: '24 Horas',
          title: 'Auditoría Forense de Viabilidad',
          desc: 'Un Lead Architect (no un vendedor novato) analiza tu flujo operativo y evalúa la viabilidad técnica contra nuestros casos previos.'
        },
        {
          time: '48 Horas',
          title: 'Sesión Técnica de 30 min & Blueprint',
          desc: 'Te entregamos una hipótesis de arquitectura preliminar, cálculo estimado de ROI y el alcance exacto del Diagnóstico Operativo.'
        }
      ];

      return (
        <section className="py-20 px-6 md:px-12 bg-navy-950 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                COMPROMISO DE SERVICIO & TRANSPARENCIA
              </span>
              <h2 className="md: mt-2 mb-3 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                ¿Qué sucede exactamente cuando nos contactas<span className="text-blue-500">?</span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Cero ventas agresivas. Cero llamadas con personas que no entienden de ingeniería.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-navy-900 border border-white/[0.08] rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {s.time}
                    </span>
                    <span className="text-slate-600 font-mono text-sm">0{idx + 1}</span>
                  </div>
                  <h3 className="mb-2 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    // FORMULARIO EN 3 PASOS (Estilo Vstorm / Progressive Disclosure)
    const MultiStepContact = ({ preselectedPackage }) => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        company: '',
        role: '',
        phone: '',
        workflow: '',
        consentData: false,
        consentNewsletter: false
      });
      const [submitted, setSubmitted] = useState(false);

      const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
      };

      const handleNext = (e) => {
        e.preventDefault();
        setStep(prev => prev + 1);
      };

      const handleBack = () => {
        setStep(prev => prev - 1);
      };

      const handleSubmitFinal = (e) => {
        e.preventDefault();
        console.log("Submitting:", formData);
        setSubmitted(true);
      };

      return (
        <section id="contact-form" className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Fixed Title and Value Prop */}
            <div className="lg:w-5/12 lg:sticky lg:top-32">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 block">
                DIAGNÓSTICO TÉCNICO SIN COSTO
              </span>
              <h2 className="md: lg: mb-6 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                Completa el formulario<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                ¿Prefieres que revisemos tu operación? Llena los 3 pasos rápidos y un estratega técnico de BluePixel te entregará un diagnóstico de viabilidad y arquitectura en menos de 24 horas.
              </p>

              {/* Added trust signals (SLA) on the left side */}
              <div className="p-6 bg-navy-900/50 border border-white/[0.05] rounded-2xl space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Garantía de Confidencialidad</h4>
                    <p className="text-slate-500 text-xs mt-1">Tus datos y procesos internos están protegidos mediante NDA desde el primer minuto.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-blue-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Auditoría por Arquitectos</h4>
                    <p className="text-slate-500 text-xs mt-1">Tu caso es analizado por ingenieros y Tech Leads, no por equipos de ventas tradicionales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:w-7/12 w-full">
              {/* The Multi-Step Card */}
              <div className="bg-navy-900 border border-white/[0.08] rounded-[2rem] p-8 sm:p-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-blue-500/10"></div>
                
                <div className="relative z-10">
                  {/* Progress Indicator */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4 px-2">
                      <span className={`transition-colors duration-500 ${step >= 1 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>01. Tú</span>
                      <span className={`transition-colors duration-500 ${step >= 2 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>02. Empresa</span>
                      <span className={`transition-colors duration-500 ${step === 3 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>03. Fricción</span>
                    </div>
                    <div className="flex gap-2 w-full h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-700 ease-in-out rounded-full ${step >= 1 ? 'w-1/3 bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-1/3 bg-white/[0.03]'}`} />
                      <div className={`h-full transition-all duration-700 ease-in-out rounded-full ${step >= 2 ? 'w-1/3 bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'w-1/3 bg-white/[0.03]'}`} />
                      <div className={`h-full transition-all duration-700 ease-in-out rounded-full ${step === 3 ? 'w-1/3 bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'w-1/3 bg-white/[0.03]'}`} />
                    </div>
                  </div>

                  {!submitted ? (
                    <div>
                      {/* STEP 1 */}
                      {step === 1 && (
                        <form onSubmit={handleNext} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="mb-2 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Tus datos de contacto<span className="text-blue-500">.</span></h3>
                            <p className="text-slate-400 text-sm">Para saber con quién nos comunicamos directamente.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">NOMBRE COMPLETO</label>
                              <input required type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} placeholder="Ej. Roberto" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-navy-900/80 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 shadow-inner" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">CORREO CORPORATIVO</label>
                              <input required type="email" value={formData.workEmail} onChange={(e) => handleChange('workEmail', e.target.value)} placeholder="roberto@empresa.com" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-navy-900/80 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 shadow-inner" />
                            </div>
                          </div>
                          <div className="pt-4 border-t border-white/[0.04]">
                            <button type="submit" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Siguiente Paso</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <form onSubmit={handleNext} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="mb-2 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Datos de tu empresa<span className="text-blue-500">.</span></h3>
                            <p className="text-slate-400 text-sm">Para asignar al arquitecto ideal a tu sector operativo.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">NOMBRE DE LA EMPRESA</label>
                              <input required type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} placeholder="Ej. Grupo X" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">TU CARGO</label>
                              <input required type="text" value={formData.role} onChange={(e) => handleChange('role', e.target.value)} placeholder="Ej. Director de Operaciones" className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" />
                            </div>
                          </div>
                          <div className="pt-8 flex items-center justify-between border-t border-white/[0.04]">
                            <button type="button" onClick={handleBack} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1] transition-colors">Atrás</button>
                            <button type="submit" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Continuar</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <form onSubmit={handleSubmitFinal} className="space-y-8 animate-fadeIn">
                          <div>
                            <h3 className="mb-2 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">Cuello de botella técnico<span className="text-blue-500">.</span></h3>
                            <p className="text-slate-400 text-sm">Describe la fricción que deseas resolver.</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">¿QUÉ FLUJO DE TRABAJO BUSCAS AGENTIZAR?</label>
                              <textarea required rows="5" value={formData.workflow} onChange={(e) => handleChange('workflow', e.target.value)} placeholder="Ej. Queremos automatizar la cotización..." className="w-full bg-navy-950/50 border border-white/[0.06] rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none" />
                            </div>
                          </div>
                          <div className="pt-8 flex items-center justify-between border-t border-white/[0.04]">
                            <button type="button" onClick={handleBack} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1] transition-colors">Atrás</button>
                            <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                              <span>Enviar Diagnóstico</span><span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  ) : (
                    /* SUCCESS STATE */
                    <div className="text-center py-16 animate-fadeIn">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/20 to-emerald-400/5 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
                      <h4 className="text-3xl font-black text-white mb-4">Diagnóstico Recibido</h4>
                      <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-10">Gracias <strong className="text-white">{formData.fullName || 'por escribirnos'}</strong>. Un arquitecto te contactará en menos de 24 horas.</p>
                      <button onClick={() => { setSubmitted(false); setStep(1); }} className="bg-transparent hover:bg-white/[0.05] text-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/[0.1]">Enviar nueva consulta</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </section>
      );
    };
const SolutionDrawer = ({ solution, onClose, onOpenContact }) => {
      if (!solution) return null;

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-blue-500/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl glow-agentic relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 text-sm">
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 uppercase tracking-widest font-semibold">
                {solution.categoria}
              </span>
              <h3 className="md: mt-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">
                Arquitectura de Solución para tu Operación<span className="text-blue-500">.</span>
              </h3>
              <p className="text-slate-300 text-sm mt-1.5 italic bg-navy-850 p-3 rounded-xl border border-white/[0.06]">
                "{solution.prompt}"
              </p>
            </div>

            <div className="mb-6 bg-red-500/10 border border-red-500/25 rounded-xl p-4">
              <div className="text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                ⚠ Fricción Operativa & Costo de Inacción
              </div>
              <p className="text-white text-sm font-medium">{solution.impacto}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                ◈ Flujo de Trabajo Agentizado (Blueprint de Ingeniería)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solution.arquitectura.map((p, idx) => (
                  <div key={idx} className="bg-navy-850 border border-white/[0.08] rounded-xl p-3.5">
                    <span className="text-blue-400 font-mono text-xs font-bold block mb-1">{p.paso}</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-4">
                <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1">
                  ✦ Caso Real Análogo en Producción
                </span>
                <p className="text-white text-xs font-medium leading-relaxed">{solution.casoAnalogo}</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/25 rounded-xl p-4">
                <span className="text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1">
                  ✦ Retorno Financiero Estimado
                </span>
                <p className="text-white text-xs font-medium leading-relaxed">{solution.roiEstimado}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400">
                Implementación estimada: <strong className="text-white font-semibold">{solution.tiempoImplementacion}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                  Cerrar
                </button>
                <button
                  onClick={() => { onClose(); onOpenContact(); }}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                  <span>Solicitar Diagnóstico</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      );
    };

    // Final CTA Section (Vstorm Style)
    const FinalCTA = ({ onOpenContact }) => {
      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto">
            <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-bold mb-6 block">
                  AGENDA UNA CONVERSACIÓN TÉCNICA
                </span>
                
                <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-4xl md:text-5xl lg:text-6xl text-white">
                  ¿Listo para llevar tu visión de IA a producción<span className="text-blue-500">?</span>
                </h2>
                
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
                  Reserva 45 minutos con nuestros arquitectos de software. Revisaremos tus cuellos de botella operativos, analizaremos la viabilidad técnica y definiremos el primer paso realista para tu organización — incluso si la respuesta es que aún no estás listo para construir.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={onOpenContact}
                    className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Diagnóstico</span>
                    <span>↗</span>
                  </button>
                  
                  <a 
                    href="#case-studies"
                    className="w-full sm:w-auto bg-transparent hover:bg-white/[0.05] text-white font-semibold text-sm px-8 py-3.5 rounded-full border border-white/[0.15] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Ver Casos de Éxito</span>
              <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    // App Component Root
    
    // Soberanía Técnica y Cero Lock-in (Estrategia B2B)
    const TechnicalSovereignty = () => {
      return (
        <section className="py-24 px-6 md:px-12 bg-gradient-to-t from-navy-950 to-navy-900 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Header left-aligned instead of centered to match asymmetric style */}
            <div className="max-w-3xl mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-4 block">
                CERO LOCK-IN · SOBERANÍA ABSOLUTA
              </span>
              <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-4xl lg:text-5xl">
                Tu infraestructura<span className="text-blue-500">.</span> Tus datos<span className="text-blue-500">.</span> Tu código fuente<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                Construimos agentes de IA bajo un principio fundacional innegociable: tú eres el dueño absoluto de la tecnología. No vendemos "cajas negras" ni cobramos licencias abusivas por usuario.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Card 1: Wide Card (Span 2 columns) */}
              <div className="lg:col-span-2 bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-colors group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-colors"></div>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNyw5OSwyMzUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                  <h3 className="mb-4 font-bold font-display text-2xl md:text-3xl tracking-tight leading-[1.2]">Despliegue nativo en tu VPC<span className="text-blue-500">.</span></h3>
                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
                  </p>
                </div>
                
                {/* Right side Visual Graphic for VPC Card */}
                <div className="hidden lg:flex w-full max-w-[320px] items-center justify-end relative z-10">
                  <div className="w-full bg-[#060A14] rounded-2xl border border-white/[0.08] p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="text-[10px] font-mono text-blue-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      VPC_DEPLOYMENT_STATUS
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">ec2_cluster_nodes</span>
                         <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                       </div>
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">rds_vector_db</span>
                         <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">SYNCED</span>
                       </div>
                       <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                         <span className="text-[11px] text-slate-300 font-mono">iam_zero_trust</span>
                         <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">ENFORCED</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Square */}
              <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Propiedad del Código<span className="text-blue-500">.</span></h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
                  Al finalizar la fase de desarrollo (Build), te entregamos el 100% de los derechos intelectuales y el código fuente. Eres completamente libre de mantenerlo in-house con tu equipo de ingeniería o contratar nuestra póliza de Mantenimiento.
                </p>
              </div>

              {/* Card 3: Square */}
              <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Modelos Blindados<span className="text-blue-500">.</span></h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
                  Utilizamos instancias empresariales de LLMs con políticas estrictas de privacidad (Zero Data Retention). Ninguna conversación confidencial o dato de tus clientes se usará jamás para entrenar modelos públicos.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };

    
    const Footer = () => (
      <footer className="bg-[#02040A] border-t border-white/[0.05] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Brand & Strategy Column (Takes 4 cols) */}
            <div className="lg:col-span-4 pr-8">
              <div className="flex items-center mb-8">
                <img src="/logo.png" alt="BluePixel" className="h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                No somos una agencia de marketing ni un equipo de "prompters". Somos una firma de <strong className="text-white">ingeniería de software corporativo</strong> especializada en Sistemas Multi-Agente, RAG y automatización determinística.
              </p>
              
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Enterprise Ready</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-tight font-mono">
                  Despliegues en VPC privadas. Cero entrenamiento de modelos con tu IP. Infraestructura escalable.
                </p>
              </div>
            </div>

            {/* Links Columns (Take 8 cols total) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* Architecture Column */}
              <div>
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Arquitectura</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> RAG Corporativo</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Swarms (Sistemas Multi-Agente)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Servidores MCP (ERP Integration)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Edge AI & Serverless</a></li>
                </ul>
              </div>

              {/* Operations Column */}
              <div>
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Metodología</h3>
                <ul className="space-y-4">
                  <li><a href="#casos" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Casos de Éxito & ROI</a></li>
                  <li><a href="#three-ways" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Fases de Implementación</a></li>
                  <li><a href="#contact-form" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Diagnóstico de Arquitectura</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"><span className="text-blue-500/0 group-hover:text-blue-500 transition-colors">▹</span> Ingeniería vs Agencias</a></li>
                </ul>
              </div>

              {/* Compliance Column */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Seguridad B2B</h3>
                <ul className="space-y-4 mb-6">
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Acuerdo de Confidencialidad (NDA)</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Políticas Zero-Data Retention</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">SLA de Soporte Crítico</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-slate-500 text-xs font-mono">
                &copy; {new Date().getFullYear()} BluePixel Engineering.
              </p>
              <span className="hidden md:block text-slate-700">|</span>
              <p className="text-slate-500 text-xs font-mono">
                Transformando corporativos en ecosistemas resilientes.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );

    const App = () => {
      const [selectedSolution, setSelectedSolution] = useState(null);
      const [isContactOpen, setIsContactOpen] = useState(false);
      const [preselectedPkg, setPreselectedPkg] = useState(null);

      const scrollToForm = (pkgName) => {
        if (pkgName && typeof pkgName === 'string') setPreselectedPkg(pkgName);
        setIsContactOpen(true);
      };

      return (
        <div className="min-h-screen">
          <Navbar onOpenContact={() => scrollToForm()} />
          <HeroWithPrompt 
            onSelectSolution={(sol) => setSelectedSolution(sol)} 
            onOpenContact={() => scrollToForm()}
          />
          <SocialProofSection />
          <WorkflowTeardown />
          <AgentTerminalDemo />
          <AgenticTechStack />
          <TechnicalSovereignty />
          {/* <TechPartners /> */}
          <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
          <FAQSection />
          <ThreeWaysToWork onSelectPackage={(pkg) => scrollToForm(pkg)} />
          <EngineeringLeadership />
          <PostContactSLA />
          <FinalCTA onOpenContact={() => scrollToForm()} />
          <Footer />
          
          <SolutionDrawer 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
            onOpenContact={() => scrollToForm()} 
          />
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
              <div className="bg-navy-900 border border-white/[0.08] rounded-2xl w-full max-w-4xl relative overflow-hidden my-auto shadow-2xl">
                <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 z-50 text-sm transition-colors">✕</button>
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-6">
                  <MultiStepContact preselectedPackage={preselectedPkg} />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
export default App;
