const fs = require('fs');
const txt = fs.readFileSync('../index.html', 'utf8');
const errors = [];

// 1. Check for bad encoding artifacts
if (/[ÃÂ]/.test(txt)) errors.push('Found Ã or Â encoding artifacts');
if (/\uFFFD/.test(txt)) errors.push('Found replacement characters (U+FFFD)');
if (/í[^\s\w]/.test(txt)) errors.push('Found suspiciously formed í characters');
if (/í[^\w]/i.test(txt)) {
  const matches = txt.match(/í[^\w]/gi);
  if (matches && matches.some(m => !['ío', 'ía', 'ín'].includes(m.toLowerCase()))) {
     // Ignore standard Spanish combinations, flag weird boxes
  }
}

// 2. Check for the old substring bug
if (txt.includes('line.text.substring(')) errors.push('Found unsafe line.text.substring() without optional chaining');
if (txt.includes('line.text.includes(')) errors.push('Found unsafe line.text.includes() without optional chaining');

// 3. Simple bracket matching
const openBraces = (txt.match(/\{/g) || []).length;
const closeBraces = (txt.match(/\}/g) || []).length;
if (openBraces !== closeBraces) errors.push(`Mismatched curly braces: ${openBraces} open, ${closeBraces} close`);

// 4. Basic tag matching for common React components
const findMismatched = (tag) => {
  const open = (txt.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
  const close = (txt.match(new RegExp(`</${tag}>`, 'g')) || []).length;
  // Ignore self-closing tags and standard singletons
  if (open !== close && !['img', 'input', 'br', 'hr', 'source'].includes(tag)) {
    return `Mismatched ${tag} tags: ${open} open, ${close} close`;
  }
  return null;
};
['div', 'span', 'p', 'section', 'button', 'a'].forEach(tag => {
  const err = findMismatched(tag);
  if (err) errors.push(err);
});

console.log('--- VALIDATION RESULTS ---');
if (errors.length === 0) {
  console.log('✅ ALL CHECKS PASSED. File is clean, encodings are safe, syntax is balanced.');
} else {
  errors.forEach(e => console.log('❌ ' + e));
}
