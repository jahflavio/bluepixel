const fs = require('fs');
const path = require('path');

const landingsDir = path.join(__dirname, '..', 'landings');
const files = fs.readdirSync(landingsDir).filter(f => f.endsWith('.html'));

// VSTORM-STYLE REPLACEMENTS

// 1. TerminalSim
const terminalSimRegex = /const TerminalSim = \(\{ data \}\) => \{[\s\S]*?return \([\s\S]*?<div className="bg-navy-900 border border-white\/10 rounded-2xl p-6 shadow-2xl relative z-10 w-full flex flex-col overflow-hidden min-h-\[360px\]">[\s\S]*?<\/div>\s*\);\s*\};/m;

const newTerminalSim = `const TerminalSim = ({ data }) => {
      const step = useSimTimer(data.steps.length);
      const isFinished = step >= data.steps.length;
      return (
        <div className="relative z-10 w-full flex flex-col overflow-hidden min-h-[360px] rounded-2xl border border-white/5 bg-[#03050a]/80 backdrop-blur-3xl shadow-[0_0_80px_rgba(59,130,246,0.15)] group perspective-1000">
          
          {/* Abstract Vstorm Grid Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* macOS Controls */}
          <div className="relative z-10 mb-4 flex items-center justify-between border-b border-white/5 px-6 py-4 bg-white/[0.01]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
              {isFinished ? 'PROCESS: TERMINATED' : 'PROCESS: RUNNING'} 
              <span className={\`w-1.5 h-1.5 rounded-full \${isFinished ? 'bg-slate-500' : 'bg-emerald-400 animate-pulse'}\`}></span>
            </span>
          </div>
          
          <div className="relative z-10 flex-1 flex flex-col justify-center space-y-5 px-8 pb-6">
            {data.steps.map((s, index) => {
              const isPast = index < step; const isActive = index === step; const isFuture = index > step;
              const tagMatch = s.match(/^\\[(.*?)\\]\\s*(.*)$/);
              let tag = null, text = s;
              if (tagMatch) { tag = tagMatch[1]; text = tagMatch[2]; }
              
              const tagColors = {
                 'INFO': 'text-blue-400',
                 'WARN': 'text-yellow-400',
                 'CRITICAL': 'text-red-400',
                 'ACTION': 'text-emerald-400',
                 'AGENT': 'text-purple-400',
                 'USER': 'text-slate-300'
              };
              const tagColor = tag ? (tagColors[tag] || 'text-slate-500') : '';

              return (
                <div key={index} className={\`flex items-start gap-4 transition-all duration-500 \${isFuture ? 'opacity-20 translate-y-2' : isActive ? 'opacity-100 translate-y-0 scale-105 transform origin-left' : 'opacity-60 translate-y-0'}\`}>
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    {isPast && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    {isActive && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>}
                    {isFuture && <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                       {tag && <span className={\`text-[9px] font-bold font-mono uppercase tracking-wider \${tagColor}\`}>{tag}</span>}
                    </div>
                    <span className={\`text-sm font-mono leading-relaxed \${isActive ? 'text-white' : isPast ? 'text-slate-300' : 'text-slate-500'}\`}>{text}</span>
                  </div>
                </div>
              );
            })}
            
            {isFinished && (
              <div className="mt-6 p-5 bg-emerald-500/[0.03] rounded-xl border border-emerald-500/10 animate-fade-in flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{data.result_title}</p>
                </div>
                <p className="text-sm font-bold text-white font-mono">{data.result_value}</p>
              </div>
            )}
          </div>
        </div>
      );
    };`;

// 2. NodeFlowSim (Vstorm diagonal graph aesthetic)
const nodeFlowSimRegex = /const NodeFlowSim = \(\{ data \}\) => \{[\s\S]*?return \([\s\S]*?<div className="bg-navy-950 rounded-2xl shadow-2xl relative z-10 w-full min-h-\[360px\] flex flex-col font-sans p-6 border border-white\/10 overflow-hidden items-center justify-center">[\s\S]*?<\/div>\s*\);\s*\};/m;

const newNodeFlowSim = `const NodeFlowSim = ({ data }) => {
      const step = useSimTimer(data.nodes.length + 1);
      const isFinished = step > data.nodes.length;
      return (
        <div className="relative z-10 w-full min-h-[400px] flex flex-col font-sans border border-white/5 bg-[#03050a]/80 backdrop-blur-2xl rounded-2xl overflow-hidden items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.05)]">
           
           {/* Deep Glows */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

           <div className="relative z-10 w-full h-full p-8 flex flex-col items-center">
              
              <div className="text-center mb-12">
                 <p className="text-[9px] text-slate-500 mb-4 font-mono uppercase tracking-widest">{data.trigger_label}</p>
                 <div className={\`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-xl relative transition-all duration-700 \${step > 0 ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-white/5 border border-white/10 text-slate-500'}\`}>
                    <i data-lucide={data.trigger_icon} className="w-5 h-5"></i>
                 </div>
              </div>
              
              <div className="relative w-full max-w-lg h-32 flex justify-between items-center px-4">
                 
                 {/* Diagonal/Curved SVG Connections */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{zIndex: 0}}>
                    {data.nodes.map((_, idx) => {
                       if(idx === data.nodes.length - 1) return null;
                       const startX = 10 + (idx * (80 / (data.nodes.length - 1))) + '%';
                       const endX = 10 + ((idx + 1) * (80 / (data.nodes.length - 1))) + '%';
                       const isActive = step > idx + 1;
                       const y1 = idx % 2 === 0 ? '30%' : '70%';
                       const y2 = (idx + 1) % 2 === 0 ? '30%' : '70%';
                       return (
                         <g key={\`path-\${idx}\`}>
                           <path id={\`flow-\${idx}\`} d={\`M \${idx === 0 ? 50 : 150} \${idx % 2 === 0 ? 40 : 80} Q 200 60 \${idx === 0 ? 150 : 250} \${(idx + 1) % 2 === 0 ? 40 : 80}\`} stroke={isActive ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" strokeDasharray="4 4" fill="none" className="transition-all duration-1000" />
                         </g>
                       )
                    })}
                    {/* Simplified straight line for 3 nodes */}
                    <line x1="16%" y1="50%" x2="50%" y2="50%" stroke={step > 1 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.05)'} strokeWidth="1.5" />
                    <line x1="50%" y1="50%" x2="84%" y2="50%" stroke={step > 2 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.05)'} strokeWidth="1.5" />
                    
                    {/* Animated Tracer */}
                    {step > 0 && step <= data.nodes.length && (
                      <circle r="3" fill="#60A5FA" filter="blur(1px)">
                        <animate attributeName="cx" values="16%;50%;84%" dur="2s" repeatCount="1" fill="freeze" />
                        <animate attributeName="cy" values="50%;50%;50%" dur="2s" repeatCount="1" fill="freeze" />
                      </circle>
                    )}
                 </svg>
                 
                 {data.nodes.map((node, idx) => {
                    const isNodeActive = step > idx;
                    return (
                       <div key={idx} className="text-center relative z-10 w-24">
                          <div className={\`w-10 h-10 mx-auto flex items-center justify-center text-lg rounded-full border transition-all duration-700 backdrop-blur-md \${isNodeActive ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-[#060A14] border-white/10 text-slate-600'}\`}>
                             <i data-lucide={node.icon} className="w-4 h-4"></i>
                          </div>
                          <p className={\`text-[9px] mt-3 font-mono uppercase tracking-wider transition-colors \${isNodeActive ? 'text-white' : 'text-slate-600'}\`}>
                             {isNodeActive ? node.success_label : 'Pending'}
                          </p>
                       </div>
                    );
                 })}
              </div>
              
              <div className={\`mt-12 bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl text-center transition-all duration-1000 w-full max-w-sm \${isFinished ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-0 translate-y-8'}\`}>
                 <p className="text-white font-bold text-sm flex items-center justify-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    {data.result_title}
                 </p>
                 <p className="text-[11px] font-mono text-slate-400">{data.result_value}</p>
              </div>
           </div>
        </div>
      );
    };`;

let processedCount = 0;

files.forEach(file => {
  const filePath = path.join(landingsDir, file);
  let txt = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (txt.match(terminalSimRegex)) {
    txt = txt.replace(terminalSimRegex, newTerminalSim);
    changed = true;
  }
  
  if (txt.match(nodeFlowSimRegex)) {
    txt = txt.replace(nodeFlowSimRegex, newNodeFlowSim);
    changed = true;
  }

  // General glassmorphism updates for other components
  // Update generic rounded-2xl bg-navy-XXX to Vstorm glassy look
  const oldBgRegex = /className="bg-navy-[98]50[a-z0-9\-\/ ]*?rounded-2xl/g;
  if(txt.match(oldBgRegex)) {
    txt = txt.replace(oldBgRegex, 'className="bg-[#03050a]/80 backdrop-blur-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, txt, 'utf8');
    processedCount++;
  }
});

console.log(`Successfully updated ${processedCount} landing pages with Vstorm aesthetic.`);
