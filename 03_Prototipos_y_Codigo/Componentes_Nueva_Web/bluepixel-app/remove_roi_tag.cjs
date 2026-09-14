const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = '<ROICalculator onOpenContact={(data) => scrollToForm(data)} />';
const newStr = '<FAQSection />';

if (txt.includes(targetStr)) {
    txt = txt.replace(targetStr, newStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("ROICalculator tag replaced with FAQSection successfully!");
} else {
    console.log("Could not find the target string.");
}
