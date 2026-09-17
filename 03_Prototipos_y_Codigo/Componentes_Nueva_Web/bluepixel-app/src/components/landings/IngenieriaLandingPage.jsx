import React, { useEffect } from 'react';
import MultiStepContact from '../forms/MultiStepContact';

const IngenieriaLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-indigo-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mt-10">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            ● INGENIERÍA DE AGENTES (SPRINTS MENSUALES)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-display">
            Soberanía de Código y <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">99.9% de Uptime en Producción</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Olvida a las "fábricas de software" tradicionales. Integra un Squad Senior (Tech Lead, AI Engineer y UX Lead) diseñado para refactorizar sistemas legacy y crear arquitecturas agénticas resilientes. Mantén el 100% de la propiedad de tu código y blinda tu operación bajo estándares SOC2 y OWASP Top 10.
          </p>
        </div>
      </section>

      {/* Qué entregamos */}
      <section className="py-16 px-6 bg-[#040711] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-mono text-sm tracking-widest text-slate-400 mb-12 uppercase">Al integrar nuestro Squad recibes:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Soberanía de IP</h3>
              <p className="text-slate-400 text-sm leading-relaxed">El código fuente es 100% tuyo desde el día uno. Entregamos repositorios privados con cobertura de pruebas automatizadas superior al 85%.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-400"></div>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitectura MCP</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Conectamos agentes autónomos con tus sistemas corporativos (SAP, Oracle, Salesforce) usando el Patrón Strangler Fig y protocolos MCP que bloquean alucinaciones y fugas de datos.</p>
            </div>
            <div className="bg-[#060A14] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Velocidad Predictiva</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Sprints quincenales garantizados con releases funcionales en entornos de staging. Sabes exactamente qué valor recibes cada 15 días.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Agenda tu sesión de Staff Augmentation</h2>
            <p className="text-slate-400">Cuéntanos sobre tu roadmap técnico y te asignaremos un Arquitecto para evaluar el perfil del Squad que necesitas.</p>
          </div>
          
          <div className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact preselectedPackage="Ingeniería de Agentes (02)" hideCloseButton={true} />
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="border-t border-white/[0.05] py-8 text-center text-slate-500 text-xs font-mono bg-[#02040A]">
        &copy; {new Date().getFullYear()} BluePixel Engineering. Transformando corporativos en ecosistemas resilientes.
      </footer>
    </div>
  );
};

export default IngenieriaLandingPage;
