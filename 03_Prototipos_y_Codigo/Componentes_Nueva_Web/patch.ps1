$html = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
$twtwJsx = [System.IO.File]::ReadAllText("ThreeWaysToWork.jsx", [System.Text.Encoding]::UTF8)
$heroJsx = [System.IO.File]::ReadAllText("HeroPromptEngine.jsx", [System.Text.Encoding]::UTF8)

# 1. Replace ThreeWaysToWork
$newTwtwStart = $twtwJsx.IndexOf("export const ThreeWaysToWork =")
$newTwtwEnd = $twtwJsx.IndexOf("export default ThreeWaysToWork;")
$newTwtwStr = $twtwJsx.Substring($newTwtwStart, $newTwtwEnd - $newTwtwStart).Replace("export const ", "const ")

$oldTwtwStart = $html.IndexOf("    const ThreeWaysToWork = ({ onSelectPackage }) => {")
# Use ASCII string to avoid ps1 encoding issues
$oldTwtwEnd = $html.IndexOf("    // Casos de ", $oldTwtwStart)
$html = $html.Substring(0, $oldTwtwStart) + "    " + $newTwtwStr + "`r`n" + $html.Substring($oldTwtwEnd)

# 2. Replace PRESETS
$newPresetsStart = $heroJsx.IndexOf("export const PRESETS =")
$newPresetsEnd = $heroJsx.IndexOf("export const HeroPromptEngine =")
$newPresetsStr = $heroJsx.Substring($newPresetsStart, $newPresetsEnd - $newPresetsStart).Replace("export const ", "const ")

$oldPresetsStart = $html.IndexOf("    const PRESETS = [")
$oldPresetsEnd = $html.IndexOf("    // Logos de Clientes Reales")
$html = $html.Substring(0, $oldPresetsStart) + "    " + $newPresetsStr + "`r`n" + $html.Substring($oldPresetsEnd)

# 3. Add HeroPromptEngine component
$newHeroStart = $heroJsx.IndexOf("export const HeroPromptEngine =")
$newHeroEnd = $heroJsx.IndexOf("export default HeroPromptEngine;")
$newHeroStr = $heroJsx.Substring($newHeroStart, $newHeroEnd - $newHeroStart).Replace("export const ", "const ")

$socialStart = $html.IndexOf("    // Social Proof & Client Marquee Section")
$html = $html.Substring(0, $socialStart) + "    " + $newHeroStr + "`r`n" + $html.Substring($socialStart)

# 4. Update HeroWithPrompt to use HeroPromptEngine
$oldHeroPromptStart = $html.IndexOf("    const HeroWithPrompt =")
$oldHeroPromptEnd = $html.IndexOf("    const SocialProofSection =")

$newHeroWithPrompt = @"
    const HeroWithPrompt = ({ onSelectSolution, onOpenContact }) => {
      return (
        <section id="prompt-hero" className="relative pt-16 pb-20 px-6 md:px-12 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                INGENIERIA DE AGENTES IA & PLATAFORMAS FUTUREPROOF
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-white tracking-tight leading-[1.08] mb-6">
              Construimos agentes de Inteligencia Artificial que <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">operan en produccion.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              BluePixel es la consultora de ingenieria agentica para empresas lideres en Mexico y LATAM. Conectamos agentes autonomos a tus datos y sistemas reales (SAP, Salesforce, ERPs), blindados con <strong className="text-slate-200 font-semibold">diseno UX de clase mundial</strong> para garantizar adopcion humana inmediata.
            </p>

            {/* THE HERO PROMPT BAR (PLG Engine) */}
            <div className="max-w-3xl mx-auto mb-6">
              <HeroPromptEngine onSelectSolution={onSelectSolution} />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button 
                onClick={onOpenContact}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2">
                <span>Solicitar Diagnostico Operativo (Sin Costo)</span>
                <span>-></span>
              </button>
              <a 
                href="#three-ways"
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/10 transition-colors">
                Conoce las 3 Formas de Trabajar
              </a>
            </div>
          </div>
        </section>
      );
    };
"@

$html = $html.Substring(0, $oldHeroPromptStart) + $newHeroWithPrompt + "`r`n" + $html.Substring($oldHeroPromptEnd)

[System.IO.File]::WriteAllText("index.html", $html, [System.Text.Encoding]::UTF8)
