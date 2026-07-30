import { useState } from "react";

type Level = "expert" | "proficient";
type TabKey = "hard" | "figma" | "soft";

interface SkillItem {
  name: string;
  level: Level;
}

const HARD_SKILLS: SkillItem[] = [
  { name: "Requirements Gathering", level: "proficient" },
  { name: "User Story & Use Case", level: "expert" },
  { name: "Process Modeling (BPMN)", level: "proficient" },
  { name: "Wireframing & Prototyping", level: "proficient" },
  { name: "Data Analysis & Reporting", level: "expert" },
  { name: "SQL & Database Design", level: "proficient" },
  { name: "UAT & Test Case Design", level: "proficient" },
  { name: "Machine Learning", level: "expert" },
  { name: "Data Mining", level: "proficient" },
  { name: "Django Web Development", level: "proficient" },
];

const FIGMA_SKILLS: SkillItem[] = [
  { name: "User Flow", level: "proficient" },
  { name: "Wireframing", level: "proficient" },
  { name: "Prototyping", level: "proficient" },
];

const SOFT_SKILLS: SkillItem[] = [
  { name: "Problem Solving", level: "proficient" },
  { name: "Critical Thinking", level: "proficient" },
  { name: "Teamwork", level: "proficient" },
  { name: "Adaptability", level: "proficient" },
  { name: "Responsibility", level: "expert" },
  { name: "Self-learning", level: "expert" },
];

const TABS: { key: TabKey; label: string }[] = [
  { key: "hard", label: "Hard Skills" },
  { key: "figma", label: "Figma" },
  { key: "soft", label: "Soft Skills" },
];

const TAB_STYLES: Record<TabKey, { active: string; text: string; border: string; dot: string }> = {
  hard: { active: "bg-violet text-white", text: "text-violet", border: "border-violet/40", dot: "bg-violet" },
  figma: { active: "bg-pink text-white", text: "text-pink", border: "border-pink/40", dot: "bg-pink" },
  soft: { active: "bg-cyan text-white", text: "text-cyan", border: "border-cyan/40", dot: "bg-cyan" },
};

const LISTS: Record<TabKey, SkillItem[]> = {
  hard: HARD_SKILLS,
  figma: FIGMA_SKILLS,
  soft: SOFT_SKILLS,
};

export default function Skills() {
  const [tab, setTab] = useState<TabKey>("hard");
  const list = LISTS[tab];
  const style = TAB_STYLES[tab];

  return (
    <section
      id="skills"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-[#0A0A0C] px-6 py-20 text-[#F5EFE0]"
    >
      <style>{`
        @keyframes skillRowIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes skillsWaveDrift {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs text-cyan">{"ทักษะและเครื่องมือ"}</p>
        <h2 className="mt-1.5 font-display text-2xl font-700 sm:text-3xl">
          Skills
        </h2>

        <div className="mt-6 inline-flex overflow-hidden rounded-md border border-white/15">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                tab === t.key
                  ? TAB_STYLES[t.key].active
                  : "bg-transparent text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div key={tab} className="mt-3 divide-y divide-white/10 border-t border-white/10 text-left">
          {list.map((skill, i) => (
            <div
              key={skill.name}
              className="group flex items-center justify-between gap-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.04]"
              style={{ animation: `skillRowIn 0.4s ease-out ${i * 60}ms both` }}
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125 ${style.dot}`} />
                <span className="font-body text-sm text-[#F5EFE0]">
                  {skill.name}
                </span>
              </div>

              {skill.level === "expert" ? (
                <span className="rounded bg-gradient-to-r from-violet to-pink px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                  เชี่ยวชาญ
                </span>
              ) : (
                <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.border} ${style.text}`}>
                  ใช้งานได้ดี
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-2 h-6 overflow-hidden">
        <svg
          className="absolute bottom-0 h-6 w-[200%]"
          style={{ animation: "skillsWaveDrift 14s linear infinite" }}
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C180,38 180,2 360,20 C540,38 540,2 720,20 C900,38 900,2 1080,20 C1260,38 1260,2 1440,20 C1620,38 1620,2 1800,20 C1980,38 1980,2 2160,20 C2340,38 2340,2 2520,20 C2700,38 2700,2 2880,20"
            fill="none"
            stroke="#06AED4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}