const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Change PNG to JPG
txt = txt.replace(/image: 'assets\/bimbo\.png'/g, "image: 'assets/bimbo.jpg'");
txt = txt.replace(/image: 'assets\/radioshack\.png'/g, "image: 'assets/radioshack.jpg'");
txt = txt.replace(/image: 'assets\/lifemiles\.png'/g, "image: 'assets/lifemiles.jpg'");
txt = txt.replace(/image: 'assets\/iqos\.png'/g, "image: 'assets/iqos.jpg'");

// Reset CSS to default elegant center crop
const targetStr = 'className="w-full h-full object-cover object-[center_top] scale-[1.7] translate-x-16 translate-y-8 opacity-50 mix-blend-lighten"';
const newStr = 'className="w-full h-full object-cover object-center opacity-60 mix-blend-lighten"';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    console.log("CSS reset!");
} else {
    console.log("Could not find the target CSS string.");
}

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("JPGs injected!");
