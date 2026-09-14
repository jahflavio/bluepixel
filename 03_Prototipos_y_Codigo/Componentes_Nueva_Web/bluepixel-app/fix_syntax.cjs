const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Unescape backticks and dollar signs that were accidentally escaped
txt = txt.replace(/\\`/g, '`');
txt = txt.replace(/\\\$/g, '$');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Unescaped backticks and dollar signs!");
