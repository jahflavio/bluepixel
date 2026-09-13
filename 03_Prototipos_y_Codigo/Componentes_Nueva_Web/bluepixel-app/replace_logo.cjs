const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const oldLogoBlock = `<div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              BP
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tight text-lg leading-none">BluePixel</span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">ENGINEERING & AI</span>
            </div>
          </div>`;

const newLogoBlock = `<a href="#" className="flex items-center">
            <img src="/bluepixel_logo.png" alt="BluePixel Logo" className="h-10 object-contain" />
          </a>`;

txt = txt.replace(oldLogoBlock, newLogoBlock);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Logo replaced successfully!');
