import React, { useState } from 'react';
import { 
  Wheat, 
  Plane, 
  ShoppingCart, 
  Truck, 
  Landmark, 
  HeartPulse, 
  Trophy, 
  Users,
  ArrowRight
} from 'lucide-react';

const industriesData = [
  {
    id: 'food',
    name: 'Alimentos y Bebidas',
    sub: 'FOOD & BEVERAGES',
    icon: Wheat,
    challenge: 'Plataformas de datos fragmentadas que no informan decisiones ejecutivas. Dashboards técnicamente correctos pero difíciles de interpretar y escalar entre regiones.',
    solution: 'Arquitectura de datos unificada, sistemas de diseño para analytics y dashboards optimizados para toma de decisiones ejecutivas en múltiples países.',
    tags: ['DATA & ANALYTICS', 'UX/UI DESIGN', 'DESIGN SYSTEMS'],
    caseClient: 'Bimbo',
    metricValue: '40%',
    metricLabel: 'más rápida la toma de decisiones'
  },
  {
    id: 'travel',
    name: 'Turismo y Hospitalidad',
    sub: 'TRAVEL & LOYALTY',
    icon: Plane,
    challenge: 'Programas de lealtad con baja adopción móvil y beneficios difíciles de descubrir, que erosionan retención en los segmentos de mayor valor.',
    solution: 'Rediseño de experiencias móviles centradas en descubrimiento, redención de beneficios y arquitectura de información que escala por región.',
    tags: ['UX/UI DESIGN', 'WEB DEVELOPMENT', 'MOBILE APP'],
    caseClient: 'Avianca / LifeMiles',
    metricValue: '+22%',
    metricLabel: 'en tiempo de sesión móvil'
  },
  {
    id: 'retail',
    name: 'E-Commerce y Retail',
    sub: 'RETAIL · E-COMMERCE',
    icon: ShoppingCart,
    challenge: 'Conversión móvil estancada y descubrimiento de producto roto en catálogos amplios, con flujos de checkout que filtran revenue cada trimestre.',
    solution: 'E-commerce móvil reinventado con arquitectura modular, búsqueda y discovery accionables, y checkout simplificado medido en pesos.',
    tags: ['UX/UI DESIGN', 'MOBILE APP', 'E-COMMERCE'],
    caseClient: 'RadioShack',
    metricValue: '+32%',
    metricLabel: 'en tasa de conversión móvil'
  },
  {
    id: 'mobility',
    name: 'Logística y Movilidad',
    sub: 'MOBILITY · HIGH TRAFFIC',
    icon: Truck,
    challenge: 'Plataformas de alto tráfico donde decisiones de UX impactan millones de viajes y la adopción digital se mide en segundos.',
    solution: 'UX Research aplicado, usability testing continuo y definición de la estrategia de adopción digital para apps móviles de gran escala.',
    tags: ['UX RESEARCH', 'USABILITY TESTING', 'MOBILE APP'],
    caseClient: 'DiDi',
    metricValue: '87.5%',
    metricLabel: 'task completion rate'
  },
  {
    id: 'finance',
    name: 'Finanzas y Fintech',
    sub: 'BANKING · FINTECH',
    icon: Landmark,
    challenge: 'Procesos críticos de originación, onboarding y cumplimiento que mezclan riesgo regulatorio con experiencias digitales fragmentadas.',
    solution: 'Arquitectura modular, observabilidad nativa y auditoría continua de vulnerabilidades traducida a riesgo financiero medible.',
    tags: ['SECURITY & RELIABILITY', 'ENGINEERING', 'SOC2-READY'],
    caseClient: 'Fintech Enterprise',
    metricValue: '$4.7M',
    metricLabel: 'revenue protegido / año'
  },
  {
    id: 'health',
    name: 'Salud y Farmacéutica',
    sub: 'HEALTH · PHARMA',
    icon: HeartPulse,
    challenge: 'Ecosistemas clínicos y comerciales que necesitan unificar datos sensibles, cumplimiento y experiencia para pacientes y equipos médicos.',
    solution: 'Plataformas seguras por diseño, integración con sistemas legados y experiencias optimizadas para flujos clínicos y de pacientes.',
    tags: ['SECURITY & RELIABILITY', 'ENGINEERING', 'UX/UI DESIGN'],
    caseClient: 'Salud Enterprise',
    metricValue: '100%',
    metricLabel: 'cumplimiento regulatorio end-to-end'
  },
  {
    id: 'sports',
    name: 'Deportes y Entretenimiento',
    sub: 'SPORTS · MEDIA',
    icon: Trophy,
    challenge: 'Audiencias masivas que demandan experiencias digitales en tiempo real, contenido personalizado y plataformas estables en picos de demanda.',
    solution: 'Plataformas escalables, diseño centrado en fanáticos y arquitectura preparada para eventos en vivo y campañas de alto impacto.',
    tags: ['UX/UI DESIGN', 'ENGINEERING', 'DATA & ANALYTICS'],
    caseClient: 'FMF / Sports Media',
    metricValue: '99.9%',
    metricLabel: 'disponibilidad en picos de tráfico'
  },
  {
    id: 'hr',
    name: 'Recursos Humanos',
    sub: 'HR · TALENT',
    icon: Users,
    challenge: 'Procesos de talento, beneficios y desempeño dispersos en herramientas que no conversan entre sí ni con los KPIs del negocio.',
    solution: 'Plataformas de people analytics integradas con los flujos reales de RH, UX simplificado para colaboradores y dashboards directivos.',
    tags: ['DATA & ANALYTICS', 'UX/UI DESIGN', 'ENGINEERING'],
    caseClient: 'HR Enterprise',
    metricValue: '3x',
    metricLabel: 'adopción interna de colaboradores'
  }
];

const IndustriesImpactSection = ({ onSelectIndustryCase }) => {
  const [activeId, setActiveId] = useState('food');

  const active = industriesData.find(item => item.id === activeId) || industriesData[0];
  const ActiveIcon = active.icon;

  return (
    <section id="industrias" className="py-20 md:py-28 px-4 sm:px-6 bg-[#02050E] relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Blue Backlight Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[170px] pointer-events-none rounded-full" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-tight">
            Industrias donde hemos creado impacto
          </h2>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-12">
          {industriesData.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-[13px] font-normal transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'border-white/90 bg-white/[0.1] text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] font-medium'
                    : 'border-white/[0.08] bg-[#060A18]/60 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Card Layout (Grid: 2 Columns on desktop) */}
        <div className="max-w-[1100px] mx-auto rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#040816]/80 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_340px] shadow-2xl transition-all duration-300">
          
          {/* Left Side (approx 65% width): Details */}
          <div className="p-7 sm:p-9 md:p-10 flex flex-col justify-between">
            <div>
              {/* Header with Icon and Subtitle */}
              <div className="flex items-center gap-3.5 mb-8">
                <ActiveIcon className="w-7 h-7 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-tight">
                    {active.name}
                  </h3>
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold mt-0.5">
                    {active.sub}
                  </span>
                </div>
              </div>

              {/* Two Columns: Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold mb-2.5">
                    El reto del sector
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                    {active.challenge}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold mb-2.5">
                    Cómo lo resolvemos
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                    {active.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              {active.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-300 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side (approx 35% width): Case Study Highlight */}
          <div className="border-t lg:border-t-0 lg:border-l border-white/[0.08] p-7 sm:p-9 md:p-10 bg-[#050C1F]/60 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle corner light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl pointer-events-none rounded-full" />

            <div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2">
                Caso de éxito
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-8">
                {active.caseClient}
              </div>

              <div className="mb-8">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none mb-1">
                  {active.metricValue}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-normal leading-snug">
                  {active.metricLabel}
                </div>
              </div>
            </div>

            <div>
              <a 
                href="#casos-de-exito" 
                onClick={(e) => {
                  if (onSelectIndustryCase) {
                    e.preventDefault();
                    onSelectIndustryCase(active.caseClient);
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-colors cursor-pointer"
              >
                Ver más proyectos del sector 
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustriesImpactSection;
