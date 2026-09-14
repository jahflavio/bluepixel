const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The FAQ code was ALREADY injected by the first script, because only the App replacement failed!
// Let's check if FAQSection exists.
if (!txt.includes('const FAQSection = () => {')) {
    console.log("FAQSection missing, you need to inject it.");
} else {
    console.log("FAQSection already present.");
}

// Replace ROICalculator in App
txt = txt.replace(/<ROICalculator[^>]*\/>/g, '<FAQSection />');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Replaced ROICalculator with FAQSection in App!");
