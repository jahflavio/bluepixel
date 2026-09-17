import React, { useState } from 'react';
import { 
  Coffee, 
  Plane, 
  ShoppingCart, 
  Landmark, 
  Activity, 
  Trophy, 
  Truck, 
  Users,
  ArrowRight
} from 'lucide-react';

const industriesData = [
  {
    id: 'logistica',
    name: 'Logística y Movilidad',
    icon: Truck,
    challenge: 'Plataformas de movilidad y logística con flujos operativos complejos, baja adopción digital y fricción en experiencias críticas para el usuario final.',
    solution: 'UX Research profundo con múltiples métodos para identificar fricciones, mejorar adopción y maximizar task completion en plataformas de movilidad de alto tráfico.',
    tags: ['UX Research', 'Usability Testing', 'Mobile App'],
    caseStudy: {
      client: 'DiDi',
      industry: 'Logística y Movilidad',
      metric: '87.5%',
      metricLabel: 'task completion rate'
    }
  },
  {
    id: 'fintech',
    name: 'Finanzas y Fintech',
    icon: Landmark,
    challenge: 'Sistemas legacy rígidos y procesos de onboarding que generan alta tasa de abandono y desconfianza en los usuarios.',
    solution: 'Arquitecturas cloud-native seguras (SOC2) y rediseño de flujos de onboarding (KYC) para reducir fricción sin comprometer el compliance.',
    tags: ['Arquitectura Cloud', 'KYC', 'Security'],
    caseStudy: {
      client: 'Kueski',
      industry: 'Finanzas y Fintech',
      metric: '+40%',
      metricLabel: 'en conversión de onboarding'
    }
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce y Retail',
    icon: ShoppingCart,
    challenge: 'Carritos abandonados, búsqueda ineficiente de productos y plataformas que no soportan picos de tráfico en temporalidades altas.',
    solution: 'Integración de motores de búsqueda semántica con IA, optimización de checkout y refactorización de backend para escalabilidad extrema.',
    tags: ['AI Search', 'Performance', 'Checkout UX'],
    caseStudy: {
      client: 'El Palacio de Hierro',
      industry: 'E-Commerce y Retail',
      metric: '3.2s',
      metricLabel: 'reducción en tiempo de carga'
    }
  },
  {
    id: 'salud',
    name: 'Salud y Farmacéutica',
    icon: Activity,
    challenge: 'Silos de información entre pacientes, médicos y hospitales, además de estrictas regulaciones de privacidad (HIPAA / LFPDPPP).',
    solution: 'Portales de telemedicina unificados con IA para triaje, garantizando trazabilidad y seguridad en los expedientes clínicos electrónicos.',
    tags: ['Telemedicina', 'Data Privacy', 'Portales Web'],
    caseStudy: {
      client: 'Farmacias del Ahorro',
      industry: 'Salud y Farmacéutica',
      metric: '+1M',
      metricLabel: 'expedientes gestionados'
    }
  }
];

const IndustriesImpactSection = () => {
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0].id);

  const activeIndustry = industriesData.find(i => i.id === activeIndustryId) || industriesData[0];

  return (
    <section className="py-24 px-6 bg-[#02040A] relative border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-12">
          Industrias donde <br className="hidden md:block" />
          hemos creado <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">impacto.</span>
        </h2>

        {/* Industry Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {industriesData.map((industry) => {
            const Icon = industry.icon;
            const isActive = activeIndustryId === industry.id;
            
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustryId(industry.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                  ${isActive 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-[#060A14] border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="bg-[#060A14] border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Ambient Glow inside the card */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
          
          {/* Left Side: Challenge & Solution */}
          <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-between relative z-10 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <activeIndustry.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{activeIndustry.name}</h3>
                  <span className="text-slate-500 text-sm">{activeIndustry.id.toUpperCase()}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-3 font-bold">
                  El Reto del Sector
                </h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {activeIndustry.challenge}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-3 font-bold">
                  Cómo lo resolvemos
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeIndustry.solution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {activeIndustry.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Case Study */}
          <div className="p-8 md:p-12 lg:w-2/5 bg-[#02040A]/50 relative z-10 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-6 font-bold">
                Caso de Éxito Destacado
              </h4>
              
              <div className="bg-[#0A0F1D] border border-white/[0.05] rounded-2xl p-8 mb-6 hover:border-blue-500/30 transition-colors group cursor-pointer">
                <div className="mb-8">
                  <h5 className="text-2xl font-bold text-white mb-1">{activeIndustry.caseStudy.client}</h5>
                  <span className="text-slate-500 text-sm">{activeIndustry.caseStudy.industry}</span>
                </div>
                
                <div className="border-t border-white/[0.05] pt-6 mb-8">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                    {activeIndustry.caseStudy.metric}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {activeIndustry.caseStudy.metricLabel}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  Ver caso completo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl border border-white/10 text-slate-300 text-sm font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Ver más proyectos del sector <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesImpactSection;
