@echo off
echo ====================================
echo MERN Portfolio - Installation Script
echo ====================================
echo.

echo [1/2] Setting up Backend...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Failed to install backend dependencies!
    exit /b 1
)
cd ..

echo.
echo [2/2] Setting up Frontend...
cd frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Failed to install frontend dependencies!
    exit /b 1
)
cd ..

echo.
echo ====================================
echo Setup Complete!
echo ====================================
echo.
echo Next Steps:
echo 1. Make sure MongoDB is running
echo 2. Start backend: cd backend ^&^& npm start
echo 3. Start frontend: cd frontend ^&^& npm run dev
echo 4. Open: http://localhost:3000
echo.
pause
