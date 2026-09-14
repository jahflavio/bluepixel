const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// The faulty injected string has `{\`` and `\${` and `\`}`
appContent = appContent.replace(/\{\\`relative/g, '{`relative');
appContent = appContent.replace(/\\`\}/g, '`}');
appContent = appContent.replace(/\\\$\{activeIndex/g, '${activeIndex');
appContent = appContent.replace(/\{\\`absolute/g, '{`absolute');

fs.writeFileSync(appPath, appContent, 'utf8');
console.log("Fixed backslash escapes in App.jsx");
