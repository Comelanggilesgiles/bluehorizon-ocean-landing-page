import { Reveal } from "./Reveal";

type Feature = {
  title: string;
  body: string;
  tag: string;
  icon: React.ReactNode;
};

const ICON = "h-6 w-6";

const FEATURES: Feature[] = [
  {
    title: "Deep Dive Research",
    tag: "Science",
    body: "Crewed submersibles and autonomous gliders map hydrothermal vents down to 6,000 m, streaming open data to every lab on earth.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h3" /><path d="M18 12h3" />
        <ellipse cx="12" cy="12" rx="6" ry="5" />
        <circle cx="10" cy="12" r="1.6" /><path d="M12 7V4" />
      </svg>
    ),
  },
  {
    title: "Marine Life Guardianship",
    tag: "Wildlife",
    body: "Satellite tagging protects 38 migratory species — from leatherbacks to blue whales — across 12 million km² of blue corridor.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13c3.5-6 10-8 14-4 2 2 3 4 4 5-3 4-9 6-13 4" />
        <path d="M8 9l-3-3v6" /><circle cx="15" cy="11" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Operations",
    tag: "Climate",
    body: "Solar-electric research vessels, zero single-use plastic at sea and verified carbon-negative logistics on every expedition.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-5-3-8-6.5-8-11a8 8 0 0116 0c0 4.5-3 8-8 11z" />
        <path d="M12 21V9" /><path d="M12 13l3-3" /><path d="M12 16l-3-3" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    tag: "Network",
    body: "Field stations in 27 countries connect coastal communities, fishers and policymakers through one shared ocean dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18" />
        <path d="M12 3c2.6 2.8 4 5.8 4 9s-1.4 6.2-4 9c-2.6-2.8-4-5.8-4-9s1.4-6.2 4-9z" />
      </svg>
    ),
  },
  {
    title: "Reef Regeneration",
    tag: "Restoration",
    body: "Coral micro-fragmentation nurseries grow heat-resilient genotypes 25× faster, replanted by trained local divers.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V11" /><path d="M12 13c0-3 2-5 5-5" /><path d="M12 16c0-3-2-5-5-5" />
        <path d="M12 11a3 3 0 100-6 3 3 0 000 6z" /><path d="M5 21h14" />
      </svg>
    ),
  },
  {
    title: "Open Ocean Data",
    tag: "Technology",
    body: "A public API serving 4.2 billion sensor readings — temperature, pH, acoustics — free for researchers and classrooms alike.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="mission" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-aqua uppercase">What we do</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Six currents, <span className="text-gradient">one mission</span>
          </h2>
          <p className="mt-5 text-foam/65">
            Every program we run feeds the next — research funds restoration, restoration
            trains communities, communities protect the water that feeds us all.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal as="article" key={f.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1.5 hover:border-aqua/40 hover:bg-white/[0.06]">
                <div className="absolute -top-24 -right-20 h-48 w-48 rounded-full bg-aqua/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua/25 to-teal/20 text-aqua ring-1 ring-aqua/25">
                    {f.icon}
                  </span>
                  <p className="mt-6 text-[10px] font-semibold tracking-[0.22em] text-foam/45 uppercase">{f.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foam/65">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
