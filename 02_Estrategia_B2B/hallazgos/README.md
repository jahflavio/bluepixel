# Hallazgos — Análisis Forense BluePixel (15 sep 2026)

Nueve análisis independientes sobre todo el material de la empresa, producidos en paralelo y cruzados entre sí. Son la materia prima de [`PLAN_REACTIVACION_2026.html`](../PLAN_REACTIVACION_2026.html) y de [`SPEC_ORQUESTADOR_MCP.html`](../SPEC_ORQUESTADOR_MCP.html).

Cada documento cita archivo y línea o número y fuente. Lo marcado como `[inferencia]` es estimación derivada, no dato medido.

## Los nueve análisis

| Archivo | Qué cubre | Hallazgo que más pesa |
|---|---|---|
| [`lee_finanzas-y-pipeline.md`](lee_finanzas-y-pipeline.md) | CSVs de finanzas y prospectos, cruzados con el reporte de campañas | El churn destruyó $688,095 de valor de libro — 58% de toda la destrucción, más que la caída de ventas |
| [`lee_reporte-campanas.md`](lee_reporte-campanas.md) | Forense de medios pagados, campaña por campaña | 93.7% del gasto de septiembre no tiene respaldo de plataforma: $220,829 sin verificar |
| [`investiga_mercado-y-competencia.md`](investiga_mercado-y-competencia.md) | Mercado mexicano 2026, 19 competidores, benchmarks, GEO/AEO | Clutch publica $50–99 USD/hora y reseñas SMB mientras el sitio muestra Bimbo y BBVA |
| [`lee_seo-y-contenido.md`](lee_seo-y-contenido.md) | SEO, calendario editorial de 28 piezas, GEO, redes sociales | Las 20 páginas del dominio están en inglés; los 21 leads orgánicos son en español |
| [`lee_estrategia-maestra.md`](lee_estrategia-maestra.md) | Auditoría de los 4 documentos estratégicos canónicos | 16 contradicciones internas, y el "70% de conversión del Diagnóstico" nunca se ha medido |
| [`lee_codigo-sitio-nuevo.md`](lee_codigo-sitio-nuevo.md) | El sitio React como máquina de conversión | 35% de preparación: el formulario hace `console.log` y no hay un solo tag |
| [`lee_auditoria-web.md`](lee_auditoria-web.md) | Sitio actual, rediseño planeado y riesgo de migración | Las rutas hash `#/apps` no son indexables ni sirven como destino de anuncio |
| [`lee_demos-y-engine.md`](lee_demos-y-engine.md) | Las 4 demos PLG, las 10 landings y el `bluepixel_engine` | El umbral de `lead_scoring.py` es matemáticamente inalcanzable: enruta el 100% a nurturing |
| [`lee_playbooks-y-caso-frmedical.md`](lee_playbooks-y-caso-frmedical.md) | Proceso comercial, caso FR Medical, capacidad del equipo | Tres precios distintos circulando para FR Medical; el VOC se corrió a la mitad |

## Fuentes extraídas

`fuentes/` contiene el texto plano de los dos PDFs, para poder citarlos y buscarlos sin reabrirlos:

- `reporte_campanas_sep2026.txt` — reporte de Rocketing, 1–13 de septiembre de 2026
- `bp_agents_arquitectura.txt` — arquitectura de agentización de marketing en 6 capas

## Las tres discrepancias de datos sin resolver

Están señaladas en los análisis y bloquean decisiones de presupuesto. Ninguna se ha cerrado:

1. **Gasto de medios de septiembre.** $235,690 según el panel de presupuesto contra $14,861 según los paneles de plataforma. Factor de 15.9×.
2. **Leads orgánicos de septiembre.** Tres cifras en el mismo reporte: 21, 13 y 1.
3. **Definición de "nuevos clientes".** El CSV reporta 130 en nueve meses; el reporte de marketing reporta 2 ventas en ocho. Los dos libros son irreconciliables.

Y una cuarta, detectada después en `bd_dashboard_v7`: muestra $31.2M de venta anual con Q3 en verde, cuando el funnel reporta cero ventas desde marzo.
