# 🎯 GUÍA PASO A PASO — INVESTIGACIÓN EN GOOGLE KEYWORD PLANNER

> **Para qué:** completar lo que no sabemos. Ya sabemos qué convierte (Google Ads)
> y qué rankea (Search Console). Falta **volumen y dificultad de lo que todavía no
> tocamos**, y un filtro confiable de intención comercial.
>
> **Costo:** cero. Keyword Planner viene incluido con la cuenta de Google Ads que
> ya está activa.
>
> **Tiempo estimado:** 60–90 minutos para las 8 extracciones.
>
> **Insumo previo:** `REPORTE_SEO_Y_AJUSTES_DE_COPY_2026-09.md` (mismo folder).

---

## PASO 0 · Antes de empezar

**Importante sobre la precisión de los datos.** Keyword Planner muestra rangos
vagos (`1 mil – 10 mil`) a las cuentas sin inversión activa, y cifras exactas a
las que sí invierten. La cuenta de BluePixel tiene inversión, así que **debe
mostrar números exactos**. Si ves rangos, estás en la cuenta equivocada o en una
cuenta sin permisos de administrador: verifica antes de extraer nada.

**Dónde guardar.** Crea la carpeta:
```
02_Estrategia_B2B/datos_excel_y_css/keyword_planner_2026-09/
```
Cada descarga se guarda ahí con el nombre del lote (`A1_apps_moviles.csv`, etc.).

---

## PASO 1 · Abrir la herramienta

1. Entra a **ads.google.com** con la cuenta de BluePixel.
2. Arriba a la derecha: **Herramientas** → columna *Planificación* → **Planificador de palabras clave**.
3. Elige la tarjeta **"Descubre nuevas palabras clave"** (no "Consulta el volumen de búsquedas", esa solo mide lo que ya tienes).

---

## PASO 2 · Configurar los filtros base

Estos son iguales para **todos los lotes en español**. Configúralos una vez y
verifica que se mantengan entre extracciones.

| Campo | Valor | Por qué |
| :--- | :--- | :--- |
| Pestaña | **Empezar con palabras clave** | La otra pestaña parte de una URL; aquí queremos partir de nuestras semillas |
| Ubicación | **México** | El 79% de las impresiones orgánicas vienen de México |
| Idioma | **Español** | |
| Redes de búsqueda | **Google** (sin socios de búsqueda) | Los socios inflan el volumen con tráfico que no es de Google |
| Rango de fechas | **Últimos 12 meses** | |
| "Mostrar ideas muy relevantes" | **DESACTIVADO** | Activado recorta el abanico justo donde están las oportunidades que no conocemos |

📌 **El rango de fechas está arriba a la derecha de la tabla de resultados, no en
la pantalla inicial.** Es el error más común: extraer con el rango por defecto.

---

## PASO 3 · Activar la columna que más importa

Al ver los resultados: botón **Columnas** (ícono de columnas, arriba de la tabla)
→ **Modificar columnas** → activa:

- ✅ **Puja para la parte superior de la página (intervalo bajo)**
- ✅ **Puja para la parte superior de la página (intervalo alto)**
- ✅ **Competencia**
- ✅ **Cambio de tres meses**
- ✅ **Cambio interanual**

**La puja es el filtro de intención que nos faltaba.** Una puja alta significa que
otros anunciantes ganan dinero con esa búsqueda. Es lo que no tuvimos para detectar
que `creador de apps` y `hosting` quemaran $4,247 sin una sola conversión.

Guarda el conjunto de columnas para no repetirlo en cada lote.

---

## PASO 4 · Las 8 extracciones

Pega cada bloque completo en el campo de semillas (acepta hasta 10 por consulta,
una por línea o separadas por coma), extrae, y descarga con
**⬇ → Descargar ideas de palabras clave → .csv**.

---

### 🟦 LISTA A — Comercial donde ya hay relevancia

Son consultas donde bluepixel.mx **ya aparece entre la posición 15 y la 60**.
Google ya considera relevante al dominio; lo que falta es una página que compita.
Es la lista de mayor retorno a corto plazo.

#### Lote A1 · Apps móviles
```
desarrollo de apps
desarrollo de aplicaciones moviles
desarrolladores de apps
empresa de desarrollo de aplicaciones moviles
desarrollo de apps a medida
desarrolladores de apps en mexico
agencia desarrollo apps
desarrollo de aplicaciones empresariales
empresa creacion app
desarrollo de aplicaciones moviles para empresas
```
*Contexto: `desarrollo de apps` ya tiene 1,950 impresiones en posición 20.*

#### Lote A2 · Web, software y agencia
```
agencia de desarrollo web
empresas de desarrollo web
desarrollo de software a la medida
empresa de desarrollo de software
desarrollo de software empresarial
desarrollo de sitios web para empresas
proveedor de desarrollo web
servicio de desarrollo web
desarrollo de la pagina web
diseno web optimizado
```
*Contexto: `desarrollo de software a la medida` son 1,900 búsquedas/mes según
Semrush y no aparece en ninguna posición hoy. `agencia de desarrollo web` está en
posición 22.6.*

#### Lote A3 · UX/UI
```
diseno ux ui
agencia ux ui
agencia ux
diseno ui
diseno ux para app
arquitectura de la informacion
consultoria ux
auditoria ux
design system para empresas
investigacion de usuarios
```
*Contexto: el clúster UX/UI acumula más de 8,000 impresiones en posiciones 17–29.
Es donde hay más volumen desperdiciado.*

---

### 🟩 LISTA B — Extender el clúster educativo que ya funciona

Es el **único patrón donde el dominio alcanza posición 9–11**. Expandirlo es la
apuesta de menor riesgo del plan: ya está demostrado que Google premia a
bluepixel.mx en este formato.

#### Lote B1 · "tipos de"
```
tipos de paginas web
tipos de interfaz de usuario
tipos de sitios web
tipos de aplicaciones moviles
tipos de software
tipos de arquitectura de software
tipos de metodologias agiles
tipos de pruebas de software
tipos de bases de datos
tipos de integraciones de sistemas
```

#### Lote B2 · "qué es"
```
que es ux
que es ui
que es un agente de ia
que es rag
que es mcp
que es rpa
que es cloud native
que es un design system
que es una api
que es devops
```

#### Lote B3 · Costo y comparativas
```
cuanto cuesta crear una app
cuanto cuesta una pagina web
cuanto cuesta un software a la medida
cuanto cuesta implementar ia en una empresa
diferencia entre app nativa y web app
rpa vs inteligencia artificial
diferencia entre chatbot y agente de ia
etapas del desarrollo de software
ejemplos de interfaces de usuario
elementos de una pagina web
```
*Aquí es donde va `rpa`: como contenido comparativo, no como página de servicio.*

---

### 🟨 LISTA C — Competidores y alternativas

Salen de los **términos de búsqueda reales de la cuenta de Ads**: ~4,000
impresiones de gente buscando consultoras por nombre. En pauta no convierte
—comprar la marca ajena rara vez funciona— pero en SEO B2B el contenido de
comparación es de lo más rentable que existe.

#### Lote C1 · Marcas competidoras
```
softtek
wizeline
neoris
globant
ntt data mexico
accenture mexico
bairesdev
toptal
infosys mexico
epam mexico
```
*Aquí lo que buscas no es la marca en sí, sino las sugerencias que Google
devuelva: "softtek opiniones", "alternativas a wizeline", etc.*

#### Lote C2 · Listados y comparativas
```
mejores empresas de desarrollo de software en mexico
mejores agencias de desarrollo web mexico
mejores agencias ux ui mexico
empresas de software en mexico
consultoras de tecnologia en mexico
empresas de inteligencia artificial en mexico
comparativa empresas desarrollo software
alternativas a softtek
nearshore software development mexico
proveedores de desarrollo de software mexico
```
*BluePixel ya tiene `/es/blog/mejores-agencias-diseno-ux-ui-mexico` en posición
10.14 con 3,875 impresiones. La fórmula ya funciona; falta replicarla.*

---

### 🟪 LISTA D — La categoría nueva

Aquí **no importa el volumen absoluto sino la tendencia**. Por eso activaste las
columnas de cambio trimestral e interanual. Si estos términos crecen mes con mes,
conviene posicionarse antes de que llegue la competencia, aunque hoy el volumen
sea bajo.

#### Lote D1 · IA agéntica
```
agentes de ia
agentes autonomos para empresas
rag empresarial
rag privado
automatizacion con inteligencia artificial
copilotos internos
protocolo mcp
ia para erp
chatbot corporativo
inteligencia artificial para empresas
```

---

### 🟥 EXTRACCIÓN EN INGLÉS (configuración distinta)

**Cambia los filtros antes de esta corrida:**
- Ubicación: **Estados Unidos** (agrega India como segunda corrida si quieres)
- Idioma: **Inglés**

Justificación: las dos páginas `/post/*` en inglés suman 41,750 impresiones, y en
pauta `custom app development` convierte a **$128 de CPA** — el segundo más
eficiente de toda la cuenta.

#### Lote E1 · Inglés
```
custom software development
custom app development
mobile app development company
application development services
ui ux design agency
custom web design
nearshore software development mexico
ai agents for business
enterprise rag
software development company mexico
```

---

## PASO 5 · Cómo leer los resultados

Para cada keyword, cruza **volumen** contra **puja de la parte superior (intervalo alto)**:

| Volumen | Puja alta | Qué significa | Qué hacer |
| :--- | :--- | :--- | :--- |
| Alto | **Alta** | Comercial competido, hay dinero | Página de servicio + pauta |
| Alto | **Baja** | Informacional o "hazlo tú mismo" | Blog. **Nunca** página de servicio |
| Bajo | **Alta** | Nicho de alto valor | Página dedicada, se gana barato |
| Bajo | **Baja** | Ruido | Descartar |

El segundo renglón explica el desperdicio histórico de la cuenta: `hosting`,
`creador de apps` y `creador de aplicaciones` casi con certeza caen ahí, y entre
los tres quemaron $4,247 sin convertir.

### Semáforo de decisión

- 🟢 **Actuar ya:** puja alta + ya aparecemos en posición 15–40 (Lista A).
  Google ya nos considera relevantes y el término tiene valor comercial probado.
- 🟡 **Contenido:** volumen alto + puja baja (buena parte de la Lista B).
  Va al blog con un CTA hacia la página de servicio correspondiente.
- 🔵 **Apuesta a futuro:** volumen bajo pero crecimiento trimestral de dos dígitos
  (Lista D). Posicionarse temprano.
- ⚪️ **Descartar:** sin volumen y sin puja.

---

## PASO 6 · Qué entregar al terminar

Con los 8 CSV en la carpeta, avísame y consolido:

1. **Una tabla única** con las ~800 keywords deduplicadas, clasificadas por el
   semáforo de arriba.
2. **La asignación página por página**: qué keyword ataca cada una de las 15 rutas
   del sitio nuevo, y cuáles necesitan una página que todavía no existe.
3. **El plan de contenido del blog** priorizado por volumen × facilidad, incluida
   la decisión de si el blog se migra o se conserva donde está.
4. **La actualización de `seoData.js`** con los títulos definitivos, si los datos
   contradicen alguno de los 15 que ya escribí.

---

## ⚠️ Lo que Keyword Planner NO te va a dar

Para que no busques ahí lo que no está:

- **Keyword Difficulty.** Keyword Planner trae "Competencia", pero es competencia
  **entre anunciantes de pago**, no dificultad orgánica. Para el KD real hace
  falta Semrush o Ahrefs — el acceso de Rocketing.
- **Quién rankea hoy en cada término.** Eso también es Semrush/Ahrefs.
- **Tu propio posicionamiento.** Eso ya lo tienes en Search Console.
