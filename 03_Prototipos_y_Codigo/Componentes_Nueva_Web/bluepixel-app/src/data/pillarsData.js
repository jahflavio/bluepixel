export const pillarsData = {
  'consultoria-digital': {
    id: 'consultoria-digital',
    num: '01',
    name: 'Consultoría Digital',
    badgeText: 'CONSULTORÍA · 2 A 4 SEMANAS',
    duration: '2 a 4 Semanas',
    targetAudience: 'Para empresas que necesitan diagnóstico, backlog priorizado y cálculo de ROI antes de invertir',
    eyebrow: 'Pilar 01 · Certidumbre Técnica y Financiera Previa',
    title: 'Claridad estratégica y ROI cuantificado antes de escribir código.',
    subtitle: 'Los proyectos de software fracasan cuando se empieza a programar sin entender el problema real. En 2 a 4 semanas auditamos tu deuda técnica, cuantificamos el costo de inacción y estructuramos un business case defendible ante el Consejo.',
    takeaway: 'Claridad estratégica y retorno medible antes de escribir la primera línea de código.',
    themeKey: 'blue',
    packageName: 'Pilar 01 · Consultoría Digital',
    stats: [
      // El '$1.8M MXN ahorrados en el ultimo diagnostico' se retiro: no hay un
      // caso publicado con esa cifra, ni en el sitio ni en caseStudiesData, y
      // ademas decia "de 3 semanas" contradiciendo el plazo de 2 a 4. Las tres
      // de ahora son comprobables contra el contrato y los entregables.
      { value: '14-28', label: 'Días para entregar diagnóstico, arquitectura y ROI', sublabel: 'Celeridad analítica ejecutiva' },
      { value: 'ROI', label: 'Business case con retorno proyectado y costo de inacción cuantificado', sublabel: 'Antes de comprometer capital' },
      { value: '6', label: 'Artefactos ejecutivos que recibes al cierre del pilar', sublabel: 'Business case, blueprint y backlog' }
    ],
    painPoints: {
      eyebrow: '01 — Los riesgos del desarrollo a ciegas',
      title: 'El costo invisible de programar sin validar.',
      items: [
        { title: 'Presupuestos desbordados y "scope creep"', desc: 'Comenzar a codificar con requerimientos ambiguos provoca re-trabajos constantes, retrasos de meses y costos que triplican el estimado inicial.' },
        { title: 'Deuda técnica y sistemas incompatibles', desc: 'Invertir en software que al final no se puede integrar con tu ERP legado (SAP, Salesforce) o que no escala ante la demanda real.' },
        { title: 'Proyectos sin retorno financiero claro', desc: 'Desarrollos aprobados por entusiasmo tecnológico pero que no resuelven ningún cuello de botella crítico en el P&L ni reducen costos.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '05 — Diferenciación B2B',
      title: 'Consultoría Estratégica vs Enfoques Tradicionales.',
      subtitle: 'Por qué nuestro diagnóstico genera certidumbre inmediata donde otros solo entregan presentaciones teóricas.',
      headers: ['Criterio', 'Fábrica Tradicional', 'Consultora de PowerPoint', 'Estándar BluePixel FutureProof'],
      rows: [
        { label: 'Punto de partida', cols: ['Facturan horas-hombre de inmediato a ciegas', 'Meses de entrevistas teóricas sin rigor técnico', 'Diagnóstico heurístico y arquitectónico en 14-28 días'] },
        { label: 'Evaluación técnica', cols: ['No auditan código ni deuda previa', 'Recomendaciones genéricas de analistas no programadores', 'Auditoría profunda de código, APIs y topología cloud por Tech Leads'] },
        { label: 'Justificación financiera', cols: ['Presupuesto abierto sin compromiso de ROI', 'Modelos financieros abstractos desconectados de los fierros', 'Cálculo exacto del Costo de Inacción y ROI proyectado por módulo'] },
        { label: 'Entregable final', cols: ['Contrato de desarrollo por horas', 'Deck de diapositivas que nadie puede programar', 'Blueprint de Arquitectura listo para producción y Backlog priorizado'] }
      ]
    },
    capabilitiesActivation: [
      {
        id: 'ux-ui',
        name: 'UX/UI & PS (Product Strategy)',
        badge: 'IMPATH™ Enabled',
        role: 'Auditoría Heurística & Discovery',
        desc: 'Mapeo profundo de journeys de usuario y diagnóstico de fricción IMPATH™ para identificar dónde se caen las conversiones.',
        route: 'servicios/ux-ui-product-strategy'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native Architecture',
        role: 'Architecture Assessment',
        desc: 'Auditoría de código, evaluación de deuda técnica y diseño de la topología cloud escalable bajo protocolos abiertos.',
        route: 'servicios/software-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Evaluación de Viabilidad AI',
        desc: 'Identificación de procesos repetitivos candidatos a agentización y cálculo de costos de inferencia antes de desplegar.',
        route: 'servicios/agentic-ai-automation'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Data Audit & Gobernanza',
        desc: 'Mapeo de fuentes de datos, auditoría de silos (ERP/CRM) y estandarización del diccionario de métricas de negocio.',
        route: 'servicios/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'CyberVadis & OWASP',
        role: 'Threat Modeling & Superficie de Riesgo',
        desc: 'Modelado de amenazas sobre tu arquitectura, escaneo de dependencias y revisión de los controles técnicos de acceso y cifrado.',
        route: 'servicios/security-reliability'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: '🔥 Núcleo del Pilar: Business Case',
        desc: 'Valuación del costo de inacción, roadmap ejecutivo trimestral y priorización estricta del backlog por retorno de inversión.',
        route: 'servicios/digital-consulting'
      }
    ],
    specs: {
      eyebrow: 'El estándar que protege tu inversión',
      title: 'Tres principios que protegen tu capital de inversión.',
      subtitle: 'Nuestra consultoría actúa como la póliza de seguro antes de comprometer presupuestos mayores.',
      items: [
        { title: 'Metodología Propietaria IMPATH™', desc: 'Mapeamos la fricción cognitiva y operativa en cada interacción de tus usuarios y empleados, cuantificando su costo en dinero real.' },
        { title: 'Blueprint Técnico Agnóstico (Zero Lock-In)', desc: 'Diseñamos la arquitectura óptima para tu caso de uso con protocolos abiertos (MCP), garantizando que no quedes atrapado con ningún proveedor.' },
        { title: 'Backlog Priorizado por Impacto en EBITDA', desc: 'No construimos lo que suena divertido; ordenamos los features estrictamente por su capacidad de generar ingresos o recortar costos operativos.' }
      ]
    },
    quiz: {
      title: '¿Necesita tu empresa una Consultoría Digital antes de codificar?',
      subtitle: '4 preguntas rápidas para diagnosticar si estás listo para invertir en desarrollo.',
      questions: [
        {
          q: '1. ¿Tienen calculado el retorno de inversión (ROI) financiero del software que quieren construir?',
          options: [
            { text: 'Sí, con modelo financiero y costo de inacción calculado', score: 3 },
            { text: 'Tenemos un estimado aproximado pero no validado', score: 2 },
            { text: 'Solo sabemos que la competencia lo está haciendo', score: 1 },
            { text: 'No, solo tenemos una lista de funcionalidades deseadas', score: 0 }
          ]
        },
        {
          q: '2. ¿Cómo está documentada la arquitectura técnica y el estado de la deuda técnica actual?',
          options: [
            { text: 'Diagramas actualizados, contratos de APIs y auditoría reciente', score: 3 },
            { text: 'Parcialmente en la cabeza de los ingenieros clave', score: 2 },
            { text: 'Documentación desactualizada de hace más de 1 año', score: 1 },
            { text: 'No existe documentación técnica formal', score: 0 }
          ]
        },
        {
          q: '3. Si le pides a 3 directores diferentes qué debe resolver la nueva plataforma, ¿coinciden?',
          options: [
            { text: 'Totalmente, hay consenso y KPIs unificados', score: 3 },
            { text: 'Coinciden en el objetivo general pero difieren en prioridades', score: 2 },
            { text: 'Cada área pide cosas completamente distintas', score: 1 },
            { text: 'Hay conflicto abierto sobre qué construir primero', score: 0 }
          ]
        },
        {
          q: '4. ¿Han validado los flujos clave con usuarios reales antes de presupuestar desarrollo?',
          options: [
            { text: 'Sí, con prototipos navegables testeados', score: 3 },
            { text: 'Solo con encuestas internas al equipo', score: 2 },
            { text: 'Nos basamos en lo que la dirección considera mejor', score: 1 },
            { text: 'Nunca hemos testeado antes de programar', score: 0 }
          ]
        }
      ],
      results: {
        high: { band: 'Vía Libre para Desarrollo', desc: 'Tu empresa tiene madurez técnica y estratégica absoluta. Estás listo para saltar directamente a la fase de construcción con el Pilar 02 o Pilar 03 sin necesidad de consultoría previa.' },
        medium: { band: 'Alineación Parcial', desc: 'Tienen buenas bases, pero hay áreas de riesgo técnico o de alineación que podrían desbordar el presupuesto. El Pilar 01 es ideal para blindar el proyecto antes de codificar.' },
        low: { band: 'Diagnóstico Urgente Requerido', desc: 'Comenzar a programar en este estado es un riesgo financiero muy alto. El Pilar 01 es exactamente lo que necesitas para cuantificar el ROI y definir un roadmap seguro.' }
      }
    },
    deliverables: {
      eyebrow: '06 — Entregables Oficiales',
      title: 'Artefactos ejecutivos que recibes al finalizar el pilar.',
      items: [
        { num: '01', title: 'Diagnóstico de Fricción IMPATH™', desc: 'Mapeo detallado de cuellos de botella y cuantificación económica del costo de abandono.' },
        { num: '02', title: 'Blueprint de Arquitectura Cloud', desc: 'Topología técnica completa (Cloud, microservicios, bases de datos y servidores MCP).' },
        { num: '03', title: 'Business Case con ROI Cuantificado', desc: 'Modelo financiero defendible ante el Consejo Directivo con análisis de payback.' },
        { num: '04', title: 'Backlog Priorizado por Impacto', desc: 'Listado granular de épicas y requerimientos ordenados por retorno de inversión.' },
        { num: '05', title: 'Dictamen de Deuda Técnica & Seguridad', desc: 'Reporte de vulnerabilidades, licencias y compatibilidad con sistemas legados.' },
        { num: '06', title: 'Roadmap Ejecutivo de Implementación', desc: 'Cronograma con estimaciones reales, hitos y opciones de ejecución (Pilar 02 o 03).' }
      ]
    },
    timeline: {
      eyebrow: 'Semana a semana, del diagnóstico al board',
      title: 'Cronograma estricto de diagnóstico a entregables finales.',
      subtitle: 'Sprints de inmersión técnica y estratégica sin quitarle tiempo excesivo a tus líderes.',
      steps: [
        { num: '01', title: 'Semana 1: Discovery & Inmersión de Negocio', desc: 'Entrevistas con C-Levels, mapeo del modelo operativo y auditoría inicial de sistemas.', deliverables: ['Matriz de Fricciones', 'Inventario de Stack'] },
        { num: '02', title: 'Semana 2: Auditoría Técnica & UX Research', desc: 'Inspección de bases de datos, APIs y pruebas heurísticas con usuarios de los flujos críticos.', deliverables: ['Reporte IMPATH™', 'Diagnóstico de Deuda'] },
        { num: '03', title: 'Semana 3: Modelado de Solución & Arquitectura', desc: 'Diseño del Blueprint Cloud-Native, esquemas MCP y modelado financiero de costos de nube e inferencia.', deliverables: ['Blueprint de Arquitectura', 'Modelo de Costos'] },
        { num: '04', title: 'Semana 4: Business Case & Presentación al Board', desc: 'Consolidación del backlog priorizado y sesión ejecutiva para presentar el roadmap defendible.', deliverables: ['Business Case Oficial', 'Backlog Priorizado'] }
      ]
    },
    faqs: [
      { q: '¿Qué pasa si después de la consultoría decidimos no desarrollar el software?', a: 'Ese es precisamente el mayor valor del Pilar 01: si el diagnóstico demuestra que el proyecto no es rentable o que la tecnología no está lista, habrás ahorrado cientos de miles de dólares y meses de desgaste. El entregable te pertenece y puedes usarlo cuando tu empresa lo decida.' },
      { q: '¿Estamos obligados a contratar el desarrollo (Pilar 02 o 03) con BluePixel?', a: 'En lo absoluto. Los 4 Pilares son 100% independientes y modulares. Todos los blueprints, especificaciones técnicas y modelos de arquitectura se entregan con estándares abiertos para que cualquier equipo interno o externo pueda ejecutarlos.' },
      { q: '¿Cuánto tiempo de nuestro equipo requiere este proceso?', a: 'Diseñamos el proceso para ser sumamente eficiente: realizamos 3 a 4 sesiones de trabajo estructuradas de 60 minutos con los líderes clave durante las primeras 2 semanas. Nosotros nos encargamos de todo el análisis técnico y modelado.' }
    ],
    caseStudy: {
      tag: 'CASO REAL B2B · FMCG & RETAIL',
      client: 'Grupo Bimbo & Ecosistemas de Gran Consumo',
      title: 'Diagnóstico de Fricción IMPATH™: Ahorro de $1.8M MXN en desarrollo innecesario',
      problem: 'El cliente planeaba una reconstrucción completa de plataforma de 8 meses con un costo estimado de $3.2M MXN, sin tener certeza de qué pantallas o procesos estaban causando la caída de conversión.',
      solution: 'En un sprint de 3 semanas aplicamos la metodología propietaria IMPATH™: mapeo profundo de journeys de usuario, análisis forense de telemetría de abandono y auditoría técnica de arquitectura cloud.',
      result: 'Se demostró que el 70% de la fuga de conversión se concentraba en 2 pasos específicos del checkout. Se estructuró un backlog quirúrgico que evitó reconstruir todo el sistema, ahorró $1.8M MXN y generó ROI positivo en el primer trimestre.',
      quote: 'BluePixel nos dio la claridad técnica y financiera que necesitábamos para presentar ante el Consejo Directivo con total certidumbre.',
      author: 'Dirección de Transformación Digital & Canales B2B',
      metrics: [
        { value: '3 Semanas', label: 'Tiempo total de diagnóstico a dictamen final' },
        { value: '-$1.8M MXN', label: 'Ahorro directo en desarrollo innecesario evitado' },
        { value: '100%', label: 'Aprobación del business case ante el Comité Directivo' }
      ]
    },
    financialCallout: {
      eyebrow: 'IMPACTO FINANCIERO DEL COSTO DE INACCIÓN (COI)',
      title: 'El costo oculto de programar a ciegas: $1.2M MXN en código desechable.',
      desc: 'El 68% de las iniciativas de software corporativo en LATAM fracasan o exceden su presupuesto en más de 2.5x porque los equipos arrancan programando sin auditar deuda técnica previa ni validar la fricción en el P&L. Nuestro diagnóstico de 2 a 4 semanas detiene la hemorragia de capital antes de comprometer presupuestos mayores.',
      exampleLabel: 'Caso típico evaluado',
      exampleText: 'Empresa B2B invirtió $2.4M MXN en un portal con 80% de abandono. Con IMPATH™ en 3 semanas se identificó que solo 2 integraciones resolvían el 85% de las operaciones, ahorrando $1.8M MXN en refactorizaciones innecesarias.'
    },
    // Sin 'cycle': sus 5 pasos eran el mismo proceso que las 4 semanas del
    // timeline (Discovery, auditoria IMPATH y deuda, modelado financiero,
    // board). Se conserva el timeline, que ademas lista los entregables de
    // cada etapa. El ciclo sigue vivo en 'evolucion-digital', donde si es un
    // bucle continuo y no un calendario.
    plans: {
      eyebrow: 'MODALIDADES DE DIAGNÓSTICO',
      title: 'Tres niveles de certidumbre según el momento de tu empresa.',
      subtitle: 'Elige el alcance óptimo para evaluar y blindar tu proyecto antes de comprometer presupuestos mayores.',
      items: [
        {
          horizon: '2 Semanas',
          name: 'SPRINT DISCOVERY',
          desc: 'Para empresas con una plataforma existente que necesita validación rápida de fricción y viabilidad técnica.',
          features: [
            'Mapeo de fricción de usuarios con metodología IMPATH™',
            'Auditoría heurística de pantallas y flujos críticos',
            'Diagnóstico preliminar de deuda técnica y cuellos de botella',
            'Dictamen de viabilidad técnica y estimación de tiempos'
          ],
          cta: 'Solicitar Sprint Discovery',
          featured: false
        },
        {
          horizon: '4 Semanas',
          name: 'ARCHITECTURE & BUSINESS CASE',
          badge: 'MÁS SOLICITADO · CONSEJO DIRECTIVO',
          desc: 'El diagnóstico integral definitivo para justificar y blindar inversiones de software de mediana y gran escala.',
          features: [
            'Todo lo del Sprint Discovery',
            'Blueprint de Arquitectura Cloud-Native desacoplada (Zero Lock-In)',
            'Modelado financiero de TCO a 3 años y cálculo del Costo de Inacción (COI)',
            'Backlog priorizado por impacto en EBITDA y retorno de inversión',
            'Presentación ejecutiva defendible ante el Consejo / Board'
          ],
          cta: 'Solicitar Business Case Completo',
          featured: true
        },
        {
          horizon: '4 Semanas',
          name: 'DUE DILIGENCE TÉCNICA',
          desc: 'Para corporativos o fondos de inversión que necesitan saber qué están comprando: estado real del código, la arquitectura y su superficie de riesgo.',
          features: [
            'Revisión de arquitectura y calidad de código con hallazgos priorizados',
            'Escaneo estático y de dependencias contra OWASP Top 10',
            'Modelado de amenazas y revisión de controles de acceso y cifrado',
            'Dictamen de deuda técnica y riesgo para comités de inversión'
          ],
          cta: 'Solicitar Due Diligence Técnica',
          featured: false
        }
      ]
    },
    bridge: {
      eyebrow: 'De la Estrategia a la Producción',
      title: 'Claridad previa antes de comprometer capital.',
      desc: 'Una vez obtenido tu diagnóstico IMPATH™ y business case, puedes conectar agentes de IA sobre tu stack actual con el Pilar 02 o construir la plataforma completa en 2 a 4 meses con el Pilar 03.',
      ctaText: 'Explorar Pilar 02: Agentes & Automatización',
      ctaRoute: 'pilares/agentes-automatizacion'
    }
  },

  'agentes-automatizacion': {
    id: 'agentes-automatizacion',
    num: '02',
    name: 'Agentes & Automatización',
    badgeText: 'AGENTES · 2 A 4 SEMANAS',
    duration: '2 a 4 Semanas',
    targetAudience: 'Para empresas que buscan conectar agentes de IA y automatizaciones a sus sistemas actuales sin reemplazarlos',
    eyebrow: 'Pilar 02 · Inteligencia Determinística en Producción',
    title: 'Automatización inteligente sobre lo que ya tienes funcionando.',
    subtitle: 'No necesitas tirar tu ERP ni rehacer tu core transaccional. En 2 a 4 semanas desplegamos agentes autónomos y RAG privado sobre tus datos reales, conectados vía protocolo abierto MCP (SAP, Salesforce, CRM) sin alucinaciones.',
    takeaway: 'Automatización inteligente sobre lo que ya tienes funcionando.',
    themeKey: 'purple',
    packageName: 'Pilar 02 · Agentes & Automatización',
    stats: [
      // El '-75% de horas manuales' era un promedio sin medicion publicada y el
      // '0% de alucinaciones criticas' es una promesa absoluta que ningun
      // sistema RAG puede sostener por escrito. Se sustituyen por hechos de
      // arquitectura que se verifican el dia de la entrega.
      { value: '2-4', label: 'Semanas para tener el primer agente autónomo operando', sublabel: 'Pase a producción real' },
      { value: '100%', label: 'Agentes ejecutándose dentro de tu nube privada, sobre tus datos', sublabel: 'Cero entrenamiento con tu IP' },
      { value: '6', label: 'Entregables al cierre, de los conectores MCP a la trazabilidad', sublabel: 'Agentes, RAG privado y gobernanza' }
    ],
    painPoints: {
      eyebrow: '01 — La trampa de los chatbots superficiales',
      title: 'La IA se aprueba en el consejo. Rara vez llega a producción.',
      items: [
        { title: 'Bots que solo responden textos planos', desc: 'Chatbots tradicionales que se limitan a FAQs rígidas pero son incapaces de consultar saldos, conciliar facturas o actualizar el ERP.' },
        { title: 'Riesgo de alucinaciones y fuga de datos', desc: 'Miedo fundado de que la IA invente información ante clientes o que datos confidenciales de la empresa se filtren a modelos públicos.' },
        { title: 'Sistemas aislados sin conexión determinística', desc: 'Soluciones de IA que operan en silos aislados obligando a humanos a copiar y pegar datos entre pantallas manualmente.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '05 — Diferenciación Tecnológica',
      title: 'Agentes Autónomos BluePixel vs Chatbots Comunes.',
      subtitle: 'La diferencia entre un juguete conversacional y una infraestructura de automatización de misión crítica.',
      headers: ['Capacidad', 'Chatbot Básico (SaaS)', 'Scripting / RPA Tradicional', 'Estándar BluePixel Agentic'],
      rows: [
        { label: 'Toma de decisiones', cols: ['Árbol rígido de opciones fijas', 'Reglas estáticas que se rompen al menor cambio', 'Razonamiento autónomo basado en LLMs con guardrails determinísticos'] },
        { label: 'Integración de sistemas', cols: ['Webhooks básicos o inexistentes', 'Automatización de interfaz (RPA frágil)', 'Protocolo MCP nativo que ejecuta llamadas seguras a SAP, Salesforce y APIs'] },
        { label: 'Manejo de datos privados', cols: ['Envían datos a nubes públicas sin control', 'Bases de datos aisladas', 'RAG privado sobre bases vectoriales en tu VPC con cifrado KMS'] },
        { label: 'Supervisión y control', cols: ['Caja negra sin trazabilidad', 'Logs crudos difíciles de auditar', 'Human-in-the-loop: paneles de control y auditoría paso a paso'] }
      ]
    },
    capabilitiesActivation: [
      {
        id: 'ux-ui',
        name: 'UX/UI & PS (Product Strategy)',
        badge: 'IMPATH™ Enabled',
        role: 'UX Conversacional & Control',
        desc: 'Diseño de paneles intuitivos humano-agente para supervisión de decisiones y adopción fluida sin fricción cognitiva.',
        route: 'servicios/ux-ui-product-strategy'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native Architecture',
        role: 'Servidores MCP & APIs',
        desc: 'Construcción de conectores determinísticos vía Model Context Protocol para interactuar de forma segura con tu ERP.',
        route: 'servicios/software-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: '🔥 Núcleo del Pilar: Agentic RAG',
        desc: 'Orquestación de agentes autónomos, embeddings vectoriales y workflows que ejecutan tareas complejas de punta a punta.',
        route: 'servicios/agentic-ai-automation'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Telemetría de Ejecuciones',
        desc: 'Trazabilidad en tiempo real de cada decisión, llamada a herramientas y métricas de horas operativas ahorradas.',
        route: 'servicios/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'CyberVadis & OWASP',
        role: 'Guardrails & Filtros DLP',
        desc: 'Enmascaramiento de datos personales (PII), prevención de prompt injection y despliegue en VPC privada aislada.',
        route: 'servicios/security-reliability'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Priorización por ROI Operativo',
        desc: 'Selección estricta de los flujos de trabajo donde la automatización recupera el 100% de la inversión en semanas.',
        route: 'servicios/digital-consulting'
      }
    ],
    specs: {
      eyebrow: '02 — Arquitectura Agéntica',
      title: 'Tecnología determinística para procesos corporativos.',
      subtitle: 'Diseñado para convivir en perfecta armonía con tu infraestructura existente.',
      items: [
        { title: 'Protocolo MCP (Model Context Protocol)', desc: 'Estandarizamos las herramientas y permisos del agente mediante protocolos abiertos, evitando cualquier vendor lock-in y garantizando control total.' },
        { title: 'RAG Privado Anti-Alucinaciones', desc: 'El agente responde y decide únicamente sobre tu documentación y bases de datos transaccionales reales, citando fuentes exactas.' },
        { title: 'Human-in-the-Loop Supervisado', desc: 'Acciones de alto riesgo (transferencias, modificaciones masivas) requieren validación de un supervisor humano con un solo clic.' }
      ]
    },
    quiz: {
      title: '¿Está tu proceso listo para ser agentizado?',
      subtitle: '4 preguntas para verificar la viabilidad de implementar agentes en tu stack.',
      questions: [
        {
          q: '1. ¿El proceso operativo que deseas automatizar sigue reglas de negocio identificables?',
          options: [
            { text: 'Sí, documentadas con manuales y flujos claros', score: 3 },
            { text: 'Conocidas por el equipo pero no 100% documentadas', score: 2 },
            { text: 'Depende mucho de la intuición de personas clave', score: 1 },
            { text: 'No hay ningún estándar, cada quien lo hace distinto', score: 0 }
          ]
        },
        {
          q: '2. ¿Los sistemas involucrados (CRM, ERP, correos) cuentan con APIs o accesos a bases de datos?',
          options: [
            { text: 'Sí, APIs REST/GraphQL modernas documentadas', score: 3 },
            { text: 'Bases de datos SQL con acceso controlado', score: 2 },
            { text: 'Sistemas legados antiguos con exportación a archivos', score: 1 },
            { text: 'No sabemos con qué conectividad cuentan', score: 0 }
          ]
        },
        {
          q: '3. ¿Cuánto tiempo invierte tu equipo actualmente en ese proceso repetitivo?',
          options: [
            { text: 'Más de 40 horas a la semana repartidas en el equipo', score: 3 },
            { text: 'Entre 20 y 40 horas semanales', score: 2 },
            { text: 'Menos de 10 horas semanales', score: 1 },
            { text: 'No lo hemos medido en tiempo', score: 0 }
          ]
        },
        {
          q: '4. ¿Tienen preocupaciones sobre la privacidad de los datos confidenciales de la empresa?',
          options: [
            { text: 'Crítica: los datos deben permanecer 100% en nuestra VPC', score: 3 },
            { text: 'Alta: requerimos acuerdos empresariales de cero retención', score: 2 },
            { text: 'Media: nos importa que no sea público', score: 1 },
            { text: 'Baja: no manejamos datos sensibles en este flujo', score: 0 }
          ]
        }
      ],
      results: {
        high: { band: 'Alineación Total Agéntica', desc: 'Tu infraestructura y procesos tienen las condiciones ideales. Podemos tener el primer agente autónomo operando y generando ROI en menos de 4 semanas.' },
        medium: { band: 'Viabilidad Favorable', desc: 'El proceso tiene gran potencial de agentización. Recomendamos iniciar con un piloto de 2 semanas (Single Agent MCP) para validar conectividad con tus sistemas.' },
        low: { band: 'Recomendación de Fase Previa', desc: 'Tu infraestructura requiere orden previo o los procesos no están estandarizados. Te sugerimos iniciar con el Pilar 01 para estructurar tus datos antes de inyectar Inteligencia Artificial.' }
      }
    },
    deliverables: {
      eyebrow: '06 — Entregables Oficiales',
      title: 'Agentes y conectores en producción desde el sprint 1.',
      items: [
        { num: '01', title: 'Agente Autónomo en Producción', desc: 'Desplegado en tu infraestructura cloud privada con capacidad transaccional.' },
        { num: '02', title: 'Servidores MCP Estandarizados', desc: 'Conectores modulares con tu ERP/CRM con contratos OpenAPI documentados.' },
        { num: '03', title: 'Bases Vectoriales & RAG Privado', desc: 'Capa de conocimiento alimentada con datos corporativos reales sin alucinaciones.' },
        { num: '04', title: 'Panel de Control Human-in-the-Loop', desc: 'Interfaz web para que tu equipo supervise, apruebe y audite ejecuciones agénticas.' },
        { num: '05', title: 'Guardrails de Seguridad & PII DLP', desc: 'Filtros que bloquean ataques de prompt injection y enmascaran datos confidenciales.' },
        { num: '06', title: 'Dashboard de Telemetría & ROI', desc: 'Métricas en tiempo real de transacciones resueltas, horas ahorradas y tasa de éxito.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología de Despliegue Rápido',
      title: 'De mapeo de proceso a agente en producción.',
      subtitle: 'Ciclos cortos y determinísticos con resultados tangibles cada semana.',
      steps: [
        { num: '01', title: 'Semana 1: Mapeo de Flujo & Conectores MCP', desc: 'Definición de reglas de negocio, endpoints requeridos y arquitectura RAG.', deliverables: ['Especificación Técnica MCP'] },
        { num: '02', title: 'Semana 2: Construcción del Agente & Base Vectorial', desc: 'Ingesta de datos corporativos, afinación de prompts y programación de herramientas.', deliverables: ['Agente en Ambiente Staging'] },
        { num: '03', title: 'Semana 3: Pruebas de Estrés & Guardrails', desc: 'Simulaciones con casos borde (edge cases), pruebas de seguridad y calibración de umbrales.', deliverables: ['Reporte de Precisión & Seguridad'] },
        { num: '04', title: 'Semana 4: Pase a Producción & Onboarding', desc: 'Despliegue en VPC privada, capacitación al equipo y activación de telemetría en vivo.', deliverables: ['Agente en Producción Activo'] }
      ]
    },
    faqs: [
      { q: '¿Necesitamos reemplazar nuestro software actual para usar agentes?', a: 'No. El principio fundacional de este pilar es operar sobre lo que ya tienes funcionando. Creamos conectores determinísticos vía MCP que interactúan con tus ERPs, CRMs o bases de datos actuales a través de APIs seguras.' },
      { q: '¿Qué garantía tenemos de que el agente no va a alucinar o cometer errores?', a: 'Implementamos una arquitectura RAG estricta donde el agente solo tiene acceso a responder con fuentes verificadas. Para cualquier acción que modifique bases de datos críticas, se configuran flujos de Human-in-the-Loop que exigen confirmación de un supervisor.' },
      { q: '¿Los agentes reemplazan a las personas de nuestro equipo?', a: 'No. El objetivo es liberar a tu equipo del trabajo mecánico repetitivo para que operen como Subject Matter Experts (SMEs), supervisando procesos con mayor velocidad y enfocándose en análisis de alto valor.' }
    ],
    // Sin 'caseStudy': el que vivia aqui era FR Medical, que todavia no es
    // cliente, y ademas nombraba a terceros (hospitales). Este pilar queda sin
    // seccion de prueba hasta que se sustituya por un caso real autorizado.
    financialCallout: {
      eyebrow: 'ROI DETERMINÍSTICO EN AUTOMATIZACIÓN AGÉNTICA',
      title: 'Automatización sobre lo que ya tienes, sin migrar tu core.',
      desc: 'Los chatbots tradicionales solo responden textos planos; los agentes autónomos de BluePixel ejecutan transacciones reales sobre tu ERP, CRM y core de negocio vía protocolo abierto MCP sin obligarte a migrar sistemas legados.',
      exampleLabel: 'Cómo opera un agente determinístico',
      exampleText: 'Consulta tu ERP vía MCP, valida contra tus reglas de negocio y ejecuta la transacción, sin humanos copiando datos entre pantallas.'
    },
    // Sin 'cycle' por la misma razon que en 'consultoria-digital': sus 5 pasos
    // repetian las 4 semanas del timeline (mapeo de flujo, construccion del
    // agente, guardrails, pase a produccion).
    plans: {
      eyebrow: 'MODALIDADES DE AUTOMATIZACIÓN AGÉNTICA',
      title: 'Planes modulares para integrar IA sobre tu infraestructura actual.',
      subtitle: 'Desde un agente quirúrgico en 2 semanas hasta una orquestación multi-agente para toda tu operación.',
      items: [
        {
          horizon: '2 Semanas',
          name: 'SINGLE AGENT MCP',
          desc: 'Ideal para automatizar un proceso operativo crítico de alta fricción o rescate de leads/órdenes.',
          features: [
            '1 Agente Autónomo especializado en un flujo transaccional',
            'Conector MCP determinístico hacia 1 sistema clave (ERP, CRM o API)',
            'RAG Privado sobre documentación operativa base',
            'Panel de control Human-in-the-Loop para supervisión de decisiones'
          ],
          cta: 'Desplegar Agente en 2 Semanas',
          featured: false
        },
        {
          horizon: '4 Semanas',
          name: 'MULTI-AGENT ORCHESTRATION',
          badge: 'MÁS SOLICITADO · ALTO IMPACTO',
          desc: 'Para empresas que buscan transformar un departamento completo con orquestación multi-agente coordinada.',
          features: [
            'Orquestación de 2 a 3 agentes colaborativos (Triage, Conciliación, Notificación)',
            'Múltiples servidores MCP conectados (SAP + Salesforce + WhatsApp/Slack)',
            'RAG Privado avanzado con búsqueda híbrida y citación determinística',
            'Guardrails de seguridad enterprise (Anti-Prompt Injection & DLP PII)',
            'Dashboard ejecutivo de telemetría de horas ahorradas y tasa de éxito'
          ],
          cta: 'Desplegar Orquestación en 4 Semanas',
          featured: true
        },
        {
          horizon: '8 Semanas',
          name: 'ENTERPRISE AGENTIC MESH',
          desc: 'Para corporativos con requerimientos de alta disponibilidad, múltiples nubes y compliance regulatorio.',
          features: [
            'Malla agéntica distribuida multi-departamento con conmutación por falla',
            'Despliegue 100% On-Premise o VPC privada aislada (Zero-Trust)',
            'Auditoría criptográfica de cada decisión y llamada de herramientas',
            'Capacitación técnica al equipo interno y SLA 99.9% de resiliencia'
          ],
          cta: 'Diseñar Malla Agéntica Enterprise',
          featured: false
        }
      ]
    },
    bridge: {
      eyebrow: 'Expansión de Capacidades',
      title: 'Automatización inteligente sobre lo que ya funciona.',
      desc: 'Si además de conectar agentes sobre tu infraestructura actual necesitas construir una nueva plataforma web o móvil corporativa desde cero en 2 a 4 meses, explora el Pilar 03.',
      ctaText: 'Explorar Pilar 03: Plataformas Digitales',
      ctaRoute: 'pilares/plataformas-digitales'
    }
  },

  'plataformas-digitales': {
    id: 'plataformas-digitales',
    num: '03',
    name: 'Plataformas Digitales',
    badgeText: 'PLATAFORMAS · 2 A 4 MESES A PRODUCCIÓN',
    duration: '2 a 4 Meses (MVP a Producción)',
    targetAudience: 'Para construir plataformas y MVPs desde cero con UX validado que convierte',
    eyebrow: 'Pilar 03 · De la Concepción a Producción en 2 a 4 Meses',
    title: 'De la concepción a producción en 2 a 4 meses con UX validado.',
    // Desarrollo de aplicaciones moviles (590 busquedas/mes) y desarrollo de
    // sitio web (140) son las dos keywords que mas convierten en pauta y no
    // aparecian en la pagina. Se nombran aqui sin tocar el H1 de marca.
    subtitle: 'Desarrollo de aplicaciones móviles y sitios web a la medida, con inteligencia artificial integrada desde el primer sprint y UX validado con usuarios reales. Rompimos la frontera entre diseño e ingeniería pesada para construir plataformas y MVPs enterprise en 2 a 4 meses con SLA 99.9%.',
    takeaway: 'De la concepción a producción en 2 a 4 meses con validación técnica y de mercado.',
    themeKey: 'cyan',
    packageName: 'Pilar 03 · Plataformas Digitales',
    stats: [
      // El '50+ plataformas enterprise' no esta publicado en ningun lado: en
      // bluepixel.mx el contador de plataformas aparece vacio ('0+'). Se
      // sustituye por el numero real de entregables de este pilar, que si se
      // puede contar contra la seccion de entregables de esta misma pagina.
      { value: '2 a 4 Meses', label: 'De la concepción al lanzamiento oficial del MVP en producción', sublabel: 'Time-to-market prioritario' },
      { value: '#1 UX/UI', label: 'Líder en diseño y estrategia de producto en México', sublabel: 'Ranking DesignRush · Ciudad de México' },
      { value: '9', label: 'Entregables al cierre, del Product Strategy al despliegue productivo', sublabel: 'Objetivo SLA 99.9% Cloud-Native' }
    ],
    painPoints: {
      eyebrow: 'La trampa del MVP que no sobrevive al segundo año',
      title: 'Plataformas que se frenan antes de escalar.',
      items: [
        { title: 'Tecnología y negocio desalineados', desc: 'El equipo técnico ejecuta tickets a ciegas. Nadie conecta las decisiones de ingeniería con los objetivos financieros del negocio.' },
        { title: 'Deuda técnica acumulada desde el MVP', desc: 'El MVP funciona hoy pero no sobrevive al segundo año. Cada feature nueva cuesta el doble y llega el triple de tarde.' },
        { title: 'UX sin validación de usuarios reales', desc: 'Interfaces diseñadas por opinión, no por datos de comportamiento. Los usuarios no adoptan y los sprints se queman en parches.' },
        { title: 'IA sin arquitectura preparada', desc: 'Quieren integrar IA pero la plataforma no está preparada. Termina siendo un experimento aislado y no una ventaja competitiva.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '05 — Diferenciación de Ingeniería',
      title: 'Construcción Full Stack BluePixel vs Fábricas de Software.',
      subtitle: 'Por qué nuestro modelo de 2 a 4 meses entrega software de grado enterprise con alta conversión.',
      headers: ['Aspecto', 'Fábrica Tradicional ("Maquila")', 'Agencia Creativa de Diseño', 'Estándar BluePixel 2 a 4 Meses'],
      rows: [
        { label: 'Tiempo a producción', cols: ['8 a 18 meses con retrasos constantes', 'Solo entregan pantallas en Figma', '2 a 4 meses a producción con MVP funcional y probado'] },
        { label: 'Calidad de UX/UI', cols: ['Interfaces toscas y sin pruebas de usuario', 'Diseño bonito pero inescalable en código', 'Psicología conductual IMPATH™ validada con usuarios reales'] },
        { label: 'Arquitectura de software', cols: ['Monolitos frágiles y deuda técnica oculta', 'Cero criterio de ingeniería pesada', 'Microservicios Cloud-Native, desacoplados y preparados para IA'] },
        { label: 'Propiedad y Soberanía', cols: ['Retienen propiedad o usan frameworks propietarios', 'Solo archivos de diseño', 'Repositorios 100% tuyos en tu VPC con CI/CD automatizado'] }
      ]
    },
    capabilitiesActivation: [
      {
        id: 'ux-ui',
        name: 'UX/UI & PS (Product Strategy)',
        badge: 'IMPATH™ Enabled',
        role: 'Diseño UI/UX Completo & Validado',
        desc: 'Prototipado interactivo navegable, validación de flujos con usuarios reales y Design System escalable en Figma.',
        route: 'servicios/ux-ui-product-strategy'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native Architecture',
        role: '🔥 Núcleo del Pilar: Full Stack 0 a Prod',
        desc: 'Desarrollo web y móvil de alto rendimiento (React, Node.js, Python, PostgreSQL), CI/CD y microservicios resilientes.',
        route: 'servicios/software-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Módulos Inteligentes Nativos',
        desc: 'Workflows agénticos integrados de forma nativa en el core transaccional de la app desde el primer sprint.',
        route: 'servicios/agentic-ai-automation'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Telemetría de Producto Base',
        desc: 'Configuración nativa de tracking de eventos clave y embudos de conversión con Mixpanel y Data Warehouse.',
        route: 'servicios/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'CyberVadis & OWASP',
        role: 'Arquitectura Segura OWASP',
        desc: 'Blindaje de endpoints, cifrado KMS de datos sensibles y controles técnicos documentados desde el primer sprint.',
        route: 'servicios/security-reliability'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Gobernanza de Entrega en 2 a 4 Meses',
        desc: 'Aseguramiento estratégico de que cada feature construido resuelva con precisión la tesis comercial del negocio.',
        route: 'servicios/digital-consulting'
      }
    ],
    specs: {
      eyebrow: '02 — Estándar de Construcción',
      title: 'Ingeniería pesada vestida con la mejor experiencia humana.',
      subtitle: 'La combinación que asegura adopción inmediata y escalabilidad sin límites.',
      items: [
        { title: 'Product Strategy & Validación con Usuarios', desc: 'Validamos los flujos críticos con prototipos interactivos antes de programar, asegurando que los usuarios amen y adopten la plataforma.' },
        { title: 'Stack Moderno Cloud-Native', desc: 'Construimos sobre React, Node.js, Python, PostgreSQL y contenedores Docker, desplegados con infraestructura elástica en AWS, GCP o Azure.' },
        { title: 'Pruebas Automatizadas y Calidad de Código', desc: 'Cobertura de pruebas unitarias y de integración superior al 85%, con pipelines de CI/CD que garantizan despliegues continuos sin caídas.' }
      ]
    },
    // Era el unico pilar sin costo de inaccion. El dato del 70% ya se publica
    // en servicesData (servicio UX/UI), asi que no introduce una cifra nueva.
    financialCallout: {
      eyebrow: 'EL COSTO DE CONSTRUIR SIN VALIDAR',
      title: 'Una plataforma que nadie adopta cuesta lo mismo que una que sí.',
      desc: 'El 70% de los proyectos de software corporativo fallan por falta de adopción de usuarios, no por fallas de código. Se construye durante meses sobre supuestos que nunca se contrastaron con un usuario real, y la factura de desarrollo llega completa aunque la plataforma termine sin uso. Validar el UX antes de construir es lo que separa una inversión de un gasto.',
      exampleLabel: 'Lo que cambia con UX validado',
      exampleText: 'Más del 92% de adopción en el primer mes, medido en plataformas ya lanzadas'
    },
    quiz: {
      title: '¿Es el momento de construir tu plataforma o MVP corporativo?',
      subtitle: '4 preguntas para evaluar si tu empresa está lista para el sprint de 2 a 4 meses.',
      questions: [
        {
          q: '1. ¿Tienen clara la propuesta de valor y el problema principal que debe resolver la plataforma?',
          options: [
            { text: 'Totalmente clara, con métricas de éxito definidas', score: 3 },
            { text: 'Tenemos la idea general pero falta priorizar requerimientos', score: 2 },
            { text: 'Queremos abarcar demasiadas cosas al mismo tiempo', score: 1 },
            { text: 'Aún estamos explorando qué problema resolver', score: 0 }
          ]
        },
        {
          q: '2. ¿Cuál es la urgencia de salir a producción con la plataforma?',
          options: [
            { text: 'Crítica: requerimos estar en el mercado en 2 a 4 meses', score: 3 },
            { text: 'Media: queremos lanzar antes de 6 meses', score: 2 },
            { text: 'Baja: no tenemos fecha límite clara', score: 1 },
            { text: 'Solo estamos pidiendo presupuestos informativos', score: 0 }
          ]
        },
        {
          q: '3. ¿Cuentan con un Product Owner o líder de negocio que pueda tomar decisiones ágiles?',
          options: [
            { text: 'Sí, un líder dedicado con autoridad de decisión', score: 3 },
            { text: 'Un líder con tiempo parcial pero disponible', score: 2 },
            { text: 'Las decisiones requieren comités lentos de muchas personas', score: 1 },
            { text: 'No tenemos a nadie asignado al proyecto', score: 0 }
          ]
        },
        {
          q: '4. ¿Qué tan importante es que el código fuente sea 100% propiedad de tu empresa?',
          options: [
            { text: 'Indispensable: debe ser un activo propio en nuestra nube', score: 3 },
            { text: 'Muy importante para rondas de inversión o auditorías', score: 2 },
            { text: 'Secundario si la solución funciona rápido', score: 1 },
            { text: 'No nos importa usar plataformas cerradas de terceros', score: 0 }
          ]
        }
      ],
      results: {
        high: { band: 'Listos para el Sprint a Producción', desc: 'Tienen claridad de negocio, urgencia y liderazgo. Tu empresa reúne las condiciones perfectas para construir y lanzar la plataforma al mercado en 2 a 4 meses.' },
        medium: { band: 'Alineación Favorable', desc: 'El proyecto tiene mucho sentido, pero requiere afinar la definición del MVP para asegurar el time-to-market. Agendemos una sesión para delimitar el alcance del primer trimestre.' },
        low: { band: 'Recomendación de Fase Previa', desc: 'La visión del producto aún tiene ambigüedad. Te sugerimos iniciar con el Pilar 01 (Consultoría) para definir la arquitectura y el business case antes de comprometer capital en desarrollo.' }
      }
    },
    aiLayer: {
      eyebrow: '03 — Capa Agentic IA Integrada',
      title: 'IA integrada en el corazón de tu plataforma desde el sprint 1.',
      subtitle: 'La inteligencia artificial se piensa y se construye dentro de la plataforma desde el primer sprint, no como un experimento aislado ni un parche tardío.',
      items: [
        { title: 'Agentes que ejecutan de forma autónoma', desc: 'Flujos operativos que se ejecutan, monitorean y escalan solos. La plataforma sigue trabajando de forma continua, en cualquier horario.' },
        { title: 'Inteligencia conectada a datos reales', desc: 'Los agentes operan sobre el comportamiento real de tus usuarios y datos de producción desde el sprint 1. La IA aprende desde el primer día.' },
        { title: 'IA embebida que detecta, actúa y optimiza', desc: 'Sistemas que identifican fricciones en tiempo real y las resuelven antes de que el usuario las note. Aprendizaje y mejora continua.' },
        { title: 'Arquitectura AI-ready desde el día uno', desc: 'La infraestructura se diseña para que los modelos escalen con la plataforma, manteniendo el costo de inferencia bajo control estricto.' }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Oficiales Enterprise',
      title: 'Una plataforma productiva completa entregada en 2 a 4 meses.',
      items: [
        { num: '01', title: 'Estrategia de Producto & Roadmap', desc: 'Discovery profundo, requerimientos priorizados por ROI y arquitectura técnica escalable.' },
        { num: '02', title: 'Sistema UX/UI Enterprise Validado', desc: 'Research con usuarios reales, prototipos interactivos navegables y Design System en Figma.' },
        { num: '03', title: 'Capa Agentic IA Integrada', desc: 'Agentes autónomos, automatizaciones y modelos RAG integrados desde el sprint 1.' },
        { num: '04', title: 'Arquitectura Técnica Cloud-Native', desc: 'Microservicios modulares desacoplados, serverless/contenedores y bases PostgreSQL.' },
        { num: '05', title: 'Desarrollo Full-Stack Web & Móvil', desc: 'Frontend en React/Next.js, móvil en React Native, Swift (iOS) y Kotlin (Android), backend en Node/Python y contratos OpenAPI con tipado estricto.' },
        { num: '06', title: 'Consola Administrativa & Dashboard', desc: 'Panel de gestión interno, métricas operativas y módulos de control de usuarios y permisos.' },
        { num: '07', title: 'Integraciones con Stack Actual', desc: 'Conectores determinísticos con ERP, CRM, pasarelas de pago y sistemas legados.' },
        { num: '08', title: 'QA & Pruebas de Seguridad OWASP', desc: 'Pruebas funcionales, cobertura de tests >85% y auditoría contra vulnerabilidades OWASP Top 10.' },
        { num: '09', title: 'Lanzamiento Productivo & Stores', desc: 'Deploy en tu VPC cloud, publicación oficial en App Store y Google Play, y monitoreo en vivo.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología de 2 a 4 Meses a Producción',
      title: 'Cronograma acelerado de concepción a lanzamiento.',
      subtitle: 'Sprints quincenales con demostraciones funcionales de software en cada iteración.',
      steps: [
        { num: '01', title: 'Mes 1: Product Strategy & Diseño Validado', desc: 'Definición de arquitectura, prototipado interactivo y validación con usuarios reales.', deliverables: ['Prototipo en Figma', 'Blueprint Técnico'] },
        { num: '02', title: 'Mes 2: Desarrollo del Core Transaccional', desc: 'Programación de bases de datos, APIs, autenticación segura e interfaces principales.', deliverables: ['Módulos Core en Staging'] },
        { num: '03', title: 'Mes 3: Integraciones, QA & Hardening', desc: 'Conexión con pasarelas de pago, ERPs, pruebas automatizadas de seguridad y auditoría.', deliverables: ['Tests >85%', 'Auditoría OWASP'] },
        { num: '04', title: 'Mes 4: Go-Live Oficial a Producción', desc: 'Despliegue productivo en tu VPC con balanceadores, telemetría Mixpanel y SLA 99.9% activo.', deliverables: ['Plataforma en Producción'] }
      ]
    },
    // Era el unico pilar sin modalidades, y el de mayor ticket. Los tres
    // niveles se componen con los 9 entregables y el cronograma que ya declara
    // el pilar; no introducen alcances nuevos. Validados comercialmente.
    plans: {
      eyebrow: 'MODALIDADES DE CONSTRUCCIÓN',
      title: 'Tres alcances según qué tan lejos quieras llegar en el primer ciclo.',
      subtitle: 'Todos salen a producción. Cambia la superficie que cubre la plataforma y la profundidad de las integraciones.',
      items: [
        {
          horizon: '2 Meses',
          name: 'MVP VALIDADO',
          desc: 'Para validar una hipótesis de negocio en producción con usuarios reales, sin comprometer el presupuesto completo.',
          features: [
            'Product Strategy y roadmap priorizado por ROI',
            'Research con usuarios reales y prototipo navegable',
            'Desarrollo full-stack del flujo crítico end-to-end',
            'Arquitectura Cloud-Native desacoplada y lista para escalar',
            'Go-Live productivo en tu VPC con SLA 99.9%'
          ],
          cta: 'Solicitar MVP Validado',
          featured: false
        },
        {
          horizon: '4 Meses',
          name: 'PLATAFORMA ENTERPRISE',
          badge: 'MÁS SOLICITADO · WEB & MÓVIL',
          desc: 'La plataforma corporativa completa: todos los flujos, la consola de administración y las integraciones con tu stack actual.',
          features: [
            'Todo lo del MVP Validado',
            'Design System Enterprise completo y documentado',
            'Desarrollo full-stack web y móvil',
            'Consola administrativa con métricas operativas',
            'Integraciones determinísticas con ERP, CRM y pasarelas de pago',
            'QA con cobertura >85% y auditoría OWASP',
            'Publicación oficial en App Store y Google Play'
          ],
          cta: 'Solicitar Plataforma Enterprise',
          featured: true
        },
        {
          horizon: '4 Meses',
          name: 'PLATAFORMA AGENTIC',
          desc: 'La plataforma enterprise con la capa de agentes autónomos construida dentro desde el primer sprint, no añadida después.',
          features: [
            'Todo lo de Plataforma Enterprise',
            'Agentes autónomos operando sobre los flujos críticos',
            'RAG privado sobre tus datos reales de producción',
            'Conectores MCP hacia tus sistemas de misión crítica',
            'Arquitectura AI-ready con costo de inferencia bajo control'
          ],
          cta: 'Solicitar Plataforma Agentic',
          featured: false
        }
      ]
    },
    faqs: [
      { q: '¿Es realmente viable lanzar un MVP o plataforma corporativa en 2 a 4 meses?', a: 'Sí, porque aplicamos nuestra metodología de desarrollo acelerado por IA (AI-Forward Deploy Engineering) y priorizamos con rigor de cirujano el MVP que genera tracción comercial, sin quemar tiempo en funcionalidades secundarias.' },
      { q: '¿Qué tecnologías utilizan para construir la plataforma?', a: 'Construimos con el stack más moderno y demandado del mercado empresarial: React, Next.js, React Native, Node.js, Python, TypeScript, PostgreSQL y Redis, sobre contenedores Docker orquestados en AWS, GCP o Azure.' },
      { q: '¿Qué sucede una vez que se lanza la plataforma en 2 a 4 meses?', a: 'Tienes total libertad: entregamos la propiedad y documentación completa a tu equipo interno, o puedes hacer la transición sin fricciones hacia el Pilar 04 (Evolución Digital) para continuar optimizando con nuestro squad dedicado.' }
    ],
    caseStudy: {
      tag: 'CASO REAL B2B · FINTECH & HIGH CONCURRENCY',
      client: 'Clip / RadioShack (Plataformas Transaccionales de Alto Tráfico)',
      title: 'De la concepción a producción en 2 a 4 meses con arquitectura Cloud-Native y UX validado',
      problem: 'La compañía requería lanzar una nueva experiencia digital transaccional con estrictos requerimientos de seguridad bancaria y capacidad para soportar picos masivos de transacciones simultáneas.',
      solution: 'Squad BluePixel full-stack: estrategia de producto y validación con usuarios reales en el Mes 1, ingeniería serverless/contenedores en el Mes 2, e integración de pasarelas con blindaje OWASP y pruebas de carga en los Meses 3 y 4.',
      result: 'Go-Live en tiempo récord. Disponibilidad del 99.9% durante picos de demanda y adopción de usuarios superior al 92% sin necesidad de manuales de inducción.',
      quote: 'BluePixel logró en pocos meses lo que nuestra fábrica de software anterior no pudo entregar en un año.',
      author: 'VP of Engineering & Product Lead',
      metrics: [
        { value: '2 a 4 Meses', label: 'De la primera sesión de UX al Go-Live en producción' },
        { value: '99.9%', label: 'Disponibilidad de arquitectura cloud ante picos de demanda' },
        { value: '>92%', label: 'Tasa de adopción de usuarios en el primer mes' }
      ]
    },
    bridge: {
      eyebrow: 'Transición Natural de Producto',
      title: 'Construir es el inicio. Evolucionar es donde crece.',
      desc: 'Todo producto digital tiene más potencial del que muestra en su lanzamiento. Evolución Digital convierte ese potencial en resultados medibles cada trimestre mediante un Squad continuo dedicado.',
      ctaText: 'Conocer Pilar 04: Evolución Digital',
      ctaRoute: 'pilares/evolucion-digital'
    }
  },

  'evolucion-digital': {
    id: 'evolucion-digital',
    num: '04',
    // La curva de valor solo aplica aqui: es el pilar cuyo argumento es que la
    // plataforma se estanca si no evoluciona.
    showValueCurve: true,
    name: 'Evolución Digital',
    badgeText: 'EVOLUCIÓN · ROADMAP VIVO 6 A 12 MESES',
    duration: 'Roadmap Vivo 6 a 12 Meses (Retainer Mensual)',
    targetAudience: 'Para evolucionar plataformas existentes con capacidades transversales, optimización continua y CRO',
    eyebrow: 'Pilar 04 · Crecimiento Sostenido sin Inflar Nómina',
    title: 'El día que lanzas, empieza lo que más importa.',
    subtitle: 'Evolución Digital mantiene tu plataforma creciendo con roadmap vivo a 6 o 12 meses, UX Health Score continuo y un Squad senior dedicado (Tech Lead, AI Engineer, Full Stack, UX/CRO) con accountability trimestral alineado a resultados de negocio reales.',
    takeaway: 'Tu equipo tecnológico extendido para proteger la inversión y sostener el crecimiento.',
    themeKey: 'indigo',
    packageName: 'Pilar 04 · Evolución Digital (Retainer)',
    stats: [
      // El '+34% de conversion promedio' era un promedio entre proyectos que no
      // esta medido ni publicado, y las '6 semanas al primer impacto medible'
      // contradecian a bluepixel.mx, que habla del primer trimestre. Se ajustan
      // al plazo que el propio sitio publica y al alcance del retainer.
      { value: '6 o 12', label: 'Meses de roadmap vivo con entregas continuas cada sprint', sublabel: 'Retainer mensual · Squad dedicado' },
      { value: 'Q1', label: 'Primeros indicadores medibles del acompañamiento', sublabel: 'Medidos contra la línea base de tu plataforma' },
      { value: '24', label: 'Ciclos de refactorización al año que impiden acumular deuda técnica', sublabel: 'Cadencia quincenal · SLA 99.9%' }
    ],
    painPoints: {
      eyebrow: 'El estancamiento que empieza después del lanzamiento',
      title: 'La plataforma lanzó. El trabajo apenas empieza.',
      items: [
        { title: 'Sin evolución estratégica basada en datos', desc: 'Tu plataforma lleva meses — o años — sin una sola mejora basada en el comportamiento real de los usuarios.' },
        { title: 'La fricción existe pero no se puede cuantificar', desc: 'Sabes que los usuarios abandonan, pero nadie en la empresa tiene el número: ¿cuánto dinero estás perdiendo hoy por esa fricción?' },
        { title: 'Mejoras sin accountability de negocio', desc: 'Cada trimestre se propone un roadmap que se diluye en tickets técnicos sin seguimiento ni métricas claras de ROI.' },
        { title: 'El equipo no puede operar y evolucionar a la vez', desc: 'El equipo interno pasa el día apagando incendios operativos; la evolución estratégica siempre queda atrapada en el backlog.' },
        { title: 'Inversión digital sin ROI comprobado', desc: 'Cada año se aprueba presupuesto de tecnología, pero nadie puede mostrar con total claridad qué ingresos generó ese gasto.' },
        { title: 'Deuda técnica que crece en silencio', desc: 'Cada sprint de emergencia añade parches rápidos; la plataforma se vuelve cada vez más frágil, lenta y costosa de mantener.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '05 — Diferenciación Operativa',
      title: 'Squad Continuo BluePixel vs Mantenimiento Tradicional.',
      subtitle: 'La diferencia entre pagar por parchar errores y tener un motor de evolución de negocio.',
      headers: ['Concepto', 'Soporte Tradicional de Fábrica', 'Equipo Interno Básico', 'Estándar BluePixel Evolución'],
      rows: [
        { label: 'Rol del equipo', cols: ['Reactivo: solo atienden tickets si el sistema se cae', 'Enfocado en resolver urgencias del día a día', 'Proactivo: optimización de CRO, UX Health Score y nueva tecnología'] },
        { label: 'Perfiles técnicos', cols: ['Desarrolladores juniors asignados por hora', 'Perfiles limitados al stack conocido', 'Squad multidisciplinario senior: Tech Lead, AI Engineer, UX Lead, QA'] },
        { label: 'Deuda técnica', cols: ['Se acumula mes con mes sin control', 'Difícil de priorizar frente a la operación', 'Reducción sistemática en cada sprint con refactorización continua'] },
        { label: 'Alineación de negocio', cols: ['Cero interés en tus ventas o conversión', 'Desconectado de métricas de marketing', 'Homologación de intereses con medición de impacto en P&L'] }
      ]
    },
    capabilitiesActivation: [
      {
        id: 'ux-ui',
        name: 'UX/UI & PS (Product Strategy)',
        badge: 'IMPATH™ Enabled',
        role: 'CRO & UX Health Score Continuo',
        desc: 'Auditorías mensuales de fricción, experimentos de optimización de conversión (A/B testing) y evolución del Design System.',
        route: 'servicios/ux-ui-product-strategy'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native Architecture',
        role: 'Refactorización & Nuevos Módulos',
        desc: 'Despliegue continuo de nuevos microservicios, optimización de consultas de bases de datos y reducción de costos cloud.',
        route: 'servicios/software-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Reentrenamiento & Nuevos Agentes',
        desc: 'Afinación continua de prompts, orquestación multi-agente y despliegue de automatizaciones sobre nuevos flujos operativos.',
        route: 'servicios/agentic-ai-automation'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Dashboards Directivos & Modelos ML',
        desc: 'Tableros ejecutivos en vivo, análisis de cohortes de retención y desarrollo de modelos predictivos de comportamiento.',
        route: 'servicios/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'CyberVadis & OWASP',
        role: 'Monitoreo SLA 99.9% & Parches Continuos',
        desc: 'Vigilancia 24/7 de infraestructura, escaneo continuo de dependencias y actualización proactiva de parches de seguridad.',
        route: 'servicios/security-reliability'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Priorización Trimestral de Backlog',
        desc: 'Acompañamiento ejecutivo continuo para alinear el roadmap de producto con las metas financieras de cada trimestre.',
        route: 'servicios/digital-consulting'
      }
    ],
    specs: {
      eyebrow: 'Un squad senior sin contratarlo',
      title: 'Capacidades transversales de élite sin fricción de nómina.',
      subtitle: 'Flexibilidad total para escalar la velocidad de ingeniería según la temporada de tu negocio.',
      items: [
        { title: 'Squad Multidisciplinario Dedicado', desc: 'Acceso inmediato a Tech Leads, Arquitectos de IA, Diseñadores de Producto y Especialistas en Seguridad sin costos de contratación.' },
        { title: 'Optimización Continua de Conversión (CRO)', desc: 'No nos limitamos a mantener código; ejecutamos pruebas continuas para incrementar la tasa de conversión y el ticket promedio de tus usuarios.' },
        { title: 'SLA Empresarial y Respuesta Crítica', desc: 'Garantía de disponibilidad con tiempos de respuesta inmediatos ante cualquier incidente y monitoreo automatizado 24/7.' }
      ]
    },
    quiz: {
      title: '¿Necesita tu plataforma un Squad de Evolución Digital?',
      subtitle: '4 preguntas para evaluar si tu activo tecnológico requiere acompañamiento continuo.',
      questions: [
        {
          q: '1. ¿Tienen métricas mensuales sobre cómo evoluciona la retención y la conversión de los usuarios?',
          options: [
            { text: 'Sí, revisamos telemetría y funnels semanalmente', score: 3 },
            { text: 'Solo revisamos números de ventas agregados', score: 2 },
            { text: 'Nos enteramos de los problemas cuando los clientes se quejan', score: 1 },
            { text: 'No tenemos visibilidad de métricas de retención', score: 0 }
          ]
        },
        {
          q: '2. ¿Cómo manejan la actualización de dependencias, parches de seguridad y deuda técnica?',
          options: [
            { text: 'Tenemos sprints dedicados de refactorización constante', score: 3 },
            { text: 'Actualizamos cuando algo empieza a fallar', score: 2 },
            { text: 'El código no se ha tocado desde el lanzamiento', score: 1 },
            { text: 'Tenemos miedo de actualizar librerías porque se rompe todo', score: 0 }
          ]
        },
        {
          q: '3. Cuando la dirección solicita un nuevo feature relevante, ¿cuánto tarda en salir a producción?',
          options: [
            { text: 'Menos de 2 semanas con CI/CD automatizado', score: 3 },
            { text: 'Entre 1 y 2 meses de coordinación', score: 2 },
            { text: 'Más de 3 meses de discusiones y retrasos', score: 1 },
            { text: 'No tenemos equipo para desarrollar nuevos features', score: 0 }
          ]
        },
        {
          q: '4. ¿Cuentan con especialistas de IA, UX y Seguridad disponibles de inmediato?',
          options: [
            { text: 'Sí, tenemos cobertura de todas esas áreas', score: 3 },
            { text: 'Solo desarrolladores generales que hacen de todo un poco', score: 2 },
            { text: 'Tenemos que contratar freelancers para cada necesidad', score: 1 },
            { text: 'Carecemos por completo de perfiles de vanguardia', score: 0 }
          ]
        }
      ],
      results: {
        high: { band: 'Alineación Total con Evolución', desc: 'Tienes una plataforma operando y necesitas escalar métricas de negocio. El Pilar 04 es el motor perfecto para reducir tu deuda técnica e incrementar conversiones de manera continua.' },
        medium: { band: 'Evolución Favorable', desc: 'Tu plataforma requiere estabilización y optimización. Un Squad Dedicado de BluePixel puede comenzar a generar mejoras incrementales desde el primer sprint quincenal.' },
        low: { band: 'Recomendación de Diagnóstico', desc: 'Dado que no hay métricas claras o la deuda es muy alta, te recomendamos iniciar con el Pilar 01 (Sprint Discovery) para auditar la plataforma antes de asignar un Squad completo.' }
      }
    },
    financialCallout: {
      eyebrow: 'Inteligencia de Plataforma · Metodología IMPATH™',
      title: 'Datos que se convierten en decisiones financieras.',
      exampleLabel: 'Ejemplo Real de Detección Forense',
      exampleText: 'Fricción en paso 3 del checkout → $847,000 MXN/mes perdidos estimados',
      desc: 'IMPATH™ y Mixpanel corren en paralelo, permanentemente, para que ninguna fuga de capital quede invisible. IMPATH™ analiza los flujos críticos de tu plataforma e identifica cada punto exacto donde el usuario abandona, con una estimación matemática del ingreso perdido en tiempo real. Un diagnóstico financiero que convierte comportamiento en decisiones concretas de backlog.'
    },
    cycle: {
      eyebrow: 'Cómo trabaja el squad, paso a paso',
      title: 'Un ciclo continuo que produce resultados cada trimestre.',
      desc: 'Este pilar opera como un ciclo permanente. Cada sprint detecta nueva información, prioriza las mejoras con mayor impacto financiero, ejecuta con calidad enterprise y mide el resultado en lenguaje de negocio.',
      steps: [
        { icon: '🔍', name: 'Detectar', desc: 'IMPATH™ y Mixpanel identifican fricciones y oportunidades con datos reales de comportamiento 24/7.' },
        { icon: '📊', name: 'Priorizar', desc: 'Ranking estricto por impacto financiero y esfuerzo. El UX Health Score guía las decisiones.' },
        { icon: '⚙️', name: 'Ejecutar', desc: 'Sprints quincenales de 2 semanas con entregables definidos y Squad senior BluePixel dedicado.' },
        { icon: '📈', name: 'Medir', desc: 'KPIs de negocio, métricas de conversión y UX Health Score actualizado permanentemente.' },
        { icon: '🔁', name: 'Repetir', desc: 'Cada ciclo alimenta el siguiente. El roadmap vive y se adapta con la realidad del mercado.' }
      ]
    },
    cadence: {
      eyebrow: 'Rendición de cuentas y reportes al consejo',
      title: 'Cada semana importa. Cada trimestre rinde cuentas.',
      subtitle: 'Una cadencia estructurada donde cada acción tiene seguimiento y cada resultado tiene un responsable técnico.',
      items: [
        { freq: 'Cada Sprint', title: 'Revisión de Avances y Entregables', desc: 'Qué se construyó, qué está en QA y qué entra al próximo sprint. Transparencia total sobre el progreso quincenal.' },
        { freq: 'Mensual', title: 'Reporte de Impacto Financiero', desc: 'Qué aprendimos de los datos, qué se ejecutó y cómo impactó las métricas de negocio. UX Health Score actualizado.' },
        { freq: 'Trimestral', title: 'Sesión Presencial de Roadmap', desc: 'Alineación estratégica con directores y líderes de negocio. Roadmap de los siguientes 3 meses definido con evidencia.' },
        { freq: 'Anual', title: 'Revisión Estratégica de Ecosistema', desc: 'Balance completo del año: evolución histórica del UX Health Score, ROI documentado y estrategia para el nuevo ciclo.' }
      ]
    },
    plans: {
      eyebrow: 'Modalidades de contratación del squad',
      title: 'Elige el horizonte de tu Squad dedicado.',
      subtitle: 'Todos los planes incluyen IMPATH™, Mixpanel, UX Health Score continuo y equipo senior multidisciplinario dedicado.',
      items: [
        {
          name: 'CORE 6M',
          horizon: '6 Meses',
          featured: false,
          desc: 'Para plataformas que necesitan estabilizarse, reducir deuda técnica acumulada y ganar tracción comercial rápida.',
          features: [
            'Diagnóstico inicial completo de fricción',
            'Roadmap vivo priorizado a 6 meses',
            'Sprints quincenales de ejecución continua',
            'Reportes mensuales de impacto y CRO',
            'Monitoreo IMPATH™ + Mixpanel 24/7',
            'UX Health Score baseline y seguimiento'
          ],
          cta: 'Elegir Plan CORE 6M'
        },
        {
          name: 'CORE 12M',
          horizon: '12 Meses',
          featured: true,
          badge: 'Recomendado para Escalar',
          desc: 'Para plataformas listas para crecer de manera sostenida con acompañamiento directivo y benchmarking competitivo.',
          features: [
            'Todo lo incluido en CORE 6M',
            'Sesiones presenciales trimestrales de roadmap',
            'UX Health Score anual vs. benchmark de industria',
            'Auditoría continua de seguridad y OWASP',
            'Acceso y evolución del Design System en Figma',
            'Revisión estratégica anual de ecosistema y ROI'
          ],
          cta: 'Elegir Plan CORE 12M'
        },
        {
          name: 'ECOSYSTEM',
          horizon: '24 Meses',
          featured: false,
          desc: 'Para corporativos con múltiples activos digitales que requieren gobernanza técnica centralizada y evolución a escala.',
          features: [
            'Todo lo incluido en CORE 12M',
            'Cobertura multi-producto (hasta 3 plataformas)',
            'Gobernanza centralizada de arquitectura y roadmap',
            'Squad extendido dedicado de alta disponibilidad',
            'Estrategia de IA y agentes transversal',
            'Alineación con OKRs directivos y comités ejecutivos'
          ],
          cta: 'Conocer Plan ECOSYSTEM'
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Continuos',
      title: 'Valor tangible entregado en cada ciclo quincenal.',
      items: [
        { num: '01', title: 'Sprints Quincenales de Entrega', desc: 'Releases funcionales continuos con nuevos features probados y listos para producción.' },
        { num: '02', title: 'Reporte Mensual de UX Health Score & CRO', desc: 'Análisis de telemetría con métricas de adopción, retención y mejoras de conversión.' },
        { num: '03', title: 'Refactorización y Reducción de Deuda', desc: 'Limpieza proactiva de código, actualización de librerías y optimización de base de datos.' },
        { num: '04', title: 'Nuevos Flujos y Agentes de IA', desc: 'Integración continua de nuevas automatizaciones y afinación de modelos sobre datos reales.' },
        { num: '05', title: 'Monitoreo de Infraestructura & Costos Cloud', desc: 'Ajuste elástico de servidores para recortar costos de hosting en AWS/GCP.' },
        { num: '06', title: 'Soporte y SLA Crítico 24/7', desc: 'Cobertura ante incidencias de producción con respuesta prioritaria inmediata.' }
      ]
    },
    timeline: {
      eyebrow: 'Cómo es un sprint de dos semanas',
      title: 'Metodología ágil en ciclos quincenales sostenidos.',
      subtitle: 'Entregas predecibles con visibilidad total para la dirección general.',
      steps: [
        { num: '01', title: 'Planning de Sprint Quincenal', desc: 'Alineación de prioridades con el Product Owner y selección del backlog de valor.', deliverables: ['Sprint Backlog Comprometido'] },
        { num: '02', title: 'Ingeniería, UX & Automatización', desc: 'Desarrollo enfocado, experimentos CRO y pruebas automatizadas de regresión.', deliverables: ['Código en Staging'] },
        { num: '03', title: 'Demo & Pase a Producción', desc: 'Demostración de software funcional al equipo directivo y despliegue a producción.', deliverables: ['Release Funcional en Producción'] },
        { num: '04', title: 'Retrospectiva & Telemetría', desc: 'Medición del impacto de los cambios con telemetría Mixpanel y ajuste del siguiente sprint.', deliverables: ['Reporte de Telemetría de Impacto'] }
      ]
    },
    faqs: [
      { q: '¿Cuál es la duración mínima del compromiso en Evolución Digital?', a: 'Trabajamos bajo esquemas de roadmap vivo de 6 o 12 meses con revisiones trimestrales de desempeño. Esto permite construir una relación estratégica profunda y generar retornos acumulativos de CRO y eficiencia operativa.' },
      { q: '¿Podemos ajustar los perfiles del Squad según la necesidad de cada trimestre?', a: 'Sí. Si un trimestre requiere mayor intensidad en desarrollo de agentes de IA y otro en rediseño de flujos de conversión de UX, re-calibramos la asignación de especialistas para maximizar el valor de tu presupuesto.' },
      { q: '¿Cómo se compara el costo de este Squad con contratar personal interno?', a: 'Un equipo interno de 4 especialistas seniors (Tech Lead, AI Engineer, Full Stack y UX Lead) representa más del doble en salarios brutos, prestaciones, reclutamiento y rotación. Con nuestro Squad obtienes talento de élite inmediato, metodologías probadas y cero pasivo laboral.' }
    ],
    caseStudy: {
      tag: 'CASO REAL B2B · ESCALA CONTINUA & CRO',
      client: 'Avianca / LifeMiles (Ecosistema Transaccional de Gran Escala)',
      title: 'Squad Continuo: +34% de conversión transaccional y -60% de deuda técnica',
      problem: 'Plataforma con millones de usuarios activos sufriendo por acumulación de deuda técnica tras años de parches, con lentitud en despliegues y caída paulatina en las tasas de conversión transaccional.',
      solution: 'Asignación de un Squad Dedicado BluePixel (Tech Lead, AI Engineer, Full Stack Senior y Especialista en CRO/UX). Monitoreo continuo de UX Health Score con telemetría Mixpanel y refactorizaciones proactivas en cada sprint quincenal.',
      result: 'Incremento del 34% en conversión en flujos clave, reducción del 60% de deuda técnica en 6 meses y despliegues continuos sin tiempo de inactividad.',
      quote: 'Tener un squad dedicado de BluePixel es como tener un equipo de Silicon Valley integrado a nuestro negocio sin el costo de inflar la nómina.',
      author: 'Director de Producto & Canales Digitales',
      metrics: [
        { value: '+34%', label: 'Aumento medible en conversión transaccional (CRO)' },
        { value: '-60%', label: 'Reducción sistemática de deuda técnica en 6 meses' },
        { value: 'SLA 99.9%', label: 'Monitoreo proactivo con respuesta en minutos' }
      ]
    },
    bridge: {
      eyebrow: 'Punto de Entrada Previo',
      title: '¿Tu plataforma aún no existe?',
      desc: 'Este pilar es para plataformas que ya están en producción. Si necesitas diseñar y construir desde cero con validación de usuarios e IA integrada en 2 a 4 meses, el Pilar 03 (Plataformas Digitales) es tu camino.',
      ctaText: 'Conocer Pilar 03: Plataformas Digitales',
      ctaRoute: 'pilares/plataformas-digitales'
    }
  }
};
