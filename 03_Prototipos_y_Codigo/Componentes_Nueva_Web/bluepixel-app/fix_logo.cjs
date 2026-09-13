const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Replace the old logo block with new pixel-square logo
txt = txt.replace(
  /(<div className="flex items-center gap-3">)\s*<div className="w-8 h-8[^>]*>[\s\S]*?BP\s*<\/div>\s*<div className="flex flex-col">\s*<span[^>]*>BluePixel<\/span>\s*<span[^>]*>ENGINEERING[\s\S]*?<\/span>\s*<\/div>/,
  `$1
            <div className="w-7 h-7 bg-sky-500 rounded-sm shadow-lg shadow-sky-500/30"></div>
            <span className="text-white font-black tracking-tight text-lg leading-none">BluePixel</span>`
);

fs.writeFileSync('../index.html', txt, 'utf8');
const result = fs.readFileSync('../index.html', 'utf8');
console.log('Has pixel logo:', result.includes('w-7 h-7 bg-sky-500 rounded-sm'));
console.log('Has old BP:', result.includes('>BP<'));
console.log('Done!');
