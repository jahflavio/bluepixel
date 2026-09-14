const fs = require('fs');

const indexHtmlPath = '../index.html';
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const oldThreeWays = fs.readFileSync('../../../old_three_ways_utf8.jsx', 'utf8');

const oldStart = oldThreeWays.indexOf('export const ThreeWaysToWork =');
const oldEnd = oldThreeWays.indexOf('};', oldStart) + 2;
let oldComponent = oldThreeWays.substring(oldStart, oldEnd);

oldComponent = oldComponent.replace('export const ThreeWaysToWork', '    const ThreeWaysToWork');
// Add some indentation
oldComponent = oldComponent.split('\n').map(line => '    ' + line).join('\n');
oldComponent = oldComponent.replace('        const ThreeWaysToWork', '    const ThreeWaysToWork');

oldComponent = oldComponent.replace(
  'className="py-24 px-6 md:px-12 bg-[#040711] border-t border-b border-white/[0.06]">',
  'className="py-24 px-6 md:px-12 bg-[#040711] border-t border-b border-white/[0.06] relative overflow-hidden">\n          \n          {/* Subtle Node-Network Grid Background */}\n          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: \'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)\', backgroundSize: \'40px 70px\', backgroundPosition: \'0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px\' }}></div>'
);
oldComponent = oldComponent.replace('<div className="max-w-7xl mx-auto">', '<div className="max-w-7xl mx-auto relative z-10">');

const curStart = indexHtml.indexOf('    const ThreeWaysToWork = () => {');
const curEndStr = '    const EngineeringLeadership = () => (';
const curEnd = indexHtml.indexOf(curEndStr);
const curComponentEnd = indexHtml.lastIndexOf('    };', curEnd) + 6;
const currentComponent = indexHtml.substring(curStart, curComponentEnd);

indexHtml = indexHtml.replace(currentComponent, oldComponent);

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('Successfully replaced ThreeWaysToWork');
