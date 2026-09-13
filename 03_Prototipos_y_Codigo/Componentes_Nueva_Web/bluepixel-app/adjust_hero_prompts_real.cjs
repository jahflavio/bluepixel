const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Revert PRESETS to be more natural/first-person pain points
txt = txt.replace(/'Cotizaciones complejas en Excel que tardan horas y nos hacen perder ventas\.'/, "'Mi equipo tarda horas armando cotizaciones en Excel y estamos perdiendo ventas.'");
txt = txt.replace(/'Conciliación manual de miles de facturas y pagos contra el ERP\.'/, "'Tengo a 5 personas cruzando facturas a mano contra SAP cada fin de mes.'");
txt = txt.replace(/'Alta tasa de abandono en el flujo de pago de la plataforma digital\.'/, "'Los clientes están abandonando el checkout a la mitad y estamos perdiendo dinero.'");
txt = txt.replace(/'Automatizar atención en WhatsApp sin que la IA invente datos falsos\.'/, "'Necesito un bot en WhatsApp para soporte, pero que NO se invente las políticas de la empresa.'");

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Hero prompts adjusted to sound more human/frustrated!");
