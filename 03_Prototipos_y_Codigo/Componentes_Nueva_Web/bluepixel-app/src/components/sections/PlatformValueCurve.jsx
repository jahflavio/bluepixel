import React, { useState } from 'react';

// Curva de valor de la plataforma en el tiempo. El argumento no esta en la
// linea que sube, sino en la bifurcacion: al lanzar, el futuro se parte en dos
// y la distancia entre ambas lineas es exactamente lo que compra el Pilar 04.
//
// Color: una sola serie con color (#6366f1, validado contra la superficie
// oscura) y una referencia neutra en gris. El gris no es una segunda serie, es
// la ausencia de evolucion, por eso es recesivo y punteado.
// La identidad nunca depende del color: ambas lineas van rotuladas en su sitio.

const MILESTONES = [
  {
    id: 'diagnostico',
    x: 150,
    y: 300,
    label: 'Diagnóstico',
    pillar: 'Pilar 01 · Consultoría Digital',
    detail: 'Se cuantifica el costo de inacción y se prioriza el backlog por impacto financiero, antes de comprometer capital.',
  },
  {
    id: 'lanzamiento',
    x: 300,
    y: 230,
    label: 'Lanzamiento',
    pillar: 'Pilar 03 · Plataformas Digitales',
    detail: 'La plataforma sale a producción en 2 a 4 meses con UX validado. Aquí el camino se bifurca.',
  },
  {
    id: 'm6',
    x: 450,
    y: 180,
    label: '6 meses',
    pillar: 'Pilar 04 · Evolución Digital',
    detail: 'Primer ciclo de evolución: la fricción se mide con IMPATH™ y el roadmap se reordena con datos de uso real.',
  },
  {
    id: 'm12',
    x: 600,
    y: 125,
    label: '12 meses',
    pillar: 'Pilar 04 · Evolución Digital',
    detail: 'La deuda técnica baja de forma sistemática y la conversión se optimiza con CRO continuo.',
  },
  {
    id: 'm24',
    x: 740,
    y: 75,
    label: '24 meses',
    pillar: 'Pilar 04 · Evolución Digital',
    detail: 'La plataforma acumula ventaja competitiva trimestre a trimestre, en vez de envejecer.',
  },
];

const FORK = MILESTONES[1];
const LAST = MILESTONES[MILESTONES.length - 1];

const SERIES = '#6366f1';
const REFERENCE = '#64748b';
const SURFACE = '#050A19';

const linePath = MILESTONES.map((m, i) => `${i === 0 ? 'M' : 'L'} ${m.x} ${m.y}`).join(' ');

const PlatformValueCurve = ({ onOpenContact }) => {
  const [activeId, setActiveId] = useState('lanzamiento');
  const active = MILESTONES.find((m) => m.id === activeId) || FORK;

  return (
    <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="block text-xs font-mono uppercase tracking-widest font-bold mb-4 text-indigo-400">
          ✦ El costo de no evolucionar
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl text-white">
          El día que lanzas, tu plataforma toma uno de dos caminos<span className="text-blue-500">.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-12">
          Una plataforma sin evolución continua no se mantiene: se queda quieta mientras el mercado avanza. La distancia entre las dos líneas es lo que se gana o se pierde.
        </p>

        <div className="bg-[#050A19] border border-white/[0.08] rounded-3xl p-5 md:p-8 shadow-2xl">
          <svg
            viewBox="0 0 800 360"
            className="w-full h-auto"
            role="img"
            aria-label="Curva del valor de una plataforma digital en el tiempo. Con evolución continua el valor sigue subiendo del lanzamiento a los 24 meses; sin evolución se mantiene plano desde el lanzamiento."
          >
            {/* Ejes recesivos: solo las dos lineas base, sin retícula que compita */}
            <line x1="70" y1="330" x2="775" y2="330" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
            <line x1="70" y1="40" x2="70" y2="330" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />

            <text x="64" y="44" textAnchor="end" className="fill-slate-500" style={{ fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              VALOR
            </text>
            <text x="775" y="350" textAnchor="end" className="fill-slate-500" style={{ fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              TIEMPO →
            </text>

            {/* Tramo previo: la plataforma antes de existir */}
            <path d="M 70 335 L 150 300" stroke={SERIES} strokeOpacity="0.45" strokeWidth="2" strokeDasharray="5 5" fill="none" strokeLinecap="round" />

            {/* Contrafactual: sin evolucion, plano desde el lanzamiento */}
            <path
              d={`M ${FORK.x} ${FORK.y} L ${LAST.x} ${FORK.y}`}
              stroke={REFERENCE}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              strokeLinecap="round"
            />
            <text x={LAST.x} y={FORK.y - 14} textAnchor="end" className="fill-slate-400" style={{ fontSize: 13, fontWeight: 600 }}>
              Sin evolución continua
            </text>
            <text x={LAST.x} y={FORK.y + 20} textAnchor="end" className="fill-slate-500" style={{ fontSize: 11 }}>
              La plataforma se estanca
            </text>

            {/* Trayectoria con evolucion continua */}
            <path d={linePath} stroke={SERIES} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Hitos. El aro del color de la superficie evita que el marcador se
                funda con la linea al superponerse. */}
            {MILESTONES.map((m) => {
              const isActive = m.id === activeId;
              return (
                <g
                  key={m.id}
                  onMouseEnter={() => setActiveId(m.id)}
                  onFocus={() => setActiveId(m.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${m.label}: ${m.detail}`}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  {/* Area de contacto mas grande que el marcador */}
                  <circle cx={m.x} cy={m.y} r="22" fill="transparent" />
                  {isActive && <circle cx={m.x} cy={m.y} r="14" fill={SERIES} fillOpacity="0.18" />}
                  <circle cx={m.x} cy={m.y} r="6" fill={SERIES} stroke={SURFACE} strokeWidth="2" />
                  <text
                    x={m.x}
                    y={m.y - 20}
                    textAnchor="middle"
                    className={isActive ? 'fill-white' : 'fill-slate-300'}
                    style={{ fontSize: 13, fontWeight: isActive ? 700 : 600 }}
                  >
                    {m.label}
                  </text>
                </g>
              );
            })}

            {/* Marca de la bifurcacion */}
            <line x1={FORK.x} y1={FORK.y} x2={FORK.x} y2="330" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          {/* Detalle del hito activo. Ademas de la interaccion, es la
              alternativa en texto de lo que la grafica comunica. */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 md:gap-6 items-start">
            <div className="text-xs font-mono uppercase tracking-widest font-bold text-indigo-400 whitespace-nowrap">
              {active.label}
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                {active.pillar}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{active.detail}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
          <button
            onClick={onOpenContact}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
          >
            <span>Evalúa el costo de la fricción</span>
            <span>→</span>
          </button>
          {/* La curva es un modelo, no una medicion: decirlo la hace mas
              creible, no menos. */}
          <p className="text-xs text-slate-500 leading-relaxed">
            Curva ilustrativa del modelo de trabajo. Los hitos corresponden a los plazos comprometidos en cada pilar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformValueCurve;
