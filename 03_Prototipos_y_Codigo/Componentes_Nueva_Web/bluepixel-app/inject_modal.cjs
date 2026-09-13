const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = `<SolutionDrawer 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
            onOpenContact={() => scrollToForm()} 
          />`;

const modalStr = `
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
              <div className="bg-navy-900 border border-white/[0.08] rounded-2xl w-full max-w-4xl relative overflow-hidden my-auto shadow-2xl">
                <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 z-50 text-sm transition-colors">✕</button>
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-6">
                  <MultiStepContact preselectedPackage={preselectedPkg} />
                </div>
              </div>
            </div>
          )}`;

if (txt.includes(targetStr) && !txt.includes('isContactOpen && (')) {
    txt = txt.replace(targetStr, targetStr + modalStr);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Modal injected successfully!");
} else {
    console.log("Could not inject modal. Check if it's already there or target string changed.");
}
