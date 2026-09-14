const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The injected tag: <img src="assets/logo.png" alt="BluePixel" className="h-8 w-auto object-contain" />
// We need to make it bigger. Let's try h-14 (56px) for better legibility of the subtitle.

const targetStr = '<img src="assets/logo.png" alt="BluePixel" className="h-8 w-auto object-contain" />';
const newStr = '<img src="assets/logo.png" alt="BluePixel" className="h-14 w-auto object-contain" />';

if (txt.includes(targetStr)) {
    // Replace all occurrences (Navbar and Footer)
    txt = txt.split(targetStr).join(newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Logo size increased to h-14!");
} else {
    console.log("Could not find the target string.");
}
