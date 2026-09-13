const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The original block to replace is the wrapper around the header and the form inside MultiStepContact.
// Let's use a regex to capture it.
// The structure is:
// <section id="contact-form" className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.08]">
//   <div className="max-w-4xl mx-auto">
//     <div className="text-center max-w-2xl mx-auto mb-16">
//       ... header content ...
//     </div>
//     {/* The Multi-Step Card */}
//     <div className="bg-navy-900 border border-white/[0.08] ...">
//       ...

const oldSectionRegex = /<section id="contact-form" className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white\/\[0\.08\]">\s*<div className="max-w-4xl mx-auto">\s*\{\/\* Header \*\/\}\s*<div className="text-center max-w-2xl mx-auto mb-16">([\s\S]*?)<\/div>\s*\{\/\* The Multi-Step Card \*\/\}\s*<div className="bg-navy-900 border border-white\/\[0\.08\] rounded-\[2rem\] p-8 sm:p-12 shadow-\[0_0_80px_rgba\(0,0,0,0\.5\)\] relative overflow-hidden group">/m;

const match = txt.match(oldSectionRegex);

if (match) {
    const oldHeaderContent = match[1];

    // Wait, the header content inside txt looks like:
    // <span className="...">DIAGNÓSTICO TÉCNICO SIN COSTO</span>
    // <h2 className="...">Completa el formulario<span className="text-blue-500">.</span></h2>
    // <p className="...">¿Prefieres que revisemos tu operación? ...</p>
    
    // We will inject the new layout wrapper
    const newSectionStart = `<section id="contact-form" className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Fixed Title and Value Prop */}
            <div className="lg:w-5/12 lg:sticky lg:top-32">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 block">
                DIAGNÓSTICO TÉCNICO SIN COSTO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Completa el formulario<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                ¿Prefieres que revisemos tu operación? Llena los 3 pasos rápidos y un estratega técnico de BluePixel te entregará un diagnóstico de viabilidad y arquitectura en menos de 24 horas.
              </p>

              {/* Added trust signals (SLA) on the left side */}
              <div className="p-6 bg-navy-900/50 border border-white/[0.05] rounded-2xl space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Garantía de Confidencialidad</h4>
                    <p className="text-slate-500 text-xs mt-1">Tus datos y procesos internos están protegidos mediante NDA desde el primer minuto.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-blue-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Auditoría por Arquitectos</h4>
                    <p className="text-slate-500 text-xs mt-1">Tu caso es analizado por ingenieros y Tech Leads, no por equipos de ventas tradicionales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:w-7/12 w-full">
              {/* The Multi-Step Card */}
              <div className="bg-navy-900 border border-white/[0.08] rounded-[2rem] p-8 sm:p-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">`;

    txt = txt.replace(oldSectionRegex, newSectionStart);
    
    // Now we need to close the extra div we added for the 2-column layout.
    // The end of the section currently is:
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   );
    // };
    // Let's replace the end of the section.
    const oldSectionEndRegex = /<\/div>\s*<\/section>\s*\);\s*\};\s*const FinalCTA/;
    const newSectionEnd = `  </div>
            </div>
          </div>
        </section>
      );
    };
    const FinalCTA`;

    txt = txt.replace(oldSectionEndRegex, newSectionEnd);

    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Successfully updated MultiStepContact to a 2-column layout!");
} else {
    console.error("Could not find the target section to replace.");
}
