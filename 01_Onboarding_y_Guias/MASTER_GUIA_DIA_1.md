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

### 👑 Con María (Directora General / CEO)
*   **Tu objetivo:** Conectar con su visión de negocio de alto nivel.
*   **Contexto clave:** Ya tiene canales digitales propios; será la voz de autoridad en los nuevos formatos de video (*"Pixel contra el mundo"*).

### 🧠 Con Leonardo "Leo" (Líder de Marketing y Ventas - Tu Jefe Directo)
*   **Tu objetivo:** Resolver sus dos grandes dolores de negocio: **Adquisición** y **Conversión**.
*   **Su visión clave:** Quiere convertir a BluePixel en un **partner a largo plazo** para los clientes (*modelo Evolve / Retainers*), agentizar la web con una experiencia interactiva estilo `vstorm.co` impulsada por un **MCP BluePixel**, y redefinir el formulario de contacto.
*   **Descubrimiento clave:** BluePixel **no tiene un CRM formal** hoy en día. Tu prioridad técnica es estructurar este pipeline para alimentar a ventas y darle retroalimentación a la agencia.

### 🤝 Con Mario (Recursos Humanos)
*   **Tu objetivo:** Onboarding administrativo sin fricciones y permisos de Administrador Local en tu máquina.

### 🚀 Con la Agencia Externa (Rocketing - Jessica Blanco y equipo)
*   **Tu objetivo:** Orquestar y auditar su trabajo sin fricción política, para absorber (*insource*) sus funciones a mediano y largo plazo.
*   **Jessica Blanco (Contenidos):** Propuesta de formatos *"Pixel contra el mundo"* y *"Pixel News"* (videos largos + YouTube Shorts / TikTok). Participará en pantalla con un tono más cómico y relajado para balancear la parte técnica de Leo y María.
*   **Pauta actual:** Manejan Google Ads (solo Search en 9 landings de `cotiza.bluepixel.mx`), Meta (remarketing micro-budget) y pausaron LinkedIn Ads.
*   **Ritual clave:** Los lunes a las 4:00 PM se revisa el Looker Studio actualizado.

> 📄 **Documento Maestro Completo:** Consulta [ESTRATEGIA_MAESTRA_BLUEPIXEL_2026.md](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/02_Estrategia_B2B/ESTRATEGIA_MAESTRA_BLUEPIXEL_2026.md) para ver la arquitectura viva del proyecto.

---

## 🛠️ 3. LAS HERRAMIENTAS Y APIS (Tu Arsenal)

Si te preguntan qué herramientas vamos a usar para el "Motor RevOps", aquí tienes la respuesta exacta:

### Apollo.io vs Clearbit (El Enriquecimiento B2B)
Ambas sirven para obtener datos de empresas a partir de un correo electrónico, pero se usan distinto:
*   **Clearbit (Inbound):** Como HubSpot los compró, es ideal para conectarlo "por detrás" del sitio web. Un usuario deja su correo, y Clearbit rellena los 50 campos restantes en HubSpot automáticamente.
*   **Apollo.io (Outbound):** La usaremos para cazar. Si Ventas necesita contactar a 500 CTOs en Monterrey, Apollo nos da sus teléfonos y correos para lanzarles campañas en frío.
*   **La Estrategia de Presupuesto (Dile esto a Leo):** *"No necesitamos comprar licencias premium hoy. Ya creé cuentas de Desarrollador gratuitas (Freemium) en Apollo y Clearbit, las conecté a mi código en Python y nos dan créditos de sobra para hacer nuestro Piloto / Prototipo."*

### Notion vs. HubSpot (Nuestra Postura Oficial de CRM)
Si en el equipo surge la idea de usar **Notion como CRM**, tu postura técnica es clara:
*   **Notion:** Excelente para documentación interna, minutas, wikis de equipo y manuales de producto.
*   **HubSpot (Free/Starter):** Obligatorio para CRM. Notion no se conecta con Google Ads, no hace Lead Scoring automático, no registra correos con Gmail ni envía alertas en menos de 5 minutos.
*   **Argumento para Leo:** *"Arrancamos con HubSpot Free a costo cero ($0 MXN). Nos da pipeline visual, integración con Webflow y retroalimentación para Rocketing sin gastar presupuesto."*

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
