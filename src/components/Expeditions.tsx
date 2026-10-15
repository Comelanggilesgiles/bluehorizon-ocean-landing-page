import { Reveal } from "./Reveal";

const TRIPS = [
  {
    title: "Coral Triangle Restoration",
    place: "North Sulawesi, Indonesia",
    date: "Mar 2026 · 12 days",
    img: "https://images.pexels.com/photos/16174390/pexels-photo-16174390.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    spots: "6 berths left",
  },
  {
    title: "Turtle Corridor Tagging",
    place: "Great Barrier Reef, Australia",
    date: "Jun 2026 · 9 days",
    img: "https://images.pexels.com/photos/13010773/pexels-photo-13010773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    spots: "Waitlist",
  },
  {
    title: "Pacific Abyss Mapping",
    place: "Kona Deep, Hawai'i",
    date: "Sep 2026 · 16 days",
    img: "https://images.pexels.com/photos/31740974/pexels-photo-31740974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    spots: "10 berths left",
  },
];

export function Expeditions() {
  return (
    <section id="expeditions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-aqua uppercase">Field work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Sail with the <span className="text-gradient">science crew</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foam/60">
            Citizen scientists join every voyage. No diving licence required — we
            train you on board aboard the solar-electric RV Horizon.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TRIPS.map((t, i) => (
            <Reveal as="article" key={t.title} delay={i * 90}>
              <div className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full bg-aqua/90 px-3 py-1 text-[11px] font-semibold text-abyss">{t.spots}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-foam/70">{t.place}</p>
                  <p className="mt-3 text-xs tracking-wide text-foam/50 uppercase">{t.date}</p>
                  <a
                    href="#join"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aqua opacity-0 transition group-hover:opacity-100"
                  >
                    Reserve a berth
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <figure className="glass mt-14 rounded-3xl p-8 sm:p-12">
            <blockquote className="text-xl leading-relaxed font-light text-foam sm:text-2xl">
              “In fourteen days we planted 3,800 coral fragments and watched a reef we
              thought was gone start clicking with life again. BlueHorizon doesn't just
              measure the ocean — they give it back.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-aqua to-teal text-sm font-bold text-abyss">
                MR
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Dr. Maya Reyes</p>
                <p className="text-xs text-foam/55">Marine Biologist, Pacific Reef Institute</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
