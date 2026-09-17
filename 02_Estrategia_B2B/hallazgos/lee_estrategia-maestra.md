# AUDITORÍA DE ESTRATEGIA Y POSICIONAMIENTO — BLUEPIXEL 2026
**Auditor:** RevOps | **Fecha:** 15 sep 2026 (martes) | **Corpus auditado:** 4 documentos canónicos de `02_Estrategia_B2B/` + verificación cruzada contra `AUDITORIA_Y_PLAN_DE_ACCION_JUNTA_ROCKETING.md`, `GUIA_JUNTA_4PM_ESTRATEGIA_GOOGLE_ADS_3_PILARES.md`, `ESTRATEGIA_PAUTA_Y_CAMPAÑAS_ADS_2026.md` y contra los activos reales en disco.

---

## 0. VEREDICTO EJECUTIVO

1. **El diagnóstico es correcto; la tesis de posicionamiento es correcta; la evidencia que la sostiene no existe.** El "desfase de información" es real y está probado por datos independientes (los LLMs citan a BluePixel como glosario de UX/UI básico; las keywords ganadoras son todas UX/UI o marca; las comerciales de alto valor están en posición 41-61). Pero el discurso construido encima —grado militar, IMPATH™, SLA 99.9%, "matemáticamente imposible alucinar", "70% de conversión post-diagnóstico"— es 100% no verificable y va a ser destruido en la primera due diligence de un CTO corporativo.

2. **La estrategia se presentó como ejecutable y no lo es: el 64% de la "Proof of Capability" no está construida.** El Cap. 4.2 de la Estrategia Maestra enlaza 7 demos PLG (`3_Inventario_Colaborativo`, `5_Onboarding_Cero_Touch`, `6_Auditor_Friccion_Web`, `7_Chat_With_Your_Data`, `8_Generador_MVP_Build`, `9_Optimizador_FutureProof`, `10_Enjambre_IA`) con rutas `file://` que **no existen en disco**. En `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Demos_PLG/` solo hay 4: `11_Cotizador_IA_FR_Medical`, `Demo_ERP_Bridge`, `Demo_Legal_Onboarding_KYC`, `Demo_Triage_RAG`. Se le prometió a Leo y a Rocketing (junta del lunes 14) inyectar demos que no se pueden inyectar.

3. **Hay una contradicción de datos que invalida el pitch de apertura con Leo y que hay que resolver HOY antes de la junta del lunes 21.** La tabla financiera 2026 reporta 18, 20, 25, 22, 10 y 12 **nuevos clientes** entre abril y septiembre, con MRR subiendo de $45,000 a $55,000 MXN. El funnel comercial reporta **0 ventas desde marzo**. Ambas cosas no pueden ser ciertas. Si Leo abre el Excel de finanzas durante la presentación de "CERO VENTAS en 5 meses", la credibilidad de todo el diagnóstico se cae.

4. **El pricing está roto en el único lugar donde importa: el punto de entrada.** Existe un hueco de 10x entre lo que el mercado que llega quiere pagar ($20k-$40k MXN) y el ticket mínimo declarado ($300k MXN), y de 25x contra el ticket promedio real ($3,910,471 MXN). El Diagnóstico 01 a $5k-$8k USD (~$93,000-$148,800 MXN) es la única pieza de pricing bien pensada de toda la estrategia — **y está saboteada por la propia estrategia**, porque la lista maestra de keywords negativas se diseñó para bloquear todo prospecto con presupuesto menor a $300k MXN, es decir, bloquea al comprador natural del producto de entrada.

5. **Lo que sí mueve pipeline en 90 días no es el reposicionamiento: es FR Medical + las 21 propuestas muertas.** El taller con FR Medical fue el **viernes 11 de septiembre** (hace 4 días) y la extracción de VOC sigue sin entregable. Ese es el único caso vertical con cliente real, dolor cuantificado y demo construida. Las 21 propuestas abril-agosto son la única lista de prospectos con presupuesto validado que existe. Todo lo demás es infraestructura de mediano plazo.

---

## 1. LA TESIS DE POSICIONAMIENTO: QUÉ ES SÓLIDO, QUÉ ES ASPIRACIONAL, QUÉ ES JERGA

### 1.1 Sólido — conservar y defender

| Elemento | Por qué es sólido | Evidencia en los datos |
| :--- | :--- | :--- |
| **El "desfase de información"** (Cap. 0.1 Maestra / §2 Tesis Antídoto) | Es la única hipótesis que explica simultáneamente cuatro síntomas independientes | Keywords ganadoras 100% UX/UI y marca; keywords comerciales en pos. 41-61; LLMs citan `/diseno-ux-ui-que-es-guia` (698 impr.) y `/10-ejemplos-de-interfaces`, nunca ingeniería de agentes; leads de $20k-$40k |
| **El "AI DIY" como competidor real** (§3 Tesis Antídoto) | Es una objeción de mercado observable, no una invención | 21 propuestas enviadas, 0 cerradas, con tasa de contacto **subiendo** (65% en abril, 55% en julio). El prospecto sí contesta y sí se reúne; muere en la decisión de compra — comportamiento típico de "lo intentamos internamente" |
| **El producto de entrada de bajo riesgo (Diagnóstico 01)** | Resuelve el shock de precio documentado con evidencia dura | 21 propuestas de $50k-$200k USD → 0 cierres. No hay peldaño entre $40k y $930k MXN |
| **La consolidación de 10 landings en 3 clusters** | Argumento de eficiencia de pauta técnicamente correcto | 35 campañas / $1,000 MXN día = $28/día por campaña. Ninguna sale de fase de aprendizaje |
| **El dogfooding del MCP de Leo** | Es la credencial más vendible que tiene la empresa y está *realmente* en producción | Servidor MCP operando la ingesta Webflow → Notion → notificación a ventas |
| **La estructura dual Hunters / Cuentas** | Correcta para un negocio con MRR ($42.5k-$55k) y proyectos grandes ($3.9M) coexistiendo | Churn subió de 2.5% (jul) a 4.2% (sep): hay un problema de Cuentas, no solo de Nuevas Ventas |

### 1.2 Aspiracional sin evidencia — hay que probarlo o quitarlo

| Afirmación | Dónde aparece | Problema |
| :--- | :--- | :--- |
| **"La conversión histórica del Diagnóstico al BUILD supera el 70%"** | Leo 5:45PM §Frente 4; Auditoría Rocketing línea 92 | **Nunca se ha vendido un Diagnóstico 01.** Es un número inventado sobre un producto que no existe todavía. Es el número más peligroso del corpus porque es el que justifica todo el pivote comercial |
| **"1:10 → 1:50"** | Los 4 documentos | No reconcilia con el funnel real. Q1 2026 (la supuesta "mejor época") fue 139 leads → 2 ventas = **1:70**; sobre propuestas fue 2/26 = 1:13. El 1:10 probablemente viene de 2025 (venta $16.99M) y es memoria comercial de Pablo, no dato. Marcar como [inferencia] o citar el año |
| **"ROI Marketing Q1 2026: 2,274.5%"** | Leo 5:45PM §2 | No reconcilia: $7,820,942 / $189,714 = **41.2x = 4,022% neto**. El número presentado subestima el resultado y es indefendible si alguien lo recalcula |
| **"Tasa de contacto sept: 16.67% — de 6 leads, solo 1 contestó"** | Leo 5:45PM §2 | Contradice los 26 leads registrados en septiembre (13 google/organic, 6 google/cpc) y los 21 leads orgánicos en español (+425%). También contradice Q3: 65 leads / 43 contactados = **66% de contacto** |
| **"SLA de disponibilidad 99.9%"** / **"99.98%"** | Tesis Antídoto matriz #3 / Guía 4PM línea 209 | Dos cifras distintas en dos documentos, ningún contrato ni monitoreo que las respalde. Un CIO pide el reporte de uptime en la segunda llamada |
| **"Matemáticamente imposible que inventen precios o stock"** | Tesis Antídoto matriz #6 | Falso como afirmación técnica y jurídicamente riesgoso en un contrato. Sustituir por: *"Human-in-the-loop obligatorio y trazabilidad de fuente en cada respuesta"* |
| **"Bimbo +40% productividad" / "RadioShack -60% fricción"** | Leo 5:45PM §Frente 3 y Capa 2 | Contradicen los propios casos STAR-ROI de la Maestra (Cap. 3.3): RadioShack **+32% conversión**, LifeMiles **+22% retención**, Bimbo **3 plataformas en 6 meses**. Hay dos juegos de cifras para los mismos clientes |
| **"Badge DesignRush #1 México"** | Leo 5:45PM (dos veces) | No aparece en ningún otro documento ni hay soporte en los activos |
| **"Escenario Medio genera 10-15 SQLs/mes"** | Maestra Cap. 7.3 | Proyección sin modelo. Hoy: 6 conversiones de Ads en 13 días con 0 propuestas en todo Q3 |
| **Absorción total de Rocketing en 12 meses** | Maestra Cap. 6 | Plan de insourcing con equipo de 1 persona (Fabián) + 1 SEO técnico (Cano). Nadie ejecuta pauta, video, diseño y contenido con esa estructura |

### 1.3 Jerga — quitar del material que ve el cliente

- **"Código de grado militar"** / **"blindaje de grado militar"** — no significa nada para un COO mexicano y suena a agencia. Sustituir por *"pasa auditoría de tu área de seguridad y de tu auditor externo"*.
- **"IMPATH™"** — marca registrada sin metodología documentada en ningún archivo. O se documenta en una página (5 pasos, 3 entregables, 1 plantilla) o se elimina el ™.
- **"Gemelos digitales"** (aplicado a mapeo de procesos, Leo 5:45PM tabla de paquetes) — uso incorrecto del término; un gemelo digital es otra cosa. Invita a que un CTO técnico lo corrija en la llamada.
- **"Los creativos son tecnológicos, los tecnológicos son creativos"** — es un buen manifiesto **interno**, es ruido para un comprador. Un CFO no compra hibridez cultural.
- **"Armadura humana con la que vestimos nuestra ingeniería"** — metáfora que no sobrevive a una diapositiva ejecutiva.
- **"FutureProof"** — es un buen nombre de **producto** (el Diagnóstico) y un mal **posicionamiento de empresa**, porque es exactamente lo que promete toda consultora. Recomendación: degradar FutureProof de bandera de marca a nombre del SKU 01, y que la bandera de marca sea la categoría concreta (ver §3).
- **"Proof of Capability"**, **"Blueprint Library"**, **"Solution Drawer"**, **"Agentic Operations Center"** — vocabulario interno útil; no debe aparecer en un anuncio de Google donde el usuario busca "integración ERP".

### 1.4 Sobre los 3 Clusters y los 3 Pilares

**Los 3 Pilares (01 Diagnóstico / 02 Ingeniería / 01+02 BUILD+EVOLVE) son sólidos.** Es una escalera de riesgo bien construida y es lo correcto para un ciclo B2B de 3-6 meses.

**Los 3 Clusters tienen un defecto estructural que ningún documento detecta:** de las 10 landings blueprint ya construidas en `Componentes_Nueva_Web/landings/` (`aoc`, `apa`, `data_privacy`, `erp_bridge`, `finance_matcher`, `hr_recruiter`, `legal_onboarding`, `rfp_analyst`, `smart_ads`, `triage_rag`), **ninguna pertenece al Cluster 1 (Apps & Plataformas B2B)**. Las 10 son módulos de automatización o agentización. Es decir:

- El Cluster 1 recibe **$6,000 MXN/mes** de presupuesto y tiene **cero activos de prueba**.
- `smart_ads` y `hr_recruiter` están construidas pero **no aparecen mapeadas en ningún cluster** (Cap. 5.3 de la Maestra las omite). Son activos huérfanos.
- La demanda real observada apunta al Cluster 2/3: el único lead corporativo de septiembre pidió *"Automatizar flujo de clientes"*, y la campaña con mejor economía es `IA Operacional Enterprise` (199 clics a $22.8 MXN).

**Recomendación:** pasar de 3 clusters a **2 clusters + 1 capacidad**. Cluster A: Automatización de Procesos Críticos. Cluster B: Agentes IA en Producción. "Apps & Plataformas / UX" deja de ser cluster de pauta y pasa a ser **capacidad diferenciadora transversal** (es lo que hace que los agentes se adopten). Esto alinea presupuesto, activos y demanda real, y de paso resuelve que el Cluster 1 es donde están los clics de $111-$196 MXN sin conversión.

---

## 2. ICP DECLARADO VS. ICP REAL — Y EL ICP OPERATIVO

### 2.1 La brecha

| Dimensión | ICP **declarado** (los 4 docs) | ICP **real que está llegando** (datos sep 2026) |
| :--- | :--- | :--- |
| Cargo | CTO, CIO, VP Engineering, Director de Innovación, CFO, COO | Gerente de Compras, Coordinador de Marketing, Fundadora de startup, Directora de Ops. Solo 3 de 7 en pipeline son C-level/VP |
| Tamaño empresa | +200 empleados (LinkedIn) / +50 empleados (Señal 1 de Ads) | No se mide. No hay campo de tamaño en el formulario |
| Presupuesto | > $300,000 MXN (filtro duro en negativas y en formulario Webflow) | $20,000-$40,000 MXN declarado en el diagnóstico de la propia tesis |
| Canal de descubrimiento | Google Search de alta intención + LinkedIn ABM | 50% google/organic (13/26), 23% google/cpc (6/26), 15% referral técnico (webflow.com, tagassistant, hotjar — **son proveedores/curiosos, no compradores**) |
| Intención | "Necesito modernizar mi ERP / desplegar agentes" | "¿Qué es una interfaz?" / "tipos de páginas web" / "diseño ux ui" |
| Validación externa | Autoridad técnica en IA enterprise | Los LLMs citan a BluePixel como **glosario educativo de UX/UI**: 698 + 647 + 521 + 344 impresiones en artículos de definiciones básicas |

**Conclusión dura:** el ICP declarado no está llegando en absoluto. El ICP que llega es *"persona no técnica de empresa mediana que está investigando un concepto"*. Y hay un tercer segmento, ignorado por completo en los 4 documentos, que sí está comprando: **la cartera existente**, con MRR de $42,500-$55,000 MXN/mes y un churn que se disparó de 2.5% a 4.2% entre julio y septiembre.

### 2.2 ICP operativo propuesto (el que hay que instrumentar en formulario, scoring, negativas y ABM)

**ICP-1 "Operación Pesada" — el que paga el ticket grande** *(prioridad 1)*
- **Firmografía:** empresa mexicana, 200-2,000 empleados, facturación $300M-$3,000M MXN [inferencia: rango derivado del ticket promedio real de $3.9M MXN, que corresponde a un CAPEX de TI de empresa mediana-grande]. Sectores en orden de evidencia: **distribución especializada / dispositivos médicos** (FR Medical — es el único caso vivo), **manufactura e industrial**, **construcción y maquinaria** (Constructora Alfa), **retail multi-sucursal** (RetailX, RadioShack), **logística** (Logística Sur), **servicios financieros regulados** (Banco Nacional, Sofipos, fintech).
- **ERP instalado:** SAP, Oracle, Odoo o Microsoft Dynamics. **Es el requisito de calificación más predictivo y no está en ningún formulario hoy.**
- **Comprador económico:** Director/VP de Operaciones o Director de Administración y Finanzas / Contralor. **No es el CTO.** El CTO es *validador técnico y bloqueador*, no firmante.
- **Trigger de compra (los 5 que hay que buscar literalmente):** (1) cierre contable que tarda 10-12 días; (2) cotización o licitación armada a mano en Excel; (3) ERP que no conversa con el resto del stack tras una fusión o un cambio de sistema; (4) auditoría, requerimiento de compliance o LFPDPPP encima; (5) llegó un director nuevo con mandato de "eficiencia" o "IA" y presupuesto de 90 días.
- **Presupuesto:** entrada $93,000-$186,000 MXN (Diagnóstico). Proyecto $930,000-$3,900,000 MXN. Recurrente $90,000-$180,000 MXN/mes.

**ICP-2 "Cartera Instalada" — el que salva el trimestre** *(prioridad 0 en tiempo, prioridad 1 en ROI)*
- Cliente actual o histórico que compró UX/UI o desarrollo web. Ya confía, ya tiene orden de compra abierta, ya tiene proceso de proveedor superado.
- **Trigger:** el mismo mandato de "hagan algo con IA" que recibieron todos en 2026.
- **Presupuesto:** $93,000-$250,000 MXN sin comité, por vía de ampliación de contrato.
- **Este ICP no aparece en ninguno de los 4 documentos**, salvo una línea suelta en la Tesis Antídoto §7.4 ("Campaña de Reactivación de Cuentas Pasadas"). Es el error de omisión más caro de la estrategia: con churn de 4.2% y rentabilidad cayendo de $92,000 (jul) a $10,000 (sep), es el único pipeline sin costo de adquisición.

**Anti-ICP (bloquear explícitamente):** startup pre-seed / MVP (Startup XYZ), agencia o freelance buscando subcontratar, área de marketing pidiendo rediseño estético, cualquier consulta de "página web", estudiante/académico, y todo referral de dominios de herramientas (`webflow.com`, `tagassistant.google.com`, `insights.hotjar.com` — son 3 de 26 leads de septiembre, 11.5% de basura estructural).

---

## 3. PROPUESTA DE VALOR Y MENSAJES — REESCRITURA

### 3.1 Diagnóstico del mensaje actual

La propuesta de valor vigente es: *"Somos el socio estratégico de ingeniería que resuelve problemas de negocio complejos mediante el matrimonio perfecto entre Diseño de Experiencia Humana y Arquitectura Cloud e Inteligencia Artificial"* (Tesis Antídoto §2).

**Tres fallas:** (1) describe a la empresa, no al problema del cliente; (2) no contiene un solo sustantivo que un COO reconozca como su lunes por la mañana; (3) es indistinguible de la de Softtek, Globant, Encora o cualquier boutique de IA. Si le quitas "BluePixel" y le pones cualquier otro nombre, sigue siendo verdadera — ese es el test que falla.

### 3.2 Propuesta de valor reescrita (nivel empresa)

> **"Conectamos los sistemas que ya pagaste y automatizamos el proceso que hoy te cuesta días-hombre, en producción y con tu área de seguridad aprobándolo. Empezamos con un diagnóstico de 3 semanas que te dice exactamente cuánto te cuesta hoy ese proceso y cuánto vale arreglarlo — antes de que firmes un peso de desarrollo."**

Cumple: nombra el activo del cliente (el ERP que ya pagó), nombra la unidad de dolor (días-hombre), nombra al bloqueador (seguridad), y neutraliza el riesgo (el diagnóstico antes del desarrollo).

### 3.3 Mensajes por cluster, en lenguaje de CFO/COO

**CLUSTER A — Automatización de Procesos Críticos** *(el que paga las cuentas)*

- **Titular (anuncio / landing H1):** *"Tu cierre contable tarda 12 días. Debería tardar 24 horas."*
- **Subtítulo:** *"Conectamos tus estados de cuenta, tus XML del SAT y tu SAP. Sin cambiar de ERP, sin tocar tu operación, con tu contralor validando cada movimiento."*
- **Variante para Operaciones:** *"Cada cotización que armas a mano cuesta 4 horas y llega tarde. Automatizamos el proceso completo, de la solicitud a la orden de compra."*
- **Prueba obligatoria en la página:** demo `Demo_ERP_Bridge` (existe) + `finance_matcher` (landing existe, **demo no existe — construir**).
- **Lo que hay que dejar de decir:** "middleware resiliente", "conectores determinísticos", "APA".

**CLUSTER B — Agentes IA en Producción** *(el que tiene la demanda)*

- **Titular:** *"Tu director te pidió 'algo con IA'. Nosotros te decimos qué proceso sí aguanta y cuál te va a explotar."*
- **Subtítulo:** *"Agentes que corren dentro de tu propia nube, sobre tus documentos autorizados, con revisión humana obligatoria y bitácora de cada respuesta. Cumplimiento LFPDPPP por diseño."*
- **Variante para Compliance/Jurídico:** *"Validar un proveedor nuevo te toma 5 días de abogado. El agente entrega el semáforo de riesgo y la matriz de poderes; tu abogado dictamina en 5 minutos."*
- **Prueba obligatoria:** `Demo_Triage_RAG` y `Demo_Legal_Onboarding_KYC` (ambas existen) + el hecho verificable de que BluePixel corre su propio servidor MCP en producción.
- **Lo que hay que dejar de decir:** "prohibido alucinar", "matemáticamente imposible", "grado militar", "capa agéntica corporativa".

**CAPACIDAD TRANSVERSAL — Adopción y Producto** *(ex-Cluster 1, ya no es cluster de pauta)*

- **Uso comercial:** *"El 70% de los proyectos de automatización que fracasan no fallan por el código: fallan porque nadie los usa. Nosotros diseñamos la pantalla con la que tu gente va a trabajar todos los días — es la razón por la que nuestros sistemas sí se adoptan."* Esto se dice **en la llamada y en la propuesta**, nunca como campaña independiente.
- Es el diferenciador real y verificable (6 años de UX, LifeMiles, RadioShack) y hoy está siendo usado como imán de leads equivocados. Hay que moverlo de la adquisición al cierre.

---

## 4. PRICING Y PACKAGING

### 4.1 Lo que dicen los documentos

| Pilar | Precio documentado | Fuente | Problema |
| :--- | :--- | :--- | :--- |
| 01 Diagnóstico & Auditoría FutureProof | **$5k-$8k USD** (~$93,000-$148,800 MXN), 2-4 semanas | Leo 5:45PM, tabla de paquetes | Contradicho por `AUDITORIA_Y_PLAN_DE_ACCION_JUNTA_ROCKETING.md` línea 31: **$5k-$10k USD** |
| 02 Ingeniería de Agentes & MCP | **"A cotizar"**, sprints mensuales | Leo 5:45PM | **Un "Entry Package" sin precio no es un entry package.** Es exactamente el problema que se quiere resolver |
| 01+02 BUILD + EVOLVE | **$50k-$200k USD** (~$930,000-$3,720,000 MXN), 3+ meses | Leo 5:45PM | Rango de 4x. Un rango de 4x le dice al comprador que no sabes lo que haces |
| Retainer Evolve | **$60k-$90k MXN/mes** | Maestra Cap. 1.2 | Contradicho por Maestra Cap. 4.3: **$60k-$150k MXN/mes** |
| Filtro de ticket mínimo | **> $300,000 MXN** | Maestra Cap. 2.1 / 3.2, Estrategia Pauta, Guía 4PM | **Bloquea al comprador del Diagnóstico 01 de $93k-$148k MXN** |

*[inferencia: conversión a $18.6 MXN/USD, tipo implícito en los propios documentos — $3,910,471 MXN descrito como "~$210,000 USD"]*

### 4.2 Contra lo que el mercado está pagando

- **Ticket promedio real cerrado 2026:** $3,910,471 MXN (2 ventas, $7,820,942 total).
- **Ticket que el tráfico actual quiere pagar:** $20,000-$40,000 MXN.
- **Ratio:** 98x a 195x. No hay puente.
- **Costo de adquisición real 2026:** $292,426 / 240 leads = **$1,218 MXN por lead**; $292,426 / 41 propuestas = **$7,132 MXN por propuesta**; $292,426 / 2 ventas = **$146,213 MXN por venta**. Con ticket de $3.9M, un CAC de $146k es excelente. **El problema de BluePixel no es el CAC, es la frecuencia.** Esto cambia la conversación con Rocketing: no hay que exigir leads más baratos, hay que exigir *menos leads y más grandes*.

### 4.3 Estructura de pricing recomendada

**Pilar 01 — dos SKU, no uno.** El error es tener un solo diagnóstico de 2-4 semanas: 4 semanas es demasiado para quien solo quiere probarte, y $148k es demasiado para una firma de gerente.

| SKU | Precio | Duración | Alcance | Quién firma |
| :--- | :---: | :---: | :--- | :--- |
| **01-A · Radiografía Operativa** | **$95,000 MXN** | 10 días hábiles | 1 proceso, 1 área. Mapeo, costeo en pesos del proceso actual, 3 escenarios de automatización, recomendación go/no-go | Director de área, sin comité |
| **01-B · Diagnóstico FutureProof** | **$185,000 MXN** | 4 semanas | Hasta 3 procesos, auditoría de arquitectura y datos, blueprint técnico, business case con VPN a 24 meses, plan de implementación | Dirección / comité |

**Regla comercial que hay que escribir en el contrato:** *el 100% del monto del 01 se acredita al Pilar 02 o al BUILD si se firma dentro de los 45 días naturales siguientes a la entrega.* Esto convierte el diagnóstico de gasto a anticipo y es el mecanismo que realmente sube la conversión — no el "70%" inventado.

**Pilar 02 — poner precio ya.** Squad mensual (1 AI Engineer senior + 0.5 Tech Lead + 0.5 UX/Producto + QA):
- **$385,000 MXN/mes**, mínimo 3 sprints ($1,155,000 MXN). Descuento 8% si se contrata el bloque de 3 por adelantado.
- Precio único publicable. Elimina "a cotizar", que es la razón por la que este pilar nunca se vende.

**Pilar 01+02 BUILD + EVOLVE — partir el rango de 4x en tres tramos nombrados:**
- **BUILD Foco** — 1 proceso crítico end-to-end, 90 días: **$1,200,000 MXN**
- **BUILD Plataforma** — multi-proceso o plataforma nueva, 90-150 días: **$2,400,000 MXN**
- **BUILD Transformación** — programa completo: **desde $3,900,000 MXN** (ancla en el ticket real ya cerrado)
- **EVOLVE** (obligatorio al cierre de cualquier BUILD, contrato a 12 meses): **$120,000 MXN/mes** base, $180,000 MXN/mes con SLA de respuesta en 4 horas.

**Corrección crítica al filtro de negativas:** bajar el umbral de $300,000 a **$80,000 MXN** en el formulario y en las keywords negativas, y calificar por **tamaño de empresa (+100 empleados) y existencia de ERP**, no por presupuesto autodeclarado. Un Director de Operaciones de una empresa de 800 empleados casi nunca sabe su presupuesto en la primera visita, y hoy la estrategia lo está bloqueando activamente.

---

## 5. BATTLECARD COMPETITIVA — CONTRA QUIÉN SE COMPITE DE VERDAD

Los 4 documentos solo nombran a **Accenture** (una vez, Escenario 4 de la Tesis Antídoto) y a **Vstorm** (como benchmark de web, no como competidor). Eso es un hueco grave: la campaña `Competidores | RCKT | Jun26` quemó $2,017 MXN con CTR de 2.8% y 0 conversiones — **está pujando contra competidores equivocados**.

| # | Competidor real | Cuándo aparece | Por qué gana | Argumento ganador **verificable** de BluePixel |
| :-- | :--- | :--- | :--- | :--- |
| **1** | **El equipo interno + ChatGPT/Copilot + n8n/Make** | En **todas** las oportunidades. Es el competidor #1 y hoy va ganando 21-0 | Cuesta $0 aparente y el director ya lo autorizó | *"Su equipo puede hacer el piloto. Lo que no puede hacer es firmar quién responde cuando se caiga a las 3 AM del cierre de mes, ni pasar la auditoría de datos personales. Empecemos por el diagnóstico: si el piloto interno sirve, se lo decimos por escrito."* — **Este es el único guion que importa y es el único que no está bien construido en la Tesis Antídoto** |
| **2** | **Integradores y partners de ERP** (partners SAP, Odoo, Dynamics, Power Platform) | Cluster A, siempre | Ya están dentro del cliente y el ERP es suyo | *"No venimos a tocar su SAP ni a pedir licencias nuevas. Instalamos la capa encima y su partner de ERP sigue siendo su partner."* Verificable con `Demo_ERP_Bridge` |
| **3** | **Softtek, Globant, Encora, NEORIS, Wizeline** (nearshore mexicano/LATAM) | Cluster A y BUILD grande | Escala, certificaciones, precio por hora, ya están en el padrón de proveedores | *"El equipo que le presentamos es el equipo que trabaja. No hay pirámide ni rotación de juniors. Y entregamos en 90 días con alcance cerrado, no con bolsa de horas."* Verificable si se documenta la composición del squad en la propuesta |
| **4** | **Big Four / Accenture** (Deloitte, KPMG, PwC, EY Digital) | Solo en cuentas +$3M, y cuando el trigger es compliance o auditoría | Relación con el Consejo, cobertura de riesgo reputacional | *"Ellos entregan la estrategia; nosotros entregamos el sistema funcionando. En muchos casos somos quien ejecuta lo que ellos recomendaron."* Posicionarse como **complemento**, no como sustituto — pelear de frente aquí es perder |
| **5** | **Software factories mexicanas y agencias de desarrollo** | Cluster de Apps (por eso el CPC de $111-$196 MXN sin conversión) | Precio | **No competir.** Es exactamente la pelea que causó el desfase. Apagar `WebDev BP` y `App Dev BP` |
| **6** | **Boutiques de IA emergentes** (perfil Vstorm) y arquitectos freelance senior | Cluster B | Velocidad, precio, discurso idéntico al de BluePixel | *"Nuestro diferenciador es que el sistema se adopta: 6 años diseñando la interfaz que usa la gente de operación todos los días. LifeMiles +22% retención, RadioShack +32% conversión."* Verificable con casos y logos reales |

**Las tres únicas pruebas verificables que hoy tiene BluePixel** (y sobre las que debe construirse toda la battlecard):
1. **Logos y resultados:** Bimbo, IQOS, LifeMiles, RadioShack, con cifras STAR-ROI consistentes (+22% retención, +32% conversión, 3 plataformas en 6 meses). **Hay que elegir un solo juego de cifras y borrar el otro.**
2. **Las 4 demos que existen y funcionan:** Cotizador IA FR Medical, ERP Bridge, Legal Onboarding KYC, Triage RAG.
3. **El dogfooding real:** servidor MCP de Leo en producción alimentando Notion desde Webflow.

Todo lo demás (99.9%/99.98% SLA, "grado militar", IMPATH™, "imposible alucinar", "70% de conversión", DesignRush) debe salir del material comercial hasta que exista soporte documental.

---

## 6. COMPROMISOS, FECHAS Y ACUERDOS DOCUMENTADOS — ESTADO AL 15 SEP

### 6.1 Vencidos ayer o que vencen hoy (junta con Leo, lunes 14 sep, 5:45 PM — Tabla Maestra §7)

| Compromiso | Responsable | Plazo documentado | Estado real |
| :--- | :--- | :--- | :--- |
| Apagar `Competidores` y `WebDev BP` | **Diana Cardoso (Rocketing)** | HOY — 24h → **venció 15 sep** | Por verificar. Es la acción con mejor ROI del plan (~$5,000-$11,000 MXN/mes) |
| Cambiar URL de `IA Operacional Enterprise` a `/agentizacion` | Diana + Tecnología BluePixel | HOY → **venció 15 sep** | **Bloqueado:** la landing `/agentizacion` no está desplegada. El compromiso se hizo sobre un destino inexistente |
| Cargar lista maestra de negativas | Diana Cardoso | 24h → **vence hoy** | Requiere corrección previa del umbral de $300k (ver §4.3) |
| Encender $8,000 MXN de LinkedIn Ads (Thought Leadership Leo + Document Ads) | Rocketing pauta B2B | 48h → **vence 16 sep** | **Bloqueado:** la Blueprint Library en PDF, que es el lead magnet del Document Ad, no existe como entregable |
| Apagar Meta `Always On` → 100% retargeting | Rocketing | 48h → **vence 16 sep** | Ejecutable hoy |
| Señal 1 de Ads: inyectar `gclid` + campo "empleados" en `MultiStepContact`, conversión con valor $500 MXN | Diana + Tecnología | 48h → **vence 16 sep** | Ejecutable; es la pieza de mayor impacto estructural |
| Redirecciones 301 + pivote editorial del blog | **Daniel Arias (SEO, Rocketing)** | 3 días → **vence 17 sep** | **Bloqueado por la misma razón:** las 3 landings destino no existen. Ejecutar 301 hacia páginas inexistentes destruiría el único activo orgánico que funciona (+53.6% clics, +425% leads en español) |
| Campaña de rescate a las 21 propuestas estancadas con oferta de Diagnóstico 01 | **Pablo Gómez / José de Buen** | Esta semana → **vence 18 sep** | **Es la acción de mayor retorno de todo el corpus y la única que no depende de nadie externo.** Meta documentada: rescatar 2 de 21 = $200k-$500k MXN |
| Reemplazar "leads brutos" por MQL / Costo por SQL / Pipeline Value | Rocketing Analytics | Próximo reporte → **lunes 21 sep, 4:00 PM** | Pendiente |
| Conectar MCP de Leo a Google Ads API (Señal 3, valor real de contrato) | **Leo / Tecnología** | 2-4 semanas → **entre 28 sep y 12 oct** | Pendiente |
| Crear evento de conversión SQL vía API (valor $5,000 MXN) | Tecnología BluePixel | 2 semanas → **28 sep** | Pendiente |

### 6.2 Los 4 acuerdos de cierre con Leo (§8, doc 5:45 PM) — vigentes

1. Aprobar transición a 3 Pilares en la web y autorizar `/agentizacion`, `/automatizacion`, `/apps-b2b`.
2. Ordenar la poda de Google Ads y consolidación en 3 campañas macro.
3. Activar LinkedIn Ads con el perfil personal de Leo y **parar la producción de memes en TikTok**.
4. Instruir a ventas a cerrar con Diagnóstico 01 y prohibir cotizaciones de $50k-$200k USD en frío.

*Los documentos no registran si Leo los aprobó.* **Recomendación: escribir la minuta de la junta del 14 hoy mismo con los 4 acuerdos y pedir confirmación por escrito antes del lunes 21, 4:00 PM.** Sin eso, la junta con Rocketing del lunes no tiene mandato.

### 6.3 Acuerdos con Rocketing (Justificación Ejecutiva 4PM)

- **Diana Cardoso:** pausar dispersión en 10 páginas, concentrar en 3 clusters, cargar negativas.
- **Marily (Lydia Marisela Calderón):** validar redirección de tráfico a las 3 rutas nuevas **una vez desplegadas** — condición suspensiva que aún no se cumple.
- **Leo y Producto:** aprobar la maqueta React con simuladores.
- **Pablo y José:** estandarizar guion enfocado en el Diagnóstico 01.
- **Regla de gobernanza vigente:** todo requerimiento a especialistas de Rocketing (Diana, Daniel, Jessica, Sergio, René) pasa por Marily.

### 6.4 Rituales y compromisos de calendario vigentes

- **Lunes 4:00 PM** — revisión semanal de Looker Studio con Marily, Diana y equipo. **Próxima: lunes 21 sep.**
- **Viernes 11 sep, 11:00 AM-2:00 PM** — taller de agentización con FR Medical, con grabación de Sergio y Jessica. **Ya ocurrió hace 4 días; no hay entregable de VOC ni las 5 micro-cápsulas de 45 seg comprometidas en el Cap. 5.3 de la Maestra.** Es el activo más valioso sin explotar del corpus.
- **Roadmap de absorción de Rocketing (Cap. 6):** primer recorte del **35% del fee** programado para **1 dic 2026**; fin de contrato y 100% in-house entre **abr y may 2027**.

---

## 7. CONTRADICCIONES INTERNAS ENTRE DOCUMENTOS

Ordenadas por riesgo de que exploten en una junta.

| # | Contradicción | Doc A | Doc B | Severidad |
| :-- | :--- | :--- | :--- | :--- |
| **1** | **Ventas vs. clientes nuevos.** "CERO VENTAS en 5 meses, abril-agosto $0" | Leo 5:45PM §2 | Tabla financiera 2026: 18, 20, 25, 22, 10 nuevos clientes abr-ago, MRR subiendo de $45k a $55k | **Crítica** — invalida el pitch de apertura |
| **2** | **Gasto de pauta.** "$13,621 MXN en 13 días", presupuesto "$30,000-$40,000 MXN/mes" | Leo 5:45PM §3 y Frente 5; Auditoría Rocketing línea 16 | Reporte de campañas: inversión sep 1-13 = **$235.69K MXN** ($191.81K Google, $25K LinkedIn, $5.53K Meta). Brand sola: $103,957 gastados vs. los "$6,000/mes" del plan | **Crítica** — toda la reestructuración presupuestal de $40k/mes puede estar hecha sobre la cifra equivocada por un factor de ~6x |
| **3** | **LinkedIn: $0 gastados** ("el canal está completamente apagado", citado 4 veces) | Leo 5:45PM §4.1; Auditoría Rocketing §2.3 | Reporte de campañas: **LinkedIn $25.00K MXN** de inversión sep 1-13 | **Crítica** — es uno de los 4 acuerdos con Leo y se apoya en un dato falso |
| **4** | **Presupuesto total y su distribución.** Escenario recomendado **$5,000-$8,000 USD/mes** (~$93k-$149k MXN) con reparto **50% LinkedIn / 35% Google / 15% infra** | Maestra Cap. 7.1 y 7.3 | Leo 5:45PM Frente 5: **$40,000 MXN/mes** con reparto **73.75% Google / 20% LinkedIn / 6.25% Meta** | **Alta** — el doc canónico y el doc operativo se contradicen en monto (2.3x-3.7x) y en dirección estratégica (LinkedIn-first vs. Google-first) |
| **5** | **Demos PLG.** Cap. 4.2 enlaza 7 demos por ruta `file://`; el checklist habla de "11 Prototipos PLG" | Maestra Cap. 4.2 y 1.5; Justificación Ejecutiva ("NodeFlowSim", "Auditor de Fricción", "Finance Matcher") | **Solo existen 4** en `Demos_PLG/`: `11_Cotizador_IA_FR_Medical`, `Demo_ERP_Bridge`, `Demo_Legal_Onboarding_KYC`, `Demo_Triage_RAG`. **7 rutas rotas** | **Crítica** — el argumento de "Proof of Capability" ante Leo y Rocketing está 64% vacío |
| **6** | **Número de landings: 9 vs. 10.** "9 Landings de pauta" (Cap. 0.1, 2.5, 4.2, Gantt) vs. "10 landings aisladas" (Cap. 5.1, Guía 4PM, Justificación) | Maestra consigo misma | — | Media, pero daña credibilidad: además se usa "10" tanto para el **problema** (landings viejas de `cotiza.`) como para el **activo** (10 blueprints nuevos) |
| **7** | **Precio del Diagnóstico 01: $5k-$8k USD vs. $5k-$10k USD** | Leo 5:45PM tabla de paquetes | Auditoría Rocketing línea 31 | Alta — es el producto ancla; no puede tener dos precios |
| **8** | **Retainer Evolve: $60k-$90k MXN/mes vs. $60k-$150k MXN/mes** | Maestra Cap. 1.2 | Maestra Cap. 4.3 | Media — dentro del mismo documento |
| **9** | **SLA: 99.9% vs. 99.98%** | Tesis Antídoto, matriz de riesgos #3 | Guía 4PM línea 209 | Alta — es una cifra contractual |
| **10** | **Cifras de casos de éxito.** RadioShack "+32% conversión", LifeMiles "+22% retención", Bimbo "3 plataformas en 6 meses" | Maestra Cap. 3.3 (STAR-ROI) | Leo 5:45PM: Bimbo "+40% productividad", RadioShack "-60% fricción" | **Alta** — dos juegos de números para los mismos clientes en material que va a creativos de pauta |
| **11** | **Clientes emblemáticos: "Avianca" vs. "LifeMiles" vs. IQOS** | Maestra: "Avianca (LifeMiles)" en Cap. 3.3, pero "Avianca, Bimbo, RadioShack" en Cap. 2.3.1, 3.2 y 4.3 | Sitio nuevo en React: Bimbo, **IQOS**, LifeMiles, RadioShack. IQOS no aparece en ningún documento de estrategia | Media |
| **12** | **Alertas de ventas: Discord/WhatsApp vs. Slack** | Maestra Cap. 2.3.1 y 2.3.2 (Discord/WhatsApp) y Cap. 4 (Discord) | Maestra Cap. 3.2, diagrama del Asistente MCP (**Slack**); Cap. 4.3 entrega "canales de Slack" en el onboarding | Media — define la implementación técnica de la Señal 2 |
| **13** | **Filtro de presupuesto $300k MXN vs. producto de entrada de $93k-$149k MXN** | Maestra Cap. 2.1/3.2, Estrategia Pauta, Guía 4PM | Leo 5:45PM Frente 4 | **Crítica** — la arquitectura de calificación bloquea al comprador del producto que resuelve el problema comercial |
| **14** | **Numeración de capítulos.** La Maestra tiene **dos Capítulo 5**: "Estrategia de Contenidos y Formatos en Video" y "La Transición a Productized Services". El segundo aparece después del Cap. 8 y del cierre "Este documento consolida la estrategia canónica…" | Maestra | — | Media — el capítulo más importante de la estrategia comercial (la matriz 3×3) está sepultado después del cierre del documento |
| **15** | **Diagnóstico de la causa de la caída de conversión.** "Las 10 landings aisladas derrumbaron la tasa de cierre de 1:10 a 1:50" | Maestra Cap. 5.1 | Tesis Antídoto §1: las causas son (a) AI DIY y (b) dislocación de marca. Leo 5:45PM Frente 4: la causa es **shock de precio** | **Alta** — tres causas raíz distintas para el mismo síntoma en tres documentos. Una landing no determina la tasa de cierre de una propuesta ya presentada |
| **16** | **Contacto: 16.67% (6 leads) en septiembre** | Leo 5:45PM §2 | 26 leads registrados en sep; 21 leads orgánicos en español; Q3: 65 leads / 43 contactados = 66% | **Crítica** — es el dato que sustenta "83% de los leads ni contesta" en el Frente 6 de gobernanza con Rocketing |

---

## 8. LOS 6 ARREGLOS DE ESTA SEMANA (antes del lunes 21 sep, 4:00 PM)

1. **Martes 15 (hoy) — Reconciliar los tres números que pueden hundir la junta.** Cerrar con Leo, Marily y Diana: (a) gasto real de pauta sep 1-13 — ¿$13,621 o $235,690 MXN?; (b) LinkedIn — ¿$0 o $25,000 MXN gastados?; (c) ventas vs. nuevos clientes abr-sep. **Sin esto, no se presenta nada el lunes.** Responsable: Fabián.
2. **Martes 15 — Lanzar la campaña de rescate de las 21 propuestas.** Es la única acción con retorno en 30 días que no depende de Rocketing ni de que exista una landing. Oferta: **01-A Radiografía Operativa, $95,000 MXN, 10 días hábiles, acreditable 100% al proyecto**. Meta: 6 reuniones agendadas antes del 30 sep. Responsables: Pablo Gómez y José de Buen.
3. **Miércoles 16 — Entregar el VOC de FR Medical.** Transcripción textual de dolores, tiempos y costos del proceso de cotización quirúrgica + 5 micro-cápsulas de 45 seg. Es lo único que convierte el discurso de agentización en caso verificable. Responsables: Fabián + Jessica/Sergio (vía Marily).
4. **Miércoles 16 — Congelar los reclamos no verificables.** Eliminar de todo material que ve un cliente: 99.9%/99.98% SLA, "grado militar", IMPATH™, "matemáticamente imposible", "70% de conversión post-diagnóstico", DesignRush #1. Elegir **un** juego de cifras STAR-ROI (recomendado: el del Cap. 3.3) y borrar el otro. Responsable: Fabián, con Leo aprobando.
5. **Jueves 17 — Corregir el filtro de calificación antes de cargar las negativas.** Bajar el umbral de $300k a $80k MXN y añadir al `MultiStepContact` los dos campos que sí predicen (número de empleados y ERP instalado). Ejecutar junto con la inyección de `gclid` (Señal 1). Responsables: Tecnología BluePixel + Diana Cardoso.
6. **Viernes 18 — Cerrar el pricing en una sola hoja y publicarlo.** Los 5 SKU con precio en MXN (01-A $95k, 01-B $185k, 02 $385k/mes, BUILD $1.2M/$2.4M/desde $3.9M, EVOLVE $120k-$180k/mes), la regla de acreditación a 45 días, y el fin de "a cotizar" en el Pilar 02. Sin hoja de precios, ni el guion de ventas ni las landings ni los anuncios pueden escribirse. Responsables: Fabián + Leo + Pablo.

**No hacer esta semana:** redirecciones 301 (destruirían el único canal que crece: +53.6% clics orgánicos, +425% leads en español, mientras las landings destino no existan), activar los Document Ads de LinkedIn (no hay Blueprint Library en PDF), y cambiar la URL de `IA Operacional Enterprise` a `/agentizacion` (la página no está desplegada — mejor apuntarla temporalmente a la landing `triage_rag.html` o `erp_bridge.html` ya construidas).

---

**Archivos auditados:**
- `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/ESTRATEGIA_MAESTRA_BLUEPIXEL_2026.md` (694 líneas)
- `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/TESIS_ANTIDOTO_IA_Y_BATTLECARD_COMERCIAL.md`
- `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/JUSTIFICACION_EJECUTIVA_JUNTA_4PM.md`
- `C:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/ESTRATEGIA_JUNTA_LEO_5_45PM.md`
- Verificación cruzada: `AUDITORIA_Y_PLAN_DE_ACCION_JUNTA_ROCKETING.md`, `GUIA_JUNTA_4PM_ESTRATEGIA_GOOGLE_ADS_3_PILARES.md`, `ESTRATEGIA_PAUTA_Y_CAMPAÑAS_ADS_2026.md`
- Verificación de activos: `03_Prototipos_y_Codigo/Demos_PLG/` (4 demos reales) y `03_Prototipos_y_Codigo/Componentes_Nueva_Web/landings/` (10 blueprints + index)