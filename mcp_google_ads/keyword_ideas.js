// Consulta a KeywordPlanIdeaService: es la misma fuente que alimenta la
// interfaz de Google Keyword Planner. Devuelve busquedas mensuales promedio,
// competencia, puja de la parte superior de la pagina y la serie de los ultimos
// 12 meses.
//
// La puja de la parte superior es el dato clave: es el filtro de intencion
// comercial que no teniamos. Puja alta = otros anunciantes ganan dinero ahi.
import { GoogleAdsApi, enums } from 'google-ads-api';

// Constantes de Google. Ver:
// https://developers.google.com/google-ads/api/reference/data/geotargets
// https://developers.google.com/google-ads/api/reference/data/codes-formats#languages
export const GEO = {
  mexico: 'geoTargetConstants/21167',
  usa: 'geoTargetConstants/2840',
  espana: 'geoTargetConstants/2724',
  colombia: 'geoTargetConstants/2170'
};

export const LANG = {
  espanol: 'languageConstants/1003',
  ingles: 'languageConstants/1000'
};

export const createClient = () => {
  const missing = [
    'GOOGLE_ADS_CLIENT_ID',
    'GOOGLE_ADS_CLIENT_SECRET',
    'GOOGLE_ADS_DEVELOPER_TOKEN',
    'GOOGLE_ADS_REFRESH_TOKEN',
    'GOOGLE_ADS_CUSTOMER_ID'
  ].filter((k) => !process.env[k] || process.env[k].startsWith('TU_'));

  if (missing.length) {
    throw new Error(
      `Faltan credenciales en el entorno: ${missing.join(', ')}.\n` +
        'Copia .env.example a .env y llena los valores. El .env ya esta en .gitignore.'
    );
  }

  return new GoogleAdsApi({
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN
  });
};

const micros = (v) => (v == null ? null : Number(v) / 1_000_000);

/**
 * Pide ideas de keywords a partir de un lote de semillas.
 *
 * @param {object} opts
 * @param {string[]} opts.seeds        Hasta 20 semillas por llamada.
 * @param {string}   opts.geo          Una constante de GEO.
 * @param {string}   opts.language     Una constante de LANG.
 * @param {string}   [opts.loginCustomerId] ID de la cuenta MCC, si aplica.
 * @returns {Promise<object[]>}
 */
export async function generateKeywordIdeas({
  seeds,
  geo = GEO.mexico,
  language = LANG.espanol,
  loginCustomerId
}) {
  const client = createClient();
  const customerId = String(process.env.GOOGLE_ADS_CUSTOMER_ID).replace(/-/g, '');

  const customer = client.Customer({
    customer_id: customerId,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
    ...(loginCustomerId
      ? { login_customer_id: String(loginCustomerId).replace(/-/g, '') }
      : {})
  });

  const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
    customer_id: customerId,
    language,
    geo_target_constants: [geo],
    // GOOGLE_SEARCH, no GOOGLE_SEARCH_AND_PARTNERS: los socios de busqueda
    // inflan el volumen con trafico que no es de Google.
    keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
    include_adult_keywords: false,
    keyword_seed: { keywords: seeds }
  });

  return response.map((idea) => {
    const m = idea.keyword_idea_metrics || {};
    const serie = (m.monthly_search_volumes || []).map((x) => Number(x.monthly_searches || 0));
    // Tendencia: promedio del trimestre mas reciente contra el anterior. La
    // serie viene de mas antiguo a mas reciente.
    const ult3 = serie.slice(-3);
    const prev3 = serie.slice(-6, -3);
    const avg = (a) => (a.length ? a.reduce((s, n) => s + n, 0) / a.length : 0);
    const tendencia =
      prev3.length && avg(prev3) > 0
        ? Math.round(((avg(ult3) - avg(prev3)) / avg(prev3)) * 100)
        : null;

    return {
      keyword: idea.text,
      busquedas_mensuales: m.avg_monthly_searches ?? 0,
      competencia: m.competition != null ? enums.KeywordPlanCompetitionLevel[m.competition] : null,
      competencia_indice: m.competition_index ?? null,
      puja_baja_mxn: micros(m.low_top_of_page_bid_micros),
      puja_alta_mxn: micros(m.high_top_of_page_bid_micros),
      tendencia_trimestral_pct: tendencia,
      serie_12m: serie.join('|')
    };
  });
}

/**
 * Clasifica con el semaforo del reporte: el cruce de volumen contra puja de la
 * parte superior es lo que separa a un comprador de alguien buscando una
 * herramienta gratis.
 */
export function clasificar(row, { volumenAlto = 300, pujaAlta = 40 } = {}) {
  const vol = Number(row.busquedas_mensuales) || 0;
  const puja = Number(row.puja_alta_mxn) || 0;
  const creciendo = (row.tendencia_trimestral_pct ?? 0) >= 20;

  if (vol >= volumenAlto && puja >= pujaAlta) return 'VERDE · pagina de servicio';
  if (vol >= volumenAlto && puja < pujaAlta) return 'AMARILLO · blog';
  if (vol < volumenAlto && puja >= pujaAlta) return 'AZUL · nicho de alto valor';
  if (creciendo) return 'AZUL · apuesta a futuro';
  return 'BLANCO · descartar';
}
