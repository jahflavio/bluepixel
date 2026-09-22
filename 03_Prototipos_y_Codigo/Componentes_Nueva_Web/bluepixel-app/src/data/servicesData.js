export const servicesData = {
  'ux-ui': {
    id: 'ux-ui',
    themeKey: 'emerald',
    showImpath: true,
    futureproofMethodology: {
      stagnationContext: 'los productos digitales',
      stagnationSubtitle: 'Diseños hermosos pero estáticos. La metodología Futureproof los transforma en interfaces de alta conversión.',
      painPoints: [
        { title: 'El lanzamiento no valida hipótesis.', description: 'Se sale a producción asumiendo qué quiere el usuario, y el aprendizaje de UX llega tarde, cuando ya se gastó el presupuesto.' },
        { title: 'Diseño sin fricción cuantificada.', description: 'Se hacen rediseños "bonitos" que no atacan los cuellos de botella donde los usuarios reales están abandonando.' },
        { title: 'Sistemas de diseño fragmentados.', description: 'Inconsistencia visual que retrasa a los desarrolladores y rompe la experiencia de marca sprint a sprint.' },
        { title: 'La interfaz nace desactualizada.', description: 'Sin telemetría ni A/B testing continuo, el diseño se estanca el día del lanzamiento.' }
      ],
      phases: {
        design: {
          title: 'Descubrimos dónde duele',
          description: 'Auditoría heurística, mapeo de journeys y diagnóstico IMPATH para identificar dónde se cae la conversión.',
          bullets: ['Auditoría UX', 'Mapeo IMPATH', 'User Personas']
        },
        build: {
          title: 'Sistemas escalables',
          description: 'Construimos Design Systems atómicos listos para que los ingenieros los implementen sin fricción.',
          bullets: ['Atomic Design', 'Prototipos Alta Fidelidad', 'Hand-off QA']
        },
        evolve: {
          title: 'Optimización por telemetría',
          description: 'Medimos el UX Health Score y ajustamos la interfaz basados en el comportamiento real del usuario.',
          bullets: ['Mixpanel/PostHog', 'A/B Testing', 'CRO Continuo']
        }
      }
    },
    clusterName: 'Apps & Producto',
    canonicalBadge: 'IMPATH™ Enabled',
    packageName: 'UX/UI Design & Product Strategy',
    eyebrow: 'Capability · UX/UI Design & Product Strategy',
    title: 'Interfaces que reducen fricción cognitiva y multiplican conversión.',
    subtitle: 'Estrategia de producto (PS) y diseño UX/UI conductual de grado empresarial. Convertimos la experiencia de usuario en la armadura que asegura adopción inmediata y retorno medible.',
    callout1: 'Un diseño decorativo no sirve en B2B. En BluePixel entendemos que el diseño es la armadura y la experiencia humana con la que vestimos arquitecturas de ingeniería pesada. Cada decisión de interfaz está respaldada por datos de comportamiento real, psicología conductual y nuestra metodología propietaria IMPATH™, eliminando la fricción que le cuesta dinero a tu empresa.',
    stats: [
      { value: '-65%', label: 'Reducción de fricción cognitiva en flujos críticos', sublabel: 'Metodología IMPATH™' },
      { value: '3.8x', label: 'Multiplicador promedio en conversión y adopción', sublabel: 'Validado con usuarios reales' },
      { value: '100%', label: 'Soberanía de Design System & Tokens reutilizables', sublabel: 'Zero deuda de diseño' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Auditoría Heurística & Discovery',
        desc: 'Diagnóstico de fricción operativa IMPATH™, auditoría de pantallas actuales, mapeo de user journeys y cálculo del costo por abandono antes de codificar.',
        deliverable: 'Reporte de Fricción IMPATH™ & UX Health Score'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'UX Conversacional & Control Agéntico',
        desc: 'Diseño de interfaces intuitivas humano-agente, paneles de supervisión de decisiones y flujos sin fricción para adopción fluida de tu equipo (SMEs).',
        deliverable: 'UI Kit de Supervisión Agéntica'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: true,
        role: 'Diseño Integral de 0 a Producción',
        desc: 'Product Strategy, prototipado interactivo de alta fidelidad probado con usuarios reales, Design System escalable y handoff perfecto a desarrollo Full Stack.',
        deliverable: 'Design System en Figma & Prototipo Validado'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'CRO & UX Health Score Continuo',
        desc: 'Squad multidisciplinario dedicado a optimizar tasas de conversión (CRO), monitoreo continuo de telemetría y rediseño incremental de flujos de valor.',
        deliverable: 'Optimización Mensual de Conversión & A/B Testing'
      }
    ],
    painPoints: {
      eyebrow: '01 — El problema del diseño genérico',
      title: 'Tu plataforma es robusta, pero nadie quiere usarla.',
      costOfInaction: 'El 70% de los proyectos de software corporativo fallan por falta de adopción de usuarios, no por fallas de código. El diseño conductual IMPATH™ asegura adopción inmediata.',
      items: [
        {
          tag: 'ADOPCIÓN COMPROMETIDA',
          iconType: 'users-drop',
          title: 'Baja adopción de usuarios',
          desc: 'Invertiste millones en un sistema que tu equipo o tus clientes evitan usar porque es confuso, anticuado o requiere manuales eternos.',
          antidote: 'Psicología conductual IMPATH™ y arquitectura de información validada con usuarios reales antes de programar.'
        },
        {
          tag: 'FUGA EN CONVERSIÓN',
          iconType: 'funnel-leak',
          title: 'Fricción en flujos críticos',
          desc: 'Tus tasas de conversión caen en el momento del pago, registro o aprobación porque el usuario no sabe qué hacer a continuación.',
          antidote: 'Auditoría forense de fricción cognitiva y rediseño de embudos con micro-interacciones de alta conversión.'
        },
        {
          tag: 'INFLACIÓN DE COSTOS',
          iconType: 'design-debt',
          title: 'Deuda técnica de diseño',
          desc: 'El producto creció parchando pantallas sin un sistema de diseño estructurado, volviéndolo imposible y costoso de escalar.',
          antidote: 'Design System empresarial centralizado en Figma con tokens sincronizados directamente a código React/Tailwind.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Nuestro enfoque',
      title: 'De pantallas estáticas a experiencias vivas de alto impacto.',
      subtitle: 'La evolución del diseño de productos digitales no se trata de adornos cosméticos, se trata de sistemas y comportamiento humano.',
      headers: ['Nivel', 'Diseño Básico (Agencia)', 'Diseño Centrado en Usuario', 'Estándar BluePixel Enterprise', 'Métrica Impactada'],
      rows: [
        { label: 'Sistemas Internos', cols: ['Pantallas funcionales pero toscas', 'Flujos claros y usables', 'Design System escalable y adopción total', 'Tiempo de on-boarding: -70%'] },
        { label: 'E-commerce & Transacciones', cols: ['Catálogo estándar genérico', 'Checkout optimizado', 'Arquitectura transaccional sin fricción IMPATH™', 'Abandono de carrito: -40%'] },
        { label: 'Apps Móviles', cols: ['App informativa plana', 'App transaccional básica', 'Ecosistema de lealtad y retención conductual', 'Retención mensual: +50%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Cómo lo resolvemos',
      title: 'Psicología conductual y sistemas de diseño escalables.',
      subtitle: 'Diseñamos productos digitales que resuelven problemas reales a través de arquitectura de información rigurosa.',
      items: [
        { title: 'Design Systems Centralizados', desc: 'Construimos librerías de componentes reutilizables con tokens listos para exportar a React/Node, permitiendo a tu equipo escalar 10x más rápido.' },
        { title: 'Diagnóstico de Fricción IMPATH™', desc: 'Analizamos tus interfaces actuales con metodología científica para detectar cuellos de botella cognitivos y cuantificar su impacto económico.' },
        { title: 'Prototipado de Alta Fidelidad Validado', desc: 'Antes de tirar una sola línea de código, probamos prototipos interactivos con usuarios reales para validar la hipótesis de negocio sin quemar capital.' }
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
            { text: 'Prototipamos y testeamos con usuarios reales', score: 3 },
            { text: 'Hacemos encuestas preliminares', score: 2 },
            { text: 'Nos basamos en lo que pide dirección', score: 1 },
            { text: 'Lanzamos y vemos qué pasa en producción', score: 0 }
          ]
        },
        {
          q: '3. ¿Tienen métricas claras sobre dónde los usuarios abandonan el flujo principal?',
          options: [
            { text: 'Sí, mapeado con Analytics/Mixpanel en tiempo real', score: 3 },
            { text: 'Tenemos una idea general aproximada', score: 2 },
            { text: 'Nos enteramos por quejas de soporte', score: 1 },
            { text: 'No medimos eso actualmente', score: 0 }
          ]
        },
        {
          q: '4. ¿Cómo describirías la curva de aprendizaje de tu plataforma principal?',
          options: [
            { text: 'Intuitiva, cero fricción cognitiva', score: 3 },
            { text: 'Requiere manuales cortos o videos', score: 2 },
            { text: 'Requiere capacitación formal obligatoria', score: 1 },
            { text: 'Muy frustrante para nuevos usuarios', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Estándar de Calidad UX',
      title: 'Entregables que los desarrolladores aman.',
      items: [
        { num: '01', title: 'Design System Centralizado', desc: 'Tokens, componentes y guías en Figma, listos para exportar a código limpio.' },
        { num: '02', title: 'Flujos de Usuario (User Journeys)', desc: 'Mapeo detallado de cada pantalla y caso de uso alterno (edge cases).' },
        { num: '03', title: 'Prototipos Interactivos', desc: 'Simulaciones clickeables en alta fidelidad que se sienten como el producto final.' },
        { num: '04', title: 'Auditoría Heurística IMPATH™', desc: 'Reporte de fricciones actuales y plan de remediación priorizado por impacto.' },
        { num: '05', title: 'Handoff de Desarrollo Riguroso', desc: 'Documentación técnica perfecta para que el equipo de software construya rápido.' },
        { num: '06', title: 'UX Health Score & CRO Baseline', desc: 'Métrica base para comparar la mejora de adopción y conversión post-lanzamiento.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología de Entrega',
      title: 'Metodología rigurosa, de la investigación al pixel perfecto.',
      subtitle: 'Nuestro proceso está optimizado para descubrir el problema real antes de diseñar soluciones.',
      steps: [
        { num: '01', title: 'Discovery & UX Audit', desc: 'Analizamos el estado actual, el modelo de negocio y las métricas de abandono.', deliverables: ['Reporte de fricción IMPATH™', 'UX Health Score actual'] },
        { num: '02', title: 'Arquitectura y Wireframes', desc: 'Estructuramos la información y creamos esqueletos funcionales para validar la lógica.', deliverables: ['Sitemap de Producto', 'Wireframes interactivos'] },
        { num: '03', title: 'Visual Design & UI', desc: 'Aplicamos el branding, creamos el sistema de diseño y diseñamos las pantallas finales.', deliverables: ['Design System Figma', 'Pantallas UI en alta fidelidad'] },
        { num: '04', title: 'Prototipado y Handoff', desc: 'Conectamos las pantallas en un flujo interactivo y lo entregamos al equipo de ingeniería.', deliverables: ['Prototipo navegable', 'Handoff técnico para developers'] }
      ]
    },
    faqs: [
      { q: '¿Ustedes desarrollan el código también?', a: 'Sí. Nuestra capability de Software Engineering puede construir el producto completo de punta a punta con React/Node.js en 2 a 4 meses (Pilar 03), o podemos entregar el diseño documentado a tu equipo interno de desarrollo.' },
      { q: '¿Trabajan sobre plataformas ya existentes?', a: 'Sí, la mayoría de nuestros proyectos corporativos involucran modernizar y reducir la fricción de sistemas legados o plataformas que ya están en producción mediante el Pilar 01 (Diagnóstico) o Pilar 04 (Evolución continua).' },
      { q: '¿Cuánto tarda un proceso de diseño completo?', a: 'Depende de la modalidad: una consultoría de diagnóstico toma de 2 a 4 semanas. El diseño integral de una plataforma completa se ejecuta dentro del sprint de 2 a 4 meses del Pilar 03.' }
    ]
  },

  'ai-engineering': {
    id: 'ai-engineering',
    themeKey: 'cyan',
    clusterName: 'Apps & Producto',
    canonicalBadge: 'Cloud-Native SOC2',
    packageName: 'Software Engineering & Cloud-Native',
    eyebrow: 'Capability · Software Engineering & Cloud-Native',
    title: 'Ingeniería Full Stack y arquitecturas cloud de misión crítica.',
    subtitle: 'Desarrollo web y móvil de alto rendimiento (React, Node.js, Python, Go) con arquitecturas desacopladas, protocolos abiertos MCP y cero vendor lock-in.',
    callout1: 'Rechazamos el modelo de maquila que factura horas a ciegas y entrega software frágil. Construimos plataformas con estándares de ingeniería de grado empresarial: microservicios, despliegue automatizado CI/CD, infraestructura como código (IaC) y arquitectura orientada a eventos. Tu código y tus datos siempre residen en tu nube privada.',
    stats: [
      { value: '99.9%', label: 'Garantía de SLA y disponibilidad en producción', sublabel: 'Arquitectura Cloud-Native' },
      { value: '<120ms', label: 'Latencia p95 en APIs y endpoints transaccionales', sublabel: 'Rendimiento optimizado' },
      { value: '0%', label: 'Vendor Lock-In: código y datos 100% en tu VPC', sublabel: 'Soberanía Técnica Total' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Architecture Assessment & Due Diligence',
        desc: 'Auditoría profunda de deuda técnica en código legado, análisis de topología cloud y blueprint de arquitectura recomendado para escalar.',
        deliverable: 'Blueprint Arquitectónico & Matriz de Deuda'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Conectores Determinísticos & Servidores MCP',
        desc: 'Desarrollo de endpoints robustos y capas de conexión estandarizadas (MCP) para conectar agentes con SAP, Salesforce y ERPs legados.',
        deliverable: 'Servidores MCP & APIs Documentadas'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: true,
        role: 'Construcción Full Stack de 0 a Producción',
        desc: 'De la arquitectura conceptual a despliegue productivo en 2 a 4 meses con React, Node.js/Python, bases de datos resilientes y CI/CD automatizado.',
        deliverable: 'Plataforma en Producción con SLA 99.9%'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'Squad Dedicado & Reducción de Deuda',
        desc: 'Acompañamiento continuo con Tech Lead y Senior Full Stack para refactorización continua, optimización de costos cloud y nuevos microservicios.',
        deliverable: 'Sprints Quincenales de Entrega Continua'
      }
    ],
    painPoints: {
      eyebrow: '01 — Los retos de la infraestructura moderna',
      title: 'El software legado está frenando tu capacidad de innovar.',
      costOfInaction: 'El 72% del presupuesto de ingeniería en empresas consolidadas se quema en apagar fuegos de software legado. Nosotros modernizamos de forma modular sin frenar tu operación.',
      items: [
        {
          tag: 'BLOQUEO DE TIME-TO-MARKET',
          iconType: 'monolith',
          title: 'Deuda técnica inmanejable',
          desc: 'Tu código actual es un monolito frágil; agregar una nueva función rompe tres partes del sistema y retrasa los lanzamientos.',
          antidote: 'Arquitectura desacoplada, microservicios independientes y pipelines CI/CD automatizados con pruebas de regresión.'
        },
        {
          tag: 'SILOS DE DATOS',
          iconType: 'ai-lock',
          title: 'Incompatibilidad con IA',
          desc: 'Quieres implementar agentes o machine learning, pero tus datos están atrapados en silos o bases de datos no estructuradas para IA.',
          antidote: 'Capa de integración determinística vía protocolo abierto MCP y bases vectoriales RAG sin tocar tu core transaccional.'
        },
        {
          tag: 'FUGA DE CAPITAL CLOUD',
          iconType: 'cloud-waste',
          title: 'Costos de nube fuera de control',
          desc: 'Estás pagando fortunas en infraestructura cloud mal configurada que no escala de manera elástica ante picos de demanda.',
          antidote: 'Arquitectura Cloud-Native Serverless con contenedores Docker/Kubernetes y auto-scaling elástico bajo demanda.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Evolución Tecnológica',
      title: 'De servidores frágiles a ecosistemas cloud resilientes.',
      subtitle: 'La madurez arquitectónica dicta la velocidad a la que puedes lanzar nuevos productos al mercado.',
      headers: ['Nivel', 'Arquitectura Legada', 'Cloud-Native Estándar', 'Estándar BluePixel Enterprise', 'Impacto Operativo'],
      rows: [
        { label: 'Estructura', cols: ['Monolito en On-Premise', 'Microservicios Cloud básicos', 'Arquitectura Desacoplada Event-Driven (MCP)', 'Velocidad de despliegue: 10x'] },
        { label: 'Manejo de Datos', cols: ['Bases Relacionales Rígidas', 'Data Lakes & APIs estándar', 'Bases Vectoriales para RAG/LLMs y Caché distribuida', 'Acceso a insights: Milisegundos'] },
        { label: 'Escalabilidad', cols: ['Manual (comprar servidores)', 'Auto-scaling básico reactivo', 'Computación distribuida, Serverless y Zero Lock-in', 'Uptime garantizado: 99.9%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Capacidades Core',
      title: 'Ingeniería profunda para problemas corporativos.',
      subtitle: 'No solo escribimos código; diseñamos la máquina completa.',
      items: [
        { title: 'Desarrollo Full-Stack Moderno', desc: 'Construimos con React, Node.js, Python y TypeScript. Aplicaciones web y móviles robustas, seguras y de alto rendimiento transaccional.' },
        { title: 'Integraciones MCP y APIs Abiertas', desc: 'Creamos capas de conexión estandarizadas (Model Context Protocol) para que modelos de IA y sistemas externos interactúen de forma segura.' },
        { title: 'Cloud Architecture & DevOps CI/CD', desc: 'Diseñamos despliegues automatizados sobre AWS, GCP o Azure, asegurando zero-downtime, infraestructura como código (Terraform) y auto-escalabilidad.' }
      ]
    },
    quiz: {
      title: '¿Está tu infraestructura lista para la era de la IA y el alto tráfico?',
      subtitle: 'Diagnostica la salud de tu arquitectura técnica en 4 pasos.',
      questions: [
        {
          q: '1. ¿Cuánto tardan en hacer un despliegue a producción de nuevas funcionalidades?',
          options: [
            { text: 'Minutos (CI/CD automatizado con pruebas)', score: 3 },
            { text: 'Horas o días (Requiere coordinación manual)', score: 2 },
            { text: 'Semanas (Ventanas de mantenimiento nocturnas)', score: 1 },
            { text: 'Meses (Sistemas legacy críticos con alto riesgo)', score: 0 }
          ]
        },
        {
          q: '2. Si el tráfico se multiplica por 10x repentinamente, ¿qué pasa con tu plataforma?',
          options: [
            { text: 'Se auto-escala elásticamente sin intervención', score: 3 },
            { text: 'Sobrevive pero se vuelve lenta', score: 2 },
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
            { text: 'Información fragmentada en hojas de cálculo', score: 0 }
          ]
        },
        {
          q: '4. ¿Cómo manejan la seguridad y control de accesos a nivel infraestructura?',
          options: [
            { text: 'Zero Trust y políticas IAM estrictas en VPC', score: 3 },
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
        { num: '01', title: 'Repositorios de Código Limpio', desc: 'Propiedad intelectual 100% tuya, con estándares rigurosos de Clean Code y tipado estricto.' },
        { num: '02', title: 'Documentación de Arquitectura', desc: 'Diagramas de topología cloud, flujos de datos y manuales operativos para tu equipo.' },
        { num: '03', title: 'Pipelines CI/CD Automatizados', desc: 'Flujos automatizados de prueba, análisis estático y despliegue continuo en tu entorno.' },
        { num: '04', title: 'Infraestructura como Código (IaC)', desc: 'Scripts de Terraform/Pulumi para replicar entornos de Staging y Producción en minutos.' },
        { num: '05', title: 'APIs Seguras (Swagger / OpenAPI)', desc: 'Endpoints completamente documentados y testeados para conexión con terceros o agentes IA.' },
        { num: '06', title: 'Monitoreo y Telemetría en Tiempo Real', desc: 'Dashboards en Datadog/Grafana para visibilidad de latencia, errores y consumo en vivo.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Flujo de Trabajo Técnico',
      title: 'Sprints ágiles, entregas continuas.',
      subtitle: 'Trabajamos como una extensión nativa de tu departamento de tecnología.',
      steps: [
        { num: '01', title: 'Architecture Assessment', desc: 'Revisamos tu deuda técnica, stack actual y cuellos de botella.', deliverables: ['Reporte de vulnerabilidades', 'Roadmap arquitectónico'] },
        { num: '02', title: 'System Design & Topología', desc: 'Diseñamos la topología cloud, esquemas de bases de datos y contratos de APIs.', deliverables: ['Documento de Diseño Técnico (TDD)'] },
        { num: '03', title: 'Desarrollo en Sprints Ágiles', desc: 'Construcción iterativa. Entregamos módulos funcionales cada 2 semanas.', deliverables: ['Código en Staging', 'Tests automatizados'] },
        { num: '04', title: 'Go-Live & DevOps', desc: 'Despliegue a producción con zero downtime y paso a mantenimiento evolutivo.', deliverables: ['Plataforma en Producción', 'SLA 99.9% activo'] }
      ]
    },
    faqs: [
      { q: '¿De quién es la propiedad intelectual del código?', a: 'Tuya, al 100%. Todo el código fuente, infraestructura como código y documentación se entregan y residen en los repositorios privados de tu empresa desde el día uno.' },
      { q: '¿Trabajan junto a nuestro equipo interno de tecnología?', a: 'Absolutamente. Operamos como células ágiles de ingeniería o como squad autónomo que entrega módulos listos para producción. Nos adaptamos a los rituales y estándares de tu CTO.' },
      { q: '¿Qué proveedores de nube soportan?', a: 'Somos expertos en Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure. Diseñamos con estándares abiertos y contenedores Docker/Kubernetes para evitar cualquier vendor lock-in.' }
    ]
  },

  'ai-agents': {
    id: 'ai-agents',
    themeKey: 'purple',
    clusterName: 'Automatización',
    canonicalBadge: 'Agentic Automation',
    packageName: 'IA & Automatización Agéntica',
    eyebrow: 'Capability · IA & Automatización Agéntica',
    title: 'Agentes autónomos integrados sobre tu stack operativo actual.',
    subtitle: 'Sistemas multi-agente y RAG privado sobre datos reales de tu negocio, con integración determinística vía MCP a ERPs y CRMs sin reemplazar tus sistemas.',
    callout1: 'La IA superficial que se queda en demos no genera valor. En BluePixel creamos agentes autónomos que razonan sobre datos corporativos reales sin alucinaciones, ejecutan acciones en ERPs mediante el protocolo abierto MCP y liberan capacidad operativa desde el primer ciclo. La IA multiplica la capacidad de las personas que ya tienes en tu equipo.',
    stats: [
      { value: '-75%', label: 'Reducción de horas manuales en tareas repetitivas', sublabel: 'Flujos operativos agentizados' },
      { value: '<800ms', label: 'Tiempo de respuesta en razonamiento y consulta RAG', sublabel: 'Bases vectoriales optimizadas' },
      { value: '0%', label: 'Alucinaciones críticas sobre datos corporativos', sublabel: 'Blindaje con Guardrails y MCP' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'AI Readiness & Mapeo de Viabilidad',
        desc: 'Evaluación técnica de procesos candidatos, cálculo de ROI proyectado y análisis de costos de inferencia antes de desplegar.',
        deliverable: 'Business Case de Automatización & ROI'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: true,
        role: 'Despliegue de Agentes en Producción',
        desc: 'Implementación ágil de flujos agénticos autónomos con RAG privado, conectores MCP a SAP/Salesforce y guardrails de seguridad corporativa.',
        deliverable: 'Agente en Producción en tu VPC Privada'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: false,
        role: 'Workflows Inteligentes Nativos',
        desc: 'Integración de motores agénticos dentro de la plataforma digital desde el sprint 1, transformando la app en un activo inteligente nativo.',
        deliverable: 'Módulos Agénticos Embebidos en la App'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'Orquestación & Nuevos Agentes',
        desc: 'Optimización continua de prompts, afinación de embeddings, incorporación de nuevos flujos agénticos y monitoreo de decisiones.',
        deliverable: 'Monitoreo de Agentes & Nuevas Capacidades'
      }
    ],
    painPoints: {
      eyebrow: '01 — Dónde se estanca la automatización',
      title: 'La IA se aprueba en el consejo. Rara vez llega a producción.',
      costOfInaction: 'Un equipo de 15 analistas pierde más del 40% de su jornada copiando y pegando datos entre pantallas. Los agentes autónomos devuelven cientos de horas de capacidad operativa.',
      items: [
        {
          tag: 'BRECHA DE EJECUCIÓN',
          iconType: 'board-pressure',
          title: 'Aprobación sin ejecución técnica',
          desc: 'La dirección aprueba "hacer algo con IA", pero nadie traduce esa aprobación en agentes que realmente operen sobre la operación diaria.',
          antidote: 'Pase a producción en 2 a 4 semanas de agentes autónomos transaccionales conectados a tus APIs reales.'
        },
        {
          tag: 'JUGUETES CONVERSACIONALES',
          iconType: 'bot-rigid',
          title: 'Automatización superficial',
          desc: 'Se automatiza lo fácil y visible con bots rígidos, mientras el proceso que de verdad cuesta caro sigue dependiendo de personas y Excels.',
          antidote: 'Agentes autónomos con razonamiento multi-paso, RAG privado y capacidad de modificar registros con confirmación.'
        },
        {
          tag: 'PROTOTIPOS HUÉRFANOS',
          iconType: 'pilot-fail',
          title: 'Pilotos que no escalan',
          desc: 'Existe un demo de agente que funcionó en la presentación, pero nunca se conectó a los datos transaccionales reales del ERP/CRM.',
          antidote: 'Servidores MCP estandarizados que conectan los agentes a SAP, Salesforce o bases SQL en tu propia VPC.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Nuestro enfoque',
      title: 'De tarea automatizada a operación agentizada.',
      subtitle: 'La madurez de automatización avanza en etapas: cada negocio parte de reglas fijas y llega a agentes que deciden y actúan por sí mismos.',
      headers: ['Nivel', 'Automatización Básica', 'IA Asistida (Copilot)', 'Estándar BluePixel Agentic', 'Métrica Impactada'],
      rows: [
        { label: 'Atención a clientes', cols: ['Respuestas con reglas fijas a FAQs', 'Humano usa IA para redactar', 'El agente resuelve flujos completos y cruza sistemas', 'Tiempo de resolución: -80%'] },
        { label: 'Conciliación Financiera', cols: ['Extracción de datos a Excel', 'IA sugiere, humano aprueba', 'Agente investiga anomalías en ERP y concilia', 'Horas manuales: -70%'] },
        { label: 'Onboarding & Operaciones', cols: ['Checklists y recordatorios automáticos', 'IA prellena formularios', 'Agente valida documentos y coordina CRM/ERP', 'Tiempo de ciclo: -60%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Dónde aplicamos agentes',
      title: 'Agentización que opera procesos completos de tu negocio.',
      subtitle: 'Cada agente se conecta a datos reales de tu operación, ya sea de cara al cliente o en procesos internos.',
      items: [
        { title: 'Agentes Operativos Autónomos', desc: 'Desde atención a clientes hasta back-office interno (finanzas, RH): flujos que se ejecutan, monitorean y escalan por sí solos 24/7.' },
        { title: 'Integraciones Determinísticas MCP', desc: 'Salesforce, HubSpot, SAP y Zendesk conectados mediante el protocolo MCP, asegurando que los agentes interactúen con reglas de negocio exactas.' },
        { title: 'RAG Privado Anti-Alucinaciones', desc: 'Arquitectura RAG sobre bases vectoriales en tu nube privada. El agente solo responde basándose en tu información oficial comprobada.' }
      ]
    },
    quiz: {
      title: '¿Qué tan lista está tu operación para agentes en producción?',
      subtitle: '4 preguntas, resultado inmediato. Una primera lectura antes de tu diagnóstico.',
      questions: [
        {
          q: '1. ¿Qué tan estandarizados están los procesos que quieres automatizar?',
          options: [
            { text: 'Documentados, con reglas de negocio claras', score: 3 },
            { text: 'Parcialmente documentados en manuales', score: 2 },
            { text: 'Dependen del criterio personal de cada persona', score: 1 },
            { text: 'No los hemos mapeado formalmente', score: 0 }
          ]
        },
        {
          q: '2. ¿Tus sistemas (CRM, ERP, pagos) están conectados entre sí?',
          options: [
            { text: 'Sí, con APIs y webhooks en tiempo real', score: 3 },
            { text: 'Parcialmente, con procesos manuales intermedios', score: 2 },
            { text: 'Cada sistema opera aislado en su propio silo', score: 1 },
            { text: 'No lo sabemos con certeza técnica', score: 0 }
          ]
        },
        {
          q: '3. ¿Han probado antes IA o automatización en tu operación?',
          options: [
            { text: 'Sí, agentes o flujos ya operando en producción', score: 3 },
            { text: 'Sí, pero quedó como piloto que no escaló', score: 2 },
            { text: 'Solo pruebas exploratorias con ChatGPT web', score: 1 },
            { text: 'Nunca hemos implementado nada de IA', score: 0 }
          ]
        },
        {
          q: '4. ¿Pueden medir hoy cuánto tiempo o dinero pierden en ese proceso manual?',
          options: [
            { text: 'Sí, con métricas de costo y horas concretas', score: 3 },
            { text: 'Estimación aproximada del equipo', score: 2 },
            { text: 'Solo percepción cualitativa de fricción', score: 1 },
            { text: 'No lo hemos medido cuantitativamente', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Estándar de Automatización',
      title: 'Agentes que operan, aprenden y mejoran con cada ciclo.',
      items: [
        { num: '01', title: 'Arquitectura AI-Ready', desc: 'Infraestructura diseñada desde el día uno para que los agentes escalen sin saturar servidores.' },
        { num: '02', title: 'Conexión a Datos Reales (RAG)', desc: 'Los agentes operan sobre bases de conocimiento corporativas actualizadas y seguras.' },
        { num: '03', title: 'Conectores Determinísticos MCP', desc: 'Integración vía Model Context Protocol con tus ERPs, CRMs y bases de datos transaccionales.' },
        { num: '04', title: 'Trazabilidad y Auditoría Humana', desc: 'Cada decisión, llamada de API y razonamiento queda registrado y es 100% auditable.' },
        { num: '05', title: 'Guardrails de Seguridad', desc: 'Filtros contra inyección de prompts, alucinaciones y fuga de datos confidenciales.' },
        { num: '06', title: 'Dashboard de Impacto Operativo', desc: 'Medición en tiempo real de horas liberadas, costos evitados y tasa de éxito en resoluciones.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología de Entrega',
      title: 'De diagnóstico a agente en producción, en ciclos cortos.',
      subtitle: 'Cada proyecto avanza con un entregable concreto y tiempo estimado.',
      steps: [
        { num: '01', title: 'Diagnóstico de Automatización', desc: 'Mapeo de procesos, datos y sistemas candidatos a agentizar con cálculo de ROI.', deliverables: ['Reporte de oportunidades priorizadas'] },
        { num: '02', title: 'Diseño del Agente & MCP', desc: 'Definición de reglas de negocio, herramientas determinísticas y capa RAG privada.', deliverables: ['Especificación técnica y de negocio'] },
        { num: '03', title: 'Construcción e Integración', desc: 'Desarrollo del agente conectado a tus sistemas reales en ambiente controlado.', deliverables: ['Agente funcional testeado'] },
        { num: '04', title: 'Producción y Monitoreo', desc: 'Lanzamiento a producción en tu VPC privada, monitoreo continuo y afinación.', deliverables: ['Dashboard de resultados operativos'] }
      ]
    },
    faqs: [
      { q: '¿Qué incluye exactamente el servicio de Agentes IA?', a: 'Incluye diagnóstico de procesos viables, diseño de la arquitectura multi-agente, RAG sobre datos corporativos reales, integración vía MCP a tus sistemas (ERP/CRM), y despliegue en tu nube privada en 2 a 4 semanas (Pilar 02).' },
      { q: '¿En qué se diferencia de un bot prefabricado o chatbot tradicional?', a: 'Un bot prefabricado solo sigue árboles rígidos de decisiones. Nuestros agentes razonan de forma autónoma, consultan bases vectoriales privadas, llaman funciones y ejecutan transacciones reales en tus sistemas mediante protocolos determinísticos.' },
      { q: '¿Nuestros datos privados se usan para entrenar modelos públicos?', a: 'Jamás. Desplegamos modelos en entornos privados (VPC) con acuerdos empresariales de cero retención de datos. Tu propiedad intelectual nunca sale de tu jurisdicción corporativa.' }
    ]
  },

  'data-analytics': {
    id: 'data-analytics',
    themeKey: 'indigo',
    clusterName: 'Automatización',
    canonicalBadge: 'Mixpanel Telemetry',
    packageName: 'Data & Analytics Enterprise',
    eyebrow: 'Capability · Data & Analytics',
    title: 'De datos fragmentados a una sola fuente de verdad directiva.',
    subtitle: 'Pipelines automatizados (ETL/ELT), Data Warehousing moderno y telemetría de producto con Mixpanel para decisiones en tiempo real y modelos predictivos.',
    callout1: 'Tener terabytes de datos en silos desconectados cuesta dinero y paraliza a los comités directivos. Diseñamos arquitecturas analíticas modernas (BigQuery, Snowflake, dbt) y telemetría profunda de producto para que el C-Level cuente con KPIs en tiempo real y anticipe el comportamiento de clientes antes de que impacte el balance.',
    stats: [
      { value: '1 Sola', label: 'Fuente de verdad directiva conciliada en tiempo real', sublabel: 'Zero discrepancias de datos' },
      { value: '<1s', label: 'Velocidad de carga en tableros ejecutivos y KPIs', sublabel: 'Arquitectura Modern Data Stack' },
      { value: '360°', label: 'Visibilidad de comportamiento y conversión de usuario', sublabel: 'Telemetría Mixpanel instrumentada' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Data Audit & Diccionario de Métricas',
        desc: 'Diagnóstico de calidad de datos, auditoría de silos (CRM/ERP), estandarización de definiciones y blueprint de arquitectura analítica.',
        deliverable: 'Diccionario de Datos & Matriz de Fuentes'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Telemetría y Trazabilidad Agéntica',
        desc: 'Instrumentación de pipelines en tiempo real para registrar y auditar cada ejecución, token consumido y decisión de los agentes de IA.',
        deliverable: 'Pipeline de Telemetría Agéntica'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: false,
        role: 'Data Stack & Mixpanel desde Sprint 1',
        desc: 'Configuración nativa de analítica de producto, tracking de eventos clave y base de datos analítica conectada a la nueva plataforma.',
        deliverable: 'Telemetría de Producto Mixpanel Activa'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'Dashboards Directivos & Modelos ML',
        desc: 'Evolución continua de tableros directivos, análisis predictivo de churn/demanda y optimización de funnel basada en datos reales.',
        deliverable: 'Dashboards Ejecutivos & Modelos Predictivos'
      }
    ],
    painPoints: {
      eyebrow: '01 — El caos de los datos corporativos',
      title: 'Mucha información dispersa, ninguna respuesta clara.',
      costOfInaction: 'Tomar decisiones comerciales con datos desfasados de 3 semanas cuesta millones en inventario mal asignado o churn no detectado.',
      items: [
        {
          tag: 'DISCREPANCIA DIRECTIVA',
          iconType: 'silos-data',
          title: 'Silos de información desconectados',
          desc: 'Ventas mira Salesforce, finanzas el ERP y marketing otra plataforma; los números nunca cuadran al final del trimestre.',
          antidote: 'Modern Data Stack unificado con pipelines de datos automatizados y diccionario único de métricas de negocio.'
        },
        {
          tag: 'HORAS HOMBRE QUEMADAS',
          iconType: 'excel-hell',
          title: 'Reportes manuales en hojas de cálculo',
          desc: 'Tu equipo pasa 40 horas al mes descargando, cruzando y parchando tablas estáticas propensas a errores humanos costosos.',
          antidote: 'Telemetría de producto Mixpanel en tiempo real y tableros directivos automatizados que se actualizan al segundo.'
        },
        {
          tag: 'VISIÓN POR RETROVISOR',
          iconType: 'blind-spot',
          title: 'Incapacidad predictiva',
          desc: 'Solo ves lo que ya pasó (visión por retrovisor), pero no cuentas con modelos para anticipar demanda, retención o fuga de clientes.',
          antidote: 'Modelos predictivos de machine learning entrenados sobre tus datos para alertas tempranas de churn y demanda.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Madurez de los Datos',
      title: 'Ascendiendo en la pirámide analítica.',
      subtitle: 'Antes de predecir el futuro, necesitas consolidar y confiar en el pasado.',
      headers: ['Nivel', 'Analítica Descriptiva (Qué pasó)', 'Analítica Diagnóstica (Por qué)', 'Estándar BluePixel Predictivo', 'Impacto en Negocio'],
      rows: [
        { label: 'Estructura', cols: ['Reportes en Excel/CSV', 'Data Warehouse / BI estándar', 'Modern Data Stack + Telemetría Mixpanel', 'Decisiones basadas en datos puros'] },
        { label: 'Tiempo de respuesta', cols: ['Días o semanas de espera', 'Horas con actualización batch', 'Tiempo Real con streaming de eventos', 'Reacción inmediata al mercado'] },
        { label: 'Operación', cols: ['Extracción manual repetitiva', 'Pipelines ETL básicos', 'Modelos predictivos que recomiendan acciones', 'Eficiencia directiva: +300%'] }
      ]
    },
    specs: {
      eyebrow: '03 — Capacidades Analíticas',
      title: 'Infraestructura de datos para corporativos.',
      subtitle: 'Construimos el puente entre los fierros técnicos y los KPIs directivos de negocio.',
      items: [
        { title: 'Modern Data Warehousing & Pipelines', desc: 'Diseñamos Data Lakes y bodegas centralizadas en BigQuery, Snowflake o Redshift, con pipelines automatizados (dbt/Airflow).' },
        { title: 'Telemetría de Producto con Mixpanel', desc: 'Instrumentamos el tracking granular de eventos y comportamiento para medir fricción, conversión de funnels y retención.' },
        { title: 'Business Intelligence & Dashboards C-Level', desc: 'Tableros ejecutivos en Tableau, PowerBI o Looker que sintetizan los KPIs de salud financiera y operativa en una sola pantalla.' }
      ]
    },
    quiz: {
      title: '¿Qué tan madura es la infraestructura de datos de tu empresa?',
      subtitle: 'Evalúa la capacidad de tu organización para tomar decisiones basadas en datos reales.',
      questions: [
        {
          q: '1. Cuando la Dirección General pide un reporte cruzado de finanzas y ventas, ¿cuánto tardan en generarlo?',
          options: [
            { text: 'Minutos (El dashboard ejecutivo está en vivo)', score: 3 },
            { text: 'Horas (Alguien tiene que correr consultas y compilar)', score: 2 },
            { text: 'Días (Cruzar Excels y conciliar a mano)', score: 1 },
            { text: 'Es imposible conciliar esos datos con certeza', score: 0 }
          ]
        },
        {
          q: '2. ¿Dónde reside actualmente la mayor parte de los datos históricos de tu empresa?',
          options: [
            { text: 'Data Warehouse Cloud moderno (Snowflake/BigQuery)', score: 3 },
            { text: 'Bases de datos transaccionales de producción (SQL)', score: 2 },
            { text: 'Sistemas aislados en cada software (ERP, CRM)', score: 1 },
            { text: 'Hojas de cálculo descentralizadas en computadoras', score: 0 }
          ]
        },
        {
          q: '3. ¿Confías al 100% en la precisión de los KPIs que revisas periódicamente?',
          options: [
            { text: 'Totalmente, tenemos gobernanza y Data Quality activa', score: 3 },
            { text: 'Generalmente sí, aunque surgen discrepancias menores', score: 2 },
            { text: 'Hay discusiones constantes entre áreas sobre cuál número es el bueno', score: 1 },
            { text: 'No, siempre dudamos de la veracidad de los reportes', score: 0 }
          ]
        },
        {
          q: '4. ¿Tu empresa usa modelos analíticos o IA para predecir escenarios futuros?',
          options: [
            { text: 'Sí, modelos de ML en producción guiando decisiones', score: 3 },
            { text: 'Hacemos proyecciones estadísticas básicas en hojas de cálculo', score: 2 },
            { text: 'Tratamos de intuir tendencias de forma cualitativa', score: 1 },
            { text: 'Cero predicción, pura reacción ante lo que ya ocurrió', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Entregables Analíticos',
      title: 'Activos de datos listos para consumo directivo.',
      items: [
        { num: '01', title: 'Diccionario & Gobernanza de Datos', desc: 'Estandarización de definiciones para que finanzas, operaciones y ventas hablen el mismo idioma.' },
        { num: '02', title: 'Data Pipelines Automatizados', desc: 'Tuberías robustas de extracción, transformación y carga (ETL/ELT) en tiempo real.' },
        { num: '03', title: 'Data Warehouse Centralizado', desc: 'Repositorio corporativo en la nube estructurado para consultas instantáneas a bajo costo.' },
        { num: '04', title: 'Telemetría de Producto Mixpanel', desc: 'Tracking de eventos y embudos de comportamiento para optimización de producto digital.' },
        { num: '05', title: 'Dashboards Directivos C-Level', desc: 'Paneles visuales conectados en vivo, diseñados con altos estándares de UX de lectura de datos.' },
        { num: '06', title: 'Modelos de Machine Learning', desc: 'Algoritmos predictivos integrados a la operación para anticipar demanda o fuga de clientes.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología Data',
      title: 'Del caos al control analítico en fases probadas.',
      subtitle: 'No reconstruimos todo de golpe. Creamos victorias tempranas y valor de negocio inmediato.',
      steps: [
        { num: '01', title: 'Data Discovery & Auditoría', desc: 'Auditamos las fuentes, la calidad de datos y definimos las métricas críticas de negocio.', deliverables: ['Matriz de Fuentes', 'Mapa Conceptual Analítico'] },
        { num: '02', title: 'Ingeniería de Pipelines', desc: 'Construimos las tuberías que extraen y limpian la información de los sistemas origen.', deliverables: ['Pipelines automatizados en producción'] },
        { num: '03', title: 'Modelado & Data Warehouse', desc: 'Estructuramos las tablas en la nube para consultas eficientes y bajo costo.', deliverables: ['Data Warehouse Activo'] },
        { num: '04', title: 'Visualización & Telemetría', desc: 'Configuramos tableros ejecutivos y telemetría de comportamiento para toma de decisiones.', deliverables: ['Dashboards BI & Telemetría Mixpanel'] }
      ]
    },
    faqs: [
      { q: '¿Trabajan con nuestras licencias actuales de BI (PowerBI, Tableau, Looker)?', a: 'Sí. Somos tecnológicamente agnósticos. Podemos diseñar sobre la herramienta de visualización que tu empresa ya tenga contratada (PowerBI, Tableau, Looker) o implementar soluciones cloud modernas desde cero.' },
      { q: '¿Nuestros datos sensibles están seguros?', a: 'Absolutamente. Todos los pipelines, bodegas y almacenes residen dentro de tu propio entorno Cloud empresarial (VPC) bajo encriptación en reposo y en tránsito. Nosotros construimos los conductos, tus datos nunca salen de tu posesión.' },
      { q: '¿Cuánto tiempo toma tener los primeros dashboards en producción?', a: 'En una Consultoría Digital (Pilar 01) o sprint inicial de 4 semanas logramos unificar las fuentes críticas (Data Mart financiero/operativo) y habilitar los primeros dashboards ejecutivos en vivo.' }
    ]
  },

  'security': {
    id: 'security',
    themeKey: 'amber',
    clusterName: 'Gobernanza IA',
    canonicalBadge: 'ISO 27001 & OWASP',
    packageName: 'Security, Vault & Reliability',
    eyebrow: 'Capability · Security, Compliance & Reliability',
    title: 'Blindaje cibernético y soberanía total para activos de misión crítica.',
    subtitle: 'Auditorías de penetración (Pentesting), preparación para ISO 27001 / SOC2, arquitectura Zero-Trust y guardrails de seguridad para implementaciones de IA.',
    callout1: 'La ciberseguridad y el cumplimiento normativo no son un trámite burocrático; son la habilitadora de contratos enterprise de siete cifras. Aplicamos estándares rigurosos de OWASP Top 10, DevSecOps y aislamiento en VPC privada para que tu empresa crezca e innove con IA sin arriesgar su patrimonio ni su reputación.',
    stats: [
      { value: 'ISO 27001', label: '& OWASP Top 10 alineado en cada línea de código', sublabel: 'Estándares de clase mundial' },
      { value: '100%', label: 'Aislamiento de datos en la nube privada del cliente', sublabel: 'Cero entrenamiento con tu IP' },
      { value: '0 Brechas', label: 'en infraestructuras y plataformas auditadas', sublabel: 'Blindaje proactivo y Red Teaming' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: true,
        role: 'Threat Modeling & Auditoría de Vulnerabilidades',
        desc: 'Evaluación exhaustiva de brechas de seguridad, auditoría OWASP Top 10, revisión de código estático (SAST) y plan de remediación priorizado.',
        deliverable: 'Reporte Ejecutivo de Vulnerabilidades (CVSS)'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Guardrails para IA & Aislamiento DLP',
        desc: 'Filtros PII contra fuga de datos sensibles, prevención de prompt injection y despliegue de inferencia en VPC privada aislada.',
        deliverable: 'Capa de Seguridad & Guardrails para LLMs'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: false,
        role: 'Arquitectura Zero-Trust & DevSecOps',
        desc: 'Diseño de red segura, cifrado KMS de datos en tránsito y reposo, y pipelines CI/CD con escaneo automatizado de dependencias.',
        deliverable: 'Infraestructura Hardened con SLA 99.9%'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'Monitoreo SLA 99.9% & Pentesting Continuo',
        desc: 'Vigilancia activa, simulaciones de ataque periódicas (Red Teaming), parches de seguridad continuos y preparación continua para SOC2.',
        deliverable: 'Auditorías Periódicas & Soporte Crítico 24/7'
      }
    ],
    painPoints: {
      eyebrow: '01 — Riesgos invisibles',
      title: 'El precio oculto del crecimiento desordenado.',
      costOfInaction: 'El costo promedio de una filtración de datos en LATAM supera los $2.8M USD, además del daño irreparable a la reputación corporativa y contratos bloqueados.',
      items: [
        {
          tag: 'PUERTAS TRASERAS',
          iconType: 'security-breach',
          title: 'Vulnerabilidades de código no detectadas',
          desc: 'Aplicaciones desarrolladas con urgencia que dejan puertas abiertas a inyecciones SQL, autenticación rota o ataques XSS.',
          antidote: 'Auditoría exhaustiva OWASP Top 10, escaneo estático/dinámico (SAST/DAST) y DevSecOps automatizado en CI/CD.'
        },
        {
          tag: 'CONTRATOS BLOQUEADOS',
          iconType: 'compliance-fail',
          title: 'Falta de cumplimiento (ISO 27001 / SOC2)',
          desc: 'Estás perdiendo contratos corporativos de alto valor porque no puedes demostrar que los datos de tus clientes están blindados.',
          antidote: 'Arquitectura Zero-Trust, cifrado KMS de grado bancario y alineación documental completa para SOC2 e ISO 27001.'
        },
        {
          tag: 'FUGA DE SECRETOS',
          iconType: 'ai-leak',
          title: 'Fugas en implementaciones de IA',
          desc: 'El riesgo inminente de que empleados envíen datos confidenciales de la empresa a herramientas públicas o que un agente filtre secretos.',
          antidote: 'Filtros DLP (Data Loss Prevention), enmascaramiento de PII y despliegue de modelos en VPC privada sin salida a internet público.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Postura de Seguridad',
      title: 'De la reacción al blindaje proactivo de grado corporativo.',
      subtitle: 'La seguridad no es un software que se compra una vez, es una disciplina de ingeniería continua.',
      headers: ['Nivel', 'Reactiva (Peligro)', 'Proactiva Básica', 'Estándar BluePixel Resiliente', 'Reducción de Riesgo'],
      rows: [
        { label: 'Aplicaciones (AppSec)', cols: ['Parches tras sufrir ataques', 'Escaneo de código estático (SAST)', 'Pentesting continuo y DevSecOps en CI/CD', 'Vulnerabilidades críticas: -99%'] },
        { label: 'Infraestructura Cloud', cols: ['Servidores públicos sin WAF', 'Firewalls y redes privadas básicas', 'Arquitectura Zero-Trust, KMS y VPC aislada', 'Superficie de ataque: Cero externa'] },
        { label: 'Cumplimiento Normativo', cols: ['Políticas informales no auditadas', 'Manuales documentados en papel', 'Alineación completa ISO 27001 / SOC2 Ready', 'Contratos Enterprise: Viables'] }
      ]
    },
    specs: {
      eyebrow: '03 — Pilares de Protección',
      title: 'Seguridad en profundidad para software e IA corporativa.',
      subtitle: 'Auditamos, remediamos y garantizamos resiliencia.',
      items: [
        { title: 'Ethical Hacking & Pentesting Riguroso', desc: 'Simulamos ataques dirigidos por especialistas (Red Teaming) para descubrir brechas lógicas en tu software antes de que lo hagan actores maliciosos.' },
        { title: 'Preparación ISO 27001 & SOC2 Readiness', desc: 'Alineamos tus políticas, controles técnicos y monitoreo de infraestructura para superar auditorías internacionales sin contratiempos.' },
        { title: 'AI Security & Guardrails para LLMs', desc: 'Implementamos filtros DLP (Data Loss Prevention) y enmascaramiento de datos PII para que tus agentes operen sin riesgo de fuga de información.' }
      ]
    },
    quiz: {
      title: 'Mide la postura de ciberseguridad de tus plataformas.',
      subtitle: '¿Sobreviviría tu infraestructura a un ataque dirigido o a una auditoría estricta hoy?',
      questions: [
        {
          q: '1. ¿Cuándo fue la última vez que le hicieron una prueba de penetración (Pentest) profunda a tu app?',
          options: [
            { text: 'Hace menos de 6 meses por expertos certificados', score: 3 },
            { text: 'Hace más de 1 año', score: 2 },
            { text: 'Solo corremos escaneos automáticos de vulnerabilidades', score: 1 },
            { text: 'Nunca le hemos hecho una prueba de penetración', score: 0 }
          ]
        },
        {
          q: '2. Si un colaborador técnico clave sale hoy de la empresa, ¿puede acceder a los servidores o código?',
          options: [
            { text: 'Imposible, procesos de off-boarding y SSO/IAM automáticos', score: 3 },
            { text: 'Poco probable, cambiamos contraseñas manualmente', score: 2 },
            { text: 'Probable, podría tener API keys o tokens viejos guardados', score: 1 },
            { text: 'Sí, las credenciales están hardcodeadas o compartidas', score: 0 }
          ]
        },
        {
          q: '3. Si un cliente corporativo te exige hoy un reporte SOC2 o ISO 27001 para firmar contrato, ¿qué haces?',
          options: [
            { text: 'Se lo enviamos de inmediato (Estamos preparados)', score: 3 },
            { text: 'Tenemos controles, pero no la preparación formal', score: 2 },
            { text: 'Empezamos a correr para tratar de documentar todo', score: 1 },
            { text: 'Perdemos la oportunidad comercial por incumplimiento', score: 0 }
          ]
        },
        {
          q: '4. Respecto al uso de IA en tu empresa, ¿cómo protegen los datos confidenciales?',
          options: [
            { text: 'Modelos en instancias privadas (VPC) y filtros DLP activos', score: 3 },
            { text: 'Políticas firmadas de no usar información confidencial', score: 2 },
            { text: 'Confiamos en el criterio individual de cada empleado', score: 1 },
            { text: 'Todos usan herramientas públicas sin control ni supervisión', score: 0 }
          ]
        }
      ]
    },
    deliverables: {
      eyebrow: '06 — Evidencia y Blindaje',
      title: 'Reportes ejecutivos y parches a nivel código.',
      items: [
        { num: '01', title: 'Reporte de Pentesting (CVSS)', desc: 'Listado exhaustivo de vulnerabilidades categorizadas por criticidad y vector de ataque.' },
        { num: '02', title: 'Plan de Remediación & Parches', desc: 'No solo señalamos fallas: nuestro equipo de ingeniería aplica los parches de código necesarios.' },
        { num: '03', title: 'Políticas de Seguridad & ISO 27001', desc: 'Manuales y controles de seguridad técnica exigidos por auditores corporativos internacionales.' },
        { num: '04', title: 'Matriz de Accesos (Zero-Trust RBAC)', desc: 'Rediseño de roles y privilegios bajo el principio de mínimo privilegio estricto.' },
        { num: '05', title: 'Guardrails & Filtros para IA', desc: 'Protección contra prompt injection, enmascaramiento PII y políticas de seguridad para LLMs.' },
        { num: '06', title: 'Infraestructura Cloud Endurecida', desc: 'WAF, cifrado KMS de llaves y configuración de redes privadas en AWS, GCP o Azure.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología Security',
      title: 'Auditar, Blindar, Monitorear.',
      subtitle: 'La seguridad ágil no retrasa tus lanzamientos; los hace comercialmente viables y confiables.',
      steps: [
        { num: '01', title: 'Threat Modeling & Arquitectura', desc: 'Analizamos la topología e identificamos los vectores de ataque más probables.', deliverables: ['Modelo de Amenazas'] },
        { num: '02', title: 'Pentesting Ético & Escaneos', desc: 'Ataques controlados de caja gris/blanca contra aplicaciones, APIs y red.', deliverables: ['Reporte de Vulnerabilidades'] },
        { num: '03', title: 'Remediación y Blindaje Técnico', desc: 'Aplicamos parches de código, cerramos puertos y endurecemos la infraestructura.', deliverables: ['Código y Servidores Blindados'] },
        { num: '04', title: 'Verificación & Certificación Ready', desc: 'Re-evaluación para certificar la mitigación total y entrega de constancia técnica.', deliverables: ['Constancia de Blindaje Técnico'] }
      ]
    },
    faqs: [
      { q: '¿Ustedes emiten la certificación ISO 27001 o SOC2?', a: 'Nosotros preparamos tu tecnología, infraestructura y procesos (Readiness al 100%) y aplicamos las remediaciones de código. La certificación formal la otorga una casa auditora externa acreditada independiente, a la cual acompañamos a tu equipo.' },
      { q: '¿Qué diferencia hay entre un escaneo automático y su Pentesting?', a: 'Un escaneo automático solo busca firmas conocidas y genera decenas de falsos positivos. Nuestro Pentesting es realizado por ingenieros de seguridad éticos que encadenan vulnerabilidades complejas para descubrir fallas lógicas que los scanners no ven.' },
      { q: '¿Las pruebas de penetración causarán caídas en mi plataforma?', a: 'No. Los ejercicios profundos se realizan primordialmente en entornos de Staging que replican con exactitud la producción. Las pruebas directas en producción se calibran para garantizar cero denegación de servicio (DoS).' }
    ]
  },

  'business-ai': {
    id: 'business-ai',
    themeKey: 'blue',
    clusterName: 'Gobernanza IA',
    canonicalBadge: 'FutureProof™ Framework',
    packageName: 'Business AI Consulting & Strategy',
    eyebrow: 'Capability · Digital Consulting & Strategy',
    title: 'De la visión del Consejo al roadmap ejecutable con ROI garantizado.',
    subtitle: 'Consultoría estratégica B2B de alto nivel para Directores Generales y C-Levels. Cuantificamos el costo de inacción, priorizamos por impacto en caja y blindamos la adopción de IA.',
    callout1: 'La Inteligencia Artificial no es un juguete del departamento de TI; es una palanca estratégica del modelo de negocio. Muchas empresas queman capital en licencias o pilotos aislados que no mueven la aguja financiera. Nuestra consultoría actúa como el puente entre tu P&L y la ingeniería de vanguardia: validamos viabilidad, calculamos retorno y priorizamos backlog antes de comprometer capital en desarrollo.',
    stats: [
      { value: '2 a 4', label: 'Semanas para tener diagnóstico y business case listo', sublabel: 'Celeridad analítica ejecutiva' },
      { value: 'ROI Medible', label: 'Proyectado y validado antes de tirar una línea de código', sublabel: 'Certeza financiera previa' },
      { value: '100%', label: 'Alineación con el Consejo Directivo y objetivos de negocio', sublabel: 'FutureProof™ Framework' }
    ],
    fourWaysToWork: [
      {
        num: '01',
        name: 'Consultoría Digital',
        duration: '2 a 4 Semanas',
        isCore: true,
        role: '🔥 Núcleo Principal: Diagnóstico & Roadmap',
        desc: 'Diagnóstico de fricción IMPATH™, valuación del costo de inacción, business case con ROI proyectado y backlog priorizado por impacto económico.',
        deliverable: 'Roadmap Estratégico & Business Case Oficial'
      },
      {
        num: '02',
        name: 'Agentes & Automatización',
        duration: '2 a 4 Semanas',
        isCore: false,
        role: 'Priorización de Casos de Automatización',
        desc: 'Definición de qué procesos operacionales deben agentizarse primero para recuperar la inversión en el menor plazo de tiempo.',
        deliverable: 'Matriz de Casos de Uso por ROI Operativo'
      },
      {
        num: '03',
        name: 'Plataformas Digitales',
        duration: '2 a 4 Meses a Producción',
        isCore: false,
        role: 'Product Strategy & Gobernanza de Entrega',
        desc: 'Aseguramiento de que el software construido en 2 a 4 meses resuelva con precisión milimétrica la tesis comercial del negocio.',
        deliverable: 'Product Strategy Document (PSD)'
      },
      {
        num: '04',
        name: 'Evolución Digital',
        duration: 'Roadmap 6 a 12 Meses',
        isCore: true,
        role: 'Acompañamiento Estratégico al Consejo',
        desc: 'Comité de asesoría tecnológica trimestral para evaluar nuevas oportunidades de mercado, proteger el roadmap y auditar KPIs de adopción.',
        deliverable: 'Priorización Trimestral del Backlog Directivo'
      }
    ],
    painPoints: {
      eyebrow: '01 — La desorientación ejecutiva frente a la IA',
      title: 'Mucho ruido comercial, poca claridad sobre el impacto financiero real.',
      costOfInaction: 'Gastar cientos de miles de dólares en iniciativas de IA teóricas que no mueven el P&L es la forma más rápida de quemar capital sin generar ventaja competitiva.',
      items: [
        {
          tag: 'PRESIÓN DEL BOARD',
          iconType: 'board-pressure',
          title: 'Presión del Consejo por "usar IA"',
          desc: 'Los accionistas exigen modernización tecnológica, pero el equipo directivo no sabe por dónde empezar sin gastar a ciegas.',
          antidote: 'Diagnóstico de 2 a 4 semanas con business case matemático, valuación del costo de inacción y ROI proyectado por épica.'
        },
        {
          tag: 'VENTAJA EROSIONADA',
          iconType: 'competitor-threat',
          title: 'Miedo a quedar obsoletos ante la competencia',
          desc: 'Tus competidores anuncian automatizaciones y sientes que la ventaja competitiva de tu empresa se erosiona sin una ruta clara.',
          antidote: 'FutureProof™ Framework: priorización estricta del backlog por impacto financiero y time-to-market agresivo.'
        },
        {
          tag: 'CAPITAL DESPERDICIADO',
          iconType: 'roi-blind',
          title: 'Proyectos desalineados del flujo de caja',
          desc: 'El área de TI lanza pilotos entretenidos pero que no resuelven ningún cuello de botella crítico del P&L o de los costos operativos.',
          antidote: 'Roadmap ejecutivo trimestral alineado al EBITDA que condiciona cada sprint de desarrollo a un retorno medible.'
        }
      ]
    },
    matrix: {
      eyebrow: '02 — Madurez Estratégica AI',
      title: 'Niveles de adopción de IA en el corporativo.',
      subtitle: 'Descubre en qué etapa se encuentra tu empresa y cómo dar el siguiente paso con retorno de inversión garantizado.',
      headers: ['Etapa', 'Exploratoria (Hype)', 'Táctica (Eficiencia)', 'Estándar BluePixel Estratégico', 'Impacto Financiero'],
      rows: [
        { label: 'Uso de la IA', cols: ['Licencias individuales de ChatGPT', 'Agentes automatizando procesos internos', 'Productos nativos con IA como ventaja competitiva', 'Nuevos flujos de ingresos directos'] },
        { label: 'Gobernanza & Seguridad', cols: ['Políticas inexistentes (Shadow AI)', 'Filtros y entornos privados básicos', 'Framework corporativo de IA ética y segura (VPC)', 'Riesgo reputacional mitigado'] },
        { label: 'Alineación de Negocio', cols: ['Iniciativas aisladas desconectadas', 'Casos de uso para reducir costos operativos', 'IA embebida en el core del valor al cliente', 'Multiplicador de Valoración (M&A)'] }
      ]
    },
    specs: {
      eyebrow: '03 — Cómo te asesoramos',
      title: 'Consultoría accionable, cero metodologías teóricas.',
      subtitle: 'Entendemos tu estado de resultados antes de recomendarte cualquier arquitectura tecnológica.',
      items: [
        { title: 'AI & Tech Readiness Assessment', desc: 'Evaluamos tu cultura operativa, calidad de datos y arquitectura tecnológica actual para determinar si estás realmente listo para la IA.' },
        { title: 'Identificación de Casos de Uso por ROI', desc: 'Mapeamos tu cadena de valor para encontrar los procesos donde la tecnología y la IA reducen fricción o costos de forma inmediata y medible.' },
        { title: 'Diseño de Gobernanza Corporativa', desc: 'Establecemos comités de dirección, políticas de soberanía de datos y normativas éticas para escalar tecnología sin riesgos.' }
      ]
    },
    quiz: {
      title: '¿Tienes una estrategia clara de IA o solo estás siguiendo la tendencia?',
      subtitle: 'Mide la madurez de la visión de Inteligencia Artificial y tecnología de tu empresa.',
      questions: [
        {
          q: '1. ¿Quién lidera las iniciativas de Inteligencia Artificial en tu empresa actualmente?',
          options: [
            { text: 'Un comité C-Level formalmente alineado con los objetivos del negocio', score: 3 },
            { text: 'El área de TI / Innovación por su cuenta de forma aislada', score: 2 },
            { text: 'Colaboradores individuales de forma proactiva y dispersa', score: 1 },
            { text: 'Nadie, aún no comenzamos formalmente ninguna discusión', score: 0 }
          ]
        },
        {
          q: '2. ¿Cómo deciden en qué proyecto de tecnología o IA invertir presupuesto?',
          options: [
            { text: 'Análisis estricto de ROI financiero y viabilidad técnica previa', score: 3 },
            { text: 'Nos basamos en lo que suena más prometedor o novedoso', score: 2 },
            { text: 'Por sugerencias de proveedores comerciales de software', score: 1 },
            { text: 'Actuamos reactivamente a las modas del mercado (Hype)', score: 0 }
          ]
        },
        {
          q: '3. Respecto a las políticas corporativas del uso de IA, tu empresa:',
          options: [
            { text: 'Tiene políticas estrictas, infraestructura privada y normativas claras', score: 3 },
            { text: 'Tiene un documento de reglas básicas (pero poco supervisado)', score: 2 },
            { text: 'Están empezando a discutirlo en el área legal', score: 1 },
            { text: 'No tiene reglas, cualquiera usa herramientas públicas libremente', score: 0 }
          ]
        },
        {
          q: '4. ¿Tus competidores directos ya están utilizando IA como ventaja operativa?',
          options: [
            { text: 'Sí, y nosotros estamos a la par o liderando el mercado', score: 3 },
            { text: 'Sí, y nosotros estamos tratando de alcanzarlos con urgencia', score: 2 },
            { text: 'Apenas están haciendo pruebas piloto básicas', score: 1 },
            { text: 'La industria en general aún no ha comenzado a transformarse', score: 0 }
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
        { num: '03', title: 'Reporte de Data & AI Readiness', desc: 'Evaluación técnica de por qué tus datos y sistemas actuales sirven o no sirven para alimentar modelos.' },
        { num: '04', title: 'Framework de Gobernanza AI', desc: 'Políticas redactadas para compliance, soberanía de datos y mitigación de riesgos operativos.' },
        { num: '05', title: 'Arquitectura Objetivo HLD', desc: 'Diagramas conceptuales (High-Level Design) de cómo encajará la IA en tus sistemas actuales.' },
        { num: '06', title: 'Workshops Ejecutivos para el Board', desc: 'Sesiones de alineación para el Consejo Directivo, desmitificando la tecnología con números.' }
      ]
    },
    timeline: {
      eyebrow: '07 — Metodología Consultiva',
      title: 'Celeridad analítica para no perder momentum.',
      subtitle: 'En menos de un mes, transformamos la incertidumbre en un plan de acción concreto y defendible ante el Consejo.',
      steps: [
        { num: '01', title: 'Alineación de C-Levels', desc: 'Sesiones con directores de área para entender cuellos de botella del negocio (P&L y operaciones).', deliverables: ['Matriz de Oportunidades de Negocio'] },
        { num: '02', title: 'Mapeo de Factibilidad Técnica', desc: 'Análisis rápido con el equipo de TI para auditar sistemas, datos y costos de inferencia.', deliverables: ['AI Readiness Score'] },
        { num: '03', title: 'Diseño del Portafolio AI', desc: 'Ideación estructurada de soluciones ponderadas por retorno económico vs esfuerzo técnico.', deliverables: ['Backlog Priorizado por ROI'] },
        { num: '04', title: 'Presentación del Roadmap Oficial', desc: 'Entrega final al Comité Ejecutivo con rutas claras: qué comprar, qué construir y qué descartar.', deliverables: ['Roadmap Estratégico Oficial'] }
      ]
    },
    faqs: [
      { q: '¿Cuál es la diferencia entre Business AI Consulting y AI Engineering?', a: 'Business AI Consulting es la fase estratégica previa (estrategia, viabilidad, ROI y gobernanza en 2 a 4 semanas - Pilar 01). AI Engineering es la fase de ejecución técnica (construir la plataforma o los agentes - Pilar 02 o 03). Recomendamos comenzar por la consultoría para asegurar certeza antes de programar.' },
      { q: '¿Esta consultoría recomienda soluciones de terceros o solo desarrollo a la medida?', a: 'Somos tecnológicamente agnósticos. Si tu necesidad se resuelve mejor y más barato comprando licencias de un software existente o un SaaS especializado, esa será nuestra recomendación. Si requieres propiedad intelectual y ventajas competitivas únicas, recomendaremos construir.' },
      { q: '¿Quiénes de nuestra empresa deben participar en el proceso?', a: 'Idealmente los directores de línea de negocio (Finanzas, Operaciones, Ventas) para definir las prioridades estratégicas, y los líderes tecnológicos (CIO, CTO) para evaluar la viabilidad de la infraestructura.' }
    ]
  }
};
