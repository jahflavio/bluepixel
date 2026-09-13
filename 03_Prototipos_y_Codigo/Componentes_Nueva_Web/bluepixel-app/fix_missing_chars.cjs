const fs = require('fs');

function fixFile(filepath) {
  let txt = fs.readFileSync(filepath, 'utf8');

  // Replace text
  txt = txt.replace(/Diagnstico/g, 'Diagnóstico');
  txt = txt.replace(/diagnstico/g, 'diagnóstico');
  txt = txt.replace(/xito/g, 'éxito');
  txt = txt.replace(/Solucin/g, 'Solución');
  txt = txt.replace(/Tcnica/g, 'Técnica');
  txt = txt.replace(/tcnica/g, 'técnica');
  txt = txt.replace(/Cotizacin/g, 'Cotización');
  txt = txt.replace(/Atencin/g, 'Atención');
  txt = txt.replace(/Conciliacin/g, 'Conciliación');
  txt = txt.replace(/Reduccin/g, 'Reducción');
  txt = txt.replace(/Optimizacin/g, 'Optimización');
  txt = txt.replace(/adopcin/g, 'adopción');
  txt = txt.replace(/diseo/g, 'diseño');
  txt = txt.replace(/autnomos/g, 'autónomos');
  txt = txt.replace(/lderes/g, 'líderes');
  txt = txt.replace(/Mxico/g, 'México');
  txt = txt.replace(/produccin/g, 'producción');
  txt = txt.replace(/Ingeniera/g, 'Ingeniería');
  txt = txt.replace(/ingeniera/g, 'ingeniería');
  txt = txt.replace(/Generacin/g, 'Generación');
  txt = txt.replace(/aprobacin/g, 'aprobación');
  txt = txt.replace(/facturacin/g, 'facturación');
  txt = txt.replace(/informacin/g, 'información');
  txt = txt.replace(/transformacin/g, 'transformación');
  txt = txt.replace(/Transformacin/g, 'Transformación');
  txt = txt.replace(/gestin/g, 'gestión');
  txt = txt.replace(/Extraccin/g, 'Extracción');
  txt = txt.replace(/validacin/g, 'validación');
  txt = txt.replace(/evaluacin/g, 'evaluación');
  txt = txt.replace(/visin/g, 'visión');
  txt = txt.replace(/inversin/g, 'inversión');
  txt = txt.replace(/clasificacin/g, 'clasificación');
  txt = txt.replace(/recepcin/g, 'recepción');
  txt = txt.replace(/Integracin/g, 'Integración');
  txt = txt.replace(/integracin/g, 'integración');
  
  txt = txt.replace(/clculo/g, 'cálculo');
  txt = txt.replace(/mrgenes/g, 'márgenes');
  txt = txt.replace(/automticamente/g, 'automáticamente');
  txt = txt.replace(/Prdida/g, 'Pérdida');
  txt = txt.replace(/das/g, 'días');
  txt = txt.replace(/va/g, 'vía');
  txt = txt.replace(/Conexin/g, 'Conexión');
  txt = txt.replace(/ms/g, 'más');
  txt = txt.replace(/Ms/g, 'Más');
  txt = txt.replace(/tecnolgico/g, 'tecnológico');
  txt = txt.replace(/estratgico/g, 'estratégico');
  txt = txt.replace(/ptimo/g, 'óptimo');
  txt = txt.replace(/ptima/g, 'óptima');
  txt = txt.replace(/nico/g, 'único');
  txt = txt.replace(/ltimo/g, 'último');
  txt = txt.replace(/rea/g, 'área');
  txt = txt.replace(/reas/g, 'áreas');
  txt = txt.replace(/rpido/g, 'rápido');
  txt = txt.replace(/dlar/g, 'dólar');
  txt = txt.replace(/dlares/g, 'dólares');
  txt = txt.replace(/ahorr/g, 'ahorró');
  txt = txt.replace(/gener/g, 'generó');
  txt = txt.replace(/ao/g, 'año');
  txt = txt.replace(/aos/g, 'años');
  txt = txt.replace(/est/g, 'está');
  txt = txt.replace(/estn/g, 'están');
  txt = txt.replace(/aqu/g, 'aquí');
  txt = txt.replace(/as/g, 'así');
  txt = txt.replace(/podrs/g, 'podrás');
  txt = txt.replace(/tendrs/g, 'tendrás');
  txt = txt.replace(/har/g, 'hará');
  txt = txt.replace(/ser/g, 'será');
  txt = txt.replace(/Logstica/g, 'Logística');
  txt = txt.replace(/logstica/g, 'logística');

  // Replace Icons / Emojis
  txt = txt.replace(/><\/span> Blueprint Library/g, '>✦</span> Blueprint Library');
  txt = txt.replace(/Diagnóstico Operativo /g, 'Diagnóstico Operativo ↗');
  txt = txt.replace(/Ver Solución Técnica /g, 'Ver Solución Técnica ↗');
  txt = txt.replace(/ Cotizaciones lentas/g, '✦ Cotizaciones lentas');
  txt = txt.replace(/ Conciliación contable/g, '✦ Conciliación contable');
  txt = txt.replace(/ Fuga en checkout/g, '✦ Fuga en checkout');
  txt = txt.replace(/ Atención 24\/7/g, '✦ Atención 24/7');
  txt = txt.replace(/ Motor de diagnóstico/g, '✓ Motor de diagnóstico');
  txt = txt.replace(/ Basado en casos/g, '✓ Basado en casos');
  txt = txt.replace(/\(Sin Costo\) /g, '(Sin Costo) ↗');
  txt = txt.replace(/Trabajar /g, 'Trabajar ↗');
  
  // Clean up any double encoding that was left behind
  txt = txt.replace(/Ã³/g, 'ó');
  txt = txt.replace(/Ã©/g, 'é');
  txt = txt.replace(/Ã­/g, 'í');
  txt = txt.replace(/Ã¡/g, 'á');
  txt = txt.replace(/Ãº/g, 'ú');
  txt = txt.replace(/Ã±/g, 'ñ');
  txt = txt.replace(/Ã“/g, 'Ó');
  txt = txt.replace(/Ã‰/g, 'É');
  txt = txt.replace(/Ã /g, 'Í');
  txt = txt.replace(/Ã /g, 'Á');
  txt = txt.replace(/Ãš/g, 'Ú');

  fs.writeFileSync(filepath, txt, 'utf8');
}

fixFile('../index.html');
fixFile('src/App.jsx');
console.log('Fixed missing chars!');
