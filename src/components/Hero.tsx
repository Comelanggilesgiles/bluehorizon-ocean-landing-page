import { Bubbles, SunRays } from "./Bubbles";
import { Reveal } from "./Reveal";

const HERO_IMG =
  "https://images.pexels.com/photos/17976451/pexels-photo-17976451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image + ocean gradients */}
      <div className="absolute inset-0 -z-20">
        <img
          src={HERO_IMG}
          alt="Sea turtle gliding through sunlit coral reef"
          className="h-full w-full scale-110 object-cover opacity-60 animate-drift"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(53,214,208,0.28),transparent_55%),linear-gradient(180deg,rgba(3,16,31,0.55)_0%,rgba(6,28,51,0.82)_45%,rgba(3,16,31,0.98)_100%)]" />
      <SunRays />
      <Bubbles count={26} />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 pt-32 pb-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-foam uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
              Protecting 30% of the ocean by 2030
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              The ocean is <span className="text-gradient">breathing</span>.
              <br />
              Let's keep it that way.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foam/70 sm:text-lg">
              BlueHorizon unites marine scientists, coastal communities and deep-sea
              explorers behind one mission: restore living reefs, map the unseen
              abyss, and give every wave a future.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-7 py-4 text-sm font-semibold text-abyss shadow-xl shadow-aqua/25 transition hover:-translate-y-0.5 hover:bg-foam"
              >
                Join the Expedition
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#depths"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foam/25 px-7 py-4 text-sm font-semibold text-foam transition hover:border-aqua hover:bg-white/5"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Dive the depths
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs text-foam/55">
              <div className="flex items-center gap-2">
                <Check /> 1,240 reef sites restored
              </div>
              <div className="flex items-center gap-2">
                <Check /> 62 research partners
              </div>
              <div className="flex items-center gap-2">
                <Check /> B-Corp certified
              </div>
            </div>
          </Reveal>
        </div>

        {/* Floating live-data card */}
        <Reveal delay={320} className="hidden lg:block">
          <div className="animate-floaty glass rounded-3xl p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.2em] text-foam/60 uppercase">Live buoy · Pacific 04</p>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-aqua">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" /> ONLINE
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { k: "Sea temp", v: "18.4°C", d: "+0.6" },
                { k: "pH level", v: "8.03", d: "-0.02" },
                { k: "Salinity", v: "34.7 ppt", d: "0.0" },
                { k: "Reef cover", v: "71%", d: "+3.2" },
              ].map((m) => (
                <div key={m.k} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[11px] text-foam/55">{m.k}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{m.v}</p>
                  <p className="text-[11px] text-aqua">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-20 w-full overflow-hidden rounded-2xl bg-white/5">
              <svg viewBox="0 0 300 80" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#35d6d0" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#35d6d0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,58 C30,40 50,66 80,50 C110,34 130,60 160,42 C190,24 215,52 245,34 C270,20 285,30 300,22 L300,80 L0,80 Z" fill="url(#spark)" />
                <path d="M0,58 C30,40 50,66 80,50 C110,34 130,60 160,42 C190,24 215,52 245,34 C270,20 285,30 300,22" fill="none" stroke="#9ff5ec" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#mission"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-foam/50 uppercase sm:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-aqua to-transparent" />
      </a>
    </section>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-aqua" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
