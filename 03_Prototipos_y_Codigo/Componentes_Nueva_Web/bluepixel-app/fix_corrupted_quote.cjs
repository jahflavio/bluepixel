const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const regex = /<div className="absolute -top-4 -left-4 text-4xl">.*?<\/div>/;
const fixedQuote = '<div className="absolute -top-6 -left-4 text-6xl text-blue-500/20 font-serif leading-none">"</div>';

if (regex.test(txt)) {
    txt = txt.replace(regex, fixedQuote);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Fixed corrupted quote icon using regex!");
} else {
    console.error("Could not find the target div in index.html");
}
