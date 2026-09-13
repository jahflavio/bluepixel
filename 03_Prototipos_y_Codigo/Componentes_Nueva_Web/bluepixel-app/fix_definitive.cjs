const fs = require('fs');

let txt = fs.readFileSync('../index.html', 'utf8');

// Remove BOM if present
if (txt.charCodeAt(0) === 0xFEFF) {
  txt = txt.slice(1);
}

// Fix all remaining double-encoded UTF-8 patterns
// These are cases where ó was stored as Ã³, é as Ã©, etc.
txt = txt.replace(/Ã³/g, 'ó');
txt = txt.replace(/Ã©/g, 'é');
txt = txt.replace(/Ã­/g, 'í');
txt = txt.replace(/Ã¡/g, 'á');
txt = txt.replace(/Ã±/g, 'ñ');
txt = txt.replace(/Ãº/g, 'ú');
txt = txt.replace(/Ã\u0093/g, 'Ó');  // Ó
txt = txt.replace(/Ã\u0089/g, 'É');  // É
txt = txt.replace(/Ã\u008D/g, 'Í');  // Í
txt = txt.replace(/Ã\u0081/g, 'Á');  // Á
txt = txt.replace(/Ã\u0091/g, 'Ñ');  // Ñ
txt = txt.replace(/Ã\u009A/g, 'Ú');  // Ú
txt = txt.replace(/INGENIERÃ\u008DA/g, 'INGENIERÍA');

// Also fix the substring crash
txt = txt.replace(/line\.text\.substring/g, 'line.text?.substring');
txt = txt.replace(/line\.text\.includes/g, 'line.text?.includes');

// Write without BOM
fs.writeFileSync('../index.html', txt, 'utf8');

// Verify
const result = fs.readFileSync('../index.html', 'utf8');
const remaining_A3 = (result.match(/Ã³/g) || []).length;
const remaining_A9 = (result.match(/Ã©/g) || []).length;
const remaining_AD = (result.match(/Ã­/g) || []).length;
const remaining_B1 = (result.match(/Ã±/g) || []).length;
const remaining_FFFD = (result.match(/\uFFFD/g) || []).length;

console.log('Remaining Ã³:', remaining_A3);
console.log('Remaining Ã©:', remaining_A9);
console.log('Remaining Ã­:', remaining_AD);
console.log('Remaining Ã±:', remaining_B1);
console.log('Remaining U+FFFD:', remaining_FFFD);
console.log('producción check:', result.includes('producción'));
console.log('ingeniería check:', result.includes('ingeniería'));
console.log('México check:', result.includes('México'));
console.log('diseño check:', result.includes('diseño'));
console.log('adopción check:', result.includes('adopción'));
console.log('Done!');
