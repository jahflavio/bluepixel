const fs = require('fs');

let txt = fs.readFileSync('../index.html', 'utf8');

// The garbled symbols are double-encoded UTF-8 that Node reads as literal characters
// We can decode them by converting to Latin-1 bytes and back to UTF-8
const garbledMap = {
  "â€”": "—",
  "âš¡": "⚡",
  "â†’": "→",
  "âœ¦": "✦",
  "â†—": "↗",
  "â—ˆ": "◈",
  "â€\u00A0": "†", // Note: The space-like char in â€ is probably a non-breaking space or similar
  "â€™": "’",
  "â€œ": "“",
  "â€\u009D": "”", // closing quote just in case
  "â‰ˆ": "≈",
  "â„¢": "™",
  "âœ“": "✓",
  "âœ•": "✕",
  "âš\u00A0": "⚠" 
};

// Also handle the weird compound ones manually based on what they probably should be:
// â†’ is right arrow. The UI had an up-right arrow for CTA: ↗
txt = txt.replace(/â\u2020\u2019/g, "→");
txt = txt.replace(/â\u2020\u201C/g, "↓");
txt = txt.replace(/â\u2020\u2018/g, "↑");
txt = txt.replace(/â\u2020\u201D/g, "↔");

// Replace exactly using the known mappings
Object.entries(garbledMap).forEach(([garbled, correct]) => {
  txt = txt.split(garbled).join(correct);
});

// For any other stragglers that are of the form â...
// We can run a regex replace that attempts to fix them
txt = txt.replace(/â[\x80-\xBF\u2000-\u206F]{1,3}/g, (match) => {
  try {
    return Buffer.from(match, 'latin1').toString('utf8');
  } catch (e) {
    return match;
  }
});

// Since the user pointed out specifically the buttons in the prompt area:
txt = txt.replace(/Conoce las 3 Formas de Trabajar â\u2020\u201c/g, 'Conoce las 3 Formas de Trabajar ↓');
txt = txt.replace(/Conoce las 3 Formas de Trabajar â.{1,3}/g, 'Conoce las 3 Formas de Trabajar ↓');

txt = txt.replace(/Solicitar Diagnóstico Operativo \(Sin Costo\) â\u2020\u2019/g, 'Solicitar Diagnóstico Operativo (Sin Costo) →');
txt = txt.replace(/Solicitar Diagnóstico Operativo \(Sin Costo\) â.{1,3}/g, 'Solicitar Diagnóstico Operativo (Sin Costo) →');

txt = txt.replace(/Ver Solución Técnica â.{1,3}/g, 'Ver Solución Técnica ↗');
txt = txt.replace(/Ver Solución Técnica ↗/g, 'Ver Solución Técnica ↗'); // Just in case it was already fixed

fs.writeFileSync('../index.html', txt, 'utf8');

console.log('Fixed garbled symbols');
