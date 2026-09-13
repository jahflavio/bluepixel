const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// 1. Add useRef to HeroPromptEngine
txt = txt.replace('const [isManualMode, setIsManualMode] = useState(false);', 'const [isManualMode, setIsManualMode] = useState(false);\n  const textareaRef = React.useRef(null);');

// 2. Add ref to textarea
txt = txt.replace(
  'onChange={(e) => setInputVal(e.target.value)}',
  'onChange={(e) => setInputVal(e.target.value)}\n                ref={textareaRef}'
);

// 3. Add onClick to Glass Terminal div
// It looks like: <div className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]">
txt = txt.replace(
  '<div className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]">',
  '<div onClick={() => { if(textareaRef.current) textareaRef.current.focus(); }} className="relative bg-[#060A14]/90 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] cursor-text">'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Entire terminal is now clickable!");
