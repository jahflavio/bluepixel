const fs = require('fs');

async function run() {
  const https = require('https');
  function fetchText(url) {
    return new Promise((resolve, reject) => {
      https.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, res => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });
  }

  const html = await fetchText('https://bluepixel-v2.lovable.app/');
  fs.writeFileSync('lovable_index.html', html);

  // Search for Respaldados in HTML
  const idx = html.indexOf('Respaldados');
  if (idx !== -1) {
    console.log('Found Respaldados at index', idx);
    const slice = html.substring(Math.max(0, idx - 500), Math.min(html.length, idx + 4000));
    fs.writeFileSync('lovable_slice.html', slice);
    console.log('Saved lovable_slice.html');
  } else {
    console.log('Not found in HTML, searching for Clutch');
    const cIdx = html.indexOf('Clutch');
    console.log('Clutch index:', cIdx);
  }

  // Also look for all assets / svg / img in HTML
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let m;
  const imgs = [];
  while ((m = imgRegex.exec(html)) !== null) {
    imgs.push(m[1]);
  }
  console.log('Images found in HTML:', imgs);
}

run();
