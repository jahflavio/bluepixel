# 🕵️‍♂️ Auditoría OSINT de Infraestructura: Bluepixel.mx
*Generado mediante escaneo de registros DNS públicos previos al Día 1.*

## 1. Infraestructura de Correo Corporativo (Registros MX)
*   **Servidor:** Google Workspace (`aspmx.l.google.com`)
*   **Implicación:** La empresa opera sobre el ecosistema de Google (Gmail, Drive, Docs). La integración de herramientas de calendario y videoconferencia deberá ser preferentemente sobre Google Meet.

## 2. Herramientas de Envío Masivo/Transaccional (Registros TXT / SPF)
*   **Registro SPF:** `v=spf1 include:_spf.google.com include:spf.mandrillapp.com ~all`
*   **Tecnología Detectada:** Mandrill (Mailchimp Transactional API) además de Google.
*   **Punto de Acción (Día 1-3):** 
    *   Preguntar a TI para qué procesos están utilizando Mandrill (¿correos del sistema, newsletters?). 
    *   Recomendar auditar la política DMARC, ya que el SPF está configurado como 'Soft Fail' (`~all`), lo cual representa un riesgo de caer en bandejas de SPAM en campañas agresivas de Cold Emailing B2B hacia corporativos con filtros estrictos.

## 3. Estado de SEO y Dominio (Registros TXT)
*   **Tecnología Detectada:** Google Search Console (`google-site-verification`). Existen 3 registros de verificación distintos.
*   **Punto de Acción (Día 1-3):**
    *   No es necesario verificar el dominio desde cero. Solo solicitar acceso con permisos de lectura a la propiedad ya existente en Google Search Console para auditar el tráfico orgánico actual y subir el sitemap de Webflow.

---
*Fin del reporte.*
