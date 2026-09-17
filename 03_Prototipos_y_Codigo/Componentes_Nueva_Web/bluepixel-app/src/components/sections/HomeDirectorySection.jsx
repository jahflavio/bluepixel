import React from 'react';

const HomeDirectorySection = () => {
  return (
    <section className="py-24 px-6 bg-[#040711] border-y border-white/[0.05] relative overflow-hidden">
      {/* Background glow accents */}
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
          <a href="#/pilares" className="group bg-[#060A14] border border-white/[0.08] hover:border-blue-500/50 rounded-2xl p-8 transition-all hover:-translate-y-1 block cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              Nuestros 3 Pilares
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Apps & Producto, Automatización y Gobernanza IA. Descubre la filosofía arquitectónica que sostiene a los corporativos más ágiles.
            </p>
            <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Explorar Pilares →
            </div>
          </a>

          {/* Teaser Servicios */}
          <a href="#/servicios" className="group bg-[#060A14] border border-white/[0.08] hover:border-purple-500/50 rounded-2xl p-8 transition-all hover:-translate-y-1 block cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              Directorio de Servicios
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              De la fricción operativa a la agentización total. Explora nuestras 6 capacidades técnicas, entregables y metodologías de implementación.
            </p>
            <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Ver los 6 Servicios →
            </div>
          </a>

          {/* Teaser Como Trabajamos */}
          <a href="#/como-trabajamos" className="group bg-[#060A14] border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl p-8 transition-all hover:-translate-y-1 block cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              🤝
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              Modelos de Trabajo
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Conoce cómo eliminamos el riesgo comercial. Desde Diagnósticos Operativos hasta Transformación Full-Stack garantizada.
            </p>
            <div className="flex items-center text-emerald-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Ver Modelos de Engagement →
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default HomeDirectorySection;
