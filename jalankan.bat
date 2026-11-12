@echo off
chcp 65001 >nul
setlocal
title Wavify - Menjalankan Program
cd /d "%~dp0"

echo ============================================
echo   Wavify - Aplikasi Streaming Musik
echo ============================================
echo.

REM ---- 1. Cek Node.js ----
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js tidak ditemukan.
  echo Silakan install Node.js dulu dari https://nodejs.org ^(pilih versi LTS^).
  echo Setelah install, tutup lalu buka lagi file ini.
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo [OK] Node.js terdeteksi: %NODE_VER%
echo.

REM ---- 2. Siapkan .env.local (jika belum ada) ----
if not exist ".env.local" (
  if exist ".env.example" (
    copy /y ".env.example" ".env.local" >nul
    echo [OK] Membuat file .env.local dari .env.example
    echo.
  )
)

REM ---- 3. Install dependencies bila belum ada ----
if not exist "node_modules" (
  echo [INFO] Pertama kali dijalankan, menginstall dependencies...
  echo       Proses ini bisa memakan waktu beberapa menit.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] Gagal menginstall dependencies.
    echo Coba hapus folder node_modules lalu jalankan file ini lagi.
    echo.
    pause
    exit /b 1
  )
  echo.
  echo [OK] Dependencies selesai diinstall.
  echo.
)

REM ---- 4. Buka browser otomatis setelah server siap ----
start "" cmd /c "timeout /t 8 >nul & start "" http://localhost:3000"

REM ---- 5. Jalankan server development ----
echo ============================================
echo   Menjalankan server di http://localhost:3000
echo   Tekan CTRL + C untuk menghentikan.
echo ============================================
echo.

call npm run dev

echo.
echo Server dihentikan.
pause
endlocal
