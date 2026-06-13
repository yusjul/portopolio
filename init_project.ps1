# init_project.ps1
# Automates the creation and structure initialization of the Next.js portfolio project

# 1. Update session PATH to include local Node.js
$env:PATH = "c:\Users\LENOVO\Documents\portopolio\.node\node-v20.14.0-win-x64;" + $env:PATH

# 2. Check if temp-app exists, and clean it up first
if (Test-Path "temp-app") {
    Remove-Item -Recurse -Force "temp-app" | Out-Null
}

Write-Host "Creating Next.js app in temp-app..."
npx create-next-app@latest temp-app --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --disable-git --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host "Copying files to root workspace..."
    Get-ChildItem -Path "temp-app" -Force | ForEach-Object {
        $dest = Join-Path "c:\Users\LENOVO\Documents\portopolio" $_.Name
        if ($_.PsIsContainer) {
            Copy-Item -Path $_.FullName -Destination $dest -Recurse -Force | Out-Null
        } else {
            Copy-Item -Path $_.FullName -Destination $dest -Force | Out-Null
        }
    }
    
    Write-Host "Cleaning up temp-app..."
    Remove-Item -Recurse -Force "temp-app" | Out-Null
    
    Write-Host "Installing dependencies..."
    npm install framer-motion lucide-react --save
    
    Write-Host "Project bootstrap complete!"
} else {
    Write-Error "create-next-app failed!"
}
