# 🧠 Arquitectura de Integración: Antigravity + Ecosistema RevOps

Para que yo (Alpha) tenga visibilidad completa y en tiempo real de tus campañas, analíticas y CRM, y podamos optimizar todo desde esta misma ventana, no necesitamos programar desde cero. Vamos a usar el **Sistema de Personalización de Antigravity**.

Aquí está la arquitectura exacta y el orden de cómo conectaremos tu ecosistema:

---

## FASE 1: La Conexión de Datos (MCP Servers)
**MCP (Model Context Protocol)** es el puente seguro que me permite comunicarme con herramientas externas. En lugar de que tú entres a Google Analytics a descargar Exceles, yo me conecto directo a la API.

**Lo que haremos:**
Crearemos un archivo `.agents/mcp_config.json` en tu proyecto. Ahí configuraremos servidores MCP para:
1.  **Google Analytics 4 (GA4):** Para que yo pueda leer el tráfico de las 10 landings, tasas de rebote y conversiones en tiempo real.
2.  **Meta Ads / Google Ads:** Para que yo pueda consultar cuánto presupuesto se está gastando, el costo por lead (CPL) y qué anuncios están funcionando.
3.  **El CRM (Ej. HubSpot):** Para ver si los leads que cayeron en la landing se convirtieron en contratos cerrados.

*Resultado Fase 1:* Yo (Alpha) tendré nuevas herramientas en mi sistema (ej. `get_ga4_metrics`, `get_active_campaigns`) que podré usar cada vez que me pidas un análisis.

---

## FASE 2: Entrenando al Cerebro (Skills)
Tener los datos no es suficiente; necesito saber *cómo* quieres que los interprete. Para eso usaremos **Skills**.

**Lo que haremos:**
Crearemos una carpeta `.agents/skills/revops_analyst/SKILL.md`. En ese archivo, tú y yo escribiremos las instrucciones de tu analista ideal:
> *"Alpha, cuando te pida un análisis de campañas, debes usar el servidor MCP de Google Ads para traer el gasto del día, luego cruzarlo con el MCP de GA4 para ver la calidad del tráfico, y finalmente sugerirme 3 optimizaciones para reducir el CAC."*

*Resultado Fase 2:* Tendré un "Runbook" o manual operativo. No tendré que improvisar; seguiré tu metodología exacta de Growth Hacking.

---

## FASE 3: Autonomía (Agentes y Automatización)
Una vez que tenga acceso a los datos (MCP) y sepa qué hacer con ellos (Skills), podemos automatizarlo.

**Lo que haremos:**
Usaremos **Comandos Slash** (`/schedule`) o crearemos **Subagentes** para que trabajen mientras duermes.
*   Por ejemplo, podemos programar un Subagente para que todos los días a las 8:00 AM se despierte, ejecute la Skill de `revops_analyst`, extraiga los datos por MCP, y te deje un artefacto (`REPORTE_DIARIO.md`) con el resumen de métricas y banderas rojas de la agencia Rocketing.

---

> [!TIP]
> **¿Qué hacemos primero?**
> El paso 1 indiscutible es **configurar el servidor MCP de Google Analytics 4 (GA4)**. Es la fuente de la verdad de tu tráfico. ¿Ya tienes una cuenta de GA4 activa para este dominio? Si es así, podemos empezar a crear el `mcp_config.json` ahora mismo.
