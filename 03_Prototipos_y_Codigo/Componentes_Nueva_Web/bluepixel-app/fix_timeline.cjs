const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Step 1: Add a single continuous vertical line in the parent container
const oldParent = '<div className="space-y-12 relative z-10">';
const newParent = `<div className="space-y-12 relative z-10">
                  {/* Single continuous timeline line */}
                  <div className="absolute left-[11px] top-[16px] bottom-[16px] w-[2px] bg-white/[0.05] z-0">
                    <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out\`} style={{height: ((activeStep / Math.max(steps.length - 1, 1)) * 100) + '%'}}></div>
                  </div>`;

txt = txt.replace(oldParent, newParent);

// Step 2: Remove the old individual line segments
// Match the pattern for the individual line segment block
const oldSegment = `{/* Individual Line Segment */}
                        {idx !== steps.length - 1 && (
                          <div className="absolute left-[11px] top-7 w-[2px] bg-white/[0.05] z-0 h-[calc(100%+24px)]">
                            <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out \${activeStep > idx ? 'h-full' : 'h-0'}\`}></div>
                          </div>
                        )}`;

if (txt.includes(oldSegment)) {
  txt = txt.replace(oldSegment, '');
  console.log('Removed old individual line segment');
} else {
  // Try to find and remove with a regex approach
  const regex = /\{\/\* Individual Line Segment \*\/\}[\s\S]*?\{idx !== steps\.length - 1[\s\S]*?<\/div>\s*\)}/;
  if (regex.test(txt)) {
    txt = txt.replace(regex, '');
    console.log('Removed old individual line segment (regex)');
  } else {
    console.log('WARNING: Could not find old line segment to remove');
  }
}

fs.writeFileSync('../index.html', txt, 'utf8');

// Verify
const result = fs.readFileSync('../index.html', 'utf8');
console.log('Has continuous line:', result.includes('Single continuous timeline line'));
console.log('Has old individual line:', result.includes('Individual Line Segment'));
console.log('Done!');
