$ErrorActionPreference = "Stop"
$nodePath = "C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\03_Prototipos_y_Codigo\Componentes_Nueva_Web\node_env\node-v20.11.1-win-x64"
$env:PATH = "$nodePath;" + $env:PATH

Write-Host "Node version: $(node -v)"
Write-Host "NPM version: $(npm -v)"

Set-Location "C:\Users\usarioBP\.gemini\antigravity-ide\scratch\bluepixel\03_Prototipos_y_Codigo\Componentes_Nueva_Web\bluepixel-app"
Write-Host "Running npm run build..."
npm run build

Write-Host "Build complete!"
