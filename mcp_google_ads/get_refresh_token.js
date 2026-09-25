// Genera el refresh token de OAuth una sola vez.
//
// Uso:
//   1. Llena GOOGLE_ADS_CLIENT_ID y GOOGLE_ADS_CLIENT_SECRET en .env
//   2. node get_refresh_token.js
//   3. Abre la URL que imprime, autoriza con la cuenta que administra Google Ads
//   4. Pega el codigo que te devuelve el navegador
//   5. Copia el refresh token resultante a .env
//
// El servidor local solo vive mientras dura la autorizacion y escucha
// unicamente en 127.0.0.1.
import http from 'node:http';
import { readFileSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';

// Carga minima de .env, para no depender de dotenv.
try {
  for (const line of readFileSync(new URL('.env', import.meta.url), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
} catch {
  console.error('No se encontro .env. Copia .env.example a .env primero.');
  process.exit(1);
}

const CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET;
const PORT = 8737;
// Sin path: para clientes OAuth de tipo "Aplicacion de escritorio" Google
// acepta cualquier puerto en loopback, pero agregar una ruta puede provocar
// redirect_uri_mismatch contra el 'http://localhost' que quedo registrado.
const REDIRECT = `http://localhost:${PORT}`;
const SCOPE = 'https://www.googleapis.com/auth/adwords';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Falta GOOGLE_ADS_CLIENT_ID o GOOGLE_ADS_CLIENT_SECRET en .env');
  process.exit(1);
}

const authUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent'
  });

const exchange = async (code) => {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT,
      grant_type: 'authorization_code'
    })
  });
  const json = await res.json();
  if (!json.refresh_token) {
    console.error('\nNo llego refresh_token. Respuesta:', json);
    console.error('\nSi ya habias autorizado antes, revoca el acceso en');
    console.error('https://myaccount.google.com/permissions y vuelve a intentar.');
    process.exit(1);
  }
  console.log('\n──────────────────────────────────────────────');
  console.log('REFRESH TOKEN (pegalo en .env):\n');
  console.log(json.refresh_token);
  console.log('──────────────────────────────────────────────\n');
};

console.log('\n1. Abre esta URL en tu navegador:\n');
console.log(authUrl.toString());
console.log('\n2. Autoriza con la cuenta que administra Google Ads.\n');
console.log(`Esperando la respuesta en ${REDIRECT} ...\n`);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const code = url.searchParams.get('code');
  if (!code) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h2>Listo. Ya puedes cerrar esta pestana y volver a la terminal.</h2>');
  server.close();
  if (code) await exchange(code);
  process.exit(0);
});

server.listen(PORT, '127.0.0.1');

// Salida alterna: si el navegador no puede alcanzar localhost, pega el codigo
// manualmente.
const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question('O pega aqui el codigo manualmente si el redirect fallo: ')
  .then(async (code) => {
    if (code.trim()) {
      server.close();
      await exchange(code.trim());
      process.exit(0);
    }
  })
  .catch(() => {});
