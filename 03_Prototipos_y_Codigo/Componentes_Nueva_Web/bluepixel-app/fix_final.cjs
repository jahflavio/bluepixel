const fs = require('fs');

let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the 5 remaining U+FFFD replacement characters
txt = txt.replace('CASOS DE \uFFFD\uFFFDXITO AUDITADOS', 'CASOS DE ÉXITO AUDITADOS');
txt = txt.replace(/¿\uFFFDQu\uFFFD/g, '¿Qué');
txt = txt.replace("desc: 'T\uFFFD entregamos", "desc: 'Te entregamos");
txt = txt.replace("te entregar\uFFFD un", "te entregará un");

// Also fix the substring crash (the black screen bug)
txt = txt.replace(/line\.text\.substring/g, 'line.text?.substring');
txt = txt.replace(/line\.text\.includes/g, 'line.text?.includes');

fs.writeFileSync('../index.html', txt, 'utf8');

// Verify
const result = fs.readFileSync('../index.html', 'utf8');
const remaining = (result.match(/\uFFFD/g) || []).length;
console.log('Remaining U+FFFD characters:', remaining);
console.log('Contains "CASOS DE ÉXITO":', result.includes('CASOS DE ÉXITO'));
console.log('Contains "¿Qué":', result.includes('¿Qué'));
console.log('Contains "Te entregamos":', result.includes('Te entregamos'));
console.log('Contains "entregará":', result.includes('entregará'));
console.log('substring crash fixed:', !result.includes('line.text.substring'));
console.log('Done!');
