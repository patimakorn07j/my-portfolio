import { useEffect, useState } from "react";

interface Props {
  onDone: () => void;
}

export default function Loader({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [visible, setVisible] = useState(false);

  // trigger the enter transition right after mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // fake progress that speeds up then settles at 100%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(p + Math.random() * 14 + 3, 100);
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // once done, fade the whole loader out then unmount
  useEffect(() => {
    if (progress >= 100) {
      const startFade = setTimeout(() => setHiding(true), 500);
      const finish = setTimeout(onDone, 1150);
      return () => {
        clearTimeout(startFade);
        clearTimeout(finish);
      };
    }
  }, [progress, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#05060A] transition-opacity duration-700 ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* soft glow behind the text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 animate-pulse rounded-full bg-violet/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute h-72 w-72 animate-pulse rounded-full bg-pink/10 blur-3xl [animation-delay:0.6s] sm:h-96 sm:w-96" />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        <p
          className={`font-mono text-xs uppercase tracking-[0.3em] text-white/30 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Hello, welcome
        </p>

        <h1
          className={`mt-3 bg-gradient-to-r from-violet via-cyan to-pink bg-clip-text font-display text-4xl italic leading-tight text-transparent transition-all duration-700 sm:text-6xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Welcome to
          <br />
          my Portfolio
        </h1>

        <p
          className={`mt-4 text-sm text-white/40 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          กำลังเตรียมผลงานให้คุณ...
        </p>

        <div
          className={`mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/10 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "380ms" }}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet via-cyan to-pink transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 font-mono text-xs text-white/30">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}