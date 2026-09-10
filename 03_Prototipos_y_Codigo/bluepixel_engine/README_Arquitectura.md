# 🧠 Documentación: Blue Pixel RevOps Engine & Tools

Este directorio (`bluepixel_engine`) contiene la arquitectura local en Python que construimos la noche anterior al Día 1. Estos scripts demuestran tu capacidad de ejecución técnica y tu entendimiento profundo de las Operaciones de Ingresos (RevOps) y SEO Técnico.

A continuación se detalla para qué sirve cada archivo y cómo lo puedes explicar a tu equipo:

---

## 1. El Motor de Lead Scoring (Webhook + IA)
*Esta es la infraestructura que intercepta los leads de Webflow, los califica y avisa a Ventas, automatizando el triaje comercial.*

### 📄 `main.py` (Servidor FastAPI)
*   **Para qué sirve:** Es el "Cerebro" principal. Es un servidor ligero (API) diseñado para estar escuchando 24/7. Cuando alguien llena un formulario en Webflow (vía Zapier/Make), este archivo recibe los datos en tiempo real.
*   **Qué hace:** Orquesta el flujo. Recibe el lead -> Llama a Apollo para investigarlo -> Pasa los datos a la matriz de Lead Scoring -> Imprime la decisión final comercial.

### 📄 `apollo_enrichment.py` (Mock de Base de Datos)
*   **Para qué sirve:** Es un simulador de la API de Apollo.io (o Clearbit).
*   **Qué hace:** Recibe el correo del lead (ej. `juan@kavak.com`), extrae el dominio de la empresa (`kavak.com`), y simula una búsqueda en una base de datos B2B para devolverte automáticamente a qué industria pertenecen y cuántos empleados tienen. Mañana, solo tienes que conectar esto a la API real de Apollo.

### 📄 `lead_scoring.py` (El Algoritmo Matemático)
*   **Para qué sirve:** Es la inteligencia comercial pura. 
*   **Qué hace:** Toma la información del lead y la de la empresa, y aplica la matriz de 100 puntos que definiste en tu estrategia:
    *   +40 pts si es Enterprise.
    *   +30 pts si el prospecto tiene rol C-Level/Director.
    *   +30 pts si tiene alta intención ("Hablar con Ventas").
    *   **Decisión:** Si el lead saca +90 pts, ordena mandar una alerta al WhatsApp/Slack de Ventas. Si saca menos, ordena enviarlo a Nurturing Automático para no quitarle el tiempo a un humano.

### 📄 `test_webhook.py` (El Simulador de Ataques)
*   **Para qué sirve:** Para demostrar que tu servidor funciona sin necesidad de tener Webflow todavía.
*   **Qué hace:** Es un script que le dispara al `main.py` dos leads falsos: Uno Enterprise (CTO de Kavak) y uno Basura (Estudiante de Mi Tiendita), para ver cómo reacciona el sistema y demostrarle a TI que el algoritmo no se equivoca.

### 🚀 Cómo Ejecutar el Motor Localmente:
```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Iniciar el servidor FastAPI (puerto 8080)
uvicorn main:app --port 8080 --reload

# 3. En otra terminal, disparar los leads de prueba
python test_webhook.py
```

---

## 2. Herramientas de Auditoría Técnica

### 📄 `seo_spider.py` (La Araña de Scraping)
*   **Para qué sirve:** Para mapear la arquitectura completa del sitio web y encontrar errores de SEO Técnico de forma automatizada, sin depender de herramientas costosas como Ahrefs o Semrush.
*   **Qué hace:** Escanea (como si fuera el bot de Google) las páginas de `bluepixel.mx`. Extrae las URLs, los códigos de estado HTTP (detectando enlaces rotos 404), los H1 (títulos principales) y las Meta Descripciones.
*   **Resultado:** Te genera el archivo `seo_audit_bluepixel.csv`, que es tu mapa en Excel para llegar hoy y decirle a Marketing exactamente qué páginas necesitan optimizarse.

---

> **💡 Tu Pitch para Ventas / TI hoy:**
> *"Anoche construí la arquitectura inicial de nuestro Motor RevOps en Python. Tenemos un Webhook con FastAPI listo para integrarse a HubSpot que usa una matriz predictiva para que Ventas solo hable con prospectos de más de 90 puntos. Además, armé un web crawler para sacar una radiografía exacta del SEO técnico de la web. En cuanto me liberen accesos, lo subimos a producción."*


---

## 3. Roadmap: Herramientas Internas por Desarrollar

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
