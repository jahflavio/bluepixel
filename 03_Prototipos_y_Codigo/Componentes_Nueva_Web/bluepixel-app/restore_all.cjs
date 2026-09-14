const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');
const r = require('./restored_sections.json');

// 1. Rebuild CaseStudiesSection with SVG injected
const oldRightColumnRegex = /<div className="md:w-\[55%\] lg:w-\[60%\] relative bg-black flex items-center justify-center overflow-hidden">[\s\S]*?<img src=\{c\.image\}[\s\S]*?<\/div>/;
let finalCases = r.cases.replace(oldRightColumnRegex, r.right);

// 2. Remove ROICalculator definition
const roiRegex = /\/\/ Calculadora Interactiva de ROI de Automatización[\s\S]*?const ROICalculator = \(\{ onOpenContact \}\) => \{[\s\S]*?<\/section>\s*\);\s*\};\s*/;
txt = txt.replace(roiRegex, '');

// 3. Just in case, remove <ROICalculator /> from App
txt = txt.replace(/<ROICalculator[^>]*\/>\s*/g, '');

// 4. Inject CaseStudiesSection and FAQSection before ThreeWaysToWork
const target = /\/\/ Our Services \(Vstorm Asymmetric Grid Style\)\s*const ThreeWaysToWork = \(\) => \{/;
if (!txt.includes('const CaseStudiesSection =')) {
    txt = txt.replace(target, finalCases + '\n\n' + r.faq + '\n\n' + '$&');
}

// 5. User asked to use the shared logo in Navbar and Footer:
// 'assets/logo.png' -> 'bluepixel_logo.png'
txt = txt.replace(/assets\/logo\.png/g, 'bluepixel_logo.png');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Restoration complete.");
