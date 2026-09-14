const fs = require('fs');
const Babel = require('@babel/standalone');

const txt = fs.readFileSync('../index.html', 'utf8');
const startTag = '<script type="text/babel">';
const endTag = '</script>';

const startIndex = txt.indexOf(startTag) + startTag.length;
let scriptStr = txt.substring(startIndex, txt.indexOf(endTag, startIndex));

try {
  Babel.transform(scriptStr, { presets: ['react'] });
  console.log("Syntax is valid!");
} catch (e) {
  console.error("Syntax Error found:");
  console.error(e.message);
}
