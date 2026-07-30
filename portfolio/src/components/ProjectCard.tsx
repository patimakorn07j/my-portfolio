import type { Project, ProjectTagKind } from "../data/projects";

const TAG_TEXT_COLORS: Record<ProjectTagKind, string> = {
  keyword: "text-violet",
  string: "text-pink",
  function: "text-cyan",
  type: "text-amber",
};

const BADGE_BG_COLORS = ["bg-violet", "bg-cyan", "bg-pink", "bg-amber"];

interface Props {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <button
      onClick={onOpen}
      className="group grid w-full grid-cols-1 items-center gap-6 border-b border-white/10 py-8 text-left transition hover:bg-white/[0.02] sm:grid-cols-[460px,1fr] sm:gap-10"
    >
      <div className="relative aspect-video overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={`ภาพตัวอย่างผลงาน ${project.title}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white ${BADGE_BG_COLORS[index % BADGE_BG_COLORS.length]}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/40 px-4 py-1.5 font-mono text-xs tracking-widest text-white">
            OPEN PROJECT
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-3">
          <span
            className={`font-mono text-sm font-bold ${
              TAG_TEXT_COLORS[project.tags[0]?.kind ?? "keyword"]
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.year && (
            <span className="font-mono text-xs tracking-widest text-white/40">
              {project.year}
            </span>
          )}
        </div>

        <h3 className="mt-2 font-display text-2xl italic leading-snug text-[#F5EFE0] sm:text-3xl">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/40">
            {project.subtitle}
          </p>
        )}

        <p className="mt-3 flex items-start gap-2 text-sm text-white/60">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`font-mono text-[11px] uppercase tracking-widest ${TAG_TEXT_COLORS[tag.kind]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}