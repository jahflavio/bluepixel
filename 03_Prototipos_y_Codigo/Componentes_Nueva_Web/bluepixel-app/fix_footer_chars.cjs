const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The specific stragglers shown in the screenshot:
txt = txt.replace(/CONVERSACIÃ“N/g, 'CONVERSACIÓN');
txt = txt.replace(/TÃ‰CNICA/g, 'TÉCNICA');
txt = txt.replace(/Â¿/g, '¿');
txt = txt.replace(/Ã‰xito/g, 'Éxito');

// Just to be safe, catch the lowercase versions if they exist
txt = txt.replace(/Ã“/g, 'Ó');
txt = txt.replace(/Ã‰/g, 'É');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed remaining garbled characters in footer');
