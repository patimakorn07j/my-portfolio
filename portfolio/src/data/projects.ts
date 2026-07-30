export type ProjectTagKind = "keyword" | "string" | "function" | "type";

export interface ProjectTag {
  label: string;
  kind: ProjectTagKind;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  fileName: string;
  title: string;
  subtitle?: string;
  year?: string;
  description: string;
  duration?: string;
  outcome?: string;
  features?: ProjectFeature[];
  image: string;
  images?: string[];
  tags: ProjectTag[];
  liveUrl?: string;
  repoUrl?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "proj-aroiho",
    fileName: "aroiho.review.tsx",
    title: "Aroiho — เว็บรีวิวร้านอาหาร",
    subtitle: "Mini Project",
    year: "2024",
    description:
      "Aroiho เป็นเว็บแอปพลิเคชันสำหรับรีวิวและค้นหาร้านอาหาร ที่พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้ค้นหาร้านอาหารที่ต้องการได้ง่ายขึ้น โดยออกแบบให้ใช้งานง่าย เข้าถึงได้สะดวก และเหมาะสำหรับผู้ใช้งานทั่วไป",
    duration: "1 เดือน",
    outcome: "ช่วยให้ผู้ใช้ค้นหาและตัดสินใจเลือกร้านอาหารได้ง่ายและรวดเร็วขึ้น",
    features: [
      {
        title: "ค้นหาและกรองร้านอาหาร",
        description: "ค้นหาร้านตามชื่อ ประเภทอาหาร หรือทำเลที่ตั้งได้",
      },
      {
        title: "ให้คะแนนและเขียนรีวิว",
        description: "ผู้ใช้สามารถให้คะแนนและแชร์ความคิดเห็นเกี่ยวกับร้านได้",
      },
      {
        title: "แกลเลอรีภาพร้านอาหาร",
        description: "แสดงภาพบรรยากาศและเมนูของแต่ละร้านแบบละเอียด",
      },
    ],
    image: "/project-images/aroiho-1.png",
    images: [
      "/project-images/aroiho-1.png",
      "/project-images/aroiho-2.png",
      "/project-images/aroiho-3.png",
      "/project-images/aroiho-4.png",
      "/project-images/aroiho-5.png",
      "/project-images/aroiho-6.png",
      "/project-images/aroiho-7.png",
      "/project-images/aroiho-8.png",
      "/project-images/aroiho-9.png",
      "/project-images/aroiho-10.png",
      "/project-images/aroiho-11.png",
      "/project-images/aroiho-12.png",
    ],
    tags: [
      { label: "HTML/CSS", kind: "keyword" },
      { label: "JavaScript", kind: "function" },
      { label: "Mini Project", kind: "string" },
    ],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-garbage",
    fileName: "garbage.classifier.py",
    title: "Garbage Classification (Deep Learning)",
    subtitle: "Deep Learning Project",
    year: "2024",
    description:
      "โมเดล Deep Learning สำหรับจำแนกประเภทขยะจากภาพถ่าย เพื่อช่วยในการคัดแยกขยะรีไซเคิลอย่างอัตโนมัติ ลดภาระของมนุษย์ในการคัดแยกขยะด้วยมือ",
    duration: "2 เดือน",
    outcome: "โมเดลสามารถจำแนกประเภทขยะได้อย่างแม่นยำ ช่วยสนับสนุนการคัดแยกขยะรีไซเคิล",
    features: [
      {
        title: "จำแนกภาพขยะอัตโนมัติ",
        description: "ใช้โมเดล CNN วิเคราะห์และจำแนกประเภทขยะจากภาพ",
      },
      {
        title: "เทรนโมเดลด้วย TensorFlow",
        description: "ฝึกโมเดลด้วยชุดข้อมูลภาพขยะหลากหลายประเภท",
      },
    ],
    image: "/project-images/garbage-1.png",
    images: [
      "/project-images/garbage-1.png",
      "/project-images/garbage-2.png",
      "/project-images/garbage-3.png",
      "/project-images/garbage-4.png",
    ],
    tags: [
      { label: "Python", kind: "keyword" },
      { label: "TensorFlow", kind: "function" },
      { label: "CNN", kind: "type" },
      { label: "Deep Learning", kind: "string" },
    ],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-stroke",
    fileName: "stroke.classifier.py",
    title: "Stroke Classification (ML Final Project)",
    subtitle: "Final Project",
    year: "2025",
    description:
      "โปรเจกต์จบด้าน Machine Learning สำหรับทำนายความเสี่ยงโรคหลอดเลือดสมอง (Stroke) จากข้อมูลสุขภาพผู้ป่วย เพื่อช่วยในการคัดกรองความเสี่ยงเบื้องต้น",
    duration: "3 เดือน",
    outcome: "โมเดลช่วยคัดกรองความเสี่ยงโรคหลอดเลือดสมองได้อย่างมีประสิทธิภาพ",
    features: [
      {
        title: "วิเคราะห์ข้อมูลสุขภาพผู้ป่วย",
        description: "ทำความสะอาดและวิเคราะห์ข้อมูลก่อนนำเข้าโมเดล",
      },
      {
        title: "เทรนโมเดล Machine Learning",
        description: "ทดลองและเปรียบเทียบหลายโมเดลเพื่อหาความแม่นยำสูงสุด",
      },
    ],
    image: "/project-images/stroke-1.png",
    images: [
      "/project-images/stroke-1.png",
      "/project-images/stroke-2.png",
      "/project-images/stroke-3.png",
      "/project-images/stroke-4.png",
      "/project-images/stroke-5.png",
    ],
    tags: [
      { label: "Python", kind: "keyword" },
      { label: "scikit-learn", kind: "function" },
      { label: "Machine Learning", kind: "type" },
      { label: "Final Project", kind: "string" },
    ],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-figma",
    fileName: "uxui.design.fig",
    title: "UX/UI การสั่งก๋วยเตี๋ยว",
    subtitle: "UX/UI Design",
    year: "2024",
    description:
      "งานออกแบบ UX/UI สำหรับแอปพลิเคชันสั่งก๋วยเตี๋ยว ครอบคลุมตั้งแต่การออกแบบ wireframe ไปจนถึงหน้าตาสุดท้าย (final mockup)",
    image: "/project-images/figma-1.png",
    images: [
      "/project-images/figma-1.png",
      "/project-images/figma-2.png",
      "/project-images/figma-3.png",
      "/project-images/figma-4.png",
      "/project-images/figma-5.png",
      "/project-images/figma-6.png",
      "/project-images/figma-7.png",
      "/project-images/figma-8.png",
    ],
    tags: [
      { label: "Figma", kind: "keyword" },
      { label: "UI/UX Design", kind: "type" },
      { label: "Wireframe", kind: "string" },
    ],
    liveUrl:
      "https://www.figma.com/proto/2KjfasCJcRedD81mUYjOev/UXUI-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7?node-id=249-5226&starting-point-node-id=249%3A5226&t=ajFNbp6UoHNSYzKj-1",
    links: [
      {
        label: "กำหนดความต้องการผู้ใช้",
        url: "https://www.figma.com/design/2KjfasCJcRedD81mUYjOev/UXUI-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7?node-id=0-1&p=f&t=SeZ7W7oZWxtNWoTa-0",
      },
      {
        label: "ออกแบบ UX/UI มือถือ",
        url: "https://www.figma.com/design/2KjfasCJcRedD81mUYjOev/UXUI-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7?node-id=249-5225&p=f&t=SeZ7W7oZWxtNWoTa-0",
      },
      {
        label: "ออกแบบตู้ Kiosk",
        url: "https://www.figma.com/design/2KjfasCJcRedD81mUYjOev/UXUI-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7?node-id=585-163&p=f&t=SeZ7W7oZWxtNWoTa-0",
      },
    ],
  },
];