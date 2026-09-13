const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

txt = txt.replace(/image: '\/assets\/bimbo.png'/g, "image: 'assets/bimbo.png'");
txt = txt.replace(/image: '\/assets\/radioshack.png'/g, "image: 'assets/radioshack.png'");
txt = txt.replace(/image: '\/assets\/lifemiles.png'/g, "image: 'assets/lifemiles.png'");
txt = txt.replace(/image: '\/assets\/iqos.png'/g, "image: 'assets/iqos.png'");

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Image paths fixed!");
