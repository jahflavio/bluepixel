const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// The start of the block we want to replace
const blockStart = `<div className="lg:col-span-4 relative pl-4 md:pl-0">`;
const blockEnd = `              {/* Right Column: Terminal & Metrics */}`;

const startIndex = txt.indexOf(blockStart);
const endIndex = txt.indexOf(blockEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const oldBlock = txt.substring(startIndex, endIndex);

  const newBlock = `<div className="lg:col-span-4 relative pl-4 md:pl-0">
                <div className="relative z-10">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    
                    return (
                      <div key={idx} className="flex gap-6 relative">
                        
                        {/* Timeline Node & Line Segment */}
                        <div className="flex flex-col items-center shrink-0 w-6">
                          {/* Node */}
                          <div className={\`w-6 h-6 shrink-0 mt-1 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] z-10 relative \${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                          
                          {/* Segment Line */}
                          {idx !== steps.length - 1 && (
                            <div className="w-[2px] flex-grow bg-white/[0.05] my-2 rounded-full overflow-hidden min-h-[48px]">
                              <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out \${isPast ? 'h-full' : 'h-0'}\`}></div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className={\`transition-opacity duration-500 flex-1 \${idx !== steps.length - 1 ? 'pb-12' : ''} \${isActive || isPast ? 'opacity-100' : 'opacity-40'}\`}>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-red-400 font-bold">{step.id}</span>
                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

`;

  txt = txt.replace(oldBlock, newBlock);
  fs.writeFileSync('../index.html', txt, 'utf8');
  console.log("Successfully replaced the timeline block to fix the line issue!");
} else {
  console.error("Could not find block boundaries!");
}
