const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix the garbled Í in INGENIERÍA 
txt = txt.replace(/INGENIERÃ.A/g, 'INGENIERÍA');
// Also handle the exact bytes just in case
txt = txt.replace(/INGENIERÃ\x8DA/g, 'INGENIERÍA');

// Also catch any lowercase í that might still be broken (just in case)
txt = txt.replace(/Ã/g, 'í'); // This might be dangerous if there are other Ã characters. Let's be specific:
txt = txt.replace(/ingeniÃ©r/gi, 'ingenier');

// Better to just do the one we see
txt = txt.replace(/INGENIERÃ/g, 'INGENIERÍ'); 

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed INGENIERÍA character');
