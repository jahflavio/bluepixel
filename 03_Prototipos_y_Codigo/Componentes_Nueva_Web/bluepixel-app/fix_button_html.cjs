const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the mangled closing span tags that happened in the previous replace
txt = txt.replace('Solicitar Diagnóstico Operativo (Sin Costo) →n>', 'Solicitar Diagnóstico Operativo (Sin Costo)</span>\n                <span>→</span>');
txt = txt.replace('Conoce las 3 Formas de Trabajar ↓', 'Conoce las 3 Formas de Trabajar ↓'); // This one was an <a> tag without a span, let's verify it.

// Let's restore the original HTML structure for the buttons just to be completely safe
// Button 1:
// <span>Solicitar Diagnóstico Operativo (Sin Costo)</span>
// <span>→</span>
txt = txt.replace(/<span>Solicitar Diagnóstico[^<]*<\/span>[\s\S]*?<span>[^<]*<\/span>/, '<span>Solicitar Diagnóstico Operativo (Sin Costo)</span>\n                <span>→</span>');

// Button 2 (a tag):
// Conoce las 3 Formas de Trabajar ↓
txt = txt.replace(/Conoce las 3 Formas de Trabajar[^<]*/, 'Conoce las 3 Formas de Trabajar ↓');

// The footer CTA button also has an arrow:
// <span>Ver Casos de Éxito</span><span>↗</span>
txt = txt.replace(/<span>Ver Casos de Éxito<\/span>[\s\S]*?<span>[^<]*<\/span>/, '<span>Ver Casos de Éxito</span>\n              <span>↗</span>');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed button HTML structure');
