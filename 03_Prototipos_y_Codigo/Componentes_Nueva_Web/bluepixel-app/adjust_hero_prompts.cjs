const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Revert PRESETS to be more complete
txt = txt.replace(/'Cotizaciones complejas en Excel\.'/, "'Cotizaciones complejas en Excel que tardan horas y nos hacen perder ventas.'");
txt = txt.replace(/'Conciliación contable masiva\.'/, "'Conciliación manual de miles de facturas y pagos contra el ERP.'");
txt = txt.replace(/'Fuga de clientes en el checkout\.'/, "'Alta tasa de abandono en el flujo de pago de la plataforma digital.'");
txt = txt.replace(/'Atención al cliente sin alucinaciones\.'/, "'Automatizar atención en WhatsApp sin que la IA invente datos falsos.'");

// 2. Adjust timings
txt = txt.replace(/setTimeout\(\(\) => \{\s*setIsPaused\(false\);\s*setIsDeleting\(true\);\s*\}, 1500\);/g, 'setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000);');
txt = txt.replace(/setTimeout\(\(\) => \{\s*setPlaceholderText\(currentPrompt\.substring\(0, placeholderText\.length - 2\)\);\s*\}, 5\);/g, 'setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length - 2)); }, 10);');
txt = txt.replace(/setTimeout\(\(\) => \{\s*setPlaceholderText\(currentPrompt\.substring\(0, placeholderText\.length \+ 1\)\);\s*\}, 15\);/g, 'setTimeout(() => { setPlaceholderText(currentPrompt.substring(0, placeholderText.length + 1)); }, 30);');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Hero prompts adjusted successfully!");
