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
        roi_q = "&iquest;Cu&aacute;ntas facturas procesa tu equipo al mes?"
        roi_unit = "Facturas"
        roi_max = "50000"
        roi_step = "1000"
        roi_cost_per_unit = "2.5"
        roi_time_per_unit = "0.08"
        widget_type = "DATAGRID"
        widget_data = "{ `"rows`": [{`"id`": `"INV-1049`", `"amount`": `"$45,200 MXN`"}, {`"id`": `"INV-1050`", `"amount`": `"$12,450 MXN`"}, {`"id`": `"INV-1051`", `"amount`": `"$9,800 MXN`"}], `"result_title`": `"Conciliaci\u00F3n ERP`", `"result_value`": `"100% MATCHED`" }"
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
        roi_q = "&iquest;Cu&aacute;ntos registros (Data Entry) procesas al mes?"
        roi_unit = "Registros"
        roi_max = "100000"
        roi_step = "2000"
        roi_cost_per_unit = "0.8"
        roi_time_per_unit = "0.05"
        widget_type = "VISION_AGENT"
        widget_data = "{}"
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
        roi_q = "&iquest;Cu&aacute;ntos tickets de soporte recibe tu equipo al mes?"
        roi_unit = "Tickets"
        roi_max = "20000"
        roi_step = "500"
        roi_cost_per_unit = "6.0"
        roi_time_per_unit = "0.25"
        widget_type = "WHATSAPP"
        widget_data = "{ `"messages`": [{`"type`": `"user`", `"text`": `"Hola, tengo un problema con mi acceso a la VPN. Me da error de certificados.`"}, {`"type`": `"bot`", `"text`": `"Analizando base de conocimiento...`", `"metric`": `"RAG: VPN macOS 14`"}, {`"type`": `"bot`", `"text`": `"Detect\u00E9 un problema recurrente con Cisco AnyConnect. \u00BFDeseas que ejecute el reinicio de tu perfil en el servidor?`"}, {`"type`": `"user`", `"text`": `"S\u00ED por favor, urge.`"}, {`"type`": `"bot`", `"text`": `"Ejecutando reinicio...`", `"metric`": `"API: Active Directory`"}, {`"type`": `"bot`", `"text`": `"Listo. Perfil reiniciado exitosamente. Intenta conectarte de nuevo. Ticket #8409 resuelto.`"}] }"
    },
    @{
        filename = "rfp_analyst.html"
        title = "RFP & Tender Analyst Agent"
        tag = "Arquitectura Operativa Lista para Producci&oacute;n"
        hero_headline = "Deja de perder licitaciones por falta de tiempo."
        hero_sub = "Instala nuestro <strong>RFP & Tender Analyst Agent</strong>. Un flujo aut&oacute;nomo que lee licitaciones de 200 p&aacute;ginas, genera la matriz de cumplimiento y pre-redacta tu propuesta t&eacute;cnica en 4 horas."
        p2_title = "Arquitectura del Agente Licitador"
        p2_sub = "No es `"ChatGPT`". Es un Pipeline RAG seguro conectado a tu historial corporativo."
        step1_title = "Ingesta Masiva"
        step1_desc = "Sube el PDF de la licitaci&oacute;n del gobierno o corporativo. El agente lee las 200 p&aacute;ginas en segundos usando OCR avanzado."
        step2_title = "Cruce Hist&oacute;rico (RAG)"
        step2_desc = "Busca en tu historial de propuestas ganadoras y extrae los textos t&eacute;cnicos, certificaciones y CVs necesarios para cumplir."
        step3_title = "Redacci&oacute;n y Matriz"
        step3_desc = "Emite un documento Word con la propuesta pre-llenada al 80% y un Excel con la matriz de cumplimiento exacta."
        roi_q = "&iquest;Cu&aacute;ntas licitaciones respondes al mes?"
        roi_unit = "Licitaciones"
        roi_max = "50"
        roi_step = "1"
        roi_cost_per_unit = "2000"
        roi_time_per_unit = "40"
        widget_type = "DOCUMENT"
        widget_data = "{ `"doc_title`": `"Licitacion_IMSS_Q3.pdf`", `"extracts`": [`"1`", `"2`"] }"
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
        roi_unit = "Proveedores"
        roi_max = "1000"
        roi_step = "20"
        roi_cost_per_unit = "50"
        roi_time_per_unit = "1.5"
        widget_type = "NODEFLOW"
        widget_data = "{ `"trigger_icon`": `"file-text`", `"trigger_label`": `"Acta Constitutiva Recibida`", `"nodes`": [{`"icon`": `"landmark`", `"success_label`": `"SAT OK (Lista Limpia)`"}, {`"icon`": `"shield-check`", `"success_label`": `"OFAC Validado`"}, {`"icon`": `"check-square`", `"success_label`": `"KYC Aprobado`"}], `"result_title`": `"Dictamen de Riesgo`", `"result_value`": `"Riesgo Bajo - Proveedor Listo`" }"
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
        roi_q = "&iquest;Cu&aacute;ntos curr&iacute;culums recibes al mes?"
        roi_unit = "Curr&iacute;culums"
        roi_max = "5000"
        roi_step = "100"
        roi_cost_per_unit = "4.0"
        roi_time_per_unit = "0.16"
        widget_type = "NODEFLOW"
        widget_data = "{ `"trigger_icon`": `"user-plus`", `"trigger_label`": `"Candidato Top 10% Seleccionado`", `"nodes`": [{`"icon`": `"briefcase`", `"success_label`": `"ATS Actualizado`"}, {`"icon`": `"message-square`", `"success_label`": `"Notificaci\u00F3n al Hiring Manager`"}, {`"icon`": `"calendar`", `"success_label`": `"Entrevista Agendada`"}], `"result_title`": `"Pipeline Completado`", `"result_value`": `"Candidato procesado en 1.2s`" }"
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
        roi_q = "&iquest;Cu&aacute;ntas alertas o ca&iacute;das de servicio gestionan al mes?"
        roi_unit = "Alertas"
        roi_max = "500"
        roi_step = "10"
        roi_cost_per_unit = "85"
        roi_time_per_unit = "2"
        widget_type = "TERMINAL"
        widget_data = "{ `"steps`": [`"[WARN] API Gateway: Spike 500 errors detected`", `"[INFO] Cross-referencing Datadog logs...`", `"[CRITICAL] RCA: DB timeout due to missing index.`", `"[AGENT] Correlating with recent PRs (GitHub)...`", `"[ACTION] Found faulty PR #402. Initiating rollback.`", `"[INFO] Rollback complete. Alerting #devops channel.`"], `"result_title`": `"Incident Auto-Resolved`", `"result_value`": `"0 min Downtime`" }"
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
        roi_q = "&iquest;Cu&aacute;ntos reportes manuales pide la directiva al mes?"
        roi_unit = "Reportes"
        roi_max = "200"
        roi_step = "5"
        roi_cost_per_unit = "120"
        roi_time_per_unit = "3.5"
        widget_type = "TERMINAL"
        widget_data = "{ `"steps`": [`"[USER] \u00BFVentas totales del Q3 en regi\u00F3n Norte?`", `"[AGENT] Traduciendo lenguaje natural a SQL (Oracle)...`", `"[INFO] Assumed IAM Role: arn:aws:iam::oracle-readonly`", `"[WARN] Validando schema para evitar SQL Injection...`", `"[ACTION] Ejecutando: SELECT SUM(total) FROM sales WHERE q='3'...`", `"[AGENT] Query exitosa. Formateando resultados a JSON.`", `"[AGENT] Respuesta Final: `$1.4M USD.`"], `"result_title`": `"MCP Bridge`", `"result_value`": `"SQL executed in 142ms`" }"
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
        roi_q = "&iquest;Cu&aacute;ntas campa&ntilde;as (AdSets) gestionas mensualmente?"
        roi_unit = "Campa&ntilde;as"
        roi_max = "1000"
        roi_step = "50"
        roi_cost_per_unit = "30"
        roi_time_per_unit = "0.5"
        widget_type = "DATAGRID"
        widget_data = "{ `"rows`": [{`"id`": `"ZAP-ROJ-39`", `"amount`": `"Stock: 12`"}, {`"id`": `"BOL-NEG-00`", `"amount`": `"Stock: 0`"}, {`"id`": `"LEN-SOL-88`", `"amount`": `"Stock: 4`"}], `"result_title`": `"Google Ads API`", `"result_value`": `"1 AdGroup Paused`" }"
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
        roi_q = "&iquest;Cu&aacute;ntos documentos o textos sensibles procesan con IA al mes?"
        roi_unit = "Documentos"
        roi_max = "10000"
        roi_step = "100"
        roi_cost_per_unit = "2.0"
        roi_time_per_unit = "0.08"
        widget_type = "TERMINAL"
        widget_data = "{ `"steps`": [`"[USER] Analiza: RFC XAXX0101010 y Tarjeta 4111...`", `"[WARN] PII Sensible detectada en el Payload.`", `"[ACTION] Ejecutando modelo NER local...`", `"[AGENT] Enmascarando: XAXX... -> <HASH_1>, 4111... -> <HASH_2>`", `"[INFO] Payload sanitizado enviado a LLM (gpt-4o).`", `"[AGENT] Respuesta recibida. Des-enmascarando hashes.`"], `"result_title`": `"Privacy Proxy`", `"result_value`": `"0 Data Leaks`" }"
    }
)

foreach ($product in $products) {
    $html = $template
    
    $html = $html -replace '\{\{TITLE\}\}', $product.title
    $html = $html -replace '\{\{HERO_TAG\}\}', $product.tag
    $html = $html -replace '\{\{HERO_HEADLINE\}\}', $product.hero_headline
    $html = $html -replace '\{\{HERO_SUB\}\}', $product.hero_sub
    
    $html = $html -replace '\{\{P2_TITLE\}\}', $product.p2_title
    $html = $html -replace '\{\{P2_SUB\}\}', $product.p2_sub
    
    $html = $html -replace '\{\{STEP1_TITLE\}\}', $product.step1_title
    $html = $html -replace '\{\{STEP1_DESC\}\}', $product.step1_desc
    
    $html = $html -replace '\{\{STEP2_TITLE\}\}', $product.step2_title
    $html = $html -replace '\{\{STEP2_DESC\}\}', $product.step2_desc
    
    $html = $html -replace '\{\{STEP3_TITLE\}\}', $product.step3_title
    $html = $html -replace '\{\{STEP3_DESC\}\}', $product.step3_desc
    
    $html = $html -replace '\{\{ROI_Q\}\}', $product.roi_q
    $html = $html -replace '\{\{ROI_UNIT\}\}', $product.roi_unit
    $html = $html -replace '\{\{ROI_MAX\}\}', $product.roi_max
    $html = $html -replace '\{\{ROI_STEP\}\}', $product.roi_step
    $html = $html -replace '\{\{ROI_COST_PER_UNIT\}\}', $product.roi_cost_per_unit
    $html = $html -replace '\{\{ROI_TIME_PER_UNIT\}\}', $product.roi_time_per_unit
    
    $html = $html -replace '\{\{WIDGET_TYPE\}\}', $product.widget_type
    $html = $html -replace '\{\{WIDGET_DATA\}\}', $product.widget_data
    
    $outPath = Join-Path $outputDir $product.filename
    Set-Content -Path $outPath -Value $html -Encoding UTF8
}

Write-Output "Generadas $($products.Count) landing pages con Calculadora ROI parametrizada."
