const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Speed up typing delay (was 800 + Math.random() * 800)
txt = txt.replace(
  'setTimeout(processNextLog, 800 + Math.random() * 800); // Random typing delay',
  'setTimeout(processNextLog, 150 + Math.random() * 200); // Random typing delay'
);

// Speed up step transition delay (was 1500)
txt = txt.replace(
  'setTimeout(processNextLog, 1500); // Wait before next step',
  'setTimeout(processNextLog, 400); // Wait before next step'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log("Timeline animation sped up successfully!");
