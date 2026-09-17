# AUDITORÍA DEL SITIO NUEVO COMO MÁQUINA DE CONVERSIÓN
**Ruta base:** `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app`

## VEREDICTO EN UNA LÍNEA
Es un **excelente sitio de presentación** y una **máquina de conversión inexistente**: el formulario no envía datos a ningún lado (`console.log`), no hay un solo pixel ni evento de conversión en toda la app React, y el build es un SPA vacío para crawlers montado en una ruta `/bluepixel/` de GitHub Pages. Recibir pauta hoy sería quemar dinero sin poder capturar ni medir un solo lead.

---

## 1. RECORRIDO REAL DEL VISITANTE (orden exacto de `App.jsx`)

Orden de render en `src/App.jsx:83-111` (vista `home`). Nota estructural: **no hay rutas reales**, es hash-routing (`App.jsx:46-59`), `#/apps`, `#/automatizacion`, `#/agentizacion`.

| # | Sección (archivo) | Qué promete | Dónde convierte / dónde se pierde |
|---|---|---|---|
| 1 | **Navbar** `layout/Navbar.jsx` | CTA persistente "Diagnóstico Operativo" (`:44-49`) + 3 chips de cluster | CONVIERTE. Único CTA siempre visible. **Pierde:** "Casos de Éxito" apunta a `#case-studies` (`:40`) y ese ID **no existe** (el real es `casos`). Link muerto en la nav principal. |
| 2 | **HeroWithPrompt** `hero/HeroWithPrompt.jsx` | "Menos fricción operativa. Más control. Software que trabaja por ti" + subhead deep-tech (SAP, MCP, agentes) `:26-34` | CONVIERTE bien. Este es el mejor activo anti-"desfase de información" de todo el sitio: en 3 líneas posiciona ingeniería, no diseño. CTA primario abre el modal. |
| 3 | **HeroPromptEngine** `hero/HeroPromptEngine.jsx` | Terminal interactiva: "Escribe tu problema y halla una solución" (`:89`) | **PIERDE — y daña credibilidad.** Ver punto 6. Devuelve un preset arbitrario sin leer el input. |
| 4 | **SocialProofSection** `sections/SocialProofSection.jsx` | 12 logos corporativos + "10+ años / #1 Firma UX / 200+ sistemas / 99.9% SLA" (`:32-51`) | Alta autoridad, **pero:** el titular dice que esos corporativos "operan agentes de IA construidos por BluePixel" (`:11`) y solo 4 (Bimbo, RadioShack, LifeMiles, IQOS) tienen caso documentado. Además el claim ancla es **"#1 Firma UX en México"** (`:36-37`): el activo de prueba social más fuerte del sitio refuerza exactamente el posicionamiento de diseño que la tesis interna quiere abandonar. |
| 5 | **TrustBadgesSection** `sections/TrustBadgesSection.jsx` | DesignRush #1, Clutch, AWS, CyberVadis, ScrumStudy, ISO 27001 | **PIERDE.** "Verificar certificación" (`:141`) linkea al **home genérico** de designrush.com (`:17`), clutch.co (`:33`), aws.amazon.com/partners (`:51`) — no al perfil de BluePixel. Es un botón de verificación que no verifica nada. ISO 27001 marcado "Próximamente" (`:92`) resta más de lo que suma en un comité de compras. |
| 6 | **ThreeClustersOverview** `sections/ThreeClustersOverview.jsx` | Los 3 clusters con métrica dura cada uno (99.98% uptime / −94% conciliación / 0% alucinaciones) | **MEJOR SECCIÓN DEL SITIO.** Arquitectura de demanda clara, CTA de rescate al final para el indeciso (`:178-184`). Convierte o segmenta. |
| 7 | **TechnicalSovereignty** `sections/TechnicalSovereignty.jsx` | "Tu infraestructura. Tus datos. Tu código." VPC, propiedad del código, Zero Data Retention | Excelente manejo de objeción para CTO/CISO. **Pierde:** cero CTA en toda la sección. El visitante convencido tiene que seguir scrolleando. |
| 8 | **ImpathFrictionSection** `sections/ImpathFrictionSection.jsx` | IMPATH + Mixpanel + Vault como tecnología propietaria | 4 CTAs (`:36, :117, :198, :270`). Densidad correcta. **Riesgo:** vende telemetría de UX, no ingeniería de agentes — vuelve a empujar el posicionamiento de diseño. |
| 9 | **CaseStudiesSection** `sections/CaseStudiesSection.jsx` | "CASOS DE ÉXITO AUDITADOS" (`:59`): +40% Bimbo, −60% RadioShack, +28% LifeMiles, +55% IQOS | **PUNTO DE FUGA MÁS CARO DEL SITIO.** `App.jsx:96` le pasa `onOpenCase` y el componente **nunca lo invoca**: el único `onClick` del archivo es el tab switcher (`:74`). El momento de máxima intención de compra — acaba de ver el resultado en Bimbo — **no tiene botón**. Tampoco hay quote de cliente, PDF descargable ni "ver caso completo". |
| 10 | **FAQSection** `sections/FAQSection.jsx` | 5 objeciones: IP, time-to-production, lock-in de modelo, build vs buy, diferenciador | Contenido de altísima calidad para el ICP enterprise. **Pierde:** sin CTA de cierre. |
| 11 | **SixCapabilitiesGrid** `sections/SixCapabilitiesGrid.jsx` | 6 capacidades navegables al cluster/subservicio | Buena mecánica de ruteo (`:132`). **Problema de posicionamiento:** la capacidad #1 de la lista es **"UX/UI Design & Product Strategy"** (`:13`) y la ingeniería de agentes aparece hasta la #3 (`:47`). El orden de lectura refuerza "agencia de diseño". |
| 12 | **ThreeWaysToWork** `sections/ThreeWaysToWork.jsx` | Los 3 pilares de contratación (01 / 02 / 01+02) con preselección de paquete | CONVIERTE. Los 3 CTAs pasan el nombre del paquete al formulario (`:69, :111, :156`). Es el mecanismo de calificación implícita mejor resuelto. **Falta:** rangos de inversión. Sin precio, el lead de $20k y el de $500k llenan el mismo formulario. |
| 13 | **EngineeringLeadership** `sections/EngineeringLeadership.jsx` | "Lead Architect, no juniors facturados como seniors" + quote de garantía (`:44`) | Buen manejo de objeción. Sin CTA. La quote no tiene autor atribuido (¿María? ¿Leo?). |
| 14 | **PostContactSLA** `sections/PostContactSLA.jsx` | SLA explícito: Minuto 0 NDA / 24 hrs auditoría / 48 hrs blueprint | Reduce fricción de contacto, bien ubicado antes del cierre. **Crítico operativo:** promete NDA automático firmado digitalmente en minuto 0 — no existe nada que lo ejecute. Recibe `onOpenContact` (`:3`) pero `App.jsx:101` no se lo pasa y el componente tampoco lo usa. |
| 15 | **FinalCTA** `sections/FinalCTA.jsx` | "El 85% de los proyectos de IA nunca llega a producción. Nosotros sí." | CONVIERTE (`:26`). **Pierde:** el CTA secundario "Ver Casos de Éxito" apunta a `#case-studies` (`:34`) — **link roto**, mismo bug que el Navbar. |
| 16 | **Footer** `layout/Footer.jsx` | Cierre de marca | **PIERDE TODO.** Sin teléfono, sin correo, sin dirección, sin LinkedIn, sin aviso de privacidad. **8 links `href="#"` muertos** (`:38-41`, `:60-62`), incluyendo "Acuerdo de Confidencialidad (NDA)", "Políticas Zero-Data Retention" y "SLA de Soporte Crítico". `#contact-form` (`:51`) apunta a un ID inexistente. |

**Componentes construidos y nunca renderizados (trabajo pagado, cero impacto):**
- `sections/WorkflowTeardown.jsx` — importado en `App.jsx:13`, jamás usado en el JSX.
- `sections/AgentTerminalDemo.jsx` — 220 líneas, huérfano.
- `sections/TechPartners.jsx` — 80 líneas, huérfano.
- `data/presets.js` y `data/clientLogos.js` — duplicados exactos de `data/constants.js`; nadie los importa (riesgo de editar el archivo equivocado).

---

## 2. MULTISTEPCONTACT — **ES UN STUB. NO HAY CRM.**

`src/components/forms/MultiStepContact.jsx`

**El hallazgo crítico (línea 29-33):**
```js
const handleSubmitFinal = (e) => {
  e.preventDefault();
  console.log('Submitting:', { ...formData, preselectedPackage });
  setSubmitted(true);
};
```

No hay `fetch`, no hay `action`, no hay webhook, no hay `mailto`, no hay HubSpot/Salesforce/Pipedrive/Zapier. **Verificado por grep sobre todo `src/`: cero llamadas de red en el proyecto entero.** El lead se imprime en la consola del navegador del propio prospecto y se pierde para siempre. Acto seguido el usuario ve "Diagnóstico Recibido — un arquitecto te contactará en menos de 24 horas hábiles" (`:208-211`). **Es una promesa de SLA sobre un dato que nunca existió.**

**Campos y pasos:**
- **Paso 1 — Tú** (`:90-115`): `fullName` (req), `workEmail` (req, type=email), `phone` (opcional).
- **Paso 2 — Empresa** (`:118-150`): `company` (req), `role` (req, texto libre), `industry` (chips: Manufactura, Retail B2C, Logística, Fin. & Seguros, Salud, Gobierno, Otro).
- **Paso 3 — Necesidad** (`:153-202`): `workflow` (textarea req), `urgency` (ASAP / Este trimestre / 6 meses / Explorando), `consentData` (checkbox obligatorio para habilitar submit, `:195`).
- Contexto: `preselectedPackage` inyectado desde la sección de origen (`App.jsx:68-73`), mostrado como banner (`:41-49`).

**Calificación: recolecta señal, no la usa.** Tiene las 3 variables de scoring (cargo, industria, urgencia) pero:
- No hay campo de **presupuesto ni tamaño de empresa** — la variable que separa al lead de $20k del de $500k, que es exactamente el problema diagnosticado en la tesis del "desfase". Las landings sí tienen "Tamaño del Equipo"; el formulario principal no.
- `industry` y `urgency` **no son obligatorios**: se puede enviar sin seleccionarlos.
- `role` es texto libre, no dropdown de seniority → imposible de segmentar automáticamente.
- No hay scoring, ni ruteo a Pablo Gómez / José de Buen, ni captura de `utm_source`/`gclid`/`referrer` (**verificado: cero captura de UTM en todo el repo**). Sin `gclid`, la atribución de Google Ads a venta es imposible aunque mañana se conecte un CRM.

**Riesgo legal (LFPDPPP):** el checkbox de consentimiento (`:189`) dice "Acepto el tratamiento de mis datos bajo la Política de Privacidad de BluePixel y la LFPDPPP" y estiliza "Política de Privacidad" en azul subrayado — **pero es un `<span>`, no un `<a>`. No lleva a ningún lado y no existe el documento.** Es consentimiento sobre un aviso inaccesible.

---

## 3. INSTRUMENTACIÓN — **CERO EN LA APP REACT**

Grep exhaustivo de `gtag|dataLayer|gtm|fbq|_linkedin|lintrk|hotjar|clarity|mixpanel|posthog|segment|analytics` sobre `src/` + `index.html` + `dist/index.html`.

**LO QUE EXISTE:**
| Qué | Dónde | Estado |
|---|---|---|
| GTM snippet | `dist/landings/*.html:9-13` (las 10 landings) | **INÚTIL** — ID placeholder `GTM-XXXXXXX`, 20 ocurrencias literales. No carga contenedor. |
| Evento `lead_form_submitted` | `dist/landings/triage_rag.html:643` (y sus 9 gemelos) | Hace `dataLayer.push` a un contenedor inexistente. Se evapora. |
| Menciones de Mixpanel | `sections/ImpathFrictionSection.jsx:28,133,174,178`; `SixCapabilitiesGrid.jsx:60` | **Solo copy de venta.** Mixpanel no está instalado en el sitio. |

**LO QUE FALTA (todo):**
- GA4: **no existe** en `index.html` ni `dist/index.html` (archivos de 14 líneas, ver `index.html:3-9`).
- GTM en la app React: **no existe**.
- Meta Pixel: **no existe** (se están gastando $5.53K MXN en Meta a ciegas).
- LinkedIn Insight Tag: **no existe** (se están gastando **$25.00K MXN en LinkedIn** — el canal del ICP — sin ningún tag).
- Hotjar: **no existe** (aunque `insights.hotjar.com` aparece como fuente de 1 lead, es en el sitio Webflow viejo).
- Google Ads conversion tag / Enhanced Conversions: **no existe**. Los $191.81K MXN de Google Ads no pueden optimizar hacia lead.
- Eventos de micro-conversión: no hay tracking de apertura del modal, de avance paso 1→2→3, de abandono, de clic en preset, de cambio de tab en casos, ni de selección de paquete. Toda la señal de intención que el sitio genera se descarta.
- No hay consent banner / consent mode.

**Consecuencia directa:** con $235.69K MXN invertidos del 1 al 13 de septiembre, **cero de esa inversión es atribuible a este sitio** si se lanzara hoy. Ni siquiera se sabría cuántos formularios se abrieron.

---

## 4. SEO TÉCNICO DEL BUILD

`index.html` (14 líneas) y `dist/index.html` (15 líneas) son prácticamente idénticos.

**EXISTE:**
- `<html lang="es">` (`index.html:2`)
- `<title>BluePixel | Agentic AI & FutureProof Engineering</title>` (`:7`) — correcto, orientado a ingeniería.
- `<meta name="description">` (`:8`) — bien redactada, aunque cierra con "la mejor UX de México", reforzando otra vez el posicionamiento de diseño.
- Favicon (`:5`), viewport (`:6`).

**NO EXISTE:**
| Elemento | Estado |
|---|---|
| Open Graph (`og:title/description/image/url`) | **Ausente.** Todo link compartido en LinkedIn o WhatsApp sale como caja gris sin imagen. Crítico para un canal B2B. |
| Twitter Card | Ausente. |
| `rel="canonical"` | Ausente. |
| `hreflang` es/en | **Ausente.** No hay versión en inglés en ningún lado del repo. Coherente con los 0 leads en inglés (−100%). |
| Datos estructurados JSON-LD | **Ausente.** Sin `Organization`, `ProfessionalService`, `FAQPage` (habiendo 5 FAQs perfectas en `FAQSection.jsx:6-23`) ni `BreadcrumbList`. Se está regalando la elegibilidad a rich snippets y, más importante dado que los LLMs ya citan a BluePixel, la legibilidad estructurada para motores generativos. |
| `sitemap.xml` | **No existe** en `dist/` ni `public/`. |
| `robots.txt` | **No existe.** |
| Contenido pre-renderizado | **`<div id="root"></div>` vacío** (`dist/index.html:13`). SPA 100% client-side. Un crawler sin ejecución de JS ve **cero palabras**. |
| Carga de fuentes | **Ausente.** `src/index.css:6-7` fuerza `Inter` y `JetBrains Mono` pero ningún HTML las carga. El sitio se renderiza con fuentes de sistema — se ve distinto a como fue diseñado. |
| Metadatos por cluster | Imposible: los 3 clusters viven en `#/apps`, `#/automatizacion`, `#/agentizacion` (`App.jsx:64`). **Google no indexa fragmentos hash como URLs separadas.** Los 3 clusters no pueden rankear ni ser destinos limpios de anuncio con title/description propios. |

**Bloqueador de despliegue silencioso:** `vite.config.js:7` fija `base: '/bluepixel/'`. El build referencia `/bluepixel/assets/index-BSf3t_Pn.js` (`dist/index.html:9`). Si esto se publica en la raíz de `bluepixel.mx`, **todos los assets dan 404 y el sitio sale en blanco.**

**Landings (`dist/landings/*.html`), 10 archivos:** sin `meta description` (0 de 11), sin OG, sin canonical, sin hreflang, sin JSON-LD. Ninguna tiene `<h1>` en el HTML estático (el contenido está dentro de `<script type="text/babel">`). Solo `landings/index.html` tiene `<h1>`.

---

## 5. CONTENIDO: `clustersData.js` Y `presets.js`

### `src/data/clustersData.js` (397 líneas) — **el mejor activo estratégico del repositorio.**

Los 3 clusters están **bien representados y bien diferenciados**, cada uno con: headline, subheadline, métrica ancla, social proof técnico, subservicios con `stack` + `deliverable` verificable, y los 3 pilares de contratación replicados y adaptados por cluster.

- **Cluster 01 Apps** (`:2-137`): 5 subservicios. Copy de ingeniería sólido — "Strangler Fig Pattern", "Zero-Downtime Migration" (`:88`), "cobertura >85%" (`:29`).
- **Cluster 02 Automatización** (`:139-259`): 4 subservicios. **El copy más fuerte del archivo.** "Cierra tu mes contable en 40 minutos en lugar de 8 días" (`:174`), "el reemplazo del RPA obsoleto" (`:189`), CFDI 4.0 / SAT. Habla de dinero y de dolor operativo mexicano concreto.
- **Cluster 03 Agentización** (`:261-396`): 5 subservicios. "No vendemos 'prompts' ni experimentos de laboratorio" (`:269`) es el mejor posicionamiento anti-commodity del sitio.

**¿Vende ingeniería o diseño? El archivo vende ingeniería — el sitio que lo consume vende diseño.**

La evidencia es la jerarquía de lectura, no el contenido:
1. `SocialProofSection.jsx:36-37` — el número ancla del sitio es **"#1 Firma UX en México (DesignRush)"**.
2. `TrustBadgesSection.jsx:14-16` — la tarjeta grande #1 es DesignRush, argumentando adopción vía diseño.
3. `SixCapabilitiesGrid.jsx:13` — la capacidad #1 es **"UX/UI Design & Product Strategy"**.
4. `FAQSection.jsx:23` — el diferenciador declarado es "6 años de maestría en psicología de adopción humana".
5. `index.html:8` — la meta description cierra con "la mejor UX de México".

Dentro de `clustersData.js`, el subservicio de UX/UI (`:46-60`) está correctamente subordinado como 3º dentro del cluster 01. **El problema no es el dato, es el ensamblaje.** El sitio usa UX como prueba de autoridad principal; eso es precisamente lo que atrae leads de $20k-$40k. [inferencia: correlación con la tesis interna ya documentada, no medida en este repo]

### `src/data/presets.js` (69 líneas) — **archivo muerto y con riesgo legal.**

**Nadie lo importa.** `HeroPromptEngine.jsx:2` importa `PRESETS` desde `data/constants.js`, que contiene una copia byte-idéntica. Editar `presets.js` no cambia nada en el sitio. Mismo caso con `data/clientLogos.js` (duplicado de `CLIENT_LOGOS` en `constants.js`).

**Los 4 presets son de buena calidad comercial** (impacto cuantificado, arquitectura en 4 pasos con MCP y human-in-the-loop, ROI en MXN, tiempo de implementación). Pero contienen **afirmaciones de resultado atribuidas a marcas nombradas, sin respaldo en el repositorio:**
- `constants.js:15` — "Caso FR Medical / Bimbo: 48 hrs a 3 minutos con 0% de error"
- `:31` — "Caso RadioShack / Retail: cierre contable de 12 días a 18 horas"
- `:47` — "Caso LifeMiles / Loyalty LATAM: +28% conversión"
- `:63` — **"Caso Avianca / DiDi: 78% de consultas resueltas, 4.8/5 CSAT"**

El caso Avianca/DiDi es el más expuesto: son dos marcas distintas fusionadas en un solo claim de agente conversacional, y ni Avianca ni DiDi aparecen en `CaseStudiesSection.jsx`. Antes de lanzar pauta, cada una de estas cifras necesita respaldo documental o debe despersonalizarse a "empresa de aerolíneas/movilidad en LATAM".

**Riesgo adicional de logos:** `constants.js:70-83` lista 12 logos (Bimbo, BBVA, PepsiCo, Cemex, DiDi, Avianca, Subaru, RadioShack, LifeMiles, MoradaUno, Pakke, Suerox) bajo el titular "operan agentes de IA y sistemas críticos construidos por BluePixel" (`SocialProofSection.jsx:11`). Solo 4 tienen caso en el sitio. Además **los 12 se hotlinkean desde `cdn.prod.website-files.com`** — el CDN del Webflow actual. Si se cancela Webflow en la migración, la barra de prueba social del sitio nuevo se rompe entera.

---

## 6. HEROPROMPTENGINE Y AGENTTERMINALDEMO

### `HeroPromptEngine.jsx` — **decoración disfrazada de demo, y con un defecto que quema credibilidad.**

Lo que es real: un typewriter que cicla 4 prompts (`:15-41`) y un textarea.

**El defecto (líneas 43-50):**
```js
const handleSubmit = (e) => {
  e.preventDefault();
  const solution = { ...PRESETS[presetIndex], prompt: inputVal || ... };
  if (onSelectSolution) onSelectSolution(solution);
};
```
`presetIndex` es el índice de la **animación**, congelado en el valor que tenía cuando el usuario hizo focus (`:16` corta el efecto al entrar en modo manual). El input del usuario **no se lee para nada**: solo se copia como etiqueta dentro del objeto.

**Traducción comercial:** un Director de Operaciones escribe *"necesito conciliar facturas contra SAP"*, presiona **"Analizar Fricción"** y el drawer le devuelve **"Fuga en checkout (IMPATH)"**, con su propia frase impresa arriba. El sitio promete análisis (`:89` "Escribe tu problema y halla una solución", `:145` "Analizar Fricción", `:139` "Awaiting Input") y entrega una ruleta. En una empresa que vende "agentes que no alucinan" (`ThreeClustersOverview.jsx:67`), es la peor demo posible: **demuestra en vivo lo contrario de la tesis de venta.**

**Valor comercial hoy: negativo.** Es el elemento más visible above-the-fold y el que más rápido destruye confianza técnica. **Valor potencial: muy alto** — si mapeara input→preset por palabras clave (mismo patrón ya escrito en `ClusterLandingPage.jsx:42-52`), sería el mejor calificador de intención del sitio: el visitante autodeclara su dolor antes del formulario.

### `AgentTerminalDemo.jsx` — **el mejor activo de venta técnica del repo, y está desconectado.**

220 líneas. Reproduce el ciclo real de un agente: ingesta → `mcp_query_sap` → verificación contra `min_margin_policy` → gate a humano → dispatch, con bitácora línea por línea y timing escalonado (`:52-83`), métricas de cierre (21s, 2 llamadas MCP, 100% audit coverage) y —lo más valioso— **un disclaimer honesto**: "Walkthrough ilustrativo... basado en telemetría real (anonimizada)" (`:210`).

Es exactamente el contenido que separa a BluePixel de una agencia y que justifica un ticket de +$500k ante un CTO. **No se renderiza en ninguna parte del sitio.** Verificado: `<AgentTerminalDemo` no aparece en ningún archivo.

Lo mismo aplica a `WorkflowTeardown.jsx` (también huérfano), que contiene la narrativa de "+340% de ROI proyectado" con MCP consultando stock real (`:146`).

### Demos de `ClusterLandingPage.jsx` — canned, y una es peligrosa.
- `handleSimTest` (`:30-36`): tres latencias hardcodeadas. Decoración inofensiva.
- `handleRagQuery` (`:38-61`): `if` sobre substrings. Las ramas "precio" y "password" están bien guionadas y demuestran el concepto de guardrail. **La rama `else` (`:55-59`) es el problema:** ante *cualquier* otra pregunta, devuelve el texto del usuario envuelto en *"Respuesta generada con 0% de alucinación citando documentación técnica interna"*, con fuente falsa *"Vector Store Qdrant · Conexión MCP en Producción"*. Un evaluador técnico pregunta "¿integran con Oracle Fusion?" y el sistema le afirma que consultó una base vectorial en producción. **Es una alucinación fabricada en una demo cuyo título es "Cero Alucinaciones" (`:279`).** Debe corregirse antes de exponerlo a un solo peso de pauta.

---

## 7. BLOQUEADORES PARA LANZAR Y RECIBIR PAUTA (por criticidad)

### P0 — Bloquean el lanzamiento. Sin esto, cada peso de pauta se pierde.

1. **El formulario no entrega el lead a nadie.** `forms/MultiStepContact.jsx:31` → `console.log`. Cero integración. Conectar a endpoint/CRM y confirmar recepción end-to-end con un envío de prueba antes de encender un solo anuncio.
2. **Cero instrumentación en la app React.** `index.html:3-9` — sin GA4, GTM, Meta Pixel, LinkedIn Insight Tag ni conversion tag de Google Ads. Con $235.69K MXN/mes corriendo, ninguna campaña puede optimizar ni atribuir.
3. **Sin captura de `gclid` / `utm_*` / `referrer`.** Verificado: cero ocurrencias en todo el repo. Sin esto, ninguna venta futura se podrá atribuir a campaña, ni siquiera con CRM conectado.
4. **`base: '/bluepixel/'`** en `vite.config.js:7` → `dist/index.html:9-10`. Publicado en la raíz del dominio, el sitio sale en blanco.
5. **GTM placeholder `GTM-XXXXXXX`** en las 10 landings (`dist/landings/*.html:13`, 20 ocurrencias) y su evento `lead_form_submitted` (`:643`) cae en el vacío.
6. **Formularios de las 10 landings son `alert()`.** `dist/landings/triage_rag.html:643` — `alert('Lead capturado en Webhook/MCP')`. Diez landings listas para pauta que no capturan nada.
7. **Sin aviso de privacidad.** `MultiStepContact.jsx:189` pide consentimiento LFPDPPP sobre un documento inexistente, en un `<span>` no clickeable. Bloqueador legal y de políticas de Google Ads.
8. **Sin datos de contacto de la empresa.** `layout/Footer.jsx:68-84` — sin correo, teléfono, dirección ni razón social. Google Ads exige información de negocio verificable en la landing.

### P1 — Fugas de conversión medibles. Corregir antes de escalar inversión.

9. **La sección de casos no tiene CTA.** `sections/CaseStudiesSection.jsx` recibe `onOpenCase` (`:3`) desde `App.jsx:96` y nunca lo llama; el único `onClick` es el tab (`:74`). Es el pico de intención del recorrido y no tiene salida.
10. **`#case-studies` roto en 2 lugares:** `layout/Navbar.jsx:40` y `sections/FinalCTA.jsx:34`. El ID real es `casos` (`CaseStudiesSection.jsx:54`). El script `fix_links.cjs:4` intenta arreglarlo **pero parchea `src/App.jsx`, donde esa cadena no existe** — el fix nunca se aplicó.
11. **`#contact-form` roto** en `layout/Footer.jsx:51`. No existe tal ID (el contacto es un modal).
12. **8 links `href="#"` muertos en el Footer**, incluyendo NDA, Zero-Data Retention y SLA de Soporte Crítico (`:38-41`, `:60-62`) — justo los documentos que pide un comité de compras.
13. **HeroPromptEngine ignora el input del usuario** (`hero/HeroPromptEngine.jsx:43-50`). Above-the-fold, en la primera interacción, con una marca que vende "agentes que no alucinan".
14. **Rama `else` de la demo RAG fabrica una cita falsa.** `clusters/ClusterLandingPage.jsx:55-59`.
15. **Sin campo de presupuesto ni tamaño de empresa** en `MultiStepContact.jsx`. Sin esa variable no hay forma de filtrar al lead de $20k del de $500k — el problema central del diagnóstico. `industry` y `urgency` además son opcionales.

### P2 — SEO, credibilidad y calidad percibida.

16. **SPA sin pre-render:** `dist/index.html:13` es `<div id="root"></div>` vacío. Cero contenido indexable.
17. **Sin Open Graph.** `index.html:3-9`. Todo share en LinkedIn (canal del ICP) sale sin preview.
18. **Sin `sitemap.xml`, `robots.txt`, canonical, `hreflang` ni JSON-LD.** Las 5 FAQs de `FAQSection.jsx:6-23` son elegibles a `FAQPage` sin costo.
19. **Los 3 clusters viven en rutas hash** (`App.jsx:64`), no indexables como páginas ni usables como destinos de anuncio con metadatos propios.
20. **Sin carga de fuentes.** `src/index.css:6-7` exige Inter/JetBrains Mono; ningún HTML las carga. El sitio no se ve como fue diseñado.
21. **Landings a ~4-5 MB de JS de desarrollo.** `dist/landings/triage_rag.html:43-46` carga `react.development.js` + `react-dom.development.js` + `@babel/standalone` (compilación JSX en el navegador del prospecto) + `cdn.tailwindcss.com` (`:16`) + `unpkg.com/lucide@latest` sin versión fija. LCP catastrófico → penalización directa en Quality Score de Google Ads sobre los $191.81K MXN del canal. [inferencia sobre el impacto en Quality Score; el peso de los bundles es verificable]
22. **12 logos hotlinkeados al CDN de Webflow** (`data/constants.js:71-82`). Se rompen al migrar. Además, 8 de los 12 no tienen caso que respalde el claim de `SocialProofSection.jsx:11`, y 4 cifras con marca nombrada en `constants.js:15,31,47,63` (incluida "Avianca / DiDi 78%") carecen de respaldo en el repositorio.
23. **Badges que no verifican nada.** `TrustBadgesSection.jsx:17,33,51` linkean a homes genéricos, no a perfiles de BluePixel.
24. **ErrorBoundary muestra el stack trace al visitante.** `ErrorBoundary.jsx:30-34` — en tráfico pagado, un error convierte la página en una pantalla de depuración.
25. **`AgentTerminalDemo.jsx`, `WorkflowTeardown.jsx` y `TechPartners.jsx` construidos y nunca renderizados.** Recuperar `AgentTerminalDemo` es la intervención de mayor retorno por hora de trabajo del sitio.
26. **Duplicación de datos:** `data/presets.js` y `data/clientLogos.js` son copias muertas de `data/constants.js`. Riesgo alto de que alguien "arregle el copy" en el archivo equivocado.
27. **Clases Tailwind rotas** (`md:` / `lg:` sin utilidad) en `SocialProofSection.jsx:10`, `PostContactSLA.jsx:29`, `EngineeringLeadership.jsx:12`, `AgentTerminalDemo.jsx:93`, `SolutionDrawer.jsx:19`.

---

## 8. ESTADO DE PREPARACIÓN GLOBAL: **35%**

| Capa | % | Sustento |
|---|---|---|
| Diseño, UI y sistema visual | 85% | Consistente, nivel enterprise real. Falta carga de fuentes y limpiar clases rotas. |
| Arquitectura de contenido y mensaje | 80% | `clustersData.js` es un activo estratégico terminado. Falla el orden de jerarquía (UX antes que ingeniería). |
| Arquitectura de conversión (CTAs, recorrido) | 55% | Buena densidad de CTA, pero la sección de casos no convierte y hay 11 links muertos. |
| **Captura de lead** | **0%** | `console.log` en el sitio, `alert()` en las 10 landings. |
| **Medición y atribución** | **0%** | Ni un tag. Ni un evento. Ni un `gclid`. |
| SEO técnico | 10% | Solo title y description. SPA vacío, sin OG, sitemap, canonical, hreflang ni schema. |
| Legal y compliance | 10% | Sin aviso de privacidad, sin datos de contacto, claims de marca sin respaldo. |
| Infraestructura de despliegue | 30% | `base` apuntando a `/bluepixel/`, logos dependientes del CDN de Webflow. |

**Justificación del 35%:** la ponderación no es aritmética. Como *máquina de conversión*, un sitio que no puede capturar un lead ni registrar una conversión vale **0%**, sin importar qué tan bien esté construida la capa de presentación. El 35% reconoce que el trabajo verdaderamente difícil y caro —la tesis de posicionamiento, los 3 clusters, los 3 pilares, el copy de ingeniería, el sistema visual, 10 landings y 4 demos— **ya está hecho y es de calidad superior al sitio Webflow actual**. Lo que falta es plomería: un endpoint, cinco tags, un aviso de privacidad y un archivo de configuración.

**Estimación de esfuerzo a estado "apto para pauta":** los 8 bloqueadores P0 son de horas, no de semanas — probablemente **3 a 5 días de un desarrollador** más la redacción del aviso de privacidad. **Ninguno requiere rediseñar nada.** [inferencia: estimación de esfuerzo basada en la naturaleza de los cambios leídos, no en una planeación validada con el equipo]

**La conclusión operativa:** hoy, redirigir pauta a este sitio destruiría más valor que el sitio Webflow actual, porque cotiza.bluepixel.mx al menos captura leads. Cerrados los 8 P0, este sitio es sustancialmente superior al actual para el ICP de +$500k — y `AgentTerminalDemo.jsx`, que ya está escrito y desconectado, es la pieza que más rápido corrige el "desfase de información" entre lo que BluePixel es y lo que comunica.