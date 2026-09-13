const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');

// Replace the broken timeline node with a clean version
// The circle needs to sit ON TOP of the line with its own bg to mask the line
const broken = `{/* Timeline Node */}
                        <div className="relative mt-1 shrink-0 z-10">
                          <div className="absolute inset-[-3px] bg-slate-950 rounded-full"></div>
                            <div className={\`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-500 \${isActive ? 'border-sky-500 bg-slate-950' : isPast ? 'border-sky-500 bg-sky-500' : 'border-white/[0.2] bg-slate-950'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                            )}
                          </div>
                        </div>`;

const fixed = `{/* Timeline Node */}
                        <div className="relative mt-1 shrink-0 z-10">
                          <div className={\`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(15,23,42)] \${isActive ? 'border-sky-500 bg-slate-950' : isPast ? 'border-sky-500 bg-sky-500' : 'border-white/[0.2] bg-slate-950'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                            )}
                          </div>
                        </div>`;

if (txt.includes(broken)) {
  txt = txt.replace(broken, fixed);
  console.log('Replaced broken timeline node (exact match)');
} else {
  // Try regex approach
  const regex = /\{\/\* Timeline Node \*\/\}\s*<div className="relative mt-1 shrink-0 z-10">\s*<div className="absolute inset-\[-3px\] bg-slate-950 rounded-full"><\/div>\s*<div className=\{`w-6 h-6[\s\S]*?<\/div>\s*<\/div>/;
  if (regex.test(txt)) {
    txt = txt.replace(regex, fixed);
    console.log('Replaced broken timeline node (regex)');
  } else {
    console.log('WARNING: Could not find broken timeline node');
    // Debug: show what's around "Timeline Node"
    const idx = txt.indexOf('Timeline Node');
    if (idx !== -1) {
      console.log('Found at:', idx);
      console.log('Content:', JSON.stringify(txt.substring(idx, idx+600)));
    }
  }
}

fs.writeFileSync('index.html', txt, 'utf8');
console.log('Done!');
