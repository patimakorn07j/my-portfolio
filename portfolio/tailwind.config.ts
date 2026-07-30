import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF9FF",
        surface: "#FFFFFF",
        ink: "#150F27",
        inksoft: "#4B4560",
        violet: "#7C3AED",
        cyan: "#06AED4",
        pink: "#EC4899",
        amber: "#F5A623",
      },
      fontFamily: {
        // ลบคำว่า font นำหน้าออก เพื่อเรียกใช้เป็น font-display, font-body ได้เลย
        display: ["'Kanit'", "sans-serif"],
        body: ["'Sarabun'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      // เพิ่มส่วนนี้เพื่อให้ใช้คลาสตัวเลขความหนาฟอนต์ตามสไตล์ UI/UX ได้ (เช่น font-700)
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(40px, -50px) scale(1.15) rotate(120deg)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9) rotate(240deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        flowLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
        waveDrift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blob: "blob 16s infinite ease-in-out", // เพิ่มเวลาเล็กน้อยจาก 12s เป็น 16s ให้ฉากหลังขยับนุ่มๆ ช้าๆ ไม่กวนสายตา
        blink: "blink 1s step-end infinite",
        floaty: "floaty 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "flow-line": "flowLine 3s ease-in-out infinite",
        "wave-drift": "waveDrift 12s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;