const fs = require('fs');
let txt = fs.readFileSync('src/App.jsx', 'utf8');

const replacements = {
  'cǭlculo': 'cálculo',
  'AUTOMATIZACI"N': 'AUTOMATIZACIÓN',
  'PǸrdida': 'Pérdida',
  'mǭrgenes': 'márgenes',
  'Generacin': 'Generación',
  'automǭticamente': 'automáticamente',
  'Reduccin': 'Reducción',
  'cotizacin': 'cotización',
  'Conciliacin': 'Conciliación',
  'das': 'días',
  'Conexin': 'Conexión',
  'va': 'vía',
  'facturacin': 'facturación',
  'atencin': 'atención',
  'validacin': 'validación',
  'Extraccin': 'Extracción',
  'gestin': 'gestión',
  'aprobacin': 'aprobación',
  'evolucin': 'evolución',
  'evaluacin': 'evaluación',
  'operacin': 'operación',
  'clasificacin': 'clasificación',
  'creacin': 'creación',
  'recepcin': 'recepción',
  'Optimizacin': 'Optimización',
  'optimizacin': 'optimización',
  'visin': 'visión',
  'inversin': 'inversión',
  'solucin': 'solución',
  'Solucin': 'Solución',
  'integracin': 'integración',
  'Integracin': 'Integración',
  'ms': 'más',
  'Ms': 'Más',
  'estratgico': 'estratégico',
  'tecnolgico': 'tecnológico',
  'diagnstico': 'diagnóstico',
  'Diagnstico': 'Diagnóstico',
  'xito': 'éxito',
  'ptimo': 'óptimo',
  'diseo': 'diseño',
  'Diseo': 'Diseño',
  'comunicacin': 'comunicación',
  'informacin': 'información',
  'Informacin': 'Información',
  'Transformacin': 'Transformación',
  'nete': 'Únete',
  'nico': 'único',
  'ltimo': 'último',
  'rea': 'área',
  'reas': 'áreas',
  'rpido': 'rápido',
  'dlar': 'dólar',
  'dlares': 'dólares',
  'ahorr': 'ahorró',
  'gener': 'generó',
  'ao': 'año',
  'aos': 'años',
  'Aos': 'Años',
  'est': 'está',
  'estn': 'están',
  'aqu': 'aquí',
  'as': 'así',
  'podrs': 'podrás',
  'tendrs': 'tendrás',
  'har': 'hará',
  'ser': 'será',
  'Logstica': 'Logística',
  'logstica': 'logística',
  'PǸrdida': 'Pérdida',
  'clculo': 'cálculo',
  'xito': 'éxito',
  'ptima': 'óptima',
  'ltima': 'última',
  'reduccin': 'reducción'
};

for (const [bad, good] of Object.entries(replacements)) {
  txt = txt.split(bad).join(good);
}

// Global cleanup for any remaining  that are obviously 'ó' or 'í' 
// Actually, it's safer to just let the specific word replacement handle it.
// Let's do a regex for common suffixes:
txt = txt.replace(/acin/g, 'ación');
txt = txt.replace(/ccin/g, 'cción');
txt = txt.replace(/sin/g, 'sión');
txt = txt.replace(/stico/g, 'óstico');
txt = txt.replace(/gico/g, 'ógico');

fs.writeFileSync('src/App.jsx', txt, 'utf8');
console.log('Fixed accents in App.jsx');
