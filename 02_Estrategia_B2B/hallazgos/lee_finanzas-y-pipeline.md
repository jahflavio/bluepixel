# ANÁLISIS FINANCIERO Y DE PIPELINE — BLUEPIXEL
**Corte: 15 de septiembre de 2026 | Preparado para: Fabian Flores (Head of Growth & RevOps)**

---

## RESUMEN EJECUTIVO DEL CFO (leer esto si no lees nada más)

Cuatro hallazgos que cambian la conversación:

1. **El negocio no se rompió en agosto: se rompió en su diseño.** De enero a junio el MRR creció 37% **vendiendo clientes cada vez más pequeños**. El ingreso bruto por cliente nuevo cayó de **$13,750 (ene) a $6,600 (jun): -52%**. El modelo dependía de VOLUMEN de leads. Cuando el volumen colapsó (59 → 17 leads/mes, -71%), no había ticket que lo sostuviera.

2. **La rentabilidad reportada NO incluye el gasto de marketing.** Ingresos − Costos_Operativos = Rentabilidad en los 9 meses del CSV (verificado línea por línea). El gasto de pauta está fuera. **El margen real de Q1 2026 fue NEGATIVO: $148,000 de "rentabilidad" − $189,714 de marketing = −$41,714.**

3. **Se está gastando a un ritmo que la operación no puede pagar.** El panel de presupuesto reporta **$235.69K en 13 días** = **$551,000/mes de run-rate**, contra una rentabilidad operativa de septiembre de **$10,000/mes**. Eso es una quema de **55x** la utilidad. *(Ver §6: hay una discrepancia de 14x dentro del propio reporte que hay que resolver ANTES de gastar otro peso.)*

4. **La aritmética del reposicionamiento ya no es opinión, es álgebra.** Con 18-20 leads/mes, el único ticket promedio que permite volver a $92,000/mes de rentabilidad es **≥ $850,000 MXN**. Con el ticket actual de $20-40K harían falta **358 leads/mes**. Es matemáticamente imposible. El pivote deep-tech no es una apuesta de marca: es la única solución del sistema de ecuaciones.

---

## 1. TRAYECTORIA MENSUAL 2026 Y PUNTO DE INFLEXIÓN

**Fuente:** `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Archivos_CSV/finanzas_q3_2026.csv` (incluye columna `Costos_Operativos` que no estaba en los hechos base).

| Mes | MRR | Δ MRR | Churn | Nuevos clts | Ingresos brutos | Costos op. | Rentabilidad | Margen % | Costos/Ingresos | Ingreso por cliente nuevo |
|---|---|---|---|---|---|---|---|---|---|---|
| Ene | 38,000 | — | 3.1% | 8 | 110,000 | 65,000 | 45,000 | 40.9% | 59.1% | **13,750** |
| Feb | 39,500 | +3.9% | 3.2% | 10 | 115,000 | 66,000 | 49,000 | 42.6% | 57.4% | 11,500 |
| Mar | 41,000 | +3.8% | 2.9% | 15 | 120,000 | 66,000 | 54,000 | 45.0% | 55.0% | 8,000 |
| Abr | 45,000 | +9.8% | 2.8% | 18 | 140,000 | 70,000 | 70,000 | 50.0% | 50.0% | 7,778 |
| May | 48,000 | +6.7% | 3.0% | 20 | 155,000 | 72,000 | 83,000 | 53.5% | 46.5% | 7,750 |
| Jun | 52,000 | +8.3% | 2.7% | **25** ◄pico | 165,000 | 75,000 | 90,000 | 54.5% | 45.5% | **6,600** ◄piso |
| **Jul** | **55,000** ◄pico | +5.8% | **2.5%** ◄piso | 22 | **170,000** ◄pico | 78,000 | **92,000** ◄pico | 54.1% | 45.9% | 7,727 |
| **Ago** | 46,000 | **−16.4%** | **4.1%** | **10** | 120,000 | 78,000 | 42,000 | 35.0% | 65.0% | 12,000 |
| Sep | 42,500 | −7.6% | 4.2% | 12 | 85,000 | 75,000 | **10,000** | **11.8%** | **88.2%** | 7,083 |

### El punto de inflexión exacto: **agosto 2026**, y el detonante fue **retención, no adquisición**

Lo que pasó entre julio y agosto, cuantificado:

| Variable | Jul | Ago | Δ absoluto | Δ % |
|---|---|---|---|---|
| Churn | 2.5% | 4.1% | **+1.6 pp** | **+64.0%** |
| Nuevos clientes | 22 | 10 | −12 | **−54.5%** |
| MRR | 55,000 | 46,000 | −9,000 | −16.4% |
| Ingresos brutos | 170,000 | 120,000 | −50,000 | −29.4% |
| **Costos operativos** | **78,000** | **78,000** | **0** | **0.0%** |
| Rentabilidad | 92,000 | 42,000 | −50,000 | **−54.3%** |

**El mecanismo:** los ingresos cayeron −29.4% y los costos cayeron **0%**. El 100% de la caída de ingresos pasó directo a la línea de utilidad. Ese es el problema estructural: **la base de costos es rígida.** De julio a septiembre los ingresos cayeron −50.0% ($170K→$85K) y los costos solo −3.8% ($78K→$75K). Los costos pasaron de consumir 45.9% de los ingresos a **88.2%**.

**El detonante fue doble y simultáneo en agosto:** el churn se disparó +64% *y* la entrada de clientes nuevos se partió a la mitad. No fue una cosa o la otra. Y ninguna de las dos se explica por el pipeline de marketing: los leads de julio (20) fueron *superiores* a los de junio (17), el mes de máximo desempeño. **La caída de agosto no viene del funnel de marketing.** Viene de la base instalada.

### Pendientes de caída (tasas compuestas mensuales)

| Serie | Ene→Jul (construcción) | Jul→Sep (destrucción) | Reversión |
|---|---|---|---|
| **MRR** | **+6.36%/mes** | **−12.10%/mes** | **18.46 pp** |
| Ingresos brutos | +7.55%/mes | **−29.29%/mes** | 36.84 pp |
| Rentabilidad | +12.66%/mes | **−67.0% acum.** | — |
| En pesos: MRR | +$2,833/mes | **−$6,250/mes** | **2.2x más rápido** |
| En pesos: Rentabilidad | +$7,833/mes | **−$41,000/mes** | **5.2x más rápido** |

**Se está destruyendo rentabilidad 5.2 veces más rápido de lo que se construyó.** Siete meses para subir de $45K a $92K; dos meses para bajar de $92K a $10K.

### Indicador adelantado que nadie vio

`Nuevos_Clientes` giró en **julio** (25→22, −12%), un mes antes que el MRR. Y el `ingreso por cliente nuevo` tocó piso en **junio** ($6,600, −52% vs enero) — dos meses antes del colapso. **Ambos eran visibles y ninguno estaba en un tablero.** Esto es lo que justifica el §7.

---

## 2. PROYECCIÓN OCT–DIC 2026: TRES ESCENARIOS

**Nota de limitación:** el CSV **no contiene saldo de caja inicial**. Sin ese dato **no es posible calcular runway en meses**. Lo que sí se calcula con precisión es la **quema mensual**, que es lo que sigue. *Dato faltante crítico #1: saldo de caja y línea de crédito disponible al 30-sep-2026.*

### Escenario A — PESIMISTA (sin intervención, la tendencia geométrica continúa)
*Supuestos: ingresos −29.29%/mes (tasa observada jul→sep), MRR −12.10%/mes, churn +0.1pp/mes, costos operativos rígidos en $75,000.*

| | Oct | Nov | Dic | **Q4 total** |
|---|---|---|---|---|
| MRR | 37,360 | 32,842 | 28,870 | — |
| Churn | 4.3% | 4.4% | 4.5% | — |
| Ingresos brutos | 60,104 | 42,500 | 30,052 | **132,656** |
| Costos operativos | 75,000 | 75,000 | 75,000 | 225,000 |
| **Rentabilidad operativa** | **−14,896** | **−32,500** | **−44,948** | **−92,344** |
| Margen % | −24.8% | −76.5% | −149.6% | −69.6% |

- **Break-even operativo se cruza durante octubre.** Los ingresos tocan los $75,000 de costo fijo alrededor del **22 de octubre de 2026**.
- Diciembre 2026 factura **$30,052**: el 17.7% del pico de julio y menos de la mitad de la peor cifra de 2026 hasta hoy.
- **Con el gasto de medios encima:**

| Gasto de medios asumido | Quema Q4 |
|---|---|
| Run-rate **medido** de Sep ($34,294/mes) | **−$195,226** |
| Run-rate del **panel de presupuesto** ($551,000/mes) | **−$1,745,344** |

> Bajo la lectura del panel, la operación necesita **$1.75 millones de caja** solo para llegar al 31 de diciembre. Ese número, y no el MRR, es la emergencia.

### Escenario B — BASE (la caída se amortigua, no se revierte)
*Supuestos: ingresos −12%/mes, MRR −5%/mes, churn estable en 4.2%, recorte de costos operativos a $70,000 desde noviembre.*

| | Oct | Nov | Dic | **Q4 total** |
|---|---|---|---|---|
| MRR | 40,375 | 38,356 | 36,438 | — |
| Ingresos brutos | 74,800 | 65,824 | 57,925 | **198,549** |
| Costos operativos | 75,000 | 70,000 | 70,000 | 215,000 |
| **Rentabilidad operativa** | **−200** | **−4,176** | **−12,075** | **−16,451** |

- Sin quema catastrófica, pero **cero recuperación**: el negocio entra a 2027 con un MRR 34% por debajo del pico y una utilidad estructuralmente negativa.
- Este escenario es el "no hacer nada pero apretarse el cinturón". **Es un año perdido, no una solución.**

### Escenario C — CON INTERVENCIÓN
*Supuestos explícitos: (a) recorte de costos operativos −11.5% a $69,000 desde octubre; (b) programa de retención baja el churn de 4.2% a 3.0%; (c) medios recortados y re-enfocados a $60,000/mes (§6); (d) se cierran 2 deals del pipeline actual —Industrias HR en nov e Logística Sur en dic— a un TCV de $350,000 cada uno facturado en 4 meses [inferencia de precio, ver §5]; (e) +$3,000–4,000/mes de MRR nuevo del Pilar 02.*

| | Oct | Nov | Dic | **Q4 total** |
|---|---|---|---|---|
| MRR | 44,225 | 46,900 | 49,500 | — |
| Churn | 3.5% | 3.0% | 3.0% | — |
| Ingresos base (decayendo) | 74,800 | 68,000 | 62,000 | 204,800 |
| + Facturación deal #1 (HR) | — | 87,500 | 87,500 | 175,000 |
| + Facturación deal #2 (LogSur) | — | — | 43,750 | 43,750 |
| **Ingresos brutos** | **74,800** | **155,500** | **193,250** | **423,550** |
| Costos operativos | 69,000 | 74,000 | 82,000 | 225,000 |
| **Rentabilidad operativa** | **5,800** | **81,500** | **111,250** | **198,550** |
| Gasto de medios | 60,000 | 60,000 | 60,000 | 180,000 |
| **Margen de contribución REAL** | **−54,200** | **+21,500** | **+51,250** | **+18,550** |

- **Se recupera el umbral de $92,000/mes de rentabilidad operativa en diciembre** ($111,250), y se roza en noviembre ($81,500).
- **El MRR de $55,000 NO se recupera en Q4.** Con net-new MRR de $4,090/mes se alcanza en **febrero 2027** (ver §4).
- **Octubre es negativo en los tres escenarios.** No hay intervención que arregle octubre: el ciclo de venta (45-60 días desde hoy) lo impide. Octubre hay que financiarlo, no salvarlo.

**Delta entre escenarios (rentabilidad Q4):** Pesimista −$92,344 | Base −$16,451 | Intervención **+$198,550**. **El spread entre no hacer nada y actuar es de $290,894 MXN en 90 días.**

---

## 3. CAC, LTV Y RATIO LTV/CAC

### 3.1 CAC por canal — Sep 1-13, 2026

| Canal | Gasto (lectura medida) | Leads atribuidos | CPL | Ventas | **CAC real** |
|---|---|---|---|---|---|
| Google Ads (cpc) | $13,621.35 | 6 | **$2,270.23** | 0 | **∞ (indefinido)** |
| Meta Ads | $1,239.23 | **0** | **∞** | 0 | ∞ |
| LinkedIn Ads | $24,999.71 | **0** | **∞** | 0 | ∞ |
| Google orgánico | **$0 de medios** | 13 (50% del total) | **Dato faltante** | 0 | Dato faltante |
| Referrals de herramientas | $0 | 4 | n/a | 0 | **No son leads** |

**Tres hallazgos de auditoría en esta tabla:**

- **Los 4 "leads" de referral son falsos positivos.** `tagassistant.google.com` es el depurador de Google Tag Manager, `insights.hotjar.com` es el panel de Hotjar y `webflow.com` es el editor del CMS. **Son sesiones del propio equipo contadas como leads.** [inferencia, pero la naturaleza de esos tres dominios no admite otra lectura]. Leads reales ≈ **22, no 26**. El CPL mezclado sube de $571.56 a **$675.48**.
- **Gap de atribución del 11.5%:** la tabla de fuentes suma 23 usuarios (1+1+1+1+13+6) contra un "Grand total" de 26. **3 leads sin fuente.**
- **Tres cifras distintas para el mismo dato:** el panel SEO dice **21 leads orgánicos en español**, la tabla de fuentes dice **13 google/organic**, y la tabla de leads atribuibles nombra **1**. No se puede hacer marketing basado en datos con tres versiones del mismo número.

**LinkedIn es el mayor riesgo de control interno de toda la operación:** $24,999.71 gastados en 13 días, **sin un solo dato de impresiones, clicks, CTR, CPC o conversiones en el reporte**, y cero leads atribuidos. Es el 17.7% del gasto medible y es una caja negra. En paralelo, el crecimiento orgánico de LinkedIn cayó de +81 seguidores (abr) a **+4** (jun).

### 3.2 CAC por trimestre (costo de marketing ÷ ventas cerradas)

| Periodo | Gasto mkt | Ventas | **CAC por venta** | TCV total | Ticket promedio | CAC como % del ticket |
|---|---|---|---|---|---|---|
| Q1 2026 | $189,714 | 2 | **$94,857** | $7,820,942 | $3,910,471 | 2.43% |
| Q2 2026 | $102,712 | **0** | **∞** (costo hundido) | $0 | — | — |
| Q3 2026 (a Sep 13) | $14,861 medido / $235,690 panel | **0** | **∞** | $0 | — | — |
| **2026 YTD** | **$292,426** | **2** | **$146,213** | $7,820,942 | $3,910,471 | 3.74% |
| 2025 | $785,887 | ~10-11 [inferencia]¹ | **~$71,444–78,589** | $16,992,182 | ~$1,545,653–1,699,218 | ~4.6% |
| 2024 | $379,598 | n/d | n/d | $2,804,092.60 | n/d | n/d |

¹ *El funnel 2025 en el PDF está corrupto en la extracción de texto; las ventas legibles suman 9 en 6 meses. Cifra marcada como inferencia.*

**La comparación 2025 vs 2026 es el diagnóstico completo:**
- Ticket promedio: **$1.7M → $3.9M (+130%)** ✅
- Número de ventas: **~10-11 → 2 (−82%)** ❌
- Venta total: **$16.99M → $7.82M (−54%)** ❌
- **CAC por venta: ~$78,589 → $146,213 (+86%)** ❌

**El problema no es la economía unitaria. Es el throughput.** Se aprendió a vender más caro y se desaprendió a vender seguido.

### 3.3 LTV — qué se puede calcular y qué falta

**NO SE PUEDE calcular el LTV por cliente.** Datos faltantes, nombrados con precisión:

| # | Dato faltante | Por qué bloquea el cálculo |
|---|---|---|
| **1** | **Número de cuentas activas por mes** | Sin base activa no hay ARPA (MRR ÷ cuentas). Sin ARPA no hay LTV. |
| **2** | **Margen bruto por cuenta** | LTV correcto = ARPA × margen bruto × vida media. Solo hay margen agregado. |
| **3** | **Definición de `Nuevos_Clientes`** | El CSV reporta **130 clientes nuevos en 9 meses**; el reporte de marketing reporta **2 ventas en 8 meses**. Si ambos fueran logos de contrato, el ARPA implícito sería de ~$150/mes, absurdo para B2B. **Los dos libros son irreconciliables.** |
| **4** | **Saldo de caja al 30-sep-2026** | Bloquea el cálculo de runway (§2). |
| **5** | **Gasto de producción de contenido/SEO** | Bloquea el CAC del canal que entrega el 50% de los leads. |

**Lo que SÍ se puede calcular: el valor del libro de MRR (perpetuidad sin crecimiento, MRR ÷ churn).**

| | Jul 2026 | Ago 2026 | Sep 2026 |
|---|---|---|---|
| MRR | 55,000 | 46,000 | 42,500 |
| Churn | 2.5% | 4.1% | 4.2% |
| **Valor del libro** | **$2,200,000** | **$1,121,951** | **$1,011,905** |
| Vida media del cliente | **40.0 meses** | 24.4 meses | **23.8 meses** |

**Destrucción de valor jul→sep: −$1,188,095 MXN (−54.0%) en dos meses.** Descomposición:
- Atribuible a la **caída de MRR** (a churn constante): **−$500,000 (42%)**
- Atribuible al **alza del churn** (a MRR constante): **−$688,095 (58%)**

> **El churn destruyó más valor que la caída de ventas.** La vida media del cliente se acortó 16.2 meses (−40.5%). Esto reordena la prioridad: **retención antes que adquisición.** Un peso invertido en salvar el libro actual rinde más que un peso en pauta — y §4 lo cuantifica.

**Ratio LTV/CAC:** no calculable a nivel cuenta (falta ARPA). Dos proxies, ambos con advertencia:

| Proxy | Cálculo | Resultado | Validez |
|---|---|---|---|
| Libro MRR ÷ CAC por venta | $1,011,905 / $146,213 | **6.9x** | ❌ Mezcla el libro completo contra el costo de una venta. No es LTV/CAC. |
| **TCV promedio ÷ CAC por venta** | $3,910,471 / $146,213 | **26.7x** | ⚠️ Válido como economía unitaria de proyecto, **pero irrelevante**: un ratio de 26.7x sobre 2 transacciones en 8 meses no es un negocio, es una anécdota. |

**Conclusión del CFO sobre economía unitaria:** cuando BluePixel cierra, cierra espectacularmente bien (26.7x). **El problema es exclusivamente de frecuencia.** Toda la intervención debe atacar throughput de propuestas, no eficiencia de costo.

---

## 4. PIPELINE REQUERIDO OCT 2026 – MAR 2027

**Objetivo doble:** rentabilidad de **$92,000/mes** (nivel julio) y **MRR de $55,000** para marzo 2027.

### 4.1 El componente MRR

Con la ecuación `MRR(n+1) = MRR(n) × (1 − churn) + MRR_nuevo`, partiendo de $42,500 y llegando a $55,000 en 6 meses:

| Churn asumido | MRR nuevo requerido/mes | Acumulado a vender |
|---|---|---|
| **4.2% (actual)** | **$4,090** | **$24,540** |
| 2.5% (nivel julio) | $3,280 | $19,680 |

> **Bajar el churn de 4.2% a 2.5% reduce la venta nueva requerida en 19.8%.** Cuesta menos retener que vender: **$4,860 MXN/mes de contratos que no hay que salir a buscar.**

### 4.2 El componente proyecto

Rampa de ingresos brutos necesaria (para llegar a $167,000/mes en marzo = $92,000 rentabilidad + $75,000 costos):

| | Oct | Nov | Dic | Ene | Feb | Mar | **Total 6m** |
|---|---|---|---|---|---|---|---|
| **Ingresos objetivo** | 98,667 | 112,333 | 126,000 | 139,667 | 153,333 | **167,000** | **797,000** |
| Escenario base (sin acción) | 74,800 | 65,824 | 57,925 | 50,974 | 44,857 | 39,474 | 333,854 |
| **Gap a crear** | 23,867 | 46,509 | 68,075 | 88,693 | 108,476 | **127,526** | **$463,146** |
| del cual MRR | 45,000 | 47,500 | 50,000 | 52,000 | 53,500 | 55,000 | 303,000 |
| **del cual PROYECTO** | | | | | | | **$494,000** |

**TCV a firmar oct–mar: $988,000 MXN** *(= $494,000 de facturación en ventana ÷ 50% de TCV reconocido dentro de la ventana [inferencia: proyectos de 3-4 meses con arranque escalonado])*.

### 4.3 LA TABLA QUE CIERRA EL ARGUMENTO: deals necesarios por ticket

*Supuestos de conversión: 7.69% propuesta→venta (la mejor tasa observada, Q1 2026) y 20.1% lead→propuesta (promedio 2026 YTD: 41 propuestas / 204 leads). Run-rate actual de leads: 18-20/mes.*

| Ticket promedio (TCV) | Deals necesarios | Propuestas necesarias | Leads necesarios (6m) | **Leads/mes requeridos** | vs run-rate actual | ¿Viable? |
|---|---|---|---|---|---|---|
| **$30,000** (el que atrae el posicionamiento actual) | **33** | 429 | 2,145 | **358** | **18x** | ❌ **IMPOSIBLE** |
| $150,000 | 7 | 91 | 455 | 76 | 4.0x | ❌ Inviable |
| **$350,000** (Pilar 01 + sprints) | **3** | 39 | 195 | **33** | 1.7x | ⚠️ Estirado |
| **$850,000** (BUILD+EVOLVE) | **2** | 26 | 130 | **22** | **1.1x** | ✅ **AL ALCANCE** |
| $3,910,471 (ticket real Q1 2026) | 1 | 13 | 65 | 11 | 0.6x | ✅ Holgado |

*Con una tasa de cierre enterprise sana del 20% [inferencia], el ticket de $850,000 requiere solo **10 propuestas y 50 leads en 6 meses = 8 leads/mes**.*

> **Esta tabla es la prueba financiera de la tesis del "desfase de información".** Con 18-20 leads/mes, el ticket de $20-40K exige 18 veces más volumen del que existe. El reposicionamiento hacia agentes IA / MCP / arquitectura crítica no es una decisión de marca: **es la única configuración del sistema en la que los números cierran.** Cada mes que se sigue comunicando "agencia de diseño UX/UI" se está comprando la columna imposible.

### 4.4 Cobertura de pipeline requerida

| Tasa de cierre asumida | Pipeline bruto necesario (TCV) |
|---|---|
| 7.69% (Q1 2026, la mejor observada) | **$12,847,000** |
| 4.88% (2026 YTD) | $20,245,000 |
| 20% (objetivo enterprise) [inferencia] | **$4,940,000** |
| 2% (la tasa 1:50 que documenta la tesis) | $49,400,000 |

**Meta operativa recomendada: $4.94M de pipeline bruto a construir oct–mar, con tasa de cierre objetivo de 20%.** Eso exige elevar la tasa de cierre 2.6x sobre la de Q1 — lo cual solo es posible cambiando el ICP que entra, no el argumentario de salida.

---

## 5. VALORACIÓN Y PRIORIZACIÓN DEL PIPELINE ACTUAL

**Fuente:** `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Archivos_CSV/prospectos_q3_2026.csv`

**Valoración TCV [inferencia, anclada en los 3 Pilares de contratación]:** Presupuesto Alto = $850,000 (BUILD+EVOLVE) | Medio = $350,000 (Diagnóstico + 2 sprints) | Bajo = $60,000 (auditoría ligera).

| # | Cuenta | Contacto / Puesto | Interés | Días sin contacto | TCV [inf.] | **P(cierre)** | **Valor esperado** | Ventana | Veredicto |
|---|---|---|---|---|---|---|---|---|---|
| **1** | **RetailX** | Carlos Ruiz, **CTO** | Migración Cloud | **13** | 850,000 | **30%** | **$255,000** | Q4 2026 | 🟢 **PRIORIDAD 1** |
| **2** | **Banco Nacional** | Pedro Sánchez, **VP Innovación** | **Agente IA** | **12** | 850,000 | **20%** | **$170,000** | **Q1–Q2 2027** | 🟢 **PRIORIDAD 2** |
| **3** | **Industrias HR** | Hugo Ramírez, **CEO** | **FutureProof** | 21 | 350,000 | **35%** | **$122,500** | **Q4 2026** | 🟢 **PRIORIDAD 3 (cierre más rápido)** |
| **4** | **Logística Sur** | Ana Gómez, **Directora Ops** | Software WMS | 14 | 350,000 | **25%** | **$87,500** | Q4 2026 | 🟡 **PRIORIDAD 4** |
| 5 | Constructora Alfa | Juan Pérez, Gerente de **Compras** | **Maquinaria Pesada** | **31** | 850,000 | **5%** | $42,500 | — | 🔴 **Calificar o matar** |
| 6 | Tienda Online | Laura Torres, **Marketing** | Auditoría UX | 26 | 60,000 | 8% | $4,800 | — | 🔴 **Descalificar** |
| 7 | Startup XYZ | María López, Fundadora | MVP | **67** | 60,000 | 3% | $1,800 | — | 🔴 **Cerrar como perdido** |
| | | | | **26.3 prom.** | **$3,370,000** | | **$684,100** | | |

### Diagnóstico del pipeline

- **Cobertura bruta:** $3,370,000 / $988,000 requeridos = **3.4x** ✅
- **Cobertura ponderada:** $684,100 / $988,000 = **0.69x** ❌
- **Cobertura ponderada solo Q4** (excluyendo Banco Nacional, que cierra en 2027): **$514,100 = 0.52x** ❌
- **Déficit de valor esperado: $303,900.** A una tasa de cierre del 20%, exige generar **$1,519,500 MXN de pipeline nuevo** en Q4.
- **Valor en riesgo por antigüedad (>21 días sin contacto): $1,320,000 de TCV = 39% del pipeline bruto.** Con la tasa de contacto de agosto (44.44%), la mitad de eso ya está muerto [inferencia].
- **0 propuestas en todo Q3.** Un pipeline de 7 registros sin una sola propuesta emitida en 11 semanas no es un pipeline: es una lista de contactos.

### Higiene de CRM — bloqueante para el forecast

Los 7 registros **carecen de tres campos sin los cuales no existe forecast**: `Monto_MXN`, `Etapa`, `Fecha_Cierre_Estimada`. Además Banco Nacional —el ICP perfecto— **no tiene teléfono**. *Acción: agregar esos 4 campos antes del viernes 18 de septiembre. Responsable: Fabian.*

### Jugadas de ESTA SEMANA (mar 15 – vie 18 de septiembre)

**🟢 RetailX — Carlos Ruiz, CTO — Pablo Gómez — Martes 15**
Correo + llamada al 33-1122-3344. **No vender "migración cloud".** Reencuadrar: "migrar a la nube una arquitectura que no está lista para agentes es pagar dos veces". Enviar **Diagnóstico FutureProof de 1 página** específico a deuda de arquitectura, con la **demo ERP Bridge** como prueba viva (no PDF, link a la demo). Pedir 30 min jueves 17 o viernes 18. *Objetivo: propuesta emitida antes del 25-sep. Es el mayor EV del pipeline ($255,000).*

**🟢 Industrias HR — Hugo Ramírez, CEO — Pablo Gómez — Martes 15**
Llamada directa al 33-9988-7766, **hoy mismo**. Este prospecto **pidió "FutureProof" por su nombre**: conoce la oferta, tiene el intent más alto del pipeline y es CEO (decisor único, ciclo corto). **Enviar propuesta del Pilar 01 con precio y fecha de arranque el mismo día de la llamada.** *Verificar además si el artículo "HIR" en la cola de aprobación SEO ("Aprobación artículo HIR" en Acciones en curso) corresponde a esta cuenta [inferencia] — si es así, es el mejor pretexto de contacto disponible. Objetivo: propuesta firmada antes del 30-sep. Es el cierre más rápido del pipeline.*

**🟢 Banco Nacional — Pedro Sánchez, VP Innovación — Fabian + Leo (NO delegar a ventas) — Miércoles 16**
Es el ICP exacto de la tesis deep-tech: VP de Innovación + banca + "Agente IA" + presupuesto Alto. **Primero conseguir el teléfono** vía LinkedIn/Apollo — el módulo `apollo_enrichment` del `bluepixel_engine` ya existe, úsalo. **No ofrecer un proyecto.** Ofrecer un **"Agent Readiness Review" de 45 minutos** con las demos **Legal Onboarding KYC** y **Triage RAG** (las dos relevantes a compliance bancario). *Expectativa realista: cierre Q1-Q2 2027. No contarlo en el forecast de Q4.*

**🟡 Logística Sur — Ana Gómez, Directora de Operaciones — José de Buen — Miércoles 16**
Llamada al 81-9876-5432. Directora de Ops = comprador económico del Cluster Automatización, con dolor operativo real. **Jugada de reencuadre:** convertir "Software WMS" (build largo, caro, competido) en **"Diagnóstico FutureProof de flujo logístico"** (entrada rápida, 2-4 semanas, Pilar 01). Apoyo: demo ERP Bridge + caso vertical FR Medical.

**🔴 Constructora Alfa — José de Buen — Jueves 17 — UNA sola llamada de 10 minutos**
Tres preguntas de calificación: (1) ¿quién es el dueño del problema de sistemas en la empresa? (2) ¿hay presupuesto de tecnología asignado en 2026? (3) ¿"Maquinaria Pesada" es lo que venden o lo que quieren digitalizar? **Si no hay ruta a un decisor técnico u operativo en esa llamada, cerrar como Perdido–Mal Fit.** Un Gerente de Compras pidiendo "Maquinaria Pesada" no es un lead de BluePixel; es evidencia de segmentación de pauta rota.

**🔴 Tienda Online y Startup XYZ — Cerrar hoy**
Ambos son exactamente el perfil que la tesis identifica como destructor de la tasa de cierre: rol no decisor / presupuesto Bajo / servicio del posicionamiento viejo. **EV combinado: $6,600.** Mover a nurture automatizado y sacarlos del reporte de ventas.

> **El costo de oportunidad es el argumento:** mantener vivos los 3 prospectos de bajo fit consume ~6 horas/semana de vendedor senior [inferencia] contra un EV combinado de **$6,600**. Esas mismas 6 horas sobre RetailX operan sobre un EV de **$255,000**: un rendimiento **38 veces mayor por hora invertida.**

---

## 6. REASIGNACIÓN DEL PRESUPUESTO DE MARKETING — Q4 2026

### 6.1 ⚠️ PRIMERO: hay una discrepancia de 14x dentro del propio reporte

El reporte de campañas contiene **dos cifras irreconciliables para el mismo periodo (Sep 1-13)**:

| Canal | Panel "Evolución del presupuesto" | Panel de desempeño de la plataforma | Factor |
|---|---|---|---|
| Google Ads | **$191,807.92** | **$13,621.35** (317 clicks × $42.97 CPC ✓) | **14.1x** |
| Meta Ads | **$5,531.21** | **$1,239.23** | **4.5x** |
| LinkedIn Ads | **$24,999.71** | **sin panel de desempeño** | ∞ |
| **Total** | **$235,690** (de los cuales $13,352 sin asignar a canal) | **$14,860.58** | **15.9x** |

[inferencia] La lectura más probable es que el panel de presupuesto reporta **acumulado anual o presupuesto comprometido**, mientras que $13,621.35 es el **gasto real de medios Sep 1-13** (se valida aritméticamente: 317 clicks × $42.97 = $13,621.49 ✓).

> **ACCIÓN CERO, ANTES DE CUALQUIER REASIGNACIÓN: Fabian solicita a Diana Cardoso (Rocketing) por escrito, con fecha límite viernes 18 de septiembre, la conciliación factura-por-factura de Sep 1-13 por plataforma.** La diferencia entre las dos lecturas es de **$220,829 MXN en 13 días** — más del doble de todo el gasto de marketing de Q2. Ninguna decisión de presupuesto es defendible hasta cerrar este número.

Bajo la lectura del panel, el CPL mezclado es de **$10,713 por lead** ($235,690 ÷ 22 leads reales) para **0 propuestas y 0 ventas**.

### 6.2 Dónde se está quemando el dinero (diagnóstico por campaña)

**Google — las 7 líneas suman exactamente $191,807.92 ✓:**

| Concepto | Gasto | % del gasto Google | Veredicto |
|---|---|---|---|
| **Brand** | **$103,957.04** | **54.2%** | 🔴 **CANIBALIZACIÓN PURA** |
| Desarrollo Web | $23,849.07 | 12.4% | 🔴 Cortar |
| Cartera de Servicios | $13,079.43 | 6.8% | ⚠️ **Sobregiro +50.3%** vs presupuesto ($8,700) |
| Desarrollo de Apps | $4,088.87 | 2.1% | ⚠️ Sobregiro +13.6% |
| Resto (3 líneas) | $46,833.51 | 24.4% | Consolidar |

**El hallazgo #1: $103,957 (54.2%) en campañas de MARCA.** BluePixel ya rankea **en posición 1-2 orgánicamente** en toda la familia de marca ("bluepixel ia" #1, "bluepixel modernización" #1, "bluepixel agencia digital" #2, "bluepixel digital" #2, "bluepixel inteligencia artificial" #2). **Se está pagando por tráfico que ya se gana gratis.** Además, las campañas de marca capturan demanda que *ya existía* — no crean pipeline nuevo, que es exactamente el problema del negocio.

**El hallazgo #2: fragmentación operativa terminal.** 5 campañas concentran $12,387 de $13,621 (90.9%). **Las otras 30 campañas gastan $1,234 entre todas = $41 por campaña.** Ninguna sale de la fase de aprendizaje del algoritmo. **35 campañas para un presupuesto medido de $13.6K es un error de gestión de la agencia.**

**Campaña por campaña (gasto derivado de clicks × CPC):**

| Campaña | Gasto | Conv. | **CPA** | CTR | Veredicto |
|---|---|---|---|---|---|
| IA Operacional Enterprise \| RCKT | $4,537.20 | 1 | $4,537 | 14.1% | 🟢 **ESCALAR** — mensaje correcto (deep tech), mayor volumen de clicks (199), CTR sano |
| BluePixel \| RCKT (marca) | $499.50 | 1 | $500 | 37.82% | 🟡 Reducir a mínimo defensivo |
| WebDev BP \| RCKT May26 PT2 | $2,783.25 | **0** | ∞ | 9.16% | 🔴 **MATAR** — CPC $111.33, cero resultado |
| Competidores \| RCKT | $2,017.79 | **0** | ∞ | **2.8%** | 🔴 **MATAR** — el peor CTR; el copy es irrelevante para quien busca competidores |
| App Dev BP \| RCKT May26 PT2 | $2,549.30 | 1 | $2,549 | 13% | 🔴 **CPC de $196.10 es insostenible** |

**Meta:** de $1,239.23, la campaña "Always On" genera 260 vistas de landing a CPC $1.42 (aceptable). Las **3 publicaciones de Instagram impulsadas gastaron $208.74 para generar 3 vistas de landing = $69.58 por vista**. 🔴 **MATAR.** Y Meta produjo **0 leads atribuibles** en la tabla de fuentes. Contexto: los 16,448 seguidores de Instagram tienen un alcance por post de 123-143 y el balance de seguidores muestra **19,624 perdidos en agosto 2025** — audiencia inflada, no-ICP. **No hay nada que retargetear orgánicamente ahí.**

**LinkedIn:** $24,999.71 sin ningún dato de desempeño. Es el canal donde vive el ICP (VP Innovación, CTO, Director de Ops) **y es el único sin medición.**

### 6.3 Propuesta de asignación Q4 2026

**Sobre del trimestre: $180,000 MXN ($60,000/mes).** Justificación económica: es el **nivel de Q1 2026 ($189,714) — el único trimestre de 2026 que produjo ventas** — con −5% de ajuste por la caída de ingresos. Al CPL medido de Google ($2,270/conversión), $180,000 compran **79 conversiones**, muy por encima de los ~50 leads que exige el §4.4. **No hace falta más dinero: hace falta mejor targeting.**

| Canal / Línea | Sep 1-13 (panel) | **Q4 propuesto** | % | Justificación económica |
|---|---|---|---|---|
| **Google — Clusters** (Apps / Automatización / Agentización) | ~$46,000 | **$81,000** | **45%** | Consolidar 35 campañas → **3** (una por Cluster). Escalar el copy de "IA Operacional Enterprise", la única campaña con volumen + CTR sano. Es la columna de $850K de la tabla §4.3. |
| **LinkedIn — ABM de lista cerrada** | $24,999.71 | **$36,000** | **20%** | 🔒 **CONDICIONADO.** 100% sobre 200 cuentas objetivo enriquecidas con el módulo `apollo_enrichment` del `bluepixel_engine`. **Si al día 30 no hay tracking de conversión funcionando, se corta a $0.** Es el único canal donde vive el comprador de $850K. |
| **Contenido / SEO deep-tech** (producción) | $0 identificable | **$27,000** | **15%** | `google/organic` entrega **13 de 26 leads (50%) a costo de medios $0**. Es el canal con mejor economía y está sin financiar. **Objetivo específico:** las keywords comerciales de alto valor están en posiciones **41-61** ("ia automatización operaciones" 41, "ia en stack tecnológico" 59, "ia integrada software empresarial" 61). Hoy los LLMs citan a BluePixel como fuente de **UX/UI básico** (698 impresiones en "diseño-ux-ui-que-es-guia"), no como proveedor de ingeniería IA. Corregir eso es el activo compuesto. |
| **Google — Marca (defensivo)** | **$103,957.04** | **$9,000** | 5% | **RECORTE DE −91% del run-rate.** Solo exact-match defensivo contra competidores que pujen por "bluepixel". Ya se rankea #1-2 orgánico. |
| **Google — Competidores (reconstruida)** | $2,017.79 | **$9,000** | 5% | Relanzar con copy de agentes/MCP. CTR de 2.8% prueba que el mensaje actual (UX/web) no responde a esa intención. |
| **Meta — solo retargeting** | $5,531.21 | **$9,000** | 5% | Exclusivamente retargeting de visitantes de las **10 landing pages** y las **4 demos PLG**. **Matar las publicaciones impulsadas de Instagram** ($69.58/vista, audiencia no-ICP). |
| **Reserva / experimentos** | $0 | **$9,000** | 5% | |
| **TOTAL** | | **$180,000** | 100% | |

### 6.4 Impacto económico del recorte

| Escenario de lectura | Run-rate actual | Q4 a run-rate | Q4 propuesto | **Impacto** |
|---|---|---|---|---|
| **Panel de presupuesto** ($18,130/día) | $551,000/mes | $1,653,000 | $180,000 | **Ahorro de $1,473,000** |
| **Gasto medido** ($1,143/día) | $34,294/mes | $102,881 | $180,000 | Inversión adicional de $77,119 |

**Los 3 recortes específicos, en orden de tamaño:**
1. **Google Marca: −$103,957 del run-rate de 13 días.** Tráfico ya ganado orgánicamente en posición 1-2.
2. **Consolidar 35 campañas → 5.** Las 30 campañas de cola larga gastan $41 cada una; ninguna puede optimizar.
3. **Matar WebDev BP + Competidores (actual) + publicaciones impulsadas de IG: $5,010 de gasto medido con 0 conversiones.**

---

## 7. LOS 3 INDICADORES SEMANALES PARA MARÍA Y LEO

Los tres actuales (leads, MRR, rentabilidad) son **rezagados**: para cuando se movieron en agosto, el daño ya estaba hecho. Estos tres son adelantados y se leen en 90 segundos.

---

### 📊 KPI 1 — MARGEN DE CONTRIBUCIÓN REAL SEMANAL
`(Ingresos brutos − Costos operativos − Gasto de medios) ÷ 4.33`

| | Valor |
|---|---|
| **Hoy (lectura medida)** | **−$5,611/semana** |
| **Hoy (lectura del panel)** | **−$124,942/semana** |
| **Meta Q4 (escenario C)** | **+$1,428/semana en promedio; positivo desde la semana del 3-nov** |
| 🚨 **Alarma** | **Negativo 2 semanas consecutivas → congelar todo medio no-marca hasta revisión** |

**Por qué este:** es el único número que muestra el costo total de operar, y hoy **nadie lo está viendo**. La "Rentabilidad" del CSV excluye el gasto de marketing; con él incluido, **Q1 2026 fue negativo (−$41,714)** aunque el reporte celebra un ROI de 4,022%.

---

### 📊 KPI 2 — NET NEW MRR SEMANAL
`MRR nuevo firmado − MRR perdido por churn` (en MXN, no en %)

| | Valor |
|---|---|
| **Hoy (septiembre)** | **−$808/semana** |
| Agosto | −$2,079/semana |
| **Meta** | **+$946/semana** (= $4,090/mes, el requerido en §4.1 para recuperar $55,000 en marzo) |
| 🚨 **Alarma** | **Negativo 3 semanas seguidas → activar programa de retención sobre el libro de $42,500** |

**Por qué este:** el churn destruyó **$688,095 de valor de libro** en dos meses — **58% de toda la destrucción de valor**, más que la caída de ventas. Y bajar el churn de 4.2% a 2.5% reduce la venta nueva requerida en **$4,860/mes**. Es el peso que más rinde de toda la operación.

---

### 📊 KPI 3 — PIPELINE PONDERADO ICP CREADO EN LA SEMANA
`Σ (TCV × probabilidad) de oportunidades nuevas`, solo cuentas con ticket ≥ $350,000 y contacto a nivel C-level / VP / Director

| | Valor |
|---|---|
| **Hoy (stock total)** | **$684,100** — cobertura de **0.69x** contra los $988,000 requeridos |
| **Hoy (stock Q4, excl. Banco Nacional)** | $514,100 — cobertura de **0.52x** |
| **Déficit** | **$303,900** |
| **Meta** | **+$25,325/semana de EV nuevo durante las 12 semanas de Q4** |
| 🚨 **Alarma** | **0 propuestas nuevas emitidas en la semana** — *ya van **11 semanas consecutivas** en cero (todo Q3)* |

**Por qué este:** el filtro de **≥$350,000 y nivel C** es deliberado. Es el mecanismo que impide que el reporte vuelva a verse sano contando leads de $30,000 que, según la tabla §4.3, exigirían 358 leads/mes para sostener el negocio. **Este KPI hace que el desfase de posicionamiento aparezca en el reporte financiero la semana en que ocurre, no seis meses después.**

---

## ANEXO — DATOS FALTANTES QUE BLOQUEAN ANÁLISIS (por orden de urgencia)

| # | Dato | Bloquea | Responsable / Fecha |
|---|---|---|---|
| 1 | **Conciliación factura-por-factura de medios Sep 1-13** (discrepancia de $220,829) | Toda decisión de presupuesto Q4 | Diana Cardoso / Rocketing — **vie 18 sep** |
| 2 | **Saldo de caja y línea de crédito al 30-sep-2026** | Cálculo de runway en meses | Finanzas / María — **vie 18 sep** |
| 3 | **Número de cuentas activas por mes 2026** | ARPA → LTV → ratio LTV/CAC | Finanzas — **mar 22 sep** |
| 4 | **Definición de `Nuevos_Clientes`** (130 en 9 meses vs 2 ventas en el reporte de marketing) | Reconciliación de los dos libros; validez de todo el ROI reportado | Fabian + Leo — **mar 22 sep** |
| 5 | **Costo de producción de contenido/SEO** | CAC del canal que entrega el 50% de los leads | Leo — **mar 22 sep** |
| 6 | **Campos `Monto_MXN`, `Etapa`, `Fecha_Cierre_Estimada` en CRM** | Cualquier forecast de ventas | Fabian — **vie 18 sep** |
| 7 | **Panel de desempeño de LinkedIn Ads** ($24,999.71 sin medir) | CAC de LinkedIn; decisión de continuidad | Diana Cardoso — **vie 18 sep** |

**Inconsistencias de datos detectadas y no resueltas:** (a) tres cifras distintas para leads orgánicos de septiembre (21 / 13 / 1); (b) 3 de 26 leads sin fuente asignada (gap de atribución 11.5%); (c) 4 "leads" que son referrals de herramientas internas (Tag Assistant, Hotjar Insights, Webflow) — leads reales ≈ 22; (d) el funnel 2025 del PDF está corrupto en la extracción, impidiendo el cálculo exacto del CAC 2025; (e) $13,352 del total de $235,690 no está asignado a ningún canal.