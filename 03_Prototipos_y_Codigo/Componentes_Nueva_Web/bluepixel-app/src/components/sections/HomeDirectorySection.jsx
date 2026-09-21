import React from 'react';
import { Layers, TerminalSquare, Briefcase } from 'lucide-react';

const HomeDirectorySection = () => {
  return (
    <section className="py-24 px-6 bg-[#040711] border-y border-white/[0.05] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
            ✦ EXPLORA BLUEPIXEL
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
            Estructura Técnica y Comercial
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Navega directamente a lo que necesitas conocer. Separamos nuestra filosofía técnica de nuestros servicios y modelos de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Teaser Pilares */}
          <a href="#/pilares" className="group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10 block cursor-pointer">
            {/* Ambient Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <Layers className="w-6 h-6 text-blue-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                4 Formas de Trabajar
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Consultoría Digital, Agentes, Plataformas y Evolución Digital. Cuatro modelos de contratación modulares con ROI garantizado y plazos definidos.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Explorar los 4 Pilares</span>
                <span className="font-mono group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* Teaser Servicios */}
          <a href="#/servicios" className="group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10 block cursor-pointer">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                <TerminalSquare className="w-6 h-6 text-purple-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Directorio de Servicios
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                De la fricción operativa a la agentización total. Explora nuestras 6 capacidades técnicas, entregables y metodologías de implementación.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Ver los 6 Servicios</span>
                <span className="font-mono group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* Teaser Como Trabajamos */}
          <a href="#/como-trabajamos" className="group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10 block cursor-pointer">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300">
                <Briefcase className="w-6 h-6 text-emerald-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Modelos de Trabajo
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Conoce cómo eliminamos el riesgo comercial. Desde Diagnósticos Operativos hasta Transformación Full-Stack garantizada.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Ver Modelos de Engagement</span>
                <span className="font-mono group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default HomeDirectorySection;
