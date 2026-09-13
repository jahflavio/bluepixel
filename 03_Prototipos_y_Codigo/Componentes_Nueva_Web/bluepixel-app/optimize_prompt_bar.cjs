const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Shorten the preset prompts
txt = txt.replace(
  "'Nuestros ejecutivos tardan hasta 48 horas en cotizar productos complejos en hojas de cálculo y se pierden ventas.'",
  "'Cotizaciones complejas en Excel que tardan horas y nos hacen perder ventas.'"
);

txt = txt.replace(
  "'El equipo contable concilia manualmente miles de facturas y transferencias bancarias contra el ERP a fin de mes.'",
  "'Conciliación manual de miles de facturas y pagos contra el ERP a fin de mes.'"
);

txt = txt.replace(
  "'Nuestra plataforma digital tiene una tasa de abandono del 68% en el paso 3 del flujo de pago.'",
  "'Alta tasa de abandono (68%) en el flujo de pago de la plataforma digital.'"
);

txt = txt.replace(
  "'Queremos automatizar el soporte y atención al cliente en WhatsApp sin que la IA invente datos falsos ni dañe la marca.'",
  "'Automatizar atención en WhatsApp sin que la IA invente datos falsos (alucinaciones).'"
);


// 2. Reduce font sizes and padding in the HeroPromptEngine

// Reduce container padding
txt = txt.replace(
  `rounded-2xl p-3 shadow-2xl`,
  `rounded-2xl p-2.5 shadow-2xl`
);

// Reduce Input Text Size
txt = txt.replace(
  `text-sm md:text-base focus:outline-none`,
  `text-xs md:text-sm focus:outline-none`
);

// Reduce Button Size (padding, font size, rounded)
txt = txt.replace(
  `font-semibold text-sm px-6 py-3.5 rounded-xl`,
  `font-semibold text-xs px-5 py-2.5 rounded-lg`
);

// Reduce the star icon size next to the input
txt = txt.replace(
  `<span className="text-blue-400 text-lg">✦</span>`,
  `<span className="text-blue-400 text-base">✦</span>`
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Successfully optimized the HeroPromptEngine for smaller text and better fit.');
