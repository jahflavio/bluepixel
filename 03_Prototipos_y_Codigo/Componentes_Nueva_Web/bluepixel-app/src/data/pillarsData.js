export const pillarsData = {
  'consultoria-digital': {
    id: 'consultoria-digital',
    num: '01',
    name: 'Consultoría Digital',
    badgeText: 'FASE 01 · 2 A 4 SEMANAS',
    duration: '2 a 4 Semanas',
    targetAudience: 'Para empresas que necesitan diagnóstico, backlog priorizado y cálculo de ROI antes de invertir',
    eyebrow: 'Pilar 01 · Certidumbre Técnica y Financiera Previa',
    title: 'Claridad estratégica y ROI cuantificado antes de escribir código.',
    subtitle: 'El 85% de los proyectos de software fracasan porque empiezan programando sin entender el problema real. En 2 a 4 semanas auditamos tu deuda técnica, cuantificamos el costo de inacción y estructuramos un business case defendible ante el Consejo.',
    takeaway: 'Claridad estratégica y retorno medible antes de escribir la primera línea de código.',
    themeKey: 'blue',
    packageName: 'Pilar 01 · Consultoría Digital',
    stats: [
      { value: '14-28', label: 'Días para entregar diagnóstico, arquitectura y ROI', sublabel: 'Celeridad analítica ejecutiva' },
      { value: '100%', label: 'Certeza técnica y financiera antes de comprometer capital', sublabel: 'Cálculo del Costo de Inacción' },
      { value: '0', label: 'Líneas de código a ciegas o presupuestos desbordados', sublabel: 'Garantía FutureProof' }
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
      eyebrow: '02 — Diferenciación B2B',
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
        route: 'servicio/ux-ui'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native SOC2',
        role: 'Architecture Assessment',
        desc: 'Auditoría de código, evaluación de deuda técnica y diseño de la topología cloud escalable bajo protocolos abiertos.',
        route: 'servicio/ai-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Evaluación de Viabilidad AI',
        desc: 'Identificación de procesos repetitivos candidatos a agentización y cálculo de costos de inferencia antes de desplegar.',
        route: 'servicio/ai-agents'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Data Audit & Gobernanza',
        desc: 'Mapeo de fuentes de datos, auditoría de silos (ERP/CRM) y estandarización del diccionario de métricas de negocio.',
        route: 'servicio/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'ISO 27001 & OWASP',
        role: 'Threat Modeling & Brechas',
        desc: 'Análisis de vulnerabilidades, escaneo de dependencias y alineación de controles para SOC2 e ISO 27001.',
        route: 'servicio/security'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: '🔥 Núcleo del Pilar: Business Case',
        desc: 'Valuación del costo de inacción, roadmap ejecutivo trimestral y priorización estricta del backlog por retorno de inversión.',
        route: 'servicio/business-ai'
      }
    ],
    specs: {
      eyebrow: '03 — Metodología de Certeza Previa',
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
      ]
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
      eyebrow: '07 — Metodología en 4 Semanas',
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
    ]
  },

  'agentes-automatizacion': {
    id: 'agentes-automatizacion',
    num: '02',
    name: 'Agentes & Automatización',
    badgeText: 'FASE 02 · 2 A 4 SEMANAS',
    duration: '2 a 4 Semanas',
    targetAudience: 'Para empresas que buscan conectar agentes de IA y automatizaciones a sus sistemas actuales sin reemplazarlos',
    eyebrow: 'Pilar 02 · Inteligencia Determinística en Producción',
    title: 'Automatización inteligente sobre lo que ya tienes funcionando.',
    subtitle: 'No necesitas tirar tu ERP ni rehacer tu core transaccional. En 2 a 4 semanas desplegamos agentes autónomos y RAG privado sobre tus datos reales, conectados vía protocolo abierto MCP (SAP, Salesforce, CRM) sin alucinaciones.',
    takeaway: 'Automatización inteligente sobre lo que ya tienes funcionando.',
    themeKey: 'purple',
    packageName: 'Pilar 02 · Agentes & Automatización',
    stats: [
      { value: '2-4', label: 'Semanas para tener el primer agente autónomo operando', sublabel: 'Pase a producción real' },
      { value: '-75%', label: 'Reducción de horas manuales en flujos operativos repetitivos', sublabel: 'Capacidad de equipo multiplicada' },
      { value: '0%', label: 'Alucinaciones críticas con RAG privado y protocolos MCP', sublabel: 'Blindaje Grado Empresarial' }
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
      eyebrow: '02 — Diferenciación Tecnológica',
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
        route: 'servicio/ux-ui'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native SOC2',
        role: 'Servidores MCP & APIs',
        desc: 'Construcción de conectores determinísticos vía Model Context Protocol para interactuar de forma segura con tu ERP.',
        route: 'servicio/ai-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: '🔥 Núcleo del Pilar: Agentic RAG',
        desc: 'Orquestación de agentes autónomos, embeddings vectoriales y workflows que ejecutan tareas complejas de punta a punta.',
        route: 'servicio/ai-agents'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Telemetría de Ejecuciones',
        desc: 'Trazabilidad en tiempo real de cada decisión, llamada a herramientas y métricas de horas operativas ahorradas.',
        route: 'servicio/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'ISO 27001 & OWASP',
        role: 'Guardrails & Filtros DLP',
        desc: 'Enmascaramiento de datos personales (PII), prevención de prompt injection y despliegue en VPC privada aislada.',
        route: 'servicio/security'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Priorización por ROI Operativo',
        desc: 'Selección estricta de los flujos de trabajo donde la automatización recupera el 100% de la inversión en semanas.',
        route: 'servicio/business-ai'
      }
    ],
    specs: {
      eyebrow: '03 — Arquitectura Agéntica',
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
      ]
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
      title: 'De mapeo de proceso a agente en producción en 4 semanas.',
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
    ]
  },

  'plataformas-digitales': {
    id: 'plataformas-digitales',
    num: '03',
    name: 'Plataformas Digitales',
    badgeText: 'FASE 03 · 3 MESES A PRODUCCIÓN',
    duration: '3 Meses (90 Días a Producción)',
    targetAudience: 'Para construir plataformas y MVPs desde cero con UX validado que convierte',
    eyebrow: 'Pilar 03 · De la Concepción a Producción en 90 Días',
    title: 'De la concepción a producción en 90 días con UX validado.',
    subtitle: 'Rompimos la frontera entre diseño e ingeniería pesada. Diseñamos con psicología conductual para asegurar adopción y construimos con arquitectura Full Stack Cloud-Native (React, Node, Python) con SLA 99.9% y cero deuda técnica.',
    takeaway: 'De la concepción a producción en 90 días con validación técnica y de mercado.',
    themeKey: 'cyan',
    packageName: 'Pilar 03 · Plataformas Digitales (Build)',
    stats: [
      { value: '90 Días', label: 'De la concepción al lanzamiento oficial en producción', sublabel: 'Time-to-market agresivo' },
      { value: '99.9%', label: 'Garantía de disponibilidad y resiliencia en arquitectura cloud', sublabel: 'SLA Empresarial' },
      { value: '100%', label: 'Soberanía de código fuente y pruebas automatizadas >85%', sublabel: 'Zero Vendor Lock-In' }
    ],
    painPoints: {
      eyebrow: '01 — El desastre de los desarrollos interminables',
      title: 'Software que tarda un año y nadie adopta al lanzarse.',
      items: [
        { title: 'Ciclos de desarrollo de más de 12 meses', desc: 'Fábricas de software que alargan los cronogramas indefinidamente mientras el mercado y los competidores avanzan.' },
        { title: 'Interfaces hermosas en Figma pero rotas en código', desc: 'Agencias de diseño superficiales que entregan pantallas vistosas que los desarrolladores no pueden construir de forma escalable.' },
        { title: 'Lanzar un producto que los usuarios rechazan', desc: 'Invertir capital masivo sin haber validado la hipótesis de negocio ni la psicología de adopción con usuarios reales.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '02 — Diferenciación de Ingeniería',
      title: 'Construcción Full Stack BluePixel vs Fábricas de Software.',
      subtitle: 'Por qué nuestro modelo de 90 días entrega software de grado enterprise con alta conversión.',
      headers: ['Aspecto', 'Fábrica Tradicional ("Maquila")', 'Agencia Creativa de Diseño', 'Estándar BluePixel 90 Días'],
      rows: [
        { label: 'Tiempo a producción', cols: ['8 a 18 meses con retrasos constantes', 'Solo entregan pantallas en Figma', '90 días a producción con MVP funcional y probado'] },
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
        route: 'servicio/ux-ui'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native SOC2',
        role: '🔥 Núcleo del Pilar: Full Stack 0 a Prod',
        desc: 'Desarrollo web y móvil de alto rendimiento (React, Node.js, Python, PostgreSQL), CI/CD y microservicios resilientes.',
        route: 'servicio/ai-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Módulos Inteligentes Nativos',
        desc: 'Workflows agénticos integrados de forma nativa en el core transaccional de la app desde el primer sprint.',
        route: 'servicio/ai-agents'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Telemetría de Producto Base',
        desc: 'Configuración nativa de tracking de eventos clave y embudos de conversión con Mixpanel y Data Warehouse.',
        route: 'servicio/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'ISO 27001 & OWASP',
        role: 'Arquitectura Segura ISO/OWASP',
        desc: 'Blindaje de endpoints, cifrado KMS de datos sensibles y preparación para auditorías de cumplimiento normativo.',
        route: 'servicio/security'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Gobernanza de Entrega en 90 Días',
        desc: 'Aseguramiento estratégico de que cada feature construido resuelva con precisión la tesis comercial del negocio.',
        route: 'servicio/business-ai'
      }
    ],
    specs: {
      eyebrow: '03 — Estándar de Construcción',
      title: 'Ingeniería pesada vestida con la mejor experiencia humana.',
      subtitle: 'La combinación que asegura adopción inmediata y escalabilidad sin límites.',
      items: [
        { title: 'Product Strategy & Validación con Usuarios', desc: 'Validamos los flujos críticos con prototipos interactivos antes de programar, asegurando que los usuarios amen y adopten la plataforma.' },
        { title: 'Stack Moderno Cloud-Native', desc: 'Construimos sobre React, Node.js, Python, PostgreSQL y contenedores Docker, desplegados con infraestructura elástica en AWS, GCP o Azure.' },
        { title: 'Pruebas Automatizadas y Calidad de Código', desc: 'Cobertura de pruebas unitarias y de integración superior al 85%, con pipelines de CI/CD que garantizan despliegues continuos sin caídas.' }
      ]
    },
    quiz: {
      title: '¿Es el momento de construir tu plataforma o MVP corporativo?',
      subtitle: '4 preguntas para evaluar si tu empresa está lista para el sprint de 90 días.',
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
            { text: 'Crítica: requerimos estar en el mercado en 3 meses', score: 3 },
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
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Oficiales',
      title: 'Una plataforma productiva completa entregada en 90 días.',
      items: [
        { num: '01', title: 'Plataforma Web y/o Móvil Productiva', desc: 'Aplicación moderna de alto rendimiento desplegada en tu nube privada.' },
        { num: '02', title: 'Design System Documentado en Figma', desc: 'Librería de componentes, tokens y guías de estilo para escalar el diseño.' },
        { num: '03', title: 'Código Fuente en Repositorios Privados', desc: 'Propiedad intelectual 100% tuya con arquitectura limpia y tipado estricto.' },
        { num: '04', title: 'Pipelines CI/CD Automatizados', desc: 'Flujos de integración y despliegue continuo en entornos de Staging y Producción.' },
        { num: '05', title: 'Telemetría de Producto Mixpanel', desc: 'Tracking de eventos, embudos de conversión y analítica de comportamiento activa.' },
        { num: '06', title: 'Garantía de SLA 99.9% y Soporte', desc: 'Monitoreo en vivo de errores y latencia con transferencia técnica completa a tu equipo.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología de 90 Días a Producción',
      title: 'Cronograma acelerado de concepción a lanzamiento.',
      subtitle: 'Sprints quincenales con demostraciones funcionales de software en cada iteración.',
      steps: [
        { num: '01', title: 'Mes 1: Product Strategy & Diseño Validado', desc: 'Definición de arquitectura, prototipado interactivo y validación con usuarios reales.', deliverables: ['Prototipo en Figma', 'Blueprint Técnico'] },
        { num: '02', title: 'Mes 2: Desarrollo del Core Transaccional', desc: 'Programación de bases de datos, APIs, autenticación segura e interfaces principales.', deliverables: ['Módulos Core en Staging'] },
        { num: '03', title: 'Mes 3: Integraciones, QA & Hardening', desc: 'Conexión con pasarelas de pago, ERPs, pruebas automatizadas de seguridad y auditoría.', deliverables: ['Tests >85%', 'Auditoría OWASP'] },
        { num: '04', title: 'Día 90: Go-Live Oficial a Producción', desc: 'Despliegue productivo en tu VPC con balanceadores, telemetría Mixpanel y SLA 99.9% activo.', deliverables: ['Plataforma en Producción'] }
      ]
    },
    faqs: [
      { q: '¿Es realmente viable lanzar una plataforma corporativa en solo 90 días?', a: 'Sí, porque aplicamos nuestra metodología de desarrollo acelerado por IA (AI-Forward Deploy Engineering) y priorizamos con rigor de cirujano el MVP que genera tracción comercial, sin quemar tiempo en funcionalidades secundarias.' },
      { q: '¿Qué tecnologías utilizan para construir la plataforma?', a: 'Construimos con el stack más moderno y demandado del mercado empresarial: React, Next.js, React Native, Node.js, Python, TypeScript, PostgreSQL y Redis, sobre contenedores Docker orquestados en AWS, GCP o Azure.' },
      { q: '¿Qué sucede una vez que se lanza la plataforma en el día 90?', a: 'Tienes total libertad: entregamos la propiedad y documentación completa a tu equipo interno, o puedes hacer la transición sin fricciones hacia el Pilar 04 (Evolución Digital) para continuar optimizando con nuestro squad dedicado.' }
    ]
  },

  'evolucion-digital': {
    id: 'evolucion-digital',
    num: '04',
    name: 'Evolución Digital',
    badgeText: 'FASE 04 · ROADMAP VIVO 6 A 12 MESES',
    duration: 'Roadmap Vivo 6 a 12 Meses (Retainer Mensual)',
    targetAudience: 'Para evolucionar plataformas existentes con capacidades transversales, optimización continua y CRO',
    eyebrow: 'Pilar 04 · Crecimiento Sostenido sin Inflar Nómina',
    title: 'Tu equipo tecnológico extendido para proteger la inversión.',
    subtitle: 'El lanzamiento es solo el inicio. Asignamos un Squad Senior multidisciplinario dedicado (Tech Lead, AI Engineer, Full Stack, UX/CRO) que reduce deuda técnica, optimiza la conversión mes a mes y mantiene tu plataforma en la vanguardia.',
    takeaway: 'Tu equipo tecnológico extendido para proteger la inversión y sostener el crecimiento.',
    themeKey: 'indigo',
    packageName: 'Pilar 04 · Evolución Digital (Retainer)',
    stats: [
      { value: '6-12', label: 'Meses de roadmap vivo con entregas quincenales continuas', sublabel: 'Velocidad predecible' },
      { value: '+45%', label: 'Incremento promedio en tasas de conversión y retención', sublabel: 'Metodología CRO constante' },
      { value: '0', label: 'Deuda técnica acumulada gracias a refactorización proactiva', sublabel: 'SLA Empresarial 99.9%' }
    ],
    painPoints: {
      eyebrow: '01 — La muerte lenta de las plataformas estáticas',
      title: 'El software que no evoluciona se convierte en deuda en 6 meses.',
      items: [
        { title: 'Inflar la nómina con contrataciones caras y lentas', desc: 'Contratar especialistas internos de UX, IA, DevOps y seguridad cuesta fortunas en reclutamiento y genera silos improductivos.' },
        { title: 'Deuda técnica que paraliza los nuevos features', desc: 'Plataformas abandonadas tras el lanzamiento donde cada nuevo requerimiento tarda meses o rompe el código anterior.' },
        { title: 'Tasas de conversión estancadas sin optimización', desc: 'Invertir en tráfico y marketing mientras la plataforma tiene fricciones que ahuyentan a los usuarios mes tras mes.' }
      ]
    },
    comparisonMatrix: {
      eyebrow: '02 — Diferenciación Operativa',
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
        route: 'servicio/ux-ui'
      },
      {
        id: 'ai-engineering',
        name: 'Software Engineering',
        badge: 'Cloud-Native SOC2',
        role: 'Refactorización & Nuevos Módulos',
        desc: 'Despliegue continuo de nuevos microservicios, optimización de consultas de bases de datos y reducción de costos cloud.',
        route: 'servicio/ai-engineering'
      },
      {
        id: 'ai-agents',
        name: 'IA & Automatización',
        badge: 'Agentic Automation',
        role: 'Reentrenamiento & Nuevos Agentes',
        desc: 'Afinación continua de prompts, orquestación multi-agente y despliegue de automatizaciones sobre nuevos flujos operativos.',
        route: 'servicio/ai-agents'
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        badge: 'Mixpanel Telemetry',
        role: 'Dashboards Directivos & Modelos ML',
        desc: 'Tableros ejecutivos en vivo, análisis de cohortes de retención y desarrollo de modelos predictivos de comportamiento.',
        route: 'servicio/data-analytics'
      },
      {
        id: 'security',
        name: 'Security & Reliability',
        badge: 'ISO 27001 & OWASP',
        role: 'Monitoreo SLA 99.9% & Pentest',
        desc: 'Vigilancia 24/7 de infraestructura, simulaciones de ataque periódicas y actualización proactiva de parches de seguridad.',
        route: 'servicio/security'
      },
      {
        id: 'business-ai',
        name: 'Digital Consulting',
        badge: 'FutureProof™ Framework',
        role: 'Priorización Trimestral de Backlog',
        desc: 'Acompañamiento ejecutivo continuo para alinear el roadmap de producto con las metas financieras de cada trimestre.',
        route: 'servicio/business-ai'
      }
    ],
    specs: {
      eyebrow: '03 — Modelo de Evolución Continua',
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
      eyebrow: '07 — Ritmo de Trabajo Continuo',
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
    ]
  }
};
