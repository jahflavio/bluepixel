# FORENSE DE MEDIOS PAGADOS Y ADQUISICIÓN — BluePixel, corte 15-sep-2026

## ⚠️ ADVERTENCIA DE INTEGRIDAD (leer antes de cualquier cifra)

Antes de responder las 8 preguntas hay que fijar un hecho: **el reporte de Rocketing no cierra consigo mismo**. Tres reconciliaciones fallidas, todas verificables dentro del mismo PDF:

| Canal | Tabla "Evolución del presupuesto" | Panel nativo de plataforma | Factor de discrepancia |
|---|---|---|---|
| Google Ads | $191,807.92 | $13,621.35 | **14.08x** ($178,186.57 sin explicar) |
| Meta Ads | $5,531.21 | $1,239.23 | **4.46x** ($4,291.98 sin explicar) |
| LinkedIn Ads | $24,999.71 | *no existe panel* | **∞** |
| **Suma de canales** | **$222,338.84** | **$14,860.58** | — |
| Tile "Inversión Total" | **$235.69K** | — | $13,351 por encima de la suma de sus propios canales (5.7%) |

**De $235,690 MXN reportados como gasto de septiembre, solo $14,860.58 (6.3%) tiene respaldo de plataforma. $220,829.42 (93.7%) está sin verificar.**

Prueba aritmética de cuál cifra es la real: $14,860.58 / 13 días = **$1,143.12/día → $34,293.65/mes**. El gasto promedio mensual de Q2 fue $102,712 / 3 = **$34,237.33/mes**. Diferencia: 0.16%. El run-rate real es ~$34.3K/mes. **La tabla de presupuesto NO es "Sep 1–13": es acumulado de vida de campaña** [inferencia, sustentada en los nombres "RCKT | May26" y "RCKT | Jun26"]. Si $235.69K fueran 13 días, el año correría a $6,617,450 MXN — 22.6x el gasto anual declarado de $292,426.

Segundo fallo: el rollup trimestral **no se reconstruye desde el funnel mensual del mismo documento**.

| | Q1 (desde meses) | Q1 (tabla trimestral) | Q2 (desde meses) | Q2 (tabla trimestral) | Q3 (desde meses) | Q3 (tabla trimestral) |
|---|---|---|---|---|---|---|
| Leads | 139 | 139 ✓ | 63 | 65 | 38 (Jul+Ago) | — |
| Contactados | 41 (29.50%) | 68 implícito (48.92%) | 32 (50.79%) | 43 (66.15%) | 19 | 43 *(en realidad es el dato de Q2, desfasado un renglón)* |
| Propuestas | 26 ✓ | 26 ✓ | 14 | 15 | **7** | **0** |
| Ventas | 2 ✓ | 2 ✓ | 0 ✓ | 0 ✓ | 0 ✓ | 0 ✓ |

Las tasas de contacto trimestrales están infladas **+19.4 pts en Q1 y +15.4 pts en Q2**, y **Q3 reporta 0 propuestas cuando el funnel mensual registra 7** (Jul 3 + Ago 4). La celda de gasto de marketing de Q3 está **vacía**: no existe ROI calculable para el trimestre en curso.

Todo lo que sigue usa **datos de plataforma** cuando existen y marca explícitamente cada inferencia.

---

## 1. DÓNDE EXACTAMENTE SE QUEMA EL DINERO

### 1.1 Unit economics reales por trimestre

| Métrica | Q1 2026 | Q2 2026 | Q3 2026 (Jul 1 – Sep 13) |
|---|---|---|---|
| Leads (CRM) | 139 | 63 | 44 (Jul 20 + Ago 18 + Sep 6) |
| Propuestas | 26 | 14 | 7 |
| Ventas | 2 | 0 | 0 |
| Venta MXN | $7,820,942 | $0 | $0 |
| Gasto marketing | $189,714 | $102,712 | **$85,734** [inferencia: 75 días × $1,143.12/día verificable] |
| **Costo por lead** | **$1,364.85** | **$1,630.35** (+19.5%) | **$1,948.50** (+19.5%) |
| **Costo por propuesta** | **$7,296.69** | **$7,336.57** | **$12,247.71** (+66.9%) |
| **Costo por venta (CAC)** | **$94,857.00** | **∞** | **∞** |
| CAC / ticket ($3,910,471) | 2.43% | n/a | n/a |
| ROAS | 41.2x | 0.0x | 0.0x |

**El CPL se ha degradado 42.8% desde enero mientras el gasto bajó 45.9%.** El gasto mensual pasó de $63,238 (Q1) a $34,237 (Q2) a ~$34,294 (Q3): cayó 45.9%. Los leads cayeron de 46.3/mes a 21.0 a 14.7: **-68.3%**. Los leads caen más rápido que el presupuesto — no es un problema de inversión, es un problema de eficiencia del sistema.

**Cifra maestra:** desde el 1 de abril se han gastado **$188,446 MXN** para producir **21 propuestas y $0 en ventas** = **$8,973.62 MXN por propuesta muerta**.

### 1.2 Google Ads — campaña por campaña (Sep 1–13, datos de plataforma)

| # | Campaña | Impr. | Clics | CTR | CPC | Conv. | **Gasto derivado** | **Costo/conv.** |
|---|---|---|---|---|---|---|---|---|
| 1 | IA Operacional Enterprise \| RCKT \| Jun26 | 1,411 | 199 | 14.10% | $22.80 | 1 | **$4,537.20** | $4,537.20 |
| 2 | BluePixel \| RCKT \| Jun26 (marca) | 119 | 45 | 37.82% | $11.10 | 1 | **$499.50** | $499.50 |
| 3 | WebDev BP \| RCKT \| May26 PT2 | 273 | 25 | 9.16% | $111.33 | **0** | **$2,783.25** | **∞** |
| 4 | Competidores \| RCKT \| Jun26 | 821 | 23 | 2.80% | $87.73 | **0** | **$2,017.79** | **∞** |
| 5 | App Dev BP \| RCKT \| May26 PT2 | 100 | 13 | 13.00% | $196.10 | 1 | **$2,549.30** | $2,549.30 |
| — | **Subtotal top 5** | **2,724** (95.6%) | **305** (96.2%) | — | — | 3 | **$12,387.04** (90.9%) | — |
| — | **Las otras 30 campañas** | **124** (4.4%) | **12** (3.8%) | — | **$102.86** | 3 | **$1,234.31** (9.1%) | — |
| — | **Cuenta completa (35)** | **2,848** | **317** | 11.13% | $42.97 | 6 | **$13,621.35** | $2,270.23 |

*Validación: 317 × $42.97 = $13,621.49 ≈ $13,621.35 ✓. Los gastos por campaña son clics × CPC.*

**Sangrado puntual, cuantificado:**
- **WebDev + App Dev + Competidores = $7,350.34 MXN (54.0% del gasto de Google) para 61 clics (19.2%) y 1 conversión.** A $22.80 (CPC de IA Operacional) ese mismo dinero compra **322 clics**. Están pagando **5.3x de más por el mismo tráfico**.
- **Competidores es el peor renglón absoluto:** 28.8% de todas las impresiones de la cuenta, 7.3% de los clics, **CTR 2.80% (4.0x peor que el promedio de cuenta)**, CPC $87.73, **0 conversiones**, $2,017.79 quemados.
- **Las 30 campañas de cola queman $1,234.31 a un CPC de $102.86 — 2.39x el promedio de la cuenta.**

### 1.3 Google Ads — gasto acumulado por campaña (tabla de presupuesto)

| Campaña | Presupuesto | Gasto real | % consumido | % del gasto Google |
|---|---|---|---|---|
| **Brand** | $106,000 | **$103,957.04** | **98.07%** | **54.20%** |
| **Desarrollo Web** | $39,000 | **$23,849.07** | 61.15% | 12.43% |
| *(renglón no atribuible A)* | $41,450 | $28,868.28 | 69.65% | 15.05% |
| *(renglón no atribuible C)* | $19,025 | $13,365.02 | 70.25% | 6.97% |
| *(renglón no atribuible D)* | $8,700 | $13,079.43 | **150.34%** ⚠ | 6.82% |
| *(renglón no atribuible E)* | $8,700 | $4,600.21 | 52.88% | 2.40% |
| *(renglón no atribuible G)* | $3,600 | $4,088.87 | **113.58%** ⚠ | 2.13% |
| **Grand total** | **$227,375** | **$191,807.92** | 84.36% | 100% |

*Reconciliación: la columna "Gasto real" suma exacto al grand total ($191,807.92 ✓). La columna "Presupuesto" suma $226,475 vs grand total $227,375 → **hueco de $900 MXN**, que se repite idéntico en "Gasto ideal" y "Presupuesto restante". El tracker tiene un renglón roto.*

Hallazgos:
- **$64,001.81 (33.4% del gasto de Google) no puede atribuirse a una campaña nombrada desde el entregable de Rocketing.** Las campañas Cartera de Servicios, Desarrollo de Apps, Diseño UX/UI, Servicios Digitales y Winning Keywords existen en el reporte sin cifra legible.
- **Dos campañas rebasaron presupuesto (150.34% y 113.58%)** mientras las de generación de demanda quedaron al 52-70%. No hay control de pacing.
- La columna **"% gastado" del tracker es aritméticamente falsa**: imprime 3.88 para Brand, que consumió 98.07%. Ningún renglón coincide con gasto/presupuesto. Lo mismo la columna "Desviación % vs ideal".

### 1.4 Costo por lead y por venta por canal (Sep 1–13)

| Canal | Gasto | Impresiones | Clics | Leads GA4 | CPC | **CPL** | Propuestas | Ventas | **CAC** |
|---|---|---|---|---|---|---|---|---|---|
| Google Ads | $13,621.35 | 2,848 | 317 | **6** (google/cpc) | $42.97 | **$2,270.23** | 0 | 0 | **∞** |
| Meta Ads | $1,239.23 | 56,482 | ~968 | **0 visibles** | $1.28 | **≥$413.08 / ∞** | 0 | 0 | **∞** |
| LinkedIn | $24,999.71 (sin respaldo) | — | — | **0** | — | **∞** | 0 | 0 | **∞** |
| **Total** | **$39,860.29** | — | — | **6** | — | **$6,643.38** | **0** | **0** | **∞** |

**No existe un solo peso de venta atribuido a un canal en todo 2026.** El ROI de 2,574.5% es un número de cuenta, no de canal: los $7,820,942 provienen de 2 ventas de Q1 sin origen identificado.

---

## 2. POR QUÉ EL CPC PROMEDIO ES $42.97 Y LLEGA A $196.10 EN APP DEV

Las cuatro hipótesis del encargo no son excluyentes. La evidencia las ordena así:

**(a) Cluster equivocado — causa dominante, 39% del gasto.**

| Cluster | Campañas | Clics | CPC ponderado | Conv. |
|---|---|---|---|---|
| Agentización / IA | IA Operacional Enterprise | 199 | **$22.80** | 1 |
| Desarrollo Web/Apps | WebDev + App Dev | 38 | **$140.33** | 1 |
| Conquesting | Competidores | 23 | $87.73 | 0 |
| Marca | BluePixel | 45 | $11.10 | 1 |

**El cluster de Desarrollo cuesta 6.16x más por clic que el cluster de IA.** "Desarrollo web" y "desarrollo de apps" son las subastas más saturadas de México: BluePixel puja contra freelancers, partners de Wix/Shopify y offshore shops con ciclo de venta de días. Todos ellos pueden pagar ese clic; BluePixel no, porque su ticket es $3,910,471 y **su anuncio no lo comunica** (esto es exactamente el "desfase de información" ya documentado, medido en pesos por clic).

**(b) Quality Score / relevancia — causa comprobada en Competidores.** La campaña de conquesting tiene CTR 2.80% con 821 impresiones: el segundo mayor volumen de impresiones de la cuenta y el peor CTR con diferencia. Por construcción, un anuncio de conquesting no puede contener la marca del competidor → "relevancia del anuncio: inferior al promedio" → penalización directa de CPC. **Es la única campaña donde el CPC alto es estructural y no corregible.**

**(c) Volumen insuficiente de subasta — causa del $196.10.** App Dev registra **100 impresiones en 13 días = 7.7/día**. Con esa delgadez, el algoritmo no tiene datos para optimizar y cada impresión cae en la cabeza de la subasta, donde hay que pujar al tope para aparecer. **$196.10 = 4.56x el promedio de la cuenta.** El CTR de 13% confirma que cuando aparece, es relevante: el problema no es el anuncio, es que solo compite cuando ya es caro.

**(d) Match types — evidencia indirecta.** La firma de un CTR de cuenta de 11.13% (2-3x el normal B2B, 3-6%) con solo 219 impresiones/día es concordancia **exacta ultra-restrictiva**, no amplia. La excepción es Competidores (CTR 2.80%, 821 impresiones), que sí muestra el patrón de frase/amplia derramando en consultas irrelevantes. **No se puede cerrar este punto sin el informe de términos de búsqueda, que Rocketing no entregó** (ver hueco #20).

**Conclusión del punto 2:** el $42.97 promedio es una media que oculta dos cuentas distintas. Una cuenta de IA a $22.80 que funciona y se subutiliza (62.8% de los clics, 33.3% del gasto), y una cuenta de Desarrollo/Conquesting a $87–$196 que no convierte y consume el 54.0% del gasto de plataforma.

---

## 3. LA CONTRADICCIÓN: 35 CAMPAÑAS vs 2,848 IMPRESIONES

### Aritmética de la fragmentación

| Cálculo | Resultado |
|---|---|
| Impresiones / día (cuenta) | 2,848 / 13 = **219.1** |
| Impresiones / día / campaña | 219.1 / 35 = **6.26** |
| Gasto / día (cuenta) | $13,621.35 / 13 = **$1,047.80** |
| **Presupuesto diario por campaña** | $1,047.80 / 35 = **$29.94** |
| **CPC promedio de la cuenta** | **$42.97** |

**31 de las 35 campañas no pueden costear un solo clic al día.** Su presupuesto diario ($29.94) es inferior al precio de un clic ($42.97). Esto no es una metáfora: es la razón mecánica por la que 30 campañas produjeron **124 impresiones totales en 13 días — 4.13 impresiones por campaña, 0.32 por día**.

### Aritmética del aprendizaje algorítmico

Smart Bidding requiere ~15–30 conversiones por campaña al mes para salir de fase de aprendizaje. La cuenta produce **6 conversiones en 13 días ≈ 13.8/mes**, repartidas entre 35 campañas = **0.39 conversiones/campaña/mes**. **A ese ritmo, una campaña tardaría entre 38 y 77 meses en salir de aprendizaje.** Ninguna campaña de esta cuenta ha optimizado jamás, ni lo hará con esta estructura.

### Las tres causas, ponderadas

1. **Fragmentación de presupuesto — 60% del problema.** Demostrado arriba: presupuesto/campaña < CPC.
2. **Restricción de puja / ad rank — 30%.** La firma diagnóstica es CTR altísimo + impresiones mínimas: 37.82% en marca con **119 impresiones en 13 días**. Una marca con 16,448 seguidores y clientes Bimbo/IQOS/LifeMiles/RadioShack generando 9.2 impresiones de marca al día significa que la cuenta está estrangulada, no que el mercado no exista. Si el problema fuera solo presupuesto, veríamos "IS perdido por presupuesto" alto; si fuera solo volumen, el CTR sería normal.
3. **Keywords sin volumen — 10%.** Real pero secundario, y ya autodiagnosticado en `ESTRATEGIA_PAUTA_Y_CAMPAÑAS_ADS_2026.md` §1.1 ("volumen de búsqueda mensual exacto prácticamente nulo").

**Referencia para dimensionar:** una sola keyword en exacta con 100 búsquedas/mes, al 100% de impression share, entrega ~43 impresiones en 13 días. La cuenta entera entregó 2,848. **Eso equivale a menos de 67 keywords con volumen real, o a un impression share de un dígito.** No se puede resolver cuál sin la columna de Impression Share — el dato más importante que falta en todo el reporte (hueco #18).

---

## 4. EL PESO DE BRAND: $103,957.04 DE $191,807.92

### Las cifras

| Dato | Valor |
|---|---|
| Presupuesto Brand | $106,000 (46.6% del presupuesto Google de $227,375) |
| Gasto real Brand | **$103,957.04** |
| **% del gasto total de Google** | **54.20%** |
| Consumo de su propio presupuesto | **98.07%** — el más alto de la cuenta |
| Lo que compra (plataforma, 13 días) | **119 impresiones, 45 clics, 1 conversión, $499.50** |
| CPC | $11.10 (el más barato) — costo/conversión $499.50 (el más barato) |

### Defensivo vs adquisición nueva

**Adquisición nueva: 0.00%.** Por definición, quien teclea "bluepixel" ya conoce la marca. **El 100% del gasto de Brand es defensivo o de retención.**

De ese 100% defensivo, solo es incremental la fracción de clics que no se habrían obtenido orgánicamente. BluePixel ocupa **posición 1–2 orgánica en toda la familia de marca**: `bluepixel ia` #1, `bluepixel modernización` #1, `bluepixel agencia digital` #2, `bluepixel digital` #2, `bluepixel inteligencia artificial` #2. La literatura de incrementalidad en búsquedas de marca con posición orgánica #1 sitúa el incremento entre 10% y 20% [inferencia].

> **Gasto defensivo sin incremento estimado: $83,166 – $93,561 MXN de los $103,957.04.**

### ¿Lo justifica la caída de -1 en keywords de marca?

**No. Al contrario: la prueba de que Brand no está defendiendo nada.**

Ocho términos de marca caen **exactamente -1 posición, simultáneamente**: `blue pixel` (10), `bluepixel`, `bluepixel agencia digital` (2), `bluepixel desarrollo`, `bluepixel digital` (2), `bluepixel diseño ux`, `bluepixel inteligencia artificial` (2), `bluepixel mexico`. Un desplazamiento uniforme de -1 en ocho términos a la vez no es pérdida de ranking: es **inserción de un elemento en el SERP** que empuja todo un lugar hacia abajo — típicamente un AI Overview o un bloque de sitelinks [inferencia].

Consecuencia dura: **la pauta de marca no corrige eso.** Se está pagando el 54.20% del presupuesto de Google para "defender" una marca cuyo SERP se degradó de todos modos.

### El contraargumento que dará Rocketing, y su refutación

Dirán: *"Brand convierte más barato que nada — $499.50 por conversión vs $4,537.20 de IA Operacional."* Es cierto y es irrelevante:
- Esa conversión **no es incremental**: la persona iba a encontrar BluePixel por la posición #1 orgánica.
- Son **1 conversión en 13 días = 2.3 al mes**. No se construye un pipeline de $3.9M por deal con 2.3 conversiones mensuales de gente que ya te conocía.
- **Total de demanda de marca disponible: 119 impresiones / 13 días ≈ 275 búsquedas mensuales.** Se está asignando más de la mitad del presupuesto a un pozo de 275 búsquedas/mes.

**Veredicto:** Brand se reduce a presupuesto de contención. El único dato que podría justificar mantenerlo es **Auction Insights** — si un competidor aparece con >5% de impression share sobre términos de marca, hay algo que defender. Rocketing no lo entregó. **Sin ese dato, el gasto no tiene sustento.**

---

## 5. META ADS: 56,482 IMPRESIONES → 622 LANDING VIEWS → 0 PIPELINE

### El embudo, paso a paso

| Etapa | Valor | Tasa |
|---|---|---|
| Impresiones | 56,482 | — |
| Alcance único | 41,931 | **frecuencia 1.35** |
| Clics (derivados: $1,239.23 / $1.28) | **~968** | CTR 1.71% ✓ |
| **Vistas de landing page** | **622** | **64.3% de los clics** |
| **Clics pagados que nunca llegaron al sitio** | **~346 (35.7%)** | — |
| Leads visibles en GA4 | **0** (≤3 en renglones ocultos) | — |
| Costo por landing view | **$1.99** | — |
| **Costo por lead** | **≥$413.08 / ∞** | — |

### Por qué 56,482 impresiones producen 622 landing views

**Causa 1 — Es prospección fría, no retargeting. Prueba aritmética:** alcance de **41,931 personas únicas** con frecuencia 1.35. El sitio de BluePixel tuvo **1,528 usuarios** en el mismo periodo. Un pool de retargeting de 90 días jamás produce 41,931 personas únicas. **La Solución 5 de la auditoría del 14-sep (convertir Meta a retargeting puro) no se ejecutó.**

**Causa 2 — Tres de las cuatro campañas visibles son publicaciones de Instagram impulsadas, y Meta está cobrando engagement, no tráfico:**

| Campaña | Clics | Impr. | CTR | CPC | Inversión | **Landing views** | **Costo/LV** |
|---|---|---|---|---|---|---|---|
| Always On \| BP \| RC… | 416 | 24,292 | 1.71% | $1.42 | $591.73 | **260** (62.5%) | **$2.28** |
| Publicación de Insta… | 126 | 1,898 | 6.64% | $0.59 | $74.50 | **2** | $37.25 |
| Publicación de Insta… | 125 | 2,024 | 6.18% | $0.60 | $74.76 | **1** | $74.76 |
| Publicación: "La con…" | 125 | 1,473 | 8.49% | $0.48 | $59.48 | **0** | **∞** |
| **Subtotal 3 posts impulsados** | **376** | **5,395** | — | — | **$208.74** | **3 (0.80%)** | **$69.58** |

**376 clics → 3 landing views.** Esos "clics" son likes, expansiones de imagen y visitas a perfil. **El 99.2% del presupuesto de posts impulsados compra interacción que nunca toca el sitio.** CTR de 6.18–8.49% es la firma inequívoca de optimización por engagement.

**Causa 3 — La audiencia de Instagram está envenenada.** 16,448 seguidores con alcance orgánico por post de **123–143 (0.8%)**, y un balance que registra **19,624 seguidores perdidos en agosto 2025** contra 877 ganados. Meta está construyendo lookalikes y señales de interés sobre una base comprada o purgada. **Cualquier optimización de audiencia sobre esa señal apunta al público equivocado por diseño.**

**Causa 4 — Los propios datos de landing view no reconcilian.** Las 4 campañas visibles suman 263 landing views y $800.47. Las 8 restantes tendrían que producir **359 landing views con ~176 clics = 204% de tasa de aterrizaje**, lo cual es imposible. **La métrica de 622 no es confiable.**

### Qué hacer con Meta

1. **Apagar hoy las 3 publicaciones impulsadas.** $208.74 por 3 landing views. Ahorro inmediato y sin discusión.
2. **Reconocer la escala real:** $1,239.23/13 días ≈ **$2,860/mes = 8.3% del gasto verificable**. Para una firma con ticket de $3,910,471, todo el presupuesto de Meta es el **0.073% de un solo contrato**. Meta no es el problema financiero; el error es gastarle atención directiva.
3. **Reconvertir "Always On" ($591.73, 260 LV a $2.28 — es lo único que funciona) a retargeting puro:** visitantes de 180 días + quienes vieron demos PLG (Cotizador FR Medical, ERP Bridge, Legal Onboarding KYC, Triage RAG) + Blueprint Library. Techo: **$1,500 MXN/mes**.
4. **El uso no obvio y de mayor valor: laboratorio de mensaje.** A **$1.28 por clic en Meta vs $42.97 en Google (33.6x) y vs $196.10 en App Dev (153x)**, se puede validar si "Agentes IA en producción con MCP" supera a "Desarrollo de apps empresariales" por **$200 MXN** y portar el ganador a Google y LinkedIn. **Meta debe dejar de ser un canal de adquisición y convertirse en el banco de pruebas del reposicionamiento.**
5. **Regla de corte:** si el retargeting no produce 1 SQL en 60 días, se apaga el canal completo el 15-nov-2026.

---

## 6. LINKEDIN: $24,999.71 SIN UNA SOLA MÉTRICA

### El estado

| Dato | Valor |
|---|---|
| Presupuesto | $25,600 |
| Gasto real | **$24,999.71 (97.66%)** |
| Única campaña nombrada | **"Awareness"** |
| Impresiones, clics, CTR, CPC, CPM, leads | **Ninguno reportado** |
| Renglones de `linkedin/*` en la tabla de fuente/medio de GA4 | **Cero** |

### El hallazgo estructural, antes que el de medición

**El objetivo de campaña es "Awareness".** Un objetivo de Awareness en LinkedIn compra impresiones y alcance, y **por construcción no puede generar leads**. Para una firma B2B con el pipeline detenido desde marzo, comprar reconocimiento en el inventario más caro del digital es la peor asignación de toda la cuenta. **$24,999.71 = 13.0% del gasto acumulado de Google, en un canal configurado para no producir pipeline.**

Segundo: **contradicción directa con la auditoría del 14-sep**, que registró LinkedIn en "$8,000 presupuestado / $0 gastado". En 24 horas la cifra pasó a $25,600 / $24,999.71. O la auditoría usó una fuente equivocada, o el $25,600 es un compromiso anual reportado como gasto del mes. **Ambas posibilidades exigen la misma acción: exportación nativa antes de pagar la siguiente factura.**

### Lo que falta medir — checklist exigible a Rocketing

| # | Dato faltante | Por qué es indispensable |
|---|---|---|
| 1 | Impresiones, clics, CTR, CPC, CPM | Sin esto no existe costo unitario de nada |
| 2 | Leads / envíos de Lead Gen Form y costo por lead | Es el único KPI que justifica el canal |
| 3 | **Reporte "Companies"** (cuentas alcanzadas, impresiones y clics por empresa) | **Lo único que puede justificar $25K.** Señal ABM sobre Constructora Alfa, Logística Sur, RetailX, Banco Nacional, Industrias HR |
| 4 | Demographics entregados: seniority, función, tamaño de empresa, industria | Verificar si se impactó a CTO/COO/CFO o a estudiantes y reclutadores |
| 5 | LinkedIn Insight Tag instalado y disparando | Sin tag no hay retargeting, ni conversiones, ni matched audiences |
| 6 | Conversiones configuradas y valor por conversión | Sin esto el canal no puede optimizar nunca |
| 7 | Frecuencia y alcance únicos | Detectar saturación sobre un pool B2B pequeño |
| 8 | **UTMs en todos los destinos** | **GA4 muestra 0 renglones de LinkedIn. O no hubo tráfico, o no hubo etiquetado. En cualquier caso el dinero es inauditable** |
| 9 | Desglose por formato (Single Image / Document / Thought Leadership / Video) | Decidir el mix de octubre |
| 10 | Factura de LinkedIn conciliada contra el reporte | Confirmar que los $24,999.71 existieron |

**Referencia de contraste [inferencia]:** el CPC de LinkedIn en México segmentando C-level ronda $80–$250 MXN. $24,999.71 debieron comprar **100–312 clics**. Con una tasa de Lead Gen Form del 5%, eso son **5–15 leads**. En GA4 no aparece ninguno. **O los clics no ocurrieron, o nunca se rastrearon.**

**Contexto que agrava:** el canal orgánico de LinkedIn —donde vive literalmente el ICP— está muerto: **+81 seguidores en abril, +33 en mayo, +4 en junio (-95.1% en dos meses)**. Se paga el canal B2B y se abandona simultáneamente su motor orgánico.

---

## 7. HUECOS DE INSTRUMENTACIÓN — INVENTARIO COMPLETO

| # | Hueco | Evidencia | Impacto económico |
|---|---|---|---|
| 1 | **WhatConverts caído** — "Unknown data source: the data source associated with this component could not be loaded" (×2) | Panel WhatConverts vacío | Sin call tracking ni atribución de formulario a keyword. **$7,820,942 de venta sin origen identificado** |
| 2 | **Cero atribución de venta a canal/campaña** | Tabla trimestral tiene "Total Venta" sin desglose | Toda reasignación de presupuesto es una apuesta. El ROI de 2,574.5% es inaccionable |
| 3 | **Offline Conversion Import no implementado** | Prescrito en `ESTRATEGIA_PAUTA` §4; ausente del reporte | Smart Bidding optimiza hacia **6 formularios brutos**, no hacia deals de $3.9M. **Google está siendo entrenado para traer más leads de $20k–$40k** |
| 4 | **"Conversiones = 6" sin definir** | No hay desglose por acción de conversión | Las 30 campañas de cola muestran 3 conversiones con 12 clics (**CVR 25%, implausible**). Posible doble conteo |
| 5 | **Gasto de plataforma ≠ gasto de tracker** | Google 14.08x, Meta 4.46x | **$220,829.42 (93.7%) del gasto de septiembre sin verificar** |
| 6 | **"Inversión Total" ≠ suma de canales** | $235,690 vs $222,338.84 | $13,351 sin origen (5.7%) |
| 7 | **Celda de gasto de Q3 vacía** | Tabla trimestral | **Imposible calcular ROI del trimestre en curso.** Último ROI calculable: Q2, -100% |
| 8 | **Rollup trimestral no cuadra con funnel mensual** | Q1 48.92% vs 29.50%; Q2 66.15% vs 50.79%; **Q3 0 propuestas vs 7** | La dirección ve un funnel más sano del que existe. Tasas de contacto infladas +19.4 y +15.4 pts |
| 9 | **Hueco de $900 en la tabla de presupuesto** | Suma campañas $226,475 vs grand total $227,375 | Un renglón del tracker está roto; se repite en 3 columnas |
| 10 | **Columnas "% gastado" y "Desviación %" son falsas** | Brand: 98.07% real, impreso 3.88 | El pacing no se puede leer; dos campañas se pasaron 150.34% y 113.58% sin alerta |
| 11 | **Mapeo campaña↔gasto ilegible en el entregable** | Solo 2 de 7 renglones de Google son atribuibles | **$64,001.81 (33.4% del gasto Google) no se puede asignar a una campaña nombrada** |
| 12 | **Cero UTMs en LinkedIn y Meta** | GA4 no tiene renglones de `linkedin/*`, `facebook/*`, `paid_social` | **$30,530.92 (LinkedIn + Meta) 100% invisible en analítica** |
| 13 | **3 de 26 leads sin fuente visible** | Tabla marca "1-9/9", suma visible 23 | 11.5% de los leads sin origen |
| 14 | **GA4 (26) vs CRM (6) en septiembre** | Auditoría 14-sep: "de 6 leads registrados" | **Discrepancia de 4.3x.** El CPL varía entre $571.56 y $2,270.23 según qué cifra se use |
| 15 | **SEO (21 leads español) vs GA4 (13 google/organic)** | Dos paneles del mismo reporte | **8 leads de diferencia (61.5% de sobredeclaración)** |
| 16 | **Un lead "SEO" cuya fuente es Gemini** | Five Diamond Club, Sep 10 | Un referral de LLM se contabiliza como SEO. **Cero leads de búsqueda de Google en septiembre** |
| 17 | **Meta: landing views no reconcilian** | 359 LV con ~176 clics = 204% | La métrica principal de Meta no es confiable |
| 18 | **Sin Impression Share ni IS perdido (presupuesto/ranking)** | Ausente del overview | **El dato más importante que falta.** Sin él no se puede saber si 2,848 impresiones es techo de mercado o estrangulamiento de puja |
| 19 | **Sin Quality Score / relevancia de anuncio / experiencia de landing** | Ausente | No se puede demostrar si el CPC de $196.10 es penalización de QS o competencia real |
| 20 | **Sin informe de términos de búsqueda** | Ausente | **Imposible verificar si la lista de negativas se cargó alguna vez**, ni qué compraron los clics de $87.73 en Competidores |
| 21 | **Sin definición de MQL/SQL, sin pipeline value, sin costo por SQL** | Prescrito en Solución 7 del 14-sep | Se sigue optimizando por leads brutos, que es la causa del colapso de tasa de cierre de 1:10 a 1:50 |
| 22 | **LinkedIn: cero reporte de cualquier tipo** | Ver sección 6 | $24,999.71 sin un solo KPI |

---

## 8. LAS 5 DECISIONES DE PAUTA ANTES DEL 30 DE SEPTIEMBRE DE 2026

Ordenadas por impacto económico.

### DECISIÓN 1 — Congelar la orden de compra de octubre hasta reconciliar $220,829.42
**Fecha límite: lunes 22 de septiembre. Responsable: Fabián Flores exige / Diana Cardoso entrega.**

No se firma presupuesto de octubre sin: (a) export nativo de **Google Ads** Sep 1–30 con columnas campaña, impresiones, clics, costo, conversiones, valor de conversión, **Impression Share, IS perdido por presupuesto, IS perdido por ranking, Quality Score promedio** e **informe de términos de búsqueda**; (b) export nativo de **LinkedIn Campaign Manager** + reporte "Companies"; (c) export nativo de **Meta Ads Manager**; (d) las tres facturas conciliadas contra el reporte.

> **Impacto:** define si el run-rate es $34,294/mes o $18,130/día. Anualizado, la diferencia es **$6,206,602 MXN**. Ninguna otra decisión de este documento es válida hasta resolver esta.

### DECISIÓN 2 — Reducir Brand a contención y liberar el 54.20% del presupuesto de Google
**Fecha límite: viernes 26 de septiembre. Responsable: Fabián + Rocketing.**

Brand consume **$103,957.04 (54.20% del gasto de Google, 98.07% de su presupuesto)** para comprar **119 impresiones en 13 días** sobre términos donde BluePixel ya ocupa posición orgánica #1–2. El 100% es gasto defensivo; **$83,166–$93,561 no tiene incremento** [inferencia].

Acción: bajar a **$3,000 MXN/mes** en exacta pura (`[bluepixel]`, `[blue pixel]`, `[bluepixel mx]`). Reasignar el resto al cluster Agentización. **Condición para revertir:** si Auction Insights muestra un competidor con >5% de impression share sobre términos de marca, se restituye presupuesto. Sin ese dato, se apaga.

> **Impacto:** libera entre $1,152/mes y $8,000/mes de presupuesto mensual real, y hasta **$100,957 de compromiso acumulado**, hacia el único cluster con CPC viable.

### DECISIÓN 3 — Apagar Competidores, WebDev y App Dev el 18 de septiembre y colapsar 35 campañas en 3+1
**Fecha límite: jueves 18 de septiembre (apagado) / 30 de septiembre (reestructura). Responsable: Diana Cardoso ejecuta, Fabián verifica el 19.**

Esto ya se aprobó en la auditoría del 14-sep y **no se ejecutó**. Los números:
- **Competidores:** 28.8% de las impresiones, CTR 2.80%, 0 conversiones, $2,017.79 quemados. QS estructuralmente penalizado. **Sin rescate posible.**
- **WebDev ($111.33) + App Dev ($196.10):** $5,332.55, 38 clics, 1 conversión. CPC 6.16x el de IA Operacional.
- **30 campañas de cola:** 124 impresiones, $1,234.31 a $102.86/clic, presupuesto diario de $29.94 contra un CPC de $42.97 — **no pueden costear un clic al día**.

Reestructura: **3 campañas Search (Apps / Automatización / Agentización) + 1 Brand de contención**, con la lista maestra de negativas cargada a nivel cuenta y la campaña "IA Operacional Enterprise" reapuntada a la landing de Agentización con demos PLG.

> **Impacto:** los $7,350.34 liberados, a $22.80/clic, compran **322 clics contra los 61 actuales — 5.3x más tráfico calificado con el mismo dinero.** Es la única decisión de esta lista que mueve pipeline dentro de 90 días.

### DECISIÓN 4 — Decisión binaria sobre LinkedIn: convertir a Lead Gen con reporte por cuenta, o apagar el 100%
**Fecha límite: miércoles 24 de septiembre. Responsable: Fabián.**

$24,999.71 en un objetivo **"Awareness"** que por construcción no genera leads, en el inventario más caro del digital, mientras el ICP vive ahí y el orgánico está muerto (+81 → +33 → **+4** seguidores, abril a junio).

Si Rocketing entrega los 10 puntos del checklist de la sección 6 antes del 24: se migra a **Document Ads (Blueprint Library) + Thought Leadership Ads de Leo**, segmentación México, 200+ empleados, seniority Director+, funciones Engineering/Operations/Finance, con **capa ABM sobre las 7 cuentas del pipeline** (Constructora Alfa, Logística Sur, RetailX, Banco Nacional, Industrias HR, Tienda Online, Startup XYZ). Si no entrega: **apagado total el 25 de septiembre.**

> **Impacto:** $24,999.71 es el **0.64% de un ticket promedio ($3,910,471)**. Una sola cuenta enterprise tocada correctamente paga el canal 156 veces. Es el único canal donde el ICP real es direccionable por nombre y cargo — y hoy es el único sin una sola métrica.

### DECISIÓN 5 — Instalar conversión offline y definición de MQL antes de que entre un peso de Q4
**Fecha límite: martes 30 de septiembre. Responsables: Fabián (RevOps) + Leo (servidor MCP).**

Entregables verificables:
1. Captura de `gclid`, `fbclid` y `li_fat_id` en localStorage e inyección en el formulario progresivo de 3 pasos.
2. **Offline Conversion Import de Google Ads activo** con dos acciones de valor: *"Diagnóstico 01 pagado"* (valor asignado $150,000 MXN) y *"Contrato BUILD/EVOLVE"* (valor real del contrato).
3. WhatConverts reconectado o sustituido; sin call tracking no hay atribución de teléfono.
4. **Definición escrita y firmada de MQL** (correo corporativo + empresa de 200+ colaboradores + proceso identificado) y de **SQL** (cita de diagnóstico agendada y completada). El reporte mensual de Rocketing sustituye "Leads brutos" por **MQLs corporativos, Costo por SQL y Pipeline Value en pesos**.
5. UTMs completos en el 100% de los destinos de los tres canales.

> **Impacto:** hoy el algoritmo de Google optimiza hacia **6 formularios brutos** con un ticket real de $3,910,471. Se le está pagando a Google para que encuentre más leads de $20k–$40k, que es exactamente el problema estructural ya diagnosticado. **Sin esta decisión, cualquier presupuesto de Q4 reproduce Q2: $102,712 → $0.** Es la decisión que protege el 100% del gasto del trimestre, no una fracción.

---

### Cierre: el número que resume el forense

**Desde el 1 de abril de 2026: $188,446 MXN gastados, 21 propuestas emitidas, 0 ventas, $0 facturados. $8,973.62 MXN por cada propuesta que no cerró.** Y el 93.7% del gasto del mes en curso no tiene respaldo de plataforma. El problema de BluePixel no es que la pauta sea cara — el CAC de Q1 fue **2.43% del ticket**, una cifra de clase mundial. El problema es que la máquina que produjo ese CAC dejó de funcionar en marzo y **nadie puede señalar con datos qué parte se rompió**, porque la instrumentación no lo permite.