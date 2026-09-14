$appPath = "src\App.jsx"
$techSovPath = "TechnicalSovereignty.txt"

$appContent = [System.IO.File]::ReadAllText($appPath, [System.Text.Encoding]::UTF8)
$techSovContent = [System.IO.File]::ReadAllText($techSovPath, [System.Text.Encoding]::UTF8)

# Inject the component definition
$appContent = $appContent -replace '(?s)(const CaseStudiesSection =)', ($techSovContent + "`r`n`r`n`$1")

# Inject the component usage inside App
$appContent = $appContent -replace '(?s)(<CaseStudiesSection)', ("<TechnicalSovereignty />`r`n          `$1")

[System.IO.File]::WriteAllText($appPath, $appContent, [System.Text.Encoding]::UTF8)
Write-Output "Injected TechnicalSovereignty"
