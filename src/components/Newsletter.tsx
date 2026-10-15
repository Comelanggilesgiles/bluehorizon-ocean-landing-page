import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Bubbles } from "./Bubbles";
import { cn } from "../utils/cn";

type Errors = { name?: string; email?: string; interest?: string };

const INTERESTS = ["Expeditions", "Volunteering", "Partnerships", "Donating"];

export function Newsletter() {
  const [form, setForm] = useState({ name: "", email: "", interest: "", consent: true });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.interest) e.interest = "Pick what you're most interested in.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: "", email: "", interest: "", consent: true });
  };

  return (
    <section id="join" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(53,214,208,0.16),transparent_70%)]" />
      <Bubbles count={12} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="glass grid gap-10 overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-aqua uppercase">Join the crew</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Get the <span className="text-gradient">Tideline</span> — field notes from the deep, twice a month.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foam/65">
              Expedition logs, new species discoveries, raw data drops and early access
              to berths. No spam, unsubscribe in one click.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foam/75">
              {["42,000+ ocean advocates", "Open data releases first", "Member-only live dive streams"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-aqua/15 text-aqua">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center rounded-3xl border border-aqua/30 bg-aqua/10 p-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-aqua text-abyss">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-white">Welcome aboard!</h3>
                <p className="mt-2 max-w-xs text-sm text-foam/70">
                  Check your inbox — your first Tideline dispatch is already swimming your way.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-aqua underline-offset-4 hover:underline">
                  Sign up another person
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-abyss/40 p-6 sm:p-8">
                <Field label="Full name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Marlow"
                    className={inputCls(!!errors.name)}
                  />
                </Field>

                <Field label="Email address" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@ocean.org"
                    className={inputCls(!!errors.email)}
                  />
                </Field>

                <Field label="I'm most interested in" error={errors.interest}>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setForm({ ...form, interest: i })}
                        className={cn(
                          "rounded-full px-4 py-2 text-xs font-semibold transition",
                          form.interest === i
                            ? "bg-aqua text-abyss"
                            : "border border-foam/20 text-foam/70 hover:border-aqua/50 hover:text-foam",
                        )}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </Field>

                <label className="mt-5 flex items-start gap-3 text-xs text-foam/55">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 accent-[#35d6d0]"
                  />
                  Send me occasional updates about expeditions and conservation campaigns.
                </label>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-2xl bg-aqua px-6 py-4 text-sm font-semibold text-abyss shadow-xl shadow-aqua/20 transition hover:-translate-y-0.5 hover:bg-foam"
                >
                  Dive in — it's free
                </button>
                <p className="mt-3 text-center text-[11px] text-foam/40">
                  We respect your inbox and the ocean. Both stay clean.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function inputCls(error: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-foam/30 outline-none transition",
    error ? "border-rose-400/70 focus:border-rose-400" : "border-white/10 focus:border-aqua focus:bg-white/10",
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 first:mt-0">
      <label className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-foam/55 uppercase">{label}</label>
      {children}
      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </div>
  );
}
