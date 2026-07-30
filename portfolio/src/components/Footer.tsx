const EMAIL = "patimakorn.work@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/patimakon.srichan.7399/";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-[#0A0A0C] px-6 py-24 text-[#F5EFE0]"
    >
      {/* colorful decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet/25 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-amber/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
          Contact
        </p>

        <h2 className="mt-3 font-display text-5xl italic leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="text-[#F5EFE0]">Contact</span>{" "}
          <span className="text-amber">Me</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-white/50">
          เปิดรับโอกาสงานใหม่และโปรเจกต์ที่น่าสนใจเสมอ
        </p>

        {/* info columns */}
        <div className="mt-14 grid grid-cols-1 justify-center gap-8 border-t border-white/10 pt-10 text-center sm:grid-cols-2 sm:justify-items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block border-b border-white/30 pb-0.5 font-mono text-sm font-medium text-[#F5EFE0] transition hover:border-cyan hover:text-cyan"
            >
              {EMAIL}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
              Social
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 font-display text-base font-700 uppercase text-[#F5EFE0] transition hover:border-violet hover:text-violet"
            >
              Facebook
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-white/30">
          ©PATIMAKORN SRICHAN 2026 — built with React &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}