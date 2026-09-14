const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const danglingRegex = /<\/div>\n\n                       <div className="absolute inset-0 border-l border-white\/\[0\.05\] z-20 pointer-events-none"><\/div>\n                    <\/div>/g;

txt = txt.replace(danglingRegex, '</div>');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Dangling elements removed!");
