const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Increase logo height in CSS
txt = txt.replace(/height: 38px;/g, 'height: 56px;');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Logo size increased!");
