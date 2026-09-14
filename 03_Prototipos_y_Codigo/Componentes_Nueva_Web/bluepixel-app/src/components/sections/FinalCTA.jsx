import React from 'react';

const FinalCTA = ({ onOpenContact }) => {
      return (
        <section className="py-24 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-bold mb-6 block">
                  AGENDA UNA CONVERSACIÓN TÉCNICA
                </span>
                
                <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-4xl md:text-5xl lg:text-6xl text-white">
                  ¿Listo para llevar tu visión de IA a producción<span className="text-blue-500">?</span>
                </h2>
                
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
                  Reserva 45 minutos con nuestros arquitectos de software. Revisaremos tus cuellos de botella operativos, analizaremos la viabilidad técnica y definiremos el primer paso realista para tu organización — incluso si la respuesta es que aún no estás listo para construir.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={onOpenContact}
                    className="w-full sm:w-auto bg-white hover:bg-slate-100 text-navy-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Diagnóstico</span>
                    <span>↗</span>
                  </button>
                  
                  <a 
                    href="#case-studies"
                    className="w-full sm:w-auto bg-transparent hover:bg-white/[0.05] text-white font-semibold text-sm px-8 py-3.5 rounded-full border border-white/[0.15] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Ver Casos de Éxito</span>
              <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default FinalCTA;
