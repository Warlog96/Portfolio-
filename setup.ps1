# MERN Portfolio - Setup Script
# Windows PowerShell Setup

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "MERN Portfolio - Installation Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Backend Setup
Write-Host "[1/4] Setting up Backend..." -ForegroundColor Yellow
Set-Location -Path "backend"

Write-Host "Installing backend dependencies..." -ForegroundColor Green
& npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Backend dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Backend installation failed!" -ForegroundColor Red
    exit 1
}

Set-Location -Path ".."

# Frontend Setup
Write-Host ""
Write-Host "[2/4] Setting up Frontend..." -ForegroundColor Yellow
Set-Location -Path "frontend"

Write-Host "Installing frontend dependencies..." -ForegroundColor Green
& npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Frontend dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Frontend installation failed!" -ForegroundColor Red
    exit 1
}

Set-Location -Path ".."

# Complete
Write-Host ""
Write-Host "[3/4] Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Make sure MongoDB is running on your system" -ForegroundColor White
Write-Host "   - If you have MongoDB installed locally, run: mongod" -ForegroundColor Gray
Write-Host "   - Or use MongoDB Atlas (cloud database)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Start the backend server:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   npm start" -ForegroundColor Gray
Write-Host ""
Write-Host "3. In a new terminal, start the frontend:" -ForegroundColor White
Write-Host "   cd frontend" -ForegroundColor Gray
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Open your browser to: http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
