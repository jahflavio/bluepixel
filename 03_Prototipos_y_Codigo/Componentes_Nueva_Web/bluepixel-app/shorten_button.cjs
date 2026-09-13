const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

txt = txt.replace('<span>Ver Solución Técnica</span>', '<span>Solucionar</span>');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Button text shortened to Solucionar');
