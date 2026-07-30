export interface Activity {
  id: string;
  image: string; // path in public/activity-images/
  caption: string;
}

// เอารูปกิจกรรมจริงไปวางไว้ใน public/activity-images/
// ตั้งชื่อไฟล์เป็น act-01.png ถึง act-12.png ตามลำดับด้านล่าง (หรือแก้ path ให้ตรงกับชื่อไฟล์จริง)
export const activities: Activity[] = [
  { id: "act-01", image: "/activity-images/act-01.PNG", caption: "ถ่ายทำวิดีทัศน์ ขนมปังขึ้นรา (1)" },
  { id: "act-02", image: "/activity-images/act-02.PNG", caption: "ถ่ายทำวิดีทัศน์ ขนมปังขึ้นรา (2)" },
  { id: "act-03", image: "/activity-images/act-03.PNG", caption: "ถ่ายทำวิดีทัศน์ ขนมปังขึ้นรา (3)" },
  { id: "act-04", image: "/activity-images/act-04.PNG", caption: "กิจกรรม IT Night (1)" },
  { id: "act-05", image: "/activity-images/act-05.PNG", caption: "กิจกรรม IT Night (2)" },
  { id: "act-06", image: "/activity-images/act-06.PNG", caption: "กิจกรรมกีฬาสีภายในคณะวิทยาศาสตร์" },
  { id: "act-07", image: "/activity-images/act-07.PNG", caption: "กิจกรรมจิตอาสาเก็บขยะงานเกษตร" },
  { id: "act-08", image: "/activity-images/act-08.PNG", caption: "กิจกรรมเดินขบวนกีฬาสี" },
  { id: "act-09", image: "/activity-images/act-09.PNG", caption: "กิจกรรมรับน้อง ปี 68 (1)" },
  { id: "act-10", image: "/activity-images/act-10.PNG", caption: "กิจกรรมรับน้อง ปี 68 (2)" },
  { id: "act-11", image: "/activity-images/act-11.PNG", caption: "กิจกรรมวันวิทยาศาสตร์ (1)" },
  { id: "act-12", image: "/activity-images/act-12.PNG", caption: "กิจกรรมวันวิทยาศาสตร์ในคณะ (2)" },
  { id: "act-13", image: "/activity-images/act-13.PNG", caption: "กิจกรรมวันวิทยาศาสตร์สาขา (1)" },
  { id: "act-14", image: "/activity-images/act-14.PNG", caption: "กิจกรรมวันวิทยาศาสตร์สาขา (2)" }
];