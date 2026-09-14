const { execSync } = require('child_process');
try {
  console.log(execSync('git log -S "Tres formas de colaborar" --oneline').toString('utf8'));
} catch (e) {
  console.log(e.stdout.toString('utf8'));
}
