const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let file = req.url === '/' ? '/index.html' : req.url;
  
  // Use process.cwd() to correctly resolve paths regardless of execution context
  // req.url usually starts with '/', e.g., '/assets/bimbo.png'
  // To avoid Windows resolving it to C:\assets\bimbo.png, we slice the first slash if present
  if (file.startsWith('/')) {
      file = file.slice(1);
  }
  
  let fp = path.join(process.cwd(), file);
  fp = fp.split('?')[0];

  const ext = path.extname(fp);
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.json': 'application/json'
  };

  try {
    const data = fs.readFileSync(fp);
    res.writeHead(200, {
      'Content-Type': (types[ext] || 'text/plain') + '; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  } catch (e) {
    console.error("404 Not Found:", fp);
    res.writeHead(404); 
    res.end('Not found');
  }
});

server.listen(8080, () => console.log('Robust Server at http://localhost:8080'));
