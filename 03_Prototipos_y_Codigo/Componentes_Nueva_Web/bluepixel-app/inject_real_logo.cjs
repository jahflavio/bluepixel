const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The fake logo block appears twice (Navbar and Footer).
// Navbar structure:
// <div className="flex-shrink-0 flex items-center gap-2">
//   {/* Fake Logo Icon */}
//   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//     BP
//   </div>
//   <span className="font-display font-black text-xl tracking-tight text-white">BluePixel<span className="text-blue-500">.</span></span>
// </div>

const regexFakeLogoNavbar = /<div className="flex-shrink-0 flex items-center gap-2">[\s\S]*?BP[\s\S]*?<\/div>[\s\S]*?<span className="font-display font-black text-xl tracking-tight text-white">BluePixel<span className="text-blue-500">\.<\/span><\/span>\s*<\/div>/g;

const newLogoTagNavbar = `<div className="flex-shrink-0 flex items-center">
              <img src="assets/logo.png" alt="BluePixel" className="h-8 w-auto object-contain" />
            </div>`;

txt = txt.replace(regexFakeLogoNavbar, newLogoTagNavbar);


// Footer structure:
// <div className="flex items-center gap-2 mb-6">
//   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//     BP
//   </div>
//   <span className="font-display font-black text-xl tracking-tight text-white">BluePixel<span className="text-blue-500">.</span></span>
// </div>

const regexFakeLogoFooter = /<div className="flex items-center gap-2 mb-6">[\s\S]*?BP[\s\S]*?<\/div>[\s\S]*?<span className="font-display font-black text-xl tracking-tight text-white">BluePixel<span className="text-blue-500">\.<\/span><\/span>\s*<\/div>/g;

const newLogoTagFooter = `<div className="flex items-center mb-6">
                <img src="assets/logo.png" alt="BluePixel" className="h-8 w-auto object-contain" />
              </div>`;

txt = txt.replace(regexFakeLogoFooter, newLogoTagFooter);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Real logos injected!");
