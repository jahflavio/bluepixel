const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = `          <div className="mb-6 opacity-60">
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">/system/core</span> <span className="text-slate-500">initialize_agentic_context</span>
            <div className="text-slate-400 mt-2 text-xs">[OK] Context loaded. Awaiting manual friction input...</div>
          </div>`;

txt = txt.replace(targetStr, '');

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Distracting code removed from terminal!");
