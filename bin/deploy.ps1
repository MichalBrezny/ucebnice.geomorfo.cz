#!/usr/bin/env pwsh
# Pushne zkompilovaný Jekyll site do větve 'site' -> GitHub Actions -> WEDOS.
#
# Prvni spusteni: nastavi _site/ jako git worktree pro vetev 'site'.
# Dalsi spusteni: commitne zmeny a pushne.

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$root = Split-Path $PSScriptRoot -Parent
$site = Join-Path $root '_site'

# One-time setup: _site/ jako git worktree vetve 'site'
if (-not (Test-Path (Join-Path $site '.git'))) {
    Write-Host "Nastavuji _site/ jako git worktree pro vetev 'site'..."
    if (Test-Path $site) {
        Remove-Item -Recurse -Force $site
    }
    git -C $root worktree add $site site
    Write-Host ""
    Write-Host "Hotovo. Nechte devcontainer site znovu zbuildovat (Jekyll zapise do _site/),"
    Write-Host "a pak skript spustte znovu pro deploy."
    exit 0
}

# Deploy: commit + push
Push-Location $site
try {
    if (-not (git status --porcelain)) {
        Write-Host "Nic k deployi -- site je aktualni."
        exit 0
    }

    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
    git add -A
    git commit -m "deploy: $timestamp"
    git push origin site
    Write-Host "Deploy hotov."
} finally {
    Pop-Location
}
