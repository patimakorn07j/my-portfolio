import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0A0A0C] px-6 py-20 text-[#F5EFE0]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl italic leading-[1.05] text-[#F5EFE0] sm:text-5xl">
            Projects &amp;
            <br />
            <span className="bg-gradient-to-r from-pink via-violet to-cyan bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        <div
          className="mt-6 h-[3px] w-full rounded-full"
          style={{
            background: "linear-gradient(to right, #F5A623, #EC4899, #7C3AED, #06AED4)",
          }}
        />

        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <ProjectModal
          project={projects[openIndex]}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}

      {/* thin cyan wave line — subtle transition accent instead of a bulky filled wave */}
      <style>{`
        @keyframes thinWaveDrift { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div className="pointer-events-none absolute inset-x-0 bottom-2 h-6 overflow-hidden">
        <svg
          className="absolute bottom-0 h-6 w-[200%]"
          style={{ animation: "thinWaveDrift 12s linear infinite" }}
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