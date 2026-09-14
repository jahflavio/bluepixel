const fs = require('fs');

const txt1 = fs.readFileSync('refactor_demos_vstorm.cjs', 'utf8');
const casesMatch = txt1.match(/const newCaseStudiesSection = `([\s\S]*?)`;/);

const txt2 = fs.readFileSync('inject_global_nodes.cjs', 'utf8');
const rightColMatch = txt2.match(/const newRightColumn = `([\s\S]*?)`;/);

const txt3 = fs.readFileSync('inject_faq_3.cjs', 'utf8');
const faqMatch = txt3.match(/const FAQSection = \(\) => \{[\s\S]*?\};\n/);

fs.writeFileSync('restored_sections.json', JSON.stringify({
  cases: casesMatch ? casesMatch[1] : null,
  right: rightColMatch ? rightColMatch[1] : null,
  faq: faqMatch ? faqMatch[0] : null
}, null, 2));
console.log('Extracted successfully');
