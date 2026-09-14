const fs = require('fs');
let t = fs.readFileSync('src/App.jsx', 'utf8');
t = t.replace('href="landings/index.html"', 'href="/landings/index.html"');
t = t.replace('href="#case-studies"', 'href="#casos"');
fs.writeFileSync('src/App.jsx', t, 'utf8');
