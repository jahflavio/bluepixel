@echo off
echo =======================================================
echo    Iniciando Servidor de Desarrollo - BluePixel App
echo =======================================================
echo.

set PATH=%~dp0node_env\node-v20.11.1-win-x64;%PATH%
cd bluepixel-app

echo [+] Node.js cargado desde entorno portable.
echo [+] Iniciando servidor Vite en http://localhost:5173
echo.
echo Presiona CTRL+C en esta ventana para detener el servidor.
echo.

start http://localhost:5173
call npm run dev
pause
