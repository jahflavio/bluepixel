# INVENTARIO Y VALORACIÓN COMERCIAL — ACTIVOS DE PRODUCTO

## HALLAZGO QUE DOMINA TODO EL INVENTARIO

Las 10 landing pages de pauta **tiran el 100% de los leads a la basura**. En los 10 archivos de `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/landings/`:

```js
<form onSubmit={(e) => { e.preventDefault(); window.dataLayer && window.dataLayer.push({'event': 'lead_form_submitted'}); alert('Lead capturado en Webhook/MCP'); }}>
```

No hay `action`, no hay `fetch`, no hay endpoint. El prospecto llena nombre, teléfono, correo corporativo — y recibe un `alert()`. Los datos nunca salen del navegador. Además el contenedor de analítica es literalmente el placeholder `GTM-XXXXXXX` (2 ocurrencias en cada uno de los 10 archivos), así que tampoco hay medición. Y los 10 cargan `react.development.js` + `@babel/standalone` para transpilar en el navegador: página lenta, invisible a SEO, servida a tráfico de pauta con CPC de $42.97 promedio (hasta $196.10 en App Dev).

Si alguna de estas landings estuvo activa en cotiza.bluepixel.mx durante Q3, **es una explicación mecánica y suficiente de las 0 propuestas en Q3 con $235.69K MXN invertidos en septiembre**. Verificar hoy mismo qué se sirve en producción es la acción #1 del plan. [inferencia: no puedo confirmar desde estos archivos qué build está desplegado; `dist/landings/` y `public/landings/` contienen las mismas copias].

---

## 1. LAS 4 DEMOS: QUÉ HACEN REALMENTE

### Regla previa: el hub está roto y mal etiquetado
`Demos_PLG/index.html` anuncia **7 demos y solo existen 4**. Links muertos a `Demo_Finance_Matcher/`, `Demo_RFP_Analyst/`, `Demo_Smart_Ads_Stock/` → 404 para el prospecto. Peor: **2 de las 4 que sí existen no son lo que el hub dice**.

### A) Cotizador FR Medical — `Demos_PLG/11_Cotizador_IA_FR_Medical/index.html`
**El único activo de grado enterprise del inventario.** 1,139 líneas, 71KB, construido de verdad.

Qué hace al abrirla: carga una consola "FR Medical Surgical OS v2.4" con 4 casos clínicos reales precargados. Botón de **llamada de voz** que usa `SpeechSynthesisUtterance` en es-MX — el cirujano dicta el caso en voz alta y el sistema lo transcribe al prompt. El texto libre se rutea por keywords (`redax`/`boston`/`nuss`) al caso correcto. Corre un "Validation Sentinel" de 0.8s con 5 checks encadenados (SKUs, precios de convenio, semáforo de crédito, stock, vigencia COFEPRIS), emite un **payload MCP real en pantalla** (`"mcp_event": "SURGICAL_ORDER_APPROVED"`), calcula subtotal+IVA 16%, anima un mensajero por GPS sobre SVG, y tiene **pad de firma en canvas con soporte táctil** y **generación de PDF real con jsPDF + autoTable** (incluye `cleanPdfText()` para sanitizar emojis que rompen Helvetica — detalle de alguien que sí lo hizo funcionar).

Convincente para decisor técnico: **sí, 8.5/10.** Es el único activo donde un CTO ve arquitectura (MCP, orquestación, validación por capas) y no una animación. Riesgos: el WhatsApp es un `alert()` (línea 1125), y `iniciarRastreoGPS()` hace loop infinito del marcador.

Cluster: **Agentización.** Funnel: **mid/bottom** — cierre y prueba de capacidad, no captación.

**¿Se puede mostrar mañana sin pena? NO en su forma actual.** Filtra la estructura comercial confidencial de FR Medical: margen bruto 42% y comisión de vendedor 8.5% calculados en vivo (`renderHojaQuirurgica`), precios por convenio hospital por hospital, SKUs de proveedor (MedXpert Stracos, Redax, Boston Medical), registros COFEPRIS, hospitales nombrados (Ángeles Pedregal, Ángeles Lomas, INER, Médica Sur) y hasta choferes con nombre y unidad. Requiere build anonimizado + consentimiento por escrito de FR Medical. Con eso hecho: es el mejor activo de venta que tiene BluePixel.

### B) Triage RAG — `Demos_PLG/Demo_Triage_RAG/index.html`
Qué hace: simulador de WhatsApp a la izquierda, terminal de logs `/var/log/bluepixel-rag-agent.log` a la derecha. **Es la única demo con input de texto libre funcional.** Escribes cualquier cosa y el panel derecho emite logs escalonados (sentiment analysis, vectorización, score de match) mientras el chat responde.

La narrativa —"intenta hacer alucinar al bot"— **sí funciona**: cualquier pregunta fuera de los 3 temas cae en `[WARN] Umbral de confianza < 0.85. Bloqueando alucinación` y ofrece escalar a L2. Ese es un argumento de venta genuino para un decisor que teme desplegar IA.

Pero por dentro es `text.includes("precio")`, no RAG. Fallas que un CTO encuentra en 60 segundos: **"¿cuánto cuesta?" no hace match** (el código busca `precio` o `costo`, no `cuesta`) y el bot se rehúsa a responder su propia lista de precios. `datos` mapea a la respuesta de seguridad. Y los logs prometen infraestructura falsa muy específica: "Pinecone Vector DB. Index: 45,912 chunks".

Además **filtra un ancla de precio**: `"Nuestros servicios B2B comienzan en $10,000 USD mensuales"` — ~$180,000 MXN/mes, cifra que no corresponde a ningún pilar de contratación definido.

Cluster: **Automatización.** Funnel: **top/mid** — es el mejor candidato a lead magnet público.

**¿Mañana sin pena? Sí, con 2 horas de trabajo**: ampliar sinónimos (`cuesta`, `cotiza`, `tarifa`, `inversión`), quitar el precio en USD o alinearlo a MXN, y despersonalizar "Pinecone/45,912 chunks" a "Vector DB". Es la demo más barata de dejar presentable.

### C) "ERP Bridge" — `Demos_PLG/Demo_ERP_Bridge/index.html` — **NO MOSTRAR**
El hub promete: *"Pregunta en lenguaje natural a la base de datos y observa cómo se traduce a SQL seguro vía MCP."* **La demo no contiene una sola línea de SQL, ni MCP, ni traducción.** Es un "BI Chat | Executive Dashboard" con `<input id="chat-input" ... disabled>` — el campo de chat está literalmente deshabilitado. Solo hay 2 botones con respuestas hardcodeadas en `chatdata.js`.

Y el problema grave: **el dashboard muestra los números reales de BluePixel**. MRR $42,500, churn 4.2%, 12 nuevos clientes = exactamente septiembre 2026. La gráfica Q1 $120k / Q2 $165k / Q3 $85k = los ingresos brutos reales de marzo, junio y septiembre. Encima, la respuesta del "analista IA" inventa una causa raíz ("pérdida de 3 cuentas Enterprise en Retail") sobre datos verdaderos, y cierra proyectando "$180k USD" cuando el dashboard está en otra moneda.

Abrir esto frente a un prospecto le enseña que BluePixel está cayendo 48% trimestre contra trimestre. Convincente para decisor técnico: **2/10**. **No se puede mostrar. Punto.**

### D) "Legal Onboarding KYC" — `Demos_PLG/Demo_Legal_Onboarding_KYC/index.html` — mal etiquetada
El hub promete: *"Sube un Acta Constitutiva falsa y mira cómo el agente emite un dictamen de riesgo OSINT."* **Eso no existe.** El archivo es `<title>HR Onboarding Cero-Touch</title>`: alta de empleado que provisiona Google Workspace, Slack y Jira. Los 3 campos están `disabled` con "Carlos Mendoza / Ingeniero Backend" fijos. Un botón, 3.2s de animación de nodos, cierra con "Empleado Provisionado en 2.4s — 4 Horas de trabajo manual de TI ahorradas".

Es bonita y el claim de ahorro es vendible, pero es cero interactiva y la promesa del hub es otra. Convincente: **4/10** (un CTO ve que no puede tocar nada).

Cluster: **Automatización.** Funnel: **top** — pieza de contenido, no de venta.

**¿Mañana sin pena? Sí, si la renombras** a lo que realmente es y la sacas de la carpeta KYC. Vendida como "KYC" te quema la credibilidad en el minuto uno.

---

## 2. BLUEPIXEL_ENGINE: FUNCIONAL VS. SCAFFOLDING

Ruta: `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/bluepixel_engine/`

| Script | Estado | Veredicto |
|---|---|---|
| `main.py` | Semi-funcional | Webhook FastAPI que corre. Pero **solo hace `print()`** — la "alerta a Slack/WhatsApp" es un print, no hay integración con HubSpot, ni persistencia, ni autenticación en el endpoint |
| `apollo_enrichment.py` | **Scaffolding puro** | **No llama a Apollo.** Es un dict con 3 dominios hardcodeados: kavak.com, bancoazteca.com.mx, mi-tiendita.com. Cero capacidad real de enriquecimiento |
| `lead_scoring.py` | Funcional **pero roto de fábrica** | Ver abajo |
| `seo_spider.py` | **Funcional de verdad** | Crawler real con requests+BeautifulSoup+lxml. El único script que produjo valor |
| `cotizador_frmedical.py` | Teatro de terminal | `print_slow()` con `time.sleep()`. Un solo caso hardcodeado |
| `test_webhook.py` | Funcional | Dispara 2 leads de prueba. Correcto |

### El defecto crítico: el motor de scoring nunca puede mandar un lead a ventas

`lead_scoring.py` tiene tres cubetas: firmográfico {40, 20, 0}, rol {30, 10, 0}, intención {30, 10, 0}. El umbral es:

```python
decision = "ENVIAR A VENTAS (SLACK/WHATSAPP)" if score >= 90 else "MANDAR A NURTURING AUTOMATICO"
```

Máximo posible = 100. **La única combinación que alcanza 90 es 40+30+30 = 100 exacto.** No existe ninguna otra suma entre 90 y 99. Un CTO de una empresa mid-market con intención máxima saca 20+30+30 = **80 → nurturing**. Un director de una Enterprise que descarga el PDF saca 40+30+10 = **80 → nurturing**.

Y como `apollo_enrichment` solo conoce 3 dominios, **cualquier lead real del mundo recibe `company_size: 1` → 0 puntos firmográficos**. El techo real para un lead verdadero es 0+30+30 = **60**. Conclusión aritmética: **este motor, conectado hoy, enruta el 100% de los leads a nurturing y cero a Pablo y José.** Contrastado con el pipeline actual: "Gerente Compras" de Constructora Alfa → 10 pts de rol; "VP Innovación" de Banco Nacional → 30 pts pero 0 firmográficos.

Defectos secundarios: `intent_action` usa comparación exacta de string (`== "Hablar con Ventas"`), frágil ante cualquier variación del formulario de Webflow; y si el rol no cae en ninguna rama (ej. "Head of IT", "Coordinador", "Arquitecto"), suma 0 **en silencio**, sin dejar rastro en el breakdown.

### Capacidad de growth que realmente desbloquea hoy
- **Enriquecimiento Apollo: 0%.** No existe. Es una maqueta para enseñar en una junta.
- **Scoring de leads: 40%.** La matriz está bien pensada; el umbral y el enriquecimiento la inutilizan. Arreglo: bajar umbral a 60, y sustituir el mock por Apollo real o, más barato, por una heurística de dominio corporativo vs. gmail/hotmail.
- **Auditoría SEO: 85%.** Funciona y ya entregó el hallazgo más valioso del inventario (sección 3).

### Limitaciones reales del `seo_spider.py`
Tope de 20 páginas; no extrae **canonical ni hreflang** (justo lo que más importa con un sitio bilingüe /es/ + /post/); `'#' not in next_url` descarta URLs legítimas en lugar de recortar el fragmento; cuenta `bluepixel.mx` y `bluepixel.mx/` como dos páginas distintas; y por el filtro `base_domain` **nunca cruza a cotiza.bluepixel.mx**, donde viven las landings de pauta.

---

## 3. `seo_audit_bluepixel.csv`: EL HALLAZGO QUE VALE DINERO

20 URLs, todas 200, sin 404s. Lo importante no es lo que reporta, es lo que revela al cruzarlo con los datos de posiciones:

**1) Las 20 páginas del sitio están en inglés. Las 21 conversiones orgánicas de septiembre son en español (y 0 en inglés, -100%).**
Cada título, cada H1 y cada meta description del crawl está en inglés. Mientras tanto, las keywords que rankean son españolas: "agencia ux ui para empresas" (pos. 1), "desarrollo web mexico" (46), "ia automatizacion operaciones" (41).

**2) Las páginas de IA SÍ existen — pero en inglés. Esa es la causa mecánica de las posiciones 41-61.**
El crawl encuentra `/custom-ai-agents`, `/ai-strategy-workflow-automation-services`, `/smart-ux-flows-ai-copilots`, `/data-warehouse-architecture-services`, `/predictive-behavioral-analytics-services`. El inventario de deep-tech está construido y publicado. Simplemente **no puede rankear para "ia integrada software empresarial" (pos. 61) o "ia en stack tecnológico" (59) porque no hay una sola palabra en español en esas páginas**. Esto convierte el problema de "no tenemos contenido de IA" en "no tenemos las páginas de IA traducidas" — que es 10x más barato de resolver.

**3) El blog en español está huérfano.** Ningún `/es/blog/` aparece en 20 páginas de crawl desde la home. Es decir, las páginas que los LLMs citan (`/es/blog/diseno-ux-ui-que-es-guia`, 698 impresiones en IA) **no están enlazadas desde las páginas comerciales** dentro de la profundidad que recorre un bot. Todo el jugo de autoridad que genera el blog no baja a las páginas que venden.

**4) `/contact` no tiene H1.** El campo dice literalmente `FALTA H1`. Es la página de mayor intención del sitio.

**5) Erratas y descuidos en vivo:** meta description de `/ux-dashboard-design` dice **"UX- dirven"** (por "driven"). La home usa "Bluepixel" en el title mientras las otras 19 usan "BluePixel" — inconsistencia de entidad de marca, coincidente con la caída de -1 posición en las 8 keywords de marca [inferencia sobre la causalidad].

**6) El "desfase de información" está escrito literalmente en la meta description de la home.** El title dice *"Digital Evolution Partner | Enterprise Platforms Mexico"*, pero la meta description que Google muestra dice *"Digital Products Agency - BluePixel | Software, Mobile App & Web Development"*. En el mismo documento HTML, BluePixel se presenta como socio de transformación enterprise y como agencia de desarrollo web. El decisor con presupuesto de +$500k lee la segunda.

**7) Copy de ticket bajo:** `/web-development` y `/mobile-app-development` cierran con "Contact us today!" / "Contact us now!". Es lenguaje de agencia de $20k-$40k.

**8) Titles que truncan en SERP (>60 car.):** mobile-app-development (~76), contact (~69), home (~67).

**Nota de contexto relevante:** `/futureproof` ya existe con H1 "Evolve" y `/build` con H1 "Build". La nomenclatura BUILD+EVOLVE de los pilares de contratación **ya vive en el sitio**; no hay que inventar URLs nuevas para el Pilar 01.

---

## 4. CÓMO CONVERTIR ESTO EN GENERACIÓN DE DEMANDA

| Activo | Rol asignado | Mecanismo concreto |
|---|---|---|
| **Triage RAG** | **LEAD MAGNET** (top funnel) | Único con input libre. Publicar en `bluepixel.mx/es/demo-agente-rag` sin formulario previo (juego libre), y pedir correo corporativo solo para "recibir el log completo de la sesión + arquitectura en PDF". Feed natural al Cluster Automatización |
| **Cotizador FR Medical (anonimizado)** | **PIEZA DE VENTAS** (bottom funnel) | No se publica. Va en el laptop de Pablo y José. Se abre en la reunión 2, después del diagnóstico. El momento de voz→PDF firmado en 0.8s es el cierre. Soporta el Pilar 02 (Ingeniería de Agentes & MCP) |
| **HR Onboarding (ex-"KYC")** | **CONTENIDO** | Renombrar a lo que es. Grabar clip de 40s (clic → 3 nodos → "4 horas de TI ahorradas") para LinkedIn — el canal B2B muerto (+4 seguidores en junio) donde vive el ICP |
| **ERP Bridge** | **RECONSTRUIR o ARCHIVAR** | El concepto prometido (NL→SQL seguro vía MCP) es el mejor de los 4 para un CTO. Lo construido no lo es. Si se reconstruye: input habilitado, SQL visible, y `EXPLAIN` de por qué el MCP bloquea un `DROP TABLE` |
| **Las 10 landings** | **INFRAESTRUCTURA DE PAUTA** | Arreglar form + GTM antes de gastar un peso más. Hoy son un sumidero |
| **`seo_audit.csv`** | **ROADMAP DE CONTENIDO** | Las 5 páginas de IA en inglés = las 5 primeras traducciones al español |

**El error estructural a corregir:** las 10 landings y las 4 demos **no se conocen entre sí**. Reviso `landings/erp_bridge.html` y su único link saliente es `href="index.html"`. Un prospecto que llega desde Google Ads a la landing de ERP Bridge nunca puede llegar a la demo de ERP Bridge. Son dos universos paralelos. Conectarlos es un cambio de una línea por archivo y es lo que convierte tráfico pagado en producto probado.

---

## 5. LOS 3 ACTIVOS INFRAVALORADOS — Y CÓMO ACTIVARLOS

### #1 — Las 5 páginas de servicios de IA que ya existen en bluepixel.mx
**Por qué está infravalorado:** la conversación interna es "no comunicamos deep tech". Falso: `/custom-ai-agents`, `/ai-strategy-workflow-automation-services`, `/smart-ux-flows-ai-copilots`, `/data-warehouse-architecture-services` y `/predictive-behavioral-analytics-services` están publicadas, indexadas y devuelven 200. El problema no es que no exista el mensaje, es que **está en el idioma equivocado para el mercado que compra**.

**Activación (Fabián + agencia de contenido, semana del 21 al 27 de septiembre):** publicar `/es/agentes-ia-personalizados`, `/es/automatizacion-de-flujos-con-ia`, `/es/arquitectura-de-datos`, más hreflang recíproco y enlace desde la home. Costo marginal: traducción y localización, no creación. Objetivo: mover "ia automatizacion operaciones" de 41 a top-20 al 30 de noviembre. Es la única jugada del inventario que ataca directamente las keywords de alto valor comercial sin presupuesto de medios.

### #2 — El "Validation Sentinel" del Cotizador FR Medical, extraído como producto
**Por qué está infravalorado:** está enterrado dentro de una demo de un cliente que no se puede mostrar. Pero el patrón —5 validaciones encadenadas que auto-aprueban una operación crítica en 0.8s y emiten un evento MCP auditable— **es exactamente el Pilar 01 (Diagnóstico & Auditoría FutureProof, 2-4 semanas)** hecho visible. Es el argumento que separa "agencia que hace webs" de "ingeniería sobre procesos críticos".

**Activación (Fabián + Leo, semana del 28 de septiembre al 4 de octubre):** build anonimizado sin margen, sin comisión, sin hospitales ni SKUs reales (quitar el bloque `comisionVendedorVal` y el `utilidad * 0.42` completos), renombrado a un vertical genérico. Se convierte en el demo de cierre del Pilar 01 y en el caso vertical que hoy no tiene forma presentable. Prerrequisito no negociable: autorización por escrito de FR Medical.

### #3 — El `seo_spider.py` corriendo semanalmente contra la competencia
**Por qué está infravalorado:** se usó una vez, contra el propio sitio, y se archivó. Es un crawler funcional. La campaña "Competidores | RCKT | Jun26" gasta con CTR de 2.8% y CPC $87.73 sin ninguna inteligencia detrás.

**Activación (Fabián, 2 horas):** agregar extracción de canonical/hreflang, subir el límite a 100 páginas, y apuntarlo semanalmente a los 3 competidores que aparecen en "mejores agencias diseno ux ui mexico". Output: qué páginas publican, con qué títulos y en qué idioma. Alimenta el calendario de contenido con datos en vez de intuición, y le da a Diana Cardoso (Rocketing) keywords negativas reales.

---

## 6. QUÉ ARCHIVAR (no vale el esfuerzo de mantener)

**Duplicados exactos — verificado por MD5, borrar sin análisis:**
- `Casos_de_Estudio/Cotizador_FR_Medical/` completa. Los 3 archivos son **byte a byte idénticos** a los de `Demos_PLG/11_Cotizador_IA_FR_Medical/` (`d7948a45...` y `4c2ef680...`). Dos copias de un activo que va a cambiar = garantía de mostrar la versión con el margen del cliente.
- `Demos_PLG/11_Cotizador_IA_FR_Medical/surgical_os.html` — mismo hash que el `index.html` de su propia carpeta.
- `index_v1_simple.html` (635 líneas) — superado por la v2 de 1,139 líneas.

**Scaffolding que estorba:**
- `cotizador_frmedical.py` — `print()` con `sleep()`, un solo caso, y **contradice a la demo HTML**: mismo folio `FRM-2026-9214` pero en Python el hospital es "Centro Médico ABC Observatorio" y en HTML es "Hospital Ángeles Pedregal". Si ambos se muestran, se nota.
- `apollo_enrichment.py` — no se mantiene un mock de 3 dominios. Se reemplaza por Apollo real o por heurística de dominio corporativo.

**Archivar o reconstruir, no parchar:**
- `Demo_ERP_Bridge/` tal como está. Input deshabilitado + P&L real de BluePixel expuesto + promesa de SQL/MCP incumplida. No hay parche pequeño; o se reconstruye con NL→SQL de verdad o se saca del hub.
- `Demos_PLG/index.html` con sus 3 links a 404 y sus 2 descripciones falsas. Se reescribe a las 4 (o 3) demos reales o no se comparte con nadie.
- La nota `"Demo en vivo del cliente del Taller de Ayer. No borrar."` visible en el HTML del hub: es una nota interna que el prospecto lee.

**Mantener y priorizar:** `seo_spider.py` + `seo_audit_bluepixel.csv`, `lead_scoring.py` (con el umbral corregido a 60), `main.py`, y el Cotizador FR Medical en su versión anonimizada.