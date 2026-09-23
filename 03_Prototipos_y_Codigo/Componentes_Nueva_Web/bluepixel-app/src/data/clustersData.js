export const CLUSTERS_DATA = {
  apps: {
    id: 'apps',
    slug: 'desarrollo-apps',
    number: '01',
    name: 'Apps & Plataformas B2B',
    tagline: 'INGENIERÍA DE SOFTWARE CORPORATIVO & CLOUD-NATIVE',
    badge: 'Cluster 01 · Software de Misión Crítica',
    headline: 'Construimos Apps y Plataformas B2B diseñadas para resistir alta concurrencia.',
    subheadline: 'Dejamos atrás las "fábricas de software" tradicionales. Desarrollamos aplicaciones nativas, portales empresariales y sistemas transaccionales con arquitectura modular, telemetría en tiempo real y propiedad intelectual absoluta de tu empresa.',
    heroMetric: '99.98% Uptime en Producción',
    heroTag: 'Arquitecturas Cloud-Native',
    // Credenciales propias: solo las que se pueden acreditar. 'SOC2 Compliant'
    // se retiro porque BluePixel no tiene esa certificacion; CyberVadis si.
    socialProof: ['AWS Partner', 'CyberVadis Verificado', 'OWASP Top 10 Auditado'],
    demoType: 'apps',
    subservices: [
      {
        id: 'mobile',
        title: 'Apps Nativas e Híbridas (iOS / Android)',
        badge: 'Mobile Engineering',
        icon: '📱',
        originalUrl: 'cotiza.bluepixel.mx/desarrollo-apps',
        valueProp: 'Aplicaciones móviles corporativas con sincronización en milisegundos y arquitectura offline-first.',
        cases: [
          'Terminales de inventario y logística en ruta para choferes sin conectividad constante.',
          'Portales móviles de banca corporativa, seguros y validación biométrica.',
          'Supervisión de operaciones de campo con telemetría en vivo vía WebSockets.'
        ],
        stack: ['Swift (iOS)', 'Kotlin (Android)', 'Flutter / React Native', 'Offline-First SQLite', 'WebSockets'],
        deliverable: 'Código fuente en repositorio privado, pruebas unitarias automáticas con cobertura >85% y publicación gestionada en App Store y Google Play Enterprise.'
      },
      {
        id: 'web',
        title: 'Plataformas Web & Portales B2B',
        badge: 'Enterprise Web',
        icon: '🌐',
        originalUrl: 'cotiza.bluepixel.mx/desarrollo-web',
        valueProp: 'Portales transaccionales de alto rendimiento que reemplazan hojas de cálculo y flujos fragmentados en correos.',
        cases: [
          'Extranets para distribuidores y proveedores con facturación en tiempo real.',
          'Dashboards corporativos con visualización de millones de registros en milisegundos.',
          'SaaS B2B multi-inquilino (multi-tenant) con aislamiento estricto de bases de datos.'
        ],
        stack: ['Next.js / React', 'Node.js / Go', 'PostgreSQL distribuido', 'Redis Cache', 'GraphQL / gRPC'],
        deliverable: 'Arquitectura de microfrontends contenerizada en Docker/Kubernetes con autenticación corporativa SSO (SAML, Okta, Azure AD).'
      },
      {
        id: 'ux-ui',
        title: 'Adopción de Sistemas & UX Conductual',
        badge: 'UX for Adoption',
        icon: '🎯',
        originalUrl: 'cotiza.bluepixel.mx/diseno-ux-ui',
        valueProp: 'Diseño conductual que elimina la fricción cognitiva y garantiza que tu equipo realmente adopte el software corporativo.',
        cases: [
          'Auditoría y rediseño completo de ERPs o sistemas internos difíciles de usar.',
          'Design Systems escalables en Figma con tokens sincronizados directamente al código.',
          'Pruebas de usabilidad con usuarios operativos reales para medir tiempos de tarea.'
        ],
        stack: ['Figma Tokens', 'Design Systems', 'WCAG AAA Accessibility', 'Heatmapping & Telemetry'],
        deliverable: 'Librería completa de componentes en Figma con prototipo funcional navegable y especificación CSS lista para despliegue.'
      },
      {
        id: 'mvp',
        title: 'MVPs de Alta Fidelidad en 2 a 4 Meses',
        badge: 'MVP Acelerado',
        icon: '⚡',
        originalUrl: 'cotiza.bluepixel.mx/desarrollo-mvp',
        valueProp: 'Lanza nuevas unidades de negocio con software de grado corporativo en 2 a 4 meses, no con prototipos desechables.',
        cases: [
          'Spin-offs y validación de nuevos canales de ingresos para corporativos consolidados.',
          'Lanzamiento de plataformas piloto para rondas de inversión y validación de mercado.',
          'Sustitución rápida de herramientas de terceros costosas por plataformas propias.'
        ],
        stack: ['Arquitectura Modular', 'Serverless APIs', 'React / Next.js', 'Stripe / OpenPay B2B'],
        deliverable: 'Plataforma funcional en producción operando con los primeros clientes reales y embudo de métricas configurado.'
      },
      {
        id: 'legacy',
        title: 'Modernización de Software Legacy',
        badge: 'Core Refactoring',
        icon: '🏗️',
        originalUrl: 'cotiza.bluepixel.mx/software-a-la-medida',
        valueProp: 'Migramos y refactorizamos sistemas obsoletos a la nube sin detener ni un solo minuto la operación diaria de tu empresa.',
        cases: [
          'Desacoplamiento de monolitos antiguos en PHP/Java hacia microservicios en la nube.',
          'Migración de bases de datos on-premise hacia infraestructura administrada en AWS/Azure.',
          'Creación de capas de API seguras sobre sistemas centrales sin documentación previa.'
        ],
        stack: ['Strangler Fig Pattern', 'Docker / Kubernetes', 'API Gateways', 'Zero-Downtime Migration'],
        deliverable: 'Blueprint de migración fase por fase, reducción demostrable de costos de infraestructura y soberanía total del código.'
      }
    ],
    threeWays: {
      step1: {
        number: '01',
        type: 'ENTRY PACKAGE',
        duration: '14 DÍAS MÁXIMO',
        title: 'Consultoría Tecnológica Estratégica',
        desc: 'Auditamos tu código actual, infraestructura y UX. Entendemos tu negocio antes de tirar una sola línea de código y te entregamos un blueprint de arquitectura claro.',
        bullets: [
          'Auditoría forense de deuda técnica y cuellos de botella',
          'Auditoría de fricción UX y medición de abandono',
          'Blueprint de arquitectura Cloud y selección de stack',
          'Estimación de inversión con alcances y SLAs garantizados'
        ],
        cta: 'Solicitar Consultoría'
      },
      step2: {
        number: '02',
        type: 'ENTRY PACKAGE',
        duration: 'SPRINTS MENSUALES',
        title: 'Automatización Agentizada (Agentic)',
        desc: 'Asignamos un Squad Senior enfocado en programar flujos y aplicaciones con código 100% de tu propiedad para automatizar tu operación.',
        bullets: [
          'Squad senior dedicado: Tech Lead, Senior Devs y UX Lead',
          'Sprints quincenales con entregas funcionales en staging',
          'Pipeline CI/CD automatizado y pruebas con cobertura >85%',
          'Soberanía total de IP: entregamos el repositorio privado'
        ],
        cta: 'Explorar Automatización'
      },
      step3: {
        number: '01+02',
        type: 'FULL TRANSFORMATION',
        duration: '3+ MESES / CONTINUO',
        title: 'Plataformas Digitales & Evolución Digital',
        desc: 'Construimos tu plataforma de misión crítica desde cero hasta producción en 2 a 4 meses (Pilar 03), y la sostenemos con evolución continua y mantenimiento (Pilar 04).',
        bullets: [
          'Todo lo incluido en Consultoría 01 y Automatización 02',
          'Construcción y lanzamiento en producción en 2 a 4 meses',
          'Monitoreo trimestral de UX Health Score y rendimiento',
          'SLA de soporte correctivo y escalabilidad bajo demanda'
        ],
        cta: 'Agendar Transformación',
        featured: true
      }
    }
  },

  automatizacion: {
    id: 'automatizacion',
    slug: 'automatizacion',
    number: '02',
    name: 'Automatización Operativa',
    tagline: 'EFICIENCIA OPERATIVA, MIDDLEWARE & APA DETERMINÍSTICO',
    badge: 'Cluster 02 · Procesos Core & ERPs',
    headline: 'Eliminamos la fricción manual entre tus sistemas legacy y tu equipo.',
    subheadline: 'Conectamos tu ERP (SAP, Oracle, NetSuite), bases de datos y CRMs con middleware determinístico. Recupera miles de horas operativas al mes sustituyendo tareas repetitivas por agentes resilientes.',
    heroMetric: '99.4% Menos Discrepancias',
    heroTag: 'Auto-Healing Workflows',
    socialProof: ['SAP S/4HANA Ready', 'Oracle NetSuite API', 'Salesforce Partner', 'SAT Fiscal Compliant'],
    demoType: 'automatizacion',
    subservices: [
      {
        id: 'erp',
        title: 'Integración de ERPs (SAP, Oracle, NetSuite)',
        badge: 'Enterprise Middleware',
        icon: '🔄',
        originalUrl: 'cotiza.bluepixel.mx/erp-bridge',
        valueProp: 'Extracción e inyección bidireccional de datos con tus sistemas centrales sin tocar el núcleo sensible del ERP.',
        cases: [
          'Sincronización automática de órdenes entre e-commerce B2B y SAP S/4HANA.',
          'Actualización de listas de precios y catálogos en múltiples sucursales en segundos.',
          'Consolidación de compras y órdenes de servicio desde portales de proveedores.'
        ],
        stack: ['SAP RFC / OData', 'Oracle REST APIs', 'Apache Kafka', 'Event-Driven Architecture'],
        deliverable: 'Conector middleware seguro con colas tolerantes a caídas y bitácora de auditoría inmutable.'
      },
      {
        id: 'finanzas',
        title: 'Conciliación Financiera y Bancaria Autónoma',
        badge: 'Finance Matcher',
        icon: '💳',
        originalUrl: 'cotiza.bluepixel.mx/finance-matcher',
        valueProp: 'Cierra tu mes contable en 40 minutos en lugar de 8 días de estrés en hojas de cálculo.',
        cases: [
          'Cruce autónomo de estados de cuenta de bancos con facturación CFDI 4.0 del SAT.',
          'Detección y clasificación automática de complementos de pago pendientes.',
          'Alertas automáticas de discrepancias a contabilidad con desglose en pesos.'
        ],
        stack: ['SAT Webhooks', 'Babel Parser XML', 'Postgres Finance Engine', 'MCP Protocol'],
        deliverable: 'Agente conciliador determinístico con dashboard de validación y reporte ejecutivo de saldos conciliados.'
      },
      {
        id: 'apa',
        title: 'APA: RPA con Visión Computacional & Auto-Healing',
        badge: 'Next-Gen RPA',
        icon: '👁️',
        originalUrl: 'cotiza.bluepixel.mx/apa',
        valueProp: 'El reemplazo del RPA obsoleto. Agentes visuales que no se rompen si la interfaz cambia o se mueve un botón.',
        cases: [
          'Carga masiva de pólizas y documentos en portales gubernamentales sin API.',
          'Extracción de datos desde sistemas cerrados tipo AS400 o escritorios remotos.',
          'Flujos automáticos de validación de identidad y cotejo de documentos de proveedores.'
        ],
        stack: ['Computer Vision', 'Playwright Headless', 'Auto-Healing Selectors', 'OCR Multimodal'],
        deliverable: 'Robots agénticos con tolerancia a fallos y auto-recuperación sin requerir mantenimiento constante de código.'
      },
      {
        id: 'middleware',
        title: 'Middleware Corporativo & Pipelines de Datos',
        badge: 'Data Pipelines',
        icon: '⚡',
        originalUrl: 'cotiza.bluepixel.mx/servicios-de-automatizacion',
        valueProp: 'Unifica tus herramientas aisladas en un bus de datos centralizado y seguro.',
        cases: [
          'Onboarding automatizado de clientes: desde el formulario hasta la creación de cuenta en CRM y ERP.',
          'Notificaciones operativas inteligentes en Slack o Microsoft Teams ante eventos críticos de inventario.',
          'Limpieza, enriquecimiento y normalización de bases de datos de clientes en tiempo real.'
        ],
        stack: ['FastAPI / Python', 'RabbitMQ', 'Redis Streams', 'Webhooks Seguros HMAC'],
        deliverable: 'Infraestructura de integración con métricas de latencia, reintentos automáticos y soporte 24/7.'
      }
    ],
    threeWays: {
      step1: {
        number: '01',
        type: 'ENTRY PACKAGE',
        duration: '14 DÍAS MÁXIMO',
        title: 'Consultoría Tecnológica Estratégica',
        desc: 'Mapeamos tus procesos manuales, dictaminamos la viabilidad técnica y te entregamos un roadmap de automatización priorizado.',
        bullets: [
          'Mapeo de cuellos de botella y flujos manuales entre áreas',
          'Cálculo exacto del costo financiero de la inacción en pesos',
          'Dictamen de factibilidad de conexión de ERPs y APIs legacy',
          'Roadmap de automatización priorizado por ROI inmediato'
        ],
        cta: 'Solicitar Consultoría'
      },
      step2: {
        number: '02',
        type: 'ENTRY PACKAGE',
        duration: 'SPRINTS MENSUALES',
        title: 'Automatización Agentizada (Agentic)',
        desc: 'Desplegamos conectores y agentes inteligentes que comunican tus sistemas empresariales sin afectar la estabilidad de tus bases de datos.',
        bullets: [
          'Desarrollo de conectores middleware para SAP, Oracle o CRM',
          'Implementación de robots con visión y auto-healing',
          'Pruebas de estrés y conciliación de datos en staging',
          'Monitoreo de colas de eventos y alertas automáticas'
        ],
        cta: 'Explorar Automatización'
      },
      step3: {
        number: '01+02',
        type: 'FULL TRANSFORMATION',
        duration: '3+ MESES / CONTINUO',
        title: 'Plataformas Digitales & Evolución Digital',
        desc: 'Reingeniería integral de tu operación digital. Construimos los flujos automatizados de tu empresa (Pilar 03) y los evolucionamos mes a mes (Pilar 04).',
        bullets: [
          'Todo lo incluido en Consultoría 01 y Automatización 02',
          'Conexión end-to-end de todos los departamentos core',
          'Dashboard ejecutivo de horas ahorradas y KPIs en tiempo real',
          'Mantenimiento continuo y adaptación a nuevas versiones de ERP'
        ],
        cta: 'Agendar Transformación',
        featured: true
      }
    }
  },

  agentizacion: {
    id: 'agentizacion',
    slug: 'agentizacion',
    number: '03',
    name: 'Agentización & IA Corporativa',
    tagline: 'SISTEMAS MULTI-AGENTE, PROTOCOLO MCP & PRIVACIDAD LFPDPPP',
    badge: 'Cluster 03 · IA Agéntica en Producción',
    headline: 'Desplegamos Agentes de Inteligencia Artificial que operan sobre tus datos reales sin alucinar.',
    subheadline: 'No vendemos "prompts" ni experimentos de laboratorio. Diseñamos sistemas multi-agente con Protocolo MCP y arquitecturas RAG determinísticas que ejecutan acciones en tus sistemas internos con trazabilidad forense total.',
    heroMetric: '0% Alucinaciones en Políticas',
    heroTag: 'Model Context Protocol (MCP)',
    socialProof: ['Anthropic Claude Partner', 'OpenAI Enterprise Ready', 'LFPDPPP Compliant', 'AWS Bedrock VPC'],
    demoType: 'agentizacion',
    subservices: [
      {
        id: 'triage',
        title: 'Asistentes RAG para Soporte y Ventas en WhatsApp / Web',
        badge: 'Triage RAG',
        icon: '💬',
        originalUrl: 'cotiza.bluepixel.mx/triage-rag',
        valueProp: 'Atención Nivel 1 que resuelve hasta el 70% de consultas complejas basándose estrictamente en tus políticas sin riesgo de marca.',
        cases: [
          'Atención a clientes 24/7 en WhatsApp consultando pedidos y facturas en tiempo real.',
          'Calificación y triage de prospectos comerciales con derivación a ejecutivos humanos.',
          'Asistente de políticas internas y manuales de operaciones para empleados distribuidos.'
        ],
        stack: ['WhatsApp Business API', 'RAG con Pinecone / Qdrant', 'LangGraph / LlamaIndex', 'Guardrails NeMo'],
        deliverable: 'Agente conversacional en producción con guardrails estrictos contra alucinaciones y traspaso contextual a humanos.'
      },
      {
        id: 'legal',
        title: 'Análisis Documental, Licitaciones (RFPs) & Legal KYC',
        badge: 'Document Intelligence',
        icon: '📄',
        originalUrl: 'cotiza.bluepixel.mx/legal-onboarding',
        valueProp: 'Audita contratos de 200 páginas y responde pliegos de licitaciones públicas en minutos con citas exactas al párrafo.',
        cases: [
          'Validación masiva de expedientes KYC (actas constitutivas, poderes, identificaciones).',
          'Detección automática de cláusulas de penalización y riesgos en contratos comerciales.',
          'Extracción y cruce de requerimientos técnicos en licitaciones gubernamentales.'
        ],
        stack: ['Multimodal LLMs', 'LayoutLMv3', 'MCP Document Tools', 'JSON Schema Validation'],
        deliverable: 'Motor de análisis documental con visor interactivo de cotejo lado a lado y exportación estructurada a ERP.'
      },
      {
        id: 'aoc',
        title: 'Monitoreo Autónomo de Nube & DevSecOps (AOC)',
        badge: 'Agentic Ops Center',
        icon: '🛡️',
        originalUrl: 'cotiza.bluepixel.mx/aoc',
        valueProp: 'DevSecOps agéntico que vigila tu infraestructura en AWS/Azure 24/7 y remedia caídas de bases de datos mientras duermes.',
        cases: [
          'Predicción de cuellos de botella en bases de datos y auto-escalado preventivo.',
          'Remediación automática de incidentes de memoria o procesos colgados.',
          'Bitácora en lenguaje natural en Slack detallando incidentes resueltos y causa raíz.'
        ],
        stack: ['AWS CloudWatch / Datadog', 'Kubernetes Operator', 'Claude Tool Use', 'Slack Bot Webhooks'],
        deliverable: 'Agente de guardia 24/7 integrado a tu infraestructura con políticas de ejecución seguras y rollback automático.'
      },
      {
        id: 'privacy',
        title: 'Data Privacy, Blindaje de Modelos & Cumplimiento LFPDPPP',
        badge: 'Security & Compliance',
        icon: '🔒',
        originalUrl: 'cotiza.bluepixel.mx/data-privacy',
        valueProp: 'Implementa IA Generativa garantizando que tus secretos comerciales y datos de clientes jamás entrenen modelos públicos.',
        cases: [
          'Anonimización automática en vuelo de datos personales (PII) antes de procesarlos.',
          'Despliegue de modelos en nubes privadas virtuales (AWS Bedrock / Azure OpenAI) sin salida a internet.',
          'Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de Particulares.'
        ],
        stack: ['Data Loss Prevention (DLP)', 'VPC Private Link', 'KMS Encryption', 'Audit Log Forensics'],
        deliverable: 'Certificado de auditoría de seguridad y dictamen de privacidad técnica para comités de cumplimiento legal.'
      },
      {
        id: 'consultoria',
        title: 'Consultoría Estratégica & Roadmap de IA Corporativa',
        badge: 'AI Strategy',
        icon: '🧠',
        originalUrl: 'cotiza.bluepixel.mx/consultoria-inteligencia-artificial',
        valueProp: 'Identificamos dónde la IA genera verdadero retorno financiero y descartamos modas costosas.',
        cases: [
          'Matriz de priorización de casos de uso por impacto financiero y facilidad técnica.',
          'Evaluación de arquitectura (cuándo usar Small Language Models locales vs. APIs de frontera).',
          'Cálculo de costo predictivo de inferencia y optimización de consumo de tokens.'
        ],
        stack: ['Evaluaciones de Benchmark', 'Token Economics Modeling', 'Model Context Protocol (MCP)'],
        deliverable: 'Roadmap ejecutivo de adopción a 12 meses con presupuestos, arquitectura y cronograma de despliegue.'
      }
    ],
    threeWays: {
      step1: {
        number: '01',
        type: 'ENTRY PACKAGE',
        duration: '14 DÍAS MÁXIMO',
        title: 'Consultoría Tecnológica Estratégica',
        desc: 'Evaluamos tu infraestructura y calidad de datos para identificar donde la Inteligencia Artificial genera un ROI real.',
        bullets: [
          'Evaluación de calidad y estructuración de datos corporativos',
          'Prueba de concepto RAG en sandbox con datos reales del cliente',
          'Dictamen de cumplimiento normativo (LFPDPPP y SOC2)',
          'Matriz de priorización y proyección de costos de inferencia'
        ],
        cta: 'Solicitar Consultoría'
      },
      step2: {
        number: '02',
        type: 'ENTRY PACKAGE',
        duration: 'SPRINTS MENSUALES',
        title: 'Automatización Agentizada (Agentic)',
        desc: 'Diseñamos y programamos Agentes de IA autónomos (MCP) y los integramos en producción en tu entorno corporativo de forma segura.',
        bullets: [
          'Diseño de arquitectura agéntica con protocolos MCP',
          'Flujos de trabajo autónomos sobre datos reales con RAG',
          'Integración con tu stack empresarial (SAP, Salesforce, ERP)',
          'Blindaje contra alucinaciones y cumplimiento OWASP / LFPDPPP'
        ],
        cta: 'Explorar Automatización'
      },
      step3: {
        number: '01+02',
        type: 'FULL TRANSFORMATION',
        duration: '3+ MESES / CONTINUO',
        title: 'Plataformas Digitales & Evolución Digital',
        desc: 'Construimos una plataforma con capa agéntica corporativa de alta disponibilidad (Pilar 03) y la monitoreamos continuamente (Pilar 04).',
        bullets: [
          'Todo lo incluido en Consultoría 01 y Automatización 02',
          'Construcción completa de plataforma agéntica en 2 a 4 meses',
          'Monitoreo continuo de salud del modelo y precisión de respuestas',
          'Hand-off estructurado: tu equipo es dueño absoluto de lo que opera'
        ],
        cta: 'Agendar Transformación',
        featured: true
      }
    }
  }
};
