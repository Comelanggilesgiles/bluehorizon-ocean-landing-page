import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const ZONES = [
  {
    name: "Sunlight Zone",
    range: "0 – 200 m",
    bg: "linear-gradient(180deg,#1aa5c9 0%,#0f6f83 100%)",
    life: ["Coral reefs", "Sea turtles", "Dolphins", "Kelp forests"],
    fact: "90% of all marine life lives here, fuelled by photosynthesis. It also absorbs roughly a quarter of human CO₂ emissions.",
    pressure: "1 – 20 atm",
    light: "100%",
  },
  {
    name: "Twilight Zone",
    range: "200 – 1,000 m",
    bg: "linear-gradient(180deg,#0f6f83 0%,#0b3f63 100%)",
    life: ["Lanternfish", "Swordfish", "Jellyfish", "Squid"],
    fact: "Home to the largest animal migration on Earth: billions of creatures rise each night to feed, then sink at dawn.",
    pressure: "20 – 100 atm",
    light: "1%",
  },
  {
    name: "Midnight Zone",
    range: "1,000 – 4,000 m",
    bg: "linear-gradient(180deg,#0b2b4a 0%,#061c33 100%)",
    life: ["Anglerfish", "Vampire squid", "Gulper eel", "Sperm whales"],
    fact: "Sunlight never arrives. Over 90% of species here create their own light through bioluminescence.",
    pressure: "100 – 400 atm",
    light: "0%",
  },
  {
    name: "The Abyss",
    range: "4,000 – 11,000 m",
    bg: "linear-gradient(180deg,#061c33 0%,#02080f 100%)",
    life: ["Hydrothermal vents", "Sea pigs", "Snailfish", "Tube worms"],
    fact: "Less of the abyssal seafloor is mapped in high resolution than the surface of Mars. BlueHorizon has charted 310,000 km² so far.",
    pressure: "400 – 1,100 atm",
    light: "0%",
  },
];

export function DepthExplorer() {
  const [idx, setIdx] = useState(0);
  const zone = ZONES[idx];
  const depthPercent = useMemo(() => ((idx + 1) / ZONES.length) * 100, [idx]);

  return (
    <section id="depths" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-aqua uppercase">Interactive</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Descend through the <span className="text-gradient">water column</span>
          </h2>
          <p className="mt-5 text-foam/65">
            Drag the dive slider or pick a layer to explore what lives — and what we
            still don't know — at every depth of the ocean.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Slider column */}
          <Reveal className="order-2 lg:order-1">
            <div className="glass h-full rounded-3xl p-6">
              <label htmlFor="dive" className="text-[11px] font-semibold tracking-[0.2em] text-foam/55 uppercase">
                Dive depth
              </label>
              <input
                id="dive"
                type="range"
                min={0}
                max={ZONES.length - 1}
                step={1}
                value={idx}
                onChange={(e) => setIdx(Number(e.target.value))}
                className="mt-5 w-full accent-[#35d6d0]"
              />
              <p className="mt-3 text-3xl font-semibold text-white">{zone.range}</p>
              <p className="text-sm text-aqua">{zone.name}</p>

              <ul className="mt-7 space-y-2">
                {ZONES.map((z, i) => (
                  <li key={z.name}>
                    <button
                      onClick={() => setIdx(i)}
                      className={cn(
                        "w-full rounded-2xl px-4 py-3 text-left text-sm transition",
                        i === idx
                          ? "bg-aqua text-abyss font-semibold shadow-lg shadow-aqua/20"
                          : "bg-white/5 text-foam/70 hover:bg-white/10",
                      )}
                    >
                      <span className="block">{z.name}</span>
                      <span className={cn("text-xs", i === idx ? "text-abyss/70" : "text-foam/45")}>{z.range}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Visual column */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 p-7 transition-all duration-700 sm:p-10"
              style={{ background: zone.bg, minHeight: 430 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(90%_60%_at_20%_0%,rgba(255,255,255,0.22),transparent_60%)]" />

              {/* depth gauge */}
              <div className="absolute top-0 right-7 bottom-0 hidden w-px bg-white/20 sm:block">
                <span
                  className="absolute -left-[5px] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.5)] transition-all duration-700"
                  style={{ top: `${depthPercent - 6}%` }}
                />
              </div>

              <div className="relative max-w-xl">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-white/70 uppercase">{zone.range}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{zone.name}</h3>
                <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">{zone.fact}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {zone.life.map((l) => (
                    <span key={l} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs text-white backdrop-blur">
                      {l}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid max-w-sm grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-black/25 p-4 backdrop-blur">
                    <p className="text-[11px] text-white/60">Pressure</p>
                    <p className="mt-1 text-lg font-semibold text-white">{zone.pressure}</p>
                  </div>
                  <div className="rounded-2xl bg-black/25 p-4 backdrop-blur">
                    <p className="text-[11px] text-white/60">Sunlight</p>
                    <p className="mt-1 text-lg font-semibold text-white">{zone.light}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
