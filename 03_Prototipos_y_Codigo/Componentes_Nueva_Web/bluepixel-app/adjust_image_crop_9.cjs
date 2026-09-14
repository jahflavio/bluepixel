const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = 'className="w-full h-full object-cover object-[75%_center] opacity-60 mix-blend-lighten"';
const newStr = 'className="w-full h-full object-cover object-left-bottom opacity-60 mix-blend-lighten"';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Image crop adjusted to left-bottom!");
} else {
    console.log("Could not find the target string.");
}
