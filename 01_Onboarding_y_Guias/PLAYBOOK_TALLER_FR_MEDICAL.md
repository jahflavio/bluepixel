# 🏥 PLAYBOOK TÁCTICO: TALLER DE AGENTIZACIÓN CON FR MEDICAL
*Guía de Inteligencia Comercial, Auditoría de Infraestructura y Dinámica para el Taller de Mañana (Viernes 11:00 AM - 2:00 PM).*

**Cliente:** FR Medical S.A. de C.V.  
**Sitio Web:** [`https://frmedical.com.mx/`](https://frmedical.com.mx/)  
**Líderes de Sesión:** Leonardo "Leo" Flores (Tech & Ventas), María (CEO BluePixel), Fabián Flores (Growth & RevOps).  
**Cobertura de Video (Rocketing):** Jessica Blanco (Contenidos) y Sergio Blanco (Cámara & Producción).

---

## 🔬 1. RADIOGRAFÍA FORENSE DE FR MEDICAL

### 1.1 ¿A qué se dedica FR Medical?
FR Medical es una empresa mexicana de alta especialidad médica dedicada a la importación y distribución de **tecnología quirúrgica cardiotorácica, deformidades de la pared torácica y manejo de la vía aérea**.

### 1.2 Su Catálogo y Marcas Clave (Nivel de Alta Especialidad):
*   **MedXpert (Alemania):** Sistemas de fijación y reconstrucción torácica:
    *   **STRACOS™:** Fijación de costillas en trauma torácico severo.
    *   **STRATOS™ & P.E.S.™:** Corrección mínimamente invasiva de deformidades torácicas (**Pectus Excavatum** [pecho hundido], **Pectus Carinatum** [pecho de paloma] y **Pectus Arcuatum**).
*   **Redax (Italia):** Drenajes pleurales avanzados, **Drentech Unico™**, catéteres helicoidales **Kardia Spiral**, sondas torácicas y válvulas de Heimlich para post-operatorio.
*   **Boston Medical (USA):** Tubos T de Montgomery, stents endotraqueales, tiroplastía y bypass salival.
*   **Novatech (Francia):** Steritalc® (talco estéril para pleurodesis) y stents traqueales de silicón.
*   **Zimmer Biomet:** Sistema Tritium para cierre esternal post-cirugía a corazón abierto y cables quirúrgicos.
*   **Disa Medinotec & Vathin:** Balones dilatadores traqueales (Trachealator) y broncoscopios flexibles desechables.

### 1.3 Los Dos Públicos de FR Medical (La Dualidad de su Negocio):
1.  **B2B Institucional (El 85% de la facturación):**
    *   *Quiénes son:* Cirujanos cardiotorácicos, neumólogos intervencionistas, jefes de quirófano y comités de compras de hospitales privados (Ángeles, ABC, Médica Sur, San Javier) y públicos (IMSS, ISSSTE, INER, Hospitales Regionales).
    *   *Dolor:* Necesitan cotizaciones urgentes, confirmación de stock de implantes para cirugías programadas en 24-48 horas y fichas técnicas certificadas por COFEPRIS.
2.  **B2C Pacientes (Familias y Candidatos a Cirugía de Pectus):**
    *   *Quiénes son:* Adolescentes y adultos con deformidades torácicas o sus padres, buscando si su condición tiene cura quirúrgica o estética.
    *   *Dolor:* Miedo a la cirugía, desinformación sobre costos y falta de acceso a un cirujano torácico certificado.

---

## 🛠️ 2. AUDITORÍA TÉCNICA DEL SITIO WEB (`frmedical.com.mx`)

*   **CMS Actual:** WordPress 7.1 sobre tema **Hello Elementor** con constructor Elementor Pro.
*   **Analítica:** Google Analytics 4 (`G-0Y46S0PQTB`) gestionado vía plugin MonsterInsights.
*   **Canal de Captura Actual:**
    *   Teléfonos directos en CDMX: `55 5374 1133` / `55 5374 1105`.
    *   Correo de cotizaciones: `cotizaciones@frmedical.com.mx`.
    *   Widget de WhatsApp tradicional (JoinChat) que manda a un chat genérico no automatizado.
*   **Cuello de Botella Evidente:**
    *   Todo el proceso de cotización quirúrgica y orientación médica depende de humanos contestando correos o llamadas.
    *   Si un cirujano en Guadalajara necesita saber el viernes a las 8:00 PM si tienen en inventario un kit de **Stracos para una fractura costal múltiple**, tiene que esperar hasta el lunes o perseguir al representante de ventas.

---

## 🤖 3. LAS 3 PROPUESTAS DE AGENTIZACIÓN CON IA PARA EL TALLER

Durante las 3 horas del taller, cuando Leo y María le pregunten a FR Medical sobre sus cuellos de botella, introduce estas soluciones basadas en la tecnología de BluePixel:

### Oportunidad 1: "El Asistente Quirúrgico 24/7 (Agente MCP Médico)"
*   **El Problema del Cliente:** Los cirujanos y hospitales no tienen tiempo de esperar 24 horas a que un ejecutivo les cotice un drenaje o implante.
*   **La Solución BluePixel:** Un agente conversacional en WhatsApp y Web conectado a un servidor MCP con todas las fichas técnicas y precios de FR Medical.
*   **Cómo opera:**
    *   El cirujano escribe por WhatsApp: *"Necesito cotizar un sistema Stracos para trauma costal de 4 arcos en el Hospital Ángeles Lomas"*.
    *   El Agente MCP reconoce las piezas necesarias (placas, grapas de titanio, instrumental), verifica disponibilidad y genera una **pre-cotización PDF con clave de producto en 30 segundos**.
    *   Dispara una alerta al representante de ventas asignado a ese hospital para confirmar el despacho.

### Oportunidad 2: "Triage Inteligente de Pectus (Paciente ➔ Red Quirúrgica)"
*   **El Problema del Cliente:** Cientos de personas con Pectus Excavatum entran a la web pero no saben con qué médico acudir.
*   **La Solución BluePixel:** Un orientador clínico interactivo. El paciente responde 4 preguntas básicas o sube una fotografía. La IA analiza el grado aparente, explica la diferencia entre tratamiento conservador vs. quirúrgico (barra Stratos) y lo canaliza con un cirujano torácico certificado de la red de FR Medical en su ciudad.
*   **El Retorno para FR Medical:** Vende el implante quirúrgico indirectamente al proveerle pacientes calificados al cirujano.

### Oportunidad 3: "Gestión y Alerta de Inventario Quirúrgico en Tiempo Real"
*   **El Problema del Cliente:** Coordinar stock crítico entre sucursales y consignaciones en hospitales.
*   **La Solución BluePixel:** Implementar la arquitectura de nuestro [Demo Inventario Colaborativo](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Demos_PLG/3_Inventario_Colaborativo/index.html) con alertas automáticas cuando un implante de alta rotación (ej. Drentech Unico) baje del stock de seguridad.

---

## 🎯 4. TUS PREGUNTAS CLAVE PARA EL TALLER (Para lucirte como Head of RevOps)

Aprovecha los momentos de diálogo para hacer estas 4 preguntas que dejarán a Leo, María y al cliente con la boca abierta:

1.  **Pregunta de Velocidad Comercial (Speed-to-Quote):**
    > *"Para el equipo de FR Medical: Cuando un cirujano o el área de compras de un hospital les pide una cotización urgente para una cirugía programada, ¿cuánto tiempo tardan hoy en emitir esa cotización formal y qué porcentaje de ventas se pierden si no responden en menos de una hora?"*
2.  **Pregunta de Consignación e Inventario:**
    > *"Manejan líneas críticas como Stracos y Redax. ¿Tienen material en consignación dentro de hospitales como ABC o Ángeles, y qué tan manual es el proceso para que el hospital les reporte cuando abrieron una caja en quirófano?"*
3.  **Pregunta de Captación de Pacientes (Pectus):**
    > *"En su web tienen secciones dedicadas a Pectus Excavatum y Carinatum para pacientes. ¿Qué hacen actualmente con las personas que les escriben por WhatsApp? ¿Tienen un directorio automatizado de cirujanos torácicos para canalizarlos por ciudad?"*
4.  **Pregunta de Fricción Operativa (Voz del Cliente):**
    > *"¿Cuál es la tarea repetitiva que sus ejecutivos de cuenta hacen todos los días que más les frustra y que les quita tiempo para visitar más médicos y hospitales?"*

---

## 🎥 5. PROTOCOLO DE FILMACIÓN CON JESSICA Y SERGIO (ROCKETING)

El taller es la fuente de verdad de donde extraeremos los primeros videos para *"Pixel contra el mundo"*:

*   **Identificar el "Momento Ajá":** Sergio debe tener la cámara lista cuando Leo o tú le muestren a FR Medical una demo en vivo de cómo la IA responde una duda quirúrgica en 2 segundos. La cara de asombro de los directivos de FR Medical es el gancho de oro para LinkedIn y YouTube.
*   **Cortes de 45 segundos para redes sociales:**
    *   *Clip 1:* "Por qué la industria médica mexicana sigue cotizando implantes por correo manual".
    *   *Clip 2:* "Cómo la IA ayuda a un cirujano torácico a elegir el implante correcto en quirófano".
    *   *Clip 3:* "Agentizando una distribuidora de salud: de horas a segundos".
