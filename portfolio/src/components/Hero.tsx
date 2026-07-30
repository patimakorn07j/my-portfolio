import { useEffect, useState } from "react";

const ROLES = ["UI/UX Designer", "Frontend Developer", "Data Analyst"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let speed = deleting ? 50 : 90;

    if (!deleting && charIndex === current.length) {
      speed = 1500;
    }
    if (deleting && charIndex === 0) {
      speed = 300;
    }

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        
        if (charIndex + 1 === current.length) {
          setDeleting(true);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-44 md:pb-36 bg-bg flex flex-col justify-center min-h-[85vh]">
      {/* Animated Background Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet/15 blur-[100px] animate-blob" />
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-cyan/15 blur-[100px] animate-blob [animation-delay:4s]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-pink/10 blur-[100px] animate-blob [animation-delay:8s]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Badge Intro */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-surface/80 px-4 py-1.5 font-body text-xs sm:text-sm font-medium tracking-wide text-violet shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          สวัสดีครับ ผมชื่อ
        </span>

        {/* Main Name Heading — ปรับ font-semibold ให้บางลง ละมุน คลีนขึ้น */}
        <div className="relative my-2">
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-20 w-1/2 rounded-full bg-violet/15 blur-3xl" />
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold tracking-tight leading-[1.08]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ink via-ink/90 to-violet">
              Patimakorn Srichan
            </span>
          </h1>
        </div>

        {/* Dynamic Typing Role */}
        <div className="mt-6 h-12 font-mono text-lg font-medium tracking-normal text-inksoft sm:text-xl md:text-2xl flex items-center justify-center">
          <span className="relative py-1 px-3.5 rounded-lg bg-surface/50 border border-ink/5 backdrop-blur-sm shadow-sm">
            <span className="text-violet mr-2 opacity-70">&gt;</span>
            <span className="text-ink">{displayed}</span>
            <span className="ml-1.5 inline-block w-[2px] h-[1em] bg-violet align-middle animate-pulse" />
          </span>
        </div>

        {/* Subtitle / Bio */}
        <p className="mx-auto mt-8 max-w-2xl font-body text-base font-normal leading-relaxed text-inksoft sm:text-lg">
          รวมผลงานและโปรเจกต์ที่ผ่านมา
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center font-body rounded-xl bg-ink px-8 py-3.5 text-sm font-medium text-surface shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet hover:shadow-lg hover:shadow-violet/20 active:translate-y-0"
          >
            ดูผลงานทั้งหมด
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center font-body rounded-xl border border-ink/10 bg-surface/80 px-8 py-3.5 text-sm font-medium text-ink backdrop-blur-md shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-surface hover:border-ink/20 active:translate-y-0"
          >
            ติดต่อผม
          </a>
        </div>
      </div>
    </section>
  );
}