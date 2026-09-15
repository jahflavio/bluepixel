import React, { useState } from 'react';

const AWARDS = [
  {
    id: 'designrush',
    logo: '☆',
    logoColor: 'text-blue-400',
    logoBg: 'bg-blue-500/10 border-blue-500/20',
    glowColor: 'group-hover:shadow-blue-500/15',
    borderHover: 'group-hover:border-blue-500/40',
    name: 'DesignRush',
    badge: '#1',
    badgeColor: 'bg-blue-600 text-white',
    tagline: 'La Garantía de Adopción · Firma UX #1 en México',
    taglineColor: 'text-blue-400',
    desc: 'El 70% del software empresarial fracasa porque los empleados lo rechazan. Nuestro liderazgo comprobado en diseño de experiencia conductual garantiza que los sistemas que construimos sean adoptados por encima del 95% desde el día uno.',
    link: 'https://www.designrush.com',
    size: 'large',
  },
  {
    id: 'clutch',
    logo: '✦',
    logoColor: 'text-amber-400',
    logoBg: 'bg-amber-500/10 border-amber-500/20',
    glowColor: 'group-hover:shadow-amber-500/15',
    borderHover: 'group-hover:border-amber-500/40',
    name: 'Clutch',
    badge: '★★★★★',
    badgeColor: 'text-amber-400',
    tagline: 'Reviews verificados de clientes',
    taglineColor: 'text-amber-400',
    desc: 'Evaluaciones reales de clientes enterprise que documentan calidad de entrega, comunicación e impacto en el negocio.',
    link: 'https://clutch.co',
    size: 'large',
  },
];

const CERTS = [
  {
    id: 'aws',
    logo: '⬡',
    logoColor: 'text-amber-400',
    logoBg: 'bg-amber-500/10 border-amber-500/20',
    glowColor: 'group-hover:shadow-amber-500/10',
    borderHover: 'group-hover:border-amber-500/30',
    name: 'AWS',
    tagline: 'Cloud Partner',
    taglineColor: 'text-amber-400',
    desc: 'Infraestructura cloud certificada en la plataforma más confiable del mundo.',
    status: 'active',
    link: 'https://aws.amazon.com/partners/',
  },
  {
    id: 'cybervadis',
    logo: '🛡',
    logoColor: 'text-emerald-400',
    logoBg: 'bg-emerald-500/10 border-emerald-500/20',
    glowColor: 'group-hover:shadow-emerald-500/10',
    borderHover: 'group-hover:border-emerald-500/30',
    name: 'CyberVadis',
    tagline: 'Seguridad Certificada',
    taglineColor: 'text-emerald-400',
    desc: 'Buenas prácticas de seguridad verificadas por auditoría independiente.',
    status: 'active',
    link: 'https://cybervadis.com',
  },
  {
    id: 'scrum',
    logo: '⚙',
    logoColor: 'text-blue-400',
    logoBg: 'bg-blue-500/10 border-blue-500/20',
    glowColor: 'group-hover:shadow-blue-500/10',
    borderHover: 'group-hover:border-blue-500/30',
    name: 'ScrumStudy',
    tagline: 'Metodología Ágil',
    taglineColor: 'text-blue-400',
    desc: 'Equipos certificados en metodologías ágiles de desarrollo y producto.',
    status: 'active',
    link: 'https://www.scrumstudy.com',
  },
  {
    id: 'iso',
    logo: '◎',
    logoColor: 'text-purple-400',
    logoBg: 'bg-purple-500/10 border-purple-500/20',
    glowColor: 'group-hover:shadow-purple-500/10',
    borderHover: 'group-hover:border-purple-500/30',
    name: 'ISO 27001',
    tagline: 'Seguridad de Datos',
    taglineColor: 'text-purple-400',
    desc: 'Cumplimiento del estándar internacional de gestión de seguridad de la información.',
    status: 'soon',
    link: null,
  },
];

const AwardCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-[#060A14] border border-white/[0.08] ${item.borderHover} rounded-2xl p-7 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 shadow-xl ${item.glowColor} hover:shadow-2xl cursor-pointer no-underline`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${item.name} — ${item.tagline}`}
    >
      {/* Glow blob on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ background: item.logoColor.includes('blue') ? '#3b82f6' : '#f59e0b' }} />
      </div>

      {/* Logo Icon */}
      <div className={`relative flex-shrink-0 w-14 h-14 rounded-2xl border ${item.logoBg} flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110 ${item.logoColor}`}>
        {item.logo}
      </div>

      <div className="relative flex-1 min-w-0">
        {/* Name + Badge */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-bold text-base">{item.name}</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-md font-mono ${item.id === 'designrush' ? item.badgeColor + ' rounded-md text-[11px] px-1.5' : item.badgeColor}`}>
            {item.badge}
          </span>
        </div>

        {/* Tagline */}
        <div className={`text-sm font-semibold mb-2 ${item.taglineColor}`}>
          {item.tagline}
        </div>

        {/* Desc */}
        <p className="text-xs text-slate-400 leading-relaxed">
          {item.desc}
        </p>

        {/* Link indicator */}
        <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
          <span>Verificar certificación</span>
          <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </a>
  );
};

const CertCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative bg-[#060A14] border border-white/[0.08] ${item.borderHover} rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg ${item.glowColor} hover:shadow-xl cursor-default`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Soon badge */}
      {item.status === 'soon' && (
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-purple-400 font-bold">Próximamente</span>
        </div>
      )}

      {/* Glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 rounded-full blur-xl opacity-20" style={{ background: item.logoColor.includes('amber') ? '#f59e0b' : item.logoColor.includes('emerald') ? '#10b981' : item.logoColor.includes('blue') ? '#3b82f6' : '#a855f7' }} />
      </div>

      {/* Icon */}
      <div className={`relative w-11 h-11 rounded-xl border ${item.logoBg} flex items-center justify-center text-xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110 ${item.logoColor}`}>
        {item.logo}
      </div>

      {/* Name */}
      <div className="text-white font-bold text-sm mb-0.5">{item.name}</div>

      {/* Tagline */}
      <div className={`text-xs font-semibold mb-2 ${item.taglineColor}`}>{item.tagline}</div>

      {/* Desc */}
      <p className="text-[11px] text-slate-500 leading-relaxed flex-1">{item.desc}</p>

      {/* Link or disabled */}
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-[10px] font-mono text-slate-600 hover:text-slate-300 transition-colors flex items-center gap-1"
          onClick={e => e.stopPropagation()}
        >
          <span>Ver certificado</span>
          <span>→</span>
        </a>
      ) : (
        <div className="mt-3 text-[10px] font-mono text-slate-700">En proceso de auditoría</div>
      )}
    </div>
  );
};

const TrustBadgesSection = () => {
  return (
    <section className="py-20 px-6 bg-[#02040A] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
            ✦ RECONOCIMIENTOS Y ESTÁNDARES
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Respaldados por estándares líderes de la industria<span className="text-blue-500">.</span>
          </h2>
        </div>

        {/* Awards Row (2 large cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {AWARDS.map(item => (
            <AwardCard key={item.id} item={item} />
          ))}
        </div>

        {/* Certifications Row (4 smaller cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CERTS.map(item => (
            <CertCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom micro-callout */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-white/[0.03] border border-white/[0.06] px-4 py-2 rounded-full">
            <span className="text-emerald-400 font-bold">✔</span>
            <span>Auditorías disponibles bajo NDA para comités de compras y cumplimiento corporativo</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
