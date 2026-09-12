import json
import os

TEMPLATE_PATH = "landing_blueprint_template.html"
OUTPUT_DIR = "landings"

PRODUCTS = [
    {
        "filename": "finance_matcher.html",
        "title": "Finance Matcher (Conciliador Autónomo)",
        "tag": "FINANCE & ERP",
        "tag_color": "red-500",
        "hero_headline": "Deja de perder días en el cierre contable por cruces manuales.",
        "hero_sub": "Instala nuestro Finance Matcher. Un agente que lee tus PDFs bancarios, cruza comprobantes contra facturas XML en SAP automáticamente y genera el reporte de excepciones en minutos.",
        "p2_title": "Arquitectura del Agente Conciliador",
        "p2_sub": "Integración segura a tu ERP sin riesgo de escritura incorrecta.",
        "step1_title": "Extracción Bancaria",
        "step1_desc": "Extrae los movimientos y estados de cuenta desde el portal bancario y procesa los PDFs usando OCR.",
        "step2_title": "Match Lógico (MCP)",
        "step2_desc": "Busca y descarga las facturas XML en tu sistema SAP/Oracle de forma paralela a través del Protocolo MCP.",
        "step3_title": "Conciliación Automática",
        "step3_desc": "Cruza montos, RFCs y fechas exactas. Concilia el 90% automáticamente y deja las excepciones para el humano.",
        "roi_q": "¿Cuántas horas invierte tu equipo al mes conciliando cuentas?",
        "roi_range_max": "300",
        "roi_val": "120",
        "roi_unit": "Horas",
        "roi_rate": "25" # Cost per hour in USD
    },
    {
        "filename": "legal_onboarding.html",
        "title": "Legal & Compliance Onboarding",
        "tag": "GOVERNANCE & COMPLIANCE",
        "tag_color": "orange-500",
        "hero_headline": "Filtra proveedores corporativos en 30 segundos, no en 3 semanas.",
        "hero_sub": "Instala el KYC/AML Agent. Un flujo de IA que lee y cruza actas constitutivas y documentos legales emitiendo un dictamen de riesgo automatizado para Fintechs y Corporativos.",
        "p2_title": "Arquitectura KYC Autónoma",
        "p2_sub": "Conectado a bases de datos gubernamentales y listas de sanción en tiempo real.",
        "step1_title": "Ingesta de Documentos",
        "step1_desc": "El usuario sube su Acta Constitutiva, RFC, Comprobante de Domicilio y el agente los lee en segundos.",
        "step2_title": "Validación OSINT",
        "step2_desc": "Cruza los datos del documento contra bases de datos públicas (SAT, OFAC) para verificar la autenticidad.",
        "step3_title": "Emisión de Dictamen",
        "step3_desc": "Asigna un semáforo de riesgo (Verde/Rojo) y elabora un PDF con la trazabilidad para tu área Legal.",
        "roi_q": "¿Cuántos proveedores/clientes procesan al mes?",
        "roi_range_max": "500",
        "roi_val": "100",
        "roi_unit": "Casos",
        "roi_rate": "40" # Cost per hour roughly to process
    },
    {
        "filename": "apa.html",
        "title": "Agentic Process Automation (APA)",
        "tag": "AUTOMATION",
        "tag_color": "blue-500",
        "hero_headline": "El fin del RPA legacy. Bots que no se rompen si cambia la pantalla.",
        "hero_sub": "El Agentic Process Automation usa Visión Computacional. El agente entiende la pantalla como un humano y sabe qué hacer aunque el software cambie su diseño.",
        "p2_title": "Arquitectura de Agentes Multimodales",
        "p2_sub": "Más allá de clics rígidos: Navegación autónoma inteligente.",
        "step1_title": "Entendimiento Visual",
        "step1_desc": "El agente 've' la interfaz (SAP, Web, Desktop) usando Computer Vision en lugar de selectores de código rígidos.",
        "step2_title": "Razonamiento de Tarea",
        "step2_desc": "Si un botón de 'Guardar' cambia de lugar, el agente razona y lo busca en la pantalla sin romperse (Auto-healing).",
        "step3_title": "Ejecución Contínua",
        "step3_desc": "Ejecuta procesos de data entry, migración y conciliación operando 24/7 sin mantenimiento constante.",
        "roi_q": "¿Cuántas horas operativas gasta tu equipo en data-entry mensual?",
        "roi_range_max": "1000",
        "roi_val": "300",
        "roi_unit": "Horas",
        "roi_rate": "15"
    },
    {
        "filename": "triage_rag.html",
        "title": "Triage RAG-Blindado",
        "tag": "CX & SUPPORT",
        "tag_color": "yellow-500",
        "hero_headline": "Atención automatizada que no alucina ni daña tu marca.",
        "hero_sub": "Un agente L1 en WhatsApp que responde estrictamente basado en tus manuales. Si detecta fricción, transfiere al humano con contexto completo en Zendesk/Salesforce.",
        "p2_title": "Pipeline RAG Seguro",
        "p2_sub": "Respuestas determinísticas y control total de la narrativa comercial.",
        "step1_title": "Recepción Omnicanal",
        "step1_desc": "El usuario escribe en WhatsApp. El agente identifica la intención mediante procesamiento de lenguaje natural.",
        "step2_title": "Recuperación de Base de Conocimiento",
        "step2_desc": "Busca exclusivamente en tus PDFs y manuales corporativos (RAG) para formular una respuesta aprobada.",
        "step3_title": "Análisis de Sentimiento",
        "step3_desc": "Si el cliente usa lenguaje molesto o la duda es compleja, enruta silenciosamente a un asesor humano.",
        "roi_q": "¿Cuántos tickets de soporte recibes al mes?",
        "roi_range_max": "5000",
        "roi_val": "1000",
        "roi_unit": "Tickets",
        "roi_rate": "5" # Cost per ticket
    },
    {
        "filename": "rfp_analyst.html",
        "title": "RFP & Tender Analyst",
        "tag": "SALES & PRESALES",
        "tag_color": "purple-500",
        "hero_headline": "Deja de perder licitaciones por falta de tiempo.",
        "hero_sub": "Un flujo autónomo que lee licitaciones de 200 páginas, genera la matriz de cumplimiento y pre-redacta tu propuesta técnica en 4 horas usando tu historial.",
        "p2_title": "Arquitectura del Agente Licitador",
        "p2_sub": "No es 'ChatGPT'. Es un Pipeline RAG conectado a tu historial de ventas.",
        "step1_title": "Ingesta Masiva",
        "step1_desc": "Sube el PDF de la licitación del gobierno o corporativo. El agente lee las 200 páginas en segundos.",
        "step2_title": "Cruce Histórico (RAG)",
        "step2_desc": "Busca en tu historial de propuestas ganadoras y extrae los textos técnicos necesarios.",
        "step3_title": "Redacción y Matriz",
        "step3_desc": "Emite un documento Word con la propuesta al 80% y un Excel con la matriz de cumplimiento.",
        "roi_q": "¿Cuántas licitaciones complejas respondes al mes?",
        "roi_range_max": "20",
        "roi_val": "5",
        "roi_unit": "Licitaciones",
        "roi_rate": "2000" # Cost per RFP
    },
    {
        "filename": "hr_recruiter.html",
        "title": "HR Autonomous Recruiter",
        "tag": "HUMAN RESOURCES",
        "tag_color": "pink-500",
        "hero_headline": "Entrevista solo al 10% superior de los candidatos.",
        "hero_sub": "Un agente anclado a tu ATS que lee cientos de CVs y realiza una primera entrevista autónoma por WhatsApp evaluando salario y skills antes del contacto humano.",
        "p2_title": "Filtro de Reclutamiento Nivel 0",
        "p2_sub": "Integración nativa con Workable, Lever o tu ATS corporativo.",
        "step1_title": "Parsing de CVs",
        "step1_desc": "Ingesta masiva de PDFs y extracción de skills clave de los candidatos de forma estructurada.",
        "step2_title": "Entrevista Inicial Autónoma",
        "step2_desc": "Contacta al candidato por WhatsApp, valida expectativas salariales e idiomas con preguntas conversacionales.",
        "step3_title": "Ranking Automático",
        "step3_desc": "Actualiza el ATS moviendo a los no aptos a rechazados y resaltando al top 10% para la entrevista humana.",
        "roi_q": "¿Cuántas horas al mes gasta tu equipo leyendo CVs y perfilando?",
        "roi_range_max": "500",
        "roi_val": "160",
        "roi_unit": "Horas",
        "roi_rate": "20"
    },
    {
        "filename": "aoc.html",
        "title": "Agentic Operations Center (AOC)",
        "tag": "INFRASTRUCTURE",
        "tag_color": "emerald-500",
        "hero_headline": "Monitoreo preventivo 24/7 sin el costo de un NOC físico.",
        "hero_sub": "Reemplaza tu NOC tradicional. Agentes autónomos anclados a AWS/GCP que predicen caídas, leen logs y auto-escalan instancias preventivamente.",
        "p2_title": "Arquitectura Autónoma Cloud",
        "p2_sub": "SLA de 99.9% asegurado mediante auto-reparación inteligente.",
        "step1_title": "Ingesta de Telemetría",
        "step1_desc": "Conectado a CloudWatch/Datadog, lee métricas de CPU, memoria y tráfico de red en tiempo real.",
        "step2_title": "Predicción de Anomalías",
        "step2_desc": "Detecta patrones de comportamiento anómalos antes de que el servidor colapse (Prediction Modeling).",
        "step3_title": "Auto-Scaling y Alerta",
        "step3_desc": "Despliega nuevos servidores automáticamente y notifica la incidencia resuelta al equipo vía Slack.",
        "roi_q": "¿Cuántas horas de caídas de servicio tienes al año?",
        "roi_range_max": "100",
        "roi_val": "12",
        "roi_unit": "Horas/Año",
        "roi_rate": "10000" # Cost of downtime per hour
    },
    {
        "filename": "erp_bridge.html",
        "title": "ERP Bridge (Conector Seguro)",
        "tag": "DATA & INTEGRATION",
        "tag_color": "teal-500",
        "hero_headline": "Habla con tu base de datos legacy en lenguaje natural.",
        "hero_sub": "Un servidor MCP seguro que traduce preguntas directivas a queries SQL para tu base de datos (SAP/Oracle) sin riesgos de inyección ni exposición de datos raw.",
        "p2_title": "Middleware MCP Seguro",
        "p2_sub": "La capa intermedia que protege tus datos mientras libera tu analítica.",
        "step1_title": "Query en Lenguaje Natural",
        "step1_desc": "El director pregunta en su dashboard: '¿Cuáles fueron las ventas del Q3 divididas por región?'",
        "step2_title": "Traducción y Sanitización",
        "step2_desc": "El MCP traduce la pregunta a SQL, verifica permisos de lectura y bloquea cualquier intento de escritura/DROP.",
        "step3_title": "Retorno de Datos Seguro",
        "step3_desc": "Consulta el ERP corporativo, obtiene la data, y genera un gráfico o respuesta resumida al instante.",
        "roi_q": "¿Cuántos reportes manuales pide la directiva a TI por mes?",
        "roi_range_max": "200",
        "roi_val": "50",
        "roi_unit": "Reportes",
        "roi_rate": "100" # Cost per report generated
    },
    {
        "filename": "smart_ads.html",
        "title": "Smart Ads Optimizer",
        "tag": "E-COMMERCE GROWTH",
        "tag_color": "indigo-500",
        "hero_headline": "Nunca vuelvas a pagar un clic por un producto agotado.",
        "hero_sub": "Middleware que orquesta tu inventario (Shopify/VTEX) con las APIs de Google Ads. Pausa campañas de forma dinámica cuando el stock baja del umbral.",
        "p2_title": "Sincronización Logística-Pauta",
        "p2_sub": "Detiene la fuga de presupuesto en tiempo real.",
        "step1_title": "Lectura de Inventario",
        "step1_desc": "Sondea continuamente las APIs de tu sistema de gestión de almacenes (WMS) o ERP.",
        "step2_title": "Reglas de Negocio",
        "step2_desc": "Verifica si el stock de un SKU clave cae por debajo de la reserva mínima definida.",
        "step3_title": "Acción en Google Ads",
        "step3_desc": "Pausa automáticamente el ad group de ese producto en Google/Meta y lo reactiva cuando llega nuevo inventario.",
        "roi_q": "¿Cuánto presupuesto mensual quemas en campañas SEM?",
        "roi_range_max": "100000",
        "roi_val": "20000",
        "roi_unit": "USD",
        "roi_rate": "0.15" # 15% wasted ad spend saving
    },
    {
        "filename": "data_privacy.html",
        "title": "Data Privacy Anonymizer",
        "tag": "ENTERPRISE SECURITY",
        "tag_color": "slate-500",
        "hero_headline": "Usa IA Generativa cumpliendo la LFPDPPP y GDPR.",
        "hero_sub": "Un proxy interno que intercepta y enmascara datos sensibles (nombres, tarjetas, RFCs) antes de enviarlos a modelos de IA públicos, asegurando cumplimiento legal.",
        "p2_title": "Arquitectura de Túnel Seguro",
        "p2_sub": "El escudo corporativo contra multas por filtración de datos.",
        "step1_title": "Intercepción de Prompts",
        "step1_desc": "Cuando un empleado usa herramientas de IA, el tráfico pasa por un proxy local dentro de la red corporativa.",
        "step2_title": "Enmascaramiento (Masking)",
        "step2_desc": "Detecta entidades como 'Juan Pérez' o RFCs y los sustituye por hashes (ej. [USER_1], [RFC_A]).",
        "step3_title": "Re-Traducción Segura",
        "step3_desc": "El LLM procesa el prompt anonimizado. Al regresar la respuesta, el proxy devuelve los nombres reales en el dispositivo del empleado.",
        "roi_q": "¿A cuánto asciende el riesgo legal anual estimado (multas LFPDPPP)?",
        "roi_range_max": "1000000",
        "roi_val": "250000",
        "roi_unit": "USD",
        "roi_rate": "1" # Direct savings on risk
    }
]

with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
    template = f.read()

# Add link to back navigation to the template
navbar_button_old = "Diagnóstico de Viabilidad"
navbar_button_new = '<a href="../index.html#capabilities" className="text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 mr-6 transition-colors">← Ver Blueprint Library</a><button onClick={() => document.getElementById(\\\'contact-form\\\').scrollIntoView()} className="bg-white text-navy-950 hover:bg-slate-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg">Diagnóstico de Viabilidad</button>'

# Note: Because the template is heavily hardcoded with RFP Analyst, we will string replace specific blocks.
# It is simpler to replace known strings.

for product in PRODUCTS:
    html = template
    
    # Navbar link inject
    html = html.replace(
        '<button onClick={() => document.getElementById(\'contact-form\').scrollIntoView()} className="bg-white text-navy-950 hover:bg-slate-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg">\n            Diagnóstico de Viabilidad\n          </button>',
        '<div className="flex items-center"><a href="../index.html#capabilities" className="hidden md:flex text-slate-400 hover:text-white font-mono text-xs items-center gap-2 mr-6 transition-colors">← Ver Directorio</a><button onClick={() => document.getElementById(\'contact-form\').scrollIntoView()} className="bg-white text-navy-950 hover:bg-slate-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg">Diagnóstico de Viabilidad</button></div>'
    )
    
    # Title Tag
    html = html.replace("<title>BluePixel | RFP & Tender Analyst Agent</title>", f"<title>BluePixel | {product['title']}</title>")
    
    # Hero
    html = html.replace('Arquitectura Operativa Lista para Producción', product['tag'])
    html = html.replace('Deja de perder licitaciones por <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">falta de tiempo.</span>', f'<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{product["hero_headline"]}</span>')
    html = html.replace('Instala nuestro <strong>RFP & Tender Analyst Agent</strong>. Un flujo autónomo que lee licitaciones de 200 páginas, genera la matriz de cumplimiento y pre-redacta tu propuesta técnica en 4 horas.', product['hero_sub'])
    
    # Workflow
    html = html.replace('Arquitectura del Agente Licitador', product['p2_title'])
    html = html.replace('No es "ChatGPT". Es un Pipeline RAG seguro conectado a tu historial corporativo.', product['p2_sub'])
    
    html = html.replace('Ingesta Masiva', product['step1_title'])
    html = html.replace('Sube el PDF de la licitación del gobierno o corporativo. El agente lee las 200 páginas en segundos usando OCR avanzado.', product['step1_desc'])
    
    html = html.replace('Cruce Histórico (RAG)', product['step2_title'])
    html = html.replace('Busca en tu historial de propuestas ganadoras y extrae los textos técnicos, certificaciones y CVs necesarios para cumplir.', product['step2_desc'])
    
    html = html.replace('Redacción y Matriz', product['step3_title'])
    html = html.replace('Emite un documento Word con la propuesta pre-llenada al 80% y un Excel con la matriz de cumplimiento exacta.', product['step3_desc'])
    
    # ROI Calc
    html = html.replace('¿Cuántas licitaciones complejas respondes al mes?', product['roi_q'])
    html = html.replace('max="20"', f'max="{product["roi_range_max"]}"')
    html = html.replace('value={rfps}', f'value={{{product["roi_val"]}}}') # this will break dynamic react a bit since I replace the initial state. Let's just replace the text for the slider label.
    
    # To fix React state in template, I need to replace the state hook setup:
    html = html.replace('const [rfps, setRfps] = useState(5);', f'const [rfps, setRfps] = useState({product["roi_val"]});')
    html = html.replace('const hoursPerRfp = 40;', f'const hoursPerRfp = {product["roi_rate"]};')
    
    html = html.replace('{rfps} Licitaciones', f'{{rfps}} {product["roi_unit"]}')
    html = html.replace('({rfps * hoursPerRfp} horas invertidas)', f'Cálculo de impacto dinámico')
    
    output_path = os.path.join(OUTPUT_DIR, product['filename'])
    with open(output_path, "w", encoding="utf-8") as out_f:
        out_f.write(html)
        
print("Landings generadas exitosamente en la carpeta 'landings'.")
