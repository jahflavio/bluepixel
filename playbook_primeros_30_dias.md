# 🚀 PLAYBOOK: TUS PRIMEROS 30 DÍAS EN BLUE PIXEL
*Guía táctica para tomar el control de tu puesto de Growth & Tech sin generar fricciones, mapeando el ecosistema y logrando "Quick Wins" (victorias rápidas) en tu primer mes.*

---

## 🔑 FASE 1: DÍA 1 AL 3 (Auditoría de Accesos y Ecosistema)
*No puedes optimizar lo que no puedes ver. Tu prioridad es conseguir las llaves del reino.*

**Lo que necesitas pedir (Levanta un ticket a TI o a tu Jefe):**
- [ ] **CMS:** Acceso Administrador (o Editor Avanzado) a **Webflow**.
- [ ] **CRM:** Acceso a **HubSpot** (o el CRM que usen) con permisos para ver Pipelines de Ventas y crear Workflows.
- [ ] **Analítica:** Acceso Administrador a **Google Analytics 4** y **Google Search Console**.
- [ ] **Pauta (Ads):** Acceso de Lectura a **Google Ads**, **LinkedIn Ads** y Meta Ads (para ver qué hace la agencia externa).
- [ ] **Comunicación:** Acceso a los canales de Slack/Teams relevantes (Marketing, Ventas, General).
- [ ] **Dominios:** Pregunta quién tiene el control del DNS (GoDaddy, Cloudflare, etc.) por si necesitas crear el subdominio `go.bluepixel.mx` o verificar dominios.

---

## 🗣️ FASE 2: DÍA 4 AL 7 (Mapeo de Aliados y Entrevistas Internas)
*No impongas la tecnología todavía; primero entiende los dolores de la gente.*

### 1. Entrevista con tu Jefe (Directora / CEO)
- *"Para asegurarme de que estamos alineados: ¿Cuál es el KPI exacto que dictará si mi primer trimestre (Q1) fue un éxito?"* (Ej. MQLs, SQLs, Costo de Adquisición).
- *"¿Cuál es el presupuesto mensual exacto (Ad Spend) que tiene la agencia externa actualmente?"*
- *"¿Existe alguna línea roja que no deba cruzar?"* (Ej. No cambiar el logo, no molestar a los grandes corporativos con spam).

### 2. Entrevista con Ventas (Tus clientes internos)
- *"¿Cuál es la queja número #1 que tienen de los leads que les llegan de la web?"*
- *"De los campos que el cliente llena en el formulario, ¿cuál es el que realmente les dice a ustedes si el cliente tiene dinero o no?"* (Esto será la base de tu Lead Scoring).
- *"Actualmente, ¿cuánto tiempo tardan en contactar a un lead desde que llena el formulario?"* (Aquí mides el Speed-to-lead actual).

### 3. Entrevista con la Agencia Externa
- Preséntate como un aliado estratégico, no como una amenaza.
- *"Hola equipo, mi rol es ayudarles a que sus campañas conviertan mejor optimizando la web. ¿Me pueden compartir su último reporte de rendimiento y cuál es el CPA (Costo por Adquisición) que están manejando?"*
- Pídeles la lista de las **Keywords** (Palabras clave) exactas que están comprando en Google Ads.

### 4. Entrevista con TI / Desarrollo
- *"¿Cómo manejan los pases a producción en la web principal?"*
- *"¿Tienen algún problema con que yo inyecte scripts de tracking (Google Tag Manager / Clarity) en el Head de Webflow?"*

---

## 📊 FASE 3: DÍA 8 AL 14 (Estableciendo el "Baseline")
*Documenta cómo está la empresa el Día 1, para que puedas demostrar cuánto la mejoraste el Día 90.*

**Registra estos números en un Excel privado:**
1. Tráfico web mensual actual (GA4).
2. Tasa de Conversión promedio de la web (Leads totales / Visitas totales).
3. Costo por Lead actual (Lo que gasta la Agencia / Leads generados).
4. Tasa de Cierre de Ventas (Cuántos leads se convierten en clientes de pago).

---

## 🏆 FASE 4: DÍA 15 AL 30 (Los "Quick Wins" o Victorias Rápidas)
*Es hora de ejecutar la Estrategia Puente y demostrar tu valor.*

- [ ] **Quick Win 1 (Clarity):** Instala Microsoft Clarity (o Hotjar) silenciosamente en Webflow. A los pocos días, muéstrale a tu jefe un video real de cómo los usuarios se pierden en la web. (Impacto visual masivo).
- [ ] **Quick Win 2 (Speed-to-lead):** Configura la primera alerta webhooks -> WhatsApp/Telegram para el equipo de ventas. Cuando un vendedor reciba el lead en su celular en 5 segundos, te amará.
- [ ] **Quick Win 3 (Estrategia Puente):** Lanza tu primera Landing Page optimizada dentro de Webflow para una campaña específica de la agencia externa. Mide la diferencia de conversión contra la web anterior.

---

## 🛠️ FASE 5: CÓMO EJECUTAR LOS QUICK WINS (Paso a Paso Técnico)

### 🚀 Quick Win 1: Arreglar el Tracking de Mixpanel (Form Submitted)
Actualmente miden la intención, pero no la conversión real.
1. Entra al **Webflow Designer**.
2. Ve a los ajustes (Settings) de la página o al Custom Code global (Project Settings > Custom Code).
3. Busca el script donde inicializan Mixpanel. Justo debajo, agrega este código jQuery que detecta cuando Webflow valida y envía el formulario exitosamente:
```javascript
<script>
  // Detecta el envío exitoso del formulario nativo de Webflow
  $(document).ajaxComplete(function(event, xhr, settings) {
    if (settings.url.includes("https://webflow.com/api/v1/form/")) {
      if (xhr.status === 200) {
        mixpanel.track("Form Submitted", {
          form_name: "email-form",
          url: window.location.href
        });
      }
    }
  });
</script>
```
4. Publica el sitio. Ahora sí verás conversiones reales en Mixpanel.

### 🔌 Quick Win 2: Puente Webflow -> CRM (HubSpot)
El formulario nativo de Webflow guarda los leads en su propia base de datos, aislándolos de Ventas.
1. Abre **Zapier** o **Make.com**.
2. Crea un nuevo flujo (Zap/Scenario).
3. **Trigger (Disparador):** Selecciona *Webflow* -> Evento: *Form Submission*. Conecta tu cuenta y selecciona tu sitio y el formulario `email-form`.
4. **Action (Acción):** Selecciona *HubSpot* -> Evento: *Create or Update Contact*.
5. Mapea los campos: El 'Email' de Webflow al 'Email' de HubSpot, etc.
6. (Opcional): Agrega un paso final en Zapier: Si el presupuesto/tamaño es alto, manda un mensaje a **Slack/WhatsApp** notificando a Ventas. Activa el Zap.

### 🗂️ Quick Win 4: Setup de Campos en CRM (Previo al Webhook)
Antes de aventar los datos, necesitamos donde recibirlos.
1. Entra a HubSpot (o el CRM actual).
2. Ve a Configuración > Propiedades de Contacto.
3. Crea: `Lead Score B2B`, `Tamaño de Empresa`, `UTM Source`, `UTM Campaign`.

### 💼 Quick Win 3: Inyectar el LinkedIn Insight Tag
Indispensable para hacer retargeting a perfiles C-Level (CTOs).
1. Entra a **LinkedIn Campaign Manager**.
2. Ve a *Analyze* -> *Insight Tag* y copia el código JavaScript.
3. Entra a **Webflow** -> *Project Settings* (Ajustes del proyecto) -> *Custom Code* (Código personalizado).
4. Pega el código de LinkedIn en la sección **"Footer Code"** (o en el Head, según indique LinkedIn).
5. Guarda y publica el sitio.
6. Regresa a LinkedIn y verifica que el tag esté "Activo" (puede tardar un par de horas en recibir señal).
