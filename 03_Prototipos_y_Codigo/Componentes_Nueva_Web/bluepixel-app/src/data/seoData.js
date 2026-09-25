// SEO por ruta.
//
// Hoy index.html trae un solo <title> y una sola <meta description> para todo
// el sitio, asi que las 20+ vistas comparten el mismo snippet en buscadores.
// Este mapa da a cada ruta su titulo, descripcion y canonical propios.
//
// Los titulos y descripciones usan el vocabulario que la gente realmente busca,
// segun el export de Google Ads y Semrush de Sep-2026 ("BluePixel Keywords -
// Sep26.xlsx"). El posicionamiento anti-commodity se sostiene en el cuerpo de
// la pagina; el title tiene que ganar el clic en una SERP donde nadie busca
// "plataformas digitales" pero 1,900 personas al mes buscan "desarrollo de
// software a la medida".
//
// LIMITE CONOCIDO: mientras el sitio siga con enrutado por hash (#/ruta),
// Google indexa una sola URL. Estos metadatos se aplican por JavaScript y
// sirven para redes sociales y para el dia que se migre a rutas reales, pero no
// generan 20 resultados distintos en Google por si solos. Ver la nota en
// 02_Estrategia_B2B/SITEMAP_ACTUAL_Y_BRECHAS_WEB_2026-09.md.

// Dominio de produccion. Cambiar aqui si el sitio se publica en otro host.
export const SITE_ORIGIN = 'https://www.bluepixel.mx';

export const DEFAULT_SEO = {
  title: 'BluePixel | Desarrollo de Software a la Medida y Agentes de IA',
  description:
    'Empresa mexicana de desarrollo de software a la medida, apps móviles y agentes de IA en producción. UX validado, arquitectura cloud-native y cero vendor lock-in.',
  path: '/'
};

// Clave = currentView de App.jsx. Los alias de una misma pagina comparten
// entrada para que el canonical apunte siempre al slug preferido.
export const SEO_BY_VIEW = {
  home: DEFAULT_SEO,

  // --- Los 4 Pilares de servicio ---
  'consultoria-tecnologica': {
    title: 'Consultoría Tecnológica y Diagnóstico de TI | BluePixel',
    description:
      'Diagnóstico técnico, arquitectura recomendada y business case con ROI en 2 a 4 semanas. Integración de sistemas y backlog priorizado antes de invertir en desarrollo.',
    path: '/consultoria-tecnologica'
  },
  'automatizacion-agentica': {
    title: 'Automatización de Procesos con IA y RPA Empresarial | BluePixel',
    description:
      'Agentes de IA y automatización de procesos conectados a tu ERP y CRM vía protocolo MCP. Primer agente en producción en 2 a 4 semanas, sin reemplazar tus sistemas.',
    path: '/automatizacion-agentica'
  },
  'producto-digital': {
    title: 'Desarrollo de Aplicaciones Móviles y Sitios Web a la Medida',
    description:
      'Desarrollo de apps móviles y plataformas web para empresas, de cero a producción en 2 a 4 meses. UX validado con usuarios reales y arquitectura Full Stack sin deuda técnica.',
    path: '/producto-digital'
  },
  'evolucion-digital': {
    title: 'Evolución y Mantenimiento de Plataformas Digitales | BluePixel',
    description:
      'Squad dedicado que evoluciona tu plataforma con roadmap de 6 o 12 meses: nuevas funcionalidades, optimización de conversión (CRO) y reducción de deuda técnica.',
    path: '/evolucion-digital'
  },

  // --- Las 6 Capacidades ---
  'servicio/ux-ui': {
    title: 'Diseño de Experiencia de Usuario UX/UI para Empresas | BluePixel',
    description:
      'Diseño de experiencia de usuario y estrategia de producto para software empresarial: research con usuarios reales, design systems y prototipado validado antes de programar.',
    path: '/servicio/ux-ui'
  },
  'servicio/ai-engineering': {
    title: 'Desarrollo de Software a la Medida para Empresas | BluePixel',
    description:
      'Empresa de desarrollo de software empresarial a la medida: React, Node.js, Python, Go y TypeScript sobre arquitecturas cloud-native desacopladas y cero vendor lock-in.',
    path: '/servicio/ai-engineering'
  },
  'servicio/ai-agents': {
    title: 'Agentes de IA y Chatbots para Empresas | BluePixel',
    description:
      'Desarrollo de agentes de IA corporativos y chatbots para empresas con RAG privado sobre tus datos e integración determinística a SAP, Salesforce y tu ERP vía MCP.',
    path: '/servicio/ai-agents'
  },
  'servicio/data-analytics': {
    title: 'Analítica de Datos y Business Intelligence Empresarial',
    description:
      'Pipelines de datos, data warehouse moderno y tableros ejecutivos en tiempo real. Telemetría de producto con Mixpanel para decidir con una sola fuente de verdad.',
    path: '/servicio/data-analytics'
  },
  'servicio/security': {
    title: 'Ciberseguridad y Hardening de Software Empresarial | BluePixel',
    description:
      'Arquitectura Zero-Trust, hardening OWASP Top 10 en cada release y escaneo de código y dependencias en tu pipeline. Prácticas verificadas por CyberVadis.',
    path: '/servicio/security'
  },
  'servicio/business-ai': {
    title: 'Consultoría en Inteligencia Artificial para Empresas | BluePixel',
    description:
      'Consultoría de IA para dirección general: dónde aplica la inteligencia artificial en tu negocio, casos de uso priorizados por ROI y roadmap defendible ante el Consejo.',
    path: '/servicio/business-ai'
  },

  // --- Paginas transversales ---
  servicios: {
    title: 'Servicios de Desarrollo de Software e IA | BluePixel',
    description:
      'Las seis capacidades con las que BluePixel diseña, construye y evoluciona software empresarial: UX, ingeniería, agentes de IA, datos, seguridad y consultoría.',
    path: '/servicios'
  },
  pilares: {
    title: 'Cómo Trabajamos: 4 Formas de Contratar a BluePixel',
    description:
      'Consultoría, agentes y automatización, plataformas digitales o squad continuo. Cuatro formas independientes de trabajar según el momento de tu empresa.',
    path: '/pilares'
  },
  'casos-de-exito': {
    title: 'Casos de Éxito en Desarrollo de Software Empresarial',
    description:
      'Proyectos de software, apps y plataformas en producción para corporativos en México y LATAM: reto, arquitectura implementada y resultado medido.',
    path: '/casos-de-exito'
  },
  'filosofia-futureproof': {
    title: 'FutureProof: Nuestra Metodología de Ingeniería | BluePixel',
    description:
      'Los cinco principios con los que construimos: validar antes de codificar, UX como multiplicador de adopción, arquitectura desacoplada y cero vendor lock-in.',
    path: '/filosofia-futureproof'
  }
};

// Alias de ruta que deben resolver al SEO de la pagina canonica.
const VIEW_ALIASES = {
  'consultoria-digital': 'consultoria-tecnologica',
  'pilar/consultoria-digital': 'consultoria-tecnologica',
  'pilares/consultoria-digital': 'consultoria-tecnologica',
  diagnostico: 'consultoria-tecnologica',
  'agentes-automatizacion': 'automatizacion-agentica',
  'pilar/agentes-automatizacion': 'automatizacion-agentica',
  'pilares/agentes-automatizacion': 'automatizacion-agentica',
  'plataformas-digitales': 'producto-digital',
  'pilar/plataformas-digitales': 'producto-digital',
  'pilares/plataformas-digitales': 'producto-digital',
  'pilar/evolucion-digital': 'evolucion-digital',
  'pilares/evolucion-digital': 'evolucion-digital',
  'servicios/ux-ui-product-strategy': 'servicio/ux-ui',
  'servicios/software-engineering': 'servicio/ai-engineering',
  'servicios/agentic-ai-automation': 'servicio/ai-agents',
  'servicios/data-analytics': 'servicio/data-analytics',
  'servicios/security-reliability': 'servicio/security',
  'servicios/digital-consulting': 'servicio/business-ai',
  'casos-de-estudio': 'casos-de-exito',
  'metodologia-impath': 'filosofia-futureproof'
};

export const getSeoForView = (view) =>
  SEO_BY_VIEW[view] || SEO_BY_VIEW[VIEW_ALIASES[view]] || DEFAULT_SEO;
