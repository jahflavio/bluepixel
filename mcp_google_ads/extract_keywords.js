// Corre los 10 lotes semilla contra Keyword Planner y escribe un CSV
// consolidado, deduplicado y ya clasificado con el semaforo del reporte SEO.
//
// Uso:  node extract_keywords.js [--lote A1] [--salida ruta.csv]
//
// Reemplaza las 10 extracciones manuales de
// 02_Estrategia_B2B/Estrategia_Web_y_SEO/GUIA_KEYWORD_PLANNER_PASO_A_PASO.md
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { generateKeywordIdeas, clasificar } from './keyword_ideas.js';
import { LOTES } from './seeds.js';

try {
  for (const line of readFileSync(new URL('.env', import.meta.url), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
} catch {
  console.error('No se encontro .env. Copia .env.example a .env y llenalo.');
  process.exit(1);
}

const args = process.argv.slice(2);
const argOf = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
};

const soloLote = argOf('lote');
const salida =
  argOf('salida') ||
  '../02_Estrategia_B2B/datos_excel_y_css/keyword_planner_2026-09/keywords_consolidado.csv';

const lotes = soloLote ? LOTES.filter((l) => l.id === soloLote) : LOTES;
if (!lotes.length) {
  console.error(`Lote "${soloLote}" no existe. Disponibles: ${LOTES.map((l) => l.id).join(', ')}`);
  process.exit(1);
}

const csvCell = (v) => {
  const s = v == null ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const vistas = new Map();
let fallidos = 0;

for (const lote of lotes) {
  process.stdout.write(`[${lote.id}] ${lote.nombre} ... `);
  try {
    const ideas = await generateKeywordIdeas({
      seeds: lote.seeds,
      geo: lote.geo,
      language: lote.language,
      loginCustomerId: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || undefined
    });

    for (const idea of ideas) {
      const clave = `${lote.geo}|${idea.keyword}`;
      const previo = vistas.get(clave);
      if (previo) {
        // La misma keyword puede salir en varios lotes: se conserva una sola
        // fila y se acumulan los lotes que la sugirieron.
        if (!previo.lotes.includes(lote.id)) previo.lotes.push(lote.id);
        continue;
      }
      vistas.set(clave, {
        ...idea,
        lotes: [lote.id],
        lote_nombre: lote.nombre,
        mercado: lote.geo,
        clasificacion: clasificar(idea)
      });
    }
    console.log(`${ideas.length} ideas`);
  } catch (err) {
    fallidos++;
    // google-ads-api deja el detalle util en err.errors[], no en err.message.
    const detalle =
      err?.errors
        ?.map((e) => `${e.error_code ? JSON.stringify(e.error_code) : ''} ${e.message}`)
        .join(' | ') ||
      err?.message ||
      JSON.stringify(err).slice(0, 300);
    console.log(`ERROR: ${detalle}`);
  }
}

if (!vistas.size) {
  console.error('\nNo se obtuvo ninguna idea. Revisa credenciales y permisos.');
  process.exit(1);
}

const filas = [...vistas.values()].sort(
  (a, b) => Number(b.busquedas_mensuales) - Number(a.busquedas_mensuales)
);

const columnas = [
  'keyword',
  'busquedas_mensuales',
  'puja_baja_mxn',
  'puja_alta_mxn',
  'competencia',
  'competencia_indice',
  'tendencia_trimestral_pct',
  'clasificacion',
  'lotes',
  'lote_nombre',
  'mercado',
  'serie_12m'
];

const csv = [
  columnas.join(','),
  ...filas.map((r) =>
    columnas.map((c) => csvCell(Array.isArray(r[c]) ? r[c].join(' ') : r[c])).join(',')
  )
].join('\n');

mkdirSync(dirname(new URL(salida, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), {
  recursive: true
});
writeFileSync(new URL(salida, import.meta.url), '﻿' + csv, 'utf8');

const conteo = filas.reduce((acc, r) => {
  acc[r.clasificacion] = (acc[r.clasificacion] || 0) + 1;
  return acc;
}, {});

console.log(`\n${filas.length} keywords unicas escritas en:\n  ${salida}\n`);
console.log('Distribucion del semaforo:');
for (const [k, v] of Object.entries(conteo).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(v).padStart(4)}  ${k}`);
}
if (fallidos) console.log(`\n${fallidos} lote(s) fallaron; el CSV trae solo los exitosos.`);
