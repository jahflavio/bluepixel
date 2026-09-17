import os

services = [
    {
        "filename": "UxUiServicePage.jsx",
        "name": "UxUiServicePage",
        "badge": "IMPATH™ ENABLED",
        "badgeColor": "emerald",
        "title": "UX/UI Design & Product Strategy",
        "desc": "Plataformas que los usuarios eligen, adoptan y recomiendan. Decisiones de diseño respaldadas por datos de comportamiento real, eliminando la fricción cognitiva y asegurando la rentabilidad del software corporativo.",
        "pkg": "UX/UI Design & Product Strategy"
    },
    {
        "filename": "AiEngineeringServicePage.jsx",
        "name": "AiEngineeringServicePage",
        "badge": "CLOUD-NATIVE SOC2",
        "badgeColor": "cyan",
        "title": "AI-Driven Software Engineering",
        "desc": "Plataformas web y apps móviles construidas para escalar sin fricciones. Ecosistema tecnológico conectado en un solo sistema cohesivo con estabilidad y rendimiento garantizados de desarrollo a producción.",
        "pkg": "AI-Driven Software Engineering"
    },
    {
        "filename": "AiAgentsServicePage.jsx",
        "name": "AiAgentsServicePage",
        "badge": "PROTOCOLO MCP",
        "badgeColor": "purple",
        "title": "Agentes IA & Automatización",
        "desc": "Procesos agentizados que liberan capacidad operativa de tu equipo. Tu plataforma responde con inteligencia y datos corporativos reales. IA integrada en lo que ya tienes, potenciando lo que ya funciona.",
        "pkg": "Agentes IA & Automatización"
    },
    {
        "filename": "DataAnalyticsServicePage.jsx",
        "name": "DataAnalyticsServicePage",
        "badge": "MIXPANEL TELEMETRY",
        "badgeColor": "indigo",
        "title": "Data & Analytics",
        "desc": "Una sola fuente de verdad para decidir con total confianza. KPIs de negocio en tiempo real para tu equipo directivo. Anticipa el comportamiento de tus usuarios antes de que impacte el negocio.",
        "pkg": "Data & Analytics"
    },
    {
        "filename": "SecurityReliabilityServicePage.jsx",
        "name": "SecurityReliabilityServicePage",
        "badge": "VAULT AUDITED",
        "badgeColor": "amber",
        "title": "Security & Reliability",
        "desc": "Valor técnico de tu plataforma protegido y cuantificado en pesos. Disponible y estable en los momentos de mayor demanda. Cumplimiento regulatorio que acelera la confianza de tus clientes.",
        "pkg": "Security & Reliability"
    },
    {
        "filename": "BusinessAiConsultingPage.jsx",
        "name": "BusinessAiConsultingPage",
        "badge": "FUTUREPROOF™ FRAMEWORK",
        "badgeColor": "emerald",
        "title": "Business AI Consulting",
        "desc": "Diagnóstico de las oportunidades de IA con mayor impacto en tu operación. Roadmap ejecutable que tu equipo directivo puede defender trimestre a trimestre. Claridad sobre dónde automatizar, dónde usar IA y dónde no invertir aún.",
        "pkg": "Business AI Consulting"
    }
]

template = """import React, { useEffect } from 'react';
import MultiStepContact from '../../forms/MultiStepContact';

const {name} = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-{badgeColor}-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-{badgeColor}-400 font-bold border border-{badgeColor}-500/20 bg-{badgeColor}-500/10 px-4 py-1.5 rounded-full mb-8">
            ✦ {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            {title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            {desc}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Inicia tu proyecto de {title}</h2>
            <p className="text-slate-400">Déjanos tus datos y un arquitecto de soluciones te contactará para evaluar tu caso de uso.</p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact preselectedPackage="{pkg}" hideCloseButton={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default {name};
"""

os.makedirs(r"c:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\03_Prototipos_y_Codigo\Componentes_Nueva_Web\bluepixel-app\src\components\landings\services", exist_ok=True)

for service in services:
    content = template.format(**service)
    filepath = os.path.join(r"c:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\03_Prototipos_y_Codigo\Componentes_Nueva_Web\bluepixel-app\src\components\landings\services", service["filename"])
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Generadas 6 páginas de servicios exitosamente.")
