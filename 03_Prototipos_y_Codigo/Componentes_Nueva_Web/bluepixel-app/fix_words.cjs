const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix all remaining broken strings caused by the aggressive regex
txt = txt.replace(/AUTOMATIZACIí\x93N/g, 'AUTOMATIZACIÓN');
txt = txt.replace(/CONVERSIí\x93N/g, 'CONVERSIÓN');
txt = txt.replace(/RESOLUCIí\x93N/g, 'RESOLUCIÓN');
txt = txt.replace(/DIAGNí\x93STICO/g, 'DIAGNÓSTICO');
txt = txt.replace(/Tí\x89CNICO/g, 'TÉCNICO');
txt = txt.replace(/TELí\x89FONO/g, 'TELÉFONO');
txt = txt.replace(/¿QUí\x89/g, '¿QUÉ');
txt = txt.replace(/CONVERSACIí\x93N/g, 'CONVERSACIÓN');

// Fix any remaining arrows that got broken
txt = txt.replace(/í¢†’/g, '→');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed all remaining broken words in the document');
