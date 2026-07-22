@echo off
title ROHIT - Build for Production
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

echo ========================================
echo   ROHIT - Production Build (Static)
echo ========================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm not found. Run install.bat first.
    pause
    exit /b 1
)

echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 goto :failed

echo.
echo [2/2] Building static site...
call npm run build
if errorlevel 1 goto :failed

echo.
echo ========================================
echo   BUILD SUCCESS!
echo ========================================
echo.
echo Upload EVERYTHING inside this folder:
echo   %~dp0out\
echo.
echo To your hosting public folder:
echo   - cPanel: public_html
echo   - Netlify: drag ^& drop the out folder
echo   - GitHub Pages: upload out contents
echo.
echo DO NOT upload index.html from project root (old file).
echo DO NOT upload .next folder — use out folder only.
echo.
pause
exit /b 0

:failed
echo.
echo [ERROR] Build failed. Check errors above.
pause
exit /b 1
