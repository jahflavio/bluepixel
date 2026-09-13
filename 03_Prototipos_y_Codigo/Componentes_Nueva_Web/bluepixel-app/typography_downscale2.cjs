const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Downscale H1 again
const h1Regex = /<h1([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h1Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-3xl md:text-4xl lg:text-5xl';
    return `<h1${p1}className="${newClasses.trim()}"${p3}>`;
});

// 2. Downscale H2 again
const h2Regex = /<h2([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h2Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-2xl md:text-3xl lg:text-4xl';
    return `<h2${p1}className="${newClasses.trim()}"${p3}>`;
});

// 3. Downscale the specific Hero paragraph
// Current: <p className="text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
const heroPRegex = /<p className="text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">/g;
txt = txt.replace(heroPRegex, '<p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-10">');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Typography downscaled again!");
