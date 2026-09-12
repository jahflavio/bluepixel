# 🛰️ GUÍA Y ARQUITECTURA: SERVIDOR MCP DE AUDITORÍA DE MARKETING & PAUTA (BLUEPIXEL)
*Documento de referencia técnica para conectar Meta Ads, LinkedIn Ads, Google Ads, GA4 y CRM vía Model Context Protocol (MCP).*

---

## 🎯 1. OBJETIVO DE LA INTEGRACIÓN MCP

Permitir que el agente de IA de BluePixel (Antigravity) consulte en tiempo real las plataformas publicitarias y analíticas para ejecutar **auditorías forenses continuas**, optimizar el presupuesto mensual de la agencia (**Rocketing / Diana Cardoso**) y solucionar la caída de conversión de **1:10 a 1:50**.

```
┌───────────────────────────────────────────────────────────────────────┐
│                       PLATAFORMAS CONECTADAS                          │
│                                                                       │
│  [ Google Ads API ]      [ Meta Marketing API ]   [ LinkedIn Ads ]    │
│  (Search Terms, CPC)     (Campañas, Audiencias)    (Demografía C-Level)│
│           │                         │                       │         │
└───────────┼─────────────────────────┼───────────────────────┼─────────┘
            ▼                         ▼                       ▼
┌───────────────────────────────────────────────────────────────────────┐
│           SERVIDOR MCP DE MARKETING (Python / Node.js Local)          │
│                      `mcp_marketing_audit`                            │
│                                                                       │
│  Herramientas Expuestas al Agente:                                    │
│  • `audit_spend_leakage()`          • `get_linkedin_demographics()`   │
│  • `extract_negative_keywords()`    • `cross_crm_revenue_roas()`      │
└───────────────────────────────────┬───────────────────────────────────┘
                                    │
                                    ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     ANTIGRAVITY / CO-PILOTO IA                        │
│             Diagnóstico, CRO en 9 Landings y Alertas                  │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ 2. CONFIGURACIÓN DEL SERVIDOR MCP (`mcp_config.json`)

Para activar el servidor, se registra en el archivo de configuración global de Antigravity:  
📂 **Ruta:** `~/.gemini/config/mcp_config.json` o `.agents/mcp_config.json`.

```json
{
  "mcpServers": {
    "marketing-auditor": {
      "command": "python",
      "args": ["c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/mcp_marketing_audit/server.py"],
      "env": {
        "GOOGLE_ADS_DEVELOPER_TOKEN": "TU_TOKEN_GOOGLE",
        "GOOGLE_ADS_CUSTOMER_ID": "ID_CUENTA_BLUEPIXEL",
        "META_ACCESS_TOKEN": "TOKEN_LARGA_DURACION_META",
        "META_AD_ACCOUNT_ID": "act_XXXXXXXXXXXX",
        "LINKEDIN_CLIENT_ID": "TU_CLIENT_ID_LINKEDIN",
        "LINKEDIN_CLIENT_SECRET": "TU_CLIENT_SECRET_LINKEDIN",
        "LINKEDIN_ACCOUNT_ID": "urn:li:sponsoredAccount:XXXXXXX",
        "NOTION_API_KEY": "TOKEN_MCP_LEO_NOTION"
      }
    }
  }
}
```

---

## 🔑 3. CREDENCIALES Y ACCESOS REQUERIDOS (Checklist para Diana / Rocketing)

Cuando decidamos activar la conexión en vivo, solicitaremos a Diana y al equipo de Rocketing las siguientes credenciales:

### A. Google Ads & GA4:
* **Customer ID de Google Ads** (formato `XXX-XXX-XXXX`).
* **Service Account JSON** o Developer Token con permisos de lectura (*Read-Only*) en la cuenta de `bluepixel.mx` / `cotiza.bluepixel.mx`.
* **Property ID de GA4** para cruce de sesiones y tasa de rebote.

### B. Meta Ads (Facebook & Instagram):
* **ID de la Cuenta Publicitaria** (`act_XXXXXXXXX`).
* **User Access Token de larga duración (System User)** con permisos:
  * `ads_read`
  * `read_insights`
  * `pages_read_engagement`

### C. LinkedIn Campaign Manager:
* **Account ID de LinkedIn Ads**.
* **Access Token OAuth 2.0** con scopes:
  * `r_ads`
  * `r_ads_reporting` (para extraer demografía de cargos, antigüedad e industrias).

---

## 📊 4. LOS 5 MÓDULOS DE LA AUDITORÍA FORENSE 360°

Una vez conectado, el sistema ejecutará de forma periódica o a petición los siguientes análisis:

### 1. Fuga de Presupuesto (*Spend Leakage*)
* Detección de anuncios o conjuntos con gasto acumulado > $5,000 MXN sin generar ningún lead calificado (SQL).
* Alerta de pausas recomendadas inmediatas para reasignar presupuesto a campañas ganadoras.

### 2. Calidad de Audiencia y Demografía (El Filtro del 1:50)
* Auditoría de quién hace clic en LinkedIn y Meta: porcentaje de directores/CTOs vs. estudiantes/freelancers.
* Verificación de la efectividad de la lista semilla (*Customer Match*) enviada por Pablo.

### 3. Minería de Términos de Búsqueda (*Search Terms* Google Ads)
* Extracción automática de palabras clave reales que activaron anuncios en las 9 landings de `cotiza.bluepixel.mx`.
* Clasificación de términos basura ("gratis", "tutorial", "diseño de logos baratos", "empleo") y generación automática del archivo de **Palabras Negativas**.

### 4. Diagnóstico de Conversión en Landings (CRO On-Page)
* Correlación entre el costo por clic de cada landing y la tasa de conversión a formulario.
* Detección de fricciones y recomendación de inyección de las Demos PLG (Cotizador IA, Calculadora ROI, etc.).

### 5. Atribución de Ingresos y Cierre de Bucle (*Closed-Loop ROAS*)
* Cruce de la inversión publicitaria con los tratos marcados como "Ganados" por Pablo Gómez en el CRM de Notion.
* Cálculo del Costo Real de Adquisición de Cliente (CAC) y retorno sobre la inversión publicitaria (ROAS B2B real).

---

## 📌 ESTADO: GUARDADO PARA FASE POSTERIOR
Este plan de integración queda formalmente registrado y listo para ejecutarse en cuanto se decida priorizar la conexión técnica.
