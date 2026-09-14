const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const oldLogoContainerRegex = /<img src="bluepixel_logo\.png" alt="BluePixel" className="h-8 w-auto object-contain" \/>\s*<div className="flex flex-col">\s*<span className="text-white font-black tracking-tight text-lg leading-none">BluePixel<\/span>\s*<span className="text-\[10px\] text-slate-400 font-mono tracking-wider">ENGINEERING & AI<\/span>\s*<\/div>/m;

const newLogoContainer = `<img src="bluepixel_logo.png" alt="BluePixel" className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />`;

txt = txt.replace(oldLogoContainerRegex, newLogoContainer);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Navbar text redundancy removed.");
