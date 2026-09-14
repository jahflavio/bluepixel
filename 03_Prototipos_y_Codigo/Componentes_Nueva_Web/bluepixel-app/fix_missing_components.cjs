const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const sectionsPath = path.join(__dirname, 'restored_sections.json');

let appContent = fs.readFileSync(appPath, 'utf8');
const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));

let casesStr = sectionsData.cases;
const rightStr = sectionsData.right;
const faqStr = sectionsData.faq;

// Replace the image presentation with the SVG graph presentation
const rightColumnRegex = /\{\/\* Right Column: Image Presentation \*\/\}\s*<div className="md:w-\[55%\] lg:w-\[60%\] relative bg-black flex items-center justify-center overflow-hidden">[\s\S]*?<\/div>\s*<\/div>\s*\)\)}/m;

// Find the Right column string dynamically in casesStr
const rightColStart = casesStr.indexOf('{/* Right Column: Image Presentation */}');
const rightColEnd = casesStr.indexOf('</div>\n\n                  </div>\n                ))}');

if (rightColStart !== -1 && rightColEnd !== -1) {
  casesStr = casesStr.substring(0, rightColStart) + rightStr + casesStr.substring(rightColEnd);
}

// Inject before `const App = () => {`
if (!appContent.includes('const CaseStudiesSection')) {
  appContent = appContent.replace('const App = () => {', casesStr + '\n\n' + faqStr + '\n\nconst App = () => {');
  fs.writeFileSync(appPath, appContent, 'utf8');
  console.log("Successfully injected components into App.jsx");
} else {
  console.log("CaseStudiesSection already present");
}
