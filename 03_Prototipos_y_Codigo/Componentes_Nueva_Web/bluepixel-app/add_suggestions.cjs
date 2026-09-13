const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

const targetStr = `              <textarea
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onFocus={handleFocus}
                placeholder={isManualMode ? "Escribe aquí la peor fricción manual de tu empresa..." : placeholderText}
                className="flex-1 bg-transparent text-white placeholder-slate-400 focus:placeholder-slate-600 text-sm focus:outline-none resize-none mt-1 min-h-[60px] cursor-text"
                spellCheck="false"
              />
            </div>`;

const suggestionChips = `
            {/* Suggestion Chips */}
            <div className={\`mt-4 flex flex-wrap gap-2 transition-opacity duration-500 \${isManualMode ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}\`}>
               <button type="button" onClick={() => { setInputVal(PRESETS[0].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Cotizaciones lentas</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[1].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Conciliación SAP</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[2].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Fuga en Checkout</button>
            </div>`;

if(txt.includes(targetStr) && !txt.includes('Suggestion Chips')) {
    txt = txt.replace(targetStr, targetStr + suggestionChips);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Suggestion chips added!");
} else {
    // If hidden mode isn't what we want, we can just make them always visible.
    // Actually, making them always visible is better for affordance so people know what to click.
    
    const visibleChips = `
            {/* Suggestion Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
               <button type="button" onClick={() => { setInputVal(PRESETS[0].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Cotizaciones lentas</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[1].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Conciliación SAP</button>
               <button type="button" onClick={() => { setInputVal(PRESETS[2].prompt); setIsManualMode(true); setPlaceholderText(''); }} className="text-[10px] font-sans bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-full px-3 py-1.5 text-slate-400 hover:text-blue-300 transition-colors">Fuga en Checkout</button>
            </div>`;
    txt = txt.replace(targetStr, targetStr + visibleChips);
    fs.writeFileSync('../index.html', txt, 'utf8');
    console.log("Suggestion chips added (always visible)!");
}
