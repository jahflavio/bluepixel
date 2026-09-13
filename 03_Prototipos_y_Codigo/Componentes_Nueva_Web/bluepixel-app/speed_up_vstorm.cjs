const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const oldCode = 'return prev + 0.3; // Approx 15 seconds per tab';
const newCode = 'return prev + 0.85; // Approx 6 seconds per tab';

if (txt.includes(oldCode)) {
    txt = txt.replace(oldCode, newCode);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Timeline sped up to ~6 seconds!");
} else {
    console.error("Could not find the target code to replace.");
}
