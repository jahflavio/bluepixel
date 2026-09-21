import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Download, Lock } from 'lucide-react';

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 px-6 bg-[#02040A] relative overflow-hidden border-t border-white/[0.05]">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#060A14] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col md:flex-row items-stretch">
          
          {/* Left Column - Copy & Form */}
          <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                REPORTE EJECUTIVO GRATUITO
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
              El Playbook de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Arquitectura Agéntica
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Descubre cómo los corporativos están reduciendo fricción operativa y escalando rentabilidad con Agentes IA y Protocolos MCP.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Framework para adopción corporativa (sin alucinaciones)',
                'Gobernanza de datos bajo estándares LFPDPPP y SOC2',
                'Casos de uso reales de ERPs integrados con LLMs'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>

            {status === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-emerald-400 font-bold mb-2">¡Reporte Enviado!</h4>
                <p className="text-slate-300 text-sm">Revisa tu bandeja de entrada corporativa en los próximos minutos.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Tu correo corporativo..."
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#02040A] border border-white/[0.1] text-white text-sm rounded-xl py-4 pl-11 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                  ) : (
                    <>
                      <span>Descargar PDF</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-500 mt-4">
              * Tus datos están seguros. Jamás compartiremos tu información (LFPDPPP).
            </p>
          </div>

          {/* Right Column - Visual Mockup */}
          <div className="md:w-5/12 bg-gradient-to-br from-[#0A1020] to-[#040711] border-l border-white/[0.05] relative flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            
            {/* The Book/Report Mockup */}
            <div className="relative z-10 w-full max-w-[280px] aspect-[1/1.4] bg-[#060A14] border border-white/10 rounded-r-2xl rounded-l flex flex-col shadow-[20px_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(37,99,235,0.2)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 group cursor-pointer overflow-hidden">
              {/* Binder line */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/10 to-transparent border-r border-white/5 z-20" />
              
              {/* Cover Content */}
              <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-[#0A1020] to-[#060A14] relative">
                {/* Decorative circuit lines */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0H0V100" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="50" cy="50" r="10" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M50 40V0" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M100 50H60" stroke="#3B82F6" strokeWidth="2" />
                  </svg>
                </div>

                <div>
                  <div className="text-[8px] font-mono text-blue-400 mb-2 uppercase tracking-widest border border-blue-500/20 bg-blue-500/10 inline-block px-2 py-0.5 rounded">
                    BluePixel Research
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight mt-4">
                    The Agentic <br /> Architecture <br /> Playbook
                  </h3>
                </div>
                
                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full mb-2" />
                  <div className="w-2/3 h-1 bg-white/5 rounded-full" />
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
            </div>
            
            {/* Glowing shadow behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[350px] bg-blue-600/20 blur-[80px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
