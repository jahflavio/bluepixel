// Las 8 listas semilla del reporte SEO, construidas con datos reales:
// las de Lista A salen de consultas donde bluepixel.mx ya aparece en posicion
// 15-60 segun Search Console; las de Lista C salen de los terminos de busqueda
// reales de la cuenta de Google Ads.
//
// Ver 02_Estrategia_B2B/Estrategia_Web_y_SEO/GUIA_KEYWORD_PLANNER_PASO_A_PASO.md
import { GEO, LANG } from './keyword_ideas.js';

export const LOTES = [
  {
    id: 'A1',
    nombre: 'Comercial · Apps moviles',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'desarrollo de apps',
      'desarrollo de aplicaciones moviles',
      'desarrolladores de apps',
      'empresa de desarrollo de aplicaciones moviles',
      'desarrollo de apps a medida',
      'desarrolladores de apps en mexico',
      'agencia desarrollo apps',
      'desarrollo de aplicaciones empresariales',
      'empresa creacion app',
      'desarrollo de aplicaciones moviles para empresas'
    ]
  },
  {
    id: 'A2',
    nombre: 'Comercial · Web, software y agencia',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'agencia de desarrollo web',
      'empresas de desarrollo web',
      'desarrollo de software a la medida',
      'empresa de desarrollo de software',
      'desarrollo de software empresarial',
      'desarrollo de sitios web para empresas',
      'proveedor de desarrollo web',
      'servicio de desarrollo web',
      'desarrollo de la pagina web',
      'diseno web optimizado'
    ]
  },
  {
    id: 'A3',
    nombre: 'Comercial · UX/UI',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'diseno ux ui',
      'agencia ux ui',
      'agencia ux',
      'diseno ui',
      'diseno ux para app',
      'arquitectura de la informacion',
      'consultoria ux',
      'auditoria ux',
      'design system para empresas',
      'investigacion de usuarios'
    ]
  },
  {
    id: 'B1',
    nombre: 'Educativo · tipos de',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'tipos de paginas web',
      'tipos de interfaz de usuario',
      'tipos de sitios web',
      'tipos de aplicaciones moviles',
      'tipos de software',
      'tipos de arquitectura de software',
      'tipos de metodologias agiles',
      'tipos de pruebas de software',
      'tipos de bases de datos',
      'tipos de integraciones de sistemas'
    ]
  },
  {
    id: 'B2',
    nombre: 'Educativo · que es',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'que es ux',
      'que es ui',
      'que es un agente de ia',
      'que es rag',
      'que es mcp',
      'que es rpa',
      'que es cloud native',
      'que es un design system',
      'que es una api',
      'que es devops'
    ]
  },
  {
    id: 'B3',
    nombre: 'Educativo · costo y comparativas',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'cuanto cuesta crear una app',
      'cuanto cuesta una pagina web',
      'cuanto cuesta un software a la medida',
      'cuanto cuesta implementar ia en una empresa',
      'diferencia entre app nativa y web app',
      'rpa vs inteligencia artificial',
      'diferencia entre chatbot y agente de ia',
      'etapas del desarrollo de software',
      'ejemplos de interfaces de usuario',
      'elementos de una pagina web'
    ]
  },
  {
    id: 'C1',
    nombre: 'Competidores · marcas',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'softtek',
      'wizeline',
      'neoris',
      'globant',
      'ntt data mexico',
      'accenture mexico',
      'bairesdev',
      'toptal',
      'infosys mexico',
      'epam mexico'
    ]
  },
  {
    id: 'C2',
    nombre: 'Competidores · listados y comparativas',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'mejores empresas de desarrollo de software en mexico',
      'mejores agencias de desarrollo web mexico',
      'mejores agencias ux ui mexico',
      'empresas de software en mexico',
      'consultoras de tecnologia en mexico',
      'empresas de inteligencia artificial en mexico',
      'comparativa empresas desarrollo software',
      'alternativas a softtek',
      'nearshore software development mexico',
      'proveedores de desarrollo de software mexico'
    ]
  },
  {
    id: 'D1',
    nombre: 'Categoria nueva · IA agentica',
    geo: GEO.mexico,
    language: LANG.espanol,
    seeds: [
      'agentes de ia',
      'agentes autonomos para empresas',
      'rag empresarial',
      'rag privado',
      'automatizacion con inteligencia artificial',
      'copilotos internos',
      'protocolo mcp',
      'ia para erp',
      'chatbot corporativo',
      'inteligencia artificial para empresas'
    ]
  },
  {
    id: 'E1',
    nombre: 'Ingles · Estados Unidos',
    geo: GEO.usa,
    language: LANG.ingles,
    seeds: [
      'custom software development',
      'custom app development',
      'mobile app development company',
      'application development services',
      'ui ux design agency',
      'custom web design',
      'nearshore software development mexico',
      'ai agents for business',
      'enterprise rag',
      'software development company mexico'
    ]
  }
];
