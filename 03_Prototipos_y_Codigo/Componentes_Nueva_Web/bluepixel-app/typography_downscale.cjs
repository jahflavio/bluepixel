const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Downscale H1
const h1Regex = /<h1([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h1Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]';
    return `<h1${p1}className="${newClasses.trim()}"${p3}>`;
});

// Downscale H2
const h2Regex = /<h2([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h2Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15]';
    return `<h2${p1}className="${newClasses.trim()}"${p3}>`;
});

// Downscale H3
const h3Regex = /<h3([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h3Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-xl md:text-2xl tracking-tight leading-[1.2]';
    return `<h3${p1}className="${newClasses.trim()}"${p3}>`;
});

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Global typography downscaled!");
