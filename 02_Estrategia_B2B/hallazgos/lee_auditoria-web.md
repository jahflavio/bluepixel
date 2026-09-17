## AUDITORÍA WEB BLUEPIXEL — SITIO ACTUAL, REDISEÑO Y PLAN 90 DÍAS
*Fuentes: los 3 documentos solicitados + verificación en vivo de bluepixel.mx, cotiza.bluepixel.mx y el código de `bluepixel-app` (15-sep-2026). Todo lo no verificable está marcado como [inferencia].*

---

# 1. HALLAZGOS DEL SITIO ACTUAL (bluepixel.mx), ORDENADOS POR IMPACTO EN PIPELINE

### 1.1 (CRÍTICO) El sitio declara una categoría equivocada en cada señal que Google y los LLMs leen
Verificado en vivo hoy:
- **H1 del home:** *"We Build, Evolve, and Scale AI-Powered Digital Platforms"*.
- **Meta description del home:** *"Digital Products Agency - BluePixel | Software, Mobile App & Web Development"*. Literalmente se auto-clasifica como agencia de productos digitales y desarrollo web.
- **El badge "#1 UX/UI company in Mexico by DesignRush · Top UX/UI · 2024" sigue publicado en el home**, pese a que la auditoría (§3.2) ordenó "eliminar de inmediato".
- **Navegación actual:** About / Services (Build, Futureproof) / Capabilities (Custom Software Development, UX Research & Product Strategy, Data & Analytics, **AI Agents & Automation**) / Industries (12 sectores) / Case Studies / Careers / Contact. La única entrada deep-tech está en el tercer nivel de un submenú.
- El crawl propio del equipo (`C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/bluepixel_engine/seo_audit_bluepixel.csv`, 20 URLs) confirma la proporción: **3 de 20 páginas son deep-tech** (`/ai-strategy-workflow-automation-services`, `/smart-ux-flows-ai-copilots`, `/custom-ai-agents`) = 15%. El resto es UX/UI, brand identity, dashboards, web y mobile dev.
- **`/build` y `/futureproof` tienen H1 de una sola palabra: "Build" y "Evolve".** Las dos páginas que sostienen el modelo de negocio no comunican ni posicionan nada.

*Impacto:* es la causa raíz mecánica del 1:50 y de que "App Dev BP" pague $196.10 por clic con 1 conversión. El desfase no es una tesis: está escrito en el `<title>`, en el H1 y en la meta description.

### 1.2 (CRÍTICO) La página de contacto: dónde se pierde el dinero de pauta
`/contact` (verificado en vivo). H1: *"Let's talk about your platform."* — **en inglés, para un mercado donde 21 de 21 leads orgánicos entraron en español y 0 en inglés.**

Campos: nombre, empresa, work email (requerido), teléfono, Role (select), "What are you looking to do?" (select), **Budget USD** (select: $25K–$50K / $50K–$100K / $100K–$250K / $250K+), textarea, más **5 campos UTM ocultos** (utm_source, campaign, term, adset, adname).

| Lo que ya está bien | Lo que rompe el pipeline |
| :--- | :--- |
| Captura 5 UTMs (base para closed-loop) | **No captura `gclid`** → imposible enviar Offline Conversions a Google Ads. El paso 1 de la tabla de Leo no está hecho en la web viva |
| Pide presupuesto (califica) | **El piso visible es $25K USD (~$460K MXN) en frío.** Es el shock de precio que mató 21 propuestas, puesto en el formulario |
| Promete SLA público | **Promete "a Bluepixel strategist will reach out within 2 hours"** con una tasa de contacto real de 44.44% en agosto. Promesa pública incumplida más de la mitad de las veces |
| — | **No pregunta tamaño de empresa**, que es el 40% del score en `bluepixel_engine/lead_scoring.py` (≥1000 emp = 40 pts, ≥100 = 20 pts). El scoring no puede correr completo |
| — | **No hay agenda** (Calendly/HubSpot Meetings): el lead caliente no puede autoservirse la junta |
| — | WhatsApp con número **+1 510 (EE.UU.)** para comprador mexicano |

Además, el playbook interno ya documenta que **el formulario nativo de Webflow guarda los leads en la base de datos de Webflow, aislados de Ventas** (`01_Onboarding_y_Guias/playbook_primeros_30_dias.md`, Quick Win 2).

### 1.3 (ALTO) El sitio que convierte está escondido detrás del sitio que no convierte
- El sitemap tiene **257 URLs**: 80 en `/post/` (blog EN), 84 en `/es/blog/` (blog ES), 12+12 `experience-categories` EN/ES, **131 URLs bajo `/es/`**.
- Las páginas ES son notablemente mejores: `/es/desarrollo-web` tiene H1 en español (*"Desarrollo web para plataformas rentables y escalables"*) y **sí habla de agentes IA, copilotos, automatización e IMPATH**.
- **Pero el switch de idioma del home renderiza como `#Esp` (ancla JS), no como enlace `href` a la versión ES.** El crawler propio del equipo recorrió 20 páginas desde el home y **no alcanzó ni una sola URL `/es/`** [inferencia: enlazado interno hacia el ES débil o dependiente de JS]. La versión que genera el 100% de los leads orgánicos y las citas de LLMs es la que menos autoridad interna recibe.

### 1.4 (ALTO) Tres copias públicas compitiendo por el mismo mensaje
- `cotiza.bluepixel.mx` **está vivo e indexable**: su `robots.txt` hace `Allow: /` explícito para Googlebot y Bingbot, título *"BluePixel | Software y Apps a la Medida"*, y `/desarrollo-web`, `/desarrollo-apps`, `/diseno-ux-ui`, `/consultoria-inteligencia-artificial` devuelven 200. Es un **subdominio separado: no acumula autoridad al dominio principal, canibaliza keywords y refuerza el posicionamiento viejo**.
- El sitio nuevo en React **ya está público** en `https://jahflavio.github.io/bluepixel/` (200, indexable, mismo `<title>` y misma meta description que el sitio objetivo), desde una **cuenta personal de GitHub**.

### 1.5 (MEDIO) SEO técnico: la base está mejor de lo que asumen los documentos
Esto importa porque **sube el riesgo de la migración**, no lo baja:
- `bluepixel.mx` → 301 a `www.bluepixel.mx`. Correcto.
- `robots.txt` limpio, con sitemap declarado y bloqueo de `/gracias` y `/thank-you`. Correcto.
- **Canonical y hreflang bien implementados en el `<head>`**: `/es/desarrollo-web` declara canonical propio + `alternate hreflang="es"` + `alternate hreflang="en"` + `x-default` apuntando al ES.

### 1.6 (BAJO esfuerzo / arreglo inmediato) Higiene de contenido
- **H1 concatenados sin espacio** por saltos de línea de Webflow: `"...and ScaleAI-Powered Digital Platforms"`, `"Custom Web Development& Design That Scales"`, `"Powerful Apps,Proven Results"`, `"Evaluate. Improve. Elevate.Smarter UX That Drives Real Results"`. Para un parser el token es *"ScaleAI-Powered"*.
- **Errata en meta description** de `/ux-dashboard-design`: *"UX- dirven dashboards"*.
- `/contact` aparece como **"FALTA H1"** en el crawl propio pero sí tiene H1 en vivo [inferencia: H1 inyectado por JS o no visible al parser del spider — verificar render server-side].

---

# 2. ARQUITECTURA DE INFORMACIÓN PROPUESTA vs. LO QUE EL CÓDIGO REALMENTE HACE

### 2.1 Lo que especifican los documentos
**Mapa de páginas (de `EJEMPLOS_LANDINGS_3_CLUSTERS` + `AUDITORIA §11` + `LANDING_BLUEPRINT_LIBRARY`):**

| Ruta | Contenido | Subanclas |
| :--- | :--- | :--- |
| `/` (Home) | Hero + Prompt Bar → Social proof → Trust bar de métricas duras → "La realidad de la IA empresarial" → 3 Clusters → Soberanía Técnica → IMPATH/Fricción → Casos → FAQ battlecard → 6 Capabilities → 3 Formas de Trabajar → Arquitectos → SLA post-contacto → CTA final | — |
| `/desarrollo-apps` | Cluster 01, CTO/VP Producto | `#mobile` `#web` `#ux-ui` `#mvp` `#legacy` |
| `/automatizacion` | Cluster 02, COO/CFO/TI | `#middleware` `#finanzas` `#apa` |
| `/agentizacion` | Cluster 03, CEO/CIO/Jurídico | `#triage` `#legal` `#aoc` `#privacidad` `#consultoria` |
| `/architectures` o `/blueprints` | Blueprint Library: sustituye la página de "Servicios" | filtros por dolor + Solution Drawer |

**Jerarquía de navegación propuesta:** `Capacidades ▾ | Modelo FutureProof | Tres Formas de Trabajar | Casos de Estudio | Blog` + CTA `[ Diagnóstico de Automatización → ]`.

**Postura oficial (§11):** Hub & Spoke en SPA. Nada de 6 landings sueltas ("menú de restaurante"); la profundidad vive en Drawers. Excepción: si SEM exige URLs separadas, deben cumplir los **5 Pilares de Conversión Técnica** (fricción → teardown → calculadora ROI → soberanía/arquitectos → CTA al Diagnóstico).

**Rutas de conversión especificadas:** Cluster 01 (Apps) → paquete BUILD+EVOLVE; Cluster 02 (Automatización) → Paquete 01 Diagnóstico; Cluster 03 (Agentización) → Paquete 02 Ingeniería.

### 2.2 Lo que el código hace (los gaps que invalidan el plan)
`C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/App.jsx`:

1. **No hay rutas. Hay hash.** El estado se sincroniza con `#/apps`, `#/automatizacion`, `#/agentizacion`. Sin `react-router`, sin SSR, sin prerender. Una sola URL para las 4 vistas, un solo `<title>`, una sola meta description.
2. **Los slugs existen pero no se usan.** `data/clustersData.js` define `slug: 'desarrollo-apps'` y cada subservicio tiene `id` (`ux-ui`, `mobile`, `web`, `mvp`, `legacy`) y hasta su `originalUrl` de cotiza. **Ninguno enruta.** `navigateTo()` escribe `window.location.hash = '/'+view` y el subservicio queda **solo en estado de React, nunca en la URL**.
   → **Consecuencia directa: `/desarrollo-apps#ux-ui`, destino prometido de las 301, no existe y no es alcanzable.**
3. **La navbar no implementa la IA propuesta.** Hay chips 📱 Apps / ⚙️ Automatización / 🤖 Agentización + anclas `#clusters`, `#three-ways`, `#case-studies` + CTA "Diagnóstico Operativo". **No hay Blog, no hay página de Casos, no hay Blueprint Library, no hay switch ES/EN, no hay Industrias.**
4. **Una sola ruta de conversión para todo el sitio:** cada CTA (hero, clusters, capabilities, 3 formas, casos, IMPATH, final) llama a `scrollToForm(pkg)` y abre **el mismo modal** `MultiStepContact`; lo único que cambia es la etiqueta `preselectedPackage`. No hay salida alterna (descarga, agenda, WhatsApp).
5. `vite.config.js` tiene **`base: '/bluepixel/'`** → publicado en la raíz de bluepixel.mx, el sitio se ve en blanco.

---

# 3. SISTEMA DE CONVERSIÓN: QUÉ ESTÁ ESPECIFICADO Y QUÉ FALTA

### 3.1 Especificado en documentos (§5.6, §5.7, §10.2) e implementado en código
- **Formulario progresivo en 3 pasos** (Tú / Tu Empresa / Tu Proceso) con barra de progreso — implementado en `src/components/forms/MultiStepContact.jsx`. Campos reales: `fullName`, `workEmail`, `phone` (opcional), `company`, `role`, `industry` (7 chips), `workflow` (textarea), `urgency` (ASAP / Este trimestre / 6 meses / Explorando), consentimiento LFPDPPP.
- **Tabla de CTAs por ubicación** (navbar, hero, tarjetas, botón final) — implementada en su mayoría.
- **Chips de confianza:** "NDA desde el primer día", "Arquitectos, no vendedores", "Sin costo ni compromiso".
- **Línea de tiempo SLA** `PostContactSLA.jsx`: Minuto 0 NDA bilateral → 24 h auditoría de un Lead Architect → 48 h sesión técnica de 30 min con blueprint.
- **Motor de calificación existe**: `bluepixel_engine/lead_scoring.py` (100 pts: 40 firmográficos + 30 rol + 30 intención).

### 3.2 Lo que falta — y por qué hoy el sistema no convierte nada
1. **🔴 EL FORMULARIO NO ENVÍA NADA.** `handleSubmitFinal` ejecuta `console.log('Submitting:', ...)` y pone `setSubmitted(true)`. **No hay endpoint, ni webhook, ni Notion, ni correo.** La pantalla muestra *"Diagnóstico Recibido… un arquitecto te contactará en menos de 24 horas hábiles"* y **el 100% de los leads se pierde en silencio.** Bloqueante absoluto: no debe entrar un solo peso de pauta a este sitio antes de arreglarlo.
2. **🔴 Las 10 landings tampoco envían:** `onSubmit={(e) => { e.preventDefault(); window.dataLayer.push({'event':'lead_form_submitted'}); alert('Lead capturado en Webhook/MCP'); }}`. Además **los inputs no tienen `name` ni `value`**: aunque hubiera endpoint, no hay datos que mandar.
3. **🔴 GTM con ID placeholder `GTM-XXXXXXX`** en las 10 landings → el push a `dataLayer` no llega a ningún contenedor. Cero medición.
4. **Sin `gclid` ni UTMs en el React.** El Webflow actual sí los captura (5 campos). Migrar hoy = perder la atribución justo en el trimestre en que se quiere activar Offline Conversions.
5. **Sin tamaño de empresa** en el formulario del sitio (las landings sí lo tienen: 10-50 / 50-200 / 200+). Sin ese campo no corre el 40% del score ni la micro-conversión "+50 empleados = $500 MXN" que pide el plan de Ads.
6. **Contradicción comercial grave y no resuelta:** la web vende `[ Solicitar Diagnóstico Operativo (Sin Costo) ]` y el chip "Sin costo ni compromiso", mientras la estrategia comercial vende la **Fase 01 en $5k–$8k USD (~$92k–$147k MXN)**. Si el lead llega convencido de que es gratis, el entry package se cae en la llamada.
7. **Cuatro SLAs distintos conviviendo:** Webflow promete **2 horas**; el React promete **<24 horas**; `PostContactSLA` promete **NDA minuto 0 / 24 h / 48 h**; el playbook interno fija **speed-to-lead <5 min con alerta a Discord/WhatsApp si score ≥90**. Realidad medida: **44.44% de tasa de contacto en agosto**.
8. **Sin ruta de autoservicio:** sin agenda embebida, sin click-to-chat de WhatsApp MX, sin descarga gated (el reporte SEO ya marca **0 descargas de ebook**).
9. **Sin anti-spam** (honeypot/reCAPTCHA) y sin página `/gracias` propia en el sitio nuevo → sin conversión por pageview como respaldo.
10. **🔴 El Hero Prompt Bar está roto como calificador.** En `src/components/hero/HeroPromptEngine.jsx`:
    ```js
    const solution = { ...PRESETS[presetIndex], prompt: inputVal || ... };
    ```
    Devuelve **el preset que está rotando en la animación, sin importar lo que el usuario escriba**. Un CTO que teclea "quiero migrar mi monolito" recibe la arquitectura de conciliación bancaria — **con su propia frase citada arriba en el Drawer**. Y el texto tecleado (la mejor señal de intención de todo el sitio) **no se guarda ni viaja al formulario**.

---

# 4. LAS 10 LANDINGS: PAPEL REAL, LISTAS Y RELLENO

**Papel de diseño:** son los "spokes" de la Blueprint Library y los destinos de SEM por dolor (§11.3, 5 Pilares de Conversión Técnica).

**Realidad medida** (`.../Componentes_Nueva_Web/landings/`, ~702 líneas cada una):
- **Son 10 copias del mismo template.** Diff contra `finance_matcher.html`: **36–38 líneas distintas por archivo ≈ 95% idénticas.** Cambian título, kicker, 3 bloques de arquitectura, 3 etiquetas de la calculadora y 3 constantes numéricas.
- **Renderizan JSX en el navegador** con `@babel/standalone` + Tailwind CDN + unpkg. Sin HTML servido, **sin meta description en ninguna**, sin canonical, sin H1 semántico. Para Google y para un rastreador de IA son páginas prácticamente vacías: **no sirven para SEO, sólo para pauta — y sólo si se mide, que hoy no.**

| Landing | Papel real en el funnel | Estado |
| :--- | :--- | :--- |
| `triage_rag` | Cluster 03 · demo PLG existente (Demo_Triage_RAG) | **Publicable** tras conectar formulario |
| `erp_bridge` | Cluster 02 · demo PLG existente (Demo_ERP_Bridge) | **Publicable** |
| `finance_matcher` | Cluster 02 · el dolor con mejor ROI narrativo (cierre contable) | **Publicable** tras corregir bug (abajo) |
| `legal_onboarding` | Cluster 03 · demo PLG existente (Demo_Legal_Onboarding_KYC) | **Publicable** |
| `apa` / `aoc` / `data_privacy` / `rfp_analyst` | Mapeadas a cluster, **sin demo propia** | Ficha dentro de la Library, **sin campaña propia** |
| `smart_ads` | *"Nunca pagues un clic por un producto agotado"* → e-commerce/growth B2C. **No aparece en la matriz de equivalencias, no tiene cluster, no tiene campaña** | **RELLENO — no publicar** |
| `hr_recruiter` | RR.HH. **No aparece en la matriz, sin cluster, sin campaña, sin demo** | **RELLENO — no publicar** |

**Dos defectos que hay que corregir antes de enseñarlas a un CFO:**
- **Bug de credibilidad en la landing más sensible:** en `finance_matcher.html` el datagrid del hero muestra `",200 MXN"`, `",450 MXN"`, `",800 MXN"` — se perdió el `$1` (artefacto de sustitución con `$1` en la plantilla). La landing de conciliación financiera enseña cifras rotas.
- **Las calculadoras de ROI usan constantes sin fuente documentada:** `rfp_analyst` $2,000 por licitación, `erp_bridge` $120 por consulta, `aoc` $85, `legal_onboarding` $50, `smart_ads` $30, `finance_matcher` $2.5 por factura. Cualquier director financiero pedirá el supuesto y hoy no existe en ningún archivo del repositorio.

**Veredicto: ninguna de las 10 está lista.** Ninguna envía leads, ninguna tiene GTM real, ninguna tiene metadatos.

---

# 5. LA BLUEPRINT LIBRARY COMO MECANISMO DE PRUEBA

### 5.1 Cómo se supone que convierte
Catálogo tipo *App Store*: filtros **por dolor de negocio, no por tecnología** (`Finanzas & ERP`, `Operaciones & Logística`, `CX & Soporte`, `DevSecOps`) → tarjetas con specs duras (`SLA 99.9%` · `Deploy en 3 semanas` · `ROI: 120hrs/mes`) → **Solution Drawer** lateral (no saca al usuario de la página) con dolor corporativo → blueprint de 4 pasos → caso análogo → costo predictivo → CTA `Diagnóstico de Viabilidad de 4 Semanas` → cierre con *"Habla directo con los Arquitectos"* (fotos de Leo y Pablo).

### 5.2 Qué es realista y qué no
**Sí es realista y es el activo más valioso del rediseño:** convierte la conversación de "horas de desarrollo" a "módulo con alcance y precio fijo". Es **exactamente el antídoto al shock de precio que mató las 21 propuestas**, y es el material natural para los $8,000 MXN de LinkedIn Document Ads que llevan meses parados.

**No es realista hoy, por cuatro razones verificables:**
1. **Sólo el Módulo A (Finance Matcher) tiene copy de Drawer escrito.** B, C y D están enunciados en una línea.
2. **La página real es un placeholder.** `landings/index.html` es una rejilla estática de 10 tarjetas: **sin filtros, sin specs, sin drawer**; y su enlace *"← Volver al Home Institucional"* apunta a `../index.html`, **archivo que no existe** (enlace roto).
3. **El documento declara un entregable que no existe.** La auditoría afirma (§Resumen de Compromisos, punto 2) que `Componentes_Nueva_Web/index.html` "ya contiene Teardown, Calculadora de ROI, Soberanía, PostContactSLA y Tech Stack Bar". **Ese archivo no está en el repositorio.** Lo que existe es el app React, que sí tiene `WorkflowTeardown`, `TechnicalSovereignty`, `PostContactSLA` y `AgenticTechStack`, pero **no tiene calculadora de ROI** (el activo #3 de la matriz de brechas §9.1 nunca se construyó).
4. **No pide datos.** No hay contenido gated, no hay PDF, no hay agenda. Un catálogo que no captura nada no convierte: es folleto. El reporte SEO ya lo confirma con **0 descargas de ebook**.

### 5.3 Qué sí puede convertir en 90 días
Tarjeta → Drawer → **dos salidas obligatorias**: (a) *"Descargar el blueprint en PDF"* con **un solo campo (correo corporativo)**, que alimenta nurturing de 90 días y retargeting; (b) *"Agendar escaneo arquitectónico de 30 min"* para score ≥70.
**Expectativa honesta [inferencia sobre el tráfico actual]:** con 1,528 usuarios en 13 días y una tasa realista de 2–4% en catálogo descargable, son **~30–60 descargas/mes y ~6–10 sesiones agendadas/mes**. La Blueprint Library **convierte tráfico existente y arma a Pablo y José con material de venta; no genera demanda por sí sola.**

---

# 6. RIESGOS DE LA MIGRACIÓN WEBFLOW → REACT

### 6.1 Lo único que está especificado
`ESTRATEGIA_JUNTA_LEO_5_45PM.md` (línea 181) y `GUIA_JUNTA_4PM` (línea 215): *"Redirecciones 301 permanentes… se transfiere 100% del PageRank"*, responsable **Daniel Arias (SEO)**, plazo **3 días**; más la **matriz de 13 equivalencias** de `cotiza.bluepixel.mx` del doc de clusters. Eso es todo.

### 6.2 Los 11 huecos, en orden de daño
1. **El mapa cubre 13 URLs. El sitio tiene 257.** Sitemap real: 80 `/post/`, 84 `/es/blog/`, 24 `experience-categories` EN/ES, 131 bajo `/es/`. **164 de 257 URLs (64%) son blog** — el activo que produce los 21 leads orgánicos y todas las citas en LLMs. **No existe mapa 1:1 de esas 257.**
2. **🔴 Los destinos de las 301 no existen.** El app enruta por hash (`#/apps`), no por `/desarrollo-apps`, y el subservicio ni siquiera viaja en la URL. Una 301 hacia `/desarrollo-apps#ux-ui` hoy cae en 404 o en el home.
3. **🔴 El argumento del PageRank es falso tal como está escrito.** Google descarta el fragmento: consolidar 5 URLs en anclas de una misma página **no "transfiere PageRank a cada ancla", colapsa 5 activos en 1**. Es una decisión legítima (una página más fuerte a cambio de cobertura long-tail), pero hay que tomarla **conscientemente**, no venderla como que "no se pierde nada".
4. **🔴 Las URLs con impresiones en IA tienen slugs largos y exactos.** Los reales son `/es/blog/diseno-ux-ui-que-es-guia`, `/post/user-interface-types-classification-characteristics-uses`, `/es/blog/10-ejemplos-de-interfaces-de-usuario-que-demuestran-como-un-buen-diseno-cambia-todo`, `/es/blog/desarrollo-apps-moviles-cuanto-cuestan-como-hacerlas`, `/es/blog/etapas-desarrollo-web`, `/post/front-end-back-end-meaning-uses`, `/es/blog/mejores-agencias-diseno-ux-ui-mexico`. **Cualquier cambio de slug apaga las citas.** → **Recomendación: NO migrar el blog en esta fase.**
5. **🔴 El React no puede renderizar para buscadores.** Vite SPA sin SSR ni prerender: el HTML servido es `<div id="root"></div>`. Google renderiza JS con retraso y presupuesto limitado; **los rastreadores de LLM mayormente no ejecutan JS**. Migrar contenido de posicionamiento a esta SPA es apagar la fuente de las citas. Mitigación obligatoria: prerender estático o Next.js.
6. **Se pierde hreflang y canonical.** Hoy están correctamente puestos (canonical propio + alternate es/en + x-default). **El React no tiene ninguno y no puede tenerlos sin prerender.** Migrar sin resolverlo rompe la separación ES/EN de 131 URLs.
7. **`base: '/bluepixel/'`** en `vite.config.js`: publicado en la raíz del dominio, todos los assets apuntan a `/bluepixel/assets/*` y **el sitio se ve en blanco**.
8. **🔴 Riesgo de credencial:** el remoto git de `.../bluepixel-app/dist/` lleva embebido un **Personal Access Token de GitHub (`ghp_…`) en texto plano**, apuntando a `github.com/jahflavio/bluepixel`. **Rotar hoy** y sacar `dist/.git` del árbol de trabajo.
9. **El social proof está hotlinkeado al CDN de Webflow.** `data/clientLogos.js` carga los 12 logos (Bimbo, BBVA, PepsiCo, Cemex, DiDi, Avianca, Subaru, RadioShack, LifeMiles, MoradaUno, Pakke, Suerox) desde `cdn.prod.website-files.com`. **Si se apaga Webflow, desaparece el social proof del sitio nuevo.**
10. **Se pierde el tracking al migrar:** Webflow captura 5 UTMs; el React no captura ninguno ni `gclid`.
11. **Nada de infraestructura SEO en el proyecto nuevo:** sin `sitemap.xml`, sin `robots.txt`, sin 404 propia, sin archivo de redirects, sin plan de validación post-migración. Y **triple duplicado durante la transición**: bluepixel.mx + cotiza.bluepixel.mx (indexable) + jahflavio.github.io/bluepixel (200, indexable).

---

# 7. LOS 15 CAMBIOS CON MEJOR IMPACTO/ESFUERZO — 15 SEP A 14 DIC 2026

**Fase A (15–26 sep): detener la fuga.** **Fase B (29 sep–17 oct): convertir.** **Fase C (20 oct–14 dic): migrar con red.**

| # | Cambio | Responsable | Fecha | Entregable verificable |
| :-: | :--- | :--- | :-: | :--- |
| 1 | **Conectar el formulario a un endpoint real** (React + landings) → webhook → MCP de Leo → Notion + alerta Discord/WhatsApp. Reemplazar `console.log` y el `alert('Lead capturado…')` | Leo / Tecnología | **18-sep** | 3 leads de prueba en Notion con payload completo y alerta en <60 s |
| 2 | **Rotar el PAT de GitHub expuesto** en `dist/.git` y sacar `dist` del árbol o mover el deploy a cuenta de la organización | Fabián + Leo | **16-sep** | Token revocado; `git remote -v` sin credenciales |
| 3 | **Cambiar el H1 del home nuevo** a la categoría: *"Construimos agentes de IA que operan procesos reales en producción"*. Hoy dice *"Menos fricción operativa. Más control. Software que trabaja por ti"* — el mismo defecto que la auditoría mandó eliminar, sólo que reescrito | Leo | **19-sep** | H1 en producción + captura |
| 4 | **Arreglar el Hero Prompt Bar**: match por palabras clave contra los 4 presets + preset "otro" que capture texto libre, y pasar ese texto al campo `workflow` del formulario | Tecnología | **26-sep** | 5 frases distintas → 5 arquitecturas coherentes; texto prellenado en paso 3 |
| 5 | **Mover la campaña "IA Operacional Enterprise"** (199 clics a $22.8, conversión 0.5%) a la landing de Agentización — **después del punto 1, nunca antes** | Diana Cardoso + Tecnología | **22-sep** | URL final en Google Ads + primera conversión atribuida |
| 6 | **Inyectar `gclid` + `utm_*` + `landing_page` + `referrer`** como campos ocultos en `MultiStepContact` y en las 4 landings a publicar | Tecnología | **25-sep** | Lead de prueba con `gclid` visible en Notion |
| 7 | **Sustituir `GTM-XXXXXXX`** por el contenedor real y publicar 3 eventos: `form_start`, `form_submit`, `blueprint_download` | Diana Cardoso | **24-sep** | GTM Preview con los 3 eventos + conversión importada en Google Ads |
| 8 | **Agregar "Tamaño de empresa"** (10-50 / 50-200 / 200-1000 / 1000+), **quitar presupuesto del primer contacto** y conectar a `lead_scoring.py` | Fabián + Tecnología | **30-sep** | Score escrito en Notion; alerta sólo si ≥90 |
| 9 | **Unificar la promesa del Diagnóstico**: *"Sesión de diagnóstico preliminar sin costo (30 min + hipótesis de arquitectura)"* vs *"Diagnóstico FutureProof 2-4 semanas, inversión fija"*. Corregir el chip "Sin costo ni compromiso" | Fabián + Pablo + Leo | **26-sep** | Copy idéntico en web, propuesta y guion de llamada |
| 10 | **Publicar un solo SLA cumplible** (recomendado: *respuesta de un arquitecto en menos de 4 horas hábiles*) y retirar el de 2 horas del Webflow | Fabián | **26-sep** | Tablero semanal de % contactados dentro de SLA (línea base: 44.44% en agosto) |
| 11 | **Agenda embebida** (Calendly/HubSpot Meetings) en la pantalla de éxito y en el Drawer, sólo para score ≥70 | Fabián + Pablo | **3-oct** | Primera junta autoagendada |
| 12 | **Publicar 4 blueprints prerenderizados** (`triage_rag`, `erp_bridge`, `finance_matcher`, `legal_onboarding`) en `bluepixel.mx/blueprints/<slug>` con title, description, H1 real, formulario conectado y el **bug de `$1` corregido**. Archivar `smart_ads` y `hr_recruiter` | Leo + Tecnología | **10-oct** | 4 URLs 200 con HTML servido e indexable |
| 13 | **Convertir la Blueprint Library en activo de captura**: Drawer + PDF a cambio de correo corporativo + CTA de agenda; encender los **$8,000 MXN** de LinkedIn Document Ads contra ese PDF | Fabián + Rocketing | **17-oct** | ≥30 descargas en 30 días + costo por descarga |
| 14 | **Higiene del sitio vivo mientras llega la migración** (esfuerzo bajo, efecto inmediato): despegar los H1 concatenados (home, `/web-development`, `/mobile-app-development`, `/ux-audit-optimization-services`, `/ux-ui-design`), corregir *"dirven"*, poner **`href` real al switch ES** y reescribir la meta description del home a la categoría nueva | Daniel Arias (SEO) | **8-oct** | Crawl de control con `seo_spider.py`: 20 títulos/H1 corregidos |
| 15 | **Plan de migración con blog congelado**: mapa 1:1 de las 257 URLs, **blog `/post/` y `/es/blog/` se queda en Webflow**, prerender del sitio nuevo, `base: '/'`, sitemap + robots + canonical + hreflang, **noindex o 301 de `cotiza.bluepixel.mx`** y baja del `github.io` | Daniel Arias + Tecnología + Fabián | Mapa **24-oct** · migración **10-nov** · validación **hasta 12-dic** | 0 URLs en 404 en Search Console a 14 días; impresiones orgánicas ≥90% de la línea base de 28 días; las 8 URLs citadas por LLMs intactas |

### Las 3 cosas que hay que decidir esta semana, antes de tocar código
1. **El formulario no envía nada** (#1). Mientras eso siga así, cada peso de pauta que caiga en el sitio nuevo se tira a la basura — literalmente peor que hoy, porque hoy al menos Webflow guarda el lead en su base.
2. **¿El Diagnóstico es gratis o cuesta $5k–$8k USD?** (#9). No se puede lanzar el sitio con las dos versiones vivas.
3. **¿El blog se migra o se congela?** (#15). Congelarlo protege las 8 URLs que sostienen las citas de LLMs y los 21 leads orgánicos en español, a costa de operar dos CMS un trimestre. **Recomendación: congelar.**