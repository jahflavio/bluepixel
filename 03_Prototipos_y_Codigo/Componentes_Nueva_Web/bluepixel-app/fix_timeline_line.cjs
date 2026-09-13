const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// FIX 1: Make the activeStep reach steps.length so the last circle turns red
const oldUseEffect = `        const processNextLog = () => {
          if (!isRunning) return;

          if (currentStep < steps.length) {
            setActiveStep(currentStep);`;

const newUseEffect = `        const processNextLog = () => {
          if (!isRunning) return;

          if (currentStep < steps.length) {
            setActiveStep(currentStep);`;
            
const oldProcessLog = `            } else {
              currentStep++;
              currentLine = 0;
              setTimeout(processNextLog, 1500); // Wait before next step
            }
          }
        };`;

const newProcessLog = `            } else {
              currentStep++;
              currentLine = 0;
              setTimeout(processNextLog, 1500); // Wait before next step
            }
          } else {
            setActiveStep(steps.length); // Mark all as completed!
          }
        };`;

txt = txt.replace(oldProcessLog, newProcessLog);


// FIX 2: Restructure the timeline to avoid the line extending past the last circle.
// We remove the single absolute line and replace it with individual segments 
// inside a flex column alongside the dot.

const oldTimelineStart = `<div className="space-y-12 relative z-10">
                  {/* Single continuous timeline line */}
                  <div className="absolute left-[11px] top-[16px] bottom-[16px] w-[2px] bg-white/[0.05] z-0">
                    <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out\`} style={{height: ((activeStep / Math.max(steps.length - 1, 1)) * 100) + '%'}}></div>
                  </div>
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    
                    return (
                      <div key={idx} className="flex gap-6 relative">
                        
                        
                        {/* Timeline Node */}
                        <div className="relative mt-1 shrink-0 z-10">
                          <div className={\`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] \${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div>
                          <div className="flex items-center gap-3 mb-2">`;

const newTimelineStart = `<div className="relative z-10">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    
                    return (
                      <div key={idx} className="flex gap-6 relative">
                        
                        {/* Timeline Node & Line Segment */}
                        <div className="flex flex-col items-center shrink-0">
                          <div className={\`w-6 h-6 mt-1 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] z-10 relative \${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}\`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                          
                          {/* Segment Line */}
                          {idx !== steps.length - 1 && (
                            <div className="w-[2px] flex-grow bg-white/[0.05] my-1 rounded-full overflow-hidden">
                              <div className={\`w-full bg-red-500 transition-all duration-1000 ease-in-out \${isPast ? 'h-full' : 'h-0'}\`}></div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className={idx !== steps.length - 1 ? 'pb-12' : ''}>
                          <div className="flex items-center gap-3 mb-2">`;

// Also clean up any possible variations of the old timeline start in case regex fails
txt = txt.replace(oldTimelineStart, newTimelineStart);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Fixed timeline animation and line extension!');
