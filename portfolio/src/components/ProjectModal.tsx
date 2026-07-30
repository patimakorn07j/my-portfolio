import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
  onClose: () => void;
}

export default function ProjectModal({ project, index, onClose }: Props) {
  const images =
    project.images && project.images.length > 0 ? project.images : [project.image];
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [project.id]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveImg((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="my-8 w-full max-w-3xl overflow-hidden bg-[#0A0A0C] text-[#F5EFE0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="font-mono text-sm text-emerald-400">
            {String(index + 1).padStart(2, "0")}
            {project.year && <span className="ml-3 text-white/40">{project.year}</span>}
            {project.subtitle && (
              <span className="ml-3 text-white/40">· {project.subtitle}</span>
            )}
          </span>
          <button
            onClick={onClose}
            aria-label="ปิด"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-white/5">
          <img
            src={images[activeImg]}
            alt={`ภาพที่ ${activeImg + 1} ของผลงาน ${project.title}`}
            className="h-full w-full object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImg((i) => (i - 1 + images.length) % images.length)
                }
                aria-label="รูปก่อนหน้า"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/50 text-xl text-white transition hover:bg-black/80"
              >
                ‹
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                aria-label="รูปถัดไป"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/50 text-xl text-white transition hover:bg-black/80"
              >
                ›
              </button>
              <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 font-mono text-[11px] text-white/80">
                {activeImg + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-white/[0.02] px-6 py-3">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImg(i)}
                className={`h-14 w-20 shrink-0 overflow-hidden border-2 transition ${
                  i === activeImg
                    ? "border-violet opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8">
          <h3 className="font-display text-2xl italic leading-snug text-[#F5EFE0] sm:text-3xl">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className="font-mono text-[11px] uppercase tracking-widest text-cyan"
              >
                {tag.label}
              </span>
            ))}
          </div>

          {(project.duration || project.outcome) && (
            <div className="mt-6 grid grid-cols-1 gap-5 border-y border-white/10 py-5 sm:grid-cols-2">
              {project.duration && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                    Duration
                  </p>
                  <p className="mt-1 text-sm text-white/80">{project.duration}</p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-400">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          )}

          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/40">
            Project Details
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <ul className="mt-4 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature.title} className="text-sm leading-relaxed text-white/70">
                  <span className="font-semibold text-[#F5EFE0]">
                    {feature.title}
                  </span>{" "}
                  — {feature.description}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 font-medium text-white transition hover:border-violet hover:text-violet"
              >
                Prototype
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 font-medium text-white/70 transition hover:border-cyan hover:text-cyan"
              >
                ซอร์สโค้ด ↗
              </a>
            )}
            {project.links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 font-medium text-white/70 transition hover:border-amber hover:text-amber"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}