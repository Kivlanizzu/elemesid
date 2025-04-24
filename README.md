🥗 Good Food Us – Web App
Sebuah aplikasi landing page dengan tema makanan sehat yang dibuat menggunakan React + Tailwind CSS.

🚀 Fitur
Responsive layout

Styling dengan Tailwind CSS

📦 Cara Instalasi

1. Clone repository:
git clone https://github.com/Kivlanizzu/template_frontend.git
cd good-food-us

2. Install dependencies:
npm install

3. Jalankan program secara lokal:
npm run dev

☁️ Deploy ke Heroku
Pastikan kamu sudah install Heroku CLI

1. Login ke Heroku:
heroku login

2. Inisialisasi Git (jika belum):
git init
heroku git:remote -a nama-aplikasi-heroku

3. Build dan push ke Heroku:
npm run build
git add .
git commit -m "Deploy to Heroku"
git push heroku main