$appPath = "src\App.jsx"
$techSovPath = "TechnicalSovereignty.txt"

# Copy raw file again
Copy-Item "src\App_raw.html" -Destination $appPath -Force

$appContent = [System.IO.File]::ReadAllText($appPath, [System.Text.Encoding]::UTF8)
$techSovContent = [System.IO.File]::ReadAllText($techSovPath, [System.Text.Encoding]::UTF8)

# 1. Remove HTML headers
$appContent = $appContent -replace '(?s)<!DOCTYPE html>.*?<script type="text/babel">', "import React, { useState, useEffect, useRef } from 'react';`nimport './index.css';`n"

# 1.1 Remove the duplicate React declaration
$appContent = $appContent -replace '(?m)^\s*const \{ useState, useEffect, useRef \} = React;.*?$', ''

# 2. Remove HTML footers
$appContent = $appContent -replace '(?s)ReactDOM\.createRoot.*?</html>', "export default App;`n"

# 3. Inject TechnicalSovereignty component definition
$appContent = $appContent -replace '(?s)(// Final CTA Section)', ($techSovContent + "`r`n`r`n    `$1")

# 4. Inject TechnicalSovereignty usage in App component
$appContent = $appContent -replace '(?s)(<FinalCTA)', ("<TechnicalSovereignty />`r`n          `$1")

# Write without BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($appPath, $appContent, $utf8NoBom)
Write-Output "Fixed and injected successfully"
