# 🔍 REPORTE SEO Y AJUSTES DE COPY — SEPTIEMBRE 2026

> **Fuentes de datos:**
> 1. `BluePixel Keywords - Sep26.xlsx` — plan de Google Ads (981 filas · 3 campañas · volúmenes Semrush)
> 2. `Searches(Search_2026.05.25-2026.09.23).csv` — términos de búsqueda reales de Ads (top 100)
> 3. `bluepixel.mx-Performance-on-Search-2026-09-24.xlsx` — **Google Search Console, últimos 3 meses**
>    (1,013 consultas · 290 páginas · 220 países)
>
> **Alcance:** sitio nuevo en `03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app`.
> **Estado:** implementado en local, **sin publicar**.

---

## 1. Resumen ejecutivo

El sitio nuevo tenía **cero infraestructura de SEO**: un solo `<title>` y una sola
`<meta description>` para las 20+ vistas, sin canonical, sin Open Graph, sin
`robots.txt`, sin `sitemap.xml` y sin datos estructurados. Eso ya está resuelto.

Quedan dos bloqueadores, y el segundo sólo apareció al cruzar Search Console:

1. **El sitio nuevo enruta por fragmento** (`#/servicio/security`). Google no
   indexa fragmentos, así que hoy existe una sola URL indexable. Mientras no se
   migre a rutas reales, ninguna de las 15 páginas puede competir.
2. **bluepixel.mx tiene un negocio orgánico que el sitio nuevo no contempla.**
   254,321 impresiones trimestrales, el 80% de ellas en un blog que el sitio
   nuevo no tiene, bajo rutas (`/es/blog/*`, `/post/*`) que tampoco existen.
   Migrar sin mapa de redirecciones destruiría ese activo.

El hallazgo de contenido tiene dos caras. En pauta, **toda la demanda que convierte
está en vocabulario commodity que el sitio no usaba**. En orgánico, **todo lo que
rankea es vocabulario educativo que la pauta bloquea como negativo** — y esas
250,000 impresiones no tienen hoy ninguna ruta hacia una página de servicio.

---

## 2. Qué dicen los datos

### 2.1 Volumen de búsqueda (Semrush)

| Keyword | Búsquedas/mes | Conversiones 2026 | Estado en el plan |
| :--- | ---: | ---: | :--- |
| rpa | 2,900 | 0 | Validada |
| **desarrollo de software a la medida** | **1,900** | 0 | Validada |
| automatización de procesos | 720 | 0 | Validada |
| agentes ia | 720 | 0 | Validada |
| empresa de desarrollo de software | 590 | 0 | Validada |
| desarrollo de aplicaciones móviles | 590 | 0 | Validada |
| desarrollo de apps | 390 | 0 | Validada |
| desarrollo de aplicaciones | 390 | 2 | Probada |
| diseño de experiencia de usuario | 260 | 2 | Rescatada |
| desarrollo de software empresarial | 210 | 0 | Validada |
| inteligencia artificial empresas | 170 | 0 | Validada |
| integración de sistemas | 170 | 0 | Validada |
| desarrollo de sitio web | 140 | 6 | Rescatada |

### 2.2 Lo que ya convierte en pauta

| Keyword | Conv. | CPA (MXN) | Conjunto |
| :--- | ---: | ---: | :--- |
| bluepixel (marca) | 23 | $309 | Marca Core |
| servicio de desarrollo de apps | 22 | $478 – $3,067 | Apps Móviles |
| proveedor de desarrollo web | 10 | $2,137 | Web y Sitios |
| servicio de desarrollo web | 8 | $2,743 | Web y Sitios |
| desarrollo de sitio web | 6 | $407 | Web y Sitios |
| **ia en producto digital empresa** | **5** | **$81** | IA integrada |
| empresas que desarrollan apps | 5 | $784 | Apps Móviles |

`ia en producto digital empresa` es, por mucho, la keyword más eficiente del
portafolio: CPA de $81 contra un promedio muy superior. Merece página propia.

### 2.3 Ruido de marca

El plan incluye negativas por confusión de marca con hardware y fotografía:
`blue pixel camera`, `blue pixel led`, `blue pixel phone`, `blue pixel repair`,
`bluepixel tv`. La marca necesita reforzar "software" cerca del nombre en
títulos y datos estructurados.

### 2.4 La brecha central

| Lo que el sitio decía | Lo que la gente busca | Búsquedas/mes |
| :--- | :--- | ---: |
| "Plataformas Digitales" | desarrollo de aplicaciones móviles / sitios web | 730 |
| "AI-Driven Software Engineering" | desarrollo de software a la medida | 1,900 |
| "IA & Automatización Agéntica" | agentes ia / rpa / automatización de procesos | 4,340 |
| "UX/UI & Product Strategy" | diseño de experiencia de usuario | 260 |

**Esto no obliga a abandonar el posicionamiento anti-commodity.** La estrategia
aplicada es capturar la búsqueda commodity en el `<title>`, el eyebrow y el
subtítulo, y hacer el reencuadre FutureProof en el cuerpo de la página, que es
donde las páginas ya son fuertes.

---

## 3. Infraestructura implementada

| Entregable | Archivo | Qué hace |
| :--- | :--- | :--- |
| Mapa SEO por ruta | `src/data/seoData.js` | `title`, `description` y `canonical` propios para 15 rutas, más un mapa de alias para que los slugs duplicados apunten al canónico correcto |
| Aplicación en runtime | `src/App.jsx` | `useEffect` que en cada cambio de ruta escribe title, description, canonical, Open Graph y Twitter Card |
| Metadatos por defecto | `index.html` | OG completo, canonical, `og:locale` es_MX y JSON-LD de `ProfessionalService` con `knowsAbout` |
| Rastreo | `public/robots.txt` | Permite todo excepto `/lp/*` (landings de pauta) y declara el sitemap |
| Sitemap | `public/sitemap.xml` | 15 URLs canónicas con prioridad y frecuencia |

El dominio vive en una sola constante, `SITE_ORIGIN` en `seoData.js`
(`https://www.bluepixel.mx`). Si el sitio se publica en otro host, se cambia
ahí y nada más.

### 3.1 Títulos y descripciones asignados

| Ruta | Title | Keyword objetivo |
| :--- | :--- | :--- |
| `/` | Desarrollo de Software a la Medida y Agentes de IA | desarrollo de software a la medida |
| `/consultoria-tecnologica` | Consultoría Tecnológica y Diagnóstico de TI | integración de sistemas |
| `/automatizacion-agentica` | Automatización de Procesos con IA y RPA Empresarial | rpa · automatización de procesos |
| `/producto-digital` | Desarrollo de Aplicaciones Móviles y Sitios Web a la Medida | desarrollo de aplicaciones móviles |
| `/evolucion-digital` | Evolución y Mantenimiento de Plataformas Digitales | — (defensiva) |
| `/servicio/ux-ui` | Diseño de Experiencia de Usuario UX/UI para Empresas | diseño de experiencia de usuario |
| `/servicio/ai-engineering` | Desarrollo de Software a la Medida para Empresas | desarrollo de software empresarial |
| `/servicio/ai-agents` | Agentes de IA y Chatbots para Empresas | agentes ia · chatbot para empresas |
| `/servicio/data-analytics` | Analítica de Datos y Business Intelligence Empresarial | — (defensiva) |
| `/servicio/security` | Ciberseguridad y Hardening de Software Empresarial | — (defensiva) |
| `/servicio/business-ai` | Consultoría en Inteligencia Artificial para Empresas | inteligencia artificial empresas |

---

## 4. Ajustes de copy aplicados

Los cuatro respetan una regla: **no se tocó ningún H1 de marca.** El vocabulario
de búsqueda entra por eyebrow y subtítulo, que hoy no cargaban ninguna keyword.

**Home** — `src/components/hero/HeroWithPrompt.jsx`
- Eyebrow: *"Ingeniería de Agentes IA & Plataformas FutureProof"* →
  **"Desarrollo de Software a la Medida & Agentes IA · México"**
- Subtítulo reescrito para nombrar *empresa de desarrollo de software a la
  medida*, *plataformas web* y *aplicaciones móviles*.
- El H1 (*"Diseñamos la plataforma, automatizamos la operación, agentizamos el
  negocio"*) se conservó intacto.

**Pilar 03 · Plataformas Digitales** — `src/data/pillarsData.js`
- El subtítulo ahora abre con *"Desarrollo de aplicaciones móviles y sitios web
  a la medida"*. Son las dos keywords que más convierten en pauta (28
  conversiones combinadas) y no aparecían en la página.

**Capacidad · Software Engineering** — `src/data/servicesData.js`
- Subtítulo ahora abre con *"Desarrollo de software a la medida para empresas"*.
  Es la keyword de mayor volumen del plan y no aparecía literal en todo el sitio.

**Capacidad · IA & Automatización** — `src/data/servicesData.js`
- Subtítulo ahora abre con *"Agentes de IA y chatbots para empresas que van más
  allá del RPA tradicional"*. Captura `rpa` (2,900/mes, cero inversión actual) y
  `chatbot para empresas`, y lo hace reforzando el argumento propio en lugar de
  diluirlo: lo que se entrega es automatización determinística, no un bot que
  responde textos planos.

---

## 5. Google Search Console: qué rankea hoy bluepixel.mx

Últimos 3 meses. **254,321 impresiones**, ~1,600 clics totales, **CTR global de
0.29%** y posición promedio 8.7 en México. Hay autoridad de dominio; lo que falla
es qué páginas la capturan y qué hacen con ella.

### 5.1 El blog ES el negocio orgánico

Ocho de las diez páginas con más tráfico son entradas de blog. La home aparece
hasta el tercer lugar.

| Página | Impresiones | Clics | Posición |
| :--- | ---: | ---: | ---: |
| `/es/blog/diseno-ux-ui-que-es-guia` | **62,533** | 76 | 11.84 |
| `/es/blog/descubre-diferentes-tipos-paginas-web-guia-completa` | 31,610 | 169 | 10.06 |
| `/post/user-interface-types-classification-characteristics-uses` (EN) | 28,742 | 130 | 7.65 |
| `/es/blog/tipos-interfaz-usuario-clasificacion-caracteristicas-usos` | 27,634 | 275 | 9.91 |
| `/es/desarrollo-de-aplicaciones-moviles` *(página de servicio)* | 20,411 | 29 | **31.47** |
| `/post/10-user-interfaces-that-prove-greatui-design...` (EN) | 13,008 | 180 | 23.17 |
| `/es/blog/desarrollo-apps-moviles-cuanto-cuestan-como-hacerlas` | 13,525 | 34 | 18.72 |
| `/es/blog/diseno-ux-ui-que-es-guia` y el resto del blog | — | — | — |
| `/es/inicio` | 2,846 | 225 | 6.60 |
| `/es/blog/mejores-agencias-diseno-ux-ii-mexico` | 3,875 | 47 | 10.14 |

**El sitio nuevo no tiene blog, ni rutas `/es/`, ni `/post/`, ni página de empleo,
ni "sobre nosotros".** Si reemplaza a bluepixel.mx sin un mapa de redirecciones y
sin migrar el blog, se pierde prácticamente todo el tráfico orgánico actual.
Este es el riesgo más grande de todo el proyecto y no estaba identificado.

### 5.2 La paradoja: lo orgánico vive de lo que la pauta bloquea

Lo que rankea es vocabulario educativo: *tipos de páginas web*, *tipos de
interfaces*, *tipos de interfaz de usuario*, *ejemplos de interfaces de usuario*,
*elementos de una página web*. El plan de Ads lista exactamente esos patrones
—`tipos de`, `que es`, `ejemplos`, `caracteristicas`, `definicion`— como
**keywords negativas**, con la justificación "búsquedas de definición, sin
intención de contratar".

Ambos canales tienen razón dentro de su lógica: Ads no debe pagar por eso, y el
blog hace bien en capturarlo. Lo que falta es el puente. Hoy esas ~250,000
impresiones de tope de embudo **no tienen ninguna ruta hacia una página de
servicio**. Ese es el activo desaprovechado más grande del sitio actual.

### 5.3 Las páginas de servicio están enterradas

| Consulta | Impresiones | Posición | Clics |
| :--- | ---: | ---: | ---: |
| mobile app development | 43,445 | 2.3 | **0** |
| desarrollo de apps | 1,950 | 20.0 | 3 |
| agencia de desarrollo web | 792 | 22.6 | 1 |
| desarrolladores de apps | 719 | 39.7 | 0 |
| desarrollo de aplicaciones moviles | 717 | 25.7 | 1 |
| empresa de desarrollo de aplicaciones móviles | 510 | 26.3 | 0 |
| agencia ux | 477 | 11.0 | 1 |
| cuanto cuesta crear una app | 376 | 66.8 | 0 |

Hay decenas de consultas comerciales con 300–800 impresiones en posiciones 17 a
60 y cero clics. **El dominio tiene autoridad suficiente para rankear en posición
9–11 con contenido de blog, pero sus páginas comerciales están en posición 20–40.**
Eso es una debilidad de página, no de dominio, y es mucho más fácil de arreglar
que construir autoridad desde cero.

`mobile app development` con 43,445 impresiones en posición 2.3 y cero clics es
anómalo: casi seguro son impresiones de una función de SERP (imagen o carrusel),
no un resultado azul. Vale confirmarlo en GSC filtrando por apariencia en
búsqueda antes de sacar conclusiones.

### 5.4 El inglés no es hipotético

Las dos páginas `/post/*` en inglés suman **41,750 impresiones**. Por país:
Estados Unidos 35,991, España 32,839, India 19,547, Colombia 9,839. Esto confirma
lo detectado en los datos de pauta, donde `custom app development` convierte a
$128 de CPA. **Quitar el inglés del sitio nuevo es una decisión con costo
medible**, no un detalle de alcance.

---

## 6. Qué buscar en Google Keyword Planner

Con GSC ya sabemos qué rankea y con Ads qué convierte. Lo que falta es volumen y
dificultad de lo que **todavía no** tocamos. Keyword Planner viene incluido con
la cuenta de Ads que ya está activa; no hace falta comprar nada.

### 6.1 Configuración de cada extracción

- **Ubicación:** México. Hacer una **segunda corrida separada** con Estados
  Unidos + España, dado el tráfico en inglés de §5.4.
- **Idioma:** español; inglés en la segunda corrida.
- **Rango:** últimos 12 meses, con la comparación contra el periodo anterior
  activada (importa para ver la tendencia de los términos de IA).
- **Columnas obligatorias:** añadir **"Puja para la parte superior de la página
  (intervalo alto)"**. Es el filtro de intención que nos faltaba: una puja alta
  significa que otros anunciantes ganan dinero ahí. Fue justo lo que no tuvimos
  para detectar que `creador de apps` y `hosting` quemaran $4,247 sin convertir.
- **Excluir:** términos de marca propia y las negativas ya cargadas en la cuenta.

### 6.2 Las cuatro listas semilla

**Lista A · Comercial donde ya hay relevancia pero no posición**
Son consultas donde bluepixel.mx ya aparece entre la 17 y la 60. Google ya
considera al dominio relevante; falta una página que compita.
> desarrollo de aplicaciones móviles · empresa de desarrollo de aplicaciones ·
> agencia de desarrollo web · agencia ux ui · desarrollo de software a la medida ·
> desarrollo de aplicaciones empresariales · desarrolladores de apps en méxico ·
> empresa creación app · desarrollo de apps a medida

**Lista B · Extender el clúster educativo que ya funciona**
Es el único patrón donde el dominio llega a posición 9–11. Expandirlo es la
apuesta de menor riesgo del plan.
> tipos de [páginas web · interfaz · sitios web · apps · software · arquitectura] ·
> qué es [ux · ui · rag · un agente de ia · mcp · rpa · cloud native] ·
> cuánto cuesta [una app · una página web · un software a la medida] ·
> ejemplos de [interfaces · dashboards · design systems] ·
> diferencias entre [app nativa y web app · rpa e ia]

**Lista C · Competidores y alternativas**
Salen de los términos de búsqueda reales de Ads: ~4,000 impresiones de gente
buscando consultoras por nombre. En pauta no convierte; en SEO, el contenido de
comparación es de lo más rentable en B2B.
> softtek · wizeline · neoris · globant · ntt data méxico · accenture méxico ·
> bairesdev · toptal — cruzados con: alternativas · vs · opiniones · reseñas ·
> precios · mejores empresas de desarrollo de software en méxico

**Lista D · La categoría nueva, para medir si ya existe demanda en México**
> agentes de ia · agentes autónomos empresa · rag empresarial · rag privado ·
> automatización con ia · copilotos internos · protocolo mcp · ia para erp ·
> chatbot corporativo · inteligencia artificial para empresas

Aquí lo que importa no es el volumen absoluto sino **la tendencia trimestral**.
Si Lista D crece mes con mes, conviene posicionarse antes de que la competencia
llegue, aunque hoy el volumen sea bajo.

### 6.3 Cómo leer los resultados

| Volumen | Puja superior | Lectura | Acción |
| :--- | :--- | :--- | :--- |
| Alto | Alta | Comercial competido | Página de servicio + pauta |
| Alto | **Baja** | Informacional o DIY | Blog, nunca página de servicio |
| Bajo | Alta | Nicho de alto valor | Página dedicada, gana barato |
| Bajo | Baja | Ruido | Descartar |

El segundo renglón es el que explica el desperdicio histórico: `rpa` (2,900/mes),
`creador de apps` y `hosting` casi seguro caen ahí. **Mi recomendación anterior de
atacar `rpa` como página de servicio queda corregida:** va como contenido
comparativo de blog ("RPA vs. agentes de IA"), midiendo tráfico, no leads.

---

## 7. Pendientes, por prioridad

### P0 — Bloqueadores
1. **Mapa de redirecciones 301 del sitio actual al nuevo.** Sin esto la migración
   destruye ~250,000 impresiones trimestrales. Es el punto más urgente del
   reporte. Requiere el inventario completo de URLs de bluepixel.mx.
2. **Decidir qué pasa con el blog.** El sitio nuevo no lo contempla y es el 80%
   del tráfico orgánico. O se migra, o se conserva la instancia actual sirviendo
   `/es/blog/*`.
3. **Migrar de enrutado por hash a rutas reales.** Sin esto, las secciones 3 y 4
   no pueden producir tráfico: Google ve una sola URL. En GitHub Pages se resuelve
   con la técnica de `404.html`; en hosting propio con un rewrite a `index.html`.
   Idealmente prerender o SSG, para que el crawler reciba HTML y no un
   `<div id="root">` vacío.

### P1 — Recuperar lo que ya casi funciona
4. **Rescatar las páginas que están en posición 10–12.** `diseno-ux-ui-que-es-guia`
   (62,533 impresiones, posición 11.84) y `descubre-diferentes-tipos-paginas-web`
   (31,610, posición 10.06) están al borde de la página 1. Mover esas dos de la
   posición 11 a la 8 vale más que cualquier página nueva.
5. **Construir el puente blog → servicio.** Las ~250,000 impresiones educativas
   no tienen ruta hacia una página comercial. Un CTA contextual por artículo es
   trabajo de días, no de meses.
6. **Reescribir títulos y descripciones de las páginas del sitio actual.** CTR
   global de 0.29% con posición promedio 8.7 es anormalmente bajo: el snippet no
   está ganando el clic. Es el mismo trabajo de la sección 3, aplicado al sitio
   que hoy sí está indexado.

### P2 — Contenido nuevo
7. **Página para `ia en producto digital empresa`** (CPA de $81, la más eficiente
   del portafolio, sin destino propio hoy).
8. **Contenido de comparación contra competidores** (Lista C de §6.2).
9. **Casos de estudio faltantes** para Agentes y Seguridad (ver `AGENTS.md`).

### P3 — Medición
10. Enviar el `sitemap.xml` en Search Console (después de P0.3).
11. Los formularios no envían a ningún backend: hoy no hay forma de atribuir una
    conversión orgánica.

---

## 8. Nota de veracidad

Durante esta revisión se auditaron también las cifras publicadas en los 4
pilares y las 6 capacidades. Se retiraron por falta de respaldo: `$1.8M MXN
ahorrados`, `-75% de horas manuales`, `0% de alucinaciones`, `+34% de conversión`,
`50+ plataformas` y `-40 hrs/mes`. Se corrigió el ranking DesignRush: BluePixel
es **#1 en la lista de Ciudad de México y #2 en la lista nacional**, ambas
ordenadas por colocación patrocinada.

Quedan tres afirmaciones sin fuente en los bloques de costo de inacción,
pendientes de decisión: el `70%` de proyectos que fallan por adopción (existe un
70% de McKinsey, pero sobre transformaciones empresariales, no sobre adopción
frente a código), el `68%` de iniciativas en LATAM y el `92%` de adopción en el
primer mes.
