const fs = require('fs');

// Read the already-fixed index.html (UTF-8 clean)
const html = fs.readFileSync('../index.html', 'utf8');

// Extract the Babel script block
const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!match) {
  console.error('Babel script block not found!');
  process.exit(1);
}

let jsx = match[1];

// Replace the React destructure with proper ESM imports
jsx = jsx.replace(
  /const \{[^}]+\} = React;/,
  `import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronRight, ArrowRight, Zap, Target, Bot, Search, BarChart3, LineChart, Code2, Users, Rocket, CheckCircle2, Star, Shield, Clock, Brain, Cpu, MessageSquare, ChevronDown, Workflow } from 'lucide-react';`
);

// Replace the ReactDOM.createRoot render call with export default
jsx = jsx.replace(
  /const root = ReactDOM\.createRoot\(document\.getElementById\('root'\)\);\s*root\.render\(\s*<App \/>\s*\);/,
  'export default App;'
);

// If no match for the above pattern, try simpler variant
if (!jsx.includes('export default App')) {
  jsx = jsx.replace(
    /ReactDOM\.createRoot\(document\.getElementById\('root'\)\)\.render\(<App \/>\);/,
    'export default App;'
  );
}

// If still no export default, append it
if (!jsx.includes('export default App')) {
  jsx += '\nexport default App;\n';
}

fs.writeFileSync('src/App.jsx', jsx, 'utf8');

// Verify no corruption
const result = fs.readFileSync('src/App.jsx', 'utf8');
console.log('Contains "from \'react\'":', result.includes("from 'react'"));
console.log('Contains "lucide-react":', result.includes("lucide-react"));
console.log('Contains "export default App":', result.includes("export default App"));
console.log('Contains "áreact" (BAD):', result.includes("áreact"));
console.log('Contains U+FFFD:', (result.match(/\uFFFD/g) || []).length);
console.log('Done! App.jsx extracted cleanly.');
