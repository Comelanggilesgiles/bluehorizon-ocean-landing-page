const COLUMNS = [
  { title: "Programs", links: ["Reef Regeneration", "Abyss Mapping", "Blue Corridors", "Plastic Recovery"] },
  { title: "Organisation", links: ["About us", "Annual report", "Careers", "Press kit"] },
  { title: "Resources", links: ["Open Ocean API", "Research papers", "Education hub", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-abyss/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-aqua to-teal">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-abyss" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 16c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
                  <path d="M2 20c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
                  <circle cx="12" cy="6" r="3" />
                </svg>
              </span>
              <span className="text-lg font-semibold">Blue<span className="text-gradient">Horizon</span></span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foam/55">
              A non-profit ocean research and restoration collective. Registered
              charity · 100% of membership funds goes to field work.
            </p>
            <div className="mt-6 flex gap-3">
              {["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", "M22 5.9a8 8 0 01-2.4.7 4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013.2 4.8a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.5a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z", "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 3.9 2.4 7.1 2.3c1.3-.1 1.7-.1 4.9-.1zm0 3.1a6.7 6.7 0 100 13.4 6.7 6.7 0 000-13.4zm0 11a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm6.9-11.2a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0z"].map((d, i) => (
                <a key={i} href="#top" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foam/60 transition hover:border-aqua hover:text-aqua">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-foam/45 uppercase">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm text-foam/70 transition hover:text-aqua">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-foam/40 sm:flex-row">
          <p>© {new Date().getFullYear()} BlueHorizon Ocean Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-aqua">Privacy</a>
            <a href="#top" className="hover:text-aqua">Terms</a>
            <a href="#top" className="hover:text-aqua">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
