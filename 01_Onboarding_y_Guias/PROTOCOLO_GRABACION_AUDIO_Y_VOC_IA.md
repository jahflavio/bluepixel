# 🎙️ PROTOCOLO DE GRABACIÓN DE AUDIO, TRANSCRIPCIÓN Y EXTRACCIÓN DE INSIGHTS CON IA
*Guía táctica para capturar el audio de talleres con clientes (FR Medical), transcribirlo con modelos multimodales y extraer automáticamente dolores operativos (Pain Points) y Voz del Cliente (VOC).*

---

## 🎯 OBJETIVO
Capturar las 3 horas de sesión sin fallas técnicas ni interrupciones, procesar el archivo de audio con Inteligencia Artificial y generar en minutos el reporte ejecutivo que servirá para:
1. **La Propuesta Comercial (Leo y María):** Alcance exacto de la fase *Build* (Desarrollo del Agente) y *Evolve* (Retainer mensual).
2. **Contenidos y Redes (Jessica y Sergio de Rocketing):** Extraer las frases de dolor reales para los videos de *"Pixel contra el mundo"* en LinkedIn y YouTube.

---

## ⚙️ PASO 1: CONFIGURACIÓN DE GRABACIÓN EN WINDOWS (PLAN A Y B)

### Plan A: Grabadora Nativa de Windows (En tu laptop)
1. Presiona `Windows + S` y escribe: **Grabadora de sonido** (o *Voice Recorder*).
2. Abre la aplicación y haz una prueba de 5 segundos para verificar que la barra verde de audio responda a tu voz.
3. **Ajuste de micrófono:** Asegúrate de que el micrófono esté en un 80% - 90% de volumen (Configuración de Sonido de Windows) para captar a personas a 2 o 3 metros en la mesa de juntas.
4. **Inicio:** A las 10:59 AM haz clic en el botón rojo de **Grabar**. Minimiza la ventana; no interferirá con tu navegación ni con la demo.
5. **Finalización:** A las 2:00 PM presiona **Detener**.
6. **Ubicación del archivo:** Windows guarda automáticamente el audio en formato `.m4a` de alta fidelidad en:
   `C:\Users\usarioBP\Documents\Grabaciones de sonido\`

### Plan B: Respaldo Móvil al Centro de la Mesa (Cero Riesgo)
* Las laptops a veces captan el ruido del teclado al teclear notas o el ventilador del equipo.
* Pon tu teléfono celular en **Modo Avión** (para evitar que entre una llamada y corte la grabación).
* Abre la aplicación de **Grabadora de Voz** del teléfono y colócalo discretamente al centro de la mesa de juntas apuntando hacia los directivos de FR Medical.

---

## 🗣️ PASO 2: EL GUIÓN DE PERMISO Y CORTESÍA PROFESIONAL (30 Segundos)

Al arrancar la sesión, antes de entrar en materia, di esto con tono natural y ejecutivo:

> *"Por practicidad operativa del equipo y para no perdernos ningún detalle técnico de sus requerimientos mientras conversamos, voy a dejar corriendo una grabación de audio de la sesión. Así podremos armarles la minuta y el diseño de arquitectura exactos sin que nada se nos escape. ¿Están de acuerdo?"*

> [!NOTE]
> En entornos B2B y médicos, los directivos valoran enormemente esta postura porque demuestra que la consultora se toma en serio cada detalle y evitará retrabajos futuros.

---

## 🤖 PASO 3: PROCESAMIENTO Y TRANSCRIPCIÓN CON IA

Una sesión de 3 horas genera un archivo de ~100 MB a 250 MB. Las mejores vías para procesarlo son:

### Opción 1 (Recomendada): Ingesta Directa de Audio en Google AI Studio (Gemini 1.5 Pro)
* **URL:** [https://aistudio.google.com/](https://aistudio.google.com/) (acceso gratuito con cuenta Google).
* **Modelo:** Selecciona **Gemini 1.5 Pro**.
* **Ventaja única:** Cuenta con una ventana de contexto de **2 millones de tokens**. **No necesitas transcribir el audio a texto previamente**.
* **Instrucción:** Arrastras el archivo `.m4a` directamente al chat de AI Studio y pegas el Prompt Maestro del Paso 4. Gemini "escucha" los tonos de voz, el lenguaje médico mexicano y extrae los insights en 3 a 5 minutos.

### Opción 2: Transcripción Previa a Texto Plano
* Si prefieres tener primero el texto completo transcrito con marcas de tiempo (*timestamps*):
  * **TurboScribe.ai** (Procesamiento ultra-rápido de audios largos en español).
  * **Whisper de OpenAI** (Vía API o herramienta local).
  * Una vez obtenido el archivo `.txt` o `.docx`, copias el texto y lo analizas en **Claude** o **Gemini**.

---

## 📋 PASO 4: EL PROMPT MAESTRO DE EXTRACCIÓN (Copia y Pega)

Una vez cargado el audio o pegada la transcripción, utiliza este prompt especializado:

```text
Actúa como un Consultor Senior de Revenue Operations (RevOps) e Ingeniería de Software B2B de BluePixel.

Acabas de procesar el audio del taller de levantamiento de requerimientos con el cliente FR Medical S.A. de C.V. (distribuidora médica especializada en fijación torácica Stracos de MedXpert, sistemas de drenaje Redax, stents de vía aérea Boston Medical y tratamiento de Pectus).

Analiza la sesión completa y genera un Reporte Ejecutivo de Inteligencia estructurado en los siguientes 5 bloques:

1. MAPA DE DOLORES OPERATIVOS Y CUELLES DE BOTELLA (PAIN POINTS):
- ¿Cuáles son los puntos de fricción exactos en el proceso actual de cotización y ventas?
- ¿Cuánto tiempo tardan hoy en entregar una cotización formal y por qué se retrasan?
- ¿Cómo gestionan el inventario en consignación dentro de hospitales privados (Hospital Ángeles, ABC, etc.) y dónde identifican pérdidas o fugas de stock?
- ¿Cómo atienden actualmente a los pacientes que buscan información sobre Pectus en su página web?

2. VOZ DEL CLIENTE (VOICE OF CUSTOMER - VOC) PARA CONTENIDOS:
- Extrae textualmente las 5 declaraciones más contundentes y emotivas dichas por los directivos de FR Medical sobre su frustración con sus sistemas o procesos actuales.
- Especifica para cada frase qué ángulo de video podemos explotar para el formato "Pixel contra el mundo" en LinkedIn y YouTube.

3. REACCIONES AL AGENTE DE IA Y LA DEMO EN VIVO (EL "MOMENTO AJÁ"):
- ¿Cuál fue la reacción textual o corporal registrada cuando vieron la cotización en 1.8 segundos y la descarga del PDF oficial?
- ¿Qué objeciones, dudas regulatorias (COFEPRIS), de privacidad de datos médicos o de integración con su ERP expresaron?

4. MATRIZ DE REQUERIMIENTOS TÉCNICOS PARA LA PROPUESTA (FASE BUILD):
- Catálogos de productos a integrar (claves SKU, descripciones, precios de lista vs convenio).
- Canales de interacción requeridos (WhatsApp para cirujanos, portal web, correo automatizado).
- Reglas de negocio para inventario (almacén central CDMX vs gavetas de consignación hospitalaria).

5. ACUERDOS Y PRÓXIMOS PASOS:
- ¿Qué información se comprometió a entregar FR Medical (listas de precios, catálogos en Excel)?
- ¿Cuál es la fecha y entregable acordado por parte de BluePixel (propuesta técnica y económica)?
```

---

## 💼 PASO 5: CÓMO CAPITALIZAR EL REPORTE EN LA EMPRESA

Una vez generado el reporte con la IA:
1. **Con Leo y María (Ventas y Negocio):**
   * Úsalo para redactar la propuesta comercial formal: definir el precio del proyecto de desarrollo (**$300k - $600k MXN en Fase Build**) más el retainer de soporte (**$60k - $90k MXN/mes en Fase Evolve**).
2. **Con Jessica Blanco y Sergio (Rocketing - Marketing):**
   * Entrégales la sección de **Voz del Cliente (VOC)** con las frases textuales para que armen los ganchos de los primeros 3 segundos de los videos de YouTube Shorts y LinkedIn.
3. **Para el Repositorio de BluePixel:**
   * Guarda el resumen resultante en:  
     `bluepixel/01_Onboarding_y_Guias/MINUTA_TALLER_FR_MEDICAL_2026.md` para mantener la memoria técnica del cliente centralizada.
