import { useState } from "react";

const LINKS = [
  { label: "Activities", href: "#activities" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-bg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-2xl font-700 tracking-tight text-ink">
          Portfolio
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-10 sm:flex">
          <ul className="flex items-center gap-8 font-mono text-xs font-medium uppercase tracking-widest text-inksoft">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-violet">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="border border-ink px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-white"
          >
            Hire Me
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="เปิดเมนู"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink sm:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* thin accent line, right edge */}
      <span className="absolute right-0 top-0 h-full w-[3px] bg-amber" />

      {/* mobile dropdown */}
      {open && (
        <div className="border-t border-ink/10 bg-bg px-6 py-5 sm:hidden">
          <ul className="flex flex-col gap-4 font-mono text-xs font-medium uppercase tracking-widest text-inksoft">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition hover:text-violet"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block border border-ink px-5 py-2.5 text-center font-semibold text-ink"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}