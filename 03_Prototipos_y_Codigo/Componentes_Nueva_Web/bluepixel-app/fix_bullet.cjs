const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The absolute last broken character: the bullet point Â· -> ·
txt = txt.replace(/Â·/g, '·');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed final broken bullet points');
