// Diagnostico de acceso: lista las cuentas que alcanzan estas credenciales y
// dice cuales son MCC (manager) y cuales son cuentas finales. Sirve para saber
// si hace falta GOOGLE_ADS_LOGIN_CUSTOMER_ID y con que valor.
//
// Uso:  node diagnostico.js
import { readFileSync } from 'node:fs';
import { GoogleAdsApi } from 'google-ads-api';

for (const line of readFileSync(new URL('.env', import.meta.url), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
}

const fmt = (id) => String(id).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN
});

const refresh = process.env.GOOGLE_ADS_REFRESH_TOKEN;
const objetivo = String(process.env.GOOGLE_ADS_CUSTOMER_ID).replace(/-/g, '');

console.log('Consultando cuentas accesibles...\n');

let accesibles;
try {
  accesibles = await client.listAccessibleCustomers(refresh);
} catch (err) {
  console.error('ERROR al listar cuentas:', err.message);
  process.exit(1);
}

const ids = (accesibles.resource_names || []).map((r) => r.split('/')[1]);
console.log(`Cuentas accesibles con estas credenciales: ${ids.length}`);
ids.forEach((id) => console.log(`  - ${fmt(id)}`));
console.log();

// Para cada cuenta accesible, revisa si es manager y que cuentas cuelgan de ella.
for (const id of ids) {
  try {
    const cust = client.Customer({ customer_id: id, refresh_token: refresh });
    const filas = await cust.query(`
      SELECT customer_client.id,
             customer_client.descriptive_name,
             customer_client.manager,
             customer_client.level,
             customer_client.status
      FROM customer_client
    `);

    const self = filas.find((f) => String(f.customer_client.id) === id);
    const esManager = Boolean(self?.customer_client?.manager);
    console.log(`${fmt(id)} — ${self?.customer_client?.descriptive_name || '(sin nombre)'}`);
    console.log(`  tipo: ${esManager ? 'MCC (manager)' : 'cuenta final'}`);

    const hijas = filas.filter((f) => String(f.customer_client.id) !== id);
    if (hijas.length) {
      console.log(`  cuentas debajo: ${hijas.length}`);
      hijas.forEach((f) =>
        console.log(
          `    · ${fmt(f.customer_client.id)}  ${f.customer_client.descriptive_name || ''}` +
            `${String(f.customer_client.id) === objetivo ? '   <-- LA QUE BUSCAMOS' : ''}`
        )
      );
      if (hijas.some((f) => String(f.customer_client.id) === objetivo)) {
        console.log(`\n  >>> Pon esto en .env:  GOOGLE_ADS_LOGIN_CUSTOMER_ID=${id}`);
      }
    }
    console.log();
  } catch (err) {
    // Los errores de google-ads-api traen el detalle util en err.errors[],
    // no en err.message, que a veces viene vacio.
    const detalle =
      err?.errors?.map((e) => `${e.error_code ? JSON.stringify(e.error_code) : ''} ${e.message}`).join(' | ') ||
      err?.message ||
      JSON.stringify(err).slice(0, 300);
    console.log(`${fmt(id)} — no se pudo consultar: ${detalle}\n`);
  }
}

if (ids.length === 1 && ids[0] === objetivo) {
  console.log('Es una cuenta directa, no cuelga de una MCC.');
  console.log('Deja GOOGLE_ADS_LOGIN_CUSTOMER_ID vacio.');
}
