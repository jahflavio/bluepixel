# 📋 Escaleta Junta 10:30 — CEO María · BluePixel
**23 de Septiembre 2026 · ~50 min · Dos temas: Campañas Rocketing + Presentación Red Cherry**

---

## 📊 KPIs de Contexto (Para María)

| Métrica | Dato | Contexto |
|---------|------|---------|
| ROI Q2/Q3 | **-100%** | 0 ventas de 21 cotizaciones enviadas |
| Tasa de cierre | **1:50** | Antes era 1:10. Caída por desfase de percepción |
| Contactabilidad Sep | **16.7%** | Solo 1 de cada 6 prospectos contesta |
| Presupuesto propuesto | **$43,500 MXN/mes** | vs $30,000 anteriores atomizados en Google |

---

## 🌐 PARTE 1: CAMPAÑAS ROCKETING (~30 min)

### 1. Diagnóstico: Por Qué No Vendíamos (~5 min)
- 🔴 **35 campañas a $28 MXN/día cada una.** El algoritmo de Google necesita 30+ conversiones para optimizar. Con $28/día jamás llega. Dinero quemado sin aprendizaje.
- 🔴 **El sitio comunicaba "agencia de diseño", no ingeniería de IA.** Los CTOs llegaban buscando agentes IA en producción y veían pantallas bonitas. Rebotaban.
- 🟢 **Rocketing ya entendió.** Su nueva propuesta de 3 clusters se alinea con nuestra estrategia. Solo necesitamos aprobación y darles las reglas de ejecución.

### 2. Nueva Distribución de Presupuesto — Aprobación Requerida (~8 min)

| Plataforma | Presupuesto | Objetivo |
|------------|-------------|---------|
| 🌐 Google Ads | **$23,500 MXN** | 3 clusters (Apps, Automatización, IA) con landings herméticas |
| 💼 LinkedIn Ads | **$12,000 MXN** | Lead Gen Forms para CTOs/COOs. Oferta: "Blueprint de Arquitectura" |
| 📱 Meta Ads | **$5,500 MXN** | Solo Retargeting. Audiencias Similares PAUSADAS |
| 🤖 ChatGPT Ads | **$2,500 MXN** | Test pionero en LATAM. Decisores buscando IA en ChatGPT |
| **TOTAL** | **$43,500 MXN/mes** | |

> 🟡 **Decisión de María:** ¿Aprueba el presupuesto de $43,500 MXN/mes?

### 3. Handoff para Rocketing — Aprobación Requerida (~7 min)
- 📋 **SLA con 6 Reglas de Oro:** Sin navbar, noindex, copy canónico, GCLID en formularios, Keywords Negativas.
- 📄 **Copy canónico de las 3 Landings** (Clusters 1, 2 y 3): H1, Subtítulo, CTA, Trust Signals (Bimbo +40%, RadioShack), Footer hermético.
- ✅ **YA HECHO:** Keywords Negativas cargadas a nivel cuenta (gratis, cursos, tutoriales, freelancers).
- ⚠️ **PENDIENTE:** Definir URL transitoria para el tráfico activo mientras `/lp/*` definitivas terminan.

> 🟡 **Decisión de María:** ¿Aprueba el SLA y copys para enviárselos hoy a Rocketing?

### 4. Bucle Cerrado: Servidor MCP ↔ Google Ads API (~5 min)
- ❌ **Problema actual:** Rocketing optimiza hacia "formularios llenos". Trae prospectos de $20k, no de $300k+.
- ✅ **Solución:** Ya tenemos acceso de administrador a Google Ads. Leo extrae el Developer Token internamente y conecta el Servidor MCP. Cada venta cerrada le avisa a Google → el algoritmo aprende el perfil correcto.

> 🟡 **Decisión de María:** ¿Autoriza conectar el Servidor MCP con la API de Google Ads?

---

## 🍒 PARTE 2: PRESENTACIÓN RED CHERRY (~20 min)

### 5. Contexto Red Cherry: Quiénes Son y Qué les Duele (~5 min)
**Red Cherry** — Agencia de marketing experiencial en México (~30 empleados). Directores: Marlene y Oliver. Sin visibilidad ejecutiva en tiempo real.

| Pain Point | Solución BluePixel |
|-----------|-------------------|
| 😩 Priscilla (Media Director) arma cotizaciones en horas buscando en Excels | Agente RAG Cotizador: ingresa brief → precio + márgenes en segundos |
| 📊 Marlene y Oliver sin KPIs ejecutivos en tiempo real | Capacity Planner & Dashboard Financiero |
| 🔀 Proyectos asignados "al que esté disponible", no por rol | Módulo de Routing con IA por célula y capacidad real |
| 📱 Todo por WhatsApp. Sin Single Source of Truth | Portal de cliente self-service con aprobaciones digitales |

### 6. El Demo — FutureProof OS para Red Cherry (~10 min)

🔗 **Demo en vivo:** https://jahflavio.github.io/bluepixel/demos/redcherry/

| Módulo | WOW Para |
|--------|----------|
| 🤖 **Agente RAG Cotizador** | Priscilla. Ingresa brief → tabla de costos + márgenes + Total en segundos |
| 📊 **Capacity Planner & Finanzas** | Marlene y Oliver. Ingresos del Mes, Margen 34.2%, Capacidad 82%, Gráfica por unidad |

> 💡 No es un prototipo de Figma. Es una app funcional interactiva. Esto diferencia a BluePixel de cualquier agencia UX.

### 7. Estrategia de Cierre con Red Cherry (~5 min)
- ✅ **Entrada por Pilar 01:** Consultoría Digital, Diagnóstico IMPATH™ (2-4 semanas). No proponer ERP completo → shock de precio.
- 💡 **Argumento clave:** El código y datos residirán en la nube de Red Cherry. Cero vendor lock-in.
- 📦 **BluePixel ya tiene el Capacity Planner validado.** Se modulariza como MVP. Semanas, no meses.

> 🟡 **Decisión de María:** ¿Confirma entrada por Pilar 01 y definir precio del Diagnóstico?

---

## ✅ LAS 7 DECISIONES QUE NECESITAN APROBACIÓN HOY

### Campañas Rocketing
- [ ] Aprobar presupuesto de **$43,500 MXN/mes** omnicanal
- [ ] Dar luz verde al **SLA y copys** de las 3 landings para Rocketing
- [ ] Definir **URL transitoria** para tráfico activo mientras terminan `/lp/*`
- [ ] Autorizar conexión **Servidor MCP ↔ Google Ads API** (Offline Conversions)

### Red Cherry
- [ ] Validar el **demo interactivo** de Red Cherry (RAG + Capacity Planner)
- [ ] Confirmar **entrada por Pilar 01** (Diagnóstico 2-4 sem, no ERP completo)
- [ ] Definir **precio del Diagnóstico** de entrada para Red Cherry

---

## 📂 Links y Recursos (Meeting Kit)

### 🍒 Bloque Red Cherry
*   **Demo Interactivo en Vivo:** [Red Cherry FutureProof OS](https://jahflavio.github.io/bluepixel/demos/redcherry/) *(Muestra este en pantalla)*
*   **Análisis Estratégico y Dolores:** [redcherry_analysis.md](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/red_cherry/redcherry_analysis.md)

### 🚀 Bloque Campañas Rocketing (Handoff y Propuesta)
*   **Propuesta Consolidada de Campañas (Presupuesto $43,5k):** [PROPUESTA_CONSOLIDADA_CAMPANAS_ROCKETING.md](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/PROPUESTA_CONSOLIDADA_CAMPANAS_ROCKETING.md)
*   **SLA de Handoff (Las 6 Reglas de Oro):** [SLA_HANDOFF_ROCKETING_LANDINGS.md](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/Handoff_Rocketing/SLA_HANDOFF_ROCKETING_LANDINGS.md)
*   **Copy Landing Cluster 1 (Apps):** [LANDING_COPY_CLUSTER1_APPS.html](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/Handoff_Rocketing/LANDING_COPY_CLUSTER1_APPS.html)
*   **Copy Landing Cluster 2 (Automatización):** [LANDING_COPY_CLUSTER2_AUTO.html](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/Handoff_Rocketing/LANDING_COPY_CLUSTER2_AUTO.html)
*   **Copy Landing Cluster 3 (IA):** [LANDING_COPY_CLUSTER3_IA.html](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/Handoff_Rocketing/LANDING_COPY_CLUSTER3_IA.html)

### 📁 Extra
*   **Hub de todos los Demos:** [jahflavio.github.io/bluepixel/demos/](https://jahflavio.github.io/bluepixel/demos/)

---
*BluePixel · Documento Interno Confidencial · 23 de Septiembre 2026*
