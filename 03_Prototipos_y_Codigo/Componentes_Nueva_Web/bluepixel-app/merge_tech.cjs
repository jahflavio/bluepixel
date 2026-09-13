const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Remove <TechPartners /> from App rendering
txt = txt.replace(/<TechPartners \/>/g, '{/* <TechPartners /> */}');

// 2. Enhance Card 1 (MCP) badges
const card1BadgesRegex = /<div className="mt-auto flex flex-wrap gap-2">[\s\S]*?<\/div>/;
const card1NewBadges = `<div className="mt-auto flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>SAP</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>Salesforce</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>HubSpot</span>
                  </div>`;
txt = txt.replace(card1BadgesRegex, card1NewBadges);

// 3. Enhance Card 2 (Swarm) badges
const card2BadgesRegex = /<div className="flex items-center gap-4 mt-6 text-slate-500">[\s\S]*?<\/div>/;
const card2NewBadges = `<div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-blue-400">⚡</span>Pydantic AI</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-emerald-400">🦜</span>LangGraph</span>
                  </div>`;
txt = txt.replace(card2BadgesRegex, card2NewBadges);

// 4. Enhance Card 3 (RAG) badges
const card3BadgesRegex = /<div className="flex items-center gap-4 mt-6">[\s\S]*?<\/div>/;
const card3NewBadges = `<div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">Pinecone</span></span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-indigo-400">🐘</span>pgvector</span>
                  </div>`;
txt = txt.replace(card3BadgesRegex, card3NewBadges);

// 5. Enhance Card 4 (LLMOps) by adding badges where there were none
const card4Regex = /<p className="text-slate-400 text-sm leading-relaxed max-w-xl">\s*Agentes que corren en producción exigen infraestructura.*?<\/p>/;
const card4NewContent = `<p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-8">
                    Agentes que corren en producción exigen infraestructura de grado empresarial. Monitoreo de latencia, tracking de costos por token, despliegues CI/CD y contenedores escalables sin fricción.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-amber-500">☁️</span>AWS</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-blue-400">☁️</span>Azure</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-emerald-500">●</span>OpenAI</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"><span className="text-orange-400">●</span>Anthropic</span>
                  </div>`;
txt = txt.replace(card4Regex, card4NewContent);


fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Merge complete!");
