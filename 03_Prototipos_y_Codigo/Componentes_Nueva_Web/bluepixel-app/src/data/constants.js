// Presets de Casos Operativos para el Hero Prompt Bar
export const PRESETS = [
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
    casoAnalogo: 'Caso Bimbo: Reducción del tiempo de cotización de 48 hrs a 3 minutos con 0% de error de cálculo.',
    roiEstimado: 'Ahorro de $680,000 MXN anuales + incremento de 22% en win-rate comercial.',
    tiempoImplementacion: '4 a 6 semanas'
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
    casoAnalogo: 'Caso Avianca: 78% de consultas de primer nivel resueltas de forma autónoma con 4.8/5 en CSAT.',
    roiEstimado: 'Reducción del 55% en costo operativo de atención a clientes.',
    tiempoImplementacion: '4 semanas'
  }
];

// Logos de Clientes Reales
export const CLIENT_LOGOS = [
  { name: 'Grupo Bimbo', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc376e1868364a9968_bimbo.svg' },
  { name: 'BBVA', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc650ce64abe0f821d_bbva.svg' },
  { name: 'PepsiCo', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa919f7c67f75007f0_pepsico.svg' },
  { name: 'Cemex', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc0a22091a01735cfd_cemex.svg' },
  { name: 'Avianca', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb8ec25c469538736b_avianca.svg' },
  { name: 'Subaru', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb33ee73cfddc84305_subaru.svg' },
  { name: 'RadioShack', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb48df2f18c557f360_radioshack.svg' },
  { name: 'LifeMiles', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc5160e0a1d17049cc_lifemiles.svg' },
  { name: 'MoradaUno', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fb99087d463854a86d_moradauno.svg' },
  { name: 'Pakke', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fa84cae103a5130734_pakke.svg' },
  { name: 'Suerox', url: 'https://cdn.prod.website-files.com/64c96252c4314a904a4fb796/6a5025fc77e3af64df4a29fb_suerox.svg' },
];
