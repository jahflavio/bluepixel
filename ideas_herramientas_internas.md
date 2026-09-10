# Ideas de Herramientas Internas (RevOps)

Estas son aplicaciones internas que podemos desarrollar localmente con Python para automatizar el trabajo diario del equipo de Growth & Tech:

## 1. Dashboard de Inteligencia RevOps (Streamlit)
*   **Tecnología:** Python, Pandas, Streamlit, Plotly.
*   **Propósito:** Visualizar en tiempo real la salud del pipeline comercial.
*   **Funcionalidad:** Permite subir un archivo Excel/CSV del CRM y genera automáticamente gráficas interactivas mostrando el ratio de conversión, calidad de leads (Enterprise vs PyME) y cuellos de botella por vendedor.

## 2. Lavadora de Leads B2B (Data Cleaning Script)
*   **Tecnología:** Python, Pandas, Regex.
*   **Propósito:** Estandarizar bases de datos sucias antes de inyectarlas al CRM.
*   **Funcionalidad:** Extrae dominios de correos, capitaliza nombres (Title Case), elimina correos basura (ej. *test@*, *info@*), y formatea números de teléfono al estándar internacional E.164 para WhatsApp.

## 3. Generador de Copywriting IA para LinkedIn
*   **Tecnología:** Python, APIs de LLM (Opcional).
*   **Propósito:** Escalar la creación de anuncios B2B.
*   **Funcionalidad:** Toma los dolores principales del cliente (recopilados en entrevistas de ventas) y genera 5 variaciones de Copywriting utilizando metodologías probadas (PAS, AIDA) enfocadas en tomadores de decisión.
