import { useMemo } from "react";

/** Decorative rising bubbles + light rays for ocean ambience. */
export function Bubbles({ count = 22 }: { count?: number }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 4 + ((i * 7) % 22);
        return {
          id: i,
          size,
          left: ((i * 37) % 100) + Math.random() * 3,
          duration: 14 + ((i * 3) % 16),
          delay: -((i * 2.3) % 20),
          opacity: 0.25 + ((i % 5) * 0.12),
        };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SunRays() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="sunray left-[8%]" style={{ animationDelay: "0s" }} />
      <div className="sunray left-[26%] w-[70px]" style={{ animationDelay: "-2s" }} />
      <div className="sunray left-[52%] w-[180px]" style={{ animationDelay: "-4s" }} />
      <div className="sunray left-[74%] w-[90px]" style={{ animationDelay: "-6s" }} />
      <div className="sunray left-[90%] w-[140px]" style={{ animationDelay: "-1s" }} />
    </div>
  );
}

export function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`pointer-events-none relative h-24 w-full overflow-hidden ${className}`}>
      <svg
        className={`wave-band absolute inset-0 h-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64 C180,110 300,10 480,40 C660,70 780,120 960,96 C1140,72 1260,16 1440,48 L1440,120 L0,120 Z"
          fill="rgba(53,214,208,0.10)"
        />
        <path
          d="M0,80 C200,40 340,120 520,92 C700,64 820,12 1000,40 C1180,68 1300,104 1440,76 L1440,120 L0,120 Z"
          fill="rgba(11,43,74,0.6)"
        />
      </svg>
    </div>
  );
}
