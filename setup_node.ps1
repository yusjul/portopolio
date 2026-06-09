# setup_node.ps1
# Automates downloading and configuring Node.js for Windows inside the workspace folder

$nodeDir = "c:\Users\LENOVO\Documents\portopolio\.node"
if (!(Test-Path $nodeDir)) {
    New-Item -ItemType Directory -Force -Path $nodeDir | Out-Null
    Write-Host "Created directory: $nodeDir"
}

$zipPath = "$nodeDir\node-v20.14.0-win-x64.zip"
if (!(Test-Path $zipPath)) {
    Write-Host "Downloading Node.js v20.14.0..."
    curl.exe -L "https://nodejs.org/dist/v20.14.0/node-v20.14.0-win-x64.zip" -o $zipPath
} else {
    Write-Host "Node.js zip already exists, skipping download."
}

$extractedDir = "$nodeDir\node-v20.14.0-win-x64"
if (!(Test-Path $extractedDir)) {
    Write-Host "Extracting Node.js..."
    Expand-Archive -Path $zipPath -DestinationPath $nodeDir
    Write-Host "Extraction complete."
} else {
    Write-Host "Node.js is already extracted."
}

$nodeExe = "$extractedDir\node.exe"
if (Test-Path $nodeExe) {
    Write-Host "Node.js is ready. Version:"
    & $nodeExe -v
} else {
    Write-Error "Failed to configure Node.js."
}
