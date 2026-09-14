const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = 'producción<span className="text-red-500">?</span>';
const newStr = '<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">producción?</span>';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("CTA gradient applied!");
} else {
    console.log("Could not find the target string.");
}
