# Especificación de Copy, UX y Contenido: Las 3 Landing Pages Maestras de BluePixel

Este documento contiene la arquitectura de comunicación, textos reales (copywriting B2B de alto impacto), estructura de componentes y distribución de **todos los servicios de BluePixel** (incluyendo los de las 10 páginas previas de Rocketing) agrupados en los 3 Pilares/Clusters de Demanda.

---

# 📱 LANDING 1: APPS & PLATAFORMAS DIGITALES
**Ruta:** `/desarrollo-apps` (Alias / Redirecciones 301 desde: `/desarrollo-web`, `/diseno-ux-ui`, `/desarrollo-mvp`, `/software-a-la-medida`)  
**Audiencia:** Directores de Tecnología (CTOs), VPs de Producto, Directores de Innovación y Founders con tracción.  
**Dolor Central:** *"Las agencias tradicionales entregan código espagueti que colapsa en producción, interfaces que nadie usa y nos amarran a costos ocultos por hora."*

---

## Estructura de la Página

### 1. HERO SECTION (Impacto & Tesis de Ingeniería)
* **Kicker:** `✦ INGENIERÍA DE SOFTWARE CORPORATIVO & CLOUD-NATIVE`
* **H1:** "Construimos Apps y Plataformas B2B diseñadas para resistir alta concurrencia. Cero deuda técnica, 100% soberanía de tu código."
* **Subtítulo:** "Dejamos atrás las 'fábricas de software' tradicionales. Desarrollamos aplicaciones nativas, portales empresariales y productos digitales con arquitectura modular, telemetría en tiempo real y propiedad intelectual absoluta de tu empresa."
* **CTAs Primarios:**
  * `[ Agendar Diagnóstico Técnico de 4 Semanas ]` (Abre modal de agendamiento)
  * `[ Probar Simulador de Arquitectura ↓ ]` (Scroll suave a la demo)
* **Barra de Confianza:** "Despliegues auditados bajo estándares SOC2 y OWASP Top 10 · AWS & Azure Certified Partners."

---

### 2. DEMO EN VIVO / SIMULADOR INTERACTIVO (Proof of Capability)
* **Componente:** `NodeFlowSim` (Simulador de Microservicios y Sincronización) + `Auditor de Fricción Web`.
* **Copy del Simulador:** *"Compara una arquitectura monolítica tradicional vs. una arquitectura BluePixel en tiempo real. Observa latencia, tolerancia a fallos y concurrencia de usuarios simultáneos."*
* **Interactividad:** El usuario puede simular picos de tráfico (1k, 10k, 100k usuarios concurrentes) y ver cómo el sistema auto-escala con latencia inferior a 80ms.

---

### 3. SELECTOR INTERACTIVO DE SERVICIOS (El "Hub" que absorbe las landings de Rocketing)
*Aquí vive el 100% de los servicios de producto digital sin aburrir al visitante con texto plano:*

```
[ Selector de Pestañas Interactivas: Haz clic para ver alcance y arquitectura ]
├── [ 1. Apps Nativas e Híbridas (iOS / Android) ]
├── [ 2. Plataformas Web & Portales B2B ]
├── [ 3. Diseño de Producto Digital & UX/UI ]
├── [ 4. MVPs de Alta Fidelidad (2 a 4 Meses) ]
└── [ 5. Modernización de Software Legacy ]
```

#### Contenido de la Pestaña 1: Apps Nativas e Híbridas (Ex `/desarrollo-apps`)
* **Propuesta de Valor:** "Aplicaciones móviles con experiencia offline-first y sincronización en milisegundos."
* **Casos de Uso:** Apps de logística en ruta, terminales de inventario punto de venta, portales de clientes de banca y seguros.
* **Stack:** Swift, Kotlin, Flutter / React Native, WebSockets para telemetría en vivo.
* **Entregable Clave:** Repositorio privado en GitHub con pipelines CI/CD automatizados y cobertura de pruebas >80%.

#### Contenido de la Pestaña 2: Plataformas Web & Portales B2B (Ex `/desarrollo-web`)
* **Propuesta de Valor:** "Portales transaccionales de misión crítica que reemplazan procesos fragmentados en correos y hojas de cálculo."
* **Casos de Uso:** Extranets para distribuidores, dashboards de visualización de datos masivos, plataformas multi-tenant SaaS.
* **Stack:** Next.js / React, Node.js / Go, PostgreSQL distribuido, GraphQL / gRPC.
* **Entregable Clave:** Arquitectura de microfrontends con autenticación corporativa (SSO / SAML / Okta).

#### Contenido de la Pestaña 3: Diseño UX/UI & Auditoría de Fricción (Ex `/diseno-ux-ui`)
* **Propuesta de Valor:** "No diseñamos 'pantallas bonitas'. Eliminamos la fricción cognitiva que frena la adopción de software corporativo."
* **Casos de Uso:** Rediseño de ERPs obsoletos, sistemas de diseño (Design Systems) para equipos distribuidos, investigación con usuarios reales bajo metodología IMPATH™.
* **Herramienta Integrada:** *Auditor de Fricción Web* (calcula cuántos miles de dólares pierde la empresa por cada segundo de retraso o clic redundante).
* **Entregable Clave:** Sistema de Diseño en Figma con especificación lista para código (Tokens, accesibilidad WCAG AAA y prototipo navegable).

#### Contenido de la Pestaña 4: MVPs de Alta Fidelidad en 2 a 4 Meses (Ex `/desarrollo-mvp`)
* **Propuesta de Valor:** "Valida nuevas unidades de negocio con software de grado de producción en 2 a 4 meses con UX validado, no con prototipos desechables."
* **Casos de Uso:** Spin-offs corporativas, validación de nuevos canales de venta digital, plataformas piloto para fondos de inversión.
* **Metodología:** Sprint cero de arquitectura + sprints quincenales de despliegue continuo con SLA 99.9%.
* **Entregable Clave:** Producto operativo en producción con primeros usuarios reales y métricas de retención configuradas (Pilar 03).

#### Contenido de la Pestaña 5: Modernización de Software Legacy (Ex `/software-a-la-medida`)
* **Propuesta de Valor:** "Refactorizamos y migramos sistemas obsoletos a la nube sin detener la operación diaria de tu negocio."
* **Casos de Uso:** Migración de monolitos en PHP/Java a arquitecturas cloud de microservicios contenerizados (Docker/Kubernetes).
* **Estrategia:** Patrón Strangler Fig (migración modular paulatina con riesgo cero de interrupción operativa).

---

### 4. MODALIDAD DE CONTRATACIÓN (Conexión con los 4 Pilares Oficiales)
* **Pilar 01 - Consultoría Digital (2 a 4 Semanas):** Blueprint completo de arquitectura, auditoría de código/UX y cálculo de ROI antes de comprometer capital mayor.
* **Pilar 02 - Agentes & Automatización (2 a 4 Semanas):** Conexión de flujos determinísticos y RAG sobre stack actual vía MCP.
* **Pilar 03 - Plataformas Digitales (2 a 4 Meses):** Construcción Full Stack Cloud-Native desde cero a producción con UX validado.
* **Pilar 04 - Evolución Digital (Roadmap 6 a 12 Meses):** Squad dedicado continuo para optimización, reducción de deuda técnica y CRO.

---

### 5. CIERRE Y CONVERSIÓN
* **Formulario Multi-Paso:**
  * "¿Qué tipo de producto necesitas construir o modernizar?" (App Móvil / Web App / Rediseño UX / MVP).
  * "¿Cuál es tu ventana de tiempo de lanzamiento?" (Inmediato / 2 a 4 meses).
  * "Déjanos tu correo corporativo y agenda directamente con un Lead Architect."

---
---

# ⚙️ LANDING 2: AUTOMATIZACIÓN E INTEGRACIÓN OPERATIVA
**Ruta:** `/automatizacion` (Alias / Redirecciones 301 desde: `/servicios-de-automatizacion`, `/integraciones-erp`)  
**Audiencia:** Directores de Operaciones (COOs), CFOs, Directores de Logística y Gerentes de TI.  
**Dolor Central:** *"Nuestros sistemas no se hablan entre sí; el equipo pasa cientos de horas al mes haciendo 'copiar y pegar' en Excel y el RPA tradicional se rompe a cada rato."*

---

## Estructura de la Página

### 1. HERO SECTION (Impacto & Retorno Operativo)
* **Kicker:** `✦ EFICIENCIA OPERATIVA, MIDDLEWARE & APA DETERMINÍSTICO`
* **H1:** "Eliminamos la fricción manual entre tus sistemas legacy y tu equipo. Automatización que no se rompe."
* **Subtítulo:** "Conectamos tu ERP (SAP, Oracle, NetSuite), bases de datos y CRMs con agentes de automatización resilientes. Recupera miles de horas operativas al mes sustituyendo tareas repetitivas por middleware determinístico."
* **CTAs Primarios:**
  * `[ Calcular Horas Recuperables en Diagnóstico ]`
  * `[ Ver Demo de Conciliación en Vivo ↓ ]`
* **Barra de Confianza:** "Compatible con SAP S/4HANA, Oracle ERP, Salesforce, Microsoft Dynamics y SAT."

---

### 2. DEMO EN VIVO / SIMULADOR INTERACTIVO
* **Componente:** `ERP Bridge Sim` + `Finance Matcher`.
* **Copy del Simulador:** *"Observa cómo nuestro middleware intercepta 1,000 transacciones bancarias, cruza XMLs del SAT y concilia en el ERP en menos de 45 segundos sin intervención humana."*
* **Interactividad:** Simulación de detección de discrepancias y resolución de errores con auto-healing sin que el proceso colapse.

---

### 3. SELECTOR INTERACTIVO DE CAPACIDADES OPERATIVAS

```
[ Selector de Pestañas: Automatizaciones listas para producción ]
├── [ 1. Integración de ERPs (SAP / Oracle / NetSuite) ]
├── [ 2. Conciliación Financiera y Contable Autónoma ]
├── [ 3. APA: RPA con Visión Computacional & Auto-Healing ]
└── [ 4. Middleware Corporativo & Pipelines de Datos ]
```

#### Contenido de la Pestaña 1: Integración de ERPs (Ex `/erp-bridge`)
* **Propuesta de Valor:** "Extracción e inyección bidireccional de datos con tus ERPs core sin comprometer la integridad de tu base de datos."
* **Casos de Uso:** Sincronización de pedidos entre e-commerce B2B y SAP, actualización automática de inventarios multialmacén.
* **Garantía:** Conexión segura mediante APIs certificadas, colas de mensajes (Kafka / RabbitMQ) y logs de auditoría inmutables.

#### Contenido de la Pestaña 2: Conciliación Financiera Autónoma (Ex `/finance-matcher`)
* **Propuesta de Valor:** "Cierre de mes en 40 minutos en lugar de 8 días de hojas de cálculo."
* **Casos de Uso:** Cruce automático de estados de cuenta bancarios contra facturación SAT y cuentas por cobrar en ERP.
* **Métrica Real:** Reducción del 99.4% en discrepancias contables y cero multas por timbrado extemporáneo.

#### Contenido de la Pestaña 3: APA - Agentic Process Automation (Ex `/apa`)
* **Propuesta de Valor:** "El sustituto del RPA tradicional. Agentes que interpretan interfaces visuales y no fallan si un botón cambia de lugar."
* **Casos de Uso:** Carga de datos en portales gubernamentales o proveedores que no ofrecen API pública.
* **Diferenciador:** Auto-healing basado en visión computacional. Si la UI cambia, el agente se adapta autónomamente.

#### Contenido de la Pestaña 4: Middleware Corporativo & Pipelines de Datos
* **Propuesta de Valor:** "Unifica tus silos de información en un bus de eventos centralizado y seguro."
* **Casos de Uso:** Flujos automatizados de onboarding de proveedores, alertas tempranas de inventario crítico en Slack/Teams.
* **Entregable Clave:** Dashboards de telemetría operativa que reportan en vivo el estado y latencia de cada flujo automatizado.

---

### 4. MODALIDAD DE CONTRATACIÓN
* **Paso 01 - Diagnóstico de Flujos Operativos (4 Semanas):** Mapeo de cuellos de botella, cálculo de ROI financiero y diseño de la arquitectura de integración.
* **Paso 02 - Despliegue de Conectores & Agentes:** Implementación modular garantizando que los sistemas legacy sigan operando al 100%.

---
---

# 🤖 LANDING 3: AGENTIZACIÓN E INTELIGENCIA ARTIFICIAL CORPORATIVA
**Ruta:** `/agentizacion` (Alias / Redirecciones 301 desde: `/consultoria-inteligencia-artificial`, `/triage-rag`, `/legal-onboarding`, `/aoc`, `/data-privacy`)  
**Audiencia:** Directores Generales (CEOs), Directores de Información (CIOs), Directores Jurídicos y Líderes de Transformación Digital.  
**Dolor Central:** *"Todo mundo habla de IA pero nadie sabe cómo implementarla de forma segura. Nos da miedo que alucine, filtre secretos industriales o viole la ley de protección de datos."*

---

## Estructura de la Página

### 1. HERO SECTION (Impacto & Tesis de IA Sin Alucinaciones)
* **Kicker:** `✦ SISTEMAS MULTI-AGENTE, PROTOCOLO MCP & PRIVACIDAD LFPDPPP`
* **H1:** "Desplegamos Agentes de Inteligencia Artificial que operan sobre tus datos reales sin alucinar y con estricta privacidad."
* **Subtítulo:** "No vendemos 'prompts' ni experimentos de laboratorio. Diseñamos sistemas multi-agente con Protocolo MCP y arquitecturas RAG determinísticas que ejecutan acciones en tus sistemas internos con trazabilidad forense total."
* **CTAs Primarios:**
  * `[ Agendar Escaneo de Viabilidad de IA ]`
  * `[ Probar Agente de Soporte RAG en Vivo ↓ ]`
* **Barra de Confianza:** "Aislamiento total de modelos (Tus datos NUNCA entrenan modelos públicos) · Cumplimiento LFPDPPP y SOC2."

---

### 2. DEMO EN VIVO / SIMULADOR INTERACTIVO
* **Componente:** `WhatsApp RAG Sim` + `Document Legal Sim`.
* **Copy del Simulador:** *"Interactúa con un agente corporativo RAG. Intenta hacerle preguntas fuera de política o pedirle que 'alucine' para ver cómo el guardrail de seguridad bloquea respuestas no autorizadas citando la fuente exacta."*
* **Interactividad:** Simulación de una conversación compleja de soporte/ventas y análisis de un contrato en PDF con extracción instantánea de cláusulas de riesgo.

---

### 3. SELECTOR INTERACTIVO DE SOLUCIONES AGENTICAS

```
[ Selector de Pestañas: Casos de Uso de IA en Producción ]
├── [ 1. Asistentes RAG de Soporte & Ventas en WhatsApp / Web ]
├── [ 2. Análisis Documental, Licitaciones (RFPs) & Legal KYC ]
├── [ 3. Monitoreo Autónomo de Nube & DevSecOps (AOC) ]
├── [ 4. Data Privacy, Blindaje de Modelos & Cumplimiento LFPDPPP ]
└── [ 5. Consultoría de Transformación & Roadmap de IA ]
```

#### Contenido de la Pestaña 1: Triage RAG para WhatsApp & Soporte (Ex `/triage-rag`)
* **Propuesta de Valor:** "Atención Nivel 1 que resuelve el 70% de las consultas corporativas sin riesgo de marca."
* **Garantía Técnica:** Respuestas basadas 100% en tus manuales, políticas y base de conocimiento. Cero alucinaciones. Transferencia a un agente humano con resumen instantáneo en caso de fricción.
* **Integraciones:** WhatsApp Business API, Zendesk, Salesforce Service Cloud, Slack.

#### Contenido de la Pestaña 2: Legal KYC & Licitaciones RFPs (Ex `/legal-onboarding` y `/rfp-analyst`)
* **Propuesta de Valor:** "Audita contratos de 200 páginas y responde cuestionarios de licitación gubernamental en minutos."
* **Casos de Uso:** Extracción automatizada de obligaciones contractuales, detección de riesgos en cláusulas de penalización y validación de expedientes KYC de proveedores.
* **Entregable Clave:** Motor de extracción estructurada en JSON con trazabilidad directa a la página y párrafo de origen.

#### Contenido de la Pestaña 3: Agentic Operations Center - AOC (Ex `/aoc`)
* **Propuesta de Valor:** "DevOps autónomo que vigila tu infraestructura 24/7 y resuelve incidentes mientras tu equipo duerme."
* **Casos de Uso:** Detección predictiva de caídas de base de datos, auto-escalado de contenedores ante picos de demanda y parches automáticos de seguridad.
* **Canal de Notificación:** Bitácora en tiempo real vía Slack/Teams con explicación del incidente y la remediación aplicada.

#### Contenido de la Pestaña 4: Blindaje de Datos & Privacidad (Ex `/data-privacy`)
* **Propuesta de Valor:** "Implementa IA Generativa cumpliendo al 100% con la legislación mexicana (LFPDPPP) y estándares internacionales."
* **Medidas de Seguridad:** Anonimización en vuelo de datos personales (PII), modelos self-hosted o tenants aislados en AWS/Azure Bedrock y encriptación de grado militar en reposo y en tránsito.

#### Contenido de la Pestaña 5: Consultoría Estratégica & Roadmap de IA (Ex `/consultoria-inteligencia-artificial`)
* **Propuesta de Valor:** "Identificamos dónde la IA genera verdadero retorno de inversión y dónde es solo una moda costosa."
* **Metodología:** Auditoría técnica de viabilidad, selección de modelos (Small vs. Large Language Models) y cálculo de costo por token para asegurar que la solución sea financieramente sostenible a escala.

---

### 4. MODALIDAD DE CONTRATACIÓN
* **Paso 01 - Diagnóstico de Viabilidad Agentica (4 Semanas):** Validación de datos internos, prueba de concepto RAG en ambiente controlado y dictamen de seguridad técnica.
* **Paso 02 - Despliegue de Sistemas Multi-Agente:** Implementación en producción con Protocolo MCP, guardrails de seguridad y capacitación a equipos clave.

---

# Matriz de Equivalencias y Redirecciones

| Landing Antigua de Rocketing | Dónde queda integrada | Componente / Demo Asociado |
| :--- | :--- | :--- |
| `cotiza.bluepixel.mx/desarrollo-web` | Cluster 1 (`/desarrollo-apps#web-apps`) | `NodeFlowSim` (Arquitectura B2B) |
| `cotiza.bluepixel.mx/desarrollo-apps` | Cluster 1 (`/desarrollo-apps#mobile`) | Demo Sincronización en Tiempo Real |
| `cotiza.bluepixel.mx/diseno-ux-ui` | Cluster 1 (`/desarrollo-apps#ux-ui`) | `Auditor de Fricción Web` |
| `cotiza.bluepixel.mx/desarrollo-mvp` | Cluster 1 (`/desarrollo-apps#mvp`) | Calculadora MVP en 90 días |
| `cotiza.bluepixel.mx/software-a-la-medida` | Cluster 1 (`/desarrollo-apps#legacy`) | Patrón Strangler Fig de Migración |
| `cotiza.bluepixel.mx/servicios-de-automatizacion` | Cluster 2 (`/automatizacion#middleware`) | `ERP Bridge Sim` |
| `cotiza.bluepixel.mx/finance-matcher` | Cluster 2 (`/automatizacion#finanzas`) | `Finance Matcher` (Conciliación SAT) |
| `cotiza.bluepixel.mx/apa` | Cluster 2 (`/automatizacion#apa`) | `VisionAgentSim` (Auto-healing) |
| `cotiza.bluepixel.mx/consultoria-inteligencia-artificial` | Cluster 3 (`/agentizacion#consultoria`) | Enjambre Multi-Agente MCP |
| `cotiza.bluepixel.mx/triage-rag` | Cluster 3 (`/agentizacion#triage`) | `WhatsApp RAG Sim` (Cero alucinaciones) |
| `cotiza.bluepixel.mx/legal-onboarding` / `rfp-analyst` | Cluster 3 (`/agentizacion#legal`) | `Document Legal Sim` (Auditoría PDF) |
| `cotiza.bluepixel.mx/aoc` | Cluster 3 (`/agentizacion#aoc`) | Terminal de Monitoreo DevSecOps |
| `cotiza.bluepixel.mx/data-privacy` | Cluster 3 (`/agentizacion#privacidad`) | Inspector de Privacidad LFPDPPP |
