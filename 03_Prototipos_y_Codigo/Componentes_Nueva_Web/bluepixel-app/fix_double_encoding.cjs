const fs = require('fs');

// Read the double-encoded source file
let htmlContent = fs.readFileSync('../index.html', 'utf8');

// Fix double encoding: treating the utf8 string as latin1 bytes, then decoding back to utf8
htmlContent = Buffer.from(htmlContent, 'latin1').toString('utf8');

// Now extract the React code
const babelMatch = htmlContent.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (!babelMatch) {
  console.error("Babel script not found");
  process.exit(1);
}

let jsContent = babelMatch[1];

// Fix React destructured imports
jsContent = jsContent.replace(/const {[^}]+} = React;/g, "import React, { useState, useEffect, useRef } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { ChevronRight, ArrowRight, Zap, Target, Bot, Search, BarChart3, LineChart, Code2, Users, Rocket, CheckCircle2, Star, Shield, Clock, Brain, Cpu, MessageSquare, ChevronDown, Workflow } from 'lucide-react';");

// Remove ReactDOM.createRoot at the bottom
jsContent = jsContent.replace(/const root = ReactDOM\.createRoot\(document\.getElementById\('root'\)\);\s*root\.render\(\s*<App \/>\s*\);/, "export default App;");

// Save to App.jsx
fs.writeFileSync('src/App.jsx', jsContent, 'utf8');
console.log("Extracted and fixed double-encoding in src/App.jsx");
