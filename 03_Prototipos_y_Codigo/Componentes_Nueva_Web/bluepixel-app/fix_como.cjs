const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the corrupted CÓMO that became Cí[box]MO 
// due to the aggressive Ã -> í replacement earlier
txt = txt.replace(/Cí\x93MO/g, 'CÓMO');

// Let's also use a more permissive regex just in case it's a slightly different byte
txt = txt.replace(/Cí.?MO/g, 'CÓMO');
txt = txt.replace(/Cí[\s\S]MO/g, 'CÓMO');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed broken CÓMO');
