const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Fix 1: Remove the bg-slate-950 from the timeline node wrapper div
// This background was blocking the continuous line from being visible
txt = txt.replace(
  '<div className="relative mt-1 shrink-0 z-10 bg-slate-950">',
  '<div className="relative mt-1 shrink-0 z-10">'
);

// Fix 2: The circles already have their own bg - no change needed there

// Fix 3: Adjust the continuous line to start exactly at first circle center 
// and end at last circle center. Each circle is w-6 h-6 (24px) with mt-1 (4px).
// Center of first circle = 4px + 12px = 16px. That's top-[16px] which is already set.
// For bottom, center of last circle from bottom is also ~16px.
// But space-y-12 = 48px gaps. The line needs to account for these.
// Actually, the issue might be the line is z-0 but circles are z-10 with opaque bg.
// By removing bg-slate-950 from wrapper, the line should show through.

// Fix 4: Give circle nodes a small padding with bg to create the "node on line" effect
txt = txt.replace(
  /(<div className=\{`w-6 h-6 rounded-full flex items-center justify-center border-2)/g,
  '<div className="absolute inset-[-3px] bg-slate-950 rounded-full"></div>\n                            $1'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed timeline - removed opaque backgrounds blocking the line');
console.log('Done!');
