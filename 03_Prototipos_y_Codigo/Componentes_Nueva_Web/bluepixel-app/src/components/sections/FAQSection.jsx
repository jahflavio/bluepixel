import React, { useState } from 'react';

const FAQSection = () => {
      const faqs = [
        {
          q: "¿Quién es dueño de la Propiedad Intelectual (código, datos y prompts)?",
          a: "Ustedes. Al 100%. No usamos sus datos para entrenar modelos públicos ni retenemos derechos sobre la infraestructura que construimos. Todo el stack tecnológico se despliega en su nube privada (AWS, Azure o GCP) y es auditado por su equipo de seguridad antes del pase a producción."
        },
        {
          q: "¿Cuánto tiempo toma llevar un agente de IA a producción real?",
          a: "A diferencia de PoCs eternas, nuestra metodología de despliegue asegura un Agente MVP funcional en 4 a 6 semanas. Las semanas 7 a 12 se enfocan exclusivamente en hardening (seguridad, manejo de excepciones y escalabilidad) para un pase a producción libre de fricción."
        },
        {
          q: "¿Qué modelos usan bajo el capó? ¿Están atados a OpenAI?",
          a: "Somos completamente agnósticos. Diseñamos plataformas enrutables (Router-based AI). Usamos Claude 3.5 Sonnet para tareas complejas de razonamiento lógico, GPT-4o para parsing estructurado, o modelos Llama 3 on-premise si sus políticas de gobernanza de datos exigen aislamiento total."
        },
        {
          q: "¿No podemos hacer esto internamente con nuestro equipo de ingeniería?",
          a: "Construir aplicaciones SaaS tradicionales es muy distinto a orquestar agentes no-determinísticos. Su equipo domina su negocio y su código base; nosotros aportamos los patrones arquitectónicos exclusivos de IA (Graph-state, Vector DBs, Model Context Protocol) para no reinventar la rueda y evitar sobrecostos ocultos."
        }
      ];
      
      const [openIdx, setOpenIdx] = useState(null);

      return (
        <section className="py-24 bg-[#02040A] relative border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-4">
                Transparencia Técnica
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
                Respuestas para líderes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">tecnología</span><span className="text-blue-500">.</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/[0.08] bg-[#060A14] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.15]">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className={`text-lg font-bold pr-8 transition-colors ${openIdx === idx ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                    <span className={`text-blue-400 flex-shrink-0 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-400 leading-relaxed mt-2">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default React.memo(FAQSection);
