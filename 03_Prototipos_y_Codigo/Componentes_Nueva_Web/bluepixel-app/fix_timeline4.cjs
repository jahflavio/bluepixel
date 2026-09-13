const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Find and replace the timeline node section using indexOf
const marker = 'Timeline Node */}';
const idx = txt.indexOf(marker);
if (idx === -1) {
  console.error('Timeline Node marker not found!');
  process.exit(1);
}

// Find the end of this node block (the closing </div> of the wrapper)
// Pattern: from "Timeline Node" to the "{/* Content */}" comment
const contentMarker = '{/* Content */}';
const endIdx = txt.indexOf(contentMarker, idx);
if (endIdx === -1) {
  console.error('Content marker not found!');
  process.exit(1);
}

const oldBlock = txt.substring(idx, endIdx);
console.log('Old block:', JSON.stringify(oldBlock));

const newBlock = `Timeline Node */}
                        <div className="relative mt-1 shrink-0 z-10">
                          <div className={\`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(15,23,42)] \${isActive ? 'border-sky-500 bg-slate-950' : isPast ? 'border-sky-500 bg-sky-500' : 'border-white/[0.2] bg-slate-950'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                            )}
                          </div>
                        </div>
                        
                        `;

txt = txt.substring(0, idx) + newBlock + txt.substring(endIdx);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed timeline nodes with box-shadow mask!');
