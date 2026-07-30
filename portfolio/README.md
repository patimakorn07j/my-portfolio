# Dev Portfolio (React + TypeScript + Tailwind)

เว็บแอปพอร์ตโฟลิโอสำหรับแสดงผลงาน สร้างด้วย React + TypeScript + Vite + Tailwind CSS

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

จากนั้นเปิด http://localhost:5173

## Build สำหรับ deploy

```bash
npm run build
```

ไฟล์ผลลัพธ์จะอยู่ในโฟลเดอร์ `dist/` — นำไป deploy ได้เลยที่ Vercel, Netlify, GitHub Pages ฯลฯ

## ปรับแต่งเนื้อหาของคุณ

| ต้องการแก้ | ไฟล์ |
|---|---|
| ชื่อ, ตำแหน่งงาน, ข้อความ hero | `src/components/Hero.tsx` |
| รายการโปรเจกต์ (ชื่อ, รูป, ลิงก์, แท็ก) | `src/data/projects.ts` |
| ทักษะ/เครื่องมือ | `src/components/Skills.tsx` |
| ลิงก์ติดต่อ (GitHub, LinkedIn, Email) | `src/components/Footer.tsx` |
| สีธีมหลัก (violet, cyan, pink, amber) | `tailwind.config.ts` |

### เพิ่มโปรเจกต์ใหม่

เปิด `src/data/projects.ts` แล้วเพิ่ม object ใหม่ในอาร์เรย์ `projects` ตามรูปแบบ (type) `Project` ที่กำหนดไว้ — TypeScript จะช่วยเตือนถ้าใส่ข้อมูลไม่ครบ

### เปลี่ยนรูปภาพ

ตอนนี้ใช้รูป placeholder จาก placehold.co — แนะนำให้:
1. ใส่ไฟล์ภาพจริงไว้ในโฟลเดอร์ `public/`
2. แก้ path ใน `projects.ts` เป็น เช่น `image: "/screenshots/project1.png"`

## โครงสร้างโปรเจกต์

```
src/
  components/
    Hero.tsx        — ส่วนหัว พร้อมแอนิเมชัน gradient blob และ typing effect
    Projects.tsx     — grid แสดงผลงานทั้งหมด
    ProjectCard.tsx  — การ์ดโปรเจกต์แต่ละอัน (ดีไซน์แบบหน้าต่าง code editor)
    Skills.tsx       — แท็กทักษะ/เครื่องมือ
    Footer.tsx       — ส่วนติดต่อ
  data/
    projects.ts      — ข้อมูลโปรเจกต์ทั้งหมด (แก้ตรงนี้เป็นหลัก)
  App.tsx
  index.css
```
