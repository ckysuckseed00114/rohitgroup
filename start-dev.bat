@echo off
title ROHIT Dev Server
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm not found. Install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Starting ROHIT dev server...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop
echo.

npm run dev
