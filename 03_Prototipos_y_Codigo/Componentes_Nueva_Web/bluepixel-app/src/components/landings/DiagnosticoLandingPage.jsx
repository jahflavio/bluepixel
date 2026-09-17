import React, { useEffect } from 'react';
import MultiStepContact from '../forms/MultiStepContact';

const DiagnosticoLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-blue-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            ● EL PRIMER PASO SIN RIESGO (14 DÍAS MÁXIMO)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Auditoría de Deuda Técnica y <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Arquitectura Cloud en 14 Días</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            El 85% de las iniciativas de software corporativo fallan porque empiezan programando sin entender el problema. Mitiga el riesgo y evita el "shock de precio": en 2 semanas dictaminamos tu deuda técnica, cuantificamos el costo de la fricción operativa en pesos y te entregamos el Blueprint de Arquitectura exacto.
          </p>
        </div>
      </section>

      {/* Qué entregamos */}
      <section className="py-16 px-6 bg-navy-950/50 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-mono text-sm tracking-widest text-slate-400 mb-12 uppercase">Al finalizar los 14 días recibes:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Auditoría IMPATH™</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Mapeamos los cuellos de botella en la adopción de tu equipo y calculamos el dinero exacto que pierdes cada mes por procesos manuales.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400"></div>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">Blueprint de Arquitectura Cloud</h3>
              <p className="text-slate-400 text-sm leading-relaxed">El diagrama técnico exacto (Cloud, Bases de Datos, Middleware y Protocolos MCP) para escalar tu operación sin crear código espagueti ni depender de un solo proveedor.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Garantía de Presupuesto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Un roadmap de ejecución detallado con tiempos y SLAs. Sabrás exactamente cuánto cuesta la solución antes de comprometer el presupuesto mayor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Solicita tu Diagnóstico Operativo</h2>
            <p className="text-slate-400">Déjanos tus datos y un Arquitecto de Soluciones te contactará en menos de 24 horas para evaluar si calificas.</p>
          </div>
          
          <div className="bg-navy-900 border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact preselectedPackage="Diagnóstico Operativo FutureProof" hideCloseButton={true} />
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="border-t border-white/[0.05] py-8 text-center text-slate-500 text-xs font-mono">
        &copy; {new Date().getFullYear()} BluePixel Engineering. Transformando corporativos en ecosistemas resilientes.
      </footer>
    </div>
  );
};

export default DiagnosticoLandingPage;
