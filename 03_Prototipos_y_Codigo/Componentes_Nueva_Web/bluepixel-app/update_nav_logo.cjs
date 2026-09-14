const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const navLogoRegex = /<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500\/30">\s*BP\s*<\/div>/;

const newNavLogo = `<img src="bluepixel_logo.png" alt="BluePixel" className="h-8 w-auto object-contain" />`;

txt = txt.replace(navLogoRegex, newNavLogo);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Navbar logo replaced with bluepixel_logo.png");
