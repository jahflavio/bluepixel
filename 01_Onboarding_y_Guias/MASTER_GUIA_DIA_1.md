# 👑 MASTER GUÍA: DÍA 1 EN BLUE PIXEL
*El panorama completo sintetizado. Lee esto antes de entrar por la puerta.*

---

## 🏢 1. LA EMPRESA Y EL NEGOCIO (Contexto Comercial)
*   **A quién le venden:** Principalmente a CTOs, Directores de Tecnología y CEOs de corporativos (Mid-Market / Enterprise).
*   **Qué venden:** Desarrollo de software, Infraestructura (Build) y Retainers de optimización/analítica (Evolve).
*   **El Filtro Económico:** Solo buscan proyectos que superen los $300,000 MXN. (Por eso tu Lead Scoring es vital).
*   **Infraestructura Pública Actual (Tu OSINT):**
    *   **Página Web:** Webflow (Ágil, fácil de inyectar código).
    *   **Analítica:** Mixpanel (Tienen cultura de datos) + GTM.
    *   **Correos:** Google Workspace (Gmail).
    *   **Mailing Masivo:** Mandrill.
    *   **SEO:** Google Search Console ya está verificado.

---

## 👥 2. EL EQUIPO: QUÉ HABLAR Y CON QUIÉN

### 🤝 Con Mario (Recursos Humanos)
*   **Tu objetivo:** Onboarding administrativo sin fricciones.
*   **La petición clave:** *"Mario, necesito que mi equipo tenga **Permisos de Administrador Local**. Usaré entornos de Python y APIs; si TI me bloquea la máquina, me retrasarán diario."*
*   **Dudas a resolver:** Horarios, días presenciales/híbridos, esquema de comunicación oficial (Slack/Teams).

### 🧠 Con Leonardo (Marketing y Ventas - Tu Entrevistador/Jefe)
*   **Tu objetivo:** Posicionarte como el "Director de Orquesta" técnico, no como un mercadólogo tradicional.
*   **Las peticiones clave:**
    1.  **Las Llaves:** Accesos a HubSpot, Webflow, GA4, GSC, LinkedIn Ads.
    2.  **El Shadowing:** *"Leo, quiero entrar de oyente (silenciado) a 2 o 3 llamadas de ventas esta semana para escuchar cómo hablan los CTOs y mejorar nuestros anuncios."*
    3.  **Los KPIs (Metas):** *"Para que en diciembre me digas que la rompí, ¿qué métrica exacta quieres ver? (¿Costo por lead, MQLs, SQLs?)"*
*   **Agencia Externa:** Pide que te presenten con ellos. Tú vas a orquestar el SEO/Conversión, y ellos van a ejecutar las campañas de pago (Ads).

---

## 🛠️ 3. LAS HERRAMIENTAS Y APIS (Tu Arsenal)

Si te preguntan qué herramientas vamos a usar para el "Motor RevOps", aquí tienes la respuesta exacta:

### Apollo.io vs Clearbit (El Enriquecimiento B2B)
Ambas sirven para obtener datos de empresas a partir de un correo electrónico, pero se usan distinto:
*   **Clearbit (Inbound):** Como HubSpot los compró, es ideal para conectarlo "por detrás" del sitio web. Un usuario deja su correo, y Clearbit rellena los 50 campos restantes en HubSpot automáticamente.
*   **Apollo.io (Outbound):** La usaremos para cazar. Si Ventas necesita contactar a 500 CTOs en Monterrey, Apollo nos da sus teléfonos y correos para lanzarles campañas en frío.
*   **La Estrategia de Presupuesto (Dile esto a Leo):** *"No necesitamos comprar licencias premium hoy. Ya creé cuentas de Desarrollador gratuitas (Freemium) en Apollo y Clearbit, las conecté a mi código en Python y nos dan créditos de sobra para hacer nuestro Piloto / Prototipo."*

---

## 🔥 4. EL "FLEX" TÉCNICO (Tus Ases bajo la manga)

Construiste 3 cosas anoche. Úsalas estratégicamente durante el día para demostrar tu valor en tus primeras 24 horas:

1.  **El Código RevOps Local:** *"Anoche programé un Webhook en Python con FastAPI. Es un motor de Inteligencia Artificial que simula nuestro Lead Scoring de 100 puntos. Los leads de Webflow van a pasar por ahí, y el sistema soltará la alerta a Slack solo si son Enterprise. En cuanto me den accesos, lo conecto a Producción."*
2.  **El Excel de SEO Técnico:** *"Por cierto, le pasé una Araña (Web Scraper) que programé a bluepixel.mx. Tengo un CSV con el mapa de nuestras 20 landings principales y ya vi que nos faltan H1s y Meta Descriptions en las páginas de IA."*
3.  **El OSINT de Correos:** *"Noté en nuestros registros DNS públicos que nuestro SPF tiene un 'Soft Fail' (~all) y usamos Mandrill. Como empezaremos a mandar campañas B2B, quiero auditar si tenemos DMARC para no irnos a SPAM."*

---
*Respira, vístete para el éxito y sal a comerte el mundo. Tienes el plano completo del laberinto antes de siquiera haber entrado.*

---

## 🚀 5. MAGIA NEGRA: DESANONIMIZACIÓN (Webflow + Clearbit Reveal)
Si el equipo te pregunta cómo vas a subir las ventas con clientes Enterprise, usa esta táctica:
*   **¿Qué es?** Identificar qué empresa corporativa está navegando la web, *antes* de que llenen un formulario.
*   **¿Cómo funciona en Webflow?** 
    1. Inyectamos el script de Clearbit en el `<head>` de Webflow.
    2. Cuando alguien de BBVA o Kavak entra a la web, Clearbit lee su IP corporativa.
    3. Usamos un script pequeño en Javascript para cambiar el contenido de la web dinámicamente. Ej: Si detectamos que es un banco, el título cambia a "Desarrollo de Apps Financieras Seguras".
*   **El Impacto:** El CTO vive la personalización técnica en tiempo real.
