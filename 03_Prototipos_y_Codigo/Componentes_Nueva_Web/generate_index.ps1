$outputDir = "landings"
$indexPath = Join-Path $outputDir "index.html"

$html = @"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BluePixel | Blueprint Library</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { navy: { 850: '#0f1420', 900: '#0a0d14', 950: '#05070a' } }
        }
      }
    }
  </script>
</head>
<body class="bg-navy-950 text-slate-200 font-sans p-10">
  <div class="max-w-5xl mx-auto">
    <div class="mb-12">
        <a href="../index.html" class="text-blue-500 hover:text-blue-400 mb-6 inline-block">&larr; Volver al Home Institucional</a>
        <h1 class="text-4xl font-bold text-white mb-4">Blueprint Library</h1>
        <p class="text-slate-400">Catálogo de 10 Arquitecturas Operativas pre-construidas para acelerar tu negocio.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
"@

$products = @(
    @{ filename = "finance_matcher.html"; title = "Finance Matcher"; desc = "Conciliador Autónomo SAP" },
    @{ filename = "legal_onboarding.html"; title = "Legal Onboarding"; desc = "KYC/AML Agent" },
    @{ filename = "apa.html"; title = "Agentic Process Automation"; desc = "Automatización Resiliente" },
    @{ filename = "triage_rag.html"; title = "Triage RAG"; desc = "Soporte L1 en WhatsApp" },
    @{ filename = "rfp_analyst.html"; title = "RFP Analyst"; desc = "Agente Analista de Licitaciones" },
    @{ filename = "hr_recruiter.html"; title = "HR Recruiter"; desc = "Reclutador Autónomo ATS" },
    @{ filename = "aoc.html"; title = "Agentic Operations Center"; desc = "Monitoreo Preventivo Cloud" },
    @{ filename = "erp_bridge.html"; title = "ERP Bridge"; desc = "Query Natural a Bases Legacy" },
    @{ filename = "smart_ads.html"; title = "Smart Ads Optimizer"; desc = "Automatización de Pauta con Stock" },
    @{ filename = "data_privacy.html"; title = "Data Privacy Anonymizer"; desc = "Escudo GDPR/LFPDPPP" }
)

foreach ($p in $products) {
    $html += @"
      <a href="$($p.filename)" class="block bg-navy-900 border border-white/10 rounded-xl p-6 hover:border-blue-500 transition-all hover:-translate-y-1">
        <h3 class="text-xl font-bold text-white mb-2">$($p.title)</h3>
        <p class="text-slate-400 text-sm">$($p.desc)</p>
        <span class="text-blue-400 text-xs font-bold mt-4 inline-block">Ver Landing Page &rarr;</span>
      </a>
"@
}

$html += @"
    </div>
  </div>
</body>
</html>
"@

Set-Content -Path $indexPath -Value $html -Encoding UTF8
Write-Output "Directorio landings/index.html creado."
