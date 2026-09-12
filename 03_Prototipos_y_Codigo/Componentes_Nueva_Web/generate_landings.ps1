$templatePath = "landing_blueprint_template.html"
$outputDir = "landings"

if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Force -Path $outputDir
}

$template = Get-Content $templatePath -Raw -Encoding UTF8

$products = @(
    @{
        filename = "finance_matcher.html"
        title = "Finance Matcher (Conciliador Aut&oacute;nomo)"
        tag = "FINANCE & ERP"
        hero_headline = "Deja de perder d&iacute;as en el cierre contable."
        hero_sub = "Un agente que lee tus PDFs bancarios, cruza comprobantes contra facturas XML en SAP autom&aacute;ticamente y genera el reporte de excepciones en minutos."
        p2_title = "Arquitectura del Agente Conciliador"
        p2_sub = "Integraci&oacute;n segura a tu ERP sin riesgo de escritura incorrecta."
        step1_title = "Extracci&oacute;n Bancaria"
        step1_desc = "Extrae los movimientos y estados de cuenta desde el portal bancario usando OCR."
        step2_title = "Match L&oacute;gico (MCP)"
        step2_desc = "Busca y descarga las facturas XML en tu sistema SAP/Oracle a trav&eacute;s del Protocolo MCP."
        step3_title = "Conciliaci&oacute;n Autom&aacute;tica"
        step3_desc = "Cruza montos, RFCs y fechas exactas. Concilia el 90% autom&aacute;ticamente."
        roi_q = "&iquest;Cu&aacute;ntas horas invierte tu equipo al mes conciliando?"
    },
    @{
        filename = "apa.html"
        title = "Agentic Process Automation (APA)"
        tag = "AUTOMATION"
        hero_headline = "El fin del RPA legacy. Bots que no se rompen."
        hero_sub = "El Agente entiende la pantalla usando Visi&oacute;n Computacional y sabe qu&eacute; hacer aunque el software cambie su dise&ntilde;o."
        p2_title = "Arquitectura de Agentes Multimodales"
        p2_sub = "M&aacute;s all&aacute; de clics r&iacute;gidos: Navegaci&oacute;n aut&oacute;noma inteligente."
        step1_title = "Entendimiento Visual"
        step1_desc = "El agente 've' la interfaz (SAP, Web, Desktop) usando Computer Vision."
        step2_title = "Razonamiento de Tarea"
        step2_desc = "Si un bot&oacute;n cambia de lugar, el agente lo busca y hace auto-healing."
        step3_title = "Ejecuci&oacute;n Cont&iacute;nua"
        step3_desc = "Ejecuta procesos de data entry operando 24/7 sin mantenimiento."
        roi_q = "&iquest;Cu&aacute;ntas horas operativas gasta tu equipo en data-entry?"
    },
    @{
        filename = "triage_rag.html"
        title = "Triage RAG-Blindado"
        tag = "CX & SUPPORT"
        hero_headline = "Soporte automatizado que no da&ntilde;a tu marca."
        hero_sub = "Un agente L1 en WhatsApp que responde estrictamente basado en tus manuales. Si detecta fricci&oacute;n, transfiere al humano."
        p2_title = "Pipeline RAG Seguro"
        p2_sub = "Respuestas determin&iacute;sticas y control total."
        step1_title = "Recepci&oacute;n Omnicanal"
        step1_desc = "El usuario escribe en WhatsApp y el agente identifica la intenci&oacute;n."
        step2_title = "Recuperaci&oacute;n RAG"
        step2_desc = "Busca exclusivamente en tus PDFs y manuales corporativos."
        step3_title = "An&aacute;lisis de Sentimiento"
        step3_desc = "Si el cliente usa lenguaje molesto, enruta a un humano en Zendesk."
        roi_q = "&iquest;Cu&aacute;ntos tickets de soporte recibes al mes?"
    },
    @{
        filename = "rfp_analyst.html"
        title = "RFP & Tender Analyst Agent"
        tag = "Arquitectura Operativa Lista para Producci&oacute;n"
        hero_headline = "falta de tiempo."
        hero_sub = "Instala nuestro <strong>RFP & Tender Analyst Agent</strong>. Un flujo aut&oacute;nomo que lee licitaciones de 200 p&aacute;ginas, genera la matriz de cumplimiento y pre-redacta tu propuesta t&eacute;cnica en 4 horas."
        p2_title = "Arquitectura del Agente Licitador"
        p2_sub = "No es `"ChatGPT`". Es un Pipeline RAG seguro conectado a tu historial corporativo."
        step1_title = "Ingesta Masiva"
        step1_desc = "Sube el PDF de la licitaci&oacute;n del gobierno o corporativo. El agente lee las 200 p&aacute;ginas en segundos usando OCR avanzado."
        step2_title = "Cruce Hist&oacute;rico (RAG)"
        step2_desc = "Busca en tu historial de propuestas ganadoras y extrae los textos t&eacute;cnicos, certificaciones y CVs necesarios para cumplir."
        step3_title = "Redacci&oacute;n y Matriz"
        step3_desc = "Emite un documento Word con la propuesta pre-llenada al 80% y un Excel con la matriz de cumplimiento exacta."
        roi_q = "&iquest;Cu&aacute;ntas licitaciones complejas respondes al mes?"
    },
    @{
        filename = "legal_onboarding.html"
        title = "Legal & Compliance Onboarding"
        tag = "GOVERNANCE & COMPLIANCE"
        hero_headline = "Filtra proveedores corporativos en segundos."
        hero_sub = "Un flujo de IA que lee actas constitutivas emitiendo un dictamen de riesgo automatizado para Fintechs y Corporativos."
        p2_title = "Arquitectura KYC Aut&oacute;noma"
        p2_sub = "Conectado a bases de datos gubernamentales."
        step1_title = "Ingesta de Documentos"
        step1_desc = "El usuario sube su Acta Constitutiva y RFC."
        step2_title = "Validaci&oacute;n OSINT"
        step2_desc = "Cruza los datos contra bases de datos p&uacute;blicas (SAT, OFAC)."
        step3_title = "Emisi&oacute;n de Dictamen"
        step3_desc = "Asigna un sem&aacute;foro de riesgo y elabora un PDF con la trazabilidad."
        roi_q = "&iquest;Cu&aacute;ntos proveedores procesan al mes?"
    },
    @{
        filename = "hr_recruiter.html"
        title = "HR Autonomous Recruiter"
        tag = "HUMAN RESOURCES"
        hero_headline = "Entrevista solo al 10% superior de candidatos."
        hero_sub = "Agente anclado a tu ATS que lee CVs y realiza entrevistas por WhatsApp evaluando salario y skills."
        p2_title = "Filtro de Reclutamiento Nivel 0"
        p2_sub = "Integraci&oacute;n nativa con Workable o Lever."
        step1_title = "Parsing de CVs"
        step1_desc = "Ingesta masiva de PDFs y extracci&oacute;n de skills."
        step2_title = "Entrevista Aut&oacute;noma"
        step2_desc = "Contacta por WhatsApp, valida salario e idiomas."
        step3_title = "Ranking Autom&aacute;tico"
        step3_desc = "Resalta al top 10% en el ATS para la entrevista humana."
        roi_q = "&iquest;Cu&aacute;ntas horas al mes gastas filtrando CVs?"
    },
    @{
        filename = "aoc.html"
        title = "Agentic Operations Center"
        tag = "INFRASTRUCTURE"
        hero_headline = "Monitoreo preventivo 24/7 sin el costo de un NOC."
        hero_sub = "Agentes anclados a AWS/GCP que predicen ca&iacute;das, leen logs y auto-escalan instancias."
        p2_title = "Arquitectura Aut&oacute;noma Cloud"
        p2_sub = "SLA de 99.9% asegurado mediante auto-reparaci&oacute;n."
        step1_title = "Ingesta de Telemetr&iacute;a"
        step1_desc = "Conectado a CloudWatch, lee m&eacute;tricas en tiempo real."
        step2_title = "Predicci&oacute;n de Anomal&iacute;as"
        step2_desc = "Detecta patrones an&oacute;malos antes de que el servidor colapse."
        step3_title = "Auto-Scaling"
        step3_desc = "Despliega nuevos servidores autom&aacute;ticamente y avisa por Slack."
        roi_q = "&iquest;Cu&aacute;ntas horas de ca&iacute;das de servicio tienes al a&ntilde;o?"
    },
    @{
        filename = "erp_bridge.html"
        title = "ERP Bridge"
        tag = "DATA & INTEGRATION"
        hero_headline = "Habla con tu base de datos legacy."
        hero_sub = "Un servidor MCP que traduce preguntas directivas a queries SQL para tu ERP sin riesgos de exposici&oacute;n."
        p2_title = "Middleware MCP Seguro"
        p2_sub = "La capa intermedia que protege tus datos."
        step1_title = "Query Lenguaje Natural"
        step1_desc = "El director pregunta: '&iquest;Cu&aacute;les fueron las ventas del Q3?'"
        step2_title = "Traducci&oacute;n SQL"
        step2_desc = "El MCP traduce a SQL y verifica permisos de lectura."
        step3_title = "Retorno Seguro"
        step3_desc = "Consulta el ERP y genera un gr&aacute;fico al instante."
        roi_q = "&iquest;Cu&aacute;ntos reportes manuales pide la directiva por mes?"
    },
    @{
        filename = "smart_ads.html"
        title = "Smart Ads Optimizer"
        tag = "E-COMMERCE GROWTH"
        hero_headline = "Nunca pagues un clic por un producto agotado."
        hero_sub = "Orquesta tu inventario con Google Ads. Pausa campa&ntilde;as si el stock baja del umbral."
        p2_title = "Sincronizaci&oacute;n Log&iacute;stica-Pauta"
        p2_sub = "Detiene la fuga de presupuesto en tiempo real."
        step1_title = "Lectura de Inventario"
        step1_desc = "Sondea continuamente las APIs de tu almac&eacute;n."
        step2_title = "Reglas de Negocio"
        step2_desc = "Verifica si el stock de un SKU clave cae."
        step3_title = "Acci&oacute;n en Google Ads"
        step3_desc = "Pausa el ad group en Google/Meta y lo reactiva si hay stock."
        roi_q = "&iquest;Cu&aacute;nto quemas en Ads por falta de inventario?"
    },
    @{
        filename = "data_privacy.html"
        title = "Data Privacy Anonymizer"
        tag = "ENTERPRISE SECURITY"
        hero_headline = "Usa IA cumpliendo la ley GDPR y LFPDPPP."
        hero_sub = "Un proxy interno que intercepta y enmascara datos sensibles antes de enviarlos a ChatGPT."
        p2_title = "Arquitectura de T&uacute;nel Seguro"
        p2_sub = "El escudo corporativo contra multas."
        step1_title = "Intercepci&oacute;n de Prompts"
        step1_desc = "El tr&aacute;fico de IA pasa por un proxy local."
        step2_title = "Enmascaramiento (Masking)"
        step2_desc = "Sustituye nombres y RFCs por hashes."
        step3_title = "Re-Traducci&oacute;n Segura"
        step3_desc = "Al regresar la respuesta del LLM, el proxy devuelve los datos reales."
        roi_q = "&iquest;A cu&aacute;nto asciende el riesgo legal anual (multas)?"
    }
)

$navbarReplace = '<div className="flex items-center"><a href="../index.html#capabilities" className="hidden md:flex text-slate-400 hover:text-white font-mono text-xs items-center gap-2 mr-6 transition-colors">&larr; Ver Directorio</a><button onClick={() => document.getElementById(''contact-form'').scrollIntoView()} className="bg-white text-navy-950 hover:bg-slate-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg">Diagnóstico de Viabilidad</button></div>'

foreach ($product in $products) {
    $html = $template
    
    # 1. Update Navbar link
    $html = $html -replace '<button onClick=\{\(\) => document.getElementById\(''contact-form''\).scrollIntoView\(\)\} className="bg-white text-navy-950 hover:bg-slate-200 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg">\s*Diagnóstico de Viabilidad\s*</button>', $navbarReplace
    
    # 2. Update Title
    $html = $html -replace '<title>BluePixel \| RFP & Tender Analyst Agent</title>', "<title>BluePixel | $($product.title)</title>"
    
    # 3. Update Hero Tag
    $html = $html -replace 'Arquitectura Operativa Lista para Producción', $product.tag
    
    # 4. Update Hero Headline
    $html = $html -replace 'falta de tiempo\.', "$($product.hero_headline)"
    
    # 5. Update Hero Sub
    $html = $html -replace 'Instala nuestro <strong>RFP & Tender Analyst Agent</strong>. Un flujo autónomo que lee licitaciones de 200 páginas, genera la matriz de cumplimiento y pre-redacta tu propuesta técnica en 4 horas\.', $product.hero_sub
    
    # 6. Update P2 Title and Sub
    $html = $html -replace 'Arquitectura del Agente Licitador', $product.p2_title
    $html = $html -replace 'No es "ChatGPT". Es un Pipeline RAG seguro conectado a tu historial corporativo\.', $product.p2_sub
    
    # 7. Update Steps
    $html = $html -replace 'Ingesta Masiva', $product.step1_title
    $html = $html -replace 'Sube el PDF de la licitación del gobierno o corporativo. El agente lee las 200 páginas en segundos usando OCR avanzado\.', $product.step1_desc
    
    $html = $html -replace 'Cruce Histórico \(RAG\)', $product.step2_title
    $html = $html -replace 'Busca en tu historial de propuestas ganadoras y extrae los textos técnicos, certificaciones y CVs necesarios para cumplir\.', $product.step2_desc
    
    $html = $html -replace 'Redacción y Matriz', $product.step3_title
    $html = $html -replace 'Emite un documento Word con la propuesta pre-llenada al 80% y un Excel con la matriz de cumplimiento exacta\.', $product.step3_desc
    
    # 8. Update ROI Question
    $html = $html -replace '¿Cuántas licitaciones complejas respondes al mes\?', $product.roi_q
    
    $outPath = Join-Path $outputDir $product.filename
    Set-Content -Path $outPath -Value $html -Encoding UTF8
}

Write-Output "Generadas $($products.Count) landing pages en $outputDir con HTML entities."
