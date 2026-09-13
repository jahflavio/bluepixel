const fs = require('fs');
let txt = fs.readFileSync('../index.html', 'utf8');

// Find the SocialProof section boundaries
const startMarker = '{/* Hard Proof Numbers';
const endMarker = '{/* Micro-callout: The UX Moat';
const start = txt.indexOf(startMarker);
const end = txt.indexOf(endMarker);

if (start === -1 || end === -1) {
  console.error('Could not find section markers');
  process.exit(1);
}

// Extract the section
let section = txt.substring(start, end);

// Revert sky -> emerald for stat numbers
section = section.replace(/text-sky-400 font-mono">#1/g, 'text-emerald-400 font-mono">#1');
section = section.replace(/text-sky-400 font-mono">99\.9%/g, 'text-emerald-400 font-mono">99.9%');
section = section.replace(/text-cyan-400 font-mono">200\+/g, 'text-emerald-300 font-mono">200+');

// Revert DesignRush badge
section = section.replace(/text-sky-400 font-semibold">DesignRush/, 'text-emerald-400 font-semibold">DesignRush');
section = section.replace(/text-cyan-400 font-bold">&gt;95%/, 'text-emerald-300 font-bold">&gt;95%');

// Put it back
txt = txt.substring(0, start) + section + txt.substring(end);

// Also revert the "El Secreto de Adopción" callout
txt = txt.replace(
  /text-sky-400 font-bold">✦ El Secreto de Adopción:/,
  'text-emerald-400 font-bold">✦ El Secreto de Adopción:'
);

fs.writeFileSync('../index.html', txt, 'utf8');
console.log('Reverted SocialProof stats to emerald colors');
console.log('Done!');
