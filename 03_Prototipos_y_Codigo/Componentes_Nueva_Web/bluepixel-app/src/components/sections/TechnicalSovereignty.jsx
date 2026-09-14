import React from 'react';

const TechnicalSovereignty = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-navy-950 to-navy-900 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header — centered */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-4 block">
            CERO LOCK-IN · SOBERANÍA ABSOLUTA
          </span>
          <h2 className="mb-6 font-black font-display tracking-tight leading-[1.15] text-4xl lg:text-5xl">
            Tu infraestructura<span className="text-blue-500">.</span> Tus datos<span className="text-blue-500">.</span> Tu código fuente<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Construimos agentes de IA bajo un principio fundacional innegociable: tú eres el dueño absoluto de la tecnología. No vendemos &ldquo;cajas negras&rdquo; ni cobramos licencias abusivas por usuario.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 1: Wide Card (Span 2 columns) */}
          <div className="lg:col-span-2 bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-colors group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-colors"></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzNyw5OSwyMzUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="mb-4 font-bold font-display text-2xl md:text-3xl tracking-tight leading-[1.2]">Despliegue nativo en tu VPC<span className="text-blue-500">.</span></h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada (AWS, Azure o Google Cloud). Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
              </p>
            </div>

            {/* Right side Visual Graphic for VPC Card */}
            <div className="hidden lg:flex w-full max-w-[320px] items-center justify-end relative z-10">
              <div className="w-full bg-[#060A14] rounded-2xl border border-white/[0.08] p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="text-[10px] font-mono text-blue-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  VPC_DEPLOYMENT_STATUS
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                    <span className="text-[11px] text-slate-300 font-mono">ec2_cluster_nodes</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                    <span className="text-[11px] text-slate-300 font-mono">rds_vector_db</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-2.5 rounded-lg">
                    <span className="text-[11px] text-slate-300 font-mono">iam_zero_trust</span>
                    <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">ENFORCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Square */}
          <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Propiedad del Código<span className="text-blue-500">.</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
              Al finalizar la fase de desarrollo (Build), te entregamos el 100% de los derechos intelectuales y el código fuente. Eres completamente libre de mantenerlo in-house con tu equipo de ingeniería o contratar nuestra póliza de Mantenimiento.
            </p>
          </div>

          {/* Card 3: Square */}
          <div className="bg-navy-900 border border-white/[0.06] rounded-[2rem] p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform relative z-10">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="mb-3 font-bold font-display text-xl md:text-2xl tracking-tight leading-[1.2] relative z-10">Modelos Blindados<span className="text-blue-500">.</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10 mt-auto">
              Utilizamos instancias empresariales de LLMs con políticas estrictas de privacidad (Zero Data Retention). Ninguna conversación confidencial o dato de tus clientes se usará jamás para entrenar modelos públicos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalSovereignty;
