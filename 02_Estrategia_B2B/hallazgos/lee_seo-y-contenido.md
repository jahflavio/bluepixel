# ESTRATEGIA DE SEO, CONTENIDO Y PRESENCIA EN LLMs — BLUEPIXEL
**Periodo de ejecución: 15 sep 2026 – 31 mar 2027 | Responsable del documento: Fabián Flores (Head of Growth & RevOps)**

**Fuentes verificadas:** `reporte_campanas.txt` (secciones SEO, Keywords, Impresiones en IA, Acciones en curso, Redes Sociales), `seo_audit_bluepixel.csv` (crawl de 20 páginas de bluepixel.mx), `seo_spider.py`.

---

## HALLAZGO QUE ORDENA TODO LO DEMÁS

El crawl de `seo_audit_bluepixel.csv` reveló algo que no estaba en el reporte de campañas y que cambia la prioridad del trimestre:

**Las 20 páginas del dominio raíz `bluepixel.mx` sirven titles, H1 y meta descriptions en INGLÉS. El 100% de las URLs que rankean en el reporte son `/es/`. El 100% de los leads orgánicos (21) son en español. Cero en inglés.**

El sitio está arquitectónicamente configurado para un mercado que no compra, y el mercado que sí compra vive en una subcarpeta. Esto es causa directa y medible del CTR de 0.64% (sección 3) y de la mala clasificación de entidad que hunde las keywords de IA a posición 41-61 (sección 1).

Segundo hallazgo del crawl, igual de grave y más barato de arreglar: **10 de 20 H1 tienen palabras pegadas sin espacio** — `"We Build, Evolve, and ScaleAI-Powered Digital Platforms"`, `"Headless SoftwareDevelopment"`, `"Find the Right AI Strategyfor Real Business Impact"`, `"AI That Works Behind the ScenesUX That Feels Smarter"`, `"Custom Web Development& Design That Scales"`, `"See What Users DoPredict What They'll Do Next"`, `"Solid FoundationsData Built to Scale With You"`, `"UX Dashboard DesignThat Drives Decisions"`, `"Powerful Apps,Proven Results"`, `"AI Agents With PurposeCustom-Built for Your Product and Users"`.

Es un `<br>` sin espacio en el markup de Webflow. El H1 es la señal semántica más fuerte de una página. Google y los LLMs están leyendo `"ScaleAI-Powered"` como un token. Eso degrada la extracción de entidad justo en las páginas de IA — las mismas que necesitamos que rankeen. Costo de arreglo: 2 horas.

Adicional: **`/contact` no tiene H1** (`FALTA H1` en el crawl) y **`/ux-dashboard-design` tiene un typo en producción**: `"We design UX- dirven dashboards"`.

---

## 1. DIAGNÓSTICO DEL ACTIVO SEO: LA BRECHA CUANTIFICADA

### 1.1 El número que define el problema

De las 10 keywords en top-10 reportadas:
- **5 contienen "ux"** (50%)
- **2 son de marca** (`bluepixel ia`, `bluepixel modernización`)
- **2 son de desarrollo genérico** (`agencia premium de desarrollo`, `empresa desarrollo aplicaciones`)
- **1 se acerca a la tesis** (`partner transformacion digital`, pos. 2, **+79 posiciones**)
- **0 contienen "IA", "automatización", "agente", "SAP", "ERP" o "proceso"**

Cero de 110 keywords en seguimiento está en top-10 con el lenguaje del negocio que BluePixel quiere vender. El activo SEO entero apunta al servicio equivocado.

Y hay un detalle que importa para la sección 2: **2 de las 10 posiciones ganadoras las sostiene el blog "trampa"** — `empresa ux` (#2) rankea con `/es/blog/mejores-agencias-diseno-ux-ui-mexico` y `diseño ux ui corporativo` (#8) con `/es/blog/diseno-ux-ui-que-es-guia`. El contenido que atrae al perfil equivocado es literalmente carga estructural. No se puede borrar.

### 1.2 La brecha: mediana de 50 posiciones

| Métrica | Keywords UX/marca | Keywords IA/ingeniería |
|---|---|---|
| Posición mediana | **2** | **52** |
| Página de SERP | 1 | 6 |
| CTR esperado | 9–25% | <0.1% |
| Clicks estimados/mes | El grueso de los 410 | ≈ 0 |

**Brecha: 50 posiciones de mediana.** Traducido: las 9 keywords que sostienen la tesis comercial de BluePixel generan hoy aproximadamente **cero tráfico**.

### 1.3 Diagnóstico de causa raíz: no es autoridad, es ausencia de página

Esto es lo que cambia el costo del problema. Revisé el crawl contra las 9 keywords de IA/ingeniería:

- No existe una página en español para "automatización de procesos".
- No existe una página en español para "agentes de IA empresariales".
- Las páginas de IA que sí existen (`/custom-ai-agents`, `/ai-strategy-workflow-automation-services`, `/smart-ux-flows-ai-copilots`) están **en inglés** y **posicionadas al comprador equivocado**: la meta de `/custom-ai-agents` dice *"context-aware assistants for customer service and product automation"*. Eso le habla a un Head of Customer Support, no a un VP de Operaciones con presupuesto de $500k+.

BluePixel no rankea en posición 52 porque Google no la considere autoritativa. Rankea en 52 **porque no ha escrito la página**. Eso es una brecha de contenido, no de autoridad de dominio.

**La diferencia de costo es enorme:** cerrar una brecha de autoridad toma 12–18 meses y requiere link building. Cerrar una brecha de contenido en un dominio ya aged y con entidad reconocida toma 10–16 semanas. **[inferencia]**

**Evidencia que respalda esto:** tres de las nueve keywords de IA subieron `+41`, `+48` y `+59` posiciones en un solo periodo **sin páginas dedicadas**. Google ya está reclasificando a BluePixel y lo está haciendo rápido. Hay una ventana abierta.

### 1.4 Tabla de esfuerzo por keyword

Unidades de esfuerzo: **Pilar** = 2,000–2,500 palabras, ~16 h de trabajo. **Soporte** = 900–1,200 palabras, ~5 h.

| # | Keyword | Pos. | Mov. | Página destino | ¿Existe? | Piezas necesarias | Semanas a top-10 [inf] | Prio |
|---|---|---|---|---|---|---|---|---|
| 1 | ia automatización operaciones | 41 | — | `/es/automatizacion` | **NO** | 1 pilar + 4 soporte | 10–14 | **A1** |
| 2 | ia integrada software empresarial | 61 | +11 | `/es/agentizacion` | **NO** | 1 pilar + 4 soporte | 14–20 | **A2** |
| 3 | ia en stack tecnológico empresarial | 59 | +48 | `/es/agentizacion` | **NO** | comparte pilar + 2 soporte | 12–16 | **A3** |
| 4 | diseño app móvil enterprise | 60 | +41 | `/es/desarrollo-apps` | Parcial | 1 pilar + 2 soporte | 10–14 | B1 |
| 5 | outsourcing desarrollo app | 52 | **-4** | `/es/desarrollo-apps` | Parcial | 1 comparativa + 2 soporte | 12–16 | B2 |
| 6 | user research enterprise méxico | 45 | — | `/es/desarrollo-apps` (sub) | Parcial | 1 soporte | 8–12 | B3 |
| 7 | desarrollo web mexico | 46 | — | `/es/desarrollo-web` | **SÍ** | Solo on-page (title+H1+meta ES) | 6–10 | C1 |
| 8 | expertos en desarrollo web | 48 | — | `/es/desarrollo-web` | **SÍ** | Solo on-page | 6–10 | C2 |
| 9 | digital product design agency | 52 | +59 | `/en/` nearshore | Parcial | 1 pieza en inglés | 16–24 | C3 |

**Esfuerzo total para cerrar la brecha: 3 páginas pilar + ~14 piezas de soporte + on-page de 20 URLs.** Eso es exactamente el plan de la sección 5 — el calendario no es un ejercicio editorial, es la lista de materiales para cerrar esta tabla.

**Nota sobre las keywords en caída:** los 8 términos de marca cayendo **-1 cada uno, simultáneamente**, no es un problema de contenido. Una caída uniforme de una posición en toda la familia de marca es un cambio de layout de SERP. **[inferencia: lo más probable es que un AI Overview o un bloque de anuncios esté empujando el primer orgánico un lugar hacia abajo en queries de marca.]** No se arregla con contenido; se arregla siendo la fuente citada en el AI Overview (sección 6). No gastar horas aquí.

La excepción real es **`agencia de desarrollo de aplicaciones` (-9)**, que sí es una caída de contenido — y que coincide exactamente con el artículo pendiente de "mejores agencias de desarrollo de apps" de la sección 8.

### 1.5 Hallazgo de presupuesto derivado del SEO

La campaña **Brand** de Google Ads gastó **$103,957.04 MXN en 13 días** — el **54% de todo el presupuesto de Google** — comprando clics en términos donde BluePixel **ya rankea #1 y #2 orgánicamente** (`bluepixel ia` #1, `bluepixel modernización` #1, `bluepixel agencia digital` #2, `bluepixel digital` #2, `bluepixel inteligencia artificial` #2).

**Acción:** antes del 30 de septiembre, pedir a Diana Cardoso (Rocketing) el reporte de **Auction Insights** de la campaña Brand. Si la cuota de impresiones perdida frente a competidores en términos de marca es **menor al 10%**, recortar la campaña a un mínimo defensivo y reasignar. **[inferencia: recuperable 60–70% de ese gasto, ≈ $62k–$73k MXN por periodo de 13 días]** — suficiente para financiar el plan de contenido completo de 6 meses varias veces.

---

## 2. LA TRAMPA DE LA AUTORIDAD TEMÁTICA

### 2.1 El diagnóstico

Las 8 páginas más citadas por LLMs (2,706 impresiones combinadas de 120 páginas con citación):

| Página | Impresiones IA | ¿Quién hace esta pregunta? |
|---|---|---|
| `/es/blog/diseno-ux-ui-que-es-guia` | 698 | Estudiante, diseñador junior |
| `/post/user-interface-types` | 647 + 521 | Estudiante, tarea escolar |
| `/es/blog/10-ejemplos-de-interfaces-de-usuario` | 344 | Diseñador buscando inspiración |
| `/post/10-user-interfaces` | 140 | Ídem |
| `/es/blog/desarrollo-apps-moviles-cuanto-cuestan` | 135 | **Comprador real** |
| `/es/blog/etapas-desarrollo-web` | 118 | PM junior |
| `/post/front-end-back-end-meaning` | 103 | Persona aprendiendo a programar |
| `/es/blog/mejores-agencias-diseno-ux-ui-mexico` | 93 | **Comprador real** |

**De las 8 páginas más citadas por LLMs, 6 responden preguntas de definición básica.** Solo 2 las hace alguien con presupuesto.

Esto es el mecanismo exacto del "desfase de información" documentado internamente, pero en su versión algorítmica: Google y los LLMs clasifican entidades por el vector agregado del contenido. El vector de BluePixel apunta a **"editorial educativo de UX/UI"**. Por eso las keywords de ingeniería rankean 41-61 — el clasificador no considera a BluePixel un candidato creíble para esa consulta.

Y es autorreforzante: el contenido de UX trae tráfico → el tráfico valida la clasificación → la clasificación hunde lo demás.

**Contraprueba de que el canal sí puede funcionar:** el único lead atribuible a SEO en septiembre — Five Diamond Club, **"Automatizar flujo de clientes", vía Gemini, 10 sep 2026** — llegó por un LLM con intención de automatización. El canal entrega el perfil correcto **incluso con el contenido equivocado**. Con el contenido correcto, se multiplica.

### 2.2 La regla que no se puede romper

**No se borra, no se redirige, no se despublica nada.** Ese contenido sostiene 2 de las 10 posiciones en top-10 y el 100% de las 2,706 impresiones en LLMs. Borrarlo destruye el único activo de citación que existe. El pivote se hace **por adición y por puente**, nunca por sustracción.

### 2.3 Los 5 pasos, con fechas

**Paso 1 — Congelar e inventariar (22 sep – 3 oct 2026). Responsable: Fabián.**
Exportar las 120 páginas con impresiones en IA y clasificarlas:
- **A** — tráfico + intención correcta (`desarrollo-apps-moviles-cuanto-cuestan`, `mejores-agencias-*`): amplificar.
- **B** — tráfico + intención equivocada (las 6 guías de UX 101): convertir en puente.
- **C** — cero tráfico, cero intención: dejar en paz. No podar; el riesgo de perder señal supera el beneficio.

*Entregable: hoja de clasificación con las 120 URLs etiquetadas. Fecha: 3 oct.*

**Paso 2 — Inyección de puentes en las 8 páginas B (6 – 24 oct 2026). Responsable: Leo.**
En cada guía de UX, añadir al final un bloque contextual de 150–200 palabras que enlace al cluster correspondiente. No un banner, un párrafo con lógica argumental. Ejemplos concretos:

- `/es/blog/diseno-ux-ui-que-es-guia` → bloque *"Cuando el UX ya no es el cuello de botella"* → `/es/automatizacion`
- `/post/user-interface-types` → bloque *"De la interfaz al agente: interfaces que ejecutan, no solo muestran"* → `/es/agentizacion`
- `/es/blog/etapas-desarrollo-web` → bloque *"La etapa que nadie documenta: integración con el ERP"* → `/es/automatizacion`
- `/es/blog/desarrollo-apps-moviles-cuanto-cuestan` → `/es/desarrollo-apps`

Este es el paso de mayor apalancamiento de toda la estrategia SEO: transfiere autoridad interna desde el pilar fuerte al pilar débil. Es el mecanismo que hoy no existe.

*Entregable: 8 páginas con bloque puente + enlace contextual. Fecha: 24 oct.*

**Paso 3 — Construir el pilar nuevo (6 – 27 oct 2026). Responsables: Leo + Fabián.**
Las 3 páginas pilar de cluster (`/es/automatizacion`, `/es/agentizacion`, `/es/desarrollo-apps`), en español, 2,000+ palabras, no landings de pauta. Corresponden a las piezas 1, 3 y 4 del calendario.

**Paso 4 — Densificar (nov 2026 – feb 2027). Responsables: Fabián + Leo + área comercial.**
14 piezas de soporte que hablan **exclusivamente** de ingeniería, IA operacional y automatización. El vector de entidad se mueve por densidad relativa, no absoluta.

**Regla operativa innegociable: durante 6 meses, cero piezas nuevas de UX/UI básico.** Única excepción permitida: *actualizar* (no crear) las 8 páginas B.

**Paso 5 — Reetiquetar la entidad (feb – mar 2027). Responsable: Fabián.**
- `schema.org/Organization` con `knowsAbout: ["ingeniería de agentes de IA", "protocolo MCP", "automatización de procesos de negocio", "integración SAP", "RAG privado", "modernización de software legacy"]`
- Reescritura de `/es/sobre-nosotros` como página de entidad. Nota: esta página **ya rankea #1** para `bluepixel ia` y `bluepixel modernización` — ya es el nodo de entidad; hay que cargarla con los atributos correctos.
- H1 del home reescrito con keyword real y **en español**.

### 2.4 El KPI correcto para este pivote

**No es tráfico.** El tráfico total puede estancarse 3–4 meses mientras el mix cambia, y eso es aceptable. El KPI es:

> **% de leads orgánicos cuyo servicio solicitado pertenece a Cluster 2 (Automatización) o Cluster 3 (Agentización).**

Baseline septiembre 2026: **1 de 21 = 4.8%** (el lead de Five Diamond Club). Meta 31 marzo 2027: **≥40%**.

---

## 3. CTR DE 0.64%: DIAGNÓSTICO Y RECUPERACIÓN

### 3.1 La aritmética

64,282 impresiones × 0.64% = **411 clicks** (el reporte da 410). Posición promedio **13.01**.

A posición promedio 13 (parte alta de la página 2), la curva pública de CTR predice entre **0.8% y 1.6%**. **[inferencia]** BluePixel está en 0.64%: entre **40% y 60% por debajo** de lo que su propia posición debería entregar. El problema no es solo dónde aparece — es que **cuando aparece, no lo clickean**.

### 3.2 Las siete causas, todas evidenciadas en el crawl

**(a) Idioma invertido — la causa dominante.**
Las 20 páginas del dominio sirven title y meta **en inglés**. Los 21 leads son en español. Si Google muestra `"Mobile App Development Services | High-Performance Apps, Seamless Experience"` a alguien que buscó *"empresa desarrollo aplicaciones méxico"*, el usuario no hace click. Esto por sí solo puede explicar la mitad de la brecha de CTR. **[inferencia: sin acceso a Search Console no puedo confirmar el estado del `hreflang`; verificar en la sección Internacional. Si el hreflang `es-MX ↔ en-US` está mal o ausente, Google está sirviendo la versión equivocada a queries en español.]**

**(b) La meta description del home es un title, no una descripción.**
`"Digital Products Agency - BluePixel | Software, Mobile App & Web Development"` — 76 caracteres. Sin verbo, sin beneficio, sin número, sin CTA. Es una lista de categorías separadas por pipe. Desperdicia 84 de los 160 caracteres disponibles. **Es la página con más impresiones del sitio.**

**(c) Siete titles truncados en SERP** (>60 caracteres): `/mobile-app-development` (76), `/custom-ai-agents` (69), `/contact` (69), `/case-studies` (69), `/smart-ux-flows-ai-copilots` (67), home (67), `/about-us` (65), `/headless-development` (64). Se trunca justo la parte final, que es donde está el diferenciador.

**(d) H1 rotos por concatenación** — 10 de 20 (detallados arriba). Degrada la extracción semántica.

**(e) `/contact` sin H1.** Página de conversión sin encabezado principal.

**(f) Typo en producción:** `"UX- dirven dashboards"` en la meta de `/ux-dashboard-design`, sirviéndose a Google hoy.

**(g) H1 sin intención comercial.** `"Build"`. `"Evolve"`. `"Evaluate. Improve. Elevate."` `"Stunning Designs, Seamless Experiences"`. Ninguno de los 20 H1 contiene "México", "empresa", "SAP", "ERP", "agente" o "automatización" de forma consultable. Son poesía de marca en el espacio semánticamente más valioso del sitio.

**(h) SERP features.** Dos keywords de marca aparecen como `site links` y están cayendo. Con posición promedio 13 y CTR de 0.64%, lo más probable es que el primer resultado orgánico esté debajo de un AI Overview y un bloque de anuncios. **[inferencia]** La respuesta a esto no es pelear el click, es **ser la fuente citada en el AI Overview** — sección 6.

### 3.3 Cuánto tráfico se recupera

Base: 64,282 impresiones / 13 días. **[inferencia en las tres proyecciones]**

| Escenario | Intervención | CTR | Clicks/13 días | Δ vs. hoy |
|---|---|---|---|---|
| **Hoy** | — | 0.64% | 410 | — |
| **Conservador** | Titles + metas + H1 + español. Sin mover posición. | 1.10% | 707 | **+297 (+72%)** |
| **Base** | Lo anterior + schema + FAQ + top-10 páginas de pos. 13 → 8 | 1.80% | 1,157 | **+747 (+182%)** |
| **6 meses** | Lo anterior + 90,000 impr. (las impresiones ya crecen +19.7%) | 2.20% | 1,980 | **+1,570 (+383%)** |

**Traducido a leads.** Hoy: 21 leads / 410 clicks = **tasa de conversión visita→lead de 5.12%**. Esa tasa es alta para B2B.

- Escenario base a tasa sostenida: 1,157 × 5.12% = **59 leads/13 días**
- Escenario base a tasa conservadora de 2.5% **[inferencia: la tasa casi con certeza baja al escalar volumen]**: **29 leads/13 días**

Aun en el escenario pesimista, **arreglar titles y metas duplica los leads orgánicos**.

### 3.4 El argumento de presupuesto que esto habilita

| Canal | Periodo Sep 1–13 | Resultado | Costo unitario |
|---|---|---|---|
| **SEO orgánico** | Costo marginal ≈ $0 | 410 clicks → **21 leads** | **≈ $0** |
| **Google Ads** (overview) | $13,621.35 | 317 clicks → 6 conv. | **$2,270 / conv.** |
| **Google Ads** (tabla presupuesto) | $191,807.92 | 6 conv. | **$31,968 / conv.** |
| **Meta Ads** | $1,239.23 | 622 landing views → 0 leads | **∞** |

**SEO ya genera más clicks que Google Ads (410 vs 317) y 3.5x más leads que conversiones, a costo cero de medios.** Y el trabajo pendiente cuesta **una semana de una persona**.

**Discrepancia que hay que resolver antes de cualquier decisión de presupuesto:** el reporte da dos cifras irreconciliables para Google Ads en el mismo periodo — **$191,807.92** (tabla de presupuesto) vs **$13,621.35** (overview mensual, que sí cuadra internamente: 317 clicks × $42.97 CPC = $13,621.49). Son **14x de diferencia**. **[inferencia: el overview es un subconjunto filtrado, o la tabla de presupuesto está reportando acumulado anual etiquetado como periodo de 13 días.]** **Acción: Fabián solicita a Diana Cardoso (Rocketing) la conciliación antes del 22 de septiembre.** No se toma ninguna decisión de reasignación hasta resolverlo.

### 3.5 Sprint de corrección — 15 al 26 de septiembre 2026

Esta es la acción de mayor ROI disponible hoy en todo el plan. **No requiere aprobación de nadie, no cuesta medios, y vale más que las tres "acciones en curso" del reporte juntas.**

| Día | Tarea | Responsable |
|---|---|---|
| 16 sep | Arreglar los 10 H1 concatenados (`<br>` → espacio). Añadir H1 a `/contact`. Corregir typo "dirven". | Fabián |
| 17–18 sep | Reescribir 20 titles: ≤58 caracteres, keyword al inicio, "México" donde aplique. | Leo |
| 19–22 sep | Reescribir 20 meta descriptions: 145–158 caracteres, con verbo, número y CTA. | Leo |
| 23 sep | Auditar y corregir `hreflang` es-MX / en-US + self-canonical. | Fabián |
| 24 sep | Publicar versiones en español de title/meta/H1 para todas las URLs `/es/`. | Fabián + Leo |
| 25–26 sep | `FAQPage` schema en las 8 páginas con más impresiones. | Fabián |
| 30 sep | Snapshot de baseline en Search Console para medir el delta. | Fabián |

---

## 4. 21 LEADS EN ESPAÑOL VS 0 EN INGLÉS: IDIOMA Y MERCADO US/NEARSHORE

### 4.1 Qué dicen los datos

- Leads en español: **21 (+425%)**
- Leads en inglés: **0 (-100%)**
- Descargas de ebook: **0**
- Todas las URLs que rankean en el reporte: **`/es/`**
- Todas las páginas del dominio raíz crawleadas: **inglés**

### 4.2 Las cuatro lecturas

**1. El sitio está configurado al revés.** El idioma raíz es inglés; el español vive en `/es/`. El 100% de la demanda real está en `/es/`. La arquitectura de información sirve a un mercado que no compra y relega al que sí.

**2. `-100%` no significa "no funcionó", significa "se apagó".** Hubo leads en inglés antes; se fueron a cero. **[inferencia: coincide con que las páginas `/post/` — formato viejo de Webflow, en inglés — siguen recibiendo las impresiones más altas en LLMs (647 + 521) pero ya no se actualizan. El contenido en inglés no se abandonó por estrategia, se abandonó por defecto.]**

**3. El inglés tiene tracción latente, no está muerto.** `digital product design agency` está en posición 52 y **subió +59 posiciones** en un periodo. Y las páginas `/post/` en inglés son el segundo activo de citación LLM más grande del sitio.

**4. `0 descargas de ebook` es un diagnóstico, no un dato.** El lead magnet está muerto. No se repara.

### 4.3 La decisión: español-first, con fecha de reevaluación

**No es momento de abrir US/nearshore vía SEO.** El argumento no es que el mercado no sirva; es de secuencia. Con **0 ventas desde marzo** y **65 leads en Q3**, BluePixel no tiene un problema de "necesitamos otro mercado" — tiene un problema de "no convertimos el que tenemos". Abrir un segundo idioma ahora **duplica el costo de contenido y divide el vector de autoridad temática justo en el trimestre en el que hay que concentrarlo** (sección 2).

**Directrices:**

| Decisión | Detalle |
|---|---|
| **Mix de contenido oct 26 – mar 27** | **26 de 28 piezas en español.** 2 en inglés, y únicamente con ángulo nearshore/enterprise — nunca UX. |
| **Arquitectura** | Corregir `hreflang` es-MX ↔ en-US (1 día, sprint del 23 sep). Evaluar servir español por defecto a tráfico MX. |
| **Contenido en inglés existente** | **No tocar, no redirigir.** Las páginas `/post/` son el segundo activo de citación LLM. Solo añadirles bloque puente (Paso 2, sección 2). |
| **Mercado US/nearshore** | Se ataca con **outbound + LinkedIn + caso de estudio**, no con SEO. **[inferencia: el ciclo de SEO en inglés contra agencias establecidas de US es de 18+ meses con CPC prohibitivo; el nearshore se vende por relación y referencia, no por búsqueda genérica.]** |
| **Gate de reevaluación** | **Q2 2027.** Condición dura: reabrir inversión en inglés **solo si** los 3 clusters en español ya tienen **≥3 keywords en top-10**. Si no, se pospone otro trimestre. |
| **Ebook** | Retirar. Reemplazar por las **4 demos PLG interactivas ya construidas** (Cotizador FR Medical, ERP Bridge, Legal Onboarding KYC, Triage RAG) y el **Diagnóstico FutureProof**. **[inferencia: un cotizador interactivo convierte sustancialmente mejor que un PDF en B2B técnico.]** Los activos ya existen y no están puestos a trabajar. |

---

## 5. PLAN DE CONTENIDO OCT 2026 – MAR 2027 (28 PIEZAS)

**Cadencia:** martes y jueves. **Split:** 19 piezas de CAPTURA de demanda, 7 de CREACIÓN de demanda, 2 PUENTE.

**Distinción operativa:**
- **CAPTURA** — existe demanda de búsqueda. Objetivo: keyword, posición, tráfico calificado. Se mide en Search Console.
- **CREACIÓN** — no existe volumen de búsqueda porque el comprador aún no sabe que tiene el problema. Objetivo: LinkedIn, correo a base, munición de outbound, y ser citable por LLMs. Se mide en impresiones de LinkedIn y reuniones agendadas.
- **PUENTE** — reescritura de activos existentes para redirigir autoridad (sección 2, Paso 2).

**Responsables:** Leo Flores (narrativa, pilares, listicles) · Fabián Flores (técnico, datos, demos, SEO ops) · María (autoría ejecutiva y POV de industria) · Pablo Gómez y José de Buen (contenido de objeciones — tienen las objeciones reales y hoy ese contenido no existe).

### OCTUBRE 2026 — Construcción de los 3 pilares

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 1 | **6 oct** | Automatización de procesos con IA en empresas mexicanas: guía 2027 | `ia automatización operaciones` (41) | C2 | **Pilar** 2,500 pal. → `/es/automatizacion` | CAPTURA | Leo + Fabián |
| 2 | **8 oct** | El desfase de información: por qué tu agencia te vende diseño cuando necesitas ingeniería | — (LinkedIn) | Tesis | Ensayo POV | CREACIÓN | María (firma) / Leo (redacción) |
| 3 | **13 oct** | Agentes de IA en producción: qué es MCP y por qué tu piloto nunca salió del laboratorio | `ia integrada software empresarial` (61) | C3 | **Pilar** 2,500 pal. → `/es/agentizacion` | CAPTURA | Fabián + Leo |
| 4 | **20 oct** | Desarrollo de apps enterprise en México: arquitectura, costos y tiempos reales | `diseño app móvil enterprise` (60) | C1 | **Pilar** 2,500 pal. → `/es/desarrollo-apps` | CAPTURA | Leo |
| 5 | **27 oct** | ¿Cuánto cuesta automatizar un proceso con IA en México? Rangos reales 2027 | `cuanto cuesta automatizar procesos` | C2 | Artículo + calculadora (reusa `cotizador_frmedical.py`) | CAPTURA | Fabián |

> Pieza 5 es el gemelo comercial de `desarrollo-apps-moviles-cuanto-cuestan`, que ya genera 135 impresiones en LLMs. El formato "cuánto cuesta" es el que ya funciona; se replica al cluster correcto.

### NOVIEMBRE 2026 — Profundidad técnica y captura de la demanda pendiente

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 6 | **3 nov** | Integración SAP con IA: cómo conectar un agente a tu ERP sin romper el core | `automatizacion de procesos SAP` | C2 | Artículo técnico + diagrama → ancla landing `erp_bridge` | CAPTURA | Fabián |
| 7 | **5 nov** | Mejores agencias de desarrollo de aplicaciones en México 2027 | `agencia de desarrollo de aplicaciones` (**-9**) | C1 | Listicle comparativo | CAPTURA | Leo |
| 8 | **10 nov** | Por qué el 70% de los pilotos de IA en México no llega a producción (y los 4 puntos donde mueren) | — (LinkedIn) | Tesis | POV con dato propietario | CREACIÓN | Leo |
| 9 | **12 nov** | RAG privado y LFPDPPP: cómo usar IA con datos de clientes sin violar la ley en México | `rag privado datos empresa` | C3 | Guía legal-técnica → ancla `data_privacy` | CAPTURA | Fabián + revisión legal |
| 10 | **17 nov** | Outsourcing vs. squad dedicado: comparativa de costo real a 12 meses | `outsourcing desarrollo app` (52) | C1 | Comparativa + tabla de costos | CAPTURA | **Pablo Gómez** + Leo |
| 11 | **24 nov** | Teardown: 5 procesos de una constructora mexicana que se automatizan en 30 días | — (outbound) | C2 | Benchmark sectorial | CREACIÓN | Fabián + **José de Buen** |

> Pieza 7 **resuelve la acción pendiente del reporte** y ataca la única keyword con caída de contenido real (-9). Pieza 11 se escribe como munición directa para Constructora Alfa e Industrias HR del pipeline actual.

### DICIEMBRE 2026 — Prueba con números

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 12 | **1 dic** | Agente de triage con RAG: clasificar 10,000 tickets al mes sin contratar a nadie | `agente ia atencion clientes empresa` | C3 | Caso técnico + **demo `triage_rag` embebida** | CAPTURA | Fabián |
| 13 | **8 dic** | Las mejores empresas de automatización de procesos en México 2027 | `empresas automatizacion procesos mexico` | C2 | Listicle comparativo | CAPTURA | Leo |
| 14 | **10 dic** | Balance 2026: lo que aprendimos vendiendo IA a empresas mexicanas | — (LinkedIn + base) | Tesis | POV de cierre de año | CREACIÓN | María |
| 15 | **15 dic** | Conciliación financiera automática: de 5 días a 4 horas de cierre contable | `automatizacion conciliacion bancaria` | C2 | Caso + **demo `finance_matcher`** | CAPTURA | Fabián |

> Pieza 13 replica el formato de listicle que ya sostiene `empresa ux` en posición #2 — es el formato que los LLMs citan cuando alguien pregunta "a quién contrato".

### ENERO 2027 — Activación de las landings existentes y el primer puente

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 16 | **5 ene** | Modernización de software legacy: cómo migrar sin detener la operación | `modernizacion software legacy mexico` / `bluepixel modernización` (1) | C1 | Guía + framework | CAPTURA | Leo |
| 17 | **7 ene** | El costo oculto de no automatizar: modelo de cálculo para un director de operaciones | — (LinkedIn) | C2 | Carrusel + **hoja de cálculo descargable** (reemplaza el ebook muerto) | CREACIÓN | Fabián |
| 18 | **12 ene** | Onboarding legal y KYC automatizado: 80% menos tiempo de alta de cliente | `automatizacion onboarding kyc` | C2/C3 | Caso + **demo `legal_onboarding`** | CAPTURA | Fabián + José |
| 19 | **19 ene** | Análisis de RFP con IA: responder 3x más licitaciones con el mismo equipo | `analisis licitaciones ia` | C3 | Caso + **demo `rfp_analyst`** | CAPTURA | Leo |
| 20 | **26 ene** | **[PUENTE]** Reescritura de "Diseño UX/UI: qué es" con bloque hacia automatización | `diseño ux ui corporativo` (8) | C2 | Actualización de la pieza de **698 impresiones IA** | PUENTE | Leo |

### FEBRERO 2027 — Contenido de cierre comercial

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 21 | **2 feb** | Desarrollo de software enterprise en México: checklist de 12 puntos para evaluar proveedor | `desarrollo de software enterprise mexico` | C1 | Checklist descargable | CAPTURA | **Pablo Gómez** + Leo |
| 22 | **9 feb** | Diagnóstico FutureProof: la auditoría que hacemos antes de escribir una línea de código | — | Pilar 01 | Pieza de producto | CREACIÓN | Leo |
| 23 | **16 feb** | Reclutamiento con agentes de IA: filtrar 500 CVs en 20 minutos | `automatizacion reclutamiento ia` | C2 | Caso + **demo `hr_recruiter`** | CAPTURA | Fabián |
| 24 | **23 feb** | Nearshore software development in Mexico: cost, timezone and talent reality (2027) | `nearshore software development mexico` / `digital product design agency` (52) | C1 | **INGLÉS** — artículo + datos | CAPTURA | Fabián + María |

> Pieza 22 es el motor de conversión del Pilar 01 — es la que convierte lectores en diagnósticos agendados. Es la pieza más importante del semestre para pipeline.

### MARZO 2027 — Consolidación de autoridad

| # | Fecha | Título | Keyword objetivo | Cluster | Formato | Tipo | Resp. |
|---|---|---|---|---|---|---|---|
| 25 | **2 mar** | IA en el stack tecnológico empresarial: dónde inyectarla y dónde no | `ia en stack tecnológico empresarial` (59) | C3 | Guía de arquitectura | CAPTURA | Fabián |
| 26 | **9 mar** | **Reporte BluePixel: Estado de la Automatización Empresarial en México 2027** | — (PR + LLM) | Todos | **Encuesta propia a 100 directores + PDF + microsite** | CREACIÓN | Leo + María |
| 27 | **16 mar** | Agentes de IA para empresas en México: catálogo de 10 casos con ROI medido | `agentes ia empresas mexico` | C3 | **Hub** que enlaza las 10 landings ya construidas | CAPTURA | Fabián |
| 28 | **23 mar** | **[PUENTE]** "Mejores agencias UX/UI México" → "Mejores agencias de desarrollo y automatización en México 2027" | `empresa ux` (2) + `mejores agencias desarrollo mexico` | C1/C2 | Reescritura + expansión | PUENTE | Leo |

> **Pieza 26 es el activo más valioso del semestre para la sección 6.** Los LLMs citan desproporcionadamente datos originales. Una estadística propietaria sobre automatización en México es lo único que nadie más puede replicar y es lo que hará que ChatGPT y Gemini citen a BluePixel por nombre.
>
> **Pieza 27** pone a trabajar las 10 landings ya construidas (`aoc`, `apa`, `data_privacy`, `erp_bridge`, `finance_matcher`, `hr_recruiter`, `legal_onboarding`, `rfp_analyst`, `smart_ads`, `triage_rag`), que hoy existen sin página madre que las enlace ni les pase autoridad.

### Resumen de carga

| Responsable | Piezas |
|---|---|
| Fabián Flores | 11 |
| Leo Flores | 11 |
| María (CEO) | 3 (firma; redacción asistida) |
| Pablo Gómez | 2 |
| José de Buen | 2 (coautoría) |

**≈ 1.2 piezas por persona por mes.** Es sostenible. Si no lo es, se contrata redacción técnica externa antes que recortar frecuencia — la densidad es el mecanismo del pivote (sección 2, Paso 4).

---

## 6. PLAN GEO/AEO: QUE LOS LLMs CITEN A BLUEPIXEL

### 6.1 Punto de partida: el canal ya funciona, con el contenido equivocado

**120 páginas de BluePixel reciben impresiones en LLMs. 2,706 solo entre las 8 primeras.** El mecanismo de citación ya está abierto. Y produjo un lead real y documentado: **Five Diamond Club, vía Gemini, "Automatizar flujo de clientes", 10 sep 2026.**

Eso no es una hipótesis. Es un caso probado con nombre y fecha. El trabajo no es abrir el canal, es **cambiar lo que se cita**.

**Queries objetivo del semestre:**
1. `agentes IA empresas México`
2. `automatización de procesos SAP`
3. `desarrollo de software enterprise México`

### 6.2 Siete tácticas, todas con métrica

**T1 — Formato citable obligatorio.** Los LLMs extraen pasajes autocontenidos. Regla editorial innegociable para las 28 piezas del calendario: **cada pieza abre con un bloque "Respuesta corta" de 40–60 palabras que responde literalmente la query objetivo**, antes de cualquier introducción. Después: listas numeradas, tablas con unidades explícitas, y definiciones sin pronombres ambiguos.
> **Métrica:** 100% de piezas publicadas con bloque de respuesta corta. Auditoría mensual: Fabián.

**T2 — Schema.org completo.** **[inferencia: el crawl no captura JSON-LD, así que no puedo confirmar qué existe hoy; verificar con Rich Results Test como primer paso.]**
- `Organization` con `knowsAbout` explícito hacia IA/automatización/MCP/SAP
- `Service` en cada una de las 3 páginas pilar
- `FAQPage` en cada pieza de CAPTURA
- `HowTo` en las guías técnicas (piezas 6, 9, 16, 25)
- `Article` con `author` como `Person` real (Fabián, Leo, María) con `sameAs` a su LinkedIn — **nunca "BluePixel Team"**. Los LLMs ponderan autoría identificable.
> **Métrica:** 100% de páginas de cluster validando sin errores en Rich Results Test al **30 nov 2026**.

**T3 — Consolidación de entidad.** Los LLMs necesitan resolver "BluePixel" como una entidad con atributos. `/es/sobre-nosotros` **ya rankea #1** para `bluepixel ia` y `bluepixel modernización` — ya es el nodo. Cargarlo con: fundación, equipo nombrado, clientes verificables (Bimbo, IQOS, LifeMiles, RadioShack), ubicación, y capacidades técnicas explícitas por nombre (MCP, RAG, SAP, agentes autónomos). Añadir `sameAs` a LinkedIn, Crunchbase, Clutch y GitHub.
> **Métrica:** al preguntar a ChatGPT/Gemini "¿qué es BluePixel México?", la respuesta menciona IA o automatización. Baseline hoy: **[inferencia: no menciona — verificar el 1 de octubre]**.

**T4 — Presencia en las fuentes que los LLMs leen para recomendar proveedores.** En consultas del tipo "qué agencia contrato", los modelos citan desproporcionadamente **directorios y comunidades**, no sitios de marca.
- Perfil completo y con reseñas en **Clutch, DesignRush, GoodFirms**. Mínimo **8 reseñas verificadas de clientes al 31 dic 2026** — Pablo y José las solicitan a clientes activos.
- **12 respuestas técnicas de calidad** en foros en español (Reddit, Quora, comunidades de TI en México) sobre automatización e integración de ERP. Firmadas, con nombre real, sin liga promocional en el cuerpo. Responsable: Fabián.
> **Métrica:** número de dominios de terceros que mencionan "BluePixel" junto a "agentes IA" o "automatización". Medición mensual con búsqueda de frase exacta.

**T5 — Dato propietario.** Regla: **cada pieza de CREACIÓN debe contener al menos un dato que solo BluePixel tenga.** El activo central es la **pieza 26 (Reporte Estado de la Automatización Empresarial en México 2027)**. Una estadística original es lo único no replicable y es el mecanismo #1 de citación en LLMs.
> **Métrica:** 7/7 piezas de CREACIÓN con dato propietario.

**T6 — Medición del canal LLM (hoy no existe). Implementar en 2 semanas.**
- **Segmento en GA4** para referral de LLM: `chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com`.
- **Campo obligatorio "¿cómo nos encontraste?"** en todos los formularios, con opción explícita "ChatGPT / Gemini / Perplexity / otro asistente de IA". Sin esto, el lead de Five Diamond Club habría sido invisible.
- **Prompt-tracking manual:** batería fija de **15 prompts** (las 3 queries objetivo × 5 variantes), ejecutada el **día 1 de cada mes** en ChatGPT, Gemini, Perplexity y Claude, registrando si BluePixel aparece y en qué posición de la lista. Es el equivalente a un rank tracker para LLMs; hoy no existe una herramienta confiable que lo haga, se hace a mano en 40 minutos. Responsable: **Fabián**. Primera corrida: **1 de octubre 2026**.
> **Baseline:** **[inferencia: 0 de 15 — asumir cero hasta la primera corrida]**. **Meta 31 mar 2027: ≥6 de 15.**

**T7 — `llms.txt` y acceso de crawlers de IA.**
- Publicar `/llms.txt` con el mapa de las 3 páginas pilar y el posicionamiento en una línea.
- **Verificar que `robots.txt` no bloquee** `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`.
- **Decisión explícita: permitirlos todos.** El riesgo de "me copian el contenido" es irrelevante frente al upside. Ya hay 120 páginas citadas y de ahí salió un lead real con nombre. Bloquearlos apagaría el único canal que hoy entrega el perfil correcto.
> **Métrica:** `robots.txt` auditado y `llms.txt` publicado al **30 sep 2026**.

### 6.3 Tablero GEO trimestral

| KPI | Hoy | 31 dic 2026 | 31 mar 2027 |
|---|---|---|---|
| Prompts de 15 que citan a BluePixel | 0 [inf] | 3 | **6** |
| Impresiones en IA de páginas de cluster IA/automatización | ≈ 0 | 400 | **1,200** |
| Leads con origen declarado "asistente de IA" | 1 | 4 | **10** |
| Reseñas verificadas en directorios | [verificar] | 8 | **15** |
| Piezas con dato propietario | 0 | 3 | **7** |

---

## 7. REDES SOCIALES: MATAR, MANTENER, CONSTRUIR

### 7.1 El diagnóstico sin adornos

**Instagram — 16,448 seguidores, alcance real de 123 personas.**

| Métrica | Valor | Lectura |
|---|---|---|
| Seguidores | 16,448 | — |
| Alcance por post | 123 y 143 | **0.75% de la audiencia** |
| Me gusta por post | 2 y 1 | — |
| Alcance de reels | 781 y 360 | 4.7% y 2.2% |
| Jul 2025 | **+4,489 ganados** | — |
| **Ago 2025** | **+877 ganados / 19,624 perdidos** | — |

**[inferencia, pero sólida]** Ninguna agencia B2B gana 4,489 seguidores orgánicos en un mes ni pierde 19,624 al mes siguiente. Ese patrón —adquisición masiva seguida de purga masiva— es compra de seguidores seguida de limpieza de Meta. El resultado: una cuenta de 16,448 seguidores cuyo alcance real es de 123 personas. **El algoritmo ya clasificó a esa audiencia como no-engaged. Esa cuenta no se recupera.** No hay táctica de contenido que arregle una audiencia comprada.

**Y se sigue pagando por ella.** De las 4 campañas de Meta visibles, **3 son publicaciones de Instagram impulsadas** que generaron **2, 1 y 0 vistas de landing page** con $208.74 de inversión. Se está pagando por amplificar contenido orgánico a una audiencia que no existe.

**LinkedIn — el canal donde vive el 100% del pipeline, en coma.**

| Mes | Nuevos seguidores |
|---|---|
| Abr 2026 | +81 |
| May 2026 | +33 |
| Jun 2026 | **+4** |

Caída de **-95% en dos meses**. Y simultáneamente: **$24,999.71 MXN invertidos en LinkedIn Ads en 13 días** apuntando desde una página que crece 4 seguidores al mes.

### 7.2 La asimetría, dicha directo

**BluePixel tiene 16,448 seguidores en el canal donde no está su comprador, y una página en coma en el canal donde está el 100% de su pipeline de valor Alto.**

Los tres prospectos de valor Alto del CRM —el CTO de RetailX, el VP de Innovación de Banco Nacional, el Gerente de Compras de Constructora Alfa— **están en LinkedIn todos los días y no están en Instagram nunca**. Todo el esfuerzo social está invertido al revés.

Además, la pauta de LinkedIn está corriendo contra una página sin señal social, lo que sube el CPM y hunde el CTR del anuncio. Se está pagando una penalización por no haber construido la base orgánica.

### 7.3 Las tres decisiones

**MATAR — Instagram como canal de adquisición. Efectivo 30 de septiembre 2026.**
- **No borrar la cuenta.** Se mantiene como escaparate de marca y herramienta de reclutamiento.
- **2 posts al mes**, reciclando material ya producido. Cero producción dedicada.
- **Cero presupuesto de impulso. Detener hoy** el impulso de publicaciones de IG en Meta Ads.
- Liberación: **$9,500 MXN de presupuesto asignado en 13 días** → **[inferencia: $130k–$250k MXN anualizados]** si se sostiene el ritmo, más el 100% del tiempo de producción del equipo.
- **Nunca más se compran seguidores, en ningún canal.** El daño de 2025 sigue costando alcance en 2026.

**MANTENER en piloto automático — TikTok.**
- 8,727 seguidores con alcance **real**: 11,619 / 7,356 / 3,581 views. Crecimiento saludable (+1,422 en enero 2026) con pérdidas de 12–37 al mes, no de miles. **Esta cuenta es orgánica de verdad.**
- Pero no vende enterprise. Uso asignado: **marca empleadora y reclutamiento de talento técnico**.
- 4 videos al mes reciclando contenido existente. Cero presupuesto, cero producción nueva.

**CONSTRUIR — LinkedIn. Prioridad absoluta del trimestre.**

### 7.4 Plan de LinkedIn orgánico B2B, semana a semana (12 semanas: 22 sep – 12 dic 2026)

**Principio rector: perfiles personales por encima de la página de empresa.** En B2B, el alcance orgánico de un perfil personal supera con amplitud al de una página corporativa. **[inferencia: comportamiento estándar del canal.]** La página republica; las personas construyen.

**Cadencia semanal fija:**

| Perfil | Publicaciones | Comentarios |
|---|---|---|
| **María** (CEO) | 1/sem — POV de industria, autoridad ejecutiva | 3/sem |
| **Leo** | 2/sem — cluster y producto | 5/sem |
| **Fabián** | 2/sem — técnico, datos, demos | 5/sem |
| **Pablo Gómez** | 1/sem — objeciones de venta | **3 comentarios de valor/día en posts de prospectos** |
| **José de Buen** | 1/sem — objeciones de venta | **3 comentarios de valor/día** |
| **Página BluePixel** | 2/sem propios + repost de los personales | — |

| Semana | Fechas | Foco | Entregable / Meta |
|---|---|---|---|
| **S1** | 22–26 sep | **Higiene.** Los 5 perfiles reescritos: headline con el cluster, banner, sección Destacado con 3 pilares + 1 demo. Página: banner, tagline, CTA a `/es/agentizacion`. | 5 perfiles auditados y corregidos (Fabián) |
| **S2** | 29 sep – 3 oct | **Construcción de red.** 20 invitaciones/día por perfil a ICP (Dir./VP/C-level de Ops, TI, Innovación, Finanzas en empresas 200+ empleados en MX), con listas de `apollo_enrichment.py`. María publica la pieza 2. | +500 conexiones ICP por perfil en 4 semanas |
| **S3** | 6–10 oct | **Lanzamiento Cluster 2.** Leo: carrusel de 5 procesos automatizables. Fabián: post técnico con diagrama de arquitectura. | 1 post con >3,000 impresiones |
| **S4** | 13–17 oct | **Cluster 3 + MCP.** Fabián publica el post largo "qué es MCP y por qué importa". **Este es el post que define la categoría.** Pablo y José etiquetan a 3 prospectos relevantes cada uno. | 1 post con >5,000 impresiones |
| **S5** | 20–24 oct | **Cluster 1 + prueba social.** María publica sobre un cliente enterprise (Bimbo / IQOS / LifeMiles / RadioShack, con autorización). | 5 conversaciones de DM iniciadas |
| **S6** | 27–31 oct | **Demo Day.** Fabián publica video nativo de 60 s de `triage_rag` funcionando. Video nativo, **nunca liga**. | 20 comentarios pidiendo acceso → lista de leads |
| **S7** | 3–7 nov | **SAP / ERP.** Post técnico de integración + pieza 6. Segmento: directores de TI. | 10 conexiones nuevas de perfil TI enterprise |
| **S8** | 10–14 nov | **Contrarian.** Leo: "por qué el 70% de los pilotos de IA mueren". Diseñado para generar debate. | 40 comentarios |
| **S9** | 17–21 nov | **Ventas al frente.** Pablo y José publican cada uno las 3 objeciones que más escuchan y cómo las resuelven. **El contenido comercial es el que más convierte y hoy no existe.** | 2 posts, 8 DMs de prospectos |
| **S10** | 24–28 nov | **Legal / LFPDPPP.** Fabián: RAG privado y cumplimiento. Apunta directo a Banco Nacional del pipeline. | 5 conexiones en banca/compliance |
| **S11** | 1–5 dic | **Caso con números.** Conciliación financiera: de 5 días a 4 horas. Formato antes/después con cifras. | 1 post con >4,000 impresiones |
| **S12** | 8–12 dic | **Cierre y captura.** María abre **10 espacios de Diagnóstico FutureProof sin costo para enero**. | **10 solicitudes agendadas** — este post convierte 3 meses de trabajo en pipeline |

**KPIs al 31 de diciembre 2026:**

| KPI | Baseline | Meta |
|---|---|---|
| Seguidores de página | **+4/mes** | **+150/mes** |
| Conexiones ICP nuevas (5 perfiles) | — | 2,500 acumuladas |
| Impresiones agregadas/mes | — | 80,000 **[inferencia]** |
| Conversaciones de DM con ICP | — | 60 |
| **Reuniones agendadas desde LinkedIn** | 0 | **15** |
| Leads al CRM | 0 | 25 |

**Regla de corte, acordada de antemano:** si al 31 de diciembre las reuniones agendadas desde LinkedIn orgánico son **menos de 8**, el problema **no es el canal, es el mensaje**. En ese caso se revisa la tesis comercial antes de meter un peso más de presupuesto. No se "insiste".

### 7.5 Sobre los $25,000 de LinkedIn Ads

La campaña **Awareness** gastó **$24,999.71 de $25,600** y el reporte no registra ninguna conversión. Awareness en LinkedIn, con este presupuesto y sin señal social en la página, es gasto sin retorno recuperable.

**Acción:** pausar la campaña Awareness el **30 de septiembre**. Reactivar a partir de la **semana 6 (27 oct)**, cuando ya haya datos de qué post orgánico funcionó, convertida a **Thought Leader Ads / Document Ads** amplificando exactamente esos posts. Eso sí es medible: se amplifica lo que ya demostró tracción orgánica, en vez de adivinar.

---

## 8. LAS "ACCIONES EN CURSO" DEL REPORTE

El reporte lista tres. Hay una cuarta que no está y que debería ser la primera.

### 8.0 (No listada, prioridad #1) — Sprint de titles, metas y H1

Antes de las tres pendientes: **el sprint de corrección on-page del 15 al 26 de septiembre** (sección 3.5). No requiere aprobación de nadie, no cuesta medios, toma una semana de una persona, y su impacto proyectado (+72% a +182% de tráfico orgánico) supera al de las tres acciones pendientes sumadas. **Responsable: Fabián. Arranca hoy.**

### 8.1 "Aprobación artículo HIR"

**[inferencia: HIR corresponde a HIR Casa / Grupo HIR, grupo financiero-inmobiliario mexicano. El reporte no lo especifica — confirmar con Leo antes de publicar cualquier cosa con ese nombre.]**

**Qué hacer:**
- **No aprobarlo como está si es una pieza de portafolio visual o de UX.** Publicar más contenido de diseño en este momento agrava exactamente el problema de la sección 2.
- **Si HIR es cliente o caso real:** reencuadrarlo como **caso de estudio con números de negocio** — procesos intervenidos, tiempo ahorrado, sistemas integrados, ROI. No capturas de pantalla bonitas. Un caso enterprise con cifras es uno de los activos más escasos que tiene BluePixel hoy y vale 10 veces más que una pieza de portafolio.
- **Si es un artículo genérico sin cliente detrás:** matarlo. Sin ceremonia.

**Fechas:** decisión de Leo antes del **22 de septiembre**. Publicación el **6 de octubre o nunca**.

**Regla que hay que institucionalizar:** un borrador que lleva semanas en aprobación y que nadie extraña, no se publica — se cierra. Un artículo atorado cuesta más en atención del equipo de lo que jamás rendirá en tráfico.

### 8.2 "Ajustes blog mejores agencias de Desarrollo de apps"

**Esta es la más valiosa de las tres y está catalogada como un "ajuste".** Es un error de priorización.

**Por qué importa:** su artículo hermano, `mejores-agencias-diseno-ux-ui-mexico`, genera **93 impresiones en LLMs** y sostiene `empresa ux` en **posición #2**. El formato de listicle comparativo es precisamente el que los LLMs citan cuando alguien pregunta *"¿qué agencia contrato en México?"*. Y la keyword que ataca —`agencia de desarrollo de aplicaciones`— es **la única con caída de contenido real en todo el portafolio (-9)**.

**Qué hacer — no "ajustar", reescribir y expandir:**
- Título: **"Mejores agencias de desarrollo de aplicaciones en México 2027"**
- Tabla comparativa con criterios duros: stack tecnológico, tamaño mínimo de proyecto, verticales atendidas, certificaciones, modelo de contratación
- BluePixel posicionada por **capacidad de ingeniería e IA**, no por diseño
- Bloque **"Respuesta corta"** citable al inicio (táctica T1, sección 6)
- `FAQPage` schema

**Fecha: 5 de noviembre 2026. Responsable: Leo.** Es la **pieza 7** del calendario, adelantada a propósito.

**Corrección de prioridad relacionada:** la versión de automatización (pieza 13, 8 dic) y la reescritura del artículo de UX (pieza 28, 23 mar) completan la familia. Los tres listicles juntos forman el bloque de citación LLM más importante del sitio.

### 8.3 "Clones de BluePixel — Empezar solicitud"

**[inferencia: "clones" en contexto SEO se refiere a sitios de terceros que replican contenido o diseño de bluepixel.mx; "empezar solicitud" = iniciar retiros por DMCA.]**

**Qué hacer, con fechas:**

| Fecha | Acción | Responsable |
|---|---|---|
| **30 sep 2026** | Documentar: URL, capturas con fecha, contenido duplicado. Búsqueda de frase exacta entre comillas de los H1 y primeros párrafos de las páginas con más tráfico. | Fabián |
| **15 oct 2026** | Presentar DMCA vía Google Search Console (Retiros → Legal) **y** al hosting/registrar del sitio clon. | Fabián |
| **15 oct 2026** | **Si el clon usa la marca "BluePixel":** es asunto de marca registrada ante el **IMPI**, no solo DMCA. **Verificar primero que el registro de marca esté vigente** antes de enviar cualquier comunicación legal. | María / legal |

**Calibración honesta de prioridad:** esto importa para la marca, pero su impacto en pipeline es bajo. **No debe consumir más de 4 horas de trabajo este trimestre ni bloquear a Leo.** Si hay que elegir entre perseguir clones y publicar el pilar de Cluster 2, se publica el pilar.

Un clon de un sitio que convierte 21 leads no te quita ventas. **No tener página de automatización sí.**

---

## RESUMEN EJECUTIVO: LAS 5 DECISIONES DEL TRIMESTRE

| # | Decisión | Fecha | Responsable | Impacto proyectado |
|---|---|---|---|---|
| **1** | Sprint on-page: 20 titles, 20 metas, 10 H1 rotos, H1 faltante, hreflang, español | **15–26 sep 2026** | Fabián + Leo | **+72% a +182% de tráfico orgánico**. Costo: $0 en medios. |
| **2** | Publicar las 3 páginas pilar de cluster en español | **6, 13 y 20 oct 2026** | Leo + Fabián | Cierra la brecha de 50 posiciones en 10–16 semanas |
| **3** | Matar Instagram como canal de adquisición; construir LinkedIn orgánico con 5 perfiles | **30 sep – 12 dic 2026** | Los 5 perfiles | 15 reuniones agendadas al 31 dic |
| **4** | Instalar medición del canal LLM (GA4 + campo de formulario + batería de 15 prompts) | **1 oct 2026** | Fabián | Hace visible el único canal que hoy entrega el ICP correcto |
| **5** | Auditar Auction Insights de la campaña Brand ($103,957 en 13 días sobre términos donde ya se rankea #1) y conciliar la discrepancia de 14x en el gasto de Google | **22–30 sep 2026** | Fabián + Diana Cardoso (Rocketing) | **[inferencia: $62k–$73k MXN recuperables por periodo]** — financia el plan de contenido completo |

**La frase que resume el diagnóstico:** BluePixel tiene un activo SEO que funciona bien, en español, con una tasa de conversión visita→lead de 5.12% — vendiendo el servicio equivocado a un comprador sin presupuesto, desde un sitio configurado en inglés, mientras paga $103,957 en 13 días por clics en su propia marca. No hay que construir un canal nuevo. Hay que reapuntar el que ya existe.