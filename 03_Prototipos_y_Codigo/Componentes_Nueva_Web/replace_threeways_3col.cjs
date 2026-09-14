const fs = require('fs');
const path = require('path');

function replaceThreeWays() {
  // Read the good original ThreeWaysToWork from App_raw.html
  const rawHtmlPath = path.join(__dirname, 'bluepixel-app', 'src', 'App_raw.html');
  const rawContent = fs.readFileSync(rawHtmlPath, 'utf8');
  
  const startStr = 'const ThreeWaysToWork = ({ onSelectPackage }) => {';
  let endStr = '};\n\n      // Casos de éxito con Métricas Financieras (Case Studies)';
  
  let startIndex = rawContent.indexOf(startStr);
  let endIndex = rawContent.indexOf(endStr);
  
  if (endIndex === -1) {
    // try different search
    endStr = '};\n\n      // Casos de';
    endIndex = rawContent.indexOf(endStr);
  }
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not extract ThreeWaysToWork from App_raw.html');
    // Let's use a fallback extraction
    const rawLines = rawContent.split('\n');
    let sIdx = -1;
    let eIdx = -1;
    for (let i=0; i<rawLines.length; i++) {
        if (rawLines[i].includes('const ThreeWaysToWork = ({ onSelectPackage }) => {')) {
            sIdx = i;
        }
        if (sIdx !== -1 && i > sIdx && rawLines[i].includes('const CaseStudiesSection =')) {
            eIdx = i;
            break;
        }
    }
    
    if (sIdx !== -1 && eIdx !== -1) {
        startIndex = rawContent.indexOf(rawLines[sIdx]);
        endIndex = rawContent.indexOf(rawLines[eIdx]);
    } else {
        return;
    }
  }

  // The extracted good component
  let goodComponent = rawContent.substring(startIndex, endIndex).trim();

  // Now replace in index.html and App.jsx
  const filesToUpdate = [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'bluepixel-app', 'src', 'App.jsx')
  ];

  filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the CURRENT ThreeWaysToWork in the file
    // Note: It might be `const ThreeWaysToWork = () => {` or `const ThreeWaysToWork = ({ ... }) => {`
    let curStart = content.indexOf('const ThreeWaysToWork = () => {');
    if (curStart === -1) {
      curStart = content.indexOf('const ThreeWaysToWork = ({');
    }
    
    if (curStart === -1) {
      console.log(`Could not find current ThreeWaysToWork in ${file}`);
      return;
    }

    // Find where it ends (before FAQSection or CaseStudiesSection or whatever is next)
    let curEnd = content.indexOf('const FAQSection = () => {');
    if (curEnd === -1) {
        curEnd = content.indexOf('const CaseStudiesSection =');
    }
    if (curEnd === -1) {
        // Just look for the next const
        curEnd = content.indexOf('const ', curStart + 50);
    }

    if (curEnd !== -1) {
      const finalContent = content.substring(0, curStart) + goodComponent + '\n\n' + content.substring(curEnd);
      fs.writeFileSync(file, finalContent, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not find end of ThreeWaysToWork in ${file}`);
    }
  });
}

replaceThreeWays();
