const fs = require('fs');

// Step 1: Fix double-encoding (UTF-8 read as Latin-1 then re-saved)
let buf = fs.readFileSync('../index.html');
let txt = Buffer.from(buf.toString('latin1'), 'utf8').toString('utf8');

// If that didn't work (file might already be properly UTF-8), just read as UTF-8
if (txt.includes('â€')) {
  // double-encoding artifact, the latin1 trick worked but produced garbage
  txt = buf.toString('utf8');
}

// Step 2: Fix remaining double-encoded sequences (Ã³ = ó, etc.)
txt = txt.replace(/Ã³/g, 'ó');
txt = txt.replace(/Ã©/g, 'é');
txt = txt.replace(/Ã­/g, 'í');
txt = txt.replace(/Ã¡/g, 'á');
txt = txt.replace(/Ã±/g, 'ñ');
txt = txt.replace(/Ãº/g, 'ú');

// Step 3: Fix remaining U+FFFD replacement characters
txt = txt.replace('CASOS DE \uFFFD\uFFFDXITO AUDITADOS', 'CASOS DE ÉXITO AUDITADOS');
txt = txt.replace(/¿\uFFFDQu\uFFFD/g, '¿Qué');
txt = txt.replace("desc: 'T\uFFFD entregamos", "desc: 'Te entregamos");
txt = txt.replace("te entregar\uFFFD un", "te entregará un");

// Step 4: Fix the substring crash (black screen bug)
txt = txt.replace(/line\.text\.substring/g, 'line.text?.substring');
txt = txt.replace(/line\.text\.includes/g, 'line.text?.includes');

// Step 5: Fix timeline - replace individual broken segments with single continuous line
const oldParent = '<div className="space-y-12 relative z-10">';
const newParent = `<div className="space-y-12 relative z-10">
                  {/* Single continuous timeline line */}
                  <div className="absolute left-[11px] top-[16px] bottom-[16px] w-[2px] bg-white/[0.05] z-0">
                    <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out\`} style={{height: ((activeStep / Math.max(steps.length - 1, 1)) * 100) + '%'}}></div>
                  </div>`;
txt = txt.replace(oldParent, newParent);

// Remove individual line segments
const segmentRegex = /\{\/\* Individual Line Segment \*\/\}[\s\S]*?\{idx !== steps\.length - 1[\s\S]*?<\/div>\s*\)}/;
txt = txt.replace(segmentRegex, '');

// Step 6: Fix timeline node - use box-shadow for clean line-through effect
const nodeMarker = '{/* Timeline Node */}';
const contentMarker = '{/* Content */}';
const nodeIdx = txt.indexOf(nodeMarker);
const contentIdx = txt.indexOf(contentMarker, nodeIdx);
if (nodeIdx !== -1 && contentIdx !== -1) {
  const newNode = `{/* Timeline Node */}
                        <div className="relative mt-1 shrink-0 z-10">
                          <div className={\`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] \${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                        </div>
                        
                        `;
  txt = txt.substring(0, nodeIdx) + newNode + txt.substring(contentIdx);
}

// Remove BOM if present
if (txt.charCodeAt(0) === 0xFEFF) txt = txt.slice(1);

fs.writeFileSync('../index.html', txt, 'utf8');

// Verify
const result = fs.readFileSync('../index.html', 'utf8');
console.log('Has red-500:', result.includes('red-500'));
console.log('Has navy-950:', result.includes('navy-950'));
console.log('Has emerald-400:', result.includes('emerald-400'));
console.log('Has purple-400:', result.includes('purple-400'));
console.log('Has sky-500 (should be false):', result.includes('sky-500'));
console.log('Has Ã³ (should be 0):', (result.match(/Ã³/g)||[]).length);
console.log('Has FFFD (should be 0):', (result.match(/\uFFFD/g)||[]).length);
console.log('Has continuous line:', result.includes('Single continuous timeline'));
console.log('Has box-shadow node:', result.includes('shadow-[0_0_0_4px'));
console.log('Done!');
