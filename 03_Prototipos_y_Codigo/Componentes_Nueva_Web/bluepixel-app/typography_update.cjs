const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Add Instrument Sans to Google Fonts
if (!txt.includes('Instrument+Sans')) {
    txt = txt.replace('family=Inter:wght@400;500;600;700', 'family=Inter:wght@400;500;600;700&family=Instrument+Sans:wght@500;600;700;800');
}

// 2. Update Tailwind Config to include font-display
if (!txt.includes("display: ['Instrument Sans'")) {
    txt = txt.replace(/sans:\s*\['Inter',\s*'sans-serif'\]/, "sans: ['Inter', 'sans-serif'],\n        display: ['Instrument Sans', 'sans-serif']");
}

// 3. Make all H1, H2, H3 use font-display and scale them up
// We'll replace className="..." for h2 and h3
// h2: text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.1]
// h3: text-2xl font-bold font-display tracking-tight

const h2Regex = /<h2([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h2Regex, (match, p1, classes, p3) => {
    // Remove old sizing and font properties
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/font-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    // Add Vstorm h2 styles
    newClasses += ' text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tighter leading-[1.05]';
    return `<h2${p1}className="${newClasses.trim()}"${p3}>`;
});

const h3Regex = /<h3([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h3Regex, (match, p1, classes, p3) => {
    // Remove old sizing and font properties
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/font-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    // Add Vstorm h3 styles (except if it's the specific small H3s in the teardown)
    // Actually, Vstorm H3s inside cards are around text-2xl.
    newClasses += ' text-2xl font-bold font-display tracking-tight leading-[1.2]';
    return `<h3${p1}className="${newClasses.trim()}"${p3}>`;
});

// Update the main Hero H1 as well
const h1Regex = /<h1([^>]*)className="([^"]*)"([^>]*)>/g;
txt = txt.replace(h1Regex, (match, p1, classes, p3) => {
    let newClasses = classes
        .replace(/text-\S+/g, '')
        .replace(/md:text-\S+/g, '')
        .replace(/lg:text-\S+/g, '')
        .replace(/font-\S+/g, '')
        .replace(/tracking-\S+/g, '')
        .replace(/leading-\S+/g, '')
        .replace(/\s+/g, ' ').trim();
    
    newClasses += ' text-5xl md:text-7xl lg:text-[5.5rem] font-black font-display tracking-tighter leading-[1.05]';
    return `<h1${p1}className="${newClasses.trim()}"${p3}>`;
});

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Global typography updated to Vstorm scale!");
