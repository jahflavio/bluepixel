// Centralized Rich Case Studies Data for BluePixel
export const caseStudiesData = [
  {
    id: 'lifemiles',
    client: 'Avianca / LifeMiles',
    industry: 'TRAVEL & LOYALTY · LATAM',
    pillarId: 'evolucion-digital',
    pillarName: 'Pilar 04 · Evolución Digital',
    pillarRoute: 'evolucion-digital',
    headline: 'Plataforma de lealtad rediseñada para aumentar retención transaccional y descubrimiento de beneficios.',
    badge: '+34% Conversión CRO',
    badgeClass: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    tags: ['UX/UI Design', 'Web Development', 'CRO', 'Mixpanel'],
    techStack: ['React', 'Next.js', 'Mixpanel Telemetry', 'PostgreSQL', 'Docker', 'SLA 99.9%'],
    image: `${import.meta.env.BASE_URL}assets/lifemiles.jpg`,
    fallbackImage: `${import.meta.env.BASE_URL}case2.jpg`,
    challenge: 'Plataforma de fidelización regional con millones de socios activos sufriendo por acumulación de deuda técnica tras años de modificaciones fragmentadas, lo que generaba lentitud en los despliegues y caída paulatina en las tasas de canje y retención móvil.',
    solution: 'Asignación de un Squad Dedicado BluePixel bajo el esquema de Evolución Digital: UX Health Score continuo con telemetría Mixpanel, refactorización quincenal de deuda técnica acumulada y optimización continua de embudos de conversión (CRO) en los flujos transaccionales clave.',
    results: [
      { value: '+34%', label: 'Incremento medible en tasa de conversión transaccional (CRO)' },
      { value: '-60%', label: 'Reducción de deuda técnica acumulada en 6 meses' },
      { value: '99.99%', label: 'Disponibilidad de infraestructura durante picos de canje' }
    ],
    quote: 'Tener un squad dedicado de BluePixel es como tener un equipo de Silicon Valley integrado a nuestro negocio sin el costo ni el desgaste de inflar la nómina interna.',
    author: 'Director de Canales Digitales & Producto, LifeMiles'
  },
  {
    id: 'bimbo-data',
    client: 'Grupo Bimbo',
    industry: 'FMCG & CONSUMO MASIVO · GLOBAL',
    pillarId: 'consultoria-digital',
    pillarName: 'Pilar 01 · Consultoría Digital',
    pillarRoute: 'consultoria-tecnologica',
    headline: 'Diagnóstico de Fricción IMPATH™ y arquitectura de datos ejecutiva para toma de decisiones global.',
    badge: '-$1.8M MXN Ahorro en Refactor',
    badgeClass: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
    tags: ['UX Research', 'IMPATH™ Audit', 'Data Architecture', 'Design Systems'],
    techStack: ['Metodología IMPATH™', 'Data Warehouse', 'PowerBI / Custom Dashboards', 'Figma Tokens'],
    image: `${import.meta.env.BASE_URL}assets/bimbo.jpg`,
    fallbackImage: `${import.meta.env.BASE_URL}case4.jpg`,
    challenge: 'Se planeaba una reconstrucción completa de plataforma de 8 meses con un presupuesto estimado de $3.2M MXN, sin tener certeza de qué pantallas o procesos estaban causando la caída de conversión y la fricción operativa en múltiples países.',
    solution: 'En un sprint de 3 semanas aplicamos la metodología propietaria IMPATH™: mapeo profundo de journeys de usuario, análisis forense de telemetría de abandono y auditoría técnica de arquitectura cloud. Se demostró que el 70% de la fricción se concentraba en 2 pasos específicos del checkout.',
    results: [
      { value: '-$1.8M MXN', label: 'Ahorro directo en desarrollo innecesario evitado' },
      { value: '3 Semanas', label: 'Tiempo total de auditoría hasta dictamen final' },
      { value: '100%', label: 'Aprobación del business case ante el Comité Directivo' }
    ],
    quote: 'BluePixel nos dio la claridad técnica y financiera que necesitábamos para presentar ante el Consejo Directivo con total certidumbre antes de quemar capital.',
    author: 'Dirección de Transformación Digital & Canales B2B'
  },
  {
    id: 'radioshack',
    client: 'RadioShack',
    industry: 'RETAIL & E-COMMERCE',
    pillarId: 'plataformas-digitales',
    pillarName: 'Pilar 03 · Plataformas Digitales',
    pillarRoute: 'producto-digital',
    headline: 'E-commerce móvil de alta conversión con reducción radical de fricción en compras en 3 meses.',
    badge: '+32% Conversión E-com',
    badgeClass: 'text-orange-400 bg-orange-500/15 border-orange-500/30',
    tags: ['UX/UI Design', 'Mobile Apps', 'E-Commerce', 'Cloud-Native'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS Serverless', 'Pasarelas de Pago'],
    image: `${import.meta.env.BASE_URL}assets/radioshack.jpg`,
    fallbackImage: `${import.meta.env.BASE_URL}case1.jpg`,
    challenge: 'Conversión móvil estancada y alta tasa de carritos abandonados debido a una arquitectura monolítica lenta y flujos de checkout redundantes que filtraban ingresos cada trimestre.',
    solution: 'Construcción y lanzamiento de una nueva plataforma de e-commerce móvil desde cero en 3 meses con arquitectura desacoplada Cloud-Native, microservicios serverless, checkout en 2 clics y diseño UI de alta conversión validado con usuarios reales.',
    results: [
      { value: '+32%', label: 'Aumento en tasa de conversión en compras móviles' },
      { value: '3 Meses', label: 'De la concepción al lanzamiento oficial a producción' },
      { value: '1.2 seg', label: 'Tiempo de carga de catálogo (Core Web Vitals)' }
    ],
    quote: 'BluePixel logró poner en producción en 3 meses una plataforma que convirtió inmediatamente más que nuestro sistema anterior.',
    author: 'Dirección de E-Commerce & Retail'
  },
  // El caso 'fr-medical' se retiro: todavia no es cliente, y el registro
  // incluia testimonio atribuido y metricas de produccion.
  {
    id: 'iqos',
    client: 'IQOS',
    industry: 'CONSUMER TECH & HARDWARE · LATAM',
    pillarId: 'plataformas-digitales',
    pillarName: 'Pilar 03 · Plataformas Digitales',
    pillarRoute: 'producto-digital',
    headline: 'Experiencia digital de onboarding y descubrimiento de producto para acelerar adopción.',
    badge: '✦ Adopción Digital',
    badgeClass: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
    tags: ['UX/UI Design', 'Web Development', 'Content Strategy', 'Product Strategy'],
    techStack: ['React', 'Next.js', 'Headless CMS', 'Mixpanel', 'AWS CloudFront'],
    image: `${import.meta.env.BASE_URL}assets/iqos.jpg`,
    fallbackImage: `${import.meta.env.BASE_URL}case3.jpg`,
    challenge: 'Baja comprensión de los beneficios tecnológicos del dispositivo por parte de nuevos prospectos y fricción en el proceso de registro de garantía y compra de accesorios.',
    solution: 'Diseño y desarrollo de una plataforma interactiva de descubrimiento centrada en psicología conductual: simuladores de producto, onboarding gamificado y registro de garantía en un clic con integración a CRM corporativo.',
    results: [
      { value: '+45%', label: 'Aumento en tiempo de interacción y exploración de producto' },
      { value: '-50%', label: 'Reducción en tiempo de registro de garantía' },
      { value: '94%', label: 'Satisfacción de usuario en pruebas de usabilidad' }
    ],
    quote: 'La combinación de diseño premium y fluidez técnica que entregó BluePixel elevó radicalmente la percepción de marca y la adopción de nuestros dispositivos.',
    author: 'Brand & Digital Experience Lead'
  },
  {
    id: 'didi',
    client: 'DiDi',
    industry: 'MOVILIDAD Y LOGÍSTICA · HIGH TRAFFIC',
    pillarId: 'evolucion-digital',
    pillarName: 'Pilar 04 · Evolución Digital',
    pillarRoute: 'evolucion-digital',
    headline: 'UX Research aplicado, usability testing continuo y estrategia de adopción digital para millones de usuarios.',
    badge: '↑ 87.5% Adopción',
    badgeClass: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    tags: ['UX Research', 'Usability Testing', 'Mobile Apps', 'CRO'],
    techStack: ['UX Research Lab', 'Eye Tracking & Heatmaps', 'Mixpanel', 'Figma Prototyping'],
    image: `${import.meta.env.BASE_URL}case2.jpg`,
    fallbackImage: `${import.meta.env.BASE_URL}case3.jpg`,
    challenge: 'Plataforma de alta concurrencia donde cualquier mínima fricción en el flujo de solicitud de viaje impacta directamente millones de transacciones diarias y la retención de usuarios activos.',
    solution: 'Laboratorio continuo de investigación de usuarios y pruebas de usabilidad en entornos reales (usability testing en campo y lab), identificando puntos ciegos cognitivos y optimizando flujos de conductor y pasajero.',
    results: [
      { value: '87.5%', label: 'Tasa de adopción en nuevas funcionalidades lanzadas' },
      { value: '-28%', label: 'Reducción de cancelaciones accidentales de viajes' },
      { value: 'Millones', label: 'De usuarios activos beneficiados por los nuevos flujos' }
    ],
    quote: 'El rigor metodológico de BluePixel para investigar usuarios en campo nos permitió validar hipótesis de producto antes de desplegar a millones de usuarios.',
    author: 'Product Operations & UX Lead'
  }
];
