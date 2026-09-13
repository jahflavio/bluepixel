const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the corrupted Éxito that got turned into í\x89xito 
// by the previous global replacement of Ã -> í
txt = txt.replace(/í\x89xito/g, 'Éxito');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed broken Éxito');
