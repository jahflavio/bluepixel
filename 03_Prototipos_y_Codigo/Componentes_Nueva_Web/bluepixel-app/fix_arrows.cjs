const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the corrupted arrows in the buttons that became í¢+' and í¢+"
// because of the aggressive Ã -> í replacement
txt = txt.replace(/Solicitar Diagnóstico Operativo \(Sin Costo\).{1,5}/g, 'Solicitar Diagnóstico Operativo (Sin Costo) →');
txt = txt.replace(/Conoce las 3 Formas de Trabajar.{1,5}/g, 'Conoce las 3 Formas de Trabajar ↓');

// Since the regex might match the closing tags if we are not careful,
// let's do a more precise replacement:
txt = txt.replace(
  'Solicitar Diagnóstico Operativo (Sin Costo) →</s',
  'Solicitar Diagnóstico Operativo (Sin Costo) →</s' 
); // No-op, just a thought.

// Let's use string split/join to be safer with exact button text
const btn1Start = 'Solicitar Diagnóstico Operativo (Sin Costo)';
const btn2Start = 'Conoce las 3 Formas de Trabajar';

// Actually, let's just find the exact corrupted strings using regex that targets the weird chars
txt = txt.replace(new RegExp(btn1Start + ' [^<]+'), btn1Start + ' →');
txt = txt.replace(new RegExp(btn2Start + ' [^<]+'), btn2Start + ' ↓');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed broken button arrows');
