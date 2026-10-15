import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Mission", href: "#mission" },
  { label: "Depths", href: "#depths" },
  { label: "Impact", href: "#impact" },
  { label: "Expeditions", href: "#expeditions" },
  { label: "Join", href: "#join" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-abyss/80 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl" : "py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-aqua to-teal shadow-lg shadow-aqua/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-abyss" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 16c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
              <path d="M2 20c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
              <circle cx="12" cy="6" r="3" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Blue<span className="text-gradient">Horizon</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foam/70 transition hover:text-foam after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-aqua after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#join"
            className="rounded-full bg-aqua px-5 py-2.5 text-sm font-semibold text-abyss shadow-lg shadow-aqua/25 transition hover:-translate-y-0.5 hover:bg-foam"
          >
            Adopt a Reef
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-foam/20 text-foam md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </nav>

      <div
        className={cn(
          "mx-5 overflow-hidden rounded-2xl transition-all duration-400 md:hidden",
          open ? "mt-3 max-h-96 glass" : "max-h-0",
        )}
      >
        <ul className="flex flex-col p-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foam/80 transition hover:bg-white/5 hover:text-foam"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              onClick={() => setOpen(false)}
              href="#join"
              className="block rounded-xl bg-aqua px-4 py-3 text-center text-sm font-semibold text-abyss"
            >
              Adopt a Reef
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
