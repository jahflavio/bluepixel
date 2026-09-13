const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// ============================================================
// BLUEPIXEL BRAND COLOR REMAPPING
// ============================================================
// Logo color: #29ABE2 (cyan-blue) — maps to Tailwind sky-500
// Primary accent: sky (replaces red as the main action color)
// Secondary accent: cyan (replaces emerald for highlight/badges)
// Gradient: sky -> blue (replaces blue -> indigo/purple)
// Background: slate-950 (replaces custom navy-950)
// ============================================================

// --- 1. Replace RED accent (CTA, timeline, active states) with SKY ---
txt = txt.replace(/red-500/g, 'sky-500');
txt = txt.replace(/red-400/g, 'sky-400');
txt = txt.replace(/rgba\(239,68,68,0\.8\)/g, 'rgba(14,165,233,0.8)');  // red glow -> sky glow
txt = txt.replace(/rgba\(239,68,68,0\.3\)/g, 'rgba(14,165,233,0.3)');

// --- 2. Replace EMERALD accent with CYAN ---
txt = txt.replace(/emerald-500/g, 'cyan-500');
txt = txt.replace(/emerald-400/g, 'cyan-400');
txt = txt.replace(/emerald-300/g, 'cyan-300');

// --- 3. Replace PURPLE accent with SKY-lighter ---
txt = txt.replace(/purple-600/g, 'sky-600');
txt = txt.replace(/purple-500/g, 'sky-500');
txt = txt.replace(/purple-400/g, 'sky-400');
txt = txt.replace(/purple-300/g, 'sky-300');

// --- 4. Replace AMBER accent with TEAL ---
txt = txt.replace(/amber-400/g, 'teal-400');

// --- 5. Replace NAVY custom colors with SLATE equivalents ---
txt = txt.replace(/navy-950/g, 'slate-950');
txt = txt.replace(/navy-900/g, 'slate-900');
txt = txt.replace(/navy-850/g, 'slate-900');
txt = txt.replace(/navy-800/g, 'slate-800');
txt = txt.replace(/navy-750/g, 'slate-800');
txt = txt.replace(/navy-700/g, 'slate-700');

// --- 6. Adjust gradients to be sky-based ---
// Hero title gradient: was blue-400 via indigo-300 to purple-400
txt = txt.replace(
  'from-blue-400 via-indigo-300 to-purple-400',
  'from-sky-400 via-cyan-300 to-blue-400'
);

// Logo gradient
txt = txt.replace(
  'from-blue-600 to-indigo-500',
  'from-sky-500 to-cyan-400'
);
txt = txt.replace(
  'shadow-blue-500/30',
  'shadow-sky-500/30'
);

// CTA button gradients  
txt = txt.replace(/from-blue-600 to-blue-500/g, 'from-sky-500 to-sky-400');
txt = txt.replace(/from-indigo-600 to-blue-500/g, 'from-sky-600 to-sky-400');
txt = txt.replace(/from-indigo-500 to-blue-500/g, 'from-sky-500 to-cyan-400');

// --- 7. Replace remaining blue shades to sky ---
txt = txt.replace(/blue-600/g, 'sky-600');
txt = txt.replace(/blue-500/g, 'sky-500');
txt = txt.replace(/blue-400/g, 'sky-400');
txt = txt.replace(/blue-300/g, 'sky-300');
txt = txt.replace(/blue-900/g, 'sky-900');

// --- 8. Indigo -> sky ---
txt = txt.replace(/indigo-600/g, 'sky-600');
txt = txt.replace(/indigo-500/g, 'sky-500');
txt = txt.replace(/indigo-400/g, 'sky-400');
txt = txt.replace(/indigo-300/g, 'sky-300');

// --- 9. Replace the logo section with the new BluePixel logo ---
const oldLogo = `<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/30">
              BP
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tight text-lg leading-none">BluePixel</span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">ENGINEERING & AI</span>
            </div>`;

const newLogo = `<div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-sky-500 rounded-sm shadow-lg shadow-sky-500/30"></div>
              <span className="text-white font-black tracking-tight text-lg leading-none">BluePixel</span>
            </div>`;

txt = txt.replace(oldLogo, newLogo);

// --- 10. Update the page title ---
txt = txt.replace(
  'BluePixel — Ingeniería de Agentes IA & Plataformas FutureProof',
  'BluePixel — Ingeniería Agentica & Plataformas FutureProof'
);

// --- 11. Replace the hero badge text to match brand ---
txt = txt.replace(
  'INGENIERÍA DE AGENTES IA & PLATAFORMAS FUTUREPROOF',
  'INGENIERÍA AGENTICA & PLATAFORMAS FUTUREPROOF'
);

fs.writeFileSync('../index.html', txt, 'utf8');

// Verify
const result = fs.readFileSync('../index.html', 'utf8');
console.log('Remaining red-:', (result.match(/red-\d+/g)||[]).length);
console.log('Remaining navy-:', (result.match(/navy-\d+/g)||[]).length);
console.log('Remaining purple-:', (result.match(/purple-\d+/g)||[]).length);
console.log('Has sky-500:', result.includes('sky-500'));
console.log('Has cyan-400:', result.includes('cyan-400'));
console.log('Has new logo pixel:', result.includes('bg-sky-500 rounded-sm'));
console.log('Done!');
