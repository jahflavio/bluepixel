# 📋 SLA Y HAND-OFF TÉCNICO PARA ROCKETING
## Guía de Construcción y Reglas de Despliegue para Landing Pages B2B
**Fecha:** 21 de Septiembre 2026  
**De:** BluePixel (Dirección de Producto e Ingeniería)  
**Para:** Rocketing (Agencia de Adquisición)

---

## 🎯 OBJETIVO DEL DOCUMENTO
En alineación con la estrategia de dividir el desarrollo digital, BluePixel se encargará de la construcción de la plataforma corporativa principal (`bluepixel.mx`), mientras que **Rocketing asumirá la creación, maquetación y optimización de las Landing Pages de Pauta** para las campañas de adquisición.

Para asegurar un **Quality Score de 9-10/10**, mantener el flujo de conversiones y **no canibalizar el tráfico SEO**, todas las landings desarrolladas por la agencia deben cumplir estrictamente con las siguientes **5 Reglas de Oro**.

---

## 🛑 REGLA 1: ARQUITECTURA HERMÉTICA (CERO FUGAS)

El tráfico pagado en B2B es sumamente caro. Una vez que el prospecto hace clic, no debe tener opción de "distraerse" navegando por la página.

*   **Sin Barra de Navegación:** Queda estrictamente prohibido incluir menús desplegables o enlaces (ej. *Servicios, Nosotros, Blog*) en el header de las landings.
*   **Sin Enlaces Externos:** No puede haber enlaces al inicio, ni a redes sociales, ni artículos relacionados. 
*   **Las únicas dos acciones posibles:** El usuario llena el formulario, o da clic en el botón de WhatsApp B2B corporativo (+52). Si no hace eso, abandona. Nada más.

## 🔍 REGLA 2: PROTECCIÓN SEO OBLIGATORIA (NOINDEX)

Dado que BluePixel está construyendo el ecosistema público indexable (y resguardando 164 URLs del blog original), las landings de campaña **jamás deben aparecer en Google de forma orgánica** para no duplicar contenido ni confundir a los motores de búsqueda.

*   **Mandato Técnico:** Toda landing construida por Rocketing debe contener la siguiente etiqueta en el `<head>` del código HTML sin excepción:
    ```html
    <meta name="robots" content="noindex, nofollow">
    ```
*   **No Sitemap:** Las landings no deben ser incluidas en ningún archivo `sitemap.xml`.

## ✍️ REGLA 3: MESSAGE MATCH Y COPY CANÓNICO

Para garantizar el Quality Score y disminuir los rebotes, la maquetación debe respetar el copy proporcionado por BluePixel:

*   **Identidad H1:** El título principal de la landing (H1) **debe ser idéntico** al titular de mayor rendimiento del anuncio de Google Ads. Si el anuncio dice *"Integración Segura con SAP"*, el H1 de la landing debe decir exactamente eso.
*   **El Copy es Final:** Rocketing debe maquetar usando los textos, "dolores" y descripciones proporcionadas en la matriz de los 3 Clusters. No se debe inventar texto genérico para "rellenar" espacios.

## 🏗️ REGLA 4: INFRAESTRUCTURA Y SUBDOMINIO

Para mantener la **Arquitectura Desacoplada** y evitar que una actualización en las campañas tire el sitio web principal (o viceversa):

*   Las landings se deben construir en el constructor de páginas preferido de la agencia (ej. Webflow, Unbounce, Instapage o HubSpot).
*   Se alojarán bajo un **subdominio dedicado a pauta**, por ejemplo: `cotiza.bluepixel.mx` o `lp.bluepixel.mx`. 
*   La agencia tendrá control total sobre este subdominio para iterar rápido (A/B testing) sin depender de sprints de desarrollo de BluePixel.

## 📊 REGLA 5: ATRIBUCIÓN CERRADA Y GCLID

Para poder optimizar las campañas en base a dinero ingresado y no a leads brutos, los formularios deben estar instrumentados correctamente:

*   **Campos de Formulario Exigidos:** Nombre, Email Corporativo (rechazar dominios genéricos si es posible), y el selector de **Tamaño de Empresa (10-50, 50-200, 200+)**.
*   **Parámetros Ocultos:** Todos los formularios deben capturar y enviar a través de campos ocultos (Hidden Fields) los parámetros UTM de la URL y el **GCLID** (Google Click ID).
*   **Hand-off de Datos:** Al completarse, el lead debe ser enviado vía Webhook al CRM / Servidor MCP de BluePixel con el GCLID intacto, para permitir la importación de conversiones offline en Google Ads API.

---

## 🛠️ ANEXO: AUDITORÍA Y PLAN DE ACCIÓN PARA LAS LANDINGS ACTUALES

Hemos realizado una auditoría del código y estructura de las tres landings actuales operadas por Rocketing en el subdominio (`cotiza.bluepixel.mx`). Estas son las modificaciones exactas que la agencia debe realizar **hoy mismo** para cumplir con este SLA:

### ✅ 1. Lo que SÍ funciona (Conservar intacto)
*   **Trust Signals:** Toda la sección de *«Respaldados por estándares líderes»* (ISO 27001, AWS, certificaciones).
*   **Casos de Éxito:** Las menciones a la marca global de consumo y los rediseños en LATAM. Ayudan a la validación corporativa.
*   **Sección de FAQs:** Las preguntas frecuentes están correctamente estructuradas.

### 🚨 2. Lo que viola el SLA y se debe BORRAR (Urgente)
1.  **Fugas de Tráfico Masivas:** Actualmente, el pie de página (footer) tiene enlaces hacia *Software a la medida, Desarrollo Web, Sitio Oficial*, etc. **Instrucción:** Eliminar completamente todo el bloque de navegación.
2.  **Sección "De la estrategia al lanzamiento":** Borrar este bloque. Sus pasos genéricos (Estrategia, UX, Desarrollo, Lanzamiento) dan la impresión de una "fábrica de software" tradicional y contradicen nuestra promesa de valor avanzada.
3.  **Sección aislada "Build / Evolve":** Eliminar. Vender esto sin contexto causa *shock de precio* en el prospecto.

### ➕ 3. Lo que FALTA y se debe INYECTAR
Para que la landing convierta leads calificados de $300k+ MXN, Rocketing debe integrar estas 3 secciones clave:
1.  **La Promesa Anti-Commodity (FutureProof):** Un bloque de texto contundente que declare nuestra ventaja injusta: *"Cero alucinaciones de IA, soberanía total de datos en tu Nube (VPC), y código grado empresarial (ISO 27001)"*.
2.  **El "Gancho" Comercial (Pilar 01):** Sustituir el botón genérico de "Cotizar App" por un llamado a la acción para agendar el **Diagnóstico de Fricción Operativa (2-4 semanas)**. Es más fácil vender un diagnóstico que un desarrollo de 6 meses de golpe.
3.  **Visuales "Proof of Capability":** Quitar fotos genéricas de "equipos trabajando" y colocar diagramas técnicos o dashboards que demuestren que construimos infraestructura pesada, no solo interfaces bonitas.

---

## 💡 ANEXO B: SUGERENCIAS DE ALTO IMPACTO (Opcional pero Recomendado)
Para maximizar la tasa de conversión B2B y calificar mejor a los leads, sugerimos fuertemente implementar estas 3 acciones adicionales en las landings:
1. **La "Thank You Page" con Calendly:** En lugar de un mensaje genérico de "Gracias por contactarnos", embeber un calendario para que el prospecto agende su Diagnóstico inmediatamente mientras su intención de compra está en su punto máximo.
2. **Píxel de LinkedIn:** Añadir el LinkedIn Insight Tag. Esto nos permitirá hacer campañas de retargeting dirigidas específicamente a los perfiles de CTOs y Directores que visitaron la landing pero no convirtieron.
3. **Filtro Anti-Spam Corporativo:** Configurar el campo de Email para que solo acepte correos de negocios (rechazando `@gmail.com`, `@hotmail.com`, etc.) y así asegurar que ventas invierta su tiempo solo en empresas reales.

---

### 📝 FIRMA DE RECEPCIÓN
Con esta guía, la agencia tiene luz verde y autonomía para maquetar, lanzar y optimizar las landings (`/lp/*`) con su propia infraestructura, garantizando que el ecosistema técnico general se mantenga sano y blindado.
