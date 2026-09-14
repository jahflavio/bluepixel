const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = 'className="w-full h-full object-cover object-center opacity-60 mix-blend-lighten"';
const newStr = 'className="w-full h-full object-cover object-left-top opacity-60 mix-blend-lighten"';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Image crop adjusted to left-top!");
} else {
    console.log("Could not find the target string.");
}
