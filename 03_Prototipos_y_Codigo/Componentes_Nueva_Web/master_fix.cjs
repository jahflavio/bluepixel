const fs = require('fs');
const path = require('path');

function run() {
  const baseFile = path.join(__dirname, 'bluepixel-app', 'src', 'App_raw.html');
  const currentAppJsx = path.join(__dirname, 'bluepixel-app', 'src', 'App.jsx');
  const gitDiffFile = path.join(__dirname, 'found_case_study_utf8.txt');
  
  let baseContent = fs.readFileSync(baseFile, 'utf8');
  let diffContent = fs.readFileSync(gitDiffFile, 'utf8');

  // 1. Extract Vertical Menu CaseStudiesSection from found_case_study_utf8.txt
  const caseStartStr = 'const CaseStudiesSection = ({ onOpenCase }) => {';
  let caseStart = diffContent.indexOf(caseStartStr);
  let caseEnd = diffContent.indexOf('+    const ThreeWaysToWork = () => {', caseStart);
  
  if (caseStart === -1 || caseEnd === -1) {
    console.error("Could not find CaseStudiesSection bounds in diff");
    return;
  }
  
  // Extract and clean the diff (remove leading '- ' or '-' or '+ ' or '+')
  let rawCaseBlock = diffContent.substring(caseStart, caseEnd);
  let cleanedCaseBlock = rawCaseBlock.split('\n').map(line => {
    if (line.startsWith('-    ')) return line.substring(1);
    if (line.startsWith('-   ')) return line.substring(1);
    if (line.startsWith('-  ')) return line.substring(1);
    if (line.startsWith('- ')) return line.substring(2);
    if (line.startsWith('-')) return line.substring(1);
    if (line.startsWith('+ ')) return line.substring(2);
    if (line.startsWith('+')) return line.substring(1);
    return line;
  }).join('\n');

  // Update image paths to _v2
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/bimbo\.png/g, 'assets/bimbo_v2.jpg');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/radioshack\.png/g, 'assets/radioshack_v2.jpg');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/lifemiles\.png/g, 'assets/lifemiles_v2.jpg');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/iqos\.png/g, 'assets/iqos_v2.png');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/bimbo\.jpg/g, 'assets/bimbo_v2.jpg');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/radioshack\.jpg/g, 'assets/radioshack_v2.jpg');
  cleanedCaseBlock = cleanedCaseBlock.replace(/assets\/lifemiles\.jpg/g, 'assets/lifemiles_v2.jpg');

  // 2. In baseContent, replace the old CaseStudiesSection with the cleaned one
  const oldCaseStart = baseContent.indexOf('const CaseStudiesSection = ({ onOpenCase }) => {');
  let oldCaseEnd = baseContent.indexOf('const EngineeringLeadership = () => (');
  
  if (oldCaseStart === -1 || oldCaseEnd === -1) {
    console.error("Could not find old CaseStudiesSection bounds in App_raw.html");
    return;
  }

  // Find the exact line of EngineeringLeadership to replace up to it
  oldCaseEnd = baseContent.lastIndexOf('\n', oldCaseEnd) + 1;

  baseContent = baseContent.substring(0, oldCaseStart) + cleanedCaseBlock.trim() + '\n\n    ' + baseContent.substring(oldCaseEnd);

  // Write to index.html
  fs.writeFileSync(path.join(__dirname, 'index.html'), baseContent, 'utf8');
  console.log("Successfully wrote index.html");

  // 3. Extract JSX for App.jsx
  const jsxStartStr = '<script type="text/babel">';
  const jsxEndStr = '</script>';
  const jsxStart = baseContent.indexOf(jsxStartStr) + jsxStartStr.length;
  const jsxEnd = baseContent.lastIndexOf(jsxEndStr);

  if (jsxStart > jsxStartStr.length - 1 && jsxEnd !== -1) {
    let jsxContent = baseContent.substring(jsxStart, jsxEnd).trim();
    
    // Remove the ReactDOM.createRoot part and replace with export default App;
    const reactDomIdx = jsxContent.indexOf('ReactDOM.createRoot(');
    if (reactDomIdx !== -1) {
      jsxContent = jsxContent.substring(0, reactDomIdx).trim() + '\n\nexport default App;\n';
    }

    // Since App_raw.html didn't have React imports, add them if missing
    if (!jsxContent.includes('import React')) {
      jsxContent = `import React, { useState, useEffect, useRef } from 'react';\nimport './App.css';\n\n` + jsxContent;
    }

    fs.writeFileSync(currentAppJsx, jsxContent, 'utf8');
    console.log("Successfully wrote App.jsx");
  } else {
    console.error("Could not extract JSX from baseContent");
  }
}

run();
