const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the corrupted ÉXITO that became í[box]XITO
// The previous fix only caught lowercase x: "Éxito"
txt = txt.replace(/í.?XITO/g, 'ÉXITO');
txt = txt.replace(/í[\s\S]XITO/g, 'ÉXITO');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed broken ÉXITO (uppercase)');
