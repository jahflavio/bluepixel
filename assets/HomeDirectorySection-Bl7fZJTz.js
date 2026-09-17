import{r as l,j as t}from"./index-DoZwrrGm.js";/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function q(o,e,s=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:P(o),size:24,node:e,...s.length>0?{aliases:s}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=o=>{let e="",s=!1;for(const r of o){if(r==="-"||r==="_"||r<=" "){s=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=s?r.toUpperCase():r,s=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=o=>{const e=B(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(...o)=>o.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function j(o){return o!=null}function $(o,e={}){var f,p;const s=e.attributeNames??{},r=a=>s[a]??a,c=o.size??o.width??n.width,u=o.size??o.height??n.height,x=((f=o.aliases)==null?void 0:f.filter(a=>typeof a=="string"&&a.trim()!=="").map(a=>`lucide-${a}`))??[],m=[...o.name?[`lucide-${o.name}`]:[],...x],i=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],b=e.includeDefaultClasses===!1?N(...i):N("lucide",...m,...i),w=e.absoluteStrokeWidth?Number(e.strokeWidth??n["stroke-width"])*Number(o.size??o.width??n.width)/Number(e.size??e.width??n.width):e.strokeWidth??n["stroke-width"];return["svg",{...Object.entries(n).reduce((a,[d,h])=>(a[r(d)]=h,a),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&j(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&j(e.width)&&{[r("width")]:e.width},..."height"in e&&j(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:w,...b&&{[r("class")]:b},[r("viewBox")]:`0 0 ${c} ${u}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(a=>{const[d,h,g]=a,v=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...h}:h;return g?[d,v,g]:[d,v]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function M(o,e={}){return $(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},T=l.createContext({}),F=()=>l.useContext(T),U=l.forwardRef(({color:o,size:e,width:s,height:r,strokeWidth:c,absoluteStrokeWidth:u,nonScalingStroke:x,className:m="",children:i,iconNode:b=[],icon:w={node:b,aliases:[],size:24},...y},f)=>{const{size:p=24,strokeWidth:a=2,absoluteStrokeWidth:d=!1,nonScalingStroke:h=!1,color:g="currentColor",className:v=""}=F()??{},S=!!i||R(y),[W,_,L=[]]=M(w,{color:o??g,width:s??e??p,height:r??e??p,strokeWidth:c??a,absoluteStrokeWidth:u??d,nonScalingStroke:x??h,className:N(v,m),hasA11yProp:S,attributes:y});return l.createElement(W,{ref:f,..._},[...L.map(([E,D])=>l.createElement(E,D)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function k(o,e=[],s=[]){const r=typeof o=="string"?q(o,e,s):o,c=l.forwardRef(({className:u,...x},m)=>l.createElement(U,{ref:m,icon:r,className:u,...x}));return r.name&&(c.displayName=I(r.name)),c}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};z.node;const V=k(z);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};C.node;const H=k(C);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={name:"square-terminal",size:24,node:[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],aliases:["terminal-square"]};A.node;const O=k(A),G=()=>t.jsxs("section",{className:"py-24 px-6 bg-[#040711] border-y border-white/[0.05] relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none"}),t.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[t.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[t.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10",children:"✦ EXPLORA BLUEPIXEL"}),t.jsx("h2",{className:"text-3xl md:text-5xl font-black text-white mt-4 mb-4",children:"Estructura Técnica y Comercial"}),t.jsx("p",{className:"text-slate-400 text-base md:text-lg",children:"Navega directamente a lo que necesitas conocer. Separamos nuestra filosofía técnica de nuestros servicios y modelos de negocio."})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t.jsxs("a",{href:"#/pilares",className:"group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10 block cursor-pointer",children:[t.jsx("div",{className:"absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300",children:t.jsx(H,{className:"w-6 h-6 text-blue-400",strokeWidth:2})}),t.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors",children:"Nuestros 3 Pilares"}),t.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:"Apps & Producto, Automatización y Gobernanza IA. Descubre la filosofía arquitectónica que sostiene a los corporativos más ágiles."}),t.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity",children:[t.jsx("span",{children:"Explorar Pilares"}),t.jsx("span",{className:"font-mono group-hover:translate-x-1 transition-transform",children:"→"})]})]})]}),t.jsxs("a",{href:"#/servicios",className:"group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10 block cursor-pointer",children:[t.jsx("div",{className:"absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300",children:t.jsx(O,{className:"w-6 h-6 text-purple-400",strokeWidth:2})}),t.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors",children:"Directorio de Servicios"}),t.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:"De la fricción operativa a la agentización total. Explora nuestras 6 capacidades técnicas, entregables y metodologías de implementación."}),t.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity",children:[t.jsx("span",{children:"Ver los 6 Servicios"}),t.jsx("span",{className:"font-mono group-hover:translate-x-1 transition-transform",children:"→"})]})]})]}),t.jsxs("a",{href:"#/como-trabajamos",className:"group relative overflow-hidden bg-[#060A14] border border-white/[0.08] hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10 block cursor-pointer",children:[t.jsx("div",{className:"absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-600/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300",children:t.jsx(V,{className:"w-6 h-6 text-emerald-400",strokeWidth:2})}),t.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors",children:"Modelos de Trabajo"}),t.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:"Conoce cómo eliminamos el riesgo comercial. Desde Diagnósticos Operativos hasta Transformación Full-Stack garantizada."}),t.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity",children:[t.jsx("span",{children:"Ver Modelos de Engagement"}),t.jsx("span",{className:"font-mono group-hover:translate-x-1 transition-transform",children:"→"})]})]})]})]})]})]});export{G as default};
