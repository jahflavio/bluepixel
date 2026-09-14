const fs = require('fs');
const path = require('path');

function restoreInFile(filename) {
  const filePath = path.join(__dirname, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if ThreeWaysToWork already exists
  if (content.indexOf('const ThreeWaysToWork = () => {') !== -1) {
    console.log(`ThreeWaysToWork already exists in ${filename}`);
    return;
  }

  const faqIndex = content.indexOf('const FAQSection = () => {');
  if (faqIndex === -1) {
    console.error(`Could not find FAQSection in ${filename}`);
    return;
  }

  const threeWaysComponent = `
    const ThreeWaysToWork = () => {
      return (
        <section id="three-ways" className="py-32 px-6 md:px-12 bg-[#02040A] border-t border-b border-white/[0.05] relative overflow-hidden">
          
          {/* Subtle Node-Network Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)', backgroundSize: '40px 70px', backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px' }}></div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
               
            {/* Left Copy (Vstorm Style) */}
            <div className="lg:w-5/12 z-10 relative">
              <span className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                METODOLOGÍA BLUEPIXEL
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-8 leading-[1.1]">
                Cómo trabajamos — IA agentizada desde el <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">plan</span> hasta <br/> producción con hitos claros.
              </h2>
              
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
                Tras múltiples despliegues en corporativos, codificamos lo que separa los sistemas en producción de los experimentos fallidos. Una metodología de fases con "puertas de control" claras, para guiarte a través de las trampas técnicas hacia un ROI medible.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
                  Agendar Discovery ↗
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2">
                  Ver el proceso detallado ↗
                </button>
              </div>
            </div>
   
            {/* Right Diagonal Timeline Graph (Vstorm Style) */}
            <div className="lg:w-7/12 w-full h-[500px] relative flex items-center justify-center">
                 
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[400px]">
                {/* Connecting Diagonal Line */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {/* Base line */}
                  <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  {/* Active highlight segment (between POC and Production) */}
                  <line x1="70%" y1="30%" x2="75%" y2="25%" stroke="#3B82F6" strokeWidth="2" className="drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                </svg>

                {/* Nodes */}
                {/* 1. Today */}
                <div className="absolute left-[10%] top-[90%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#02040A] border border-slate-500 mb-2"></div>
                  <span className="text-[10px] font-mono text-slate-500">today</span>
                </div>
   
                {/* 2. Discover */}
                <div className="absolute left-[30%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#02040A] border border-slate-400 mb-2"></div>
                  <span className="text-[10px] font-mono text-slate-400">discover</span>
                </div>
                
                {/* Text Label on line */}
                <span className="absolute left-[40%] top-[60%] -translate-x-1/2 -translate-y-1/2 text-[8px] font-mono text-slate-600 uppercase -rotate-45 tracking-widest">ROI MAP</span>
   
                {/* 3. Prioritize */}
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#02040A] border border-slate-400 mb-2"></div>
                  <span className="text-[10px] font-mono text-slate-400">prioritize</span>
                </div>
   
                {/* Text Label on line */}
                <span className="absolute left-[60%] top-[40%] -translate-x-1/2 -translate-y-1/2 text-[8px] font-mono text-slate-600 uppercase -rotate-45 tracking-widest">DE-RISK</span>
   
                {/* 4. POC (Highlighted Node) */}
                <div className="absolute left-[70%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                  {/* Dashed outer ring */}
                  <div className="absolute inset-0 -m-4 border border-dashed border-slate-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  {/* The Node */}
                  <div className="w-12 h-12 rounded-full bg-[#0A0F1D] border border-slate-400 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                  </div>
                  {/* Red Dot Indicator (as seen in Vstorm) but making it Blue to match brand */}
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                  
                  <span className="absolute top-16 text-[10px] font-mono text-slate-300">poc</span>
                </div>

                {/* 5. Production */}
                <div className="absolute left-[90%] top-[10%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#02040A] border border-slate-400 mb-2"></div>
                  <span className="text-[10px] font-mono text-slate-500">production</span>
                </div>
   
              </div>
            </div>

          </div>
        </section>
      );
    };
`;

  const finalContent = content.substring(0, faqIndex) + threeWaysComponent + '\n\n' + content.substring(faqIndex);
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log(`Successfully restored ThreeWaysToWork in ${filename}`);
}

restoreInFile('index.html');
restoreInFile('bluepixel-app/src/App.jsx');
