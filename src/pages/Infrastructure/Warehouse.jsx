// WarehousingHero.jsx
import React, { useEffect, useState, useRef } from "react";

const SLIDES = [
  { src: "/assets/chennai.png", alt: "Modern warehouse aisles", label: "Chennai" },
  { src: "/assets/karur.png", alt: "Stockyard forklifts", label: "Karur" },
  { src: "/assets/coimbatore.png", alt: "Loading dock operations", label: "Coimbatore" },
  { src: "/assets/tirunelveli.png", alt: "Inventory scanning", label: "Tirunelveli" },
];

export default function Warehouse() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // autoplay every 4s
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section className="w-full bg-white text-neutral-900" id="warehouse">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* LEFT: SLIDER */}
        <aside
          className="relative lg:col-span-5 bg-neutral-100 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-full">
            {SLIDES.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className={[
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  i === idx ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Floating pill (dynamic city name) */}
          <div className="absolute left-4 top-4">
            <span className="select-none rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-500">
              {SLIDES[idx].label}
            </span>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  i === idx ? "bg-neutral-800 w-3" : "bg-neutral-300",
                ].join(" ")}
              />
            ))}
          </div>
        </aside>

        {/* RIGHT: COPY */}
        <div className="lg:col-span-7 px-6 sm:px-10 py-10">
          <div className="max-w-3xl">
            <h1 className="text-[28px] leading-[1.25] tracking-wide sm:text-[36px]">
              Efficient <span className="font-extrabold">Warehousing</span>,<br />
              Smarter <span className="font-extrabold">Stockyards</span>
              <br />
              Management<span className="align-super -translate-y-1 text-[0.8em]">"</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600">
              We provide secure warehouses and well-managed stockyards designed to streamline
              storage, handling, and distribution. With modern facilities and efficient processes,
              we help businesses optimize inventory, reduce costs, and ensure smooth supply chain
              operations.
            </p>

            <ul className="mt-6 flex flex-wrap gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <li
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-blue-600/30 bg-blue-50"
                >
                  <NetworkMiniIcon className="h-5 w-5 text-blue-700" />
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
            >
              LEARN MORE
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkMiniIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="4" width="6" height="6" rx="1.2" />
        <rect x="4" y="14" width="6" height="6" rx="1.2" />
        <rect x="14" y="14" width="6" height="6" rx="1.2" />
        <path d="M12 10v2M7 14v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" />
      </g>
    </svg>
  );
}
