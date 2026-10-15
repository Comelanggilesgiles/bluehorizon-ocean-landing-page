import { useCountUp, useReveal } from "../hooks/useReveal";
import { Reveal } from "./Reveal";
import { Bubbles } from "./Bubbles";

const STATS = [
  { value: 1240, suffix: "+", label: "Reef sites restored", sub: "across 27 countries" },
  { value: 310000, suffix: " km²", label: "Seafloor mapped", sub: "open-sourced bathymetry" },
  { value: 38, suffix: "", label: "Species protected", sub: "via blue corridors" },
  { value: 4.2, suffix: "B", label: "Sensor readings", sub: "free public API", decimals: 1 },
];

function formatNumber(n: number, decimals = 0) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StatCard({ stat, delay }: { stat: (typeof STATS)[number] & { decimals?: number }; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const value = useCountUp(stat.value, visible, 1900);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} glass rounded-3xl p-7 text-center sm:text-left`}
    >
      <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {formatNumber(value, stat.decimals ?? 0)}
        <span className="text-gradient">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm font-semibold text-foam">{stat.label}</p>
      <p className="mt-1 text-xs text-foam/50">{stat.sub}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="impact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(15,111,131,0.18)_40%,transparent)]" />
      <Bubbles count={14} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-aqua uppercase">Impact so far</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Numbers that <span className="text-gradient">rise with the tide</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 90} />
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-navy/70 to-deep/60 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                2030 goal: 30% of the ocean fully protected
              </h3>
              <p className="mt-3 max-w-xl text-sm text-foam/65">
                We're currently at 8.4% globally. Every membership funds a square
                kilometre of monitored marine protected area for a full year.
              </p>
              <div className="mt-7">
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-teal via-aqua to-foam shadow-[0_0_20px_rgba(53,214,208,0.6)]" />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-foam/50">
                  <span>8.4% protected today</span>
                  <span>30% by 2030</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#join" className="rounded-2xl bg-aqua px-6 py-4 text-center text-sm font-semibold text-abyss transition hover:bg-foam">
                Become a member
              </a>
              <a href="#expeditions" className="rounded-2xl border border-foam/25 px-6 py-4 text-center text-sm font-semibold text-foam transition hover:bg-white/5">
                See 2026 expeditions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
