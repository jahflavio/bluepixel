import React from 'react';

const PostContactSLA = ({ onOpenContact }) => {
      const steps = [
        {
          time: 'Minuto 0',
          title: 'NDA Bilateral Inmediato',
          desc: 'Recibes acuse automático con nuestro Acuerdo de Confidencialidad firmado digitalmente para proteger tus datos y procesos de negocio.'
        },
        {
          time: '24 Horas',
          title: 'Auditoría Forense de Viabilidad',
          desc: 'Un Lead Architect (no un vendedor novato) analiza tu flujo operativo y evalúa la viabilidad técnica contra nuestros casos previos.'
        },
        {
          time: '48 Horas',
          title: 'Sesión Técnica de 30 min & Blueprint',
          desc: 'Te entregamos una hipótesis de arquitectura preliminar, cálculo estimado de ROI y el alcance exacto del Diagnóstico Operativo.'
        }
      ];

      return (
        <section className="py-20 bg-navy-950 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                COMPROMISO DE SERVICIO & TRANSPARENCIA
              </span>
              <h2 className="mt-2 mb-3 font-black font-display tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                ¿Qué sucede exactamente cuando nos contactas<span className="text-blue-500">?</span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Cero ventas agresivas. Cero llamadas con personas que no entienden de ingeniería.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-navy-900 border border-white/[0.08] rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {s.time}
                    </span>
                    <span className="text-slate-600 font-mono text-sm">0{idx + 1}</span>
                  </div>
                  <h3 className="mb-2 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2]">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default PostContactSLA;
