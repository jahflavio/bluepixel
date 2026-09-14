const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = 'className="w-full h-full object-cover object-center scale-[1.4] translate-x-12 translate-y-4 opacity-50 mix-blend-lighten"';
const newStr = 'className="w-full h-full object-cover object-left scale-125 -translate-x-8 opacity-60 mix-blend-lighten"';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Image crop adjusted again!");
} else {
    console.log("Could not find the target string.");
}
