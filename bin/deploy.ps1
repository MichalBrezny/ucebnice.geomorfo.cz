#!/usr/bin/env pwsh
# Pushne zkompilovaný Jekyll site do větve 'site' -> GitHub Actions -> WEDOS.
#
# Prvni spusteni: nastavi _site/ jako git worktree pro vetev 'site'.
# Dalsi spusteni: cisty produkcni build do _site/, pak commit + push.

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$root = Split-Path $PSScriptRoot -Parent
$site = Join-Path $root '_site'
$image = 'ucebnice-jekyll'

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

# Cisty produkcni build do _site/.
# Nutny proto, ze devcontainer bezi 'jekyll serve --watch', ktery do _site/ zapisuje
# dev build a NEMAZE obsolete soubory. Cisty build je pritom vycisti; .git (worktree)
# a .github (deploy workflow vetve 'site') chrani keep_files v _config.yml.
$rootUnix = $root -replace '\\', '/'

Write-Host "Pripravuji build image '$image'..."
docker build -f (Join-Path $root '.devcontainer/Dockerfile') -t $image $root
if ($LASTEXITCODE -ne 0) { throw "docker build selhal (bezi Docker Desktop?)" }

Write-Host "Spoustim cisty produkcni build do _site/..."
# JEKYLL_NO_BUNDLER_REQUIRE obchazi Bundler - jinak build padne na Gemfile.lock.
docker run --rm `
    -e JEKYLL_ENV=production `
    -e JEKYLL_NO_BUNDLER_REQUIRE=true `
    -v "${rootUnix}:/srv/jekyll" `
    -w /srv/jekyll `
    $image bash -lc 'jekyll build'
if ($LASTEXITCODE -ne 0) { throw "jekyll build selhal" }

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
