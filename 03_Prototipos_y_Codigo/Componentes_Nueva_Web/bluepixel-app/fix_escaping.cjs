const fs = require('fs');
const filePath = '../index.html';
let txt = fs.readFileSync(filePath, 'utf8');

// Fix escaped template literals that break babel
txt = txt.replace(/\\\`/g, '`');
txt = txt.replace(/\\\$/g, '$');

fs.writeFileSync(filePath, txt, 'utf8');
console.log('Fixed escaped backticks and dollar signs.');
