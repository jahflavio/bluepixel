import React from 'react';

// Los 5 principios vivian comprimidos dentro de FutureproofCTABanner, que se
// repite al pie de las 6 paginas de capacidad. Ahi competian con el CTA y
// nadie los leia. Su lugar es esta pagina, que es donde se explica la
// filosofia. El texto sigue el orden canonico de AGENTS.md.
const PRINCIPLES = [
  {
    num: '01',
    title: 'Anti-Maquila',
    desc: 'No facturamos horas-hombre a ciegas ni entregamos pantallas decorativas que no escalan. Trabajamos como socios que asumen la responsabilidad técnica y comercial del producto.'
  },
  {
    num: '02',
    title: 'Certeza Previa',
    desc: 'Ningún proyecto arranca a ciegas. Cuantificamos el costo de inacción y proyectamos los costos de inferencia y hosting antes de comprometer capital en infraestructura.'
  },
  {
    num: '03',
    title: 'UX como Armadura',
    desc: 'El código más sofisticado fracasa si los usuarios no lo adoptan. El diseño conductual y la estrategia de producto son el multiplicador que asegura adopción y conversión.'
  },
  {
    num: '04',
    title: 'Cero Lock-in',
    desc: 'Arquitectura desacoplada sobre protocolos abiertos como MCP. Si cambia el modelo o el proveedor cloud, el sistema conmuta por configuración. Tu código y tus datos viven en tu nube privada.'
  },
  {
    num: '05',
    title: 'Blindaje Seguro',
    desc: 'Prácticas de seguridad verificadas por CyberVadis y hardening OWASP Top 10, con cifrado en reposo y en tránsito, trazabilidad de accesos y objetivo de disponibilidad de 99.9%.'
  }
];

const FutureproofPrinciples = () => {
  return (
    <section className="py-20 md:py-24 px-6 bg-[#030713] border-t border-b border-white/[0.08] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/[0.07] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-3">
            ✦ La Garantía FutureProof™
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Los 5 principios innegociables<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Son los compromisos de ingeniería que sostienen cada propuesta que firmamos. Si un proyecto no puede cumplirlos, no lo tomamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PRINCIPLES.map((p) => (
            <div
              key={p.num}
              className="bg-[#060B18] border border-white/[0.08] hover:border-emerald-500/30 rounded-2xl p-6 flex flex-col transition-colors"
            >
              <span className="font-mono text-xs font-bold text-emerald-400 mb-3">{p.num}</span>
              <h3 className="text-base font-bold text-white mb-2.5 leading-snug">{p.title}</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureproofPrinciples;
