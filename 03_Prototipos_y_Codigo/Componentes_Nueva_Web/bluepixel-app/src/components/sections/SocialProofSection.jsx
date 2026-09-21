import React from 'react';
import { CLIENT_LOGOS } from '../../data/constants';

const SocialProofSection = () => {
      const doubledLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

      return (
        <section className="py-16 bg-navy-950/90 border-t border-b border-white/[0.08] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center mb-8">
            <h2 className="md: md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
              Corporativos líderes en México y LATAM <span className="text-slate-400 font-normal">operan agentes de IA y sistemas críticos construídos por BluePixel</span><span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden py-4">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-navy-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-navy-950 to-transparent" />
            
            <div className="marquee-track flex items-center gap-14">
              {doubledLogos.map((c, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-4">
                  <img src={c.url} alt={c.name} className="client-logo" />
                </div>
              ))}
            </div>
          </div>

          {/* Hard Proof Numbers & Adoption Guarantee */}
          <div className="max-w-5xl mx-auto px-6 mt-12 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-mono">10+</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Años de Ingeniería</p>
            </div>
            <div className="relative">
              <div className="text-3xl md:text-4xl font-black text-blue-400 font-mono">#1</div>
              <p className="text-xs text-slate-200 font-bold uppercase tracking-wider font-mono mt-1">Firma UX en México</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="text-[10px] font-mono text-blue-400 font-semibold">DesignRush</span>
                <span className="text-slate-600 text-[10px]">·</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">&gt;95% Adopción</span>
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">200+</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Sistemas en Producción</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-400 font-mono">99.9%</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">SLA Cloud Serverless</p>
            </div>
          </div>

          {/* Micro-callout: The UX Moat explained to CTOs */}
          <div className="max-w-3xl mx-auto mt-8 px-4 text-center">
            <p className="text-xs font-mono text-slate-400 inline-flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✦ VENTAJA INJUSTA: </span>
              <span>Las consultoras de IA entregan interfaces toscas que los empleados rechazan. Nuestra maestría en diseño conductual garantiza +95% de adopción desde el día 1.</span>
            </p>
          </div>
        </section>
      );
    };

export default React.memo(SocialProofSection);
