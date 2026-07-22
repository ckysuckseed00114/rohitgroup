@echo off
title ROHIT - npm install
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm not found. Install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Installing dependencies...
npm install
echo.
echo Done! Run start-dev.bat or: npm run dev
pause
