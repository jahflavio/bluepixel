## 1. PROCESO COMERCIAL DOCUMENTADO DE PUNTA A PUNTA

**Fuentes:** `MASTER_GUIA_DIA_1.md`, `playbook_primeros_30_dias.md`, `ESTRATEGIA_MAESTRA_BLUEPIXEL_2026.md` (secciones 2.3, 4.1).

| # | Etapa | Responsable documentado | SLA documentado | Herramienta real hoy |
|---|---|---|---|---|
| 1 | Captación | Rocketing (Diana Cardoso, Google/Meta) + SEO (Daniel Arias / Juan Cano) | Ninguno | 10 landings en `cotiza.bluepixel.mx` + forms nativos de Webflow + teléfono |
| 2 | Ingesta / enrutamiento | Servidor MCP de Leo (construido con Claude Code) | Ninguno | MCP → base de datos Notion + 1 correo a ventas |
| 3 | Contacto | Pablo Gómez / José de Buen | **<5 min para Score ≥90: propuesto, NO acordado** (checklist sin marcar en `ESTRATEGIA_MAESTRA` §1.5) | Gmail (bandeja de entrada) |
| 4 | Calificación | Pablo (hunter senior) | Filtro económico >$300k MXN, verbal | Criterio humano; no hay definición MQL/SQL operativa |
| 5 | Discovery / Taller | Leo (arquitectura) + María (negocio) + Fabián (proceso) | Ninguno | Sesión presencial 3h; grabación + Gemini |
| 6 | Propuesta | Leo y María | Ninguno formal. Caso FR Medical: 6 días naturales (vie 11 → jue 17 sep) | Markdown a mano |
| 7 | Cierre | Pablo / María | Ninguno | Notion, estatus "Ganado" |
| 8 | Handoff post-venta | Propuesto: webhook → Drive + Jira + Discord | Ninguno | **No existe.** Ni siquiera está confirmado si el equipo usa Jira o Trello |
| 9 | Cuentas / Evolve | "Área de Cuentas" (sin persona nombrada) | Ninguno | Ninguna |

**Dónde se rompe (9 fracturas verificables):**

1. **No hay CRM. Notion es un repositorio, no un pipeline.** El único archivo de pipeline que existe (`prospectos_q3_2026.csv`, 7 registros) no tiene columna de etapa, monto, próximo paso ni dueño — solo `Presupuesto: Alto/Medio/Bajo`. No hay forecast posible.
2. **FR Medical no está en el pipeline.** El deal más grande documentado de la casa ($550k) no aparece en el CSV de prospectos ni en ningún sistema de seguimiento. Vive en 4 archivos .md.
3. **Ceguera de atribución (la más cara).** Notion no puede devolver el GCLID a Google Ads. Rocketing optimiza a formularios brutos. Esto es la causa estructural documentada del colapso: pauta entrenada para traer volumen barato, no contratos de +$300k.
4. **Medición de conversión rota en origen.** Mixpanel mide intención, no `Form Submitted` (Quick Win 1 del playbook, aún pendiente). El numerador del funnel no es confiable.
5. **Speed-to-lead sin SLA ni instrumentación.** Un correo a la bandeja compartida compite con 200 correos. Se correlaciona con la tasa de contacto errática: 21.95% (feb) a 65% (abr).
6. **Cero nurturing.** Ciclo B2B de 90 días documentado + cero herramienta de mailing (Mandrill en DNS es rezago sin uso) = el ~80% del pipeline muere sepultado en Notion. Explica por qué Q1 dejó 26 propuestas y Q2/Q3 cero: las propuestas de Q1 nunca fueron re-trabajadas.
7. **No hay comité de propuesta ni bid/no-bid.** Q1 produjo 26 propuestas para 2 ventas (cierre 1:13); Q2, 15 propuestas y 0 ventas. Nadie decide qué NO cotizar.
8. **Handoff a delivery inexistente** — riesgo directo sobre FR Medical si firma.
9. **No existe etapa de post-venta/Evolve con dueño**, aunque el modelo Evolve es la tesis de negocio completa ($60k-$95k/mes recurrentes).

---

## 2. PLAN DE PRIMEROS 30 DÍAS: COMPROMISOS Y ESTADO AL 15-SEP

**Línea de tiempo:** Día 1 = jueves 10 sep 2026; Día 2 = viernes 11 sep (taller FR Medical). Hoy 15 sep es **día 4 laboral**. El plan de 30 días vence **~viernes 9 de octubre de 2026**.

**Fase 1 (Día 1-3, 10-12 sep) — Accesos. Estado: ~15% completa.**
- Completado día 1: GA4, GTM, Clarity, Meta, TikTok, LinkedIn Ads (lectura), Looker Studio.
- **Vencidos y pendientes:** Webflow admin (`bluepixel.mx` y `cotiza.`), GSC con permiso delegado, definición de CRM, licencias de IA (Claude/OpenAI), Jira vs Trello, control de DNS (SPF `~all` + DMARC), sync con Juan Cano, permisos de administrador local con Mario (RRHH).
- **Bloqueo crítico:** sin Webflow ni GSC, los Quick Wins 1, 2 y 3 son inejecutables. Todo el plan de 30 días está represado detrás de 2 accesos.

**Fase 2 (Día 4-7, 15-18 sep) — Entrevistas internas. Empieza HOY, ninguna agendada en los documentos.**
Preguntas ya redactadas y sin hacer: a María (KPI exacto de éxito de Q1, presupuesto mensual real de Rocketing, disponibilidad semanal de cámara); a Pablo (señales tempranas de +$300k, mecánica de traspaso a Cuentas); a José (speed-to-lead actual); a Cubillos y Samantha (co-diseño PLG); a Juan Cano (automatizaciones existentes).

**Fase 3 (Día 8-14, ~21-25 sep) — Baseline y telemetría:** 4 pilares (tagging + Ads Conversion API; SEO semántico con JSON-LD `SoftwareApplication`/`OfferCatalog`; enrutamiento a los 3 Pilares de venta; MCP en 3 fases). No iniciado.

**Fase 4 (Día 15-30, ~26 sep - 9 oct) — Quick Wins:** (1) Clarity/Hotjar, (2) alerta speed-to-lead a WhatsApp/Discord, (3) directiva de 3 Clusters + negativas a Rocketing, (4) MCP → conversiones offline de Google Ads. No iniciados.

**Compromisos personales adquiridos, con contraparte:**
- **Con Leo:** conservar Notion intacto; expandir su MCP a enrutador maestro con 4 rutas (Notion, alerta Discord, GCLID a Ads, nurturing a HubSpot Free $0). Es un compromiso político además de técnico.
- **Con José de Buen:** alerta a Discord/WhatsApp en **<3 minutos** con LinkedIn del decisor y score ≥90.
- **Con Pablo Gómez:** mapear señales de presupuesto y estructurar el handoff a Cuentas/Evolve.
- **Con Rocketing (Diana, Daniel, Marily):** entregar la directiva de los 3 Clusters con lista maestra de keywords negativas; pedirles search terms reales y auditoría de canibalización `bluepixel.mx` vs `cotiza.bluepixel.mx`.
- **Con Jessica y Sergio Blanco:** entregarles el bloque de Voz del Cliente del taller para los ganchos de video. **Pendiente y vencido** (ver punto 4).
- **Con FR Medical:** propuesta formal **jueves 17 de septiembre, 11:00 AM, 45 minutos**. Faltan 2 días.

---

## 3. EL CASO FR MEDICAL

**Qué es.** FR Medical S.A. de C.V. (`frmedical.com.mx`), importador/distribuidor mexicano de alta especialidad: MedXpert Alemania (STRACOS fijación costal, STRATOS/P.E.S. para Pectus), Redax Italia (drenajes Drentech Unico, Kardia Spiral), Boston Medical USA (tubos T de Montgomery, stents), Novatech Francia, Zimmer Biomet, Vathin. Vende 85% B2B institucional (Ángeles, ABC, Médica Sur, San Javier, IMSS, ISSSTE, INER) y 15% B2C pacientes de Pectus. Sitio en WordPress/Elementor con GA4 `G-0Y46S0PQTB`. Toda su captación depende de humanos: 2 teléfonos, `cotizaciones@frmedical.com.mx` y un widget JoinChat no automatizado.

**Etapa actual.** Taller de levantamiento ejecutado el **viernes 11 sep (11:00-14:00)** con contadora y equipo administrativo/comercial del cliente. Minuta con **11 dolores confesados** y **12 módulos de solución** ya redactada. Propuesta "FR Medical Surgical OS" fechada 11 sep. **Siguiente hito: presentación ejecutiva jueves 17 sep, 11:00 AM.** En términos de funnel: es la **primera propuesta de Q3 2026** (Q3 lleva 0 propuestas y 0 ventas; no hay venta desde marzo).

**Cuánto vale — y la inconsistencia que hay que resolver HOY.** Tres cifras distintas conviven en tres archivos:

| Documento | Build | Evolve |
|---|---|---|
| `PROTOCOLO_GRABACION_AUDIO_Y_VOC_IA.md` | $300k – $600k | $60k – $90k/mes |
| `MINUTA_TALLER_FR_MEDICAL_2026.md` | $450k – $650k | $75k – $95k/mes |
| `PROPUESTA_INTEGRAL_FR_MEDICAL_SURGICAL_OS.md` | **$550,000 MXN** | **$85,000 MXN/mes** |

Ir a la mesa del jueves con tres rangos publicados internamente es riesgo de descuento. **Cifra a fijar: $550,000 Build + $85,000/mes Evolve.** Valor contrato año 1 ≈ **$1,360,000 MXN** [inferencia: Build 10 semanas + ~9.5 meses de Evolve dentro de los 12 meses].

**El hueco que hay que tapar antes del jueves.** La minuta es 100% cualitativa: **no contiene un solo número medido del cliente**. No dice cuántas llamadas nocturnas se pierden al mes, cuántas vueltas dobles hacen los mensajeros, cuántas horas tarda una cotización ni cuántos días cierra la contadora. Los únicos números del documento son claims de BluePixel (1.8s, 0.8s, 0.5s, "$50k-$150k por evento"). Sin baseline: (a) el ROI de la propuesta no es defendible ante un comité, (b) el caso de éxito nunca tendrá cifras publicables.

**Ruta para convertirlo en caso insignia (fechas concretas):**
- **17 sep, en la misma sesión:** pedir 6 números de baseline (llamadas perdidas 00:00-07:00/mes, horas promedio de emisión de cotización, % de pedidos con segunda vuelta, costo mensual de gasolina/viáticos, días de cierre de comisiones, ticket promedio de venta nocturna perdida) y meter cláusula de uso de marca + caso público en el contrato.
- **17 sep:** pedir los entregables que FR Medical ya se comprometió a dar: lista de precios oficial, catálogo de SKUs y plantilla de órdenes de servicio.
- **Semanas 1-3 del Build:** medir baseline formal antes del go-live. Sin esto, no hay caso.
- **Activos ya existentes que aceleran:** demo cotizador (`03_Prototipos_y_Codigo/Casos_de_Estudio/Cotizador_FR_Medical/index.html` y `surgical_os.html`), video del "momento ajá" grabado por Sergio, diagramas SVG (`arquitectura_fr_medical_os.svg`, `flujo_caso_2am.svg`, `roadmap_desarrollo_fr_medical.svg`).

**Oferta vertical replicable.** El Surgical OS es la primera instancia de un motor genérico: triage NLP de urgencia + validación algorítmica de órdenes + ERP Bridge por MCP + despacho con GPS + OCR de viáticos + Living SOPs. ICP replicable inmediato: **distribuidores mexicanos de dispositivos médicos de alta especialidad con inventario en consignación hospitalaria** (ortopedia, traumatología, cardiovascular, endoscopía) — mismo dolor de COFEPRIS, misma ventana nocturna, mismo ERP rígido. Precio de entrada empaquetado: Pilar 01 Diagnóstico FutureProof 2-4 semanas como puerta, Build como continuación. [inferencia] El mismo motor aplica sin reescribir arquitectura a distribución de maquinaria pesada (Constructora Alfa, ya en pipeline) y a logística/WMS (Logística Sur, ya en pipeline) — cambia el catálogo y las reglas, no el core.

---

## 4. VOC CON IA Y ESCALETA: ¿SON MOTORES REALES?

**El protocolo VOC: sí es real, y ya produjo.** Es operable sin comprar nada: grabadora nativa de Windows (`C:\Users\usarioBP\Documents\Grabaciones de sonido\`) + celular en modo avión como respaldo, guion de consentimiento de 30 segundos, ingesta directa del `.m4a` a Google AI Studio (Gemini 1.5 Pro, 2M tokens, sin transcripción previa), y un prompt maestro de 5 bloques. Prueba de que funciona: `MINUTA_TALLER_FR_MEDICAL_2026.md` (24KB, 11 dolores estructurados, 12 módulos) es el output de ese ciclo.

**Pero se ejecutó a la mitad, y la mitad que falta es justo la de marketing.** El prompt pide 5 bloques; la minuta solo entregó el bloque 1 (dolores) y parte del 5 (próximos pasos). **Faltan:** bloque 2 (las 5 frases textuales de Voz del Cliente con su ángulo de video), bloque 3 (reacción registrada al momento ajá y objeciones de COFEPRIS/privacidad/ERP), bloque 4 (matriz técnica: SKUs, canales, reglas de inventario central vs gaveta). Consecuencia: el diagnóstico sirvió a la propuesta, pero **Jessica y Sergio se quedaron sin munición** y el motor de contenido arrancó vacío. **Acción hoy (2 horas):** volver a correr el audio del 11 sep con los bloques 2, 3 y 4 del prompt maestro y entregar las frases textuales a Rocketing.

**La escaleta: es un motor válido con un defecto de frescura.** 11 piezas planeadas en 2h15 (3 entrevistas de fondo + 8 Pixel News). Los guiones de las 3 entrevistas están completos con hooks de 3 segundos y cierre. Pero la vida útil es corta: WSJ (8 sep), Reuters GPT-6 Astra (3 sep), AP NVIDIA-Hugging Face (3 sep) y AP Anthropic (9 sep) ya tienen 6-12 días al 15 de septiembre; el "RAMageddon" de Infobae es de **27 de febrero de 2026** — publicarlo como noticia hoy quema credibilidad. Los 3 temas de fondo (recién egresado vs IA, creativo vs programador, el espejismo del DIY con IA) son atemporales y son el activo de mayor valor: el Tema 3 es literalmente la battlecard comercial en formato video.

**Cómo operativizarlo semanalmente con el equipo que existe (ritmo de 5 días):**
- **Lunes 10:00 (30 min, Fabián):** curaduría de 3 noticias de los últimos 7 días + selección del insight VOC de la semana. Regla dura: nada con más de 10 días.
- **Martes (Jessica, Rocketing):** guiones con hook de 3 segundos y perspectiva BluePixel.
- **Miércoles 15:00-16:30 (Leo + María + Sergio):** **un solo bloque de 90 minutos de cámara a la semana**, no más. Salida: 1 pieza de fondo + 3 Pixel News.
- **Jueves-viernes (Sergio + René):** edición y publicación en LinkedIn (canal del ICP) + YouTube; Instagram y TikTok reciclan, no lideran.
- **Alimentación permanente:** cada taller o discovery con cliente se graba y pasa por el prompt maestro completo. Un taller = un caso + 5 frases VOC + 3 reels. Ese es el motor real, no las noticias.

---

## 5. CAPACIDAD REAL DEL EQUIPO Y CUELLO DE BOTELLA HUMANO

**Quién puede ejecutar qué (interno, 9 personas):** María (CEO: visión, cámara institucional, relación de alto nivel); **Leo Flores** (marketing + ventas + producto + arquitectura + dueño del MCP + voz principal de video); Fabián (RevOps, Python, MCP, pauta, SEO técnico, CRM); Pablo Gómez (cierre senior, 6 años, memoria histórica); José de Buen (prospección y seguimiento, 2 años); Juan Cubillos (UX/UI + software + sensibilidad de marketing, 6 años — el perfil híbrido más valioso); Samantha (diseño de producto/UI); Juan Cano (SEO técnico, Webflow, automatizaciones — es la llave de publicación); Mario (RRHH). **Rocketing (externo, 7):** Roberto Carro (dirección), Marily Calderón (gestión), Diana Cardoso (paid), Daniel Arias (SEO), Jessica Blanco (contenidos), Sergio Blanco (video), René (diseño).

**Horas-persona disponibles para growth por semana [inferencia, base 45h/semana laboral México — no existe registro de horas en los archivos]:**
- Fabián: **40h** (único 100% dedicado)
- Leo: **8-10h** (los otros 35h están en producto, arquitectura y ventas)
- María: **2-4h** (cámara y relaciones)
- Pablo + José: 90h nominales, pero atendiendo **17-20 leads/mes** (≈5/semana cada uno) con 4 propuestas en agosto → **50-60% de capacidad comercial ociosa**
- Cubillos + Samantha: **4-6h** combinadas (el resto es facturable a cliente)
- Juan Cano: **3-5h** para prioridades de growth
- **Total útil ≈ 60-70h/semana, de las cuales Fabián es el 55-65%.**

**El cuello de botella humano es Leo, con Fabián como segundo cuello emergente.**
Leo es simultáneamente: líder de marketing, líder de ventas, líder de producto, arquitecto del MCP, aprobador de todo cambio técnico, protagonista de 3 de las 3 entrevistas de video, líder técnico del taller FR Medical, autor de la propuesta y —si FR Medical firma— responsable de entregar 12 módulos (agente de voz 24/7, ERP Bridge, triage NLP, app de mensajeros con GPS, OCR, portal de comisiones) **en 8-10 semanas**. El organigrama documentado **no nombra a un solo ingeniero de backend o de IA** fuera de Leo y Cubillos. Ese es el riesgo #1 del año: firmar $550k sin capacidad de entrega nombrada.

**Ironía operativa que conviene nombrar en voz alta:** los 11 dolores que BluePixel diagnosticó en FR Medical (conocimiento tribal, cero SOPs, doble captura, datos sepultados sin automatización, sin SLA, sin priorización objetiva) son **los mismos que padece BluePixel**. Es credibilidad si se convierte en dogfooding público; es hipocresía si un cliente lo descubre.

---

## 6. RITUALES Y GOBERNANZA: LO QUE EXISTE Y LO QUE FALTA

**Existe:**
- **Lunes 4:00 PM — Revisión de Looker Studio con Rocketing** (Marily, Diana y equipo). Único ritual recurrente documentado. La última corrió ayer 14 sep; la próxima es el **lunes 21 sep**. Hay material preparado: `GUIA_JUNTA_4PM_ESTRATEGIA_GOOGLE_ADS_3_PILARES.md`, `AUDITORIA_Y_PLAN_DE_ACCION_JUNTA_ROCKETING.md`, `JUSTIFICACION_EJECUTIVA_JUNTA_4PM.md`.
- **Junta con Leo 5:45 PM** — existe briefing dedicado (`ESTRATEGIA_JUNTA_LEO_5_45PM.md`). [inferencia] es de frecuencia irregular, no un ritual fijo.
- **Talleres con cliente (viernes 11:00-14:00)** — evento, no ritual; pero es el mejor formato que tiene la empresa: genera diagnóstico, propuesta y contenido en una sola sesión.
- **Pre-briefings de pasillo** antes de eventos grandes (documentados para el 11 sep).

**Falta (y es donde se pierde el dinero):**
1. **Junta semanal de pipeline y forecast** con Pablo, José y Leo. No existe. Por eso Q3 llegó a 0 propuestas sin que nadie tocara la alarma hasta septiembre.
2. **Revisión de SLA de speed-to-lead.** No hay SLA, no hay medición, no hay consecuencia.
3. **Comité de bid/no-bid** antes de invertir horas en una propuesta (41 propuestas en 2026 → 2 ventas).
4. **Junta mensual de negocio con María** sobre ROI de pauta. Con $292,426 de gasto anual, ROI de -100% en Q2 y 0 ventas desde marzo, no existe un foro documentado donde la CEO apruebe o corte presupuesto.
5. **Contrato de desempeño con Rocketing.** El ritual del lunes es de *reporte*, no de *decisión*. No hay KPI acordado, ni SLA de agencia, ni cláusula de desempeño — y se gastaron $235.69K MXN del 1 al 13 de septiembre.
6. **Fuente única de verdad del gasto.** El reporte de campañas marca $191.8K en Google del 1-13 sep mientras el overview de Google Ads marca $13,621.35 mensuales. Mientras no se concilie, ninguna junta del lunes puede tomar una decisión real. [inferencia: son dos cortes/cuentas distintas, pero nadie lo ha reconciliado por escrito]
7. **Bloque fijo de producción de contenido** (los 90 minutos del miércoles). Sin fecha en calendario, el motor de video depende del ánimo post-taller.
8. **QBR con clientes de cartera.** Mencionado en el glosario, inexistente en la operación — con churn subiendo de 2.5% (jul) a 4.2% (sep) y MRR cayendo de $55k a $42.5k, la ausencia de este ritual es medible en pesos.
9. **Retro de propuesta perdida (win/loss).** Nadie documenta por qué se cayeron las 15 propuestas de Q2.

---

**Archivos clave (rutas absolutas):**
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\01_Onboarding_y_Guias\MINUTA_TALLER_FR_MEDICAL_2026.md` — 11 dolores + 12 módulos; sin baseline numérico
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\01_Onboarding_y_Guias\PROPUESTA_INTEGRAL_FR_MEDICAL_SURGICAL_OS.md` — $550k Build / $85k mes Evolve
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\01_Onboarding_y_Guias\PROTOCOLO_GRABACION_AUDIO_Y_VOC_IA.md` — prompt maestro de 5 bloques (solo se corrieron 1 y 5)
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\01_Onboarding_y_Guias\playbook_primeros_30_dias.md` — Fase 1 al ~15%, bloqueada por Webflow y GSC
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\02_Estrategia_B2B\ESTRATEGIA_MAESTRA_BLUEPIXEL_2026.md` — §2.3 arquitectura MCP/Notion/CRM y §1.5 checklist de accesos
- `C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\03_Prototipos_y_Codigo\Archivos_CSV\prospectos_q3_2026.csv` — 7 registros sin etapa, monto ni dueño; FR Medical ausente

**Las 3 acciones con fecha que salen de esta lectura:** (1) hoy 15 sep, re-correr el audio del taller con los bloques 2-4 del prompt VOC y fijar el precio en $550k/$85k; (2) jueves 17 sep 11:00 AM, presentar propuesta y salir con los 6 números de baseline + cláusula de caso público; (3) lunes 21 sep 4:00 PM, convertir la junta de Rocketing de reporte a decisión con KPI acordado y conciliación del gasto real de septiembre.