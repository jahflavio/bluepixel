const fs = require('fs');
const path = require('path');

const landingsDir = path.join(__dirname, '..', 'landings');
const files = fs.readdirSync(landingsDir).filter(f => f.endsWith('.html'));

let processedCount = 0;

files.forEach(file => {
  const filePath = path.join(landingsDir, file);
  let txt = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix CSS layout (Padding and border conflicts)
  // The bad regex was: className="bg-[#03050a]/80 backdrop-blur-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl
  const badCssRegex = /className="bg-\[#03050a\]\/80 backdrop-blur-3xl border border-white\/5 shadow-\[0_0_50px_rgba\(0,0,0,0\.5\)\] rounded-2xl/g;
  if (txt.match(badCssRegex)) {
    // Add padding back and remove the redundant border-white/5 (since they already have hover borders)
    txt = txt.replace(badCssRegex, 'className="bg-[#03050a]/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl p-6 md:p-8');
    changed = true;
  }

  // 2. Inject useEffect for lucide icons in TerminalSim
  const terminalHookRegex = /const isFinished = step >= data\.steps\.length;/g;
  const terminalHookReplacement = `const isFinished = step >= data.steps.length;
      useEffect(() => { if (window.lucide) window.lucide.createIcons(); });`;
  
  if (txt.match(terminalHookRegex) && !txt.includes('window.lucide.createIcons(); });')) {
    txt = txt.replace(terminalHookRegex, terminalHookReplacement);
    changed = true;
  }

  // 3. Inject useEffect for lucide icons in NodeFlowSim
  const nodeFlowHookRegex = /const isFinished = step > data\.nodes\.length;/g;
  const nodeFlowHookReplacement = `const isFinished = step > data.nodes.length;
      useEffect(() => { if (window.lucide) window.lucide.createIcons(); });`;
  
  if (txt.match(nodeFlowHookRegex) && !txt.includes('const isFinished = step > data.nodes.length;\n      useEffect(() => { if (window.lucide) window.lucide.createIcons(); });')) {
    txt = txt.replace(nodeFlowHookRegex, nodeFlowHookReplacement);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, txt, 'utf8');
    processedCount++;
  }
});

console.log(`Successfully repaired ${processedCount} landing pages (Layout + Lucide React Fix).`);
