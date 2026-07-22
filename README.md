# ROHIT | KING OF EGOIST

Next.js landing page — dark, bold, egoist theme with interactive effects.

## Features

- **Loading screen** — dramatic ROHIT reveal with progress bar
- **Glitch title** — animated sinking letters with periodic glitch
- **3D logo** — mouse-tilt + auto-spin with neon glow
- **Particle field** — interactive particles that react to cursor
- **Custom cursor** — dual-ring cursor with hover states
- **Scanline overlay** — CRT-style atmosphere
- **Magnetic buttons** — ROHIT FAMILY / ROHIT GANG with shine effect
- **Section modals** — full-screen panels with stats
- **Music player** — play/pause with visualizer bars + volume control

## Getting Started

Requires [Node.js 18+](https://nodejs.org/)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy (Production)

### ⚠️ ทำไมขึ้น 404?

Next.js **ไม่ใช่ไฟล์ HTML ธรรมดา** — ต้อง **build ก่อน** แล้วอัปโหลดโฟลเดอร์ **`out/`** เท่านั้น

❌ อย่าอัปโหลด: `index.html` (ไฟล์เก่า), โฟลเดอร์ `.next`, หรือ source code ทั้งโปรเจกต์

### วิธี Deploy (Static Hosting — cPanel, FTP, Netlify)

```bash
npm run build
```

หรือดับเบิลคลิก **`deploy.bat`**

จากนั้นอัปโหลด **ทุกไฟล์ในโฟลเดอร์ `out/`** ไปที่ root ของ hosting:

```
out/
├── index.html      ← หน้าแรก
├── .htaccess       ← สำหรับ Apache/cPanel
├── _redirects      ← สำหรับ Netlify
├── picture/        ← รูป + เพลง
└── _next/          ← JS/CSS (ต้องอัปโหลดด้วย!)
```

**cPanel:** อัปโหลดเข้า `public_html/`  
**Netlify:** ลากโฟลเดอร์ `out/` วาง หรือตั้ง publish directory = `out`

### Vercel (แนะนำสำหรับ Next.js)

1. Push โค้ดขึ้น GitHub
2. Import โปรเจกต์ที่ [vercel.com](https://vercel.com)
3. Vercel จะ build ให้อัตโนมัติ — ไม่ต้องอัปโหลด `out/` เอง

## Build

```bash
npm run build
npm start
```

## Assets

Place media in `public/picture/`:
- `bg.jpg` — background
- `logo.png` — logo
- `bg.mp3` — background music

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
