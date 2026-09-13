const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Increase logo height in CSS from 56px to 72px
txt = txt.replace(/height: 56px;/g, 'height: 72px;');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Logo size increased again!");
