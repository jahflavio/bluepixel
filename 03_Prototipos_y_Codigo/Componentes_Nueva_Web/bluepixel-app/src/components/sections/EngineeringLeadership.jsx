import React from 'react';

const EngineeringLeadership = () => (
      <section className="py-24 bg-navy-900 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                ENGINEERING LEADERSHIP
              </span>
              <h2 className="md: md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                No vendemos "recursos". Asignamos Arquitectos a tu operación<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                El 90% de las agencias de software escalan contratando juniors y cobrándolos a precio de senior. En BluePixel, cada proyecto es liderado de principio a fin por un <strong>Lead Architect</strong> con experiencia probada en sistemas enterprise. Tú firmas el cheque con humanos responsables del ROI, no con "vendedores".
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center font-bold text-white text-xl">
                    L
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Leonardo</h4>
                    <span className="text-slate-400 text-xs font-mono">Lead Agentic Engineer</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center font-bold text-white text-xl">
                    P
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Pablo G.</h4>
                    <span className="text-slate-400 text-xs font-mono">Principal Architect</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-navy-950 p-8 rounded-3xl border border-blue-500/20 shadow-2xl relative">
              <div className="absolute -top-6 -left-4 text-6xl text-blue-500/20 font-serif leading-none">"</div>
              <p className="text-white text-lg font-medium italic leading-relaxed mb-6">
                "Nuestra promesa a los CTOs es simple: Si al mes 2 el agente no ha liberado horas de tu equipo, fallamos. Por eso no vendemos código a granel; diagnosticamos y operamos."
              </p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">Liderazgo Técnico Directo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

export default React.memo(EngineeringLeadership);
