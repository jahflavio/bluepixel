export const servicesData = {
  'ux-ui': {
    id: 'ux-ui',
    eyebrow: 'Capability · UX/UI Design & Product Strategy',
    title: 'Interfaces que reducen fricción y multiplican conversión.',
    subtitle: 'Arquitectura de información y diseño de interfaces (UI) a nivel enterprise. Cero fricción cognitiva para que tus usuarios adopten tus plataformas desde el día uno.',
    callout1: 'Un diseño bonito no es suficiente en B2B. En BluePixel entendemos que cada píxel debe estar justificado por una métrica de negocio. Nuestro enfoque se basa en reducir la fricción cognitiva: menos clics, menor carga mental y mayor claridad en cada flujo crítico, ya sea un checkout de e-commerce o un panel de control financiero.',
    painPoints: {
      eyebrow: '01 — El problema del diseño genérico',
      title: 'Tu plataforma es robusta, pero nadie quiere usarla.',
      items: [
        { title: 'Baja adopción de usuarios', desc: 'Invertiste millones en un sistema que tu equipo o tus clientes evitan usar porque es confuso o anticuado.' },
        { title: 'Fricción en flujos críticos', desc: 'Tus tasas de conversión caen en el momento del pago o registro porque el usuario no sabe qué hacer a continuación.' },
        { title: 'Deuda técnica de diseño', desc: 'El producto creció parchando pantallas, sin un sistema de diseño estructurado, volviéndolo imposible de escalar.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Nuestro enfoque',
      title: 'De pantallas estáticas a experiencias vivas.',
      subtitle: 'La evolución del diseño de productos digitales no se trata de colores, se trata de sistemas y comportamiento humano.',
      headers: ['Nivel', 'Diseño Básico', 'Diseño Centrado en el Usuario', 'Diseño Enterprise', 'Métrica Impactada'],
      rows: [
        { label: 'Sistemas Internos', cols: ['Pantallas funcionales pero feas', 'Flujos claros y usables', 'Design System escalable y adopción total', 'Tiempo de on-boarding: -70%'] },
        { label: 'E-commerce', cols: ['Catálogo estándar', 'Checkout optimizado', 'Arquitectura transaccional sin fricción', 'Abandono de carrito: -40%'] },
        { label: 'Apps Móviles', cols: ['App informativa', 'App transaccional', 'Ecosistema de lealtad y retención', 'Retención mensual: +50%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Cómo lo resolvemos',
      title: 'Ingeniería de comportamiento y sistemas escalables.',
      subtitle: 'Diseñamos productos digitales que resuelven problemas reales a través de arquitectura de información rigurosa.',
      items: [
        { title: 'Design Systems (Sistemas de Diseño)', desc: 'Construimos librerías de componentes reutilizables que permiten a tu equipo de desarrollo escalar el producto 10x más rápido sin romper la consistencia visual.' },
        { title: 'Auditoría Heurística y Fricción', desc: 'Analizamos tus interfaces actuales con metodología científica para detectar cuellos de botella cognitivos y resolverlos con diseño puro.' },
        { title: 'Prototipado de Alta Fidelidad', desc: 'Antes de tirar una sola línea de código, probamos prototipos interactivos con usuarios reales para validar la hipótesis de negocio.' }
      ]
    },
    quiz: {
      title: '¿Tu producto digital necesita un rediseño de grado corporativo?',
      subtitle: 'Responde 4 preguntas rápidas para diagnosticar la salud de tu UX.',
      questions: [
        {
          q: '1. ¿Qué pasa cuando tu equipo de desarrollo necesita agregar una nueva pantalla?',
          options: [
            { text: 'Usamos nuestro Design System documentado', score: 3 },
            { text: 'Copiamos componentes de otras pantallas', score: 2 },
            { text: 'Cada diseñador hace algo nuevo', score: 1 },
            { text: 'No tenemos un estándar claro', score: 0 }
          ]
        },
        {
          q: '2. ¿Cómo validan si un nuevo feature será utilizado por los usuarios?',
          options: [
            { text: 'Prototipamos y testeamos con usuarios', score: 3 },
            { text: 'Hacemos encuestas preliminares', score: 2 },
            { text: 'Nos basamos en lo que pide dirección', score: 1 },
            { text: 'Lanzamos y vemos qué pasa', score: 0 }
          ]
        },
        {
          q: '3. ¿Tienen métricas claras sobre dónde los usuarios abandonan el flujo principal?',
          options: [
            { text: 'Sí, mapeado con Analytics en tiempo real', score: 3 },
            { text: 'Tenemos una idea general', score: 2 },
            { text: 'Nos enteramos por quejas de soporte', score: 1 },
            { text: 'No medimos eso actualmente', score: 0 }
          ]
        },
        {
          q: '4. ¿Cómo describirías la curva de aprendizaje de tu plataforma principal?',
          options: [
            { text: 'Intuitiva, cero fricción', score: 3 },
            { text: 'Requiere manuales cortos', score: 2 },
            { text: 'Requiere capacitación formal', score: 1 },
            { text: 'Muy frustrante para nuevos usuarios', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Estándar de Calidad UX',
      title: 'Entregables que los desarrolladores aman.',
      items: [
        { num: '01', title: 'Design System Centralizado', desc: 'Tokens, componentes y guías en Figma, listos para exportar a código.' },
        { num: '02', title: 'Flujos de Usuario (User Journeys)', desc: 'Mapeo detallado de cada pantalla y caso de uso alterno (edge cases).' },
        { num: '03', title: 'Prototipos Interactivos', desc: 'Simulaciones clickeables que se sienten como el producto final.' },
        { num: '04', title: 'Auditoría Heurística', desc: 'Reporte de fricciones actuales y plan de remediación priorizado.' },
        { num: '05', title: 'Handoff de Desarrollo', desc: 'Documentación técnica perfecta para que el equipo de software construya rápido.' },
        { num: '06', title: 'UX Health Score', desc: 'Métrica base para comparar la mejora de adopción post-lanzamiento.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Cómo Trabajamos',
      title: 'Metodología rigurosa, de la investigación al pixel perfecto.',
      subtitle: 'Nuestro proceso está optimizado para descubrir el problema real antes de diseñar soluciones.',
      steps: [
        { num: '01', title: 'Discovery & UX Audit', desc: 'Analizamos el estado actual, el modelo de negocio y las métricas de abandono.', deliverables: ['Reporte de fricción', 'UX Health Score actual'] },
        { num: '02', title: 'Arquitectura y Wireframes', desc: 'Estructuramos la información y creamos esqueletos de baja fidelidad para validar la lógica.', deliverables: ['Sitemap', 'Wireframes funcionales'] },
        { num: '03', title: 'Visual Design & UI', desc: 'Aplicamos el branding, creamos el sistema de diseño y diseñamos las pantallas finales.', deliverables: ['Design System', 'Pantallas UI en alta fidelidad'] },
        { num: '04', title: 'Prototipado y Handoff', desc: 'Conectamos las pantallas en un flujo interactivo y lo entregamos al equipo de desarrollo.', deliverables: ['Prototipo navegable', 'Sesión de Handoff técnico'] }
      ]
    },
    faqs: [
      { q: '¿Ustedes desarrollan el código también?', a: 'Podemos hacerlo. Nuestra área de AI Engineering y Apps puede construir el producto completo con React/Node.js, o podemos entregar el diseño a tu equipo interno.' },
      { q: '¿Trabajan sobre plataformas ya existentes?', a: 'Sí, la mayoría de nuestros proyectos corporativos involucran modernizar y reducir la fricción de sistemas legados o plataformas que ya están en producción.' },
      { q: '¿Cuánto tarda un proceso de rediseño completo?', a: 'Depende de la complejidad, pero típicamente un Discovery toma 2 semanas, y el rediseño de flujos críticos toma entre 4 y 6 semanas adicionales.' }
    ]
  },
  'ai-agents': {
    id: 'ai-agents',
    eyebrow: 'Capability · Agentes IA & Automatización',
    title: 'Agentes de IA integrados en la arquitectura de tu operación.',
    subtitle: 'Procesos agentizados que liberan la capacidad de tu equipo, conectados a datos reales de tu negocio desde el primer sprint.',
    callout1: 'Agentes IA & Automatización es la capability de BluePixel para integrar agentes de inteligencia artificial desde el diseño de la arquitectura de tu plataforma. Los agentes operan sobre datos reales de producción desde el sprint 1, ejecutando tareas de forma autónoma y optimizando procesos en tiempo real. El principio es simple: la IA multiplica la capacidad de las personas que ya tienes, construyendo capacidad interna real.',
    painPoints: {
      eyebrow: '01 — Dónde se estanca la automatización',
      title: 'La IA se aprueba en el consejo. Rara vez llega a producción.',
      items: [
        { title: 'Aprobación sin ejecución técnica', desc: 'La dirección aprueba "hacer algo con IA", pero nadie traduce esa aprobación en agentes que realmente operen sobre la operación diaria.' },
        { title: 'Automatización superficial', desc: 'Se automatiza lo fácil y visible, mientras el proceso que de verdad cuesta caro sigue dependiendo de personas y hojas de cálculo.' },
        { title: 'Pilotos que no escalan', desc: 'Existe un prototipo o demo de agente que funcionó en la presentación, pero nunca se conectó a los datos y sistemas reales.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Nuestro enfoque',
      title: 'De tarea automatizada a operación agentizada.',
      subtitle: 'La madurez de automatización avanza en etapas: cada negocio parte de reglas fijas y llega a agentes que deciden y actúan por sí mismos.',
      headers: ['Nivel', 'Automatización', 'IA Asistida', 'Agentic (Autónoma)', 'Métrica Impactada'],
      rows: [
        { label: 'Atención a clientes', cols: ['Respuestas con reglas fijas a FAQs', 'Humano usa IA para redactar', 'El agente resuelve flujos completos y cruza sistemas', 'Tiempo de resolución: -80%'] },
        { label: 'Conciliación', cols: ['Extracción de datos a Excel', 'IA sugiere, humano aprueba', 'Agente investiga anomalías en ERP y resuelve', 'Horas manuales: -70%'] },
        { label: 'Onboarding', cols: ['Checklists y recordatorios automáticos', 'IA prellena formularios', 'Agente valida documentos y coordina CRM/ERP', 'Tiempo de alta: -60%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Dónde aplicamos agentes',
      title: 'Agentización que opera procesos completos de tu negocio.',
      subtitle: 'Cada agente se conecta a datos reales de tu operación, ya sea de cara al cliente o en procesos internos.',
      items: [
        { title: 'Agentes Operativos', desc: 'Desde atención a clientes hasta back-office interno (finanzas, RH): flujos que se ejecutan, monitorean y escalan por sí solos, en cualquier horario.' },
        { title: 'Integraciones Inteligentes', desc: 'Salesforce, HubSpot, SAP y Zendesk conectados en un solo flujo de datos, para que cada sistema alimente al resto en tiempo real.' },
        { title: 'Optimización en Tiempo Real', desc: 'Agentes que identifican fricciones y anomalías apenas ocurren, y actúan antes de que el usuario o el equipo las note.' }
      ]
    },
    quiz: {
      title: '¿Qué tan lista está tu operación para agentes en producción?',
      subtitle: '4 preguntas, resultado inmediato. Una primera lectura antes de tu diagnóstico.',
      questions: [
        {
          q: '1. ¿Qué tan estandarizados están los procesos que quieres automatizar?',
          options: [
            { text: 'Documentados, con reglas claras', score: 3 },
            { text: 'Parcialmente documentados', score: 2 },
            { text: 'Dependen del criterio personal', score: 1 },
            { text: 'No los hemos mapeado', score: 0 }
          ]
        },
        {
          q: '2. ¿Tus sistemas (CRM, ERP, pagos) están conectados entre sí?',
          options: [
            { text: 'Sí, con APIs en tiempo real', score: 3 },
            { text: 'Parcialmente, manual', score: 2 },
            { text: 'Cada sistema opera aislado', score: 1 },
            { text: 'No lo sé con certeza', score: 0 }
          ]
        },
        {
          q: '3. ¿Han probado antes IA o automatización en tu operación?',
          options: [
            { text: 'Sí, ya operando en producción', score: 3 },
            { text: 'Sí, como piloto que no escaló', score: 2 },
            { text: 'Solo pruebas exploratorias', score: 1 },
            { text: 'Nunca', score: 0 }
          ]
        },
        {
          q: '4. ¿Pueden medir hoy cuánto tiempo o dinero pierden en ese proceso?',
          options: [
            { text: 'Sí, con datos concretos', score: 3 },
            { text: 'Estimación aproximada', score: 2 },
            { text: 'Solo percepción cualitativa', score: 1 },
            { text: 'No lo hemos medido', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Estándar de automatización',
      title: 'Agentes que operan, aprenden y mejoran con cada ciclo.',
      items: [
        { num: '01', title: 'Arquitectura AI-ready', desc: 'Infraestructura diseñada desde el día uno para que la IA escale.' },
        { num: '02', title: 'Datos de producción reales', desc: 'Los agentes operan sobre comportamiento real y datos conectados a tu ERP/CRM.' },
        { num: '03', title: 'Detección proactiva', desc: 'Identifica fricciones en tiempo real y actúa de inmediato.' },
        { num: '04', title: 'Capacidad interna multiplicada', desc: 'Tu equipo de delegar carga operativa con total transparencia.' },
        { num: '05', title: 'Trazabilidad y Auditoría', desc: 'Cada decisión del agente queda registrada y es 100% auditable por humanos.' },
        { num: '06', title: 'Métricas de Negocio', desc: 'Impacto medido en horas liberadas, costo evitado o conversión lograda.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Cómo trabajamos',
      title: 'De diagnóstico a agente en producción, en ciclos cortos.',
      subtitle: 'Cada proyecto avanza en 4 etapas, con un entregable concreto y tiempo estimado.',
      steps: [
        { num: '01', title: 'Diagnóstico de automatización', desc: 'Mapeo de procesos, datos y sistemas candidatos a agentizar.', deliverables: ['Reporte de oportunidades priorizadas'] },
        { num: '02', title: 'Diseño del agente', desc: 'Definición de reglas, integraciones y capa de conocimiento (RAG).', deliverables: ['Especificación técnica y de negocio'] },
        { num: '03', title: 'Construcción e integración', desc: 'Desarrollo del agente conectado a tu stack real.', deliverables: ['Agente funcional en ambiente controlado'] },
        { num: '04', title: 'Producción y monitoreo', desc: 'Lanzamiento, monitoreo continuo y ajustes sobre datos en vivo.', deliverables: ['Dashboard de resultados operativos'] }
      ]
    },
    faqs: [
      { q: '¿Qué incluye exactamente Agentes IA & Automatización?', a: 'Incluye diagnóstico de procesos automatizables, diseño de agentes operativos, integración a tu stack actual (CRM, ERP, pagos), y monitoreo de resultado en producción.' },
      { q: '¿En qué se diferencia de comprar un bot prefabricado?', a: 'Un bot prefabricado automatiza flujos rígidos y aislados. Nosotros diseñamos agentes autónomos que razonan sobre tus bases de datos privadas (RAG), se integran a tu core transaccional y escalan con reglas corporativas de seguridad (SOC2).' },
      { q: '¿Los agentes reemplazarán a mi equipo?', a: 'No. El objetivo de la automatización empresarial es liberar a los humanos del trabajo repetitivo para que puedan enfocarse en el análisis estratégico, las negociaciones complejas y la toma de decisiones que requieren juicio humano.' }
    ]
  },
  'ai-engineering': {
    id: 'ai-engineering',
    eyebrow: 'Capability · Arquitectura Cloud & AI Engineering',
    title: 'Infraestructura tecnológica que soporta el futuro de tu negocio.',
    subtitle: 'Diseñamos y construimos plataformas cloud-native listas para integraciones de IA. Escalabilidad técnica, baja latencia y soberanía de datos.',
    callout1: 'Una aplicación moderna no puede depender de bases de datos monolíticas y servidores frágiles. En BluePixel empleamos metodologías de Arquitectura Cloud-Native (AWS, GCP, Azure), microservicios y protocolos MCP (Model Context Protocol). Preparamos tu capa de datos para que los modelos de lenguaje (LLMs) puedan consumirlos de forma segura y veloz.',
    painPoints: {
      eyebrow: '01 — Los retos de la infraestructura moderna',
      title: 'El software legado está frenando tu capacidad de innovar.',
      items: [
        { title: 'Deuda técnica inmanejable', desc: 'Tu código actual es un monolito frágil; agregar una nueva función rompe tres partes del sistema.' },
        { title: 'Incompatibilidad con IA', desc: 'Quieres implementar agentes o machine learning, pero tus datos están atrapados en silos o bases de datos no estructuradas para IA.' },
        { title: 'Costos de nube fuera de control', desc: 'Estás pagando fortunas en infraestructura cloud mal configurada que no escala de manera inteligente.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Evolución Tecnológica',
      title: 'De servidores locales a ecosistemas impulsados por IA.',
      subtitle: 'La madurez arquitectónica dicta la velocidad a la que puedes lanzar nuevos productos.',
      headers: ['Nivel', 'Arquitectura Legada', 'Cloud-Native', 'AI-Ready Enterprise', 'Impacto Operativo'],
      rows: [
        { label: 'Estructura', cols: ['Monolito en On-Premise', 'Microservicios Cloud', 'Arquitectura Event-Driven (MCP)', 'Velocidad de despliegue: 10x'] },
        { label: 'Manejo de Datos', cols: ['Bases Relacionales Rígidas', 'Data Lakes & APIs', 'Bases Vectoriales para RAG/LLMs', 'Tiempo de acceso a insights: Segundos'] },
        { label: 'Escalabilidad', cols: ['Manual (comprar servidores)', 'Auto-scaling básico', 'Computación distribuida y Serverless', 'Uptime: 99.999%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Capacidades Core',
      title: 'Ingeniería profunda para problemas corporativos.',
      subtitle: 'No solo escribimos código; diseñamos la máquina completa.',
      items: [
        { title: 'Desarrollo Full-Stack (Moderno)', desc: 'Construimos con React, Node.js, Python, y Go. Aplicaciones robustas, seguras y de alto rendimiento transaccional.' },
        { title: 'Integraciones MCP y APIs', desc: 'Creamos capas de conexión estandarizadas para que los modelos de Inteligencia Artificial puedan interactuar con tus datos privados de forma segura.' },
        { title: 'Cloud Architecture & DevOps', desc: 'Diseñamos despliegues automatizados (CI/CD) sobre AWS o Google Cloud, asegurando zero-downtime y auto-escalabilidad.' }
      ]
    },
    quiz: {
      title: '¿Está tu infraestructura lista para la era de la IA?',
      subtitle: 'Diagnostica la salud de tu arquitectura técnica en 4 pasos.',
      questions: [
        {
          q: '1. ¿Cuánto tardan en hacer un despliegue a producción de nuevas funcionalidades?',
          options: [
            { text: 'Minutos (CI/CD automatizado)', score: 3 },
            { text: 'Horas o días (Requiere coordinación)', score: 2 },
            { text: 'Semanas (Ventanas de mantenimiento)', score: 1 },
            { text: 'Meses (Sistemas legacy críticos)', score: 0 }
          ]
        },
        {
          q: '2. Si el tráfico se multiplica por 10x repentinamente, ¿qué pasa con tu plataforma?',
          options: [
            { text: 'Se auto-escala sin intervención', score: 3 },
            { text: 'Sobrevive pero se vuelve muy lenta', score: 2 },
            { text: 'Requiere levantar servidores manualmente', score: 1 },
            { text: 'Se cae (Downtime inevitable)', score: 0 }
          ]
        },
        {
          q: '3. ¿Tus bases de datos están listas para alimentar modelos de IA o agentes?',
          options: [
            { text: 'Sí, estructuradas con APIs y vectores', score: 3 },
            { text: 'Tenemos Data Lakes listos', score: 2 },
            { text: 'Datos aislados en silos y ERPs', score: 1 },
            { text: 'Información fragmentada en excels', score: 0 }
          ]
        },
        {
          q: '4. ¿Cómo manejan la seguridad y control de accesos a nivel infraestructura?',
          options: [
            { text: 'Zero Trust y políticas IAM estrictas', score: 3 },
            { text: 'Roles básicos de base de datos', score: 2 },
            { text: 'Seguridad perimetral tradicional', score: 1 },
            { text: 'Credenciales compartidas o hardcodeadas', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Técnicos',
      title: 'Transparencia total sobre tu IP tecnológico.',
      items: [
        { num: '01', title: 'Repositorios de Código Limpio', desc: 'Propiedad intelectual 100% tuya, con altos estándares de Clean Code.' },
        { num: '02', title: 'Documentación de Arquitectura', desc: 'Diagramas de red, flujos de datos y manuales operativos.' },
        { num: '03', title: 'Pipelines CI/CD', desc: 'Sistemas automatizados de prueba y despliegue configurados en tu entorno.' },
        { num: '04', title: 'Infraestructura como Código', desc: 'Scripts de Terraform/Pulumi para levantar entornos instantáneamente.' },
        { num: '05', title: 'APIs Seguras (Swagger/OpenAPI)', desc: 'Endpoints completamente documentados para conexión con terceros o agentes IA.' },
        { num: '06', title: 'Monitoreo y Alertas', desc: 'Dashboards en Datadog o Grafana para visibilidad técnica en tiempo real.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Flujo de Trabajo Técnico',
      title: 'Sprints ágiles, entregas continuas.',
      subtitle: 'Trabajamos como una extensión nativa de tu departamento de tecnología.',
      steps: [
        { num: '01', title: 'Architecture Assessment', desc: 'Revisamos tu deuda técnica, stack actual y cuellos de botella.', deliverables: ['Reporte de vulnerabilidades', 'Roadmap arquitectónico'] },
        { num: '02', title: 'System Design', desc: 'Diseñamos la topología cloud, esquemas de bases de datos y contratos de APIs.', deliverables: ['Documento de Diseño Técnico (TDD)'] },
        { num: '03', title: 'Desarrollo en Sprints', desc: 'Construcción iterativa. Entregamos módulos funcionales cada 2 semanas.', deliverables: ['Código en Staging', 'Tests automatizados'] },
        { num: '04', title: 'Go-Live & DevOps', desc: 'Despliegue a producción, monitoreo y paso a la fase de mantenimiento evolutivo.', deliverables: ['Plataforma estable', 'Alertas activas'] }
      ]
    },
    faqs: [
      { q: '¿De quién es la propiedad intelectual del código?', a: 'Tuya, al 100%. Al finalizar el proyecto o sprint, todo el código fuente, la infraestructura y los repositorios son transferidos completamente a la propiedad del cliente.' },
      { q: '¿Trabajan junto a nuestro equipo interno de tecnología?', a: 'Absolutamente. Operamos como células ágiles de aumento de staff (Staff Augmentation) o como squads completamente autónomos. Nos adaptamos a los rituales de ingeniería de tu CTO.' },
      { q: '¿Qué nubes (Cloud) soportan?', a: 'Somos expertos en Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure. Seleccionamos el entorno según tus licencias y preferencias corporativas.' }
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    eyebrow: 'Capability · Data & Analytics',
    title: 'De datos dispersos a inteligencia directiva accionable.',
    subtitle: 'Centralizamos, limpiamos y estructuramos grandes volúmenes de información corporativa para habilitar dashboards predictivos y capas de Machine Learning.',
    callout1: 'Los datos son inútiles si no puedes confiar en ellos o no son accesibles a tiempo. Implementamos pipelines robustos (ETL/ELT) y arquitecturas Modern Data Stack (Snowflake, BigQuery, dbt) para garantizar que los tomadores de decisiones vean una sola versión de la verdad, en tiempo real, habilitando analítica avanzada.',
    painPoints: {
      eyebrow: '01 — El caos de los datos corporativos',
      title: 'Mucha información, ninguna respuesta clara.',
      items: [
        { title: 'Silos de información', desc: 'Ventas mira Salesforce, finanzas el ERP, marketing otra plataforma; los números nunca cuadran a fin de mes.' },
        { title: 'Reportes manuales en Excel', desc: 'Tu equipo pasa 40 horas al mes descargando, cruzando y actualizando tablas estáticas propensas a error humano.' },
        { title: 'Incapacidad predictiva', desc: 'Solo ves lo que ya pasó (visión retrovisor), pero no tienes modelos que prevean la demanda, fuga de clientes o fraude.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Madurez de los Datos',
      title: 'Ascendiendo en la pirámide analítica.',
      subtitle: 'Antes de predecir el futuro, necesitas consolidar y confiar en el pasado.',
      headers: ['Nivel', 'Descriptiva (Qué pasó)', 'Diagnóstica (Por qué)', 'Predictiva & Prescriptiva', 'Impacto en Negocio'],
      rows: [
        { label: 'Estructura', cols: ['Reportes en Excel/CSV', 'Data Warehouse / BI', 'Machine Learning & AI', 'Decisiones Basadas en Datos'] },
        { label: 'Tiempo de respuesta', cols: ['Días o Semanas', 'Horas', 'Tiempo Real', 'Reacción ante el mercado'] },
        { label: 'Operación', cols: ['Extracción manual', 'Pipelines automatizados (ETL)', 'Modelos que recomiendan acciones', 'Eficiencia Directiva: +300%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Capacidades Analíticas',
      title: 'Infraestructura de datos para corporativos.',
      subtitle: 'Construimos el puente entre los fierros técnicos y los KPIs de negocio.',
      items: [
        { title: 'Data Warehousing & Pipelines', desc: 'Diseñamos Data Lakes y bodegas de datos centralizadas conectando todas tus APIs y sistemas legados de manera automatizada.' },
        { title: 'Business Intelligence (Dashboards)', desc: 'Visualizaciones potentes en Tableau, PowerBI o Looker. Interfaces limpias para que los ejecutivos entiendan el estado del negocio al instante.' },
        { title: 'Modelos Predictivos (Machine Learning)', desc: 'Desarrollamos algoritmos para anticipar el comportamiento del usuario, optimizar cadenas de suministro y detectar anomalías financieras.' }
      ]
    },
    quiz: {
      title: '¿Qué tan madura es tu infraestructura de datos?',
      subtitle: 'Evalúa tu capacidad de tomar decisiones basadas en datos.',
      questions: [
        {
          q: '1. Cuando el Directorio pide un reporte cruzado de finanzas y ventas, ¿cuánto tardan en generarlo?',
          options: [
            { text: 'Minutos (El dashboard está en vivo)', score: 3 },
            { text: 'Horas (Alguien tiene que actualizarlo)', score: 2 },
            { text: 'Días (Cruzar Excels a mano)', score: 1 },
            { text: 'Es imposible conciliar esos datos', score: 0 }
          ]
        },
        {
          q: '2. ¿Dónde reside actualmente la mayor parte de los datos históricos de tu empresa?',
          options: [
            { text: 'Data Warehouse Cloud (Ej. Snowflake)', score: 3 },
            { text: 'Bases de datos transaccionales (SQL)', score: 2 },
            { text: 'Sistemas aislados (ERPs, CRMs)', score: 1 },
            { text: 'Hojas de cálculo descentralizadas', score: 0 }
          ]
        },
        {
          q: '3. ¿Confías al 100% en la precisión de los KPIs que revisas diariamente?',
          options: [
            { text: 'Totalmente, tenemos gobernanza y Data Quality', score: 3 },
            { text: 'Generalmente sí, con pequeñas diferencias', score: 2 },
            { text: 'Hay discrepancias constantes entre áreas', score: 1 },
            { text: 'No, siempre dudamos de los números', score: 0 }
          ]
        },
        {
          q: '4. ¿Tu empresa usa modelos matemáticos o IA para predecir escenarios (Ej. ventas futuras, fuga de clientes)?',
          options: [
            { text: 'Sí, modelos de ML en producción', score: 3 },
            { text: 'Hacemos proyecciones estadísticas básicas', score: 2 },
            { text: 'Tratamos de adivinar por tendencia visual', score: 1 },
            { text: 'Cero predicción, pura reacción', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Analíticos',
      title: 'Activos de datos listos para consumo directivo.',
      items: [
        { num: '01', title: 'Diccionario de Datos', desc: 'Estandarización de definiciones para que toda la empresa hable el mismo idioma.' },
        { num: '02', title: 'Data Pipelines', desc: 'Procesos de extracción, transformación y carga (ETL) automatizados.' },
        { num: '03', title: 'Data Warehouse Arquitectura', desc: 'Repositorio centralizado en la nube (BigQuery, Snowflake, Redshift).' },
        { num: '04', title: 'Dashboards Ejecutivos', desc: 'Paneles visuales conectados en tiempo real, diseñados con estándares de UX de lectura de datos.' },
        { num: '05', title: 'Modelos de ML Entrenados', desc: 'Algoritmos (Python/R) integrados a la operación para recomendaciones predictivas.' },
        { num: '06', title: 'Políticas de Gobernanza', desc: 'Reglas de acceso, privacidad (compliance) y seguridad de la información corporativa.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Flujo de Implementación Data',
      title: 'Del caos al control analítico en fases probadas.',
      subtitle: 'No reconstruimos todo de golpe. Creamos victorias tempranas y valor de negocio inmediato.',
      steps: [
        { num: '01', title: 'Data Discovery & Gobernanza', desc: 'Auditamos las fuentes, la calidad de los datos y definimos las métricas críticas.', deliverables: ['Matriz de Fuentes', 'Mapa Conceptual Analítico'] },
        { num: '02', title: 'Ingeniería de Datos (Pipelines)', desc: 'Construimos la tubería que extrae y limpia la información de los sistemas origen.', deliverables: ['Pipelines automatizados en producción'] },
        { num: '03', title: 'Data Modeling & Warehouse', desc: 'Estructuramos los datos para consultas eficientes y bajo costo computacional.', deliverables: ['Data Warehouse Activo'] },
        { num: '04', title: 'Visualización & Machine Learning', desc: 'Creamos los tableros directivos y entrenamos modelos predictivos específicos.', deliverables: ['Dashboards BI', 'Modelos Predictivos (Opcional)'] }
      ]
    },
    faqs: [
      { q: '¿Trabajan con PowerBI, Tableau o Looker?', a: 'Somos agnósticos en visualización. Podemos implementar desde cero o integrarnos a la licencia de BI que tu corporativo ya pague (PowerBI, Tableau, Looker, Quicksight).' },
      { q: '¿Nuestros datos sensibles estarán seguros?', a: 'Absolutamente. Todo se mantiene dentro del entorno Cloud de tu empresa bajo estándares estrictos de encriptación y redes privadas. Nosotros solo creamos los conductos, los datos nunca salen de tu jurisdicción.' },
      { q: '¿Cuánto tardan en unificar fuentes de datos?', a: 'Depende fuertemente de si los sistemas origen tienen APIs modernas o si son bases de datos legadas on-premise. Típicamente logramos unificar los KPIs principales (Data Mart financiero/ventas) en 4 a 8 semanas.' }
    ]
  },
  'security': {
    id: 'security',
    eyebrow: 'Capability · Security, Compliance & Reliability',
    title: 'Operaciones inquebrantables. Innovación sin riesgo corporativo.',
    subtitle: 'Auditorías, blindaje cibernético y adecuación a estándares internacionales (SOC2, ISO27001) para que puedas escalar tu plataforma e IA con confianza.',
    callout1: 'El costo de una vulneración de datos es devastador para la reputación de un corporativo. En BluePixel consideramos que la ciberseguridad y el cumplimiento (Compliance) no son opcionales, son la base habilitadora del crecimiento tecnológico. Aseguramos tus aplicaciones, APIs y arquitecturas Cloud contra ataques modernos y fugas accidentales de modelos LLMs.',
    painPoints: {
      eyebrow: '01 — Riesgos invisibles',
      title: 'El precio oculto del crecimiento rápido.',
      items: [
        { title: 'Vulnerabilidades de código', desc: 'Aplicaciones desarrolladas con urgencia que dejan puertas traseras abiertas a inyecciones SQL o ataques XSS.' },
        { title: 'Falta de Compliance (ISO/SOC2)', desc: 'Estás perdiendo grandes contratos corporativos porque no puedes demostrar que los datos de tus clientes están protegidos.' },
        { title: 'Fugas en implementaciones de IA', desc: 'El miedo a que empleados envíen datos confidenciales de la empresa a ChatGPT o que un Agente IA alucine y comparta secretos.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Postura de Seguridad',
      title: 'De la reacción al blindaje proactivo.',
      subtitle: 'La seguridad no es un software que instalas, es una cultura de ingeniería constante.',
      headers: ['Nivel', 'Reactiva (Peligro)', 'Proactiva (Estándar)', 'Resiliente (Enterprise)', 'Reducción de Riesgo'],
      rows: [
        { label: 'Aplicaciones (AppSec)', cols: ['Parches tras ser atacados', 'Escaneo de código estático (SAST)', 'Pentesting continuo y Bug Bounties', 'Vulnerabilidades críticas: -99%'] },
        { label: 'Infraestructura', cols: ['Servidores públicos sin WAF', 'Firewalls y redes privadas (VPC)', 'Arquitectura Zero-Trust y KMS', 'Superficie de ataque: Cero externa'] },
        { label: 'Cumplimiento Normativo', cols: ['Documentos informales', 'Políticas documentadas', 'Certificación SOC2 / ISO27001 aprobada', 'Nuevos negocios Enterprise: Viables'] }
      ]
    },
    specs: {
      eyebrow: '03 — Pilares de Protección',
      title: 'Seguridad en profundidad para software corporativo.',
      subtitle: 'Auditamos, remediamos y certificamos.',
      items: [
        { title: 'Ethical Hacking & Pentesting', desc: 'Simulamos ataques dirigidos por expertos (Red Teaming) para descubrir brechas en tu software antes de que los cibercriminales lo hagan.' },
        { title: 'Preparación SOC2 e ISO27001', desc: 'Alineamos tus políticas, accesos y monitoreos técnicos para que apruebes auditorías internacionales sin contratiempos.' },
        { title: 'DevSecOps & AI Security', desc: 'Insertamos escaneos de seguridad directamente en tu línea de código y filtramos (Data Loss Prevention) las consultas a modelos LLMs.' }
      ]
    },
    quiz: {
      title: 'Mide la postura de ciberseguridad de tus plataformas.',
      subtitle: '¿Sobreviviría tu infraestructura a un ataque dirigido hoy?',
      questions: [
        {
          q: '1. ¿Cuándo fue la última vez que le hicieron una prueba de penetración (Pentest) profunda a tu app?',
          options: [
            { text: 'Hace menos de 6 meses', score: 3 },
            { text: 'Hace más de 1 año', score: 2 },
            { text: 'Solo escaneos automáticos', score: 1 },
            { text: 'Nunca hemos hecho una', score: 0 }
          ]
        },
        {
          q: '2. Si un desarrollador ex-empleado intenta acceder hoy al código o servidores, ¿puede hacerlo?',
          options: [
            { text: 'Imposible, procesos de off-boarding automáticos (IAM)', score: 3 },
            { text: 'Poco probable, cambiamos contraseñas a mano', score: 2 },
            { text: 'Quizás tenga claves de acceso o APIs viejas guardadas', score: 1 },
            { text: 'Sí, las credenciales están hardcodeadas', score: 0 }
          ]
        },
        {
          q: '3. Si mañana un corporativo Fortune 500 te exige un reporte SOC2 o ISO27001 para firmar, ¿qué haces?',
          options: [
            { text: 'Se lo envío en ese momento (Ya lo tenemos)', score: 3 },
            { text: 'Tenemos controles, pero no el certificado oficial', score: 2 },
            { text: 'Empezamos a correr para tratar de cumplir', score: 1 },
            { text: 'Perdemos el contrato', score: 0 }
          ]
        },
        {
          q: '4. Respecto al uso de IA en tu empresa, ¿cómo protegen la información confidencial?',
          options: [
            { text: 'LLMs en instancias privadas y Data Loss Prevention', score: 3 },
            { text: 'Políticas firmadas de no usar datos reales', score: 2 },
            { text: 'Confiamos en el buen juicio de los empleados', score: 1 },
            { text: 'Todos usan ChatGPT con datos de clientes libremente', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Evidencia y Remedio',
      title: 'Reportes ejecutivos y parches a nivel código.',
      items: [
        { num: '01', title: 'Reporte de Pentesting', desc: 'Listado de vulnerabilidades encontradas categorizadas por criticidad (CVSS).' },
        { num: '02', title: 'Plan de Remediación (Fixes)', desc: 'No solo damos los errores; nuestro equipo de ingenieros aplica los parches de seguridad en tu código.' },
        { num: '03', title: 'Políticas de Seguridad de la Información', desc: 'Manuales y normativas requeridas por auditores corporativos.' },
        { num: '04', title: 'Mapeo de Accesos (RBAC)', desc: 'Rediseño de los roles y permisos en la nube usando el principio de mínimo privilegio.' },
        { num: '05', title: 'Guardrails para IA', desc: 'Filtros PII (Personal Identifiable Information) para enmascarar datos sensibles antes de enviarlos a LLMs.' },
        { num: '06', title: 'Alineación de Infraestructura', desc: 'Configuraciones endurecidas de firewalls, WAFs y balanceadores en AWS/GCP.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología Security',
      title: 'Auditar, Blindar, Mantener.',
      subtitle: 'La seguridad ágil no retrasa tus lanzamientos, los hace confiables.',
      steps: [
        { num: '01', title: 'Assessment y Threat Modeling', desc: 'Entendemos tu arquitectura e identificamos los vectores de ataque más probables.', deliverables: ['Modelo de Amenazas'] },
        { num: '02', title: 'Pentesting y Escaneos', desc: 'Ataques éticos controlados (Caja blanca, gris o negra) contra tu aplicación y APIs.', deliverables: ['Reporte de Vulnerabilidades Críticas'] },
        { num: '03', title: 'Remediación Técnica', desc: 'Corregimos fallos de código, parcheamos librerías y aseguramos la red.', deliverables: ['Software Parcheado y Asegurado'] },
        { num: '04', title: 'Auditoría Final y Certificación', desc: 'Re-evaluación para garantizar mitigación y entrega de artefactos para certificadores externos.', deliverables: ['Constancia de Seguridad'] }
      ]
    },
    faqs: [
      { q: '¿Emiten ustedes el certificado SOC2 o ISO27001?', a: 'Nosotros preparamos tu tecnología, infraestructura y procesos operativos (Readiness) para cumplir con la normativa al 100%. La certificación oficial debe ser emitida por una firma auditora externa acreditada independiente, que nosotros te ayudamos a transitar con éxito.' },
      { q: '¿Qué diferencia hay entre Pentesting y escaneo automático?', a: 'Un escaneo automático usa herramientas que buscan errores conocidos, generando muchos falsos positivos. Nuestro Pentesting incluye hackers éticos humanos que encadenan lógicamente vulnerabilidades complejas para encontrar brechas que las máquinas no ven.' },
      { q: '¿El pentesting causará que se caiga mi plataforma?', a: 'No. Nuestros ejercicios de caja gris/blanca se realizan primordialmente en entornos de Staging (réplicas exactas de producción). Las pruebas directas en producción se realizan con extremos cuidados para no alterar bases de datos ni causar denegación de servicio (DoS).' }
    ]
  },
  'business-ai': {
    id: 'business-ai',
    eyebrow: 'Capability · Business AI Consulting',
    title: 'De la visión ejecutiva al roadmap estratégico de IA.',
    subtitle: 'Asesoramiento de alto nivel para consejos directivos y C-Levels. Identificamos dónde la IA genera valor real de negocio y estructuramos el camino para adoptarla con éxito.',
    callout1: 'La Inteligencia Artificial no es un proyecto de TI, es una iniciativa estratégica del negocio. Muchas empresas fracasan comprando licencias de software sin un caso de uso claro. Nuestra consultoría actúa como el puente entre tu modelo de negocio y las capacidades tecnológicas de vanguardia, evaluando viabilidad, ROI y riesgo antes de escribir la primera línea de código.',
    painPoints: {
      eyebrow: '01 — La desorientación ejecutiva frente a la IA',
      title: 'Mucho ruido, poca claridad sobre el impacto real.',
      items: [
        { title: 'Presión del Consejo por "usar IA"', desc: 'Los accionistas exigen modernización, pero el equipo directivo no sabe por dónde empezar sin gastar a ciegas.' },
        { title: 'Miedo a quedar obsoletos', desc: 'Tus competidores están anunciando automatizaciones y sientes que la ventaja competitiva de tu empresa se erosiona.' },
        { title: 'Proyectos desalineados del negocio', desc: 'El área de innovación lanza pruebas piloto de IA divertidas pero que no resuelven ningún problema crítico del flujo de caja o costos.' }
      ]
    },
    matrix: {
      eyebrow: '02 — Madurez Estratégica AI',
      title: 'Niveles de adopción de IA en el corporativo.',
      subtitle: 'Descubre en qué etapa se encuentra tu empresa y cómo dar el siguiente paso de manera rentable.',
      headers: ['Etapa', 'Exploratoria', 'Táctica (Eficiencia)', 'Estratégica (Transformación)', 'Impacto Financiero'],
      rows: [
        { label: 'Uso de la IA', cols: ['Licencias individuales de Copilot/ChatGPT', 'Agentes automatizando procesos internos', 'Productos nativos con IA como ventaja competitiva', 'Nuevos flujos de ingresos'] },
        { label: 'Gobernanza', cols: ['Políticas inexistentes (Shadow AI)', 'Filtros y entornos privados seguros', 'Framework corporativo de IA ética y segura', 'Riesgo mitigado'] },
        { label: 'Alineación de Negocio', cols: ['Iniciativas aisladas y desconectadas', 'Casos de uso para reducir costos operativos', 'IA embebida en el core del valor al cliente', 'Multiplicador de Valoración (M&A)'] }
      ]
    },
    specs: {
      eyebrow: '03 — Cómo te asesoramos',
      title: 'Consultoría accionable, cero metodologías de humo.',
      subtitle: 'Entendemos tu estado de resultados antes de recomendarte redes neuronales.',
      items: [
        { title: 'AI Readiness Assessment', desc: 'Evaluamos tu cultura organizacional, limpieza de datos y arquitectura tecnológica para determinar si estás realmente listo para la IA.' },
        { title: 'Identificación de Casos de Uso (ROI)', desc: 'Mapeamos tu cadena de valor para encontrar los procesos donde la IA puede reducir fricción o costos de forma inmediata y medible.' },
        { title: 'Diseño de Gobernanza Corporativa', desc: 'Establecemos los comités, las políticas de seguridad y las normativas éticas para usar IA sin poner en riesgo la reputación de tu corporativo.' }
      ]
    },
    quiz: {
      title: '¿Tienes una estrategia clara de IA o solo estás siguiendo la tendencia?',
      subtitle: 'Mide la madurez de la visión de Inteligencia Artificial de tu empresa.',
      questions: [
        {
          q: '1. ¿Quién lidera las iniciativas de Inteligencia Artificial en tu empresa actualmente?',
          options: [
            { text: 'Un comité C-Level alineado con el negocio', score: 3 },
            { text: 'El área de TI / Innovación por su cuenta', score: 2 },
            { text: 'Empleados individuales de forma proactiva', score: 1 },
            { text: 'Nadie, aún no empezamos formalmente', score: 0 }
          ]
        },
        {
          q: '2. ¿Cómo deciden en qué proyecto de IA invertir tiempo y presupuesto?',
          options: [
            { text: 'Análisis estricto de ROI y viabilidad técnica', score: 3 },
            { text: 'Nos basamos en lo que suena más prometedor', score: 2 },
            { text: 'Por sugerencias aisladas de proveedores', score: 1 },
            { text: 'Actuamos reactivamente a las modas (Hype)', score: 0 }
          ]
        },
        {
          q: '3. Respecto a las políticas corporativas del uso de IA, tu empresa:',
          options: [
            { text: 'Tiene políticas estrictas, seguras y conocidas por todos', score: 3 },
            { text: 'Tiene un documento de reglas básicas (pero no se vigila)', score: 2 },
            { text: 'Están empezando a discutirlo en el área legal', score: 1 },
            { text: 'No tiene reglas, cualquiera usa herramientas públicas', score: 0 }
          ]
        },
        {
          q: '4. ¿Tus competidores directos ya están utilizando IA como ventaja en el mercado?',
          options: [
            { text: 'Sí, y nosotros estamos a la par o liderando', score: 3 },
            { text: 'Sí, y nosotros estamos tratando de alcanzarlos', score: 2 },
            { text: 'Apenas están haciendo pilotos básicos', score: 1 },
            { text: 'La industria en general aún no despierta', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Estratégicos',
      title: 'La brújula ejecutiva para la era exponencial.',
      items: [
        { num: '01', title: 'Roadmap Estratégico AI (1-3 Años)', desc: 'Plan calendarizado priorizando proyectos de IA por impacto financiero y viabilidad técnica.' },
        { num: '02', title: 'Casos de Negocio Estructurados', desc: 'Análisis de ROI financiero, costos de nube y requerimientos de talento para las iniciativas prioritarias.' },
        { num: '03', title: 'Reporte de Data Readiness', desc: 'Evaluación dura de por qué tus datos actuales sirven o no sirven para alimentar modelos.' },
        { num: '04', title: 'Framework de Gobernanza AI', desc: 'Políticas redactadas para compliance, manejo de datos privados y mitigación de sesgos algorítmicos.' },
        { num: '05', title: 'Arquitectura Objetivo HLD', desc: 'Diagramas conceptuales (High-Level Design) de cómo encajará la IA en tus sistemas actuales.' },
        { num: '06', title: 'Workshops Ejecutivos', desc: 'Sesiones de alineación para el Consejo Directivo, desmitificando la tecnología.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología Consultiva',
      title: 'Celeridad analítica para no perder momentum.',
      subtitle: 'En menos de un mes, transformamos la incertidumbre en un plan de acción concreto.',
      steps: [
        { num: '01', title: 'Alineación de C-Levels', desc: 'Workshops profundos con líderes de área para entender dolores de negocio (finanzas, ventas, operaciones).', deliverables: ['Matriz de Problemas de Negocio'] },
        { num: '02', title: 'Mapeo de Factibilidad', desc: 'Análisis rápido con el equipo de TI para entender los fierros y la calidad de datos actuales.', deliverables: ['AI Readiness Score'] },
        { num: '03', title: 'Diseño del Portafolio AI', desc: 'Ideación estructurada de soluciones de IA ponderadas por impacto económico vs esfuerzo técnico.', deliverables: ['Backlog Priorizado de Casos de Uso'] },
        { num: '04', title: 'Presentación del Roadmap', desc: 'Entrega final al Comité Ejecutivo con rutas claras: qué comprar, qué construir y qué ignorar.', deliverables: ['Roadmap Estratégico AI Oficial'] }
      ]
    },
    faqs: [
      { q: '¿Cuál es la diferencia entre Business AI Consulting y AI Engineering?', a: 'Business AI es la fase estratégica (estrategia, viabilidad, ROI y gobernanza). AI Engineering es la fase de ejecución (construir, programar e implementar). Siempre recomendamos iniciar por Business AI antes de tocar una línea de código.' },
      { q: '¿Esta consultoría recomienda soluciones de terceros o solo desarrollo a medida?', a: 'Somos tecnológicamente agnósticos. Si tu problema se resuelve mejor y más barato comprando licencias de Microsoft Copilot o un SaaS de IA especializado, esa será nuestra recomendación. Si requieres mantener la propiedad intelectual o ventajas competitivas únicas, recomendaremos construir con AI Engineering.' },
      { q: '¿Quiénes de nuestra empresa deben participar en el proceso?', a: 'Idealmente los directores de línea de negocio (Ventas, Operaciones, Finanzas) para definir el "Qué", y los líderes tecnológicos (CIO, CTO) para evaluar el "Cómo".' }
    ]
  }
};
