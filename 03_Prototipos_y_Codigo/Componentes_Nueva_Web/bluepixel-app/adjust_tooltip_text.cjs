const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

txt = txt.replace(
  '<span>Haz clic para probarlo</span>',
  '<span>Escribe tu problema y halla una solución</span>'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Tooltip text updated!");
